var nameInput = document.querySelector('#name');
var add = document.querySelector('#add')
var btn = document.querySelector('#remove');
var h3 = document.querySelector('#title');

add.addEventListener('click',() => {
    sessionStorage.setItem("name",nameInput.value);
});

btn.addEventListener('click',() => {
    sessionStorage.removeItem("name");
    window.location.reload();
});

sessionStorage.getItem("name") ? h3.innerHTML = `Welcome ${sessionStorage.getItem("name")}` : h3.innerHTML = `Nobody to Welcome`; 