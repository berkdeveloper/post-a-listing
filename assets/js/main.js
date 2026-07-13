const languageSelect = document.getElementById("language-select");

if (languageSelect) {

    // Sayfa açılırken dili URL'den al
    const currentLanguage = window.location.pathname.split("/")[1];

    if (["tr", "en", "ar"].includes(currentLanguage)) {

        languageSelect.value = currentLanguage;

    }

    // Dil değiştirildiğinde yönlendir
    languageSelect.addEventListener("change", function () {

        const language = this.value;

        const path = window.location.pathname;

        const newPath = path.replace(/^\/(tr|en|ar)/, `/${language}`);

        window.location.href = newPath;

    });

}

// animation for mobile
const header = document.querySelector(".site-header");

let isCompact = false;

function handleHeaderScroll() {

    if (window.innerWidth > 768) {

        header.classList.remove("site-header--compact");
        isCompact = false;
        return;

    }

    if (!isCompact && window.scrollY > 100) {

        header.classList.add("site-header--compact");
        isCompact = true;

    }

    if (isCompact && window.scrollY < 50) {

        header.classList.remove("site-header--compact");
        isCompact = false;

    }

}

window.addEventListener("scroll", handleHeaderScroll);
window.addEventListener("resize", handleHeaderScroll);

handleHeaderScroll();