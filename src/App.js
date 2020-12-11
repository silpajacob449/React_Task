import React , {Component} from 'react';
import {
  BrowserRouter as Router ,
  Link ,
  Route,
  Switch
} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Conditional from './Components/Conditional';
import Animation from './Components/Animation';
import Modalextends from './Components/Modal';
import Acdn from './Components/Accordion';
import DateComponent from './Components/Date';
import Footer from './Components/Footer';
import './App.css';
class App extends Component{
  constructor(){
    super();
    
  }

  render(){
    return(
  

        <Router>
        <Header></Header>
        <div className="main">
        <div className="topRow">
                <span className="currentDate">Today's date: <DateComponent></DateComponent></span>
            </div>
          <Switch>  
            <Route exact path="/">
           
              <Home></Home>
            </Route>
            <Route path="/Home">
              <Home></Home>
            </Route>
            <Route path="/Conditional">
              <Conditional></Conditional>
            </Route>
            <Route path="/Animation">
              <Animation></Animation>
            </Route>
            <Route path="/Modal">
              <Modalextends></Modalextends>
            </Route>
            <Route path="/Accordion">
              <Acdn></Acdn>
            </Route>
          </Switch>
          
          </div>
          
          <Footer></Footer>
        </Router>
       
    )
  }
}

export default App;
