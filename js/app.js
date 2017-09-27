// jQuery
$(function() {

    // nav burger
    $(".nav-burger").click(function(){
        $("#modal-burger").fadeToggle(500);
        $(".nav-modal-burger li").fadeIn(500);
        $('#nav-icon3').toggleClass('open');
    });

    // Slider carousel nav footer
    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav:false,
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

});