import HomeView from "./src/views/home-view.js";
import AboutView from "./src/views/about-view.js";

// Define routes and map them to views or HTML content
const routes = {
    "/": HomeView(),      // Home view mapped to root path
    "/about": AboutView(), // About view for the /about route
    404: "<h1>Page Not Found</h1>",  // Default fallback 404 page
  };
  
  // Function to handle location and load the correct view dynamically
  const handleLocation = async () => {
    const path = window.location.pathname;  // Get the current path from the URL
    const route = routes[path] || routes[404];  // Get the route, default to 404 if not found
  
    // If the route is a view (string) we call the view function, otherwise inject HTML directly
    if (typeof route === 'function') {
      document.getElementById("main-content").innerHTML = await route();  // If function, render the view
    } else {
      document.getElementById("main-content").innerHTML = route;  // If it's HTML (string), inject it
    }
  };
  
  // Function to handle route changes when a link is clicked
  const route = (event) => {
    event.preventDefault();  // Prevent default link behavior
    const path = event.target.getAttribute("href");  // Get the href of the clicked link
    window.history.pushState({}, "", path);  // Update the URL without reloading the page
    handleLocation();  // Call handleLocation to update the content based on the new URL
  };
  
  // Export functions
  export { handleLocation, route };
  