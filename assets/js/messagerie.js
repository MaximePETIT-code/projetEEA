// Ouverture de la fenetre

$(".messagerie").on("click", function(){
    console.log("ouverture messagerie");
    gsap.to($("#messagerie"), {display: 'block', opacity: '1', ease: "power2.out", duration: 0.5});
    

    // Scroller en bas de la page lors de l'affichage

    setTimeout(function(){
        console.log('scroll');
        window.scroll(0,1000000);
    }, 20); 
    
    
})  

// Fermeture de la fenêtre

$(".cross-messagerie").on("click", function(){
    gsap.to($("#messagerie"), {display: 'none', opacity: '0', ease: "power2.out", duration: 0.5});

    console.log('fermeture messagerie');
})


//changement de conversations au clic
$("#maxime").on("click", function(){
    $("#discussion-maxime").css("display","block");
    $("#discussion-alicia").css("display","none");
    $("#discussion-frero").css("display","none");
})

$("#alicia").on("click", function(){
    $("#discussion-maxime").css("display","none");
    $("#discussion-alicia").css("display","block");
    $("#discussion-frero").css("display","none");
})

$("#frero").on("click", function(){
    $("#discussion-maxime").css("display","none");
    $("#discussion-alicia").css("display","none");
    $("#discussion-frero").css("display","block");
})