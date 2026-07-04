const themeBtn = document.querySelector("#theme-switcher");
const body = document.querySelector("body");
const todoName = document.querySelector("#addt");
const addBtn = document.querySelector("#add-btn");
const ulContainer = document.querySelector(".todos");
const todoCount = document.querySelector("#items-left");
const filterDiv = document.querySelector('.filter');
const clearCompleted = document.getElementById('clear-completed');

function main() {
  themeBtn.addEventListener("click", () => {
    body.classList.toggle("light");
  });

  loadTodos(JSON.parse(localStorage.getItem("TodoDatas")));

  dragEvents();

  addBtn.addEventListener("click", () => {
    if (todoName.value) {
      const todoData = {
        name: todoName.value.trim(),
        done: false,
      };
      todoName.value = ""
      var savedTodos = localStorage.getItem("TodoDatas")
        ? (savedTodos = JSON.parse(localStorage.getItem("TodoDatas")))
        : (savedTodos = []);
      savedTodos.push(todoData);
      localStorage.setItem("TodoDatas", JSON.stringify(savedTodos));
      loadTodos([todoData]);
      todoCount.textContent = (document.querySelectorAll('.todos .card:not(.checked)')).length;
    }
  });

  todoName.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      addBtn.click();
    }
  });

  filterDiv.addEventListener('click',(e) => {
    const id = e.target.id;
    
    document.querySelector('.filter .on').classList.remove('on');
    e.target.classList.add('on');
    ulContainer.className = `todos ${id}`;
  });

  clearCompleted.addEventListener('click',() => {
    const completedTodos = document.querySelectorAll('.todos .card.checked');
    completedTodos.forEach((todo) => {
      const index = [...document.querySelectorAll('.todos .card')].indexOf(todo);
      removeTodo(index);
      todo.remove();
    });
    todoCount.textContent = document.querySelectorAll('.todos .card:not(.checked)').length;
  });
}

function dragEvents() {
  ulContainer.addEventListener("dragover", (e) => {
    if (
      e.target.classList.contains("card") &&
      !e.target.classList.contains("dragging")
    ) {
      const dragged = document.querySelector(".dragging");
      const nodes = [...ulContainer.querySelectorAll(".card")];
      const currentPos = nodes.indexOf(dragged);
      const targetPos = nodes.indexOf(e.target);

      if (currentPos > targetPos) {
        ulContainer.insertBefore(dragged, e.target);
      } else {
        ulContainer.insertBefore(dragged, e.target.nextSibling);
      }

      const todos = JSON.parse(localStorage.getItem("TodoDatas"));
      const removed = todos.splice(currentPos, 1);
      todos.splice(targetPos, 0, removed[0]);

      localStorage.setItem("TodoDatas", JSON.stringify(todos));
    }
  });
}

function loadTodos(todos) {
  if (!todos) {
    return null;
  }

  todos.forEach((todo) => {
    var card = document.createElement("li");
    var container = document.createElement("div");
    var input = document.createElement("input");
    var check = document.createElement("span");
    var item = document.createElement("p");
    var clearBtn = document.createElement("button");
    var icon = document.createElement("img");

    card.classList.add("card");
    card.setAttribute("draggable", true);
    container.classList.add("cb-container");
    input.classList.add("cb-input");
    input.setAttribute("type", "checkbox");
    check.classList.add("check");
    item.classList.add("item");
    clearBtn.classList.add("clear");
    icon.setAttribute("src", "./assets/images/icon-cross.svg");
    icon.setAttribute("alt", "Clear it");
    item.innerHTML = todo["name"];

    if(todo['done']){
      input.checked = true;
      card.classList.add('checked');
    }

    card.appendChild(container);
    card.appendChild(item);
    card.appendChild(clearBtn);
    container.appendChild(input);
    container.appendChild(check);
    clearBtn.appendChild(icon);

    input.addEventListener('click',(e) => {
      const current_li = (input.parentElement).parentElement;
      current_li.classList.toggle('checked');
      const index = [...document.querySelectorAll('.todos .card')].indexOf(current_li);
      stateChange(index);
      todoCount.textContent = document.querySelectorAll('.todos .card:not(.checked)').length;
    });

    clearBtn.addEventListener('click',(e) => {
     const currentCard = clearBtn.parentElement;
     currentCard.classList.add('fall');
     const index = [...document.querySelectorAll('.todos .card')].indexOf(currentCard);
     removeTodo(index);
     currentCard.addEventListener('animationend',() => {
      setTimeout(()=>{
        currentCard.remove();
        todoCount.textContent = document.querySelectorAll('.todos .card:not(.checked)').length;
      });
     });
    });

    card.addEventListener("dragstart", () => {
      card.classList.add("dragging");
    });
    card.addEventListener("dragend", () => {
      card.classList.remove("dragging");
    });

    ulContainer.appendChild(card);
  });
  todoCount.textContent = document.querySelectorAll('.todos .card:not(.checked)').length;
}

function removeTodo(index){
  console.log(index);
  
  const arr = JSON.parse(localStorage.getItem("TodoDatas"));
  arr.splice(index,1);
  localStorage.setItem("TodoDatas",JSON.stringify(arr));
}

function stateChange(index){
  const todos = JSON.parse(localStorage.getItem("TodoDatas"));
  const changedObj = {
    name: todos[index]['name'],
    done: todos[index]['done'] ? false : true,
  }
  todos.splice(index,1,changedObj);
  localStorage.setItem("TodoDatas",JSON.stringify(todos));
}

document.addEventListener("DOMContentLoaded", main);
