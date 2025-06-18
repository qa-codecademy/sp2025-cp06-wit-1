// project-info.js
import { renderDonationForm } from './donation-form.js';
import { renderShareModal } from './shareModal.js';

export function renderProjectInfo(project, t, type) {
  return `
    <div class="top-buttons">
      <button onclick="window.history.back()" class="back-btn">← ${t.back}</button>
      <button class="btn share-btn">🔗 Сподели</button>
          ${renderShareModal()}
    </div>
    <div class="project-details">
      <div class="project-details-left">
        <img src="${project.image}" alt="${project.title}" />
      </div>

      <div class="project-details-right">
        <h2>${project.title}</h2>
        <p class="project-description">${project.description}</p>
  
        <div class="progress-bar-info">
          <div class="progress-info-bar">
            <div class="project-financials">
            <span class="collected"><strong>${t.collected}:</strong> ${project.collected} ден.</span>
            <span class="remaining"><strong>${t.remaining}:</strong> ${project.getRemainingAmount()} ден.</span>
            <span class="goal"><strong>${t.goal}:</strong> ${project.goal} ден.</span>
        </div>

          </div>
          <progress value="${project.collected}" max="${project.goal}"></progress>
        </div>

        <div class="down-buttons">
          <button id="donateBtn" class="donate-btn">💚 ${t.donate}</button>
          <button class="btn info-btn">ℹ️ Повеќе Инфо</button>
        </div>

        <div id="donationFormContainer" class="hidden">
        ${renderDonationForm(t)}
        </div>
      </div>
    </div>
  `;
}

