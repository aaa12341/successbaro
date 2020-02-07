const HeaderTag = document.getElementById('head');
    HeaderTag.innerHTML = ` <header>
    <div class="wrap">
        <div class="nav_bar">
            <a href="index.html">
                <h1><img src="img/logo3.png" alt="로고"></h1>
            </a>
            <ul class="navul">
                <li><a href="about.html">About</a></li>
                <li><a href="incubating1.html">Incubating</a></li>
                <li><a href="consulting1.html">Consulting</a></li>
                <li><a href="hr.html">HR Consulting</a></li>
                <li><a href="service1.html">Service</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
    </div>
</header>
<nav>
    <div class="wrap">
        <div class="main_nav incu_nav">
            <ul>
                <li id="incu_btn1">비즈니스 모델 디자인</li>
                <li id="incu_btn2">포인트 경영스쿨</li>
                <li id="incu_btn3">법인설립 컨설팅</li>
            </ul>
        </div>
        <div class="main_nav consul_nav">
            <ul>
                <li>경영 상시자문</li>
                <li>BI 기반 경영컨설팅</li>
                <li>상시 경영자문 & <br>경영컨설팅 영역</li>
                <li>컨설팅 수행 프로세스</li>
                <li>경영현황 관리체계</li>
                <li>경영전략 수립</li>
                <li>마케팅 프로세스 구축</li>
            </ul>
        </div>
        <div class="main_nav hr_nav">
            <ul>
                <li><a href="hr.html">HR 컨설팅</a></li>
            </ul>
        </div>
        <div class="main_nav ser_nav">
            <ul>
                <li>ISO 인증 컨설팅</li>
                <li>감사시스템 구축</li>
            </ul>
        </div>
    <div>
</nav>
`
$(document).ready(function(){
    $('.navul').mouseenter(function(){
        $('nav').stop().slideDown()
    })
    $('nav, body').mouseleave(function(){
        $('nav').stop().slideUp()
    })
    $('.navul li:nth-child(2)').mouseenter(function(){
        $(this).html("<a href='incubating1.html'>기업 인큐베이팅</a>")
    })
    $('.navul li:nth-child(2)').mouseleave(function(){
        $(this).html("<a href='incubating1.html'>Incubating</a>")
    })
    $('.navul li:nth-child(3)').mouseenter(function(){
        $(this).html("<a href='consulting1.html'>경영 컨설팅</a>")
    })
    $('.navul li:nth-child(3)').mouseleave(function(){
        $(this).html("<a href='consulting1.html'>Consulting</a>")
    })
    $('.navul li:nth-child(5)').mouseenter(function(){
        $(this).html("<a href='service1.html'>기타 서비스</a>")
    })
    $('.navul li:nth-child(5)').mouseleave(function(){
        $(this).html("<a href='service1.html'>Service</a>")
    })

    $("#incu_btn1").click(function(){
        var introTag = $('#incu_intro1').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        })
    })
    $("#incu_btn2").click(function(){
        var introTag = $('#incu_intro2').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        })
    })
    $("#incu_btn3").click(function(){
        var introTag = $('#incu_intro3').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        })
    })
    $("#con_btn1").click(function(){
        var introTag = $('#con_intro1').offset()
        $('html,body').animate({
            scrollTop : introTag.top
        })
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