const XMLTable = document.getElementById("XMLtable");

function loadData() {
  const req = new XMLHttpRequest();
  req.open("GET", "cd-collection.xml", true);

  req.onload = function () {
    loadDoc(this);
  };

  req.send();
}

function loadDoc(d) {
  const data = d.responseXML;
  const lst = data.getElementsByTagName("CD");
  var table = "<tr><th>Artist</th><th>Title</th></tr>";
  for (let i = 0; i < lst.length; i++) {
    table +=
      "<tr><td>" +
      lst[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
      "</td><td>" +
      lst[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
      "</td></tr>";
  }
  XMLTable.innerHTML = table;
}

loadData();
