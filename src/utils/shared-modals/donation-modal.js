import { renderDonationForm } from "../../components/project-detail-view-components/donation-form.js";
import { validateDonationInputs } from "../../utils/donation-validation-helper.js";
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

  const requiredFields = ["cardHolder", "cardNumber", "donationAmount"];

  // ✏️ Live input handling and formatting
  const cardHolderInput = form.querySelector("#cardHolder");
  const cardHolderError = form.querySelector("#cardHolderError");

  cardHolderInput?.addEventListener("input", () => {
    cardHolderInput.value = cardHolderInput.value.replace(/[^a-zA-Zа-шА-ШёЁ\s]/g, "");
    if (cardHolderInput.value.trim().length < 3) {
      cardHolderInput.classList.add("input-error");
      cardHolderError.textContent = t.cardHolderError || "Името треба да има најмалку 3 букви.";
    } else {
      cardHolderInput.classList.remove("input-error");
      cardHolderError.textContent = "";
    }
  });

  const cardNumberInput = form.querySelector("#cardNumber");
  const cardNumberError = form.querySelector("#cardNumberError");

  cardNumberInput?.addEventListener("input", () => {
    let value = cardNumberInput.value.replace(/\D/g, "");
    if (value.length > 16) value = value.slice(0, 16);
    cardNumberInput.value = value.match(/.{1,4}/g)?.join(" ") || "";

    if (value.length !== 16) {
      cardNumberInput.classList.add("input-error");
      cardNumberError.textContent = t.cardNumberError || "Невалиден број на картичка.";
    } else {
      cardNumberInput.classList.remove("input-error");
      cardNumberError.textContent = "";
    }
  });

  const donationAmountInput = form.querySelector("#donationAmount");
  const donationAmountError = form.querySelector("#donationAmountError");

  donationAmountInput?.addEventListener("input", () => {
    const val = parseFloat(donationAmountInput.value);
    if (isNaN(val) || val <= 0) {
      donationAmountInput.classList.add("input-error");
      donationAmountError.textContent = t.invalidAmount || "Невалиден износ.";
    } else {
      donationAmountInput.classList.remove("input-error");
      donationAmountError.textContent = "";
    }
  });

  // ✅ Submission handler
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const isValid = validateDonationInputs({
      form,
      requiredFields,
      onLiveClear: true,
      customValidators: {
        cardHolder: val => val.trim().length >= 3,
        cardNumber: val => /^\d{16}$/.test(val.replace(/\s+/g, "")),
        donationAmount: val => parseFloat(val) > 0,
      },
      errorMessages: {
        required: t.requiredFieldError,
        cardHolder: t.cardHolderError,
        cardNumber: t.cardNumberError,
        donationAmount: t.invalidAmount,
      },
    });

    if (!isValid) return;

    const data = {
      cardHolder: form.cardHolder.value.trim(),
      cardNumber: form.cardNumber.value.replace(/\s+/g, ""),
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
