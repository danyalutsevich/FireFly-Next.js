(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(1952)}])},1952:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSP:function(){return h},default:function(){return m}});var n=a(5893),i=a(7294);let c=["4cb430850cc41209a4803c077e68cf99","355506ff6d82d3b3d910dab304b2e621","f09baad80eaaa6d1d7d5a65f9287254a","d0e3f63a671bd7578d925356cd1e3a18"],o=c[Math.floor(Math.random()*c.length)],r={image:"https://image.tmdb.org/t/p/w500",image_original:"https://image.tmdb.org/t/p/original",credits:(e,t)=>"https://api.themoviedb.org/3/".concat(t,"/").concat(e,"/credits?api_key=").concat(o,"&language=en-US"),top_rated:e=>"https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(o,"&language=en-US&page=").concat(e),movie:e=>"https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(o,"&language=en-US"),similar:(e,t)=>"https://api.themoviedb.org/3/".concat(t,"/").concat(e,"/similar?api_key=").concat(o,"&language=en-US"),popular:e=>"https://api.themoviedb.org/3/movie/popular?api_key=".concat(o,"&language=en-US&page=").concat(e),trending:e=>"https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(o,"&page=").concat(e),search:(e,t)=>"https://api.themoviedb.org/3/search/multi?api_key=".concat(o,"&language=en-US&query=").concat(e,"&page=").concat(t,"&include_adult=true"),video:(e,t)=>"https://api.themoviedb.org/3/".concat(t,"/").concat(e,"/videos?api_key=").concat(o,"&language=en-US"),person:e=>"https://api.themoviedb.org/3/person/".concat(e,"?api_key=").concat(o,"&language=en-US"),person_credits:e=>"https://api.themoviedb.org/3/person/".concat(e,"/combined_credits?api_key=").concat(o,"&language=en-US"),tv:e=>"https://api.themoviedb.org/3/tv/".concat(e,"?api_key=").concat(o,"&language=en-US"),external_ids:(e,t)=>"https://api.themoviedb.org/3/".concat(t,"/").concat(e,"/external_ids?api_key=").concat(o,"&language=en-US"),images:(e,t)=>"https://api.themoviedb.org/3/".concat(t,"/").concat(e,"/images?api_key=").concat(o,"&language=en-US&include_image_language=en,null")};var s=a(5675),d=a.n(s),l=a(1664),g=a.n(l);function p(e){let{movie:t}=e;return(0,n.jsx)(g(),{href:"/movie/"+t.id,children:(0,n.jsxs)("div",{className:"m-10",children:[(0,n.jsx)("div",{className:"flex align-middle justify-center",children:(0,n.jsx)(d(),{src:r.image_original+t.poster_path,alt:t.title+" poster",width:"200",height:"200"})}),(0,n.jsx)("h1",{className:"text-white text-center",children:t.title})]})})}function u(){let[e,t]=(0,i.useState)([]),[a,c]=(0,i.useState)(2),[o,s]=(0,i.useState)(!1),d=async()=>{c(a+1),s(!0);let n=await fetch(r.popular(a)),i=await n.json();t([...e,...i.results]),s(!1)};return(0,i.useEffect)(()=>{window.onscroll=()=>{let{scrollY:e,innerHeight:t}=window,{scrollHeight:a}=document.body;e+t>=a&&!o&&d()}},[e]),(0,n.jsx)(n.Fragment,{children:e.map((e,t)=>(0,n.jsx)(p,{movie:e},t+20*a))})}var h=!0;function m(e){let{popular:t}=e;return console.log(t),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"flex align-middle justify-center bg-black",children:(0,n.jsxs)("div",{id:"infiniteScroll",className:"w-9/12 grid g-16 grid-cols-fluid align-middle justify-center",children:[t.results.map((e,t)=>(0,n.jsx)(p,{movie:e},t)),(0,n.jsx)(u,{})]})})})}}},function(e){e.O(0,[61,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);