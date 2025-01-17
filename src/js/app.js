document.addEventListener("DOMContentLoaded", () => {
  $(".js-accordeon-mob-item").on("click", function () {
    $(this).toggleClass("_is-open");
    $(this).next(".js-accordeon-mob-content").slideToggle();
  });

  $('.js-menu-open').on('click', function () {
    $('.js-menu').addClass('_is-open');
  })

  $('.js-menu-close').on('click', function () {
    $('.js-menu').removeClass('_is-open');
  })
});
