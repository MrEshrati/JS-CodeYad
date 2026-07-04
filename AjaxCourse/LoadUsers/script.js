var ul = document.querySelector(".list-group")
function getUsers(){
  req = new XMLHttpRequest();

  // req.open("GET","https://api.github.com/users",true);
  req.open("GET","http://127.0.0.1:3000/users",true);

  req.onload = function(){
    if(this.status == 200){
      var users = JSON.parse(this.responseText)
      // console.log(users);
      
      for (const i in users){
        var li = document.createElement('li');
        li.className = "list-group-item user-item text-left";

        var img = document.createElement('img');
        img.className = "img-circle img-user img-thumbnail";
        // img.setAttribute("src",users[i].avatar_url);

        var h3 = document.createElement('h3');

        var a = document.createElement('a');
        // a.setAttribute('href',users[i].url)
        // a.setAttribute('target',"_blank")
        a.innerHTML = users[i].name;
        h3.append(a)

        li.append(img);
        li.append(h3);
        img.after(h3);

        ul.append(li)
      }
    }
  }

  req.send();
}

getUsers();