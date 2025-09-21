(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonial carousel
    $(".testimonial-carousel-1").owlCarousel({
        loop: true,
        dots: false,
        margin: 25,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 10000,
        autoplayHoverPause: false,
        responsive: {
            0:{
                items:1
            },
            575:{
                items:1
            },
            767:{
                items:2
            },
            991:{
                items:3
            }
        }
    });

    $(".testimonial-carousel-2").owlCarousel({
        loop: true,
        dots: false,
        rtl: true,
        margin: 25,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 10000,
        autoplayHoverPause: false,
        responsive: {
            0:{
                items:1
            },
            575:{
                items:1
            },
            767:{
                items:2
            },
            991:{
                items:3
            }
        }
    });

})(jQuery);


// Mon code
// *********
// *********

// Récupération des données
const form = document.querySelector("#form");
const nom = document.querySelector("#nomComplet");
const adresse = document.querySelector("#adresse");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const pays = document.querySelector("#pays");
const ville = document.querySelector("#ville");
const evenement = document.querySelector("#evenement");
const place = document.querySelector("#place");
const date = document.querySelector("#date");
 

// Elèments 
form.addEventListener('submit', e => {
    e.preventDefault();

    verifier_info();
    
} )

//  Méthodes
function verifier_info(){
    const nomValue = nom.value.trim();
    const adresseValue  =  adresse.value.trim();
    const phoneValue  =  phone.value.trim();
    const emailValue =  email.value.trim();
    const paysValue  = pays.value.trim();
    const villeValue  =  ville.value.trim();
    const evenementValue   =  evenement.value.trim();
    const placeValue  =  place.value.trim();
    const dateValue  =  date.value.trim();


    if(nomValue !== "" ){
        if(nomValue.match(/^[a-wA-Z]/) ){
            if(nomValue.length > 5){
                initialCorrect(nom);
                if(adresseValue !== ""){
                    initialCorrect(adresse);
                    if(phoneValue !==""){
                        initialCorrect(phone);
                        if(verification_email(emailValue) ){
                            initialCorrect(email);
                            if(paysValue !==""){
                                initialCorrect(pays);
                                if(villeValue !==""){
                                    initialCorrect(ville);
                                    if(evenementValue !==""){
                                        initialCorrect(evenement);
                                        if(placeValue !==""){
                                            initialCorrect(place);
                                            if(dateValue !==""){
                                                initialCorrect(date);
                                                alert("Bonjour "+ nomValue + "! votre reservation a été enregistré avec succès !");
                                                // console.log(nomValue, adresseValue ,phoneValue, emailValue , paysValue, villeValue, evenementValue, placeValue, dateValue );
                                            } else {  erreur(date);}                                     
                                        } else {  erreur(place);}
                                    } else {  erreur(evenement);}
                                } else {  erreur(ville);}
                            }else { erreur(pays); }
                        }else { erreur(email); }
                    }else { erreur(phone); }
                }else { erreur(adresse); }
            }else { erreur(nom); }
        }else {  erreur(nom); }
    }else {   erreur(nom);}
}

function erreur(e){
    // 
    e.classList.remove("border-primary");
    e.style.border = "1.8px solid red" ;
}
function initialCorrect(e){
    e.classList.add("border-primary");
    
}
function verification_email(email){
    return /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email);
}