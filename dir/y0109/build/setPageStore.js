define(['exports', 'module', 'reflux', './SetPageAction'], function (exports, module, _reflux, _SetPageAction) {
    /**
     * Created by hound on 17.09.2015.
     */
    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _Reflux = _interopRequireDefault(_reflux);

    var _Action = _interopRequireDefault(_SetPageAction);

    var pagevalue = { pagevalue: 1 };
    module.exports = _Reflux['default'].createStore({
        listenables: _Action['default'],
        getInitialState: function getInitialState() {
            return pagevalue;
        },
        onSetPage: function onSetPage(value) {
            pagevalue.pagevalue = value;
            this.trigger(pagevalue);
        }
    });
});