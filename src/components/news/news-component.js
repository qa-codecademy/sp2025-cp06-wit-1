export function NewsComponent(t, newsData) {
  if (!Array.isArray(newsData) || newsData.length === 0) {
    return `
      <section class="news-section">
        <div class="aboutTitle">
          <h1>${t.newsfeedtitle}</h1>
        </div>
        <p style="text-align:center; color: #888;">${t.newsNotFound}</p>
      </section>
    `;
  }

  const newsItemsHTML = newsData
    .map((item, index) => {
  const cleanTitle = item.title
    ? item.title.slice(0, 50) + (item.title.length > 50 ? "..." : "")
    : "";

  const cleanSummary = item.summary
    ? item.summary.slice(0, 157) + (item.summary.length > 200 ? "..." : "")
    : "";

  return `
    <article class="news-item">
      <div class="news-item-inner">
        <div class="news-content">
          <img src="https://picsum.photos/320/160?random=${item.id}" alt="news image" />
          <h3>${cleanTitle}</h3>
          <p>
            ${cleanSummary} <a href="#/news/${index}" class="read-more">${t.readMore}</a>
          </p>
        </div>
      </div>
    </article>
  `;
})
    .join("");

  return `
    <section class="news-section">
      <div class="aboutTitle">
        <h1>${t.newsfeedtitle}</h1>
      </div>
      <div class="news-list">
        ${newsItemsHTML}
      </div>
    </section>
  `;
}
