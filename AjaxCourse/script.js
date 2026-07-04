btn = document.getElementById("myBtn");
text = document.getElementById("textBox");

function loadText() {
  var req = new XMLHttpRequest();

  req.open("GET", "test.txt", true);

  console.log(req.readyState);

  // req.onload = function(){
  //     if(req.status == 200){
  //         text.innerHTML = this.response;
  //     }
  // }

  // or

  // req.onreadystatechange = function(){
  //     if (this.readyState == 4 && this.status == 200){
  //         text.innerHTML = this.response;
  //     }
  // }

  req.send();
}

btn.addEventListener("click", loadText);
