(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{322:function(e,t,r){"use strict";function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.a=(e,t,r)=>{"desktop"===r?t.mediaQuery="(min-width: 1025px)":"mobile"===r&&(t.mediaQuery="(min-width: 768px) and (max-width: 1024px), (min-width: 320px) and (max-width: 767px)"),window.nitroAds&&window.nitroAds.createAd(e,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({refreshLimit:10,refreshTime:30,renderVisibleOnly:!1,refreshVisibleOnly:!0,report:{enabled:!0,wording:"Report Ad",position:"top-right"}},t))}},370:function(e,t,r){},383:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return f}));var n=r(0),a=r.n(n),o=(r(370),r(9)),i=r(44),s=(r(91),r(322));function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function f(){const[e,t]=Object(n.useState)([]),[r,f]=Object(n.useState)([]);window.scroll(0,0),Object(n.useEffect)(()=>{Object(s.a)("nitropay-staff-bottom",{sizes:[[728,90],[970,90],[970,250]],renderVisibleOnly:!0},"desktop"),Object(s.a)("nitropay-staff-bottom",{sizes:[[320,50],[300,50],[300,250]],renderVisibleOnly:!0},"mobile"),o("/api/staff").then(({data:e})=>{t(e)}).catch(()=>{toast.dark("Our staff list was unable to be shown.",{position:"top-right",autoClose:1e4,hideProgressBar:!0,pauseOnHover:!0,draggable:!0,progress:void 0,toastId:"noStaff"})})},[]),Object(n.useEffect)(()=>{f(Object.entries(e))},[e]);const p=({social:e})=>0===Object.keys(e).length?-1:1;return a.a.createElement("div",{id:"staff"},a.a.createElement("div",{id:"staff-categories"},r.map(([e,t],r)=>a.a.createElement("div",{id:"staff-categories-"+e.toLowerCase().replace(/ /g,"-"),key:r},a.a.createElement("h1",{className:"staff-category-title"},e),a.a.createElement("div",{className:"staff-category-cards"},t.sort(()=>.5*Math.random()).sort((e,t)=>p(e)-p(t)).map((e,t)=>""!==e.name?a.a.createElement(i.a,c({},e,{key:t})):""))))),a.a.createElement("div",{id:"nitropay-staff-bottom",className:"nitropay"}))}}}]);