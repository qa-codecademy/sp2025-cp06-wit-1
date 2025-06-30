import ProjectCard from "../components/projects/project-card.js";


function initProjectsView(allProjects, isAdmin, t, filterTypes) {
    let filteredProjects = [...allProjects];
    let visibleCount = 8;

    const searchInput = document.getElementById("searchInput");
    const sortSelect = document.getElementById("sortSelect");
    const filterSelect = document.getElementById("filterSelect");
    const clearFilterBtn = document.getElementById("clearFilterBtn");
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    const projectsContainer = document.getElementById("projectsContainer");

    const renderProjects = () => {
        projectsContainer.innerHTML = "";

        if (filteredProjects.length === 0) {
            projectsContainer.innerHTML = `<p class="no-projects-msg">${t.noProjectsFound}</p>`;
            loadMoreBtn.style.display = "none";
            return;
        }

        filteredProjects.slice(0, visibleCount).forEach((project, i) => {
            projectsContainer.insertAdjacentHTML(
                "beforeend",
                ProjectCard(project, i, isAdmin, t.card)
            );
        });

           animateProgressCounters();
        loadMoreBtn.style.display =
            visibleCount >= filteredProjects.length ? "none" : "block";

     
    };

    const applyFilters = () => {
        const search = searchInput.value.toLowerCase();
        const type = filterSelect.value;
        const sort = sortSelect.value;

        filteredProjects = allProjects.filter(
            (p) =>
                p.title.toLowerCase().includes(search) &&
                (type === "all" || p.type === type)
        );

        if (sort === "name") {
            filteredProjects.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sort === "date") {
            filteredProjects.sort(
                (a, b) => new Date(b.datePosted) - new Date(a.datePosted)
            );
        } else if (sort === "active") {
            filteredProjects.sort((a, b) =>
                b.isActive === a.isActive ? 0 : b.isActive ? 1 : -1
            );
        }

        visibleCount = 8;
        renderProjects();
    };

    searchInput.addEventListener("input", applyFilters);
    sortSelect.addEventListener("change", applyFilters);
    filterSelect.addEventListener("change", applyFilters);

    clearFilterBtn.addEventListener("click", () => {
        searchInput.value = "";
        sortSelect.value = "default";
        filterSelect.value = "all";
        applyFilters();
    });

    loadMoreBtn.addEventListener("click", () => {
        visibleCount += 4;
        renderProjects();
    });

    applyFilters();

    const addProjectBtn = document.getElementById("addProjectBtn");
    if (addProjectBtn) {
        addProjectBtn.addEventListener("click", () => {
            window.location.hash = "#/add-project";
            window.scrollTo(0,0);
        });
    }
    projectsContainer.addEventListener("click", (e) => {
        const editBtn = e.target.closest(".edit-btn");
        if (editBtn) {
            const projectId = editBtn.getAttribute("data-id");
            if (projectId) {
                window.location.hash = `#/edit-project/${projectId}`;
                window.scrollTo(0,0);
            }
        }
        const deleteBtn = e.target.closest(".delete-btn");
        if (deleteBtn) {
            const projectId = deleteBtn.getAttribute("data-id");
            if (projectId && confirm(t.confirmDelete)) {
                //Implement delete logic here
                console.log(`Delete project with ID: ${projectId}`);
            }
        }
        const learnMoreBtn = e.target.closest(".learn-more-btn");
        if (learnMoreBtn) {
            const projectId = learnMoreBtn.getAttribute("data-id");
            if (projectId) {
                window.location.hash = `#/project/${projectId}`;
                window.scrollTo(0,0);
            }
        }
    });

    function animateProgressCounters() {
        const circles = document.querySelectorAll(".filled-progress-circle");

        circles.forEach(circle => {
            const labelId = circle.dataset.id;
            const target = parseInt(circle.dataset.target, 10);
            const label = document.getElementById(labelId);

            if (!label) return;

            let current = 0;
            const duration = 1000;
            const increment = target / (duration / 16);

            function update() {
                current += increment;
                if (current >= target) {
                    label.textContent = target + "%";
                } else {
                    label.textContent = Math.round(current) + "%";
                    requestAnimationFrame(update);
                }
            }

            requestAnimationFrame(update);
        });
    }


}

export default initProjectsView;