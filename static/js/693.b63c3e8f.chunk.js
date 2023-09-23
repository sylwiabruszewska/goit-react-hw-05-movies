/*! For license information please see 693.b63c3e8f.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[693],{7693:function(t,r,e){e.r(r),e.d(r,{default:function(){return Z}});var n,o,a,i,c,u,s=e(9439),f=e(2791),h=e(7689),l=e(409),p=e(5390),v=e(1288),d=e(168),y=e(5867),g=y.ZP.img(n||(n=(0,d.Z)(["\n  width: 60px;\n  height: 60px;\n  margin-bottom: 10px;\n  object-fit: cover;\n"]))),m=y.ZP.ul(o||(o=(0,d.Z)(["\n  list-style-type: none;\n  padding: 20px;\n"]))),w=y.ZP.li(a||(a=(0,d.Z)(["\n  background-color: #fff;\n  border-radius: 10px;\n  margin-bottom: 20px;\n  padding: 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 20px;\n"]))),x=y.ZP.div(i||(i=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n"]))),b=y.ZP.p(c||(c=(0,d.Z)(["\n  margin: 4px 0;\n"]))),_=y.ZP.p(u||(u=(0,d.Z)(["\n  margin: 0;\n  flex: 5;\n  padding-left: 20px;\n  border-left: 1px solid black;\n"]))),j=e(184),Z=function(){var t=(0,h.UO)().movieId,r=(0,f.useState)([]),e=(0,s.Z)(r,2),n=e[0],o=e[1],a=(0,f.useState)(!0),i=(0,s.Z)(a,2),c=i[0],u=i[1];return(0,f.useEffect)((function(){(0,l.tx)(t).then((function(t){o(t)})).finally((function(){u(!1)}))}),[t]),c?(0,j.jsx)(p.aN,{}):(0,j.jsx)("div",{children:n.length>0?(0,j.jsx)(m,{children:n.map((function(t){var r=t.author,e=t.author_details,n=t.id,o=t.content;return(0,j.jsxs)(w,{children:[(0,j.jsxs)(x,{children:[(0,j.jsx)(g,{src:e.avatar_path||v,alt:e.avatar_path?"{author}'s avatar":"Placeholder"}),(0,j.jsxs)(b,{children:["@",e.username]}),(0,j.jsx)(b,{children:r})]}),(0,j.jsx)(_,{children:o})]},n)}))}):(0,j.jsx)("p",{children:"We don't have any reviews for this movie."})})}},409:function(t,r,e){e.d(r,{Df:function(){return l},M1:function(){return d},TP:function(){return v},Wf:function(){return p},tx:function(){return y}});var n=e(5861),o=e(1243);function a(){a=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function f(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{f({},"")}catch(t){f=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var a=r&&r.prototype instanceof g?r:g,i=Object.create(a.prototype),c=new N(n||[]);return o(i,"_invoke",{value:E(t,e,c)}),i}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var p="suspendedStart",v="executing",d="completed",y={};function g(){}function m(){}function w(){}var x={};f(x,c,(function(){return this}));var b=Object.getPrototypeOf,_=b&&b(b(P([])));_&&_!==e&&n.call(_,c)&&(x=_);var j=w.prototype=g.prototype=Object.create(x);function Z(t){["next","throw","return"].forEach((function(r){f(t,r,(function(t){return this._invoke(r,t)}))}))}function L(t,r){function e(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?r.resolve(f.__await).then((function(t){e("next",t,i,c)}),(function(t){e("throw",t,i,c)})):r.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return e("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return a=a?a.then(o,o):o()}})}function E(r,e,n){var o=p;return function(a,i){if(o===v)throw new Error("Generator is already running");if(o===d){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=k(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=l(r,e,n);if("normal"===s.type){if(o=n.done?d:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=d,n.method="throw",n.arg=s.arg)}}}function k(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,k(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var a=l(o,r.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,y;var i=a.arg;return i?i.done?(e[r.resultName]=i.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function I(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function P(r){if(r||""===r){var e=r[c];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError(typeof r+" is not iterable")}return m.prototype=w,o(j,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:m,configurable:!0}),m.displayName=f(w,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,f(t,s,"GeneratorFunction")),t.prototype=Object.create(j),t},r.awrap=function(t){return{__await:t}},Z(L.prototype),f(L.prototype,u,(function(){return this})),r.AsyncIterator=L,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new L(h(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},Z(j),f(j,s,"Generator"),f(j,c,(function(){return this})),f(j,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=P,N.prototype={constructor:N,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),I(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;I(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:P(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),y}},r}o.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="trending/movie/day",c="search/movie",u="movie",s="credits",f="reviews",h=function(){var t=(0,n.Z)(a().mark((function t(r){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat("https://api.themoviedb.org/3/")+r,{headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGZhZmZhNjZiYjA1ZTg4MWI3ZjNkZTBiMjY1YjMwYyIsInN1YiI6IjY0Yjk0ZGZiMTEzODZjMDEyZGYyODM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i5XjfMBV4oHEA6NUnudWFh467vN12yMmqPlu2RKuz-o"}});case 3:if(200!==(e=t.sent).status){t.next=6;break}return t.abrupt("return",e.data);case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error("An error occurred while fetching data:",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(r){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(a().mark((function t(){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h("".concat(i));case 2:return r=t.sent,t.abrupt("return",r.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(a().mark((function t(r){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h("".concat(c,"?query=").concat(r));case 2:return e=t.sent,t.abrupt("return",e.results);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(a().mark((function t(r){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h("".concat(u,"/").concat(r));case 2:return(e=t.sent).poster_path&&(e.poster_path="http://image.tmdb.org/t/p/w300".concat(e.poster_path)),t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),d=function(){var t=(0,n.Z)(a().mark((function t(r){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h("".concat(u,"/").concat(r,"/").concat(s));case 2:return e=t.sent,t.abrupt("return",e.cast.map((function(t){return t.profile_path&&(t.profile_path="http://image.tmdb.org/t/p/w200".concat(t.profile_path)),t})));case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),y=function(){var t=(0,n.Z)(a().mark((function t(r){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h("".concat(u,"/").concat(r,"/").concat(f));case 2:return e=t.sent,t.abrupt("return",e.results.map((function(t){return t.author_details.avatar_path&&(t.author_details.avatar_path="http://image.tmdb.org/t/p/w200".concat(t.author_details.avatar_path)),t})));case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},1288:function(t,r,e){t.exports=e.p+"static/media/avatar_placeholder.c153f16f3decb1a2bb7a.jpg"}}]);
//# sourceMappingURL=693.b63c3e8f.chunk.js.map