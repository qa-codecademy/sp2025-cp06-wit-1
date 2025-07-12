const PeopleCarousel = (items) => {
    return `
      <div class="carousel people-carousel" id="people-carousel">
        <button class="carousel-control prev">‹</button>
        <div class="carousel-inner">
          ${items.map((person, index) => `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
              <img src="${person.image}" alt="${person.name}">
              <h4>${person.name}</h4>
              <p>${person.description}</p>
            </div>
          `).join('')}
        </div>
        <button class="carousel-control next">›</button>
      </div>
    `;
  };
  
  export default PeopleCarousel;
  