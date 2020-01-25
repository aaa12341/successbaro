const HeaderTag = document.getElementById('head');
    HeaderTag.innerHTML = ` <header>
    <div class="wrap">
        <div class="nav_bar">
            <a href="index.html">
                <h1><img src="img/logo3.png" alt=""></h1>
            </a>
            <ul class="navul">
                <li><a href="about.html">About</a></li>
                <li><a href="incubating1.html">Incubating</a></li>
                <li><a href="mentoring1.html">Mentoring</a></li>
                <li><a href="">Consulting</a></li>
                <li><a href="">Innovation</a></li>
                <li><a href="">Rebuilding</a></li>
                <li><a href="">기타 컨설팅</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
    </div>
</header>
<nav>
    <div class="wrap">
        <!-- <div class="main_nav about_nav"></div> -->
        <div class="main_nav incu_nav">
            <ul>
                <li><a href="incubating1.html">법인설립 컨설팅</a></li>
                <li><a href="incubating2.html">사업타당성 분석</a></li>
                <li><a href="incubating2.html">홈페이지개발</a></li>
            </ul>
        </div>
        <div class="main_nav mento_nav">
            <ul>
                <li><a href="mentoring1.html">마케팅 프로세스 구축</a></li>
                <li><a href="mentoring1.html">사업타당성 분석</a></li>
                <li><a href="mentoring1.html">홈페이지개발</a></li>
            </ul>
        </div>
        <div class="main_nav mento_nav">
            <ul>
                <li><a href="mentoring1.html">월 업무현황 관리체계</a></li>
                <li><a href="mentoring1.html">경영흐름 분석·예측</a></li>
                <li><a href="mentoring1.html">매출·손익·자금 분석</a></li>
                <li><a href="mentoring1.html">재무제표기반 경영분석</a></li>
                <li><a href="mentoring1.html">마케팅 프로세스 구축</a></li>
                <li><a href="mentoring1.html">년간 사업계획 수립</a></li>
                <li><a href="mentoring1.html">경영전략 수립</a></li>
            </ul>
        </div>
        <div class="main_nav mento_nav">
            <ul>
                <li><a href="mentoring1.html">채용프로세스 구축</a></li>
                <li><a href="mentoring1.html">평가체계 구축</a></li>
                <li><a href="mentoring1.html">임금체계 개선</a></li>
                <li><a href="mentoring1.html">근로시간제 설계</a></li>
                <li><a href="mentoring1.html">학습체계 구축</a></li>
                <li><a href="mentoring1.html">직급체계·승진제도</a></li>
                <li><a href="mentoring1.html">직원복지제도</a></li>
                <li><a href="mentoring1.html">퇴직프로그램</a></li>
            </ul>
        </div>
        <div class="main_nav mento_nav">
            <ul>
                <li><a href="mentoring1.html">신성장동력 발굴</a></li>
                <li><a href="mentoring1.html">ERP 구축 컨설팅</a></li>
            </ul>
        </div>
        <div class="main_nav mento_nav">
            <ul>
                <li><a href="mentoring1.html">종합진단</a></li>
                <li><a href="mentoring1.html">맞춤 처방</a></li>
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
    $('.navul li:nth-child(1)').mouseenter(function(){
        $(this).html("<a href='about.html'>회사소개</a>")
    })
    $('.navul li:nth-child(1)').mouseleave(function(){
        $(this).html("<a href='about.html'>About</a>")
    })
    $('.navul li:nth-child(2)').mouseenter(function(){
        $(this).html("<a href='incubating1.html'>인큐베이팅</a>")
    })
    $('.navul li:nth-child(2)').mouseleave(function(){
        $(this).html("<a href='incubating1.html'>Incubating</a>")
    })
    $('.navul li:nth-child(3)').mouseenter(function(){
        $(this).html("<a href='mentoring1.html'>멘토링</a>")
    })
    $('.navul li:nth-child(3)').mouseleave(function(){
        $(this).html("<a href='mentoring1.html'>Mentoring</a>")
    })
})