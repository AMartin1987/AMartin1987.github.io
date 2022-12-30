

$(document).ready(function() {

  // Toggle class "is-active" for navbar items on click
  $(".navbar-item").on("click", function(e) {
    $(".navbar-item").removeClass("is-active");
    $(this).addClass("is-active");

    })

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
  });

});