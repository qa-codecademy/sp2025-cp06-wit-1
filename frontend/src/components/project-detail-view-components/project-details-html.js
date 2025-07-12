import { renderProjectInfo } from "./project-info.js";
import { renderUrgentProjects } from "./urgent-projects.js";

export function renderProjectDetails(project, type, t, fallbackMessage, filteredProjects) {
  return `
    <section class="project-details-section">
      ${renderProjectInfo(project, t, type)}
    </section>
    ${renderUrgentProjects(fallbackMessage, filteredProjects, t)}
    <div id="projectDescription" class="descriptionfortheproject">
  <h2>${project.title}</h2>
  <p>${project.description}</p>
    <p><strong>${t.datePosted}:</strong> ${project.getFormattedDate()}</p>
    <p><strong>${t.endDate}:</strong> ${project.getFormattedEndDate()}</p>
</div>
  `;
}
