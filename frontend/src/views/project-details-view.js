import { getProjects } from "../services/projects-service.js";
import ProjectCardModel from "../models/project-card-model.js";
import languageService from "../services/language-service.js";
import { getProjectTypes } from "../services/project-service.js";
import { renderProjectDetails } from "../components/project-detail-view-components/project-details-html.js  ";
import { setupShareModal } from '../components/project-detail-view-components/shareModal.js';


const ProjectDetailsView = async ({ id }) => {
  const lang = languageService.getLanguage();
  const t = languageService.getAllTranslations().projectdetails;

  const allProjects = await getProjects(lang);
  const projectData = allProjects.find(p => String(p.id) === String(id));

  if (!projectData) {
    return {
      html: `<h2>${t.notFound}</h2>`,
      setup: () => {}
    };
  }

  const project = new ProjectCardModel(projectData);
  const types = await getProjectTypes(lang);
  const type = types.find(t => t.id == project.typeId) || { value: t.unknownProject };
  const allProjectModels = allProjects.map(p => new ProjectCardModel(p));

  let filteredProjects = allProjectModels
    .filter(p => {
      const daysLeft = p.getDaysLeft?.() ?? 999;
      const remaining = p.getRemainingAmount?.() ?? 0;
      return daysLeft <= 5 && remaining >= (p.goal * 0.5);
    })
    .sort((a, b) => a.getDaysLeft() - b.getDaysLeft());

  let fallbackMessage = "";
  if (filteredProjects.length === 0) {
    fallbackMessage = `<p>${t.noUrgentProjects || "Нема итни проекти. Прикажуваме проекти со најмалку донации."}</p>`;
    filteredProjects = [...allProjectModels]
      .sort((a, b) => a.collected - b.collected)
      .slice(0, 10);
  }

  const html = renderProjectDetails(project, type, t, fallbackMessage, filteredProjects);

  return {
    html,
    setup: () => {
const donateBtn = document.getElementById("donateBtn");
const modal = document.getElementById("donationFormContainer");
const submitBtn = document.getElementById("submitDonation");
const closeModal = document.getElementById("closeModal");
const overlay = document.querySelector("#donationFormContainer .modal-overlay");
const infoBtn = document.querySelector(".info-btn");
const descriptionSection = document.getElementById("projectDescription");
const copyLinkBtn = document.getElementById("copyLinkShare");


copyLinkBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  const url = `${window.location.origin}index.html#/product/${id}`;

  navigator.clipboard.writeText(url).then(() => {
    alert("✅ Врската е копирана!");
  }).catch(() => {
    alert("⚠️ Неуспешно копирање.");
  });
});


donateBtn?.addEventListener("click", () => {
  modal?.classList.remove("hidden");
});

closeModal?.addEventListener("click", () => {
  modal?.classList.add("hidden");
});

submitBtn?.addEventListener("click", () => {
  alert("✅ Донацијата е успешно симулирана. Ви благодариме!");
  modal?.classList.add("hidden");
});

// Затворање со клик надвор
overlay?.addEventListener("click", (e) => {
  if (e.target === overlay) {
    modal?.classList.add("hidden");
    document.body.classList.remove("modal-open"); // ако имаш блокирано скролање
  }
});

infoBtn?.addEventListener("click", () => {
  descriptionSection?.scrollIntoView({ behavior: "smooth" });
});


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
setupShareModal();

window.addEventListener("resize", updateCarousel);
updateCarousel();
}
  };
  
};

export default ProjectDetailsView;
