/**
 * Created by hound on 17.09.2015.
 */

import React from 'react'
import RB from 'react_bootstrap'

import SetPageAction from './SetPageAction'
import SetReferenceAction from './SetReferenceAction'

var Button = RB.Button

export default React.createClass({
    componentWillMount(){

    },
    onClick(){
        SetPageAction.setPage(this.props.pagevalue);
        SetReferenceAction.currentPage(this.props.pagevalue);
    },
    render(){
        return (
            <Button style={{width:34,height:34,marginLeft:4}}
                    onClick={this.onClick}
                >{this.props.pagevalue}
            </Button>
        )
    }
})