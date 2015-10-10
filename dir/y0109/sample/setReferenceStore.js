/**
 * Created by hound on 18.09.2015.
 */
import Reflux from 'reflux'
import SetReferenceAction from './SetReferenceAction'

let refferences = {
    refferences: 1
};
export default Reflux.createStore({
    listenables:SetReferenceAction,
    getInitialState(){
        return(refferences)
    },
    onCurrentPage(value){
        refferences.refferences = value
        this.trigger(refferences);
    }
})