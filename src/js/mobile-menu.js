(() => {
    const e = {
      openMobileMenuBtn: document.querySelector("[data-mobileMenu-open]"),
      closeMobileMenuBtn: document.querySelector("[data-mobileMenu-close]"),
      mobileMenuLinks: document.querySelectorAll(".mobile-menu-nav-link"),
      mobileMenuBtn: document.querySelector(".mobile-menu-shop-btn"),
      mobileMenu: document.querySelector("[data-mobileMenu]")
    };
  
    function n() {
      e.mobileMenu.classList.toggle("is-open");
    }
  
    // Додаємо пасивний слухач події для кнопок (клік)
    e.openMobileMenuBtn.addEventListener("click", n, { passive: true });
    e.closeMobileMenuBtn.addEventListener("click", n, { passive: true });
  
    e.mobileMenuLinks.forEach(link => {
      // Додаємо пасивний слухач події для кліків на лінках
      link.addEventListener("click", n, { passive: true });
    });
  
    e.mobileMenuBtn.addEventListener("click", n, { passive: true });
  })();
  