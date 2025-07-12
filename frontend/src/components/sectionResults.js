import languageService from "../services/language-service.js";

export const renderResultsSection = () => {
    const { home } = languageService.getAllTranslations();
    const lang = languageService.getLanguage();

    const resultsStats = [
        {
            value: '99%',
            descriptionMk: 'Успешност при интервенирање',
            descriptionAlb: 'Sukses në ndërhyrje'
        },
        {
            value: '32M',
            descriptionMk: 'Луѓе информирани преку кампањи',
            descriptionAlb: 'Njerëz të informuar përmes fushatave'
        },
        {
            value: '125+',
            descriptionMk: 'Волонтери низ државата',
            descriptionAlb: 'Vullnetarë në mbarë vendin'
        },
        {
            value: '240%',
            descriptionMk: 'Пораст на активности',
            descriptionAlb: 'Rritje e aktiviteteve'
        }
    ];

    return `
        <section class="results">
            <h2>${home.results.resultsTitle}</h2>
            <div class="stats">
                ${resultsStats.map(stat => `
                    <div class="stat">
                        <h3 class="stat-value" data-target="${stat.value}">0</h3>
                        <p>${lang === 'mk' ? stat.descriptionMk : stat.descriptionAlb}</p>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
    
};

export const initResultsSection = () => {
  const animateValue = (el, target) => {
    const num = parseFloat(target);
    const suffix = target.replace(num, "");
    let frame = 0;
    const duration = 1600;
    const steps = Math.round(duration / 16);
    const increment = num / steps;

    const counter = setInterval(() => {
      frame++;
      const current = Math.round(increment * frame);
      if (frame >= steps) {
        clearInterval(counter);
        el.textContent = target;
      } else {
        el.textContent = `${current}${suffix}`;
      }
    }, 16);
  };

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains("animated")) {
          const stats = entry.target.querySelectorAll(".stat-value");
          stats.forEach(el => {
            const target = el.getAttribute("data-target");
            animateValue(el, target);
          });
          entry.target.classList.add("animated");
        }
      });
    },
    { threshold: 0.4 }
  );

  const resultsSection = document.querySelector(".results");
  if (resultsSection) observer.observe(resultsSection);
};