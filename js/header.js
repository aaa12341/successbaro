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
                            <li><a href="about.html?key=about1">업무수행 원칙</a></li>
                            <li><a href="about.html?key=about2">석세스바로 역할</a></li>
                            <li><a href="about.html?key=about3">기업경영 구성요소</a></li>
                            <li><a href="about.html?key=about4">오시는 길</a></li>
                        </ul>
                    </div>
                </div>
                <div class="main_ul hr_navul">
                    <div class="nav_title"><a href="hr.html">경영과 HR</a></div>
                    <div class="main_nav hr_nav">
                        <ul>
                            <li><a href="hr.html?key=hr1">경영과 HR</a></li>
                            <li><a href="hr.html?key=hr2">경영 상시자문</a></li>
                            <li><a href="hr.html?key=hr3">경영현황관리체계</a></li>
                            <li><a href="hr.html?key=hr4">HR컨설팅 프로세스</a></li>
                            <li><a href="hr.html?key=hr5">경영컨설팅 프로세스</a></li>
                        </ul>
                    </div>
                </div>
                <div class="main_ul bd_navul">
                    <div class="nav_title"><a href="bdesign.html">Business Design</a></div>
                    <div class="main_nav bdesign_nav">
                        <ul>
                            <li><a href="bdesign.html?key=bdesign1">비즈니스 모델 디자인</a></li>
                            <li><a href="bdesign.html?key=bdesign2">경영전략 수립</a></li>
                            <li><a href="bdesign.html?key=bdesign2">년간사업계획 수립</a></li>
                            <li><a href="bdesign.html?key=bdesign4">마케팅프로세스</a></li>
                        </ul>
                    </div>
                </div>
                <div class="main_ul etc_navul">
                    <div class="nav_title"><a href="etc.html">Etc.</a></div>
                    <div class="main_nav etc_nav">
                        <ul>
                            <li><a href="etc.html?key=etc1">포인트 경영스쿨</a></li>
                            <li><a href="etc.html?key=etc2">ISO 인증 컨설팅</a></li>
                            <li><a href="etc.html?key=etc3">감사시스템 구축</a></li>
                            <li><a href="etc.html?key=etc4">법인설립 컨설팅</a></li>
                            <li><a href="etc.html?key=etc5">기타 컨설팅</a></li>
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
            <!-- <ul class="mo_nav">
                    <li></li>
                    <li></li>
                    <li></li>
            </ul> -->
        </div>
        <div class="nav_box"></div>
    </div>
</header>
`
$(document).ready(function(){
    $('header').on("mouseenter focus",function(){
        $('.nav_box').stop().slideDown(function(){
            $('.main_nav').delay(100).show()
        })
    })
    $('.nav_box, body').mouseleave(function()
        {$('.main_nav').hide()
        $('.nav_box').stop().delay(100).slideUp()
    })
})