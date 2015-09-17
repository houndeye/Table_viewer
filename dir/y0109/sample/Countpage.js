/**
 * Created by hound on 15.09.2015.
 */

import React from 'react'
import RB from 'react_bootstrap'

var Input = RB.Input;


exports.Class = React.createClass({
    getInitialState() {
        return {
            value:10
        };
    },
    validationState() {
        if (this.state.value > 0 && this.state.value <=25) {
            return 'success';
        }
        else return 'error';
    },
    handleChange() {

        if(this.refs.input.getValue()<1){
            this.setState({
                value: 1
            });
            this.props.change(1);
        }
        else
        if(this.refs.input.getValue()>25){
            this.setState({
                value: 25
            });
            this.props.change(25);
        }
        else
        {
            this.setState({
                value: this.refs.input.getValue()
            });
            this.props.change(this.refs.input.getValue());
        }
    },
    render(){

        return (<div style={{width:70}}><Input
            type="number"
            value={this.state.value}
            placeholder="Enter text"
            //label="Working example with validation"
            //help="Input number less than 25"
            bsStyle={this.validationState()}
            //hasFeedback                  // іконка
            ref="input"
            groupClassName="group-class"
            labelClassName="label-class"
            onChange={this.handleChange}
            />
        </div>)
    }
})

