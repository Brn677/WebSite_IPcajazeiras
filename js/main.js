(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 500, 'easeInOutExpo');
        return false;
    });


    // Modal Video
    var $videoSrc;
    var $modal_title;

    $('.btn-play').click(function () {
        $videoSrc = $(this).attr("data-src");
        $modal_title = $(this).attr("data-text");
        
        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr("src", $videoSrc + "?autoplay=0&amp;modestbranding=1&amp;showinfoagenda");
            $(".modal-title").text($modal_title);
        })
    });

    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr("src", $videoSrc);
    })


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000
    });


  

// Testimonials carousel
    $('.agenda-carousel').owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    dots: true,
    loop: true,
    nav : true,
    navText : [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ],
    responsive: {
        0:{
            items:1
        },
        768:{
            items:2
        }
    }
    });


 // Carousel Geral
 $('.carousel-item'),({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    dots: false,
    loop: true,
    nav : true,
    navText : [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ],
    responsive: {
        0:{
            items:1
        },
        768:{
            items:2
        }
    }
    })
   
})(jQuery);

