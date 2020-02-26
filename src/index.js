import React from 'react';
import ReactDOM from 'react-dom';

import Keypad from './keypad';

class App extends React.Component{

    constructor(props){
        super(props);
        this.state= {val: ''};
    }

    Calculation= (string)=>{

        try {
            return eval(string); 
        } catch (e) {
            if (e instanceof SyntaxError) {
                return "Error";
            }
        }
    }

    onClick= (event)=> {

        if(event.target.value==='=' && this.state.val==="" )
            this.setState({val: ''});
        else if(event.target.value==='cls' || this.state.val==="Error")
            this.setState({val: ''});
        else if(event.target.value==='=')
            this.setState({val: this.Calculation(this.state.val)});
        else
            this.setState({val: this.state.val+event.target.value});
    }

    render() {
        return (
            <div className="container text-center">
                <h2>Calculator</h2>
                <div className="container" id="outer">
                    <div className="text-left" style={{paddingTop:'3vh'}}>
                        <h4 style={{color:'white'}}>Casio</h4>
                    </div>
                    <div style={{paddingBottom:'1vh',paddingTop:'5vh'}}>
                        <div className="text-center display" style={{backgroundColor:'white',borderRadius:'1vw'}}>
                            <h4>{this.state.val}</h4>
                        </div>
                    </div>

                    <Keypad onClick={this.onClick} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
