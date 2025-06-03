import ProjectFilterBar from "../components/projects/project-filter-bar.js";
import ProjectList from "../components/projects/project-list.js";
import languageService from "../services/language-service.js";
import { getProjects, getProjectTypes } from "../services/projects-service.js";
import ProjectCardModel from "../models/project-card-model.js";
import { setupProjectHandlers, renderProjects } from "../utils/projects-helper.js";

let allProjects = [];
let visibleCount = 8;

const ProjectsView = async () => {
  const lang = languageService.getLanguage();
  const t = languageService.getAllTranslations().projects;

  allProjects = (await getProjects(lang)).map(p => new ProjectCardModel(p));
  const types = await getProjectTypes(lang);
  let visibleProjects = allProjects.slice(0, visibleCount);

  setTimeout(() => {
    setupProjectHandlers({
      allProjects,
      visibleCount,
      setVisibleCount: (val) => visibleCount = val,
      onFilter: (filtered) => {
        visibleCount = 8;
        visibleProjects = filtered.slice(0, visibleCount);
        renderProjects(visibleProjects, filtered);
      },
      onLoadMore: () => {
        visibleCount += 8;
        visibleProjects = allProjects.slice(0, visibleCount);
        renderProjects(visibleProjects, allProjects);
      },
      t
    });
  }, 0);

  return `
    <section class="projects-view-container">
      ${ProjectFilterBar(types, lang)}

      <div class="project-list">
        ${ProjectList(visibleProjects)}
      </div>

      <div class="projects-actions">
        <button id="loadMoreBtn">${t.filter.loadMoreButton}</button>
        <button id="addProjectBtn" class="add-project-btn">+ ${t.addProject}</button>
      </div>
    </section>
  `;
};

export default ProjectsView;
