const detailLinks = document.querySelectorAll(".detail-nav a");
const detailSections = [...detailLinks].map(link => document.querySelector(link.getAttribute("href")));

function updateDetailNav() {
    let currentIndex = 0;
    const judgeLine = window.scrollY + window.innerHeight * 0.28;

    detailSections.forEach((section, index) => {
        if (section && section.offsetTop <= judgeLine) {
            currentIndex = index;
        }
    });

    const bottomReached = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    if (bottomReached) {
        currentIndex = detailSections.length - 1;
    }

    detailLinks.forEach((link, index) => {
        link.classList.toggle("active", index === currentIndex);
    });
}

window.addEventListener("scroll", updateDetailNav, { passive: true });
window.addEventListener("resize", updateDetailNav);
window.addEventListener("load", updateDetailNav);
updateDetailNav();

const researchSlides = document.querySelector(".research-slides");
const researchImages = document.querySelectorAll(".research-slides img");
const researchPrev = document.querySelector(".research-prev");
const researchNext = document.querySelector(".research-next");
const researchDots = document.querySelectorAll(".research-indicator span");

if (researchSlides && researchImages.length && researchPrev && researchNext) {
    let researchCurrent = 0;

    function updateResearchSlider() {
        researchSlides.style.transform = `translateX(-${researchCurrent * 100}%)`;

        researchDots.forEach((dot, index) => {
            dot.classList.toggle("active", index === researchCurrent);
        });
    }

    researchNext.addEventListener("click", () => {
        researchCurrent = (researchCurrent + 1) % researchImages.length;
        updateResearchSlider();
    });

    researchPrev.addEventListener("click", () => {
        researchCurrent =
            (researchCurrent - 1 + researchImages.length) % researchImages.length;
        updateResearchSlider();
    });

    researchDots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            researchCurrent = index;
            updateResearchSlider();
        });
    });

    updateResearchSlider();
}
