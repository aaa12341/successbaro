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
function hr1(){
    $(document).ready(function(){
        $('.part1_gp .gp').css({
            "animationName" : "up_fadein"
        })
    })
}
function hr2(){
    $(window).scroll(function(){
        var offsets = $(document).scrollTop();
        var hr_part2 = $('.hr_part2').offset();
        if(offsets + 700> hr_part2.top){
            $('.part2_gp .gp img').css({
                "animationName" : "up_fadein"
            })
        }
    })
}
function hr3(){
    $(window).scroll(function(){
        var offsets = $(document).scrollTop();
        var hr_part3 = $('.hr_part3').offset();
        if(offsets + 300> hr_part3.top){
            $('.gp1 div.gp_box').css({
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
function bd1(){
    $(window).scroll(function(){
        var offsets = $(document).scrollTop();
        var bdesign_main1 = $('.bdesign_main1').offset();
        if(offsets *2 > bdesign_main1.top){
            $('.bprocess .pro').css({
                "animationName" : "up_fadein"
            })
        }
    })
}
function bd2(){
    $(window).scroll(function(){
        var offsets = $(document).scrollTop();
        var bdesign_main2 = $('.bdesign_main2').offset();
        if(offsets +700 > bdesign_main2.top){
            $('.bdesign_main2 .tool_explain2 .step').css({
                "animationName" : "up_fadein"
            })
        }
    })
}
function bd3(){
    $(window).scroll(function(){
        var offsets = $(document).scrollTop();
        var bdesign_main3 = $('.bdesign_main3').offset();
        if(offsets + 300 > bdesign_main3.top){
            $('.bdesign_main3 img').css({
                "animationName" : "up_fadein"
            })
        }
    })
}
function bd4(){
    $(window).scroll(function(){
        var offsets = $(document).scrollTop();
        var bdesign_main4 = $('.bdesign_main4').offset();
        if(offsets + 600 > bdesign_main4.top){
            $('.bdesign_main4 .intro_box').css({
                "animationName" : "up_fadein"
            })
        }
    })
}

function etc1(){
    $(window).scroll(function(){
        var offsets = $(document).scrollTop();
        var etc_part1 = $('.etc_part1').offset();
        if(offsets + 800 > etc_part1.top){
            $('.etc_part1 img').css({
                "animationName" : "up_fadein"
            })
        }
    })
}
function etc2(){
    $(window).scroll(function(){
        var offsets = $(document).scrollTop();
        var etc_part2 = $('.etc_part2').offset();
        if(offsets + 700 > etc_part2.top){
            $('.etc_part2 img').css({
                "animationName" : "up_fadein"
            })
        }
    })
}
function etc3(){
    $(window).scroll(function(){
        var offsets = $(document).scrollTop();
        var etc_part3 = $('.etc_part3').offset();
        if(offsets + 700 > etc_part3.top){
            $('#etc3_ani img').css({
                "animationName" : "up_fadein"
            })
        }
    })
}
function etc4(){
    $(window).scroll(function(){
        var offsets = $(document).scrollTop();
        var etc_main4 = $('.etc_main4').offset();
        if(offsets + 500 > etc_main4.top){
            $('.etc_main4 img').css({
                "animationName" : "up_fadein"
            })
        }
    })
}
function etc5(){
    $(window).scroll(function(){
        var offsets = $(document).scrollTop();
        var etc_main5 = $('.etc_main5').offset();
        if(offsets + 600 > etc_main5.top){
            $('.etc_main5 img').css({
                "animationName" : "up_fadein"
            })
        }
    })
}
function etc6(){
    $(window).scroll(function(){
        var offsets = $(document).scrollTop();
        var etc_part6 = $('.etc_part6').offset();
        if(offsets + 700 > etc_part6.top){
            $('.etc_part6 .intro_box').css({
                "animationName" : "up_fadein"
            })
        }
    })
}
function etc7(){
    $(window).scroll(function(){
        var offsets = $(document).scrollTop();
        var etc_part7 = $('.etc_part7').offset();
        if(offsets + 900 > etc_part7.top){
            $('.etc_part7 .etc_consul').css({
                "animationName" : "up_fadein"
            })
        }
    })
}
function contact1(){
    $(window).ready(function(){
            $('.consul_contact ul li').css({
                "animationName" : "up_fadein"
            })
    })
}