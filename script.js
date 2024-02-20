// ============================== Task 1 ============================
let backGround = document.querySelector('.task-one-container')
let img = document.querySelector('.image img')

function changeImg1() {
    backGround.style.backgroundColor = "#c82525"
    img.src = "./assets/images/4.png"
}

function changeImg2() {
    backGround.style.backgroundColor = "#247DC9"
    img.src = "./assets/images/1.png"
}

function changeImg3() {
    backGround.style.backgroundColor = "#1f1f1f"
    img.src = "./assets/images/2.png"
}

function changeImg4() {
    backGround.style.backgroundColor = "#c79a54"
    img.src = "./assets/images/3.png"
}

function changeImg5() {
    backGround.style.backgroundColor = "#dba421"
    img.src = "./assets/images/0.png"
}



// ============================== Task 2 ============================

let whiteTask2 = document.getElementById('task-two-content')
let IconTask2 = document.querySelector("#mode-icon img")

function changeImgTask2() {

    if (whiteTask2.classList == 'dark-theme') {

        IconTask2.src = "./assets/images/icons/moon.svg";
        whiteTask2.classList = "light-theme"
    }

    else {
        IconTask2.src = "./assets/images/icons/sun.svg";
        whiteTask2.classList = "dark-theme"
    }
}


// ============================== Task 4 ============================
let description = document.querySelector('.description');
let starsOne = document.querySelectorAll('.stars i')[0];
let starsTwo = document.querySelectorAll('.stars i')[1];
let starsThree = document.querySelectorAll('.stars i')[2];
let starsFour = document.querySelectorAll('.stars i')[3];
let starsFive = document.querySelectorAll('.stars i')[4];


function stars1(){
    starsOne.classList.add("active");
    starsFour.classList.remove("active");
    starsFive.classList.remove("active");
    starsThree.classList.remove("active");
    starsTwo.classList.remove("active");
    description.innerHTML="I Just Hate It" + "<img src='./assets/images/verysad.png' class='emoji'>";
}

function stars2(){
    starsTwo.classList.add("active");
    starsOne.classList.add("active");
    starsFour.classList.remove("active");
    starsFive.classList.remove("active");
    starsThree.classList.remove("active");
    description.innerHTML="I Don't Like It" + "<img src='./assets/images/sad.png' class='emoji'>";
}

function stars3(){
    starsThree.classList.add("active");
    starsTwo.classList.add("active");
    starsOne.classList.add("active");
    starsFour.classList.remove("active");
    starsFive.classList.remove("active");
    description.innerHTML="It Is Awesome" + "<img src='./assets/images/awesome.png' class='emoji'>"; 
}

function stars4(){
    starsThree.classList.add("active");
    starsTwo.classList.add("active");
    starsOne.classList.add("active");
    starsFour.classList.add("active");
    starsFive.classList.remove("active");
    description.innerHTML="I Love It" + "<img src='./assets/images/love4.png' class='emoji'>";
}

function stars5(){
    starsThree.classList.add("active");
    starsTwo.classList.add("active");
    starsOne.classList.add("active");
    starsFour.classList.add("active");
    starsFive.classList.add("active");
    description.innerHTML="I Love It" + "<img src='./assets/images/love5.png' class='emoji'>";
}



// ============================== Task 5 ============================


let maleSection = document.querySelector('.male-tab')
let femaleSection = document.querySelector('.female-tab')
let notActive = document.querySelector('.tabs_wrap ul li.active')

function both() {
    maleSection.style.display = "block"
    femaleSection.style.display = "block"
    notActive.style.backgroundColor = "#7fc469"
    notActive.style.color = "white";

}
function male() {
    maleSection.style.display = "block"
    femaleSection.style.display = "none"
    notActive.style.backgroundColor = "#e9ecf1";
    notActive.style.color = "#2b2b2b"

}
function female() {
    maleSection.style.display = "none"
    femaleSection.style.display = "block"
    notActive.style.backgroundColor = "#e9ecf1"
    notActive.style.color = "#2b2b2b"

}

let mainImg = document.querySelector('#mainImg')
let imgSmall1=document.querySelectorAll('.small-img')[0]
let imgSmall2=document.querySelectorAll('.small-img')[1]
let imgSmall3=document.querySelectorAll('.small-img')[2]
let imgSmall4=document.querySelectorAll('.small-img')[3]

function pressImg1(){
mainImg.src=imgSmall1.src;
}
function pressImg2(){
    mainImg.src=imgSmall2.src
    
}
function pressImg3(){
    mainImg.src=imgSmall3.src

    
}
function pressImg4(){
    mainImg.src=imgSmall4.src
    
}