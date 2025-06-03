// Arrow to the top of the page starts here

// Viser pilen når du scroller ned
window.addEventListener('scroll', function () {    

    if (window.innerWidth > 716 && window.scrollY > 450) {

        arrowTopButton.style.display = 'flex';

    } else {

        arrowTopButton.style.display = 'none';

    }

})


// Scroller smooth til top av nettside når du klikker på button med pillen
document.getElementById("arrowTopButton").addEventListener('click', function (e) {

    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth'})

})

// Arrow to the top of the page ends here