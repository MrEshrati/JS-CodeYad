var firstname = document.getElementById("FirstName");
var lastname = document.getElementById("LastName");
var jobTitle = document.getElementById("jobTitle");
var btn = document.getElementById("btn");

function addUser() {
  params =
    "firstname=" +
    firstname.value +
    "&" +
    "lastname=" +
    lastname.value +
    "&" +
    "jobtitle=" +
    jobTitle.value;

  req = new XMLHttpRequest();

  req.open("POST", "[api_address]", true);

  req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  req.send(params);
}

btn.addEventListener("click", addUser);
