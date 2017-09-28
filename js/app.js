// jQuery
$('document').ready(function() {

    // nav burger
    $(".nav-burger").click(function(){
        $("#modal-burger").fadeToggle(500);
        $(".nav-modal-burger li").fadeIn(500);
        $('#nav-icon3').toggleClass('open');
    });

    // Slider carousels nav footer
    $('.les-bureaux .owl-carousel').owlCarousel({
        loop:false,
        margin:15,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:8
            }
        }
    });

    $('.les-services .owl-carousel').owlCarousel({
        loop:false,
        margin:15,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:7
            }
        }
    });

    $('.localisation .owl-carousel').owlCarousel({
        loop:false,
        margin:15,
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

    $('.perspectives .owl-carousel').owlCarousel({
        loop:false,
        margin:15,
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