define(['exports', 'module', 'react', './SetPageAction'], function (exports, module, _react, _SetPageAction) {
    /**
     * Created by hound on 17.09.2015.
     */

    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _React = _interopRequireDefault(_react);

    var _Action = _interopRequireDefault(_SetPageAction);

    module.exports = _React['default'].createClass({
        displayName: 'buttonref',

        onClick: function onClick() {
            _Action['default'].setPage(this.props.pagevalue);
        },
        render: function render() {
            return _React['default'].createElement(
                'button',
                { style: { width: 25, height: 25, marginLeft: 4 },
                    onClick: this.onClick
                },
                this.props.pagevalue
            );
        }
    });
});