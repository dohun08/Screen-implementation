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

    document.querySelector(".blbl2").innerHTML = "<h3>2024년 7-8월 보건소식지</h3>.<span>2024.07.05";
    document.querySelector("#style1").innerHTML ="2024학년도 자녀사랑 뉴스레터 7월호    ";
    document.querySelector("#style2").innerHTML ="2024년 백일해 및 마이코플라즈마 폐렴균 감염증 등 호흡기 감염병 예방 내\    ";
    document.querySelector("#style3").innerHTML ="7월 영양소식 안내    ";
    document.querySelector("#style4").innerHTML ="2024학년도 직업계고 내일행복드림 바우처 지원사업 안내    ";
}


var month = document.querySelector("#month");
var year = document.querySelector("year");
function date(){
    const current = parseInt(month.textContent);
    if(month.value == 7){
        document.querySelector("#num1").style.background="#4DB02C";
    }
}
function plus(){
    var num = 0;
    const current = parseInt(month.textContent);
    if(current + 1 > 12){
        month.textContent = current - 11 + "월";
    }
    else
        month.textContent = current + 1 + "월";
}
function minus(){
    const current = parseInt(month.textContent);
    if(current - 1 < 1){
        month.textContent = current +11 + "월";
    }
    else
        month.textContent = current -1 + "월";
}

