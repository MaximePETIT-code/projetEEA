// Ouverture de la fenêtre

$(".edge").on("click", function(){
    gsap.to($("#edge"), {display: 'block', opacity: '1', ease: "power2.out", duration: 0.5});
})  

// Fermeture de la fenêtre

$(".cross-edge").on("click", function(){
    gsap.to($("#edge"), {display: 'none', opacity: '0', ease: "power2.out", duration: 0.5});

})