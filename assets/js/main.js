const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

/*=============== SHOW MENU ===============*/
/* validate if constant exists */
if(navToggle)
{
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add("show-menu")
    })
}
/*============== MENU HIDDEN ===============*/
/* validate if constant exists */
if(navClose)
    {
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove("show-menu")
        })
    }
/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav-link")

function linkAction()
{
    const navMenu = document.getElementById("nav-menu")
    // when we click on each nav ling, we remove the show menu class
    navMenu.classList.remove("show-menu")
}
navLinks.forEach(n => n.addEventListener('click', linkAction))
/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader()
{
    const header = document.getElementById("header")
    //when the scroll is greater than 80 viewport height, add the class scroll header to the tag header
    if(this.scrollY >= 80) header.classList.add("scroll-header"); else header.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader)
/*=============== TESTIMONIAL SWIPER ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
//get all sections that have ab id defined
const sections = document.querySelectorAll("section[id]");

// Ajout d'un écouteur d'événement sur le scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    // Obtenir la position de défilement actuelle
    let scrollY = window.scrollY;

    // Parcourir chaque section pour obtenir sa hauteur, sa position et son ID
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight; // Hauteur de la section
        const sectionTop = current.offsetTop - 58; // Position du haut de la section
        const sectionId = current.getAttribute("id");




        // Vérifier si la section est visible dans la fenêtre de défilement
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add("active-link");
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove("active-link");
        }
    });
}

/*=============== AFFICHER CV ===============*/
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("showCv").addEventListener("click", function (e) {
        e.preventDefault(); // Empêche l’ouverture du lien classique
        window.open("assets/img/CV_Adrien_Bouture.pdf", "popupCv", "width=900,height=1000,scrollbars=yes,resizable=yes");
    });
});

/*=============== CERTIFICATIONS ===============*/
document.querySelectorAll('.certification-title').forEach(button => {
    button.addEventListener('click', () => {
        // Toggle visibility of the content for the clicked certification
        const content = button.nextElementSibling;
        content.style.display = (content.style.display === "block") ? "none" : "block";
    });
});
/*=============== PORTFOLIO ITEM FILTER ===============*/

/*=============== THEME/DISPLAY CUSTOMIZATION ===============*/
const theme = document.querySelector("#theme-button");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(":root");
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");
//open modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}
//close modal
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme'))
    {
        themeModal.style.display = 'none';
    }
}
theme.addEventListener("click", openThemeModal);
themeModal.addEventListener("click", closeThemeModal);

/*===== FONTS =====*/

//remove active class from spans or font size selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove("active");
    })
}
fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize ;
        size.classList.toggle('active');
        if(size.classList.contains('font-size-1'))
        {
            fontSize = '12px';
        }
        else if(size.classList.contains('font-size-2'))
        {
            fontSize = '14px';
        }
        else if(size.classList.contains('font-size-3'))
        {
            fontSize = '16px';
        }
        else if(size.classList.contains('font-size-4'))
        {
            fontSize = '18px';
        }
        //change font size of the root html element
        document.querySelector('html').style.fontSize = fontSize;
    })
})
/*===== PRIMARY COLORS =====*/

/*===== THEME BACKGROUNDS =====*/
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

//change background color
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}
Bg1.addEventListener('click', () => {
    //add active class
    Bg1.classList.add('active');
    //remove active class fromm the other
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    //remove customized changes from local storage
    window.location.reload();
})
Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    //add active class
    Bg2.classList.add('active');
    //remove active class from the other
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})
Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    //add active class
    Bg3.classList.add('active');
    //remove active class from the other
    Bg2.classList.remove('active');
    Bg1.classList.remove('active');
    changeBG();
})


