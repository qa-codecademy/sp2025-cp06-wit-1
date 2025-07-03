import languageService from "../services/language-service.js";
import { fetchNewsData } from "../services/new-service.js"; 

export default async function NewsDetailView(params) {
  const lang = languageService.getLanguage(); 
  const t = languageService.getAllTranslations().newsfeed;

  const newsData = await fetchNewsData(lang);
  const index = parseInt(params.id, 10);
  const newsItem = newsData[index];

  // Filter out current item and select top 3 others
  const relatedNews = newsData
    .filter((_, i) => i !== index)
    .slice(0, 3);

  const relatedHtml = `
    <aside class="related-news">
      <h2>${t.relatedNews}</h2>
      <ul>
        ${relatedNews.map(item => `
          <li>
            <a href="#/news/${item.id}" class="related-link">
              <img src="https://picsum.photos/200/120?random=${item.id}" alt="${item.title}" />
              <div>
                <h3>${item.title}</h3>
                <p class="related-date">${item.date || ""}</p>
              </div>
            </a>
          </li>
        `).join('')}
      </ul>
    </aside>
  `;

  const html = `
  <section class="news-article-with-sidebar">
    <article>
      <header class="article-header">
        <h1 class="article-title">${newsItem.title}</h1>
        <p class="article-meta">
          <time datetime="${newsItem.date || ''}">${newsItem.date || ''}</time>
        </p>
      </header>

      <figure class="article-image-container">
        <img src="https://picsum.photos/900/500?random=${newsItem.id}" alt="${newsItem.title}" class="article-image" />
        <figcaption class="image-caption">${newsItem.imageCaption || ''}</figcaption>
      </figure>

      <section class="article-content">
        <p>${newsItem.summary}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
        <p>Praesent consequat urna sit amet sapien faucibus, at egestas leo congue. Donec non lectus sem. Integer vel orci eu leo dictum sagittis.</p>
        <p>Nulla facilisi. Fusce suscipit, arcu ut dignissim scelerisque, justo erat convallis elit, nec bibendum lacus dolor sed odio.</p>
      </section>

      <nav class="article-footer">
        <a href="#/news" class="back-link">${t.backToNews || "Назад кон сите новости"}</a>
      </nav>
    </article>

    ${relatedHtml}
  </section>
  `;

  return { html, setup: () => {} };
}
