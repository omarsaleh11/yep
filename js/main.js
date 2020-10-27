function myMenu() {
    document.getElementById("menu").style.display = "block";
}
function closeMenu() {
    document.getElementById("menu").style.display = "none";
}
function myLanguage() {
    document.getElementById("language").style.height = "100%";
}
function closeLanguage() {
    document.getElementById("language").style.height = "0%";
}
// footer
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (document.body.scrollTop > 380 || document.documentElement.scrollTop > 200) {
    document.getElementById("footer").style.bottom = "0";
  } else {
    document.getElementById("footer").style.bottom = "-10rem";
    document.getElementById("footer").style.background = "#2222228d";
  }
  prevScrollpos = currentScrollPos;
}
function openCredits() {
    document.getElementById("img").style.height = "100%";
}
function closeCredits() {
    document.getElementById("img").style.height = "0";
}
// slide
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1.5
        },
        600:{
            items:2.8
        },
        1000:{
            items:4
        }
    }
})