/* ***************************************************
 * Template Name: Buger Boost - v1.0.0
 * Template URL: https://shekhriyad.xyz/HomeLeader/
 * Author: Sheikh Riyad
 * License: https://shekhriyad.xyz/
 ************************************************** */
(function ($) {
    "use strict";

    // Sticky Header
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('header').addClass('sticky-header');
        } else {
            $('header').removeClass('sticky-header');
        }
    });

    if ($(window).scrollTop() > 100) {
        $('header').addClass('sticky-header');
    }

    //jQuery CounterUp
    $(".couter-up").counterUp({
        delay: 10,
        time: 1200
    });

    // scrollToTop
    $.scrollUp({
        scrollName: 'scrollUp',
        topDistance: '300',
        topSpeed: 150,
        animation: 'fade',
        animationInSpeed: 1500,
        animationOutSpeed: 1500,
        scrollText: '<i class="fas fa-level-up-alt"></i>',
        activeOverlay: false,
    });

    // FAQ Acordion
    let items = document.querySelectorAll(".faq-tab .faq-item");
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener("click", function () {
            if (items[i].classList.contains("active")) {
                items[i].classList.remove("active");
            } else {
                let activeNode = null;
                try {
                    activeNode = document.querySelector(".faq-tab .active");
                } catch (msg) {}
                items[i].classList.add("active");
                if (activeNode) {
                    activeNode.classList.remove("active");
                }
            }
        });
    }

    // Mobile Navigation
    if ($('#navigation-menu').length) {
        var $mobile_nav = $('#navigation-menu').clone().prop({
            id: 'mobile-menu'
        });

        $('body').append($mobile_nav);
        $('body').append('<div id="mobile-body-overlay"></div>');

        $(document).on('click', '#mobile-nav', function (event) {
            $('body').toggleClass('mobile-nav-active');
            $('#mobile-nav i').toggleClass('fa-times fa-align-right');
            $('#mobile-body-overlay').toggle();
        });

        $(document).click(function (e) {
            var container = $("#mobile-nav");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav i').toggleClass('fa-times fa-align-right');
                    $('#mobile-body-overlay').fadeOut();
                }
            }
        });
    } else if ($("#mobile-nav, #mobile-nav").length) {
        $("#mobile-nav, #mobile-nav").hide();
    }

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]'),
        $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function () {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1200, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                    });
                }
            }
        });

    // Navigation active state on scroll
    var nav_sections = $('section');
    var main_nav = $('.nav-menu, #mobile-menu');
    var main_nav_height = $('#header').outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        nav_sections.each(function () {
            var top = $(this).offset().top - main_nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                main_nav.find('li').removeClass('menu-active menu-item-active');
                main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('menu-active menu-item-active');
            }
        });
    });

    new WOW().init();

})(jQuery);
