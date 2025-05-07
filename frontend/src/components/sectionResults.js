export const renderResultsSection = () => {
    const resultsStats = [
        { value: '99%', description: 'Успешност при интервенирање' },
        { value: '32M', description: 'Луѓе информирани преку кампањи' },
        { value: '125+', description: 'Волонтери низ државата' },
        { value: '240%', description: 'Пораст на активности' }
    ];

    return `
        <section class="results">
            <h2>Our results in numbers</h2>
            <div class="stats">
                ${resultsStats.map(stat => `
                    <div class="stat">
                        <h3>${stat.value}</h3>
                        <p>${stat.description}</p>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
};
