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

const marksmenEntries = document.querySelectorAll(".marksmen-entry[data-background]");

marksmenEntries.forEach((entry) => {
    const background = entry.dataset.background;

    const showBackground = () => {
        document.body.style.setProperty("--marksmen-background", `url("${background}")`);
        document.body.classList.add("marksmen-background-visible");
    };

    const clearBackground = () => {
        document.body.classList.remove("marksmen-background-visible");
    };

    entry.addEventListener("mouseenter", showBackground);
    entry.addEventListener("mouseleave", clearBackground);
    entry.addEventListener("focus", showBackground);
    entry.addEventListener("blur", clearBackground);
});

const fighterEntries = document.querySelectorAll(".fighter-entry[data-background]");

fighterEntries.forEach((entry) => {
    const background = entry.dataset.background;

    const showBackground = () => {
        document.body.style.setProperty("--fighter-background", `url("${background}")`);
        document.body.classList.add("fighter-background-visible");
    };

    const clearBackground = () => {
        document.body.classList.remove("fighter-background-visible");
    };

    entry.addEventListener("mouseenter", showBackground);
    entry.addEventListener("mouseleave", clearBackground);
    entry.addEventListener("focus", showBackground);
    entry.addEventListener("blur", clearBackground);
});

const tankEntries = document.querySelectorAll(".tank-entry[data-background]");

tankEntries.forEach((entry) => {
    const background = entry.dataset.background;

    const showBackground = () => {
        document.body.style.setProperty("--tank-background", `url("${background}")`);
        document.body.classList.add("tank-background-visible");
    };

    const clearBackground = () => {
        document.body.classList.remove("tank-background-visible");
    };

    entry.addEventListener("mouseenter", showBackground);
    entry.addEventListener("mouseleave", clearBackground);
    entry.addEventListener("focus", showBackground);
    entry.addEventListener("blur", clearBackground);
});

const supportEntries = document.querySelectorAll(".support-entry[data-background]");

supportEntries.forEach((entry) => {
    const background = entry.dataset.background;

    const showBackground = () => {
        document.body.style.setProperty("--support-background", `url("${background}")`);
        document.body.classList.add("support-background-visible");
    };

    const clearBackground = () => {
        document.body.classList.remove("support-background-visible");
    };

    entry.addEventListener("mouseenter", showBackground);
    entry.addEventListener("mouseleave", clearBackground);
    entry.addEventListener("focus", showBackground);
    entry.addEventListener("blur", clearBackground);
});

const assassinEntries = document.querySelectorAll(".assassin-entry[data-background]");

assassinEntries.forEach((entry) => {
    const background = entry.dataset.background;

    const showBackground = () => {
        document.body.style.setProperty("--assassin-background", `url("${background}")`);
        document.body.classList.add("assassin-background-visible");
    };

    const clearBackground = () => {
        document.body.classList.remove("assassin-background-visible");
    };

    entry.addEventListener("mouseenter", showBackground);
    entry.addEventListener("mouseleave", clearBackground);
    entry.addEventListener("focus", showBackground);
    entry.addEventListener("blur", clearBackground);
});