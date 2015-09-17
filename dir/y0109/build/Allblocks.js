define(['exports', 'module', 'react', 'react_bootstrap', 'reflux', './Block', './Countpage', './Pagereferences', './setPageStore'], function (exports, module, _react, _react_bootstrap, _reflux, _Block, _Countpage, _Pagereferences, _setPageStore) {
    /**
     * Created by hound on 15.09.2015.
     */
    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _React = _interopRequireDefault(_react);

    var _RB = _interopRequireDefault(_react_bootstrap);

    var _Reflux = _interopRequireDefault(_reflux);

    var _Block2 = _interopRequireDefault(_Block);

    var _Countpage2 = _interopRequireDefault(_Countpage);

    // ��������� ������ �� ��������

    var _Pagereferences2 = _interopRequireDefault(_Pagereferences);

    // �������� �� ���������

    var _Store = _interopRequireDefault(_setPageStore);

    var Table = _RB['default'].Table;
    var Button = _RB['default'].Button;

    module.exports = _React['default'].createClass({
        displayName: 'Allblocks',

        mixins: [_Reflux['default'].connect(_Store['default'])],
        getInitialState: function getInitialState() {
            return {
                size: 10
            };
        },
        change: function change(value) {
            this.setState({
                size: value
            });
        },
        render: function render() {
            var result = [];
            var pages = this.state.pagevalue || 1;
            var newobj = this.props.massive.map(function (item) {
                return { kind: item[0],
                    price: item[1],
                    region: item[2],
                    street: item[3] };
            });
            var res = newobj.map(function (e) {
                return [e.kind, e.price, e.region, e.street];
            });
            if (this.state.size > this.props.massive.length) {
                this.state.size = this.props.massive.length;
            }
            //console.log(res[0][0])
            for (var j = 0; j < this.state.size; j++) {
                // j-��������, ��������� - ��������� ����������� ������
                var index = (pages - 1) * this.state.size + j;
                if (res.length > index) {
                    result.push(_React['default'].createElement(_Block2['default'], { key: index, data: {
                            kind: res[index][0],
                            price: res[index][1],
                            region: res[index][2],
                            street: res[index][3]
                        }, keys: this.props.keys, showcount: this.props.showcount }));
                };
            };
            return _React['default'].createElement(
                'div',
                null,
                _React['default'].createElement(_Countpage2['default'].Class, { change: this.change, pagescount: this.props.massive.length }),
                _React['default'].createElement(
                    Table,
                    { striped: true, bordered: true, condensed: true, hover: true },
                    _React['default'].createElement(
                        'thead',
                        null,
                        _React['default'].createElement(
                            'tr',
                            null,
                            _React['default'].createElement(
                                'th',
                                { className: 'rightborder' },
                                _React['default'].createElement(
                                    'span',
                                    { href: '#' },
                                    'Kind'
                                )
                            ),
                            _React['default'].createElement(
                                'th',
                                { className: 'rightborder' },
                                _React['default'].createElement(
                                    'span',
                                    { href: '#' },
                                    'Price'
                                )
                            ),
                            _React['default'].createElement(
                                'th',
                                { className: 'rightborder' },
                                _React['default'].createElement(
                                    'spana',
                                    { href: '#' },
                                    'Region'
                                )
                            ),
                            _React['default'].createElement(
                                'th',
                                null,
                                _React['default'].createElement(
                                    'span',
                                    { href: '#' },
                                    'Street'
                                )
                            )
                        )
                    ),
                    _React['default'].createElement(
                        'tbody',
                        null,
                        result
                    )
                ),
                _React['default'].createElement(_Pagereferences2['default'], { masslength: this.props.massive.length, showblocks: this.state.size })
            );
        }
    });
});