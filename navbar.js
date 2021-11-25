let logo = document.getElementById('big-logo')
$(document).scroll(function(){
    var scrollPos = $(this).scrollTop();
    var transY = scrollPos / 2;
    $('#big-logo').css({transform: 'translateY(' + transY +'px)'});
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