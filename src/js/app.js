document.addEventListener("DOMContentLoaded", () => {
  $(".js-accordeon-mob-item").on("click", function () {
    $(this).toggleClass("_is-open");
    $(this).next(".js-accordeon-mob-content").slideToggle();
  });

  $('.js-menu-open').on('click', function () {
    $('.js-menu').addClass('_is-open');
    $('body').addClass('_no-scroll');
  })

  $('.js-menu-close').on('click', function () {
    $('.js-menu').removeClass('_is-open');
    $('body').removeClass('_no-scroll');
  })

  if(window.matchMedia('(max-width: 1023px)').matches) {
    $('.dropdown__item').on('click', function (e) {
      e.preventDefault();
      $(this).next().slideToggle()
    })
  }
});
