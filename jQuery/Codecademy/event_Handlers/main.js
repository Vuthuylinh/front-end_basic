$(document).ready(() => {
  $('.login-button').on('click', () => {
    $('.login-form').show();
  });

  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show()
  })

  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
  })
  /*
  $('.product-photo').on('mouseenter', () => {
    $('.product-photo').addClass('photo-active')
  }).on('mouseleave', () => {
    $('.product-photo').removeClass('photo-active')
  })
  */
  //event.currentTarget
  $('.product-photo').on('mouseenter', event => {
      $(event.currentTarget).addClass('photo-active')
    }).on('mouseleave', event => {
      $(event.currentTarget).removeClass('photo-active')
    })
}); 
