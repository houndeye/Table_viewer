data = {
    text: 'Frankivsky region',
    key: 'region'
};
function KeyRemove(data){
    return (data.text = data.text.replace(data.key,''));
};
document.getElementById("keyremove").innerHTML = data.text + '</br>' + KeyRemove(data);