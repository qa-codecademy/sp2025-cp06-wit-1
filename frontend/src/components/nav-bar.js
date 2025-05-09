const NavBar = () => {
    return `
       <div class="logo">
    <a href="#/">
        <img src="./src/assets/when-in-trouble-logo-cmyk.svg" alt="Лого на When In Trouble">
    </a>
    <span class="logo-text">When In Trouble</span>
</div>
    <ul class="nav-links">
        <li><a href="#/" data-link>Почетна</a></li>
        <li class="dropdown">
            <a href="#" data-link>Програми и Иницијативи</a>
            <ul class="dropdown-menu">
                <li><a href="education.html" data-link>Образование</a></li>
                <li><a href="activism.html" data-link>Активизам</a></li>
                <li><a href="legal-support.html" data-link>Правна Поддршка</a></li>
                <li><a href="humanitarian.html" data-link>Хуманитарна Помош</a></li>
            </ul>
        </li>
        <li><a href="get-involved.html" data-link>Вклучи се</a></li>
        <li><a href="projects.html" data-link>Проекти</a></li>
        <li><a href="gallery.html" data-link>Галерија</a></li>
        <li><a href="contact.html" data-link>Контакт</a></li>
        <li><a href="tel:+38978247111"><i class="bi bi-telephone-fill"></i> +38978247111</a></li>
    </ul>
    `;
};

export default NavBar;