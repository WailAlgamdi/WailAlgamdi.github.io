document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-menu a");

    // Set default active section ("About Me")
    navLinks[0].classList.add("active");

    function setActiveLink() {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });

        // Remove previous active class and add new one
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
            }
        });

        // Highlight active section
        sections.forEach(section => {
            section.classList.remove("highlight");
            if (section.getAttribute("id") === currentSection) {
                section.classList.add("highlight");
            }
        });
    }

    // Update on scroll
    window.addEventListener("scroll", setActiveLink);

    // Update on click (for manual selection)
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
