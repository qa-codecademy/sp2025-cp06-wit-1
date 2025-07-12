import { NewsComponent } from "../components/news/news-component.js";
import languageService from "../services/language-service.js"
import { renderAdminPanel } from "./news-admin-view.js";
import renderNewsDetail from "./news-detail.js";
import { fetchNewsData } from "../services/new-service.js"; // <- use the function we built

export default async function NewsView(params) {
  const lang = languageService.getLanguage(); // 'mk' or 'alb'
  const t = languageService.getAllTranslations().newsfeed;

  // Fetch the localized news data
  const newsData = await fetchNewsData(lang);

  const container = document.createElement("div");
  container.id = "newsPageContent";

  const { id, admin } = params;

  if (admin === "true") {
    container.innerHTML = renderAdminPanel(t);
  } else if (id !== undefined) {
    container.innerHTML = renderNewsDetail({ id }, t);
  } else {
    container.innerHTML = NewsComponent(t, newsData);
  }

  return {
    html: container.outerHTML,
    setup: () => {}
  };
}
