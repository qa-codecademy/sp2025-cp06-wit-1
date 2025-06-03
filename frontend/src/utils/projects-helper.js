import ProjectList from "../components/projects/project-list.js";
import { initProjectFilterBar } from "./initProjectFilterBar .js";

export function setupProjectHandlers({ allProjects, visibleCount, setVisibleCount, onFilter, onLoadMore, t }) {
  const lang = localStorage.getItem("language") || "en";

  initProjectFilterBar(allProjects, onFilter, lang);

  const loadMoreBtn = document.getElementById("loadMoreBtn");
  loadMoreBtn?.addEventListener("click", () => {
    onLoadMore();
    if (visibleCount + 8 >= allProjects.length) {
      loadMoreBtn.style.display = "none";
    }
  });

  const addProjectBtn = document.getElementById("addProjectBtn");
  addProjectBtn?.addEventListener("click", () => {
    window.location.hash = "#/create-project";
  });
   const projectsContainer = document.getElementById("projectsContainer");
    projectsContainer.addEventListener("click", (e) => {
        const editBtn = e.target.closest(".edit-btn");
        if (editBtn) {
            const projectId = editBtn.getAttribute("data-id");
            if (projectId) {
                window.location.hash = `#/edit-project/${projectId}`;
            }
        }
        const deleteBtn = e.target.closest(".delete-btn");
        if (deleteBtn) {
            const projectId = deleteBtn.getAttribute("data-id");
            if (projectId && confirm(t.confirmDelete)) {
                //Implement delete logic here
                alert(`Delete project with ID: ${projectId}`);
            }
        }
        const learnMoreBtn = e.target.closest(".learn-more-btn");
        if (learnMoreBtn) {
            const projectId = learnMoreBtn.getAttribute("data-id");
            if (projectId) {
                window.location.hash = `#/project/${projectId}`;
            }
        }
    });
}

export function renderProjects(visibleProjects, fullList) {
  const container = document.querySelector(".project-list");
  if (container) {
    container.innerHTML = ProjectList(visibleProjects);
  }

  const loadMoreBtn = document.getElementById("loadMoreBtn");
  if (loadMoreBtn) {
    loadMoreBtn.style.display = visibleProjects.length >= fullList.length ? "none" : "block";
  }
}
