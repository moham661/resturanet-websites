function learn() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("learn").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "learn.html", true);
  xhttp.send();
}