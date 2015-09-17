/**
 * Created by hound on 15.09.2015.
 */

import React from 'react'
import RB from 'react_bootstrap'
import Buttonref from './buttonref'
import Reflux from 'reflux'

var Button = RB.Button;

export default React.createClass({
    getInitialState(){
        return {
            page: 1
        }
    },
    setpage(value) {
        this.setState({
            page: value
        });
    },
    render(){
        var b = [];
        for( var j=1;j<this.props.masslength/this.props.showblocks + 1;j++){
            b.push( <Buttonref key={j} pagevalue={j}/> )

        };
        return(
            <div>
                <Button >Prev</Button>
                {b}

                <Button style={{marginLeft:4}}>Next</Button>
            </div>

        )
    }
});