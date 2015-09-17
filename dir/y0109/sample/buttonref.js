/**
 * Created by hound on 17.09.2015.
 */

import React from 'react'
import Action from './SetPageAction'

export default React.createClass({
    onClick(){
        Action.setPage(this.props.pagevalue)
    },
    render(){
        return (
            <button style={{width:25,height:25,marginLeft:4}}
                    onClick={this.onClick}
                >{this.props.pagevalue}
            </button>
        )
    }
})