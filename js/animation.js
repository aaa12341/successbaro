$(window).scroll(function(){
    var offsets = $(document).scrollTop();
    var hrManin2 = $('.hr_main2').offset();
    var hrManin3 = $('.hr_main3').offset();
    console.log(hrManin2.top)
    console.log(offsets)

    if(offsets * 3> hrManin2.top){
        $('#intro_ani div.process').css({
            "animationName" : "up_fadein"
        })
        $('#intro_ani1 div.hr_area').css({
            "animationName" : "up_fadein"
        })
    }
})