// js
$(function() {

    // nav burger
    $(".nav-burger").click(function(){
        $("#modal-burger").fadeToggle(400);
        $(".nav-modal-burger li").fadeIn(100);
        $('#nav-icon3').toggleClass('open');
    });

});