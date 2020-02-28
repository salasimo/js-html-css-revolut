$(document).ready(function() {

// Il mio codice jQuery:

$(".menu-item a").click(function(){
    $(this).parent(".menu-item").children(".dropdown-menu").slideToggle(300);
});





});
