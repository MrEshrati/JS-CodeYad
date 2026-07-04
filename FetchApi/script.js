var btn = document.getElementById("btn");

function getText(){
    fetch("sample.txt")
    .then((res) => res.text())
    .then((data) => console.log(data));
}

btn.addEventListener('click',getText)