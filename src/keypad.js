import React from 'react';

class Keypad extends React.Component {

    createKeypad = () => {

        let sign=['1','2','3','4','5','6','7','8','9','+','-','*','/','=','cls'];
        let rows= [];
        let x=0;

        for(let i=0; i<5; i++){
            let columns = [];
            for (let j = 0; j < 3; j++)
                columns.push(<button key={++x} id={`Column${x}`} value={sign[x-1]} className="col-4" onClick={this.props.onClick}>{sign[x-1]}</button>);
            rows.push(<div key={i} id={`Row${i}`} className="row">{columns}</div>)
        }

        return rows;
    }
    
    render(){
        return (
           <div className="text-center">
                {this.createKeypad()}
           </div>
        )
    }
}

export default Keypad;