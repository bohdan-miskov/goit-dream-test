/* empty css                      */(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".hero-section"),n=()=>{let r;window.innerWidth>=1280?r=window.devicePixelRatio>1?"../image/hero/retina/hero-desk@2x.webp":"../image/hero/hero-desk.webp":window.innerWidth>=768?r=window.devicePixelRatio>1?"../image/hero/retina/hero-tab@2x.webp":"../image/hero/hero-tab.webp":r=window.devicePixelRatio>1?"../image/hero/retina/hero-mob@2x.webp":"../image/hero/hero-mob.webp",t.style.backgroundImage=`linear-gradient(
          to bottom,
          rgba(20, 20, 20, 0.2),
          rgba(20, 20, 20, 0.2)
        ), url(${r})`};new IntersectionObserver((r,e)=>{r.forEach(o=>{o.isIntersecting&&(n(),e.disconnect())})}).observe(t)});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".slider-line"),n=document.querySelectorAll(".reviews-item");let i=0;const r=window.innerWidth<1280&&768<=window.innerWidth,e=window.innerWidth<768;var o=parseInt(getComputedStyle(t).gap);const c=n[0].offsetWidth+o;function d(s){this.startX=(s.type==="touchstart"?s.touches[0]:s).clientX}function l(s){s=(s.type==="touchend"?s.changedTouches[0]:s).clientX,s=this.startX-s,s>50?e&&i<n.length-1||r&&i<n.length-2?i++:i=0:s<-50&&(i>0?i--:e?i=n.length-1:r&&(i=n.length-2)),t.style.transform=`translateX(-${i*c}px)`}t.addEventListener("touchstart",d,{passive:!0}),t.addEventListener("touchend",l,{passive:!0}),t.addEventListener("mousedown",d,{passive:!0}),t.addEventListener("mouseup",l,{passive:!0})});(()=>{const t={openMobileMenuBtn:document.querySelector("[data-mobileMenu-open]"),closeMobileMenuBtn:document.querySelector("[data-mobileMenu-close]"),mobileMenuLinks:document.querySelectorAll(".mobile-menu-nav-link"),mobileMenuBtn:document.querySelector(".mobile-menu-shop-btn"),mobileMenu:document.querySelector("[data-mobileMenu]")};function n(){t.mobileMenu.classList.toggle("is-open")}t.openMobileMenuBtn.addEventListener("click",n,{passive:!0}),t.closeMobileMenuBtn.addEventListener("click",n,{passive:!0}),t.mobileMenuLinks.forEach(i=>{i.addEventListener("click",n,{passive:!0})}),t.mobileMenuBtn.addEventListener("click",n,{passive:!0})})();
//# sourceMappingURL=index.js.map
