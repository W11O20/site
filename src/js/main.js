jQuery(function ($) {
  
  /*document.getElementById("btn-menu").onclick = function (event) {
    document.getElementsByTagName("nav")[0].classList.toggle("expand");
  };*/

  $('#btn-menu').on('click', function(event){
    $(event.currentTarget).closest('nav').toggleClass("expand");
  });

  $('.slick-test').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true
  });

  new WOW().init();

});
