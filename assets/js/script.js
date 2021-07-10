$(document).ready(function () {



    
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > $("#quienes").offset().top - 50) {
            $("nav").addClass("color-fondo");
        } else {
            $("nav").removeClass("color-fondo");
        };
    });



    // smooth scrolling
    $('a[href*="#"]').click(function (event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 200);
            }
        }
    });

    // tooltip
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
