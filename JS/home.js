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

