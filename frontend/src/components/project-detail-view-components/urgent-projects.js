import ProjectCard from "../projects/project-card.js";
import languageService from "../../services/language-service.js";

export function renderUrgentProjects(fallbackMessage, filteredProjects, ) {
const t = languageService.getAllTranslations().projects;
  return `
    <div class="related-projects">
      <h3>${t.endingSoonAndNeedHelp || "Преостануваат малку денови"}</h3>
      ${fallbackMessage}
      <div class="carousel-container">
        <button class="carousel-btn left" id="carouselLeft">←</button>
        <div class="carousel-viewport">
          <div class="carousel-track" id="urgentProjectsCarousel">
            ${filteredProjects.map((project, index) => 
              ProjectCard(project, index, false, t.card)
            ).join("")}
          </div>
        </div>
        <button class="carousel-btn right" id="carouselRight">→</button>
      </div>
    </div>
  `;
}
