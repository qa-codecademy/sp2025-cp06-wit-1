const SuccessCarousel = (items) => {
  const slides = items.map((item, index) => `
    <div class="carousel-item ${index === 0 ? 'active' : ''}">
      <img src="${item.image}" alt="${item.alt}">
      <div class="hero-content">
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <button>${item.buttonText}</button>
      </div>
    </div>
  `).join('');

  return `
    <div class="carousel hero-carousel" id="success-carousel">
      <div class="carousel-inner">
        ${slides}
      </div>
      <button class="carousel-control prev">&#10094;</button>
      <button class="carousel-control next">&#10095;</button>
    </div>
  `;
};


export default SuccessCarousel;
