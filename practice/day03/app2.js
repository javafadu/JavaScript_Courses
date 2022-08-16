// Client enters the age and gender information 
// result shows military status

function statu() {
let age = document.querySelector("#age").value;
let rb_male = document.querySelector("#male");
let rb_female = document.querySelector("#female");
let msg = document.querySelector("#msg");

if(age>=20 && rb_male.checked) {
    msg.innerHTML = `<strong><em>Go to military service </em></strong>`;
    msg.classList.add("green");
} else {
    msg.innerHTML = `<strong><em>No military service now</em></strong>`;
    msg.classList.add("red");
}
}