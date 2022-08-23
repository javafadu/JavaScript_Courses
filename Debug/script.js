document.querySelector("#btn").addEventListener("click", ()=> {
    const result = calculate();
    document.querySelector("#result").innerHTML = result;
})


const calculate = () => {

    let total=0;
    for (let i = 0; i < 5; i++) {
        total += i;
        
    }

    return total;

}