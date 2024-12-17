document.addEventListener("DOMContentLoaded", () => {
    const e = document.querySelector(".slider-line"),
          n = document.querySelectorAll(".reviews-item");
    let d = 0;
    const o = window.innerWidth < 1280 && 768 <= window.innerWidth,
          i = window.innerWidth < 768;
    var t = parseInt(getComputedStyle(e).gap);
    const s = n[0].offsetWidth + t;
  
    function r(t) {
      this.startX = ("touchstart" === t.type ? t.touches[0] : t).clientX;
    }
  
    function c(t) {
      t = ("touchend" === t.type ? t.changedTouches[0] : t).clientX;
      t = this.startX - t;
      if (t > 50) {
        if (i && d < n.length - 1 || o && d < n.length - 2) {
          d++;
        } else {
          d = 0;
        }
      } else if (t < -50) {
        if (d > 0) {
          d--;
        } else if (i) {
          d = n.length - 1;
        } else if (o) {
          d = n.length - 2;
        }
      }
      e.style.transform = `translateX(-${d * s}px)`;
    }
  
    // Додаємо пасивні слухачі для touchstart, touchend, mousedown, mouseup
    e.addEventListener("touchstart", r, { passive: true });
    e.addEventListener("touchend", c, { passive: true });
    e.addEventListener("mousedown", r, { passive: true });
    e.addEventListener("mouseup", c, { passive: true });
  });
  