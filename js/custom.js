var mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
    "use strict";
    
    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
    
};
////
$(document).ready(function () {
    $('.nav a[href*=#]').bind('click', function (e) {
        e.preventDefault(); // prevent hard jump, the default behavior

        var target = $(this).attr("href"); // Set the target as variable

        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 600, function () {
            location.hash = target; //attach the hash (#jumptarget) to the pageurl
        });

        return false;
    });
});

$(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();
    
    $('.Wuidth100').each(function (i) {
        if ($(this).position().top <= scrollDistance) {
            $('.nav a.active').removeClass('active');
            $('.nav a').eq(i).addClass('active');
        }
    });
}).scroll();


///
$('[open-modal]').on('click', function () {
    var id = $(this).attr('open-modal');
    $('.modal#' + id).addClass('active');
});

$('[close-modal]').on('click', function () {
    $(this).parents('.modal').removeClass('active');
});

$('.modal').on('click', function (e) {
    if (e.target !== this) { return };
    $(this).removeClass('active');
});
