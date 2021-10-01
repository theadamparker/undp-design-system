/* Faq JS start custom */
export function FaqFun() {
  $('#accordion').each(function() {
    var $accordian = $(this);
    $accordian.find('.accordion-head').on('click', function() {
      console.log("reee")
      $(this).parent().find(".accordion-head").removeClass('open close');
      $(this).removeClass('open').addClass('close');
      $accordian.find('.accordion-body').slideUp();
      if (!$(this).next().is(':visible')) {
        $(this).removeClass('close').addClass('open');
        $(this).next().slideDown();
      }
    });
  });

  // $('.accordion-head').on('click', function() {
  //   console.log("eeee")
  //   $(this).parent().find('.accordion-body').slideUp();
  //   $(this).next('.accordion-body').slideDown()
  // })
}
/* Faq JS end custom */
