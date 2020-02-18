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
    $(window).scroll(function(){
        var offsets = $(document).scrollTop();
        var hr_main1 = $('.hr_main1').offset();
        if(offsets *2> hr_main1.top){
                $('.hr_main1 img').css({
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
function hr5(){
    $(window).scroll(function(){
        var offsets = $(document).scrollTop();
        var hr_part5 = $('.hr_part5').offset();
        if(offsets + 600 > hr_part5.top){
                $('.hr_part5 img').css({
                    "animationName" : "up_fadein"
                })
            }
    })
}
function bd1(){
    $(document).ready(function(){
        $('#bd_ani1 div.tool_explain2 div').css({
            "animationName" : "up_fadein"
        })
    })
}
function bd2(){
    $(window).scroll(function(){
        var offsets = $(document).scrollTop();
        var bdesign_main2 = $('.bdesign_main2').offset();
        if(offsets *2 > bdesign_main2.top){
                $('.bdesign_main2 img').css({
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
function etc1(){
    $(window).scroll(function(){
        var offsets = $(document).scrollTop();
        var etc_main1 = $('.etc_main1').offset();
        if(offsets *2 > etc_main1.top){
            $('.etc_main1 img').css({
                "animationName" : "up_fadein"
            })
        }
    })
}
function etc2(){
    $(window).scroll(function(){
        var offsets = $(document).scrollTop();
        var etc_main2 = $('.etc_main2').offset();
        if(offsets +500 > etc_main2.top){
            $('.etc_main2 img').css({
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
function etc4(){
    $(window).scroll(function(){
        var offsets = $(document).scrollTop();
        var etc_part41 = $('.etc_part41').offset();
        if(offsets + 600 > etc_part41.top){
            $('.etc_part41 div.intro_box').css({
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
    $(window).ready(function(){
            $('.consul_contact ul li').css({
                "animationName" : "up_fadein"
            })
    })
}