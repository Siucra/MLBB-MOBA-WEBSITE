const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("nav-open");
        navToggle.setAttribute("aria-expanded", isOpen);
    });
}

const mageEntries = document.querySelectorAll(".mage-entry[data-background]");

mageEntries.forEach((entry) => {
    const background = entry.dataset.background;

    const showBackground = () => {
        document.body.style.setProperty("--mage-background", `url("${background}")`);
        document.body.classList.add("mage-background-visible");
    };

    const clearBackground = () => {
        document.body.classList.remove("mage-background-visible");
    };

    entry.addEventListener("mouseenter", showBackground);
    entry.addEventListener("mouseleave", clearBackground);
    entry.addEventListener("focus", showBackground);
    entry.addEventListener("blur", clearBackground);
});