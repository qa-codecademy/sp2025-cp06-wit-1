import CircularProgress from "../../utils/circular-progress.js";
import ProjectCardModel from "../../models/project-card-model.js"

const ProjectCard = (projectData, index, isAdmin=true, t) => {
  const project = new ProjectCardModel(projectData);

  return `
    <div class="project-card">
      <img src="${project.image}" alt="${t.projectImageAlt}" />
      <div class="project-card-content">
        <div class="project-title">${project.title}</div>
        <div class="project-description">${project.description.split('. ')[0] + '.'}</div>
        <div class="project-meta">
          <span class="project-date"><i class="bi bi-calendar"></i> ${project.getFormattedDate()}</span>
          <span class="project-status">${project.isActive ? t.active : t.inactive}</span>
          <span class="project-end-date"><i class="bi bi-hourglass-bottom"></i> ${project.getFormattedEndDate()}</span>
        </div>

        <div class="progress-section">
          ${CircularProgress(project.getProgressPercentage(), `card-${index}`)}

          <div class="progress-bar-wrapper">
            <div class="collected-amount">${t.collected}: ${project.collected} ден</div>
            <div class="remaining-amount">${project.getRemainingAmount() > 0 ? `${t.left}:${project.getRemainingAmount()} ден` : ""}</div>
          </div>
        </div>

        <button class="learn-more-btn" data-id="${project.id}" ${!project.isActive ? "disabled" : ""}>${t.learnMore}</button>

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

export default ProjectCard;
