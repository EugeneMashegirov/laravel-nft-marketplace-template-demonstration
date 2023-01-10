let header = document.querySelector(".header");
let links = document.querySelectorAll(".nav-link");
let buttons = document.querySelectorAll("[data-filter]");

document.addEventListener("scroll", e => scrollEvent(e));
document.addEventListener("DOMContentLoaded", e => DOMLoadedEvent(e));

for (let button of buttons) {
    button.onclick = e => {
        let filter = button.getAttribute("data-filter");

        let allElements = document.querySelectorAll(".all");
        let requiredElements = document.querySelectorAll(filter.toString());

        for (let elem of allElements) {
            if (elem.classList.contains("non-required-element") || elem.classList.contains("required-element")) {
                elem.classList.remove("non-required-element");
                elem.classList.remove("required-element");
            }

            elem.classList.add("non-required-element");
            elem.style.display = "none";
        }

        for (let elem of requiredElements) {
            elem.classList.add("required-element");
            elem.style.display = "block";
        }

        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].classList.contains("active")) buttons[i].classList.remove("active");
        }

        button.classList.add("active");
    }
}

function scrollEvent(e) {
    let position = window.scrollY;

    if (position > 200 || !(window.location.pathname.includes("index.html") || window.location.pathname.endsWith("/"))) {
        header.classList.add("background-header");
    } else {
        if (header.classList.contains("background-header")) {
            header.classList.remove("background-header");
        }
    }
}

function DOMLoadedEvent(e) {
    for (let link of links) {
        if (link.classList.contains("active")) link.classList.remove("active"); 
        if (window.location.pathname.endsWith("/")) links[0].classList.add("active");

        if (window.location.href.includes(link.href)) {
            link.classList.add("active");
        }
    }

    if (!(window.location.pathname.includes("index.html") || window.location.pathname.endsWith("/"))) {
        header.classList.add("background-header");
    } else {
        if (header.classList.contains("background-header")) {
            header.classList.remove("background-header");
        }
    }
}