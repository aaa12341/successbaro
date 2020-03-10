const HeaderTag = document.getElementById('head');
    HeaderTag.innerHTML = ` <header>
    <div class="wrap">
        <div class="nav_bar">
            <a href="index.html">
                <h1><img src="img/logo3.png" alt="로고"></h1>
            </a>
            <div class="navul">
                <div class="main_ul ab_navul">
                    <div class="nav_title"><a href="about.html">About</a></div>
                    <div class="main_nav about_nav">
                        <ul>
                            <li><a href="about.html?key=about1">컨설팅수행 원칙</a></li>
                            <li><a href="about.html?key=about2">석세스바로 역할</a></li>
                            <li><a href="about.html?key=about3">경영과 HR</a></li>
                            <li><a href="about.html?key=about4">오시는 길</a></li>
                        </ul>
                    </div>
                </div>
                <div class="main_ul hr_navul">
                    <div class="nav_title"><a href="hr.html">직무컨설팅</a></div>
                    <div class="main_nav hr_nav">
                        <ul>
                            <li><a href="hr.html?key=hr1">직무분석과 직무평가</a></li>
                            <li><a href="hr.html?key=hr2">직무평가 프로세스</a></li>
                            <li><a href="hr.html?key=hr3">임금체계 개선</a></li>
                            <li><a href="hr.html?key=hr4">HR컨설팅 프로세스</a></li>
                        </ul>
                    </div>
                </div>
                <div class="main_ul bd_navul">
                    <div class="nav_title"><a href="bdesign.html">비즈니스 프로세스</a></div>
                    <div class="main_nav bdesign_nav">
                        <ul>
                            <li><a href="bdesign.html?key=bdesign1">프로세스 설계 및 구축</a></li>
                            <li><a href="bdesign.html?key=bdesign2">비즈니스 모델 디자인</a></li>
                            <li><a href="bdesign.html?key=bdesign3">마케팅 프로세스 구축</a></li>
                            <li><a href="bdesign.html?key=bdesign4">감사시스템 구축</a></li>
                        </ul>
                    </div>
                </div>
                <div class="main_ul etc_navul">
                    <div class="nav_title"><a href="etc.html">Etc.</a></div>
                    <div class="main_nav etc_nav">
                        <ul>
                            <li><a href="etc.html?key=etc1">경영 상시자문</a></li>
                            <li><a href="etc.html?key=etc2">경영현황 관리체계</a></li>
                            <li><a href="etc.html?key=etc3">포인트 경영스쿨</a></li>
                            <li><a href="etc.html?key=etc4">경영전략 수립<br>/년간 사업</a></li>
                            <li><a href="etc.html?key=etc5">ISO 인증컨설팅</a></li>
                            <li><a href="etc.html?key=etc6">법인설립 컨설팅</a></li>
                            <li><a href="etc.html?key=etc7">기타 컨설팅</a></li>
                        </ul>
                    </div>
                </div>
                <div class="main_ul cont_navul">
                    <div class="nav_title"><a href="contact.html">Contact</a></div>
                    <div class="main_nav cont_nav">
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div class="mo_nav" id="nav-icon3" onclick='MoNavFade(this)'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="nav_box">
            <div class="mo_menu" id="monav_menu">
                <div class="menu menu1">
                    <div class="menu_title"><a href="about.html">About</a></div>
                    <ul>
                        <li><a href="about.html?key=about1">컨설팅수행 원칙</a></li>
                        <li><a href="about.html?key=about2">석세스바로 역할</a></li>
                        <li><a href="about.html?key=about3">경영과 HR</a></li>
                        <li><a href="about.html?key=about4">오시는 길</a></li>
                    </ul>
                </div>
                <div class="menu menu2">
                    <div class="menu_title"><a href="hr.html">직무컨설팅</a></div>
                    <ul>
                        <li><a href="hr.html?key=hr1">직무분석과 직무평가</a></li>
                        <li><a href="hr.html?key=hr2">직무평가 프로세스</a></li>
                        <li><a href="hr.html?key=hr3">임금체계 개선</a></li>
                        <li><a href="hr.html?key=hr4">HR컨설팅 프로세스</a></li>
                    </ul>
                </div>
                <div class="menu menu3">
                    <div class="menu_title"><a href="bdesign.html">비즈니스 프로세스</a></div>
                    <ul>
                        <li><a href="bdesign.html?key=bdesign1">프로세스 설계 및 구축</a></li>
                        <li><a href="bdesign.html?key=bdesign2">비즈니스 모델 디자인</a></li>
                        <li><a href="bdesign.html?key=bdesign3">마케팅 프로세스 구축</a></li>
                        <li><a href="bdesign.html?key=bdesign4">감사시스템 구축</a></li>
                    </ul>
                </div>
                <div class="menu menu5">
                    <div class="menu_title"><a href="contact.html">Contact</a></div>
                    <ul>
                        <li></li>
                    </ul>
                </div>
                <div class="menu menu4">
                    <div class="menu_title"><a href="etc.html">Etc.</a></div>
                    <ul>
                        <li><a href="etc.html?key=etc1">경영 상시자문</a></li>
                        <li><a href="etc.html?key=etc2">경영현황 관리체계</a></li>
                        <li><a href="etc.html?key=etc3">포인트 경영스쿨</a></li>
                        <li><a href="etc.html?key=etc4">경영전략 수립/년간 사업</a></li>
                        <li><a href="etc.html?key=etc5">ISO 인증컨설팅</a></li>
                        <li><a href="etc.html?key=etc6">법인설립 컨설팅</a></li>
                        <li><a href="etc.html?key=etc7">기타 컨설팅</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</header>
`
$(document).ready(function(){
    $('.navul').on("mouseenter focus",function(){
        $('.nav_box').stop().slideDown(function(){
            $('.main_nav').delay(100).show()
        })
    })
    $('section').mouseenter(function()
        {$('.main_nav').hide()
        $('.nav_box').stop().delay(100).slideUp()
    })
})
function MoNavFade(thisvalue) {
    if (thisvalue.className == "mo_nav") {
      $('.nav_box').stop().fadeIn(function () {
        $('.mo_menu').delay(100).show();
      });
      $('#nav-icon3').addClass('open');
  
    } else {
      $('.mo_menu').hide();
      $('.nav_box').stop().delay(100).fadeOut();
      $('#nav-icon3').removeClass('open');
    }
  }