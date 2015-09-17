/**
 * Created by hound on 14.09.2015.
 */
import React from 'react'
import RB from 'react_bootstrap'


var Overlay = RB.Overlay;

export default React.createClass({

    KeyRemove(string,key){                           //видялає частину стрічки по ключу
        return (string = string.replace(key,''));
    },
    getShorter (string, element){                      // Скорочений запис інформації
        var short = string.substr(0,element);
        if(short.length<string.length)
            return short+'...';
        else
            return short;
    },
    getInitialState(){
        return {show: false,
            inner : this.KeyRemove(this.props.inner,this.props.keys)
        };
    },
    toggle(){
        this.setState({ show: !this.state.show });
    },
    render(){
        const style = {
            position: 'absolute',
            backgroundColor: '#EEE',
            boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
            border: '1px solid #CCC',
            borderRadius: 3,
            marginLeft: 5,
            marginTop: -5,
            paddingLeft: 5,
            cursor:"text",
            zIndex:50
        };
        return (
            <div style={{position: 'relative',cursor:'pointer' }}>
                <a ref='target' onClick={this.state.inner.length>this.props.showcount&&this.props.inner?this.toggle:null}>
                    {this.getShorter(this.state.inner, this.props.showcount)}
                </a>

                <Overlay
                    show={this.state.show}
                    onHide={() => this.setState({ show: false })}
                    placement="bottom"
                    container={this}
                    target={ props => React.findDOMNode(this.refs.target)}
                    >
                    <div style={style} >
                        <strong>{ this.state.inner }</strong>
                    </div>
                </Overlay>
            </div>
        );
    }
});