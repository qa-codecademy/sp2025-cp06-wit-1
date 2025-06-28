export function NewsComponent(t, newsData) {
  const title = t.newsfeed?.newsfeedtitle || "Новости";
  const noNewsText = t.newsfeed?.newsNotFound || "Нема достапни новости.";
  const readMoreText = t.home?.difference?.readMore || "Прочитај повеќе";

  if (!Array.isArray(newsData) || newsData.length === 0) {
    return `
      <section class="news-section">
        <h2>${title}</h2>
        <p style="text-align:center; color: #888;">${noNewsText}</p>
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
              <p><span> <img src="https://media.istockphoto.com/id/1371940128/photo/multiracial-friends-taking-big-group-selfie-shot-smiling-at-camera-laughing-young-people.jpg?s=612x612&w=0&k=20&c=FPs-C92zbN6RkHnPG4Fl9zyP2-HZWGy9Prdt46Yn-IY=">
                ${cleanSummary}..<a href="#/news/${index}" class="read-more">${readMoreText}</a>
              </p>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  return `
    <section class="news-section">
      <h2>${title}</h2>
      <div class="news-list">
        ${newsItemsHTML}
      </div>
    </section>
  `;
}
