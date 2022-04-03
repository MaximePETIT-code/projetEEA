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


//affichage et rétrécissement des images au clics dans les messages
$(".image01" ).on( "click", function() {
    $(".dm").css("display","block");
    $(".discussion").addClass("no-scrool");
    $(".opacity80").css("display","block");
})

$(".image02" ).on( "click", function() {
    $(".capture").css("display","block");
    $(".discussion").addClass("no-scrool");
    $(".opacity80").css("display","block");
})

$(".croix" ).on( "click", function() {
    $(".affichage").css("display","none");
    $(".discussion").removeClass("no-scrool");
    $(".opacity80").css("display","none");

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