$(document).ready(function() {
    const images = [
        './images/bottom1.png',
        './images/bottom2.png',
        './images/bottom3.png'
    ];

    $('.content-card').on('click', function() {
        $('.content-card').removeClass('active');
        $(this).addClass('active');
        const index = $(this).index();
        $('#main-image').attr('src', images[index]);
    });
});

  