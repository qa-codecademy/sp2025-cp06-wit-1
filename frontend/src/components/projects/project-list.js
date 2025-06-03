import ProjectCard from "./project-card.js";
import languageService from "../../services/language-service.js";

const ProjectList = (projects = [], isAdmin = true) => {
  const t = languageService.getAllTranslations().projects;
  
  if (!projects.length) {
    return `<p class="no-projects-message">${t.noProjects || "No projects found."}</p>`;
  }

  return `
    <div class="project-list" id="projectsContainer">
      ${projects.map((project, index) => 
        ProjectCard(project, index, isAdmin, t.card)
      ).join("")}
    </div>
  `;
};

export default ProjectList;
