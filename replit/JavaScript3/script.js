let stdName = document.querySelector("#name");
let point = document.querySelector("#point");
let rowData = document.querySelector("#rowData");
let avgWrite = document.querySelector(".table tfoot tr td:nth-child(2)");

let satir = "";
let newHtml = "";
let rowNum = 0;
let total = 0;
let avg = 0;
let rows = "";

// Click Button and add name and point into the table

document.querySelector("#ekle").addEventListener("click", () => {
  if (!stdName.value) {
    stdName.focus();
    return;
  }

  if (point.value == "" || point.value < 0 || point.value > 100) {
    alert("Please provide a valid number [0-100] in point");
    return;
  }

  var table = document.querySelector("#tblStudents tbody");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);

  cell1.innerHTML = `${rowNum + 1}`;
  cell2.innerHTML = `${stdName.value}`;
  cell3.innerText = `${point.value}`;
  cell4.innerHTML = `
  <span id="editRow"><i class="fa-solid fa-pencil"></i></span>
  <span id="deleteRow"><i class="fa-solid fa-trash-can"></i></span>
  `;

  rowNum++;

  total += Number(point.value);
  avg = calculateAvg();

  avgWrite.innerText = `${avg}`;
  deleteRow();
  editRow();
});

// CLICK EDIT

function editRow() {
  document.querySelector("#editRow").addEventListener("click", (e) => {
    const row = e.target.closest("tr");
    let editName = row.querySelector("td:nth-child(2)").innerText;
    let rowPoint = row.querySelector("td:nth-child(3)").innerText;

    let newName = "";
    let newPoint = "";

    row.querySelector("td:nth-child(4)").innerHTML =
      '<span id="editOk"><i class="fa-solid fa-check"></i></span> <span id="cancel"> <i class="fa-solid fa-xmark"></i></span>';

    row.querySelector(
      "td:nth-child(2)"
    ).innerHTML = ` <input type="text" value="${editName}" id="newName" class="form-control">`;
    row.querySelector(
      "td:nth-child(3)"
    ).innerHTML = ` <input type="text" value="${rowPoint}" id="newPoint" class="form-control" style="text-align:center">`;

    document.querySelector("#newName").addEventListener("input", (e) => {
      newName = e.target.value;
      editName = newName;
    });

    document.querySelector("#newPoint").addEventListener("input", (e) => {
      newPoint = e.target.value;
      total = total - Number(rowPoint) + Number(newPoint);
      rowPoint = newPoint;
    });

    document.querySelector("#cancel").addEventListener("click", () => {
      row.querySelector("td:nth-child(2)").innerHTML = editName;
      row.querySelector("td:nth-child(3)").innerHTML = rowPoint;
      row.querySelector("td:nth-child(4)").innerHTML = `
      <span id="editRow"><i class="fa-solid fa-pencil"></i></span>
      <span id="deleteRow"><i class="fa-solid fa-trash-can"></i></span>`;
    });

    document.querySelector("#editOk").addEventListener("click", () => {
      row.querySelector("td:nth-child(2)").innerHTML = editName;
      row.querySelector("td:nth-child(3)").innerHTML = rowPoint;
      row.querySelector("td:nth-child(4)").innerHTML = `
      <span id="editRow"><i class="fa-solid fa-pencil"></i></span>
      <span id="deleteRow"><i class="fa-solid fa-trash-can"></i></span>`;

      avg = calculateAvg();

      avgWrite.innerText = `${avg}`;
    });
  });
}



function deleteRow() {
  document.querySelector("#deleteRow").addEventListener("click", (e) => {
    const row = e.target.closest("tr");
    const name = row.querySelector("td:nth-child(2)").innerText;
    const rowPoint = row.querySelector("td:nth-child(3)").innerText;

    let result = confirm(
      `${name} record will be deleted, Are you sure to delete`
    );

    if (result === true) {
      row.querySelector("td:nth-child(1)").innerHTML =
        '<i class="fa-solid fa-spinner fa-spin-pulse"></i>';

      setTimeout(() => {
        row.remove();
      }, 2000);

      total -= rowPoint;
      rowNum--;
      avg = calculateAvg();

      avgWrite.innerText = `${avg}`;
      return;
    }
  });
}

// CALCULATE AVG FUNCTION
const calculateAvg = () => {
  return (total / rowNum).toFixed(0);
};
