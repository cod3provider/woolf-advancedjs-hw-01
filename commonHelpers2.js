import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{P as a,l as s}from"./assets/vendor-78be7656.js";const o=new a("vimeo-player"),r="videoplayer-current-time",t=localStorage.getItem(r);if(t){const e=JSON.parse(t);o.setCurrentTime(e)}const l=e=>{localStorage.setItem(r,e.seconds)};o.on("timeupdate",s(l,1e3));
//# sourceMappingURL=commonHelpers2.js.map
