import { renderDonationForm } from "../../components/project-detail-view-components/donation-form.js";
import { validateFormInputs } from "../validation-helper.js";
import languageService from "../../services/language-service.js";

/**
 * Прикажува модал за донација.
 * @param {Object} t - Преводи (translations)
 * @param {Function} onSubmit - Callback кога ќе се потврди донацијата
 */
export function showDonationModal(t, onSubmit) {
  if (document.getElementById("donationModalOverlay")) return;

  const modalWrapper = document.createElement("div");
  modalWrapper.innerHTML = renderDonationForm(t);

  const overlay = modalWrapper.querySelector(".modal-overlay");
  if (overlay) overlay.id = "donationModalOverlay";

  document.body.appendChild(modalWrapper);
  document.body.classList.add("modal-open");

  const form = modalWrapper.querySelector("#donationForm");

  // Cancel button
  const cancelBtn = document.createElement("button");
  cancelBtn.id = "cancelDonation";
  cancelBtn.type = "button";
  cancelBtn.textContent = t.cancel || "Откажи";
  cancelBtn.className = "donation-cancel-btn";
  form.appendChild(cancelBtn);

  const cleanup = () => {
    modalWrapper.remove();
    document.body.classList.remove("modal-open");
  };

  cancelBtn.addEventListener("click", cleanup);

  overlay?.addEventListener("click", (e) => {
    if (e.target === overlay) cleanup();
  });

  // ✅ Real-time validation cleanup
  const requiredFields = ["cardHolder", "cardNumber", "donationAmount"];

  requiredFields.forEach((id) => {
    const input = form.querySelector(`#${id}`);
    const error = form.querySelector(`#${id}Error`);

    if (input && error) {
      input.addEventListener("input", () => {
        const value = input.value.trim();

        // Empty
        if (!value) {
          input.classList.add("input-error");
          error.textContent = t.requiredFieldError;
          return;
        }

        // Card validation
        if (id === "cardNumber" && !/^\d{12,19}$/.test(value.replace(/\s+/g, ""))) {
          input.classList.add("input-error");
          error.textContent = t.cardNumberError;
          return;
        }

        if (id === "donationAmount" && parseFloat(value) <= 0) {
          input.classList.add("input-error");
          error.textContent = t.invalidAmount ;
          return;
        }

        // ✅ Valid input
        input.classList.remove("input-error");
        error.textContent = "";
      });
    }
  });

  // ✅ Submission logic
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const isValid = validateFormInputs({
      requiredFields,
      customValidators: {
        cardNumber: (val) => /^\d{12,19}$/.test(val.replace(/\s+/g, "")),
        donationAmount: (val) => parseFloat(val) > 0,
      },
      errorMessages: {
        required: t.requiredFieldError || "Полето е задолжително.",
        cardNumber: t.cardNumberError || "Невалиден број на картичка.",
        donationAmount: t.invalidAmount || "Невалиден износ.",
      },
    });

    if (!isValid) return;

    const data = {
      cardHolder: form.cardHolder.value.trim(),
      cardNumber: form.cardNumber.value.trim(),
      amount: parseFloat(form.donationAmount.value),
    };

    if (typeof onSubmit === "function") {
      onSubmit(data, cleanup);
    } else {
      alert(`✅ Донацијата од ${data.amount} денари е потврдена.`);
      cleanup();
    }
  });
}
