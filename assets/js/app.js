let verouillage = document.getElementById("verouillage");

verouillage.addEventListener("click", ()=> {
    verouillage.classList.remove("lock");
    verouillage.classList.add("unlock");
})