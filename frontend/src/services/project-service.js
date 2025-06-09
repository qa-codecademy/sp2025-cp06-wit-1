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

const STORAGE_KEY = 'mockProjects';
class ProjectService {
  constructor() {
    // Initialize localStorage if empty
    if (!localStorage.getItem(STORAGE_KEY)) {
      this.saveProjects([]);
    }
  }

  loadProjects() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  saveProjects(projects) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  }

  generateId() {
    return '' + Math.random().toString(36).substr(2, 9);
  }

  create(projectData) {
    const projects = this.loadProjects();
    const newProject = new Project(
      this.generateId(),
      projectData.title,
      projectData.description,
      projectData.image,        // single image here
      projectData.transaction,
      projectData.donation,
      projectData.date,
      projectData.typeId
    );
    projects.push(newProject);
    this.saveProjects(projects);
    return newProject;
  }

  update(id, updatedData) {
    const projects = this.loadProjects();
    const index = projects.findIndex((p) => p.id === id);
    if (index === -1) throw new Error("Project not found");

    // Update project fields (you may want to be more selective here)
    projects[index] = new Project(
      id,
      updatedData.title,
      updatedData.description,
      updatedData.image,       // update image as well
      updatedData.transaction,
      updatedData.donation,
      updatedData.date,
      updatedData.typeId
    );
    this.saveProjects(projects);
    return projects[index];
  }

  getById(id) {
    const projects = this.loadProjects();
    return projects.find((p) => p.id === id) || null;
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