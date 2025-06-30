import languageService from "../services/language-service.js";

const Footer = () => {
    const footer = languageService.getAllTranslations().footer;
    return `
    <div class="socialIcons">
            <a href="https://www.facebook.com/people/When-in-Trouble/100080249001608/?mibextid=wwXIfr&rdid=Ul0d1ZYfnMrRCgZJ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AQtQoFg3s%2F%3Fmibextid%3DwwXIfr"
                target="_blank"><i class="bi bi-facebook"></i></a>
            <a href="https://www.instagram.com/troublegostivar2022/?igsh=N3c0d3E3emtlODI%3D#" target="_blank"><i
                    class="bi bi-instagram"></i></a>
        </div>
        <div class="socialInfo">
            <div class="locationWrapper">
               <a href="https://maps.app.goo.gl/HxovBrJhVMzxbyuG9" target="_blank"><i class="bi bi-geo-alt-fill"></i>${footer.address}</a>
            </div>    
            <div class="mailSubSection">
                <a href="mailto:troublegostivar@gmail.com"> <i class="bi bi-envelope-fill"></i>troublegostivar@gmail.com</a>
            </div>
            <a href="#/" id="logoTop">
            <img src="./src/assets/when-in-trouble-logo-cmyk.svg" alt="When in trouble logo">
            </a>
        </div>
    `;
};

function handleLogoClickBehavior() {
  const logoTop = document.getElementById("logoTop");

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

export default Footer;