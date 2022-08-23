

document.querySelector("#frmLogin").addEventListener("submit", (e)=> {
    e.preventDefault();  // stop action


    try {

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    if(!isEmail(email)) throw "Please provide an e-mail address";
   

    if(!password) throw "Please provide a password";
   
    }

     catch (error) {

        alert(error);
    }
});

const isEmail = (email) => { 
    // email kontrol islemleri:

    // regex expression : https://regexr.com/
    const regex = /\S+@\S+\.\S{2,5}$/;


    return regex.test(email);

};