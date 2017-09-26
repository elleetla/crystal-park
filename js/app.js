// js
$(function() {

    // nav burger
    $(".nav-burger").click(function(){
        $("#modal-burger").fadeToggle(400);
        $(".nav-modal-burger li").fadeIn(100);
        $('#nav-icon3').toggleClass('open');
    });

    // Slider carousel nav footer
    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    // modal click menu

});

var modalOne = document.getElementById("modal-one");
var closeModalOne = document.querySelector(".close-modal-one");

function clickModalOne() {
    modalOne.style.display = 'block';
}