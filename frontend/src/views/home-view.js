import OurMission from "../components/home/our-mission.js";
import DonationMessage from "../components/home/header/donation-message.js";
import SuccessCarousel from "../components/home/header/success-carousel.js";
import initCarousel from "../components/util.js";
import { fetchCarouselItems, fetchPeople } from "../services/carousel-service.js";
import PeopleCarousel from "../components/home/header/people-carousel.js";
import { Subscribe, initSubscribeForm } from "../components/home/subscribe.js";
import { renderDifferenceSection } from "../components/sectionDifference.js";
import { renderResultsSection, initResultsSection } from "../components/sectionResults.js";
import languageService from "../services/language-service.js";
import { HeroBanner, initHeroBanner } from "../components/home/header/hero-banner.js";
import { getProjects } from "../services/projects-service.js";
import { initUrgentProjects, renderUrgentProjects } from "../components/project-detail-view-components/urgent-projects.js";
import { initProjectCard } from "../components/projects/project-card.js";

const HomeView = async () => {
  const lang = languageService.getLanguage();

  // Fetch data
  const [projects, itemsSuccess, itemsPeople] = await Promise.all([
    getProjects(lang),
    fetchCarouselItems(lang),
    fetchPeople(lang)
  ]);

  // Store HTML structure
  const html = `
    <section class="home-view container">
      ${HeroBanner()}
        ${OurMission()}

        ${renderUrgentProjects("Биди хуман помогни!", projects)}
   
        ${renderResultsSection()}

        ${SuccessCarousel(itemsSuccess)}
      ${Subscribe()}
    </section>
  `;

  const setup = () => {
    initCarousel('#success-carousel');
    initSubscribeForm();
    initHeroBanner();
    initResultsSection();
    initUrgentProjects();
    initProjectCard(()=>{});
  };

  return { html, setup };
};

export default HomeView;
