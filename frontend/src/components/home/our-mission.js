import languageService from "../../services/language-service.js";

const OurMission = () => {
  const mission = languageService.getAllTranslations().home.mission;

  return `
    <section class="mission-section">
      <div class="mission-container">
        <div class="mission-text">
          <h2>${mission.title}</h2>
          <p>${mission.text}</p>
        </div>
        <div class="mission-image">
          <img src="https://picsum.photos/800/400?random=2" alt="Our Mission" />
        </div>
      </div>
    </section>
  `;
};

export default OurMission;
