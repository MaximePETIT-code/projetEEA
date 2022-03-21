const verouillage = document.getElementById("verouillage");
const date = document.getElementById("date-info");
const userInfo = document.getElementById("user");
const passwordInput = document.getElementById("password");
const goodPassword = 'bobby';

verouillage.addEventListener("click", unlock)

function unlock(){
    verouillage.classList.remove("lock");
    verouillage.classList.add("unlock");
    date.classList.add("disable");
    userInfo.classList.remove("disable");
}

passwordInput.addEventListener("keyup", (e) =>{
    if (e.keyCode === 13) {
        let password = passwordInput.value;
        passwordVerify(password);
    }
    
})

function passwordVerify(password){
    if(password == goodPassword){
        console.log("bon mot de passe");
    }else{
        console.log("mauvais mot de passe grosse merde");
        passwordInput.value = '';
    }
}





// mot de passe

