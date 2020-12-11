import React , {Component} from 'react';
import ReactDOM from 'react-dom';
class Home extends Component{
    constructor(){
        super();

        
    }
    componentDidMount(){
        const action= localStorage.getItem('curAction');
         this.setState({currentAction: action    });
    }

    sureChoice(){
        // alert("sure clicked");
      
        localStorage.setItem('curAction', 'sure');
    }
    letmetryChoice(){
        localStorage.setItem('curAction', 'Let me try!');
        
    }
    sorryicantChoice(){
        localStorage.setItem('curAction', 'Sorry! I cant');
    }
    
    render(){
        return(
            <React.Fragment>
            <h3>Following things are mandatory</h3>
            <ul>
                <li>Styles and color should exactly match</li>
                <li>All functionalities including this page should work exactly</li>
                <li>In conditional page, className should not be used. Should be achieved using inline styles</li>
                <li>In conditional page, right now the entire li tag is getting highlighted for active products. You should add logic to highlight only text. You should not introduce new tags like span, div, etc. You should handle this using pure css.</li>
                <li>In animation page, currently we have add animation only. Modify it to make it toggle animation so that it can be transformed back to original state on clicking second time</li>
				<li>In modal page, modal should close on clicking anywhere outside modal too.</li>
				<li>In accordion page, animation should also work along with accordion functionality.</li>
				<li>Current date should be displayed only in Home page, Animation page and Modal page</li>
				<li>Choice chosen in the homepage should be displayed in all other pages. Choices value can be "Sure, Let me try, I can't"</li>
            </ul>
            <div className="rating">
                <div className="query">Will you able to complete this task?</div>
                <div className="choices">
                    <button className="btn btn-success" name='Sure!' onClick={this.sureChoice}>Sure!</button>
                    <button className="btn btn-warning" value = 'Let me try!' onClick={this.letmetryChoice}>Let me try!</button>
                    <button className="btn btn-danger" value = 'Sorry! I cant' onClick={this.sorryicantChoice}>Sorry! I can't</button>
                </div>
            </div>
            </React.Fragment>
        )
    }
    
}
export default Home;