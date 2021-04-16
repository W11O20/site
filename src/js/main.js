jQuery(function ($) {
  document.getElementById("btn-menu").onclick = function (event) {
    document.getElementsByTagName("nav")[0].classList.toggle("expand");
    document.getElementById("btn-menu").classList.toggle("expand");
  };
});
