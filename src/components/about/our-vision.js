import languageService from "../../services/language-service.js";

const OurVision = () => {
  const vision = languageService.getAllTranslations().about.vision;

  return `
    <section class="vision-section">
      <div class="vision-container">
        <div class="vision-text">
          <h2>${vision.title}</h2>
          <p>${vision.text}</p>
        </div>
        <div class="vision-image">
          <img src="https://picsum.photos/800/400?random=4" alt="Our Vission" />
        </div>
      </div>
    </section>
  `;
};

export default OurVision;