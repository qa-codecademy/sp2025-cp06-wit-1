import {ProjectCard} from "../projects/project-card.js";
import languageService from "../../services/language-service.js";

export function renderUrgentProjects(title, filteredProjects, ) {
const t = languageService.getAllTranslations().projects;
  return `
    <div class="related-projects">
      <h3>${t.endingSoonAndNeedHelp || title}</h3>

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

export function initUrgentProjects()
{
      // Carousel setup
      const carousel = document.getElementById("urgentProjectsCarousel");
      const leftBtn = document.getElementById("carouselLeft");
      const rightBtn = document.getElementById("carouselRight");

      const item = carousel.querySelector(".project-card");
      const itemWidth = item.offsetWidth + 20; // 20px padding gap (10px * 2)
      const visibleCount = Math.floor(carousel.parentElement.offsetWidth / itemWidth);
      const totalItems = carousel.children.length;

      let currentIndex = 0;

      const updateCarousel = () => {
        const maxIndex = totalItems - visibleCount;
        currentIndex = Math.max(0, Math.min(currentIndex, maxIndex)); // clamp
        const offset = -(currentIndex * itemWidth);
        carousel.style.transform = `translateX(${offset}px)`;

        // Disable buttons at edges
        leftBtn.disabled = currentIndex === 0;
        rightBtn.disabled = currentIndex >= maxIndex;
      };

      leftBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
          currentIndex--;
          updateCarousel();
        }
      });

      rightBtn.addEventListener("click", () => {
        if (currentIndex < totalItems - visibleCount) {
          currentIndex++;
          updateCarousel();
        }
      });

      window.addEventListener("resize", updateCarousel);
      updateCarousel();
}
