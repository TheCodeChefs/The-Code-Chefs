import"./assets/popup_menu-DbVaCWMS.js";import{S as F,a as E}from"./assets/vendor-CHgafnuo.js";const R=document.querySelector(".order-now-button"),A=document.querySelector(".order-now"),_=document.querySelector(".order-now-close-button");new F(".swiper",{slidesPerView:"auto",loop:!0,pagination:{el:".swiper-pagination",clickable:!0}});R.addEventListener("click",()=>{A.classList.add("show-order-now")});_.addEventListener("click",()=>{A.classList.remove("show-order-now")});const L="https://tasty-treats-backend.p.goit.global/api",S=document.getElementById("category-list"),M=document.querySelector(".all-categories-button"),T=document.getElementById("search-input"),f=document.getElementById("recipe-grid"),$=document.getElementById("empty-recipe-grid"),O=document.getElementById("reset-button"),v=document.getElementById("time-select"),g=document.getElementById("area-select"),m=document.getElementById("ingredient-select"),c=document.getElementById("pagination");let p=null,k="",h="",w="",y="",r=1;const P=9;let u=[];function C(e){return(e==null?void 0:e._id)||(e==null?void 0:e.id)||(e==null?void 0:e.recipeId)||""}function N(e){const t=String(e);return u.some(n=>String(C(n))===t)}function U(){localStorage.setItem("favorites",JSON.stringify(u))}function b(){const e=localStorage.getItem("favorites");if(e)try{const t=JSON.parse(e);u=Array.isArray(t)?t:[]}catch{localStorage.removeItem("favorites"),u=[]}else u=[]}function V(e){var n;const t=String(C(e)||"");return{...e,_id:t,title:(e==null?void 0:e.title)||"",description:(e==null?void 0:e.description)||"",rating:Number(e==null?void 0:e.rating)||0,preview:(e==null?void 0:e.preview)||(e==null?void 0:e.thumb)||(e==null?void 0:e.image_url)||(e==null?void 0:e.imageUrl)||"",category:typeof(e==null?void 0:e.category)=="string"?{name:e.category}:(n=e==null?void 0:e.category)!=null&&n.name?e.category:(e==null?void 0:e.category)||{}}}async function z(){try{const t=(await E.get(`${L}/categories`)).data;S.innerHTML="",t.forEach(n=>{const o=document.createElement("li"),i=document.createElement("button");i.textContent=n.name,i.classList.add("category-btn"),i.addEventListener("click",()=>{p=n.name,r=1,B(),d()}),o.appendChild(i),S.appendChild(o)})}catch(e){console.error("Kategori yüklenirken hata:",e)}}function B(){M.classList.remove("active"),S.querySelectorAll("li").forEach(e=>e.classList.remove("active")),p===null?M.classList.add("active"):S.querySelectorAll("li").forEach(e=>{e.querySelector("button").textContent===p&&e.classList.add("active")})}M.addEventListener("click",()=>{p=null,r=1,B(),d()});T.addEventListener("input",()=>{k=T.value.trim(),r=1,d()});O.addEventListener("click",()=>{p=null,k="",h="",w="",y="",T.value="",v.value="",g.value="",m.value="",r=1,B(),d()});v.addEventListener("change",()=>{h=v.value,r=1,d()});g.addEventListener("change",()=>{w=g.value,r=1,d()});m.addEventListener("change",()=>{y=m.value,r=1,d()});function D(){const e=[15,30,45,60,90,120];v.innerHTML='<option value="">All times</option>',e.forEach(t=>{const n=document.createElement("option");n.value=t,n.textContent=`${t} minutes`,v.appendChild(n)})}async function G(){try{const t=(await E.get(`${L}/areas`)).data;g.innerHTML='<option value="">All areas</option>',t.forEach(n=>{const o=document.createElement("option");o.value=n.name,o.textContent=n.name,g.appendChild(o)})}catch(e){console.error("Area options yüklenirken hata:",e)}}async function J(){try{const t=(await E.get(`${L}/ingredients`)).data;m.innerHTML='<option value="">All ingredients</option>',t.forEach(n=>{const o=document.createElement("option");o.value=n._id,o.textContent=n.name,m.appendChild(o)})}catch(e){console.error("Ingredient options yüklenirken hata:",e)}}async function d(e=1){r=e,f.innerHTML="Loading...";try{const t={page:r,limit:P};p&&(t.category=p),k&&(t.title=k),h&&(t.time=h),w&&(t.area=w),y&&(t.ingredient=y);const n=await E.get(`${L}/recipes`,{params:t}),o=n.data.results||[],i=n.data.totalPages||1;if(!o.length){f.innerHTML="",$.innerHTML=`<svg
        class="icon-empty-recipes"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 97 83"
        width="97"
        height="83"
      >
        <use href="./svg/symbol-defs.svg#icon-empty-recipes"></use>
        </svg>
        <p>No recipes found.</p>`,c.innerHTML="";return}$.innerHTML="",W(o),H(),Y(i,r)}catch(t){console.error("Tarifler yüklenirken hata:",t),f.innerHTML="<p>Error loading recipes.</p>",c.innerHTML=""}}function K(e){let t="";for(let n=0;n<5;n++)n<parseInt(e)?t+=` <svg
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
        </svg>`;return t}function I(e){return N(e)?`
      <svg class="icon-heart-full" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.74 0 3.41.81 4.5 2.09C12.09 4.81 13.76 4 15.5 4 18 4 20 6 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill="#fff" stroke="none"></path>
      </svg>`:`
    <svg class="icon-heart-outline" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
      <path
        d="M12.1 21.3l-.1.1-.1-.1C6.14 16.24 3 13.39 3 9.88 3 7.5 4.99 5.5 7.37 5.5c1.52 0 2.99.72 3.88 1.86.89-1.14 2.36-1.86 3.88-1.86C18.51 5.5 20.5 7.5 20.5 9.88c0 3.51-3.14 6.36-8.4 11.42z"
        fill="none" stroke="#fff" stroke-width="1.8"
        stroke-linecap="round" stroke-linejoin="round"
        vector-effect="non-scaling-stroke"></path>
    </svg>`}function Q(e){const t=String(e),n=document.getElementById(`favorite-button-${t}`);n&&(n.innerHTML=I(t))}function H(){const e=document.querySelectorAll('.favorite-btn[id^="favorite-button-"]');e.length&&e.forEach(t=>{const n=t.id.replace("favorite-button-","");t.innerHTML=I(n)})}function q(e){return(e==null?void 0:e._id)||(e==null?void 0:e.id)}function W(e){f.innerHTML="",e.forEach(t=>{const n=document.createElement("div");n.className="home-recipe-card";const o=t.thumb||"https://via.placeholder.com/280x180?text=No+Image";n.style.backgroundImage=`linear-gradient(0.94deg, rgba(5, 5, 5, 0.6) 4.82%, rgba(5, 5, 5, 0.5) 18.72%), url(${o})`;const i=parseFloat(t.rating).toFixed(1);n.innerHTML=`
     <button id='favorite-button-${t._id}' class="favorite-btn">
       ${I(t._id)}
     </button>
     
      <div class="home-recipe-card-bottom">
        <div class="home-recipe-card-desc">
            <h3>${t.title}</h3>
            <p>${t.description||""}</p>
        </div>
     
        <div class="home-recipe-card-button">
            <div class="stars">
                <div class="floatCount">
                ${i}
                </div>
                ${K(i)}
            </div>
            <button class="see-recipe-btn">See Recipe</button>
       </div>
      </div>
    `,n.querySelector(".favorite-btn").addEventListener("click",a=>{a.preventDefault(),a.stopPropagation(),X(t)}),n.querySelector(".see-recipe-btn").addEventListener("click",()=>{const a=q(t);typeof window.openPopup=="function"?window.openPopup(a||t):console.error("⚠️ openPopup fonksiyonu tanımlı değil!")}),f.appendChild(n)})}function X(e,t=!1){b();const n=String(C(e)),o=N(n);o?u=u.filter(a=>String(C(a))!==n):u.push(V(e));const i=document.getElementById(`favorite-button-${n}`);i&&(i.innerHTML=I(n)),t||U(),window.dispatchEvent(new Event("favorites:updated")),document.dispatchEvent(new Event("favorites:updated"));const s=window.location&&window.location.pathname||"";!o&&s.includes("home-filter.html")&&window.location.reload(),s.includes("favorites-filter.html")&&window.location.reload()}function Y(e,t){c.innerHTML="";const n=(o,i,s=!1,a=!1,x="")=>{const l=document.createElement("button");return l.innerHTML=o,l.className=x,a&&l.classList.add("active"),s&&l.classList.add("disabled"),l.disabled=s,l.addEventListener("click",()=>{s||d(i)}),l};c.appendChild(n(`<svg
            class="icon-left-arrow-1 double"
            viewBox="0 0 48 48"
        >
            <use href="./svg/symbol-defs.svg#icon-left-arrow-1" transform="translate(-7, 0)"></use>
            <use href="./svg/symbol-defs.svg#icon-left-arrow-1" transform="translate(20, 0)"></use>
        </svg>`,1,t===1,!1,"page-arrow-icon")),c.appendChild(n(`<svg
            class="icon-left-arrow-1"
            viewBox="0 0 24 24"
        >
            <use href="./svg/symbol-defs.svg#icon-left-arrow-1"></use>
        </svg>`,t-1,t===1,!1,"page-arrow-icon"));for(let o=1;o<=e;o++)if(o===1||o===e||Math.abs(t-o)<=1)c.appendChild(n(o,o,!1,t===o));else if(o===2&&t>3||o===e-1&&t<e-2){const i=document.createElement("span");i.textContent="...",i.classList.add("dots"),c.appendChild(i)}c.appendChild(n(`<svg
            class="icon-right-arrow-1"
            viewBox="0 0 24 24"
        >
            <use href="./svg/symbol-defs.svg#icon-right-arrow-1"></use>
        </svg>`,t+1,t===e,!1,"page-arrow-icon")),c.appendChild(n(`<span><svg
            class="icon-right-arrow-1 double"
            viewBox="0 0 48 48"
        >
            <use href="./svg/symbol-defs.svg#icon-right-arrow-1" transform="translate(-7, 0)"></use>
            <use href="./svg/symbol-defs.svg#icon-right-arrow-1" transform="translate(20, 0)"></use>
        </svg></span>`,e,t===e,!1,"page-arrow-icon"))}async function Z(){try{const t=(await E.get(`${L}/recipes/popular`)).data,n=document.querySelector("#popular-list");n.innerHTML="",t.forEach(o=>{const i=document.createElement("li");i.classList.add("popular-card");const s=o.preview||o.thumb||"https://via.placeholder.com/100x70?text=No+Image",a=o.title||"Untitled",x=o.description||o.instructions||"No description available";i.className="popular-card",i.innerHTML=`
  <img src="${s}" alt="${a}" />
  <div class="popular-card-info">
    <h4 class="popular-card-title" >${a}</h4>
    <p class="popular-card-desc">${x}</p>
  </div>
`,i.addEventListener("click",()=>{const l=q(o);typeof window.openPopup=="function"?window.openPopup(l||o):console.error("⚠️ openPopup fonksiyonu tanımlı değil!")}),n.appendChild(i)})}catch(e){console.error("Popüler tarifler alınamadı:",e)}}window.addEventListener("favorites:sync",e=>{var n;const t=(n=e==null?void 0:e.detail)==null?void 0:n.id;t&&(b(),Q(t))});window.addEventListener("favorites:updated",()=>{b(),H()});window.addEventListener("storage",e=>{e.key==="favorites"&&(b(),H())});window.addEventListener("DOMContentLoaded",async()=>{b(),p=null,h="",w="",y="",B(),await z(),D(),await G(),await J(),await d(),await Z()});
//# sourceMappingURL=index.js.map
