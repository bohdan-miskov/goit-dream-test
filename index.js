/* empty css                      */(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}})();document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector(".reviews-slider"),t=document.querySelector(".slider-line"),i=document.querySelectorAll(".reviews-item");let r=0,e;const n=window.innerWidth<1280&&768<=window.innerWidth,c=window.innerWidth<768;window.innerWidth<375&&(e=s.offsetWidth,t.style.width=e*i.length+"px",i.forEach(o=>{o.style.width=e+"px"}));var u=parseInt(getComputedStyle(t).gap);const a=i[0].offsetWidth+u;function d(o){this.startX=(o.type==="touchstart"?o.touches[0]:o).clientX}function l(o){o=(o.type==="touchend"?o.changedTouches[0]:o).clientX,o=this.startX-o,50<o?c&&r<i.length-1||n&&r<i.length-2?r++:r=0:o<-50&&(0<r?r--:c?r=i.length-1:n&&(r=i.length-2)),t.style.transform=`translateX(-${r*a}px)`}t.addEventListener("touchstart",d),t.addEventListener("touchend",l),t.addEventListener("mousedown",d),t.addEventListener("mouseup",l)});(()=>{const s={openMobileMenuBtn:document.querySelector("[data-mobileMenu-open]"),closeMobileMenuBtn:document.querySelector("[data-mobileMenu-close]"),mobileMenu:document.querySelector("[data-mobileMenu]")};function t(){s.mobileMenu.classList.toggle("is-open")}s.openMobileMenuBtn.addEventListener("click",t),s.closeMobileMenuBtn.addEventListener("click",t)})();
//# sourceMappingURL=index.js.map
