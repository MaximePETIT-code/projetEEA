const verouillage = document.getElementById("verouillage");
const bureau = document.getElementById("bureau");
const dateHtml = document.getElementById("date-info");
const userInfo = document.getElementById("user");
const passwordInput = document.getElementById("password");
const numericDate = document.querySelector('.numericDate');
const heureActuelHTML = document.querySelectorAll('.heureActuel');
const dateVerouillageHTML = document.getElementById('dateVerouillage');

const profilContainer = document.querySelector('.profilContainer');

const goodPassword = "bobby";

console.log(dateVerouillageHTML);

const date = new Date();
const options = { year: "numeric", month: "numeric", day: "numeric"};
const options2 = {weekday: 'long', month: "long", day: "numeric"};
let dateActuel = date.toLocaleDateString("fr-FR", options);
let dateActuelVerouillage = date.toLocaleDateString("fr-FR", options2);

dateVerouillageHTML.innerHTML = dateActuelVerouillage;

numericDate.innerHTML = dateActuel;


// Ouverture de l'ordinateur (intro)

$('#on-button').on("click", function(){
    gsap.to($("#intro-container"), {display: 'none', opacity: '0', ease: "power2.out", duration: 0.5});
    gsap.to($("#loader"), {display: 'flex', opacity: '1', ease: "power2.out", duration: 3});

    setTimeout(function(){
        gsap.to($("#intro"), {display: 'none', opacity: '0', ease: "power2.out", duration: 0.5});
    }, 3000);
})


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
$(document).keydown(unlock);


let count = 0; // On créer un compteur pour établir l'événement onClick une seule fois

function unlock(){
    passwordInput.focus();
    while(count == 0){
        gsap.fromTo(verouillage, {opacity : 1, ease: "power2.out", translateY : "0"}, {opacity : 0, ease: "power2.out", translateY : "0px", duration: 0.5});
        gsap.to(verouillage, {display: 'none', ease: "power2.out", translateY : "0", duration: 0.5});

        count ++; // Count est incrémenté, on n'entre donc plus dans la boucle
    }

}

passwordInput.addEventListener("keyup", (e) =>{
    if (e.keyCode === 13) {
        let password = passwordInput.value;
        passwordVerify(password);
    }
    
})



function passwordVerify(password){
    if(password == goodPassword){
        gsap.to(userInfo, {opacity : 0, ease: "power2.out", display: 'none', duration: 1.5, translateY: "-100vw"});

    }else{
        passwordInput.value = '';
    }
}


$('.indice-button').on('click', function(){
    $('.indice').fadeIn();
})

