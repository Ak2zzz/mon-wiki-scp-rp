// Animation des sections lors du scroll
document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll("section");

    const revealSection = () => {
        let scrollY = window.scrollY;
        sections.forEach(section => {
            if (section.offsetTop < scrollY + window.innerHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    };

    window.addEventListener("scroll", revealSection);
    revealSection(); // Pour charger directement les sections visibles
});
