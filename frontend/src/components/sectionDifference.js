import languageService from "../services/language-service.js";

export const renderDifferenceSection = () => {
    const { home } = languageService.getAllTranslations();

    const differenceItems = [
        { 
            imageUrl: './src/assets/exampleimageforsectionDifference.jpg', 
            descriptionMk: 'Оброци за семејства во ризик',
            descriptionAlb: 'Ushqime për familjet në nevojë'
        },
        { 
            imageUrl: './src/assets/exampleimageforsectionDifference2.jpg', 
            descriptionMk: 'Поддршка за локални заедници',
            descriptionAlb: 'Mbështetje për komunitetet lokale'
        },
        { 
            imageUrl: './src/assets/exampleimageforsectionDifference3.png', 
            descriptionMk: 'Здрава исхрана за децата',
            descriptionAlb: 'Ushqim i shëndetshëm për fëmijët'
        },
        { 
            imageUrl: './src/assets/exampleimageforsectionDifference4.jpg', 
            descriptionMk: 'Здрава исхрана за децата',
            descriptionAlb: 'Ushqim i shëndetshëm për fëmijët'
        }
    ];

    // Get current language
    const lang = languageService.getLanguage();

    return `
        <section class="difference">
            <h2>${home.difference.title}</h2>
            <div class="difference-items">
                ${differenceItems.map(item => `
                    <div class="difference-item">
                        <img src="${item.imageUrl}" alt="${lang === 'mk' ? item.descriptionMk : item.descriptionAlb}" />
                        <p>${lang === 'mk' ? item.descriptionMk : item.descriptionAlb}</p>
                    </div>
                `).join('')}
            </div>
        </section>
        <div class="read-more-wrapper">
            <a href="#projects" class="read-more-btn">${home.difference.readMore}...</a>
        </div>
    `;
};
