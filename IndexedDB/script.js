let db;
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const form = document.querySelector("form");
const ulList = document.querySelector("ul");

window.onload = () => {
  let req = window.indexedDB.open("contacts", 1);

  req.onerror = () => {
    console.log("Database Failed to Open");
  };

  req.onsuccess = () => {
    console.log("Database Opened Successfuly!");
    db = req.result;
    getData();
  };

  req.onupgradeneeded = (e) => {
    let db = e.target.result;

    let ObjectStore = db.createObjectStore("contacts", {
      keyPath: "id",
      autoIncrement: true,
    });

    ObjectStore.createIndex("first_name", "first_name", { unique: false });
    ObjectStore.createIndex("last_name", "last_name", { unique: false });

    console.log("Database has been set up successfuly!!");
  };
};

const getData = () => {

  while (ulList.firstChild){
    ulList.removeChild(ulList.firstChild)
  }

  let ObjectStore = db.transaction("contacts").objectStore('contacts');
  ObjectStore.openCursor().onsuccess = (e) => {

    const cursor = e.target.result;

    if(cursor){
      let liList = document.createElement('li');
      let first = document.createElement('p');
      let last = document.createElement('p');

      first.textContent = cursor.value.first_name;
      last.textContent = cursor.value.last_name;

      liList.appendChild(first);
      liList.appendChild(last);

      ulList.appendChild(liList);

      liList.setAttribute("data-contact-id",cursor.value.id);

      let deleteBtn = document.createElement('button');
      liList.appendChild(deleteBtn);
      deleteBtn.textContent = "Delete";

      deleteBtn.addEventListener('click' , deleteData);

      cursor.continue();
    }else{
      if(!ulList.firstChild){
        let liList = document.createElement('li');
        liList.textContent = "There isn't any Contact!!!";
        ulList.appendChild(liList);
      }
    }
  }
}

const deleteData = (e) => {

  let contactId = Number(e.target.parentElement.getAttribute('data-contact-id'));
  let transaction = db.transaction(['contacts'],'readwrite');
  let req = transaction.objectStore('contacts').delete(contactId);

  transaction.oncomplete = () => {
    e.target.parentElement.parentElement.removeChild(e.target.parentElement);
    if(!ulList.firstChild){
      let liList = document.createElement('li');
      liList.textContent = "There isn't any Contact!!!";
      ulList.appendChild(liList);
    }
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newData = {
    first_name: firstName.value,
    last_name: lastName.value
  }

  let transaction = db.transaction(['contacts'],'readwrite');
  let req = transaction.objectStore('contacts').add(newData);

  req.onsuccess = () => {
    firstName.value = "";
    lastName.value = "";
  }

  transaction.oncomplete = () => {
    console.log("Transaction Completed");
    getData();
  }

  transaction.onerror = () => {
    console.log("Error on Transaction");
  }

});