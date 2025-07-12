const Modal = ({ type, title, message, buttons = [], onClose }) => {
  const icons = {
    success: `
    <svg viewBox="0 0 24 24" class="icon-check" aria-hidden="true">
      <circle class="check-ring" cx="12" cy="12" r="10" />
      <path class="check-path" d="M8 12l2.5 2.5L16 9" />
    </svg>
  `,
    warning: `
    <svg viewBox="0 0 24 24" class="icon-warning" aria-hidden="true">
      <circle class="warning-ring" cx="12" cy="12" r="10" />
      <line class="warning-line" x1="12" y1="7" x2="12" y2="12" />
      <circle class="warning-dot" cx="12" cy="17" r="0.6" />
    </svg>
  `,
    failure: `
    <svg viewBox="0 0 24 24" class="icon-failure" aria-hidden="true">
      <circle class="failure-ring" cx="12" cy="12" r="10" />
      <line class="failure-line1" x1="8" y1="8" x2="16" y2="16" />
      <line class="failure-line2" x1="8" y1="16" x2="16" y2="8" />
    </svg>
  `,
    info: `
    <svg viewBox="0 0 24 24" class="icon-info" aria-hidden="true">
      <circle class="info-ring" cx="12" cy="12" r="10" />
      <circle class="info-dot" cx="12" cy="6.5" r="0.7" />
      <line class="info-line" x1="12" y1="11" x2="12" y2="16" />
    </svg>
  `,
  };

  const colors = {
    success: "#00c853",
    warning: "#f9a825",
    failure: "#d32f2f",
    info: "#1a73e8",
  };

  const buttonHtml = buttons
    .map(
      (btn, i) =>
        `<button class="modal-button ${
          btn.class || ""
        }" data-btn-index="${i}">${btn.text}</button>`
    )
    .join("");

  const modalHtml = `
    <div class="modal-overlay">
      <div class="modal ${type}">
        <div class="modal-header">
          <button class="modal-close" aria-label="Close modal">
            <svg viewBox="0 0 24 24" class="icon-x close-icon" aria-hidden="true">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </svg>
          </button>
        </div>
        <div class="modal-body">
          <div class="modal-icon">${icons[type]}</div>
          <h3>${title}</h3>
          <p>${message}</p>
          <div class="modal-buttons">${buttonHtml}</div>
        </div>
      </div>
    </div>

    <style>
      .modal.fade-out {
        animation: fadeOut 0.3s forwards ease-out;
      }

      @keyframes fadeOut {
        to {
          opacity: 0;
          transform: scale(0.9);
        }
      }

      .modal-buttons {
        margin-top: 1.5rem;
        display: flex;
        justify-content: center;
        gap: 1rem;
        flex-wrap: wrap;
      }

      .modal-button {
        padding: 0.5rem 1.2rem;
        border: none;
        border-radius: 6px;
        font-size: 1rem;
        cursor: pointer;
        background-color: #eee;
        transition: background 0.2s;
      }

      .modal-button:hover {
        background-color: ${colors[type]};
        color: white;
      }

      .modal-overlay {
        position: fixed;
        top: 0; left: 0;
        width: 100vw; height: 100vh;
        background: rgba(0,0,0,0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        animation: fadeIn 0.3s ease-out;
      }

      @keyframes fadeIn {
        from { opacity: 0 }
        to { opacity: 1 }
      }

      .modal {
        max-width: 550px;
        width: 100%;
        background: white;
        border-radius: 10px;
        padding: 1.5rem 2rem;
        box-shadow: 0 8px 24px rgba(0,0,0,0.15);
        font-family: "Poppins", sans-serif;
        color: #333;
        position: relative;
        overflow: hidden;
        animation: scaleUp 0.3s ease;
      }
      .modal h3, p {
      margin:0;
      }

      .modal.success {
        background: radial-gradient(ellipse at right top, #d9fce2 0%, #ffffff 47%);
        color: #004d22;
      }

      .modal.warning {
        background: radial-gradient(ellipse at right top, #fff8e1 0%, #ffffff 47%);
        color: #5d4300;
      }

      .modal.failure {
        background: radial-gradient(ellipse at right top, #ffebee 0%, #ffffff 47%);
        color: #7f0000;
      }

      .modal.info {
        background: radial-gradient(ellipse at right top, #e3f2fd 0%, #ffffff 47%);
        color: #0d47a1;
      }

      @keyframes scaleUp {
        from { transform: scale(0.8); opacity: 0 }
        to { transform: scale(1); opacity: 1 }
      }

      .modal-header {
        display: flex;
        justify-content: flex-end;
      }

      .modal-close {
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        width: 28px;
        height: 28px;
      }

      .modal-close .close-icon line {
        stroke: ${colors[type]};
        stroke-width: 3;
        stroke-linecap: round;
        stroke-dasharray: 34;
        stroke-dashoffset: 34;
        animation: dashClose 0.4s forwards ease-out;
      }

      .modal-close .close-icon line:nth-child(2) {
        animation-delay: 0.2s;
      }

      @keyframes dashClose {
        to {
          stroke-dashoffset: 0;
        }
      }

      .modal-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        text-align: center;
      }

      .modal-icon {
        width: 60px;
        height: 60px;
      }

      .modal-icon svg {
        width: 100%;
        height: 100%;
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        animation: dashBase 0.6s ease-out forwards;
      }

      @keyframes dashBase {
        to {
          stroke-dashoffset: 0;
        }
      }

      /* All icons stroke colors use dynamic color */
    .icon-check .check-ring,
    .icon-check .check-path {
    stroke: ${colors[type]};
    stroke-width: 3;
    stroke-linecap: round;
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
    animation: drawSuccess 0.5s ease-out forwards;
    }

      @keyframes drawSuccess {
        to {
          stroke-dashoffset: 0;
        }
      }

     .icon-warning circle,
.icon-warning line {
  stroke: ${colors[type]};
  stroke-width: 3;
  stroke-linecap: round;
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  animation: drawWarning 0.5s ease-out forwards;
  animation-delay: 0s;
}

@keyframes drawWarning {
  to {
    stroke-dashoffset: 0;
  }
}

.icon-failure circle,
.icon-failure line {
  stroke: ${colors[type]};
  stroke-width: 3;
  stroke-linecap: round;
  stroke-dasharray: 100; 
  stroke-dashoffset: 100;
  animation: drawFailure 0.5s ease-out forwards;
  animation-delay: 0s;
}

@keyframes drawFailure {
  to {
    stroke-dashoffset: 0;
  }
}

      .icon-info .info-ring,
      .icon-info .info-line {
        stroke: ${colors[type]};
        stroke-width: 3;
        stroke-linecap: round;
        stroke-dasharray: 100;
        stroke-dashoffset: 100;
        animation: dashInfo 0.6s ease-out forwards;
      }

      .icon-info .info-dot {
        stroke: ${colors[type]};
        stroke-width: 3;
        stroke-linecap: round;
      }

      @keyframes dashInfo {
        to {
          stroke-dashoffset: 0;
        }
      }
    </style>
  `;

  const existingOverlay = document.querySelector(".modal-overlay");
  if (existingOverlay) {
    existingOverlay.remove();
  }

  const wrapper = document.createElement("div");
  wrapper.innerHTML = modalHtml;
  document.body.appendChild(wrapper);

  const overlay = wrapper.querySelector(".modal-overlay");
  const closeBtn = wrapper.querySelector(".modal-close");
  const btnEls = wrapper.querySelectorAll(".modal-button");
  const modalBox = wrapper.querySelector(".modal");

  const closeModal = () => {
    modalBox.addEventListener(
      "animationend",
      () => {
        wrapper.remove();
        if (onClose) onClose();
      },
      { once: true }
    );
    modalBox.classList.add("fade-out");
  };

  closeBtn?.addEventListener("click", closeModal);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  btnEls.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const result = buttons[index]?.onClick?.(closeModal);
      if (result !== false) closeModal();
    });
  });
};

export default Modal;
