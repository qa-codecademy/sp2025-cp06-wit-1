function simulateBackendFilter(projects, { searchTerm, selectedType, sort }) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let result = [...projects];

            // Type filter
            if (selectedType !== "all") {
                result = result.filter(p => p.typeId == selectedType);
            }

            // Search filter
            if (searchTerm) {
                result = result.filter(p =>
                    p.title.toLowerCase().includes(searchTerm) ||
                    p.description.toLowerCase().includes(searchTerm)
                );
            }

            // Sorting
            if (sort.key) {
                result.sort((a, b) => {
                    let aValue = a[sort.key];
                    let bValue = b[sort.key];

                    if (aValue instanceof Date || bValue instanceof Date || !isNaN(Date.parse(aValue))) {
                        aValue = new Date(aValue);
                        bValue = new Date(bValue);
                    }

                    if (aValue < bValue) return sort.order === "asc" ? -1 : 1;
                    if (aValue > bValue) return sort.order === "asc" ? 1 : -1;
                    return 0;
                });
            }

            resolve(result);
        }, 300); // backend response delay
    });
}

export function initProjectFilterBar(projects, onFilterChange, lang = "en") {
    const searchInput = document.getElementById("project-search");
    const typeSelect = document.getElementById("project-type-filter");
    const sortButtons = document.querySelectorAll(".sort-btn");
    const clearBtn = document.getElementById("clear-filters-btn");

    let currentSort = { key: null, order: "asc" };

    const applyFilters = () => {
        const searchTerm = searchInput?.value.toLowerCase() || "";
        const selectedType = typeSelect?.value || "all";

        simulateBackendFilter(projects, {
            searchTerm,
            selectedType,
            sort: currentSort
        }).then(filtered => {
            onFilterChange(filtered);
        });
    };

    // Event listeners
    searchInput?.addEventListener("input", applyFilters);
    typeSelect?.addEventListener("change", applyFilters);

    sortButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const sortKey = btn.dataset.sort;
            const newOrder = btn.dataset.order === "asc" ? "desc" : "asc";
            btn.dataset.order = newOrder;
            btn.textContent = btn.textContent.replace(/↑|↓/, newOrder === "asc" ? "↑" : "↓");

            currentSort.key = sortKey;
            currentSort.order = newOrder;
            applyFilters();
        });
    });

    clearBtn?.addEventListener("click", () => {
        searchInput.value = "";
        typeSelect.value = "all";
        currentSort = { key: null, order: "asc" };

        sortButtons.forEach(btn => {
            btn.dataset.order = "asc";
            btn.textContent = btn.textContent.replace(/↑|↓/, "↑");
        });

        applyFilters();
    });

    applyFilters(); // Initial load
}
