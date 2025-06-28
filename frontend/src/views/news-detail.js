import languageService from "../services/language-service.js";

export default function NewsDetailView(params) {
  const t = languageService.getAllTranslations().newsfeed;
  let newsData = [];

  try {
    newsData = JSON.parse(localStorage.getItem("newsData") || "[]");
    if (!Array.isArray(newsData)) throw new Error();
  } catch (err) {
    console.error("Invalid JSON in localStorage.newsData", err);
    newsData = [];
  }

  const index = parseInt(params.id, 10);
  const newsItem = newsData[index];

  let html;
  if (!newsItem) {
    html = `
      <section class="news-section">
        <h2>${t.newsfeedtitle}</h2>
        <p style="text-align:center; color: #888;">${t.newsNotFound}</p>
      </section>
    `;
  } else {
    html = `
      <section class="news-section">
        <h2>${newsItem.title}</h2>
        <p>${newsItem.summary}</p>
        <a href="#/news" class="back-link">${t.backToNews}</a>
      </section>
    `;
  }

  return { html, setup: () => {} };
}
