/**
 * Created by hound on 15.09.2015.
 */

import React from 'react'
import RB from 'react_bootstrap'

import Element from './Element'

export default React.createClass({
    render(){
        return(
            <tr>
                <td className="rightborder"> <Element inner={this.props.data.kind} showcount={this.props.showcount} keys={this.props.keys.kind}/></td>
                <td className="rightborder"> <Element inner={this.props.data.price.toString()} showcount={this.props.showcount} keys={this.props.keys.price} /></td>
                <td className="rightborder"> <Element inner={this.props.data.region} showcount={this.props.showcount} keys={this.props.keys.region}/></td>
                <td > <Element inner={this.props.data.street} showcount={this.props.showcount} keys={this.props.keys.street}/></td>
            </tr>
        )
    }
});