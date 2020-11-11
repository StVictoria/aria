$("#js-rotating").Morphext({
  animation: "fadeIn",
  separator: ",",
  speed: 2000,
  complete: function () {},
});

$(window).on("scroll load", function () {
  if ($(".header").offset().top > 20) {
    $(".header").addClass("fixed");
  } else {
    $(".header").removeClass("fixed");
  }
});

$(function () {
  $(document).on("click", "a.pageScroll", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top,
        },
        600,
        "easeInOutExpo"
      );
    if ($("a.pageScroll").hasClass("active")) {
      $("a.pageScroll").removeClass("active");
      $anchor.addClass("active");
    } else {
      $anchor.addClass("active");
    }
    event.preventDefault();
  });
});
