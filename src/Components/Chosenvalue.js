import React , {Component} from 'react';
import ReactDOM from 'react-dom';

class Chosenvalue extends React.Component {
    constructor(props){
        super(props);
        const action= localStorage.getItem('curAction');
         this.state={      currentAction:action};

    }
    componentDidMount(){
        const action= localStorage.getItem('curAction');
        
         this.setState({      currentAction: action    });
        
    }
  
  render() {

    return (
      <p>
        <div className="yourChoice">
            You clicked <strong>{this.state.currentAction}</strong> in the homepage
        </div>
      </p>
    );
  }
  }

export default Chosenvalue;