import languageService from "../services/language-service.js";
import { fetchNewsData } from "../services/new-service.js"; 

export default async function NewsDetailView(params) {
  const lang = languageService.getLanguage(); // 'mk' or 'alb'
  const t = languageService.getAllTranslations().newsfeed;

  const newsData = await fetchNewsData(lang);
  const index = parseInt(params.id, 10);
  const newsItem = newsData[index];

  let html;

  if (!newsItem) {
    html = `
      <section class="news-section">
        <h2>${t.newsfeedtitle || "Новости"}</h2>
        <p style="text-align:center; color: #888;">${t.newsNotFound || "Веста не е пронајдена."}</p>
      </section>
    `;
  } else {
    html = `
      <section class="news-section">
        <h2>${newsItem.title}</h2>
        <img src="https://picsum.photos/800/400?random=${newsItem.id}">
        <p>${newsItem.summary}</p>
        <a href="#/news" class="back-link">${t.backToNews || "Назад кон сите новости"}</a>
      </section>
    `;
  }

  return { html, setup: () => {} };
}
