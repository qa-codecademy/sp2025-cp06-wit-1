import CircularProgress from "../../utils/circular-progress.js";
import ProjectCardModel from "../../models/project-card-model.js"
import languageService from "../../services/language-service.js";
import { showDonationModal } from "../../utils/shared-modals/donation-modal.js";
import Modal from "../../utils/shared-modals/modal.js";


const ProjectCard = (projectData, index, isAdmin = true, t) => {
  const projectdetails = languageService.getAllTranslations().projectdetails;
  const project = new ProjectCardModel(projectData);
  const typeIcons = {
    1: "bi-people",         // Заедница / Komunitet
    2: "bi-mortarboard",    // Образование / Arsim
    3: "bi-paw",            // Животни / Kafshë
    4: "bi-heart-pulse",    // Медицина / Mjekësi
    5: "bi-tree",           // Животна средина / Mjedis
    6: "bi-hand-heart"      // Социјално / Sociale
  };


  return `
    <div class="project-card">
     <div class="image-wrapper">
      <img src="${project.image}" alt="${t.projectImageAlt}" />
      ${project.isActive
      ? `<span class="active-badge">${t.active}</span>`
      : `<span class="inactive-badge">${t.inactive}</span>`}
  
       <span class="project-type floating">
        <i class="bi ${typeIcons[project.typeId]}"></i>
        ${t.projectTypes?.find(type => type.id === project.typeId)?.value || ""}
      </span>
    </div>
    <div class="project-meta">
      <span class="project-end-date">
      <i class="bi bi-hourglass-bottom"></i> ${project.getFormattedEndDate()}
      </span>
    </div>
          
        <div class="project-card-content">
        <div class="project-title">${project.title}</div>
        <div class="project-description">${project.description.split('. ')[0] + '.'}</div>
       

        <div class="progress-section">
          ${CircularProgress(project.getProgressPercentage(), `card-${index}`)}

          <div class="progress-bar-wrapper">
            <div class="collected-amount">${t.collected}: ${project.collected} ${t.currency}</div>
            <div class="remaining-amount">${project.getRemainingAmount() > 0 ? `${t.left}:${project.getRemainingAmount()} ${t.currency}` : ""}</div>
          </div>
        </div>
        <div class="btn-container">
        <button id="donateBtn" class="donate-btn">💚 ${projectdetails.donate}</button>
        <button class="learn-more-btn" data-id="${project.id}">ℹ️ ${t.learnMore}</button>
        </div>
        ${isAdmin ? `
          <div class="admin-buttons">
            <button class="edit-btn" data-id="${project.id}" title="${t.editTitle}"><i class="bi bi-pen"></i></button>
            <button class="delete-btn" data-id="${project.id}" title="${t.deleteTitle}"><i class="bi bi-trash"></i></button>
          </div>
        ` : ""}
      </div>
    </div>
  `;
};

function initProjectCard({ onDelete }) {

  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach(card => {
    card.addEventListener("click", async (e) => {
      const donateBtn = e.target.closest(".donate-btn")
      const editBtn = e.target.closest(".edit-btn");
      const deleteBtn = e.target.closest(".delete-btn");
      const learnMoreBtn = e.target.closest(".learn-more-btn");

      if (editBtn) {
        const projectId = editBtn.getAttribute("data-id");
        if (projectId) {
          window.location.hash = `#/edit-project/${projectId}`;
          window.scrollTo(0, 0);
        }
        return;
      }

      if (deleteBtn) {
        const projectId = deleteBtn.getAttribute("data-id");
        if (deleteBtn && projectId) {
          onDelete(projectId); // Delegate to helper
        }
        return;
      }

      if (learnMoreBtn) {
        const projectId = learnMoreBtn.getAttribute("data-id");
        if (projectId) {
          window.location.hash = `#/project/${projectId}`;
          window.scrollTo(0, 0);
        }
      }

      if (donateBtn) {
        const card = donateBtn.closest(".project-card");
        const projectTitle = card.querySelector(".project-title")?.textContent;

        const translations = languageService.getAllTranslations().donationModal;

        showDonationModal(translations, (data, cleanup) => {
          // ОВДЕ НЕ alert, туку користи твојот Modal или покажи нов модал со успех
          Modal({
            type: "success",
            title: translations.successTitle,
            message: translations.successMessageWithProject
              ? translations.successMessageWithProject(data.amount, projectTitle)
              : `Дониравте <strong>${data.amount} ден</strong> за <strong>${projectTitle}</strong>. Ви благодариме!`,

            buttons: [
              {
                text: translations.closeButton || "Затвори", 
                class: "confirm-btn",
                onClick: cleanup,
              }
            ]
          });
        });

        return;
      }
    });
  });
}

export { ProjectCard, initProjectCard };
