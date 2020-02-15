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
        if(offsets + 700 > role.top){
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
        if(offsets + 800> role2.top){
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
            $('#about_ani4 div.all_map').css({
                "animationName" : "up_fadein"
            })
        }
    })
}
function hr4(){
    $(window).scroll(function(){
        var offsets = $(document).scrollTop();
        var hr_part4 = $('.hr_part4').offset();
        if(offsets + 800> hr_part4.top){
                $('#intro_ani div.process').css({
                    "animationName" : "up_fadein"
                })
            }
    })
}
function etc3(){
    $(window).scroll(function(){
        var offsets = $(document).scrollTop();
        var etc_part3 = $('.etc_part3').offset();
        if(offsets + 600 > etc_part3.top){
            $('#etc3_ani div.intro_box').css({
                "animationName" : "up_fadein"
            })
        }
    })
}
function etc5(){
    $(window).scroll(function(){
        var offsets = $(document).scrollTop();
        var etc_part5 = $('.etc_part5').offset();
        if(offsets + 600 > etc_part5.top){
            $('.etc_part5 div.etc_consul').css({
                "animationName" : "up_fadein"
            })
        }
    })
}
function contact1(){
    $(window).scroll(function(){
        var offsets = $(document).scrollTop();
        if(offsets * 4 > 300){
            $('.consul_contact ul li').css({
                "animationName" : "up_fadein"
            })
        }
    })
}