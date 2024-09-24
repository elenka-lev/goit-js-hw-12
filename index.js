import{a as h,i as a,S as w}from"./assets/vendor-D73Uttp0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();const L="https://pixabay.com/api/",v="46051705-d89a9592eef32bc9448824550";async function g(r,e=1){try{return(await h.get(L,{params:{key:v,q:r,image_type:"photo",page:e,per_page:15,orientation:"horizontal",safesearch:"true"}})).data}catch(t){throw console.log(t),t}}function f(r){const e=document.querySelector(".gallery"),t=r.hits.map(l=>`<li class="gallery-query">
            <a class="gallery-link" href="${l.largeImageURL}">
                <img class="gallery-img"
                    src="${l.webformatURL}"
                    data-source="${l.largeImageURL}"
                    alt="${l.tags}"
                    width="360"  onclick="return false">
                <ul class="gallery-descr">
                    <li class="gallery-item">
                        <p class="gallery-item-descr">Likes</p>
                        <p class="gallery-value">${l.likes}</p>
                    </li>
                    <li class="gallery-item">
                        <p class="gallery-item-descr">Views</p>
                        <p class="gallery-value">${l.views}</p>
                    </li>
                    <li class="gallery-item">
                        <p class="gallery-item-descr">Comments</p>
                        <p class="gallery-value">${l.comments}</p>
                    </li>
                    <li class="gallery-item">
                        <p class="gallery-item-descr">Downloads</p>
                        <p class="gallery-value">${l.downloads}</p>
                    </li>
                </ul>
            </a>
        </li>`).join("");e.insertAdjacentHTML("beforeend",t)}function m(){document.querySelector(".loader").classList.remove("visually-hidden")}function d(){document.querySelector(".loader").classList.add("visually-hidden")}function b(){document.querySelector(".load-more").classList.remove("visually-hidden")}function y(){document.querySelector(".load-more").classList.add("visually-hidden")}const u=document.querySelector(".form"),q=document.querySelector(".gallery");let p=null,i=1;const n=15,C=document.querySelector(".load-more");u.addEventListener("submit",async r=>{r.preventDefault();const e=u.elements.query.value.trim();if(e===""){a.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",maxWidth:"432px",messageColor:"#fff",iconColor:"#fff"});return}q.innerHTML="",i=1;try{m();const t=await g(e,i,n);f(t),p=new w(".gallery a").refresh(),d(),t.hits.length>=n?b():y(),t.totalHits===0&&(d(),a.warning({title:"",message:"No images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",maxWidth:"432px",messageColor:"#fff",iconColor:"#fff"}))}catch(t){console.log(t),a.error({title:"",message:"Something went wrong. Please try again!",position:"topRight",backgroundColor:"#EF4040",maxWidth:"432px",messageColor:"#fff",iconColor:"#fff"})}});function S(){const{height:r}=document.querySelector(".gallery-query").getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}C.addEventListener("click",async()=>{i+=1;const r=u.elements.query.value.trim();try{m();const e=await g(r,i,n);f(e),p.refresh(),d(),S(),e.hits.length<n&&(y(),a.info({title:"",message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#2196F3",maxWidth:"432px",messageColor:"#fff",iconColor:"#fff"}))}catch(e){console.log(e),a.error({title:"",message:"Something went wrong. Please try again!",position:"topRight",backgroundColor:"#EF4040",maxWidth:"432px",messageColor:"#fff",iconColor:"#fff"})}});
//# sourceMappingURL=index.js.map
