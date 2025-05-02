import Header from "./src/components/header.js";
import Footer from "./src/components/footer.js";
import { route, handleLocation } from "./router.js";

// View switching logic (handled in router.js)
const app = () => {
    const headerContainer = document.getElementById("header");
    headerContainer.innerHTML = Header();

    // Start by showing the default view (home)
    handleLocation(); // This will load the default view based on the URL
    
    // Handle click events for navigation
    document.body.addEventListener("click", (event) => {
        const target = event.target.closest("a");
        if (target) {
            event.preventDefault();  // Prevent default link behavior
            route(event);  // Use the route function to update view
        }
    });

    const footerContainer = document.getElementById("footer");
    footerContainer.innerHTML = Footer();
};

app();
