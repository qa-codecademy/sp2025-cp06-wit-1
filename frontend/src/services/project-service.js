import Project from "../models/project-model.js";

// Get localized project types with fallback
export async function getProjectTypes(lang = "mk") {
  const types = {
    mk: [
      { id: 1, value: "Заедница" },
      { id: 2, value: "Образование" },
      { id: 3, value: "Животни" },
      { id: 4, value: "Медицина" },
      { id: 5, value: "Животна средина" },
      { id: 6, value: "Социјално" },
    ],
    alb: [
      { id: 1, value: "Komunitet" },
      { id: 2, value: "Arsim" },
      { id: 3, value: "Kafshë" },
      { id: 4, value: "Mjekësi" },
      { id: 5, value: "Mjedis" },
      { id: 6, value: "Sociale" },
    ],
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(types[lang] || types["mk"]);
    }, 200);
  });
}

const STORAGE_KEY_MK = "projects_mk";
const STORAGE_KEY_ALB = "projects_alb";
class ProjectService {
  constructor() {
    if (!localStorage.getItem(STORAGE_KEY_MK)) {
      localStorage.setItem(STORAGE_KEY_MK, JSON.stringify([]));
    }
    if (!localStorage.getItem(STORAGE_KEY_ALB)) {
      localStorage.setItem(STORAGE_KEY_ALB, JSON.stringify([]));
    }
  }


loadProjects(lang) {
  const key = lang === "alb" ? STORAGE_KEY_ALB : STORAGE_KEY_MK;
  return JSON.parse(localStorage.getItem(key)) || [];
}

saveProjects(lang, projects) {
  const key = lang === "alb" ? STORAGE_KEY_ALB : STORAGE_KEY_MK;
  localStorage.setItem(key, JSON.stringify(projects));
}


generateId() {
  return '' + Math.random().toString(36).substr(2, 9);
}

create(localizedProject) {
  const id = this.generateId();

  // Ensure both language payloads exist
  const filledMk = localizedProject.mk || {};
  const filledAlb = localizedProject.alb || {};

  // Use whichever exists, or fall back to the other
  const safeMk = {
    title: filledMk.title || filledAlb.title,
    description: filledMk.description || filledAlb.description,
    image: filledMk.image || filledAlb.image,
    bankAccount: filledMk.bankAccount || filledAlb.bankAccount,
    goal: filledMk.goal ?? filledAlb.goal ?? 0,
    endDate: filledMk.endDate || filledAlb.endDate || new Date(),
    typeId: filledMk.typeId || filledAlb.typeId || 1,
  };

  const safeAlb = {
    title: filledAlb.title || filledMk.title,
    description: filledAlb.description || filledMk.description,
    image: filledAlb.image || filledMk.image,
    bankAccount: filledAlb.bankAccount || filledMk.bankAccount,
    goal: filledAlb.goal ?? filledMk.goal ?? 0,
    endDate: filledAlb.endDate || filledMk.endDate || new Date(),
    typeId: filledAlb.typeId || filledMk.typeId || 1,
  };

  const mkProject = new Project(id, safeMk.title, safeMk.description, safeMk.image, safeMk.bankAccount, safeMk.goal, safeMk.endDate, safeMk.typeId);
  const albProject = new Project(id, safeAlb.title, safeAlb.description, safeAlb.image, safeAlb.bankAccount, safeAlb.goal, safeAlb.endDate, safeAlb.typeId);

  const mkProjects = this.loadProjects("mk");
  const albProjects = this.loadProjects("alb");

  mkProjects.push(mkProject);
  albProjects.push(albProject);

  this.saveProjects("mk", mkProjects);
  this.saveProjects("alb", albProjects);

  return { id, mk: mkProject, alb: albProject };
}

update(id, updatedData) {
  const mkSource = updatedData.mk || updatedData.alb || {};
  const albSource = updatedData.alb || updatedData.mk || {};

  // Load and locate
  const mkProjects = this.loadProjects("mk");
  const albProjects = this.loadProjects("alb");

  const mkIndex = mkProjects.findIndex((p) => p.id == id);
  const albIndex = albProjects.findIndex((p) => p.id == id);

  if (mkIndex === -1 || albIndex === -1) {
    throw new Error("Project not found in one or both language stores");
  }

  const mkUpdated = new Project(
    id,
    mkSource.title || albSource.title,
    mkSource.description || albSource.description,
    mkSource.image || albSource.image,
    mkSource.bankAccount || albSource.bankAccount,
    mkSource.goal ?? albSource.goal ?? 0,
    mkSource.endDate || albSource.endDate || new Date(),
    mkSource.typeId || albSource.typeId || 1
  );

  const albUpdated = new Project(
    id,
    albSource.title || mkSource.title,
    albSource.description || mkSource.description,
    albSource.image || mkSource.image,
    albSource.bankAccount || mkSource.bankAccount,
    albSource.goal ?? mkSource.goal ?? 0,
    albSource.endDate || mkSource.endDate || new Date(),
    albSource.typeId || mkSource.typeId || 1
  );

  mkProjects[mkIndex] = mkUpdated;
  albProjects[albIndex] = albUpdated;

  this.saveProjects("mk", mkProjects);
  this.saveProjects("alb", albProjects);

  return { id, mk: mkUpdated, alb: albUpdated };
}

getById(id, lang = "mk") {
  const projects = this.loadProjects(lang);
  return projects.find((p) => p.id == id) || null;
}

getAll(lang = "mk") {
  const allProjects = this.loadProjects();
  return allProjects.map((p) => {
    const localized = p[lang] || p["mk"];
    return new Project({ id: p.id, ...localized });
  });
}
}

export default new ProjectService();