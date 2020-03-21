$(document).ready(function(){
    getQueryString()
    if(params.key == "about1"){
            var introTag = $('.about_main1').offset()
            $('html,body').animate({
                scrollTop : introTag.top
            },0)
    }else if(params.key == "about2"){
        var introTag = $('.about_main2').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        },0)
    }else if(params.key == "about3"){
        var introTag = $('.about_main3').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        },0)
    }else if(params.key == "about4"){
        var introTag = $('.about_main4').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        },0)
    }else if(params.key == "hr1"){
            var introTag = $('#hr_intro1').offset()
            $('html,body').animate({
                scrollTop : introTag.top
            },0)
    }else if(params.key == "hr2"){
            var introTag = $('#hr_intro2').offset()
            $('html,body').animate({
                scrollTop : introTag.top
            }, 0)
    }else if(params.key == "hr3"){
            var introTag = $('#hr_intro3').offset()
            $('html,body').animate({
                scrollTop : introTag.top
            },0)
    }else if(params.key == "hr4"){
            var introTag = $('#hr_intro4').offset()
            $('html,body').animate({
                scrollTop : introTag.top
            },0)
    }else if(params.key == "hr5"){
            var introTag = $('#hr_intro5').offset()
            $('html,body').animate({
                scrollTop : introTag.top
            },0)
    }else if(params.key == "bdesign1"){
            var introTag = $('#bdesign_intro1').offset()
            $('html,body').animate({
                scrollTop : introTag.top
            },0)
    }else if(params.key == "bdesign2"){
            var introTag = $('#bdesign_intro2').offset()
            $('html,body').animate({
                scrollTop : introTag.top
            },0)
    }else if(params.key == "bdesign3"){
            var introTag = $('#bdesign_intro2').offset()
            $('html,body').animate({
                scrollTop : introTag.top
            },0)
    }else if(params.key == "bdesign4"){
        var introTag = $('#bdesign_intro3').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        },0)
    }else if(params.key == "etc1"){
        var introTag = $('#etc_intro1').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        },0)
    }else if(params.key == "etc2"){
        var introTag = $('#etc_intro2').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        },0)
    }else if(params.key == "etc3"){
        var introTag = $('#etc_intro3').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        },0)
    }else if(params.key == "etc4"){
        var introTag = $('#etc_intro4').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        },0)
    }else if(params.key == "etc5"){
        var introTag = $('#etc_intro5').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        },0)
    }else if(params.key == "etc6"){
        var introTag = $('#etc_intro6').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        },0)
    }else if(params.key == "etc7"){
        var introTag = $('#etc_intro7').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        },0)
    }

    $("#top_btn").html("<div class='fix_btn'>TOP</div>")
    $(".fix_btn").click(function(){
        $('html,body').animate({
            scrollTop : 00
        }, 800)
    })
    $("#hr_btn1").click(function(){
        var introTag = $('#hr_intro1').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        }, 800)
    })
    $("#hr_btn2").click(function(){
        var introTag = $('#hr_intro2').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        }, 800)
    })
    $("#hr_btn3").click(function(){
        var introTag = $('#hr_intro3').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        }, 800)
    })
    $("#hr_btn4").click(function(){
        var introTag = $('#hr_intro4').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        }, 800)
    })
    $("#bdesign_btn1").click(function(){
        var introTag = $('#bdesign_intro1').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        }, 800)
    })
    $("#bdesign_btn2").click(function(){
        var introTag = $('#bdesign_intro2').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        }, 800)
    })
    $("#bdesign_btn3").click(function(){
        var introTag = $('#bdesign_intro3').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        }, 800)
    })
    $("#bdesign_btn4").click(function(){
        var introTag = $('#bdesign_intro4').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        }, 800)
    })
    $("#etc_btn1").click(function(){
        var introTag = $('#etc_intro1').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        }, 800)
    })
    $("#etc_btn2").click(function(){
        var introTag = $('#etc_intro2').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        }, 800)
    })
    $("#etc_btn3").click(function(){
        var introTag = $('#etc_intro3').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        }, 800)
    })
    $("#etc_btn4").click(function(){
        var introTag = $('#etc_intro4').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        }, 800)
    })
    $("#etc_btn5").click(function(){
        var introTag = $('#etc_intro5').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        }, 800)
    })
    $("#etc_btn6").click(function(){
        var introTag = $('#etc_intro6').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        }, 800)
    })
    $("#etc_btn7").click(function(){
        var introTag = $('#etc_intro7').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        }, 800)
    })
})
function getQueryString(){
    params = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) {
        params[key] = value;
    });
    return params;
   }

$(document).ready(function(){

	$(document).bind("contextmenu", function(e) {

		return false;

	});

});

$(document)[0].oncontextmenu = function() { return false; }

$(document).mousedown(function(e) {

	if( e.button == 2 ) {

			alert('내용을 복사할 수 없습니다.');

			return false;

	} else {

			return true;

	}

});