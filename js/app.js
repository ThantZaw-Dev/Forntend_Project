
// nav
$(document).ready(function () {
  let screenHeight = $(window).height();
  $(window).scroll(function () {
    let currentPosition = $(this).scrollTop();
    // console.log(currentPosition);
    if (currentPosition >= screenHeight) {
      $(".site-nav").addClass("site-nav-scroll");
    } else {
      $(".site-nav").removeClass("site-nav-scroll");
    }
  });
 //for mobile
  $(".navbar-toggler").click(function () {
    let result = $(".navbar-collapse").hasClass("show");

    if (result) {
      $(".menu-icon").removeClass('fa-close').addClass('fa-bars');
    } else {
      $(".menu-icon").removeClass('fa-bars').addClass('fa-close');
    }
  })

})

function setActive(current){
  $('.nav-link').removeClass('current-section');
  $(`.nav-link[href='#${current}']`).addClass('current-section');
}

function navScroll()
{
  let currentSection = $("section[id]");
  currentSection.waypoint(function(direction){ 
    if(direction === 'down'){
      let currentSectionId = $(this.element).attr('id');
      setActive(currentSectionId);
    }
  },{offset : '10%'})

  currentSection.waypoint(function (direction){
    if(direction === 'up'){
      let currentSectionId = $(this.element).attr('id');

      setActive(currentSectionId);
    }
  },{offset : '-10%'})
}

navScroll();

wow = new WOW(
  {
    boxClass: 'wow',      // default
    animateClass: 'animate__animated', // default
    offset: 0,          // default
    mobile: true,       // default
    live: true        // default
  }
)
wow.init();



//Loading

$(window).on("load",function (){
  $('.loader-container').fadeOut(500,function(){
    $(this).remove();
  });
})







