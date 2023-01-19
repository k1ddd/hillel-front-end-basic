$(".burger").click(function () {
  $(this).toggleClass("active");
  $(".menu__down").toggleClass("open");
});

$(".mySlider").slick({
  dots: true,
});

$(document).ready(function () {
  $("#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4").click(function () {
    $(this).toggleClass("open");
  });
});
