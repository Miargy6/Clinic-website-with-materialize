$(document).ready(function(){
  //Side Nav
  $('.sidenav').sidenav();
  //Department dropdown nav
  $('.dropdown-trigger').dropdown({
    hover: true,
    coverTrigger: false,
    inDuration: 300
  });
  //Department dropdown sidenav
  $('.dropdown-trigger-sidenav').dropdown({
    coverTrigger: false
  });
  
  //Floating Button
  $('.fixed-action-btn').floatingActionButton();

  //tooltips
  $('.tooltipped').tooltip();

  //Parallax effect
  $('.parallax').parallax();

});


/*Slider Header*/
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


