let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('nav');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

$('.page-scroll').on('click', function(e){

    let href = $(this).attr('href');
    let element = $(href);

    $('html, body').animate({
        scrollTop: element.offset().top -50
    });

    e.preventDefault();
});

