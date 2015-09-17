

var text = "Here will be noted about what a shitty coder I am";  //ÂÕ²ÄÍ² ÄÀÍ²: ñòð³÷êà
var element = 20;                                               //ÂÕ²ÄÍ² ÄÀÍ²: âèäèìà äîâæèíà

function showMore(){
    document.getElementById('text').innerHTML = text;
    removeElement( document.getElementById('moreinfo') );
    document.getElementById('main').style.cursor = 'default';
};

function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
}

function createElement(){
    var btn = document.createElement ('a');
    btn.href = '#';
    btn.id = 'moreinfo';
    document.getElementById ('text').parentNode.insertBefore (btn, document.getElementById ('moreinfo'));
    document.getElementById('moreinfo').innerHTML = '...';
    btn.setAttribute('onclick', 'showMore()');
}

function shortText (text, element){
    if(text.length + 1 > element){
        var short = text.substr(0,element);
        createElement();
        return short;
    }
    else {
        return text;
    }
};

document.getElementById('text').innerHTML = shortText(text, element);
