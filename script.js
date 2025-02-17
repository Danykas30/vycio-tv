document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll("p, img, h1, li, button, ul, h2, h3, h4, h5, h6, a, ul, dropdown-button, frame"); // Select all text & images

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const elem = entry.target;
            if (entry.isIntersecting) {
                elem.classList.add("in-view"); // Fly to normal position
                elem.classList.remove("out-of-view-up", "out-of-view-down");
            } else {
                // Determine whether the element is moving up or down
                const rect = elem.getBoundingClientRect();
                if (rect.top < window.innerHeight / 2) {
                    elem.classList.add("out-of-view-up");
                } else {
                    elem.classList.add("out-of-view-down");
                }
                elem.classList.remove("in-view");
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(element => {
        element.classList.add("animate"); // Start hidden
        observer.observe(element); // Observe each element
    });
});
