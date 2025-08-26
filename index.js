import"./assets/popup_menu-BP8GC7As.js";import{S as N,a as y}from"./assets/vendor-CHgafnuo.js";const _=document.querySelector(".order-now-button"),$=document.querySelector(".order-now"),F=document.querySelector(".order-now-close-button");new N(".swiper",{slidesPerView:"auto",loop:!0,pagination:{el:".swiper-pagination",clickable:!0}});_.addEventListener("click",()=>{$.classList.add("show-order-now")});F.addEventListener("click",()=>{$.classList.remove("show-order-now")});const E="https://tasty-treats-backend.p.goit.global/api",b=document.getElementById("category-list"),x=document.querySelector(".all-categories-button"),T=document.getElementById("search-input"),p=document.getElementById("recipe-grid"),M=document.getElementById("empty-recipe-grid"),R=document.getElementById("reset-button"),v=document.getElementById("time-select"),f=document.getElementById("area-select"),g=document.getElementById("ingredient-select"),a=document.getElementById("pagination");let d=null,S="",m="",h="",w="",i=1;const O=9;let l=[];function A(e){return l.some(t=>String(t._id)===String(e))}function V(){localStorage.setItem("favorites",JSON.stringify(l))}function B(){const e=localStorage.getItem("favorites");if(e)try{const t=JSON.parse(e);l=Array.isArray(t)?t:[]}catch{localStorage.removeItem("favorites"),l=[]}else l=[]}async function G(){try{const t=(await y.get(`${E}/categories`)).data;b.innerHTML="",t.forEach(n=>{const o=document.createElement("li"),s=document.createElement("button");s.textContent=n.name,s.classList.add("category-btn"),s.addEventListener("click",()=>{d=n.name,i=1,I(),c()}),o.appendChild(s),b.appendChild(o)})}catch(e){console.error("Kategori yüklenirken hata:",e)}}function I(){x.classList.remove("active"),b.querySelectorAll("li").forEach(e=>e.classList.remove("active")),d===null?x.classList.add("active"):b.querySelectorAll("li").forEach(e=>{e.querySelector("button").textContent===d&&e.classList.add("active")})}x.addEventListener("click",()=>{d=null,i=1,I(),c()});T.addEventListener("input",()=>{S=T.value.trim(),i=1,c()});R.addEventListener("click",()=>{d=null,S="",m="",h="",w="",T.value="",v.value="",f.value="",g.value="",i=1,I(),c()});v.addEventListener("change",()=>{m=v.value,i=1,c()});f.addEventListener("change",()=>{h=f.value,i=1,c()});g.addEventListener("change",()=>{w=g.value,i=1,c()});function J(){const e=[15,30,45,60,90,120];v.innerHTML='<option value="">All times</option>',e.forEach(t=>{const n=document.createElement("option");n.value=t,n.textContent=`${t} minutes`,v.appendChild(n)})}async function U(){try{const t=(await y.get(`${E}/areas`)).data;f.innerHTML='<option value="">All areas</option>',t.forEach(n=>{const o=document.createElement("option");o.value=n.name,o.textContent=n.name,f.appendChild(o)})}catch(e){console.error("Area options yüklenirken hata:",e)}}async function D(){try{const t=(await y.get(`${E}/ingredients`)).data;g.innerHTML='<option value="">All ingredients</option>',t.forEach(n=>{const o=document.createElement("option");o.value=n._id,o.textContent=n.name,g.appendChild(o)})}catch(e){console.error("Ingredient options yüklenirken hata:",e)}}async function c(e=1){i=e,p.innerHTML="Loading...";try{const t={page:i,limit:O};d&&(t.category=d),S&&(t.title=S),m&&(t.time=m),h&&(t.area=h),w&&(t.ingredient=w);const n=await y.get(`${E}/recipes`,{params:t}),o=n.data.results||[],s=n.data.totalPages||1;if(!o.length){p.innerHTML="",M.innerHTML=`<svg
        class="icon-empty-recipes"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 97 83"
        width="97"
        height="83"
      >
        <use href="./svg/symbol-defs.svg#icon-empty-recipes"></use>
        </svg>
        <p>No recipes found.</p>`,a.innerHTML="";return}M.innerHTML="",Q(o),H(),z(s,i)}catch(t){console.error("Tarifler yüklenirken hata:",t),p.innerHTML="<p>Error loading recipes.</p>",a.innerHTML=""}}function K(e){let t="";for(let n=0;n<5;n++)n<parseInt(e)?t+=` <svg
        class="icon-yellow-star"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <use href="./svg/symbol-defs.svg#icon-yellow-star"></use>
        </svg>`:t+=` <svg
        class="icon-empty-star"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <use href="./svg/symbol-defs.svg#icon-empty-star"></use>
        </svg>`;return t}function C(e){return A(e)?`<svg
            class="icon-white-heart"
            viewBox="0 0 24 24"
        >
            <use href="./svg/symbol-defs.svg#icon-white-heart"></use>
        </svg>`:`<svg
            class="icon-heart"
            viewBox="0 0 24 24"
        >
            <use href="./svg/symbol-defs.svg#icon-heart"></use>
        </svg>`}function P(e){const t=String(e),n=document.getElementById(`favorite-button-${t}`);n&&(n.innerHTML=C(t))}function H(){const e=document.querySelectorAll('.favorite-btn[id^="favorite-button-"]');e.length&&e.forEach(t=>{const n=t.id.replace("favorite-button-","");t.innerHTML=C(n)})}function q(e){return(e==null?void 0:e._id)||(e==null?void 0:e.id)}function Q(e){p.innerHTML="",e.forEach(t=>{const n=document.createElement("div");n.className="home-recipe-card";const o=t.thumb||"https://via.placeholder.com/280x180?text=No+Image";n.style.backgroundImage=`linear-gradient(0.94deg, rgba(5, 5, 5, 0.6) 4.82%, rgba(5, 5, 5, 0.5) 18.72%), url(${o})`;const s=parseFloat(t.rating).toFixed(1);n.innerHTML=`
     <button id='favorite-button-${t._id}' class="favorite-btn">${C(t._id)}</button>
     
      <div class="home-recipe-card-bottom">
        <div class="home-recipe-card-desc">
            <h3>${t.title}</h3>
            <p>${t.description||""}</p>
        </div>
     
        <div class="home-recipe-card-button">
            <div class="stars">
                <div class="floatCount">
                ${s}
                </div>
                ${K(s)}
            </div>
            <button class="see-recipe-btn">See Recipe</button>
       </div>
      </div>
    `,n.querySelector(".favorite-btn").addEventListener("click",()=>{j(t)}),n.querySelector(".see-recipe-btn").addEventListener("click",()=>{const u=q(t);typeof window.openPopup=="function"?window.openPopup(u||t):console.error("⚠️ openPopup fonksiyonu tanımlı değil!")}),p.appendChild(n)})}function j(e,t=!1){A(e._id)?l=l.filter(o=>String(o._id)!==String(e._id)):l.push(e);const n=document.getElementById(`favorite-button-${e._id}`);n&&(n.innerHTML=C(e._id)),!t&&V(),window.dispatchEvent(new Event("favorites:updated")),document.dispatchEvent(new Event("favorites:updated"))}function z(e,t){a.innerHTML="";const n=(o,s,u=!1,L=!1,k="")=>{const r=document.createElement("button");return r.innerHTML=o,r.className=k,L&&r.classList.add("active"),u&&r.classList.add("disabled"),r.disabled=u,r.addEventListener("click",()=>{u||c(s)}),r};a.appendChild(n(`<svg
            class="icon-left-arrow-1 double"
            viewBox="0 0 48 48"
        >
            <use href="./svg/symbol-defs.svg#icon-left-arrow-1" transform="translate(-7, 0)"></use>
            <use href="./svg/symbol-defs.svg#icon-left-arrow-1" transform="translate(20, 0)"></use>
        </svg>`,1,t===1,!1,"page-arrow-icon")),a.appendChild(n(`<svg
            class="icon-left-arrow-1"
            viewBox="0 0 24 24"
        >
            <use href="./svg/symbol-defs.svg#icon-left-arrow-1"></use>
        </svg>`,t-1,t===1,!1,"page-arrow-icon"));for(let o=1;o<=e;o++)if(o===1||o===e||Math.abs(t-o)<=1)a.appendChild(n(o,o,!1,t===o));else if(o===2&&t>3||o===e-1&&t<e-2){const s=document.createElement("span");s.textContent="...",s.classList.add("dots"),a.appendChild(s)}a.appendChild(n(`<svg
            class="icon-right-arrow-1"
            viewBox="0 0 24 24"
        >
            <use href="./svg/symbol-defs.svg#icon-right-arrow-1"></use>
        </svg>`,t+1,t===e,!1,"page-arrow-icon")),a.appendChild(n(`<span><svg
            class="icon-right-arrow-1 double"
            viewBox="0 0 48 48"
        >
            <use href="./svg/symbol-defs.svg#icon-right-arrow-1" transform="translate(-7, 0)"></use>
            <use href="./svg/symbol-defs.svg#icon-right-arrow-1" transform="translate(20, 0)"></use>
        </svg></span>`,e,t===e,!1,"page-arrow-icon"))}async function W(){try{const t=(await y.get(`${E}/recipes/popular`)).data,n=document.querySelector("#popular-list");n.innerHTML="",t.forEach(o=>{const s=document.createElement("li");s.classList.add("popular-card");const u=o.preview||o.thumb||"https://via.placeholder.com/100x70?text=No+Image",L=o.title||"Untitled",k=o.description||o.instructions||"No description available";s.className="popular-card",s.innerHTML=`
  <img src="${u}" alt="${L}" />
  <div class="popular-card-info">
    <h4 class="popular-card-title" >${L}</h4>
    <p class="popular-card-desc">${k}</p>
  </div>
`,s.addEventListener("click",()=>{const r=q(o);typeof window.openPopup=="function"?window.openPopup(r||o):console.error("⚠️ openPopup fonksiyonu tanımlı değil!")}),n.appendChild(s)})}catch(e){console.error("Popüler tarifler alınamadı:",e)}}window.addEventListener("favorites:sync",e=>{var n;const t=(n=e==null?void 0:e.detail)==null?void 0:n.id;t&&(B(),P(t))});window.addEventListener("favorites:updated",()=>{B(),H()});window.addEventListener("storage",e=>{e.key==="favorites"&&(B(),H())});window.addEventListener("DOMContentLoaded",async()=>{B(),d=null,m="",h="",w="",I(),await G(),J(),await U(),await D(),await c(),await W()});
//# sourceMappingURL=index.js.map
