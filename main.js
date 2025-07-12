import NavBar from "./src/components/nav-bar.js";
import Footer from "./src/components/footer.js";
import { handleLocation, route } from "./router.js";
import languageService from "./src/services/language-service.js";
import spinner from "./src/utils/spinner.js"

const app = async() => {
    const render = async () => {
        spinner.showSpinner();
        document.getElementById("navbar").innerHTML = NavBar();
        document.getElementById("footer").innerHTML = Footer();
        await handleLocation();
        spinner.hideSpinner();
    };

    await render(); //initial rendering

    document.body.addEventListener("click", async (event) => {
        const target = event.target;

        // Handle internal route link clicks (e.g., href="/about")
        const link = target.closest("a[data-link]");
        if (link && link.getAttribute("href").startsWith("/")) {
            event.preventDefault();
            route(event); // Call your route function with the event
            return;
        }
        
        // Handle language dropdown toggle button
        if (target.matches(".lang-toggle")) {
            event.preventDefault();
            const langDropdown = target.closest(".lang-dropdown");
            if (langDropdown) {
                langDropdown.classList.toggle("open");
            }
            return;
        }

        // Handle language switch link inside the dropdown
        if (target.matches("a[data-lang]")) {
            event.preventDefault(); // prevent jump due to href="#"
            const newLang = target.getAttribute("data-lang");
            languageService.setLanguage(newLang);
            await render();
            window.location.hash = window.location.hash; // refresh current route view
            return;
        }

        // Handle hamburger menu toggle
        if (target.matches(".hamburger")) {
            const navLinks = document.querySelector(".nav-links");
            if (navLinks) {
                navLinks.classList.toggle("active");
            }
            return;
        }
    });

    if (!window.location.hash) {
        window.location.hash = "/";
    }
};

app();
