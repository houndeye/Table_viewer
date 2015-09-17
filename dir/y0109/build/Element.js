define(['exports', 'module', 'react', 'react_bootstrap'], function (exports, module, _react, _react_bootstrap) {
    /**
     * Created by hound on 14.09.2015.
     */
    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _React = _interopRequireDefault(_react);

    var _RB = _interopRequireDefault(_react_bootstrap);

    var Overlay = _RB['default'].Overlay;

    module.exports = _React['default'].createClass({
        displayName: 'Element',

        KeyRemove: function KeyRemove(string, key) {
            //������� ������� ������� �� �����
            return string = string.replace(key, '');
        },
        getShorter: function getShorter(string, element) {
            // ���������� ����� ����������
            var short = string.substr(0, element);
            if (short.length < string.length) return short + '...';else return short;
        },
        getInitialState: function getInitialState() {
            return { show: false,
                inner: this.KeyRemove(this.props.inner, this.props.keys)
            };
        },
        toggle: function toggle() {
            this.setState({ show: !this.state.show });
        },
        render: function render() {
            var _this = this;

            var style = {
                position: 'absolute',
                backgroundColor: '#EEE',
                boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
                border: '1px solid #CCC',
                borderRadius: 3,
                marginLeft: 5,
                marginTop: -5,
                paddingLeft: 5,
                cursor: "text",
                zIndex: 50
            };
            return _React['default'].createElement(
                'div',
                { style: { position: 'relative', cursor: 'pointer' } },
                _React['default'].createElement(
                    'a',
                    { ref: 'target', onClick: this.state.inner.length > this.props.showcount && this.props.inner ? this.toggle : null },
                    this.getShorter(this.state.inner, this.props.showcount)
                ),
                _React['default'].createElement(
                    Overlay,
                    {
                        show: this.state.show,
                        onHide: function () {
                            return _this.setState({ show: false });
                        },
                        placement: 'bottom',
                        container: this,
                        target: function (props) {
                            return _React['default'].findDOMNode(_this.refs.target);
                        }
                    },
                    _React['default'].createElement(
                        'div',
                        { style: style },
                        _React['default'].createElement(
                            'strong',
                            null,
                            this.state.inner
                        )
                    )
                )
            );
        }
    });
});