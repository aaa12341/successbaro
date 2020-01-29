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
                <li><a href="incubating1.html">법인설립 컨설팅</a></li>
                <li><a href="incubating2.html">기업 Incubating</a></li>
            </ul>
        </div>
        <div class="main_nav consul_nav">
            <ul>
                <li><a href="consulting1.html">정기경영자문</a></li>
                <li><a href="consulting2.html">경영현황 관리체계</a></li>
                <li><a href="consulting3.html">BI 기반 경영컨설팅</a></li>
                <li><a href="consulting4.html">마케팅 프로세스 구축</a></li>
                <li><a href="consulting5.html">경영전략 수립</a></li>
            </ul>
        </div>
        <div class="main_nav hr_nav">
            <ul>
                <li><a href="hr.html">HR 컨설팅</a></li>
            </ul>
        </div>
        <div class="main_nav ser_nav">
            <ul>
                <li><a href="service1.html">ISO 인증 컨설팅</a></li>
                <li><a href="service1.html">감사행정시스템 구축</a></li>
                <li><a href="service1.html">상시감사시스템 구축</a></li>
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
})