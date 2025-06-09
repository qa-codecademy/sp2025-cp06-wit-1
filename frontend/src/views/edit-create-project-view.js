import Project from "../models/project-model.js";
import { getProjectTypes } from "../services/project-service.js";
import languageService from "../services/language-service.js";
import projectService from "../services/project-service.js";

const EditCreateProjectView = async (params) => {
    let project;
    const lang = languageService.getLanguage();
    const editCreate = languageService.getAllTranslations().editCreate;
    if (params && params.id) {
        project = await projectService.getById(params.id, lang);
    } else {
        project = new Project(); // New project
    }

    const types = await getProjectTypes(lang);
    const typesOptions = types.map(t =>
        `<option value="${t.id}" ${t.id === project?.typeId ? "selected" : ""}>${t.value}</option>`
    ).join("");
    
    // Inject select placeholder only if creating a new project
    const selectPlaceholder = !params?.id
        ? `<option disabled selected>${editCreate.types}</option>`
        : "";

    setTimeout(() => bindFormEvents(params), 0);

    return `
    <section class="editCreate" id="editCreate">
        <form id="projectForm" class="projectForm" data-project-id="${params?.id || ''}">
            <div id="inputArea" class="inputArea">
                <label for="titleInput">${editCreate.title}</label>
                <input type="text" id="titleInput" name="titleInput" value="${project?.title ?? ''}">
                <span id="titleError" class="error"></span>
                
                <label for="categoryInput">${editCreate.category}</label>
                <select id="categoryInput" class="categoryInput" name="categoryInput">
                    ${selectPlaceholder}
                    ${typesOptions}
                </select>
                <span id="categoryError" class="error"></span>
                
                <div class="preview" id="preview"></div>
                <label for="imageInput">${editCreate.image}</label>
                <input type="file" id="imageInput"  name="imageInput" accept="image/*">
                <span id="imageError" class="error"></span>
                
                <label for="dateInput">${editCreate.date}</label>
                <input type="date" id="dateInput" name="dateInput" value="${project?.date ?? ''}">
                <span id="dateError" class="error"></span>
                
                <label for="descriptionInput">${editCreate.description}</label>
                <textarea id="descriptionInput" class="descriptionInput" name="descriptionInput">${project?.description ?? ''}</textarea>
                <span id="descriptionError" class="error"></span>
                
                <label for="donationInput">${editCreate.funds}</label>
                <input type="number" id="donationInput" name="donationInput" value="${project?.donation ?? ''}">
                <span id="donationError" class="error"></span>
                
                <label for="transactionInput">${editCreate.transaction}</label>
                <input type="text" id="transactionInput" name="transactionInput" value="${project?.transaction ?? ''}">
                <span id="transactionError" class="error"></span>
            </div>

            <div id="buttonArea" class="buttonArea">
                <button type="submit" id="submitBtn" class="${params?.id ? 'editBtn' : 'createBtn'}">
                    ${params?.id ? editCreate.edit : editCreate.create}
                </button>
                <button type="button" id="cancelBtn" class="cancelBtn" onclick="window.location.hash='#/projects'">
                    ${editCreate.cancel}
                </button> 
            </div>
        </form>
    </section>
    `;
};

function bindFormEvents(params) {
    const form = document.getElementById("projectForm");
    const editCreate = languageService.getAllTranslations().editCreate;

    if (!form) return;

    const requiredFields = [
        "titleInput",
        "categoryInput",
        "imageInput",
        "dateInput",
        "descriptionInput",
        "donationInput",
        "transactionInput"
    ];

    const isValidTransaction = (value) => /^\d{15}$/.test(value);

    // Real-time input cleanup
    requiredFields.forEach(id => {
        const input = document.getElementById(id);
        const error = document.getElementById(id.replace("Input", "Error"));

        if (input && error) {
            input.addEventListener("input", () => {
                const value = input.value.trim();

                if (id === "transactionInput" && !isValidTransaction(value)) {
                    input.classList.add("input-error");
                    error.textContent = `${editCreate.transactionError}!`;
                    return;
                }

                if (value) {
                    input.classList.remove("input-error");
                    error.textContent = "";
                }
            });
        }
    });

    // Image preview
    const fileInput = document.getElementById("imageInput");
    let previousImageUrl = null;

    if (fileInput) {
        fileInput.addEventListener("change", () => {
            const files = fileInput.files;
            if (files.length > 0) {
                if (previousImageUrl) {
                    URL.revokeObjectURL(previousImageUrl);
                }
                previousImageUrl = URL.createObjectURL(files[0]);
                const imageElement = document.getElementById("preview");
                if (imageElement) {
                    imageElement.innerHTML = `<img src="${previousImageUrl}" alt="Preview" class="preview-img">`;
                }
            }
        });
    }

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        let isValid = true;

        requiredFields.forEach(id => {
            const input = document.getElementById(id);
            const error = document.getElementById(id.replace("Input", "Error"));
            const value = input?.value.trim();

            if (input && error) {
                if (id === "transactionInput" && !isValidTransaction(value)) {
                    input.classList.add("input-error");
                    error.textContent = `${editCreate.transactionError}!`;
                    isValid = false;
                    return;
                }

                if (!value || (id === "categoryInput" && input.selectedIndex === 0)) {
                    input.classList.add("input-error");
                    error.textContent = `${editCreate.requiredFieldError}!`;
                    isValid = false;
                } else {
                    input.classList.remove("input-error");
                    error.textContent = "";
                }
            }
        });

        if (!isValid) return;

        const submitBtn = form.querySelector("#submitBtn");
        submitBtn.disabled = true;

        const formData = new FormData(form);
        const imageFile = formData.get("imageInput");

        const project = {
            title: formData.get("titleInput"),
            typeId: formData.get("categoryInput"),
            image: imageFile && imageFile.name ? imageFile.name : "",
            date: formData.get("dateInput"),
            description: formData.get("descriptionInput"),
            donation: parseFloat(formData.get("donationInput")) || 0,
            transaction: formData.get("transactionInput"),
        };
        console.log(project)

        try {
            if (params?.id) {
                await projectService.update(params.id, project);
                alert(`${editCreate.updateAlert}!`);
            } else {
                await projectService.create(project);
                alert(`${editCreate.createAlert}!`);
            }
            window.location.hash = "#/projects";
        } catch (err) {
            console.error(`${editCreate.savingError}:`, err);
            alert(`${editCreate.troubleAlert}.`);
        } finally {
            submitBtn.disabled = false;
        }
    });
}

export default EditCreateProjectView;
