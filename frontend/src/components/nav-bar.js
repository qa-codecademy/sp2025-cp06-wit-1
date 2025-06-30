import languageService from "../services/language-service.js"

const NavBar = () => {
    function handleLogoClickBehavior() {
        const logoTop = document.querySelector(".logo");

        const isHomepage = window.location.hash === "#/" || window.location.hash === "";
        window.scrollTo(0,0);

        // Remove any previous click listeners to avoid duplicates
        const newLogo = logoTop.cloneNode(true);
        logoTop.parentNode.replaceChild(newLogo, logoTop);

        if (isHomepage) {
            newLogo.addEventListener("click", function (e) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        handleLogoClickBehavior();
        window.addEventListener("hashchange", handleLogoClickBehavior);
    });
    const navbar = languageService.getAllTranslations().navbar;
    return `
        <div class="logo">
            <a href="#/">
                <img src="./src/assets/when-in-trouble-logo-cmyk.svg" alt="${navbar.home}">
            </a>
            <span class="logo-text">When In Trouble</span>
        </div>

        <button class="hamburger" aria-label="Toggle navigation">☰</button>

        <ul class="nav-links">
            <li><a href="#" data-link>${navbar.home}</a></li>
            <li><a href="#/news" data-link>${navbar.news}</a></li>
            <li><a href="#/projects" data-link>${navbar.projects}</a></li>
            <li><a href="#/about" data-link>${navbar.about}</a></li>
           <!-- Language Dropdown -->
        <li class="dropdown lang-dropdown">
        <a href="#" class="lang-toggle" data-link>🌐 ${navbar.language ? navbar.language : ""}</a>
        <ul class="dropdown-menu">
            <li>
                <a href="#" data-lang="mk">
                <img src="src/assets/flags/Flag_of_North_Macedonia.svg" alt="Macedonian Flag" class="flag-icon"> Македонски
                </a>
            </li>
            <li>
                <a href="#" data-lang="alb">
                <img src="src/assets/flags/Flag_of_Albania.svg" alt="Albanian Flag" class="flag-icon"> Shqip
                </a>
            </li>
            
        </ul>
        </li>
            <li><a href="tel:+38978247111"><i class="bi bi-telephone-fill"></i> +38978247111</a></li>
        </ul>
    `;
};


export default NavBar;
