// project-info.js
import { renderDonationForm } from './donation-form.js';
import { renderShareModal } from '../../utils/shared-modals/shareModal.js';

export function renderProjectInfo(project, t, type) {
  const typeIcons = {
    1: "bi-people",         // Заедница / Komunitet
    2: "bi-mortarboard",    // Образование / Arsim
    3: "bi-paw",            // Животни / Kafshë
    4: "bi-heart-pulse",    // Медицина / Mjekësi
    5: "bi-tree",           // Животна средина / Mjedis
    6: "bi-hand-heart"      // Социјално / Sociale
  };
  return `
    <div class="top-buttons">
      <button onclick="window.history.back()" class="back-btn">← ${t.back}</button>
      <button class="btn share-btn">🔗 ${t.share}</button>
          ${renderShareModal()}
    </div>
    <div class="project-details">
      <div class="project-details-left">
        <img src="${project.image}" alt="${project.title}" />
      </div>

      <div class="project-details-right">
        <h2>${project.title} 
       
      <span class="type-icon">
        <i class="bi ${typeIcons[project.typeId]}"></i>
        ${t.projectTypes?.find(type => type.id === project.typeId)?.value || ""}
      </span>
        </h2>
        
        <p class="project-description">${project.description}</p>
  
        <div class="progress-bar-info">
          <div class="progress-info-bar">
            <div class="project-financials">
            <span class="collected"><strong>${t.collected}:</strong> ${project.collected} ${t.currency}</span>
            <span class="remaining"><strong>${t.remaining}:</strong> ${project.getRemainingAmount()} ${t.currency}</span>
            <span class="goal"><strong>${t.goal}:</strong> ${project.goal} ${t.currency}</span>
        </div>

          </div>
          <progress data-collected="${project.collected}" value="0" max="${project.goal}"></progress>

        </div>

        <div class="down-buttons">
          <button id="donateBtn" class="donate-btn">💚 ${t.donate}</button>
          <button class="btn info-btn">ℹ️ ${t.info}</button>
        </div>

        <div id="donationFormContainer" class="hidden">
        ${renderDonationForm(t)}
        </div>
      </div>
    </div>
  `;
}

