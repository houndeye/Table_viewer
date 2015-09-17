/**
 * Created by hound on 17.09.2015.
 */
import Reflux from 'reflux'
import Action from './SetPageAction'

let pagevalue = {pagevalue:1}
export default Reflux.createStore({
    listenables:Action,
    getInitialState(){
        return(pagevalue)
    },
    onSetPage(value){
        pagevalue.pagevalue = value;
        this.trigger(pagevalue);
    }
})