(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();(()=>{const t=document.querySelector("[data-menu-button]"),n=document.querySelector("[data-menu]"),s=document.querySelectorAll(".mobile-menu-link"),l=document.body;t.addEventListener("click",()=>{const e=t.getAttribute("aria-expanded")==="true"||!1;t.classList.toggle("is-open"),t.setAttribute("aria-expanded",!e),l.classList.toggle("lock-body"),n.classList.toggle("is-open")});for(let e=0;e<s.length;e+=1)s[e].addEventListener("click",()=>{n.classList.remove("is-open"),t.classList.remove("is-open"),l.classList.toggle("lock-body");const o=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!o)})})();(()=>{const t={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};t.openModalBtn.addEventListener("click",n),t.closeModalBtn.addEventListener("click",n);function n(){t.modal.classList.toggle("is-hidden")}})();(()=>{const t={openModalBtn:document.querySelector("[thanks-data-modal-open]"),closeModalBtn:document.querySelector("[thanks-data-modal-close]"),modal:document.querySelector("[thanks-data-modal]")};t.openModalBtn.addEventListener("click",n),t.closeModalBtn.addEventListener("click",n);function n(){t.modal.classList.toggle("thanks-is-hidden")}})();(()=>{const t=document.querySelector(".scroll-to-top");window.addEventListener("scroll",()=>{window.scrollY>600?t.classList.add("scroll-to-top"):t.classList.remove("scroll-to-top")})})();
