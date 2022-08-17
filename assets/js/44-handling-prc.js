// get 
const btnAverage = document.querySelector("#btnAverage");
btnAverage.addEventListener("click", ()=> {
    const point1 = document.querySelector("#txtPoint1").value;
    const point2 = document.querySelector("#txtPoint2").value;

    const avg = getAverage(point1,point2);
    console.log(avg)
    const letter = convertNumberToLetter(avg);

    alert(letter);

});

// Number() : convert string x to integer x, 
// if there is a blank or space it gets 0

// parseInt() or parseFloat() converts 

const getAverage = (n1, n2) => {
    if(isNaN(parseFloat(n1)) || isNaN(parseFloat(n2))) return;

    const avg = (parseFloat(n1) + parseFloat(n2))/2;

    return avg;

};

const convertNumberToLetter = (num) => {
    if(isNaN(parseFloat(num))) return;

    if(num>=90 && num<=100) {
        letter = "A";
    } else if (num>=80 ){
        letter = "B";
    }
    else if (num>=70){
        letter = "C";
    }
    else if (num>=50){
        letter = "D";
    }
    else if (num>=0) {
        letter="F";
    }   
    else {
        letter = "error";
    }
    return letter;
};