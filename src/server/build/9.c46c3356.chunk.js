(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{313:function(e,t,a){},363:function(e,t,a){},381:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(8),c=a(14),i=a(5),r=a(7),s=a(1),d=(a(363),a(313),a(28)),p=a.n(d);const m=25,b=["all posts","accepted","implemented","duplicate","denied","invalid"];t.default=Object(o.b)(e=>e.login)(function(e){const t=Object(r.f)(),{current:a}=Object(n.useRef)(window.location.pathname.split("/")[2]),[o,d]=Object(n.useState)([]),[u,g]=Object(n.useState)(window.innerWidth<=560),[f,v]=Object(n.useState)(!1),[h,E]=Object(n.useState)(null),[k,w]=Object(n.useState)("Hot"),[y,C]=Object(n.useState)("all posts"),[N,O]=Object(n.useState)(!1),[L,j]=Object(n.useState)(!1),x=(Object(n.useRef)(!0),async(e=!1)=>{c(`/api/feedback/posts/${a}?from=${e?0:o.length}&amount=${m}&sorting=${k}&filter=${y}`).then(({data:t})=>{d(e?[...t.posts]:[...o,...t.posts]),v(t.all)})});Object(n.useEffect)(()=>(x(!0),O(!1)),[y,k]),Object(n.useEffect)(()=>(c("/api/feedback/categories").then(e=>{E(e.data)}),window.addEventListener("resize",()=>window.innerWidth<=560?g(!0):!window.innerWidth<=560?g(!1):void 0),()=>{window.removeEventListener("resize",()=>window.innerWidth<=560?g(!0):!window.innerWidth<=560?g(!1):void 0)}),[]),h&&!h.includes(a)&&window.location.replace("/feedback");const _=({icon:e,label:t})=>l.a.createElement("div",{id:u?"feedback-category-sorting-mobile-button":"feedback-category-sorting-desktop-button",className:t==k?"active":"",onClick:()=>w(t)},l.a.createElement("span",{className:"material-icons"},e),l.a.createElement("span",{id:u?"feedback-category-sorting-mobile-button-label":"feedback-category-sorting-desktop-button-label"},t));return l.a.createElement("div",{id:"feedback-category"},l.a.createElement("div",{id:"feedback-category-head"},l.a.createElement("h1",{id:"feedback-category-head-title"},a.replace(a[0],a[0].toUpperCase()).replaceAll("_"," ")," feedback"),l.a.createElement("div",{id:"feedback-category-head-button"},l.a.createElement(s.b,{id:"feedback-category-head-button-create",to:"/feedback/new"},"New post"),l.a.createElement("span",{id:"feedback-category-head-button-bg"}))),u?l.a.createElement("div",{id:"feedback-category-sorting-mobile"},l.a.createElement("div",{id:"feedback-category-sorting-mobile-button-options",className:L?"active":"",onClick:()=>{j(!L),O(!1)}},l.a.createElement("span",{className:"material-icons"},"more_horiz"),l.a.createElement("span",{id:"feedback-category-sorting-button-label"},"Options")),L&&l.a.createElement("div",{id:"feedback-category-sorting-mobile-buttons"},l.a.createElement(_,{icon:"local_fire_department",label:"Hot"}),l.a.createElement(_,{icon:"trending_up",label:"Top"}),l.a.createElement(_,{icon:"star",label:"New"}),l.a.createElement(_,{icon:"restore",label:"Old"}),l.a.createElement("div",{id:"feedback-category-sorting-mobile-button",className:"filter",title:"Filter posts based on their label"},l.a.createElement("div",{id:"filter-button",onClick:()=>O(!N)},l.a.createElement("span",{className:"material-icons-outlined"},"filter_alt"),l.a.createElement("span",{id:"feedback-category-sorting-mobile-button-label"},y.charAt(0).toUpperCase()+y.substr(1).toLowerCase())),N&&l.a.createElement("div",{id:"feedback-category-filter-options-mobile"},b.map(e=>l.a.createElement("p",{key:y,onClick:()=>C(e)},e.charAt(0).toUpperCase()+e.substr(1).toLowerCase())))))):l.a.createElement("div",{id:"feedback-category-sorting-desktop"},l.a.createElement(_,{icon:"local_fire_department",label:"Hot"}),l.a.createElement(_,{icon:"trending_up",label:"Top"}),l.a.createElement(_,{icon:"star",label:"New"}),l.a.createElement(_,{icon:"restore",label:"Old"}),l.a.createElement("div",{className:"sorting-separator"}),l.a.createElement("div",{id:"feedback-category-sorting-desktop-button",className:"filter",title:"Filter posts based on their label"},l.a.createElement("div",{id:"filter-button",onClick:()=>O(!N)},l.a.createElement("span",{className:"material-icons-outlined"},"filter_alt"),l.a.createElement("span",{id:"feedback-category-sorting-button-label"},y.charAt(0).toUpperCase()+y.substr(1).toLowerCase())),N&&l.a.createElement("div",{id:"feedback-category-filter-options"},b.map(e=>l.a.createElement("p",{key:y,onClick:()=>C(e)},e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()))))),0===o.length&&l.a.createElement("div",{style:{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center"}},l.a.createElement("img",{src:p.a,width:80,style:{marginBottom:"1vh"}}),l.a.createElement("i",null,"Woah, so empty.")),o.map((a,n)=>l.a.createElement("div",{key:a._id,className:"feedback-post",onClick:()=>t.push(`/feedback/p/${a._id}`)},l.a.createElement("div",{className:"feedback-post-content"},l.a.createElement("h3",{className:"feedback-post-content-title"},l.a.createElement("p",null,a.title),a.developerResponse&&l.a.createElement("span",{className:"feedback-post-tag developer-response"},"Developer Response"),a.label&&a.label.length>=1&&l.a.createElement("span",{className:"feedback-post-tag "+a.label.split(" ").join("-")},a.label.charAt(0).toUpperCase()+a.label.substr(1).toLowerCase())),l.a.createElement("p",{className:"feedback-post-content-description"},a.description)),l.a.createElement("div",{className:"feedback-post-stats"},l.a.createElement("div",{className:"feedback-post-stats-comments"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",stroke:"currentColor",fill:"none",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},l.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),l.a.createElement("path",{d:"M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10"}),l.a.createElement("path",{d:"M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2"})),l.a.createElement("p",{className:"feedback-post-stats-comments-count"},a.comments)),l.a.createElement("div",{className:a.upvoted?"feedback-post-stats-button upvoted":"feedback-post-stats-button",onClick:t=>(async t=>{if(!e.loggedIn)return i.b.dark(l.a.createElement("p",null,l.a.createElement("svg",{viewBox:"0 0 16 16",fill:"currentColor",style:{display:"inline-block",verticalAlign:"middle",width:"20px",height:"20px",boxSizing:"border-box",margin:"10px",color:"rgb(233, 76, 88)"}},l.a.createElement("path",{fillRule:"evenodd",d:"M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"})),l.a.createElement("span",{style:{display:"inline-block",verticalAlign:"middle"}},"You need to be logged in!")),{position:"top-right",autoClose:1e4,hideProgressBar:!0,pauseOnHover:!0,draggable:!0,progress:void 0,toastId:"upvoteState"});c.patch(`/api/feedback/post/upvote/${t}`).then(({data:e})=>{const a=o.find(e=>e._id===t);a.upvotes+=e.upvote,a.upvoted=1==e.upvote,d([...o])})})(a._id)&&t.stopPropagation()},a.upvoted?l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor"},l.a.createElement("path",{d:"M4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14z"})):l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor"},l.a.createElement("path",{d:"M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10zM15 12h-1v8h-4v-8H6.081L12 4.601 17.919 12H15z"})),l.a.createElement("p",null,a.upvotes))))),!f&&l.a.createElement("p",{onClick:()=>x(),id:"feedback-category-more"},"Load More Posts"),l.a.createElement(i.a,null))})}}]);