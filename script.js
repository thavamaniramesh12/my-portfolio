// TYPING ANIMATION

const words = [
    "Full Stack Developer",
    "Python Developer",
    "Frontend Developer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const typingElement = document.querySelector(".typing");

    let currentWord = words[wordIndex];

    if (isDeleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {

        speed = 1500;
        isDeleting = true;

    }

    else if (isDeleting && charIndex === 0) {

        isDeleting = false;

        wordIndex++;

        if (wordIndex === words.length) {
            wordIndex = 0;
        }

        speed = 500;

    }

    setTimeout(typeEffect, speed);

}

typeEffect();


// SCROLL REVEAL ANIMATION

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

sections.forEach(function(section) {

    observer.observe(section);

});


// NAVBAR ACTIVE LINK

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.forEach(function(item) {

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});