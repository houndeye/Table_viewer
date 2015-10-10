define(['exports', 'module', 'react', 'react_bootstrap', './SetPageAction', './SetReferenceAction'], function (exports, module, _react, _react_bootstrap, _SetPageAction, _SetReferenceAction) {
    /**
     * Created by hound on 17.09.2015.
     */

    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _React = _interopRequireDefault(_react);

    var _RB = _interopRequireDefault(_react_bootstrap);

    var _SetPageAction2 = _interopRequireDefault(_SetPageAction);

    var _SetReferenceAction2 = _interopRequireDefault(_SetReferenceAction);

    var Button = _RB['default'].Button;

    module.exports = _React['default'].createClass({
        displayName: 'buttonref',

        componentWillMount: function componentWillMount() {},
        onClick: function onClick() {
            _SetPageAction2['default'].setPage(this.props.pagevalue);
            _SetReferenceAction2['default'].currentPage(this.props.pagevalue);
        },
        render: function render() {
            return _React['default'].createElement(
                Button,
                { style: { width: 34, height: 34, marginLeft: 4 },
                    onClick: this.onClick
                },
                this.props.pagevalue
            );
        }
    });
});