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
                        <h3>${stat.value}</h3>
                        <p>${lang === 'mk' ? stat.descriptionMk : stat.descriptionAlb}</p>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
};
