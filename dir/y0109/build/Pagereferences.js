define(['exports', 'module', 'react', 'react_bootstrap', './buttonref', 'reflux', './SetPageAction', './setReferenceStore'], function (exports, module, _react, _react_bootstrap, _buttonref, _reflux, _SetPageAction, _setReferenceStore) {
    /**
     * Created by hound on 15.09.2015.
     */

    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _React = _interopRequireDefault(_react);

    var _RB = _interopRequireDefault(_react_bootstrap);

    var _Buttonref = _interopRequireDefault(_buttonref);

    var _Reflux = _interopRequireDefault(_reflux);

    var _SetPageAction2 = _interopRequireDefault(_SetPageAction);

    var _SetReferenceStore = _interopRequireDefault(_setReferenceStore);

    var Button = _RB['default'].Button;
    var buttReffCount;

    module.exports = _React['default'].createClass({
        displayName: 'Pagereferences',

        mixins: [_Reflux['default'].connect(_SetReferenceStore['default'])],
        Tofirst: function Tofirst() {
            this.state.refferences = 1;
            _SetPageAction2['default'].setPage(this.state.refferences);
        },
        Movedown: function Movedown() {
            this.state.refferences--;
            if (this.state.refferences < 1) this.state.refferences++;
            _SetPageAction2['default'].setPage(this.state.refferences);
        },
        MoveUp: function MoveUp() {
            this.state.refferences++;
            if (this.state.refferences > buttReffCount) this.state.refferences--;
            _SetPageAction2['default'].setPage(this.state.refferences);
        },
        Tolast: function Tolast() {
            this.state.refferences = buttReffCount;
            _SetPageAction2['default'].setPage(this.state.refferences);
        },
        render: function render() {
            var b = [];
            for (var j = 1; j < this.props.masslength / this.props.showblocks + 1; j++) {
                b.push(_React['default'].createElement(_Buttonref['default'], { key: j, pagevalue: j }));
                buttReffCount = b.length;
            };
            return _React['default'].createElement(
                'div',
                null,
                buttReffCount == 1 ? null : _React['default'].createElement(
                    Button,
                    { onClick: this.Tofirst },
                    _React['default'].createElement(
                        'span',
                        null,
                        '<<'
                    )
                ),
                buttReffCount == 1 ? null : _React['default'].createElement(
                    Button,
                    { onClick: this.Movedown },
                    _React['default'].createElement(
                        'span',
                        null,
                        'Prev'
                    )
                ),
                buttReffCount == 1 ? null : b[this.state.refferences - 2],
                buttReffCount == 1 ? null : b[this.state.refferences - 1],
                buttReffCount == 1 ? null : b[this.state.refferences],
                buttReffCount == 1 ? null : _React['default'].createElement(
                    Button,
                    { onClick: this.MoveUp, style: { marginLeft: 4 } },
                    _React['default'].createElement(
                        'span',
                        null,
                        'Next'
                    )
                ),
                buttReffCount == 1 ? null : _React['default'].createElement(
                    Button,
                    { onClick: this.Tolast },
                    _React['default'].createElement(
                        'span',
                        null,
                        '>>'
                    )
                )
            );
        }
    });
});