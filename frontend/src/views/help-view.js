import languageService from "../services/language-service.js";
import Modal from "../utils/modal.js";
import { validateFormInputs } from "../utils/validation-helper.js";

const HelpView = () => {
  const t = languageService.getAllTranslations().help;

  const html = `
    <main class="help-view">
      <section class="help-container" id="helpContainer">

        <!-- Mobile Toggle Buttons -->
        <div class="mobile-toggle-buttons">
          <button id="mobileGetHelpBtn">${t.overlay.getHelpBtn}</button>
          <button id="mobileOfferHelpBtn">${t.overlay.offerHelpBtn}</button>
        </div>

        <article class="form-container offer-help-container">
          <form aria-label="Offer Help Form" novalidate id="offerForm">
            <h1>${t.offerHelp.title}</h1>
            <span>${t.offerHelp.description}</span>

            <input type="text" id="offerNameInput" placeholder="${t.form.name}" />
            <span id="offerNameError" class="error"></span>

            <input type="text" id="offerPhoneInput" placeholder="${t.form.phone}" />
            <span id="offerPhoneError" class="error"></span>

            <input type="email" id="offerEmailInput" placeholder="${t.form.email}" />
            <span id="offerEmailError" class="error"></span>

            <textarea id="offerContributionInput" placeholder="${t.form.howYouCanHelp}"></textarea>
            <span id="offerContributionError" class="error"></span>

            <button type="submit">${t.offerHelp.button}</button>
          </form>
        </article>

        <article class="form-container get-help-container">
          <form aria-label="Get Help Form" novalidate id="getForm">
            <h1>${t.getHelp.title}</h1>
            <span>${t.getHelp.description}</span>

            <input type="text" id="getNameInput" placeholder="${t.form.name}" />
            <span id="getNameError" class="error"></span>

            <input type="text" id="getPhoneInput" placeholder="${t.form.phone}" />
            <span id="getPhoneError" class="error"></span>

            <input type="email" id="getEmailInput" placeholder="${t.form.email}" />
            <span id="getEmailError" class="error"></span>

            <textarea id="getNeedInput" placeholder="${t.form.whatYouNeed}"></textarea>
            <span id="getNeedError" class="error"></span>

            <button type="submit">${t.getHelp.button}</button>
          </form>
        </article>

        <aside class="overlay-container" aria-hidden="true">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h2>${t.overlay.backTitle}</h2>
              <p>${t.overlay.backText}</p>
              <button class="ghost" id="getHelpBtn">${t.overlay.getHelpBtn}</button>
            </div>
            <div class="overlay-panel overlay-right">
              <h2>${t.overlay.greetTitle}</h2>
              <p>${t.overlay.greetText}</p>
              <button class="ghost" id="offerHelpBtn">${t.overlay.offerHelpBtn}</button>
            </div>
          </div>
        </aside>
      </section>
    </main>
  `;

  const setup = () => {
    const helpContainer = document.getElementById("helpContainer");
    if (!helpContainer) return;

    const getHelpBtn = document.getElementById("getHelpBtn");
    const offerHelpBtn = document.getElementById("offerHelpBtn");

    const savedMode = localStorage.getItem("helpMode");
    helpContainer.classList.toggle("right-panel-active", savedMode === "offer");

    offerHelpBtn?.addEventListener("click", () => {
      helpContainer.classList.add("right-panel-active");
      localStorage.setItem("helpMode", "offer");
      updateMobileFormView();
    });

    getHelpBtn?.addEventListener("click", () => {
      helpContainer.classList.remove("right-panel-active");
      localStorage.setItem("helpMode", "get");
      updateMobileFormView();
    });

    // === Mobile toggle logic scoped to this view ===
    const mobileOfferHelpBtn = document.querySelector(".help-view #mobileOfferHelpBtn");
    const mobileGetHelpBtn = document.querySelector(".help-view #mobileGetHelpBtn");

    const updateMobileFormView = () => {
      const isMobile = window.innerWidth <= 768;
      const isOffer = helpContainer.classList.contains("right-panel-active");

      const getHelpForm = document.querySelector(".help-view .get-help-container");
      const offerHelpForm = document.querySelector(".help-view .offer-help-container");

      if (!getHelpForm || !offerHelpForm) return;

      if (isMobile) {
        if (isOffer) {
          offerHelpForm.classList.add("active");
          getHelpForm.classList.remove("active");
        } else {
          offerHelpForm.classList.remove("active");
          getHelpForm.classList.add("active");
        }
      } else {
        offerHelpForm.classList.remove("active");
        getHelpForm.classList.remove("active");
        offerHelpForm.style.display = "";
        getHelpForm.style.display = "";
      }
    };

    mobileOfferHelpBtn?.addEventListener("click", () => {
      helpContainer.classList.add("right-panel-active");
      localStorage.setItem("helpMode", "offer");
      updateMobileFormView();
    });

    mobileGetHelpBtn?.addEventListener("click", () => {
      helpContainer.classList.remove("right-panel-active");
      localStorage.setItem("helpMode", "get");
      updateMobileFormView();
    });

    window.addEventListener("resize", updateMobileFormView);
    updateMobileFormView();

    // === Form logic ===
    const tForm = t.form;

    const offerForm = document.getElementById("offerForm");
    const getForm = document.getElementById("getForm");

    offerForm?.addEventListener("submit", (e) => {
      e.preventDefault();
      const isValid = validateFormInputs({
        requiredFields: [
          "offerNameInput",
          "offerPhoneInput",
          "offerEmailInput",
          "offerContributionInput",
        ],
        customValidators: {
          offerEmailInput: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
          offerPhoneInput: (val) => /^\d{6,}$/.test(val),
        },
        errorMessages: {
          required: tForm.requiredError,
          offerEmailInput: tForm.invalidEmailError,
          offerPhoneInput: tForm.invalidPhoneError,
        },
      });

      if (isValid) {
        Modal({
          type: "success",
          title: tForm.successTitle,
          message: tForm.successMessage,
          buttons: [
            {
              text: "OK",
              class: "cancel-btn",
              onClick: () => console.log("Offer form acknowledged"),
            },
          ],
          onClose: () => offerForm.reset(),
        });
      }
    });

    getForm?.addEventListener("submit", (e) => {
      e.preventDefault();
      const isValid = validateFormInputs({
        requiredFields: [
          "getNameInput",
          "getPhoneInput",
          "getEmailInput",
          "getNeedInput",
        ],
        customValidators: {
          getEmailInput: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
          getPhoneInput: (val) => /^07\d{7}$/.test(val),
        },
        errorMessages: {
          required: tForm.requiredError,
          getEmailInput: tForm.invalidEmailError,
          getPhoneInput: tForm.invalidPhoneError,
        },
      });

      if (isValid) {
        Modal({
          type: "success",
          title: tForm.successTitle,
          message: tForm.successMessage,
          buttons: [
            {
              text: "OK",
              class: "cancel-btn",
              onClick: () => console.log("Get form acknowledged"),
            },
          ],
          onClose: () => getForm.reset(),
        });
      }
    });
  };

  return { html, setup };
};

export default HelpView;
