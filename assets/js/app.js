const verouillage = document.getElementById("verouillage");
const bureau = document.getElementById("bureau");
const dateHtml = document.getElementById("date-info");
const userInfo = document.getElementById("user");
const passwordInput = document.getElementById("password");
const numericDate = document.querySelector('.numericDate');
const heureActuelHTML = document.querySelectorAll('.heureActuel');
const dateVerouillageHTML = document.getElementById('dateVerouillage');

const goodPassword = "bobby";

console.log(dateVerouillageHTML);

const date = new Date();
const options = { year: "numeric", month: "numeric", day: "numeric"};
const options2 = {weekday: 'long', month: "long", day: "numeric"};
let dateActuel = date.toLocaleDateString("fr-FR", options);
let dateActuelVerouillage = date.toLocaleDateString("fr-FR", options2);

dateVerouillageHTML.innerHTML = dateActuelVerouillage;

numericDate.innerHTML = dateActuel;

function affichZero(nombre) {

    return nombre < 10 ? '0' + nombre : nombre;
    }
    function heure() {
     
        const infos = new Date();

        for (i = 0; i < heureActuelHTML.length; i++) {
            heureActuelHTML[i].innerHTML = ' ' + affichZero(infos.getHours()) + ':' + affichZero(infos.getMinutes());
        }
    }
    window.onload = function() {
    setInterval("heure()", 100);
    };

verouillage.addEventListener("click", unlock);


function unlock(){
    verouillage.classList.remove("lock");
    verouillage.classList.add("unlock");
    dateHtml.classList.add("disable");
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
        verouillage.classList.add("disable");
        bureau.classList.add("active");
    }else{
        console.log("mauvais mot de passe grosse merde");
        passwordInput.value = '';
    }
}

