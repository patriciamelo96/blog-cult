$(document).ready(function() {
    $(".menu-a").mouseenter(function(){
        $(this).css({"background-color":"black", "color":"white"})
    }).mouseout(function(){
        $(this).css({"background-color":"antiquewhite", "color":"black"})
    })
})