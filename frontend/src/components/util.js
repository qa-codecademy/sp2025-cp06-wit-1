const initCarousel = (selector) => {
    const container = document.querySelector(selector);
    if (!container) return;
  
    const track = container.querySelector('.carousel-inner');
    const items = Array.from(track.children);
    let currentIndex = 0;
  
    const updateCarousel = () => {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    };
  
    const nextSlide = () => {
      currentIndex = (currentIndex + 1) % items.length;
      updateCarousel();
    };
  
    const prevSlide = () => {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      updateCarousel();
    };
  
    const nextButton = container.querySelector('.carousel-control.next');
    const prevButton = container.querySelector('.carousel-control.prev');
  
    if (nextButton && prevButton) {
      nextButton.addEventListener('click', nextSlide);
      prevButton.addEventListener('click', prevSlide);
    }
  
    // Auto-slide
    setInterval(nextSlide, 4000);
  };
  
  export default initCarousel;