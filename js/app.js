$(function () {
  // Get the current year
  $('#year').text(new Date().getFullYear())

  // Configure slider
  $('.carousel').carousel({
    interval: 4000,
    pause: 'hover',
  })

  // Video Play
  // Auto play modal video
  $('.video-item').click(function () {
    var theModal = $(this).data('target'),
      videoSRC = $(this).attr('data-video'),
      videoSRCauto =
        videoSRC +
        '?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1'
    $(theModal + ' iframe').attr('src', videoSRCauto)
    $(theModal + ' button.close').click(function () {
      $(theModal + ' iframe').attr('src', videoSRC)
    })
  })

  // Lightbox Init
  $(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault()
    $(this).ekkoLightbox()
  })

  // Slick slider
  $('.slider').slick({
    infinite: true,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true
  })
})
