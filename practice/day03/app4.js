// find the count and sum of numbers 
// between given 2 numbers which are divided by 4 byt not divided by 8


function calculate() {
    let num1 = document.querySelector("#num1").value;
    let num2 = document.querySelector("#num2").value;
    let message = document.querySelector("#msg");
    let sum=0;
    let count=0;
    let minNum;
    let maxNum;
    num1>num2 ? minNum=num2 : minNum=num1;
    num2>num1 ? maxNum=num2 : maxNum=num1;

    for(let i = minNum; i<=maxNum; i++) {
        if(i%4==0 && i%8!=0) {
              sum+=i; 
              count++; 
        }
    }
    message.innerHTML=`Total count : ${count} and the sum : ${sum}`;
    
}