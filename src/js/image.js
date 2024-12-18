document.addEventListener("DOMContentLoaded", function () {
    const heroSection = document.querySelector('.hero-section');
  
    const setBackgroundImage = () => {
      // Вибір правильного зображення залежно від розміру екрана і щільності пікселів
      let imageUrl;
      if (window.innerWidth >= 1280) {
        imageUrl = window.devicePixelRatio > 1
          ? '../image/hero/retina/hero-desk@2x.webp'
          : '../image/hero/hero-desk.webp';
      } else if (window.innerWidth >= 768) {
        imageUrl = window.devicePixelRatio > 1
          ? '../image/hero/retina/hero-tab@2x.webp'
          : '../image/hero/hero-tab.webp';
      } else {
        imageUrl = window.devicePixelRatio > 1
          ? '../image/hero/retina/hero-mob@2x.webp'
          : '../image/hero/hero-mob.webp';
      }
  
      // Встановлення фонового зображення
      heroSection.style.backgroundImage = `linear-gradient(
          to bottom,
          rgba(20, 20, 20, 0.2),
          rgba(20, 20, 20, 0.2)
        ), url(${imageUrl})`;
    };
  
    // Використання IntersectionObserver для відкладеного завантаження
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setBackgroundImage(); // Додавання фонового зображення
          observer.disconnect(); // Вимкнення спостерігача після завантаження
        }
      });
    });
  
    observer.observe(heroSection);
  });
  