$(document).ready(function(){
    $("#top_btn").html("<div class='fix_btn'>버튼</div>")
    $(".fix_btn").click(function(){
        // var introTag = $('.about_section2').offset()
        $('html,body').animate({
            scrollTop : 00
        }, 800)
    })
    $("#btn2").click(function(){
        var introTag = $('.incu_main2').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        }, 800)
    })

})