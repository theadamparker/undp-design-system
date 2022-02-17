// sdg modal open
export function sdgModal() {
  const windowTop = window.top || window;
  const $modalOpen = $('.sdg-card:not(.sdg-card-link)');

  // Remove hash in url on modal close
  function removeHash() {
    windowTop.history.pushState('', document.title, windowTop.location.pathname + windowTop.location.search);
  }

  // Load modal open with hash
  $(window).on("load", function() {
    var hash = windowTop.location.hash;
    if (hash.length) {
      $(`a[href$='${hash}'].sdg-card:not(.sdg-card-link)`).trigger('click');
    }
  });

  // Modal open on sdgcard click
  $($modalOpen).on('click', function (event) {
    event.preventDefault();
    $('.modal-sdg-content').animate({ scrollTop: 0 }, 'slow');

    // Get href in sdgcard
    var url = $(this).attr('href');
    var currentcolor = $(this).attr('class').split(' ')[1];
    var currentgoal = $(this).find('h4').text();
    var currentheading = $(this).find('strong').text();

    windowTop.location.hash = url;
    $(this).addClass('last-active');
    $('.modal-sdg').addClass('sdg-open').find('.sdg-container').addClass(currentcolor);
    $('.modal-sdg').find('.heading').find('h3').text('Goal '+ currentheading);
    $('.modal-sdg').find('.heading').find('h2').text(currentgoal);

    $('body').addClass('sdgmodal-open');
    $($modalOpen).attr('tabindex', '-1');
  });

  // Modal close someone hits the escape key
  $(document).keydown((event) => {
    if (event.keyCode == 27 && $('.modal-sdg').hasClass('sdg-open')) {
      removeHash();
      $('.modal-sdg').addClass('animation-out');
      setTimeout(function () {
        $('.modal-sdg').removeClass('sdg-open animation-out');
      }, 200);
      $('body').removeClass('sdgmodal-open');
      $('.last-active').focus().removeClass('last-active');
      $($modalOpen).attr('tabindex', '0');
    }
  });

  // Modal close on close button
  $('.modal-sdg .close, .modal-sdg .modal-header').on('click', () => {
    var currentcolor = $('.sdg-container').attr('class').split(' ')[1];
    $('.sdg-container').removeClass(currentcolor);
    $('.modal-sdg').addClass('animation-out');
    setTimeout(function () {
      $('.modal-sdg').removeClass('sdg-open animation-out');
    }, 200);
    $('body').removeClass('sdgmodal-open');
    $($modalOpen).removeAttr('tabindex');
    // Call removeHash funtion for remove hash in url on close button
    removeHash();
  });
}
