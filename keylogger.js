document.onkeypress = function(ev){
    ev = ev || window.event
    key = String.fromCharCode(ev.charCode);
    if(key){
        console.log(key);
    }
}