/**
 * Created by hound on 15.09.2015.
 */
import React from 'react'
import RB from 'react_bootstrap'
import Reflux from 'reflux'

import Block from './Block'
import Countpage from './Countpage'                     // кількість блоків на сторінці
import Pagereferences from './Pagereferences'           // переходи по сторінках
import Store from './setPageStore'


var Table = RB.Table;
var Button = RB.Button;


export default React.createClass({
    mixins:[Reflux.connect(Store)],
    getInitialState(){
        return{
            size: 10
        }
    },
    change(value){
        this.setState({
            size:value
        });

    },
    render(){
        var result = [];
        var pages = this.state.pagevalue||1;
        var newobj = this.props.massive.map(function(item){
            return {kind:item[0],
                price: item[1],
                region:item[2],
                street:item[3]}
        });
        var res = newobj.map(function (e) {
            return [e.kind,e.price,e.region,e.street]
        });
        if(this.state.size>this.props.massive.length){
            this.state.size = this.props.massive.length
        }
        //console.log(res[0][0])
        for( var j=0 ;j<this.state.size;j++){   // j-сторінка, обмеження - кількість зрендерених блоків
            var index = (pages-1)*this.state.size + j;
            if(res.length>index){
                result.push( <Block key={index} data={{
                                        kind: res[index][0],
                                        price: res[index][1],
                                        region: res[index][2],
                                        street: res[index][3]
                                    }} keys={this.props.keys}  showcount={this.props.showcount} />)
            };
        };
        return(<div >
            <Countpage.Class change={this.change} pagescount={this.props.massive.length}/>
            <Table striped bordered condensed hover>
                <thead>
                <tr>
                    <th className="rightborder"><span href="#">Kind</span></th>
                    <th className="rightborder"><span href="#">Price</span></th>
                    <th className="rightborder"><spana href="#">Region</spana></th>
                    <th ><span href="#">Street</span></th>
                </tr>
                </thead>
                <tbody>
                {result}
                </tbody>
            </Table>
            <Pagereferences masslength={this.props.massive.length} showblocks={this.state.size} />
        </div>)
    }
});
