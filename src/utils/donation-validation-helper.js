export function validateDonationInputs({
  form,
  requiredFields,
  customValidators = {},
  errorMessages = {},
  onLiveClear = true
}) {
  let isValid = true;

  requiredFields.forEach(id => {
    const input = form.querySelector(`#${id}`);
    const error = form.querySelector(`#${id}Error`);

    if (!input || !error) return;

    const value = input.value.trim();

    if (onLiveClear && !input.hasAttribute("data-live-listener")) {
      input.addEventListener("input", () => {
        input.classList.remove("input-error");
        error.textContent = "";
      });
      input.setAttribute("data-live-listener", "true");
    }

    if (!value) {
      input.classList.add("input-error");
      error.textContent = errorMessages.required || "Полето е задолжително.";
      isValid = false;
      return;
    }

    if (customValidators[id] && !customValidators[id](value)) {
      input.classList.add("input-error");
      error.textContent = errorMessages[id] || "Невалиден внес.";
      isValid = false;
      return;
    }

    input.classList.remove("input-error");
    error.textContent = "";
  });

  return isValid;
}
