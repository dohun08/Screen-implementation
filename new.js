let offsetX, offsetY;
let isDragging = false;
const popup = document.getElementById("popup");
const popup_bar = document.getElementById("popup_bar");
popup_bar.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - popup.getBoundingClientRect().left;
    offsetY = e.clientY - popup.getBoundingClientRect().top;
    popup.style.zIndex = "5";
        popup2.style.zIndex = "4";
});

document.addEventListener('mousemove', (e) => {
    popup.style.transition = "0s";
    if (isDragging) {
        const minLeft = 0;
        const minTop = 0;
        const maxLeft = window.innerWidth - popup.offsetWidth;
        const maxTop = window.innerHeight - popup.offsetHeight;
        
        // 새 위치를 계산
        let newLeft = e.clientX - offsetX;
        let newTop = e.clientY - offsetY;
        
        // 경계 체크
        if (newLeft < minLeft) newLeft = minLeft;
        if (newTop < minTop) newTop = minTop;
        if (newLeft > maxLeft) newLeft = maxLeft;
        if (newTop > maxTop) newTop = maxTop;
        
        // 위치 업데이트
        popup.style.left = `${newLeft}px`;
        popup.style.top = `${newTop}px`;
        popup.style.transform = 'none'; // 초기 transform을 무효화

        
    }
});



let offsetX2, offsetY2;
let isDragging2 = false;
const popup2 = document.getElementById("popup2");
const popup_bar2 = document.getElementById("popup_bar2");
popup_bar2.addEventListener('mousedown', (e) => {
    isDragging2 = true;
    offsetX2 = e.clientX - popup2.getBoundingClientRect().left;
    offsetY2 = e.clientY - popup2.getBoundingClientRect().top;
    popup.style.zIndex = "4";
        popup2.style.zIndex = "5";
});

document.addEventListener('mousemove', (e) => {
    popup2.style.transition = "0s";
    if (isDragging2) {
        const minLeft2 = 0;
        const minTop2 = 0;
        const maxLeft2 = window.innerWidth - popup2.offsetWidth;
        const maxTop2 = window.innerHeight - popup2.offsetHeight;
        
        // 새 위치를 계산
        let newLeft2 = e.clientX - offsetX2;
        let newTop2 = e.clientY - offsetY2;
        
        // 경계 체크
        if (newLeft2 < minLeft2) newLeft2 = minLeft2;
        if (newTop2 < minTop2) newTop2 = minTop2;
        if (newLeft2 > maxLeft2) newLeft2 = maxLeft2;
        if (newTop2 > maxTop2) newTop2 = maxTop2;
        
        // 위치 업데이트
        popup2.style.left = `${newLeft2}px`;
        popup2.style.top = `${newTop2}px`;
        popup2.style.transform = 'none'; // 초기 transform을 무효화

        
    }
});



document.addEventListener('mouseup', () => {
    isDragging = false;
});
document.addEventListener('mouseup', () => {
    isDragging2 = false;
});

function show(){
    popup.style.height = "200px";
    popup.style.transition = "0.2s"; 
}
function show2(){
    popup2.style.height = "470px";
    popup2.style.transition = "0.2s"; 
}
function close(){
    popup.style.display = "none";
}
function closePopup() {
    popup.style.height = "0px";
    popup.style.transition = "0.2s";
    popup.style.overflow = "hidden";
    setTimeout(close, 300);
}
function closePopup2() {popup2.style.display = 'none';}
function close2(){
    popup2.style.height = "0px";
    popup2.style.transition = "0.2s";
    popup2.style.overflow = "hidden";
    setTimeout(closePopup2, 300);
  }

window.onload = function() {
    setTimeout(show, 100);
    setTimeout(show2, 100);
};




document.querySelector(".bar1").addEventListener("mouseover", function(){document.querySelector("#bar1").style.display = "block"});
document.querySelector(".bar1").addEventListener("mouseleave", function(){document.querySelector("#bar1").style.display = "none"});
document.querySelector("#bar1").addEventListener("mouseover", function(){document.querySelector("#bar1").style.display = "block"});
document.querySelector("#bar1").addEventListener("mouseleave", function(){document.querySelector("#bar1").style.display = "none"});

document.querySelector(".bar2").addEventListener("mouseover", function(){document.querySelector("#bar2").style.display = "block"});
document.querySelector(".bar2").addEventListener("mouseleave", function(){document.querySelector("#bar2").style.display = "none"});
document.querySelector("#bar2").addEventListener("mouseover", function(){document.querySelector("#bar2").style.display = "block"});
document.querySelector("#bar2").addEventListener("mouseleave", function(){document.querySelector("#bar2").style.display = "none"});

document.querySelector(".bar3").addEventListener("mouseover", function(){document.querySelector("#bar3").style.display = "block"});
document.querySelector(".bar3").addEventListener("mouseleave", function(){document.querySelector("#bar3").style.display = "none"});
document.querySelector("#bar3").addEventListener("mouseover", function(){document.querySelector("#bar3").style.display = "block"});
document.querySelector("#bar3").addEventListener("mouseleave", function(){document.querySelector("#bar3").style.display = "none"});

document.querySelector(".bar4").addEventListener("mouseover", function(){document.querySelector("#bar4").style.display = "block"});
document.querySelector(".bar4").addEventListener("mouseleave", function(){document.querySelector("#bar4").style.display = "none"});
document.querySelector("#bar4").addEventListener("mouseover", function(){document.querySelector("#bar4").style.display = "block"});
document.querySelector("#bar4").addEventListener("mouseleave", function(){document.querySelector("#bar4").style.display = "none"});

document.querySelector(".bar5").addEventListener("mouseover", function(){document.querySelector("#bar5").style.display = "block"});
document.querySelector(".bar5").addEventListener("mouseleave", function(){document.querySelector("#bar5").style.display = "none"});
document.querySelector("#bar5").addEventListener("mouseover", function(){document.querySelector("#bar5").style.display = "block"});
document.querySelector("#bar5").addEventListener("mouseleave", function(){document.querySelector("#bar5").style.display = "none"});

document.querySelector(".bar6").addEventListener("mouseover", function(){document.querySelector("#bar6").style.display = "block"});
document.querySelector(".bar6").addEventListener("mouseleave", function(){document.querySelector("#bar6").style.display = "none"});
document.querySelector("#bar6").addEventListener("mouseover", function(){document.querySelector("#bar6").style.display = "block"});
document.querySelector("#bar6").addEventListener("mouseleave", function(){document.querySelector("#bar6").style.display = "none"});

document.querySelector(".bar7").addEventListener("mouseover", function(){document.querySelector("#bar7").style.display = "block"});
document.querySelector(".bar7").addEventListener("mouseleave", function(){document.querySelector("#bar7").style.display = "none"});
document.querySelector("#bar7").addEventListener("mouseover", function(){document.querySelector("#bar7").style.display = "block"});
document.querySelector("#bar7").addEventListener("mouseleave", function(){document.querySelector("#bar7").style.display = "none"});

document.querySelector(".bar8").addEventListener("mouseover", function(){document.querySelector("#bar8").style.display = "block"});
document.querySelector(".bar8").addEventListener("mouseleave", function(){document.querySelector("#bar8").style.display = "none"});
document.querySelector("#bar8").addEventListener("mouseover", function(){document.querySelector("#bar8").style.display = "block"});
document.querySelector("#bar8").addEventListener("mouseleave", function(){document.querySelector("#bar8").style.display = "none"});

document.querySelector(".bar9").addEventListener("mouseover", function(){document.querySelector("#bar9").style.display = "block"});
document.querySelector(".bar9").addEventListener("mouseleave", function(){document.querySelector("#bar9").style.display = "none"});
document.querySelector("#bar9").addEventListener("mouseover", function(){document.querySelector("#bar9").style.display = "block"});
document.querySelector("#bar9").addEventListener("mouseleave", function(){document.querySelector("#bar9").style.display = "none"});


function gg1(){
    document.querySelector(".gg1").style.background = "rgb(0,114,188)";
    document.querySelector(".gg1").style.color = "white";
    document.querySelector(".gg1").style.border = "0.9px solid rgb(0,114,200)";
    document.querySelector(".gg2").style.background = "white";
    document.querySelector(".gg2").style.color = "rgb(100, 100, 100)";
    document.querySelector(".gg2").style.border = "1px solid rgb(200, 200, 200)";
    document.querySelector(".gg3").style.background = "white";
    document.querySelector(".gg3").style.color = "rgb(100, 100, 100)";
    document.querySelector(".gg3").style.border = "1px solid rgb(200, 200, 200)";

    document.querySelector(".blbl2").innerHTML = "<h3>2024년 상반기 공기질 검사결과 안내</h3> <p>2024년 상반기 공기질 검사결과 안내<br><span>2024.06.28</span></p>";
    document.querySelector("#style1").innerHTML ="2024학년도 학교주관 교복 구매를 위한 입찰 공고 전 교복 규격을 사전 공개    ";
    document.querySelector("#style2").innerHTML ="2024.9.1.자 교장공모 1차 면접 심사위원 명단    ";
    document.querySelector("#style3").innerHTML ="2024.9.1.자 교장공모 2차 면접심사 참관 안내    ";
    document.querySelector("#style4").innerHTML ="2024년 9월 1일자 개방형 교장공모제 지원자 서류 실명파일 탑재    ";
}
function gg2(){
    document.querySelector(".gg2").style.background = "rgb(0,114,188)";
    document.querySelector(".gg2").style.color = "white";
    document.querySelector(".gg2").style.border = "0.9px solid rgb(0,114,200)";
    document.querySelector(".gg1").style.background = "white";
    document.querySelector(".gg1").style.color = "rgb(100, 100, 100)";
    document.querySelector(".gg1").style.border = "1px solid rgb(200, 200, 200)";
    document.querySelector(".gg3").style.background = "white";
    document.querySelector(".gg3").style.color = "rgb(100, 100, 100)";
    document.querySelector(".gg3").style.border = "1px solid rgb(200, 200, 200)";

    document.querySelector(".blbl2").innerHTML = "<h3>캄보디아 교육부 차관, 국장, 교장 등 30여명 본교 방문</h3><p>캄보디아에서 2024.06.28.(금)에 교육부...<span>2024.07.02";
    document.querySelector("#style1").innerHTML = "2024년 부산소마고 서면교차로(삼성빌딩) 전광판 광고 시작";
    document.querySelector("#style2").innerHTML = "부산소프트웨어마이스터고, 국제인공지능대전 참가(인공지능신문 2024.4.28.)";
    document.querySelector("#style3").innerHTML = "2024년 부산 지방 기능경기대회 입상 축하 소식";
    document.querySelector("style4").innerHTML = "KBS연중캠페인-부산소마고 촬영";
}
function gg3(){
    document.querySelector(".gg3").style.background = "rgb(0,114,188)";
    document.querySelector(".gg3").style.color = "white";
    document.querySelector(".gg3").style.border = "0.9px solid rgb(0,114,200)";
    document.querySelector(".gg2").style.background = "white";
    document.querySelector(".gg2").style.color = "rgb(100, 100, 100)";
    document.querySelector(".gg2").style.border = "1px solid rgb(200, 200, 200)";
    document.querySelector(".gg1").style.background = "white";
    document.querySelector(".gg1").style.color = "rgb(100, 100, 100)";
    document.querySelector(".gg1").style.border = "1px solid rgb(200, 200, 200)";

    document.querySelector(".blbl2").innerHTML = "<h3>2024년 7-8월 보건소식지</h3><span>2024.07.05";
    document.querySelector("#style1").innerHTML ="2024학년도 자녀사랑 뉴스레터 7월호    ";
    document.querySelector("#style2").innerHTML ="2024년 백일해 및 마이코플라즈마 폐렴균 감염증 등 호흡기 감염병 예방 내\    ";
    document.querySelector("#style3").innerHTML ="7월 영양소식 안내    ";
    document.querySelector("#style4").innerHTML ="2024학년도 직업계고 내일행복드림 바우처 지원사업 안내    ";
}


var one = document.querySelector("#stop");
var two = document.querySelector("#stop2");

const kindWrap =  document.querySelector('.kind_wrap');
const slider = kindWrap.querySelector('.slider');
const slideLis = slider.querySelectorAll('li')
const moveButton = kindWrap.querySelector('.arrow');
  
/* ul 넓이 계산해 주기 */
const liWidth = slideLis[0].clientWidth;
const sliderWidth = liWidth * slideLis.length;
slider.style.width = `${sliderWidth}px` ;
  
/* 리스너 설치하기 */
let currentIdx = 0; // 슬라이드 현재 번호
let translate = 0; // 슬라이드 위치 값


var ball1 = document.querySelector("#ball1");
var ball2 = document.querySelector("#ball2");
var ball3 = document.querySelector("#ball3");
var ball4 = document.querySelector("#ball4");
var ball5 = document.querySelector("#ball5");
var k=1;

function ballone(){
    ball1.style.background = "#2C61AB";
    ball2.style.background = "none";
    ball3.style.background = "none";
    ball4.style.background = "none";
    ball5.style.background = "none";
}
function balltwo(){
    ball1.style.background = "none";
    ball2.style.background = "#2C61AB";
    ball3.style.background = "none";
    ball4.style.background = "none";
    ball5.style.background = "none";
}
function ballthree(){
    ball1.style.background = "none";
    ball2.style.background = "none";
    ball3.style.background = "#2C61AB";
    ball4.style.background = "none";
    ball5.style.background = "none";
}
function ballfour(){
    ball1.style.background = "none";
    ball2.style.background = "none";
    ball3.style.background = "none";
    ball4.style.background = "#2C61AB";
    ball5.style.background = "none";
}
function ballfive(){
    ball1.style.background ="none";
    ball2.style.background = "none";
    ball3.style.background = "none";
    ball4.style.background = "none";
    ball5.style.background =  "#2C61AB";
}
ball1.addEventListener("click", function(){
    ballone();
    currentIdx = 1;
    translate = 0;
    slider.style.transform = `translateX(${translate}px)`;
});
ball2.addEventListener("click", function(){
    balltwo();
    currentIdx = 2;
    translate = -1500;
    slider.style.transform = `translateX(${translate}px)`;
});
ball3.addEventListener("click", function(){
    ballthree();
    currentIdx = 3;
    translate = -3000;
    slider.style.transform = `translateX(${translate}px)`;
});
ball4.addEventListener("click", function(){
    ballfour();
    currentIdx = 4;
    translate = -4500;
    slider.style.transform = `translateX(${translate}px)`;
});
ball5.addEventListener("click", function(){
    ballfive();
    currentIdx = 5;
    translate = -6000;
    slider.style.transform = `translateX(${translate}px)`;
});

if(k){
    k--;
    ball1.style.background = "#2C61AB";
    var start = setInterval(()=> {slides()}, 2000);
}

function slides(){
    if(currentIdx == 5){
        currentIdx = 0;
        translate = -liWidth+liWidth;
        slider.style.transform = `translateX(${translate}px)`;
        slider.style.transition = "none";
      }
      else {
          slider.style.transition = "0.5s";
          translate -= liWidth;
          slider.style.transform = `translateX(${translate}px)`;
          currentIdx+=1;
          if(currentIdx == 0 || currentIdx==5) ballone();
          else if(currentIdx == 1) balltwo();
          else if(currentIdx == 2) ballthree();
          else if(currentIdx == 3) ballfour();
          else if(currentIdx == 4) ballfive();
          
          
      }
      one.addEventListener("click", function(){
          one.style.display = "none";
          two.style.display = "block";
          clearInterval(start);
      });
}
two.addEventListener("click", function(){
    one.style.display = "block";
    two.style.display = "none";
    start = setInterval(()=> {slides()}, 3000);
});


var number =7;
var work = document.querySelector(".work");
var date31 = document.querySelector("#num31");
function plus(){
    const current = parseInt(month.textContent);
    
    if(current + 1 > 12){
        month.textContent = current + "월";
    }
    else{
        month.textContent = current + 1 + "월";
        number +=1;
        if(number ==1 || number == 3 || number == 5 || number == 7 || number==8 || number ==10 || number==12) date31.style.display = "block";
        else date31.style.display = "none";
        if(number == 1){
            for($j=1; $j<=31; $j++)
                document.getElementById("num"+$j).style.background = "none";
            work.innerHTML = "";
            work.innerHTML += "<li>01.01  신정</li>";
            work.innerHTML += "<li>01.09  종업식,졸업식</li>";
        }
        if(number == 2){
            for($j=1; $j<=31; $j++){
                if($j>8 && $j<13) document.getElementById("num"+$j).style.background = "#4DB02C";
                else document.getElementById("num"+$j).style.background = "none";
            }   
            work.innerHTML = "";
            work.innerHTML += "<li>02.09  설날연휴</li>";
            work.innerHTML += "<li>02.10  설날</li>";
            work.innerHTML += "<li>02.11  설날연휴</li>";
            work.innerHTML += "<li>02.12  대체휴일</li>";
        }
        if(number == 3){
            for($j=1; $j<=31; $j++){
                if($j==1 || $j==2 || $j==4 || $j==9 || $j==16 || $j==23 || $j==30) document.getElementById("num"+$j).style.background = "#4DB02C";
                else document.getElementById("num"+$j).style.background = "none";
            }
                
            work.innerHTML = "";
            for($i=1; $i<=9; $i++){
                if($i == 2 || $i==9) work.innerHTML += "<li>03.0"+$i+"  토요휴업일</li>";
                if($i==1) work.innerHTML += "<li>03.0"+$i+"  3.1절</li>";
                if($i==4) work.innerHTML += "<li>03.0"+$i+"  입학식</li>";
            }
            for($i=10; $i<=31; $i++){
                if($i==16 || $i==23 || $i==30) work.innerHTML += "<li>03."+$i+"  토요휴업일</li>";
            }
        }
        if(number == 4){
            for($j=1; $j<=31; $j++){
                if($j==6 || $j>8 && $j<12 || $j==13 || $j==20 || $j>24 && $j<28) document.getElementById("num"+$j).style.background = "#4DB02C";
                else document.getElementById("num"+$j).style.background = "none";
            }
            work.innerHTML = "";
            work.innerHTML += "<li>04.06  토요휴업일</li>";
            work.innerHTML += "<li>04.09  1학년 영어듣기평가</li>";

            for($i=10; $i<=31; $i++){
                if($i==11) work.innerHTML += "<li>04."+$i+"  2학년 영어듣기평가</li>";
                if($i==13 || $i==20 || $i==27) work.innerHTML += "<li>04."+$i+"  토요휴업일</li>";
                if($i==24 || $i==25) work.innerHTML += "<li>04."+$i+"  중간고사</li>";
            }
        }
        if(number == 5){
            for($j=1; $j<=31; $j++){
                if($j>3 && $j<7 || $j==11 || $j==15 || $j==18 || $j>19 && $j<26) document.getElementById("num"+$j).style.background = "#4DB02C";
                else document.getElementById("num"+$j).style.background = "none";
            }
            work.innerHTML = "";
            work.innerHTML += "<li>05.04  토요휴업일</li>";
            work.innerHTML += "<li>05.05  어린이날</li>";
            work.innerHTML += "<li>05.06  대체휴일</li>";
            for($i=10; $i<=31; $i++){
                if($i==15) work.innerHTML += "<li>07."+$i+"  석가탄신일(부처님오신날)</li>";
                if($i==11 || $i==18 || $i==25) work.innerHTML += "<li>05."+$i+"  토요휴업일</li>";
                if($i>=20 && $i<=25) work.innerHTML += "<li>05."+$i+"  현장체험학습</li>";
            }
        }
        if(number == 6){
            for($j=1; $j<=31; $j++){
                if($j==1 || $j>5 && $j<9 || $j==15 || $j==22 || $j==29) document.getElementById("num"+$j).style.background = "#4DB02C";
                else document.getElementById("num"+$j).style.background = "none";
            }
                
            work.innerHTML = "";
                if($i == 1) work.innerHTML += "<li>06.01  토요휴업일</li>";
                if($i==6) work.innerHTML += "<li>06.06  현충일</li>";
                if($i==7) work.innerHTML += "<li>06.07  개교기념일</li>";
                if($i==8) work.innerHTML += "<li>06.08  토요휴업일</li>";
            for($i=10; $i<=31; $i++){
                if($i==15 || $i==22 || $i==19) work.innerHTML += "<li>06."+$i+"  토요휴업일</li>";
            }
        }
        if(number == 7){
            for($j=1; $j<=31; $j++){
                if($j>0 && $j<4 || $j==6 || $j==10 || $j==13 || $j==20 || $j==19 || $j>21 && $j<32) document.getElementById("num"+$j).style.background = "#4DB02C";
                else document.getElementById("num"+$j).style.background = "none";
            }
                
            work.innerHTML = "";
            for($i=1; $i<=9; $i++){
                if($i <= 3) work.innerHTML += "<li>07.0"+$i+"  기말고사</li>";
                if($i==6) work.innerHTML += "<li>07.0"+$i+"  토요휴업일</li>";
            }
            for($i=10; $i<=31; $i++){
                if($i==10) work.innerHTML += "<li>07."+$i+"  직업기초능력평가(3학년)</li>";
                if($i==13 || $i==20 || $i==27) work.innerHTML += "<li>07."+$i+"  토요휴업일</li>";
                work.innerHTML += "<li>07."+$i+"  여름방학</li>";
            }
        }
        if(number == 8){
            for($j=1; $j<=31; $j++){
                if($j>0 && $j<18 || $j==19 || $j==24 || $j==31) document.getElementById("num"+$j).style.background = "#4DB02C";
                else document.getElementById("num"+$j).style.background = "none";
            }
                
            work.innerHTML = "";
            for($i=1; $i<=9; $i++){
                work.innerHTML += "<li>08.0"+$i+"  여름방학</li>";
                if($i == 3) work.innerHTML += "<li>08.0"+$i+"  토요휴업일</li>";
            }
            for($i=10; $i<=31; $i++){
                if($i == 10 || $i==17 || $i==24 || $i==31) work.innerHTML += "<li>08."+$i+"  토요휴업일</li>";
                if($i == 15) work.innerHTML += "<li>08."+$i+"  광복절</li>";
                if($i<19) work.innerHTML += "<li>08."+$i+"  여름방학</li>";
                if($i==19) work.innerHTML += "<li>08."+$i+"  개학식</li>";
            }
        }
        if(number == 9){
            for($j=1; $j<=31; $j++){
                if($j==9 || $j==10 || $j==11 || $j==14 || $j>15 && $j<22 || $j==28) document.getElementById("num"+$j).style.background = "#4DB02C";
                else document.getElementById("num"+$j).style.background = "none";
            }
                
            work.innerHTML = "";
            work.innerHTML += "<li>09.07  토요휴업일</li>";
            for($i=10; $i<=31; $i++){
                if($i == 14 || $i==21 || $i==28) work.innerHTML += "<li>09."+$i+"  토요휴업일</li>";
                if($i == 10) work.innerHTML += "<li>09."+$i+"  1학년영어듣기평가</li>";
                if($i>=16 && $i<=18) work.innerHTML += "<li>09."+$i+"  추석연휴</li>";
                if($i==19 || $i==20) work.innerHTML += "<li>09."+$i+"  재량휴업일</li>";
                if($i==11) work.innerHTML += "<li>09."+$i+"  2학년영어듣기평가</li>";
            }
        }
        if(number == 10){
            for($j=1; $j<=31; $j++){
                if($j>2 && $j<6 || $j==9 || $j==12 || $j==19 || $j>22 && $j<27) document.getElementById("num"+$j).style.background = "#4DB02C";
                else document.getElementById("num"+$j).style.background = "none";
            }
                
            work.innerHTML = "";
            work.innerHTML += "<li>10.03  개천절</li>";
            work.innerHTML += "<li>10.04  재량휴업일</li>";
            work.innerHTML += "<li>10.05  토요휴업일</li>";
            work.innerHTML += "<li>10.09  한글날</li>";

            for($i=10; $i<=31; $i++){
                if($i == 12 || $i==19 || $i==26) work.innerHTML += "<li>10."+$i+"  토요휴업일</li>";
                if($i == 23 || $i==24) work.innerHTML += "<li>10."+$i+"  중간고사</li>";
                if($i==25) work.innerHTML += "<li>10."+$i+"  입학전형</li>", work.innerHTML += "<li>10."+$i+"  현장체험학습</li>";
            }
        }
        if(number == 11){
            for($j=1; $j<=31; $j++){
                if($j==2 || $j==9 || $j==16 || $j==23 || $j==30) document.getElementById("num"+$j).style.background = "#4DB02C";
                else document.getElementById("num"+$j).style.background = "none";
            }
                
            work.innerHTML = "";
            for($i=1; $i<=9; $i++){
                if($i == 2 || $i==9) work.innerHTML += "<li>11.0"+$i+"  토요휴업일</li>";
            }
            for($i=10; $i<=31; $i++){
                if($i == 16 || $i==23 || $i==30) work.innerHTML += "<li>11."+$i+"  토요휴업일</li>";
            }
            
        }
        if(number == 12){
            for($j=1; $j<=31; $j++){
                if($j==7 || $j==14 || $j>17 && $j<22 || $j==25 || $j==28) document.getElementById("num"+$j).style.background = "#4DB02C";
                else document.getElementById("num"+$j).style.background = "none";
            }
                
            work.innerHTML = "";
            work.innerHTML += "<li>12.07  토요휴업일</li>";
            for($i=10; $i<=31; $i++){
                if($i == 14 || $i==21 || $i==28) work.innerHTML += "<li>12."+$i+"  토요휴업일</li>";
                if($i>17 && $i<21) work.innerHTML += "<li>12."+$i+"  기말고사(1,2학년)</li>";
                if($i==25) work.innerHTML += "<li>12."+$i+"  크리스마스</li>", work.innerHTML += "<li>12."+$i+"  기독탄신일(성탄절)</li>";
            }
        }
    }
    
}


function minus(){
    const current = parseInt(month.textContent);
    var j;
    if(current - 1 < 1){
        month.textContent = current + "월";
    }
    else{
        month.textContent = current -1 + "월";
        number = number - 1;
        if(number == 1){
            for($j=1; $j<=31; $j++)
                document.getElementById("num"+$j).style.background = "none";
            document.getElementById("num1").style.background = "#4DB02C";
            document.getElementById("num9").style.background = "#4DB02C";
            work.innerHTML = "";
            work.innerHTML += "<li>01.01  신정</li>";
            work.innerHTML += "<li>01.09  종업식,졸업식</li>";
        }
        if(number == 2){
            for($j=1; $j<=31; $j++){
                if($j>8 && $j<13) document.getElementById("num"+$j).style.background = "#4DB02C";
                else document.getElementById("num"+$j).style.background = "none";
            }
                
            work.innerHTML = "";
            work.innerHTML += "<li>02.09  설날연휴</li>";
            work.innerHTML += "<li>02.10  설날</li>";
            work.innerHTML += "<li>02.11  설날연휴</li>";
            work.innerHTML += "<li>02.12  대체휴일</li>";
        }
        if(number == 3){
            for($j=1; $j<=31; $j++){
                if($j==1 || $j==2 || $j==4 || $j==9 || $j==16 || $j==23 || $j==30) document.getElementById("num"+$j).style.background = "#4DB02C";
                else document.getElementById("num"+$j).style.background = "none";
            }
            work.innerHTML = "";
            for($i=1; $i<=9; $i++){
                if($i == 2 || $i==9) work.innerHTML += "<li>03.0"+$i+"  토요휴업일</li>";
                if($i==1) work.innerHTML += "<li>03.0"+$i+"  3.1절</li>";
                if($i==4) work.innerHTML += "<li>03.0"+$i+"  입학식</li>";
            }
            for($i=10; $i<=31; $i++){
                if($i==16 || $i==23 || $i==30) work.innerHTML += "<li>03."+$i+"  토요휴업일</li>";
            }
        }
        if(number == 4){
            for($j=1; $j<=31; $j++){
                if($j==6 || $j>8 && $j<12 || $j==13 || $j==20 || $j>24 && $j<28) document.getElementById("num"+$j).style.background = "#4DB02C";
                else document.getElementById("num"+$j).style.background = "none";
            }
            work.innerHTML = "";
            work.innerHTML += "<li>04.06  토요휴업일</li>";
            work.innerHTML += "<li>04.09  1학년 영어듣기평가</li>";

            for($i=10; $i<=31; $i++){
                if($i==11) work.innerHTML += "<li>04."+$i+"  2학년 영어듣기평가</li>";
                if($i==13 || $i==20 || $i==27) work.innerHTML += "<li>04."+$i+"  토요휴업일</li>";
                if($i==24 || $i==25) work.innerHTML += "<li>04."+$i+"  중간고사</li>";
            }
        }
        if(number == 5){
            for($j=1; $j<=31; $j++){
                if($j>3 && $j<7 || $j==11 || $j==15 || $j==18 || $j>19 && $j<26) document.getElementById("num"+$j).style.background = "#4DB02C";
                else document.getElementById("num"+$j).style.background = "none";
            }
            work.innerHTML = "";
            work.innerHTML += "<li>05.04  토요휴업일</li>";
            work.innerHTML += "<li>05.05  어린이날</li>";
            work.innerHTML += "<li>05.06  대체휴일</li>";
            for($i=10; $i<=31; $i++){
                if($i==15) work.innerHTML += "<li>07."+$i+"  석가탄신일(부처님오신날)</li>";
                if($i==11 || $i==18 || $i==25) work.innerHTML += "<li>05."+$i+"  토요휴업일</li>";
                if($i>=20 && $i<=25) work.innerHTML += "<li>05."+$i+"  현장체험학습</li>";
            }
        }
        if(number == 6){
            for($j=1; $j<=31; $j++){
                if($j==1 || $j>5 && $j<9 || $j==15 || $j==22 || $j==29) document.getElementById("num"+$j).style.background = "#4DB02C";
                else document.getElementById("num"+$j).style.background = "none";
            }
            work.innerHTML = "";
            work.innerHTML += "<li>06.01  토요휴업일</li>";
            work.innerHTML += "<li>06.06  현충일</li>";
            work.innerHTML += "<li>06.07  개교기념일</li>";
            work.innerHTML += "<li>06.08  토요휴업일</li>";
            for($i=10; $i<=31; $i++){
                if($i==15 || $i==22 || $i==19) work.innerHTML += "<li>06."+$i+"  토요휴업일</li>";
            }
        }
        if(number == 7){
            for($j=1; $j<=31; $j++){
                if($j>0 && $j<4 || $j==6 || $j==10 || $j==13 || $j==20 || $j==19 || $j>21 && $j<32) document.getElementById("num"+$j).style.background = "#4DB02C";
                else document.getElementById("num"+$j).style.background = "none";
            }
            document.getElementsByName
            work.innerHTML = "";
            for($i=1; $i<=9; $i++){
                if($i <= 3) work.innerHTML += "<li>07.0"+$i+"  기말고사</li>";
                if($i==6) work.innerHTML += "<li>07.0"+$i+"  토요휴업일</li>";
            }
            for($i=10; $i<=31; $i++){
                if($i==10) work.innerHTML += "<li>07."+$i+"  직업기초능력평가(3학년)</li>";
                if($i==13 || $i==20 || $i==27) work.innerHTML += "<li>07."+$i+"  토요휴업일</li>";
                work.innerHTML += "<li>07."+$i+"  여름방학</li>";
            }
        }
        if(number == 8){
            for($j=1; $j<=31; $j++){
                if($j>0 && $j<18 || $j==19 || $j==24 || $j==31) document.getElementById("num"+$j).style.background = "#4DB02C";
                else document.getElementById("num"+$j).style.background = "none";
            }
            work.innerHTML = "";
            for($i=1; $i<=9; $i++){
                work.innerHTML += "<li>08.0"+$i+"  여름방학</li>";
                if($i == 3) work.innerHTML += "<li>08.0"+$i+"  토요휴업일</li>";
            }
            for($i=10; $i<=31; $i++){
                if($i == 10 || $i==17 || $i==24 || $i==31) work.innerHTML += "<li>08."+$i+"  토요휴업일</li>";
                if($i == 15) work.innerHTML += "<li>08."+$i+"  광복절</li>";
                if($i<19) work.innerHTML += "<li>08."+$i+"  여름방학</li>";
                if($i==19) work.innerHTML += "<li>08."+$i+"  개학식</li>";
            }
        }
        if(number == 9){
            for($j=1; $j<=31; $j++){
                if($j==9 || $j==10 || $j==11 || $j==14 || $j>15 && $j<22 || $j==28) document.getElementById("num"+$j).style.background = "#4DB02C";
                else document.getElementById("num"+$j).style.background = "none";
            }
            work.innerHTML = "";
            work.innerHTML += "<li>09.07  토요휴업일</li>";
            for($i=10; $i<=31; $i++){
                if($i == 14 || $i==21 || $i==28) work.innerHTML += "<li>09."+$i+"  토요휴업일</li>";
                if($i == 10) work.innerHTML += "<li>09."+$i+"  1학년영어듣기평가</li>";
                if($i>=16 && $i<=18) work.innerHTML += "<li>09."+$i+"  추석연휴</li>";
                if($i==19 || $i==20) work.innerHTML += "<li>09."+$i+"  재량휴업일</li>";
                if($i==11) work.innerHTML += "<li>09."+$i+"  2학년영어듣기평가</li>";
            }
        }
        if(number == 10){
            for($j=1; $j<=31; $j++){
                if($j>2 && $j<6 || $j==9 || $j==12 || $j==19 || $j>22 && $j<27) document.getElementById("num"+$j).style.background = "#4DB02C";
                else document.getElementById("num"+$j).style.background = "none";
            }
            work.innerHTML = "";
            work.innerHTML += "<li>10.03  개천절</li>";
            work.innerHTML += "<li>10.04  재량휴업일</li>";
            work.innerHTML += "<li>10.05  토요휴업일</li>";
            work.innerHTML += "<li>10.09  한글날</li>";

            for($i=10; $i<=31; $i++){
                if($i == 12 || $i==19 || $i==26) work.innerHTML += "<li>10."+$i+"  토요휴업일</li>";
                if($i == 23 || $i==24) work.innerHTML += "<li>10."+$i+"  중간고사</li>";
                if($i==25) work.innerHTML += "<li>10."+$i+"  입학전형</li>", work.innerHTML += "<li>10."+$i+"  현장체험학습</li>";
            }
        }
        if(number == 11){
            for($j=1; $j<=31; $j++){
                if($j==2 || $j==9 || $j==16 || $j==23 || $j==30) document.getElementById("num"+$j).style.background = "#4DB02C";
                else document.getElementById("num"+$j).style.background = "none";
            }
            work.innerHTML = "";
            for($i=1; $i<=9; $i++){
                if($i == 2 || $i==9) work.innerHTML += "<li>11.0"+$i+"  토요휴업일</li>";
            }
            for($i=10; $i<=31; $i++){
                if($i == 16 || $i==23 || $i==30) work.innerHTML += "<li>11."+$i+"  토요휴업일</li>";
            }
            
        }
        if(number == 12){
            for($j=1; $j<=31; $j++){
                if($j==7 || $j==14 || $j>17 && $j<22 || $j==25 || $j==28) document.getElementById("num"+$j).style.background = "#4DB02C";
                else document.getElementById("num"+$j).style.background = "none";
            }
            work.innerHTML = "";
            work.innerHTML += "<li>12.07  토요휴업일</li>";
            for($i=10; $i<=31; $i++){
                if($i == 14 || $i==21 || $i==28) work.innerHTML += "<li>12."+$i+"  토요휴업일</li>";
                if($i>17 && $i<21) work.innerHTML += "<li>12."+$i+"  기말고사(1,2학년)</li>";
                if($i==25) work.innerHTML += "<li>12."+$i+"  크리스마스</li>", work.innerHTML += "<li>12."+$i+"  기독탄신일(성탄절)</li>";
            }
        }
    }
}

var m=1;
if(m){
    var start2 = setInterval(() => {moveBoxes()}, 3000);
    m--;
}

const banner_list = document.getElementById('banner_list');

function moveBoxes() {
    const boxes = banner_list.children;
    const lastBox = boxes[boxes.length - 2];
    banner_list.insertBefore(lastBox.cloneNode(true), boxes[0]);
    banner_list.removeChild(lastBox);

    
}
function stopmove(){
    document.getElementById("stopbanner").style.display = "block";
    document.getElementById("stopb").style.display = "none";
    clearInterval(start2);
}

function startban(){
    document.getElementById("stopbanner").style.display = "none";
    document.getElementById("stopb").style.display = "block";
    start2 = setInterval(() => {moveBoxes()}, 3000);
}
var v1 = document.getElementById("view1");
var v2 = document.getElementById("view2");
function view(){
    banner_list.style.height = "400px";
    document.getElementById("footer").style.marginTop = "400px";
    v1.style.display = "none";
    v2.style.display = "block";
}
function view2(){
    banner_list.style.height = "50px";
    document.getElementById("footer").style.marginTop = "50px";
    v1.style.display = "block";
    v2.style.display = "none";
}

function backBoxes(){
    const boxs = banner_list.children;
    const firstBox = boxs[0];
    banner_list.insertBefore(firstBox.cloneNode(true), boxs[boxs.length - 1]);
    banner_list.removeChild(firstBox);
    
}
