var table = document.getElementById("tableData");

function getData() {
  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      var Output = "";
      data.forEach((user, index, arr) => {
        Output += `<ul>
            <li>${user.id}</li>
            <li>${user.name}</li>
            <li>${user.email}</li>
            </ul>`;
        table.innerHTML = Output;
      });
    });
}

getData();
