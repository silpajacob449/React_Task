import React , {Component} from 'react';
import {Card} from 'react-bootstrap';
import Statedata from './Statedata';
import Axios from 'axios';

class India extends Component{
    constructor(){
        super();
        this.state={
            countryData:[]
        }

    }
    componentDidMount(){
        Axios.get('https://corona.lmao.ninja/v2/countries/india').then(response=>{
            this.setState({countryData:response.data});
            
        })
    }
    
    render(){
        return(
            <div className="container-fluid">
            <div className="row">
               <div className="col-md-12">
                   <img src="https://www.countryflags.io/in/shiny/64.png"/>
                   <h3>INDIA</h3>
               </div>
               <div className="col-md-12 tiles">
                   <div className="row">
                        <div className="col-md-3">
                            <Card  className="badge badge-primary">
                   
                    <Card.Body className="text-center">
                        <Card.Title>TOTAL CASES</Card.Title>
                        <h3>{this.state.countryData.cases}</h3>
                        
    
                    </Card.Body>
                </Card>
                        </div>
                        <div className="col-md-3">
                            <Card className="badge badge-warning">
                   
                    <Card.Body className="text-center">
                        <Card.Title>One Case Per People </Card.Title>
                            <h3>{this.state.countryData.oneCasePerPeople}</h3>
                        
    
                    </Card.Body>
                </Card>
                        </div>
                        <div className="col-md-3">
                            <Card className="badge badge-success">
                   
                            <Card.Body className="text-center">
                                <Card.Title>Recovered</Card.Title>
                                    <h3>{this.state.countryData.recovered}</h3>
                                    
    
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card className="badge badge-danger">
                   
                                <Card.Body className="text-center">
                                    <Card.Title>Total Death</Card.Title>
                                    <h3>{this.state.countryData.deaths}</h3>
                                    
    
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <Statedata></Statedata>
                </div>
            </div>
            </div>
        );
    }
}
export default India;