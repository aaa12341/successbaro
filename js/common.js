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
    }else if(params.key == "incu2"){
            var introTag = $('#incu_intro2').offset()
            $('html,body').animate({
                scrollTop : introTag.top
            },0)
    }else if(params.key == "incu3"){
            var introTag = $('#incu_intro3').offset()
            $('html,body').animate({
                scrollTop : introTag.top
            }, 0)
    }else if(params.key == "consul2"){
            var introTag = $('#con_intro2').offset()
            $('html,body').animate({
                scrollTop : introTag.top
            },0)
    }else if(params.key == "consul3"){
            var introTag = $('#con_intro3').offset()
            $('html,body').animate({
                scrollTop : introTag.top
            },0)
    }else if(params.key == "consul4"){
            var introTag = $('#con_intro4').offset()
            $('html,body').animate({
                scrollTop : introTag.top
            },0)
    }else if(params.key == "consul5"){
            var introTag = $('#con_intro5').offset()
            $('html,body').animate({
                scrollTop : introTag.top
            },0)
    }else if(params.key == "consul6"){
            var introTag = $('#con_intro6').offset()
            $('html,body').animate({
                scrollTop : introTag.top
            },0)
    }else if(params.key == "consul7"){
            var introTag = $('#con_intro7').offset()
            $('html,body').animate({
                scrollTop : introTag.top
            },0)
    }else if(params.key == "ser2"){
        var introTag = $('#ser_intro2').offset()
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
    $("#incu_btn1").click(function(){
        var introTag = $('#incu_intro1').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        }, 800)
    })
    $("#incu_btn1").click(function(){
        var introTag = $('#incu_intro1').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        }, 800)
    })
    $("#incu_btn2").click(function(){
        var introTag = $('#incu_intro2').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        }, 800)
    })
    $("#incu_btn3").click(function(){
        var introTag = $('#incu_intro3').offset()
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
function getQueryString(){
    params = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) {
        params[key] = value;
    });
    console.log(params)
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