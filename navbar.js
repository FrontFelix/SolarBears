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



window.addEventListener('scroll', function() {
    console.log(this.scrollY)
    let value = this.scrollY * 1
    let moveText = document.getElementById('movingText')
    moveText.style.top = value + "px"
    if(this.scrollY > 370) {
        $('#movingText').fadeOut("fast", function(){})
    }else if(this.scrollY < 370) {
        $('#movingText').fadeIn("fast", function(){})
    }
})