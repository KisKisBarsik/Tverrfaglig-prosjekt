// Arrow to the top of the page starts here

// Viser pilen når du scroller ned
window.addEventListener('scroll', function () {    

    if (window.innerWidth > 716 && window.scrollY > 450) {

        arrowTopButton.style.display = 'flex';

    } else {

        arrowTopButton.style.display = 'none';

    }

})

// Arrow to the top of the page ends here


// Hamburger menu starts here

var hamburger = document.querySelector(".hamburger")
var navMenu = document.querySelector(".websites")

hamburger.addEventListener('click', () => {

    hamburger.classList.toggle("active");

    navMenu.classList.toggle("active");

})

document.querySelector(".websites a").forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))

// Hamburger menu ends here


// Arrow to the top of the page starts here

// Scroller smooth til top av nettside når du klikker på button med pillen
document.getElementById("arrowTopButton").addEventListener('click', function (e) {

    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth'})

})

// Arrow to the top of the page ends here


// Search system starts here

function searchSystemButton() {

var searchSystem = document.querySelector(".searchInput").value.toLowerCase()

if (searchSystem === "teknologiforståelse" || searchSystem === "tekno forståelse" || searchSystem === "tekno. forståelse" || searchSystem === "tekno" || searchSystem === "tekno." || searchSystem === "forståelse") {

    window.location.href = "./index2.html"

} else if (searchSystem === "programmering" || searchSystem === "konseptutvikling" || searchSystem === "konseptutvikling og programmering" || searchSystem === "prog") {

    window.location.href = "./index3.html"

} else if (searchSystem === "media" || searchSystem === "produksjon og historiefortellin" || searchSystem === "produksjon" || searchSystem === "historiefortellin") {

    window.location.href = "./index4.html"

} else if (searchSystem === "yff" || searchSystem === "yrkesfaglig fordypning" || searchSystem === "yrkesfag" || searchSystem === "yrkesfaglig" || searchSystem === "fordypning") {

    window.location.href = "./index5.html"

} else if (searchSystem === "bio" || searchSystem === "biografi") {

    window.location.href = "./index6.html"

} else {

    window.location.href = "./index7.html"

}

}

// Search system ends here