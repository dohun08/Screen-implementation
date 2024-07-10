var bar1 = document.querySelector(".bar1")

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

document.querySelector("#ball").addEventListener("click", function(){
    document.querySelector("#img1").style.display = "block"
    document.querySelector("#img2").style.display = "none"
    document.querySelector("#img3").style.display = "none"
    document.querySelector("#img4").style.display = "none"
    document.querySelector("#img5").style.display = "none"

    document.querySelector("#ball").style.background = "#2C61AB"
    document.querySelector("#ball2").style.background = "none"
    document.querySelector("#ball3").style.background = "none"
    document.querySelector("#ball4").style.background = "none"
    document.querySelector("#ball5").style.background = "none"
});

document.querySelector("#ball2").addEventListener("click", function(){
    document.querySelector("#img1").style.display = "none"
    document.querySelector("#img2").style.display = "block"
    document.querySelector("#img3").style.display = "none"
    document.querySelector("#img4").style.display = "none"
    document.querySelector("#img5").style.display = "none"

    document.querySelector("#ball").style.background = "none"
    document.querySelector("#ball2").style.background = "#2C61AB"
    document.querySelector("#ball3").style.background = "none"
    document.querySelector("#ball4").style.background = "none"
    document.querySelector("#ball5").style.background = "none"
});

document.querySelector("#ball3").addEventListener("click", function(){
    document.querySelector("#img1").style.display = "none"
    document.querySelector("#img2").style.display = "none"
    document.querySelector("#img3").style.display = "block"
    document.querySelector("#img4").style.display = "none"
    document.querySelector("#img5").style.display = "none"

    document.querySelector("#ball").style.background = "none"
    document.querySelector("#ball2").style.background = "none"
    document.querySelector("#ball3").style.background = "#2C61AB"
    document.querySelector("#ball4").style.background = "none"
    document.querySelector("#ball5").style.background = "none"
});

document.querySelector("#ball4").addEventListener("click", function(){
    document.querySelector("#img1").style.display = "none"
    document.querySelector("#img2").style.display = "none"
    document.querySelector("#img3").style.display = "none"
    document.querySelector("#img4").style.display = "block"
    document.querySelector("#img5").style.display = "none"

    document.querySelector("#ball").style.background = "none"
    document.querySelector("#ball2").style.background = "none"
    document.querySelector("#ball3").style.background = "none"
    document.querySelector("#ball4").style.background = "#2C61AB"
    document.querySelector("#ball5").style.background = "none"
});

document.querySelector("#ball5").addEventListener("click", function(){
    document.querySelector("#img1").style.display = "none"
    document.querySelector("#img2").style.display = "none"
    document.querySelector("#img3").style.display = "none"
    document.querySelector("#img4").style.display = "none"
    document.querySelector("#img5").style.display = "block"

    document.querySelector("#ball").style.background = "none"
    document.querySelector("#ball2").style.background = "none"
    document.querySelector("#ball3").style.background = "none"
    document.querySelector("#ball4").style.background = "none"
    document.querySelector("#ball5").style.background = "#2C61AB"
});



document.querySelector("#stop2").addEventListener("click", function(){
    document.querySelector("#stop").style.display = "block"
    document.querySelector("#stop2").style.display = "none"
});
function stop2(){
    showSlides();
}
var slideIndex = 0;
var z=0;
function showSlides(){
    var i;
    var slides = document.getElementsByClassName("slides");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    document.querySelector("#stop").addEventListener("click", function(){
        document.querySelector("#stop").style.display = "none"
        document.querySelector("#stop2").style.display = "block"
        z=1;
    });
    if(z){
        slides[slideIndex-1].style.display = "block"
        var z=0;
        return 0;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // 2초마다 이미지가 체인지됩니다
}

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

