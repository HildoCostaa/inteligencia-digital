/* ==========================================
   MENU MODAL
========================================== */

const menuBtn = document.getElementById("menuBtn");
const menuModal = document.getElementById("menuModal");
const closeMenu = document.getElementById("closeMenu");

menuBtn.addEventListener("click", () => {
    menuModal.style.display = "flex";
    document.body.style.overflow = "hidden";
});

closeMenu.addEventListener("click", () => {
    menuModal.style.display = "none";
    document.body.style.overflow = "auto";
});

menuModal.addEventListener("click", (e) => {

    if (e.target === menuModal) {

        menuModal.style.display = "none";
        document.body.style.overflow = "auto";

    }

});

/* ==========================================
   FAQ ACCORDION
========================================== */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        document.querySelectorAll(".faq-answer")
            .forEach(item => {

                if (item !== answer) {
                    item.style.display = "none";
                }

            });

        answer.style.display =
            answer.style.display === "block"
                ? "none"
                : "block";

    });

});

/* ==========================================
   CARROSSEL
========================================== */

const track = document.getElementById("carouselTrack");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentPosition = 0;

const cardWidth = 345;

nextBtn.addEventListener("click", () => {

    currentPosition += cardWidth;

    if (
        currentPosition >
        track.scrollWidth - track.clientWidth
    ) {

        currentPosition = 0;

    }

    track.scrollTo({
        left: currentPosition,
        behavior: "smooth"
    });

});

prevBtn.addEventListener("click", () => {

    currentPosition -= cardWidth;

    if (currentPosition < 0) {

        currentPosition =
            track.scrollWidth - track.clientWidth;

    }

    track.scrollTo({
        left: currentPosition,
        behavior: "smooth"
    });

});

/* ==========================================
   AUTOPLAY CARROSSEL
========================================== */

setInterval(() => {

    currentPosition += cardWidth;

    if (
        currentPosition >
        track.scrollWidth - track.clientWidth
    ) {

        currentPosition = 0;

    }

    track.scrollTo({
        left: currentPosition,
        behavior: "smooth"
    });

}, 4000);

/* ==========================================
   SCROLL ANIMATION
========================================== */

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);

const hiddenElements = document.querySelectorAll(
    ".service-card, .diff-card, .about, .faq-item, .contact"
);

hiddenElements.forEach(el => {

    el.classList.add("hidden");
    observer.observe(el);

});

/* ==========================================
   ESCUDO DINÂMICO
========================================== */

const shield = document.querySelector(".shield-center");

let glow = 0;

setInterval(() => {

    glow += 0.05;

    const intensity =
        25 + Math.sin(glow) * 15;

    shield.style.boxShadow =
        `0 0 ${intensity}px rgba(245,81,172,.45)`;

}, 50);

/* ==========================================
   FLOATING TAGS
========================================== */

const tags = document.querySelectorAll(".floating-tag");

tags.forEach((tag, index) => {

    let offset = index * 50;

    setInterval(() => {

        offset += 0.05;

        const y =
            Math.sin(offset) * 8;

        tag.style.transform =
            `translateY(${y}px)`;

    }, 16);

});

/* ==========================================
   HEADER SCROLL
========================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background =
            "rgba(5,5,16,.92)";

        header.style.borderBottom =
            "1px solid rgba(245,81,172,.2)";

    } else {

        header.style.background =
            "rgba(5,5,16,.65)";

    }

});

/* ==========================================
   BOTÕES HERO
========================================== */

document
.querySelectorAll(".btn-primary, .btn-secondary")
.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform =
            "translateY(-3px) scale(1.02)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "translateY(0px) scale(1)";

    });

});

/* ==========================================
   PARTICULAS
========================================== */

function createParticle() {

    const particle =
        document.createElement("div");

    particle.classList.add("particle");

    particle.style.left =
        Math.random() * window.innerWidth + "px";

    particle.style.animationDuration =
        Math.random() * 5 + 5 + "s";

    particle.style.opacity =
        Math.random();

    document.body.appendChild(particle);

    setTimeout(() => {

        particle.remove();

    }, 10000);

}

/* ===================================================
   HEADER — SCROLL
=================================================== */

const mainHeader = document.getElementById("mainHeader");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        mainHeader.classList.add("scrolled");

    } else {

        mainHeader.classList.remove("scrolled");

    }

});


setInterval(createParticle, 600);