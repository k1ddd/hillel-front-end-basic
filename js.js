$('.burger').click(function() {
    $(this).toggleClass('active');
    $('.menu__down').toggleClass('open');
})

$('#mySlider').slick(
{
        dots: true,
}
);

