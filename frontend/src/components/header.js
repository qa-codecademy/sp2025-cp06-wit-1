// src/components/header.js
const Header = () => {
    return `
        <nav>
            <ul>
                <li><a href="/" onclick="route(event)">Home</a></li>
                <li><a href="/about" onclick="route(event)">About</a></li>
            </ul>
        </nav>
    `;
};

export default Header;
