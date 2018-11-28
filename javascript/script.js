 

$(document).ready(function(){

    // for the sticky nav
$('.js--section-feature').waypoint(function(direction){
    if(direction == "down"){
        $('nav').addClass('sticky');
    }else{
        $('nav').removeClass('sticky');
    }
    
}, {
    offset:'60px;'
}

);

// Scroll on buttons
$('.js--scroll-to-plan').click(function(){
    $('html, body').animate({scrollTop: $('.js--section-plan').offset().top}, 2000);

});

$('.js--scroll-to-start').click(function(){
    $('html, body').animate({scrollTop: $('.js--section-feature').offset().top}, 2000);

});

// Navigation scroll
// Work on this


// Animation on scroll

$('.js--wp-1').waypoint(function(direction){
    $('.js--wp-1').addClass('animated fadeIn');
  
  });
    
$('.js--wp-2').waypoint(function(direction){
  $('.js--wp-2').addClass('animated fadeInUp');

});

$('.js--wp-3').waypoint(function(direction){
  $('.js--wp-3').addClass('animated fadeIn');

});

$('.js--wp-4').waypoint(function(direction){
  $('.js--wp-4').addClass('animated pulse');

});

// Mobile nav
$('.js--nav-icon').click(function(){
    var nav = $('.js--main-nav');
    nav.slideToggle(200);
    var icon = $('.js--nav-icon i');
    if(icon.hasClass('ion-navicon-round')){
        icon.addClass('ion-close-round');
        icon.removeClass('ion-navicon-round');

    }else{
        icon.addClass('ion-navicon-round');
        icon.removeClass('ion-close-round');
    }
})



});


let work = document.getElementsByClassName('para-work');
  for(let i=0; i<work.length; i += 1){
       work[i].addEventListener('mouseover', ()=>{
      work[i].textContent=work[i].textContent.toUpperCase();

    });

    work[i].addEventListener('mouseout', ()=>{
      work[i].textContent=work[i].textContent.toLowerCase();
    });
  }


let myHeading = document.getElementById('head');

myHeading.addEventListener('mouseover', ()=>{
  myHeading.textContent ='we care about your meal!';
});

myHeading.addEventListener('mouseout', ()=>{
  myHeading.textContent ='good bye to junk food, get your favourite meal here.';
});

$('header').css('display', 'none').fadeIn(12000);
$('h1').css('display', 'none').fadeIn(1000);

/*Map */
new GMaps({
    div:'.map',
    lat:9.0765,
    lng:7.3986
  });
  

    //Home Doctor Slider
    $("#hm-doctor-slider").owlCarousel({
        center: true,
        autoplay: true,
        items: 3,
        margin: 10,
        loop: true,
        smartSpeed: 1000,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            992: {
                items: 3,
                nav: false
            }
        }
    });