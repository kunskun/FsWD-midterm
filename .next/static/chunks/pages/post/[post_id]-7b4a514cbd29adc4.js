(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[483],{5513:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post/[post_id]",function(){return t(9589)}])},9589:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return x}});var s=t(4051),r=t.n(s),a=t(5893),c=t(7294),i=t(9669),d=t.n(i),l=t(1163),u=t(7934),o=t(381),f=t.n(o),h=t(1664);function p(e,n,t,s,r,a,c){try{var i=e[a](c),d=i.value}catch(l){return void t(l)}i.done?n(d):Promise.resolve(d).then(s,r)}function m(e){return function(){var n=this,t=arguments;return new Promise((function(s,r){var a=e.apply(n,t);function c(e){p(a,s,r,c,i,"next",e)}function i(e){p(a,s,r,c,i,"throw",e)}c(void 0)}))}}function x(){var e=(0,c.useState)({}),n=e[0],t=e[1],s=(0,c.useState)([]),i=s[0],o=s[1],p=(0,c.useState)([]),x=p[0],v=p[1],j=(0,c.useState)([]),w=j[0],_=j[1],g=(0,c.useState)(!0),N=g[0],y=g[1],b=(0,l.useRouter)().query.post_id;(0,c.useEffect)(m(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:case"end":return e.stop()}}),e)}))),[]);var k=function(){var e=m(r().mark((function e(){var n,s,a,c;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d().get("https://fswd-wp.devnss.com/wp-json/wp/v2/posts/".concat(b));case 2:return n=e.sent,e.next=5,d().get("https://fswd-wp.devnss.com/wp-json/wp/v2/categories?per_page=100");case 5:return s=e.sent,e.next=8,d().get("https://fswd-wp.devnss.com/wp-json/wp/v2/tags?per_page=100");case 8:return a=e.sent,e.next=11,d().get("https://fswd-wp.devnss.com/wp-json/wp/v2/users?per_page=100");case 11:return c=e.sent,e.next=14,t(n.data);case 14:return e.next=16,o(s.data);case 16:return e.next=18,v(a.data);case 18:return e.next=20,_(c.data);case 20:return e.next=22,y(!1);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(e){var n={};return w.forEach((function(t){e==t.id&&(n=t)})),n};return N?(0,a.jsx)("div",{className:"styles.container",children:(0,a.jsx)("h2",{children:"loading"})}):(0,a.jsxs)("div",{className:"styles.container progress-bar-striped bg-warning p-3",children:[(0,a.jsxs)("div",{className:"card mb-3",children:[(0,a.jsx)("div",{className:"card-title d-flex justify-content-start align-items-center align-self-center pt-4",children:(0,a.jsx)("h1",{children:n.title.rendered})}),(0,a.jsx)("div",{className:"d-flex justify-content-start align-items-center align-self-center pb-3",children:(0,a.jsxs)("h5",{children:["Published by",(0,a.jsx)(h.default,{href:M(n.author).link,style:{color:"black"},children:(0,a.jsxs)("span",{children:[" ",M(n.author).name," "]})}),"on",(0,a.jsxs)("span",{children:[" ",f()(n.date).format("MMMM DD YYYY")]})]})}),(0,a.jsxs)("div",{className:"card-body",children:[(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:n.content.rendered}}),(0,a.jsx)("hr",{}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("h5",{className:"my-4",children:["Published in",(0,a.jsx)("span",{className:"p-2",children:n.categories.map((function(e){var n={};return i.filter((function(t){t.id===e&&(n=t)})),(0,a.jsx)(h.default,{href:n.link,className:"mx-1",style:{color:"black"},children:n.name},e)}))})]}),(0,a.jsx)("div",{className:"my-4",children:n.tags.map((function(e){var n={};return x.filter((function(t){t.id===e&&(n=t)})),(0,a.jsx)(h.default,{href:n.link,className:"mx-1",style:{color:"black"},children:(0,a.jsx)("button",{className:"btn btn-dark disable mx-1",style:{borderRadius:"13px",width:"10%"},children:n.name})},e)}))})]})]})]}),(0,a.jsx)("div",{className:"card mb-1 p-3",children:(0,a.jsx)(u.default,{})})]})}},7934:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var s=t(5893),r=t(7294),a=t(9669),c=t.n(a),i=t(381),d=t.n(i),l=t(1163);function u(){var e=(0,r.useState)([]),n=e[0],t=e[1],a=(0,l.useRouter)().query.post_id;return(0,r.useEffect)((function(){c().get("https://fswd-wp.devnss.com/wp-json/wp/v2/comments?per_page=100").then((function(e){t(e.data)}))}),[]),(0,s.jsx)(s.Fragment,{children:n.map((function(e){if(e.post==a)return(0,s.jsx)("div",{className:"card mb-2 p-3",children:(0,s.jsxs)("div",{className:"card-body",children:[(0,s.jsxs)("div",{className:"row d-flex justify-content-start align-items-center align-self-center",children:[(0,s.jsx)("div",{className:"col-1 p-2",children:(0,s.jsx)("img",{className:"rounded-circle",src:e.author_avatar_urls[96],width:"100%"})}),(0,s.jsxs)("div",{className:"col-11",children:[(0,s.jsx)("h5",{className:"card-title",dangerouslySetInnerHTML:{__html:e.author_name}}),(0,s.jsx)("p",{dangerouslySetInnerHTML:{__html:d()(e.date).format("MMMM DD YYYY, hh:mm:ss a")}})]})]}),(0,s.jsx)("div",{className:"row pt-4",children:(0,s.jsx)("p",{dangerouslySetInnerHTML:{__html:e.content.rendered}})})]})},e.id)}))})}},1163:function(e,n,t){e.exports=t(387)}},function(e){e.O(0,[885,774,888,179],(function(){return n=5513,e(e.s=n);var n}));var n=e.O();_N_E=n}]);