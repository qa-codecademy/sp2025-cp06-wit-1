import languageService from "../../services/language-service.js";

const ProjectFilterBar = (types, lang) => {
  const t = languageService.getAllTranslations(lang).projects.filter;
  const typesOptions = types
    .map((tp) => `<option value="${tp.id}">${tp.value}</option>`)
    .join("");

  return `
    <div class="project-filter-bar">
      <input type="text" id="project-search" placeholder="${t.searchPlaceholder}" />

      <select id="project-type-filter">
        <option value="all">${t.allTypes}</option>
        ${typesOptions}
      </select>

      <div class="sort-buttons">
        <button class="sort-btn" data-sort="title" data-order="asc">${t.sortByName} ↑</button>
        <button class="sort-btn" data-sort="datePosted" data-order="asc">${t.sortByDate} ↑</button>
        <button class="sort-btn" data-sort="isActive" data-order="asc">${t.sortByActive} ↑</button>
      </div>

      <button id="clear-filters-btn" type="button">${t.clearFilters}</button>
    </div>
  `;
};

export default ProjectFilterBar;
