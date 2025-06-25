import { getProjects } from "../services/projects-service.js";
import ProjectCardModel from "../models/project-card-model.js";
import languageService from "../services/language-service.js";
import { getProjectTypes } from "../services/project-service.js";
import { renderProjectDetails } from "../components/project-detail-view-components/project-details-html.js  ";
import { setupShareModal } from '../components/project-detail-view-components/shareModal.js';
import { initUrgentProjects } from "../components/project-detail-view-components/urgent-projects.js";
import { initProjectCard } from "../components/projects/project-card.js";


const ProjectDetailsView = async ({ id }) => {
  const lang = languageService.getLanguage();
  const t = languageService.getAllTranslations().projectdetails;

  const allProjects = await getProjects(lang);
  const projectData = allProjects.find(p => String(p.id) === String(id));

  if (!projectData) {
    return {
      html: `<h2>${t.notFound}</h2>`,
      setup: () => { }
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
      initUrgentProjects();
      initProjectCard(()=>{});
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

      
      setupShareModal();
    }
  };

};

export default ProjectDetailsView;
