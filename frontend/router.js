import HomeView from "./src/views/home-view.js";
import AboutView from "./src/views/about-view.js";
import spinner from "./src/utils/spinner.js";
import ProjectsView from "./src/views/projects-view.js";

// Define routes and map them to view functions
const routes = {
    "/": HomeView,
    "/projects": ProjectsView,
    "/about": AboutView,
    404: () => "<h1>Page Not Found</h1>",
};

// Function to get current hash path (defaults to '/')
const getHashPath = () => {
    const hash = window.location.hash.slice(1); // removes the '#'
    return hash || "/";
};

// Handle the current location and load the corresponding view
const handleLocation = async () => {
    spinner.showSpinner();
    const path = getHashPath();
    const route = routes[path] || routes[404];

    try {
        const result = typeof route === "function" ? await route() : route;
        const main = document.getElementById("main-content");

        if (typeof result === "string") {
            main.innerHTML = result;
        } else if (result && typeof result.html === "string") {
            main.innerHTML = result.html;
            if (typeof result.setup === "function") {
                setTimeout(() => result.setup(), 0);
            }
        } else {
            main.innerHTML = "<h1>Error loading view</h1>";
        }
    } catch (err) {
        console.error("View error:", err);
        document.getElementById("main-content").innerHTML = "<h1>Unexpected error</h1>";
    }

    spinner.hideSpinner();
};

// Function to handle link clicks and update the hash
const route = (event) => {
    event.preventDefault();
    const path = event.target.getAttribute("href");
    window.location.hash = path;
};

// Listen for hash changes (browser back/forward or manual hash change)
window.addEventListener("hashchange", handleLocation);
window.addEventListener("DOMContentLoaded", handleLocation);

// Export functions
export { handleLocation, route };
