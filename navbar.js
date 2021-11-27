let logo = document.getElementById('big-logo')
$(window).on("scroll", function(){
    var scrollPos = $(this).scrollTop();
    var transY = scrollPos / 2;
   // console.log(scrollPos)
    $('#big-logo').css({transform: 'translateY(' + transY +'px)'});
    $("#big-logo").css({ "opacity" : 1 - ((scrollPos + transY) / 700) })
    $('#big-button').css({transform: 'translateY(' + transY +'px)'});
    $("#big-button").css({ "opacity" : 1 - ((scrollPos + transY) / 700) })    
});

$(document).ready(function () {
    $(".close").hide();
    $(".sidebar").hide();
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
})
