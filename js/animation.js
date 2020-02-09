function hr1(){
    $(window).scroll(function(){
        var offsets = $(document).scrollTop();
        var hrManin2 = $('.hr_main2').offset();
        if(offsets * 3> hrManin2.top){
                $('#intro_ani div.process').css({
                    "animationName" : "up_fadein"
                })
                $('#intro_ani1 div.hr_area').css({
                    "animationName" : "up_fadein"
                })
            }
    })
}
function service1(){
    $(window).scroll(function(){
        var offsets = $(document).scrollTop();
        if(offsets > 1200){
            $('#ser_intro2 div.intro_box').css({
                "animationName" : "up_fadein"
            })
        }
    })
}