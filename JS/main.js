console.log("RUBY COMPUTER'S");

// FOR INSTAGRAME :- https://www.instagram.com/ruby_computers/
// FOR WHATSAAP CHANNEL :-  https://www.whatsapp.com/channel/0029VafTAJQE50UqI95Jw62G

// Function to handle redirection to Instagram
function redirectToWhatsapp() {
    // Define the WhatsApp URL you want to redirect to
    const whatsappURL = "https://www.whatsapp.com/channel/0029VafTAJQE50UqI95Jw62G ";
    
    // Redirect the browser to the WhatsApp page
    window.location.href = whatsappURL;
}

// Function to handle redirection to Instagram
function redirectToInstagram() {
    // Define the Instagram URL you want to redirect to
    const instagramURL = "https://www.instagram.com/ruby_computers/";  // Replace with your actual Instagram URL
    
    // Redirect the browser to the Instagram page
    window.location.href = instagramURL;
}


//------------------------------------------------------------------------------------

//ADDING J.QUERY EFFECT'S TO THE HEADER PART OF THE WEBSITE

$(document).ready(function () {
    // Smooth scroll to anchor links
    $("a[href^='#']").on('click', function (event) {
        event.preventDefault();
        var target = $(this.getAttribute('href'));
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    });

    // Fade-in effect on page load for navbar links
    $(".centered-links a").each(function (index) {
        $(this).delay(500 * index).fadeIn(1000);
    });
});

//------------------------------------------------------------------------------------

// ADDING SOME EFFECT'S TO THE 1st MAIN SECTION OF THE WEBSITE

$(document).ready(function () {
    // Smooth scroll when clicking the "START NOW" button
    $(".start-now").on('click', function (event) {
        event.preventDefault();
        var target = $(this.getAttribute('href'));
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    });

    // Hover effect on the "START NOW" button to make it grow on hover
    $(".start-now").hover(
        function () {
            $(this).addClass("animate__pulse");
        },
        function () {
            $(this).removeClass("animate__pulse");
        }
    );

    // Adding fade-in effect to the image when scrolling into view
    $(window).on('scroll', function () {
        var imageOffset = $("#image_1").offset().top;
        var windowHeight = $(window).height();
        if ($(window).scrollTop() + windowHeight > imageOffset) {
            $("#image_1").addClass("animate__fadeInUp animate__delay-1s");
        }
    });
});

//------------------------------------------------------------------------------------

$(document).ready(function(){
    // Fade-in animation for text when the page loads
    $(".section-heading").fadeIn(1000);
    $(".section-text").fadeIn(2000);

    // Scroll Animation: Slide up effect when scrolling to the section
    $(window).scroll(function() {
        $(".section-heading").each(function() {
            var top_of_element = $(this).offset().top;
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_screen = $(window).scrollTop() + $(window).height();
            var top_of_screen = $(window).scrollTop();
            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
                $(this).addClass("section-heading"); // Triggers slide-up animation
            }
        });
    });
});

//------------------------------------------------------------------------------------
