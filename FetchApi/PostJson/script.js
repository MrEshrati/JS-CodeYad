var formTitle = document.getElementById("title");
var formBody = document.getElementById("body");
var form = document.getElementById("addPost");

function postData(e) {
  e.preventDefault();
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: formTitle.value, body: formBody.value }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

form.addEventListener("submit", postData);
