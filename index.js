
let logo = document.getElementById('big-logo')
$(window).on("scroll", function(){
    var scrollPos = $(this).scrollTop();
    var transY = scrollPos / 2;
   // console.log(scrollPos)
    $('#big-logo').css({transform: 'translateY(' + transY +'px)'});
    $("#big-logo").css({ "opacity" : 1 - ((scrollPos + transY) / 500) })
    $('#big-button').css({transform: 'translateY(' + transY +'px)'});
    $("#big-button").css({ "opacity" : 1 - ((scrollPos + transY) / 500) })    
});

$(document).ready(function () {
    $(".close").hide();
    $(".sidebar").hide();
    $('#faq-text-1').hide()
    $('#faq-text-2').hide()
    $('#faq-text-3').hide()
    $('#faq-text-4').hide()
    $(".hamburger").click(function () {
        $(".sidebar").slideToggle("slow", function () {
            $(".hamburger").hide();
            $(".close").show();
        })
    })
    $(".close").click(function () {
        $(".sidebar").slideToggle("slow", function () {
            $(".close").hide();
            $(".hamburger").show();
        })
    })
    $("#faq-button-1").click(function () {
        $('#faq-text-1').slideToggle(350)
        $('#checkbox-1').toggleClass('button-color')
        $('#minus1').toggleClass('show')
        $('#plus1').toggleClass('hide')
    })
    $("#faq-button-2").click(function () {
        $('#faq-text-2').slideToggle(350)
        $('#checkbox-2').toggleClass('button-color')
        $('#minus2').toggleClass('show')
        $('#plus2').toggleClass('hide')
    })
    $("#faq-button-3").click(function () {
        $('#faq-text-3').slideToggle(350)
        $('#checkbox-3').toggleClass('button-color')
        $('#minus3').toggleClass('show')
        $('#plus3').toggleClass('hide')
    })
    $("#faq-button-4").click(function () {
        $('#faq-text-4').slideToggle(350)
        $('#checkbox-4').toggleClass('button-color')
        $('#minus4').toggleClass('show')
        $('#plus4').toggleClass('hide')
    })
})


function aboutClick() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1400);
    $(".close").hide();
    $(".sidebar").hide();
    $(".hamburger").show();
}


function roadClick() {
    $('html, body').animate({
        scrollTop: $("#roadmap").offset().top
    }, 1400);
    $(".close").hide();
    $(".sidebar").hide();
    $(".hamburger").show();
}

function teamClick() {
    $('html, body').animate({
        scrollTop: $("#team").offset().top
    }, 1400);
    $(".close").hide();
    $(".sidebar").hide();
    $(".hamburger").show();
}

function faqClick() {
    $('html, body').animate({
        scrollTop: $("#faq").offset().top
    }, 1400);
    $(".close").hide();
    $(".sidebar").hide();
    $(".hamburger").show();
}


function topClick() {
    $('html, body').animate({
        scrollTop: $("#top").offset().top
    }, 1400);
    $(".close").hide();
    $(".sidebar").hide();
    $(".hamburger").show();
}








