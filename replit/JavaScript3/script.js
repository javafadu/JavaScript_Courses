let name = document.querySelector("#name");
let point = document.querySelector("#point");
let rowData = document.querySelector("#rowData");
let avgWrite = document.querySelector(".table tfoot tr td:nth-child(2)");

let satir = "";
let rowNum = 0;
let total = 0;
let avg = 0;

// Click Button and add name and point into the table

document.querySelector("#ekle").addEventListener("click", () => {
  if (!name.value) {
    name.focus();
    return;
  }

  if (point.value == "" || point.value < 0 || point.value > 100) {
    alert("Please provide a valid number [0-100] in point");
    return;
  }

  satir += `<tr>
    <th scope="row">${++rowNum}</th>
    <td>${name.value}</td>
    <td>${point.value}</td>
    <td class="d-flex justify-content-around align-items-center p-3"><i class="fa-solid fa-pencil"></i><i class="fa-solid fa-trash-can"></i></td>

    </tr>`;

  total += Number(point.value);
  avg = (total / rowNum).toFixed(0);

  rowData.innerHTML = satir;
  avgWrite.innerText = `${avg}`;
});

// Click td-2 or click td-3 open inputs

document.querySelectorAll(".table tbody tr").forEach((satir) => {
  satir.addEventListener("click", () => {
    let nameSelect = satir.querySelector("td:nth-child(2").innerText;
    putNameIntoInput(nameSelect);
  });
});

// ASAGI DUZELT
const putNameIntoInput = (nameSelect) => {

  const nameInput = `
  <input type="text" class="form-control" id="name" value="${nameSelect}">     
              `;

 document.querySelector(".table tbody tr td:nth-child(2").innerHTML = na;
};
