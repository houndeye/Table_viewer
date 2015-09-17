define(['exports', 'module', 'react', 'react_bootstrap', './Element'], function (exports, module, _react, _react_bootstrap, _Element) {
    /**
     * Created by hound on 15.09.2015.
     */

    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _React = _interopRequireDefault(_react);

    var _RB = _interopRequireDefault(_react_bootstrap);

    var _Element2 = _interopRequireDefault(_Element);

    module.exports = _React['default'].createClass({
        displayName: 'Block',

        render: function render() {
            return _React['default'].createElement(
                'tr',
                null,
                _React['default'].createElement(
                    'td',
                    { className: 'rightborder' },
                    ' ',
                    _React['default'].createElement(_Element2['default'], { inner: this.props.data.kind, showcount: this.props.showcount, keys: this.props.keys.kind })
                ),
                _React['default'].createElement(
                    'td',
                    { className: 'rightborder' },
                    ' ',
                    _React['default'].createElement(_Element2['default'], { inner: this.props.data.price.toString(), showcount: this.props.showcount, keys: this.props.keys.price })
                ),
                _React['default'].createElement(
                    'td',
                    { className: 'rightborder' },
                    ' ',
                    _React['default'].createElement(_Element2['default'], { inner: this.props.data.region, showcount: this.props.showcount, keys: this.props.keys.region })
                ),
                _React['default'].createElement(
                    'td',
                    null,
                    ' ',
                    _React['default'].createElement(_Element2['default'], { inner: this.props.data.street, showcount: this.props.showcount, keys: this.props.keys.street })
                )
            );
        }
    });
});