import Header from "./src/components/header.js";
import Footer from "./src/components/footer.js";
import { handleLocation } from "./router.js";

// View switching logic (handled in router.js)
const app = () => {
    const headerContainer = document.getElementById("header");
    headerContainer.innerHTML = Header();

    // Initial redirect to "/#/" if no hash is present
    if (!window.location.hash) {
        window.location.hash = "/";
    }

    handleLocation(); // This will load the default view based on the URL
    
    // Handle navigation clicks
    document.body.addEventListener("click", (event) => {
        const target = event.target.closest("a");
        if (target && target.getAttribute("href").startsWith("/")) {
            route(event);  // Call your hash-routing function
        }
    });

    const footerContainer = document.getElementById("footer");
    footerContainer.innerHTML = Footer();
};

app();
