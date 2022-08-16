// get the price and age information
// apply 50% discount for over 65 age
// apply 10% discount for remains


function calculate() {
    let age = document.querySelector("#age").value;
    let price = document.querySelector("#price").value;
    

    age = age*1 ? age : 0;
    price = price*1 ? price : 0;

    // 1- ternary solution
    let discountedPrice = age>=65 ? price*0.5 : price*0.9;
    
    // 2 - if else solution
    /*
    if(age>=65) {
        discountedPrice = price*0.5;
    } else {
        discountedPrice = price*0.9;
    }
    */

    // 2- shortcode solution
    // age>=65 && (discountedPrice=price*0.50);
    // age<65 && (discountedPrice=price*0.90);

    document.querySelector("#message").innerText = `The discounted price is : ${discountedPrice}`;
    


}