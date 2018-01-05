/*global $*/

$(document).ready(function () {
    "use strict";
    
    setInterval(function () {
        $('.counter .countdown .countdown-container.seconds .countdown-heading.seconds-top').css({opacity : 0});
        $('.counter .countdown .countdown-container.seconds .countdown-heading.seconds-top').animate({opacity : 1});
    }, 1000);
    
    // more buttons
    
//    $('.more-buttons .button').on('click', function () {
//        if (!$(this).hasClass('active')) {
//            $(this).addClass('active');
//        }
//    });
    
    // notify me button
    
    $('.more-buttons .button.notify-me').on('click', function () {
        
        if (!$('#counter-section').hasClass('sec-hide')) {
            $('#counter-section').addClass('sec-hide');
        }
        
        if (!$('.overlay').hasClass('show')) {
            $('.overlay').addClass('show');
        }
        
        if (!$('#notify-form-section').hasClass('show')) {
            $('#notify-form-section').addClass('show');
        }
    });
    
    // notify me cancel buton 
    
    $('#notify-form-section .cancel-button').on('click', function () {
        
        if ($('#notify-form-section').hasClass('show')) {
            $('#notify-form-section').removeClass('show');
        }
        
        if ($('.overlay').hasClass('show')) {
            $('.overlay').removeClass('show');
        }
        
        if ($('#counter-section').hasClass('sec-hide')) {
            $('#counter-section').removeClass('sec-hide');
        }
    });
    
    // more info button
    
    $('.more-buttons .button.more-info').on('click', function () {
        
        if (!$('#counter-section').hasClass('sec-hide')) {
            $('#counter-section').addClass('sec-hide');
        }
        
        if (!$('.overlay').hasClass('show')) {
            $('.overlay').addClass('show');
        }
        
        if (!$('#more-info-section').hasClass('show')) {
            $('#more-info-section').addClass('show');
        }
    });
    
    // more info cancel buton 
    
    $('#more-info-section .cancel-button').on('click', function () {
        
        if ($('#more-info-section').hasClass('show')) {
            $('#more-info-section').removeClass('show');
        }
        
        if ($('.overlay').hasClass('show')) {
            $('.overlay').removeClass('show');
        }
        
        if ($('#counter-section').hasClass('sec-hide')) {
            $('#counter-section').removeClass('sec-hide');
        }
    });
    
});