$(document).ready(function(){
    $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn();
    } else {
        $('.back-to-top').fadeOut();
    }
    });
    $('.back-to-top').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
    });
});

function redirectCU(e) {
    if (e.ctrlKey && e.which == 85) {
        window.location.replace("/");
        return false;
    }
}
document.onkeydown = redirectCU;