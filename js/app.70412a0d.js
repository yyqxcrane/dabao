(function(t){function e(e){for(var i,c,s=e[0],r=e[1],u=e[2],A=0,h=[];A<s.length;A++)c=s[A],a[c]&&h.push(a[c][0]),a[c]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);l&&l(e);while(h.length)h.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,s=1;s<n.length;s++){var r=n[s];0!==a[r]&&(i=!1)}i&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},a={app:0},o=[];function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=r;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"097e":function(t,e){(function(t){var e,n=t.document,i=n.documentElement;function a(){var t=i.getBoundingClientRect().width,e=t/6.4;i.style.fontSize=e+"px"}t.addEventListener("resize",function(){clearTimeout(e),e=setTimeout(a,10)},!1),t.addEventListener("pageshow",function(t){t.persisted&&(clearTimeout(e),e=setTimeout(a,10))},!1),a()})(window)},"0c3e":function(t,e,n){},"2aa2":function(t,e,n){},3056:function(t,e,n){"use strict";var i=n("fdb2"),a=n.n(i);a.a},"30cb":function(t,e,n){"use strict";var i=n("e305"),a=n.n(i);a.a},"371e":function(t,e,n){},"3a9e":function(t,e,n){"use strict";var i=n("2aa2"),a=n.n(i);a.a},"3dfd":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("navigation",{attrs:{movieTitle:t.movieName}}),n("div",{staticClass:"container"},[n("router-view",{on:{routerChange:t.change}})],1)],1)},a=[],o=(n("cadf"),n("551c"),n("097d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.active},[n("header",[n("span",{on:{click:function(e){t.routerPush({name:"movie",title:"电影",id:"101",path:"/"})}}},[t._v("首页")]),n("h3",[t._v(t._s(t.title))])]),n("nav",[n("ul",t._l(t.navList,function(e,i){return n("li",{key:i+"nl",class:{"nav-active":t.active==e.name},on:{click:function(n){t.routerPush(e)}}},[t._v("\n        "+t._s(e.title))])}))])])}),c=[],s=(n("7f7f"),n("ac6a"),{props:["movieTitle"],mounted:function(){this.$nextTick(function(){var t=this;this.navList.forEach(function(e){e.name==t.movieTitle&&(t.active=e.name,t.title=e.title)})})},methods:{routerPush:function(t){this.$router.push(t.path),this.active=t.name,this.title=t.title}},data:function(){return{active:"movie",title:"电影",navList:[{name:"movie",title:"电影",id:"101",path:"/"},{name:"music",title:"音乐",id:"102",path:"/music"},{name:"book",title:"书籍",id:"103",path:"/book"},{name:"photo",title:"图片",id:"104",path:"/photo"}]}}}),r=s,u=(n("3056"),n("2877")),l=Object(u["a"])(r,o,c,!1,null,"721d5843",null);l.options.__file="Navigation.vue";var A=l.exports,h={data:function(){return{movieName:"movie"}},components:{navigation:A},methods:{change:function(t){this.movieName=t}}},f=h,d=(n("30cb"),Object(u["a"])(f,i,a,!1,null,"6c90ec97",null));d.options.__file="App.vue";e["a"]=d.exports},"403f":function(t,e,n){"use strict";var i=n("b37f"),a=n.n(i);a.a},"41cb":function(t,e,n){"use strict";var i=n("2b0e"),a=n("8c4f"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",[t._l(t.dataList,function(e,i){return n("li",{key:i+"dl"},[n("img",{attrs:{src:e.images.small}}),n("div",[n("h4",[t._v(t._s(e.title)+" ")]),n("span",[t._v("主演：")]),t._l(e.casts,function(e,i){return n("span",{key:i+"mc"},[t._v("\n                     "+t._s(e.name))])}),n("p",[t._v(t._s(e.collect_count)+"人已观看")]),n("span",[t._v("类型:")]),t._l(e.genres,function(e,i){return n("span",{key:i+"hc"},[t._v("\n                       "+t._s(e))])}),n("p",[t._v("评分："+t._s(e.rating.average))]),n("p",[t._v("年份："+t._s(e.year)+" ")])],2),n("hr")])}),n("hr")],2),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isFinish,expression:"!isFinish"}],staticClass:"loading"},[t._m(0)])])},c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"loading-content"},[i("img",{attrs:{src:n("cf1c"),alt:""}})])}],s=(n("cadf"),n("551c"),n("097d"),{created:function(){this.getData()},data:function(){return{dataList:[],startIndex:0,isFinish:!0}},methods:{getData:function(){var t=this;this.isFinish=!1,axios.get(API_PROXY+"https://api.douban.com/v2/movie/in_theaters?start="+this.startIndex+"&count=10").then(function(e){t.dataList=t.dataList.concat(e.data.subjects),t.isFinish=!0}).catch(function(t){console.log(t)})}},mounted:function(){var t=this;window.onscroll=function(){var e=document.documentElement.clientHeight,n=document.documentElement.scrollHeight,i=document.documentElement.scrollTop;e+i==n&&(t.startIndex+=10,t.getData())}}}),r=s,u=(n("3a9e"),n("2877")),l=Object(u["a"])(r,o,c,!1,null,"12fe1de3",null);l.options.__file="movie.vue";var A=l.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",t._l(t.dataList,function(e,i){return n("li",{key:i+"ml",on:{click:function(e){t.$router.push("/musictable")}}},[n("img",{attrs:{src:e.bg}})])}))])},f=[],d=n("bc3a"),p=n.n(d),m={created:function(){this.getData(),this.$emit("routerChange","music")},data:function(){return{dataList:[]}},methods:{getData:function(){var t=this;p.a.get("./data/musiclist.json").then(function(e){t.dataList=e.data.albums}).catch(function(t){console.log(t)})}}},v=m,g=(n("c387"),Object(u["a"])(v,h,f,!1,null,"6ebd4fe0",null));g.options.__file="music.vue";var B=g.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("swipe",{staticClass:"my-swipe"},[n("swipe-item",{staticClass:"slide1"}),n("swipe-item",{staticClass:"slide2"}),n("swipe-item",{staticClass:"slide3"})],1)],1)},w=[],b=n("ada1");n("8eac");var C={components:{swipe:b["Swipe"],"swipe-item":b["SwipeItem"]},created:function(){this.$emit("routerChange","book")}},Q=C,_=(n("403f"),Object(u["a"])(Q,E,w,!1,null,"67d305c9",null));_.options.__file="book.vue";var D=_.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"clearfix"},t._l(t.imgList,function(e,i){return n("li",{key:i+"pl",on:{click:function(e){t.$router.push({name:"photodetail",params:{id:i}})}}},[n("img",{attrs:{src:"img/"+e+".jpg",alt:""}})])}))])},y=[],I={created:function(){this.$emit("routerChange","photo")},data:function(){return{imgList:["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","a11","a12","a13","a14","a15"]}}},O=I,x=(n("8740"),Object(u["a"])(O,k,y,!1,null,"2874714f",null));x.options.__file="photo.vue";var F=x.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isShow?n("aplayer",{attrs:{autoplay:"",list:t.dataList,music:t.dataList[0],showLrc:!0}}):t._e()],1)},S=[],L=n("0f7d"),T=n.n(L),Y={created:function(){this.getData()},data:function(){return{dataList:[],isShow:!1}},components:{aplayer:T.a},methods:{getData:function(){var t=this;p.a.get("./data/musicdata.json").then(function(e){t.dataList=e.data.musicData,t.isShow=!0;for(var n=0;n<e.data.musicData.length;n++)t.dataList[n].lrc=location.origin+location.pathname+e.data.musicData[n].lrc}).catch(function(t){console.log(t)})}}},H=Y,M=Object(u["a"])(H,j,S,!1,null,null,null);M.options.__file="musictable.vue";var N=M.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{on:{click:t.goBack}},[n("v-touch",{staticClass:"content",style:t.styleobj,on:{swipeleft:t.onSwipeLeft,swiperight:t.onSwipeRight}})],1)},J=[],G=n("ca95"),K=n.n(G);i["default"].use(K.a,{name:"v-touch"});var U={data:function(){return{imgid:this.$route.params.id+1}},created:function(){this.$emit("routerChange","photo"),this.imgid||this.$router.push("./photo")},computed:{styleobj:function(){return{background:"#000 url('./img/a".concat(this.imgid,".jpg') no-repeat center/contain")}}},methods:{onSwipeLeft:function(){this.imgid++,this.imgid>15&&(this.imgid=1)},onSwipeRight:function(){this.imgid--,this.imgid<1&&(this.imgid=15)},goBack:function(){this.$router.push("./photo")}}},W=U,P=(n("5c0c"),Object(u["a"])(W,R,J,!1,null,"61da3266",null));P.options.__file="photodetail.vue";var X=P.exports;i["default"].use(a["a"]);e["a"]=new a["a"]({mode:"hash",base:"",routes:[{path:"/",name:"movie",component:A},{path:"/music",name:"music",component:B},{path:"/book",name:"book",component:D},{path:"/photo",name:"photo",component:F},{path:"/musictable",name:"musictable",component:N},{path:"/photodetail",name:"photodetail",component:X}]})},"4ee2":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e),function(t){n("cadf"),n("551c"),n("097d");var e=n("2b0e"),i=(n("be3b"),n("3dfd")),a=n("41cb"),o=n("c0d6");n("097e"),n("4ee2");e["default"].config.productionTip=!1,t.API_PROXY="https://bird.ioliu.cn/v2?url=",new e["default"]({router:a["a"],store:o["a"],render:function(t){return t(i["a"])}}).$mount("#app")}.call(this,n("c8ba"))},"5c0c":function(t,e,n){"use strict";var i=n("ce26"),a=n.n(i);a.a},8740:function(t,e,n){"use strict";var i=n("0c3e"),a=n.n(i);a.a},b37f:function(t,e,n){},be3b:function(t,e,n){"use strict";n("cadf"),n("551c"),n("097d");var i=n("2b0e"),a=n("bc3a"),o=n.n(a),c={},s=o.a.create(c);s.interceptors.request.use(function(t){return t},function(t){return Promise.reject(t)}),s.interceptors.response.use(function(t){return t},function(t){return Promise.reject(t)}),Plugin.install=function(t,e){t.axios=s,window.axios=s,Object.defineProperties(t.prototype,{axios:{get:function(){return s}},$axios:{get:function(){return s}}})},i["default"].use(Plugin);Plugin},c0d6:function(t,e,n){"use strict";n("cadf"),n("551c"),n("097d");var i=n("2b0e"),a=n("2f62");i["default"].use(a["a"]),e["a"]=new a["a"].Store({state:{},mutations:{},actions:{}})},c387:function(t,e,n){"use strict";var i=n("371e"),a=n.n(i);a.a},ce26:function(t,e,n){},cf1c:function(t,e){t.exports="data:image/gif;base64,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"},e305:function(t,e,n){},fdb2:function(t,e,n){}});
//# sourceMappingURL=app.70412a0d.js.map