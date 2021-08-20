$(document).ready(() => {

  $('.login-button').on('click', () => {
    $('.login-form').toggle();
  });

  //.css()
  /*
  $('.menu-button').on('mouseenter', () => {
    $('.menu-button').css({
      color:'#C3FF00',
      backgroundColor:'#535353'
      })
    $('.nav-menu').show();
  })

  $('.nav-menu').on('mouseleave', () => {
    $('.menu-button').css({
      color:'#EFEFEF',
      backgroundColor:'#303030'
      })
    $('.nav-menu').hide();
  })
  */
  //.animate()
  /*
  $('.menu-button').on('mouseenter', () => {
      $('.menu-button').animate({
        color:'#C3FF00',
        backgroundColor:'#535353',
        fontSize:'24px'
        },200)
      $('.nav-menu').show();
    })

    $('.nav-menu').on('mouseleave', () => {
      $('.menu-button').animate({
        color:'#EFEFEF',
        backgroundColor:'#303030',
        fontSize:'18px'
        },200)
      $('.nav-menu').hide();
    })
    */
  //.addClass, removeClass
  /*
  $('.menu-button').on('mouseenter', () => {
    $('.menu-button').addClass('button-active')
    $('.nav-menu').removeClass('hide')
    $('.nav-menu').show();
  })
  */
  // toggleClass
  $('.menu-button').on('click', () => {
    $('.nav-menu').toggleClass('hide');
    $('.menu-button').toggleClass('button-active')
  })
});
