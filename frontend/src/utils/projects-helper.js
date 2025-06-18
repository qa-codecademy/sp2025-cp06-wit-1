import ProjectList from "../components/projects/project-list.js";
import languageService from "../services/language-service.js";
import {
    getProjects,
    deleteProjectById,
} from "../services/projects-service.js";
import { initProjectFilterBar } from "./initProjectFilterBar.js";
import Modal from "./modal.js";

export function setupProjectHandlers({
    allProjects,
    visibleCount,
    setVisibleCount,
    onFilter,
    onLoadMore,
    t,
}) {
    const lang = localStorage.getItem("language") || "mk";
    const tEditCreate = languageService.getAllTranslations().editCreate;

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

                if (projectId) {
                    Modal({
                        type: "warning",
                        title: "Дали сте сигурни?",
                        message: "Со ова трајно ќе го избришите проектот.",
                        buttons: [
                            {
                                text: "Откажи",
                                class: "cancel-btn",
                                onClick: () => {
                                    console.log("Deletion cancelled.");
                                },
                            },
                            {
                                text: "Избриши",
                                class: "confirm-btn",
                                onClick: async () => {
                                    try {
                                        await deleteProjectById(projectId);
                                        const currentLang = languageService.getLanguage(); // or localStorage.getItem("language")
                                        const updatedProjects = await getProjects(currentLang);

                                        setVisibleCount(8);
                                        onFilter(updatedProjects);
                                        allProjects.length = 0;
                                        allProjects.push(...updatedProjects);
                                        console.log("Project deleted.");
                                    } catch (error) {
                                        Modal({
                                            type: "error",
                                            title: tEditCreate.savingError,
                                            message: tEditCreate.troubleAlert,
                                            buttons: [
                                                {
                                                    text: "OK",
                                                    class: "cancel-btn",
                                                },
                                            ],
                                        });
                                    }
                                },
                            },
                        ],
                        onClose: () => {
                            console.log("Delete confirmation modal closed.");
                        },
                    });
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
        loadMoreBtn.style.display =
            visibleProjects.length >= fullList.length ? "none" : "block";
    }
}
