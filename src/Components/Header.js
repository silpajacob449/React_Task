import React , {Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';

class Header extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="topNav">
                <div className="bannerTitle">React Assessment Task</div>
                <nav className="navBar">
                    <span><NavLink activeClassName="active"  to="/Home">Home</NavLink></span>
                    <span><NavLink activeClassName="active"  to="/Conditional">Conditional</NavLink></span>
                    <span><NavLink activeClassName="active" to="/Animation">Animation</NavLink></span>
                    <span><NavLink  activeClassName="active" to="/Modal">Modal</NavLink></span>
                    <span><NavLink  activeClassName="active" to="/Accordion">Accordion</NavLink></span>
                </nav>
            </div>
        )
    }
}
export default Header;