import React , {Component} from 'react';
import Axios from 'axios';
import {Table} from 'react-bootstrap';
class World extends Component{
    
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        Axios.get("https://corona.lmao.ninja/v2/countries").then(response=>{
            this.setState({data:response.data});
        })
    }

    render(){
        return(
            <div className="row">
                <div className = "col-md-12">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <td>Country</td>
                                <td>Total Cases</td>
                                <td>Recovered</td>
                                <td>Death</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.data.map((itm,ky)=>{
                                    return(
                                    <tr>
                                       
                                        <td><img style={{maxWidth :'35px', marginRight:'20px'}} src={itm.countryInfo.flag}/>{itm.country}</td>
                                        <td>{itm.cases}</td>
                                        <td>{itm.recovered}</td>
                                        <td>{itm.deaths}</td>
                                    </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }

}
export default World;