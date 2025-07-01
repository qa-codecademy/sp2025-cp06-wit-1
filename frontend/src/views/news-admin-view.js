import { saveNewsItem, deleteNewsItem, getAllNewsItems } from "../utils/news-admin.js";

export function renderAdminPanel(t) {
  const newsData = getAllNewsItems();
  const listHTML = newsData
    .map((item, index) => `
      <li>
        <strong>${item.title}</strong>
        <button data-index="${index}" class="delete-btn">Избриши</button>
      </li>
    `)
    .join("");

  return `
    <section class="admin-panel">
      <h2>Admin - Новости</h2>
      <form id="newsForm">
        <input type="text" id="title" placeholder="Наслов" required />
        <textarea id="summary" placeholder="Опис" required></textarea>
        <button type="submit">Зачувај</button>
      </form>
      <ul id="newsList">${listHTML}</ul>
    </section>
  `;
}

// Оваа функција ја викаш откако го прикажеш HTML-от во DOM
export function setupAdminPanelHandlers() {
  const form = document.getElementById("newsForm");
  const titleInput = document.getElementById("title");
  const summaryInput = document.getElementById("summary");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = titleInput.value.trim();
    const summary = summaryInput.value.trim();
    if (!title || !summary) return;

    const newItem = { title, summary };
    saveNewsItem(newItem);
    location.reload();
  });

  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = parseInt(btn.getAttribute("data-index"), 10);
      deleteNewsItem(index);
      location.reload();
    });
  });
}
