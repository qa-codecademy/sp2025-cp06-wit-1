export const renderDifferenceSection = () => {
    const differenceItems = [
        { 
            imageUrl: './src/assets/exampleimageforsectionDifference.jpg', 
            description: 'Оброци за семејства во ризик' 
        },
        { 
            imageUrl: './src/assets/exampleimageforsectionDifference2.jpg', 
            description: 'Поддршка за локални заедници' 
        },
        { 
            imageUrl: './src/assets/exampleimageforsectionDifference3.png', 
            description: 'Здрава исхрана за децата' 
        },
        { 
            imageUrl: './src/assets/exampleimageforsectionDifference4.jpg', 
            description: 'Здрава исхрана за децата' 
        }
    ];

    return `
        <section class="difference">
            <h2>How We Make a Difference</h2>
            <div class="difference-items">
                ${differenceItems.map(item => `
                    <div class="difference-item">
                        <img src="${item.imageUrl}" alt="${item.description}" />
                    </div>
                `).join('')}
            </div>
        </section>
<div class="read-more-wrapper">
    <a href="#projects" class="read-more-btn">Read more...</a>
</div>`;
};
