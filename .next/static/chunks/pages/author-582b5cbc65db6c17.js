(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[66],{9821:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/author",function(){return s(5745)}])},5745:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return a}});var t=s(5893),c=s(7294),r=s(9669),i=s.n(r);function a(){var e=(0,c.useState)([]),n=e[0],s=e[1];return(0,c.useEffect)((function(){i().get("https://fswd-wp.devnss.com/wp-json/wp/v2/users?per_page=100").then((function(e){s(e.data)}))}),[]),(0,t.jsxs)("div",{className:"styles.container progress-bar-striped bg-warning p-3",children:[(0,t.jsx)("div",{className:"d-flex justify-content-center justify-content-center my-3",children:(0,t.jsx)("h1",{children:"Author List"})}),(0,t.jsx)("div",{className:"row d-flex justify-content-center",children:n.map((function(e){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"col-4",children:(0,t.jsx)("a",{href:e.link,className:"mx-1",style:{color:"black",textDecoration:"none"},children:(0,t.jsxs)("div",{className:"card p-2",children:[(0,t.jsx)("div",{className:"card-img-top",children:(0,t.jsx)("img",{src:e.avatar_urls[96],style:{width:"100%"}})}),(0,t.jsx)("div",{className:"card-title d-flex justify-content-center justify-content-center",children:(0,t.jsx)("h3",{children:e.name})}),(0,t.jsxs)("div",{className:"card-body",children:[(0,t.jsx)("h6",{children:"Describtion:"}),(0,t.jsx)("p",{children:e.description?e.description:"-"})]})]})})})})}))})]})}}},function(e){e.O(0,[774,888,179],(function(){return n=9821,e(e.s=n);var n}));var n=e.O();_N_E=n}]);