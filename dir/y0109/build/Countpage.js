define(['exports', 'react', 'react_bootstrap'], function (exports, _react, _react_bootstrap) {
    /**
     * Created by hound on 15.09.2015.
     */

    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _React = _interopRequireDefault(_react);

    var _RB = _interopRequireDefault(_react_bootstrap);

    var Input = _RB['default'].Input;

    exports.Class = _React['default'].createClass({
        displayName: 'Class',

        getInitialState: function getInitialState() {
            return {
                value: 10
            };
        },
        validationState: function validationState() {
            if (this.state.value > 0 && this.state.value <= 25) {
                return 'success';
            } else return 'error';
        },
        handleChange: function handleChange() {

            if (this.refs.input.getValue() < 1) {
                this.setState({
                    value: 1
                });
                this.props.change(1);
            } else if (this.refs.input.getValue() > 25) {
                this.setState({
                    value: 25
                });
                this.props.change(25);
            } else {
                this.setState({
                    value: this.refs.input.getValue()
                });
                this.props.change(this.refs.input.getValue());
            }
        },
        render: function render() {

            return _React['default'].createElement(
                'div',
                { style: { width: 70 } },
                _React['default'].createElement(Input, {
                    type: 'number',
                    value: this.state.value,
                    placeholder: 'Enter text',
                    //label="Working example with validation"
                    //help="Input number less than 25"
                    bsStyle: this.validationState(),
                    //hasFeedback                  // ������
                    ref: 'input',
                    groupClassName: 'group-class',
                    labelClassName: 'label-class',
                    onChange: this.handleChange
                })
            );
        }
    });
});