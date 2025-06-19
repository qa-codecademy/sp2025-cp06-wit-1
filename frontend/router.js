import HomeView from "./src/views/home-view.js";
import AboutView from "./src/views/about-view.js";
import EditCreateProjectView from "./src/views/edit-create-project-view.js";
import spinner from "./src/utils/spinner.js";
import ProjectsView from "./src/views/projects-view.js";
import HelpView from "./src/views/help-view.js";
import ProjectDetailsView from "./src/views/project-details-view.js";

// Define routes with optional dynamic segments
const routes = {
    "/": HomeView,
    "/projects": ProjectsView,
    "/project/:id": ProjectDetailsView,
    "/about": AboutView,
    "/add-project": EditCreateProjectView,
    "/edit-project/:id": EditCreateProjectView,
    "/get-involved": HelpView,
    404: () => "<h1>Page Not Found</h1>",
};

// Match a path to a route pattern and extract params if any
const matchRoute = (path) => {
    const pathSegments = path.split("/").filter(Boolean);

    for (const route in routes) {
        const routeSegments = route.split("/").filter(Boolean);
        if (routeSegments.length !== pathSegments.length) continue;

        const params = {};
        let match = true;

        for (let i = 0; i < routeSegments.length; i++) {
            if (routeSegments[i].startsWith(":")) {
                const paramName = routeSegments[i].slice(1);
                params[paramName] = pathSegments[i];
            } else if (routeSegments[i] !== pathSegments[i]) {
                match = false;
                break;
            }
        }

        if (match) return { view: routes[route], params };
    }

    return { view: routes[404], params: {} };
};

// Get current path from hash (default to '/')
const getHashPath = () => window.location.hash.slice(1) || "/";

// Load the view for the current location
const handleLocation = async () => {
    spinner.showSpinner();
    const path = getHashPath();
    const { view, params } = matchRoute(path);

    try {
        const result = typeof view === "function" ? await view(params || {}) : view;
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

// Handle internal link clicks and update the hash
const route = (event) => {
    event.preventDefault();
    const path = event.target.getAttribute("href");
    window.location.hash = path;
};

// Listen for hash changes (back/forward navigation)
window.addEventListener("hashchange", handleLocation);
window.addEventListener("DOMContentLoaded", handleLocation);

export { handleLocation, route };
