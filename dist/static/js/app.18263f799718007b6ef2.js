webpackJsonp([0],{"+p9J":function(t,e,s){"use strict";e.a={name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}}},"1vaK":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),s("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},n=[],i={render:a,staticRenderFns:n};e.a=i},"4sDB":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))])])},n=[],i={render:a,staticRenderFns:n};e.a=i},"7oBO":function(t,e,s){"use strict";var a="undefined"!=typeof window;a&&(window.Swiper=s("gsqX")),e.a={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&a&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&a){delete t.options.notNextTick;var e=!1;for(var s in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(s)&&t.options[s]&&(e=!0,t.defaultSwiperClasses[s]=t.options[s]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},Fs8J:function(t,e,s){"use strict";e.a={name:"Home",data:function(){return{swiperOption:{paginationType:"progress",paginationClickable:!1,pagination:".swiper-pagination",nextButton:".swiper-button-next",prevButton:".swiper-button-prev",spaceBetween:30,onSlideChangeEnd:function(t){console.log("onSlideChangeEnd - index:",t.realIndex,t);var e=t.realIndex+1;history.pushState({},"page "+e,"#/story/"+e)},hashnavWatchState:!0,keyboardControl:!0}}}}},HrOd:function(t,e){},M93x:function(t,e,s){"use strict";function a(t){s("P3OM")}var n=s("xJD8"),i=s("w7sS"),r=s("VU/8"),o=a,p=r(n.a,i.a,o,null,null);e.a=p.exports},"N+zL":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("+p9J"),n=s("SHIX"),i=s("VU/8"),r=i(a.a,n.a,null,null,null);e.default=r.exports},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n=s("M93x"),i=s("YaEn"),r=s("F3EI"),o=s.n(r);s("v2ns"),a.a.config.productionTip=!1,a.a.use(o.a),new a.a({el:"#app",router:i.a,template:"<App/>",components:{App:n.a}})},P3OM:function(t,e){},RdlC:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"subhead"},[s("swiper",{attrs:{options:t.swiperOption}},[s("swiper-slide",{attrs:{"data-hash":"story/1"}},[s("div",{staticClass:"story"},[s("h1",[t._v("Story 1 headline")]),t._v(" "),s("h3",[t._v("Some kind of summary text...")]),t._v(" "),s("button",{staticClass:"view-story",attrs:{type:"button",name:"button"}},[t._v("View Story 1")])]),t._v(" "),s("img",{attrs:{src:"https://lorempixel.com/375/667/nature/1",alt:""}})]),t._v(" "),s("swiper-slide",{staticClass:"swiper-slide",attrs:{"data-hash":"story/2"}},[s("div",{staticClass:"story"},[s("h1",[t._v("Story 2 headline")]),t._v(" "),s("button",{staticClass:"view-story",attrs:{type:"button",name:"button"}},[t._v("View Story 2")])]),t._v(" "),s("img",{attrs:{src:"https://lorempixel.com/375/667/nature/2",alt:""}})]),t._v(" "),s("swiper-slide",{staticClass:"swiper-slide",attrs:{"data-hash":"story/3"}},[s("div",{staticClass:"story"},[s("h1",[t._v("Story 3 headline")]),t._v(" "),s("button",{staticClass:"view-story",attrs:{type:"button",name:"button"}},[t._v("View Story 3")])]),t._v(" "),s("img",{attrs:{src:"https://lorempixel.com/375/667/nature/3",alt:""}})]),t._v(" "),s("swiper-slide",{staticClass:"swiper-slide",attrs:{"data-hash":"story4"}},[s("div",{staticClass:"story"},[s("h1",[t._v("Story 4 headline")]),t._v(" "),s("button",{staticClass:"view-story",attrs:{type:"button",name:"button"}},[t._v("View Story 4")])]),t._v(" "),s("img",{attrs:{src:"https://lorempixel.com/375/667/nature/4",alt:""}})]),t._v(" "),s("swiper-slide",{staticClass:"swiper-slide",attrs:{"data-hash":"story5"}},[s("div",{staticClass:"story"},[s("h1",[t._v("Story 5 headline")]),t._v(" "),s("input",{attrs:{type:"text",name:"",value:""}}),t._v(" "),s("button",{attrs:{type:"button",name:"button"}},[t._v("subscribe")])]),t._v(" "),s("img",{attrs:{src:"https://lorempixel.com/375/667/nature/5",alt:""}})]),t._v(" "),s("div",{staticClass:"swiper-pagination",slot:"pagination"})],1)],1)},n=[],i={render:a,staticRenderFns:n};e.a=i},SHIX:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.slideClass},[t._t("default")],2)},n=[],i={render:a,staticRenderFns:n};e.a=i},YaEn:function(t,e,s){"use strict";var a=s("7+uW"),n=s("/ocq"),i=s("lO7g"),r=s("ua3t");a.a.use(n.a),e.a=new n.a({routes:[{path:"/",name:"Home",component:i.a},{path:"/test",name:"Hello",component:r.a},{path:"/story/:num",name:"Story",component:i.a}]})},b6pE:function(t,e,s){"use strict";e.a={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App",swiperOption:{pagination:".swiper-pagination",paginationClickable:!0}}}}},lO7g:function(t,e,s){"use strict";function a(t){s("yrMs")}var n=s("Fs8J"),i=s("RdlC"),r=s("VU/8"),o=a,p=r(n.a,i.a,o,"data-v-5a250ee8",null);e.a=p.exports},pYmz:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7oBO"),n=s("1vaK"),i=s("VU/8"),r=i(a.a,n.a,null,null,null);e.default=r.exports},ua3t:function(t,e,s){"use strict";function a(t){s("HrOd")}var n=s("b6pE"),i=s("4sDB"),r=s("VU/8"),o=a,p=r(n.a,i.a,o,"data-v-a8e49282",null);e.a=p.exports},v2ns:function(t,e){},w7sS:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],i={render:a,staticRenderFns:n};e.a=i},xJD8:function(t,e,s){"use strict";e.a={name:"app"}},yrMs:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.18263f799718007b6ef2.js.map