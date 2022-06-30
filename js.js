const validation = function () {
  let inp = document.getElementById("username");
  if (!inp.checkValidity()) {
    document.getElementById("demo").innerHTML = inp.validationMessage;
  }
  return (window.location.href = "players.html");
};

window.addEventListener("load", () => {
  const params = new URL(document.location).searchParams;
  const username = params.get("name");
  document.getElementById("result-username").innerHTML = username;
});

function showSpinner() {
  spinner.className = "show";
  setTimeout(() => {
    spinner.className = spinner.className.replace("show", "");
  }, 1000);
}

let myArray = [];

$.ajax({
  method: "GET",
  url: "https://www.balldontlie.io/api/v1/players",
  success: function (response) {
    myArray = response.data;
    showSpinner();
    buldTable(myArray);
  },
});

function buldTable(data) {
  let table = document.getElementById("playersTable");
  for (let i = 0; i < data.length; i++) {
    let row = `<tr>
                  <td>${data[i].id}</td>
                  <td>${data[i].first_name + " " + data[i].last_name}</td>
                  <td>${data[i].position}</td>
                  <td>${data[i].team.full_name}</td>
                  <td>${data[i].team.city}</td>
              </tr>`;
    table.innerHTML += row;
  }
}
