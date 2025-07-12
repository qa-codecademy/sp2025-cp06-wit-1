import ProjectList from "../components/projects/project-list.js";
import ProjectFilterBar from "../components/projects/project-filter-bar.js"; 
import { setupProjectHandlers, renderProjects } from "../utils/projects-helper.js";
import languageService from "../services/language-service.js";
import { getProjects, getProjectTypes } from "../services/projects-service.js";
import { initProjectCard } from "../components/projects/project-card.js";

let visibleCount = 8;

const ProjectsView = async () => {
  const lang = languageService.getLanguage();
  const t = languageService.getAllTranslations().projects;

  const allProjects = await getProjects(lang);
  const types = await getProjectTypes(lang); 
  const visibleProjects = allProjects.slice(0, visibleCount);

  const isAdmin = true; 

  const html = `
    <section class="projects-view-container ${isAdmin ? "admin-view" : "user-view"}">
      ${ProjectFilterBar(types, lang)}
  
      <div class="project-list" id="projectsContainer">
        ${ProjectList(visibleProjects, isAdmin)}
      </div>

      <div class="projects-actions">
        <button id="loadMoreBtn">${t.filter.loadMoreButton}</button>
      </div>
    </section>
  `;

  return {
    html,
    setup: () =>
      setupProjectHandlers({
        allProjects,
        visibleCount,
        setVisibleCount: (val) => (visibleCount = val),
        onFilter: (filteredList) => {
          renderProjects(filteredList.slice(0, visibleCount), filteredList);
        },
        onLoadMore: () => {
          visibleCount += 8;
          renderProjects(allProjects.slice(0, visibleCount), allProjects);
        },
        t,
      }),
    
  };
};

export default ProjectsView;
