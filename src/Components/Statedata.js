import React , {Component} from 'react';
import {Button,Accordion,Card,Table} from 'react-bootstrap';
import Axios from 'axios';

class Statedata extends Component{
    constructor(){
        super();
        this.state = {
            stateData : {
                
            }
        }
    }

    componentDidMount(){
        Axios.get("https://api.covid19india.org/state_district_wise.json").then(response=>{
            this.setState({stateData:response.data});
        })
    }

    render(){
        let keys = Object.keys(this.state.stateData);
        return(
            <div className="container-fluid">
                <Accordion defaultActiveKey="0">
                    {
                        keys.map((itm, ky)=>{
                            let districts = this.state.stateData[itm].districtData;
                            let district_keys = Object.keys(districts);
                            let total_active =0;
                            let total_confirmed = 0;
                            let total_deaths = 0;
                            let total_recover = 0;

                            let district_list = [];
                            for(let x in districts){
                                total_active += districts[x].active;
                                total_confirmed += districts[x].confirmed;
                                total_deaths += districts[x].deceased;
                                total_recover += districts[x].recovered;
                                let ob = districts[x];
                                ob["district_name"] = x;
                                district_list.push(ob);
                            }
                            
                            return(
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey={ky}>
                                            {itm} <span className="btn-dark p-1 mr-2 rounded-3"> Total cases</span> <span className="btn-dark p-1 mr-2 rounded-3"> Confirmed - {total_confirmed} </span> <span className="btn-dark p-1 mr-2 rounded-3"> Active - {total_active}</span><span className="btn-dark p-1 mr-2 rounded-3"> Recovered - {total_recover}</span> <span className="btn-dark p-1 mr-2 rounded-3">Death - {total_deaths}</span>
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey={ky}>
                                        <Card.Body>
                                            <Table striped bordered hover>
                                                <thead>
                                                    <tr>
                                                        <td>District</td>
                                                        <td>Confirmed</td>
                                                        <td>Active</td>
                                                        <td>Recovered</td>
                                                        <td>Deaths</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                   {
                                                       district_list.map((itm,key)=>{
                                                            return(
                                                                <tr>
                                                                    <td>{itm.district_name}</td>
                                                                    <td>{itm.confirmed}</td>
                                                                    <td>{itm.active}</td>
                                                                    <td>{itm.recovered}</td>
                                                                    <td>{itm.deceased}</td>
                                                                </tr>
                                                            )
                                                       })
                                                   }
                                                </tbody>
                                            </Table>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            ) 
                            
                            
                        })
                    }
                    
                    
                </Accordion>
            </div>
        )
    }
}
export default Statedata;