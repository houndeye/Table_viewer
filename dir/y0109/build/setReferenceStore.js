define(['exports', 'module', 'reflux', './SetReferenceAction'], function (exports, module, _reflux, _SetReferenceAction) {
    /**
     * Created by hound on 18.09.2015.
     */
    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _Reflux = _interopRequireDefault(_reflux);

    var _SetReferenceAction2 = _interopRequireDefault(_SetReferenceAction);

    var refferences = {
        refferences: 1
    };
    module.exports = _Reflux['default'].createStore({
        listenables: _SetReferenceAction2['default'],
        getInitialState: function getInitialState() {
            return refferences;
        },
        onCurrentPage: function onCurrentPage(value) {
            refferences.refferences = value;
            this.trigger(refferences);
        }
    });
});