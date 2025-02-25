function fixedNav(){const e=document.querySelector(".header"),t=document.querySelector(".about-festival");document.addEventListener("scroll",(function(){t.getBoundingClientRect().bottom<.5?e.classList.add("fixed"):e.classList.remove("fixed")}))}function makeGallery(){const e=document.querySelector(".gallery-images");for(let t=1;t<=16;t++){const l=document.createElement("PICTURE");l.innerHTML=`\n        <source srcset="build/img/gallery/full/${t}.avif" type="image/avif">\n        <source srcset="build/img/gallery/full/${t}.webp" type="image/webp">\n        <img loading="lazy" width="200" height="300" src="build/img/gallery/full/${t}.jpg" alt="imagen galeria">\n        `,l.onclick=function(){showImage(t)},e.appendChild(l)}}function showImage(e){const t=document.createElement("PICTURE");t.innerHTML=`\n    <source srcset="build/img/gallery/full/${e}.avif" type="image/avif">\n    <source srcset="build/img/gallery/full/${e}.webp" type="image/webp">\n    <img loading="lazy" width="200" height="300" src="build/img/gallery/full/${e}.jpg" alt="imagen galeria">\n    `;const l=document.createElement("DIV");l.classList.add("modal"),l.onclick=closeModal;const o=document.createElement("BUTTON");o.textContent="X",o.classList.add("btn-close"),o.onclick=closeModal,l.appendChild(t),l.appendChild(o);const n=document.querySelector("body");n.appendChild(l),n.classList.add("overflow-hidden"),console.log(l)}function closeModal(){const e=document.querySelector(".modal");e.classList.add("fade-out"),setTimeout((()=>{e?.remove();document.querySelector("body").classList.remove("overflow-hidden")}),500)}function highlightLink(){document.addEventListener("scroll",(function(){const e=document.querySelectorAll("section"),t=document.querySelectorAll(".main-nav a");let l="";e.forEach((e=>{const t=e.offsetTop,o=e.clientHeight;window.scrollY>=t-o/3&&(l=e.id)})),t.forEach((e=>{e.classList.remove("active"),e.getAttribute("href")==="#"+l&&e.classList.add("active")}))}))}function scrollNav(){document.querySelectorAll(".main-nav a").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const t=e.target.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth"})}))}))}document.addEventListener("DOMContentLoaded",(function(){fixedNav(),makeGallery(),highlightLink(),scrollNav()}));