/* Menu script */
const menuBlock = document.querySelector(".header__menu");
const hamburger = document.querySelector(".humburger-icon");
const closeIcon = document.querySelector(".close-icon");
const entryLine = document.querySelector(".entry__line")

function openMenu(){
    menuBlock.classList.add("showMenu");
    document.body.style.position = "fixed";
    hamburger.style.transform = 'rotate(360deg)';
    hamburger.style.opacity = '0';
    closeIcon.style.opacity = '1';
    closeIcon.style.transform = 'rotate(360deg)';
    closeIcon.style.zIndex = '2';
    menuBlock.style.zIndex = '1';
}

function closeMenu(){
    menuBlock.classList.remove("showMenu");
    document.body.style.position = "static";
    hamburger.style.transform = 'rotate(-360deg)';
    hamburger.style.opacity = '1';
    closeIcon.style.opacity = '0';
    closeIcon.style.transform = 'rotate(-360deg)';
    closeIcon.style.zIndex = '-1';
}

/* Answer script */
const list= ['download', 'nearby', 'license', 'helmet', 'rules', 'damage'];

function showCloseAnswer(h) {
    if (document.querySelector(".show-answer")!== null){
        if(document.querySelector(".show-answer").id === h){
             document.getElementById(`${h}`).classList.remove("show-answer");
             document.getElementById(`${h}`).style = "padding-top: 0";
             document.querySelector(`.${h}`).style.transform = 'rotate(0deg)';
             
        }else{
                list.forEach(item=>{
                    document.getElementById(`${item}`).classList.remove("show-answer");
                    document.getElementById(`${item}`).style = "padding-top: 0";
                    document.querySelector(`.${item}`).style.transform = 'rotate(0deg)';
                })
                showCloseAnswer(h)
            }
        
    }else{
        document.getElementById(`${h}`).classList.add("show-answer");
        document.getElementById(`${h}`).style = "padding-top: 1.5rem";
        document.querySelector(`.${h}`).style.transform = 'rotate(180deg)';
    }
    
}