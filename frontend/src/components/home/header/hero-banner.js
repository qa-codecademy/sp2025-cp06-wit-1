import languageService from "../../../services/language-service.js";

const HeroBanner = () => {
    const t = languageService.getAllTranslations().heroBanner;

    return `
    <section class="hero-banner">
      <div class="hero-banner-content">
        <h1 id="animated-title" class="hero-banner-title"></h1>
        <p class="hero-banner-description">${t.description}</p>
        <button class="cta-button" id="offer-help"">${t.offerHelp}</button>
        <button class="cta-button" id="get-help">${t.getHelp} →</a>
      </div>
      <div class="hero-graphic logo-animate">
        <img src="./src/assets/when-in-trouble-logo-cmyk.svg" alt="${t.imageAlt}" />
      </div>
    </section>
  `;
};

const initHeroBanner = () => {
  const titleEl = document.getElementById('animated-title');

  if (!titleEl || titleEl.dataset.animated === "true") return;

  const titleText = languageService.getAllTranslations().heroBanner.title;
  titleEl.innerHTML = "";
  titleEl.dataset.animated = "true";

  let index = 0;
  const speed = 70;

  const typeChar = () => {
    if (index < titleText.length) {
      const char = titleText.charAt(index);
      const isLastChar = index === titleText.length - 1;

      if (char === '.' && !isLastChar) {
        titleEl.innerHTML += '.<br>';
      } else {
        titleEl.innerHTML += char === '<' ? '&lt;' : char === '>' ? '&gt;' : char;
      }

      index++;
      setTimeout(typeChar, speed);
    }
  };

  typeChar();

  const offerBtn = document.getElementById('offer-help');
  const getBtn = document.getElementById('get-help');

  if (offerBtn) {
    offerBtn.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.setItem('helpMode', 'offer');
      window.location.hash = '#/get-involved';
    });
  }

  if (getBtn) {
    getBtn.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.setItem('helpMode', 'get');
      window.location.hash = '#/get-involved';
    });
  }
};

export { HeroBanner, initHeroBanner };