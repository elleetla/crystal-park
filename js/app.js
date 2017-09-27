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
            800:{
                items:4
            },
            1000:{
                items:8
            }
        }
    });

    $(".sub-one").click(function() {
        $('#subnav-footer-one').slideToggle("slow");
        $('#subnav-footer-two').hide();
        $('#subnav-footer-three').hide();
    });

    $(".sub-two").click(function() {
        $('#subnav-footer-two').slideToggle("slow");
        $('#subnav-footer-one').hide();
        $('#subnav-footer-three').hide();
    });

    $(".sub-three").click(function() {
        $('#subnav-footer-three').slideToggle("slow");
        $('#subnav-footer-two').hide();
        $('#subnav-footer-one').hide();
    });

});