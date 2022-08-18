
document.querySelector("#btnSend").addEventListener("click", () => {
    
    let num1 = document.querySelector("#num1").value;
let num2 = document.querySelector("#num2").value;
let operator = document.querySelector("#operator").value;

num1 = num1 * 1 ? parseFloat(num1) : num1;
num2 = num2 * 1 ?   parseFloat(num2) : num2;
operator = operator * 1 ?  parseFloat(operator) : operator ;

  let result = 0;
  if (operator == 1) {
    result = sum(num1, num2);
  } else if (operator == 2) {
    result = difference(num1, num2);
  }
  else if (operator == 3) {
    result = product(num1, num2);
  }
  else if (operator == 4) {
    result = quotient(num1, num2);
  }
  else {
    result = "Operation Selection Error";
  }
  alert(`Result ${result}`);

});



const sum = (num1, num2) => {
  return (num1 + num2);
};

const difference = (num1, num2) => {
  return (num1 - num2);
};

const product = (num1, num2) => {
  return (num1 * num2);
};

const quotient = (num1, num2) => {
  return (num1 / num2);
};

