define(['exports', 'module', 'react', 'react_bootstrap', './buttonref', 'reflux'], function (exports, module, _react, _react_bootstrap, _buttonref, _reflux) {
    /**
     * Created by hound on 15.09.2015.
     */

    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _React = _interopRequireDefault(_react);

    var _RB = _interopRequireDefault(_react_bootstrap);

    var _Buttonref = _interopRequireDefault(_buttonref);

    var _Reflux = _interopRequireDefault(_reflux);

    var Button = _RB['default'].Button;

    module.exports = _React['default'].createClass({
        displayName: 'Pagereferences',

        getInitialState: function getInitialState() {
            return {
                page: 1
            };
        },
        setpage: function setpage(value) {
            this.setState({
                page: value
            });
        },
        render: function render() {
            var b = [];
            for (var j = 1; j < this.props.masslength / this.props.showblocks + 1; j++) {
                b.push(_React['default'].createElement(_Buttonref['default'], { key: j, pagevalue: j }));
            };
            return _React['default'].createElement(
                'div',
                null,
                _React['default'].createElement(
                    Button,
                    null,
                    'Prev'
                ),
                b,
                _React['default'].createElement(
                    Button,
                    { style: { marginLeft: 4 } },
                    'Next'
                )
            );
        }
    });
});