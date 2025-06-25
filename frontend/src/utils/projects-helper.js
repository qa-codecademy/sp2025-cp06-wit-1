import { initProjectCard } from "../components/projects/project-card.js";
import ProjectList from "../components/projects/project-list.js";
import { initProjectFilterBar } from "./initProjectFilterBar.js";
import { getProjects, deleteProjectById } from "../services/projects-service.js";
import Modal from "./modal.js";
import languageService from "../services/language-service.js";

let cachedAllProjects = [];
let cachedSetVisibleCount = () => { };
let cachedOnFilter = () => { };
let cachedRenderProjects = () => { };
const lang = localStorage.getItem("language") || "mk";
const t = languageService.getAllTranslations().projects;
const tEditCreate = languageService.getAllTranslations().editCreate;

export function setupProjectHandlers({
  allProjects,
  visibleCount,
  setVisibleCount,
  onFilter,
  onLoadMore,

}) {


  cachedAllProjects = allProjects;
  cachedSetVisibleCount = setVisibleCount;
  cachedOnFilter = onFilter;
  cachedRenderProjects = () => {
    renderProjects(
      cachedAllProjects.slice(0, visibleCount),
      cachedAllProjects,
      true,
      handleDelete
    );
  };

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
}

async function deleteAndRefreshProject(projectId) {

  try {
    await deleteProjectById(projectId);
    const updated = await getProjects(lang);
    cachedSetVisibleCount(8);
    cachedOnFilter(updated);
    cachedAllProjects.length = 0;
    cachedAllProjects.push(...updated);
    cachedRenderProjects();
  } catch (error) {
    Modal({
      type: "error",
      title: tEditCreate.savingError,
      message: tEditCreate.troubleAlert,
      buttons: [{ text: "OK", class: "cancel-btn" }],
    });
  }
}

function handleDelete(id) {
  Modal({
    type: "warning",
    title: t.confirmDelete,
    message: "",
    buttons: [
      { text: tEditCreate.cancel, class: "cancel-btn", onClick: () => { } },
      {
        text: "Избриши",
        class: "confirm-btn",
        onClick: () => deleteAndRefreshProject(id),
      },
    ],
  });
}

export function renderProjects(visibleProjects, fullList, isAdmin = true, onDelete = handleDelete) {
  const container = document.querySelector(".project-list");
  if (container) {
    container.innerHTML = ProjectList(visibleProjects, isAdmin);
    initProjectCard({ onDelete });
  }

  const loadMoreBtn = document.getElementById("loadMoreBtn");
  if (loadMoreBtn) {
    loadMoreBtn.style.display =
      visibleProjects.length >= fullList.length ? "none" : "block";
  }
}