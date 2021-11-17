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