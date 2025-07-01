export function NewsComponent(t, newsData) {

  if (!Array.isArray(newsData) || newsData.length === 0) {
    return `
      <section class="news-section">
        <h2>${t.newsfeedtitle}</h2>
        <p style="text-align:center; color: #888;">${t.newsNotFound}</p>
      </section>
    `;
  }

  const newsItemsHTML = newsData
    .map((item, index) => {
      const cleanSummary = item.summary?.split("\n")[0] || "";
      return `
        <article class="news-item">
          <div class="news-item-inner">
            <div class="news-content">
              <h3>${item.title}</h3>
              <p><span> <img src="https://picsum.photos/800/400?random=${item.id}">
                ${cleanSummary}..<a href="#/news/${index}" class="read-more">${t.readMore}</a>
              </p>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  return `
    <section class="news-section">
      <h2>${t.newsfeedtitle}</h2>
      <div class="news-list">
        ${newsItemsHTML}
      </div>
    </section>
  `;
}
