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

class ProjectService {
  STORAGE_KEY = "mockProjects";

  // Initial hardcoded projects
  initialProjects = [
    {
      id: 1,
      alb: {
        title: "Ruaj Pyllin",
        description: "Ndihmo mbrojtjen e pyllit të Amazonës.",
        image: "https://picsum.photos/id/1018/300/200",
        transaction: "tx123",
        donation: 100,
        date: "2025-05-01",
        typeId: 1,
      },
      mk: {
        title: "Спаси ја шумата",
        description: "Помогни во заштитата на Амазонската шума.",
        image: "https://picsum.photos/id/1018/300/200",
        transaction: "tx123",
        donation: 100,
        date: "2025-05-01",
        typeId: 1,
      },
    },
    {
      id: 2,
      alb: {
        title: "Iniciativa për Oqeanet e Pastra",
        description: "Reduktim i ndotjes plastike në oqean.",
        image: "https://picsum.photos/id/1025/300/200",
        transaction: "tx124",
        donation: 250,
        date: "2025-04-15",
        typeId: 2,
      },
      mk: {
        title: "Иницијатива за чисти океани",
        description: "Намалување на пластичното загадување во океанот.",
        image: "https://picsum.photos/id/1025/300/200",
        transaction: "tx124",
        donation: 250,
        date: "2025-04-15",
        typeId: 2,
      },
    },
    {
      id: 3,
      alb: {
        title: "Mbështetje për Strehë për Kafshë",
        description: "Sigurimi i ushqimit dhe strehës për kafshët endacake.",
        image: "https://picsum.photos/id/1027/300/200",
        transaction: "tx125",
        donation: 75,
        date: "2025-06-10",
        typeId: 3,
      },
      mk: {
        title: "Поддршка за засолниште за животни",
        description: "Обезбедување храна и засолниште за скитнички животни.",
        image: "https://picsum.photos/id/1027/300/200",
        transaction: "tx125",
        donation: 75,
        date: "2025-06-10",
        typeId: 3,
      },
    },
    {
      id: 4,
      alb: {
        title: "Qasje në Ujë të Pastër",
        description: "Ndërtimi i burimeve të ujit në vendet në zhvillim.",
        image: "https://picsum.photos/id/1035/300/200",
        transaction: "tx126",
        donation: 300,
        date: "2025-05-20",
        typeId: 4,
      },
      mk: {
        title: "Пристап до чиста вода",
        description: "Изградба на бунари во земјите во развој.",
        image: "https://picsum.photos/id/1035/300/200",
        transaction: "tx126",
        donation: 300,
        date: "2025-05-20",
        typeId: 4,
      },
    },
    {
      id: 5,
      alb: {
        title: "Fond Edukativ",
        description: "Bursa për studentë në nevojë.",
        image: "https://picsum.photos/id/1043/300/200",
        transaction: "tx127",
        donation: 500,
        date: "2025-07-01",
        typeId: 5,
      },
      mk: {
        title: "Едукативен фонд",
        description: "Студентски стипендии за загрозени категории.",
        image: "https://picsum.photos/id/1043/300/200",
        transaction: "tx127",
        donation: 500,
        date: "2025-07-01",
        typeId: 5,
      },
    },
    {
      id: 6,
      alb: {
        title: "Kopshti Komunitar",
        description: "Promovim i bujqësisë urbane dhe jetesës së shëndetshme.",
        image: "https://picsum.photos/id/1052/300/200",
        transaction: "tx128",
        donation: 150,
        date: "2025-04-25",
        typeId: 6,
      },
      mk: {
        title: "Заедничка градина",
        description: "Промоција на урбано земјоделство и здрав начин на живеење.",
        image: "https://picsum.photos/id/1052/300/200",
        transaction: "tx128",
        donation: 150,
        date: "2025-04-25",
        typeId: 6,
      },
    },
  ];

  constructor() {
    // Populate local storage once if empty
    if (!localStorage.getItem(this.STORAGE_KEY)) {
      this.saveProjects(this.initialProjects);
    }
  }

  loadProjects() {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  saveProjects(projects) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(projects));
  }

  create(project) {
    // if (!project.mk || !project.alb || !project.mk.title || !project.alb.title) {
    //   throw new Error("Invalid project format");
    // }

    const projects = this.loadProjects();
    project.id = Date.now();
    projects.push(project);
    this.saveProjects(projects);
    return project;
  }

  update(id, updatedProject) {
    const projects = this.loadProjects();
    const index = projects.findIndex((p) => p.id === Number(id));
    if (index !== -1) {
      projects[index] = { ...projects[index], ...updatedProject };
      this.saveProjects(projects);
      return projects[index];
    } else {
      throw new Error("Project not found");
    }
  }

  delay(ms = 300) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async getById(id, lang = "mk") {
    await this.delay();
    const allProjects = this.loadProjects();
    const projectData = allProjects.find((p) => p.id == id);
    if (!projectData) return null;
    // const localized = projectData[lang] || projectData["mk"];
    return projectData;
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