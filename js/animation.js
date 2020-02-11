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
        if(offsets + 700> role2.top){
            $('#about_ani3 div.role2 img').css({
                "animationName" : "up_fadein"
            })
        }
    })
}
function about4(){
    $(window).scroll(function(){
        var offsets = $(document).scrollTop();
        var about_main4 = $('.about_main4').offset();
        if(offsets + 200> about_main4.top){
            $('#about_ani4 div.consul_contact ul li').css({
                "animationName" : "up_fadein"
            })
        }
    })
}
function about5(){
    $(window).scroll(function(){
        var offsets = $(document).scrollTop();
        var about_main5 = $('.about_main5').offset();
        if(offsets + 200> about_main5.top){
            $('#about_ani5 div.all_map').css({
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