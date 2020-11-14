function myMenu() {
    document.getElementById("menu").style.display = "block";
    document.getElementById("hide").style.display = "none";
}
function closeMenu() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("hide").style.display = "block";
}
function myLanguage() {
    document.getElementById("language").style.height = "100%";
}
function closeLanguage() {
    document.getElementById("language").style.height = "0%";
}
// footer

function openCredits() {
    document.getElementById("img").style.height = "100%";
}
function closeCredits() {
    document.getElementById("img").style.height = "0";
}

$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 900) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    // $('#scroll').click(function(){ 
    //     $("html, body").animate({ scrollTop: 0 }, 600); 
    //     return false; 
    // }); 
});
function myList() {
var list = document.getElementById("myLista");
    if (list.style.display === "none") {
        list.style.display = "block";
    } else {
        list.style.display = "none";
    }
}
// slide
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        300:{
            items:1.3
        },
        320:{
            items:1.5
        },
        500:{
            items:2
        },
        710:{
            items:2.2
        },
        800:{
            items:2.5
        },
        900:{
            items:3
        },
        1050:{
            items:3.5
        },
        1200:{
            items:4
        }
        ,
        1500:{
            items:4.5
        },
        1700:{
            items:5
        }
    }
})
