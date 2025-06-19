// shareModal.js

export function renderShareModal() {
  return `
    <div id="shareModal" class="modal-overlay hidden">
      <div class="modal-content">
        <h3>📤 Сподели го овој проект</h3>
        <div class="share-options">
      <div class="share-options">
      <a href="#" id="viberShare">Viber</a>
      <a href="#" id="whatsappShare">WhatsApp</a>
      <a href="#" id="smsShare">SMS</a>
      <a href="#" id="fbStoryShare">Facebook</a>
      <a href="#" id="instaStoryShare">Instagram Story</a>
      <a href="#" id="messengerShare">Messenger</a>
      <a href="#" id="instaMsgShare">Instagram Message</a>
      <a href="#" id="copyLinkShare">🔗 Копирај ја врската</a>
    </div>

        </div>
        <button id="closeShareModal">✖ Затвори</button>
      </div>
    </div>
  `;
}

export function setupShareModal() {
  const shareBtn = document.querySelector(".share-btn");
  const shareModal = document.getElementById("shareModal");
  const closeShareModal = document.getElementById("closeShareModal");
  const currentUrl = window.location.href;

  // Update share links
  document.getElementById("viberShare").href = `viber://forward?text=${encodeURIComponent(currentUrl)}`;
  document.getElementById("whatsappShare").href = `https://wa.me/?text=${encodeURIComponent(currentUrl)}`;
  document.getElementById("smsShare").href = `sms:?body=${encodeURIComponent(currentUrl)}`;
  document.getElementById("fbStoryShare").href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  document.getElementById("messengerShare").href = `fb-messenger://share?link=${encodeURIComponent(currentUrl)}`;
  // Instagram нема директен API за share → прикажи само инструкции

  shareBtn?.addEventListener("click", () => {
    shareModal?.classList.remove("hidden");
  });

  closeShareModal?.addEventListener("click", () => {
    shareModal?.classList.add("hidden");
  });

  window.addEventListener("click", (e) => {
    if (e.target === shareModal) {
      shareModal?.classList.add("hidden");
    }
  });
}
