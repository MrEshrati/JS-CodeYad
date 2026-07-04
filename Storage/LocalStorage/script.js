var title = document.getElementById('title');

localStorage.setItem("firstName","Arshia");
localStorage.setItem("lastName","Nigger");
localStorage.removeItem("lastName");

var firstName = localStorage.getItem("firstName");

firstName ? title.innerHTML = `Welcome ${firstName}!` : title.innerHTML = `Nobody To Welcome!`;