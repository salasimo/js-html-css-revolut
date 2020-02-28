$(document).ready(function() {

// Il mio codice jQuery:

$(".menu-item a").click(function(){
    if ($(this).parent(".menu-item").children(".dropdown-menu").is(":visible")){
        $(this).parent(".menu-item").children(".dropdown-menu").slideToggle(300);
    } else {
        $(".dropdown-menu").slideUp(300);
        $(this).parent(".menu-item").children(".dropdown-menu").slideToggle(300);
    }

});






});
