function about1(){
    $(window).scroll(function(){
        var offsets = $(document).scrollTop();
        if(offsets *3 > 1200){
            $('#about_ani1 ul').css({
                "animationName" : "up_fadein"
            })
        }
    })
}
function about2(){
    $(window).scroll(function(){
        var offsets = $(document).scrollTop();
        var role = $('.role').offset();
        if(offsets *2 > role.top){
            $('#about_ani2 div.role img').css({
                "animationName" : "up_fadein"
            })
        }
    })
}
function about3(){
    $(window).scroll(function(){
        var offsets = $(document).scrollTop();
        var role2 = $('.role2').offset();
        if(offsets + 350> role2.top){
            $('#about_ani3 div.role2 img').css({
                "animationName" : "up_fadein"
            })
        }
    })
}
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