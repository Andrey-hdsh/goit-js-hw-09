const t=document.querySelector(".js-start-btn"),e=document.querySelector(".js-stop-btn");let d=null;e.disabled=!0,t.addEventListener("click",(function(){d||(t.disabled=!0,e.disabled=!1,d=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3))})),e.addEventListener("click",(function(){d&&(e.disabled=!0,t.disabled=!1,clearInterval(d),d=null)}));
//# sourceMappingURL=01-color-switcher.c27cb408.js.map
