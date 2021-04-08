// footer
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 900) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
});
// slide
