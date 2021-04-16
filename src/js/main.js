jQuery(function ($) {
  
  /*document.getElementById("btn-menu").onclick = function (event) {
    document.getElementsByTagName("nav")[0].classList.toggle("expand");
  };*/

  $('#btn-menu').on('click', function(event){
    $(event.currentTarget).closest('nav').toggleClass("expand");
  });

});
