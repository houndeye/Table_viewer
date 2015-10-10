/**
 * Created by hound on 17.09.2015.
 */
import Reflux from 'reflux'
import SetPageAction from './SetPageAction'


let pagevalue = {
    pagevalue: 1
};
export default Reflux.createStore({
    listenables:SetPageAction,
    getInitialState(){   // це передається в олблок
        return(pagevalue)
    },
    onSetPage(value){
        pagevalue.pagevalue = value;
        this.trigger(pagevalue);
    }
})