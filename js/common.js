$(document).ready(function(){
    $("#top_btn").html("<div class='fix_btn'>TOP</div>")
    $(".fix_btn").click(function(){
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
    $("#con_btn1").click(function(){
        var introTag = $('#con_intro1').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        }, 800)
    })
    $("#con_btn2").click(function(){
        var introTag = $('#con_intro2').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        }, 800)
    })
    $("#con_btn3").click(function(){
        var introTag = $('#con_intro3').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        }, 800)
    })
    $("#con_btn4").click(function(){
        var introTag = $('#con_intro4').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        }, 800)
    })
    $("#con_btn5").click(function(){
        var introTag = $('#con_intro5').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        }, 800)
    })
    $("#con_btn6").click(function(){
        var introTag = $('#con_intro6').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        }, 800)
    })
    $("#con_btn7").click(function(){
        var introTag = $('#con_intro7').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        }, 800)
    })
    $("#ser_btn1").click(function(){
        var introTag = $('#ser_intro1').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        }, 800)
    })
    $("#ser_btn2").click(function(){
        var introTag = $('#ser_intro2').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        }, 800)
    })
})