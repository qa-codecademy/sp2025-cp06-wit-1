import ProjectList from "../components/projects/project-list.js";
import { getProjects, deleteProjectById } from "../services/projects-service.js";
import { initProjectFilterBar } from "./initProjectFilterBar.js";

export function setupProjectHandlers({ allProjects, visibleCount, setVisibleCount, onFilter, onLoadMore, t }) {
    const lang = localStorage.getItem("language") || "mk";

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
        window.location.hash = "#/add-project";
    });

    const projectsContainer = document.getElementById("projectsContainer");


    if (!projectsContainer.hasListener) {
        projectsContainer.hasListener = true;
        projectsContainer.addEventListener("click", async (e) => {
            const editBtn = e.target.closest(".edit-btn");
            if (editBtn) {
                const projectId = editBtn.getAttribute("data-id");
                if (projectId) {
                    window.location.hash = `#/edit-project/${projectId}`;
                }
                return;
            }

            const deleteBtn = e.target.closest(".delete-btn");
            if (deleteBtn) {
                const projectId = deleteBtn.getAttribute("data-id");

                if (projectId && confirm(t.confirmDelete)) {
                    await deleteProjectById(projectId);
                    const updatedProjects = await getProjects(lang);
                    setVisibleCount(8); // Reset if needed or keep as-is
                    onFilter(updatedProjects);
                    allProjects.length = 0;
                    allProjects.push(...updatedProjects);
                }
                return;
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
}


export function renderProjects(visibleProjects, fullList, isAdmin = true) {
    const container = document.querySelector(".project-list");
    if (container) {
        container.innerHTML = ProjectList(visibleProjects, isAdmin);
    }

    const loadMoreBtn = document.getElementById("loadMoreBtn");
    if (loadMoreBtn) {
        loadMoreBtn.style.display = visibleProjects.length >= fullList.length ? "none" : "block";
    }

}
