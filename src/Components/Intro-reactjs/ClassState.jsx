import React from "react";

// State dalam class component
class ClassComponent extends React.Component {
        state = {
            value: 0
        }

    addPlus = () => {
        this.setState({value: this.state.value + 1})
    }
    addMinus = () => {
        if (this.state.value > 0){
            this.setState({value: this.state.value - 1})
        }
    }
    render(){
        return (
            <div>
                <button onClick={this.addMinus}> - </button>
                <span> {` `} {this.state.value} {` `}</span>
                <button onClick={this.addPlus}> + </button>
            </div>
        )
    }
}

export default ClassComponent;