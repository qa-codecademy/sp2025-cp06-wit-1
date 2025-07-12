import languageService from "../../services/language-service.js";
import Modal from "../../utils/shared-modals/modal.js";

const Subscribe = () => {
  const subscribe = languageService.getAllTranslations().home.subscribe;

  return `
    <div class="subscription-card">
        <div class="subscription-text">
            <h2>${subscribe.title}</h2>
            <p>${subscribe.description}</p>
        </div>
        <div class="subscription-form" id="subscription-form">
            <form id="subscribe">
                <input type="email" id="email" placeholder="${subscribe.placeholder}" required>
                <button type="submit" id="subscribeBtn">${subscribe.button}</button>
            </form>
        </div>
    </div>
  `;
};
const initSubscribeForm = () => {
  const form = document.getElementById("subscribe");
  if (!form) return;

  const subscribe = languageService.getAllTranslations().home.subscribe;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    console.log(email)
    Modal({
      type: "success",
      title: subscribe.modalMessage,
      message: email,
      buttons: [
        {
          text: "OK",
          class: "cancel-btn",
          onClick: () => {
            console.log("User acknowledged.");
          },
        },
      ],
      onClose: () => form.reset()
    });
  });
};

export { Subscribe, initSubscribeForm };