export function validateFormInputs({
    requiredFields = [],
    customValidators = {},
    errorMessages = {},
    onLiveClear = true,  // new option to attach live clear handlers
}) {
    let isValid = true;

    requiredFields.forEach(id => {
        const input = document.getElementById(id);
        const error = document.getElementById(id.replace("Input", "Error"));
        const value = input?.value.trim();

        if (!input || !error) return;

        // Attach live clearing event once if requested
        if (onLiveClear && !input.hasAttribute('data-live-listener')) {
            input.addEventListener("input", () => {
                input.classList.remove("input-error");
                error.textContent = "";
            });
            input.setAttribute('data-live-listener', 'true'); // flag to avoid duplicates
        }

        // Basic required field check
        if (!value || (id === "categoryInput" && input.selectedIndex === 0)) {
            input.classList.add("input-error");
            error.textContent = errorMessages.required || "This field is required.";
            isValid = false;
            return;
        }

        // Custom validator if any
        if (customValidators[id] && !customValidators[id](value)) {
            input.classList.add("input-error");
            error.textContent = errorMessages[id] || "Invalid input.";
            isValid = false;
            return;
        }

        // Clear errors if valid
        input.classList.remove("input-error");
        error.textContent = "";
    });

    return isValid;
}
