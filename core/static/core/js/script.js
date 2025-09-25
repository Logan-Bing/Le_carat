gsap.registerPlugin(ScrollTrigger)

// TARGET DES ELEMENTS HTML
const main_about = document.querySelector(".main__about");
const about_title = document.querySelector(".about__content__title");
const about_paragraph = document.querySelector(".about__content__paragraph");

// CREATION DES CONTAINERS POUR ACCEUILLIR LES SPAN
const title_container = document.createElement("div");
const paragraph_container = document.createElement("div");
title_container.classList.add("word");
paragraph_container.classList.add("word");

// FONCTION POUR SPLIT L'ELEMENT HTML EN SPAN
function split_into_span(element)
{
    let words = element.textContent.split(" ");
    words = words.map(word => {
        let letters = word.split('');
        letters = letters.map(letter => `<span class="char">${letter}</span>`);
        return letters.join('');
    });
    return words;
}

// FONCTION POUR INSERER LES ELEMENT SPLITTER DANS LES CONTAINERS
function insert_in_div(parent_element, child_element, div_container)
{
    div_container.innerHTML = child_element.join(" ");
    parent_element.innerHTML = div_container.outerHTML;
}

let splited_title = split_into_span(about_title);
let splited_paragraph = split_into_span(about_paragraph);

insert_in_div(about_title, splited_title, title_container);
insert_in_div(about_paragraph, splited_paragraph, paragraph_container);

// ANIMATIONS GSAP

const tl = gsap.timeline({
    defaults : {
        y: 0,
        delay: 0.2,
        duration: .1,
    },
    scrollTrigger: {
        trigger: main_about,
        start: "top 60%",
    }
});

tl.to(about_title.querySelectorAll('.char'), {
    stagger: 0.05,
    delay: 0.2,
})
.to(about_paragraph.querySelectorAll('.char'),{
    stagger: 0.02,
})

// SCRRRROOOOOOOOOOOOOLLLLLLLLLLL

const hero_section = document.getElementById("hero_section")
const room_section = document.getElementById("room_section");
const services_section = document.getElementById("services_section");
const restaurant_section = document.getElementById("restaurant_section");
const newsletter_section = document.getElementById("newsletter_section");

const all_sections = [ room_section, services_section, restaurant_section, newsletter_section, hero_section];

function scroll_section(index){
    hide_menu();
    all_sections[index].scrollIntoView({behavior: 'smooth'}) 
}


// NAVBAR

const burger_icon = document.querySelector(".burger__menu");
const menu_navigation = document.querySelector(".menu_navigation");
const cross_icon = document.querySelector(".cross-icon");
const navbar = document.querySelector(".navbar");
const body = document.querySelector("body");

function hide_menu(){
    menu_navigation.classList.add("hiden");
    navbar.classList.remove("hiden");
    body.classList.remove("stop_scroll");
}

burger_icon.addEventListener("click", () => {
    menu_navigation.classList.remove("hiden");
    navbar.classList.add("hiden");
    body.classList.add("stop_scroll");
    menu_navigation.scrollIntoView();
})

cross_icon.addEventListener("click", () => {
    hide_menu();
})
