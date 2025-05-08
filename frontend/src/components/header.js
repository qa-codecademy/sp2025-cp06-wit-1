const Header = () => {
    return `
        <nav class="navbar">
        <a href="#/" class="logo">
            <img src="./src/assets/when-in-trouble-logo-cmyk.svg" alt="When In Trouble Logo">
        </a>
        <ul class="nav-links">
            <li><a href="#/" data-link>Home</a></li>
            <li class="dropdown">
                <a href="#" data-link>Programs & Initiatives</a>
                <ul class="dropdown-menu">
                    <li><a href="education.html" data-link>Education</a></li>
                    <li><a href="activism.html" data-link>Activism</a></li>
                    <li><a href="legal-support.html" data-link>Legal Support</a></li>
                    <li><a href="humanitarian.html" data-link>Humanitarian Aid</a></li>
                </ul>
            </li>
            <li><a href="get-involved.html" data-link>Get Involved</a></li>
            <li><a href="projects.html" data-link>Projects</a></li>
            <li><a href="gallery.html" data-link>Gallery</a></li>
            <li><a href="contact.html" data-link>Contact</a></li>
            <li><a href="tel:+38978247111"><i class="bi bi-telephone-fill"></i>   +38978247111</a></li>
        </ul>
    </nav>
    `;
};

export default Header;