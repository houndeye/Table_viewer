/**
 * Created by hound on 15.09.2015.
 */

import React from 'react'
import RB from 'react_bootstrap'
import Buttonref from './buttonref'
import Reflux from 'reflux'
import SetPageAction from './SetPageAction'
import SetReferenceStore from './setReferenceStore'

var Button = RB.Button;
var buttReffCount ;

export default React.createClass({
    mixins:[Reflux.connect(SetReferenceStore)],
    Tofirst(){
        this.state.refferences = 1;
        SetPageAction.setPage(this.state.refferences);
    },
    Movedown(){
        this.state.refferences --;
        if(this.state.refferences<1)
            this.state.refferences++;
        SetPageAction.setPage(this.state.refferences);
    },
    MoveUp(){
        this.state.refferences++;
        if(this.state.refferences>buttReffCount)
            this.state.refferences--;
        SetPageAction.setPage(this.state.refferences);
    },
    Tolast(){
        this.state.refferences = buttReffCount;
        SetPageAction.setPage(this.state.refferences);
    },
    render(){
        var b = [];
        for( var j=1;j<this.props.masslength/this.props.showblocks + 1;j++){
            b.push( <Buttonref key={j} pagevalue={j} /> )
            buttReffCount = b.length;
        };
        return(
            <div>
                {buttReffCount==1?null:(<Button onClick={this.Tofirst}><span>{'<<'}</span></Button>)}
                {buttReffCount==1?null:(<Button onClick={this.Movedown} ><span>Prev</span></Button>)}

                {buttReffCount==1?null:b[this.state.refferences-2]}
                {buttReffCount==1?null:b[this.state.refferences-1]}
                {buttReffCount==1?null:b[this.state.refferences]}

                {buttReffCount==1?null:(<Button onClick={this.MoveUp} style={{marginLeft:4}}><span>Next</span></Button>)}
                {buttReffCount==1?null:(<Button onClick={this.Tolast} ><span>{'>>'}</span></Button>)}
            </div>
        )
    }
});