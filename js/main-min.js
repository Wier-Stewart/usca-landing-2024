function checkStickyElementPosition(e){const t=document.getElementById(e),n=document.querySelector("footer"),o=document.querySelector("nav"),c=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?t.classList.add("stuck"):t.classList.remove("stuck")}))}),{root:null,rootMargin:"-200px 0px -50px",threshold:0});c.observe(n),c.observe(o),n.getBoundingClientRect().top<=window.innerHeight&&t.classList.add("stuck")}document.addEventListener("DOMContentLoaded",(function(){checkStickyElementPosition("sticky-cta")})),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".info-modal"),t=document.querySelector(".info-modal--inner-close");document.querySelectorAll(".btn-info").forEach((t=>{t.addEventListener("click",(function(t){t.preventDefault(),e.classList.add("active"),document.body.classList.add("modal-on")}))})),t.addEventListener("click",(function(){e.classList.remove("active"),document.body.classList.remove("modal-on")})),e.addEventListener("click",(function(t){t.target===this&&(e.classList.remove("active"),document.body.classList.remove("modal-on"))}))}));