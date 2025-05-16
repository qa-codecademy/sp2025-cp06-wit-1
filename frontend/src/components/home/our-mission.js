import languageService from "../../services/language-service.js";

const OurMission = () => {
    const mission = languageService.getAllTranslations().home.mission;
    return `<section class="mission-section">
        <p>${mission.text}</p>
         </section>`;
         
};

export default OurMission;
