/*!
* Vue Material v0.7.1
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.VueMaterial=n():t.VueMaterial=n()})(this,(function(){return (function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};return n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="/",n(n.s=456)})({0:function(t,n){t.exports=function(t,n,e,r,o){var i,u=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(i=t,u=t.default);var f="function"==typeof u?u.options:u;n&&(f.render=n.render,f.staticRenderFns=n.staticRenderFns),r&&(f._scopeId=r);var a;if(o?(a=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},f._ssrRegister=a):e&&(a=e),a){var s=f.functional,l=s?f.render:f.beforeCreate;s?f.render=function(t,n){return a.call(n),l(t,n)}:f.beforeCreate=l?[].concat(l,a):[a]}return{esModule:i,exports:u,options:f}}},10:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function t(n,e){return!(!n||!n.$el)&&(0!==n._uid&&(n.$el.classList.contains(e)?n:t(n.$parent,e)))};n.default=r,t.exports=n.default},11:function(t,n,e){var r=e(9),o=e(17);t.exports=e(3)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},12:function(t,n,e){var r=e(22)("wks"),o=e(20),i=e(2).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},13:function(t,n,e){var r=e(6);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},14:function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},15:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},153:function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e(67),i=r(o),u=e(10),c=r(u);n.default={name:"md-file",props:{value:String,id:String,name:String,disabled:Boolean,required:Boolean,placeholder:String,accept:String,multiple:Boolean},data:function(){return{filename:this.value}},watch:{value:function(){this.filename=this.value}},methods:{getMultipleName:function(t){var n=[];return[].concat((0,i.default)(t)).forEach((function(t){n.push(t.name)})),n.join(", ")},openPicker:function(){this.disabled||(this.$refs.fileInput.click(),this.$refs.textInput.$el.focus())},onFileSelected:function(t){var n=t.target.files||t.dataTransfer.files;n?n.length>1?this.filename=this.getMultipleName(n):1===n.length?this.filename=n[0].name:this.filename=null:this.filename=t.target.value.split("\\").pop(),this.$emit("selected",n||t.target.value),this.$emit("input",this.filename)}},mounted:function(){if(this.parentContainer=(0,c.default)(this.$parent,"md-input-container"),!this.parentContainer)throw this.$destroy(),new Error("You should wrap the md-file in a md-input-container");this.parentContainer.hasFile=!0},beforeDestroy:function(){this.parentContainer.hasFile=!1}},t.exports=n.default},16:function(t,n,e){var r=e(2),o=e(4),i=e(28),u=e(11),c=function(t,n,e){var f,a,s,l=t&c.F,p=t&c.G,d=t&c.S,v=t&c.P,h=t&c.B,y=t&c.W,x=p?o:o[n]||(o[n]={}),m=x.prototype,_=p?r:d?r[n]:(r[n]||{}).prototype;p&&(e=n);for(f in e)(a=!l&&_&&void 0!==_[f])&&f in x||(s=a?_[f]:e[f],x[f]=p&&"function"!=typeof _[f]?e[f]:h&&a?i(s,r):y&&_[f]==s?(function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n})(s):v&&"function"==typeof s?i(Function.call,s):s,v&&((x.virtual||(x.virtual={}))[f]=s,t&c.R&&m&&!m[f]&&u(m,f,s)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},17:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},18:function(t,n,e){var r=e(31),o=e(21);t.exports=Object.keys||function(t){return r(t,o)}},19:function(t,n,e){var r=e(22)("keys"),o=e(20);t.exports=function(t){return r[t]||(r[t]=o(t))}},2:function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},20:function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},21:function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},22:function(t,n,e){var r=e(2),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},23:function(t,n,e){var r=e(14);t.exports=function(t){return Object(r(t))}},24:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},248:function(t,n){},25:function(t,n,e){var r=e(6),o=e(2).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},26:function(t,n,e){var r=e(24);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},27:function(t,n,e){var r=e(6);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},273:function(t,n){t.exports=""},28:function(t,n,e){var r=e(33);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},29:function(t,n,e){var r=e(15),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},3:function(t,n,e){t.exports=!e(5)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},30:function(t,n,e){t.exports=!e(3)&&!e(5)((function(){return 7!=Object.defineProperty(e(25)("div"),"a",{get:function(){return 7}}).a}))},31:function(t,n,e){var r=e(8),o=e(7),i=e(34)(!1),u=e(19)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),f=0,a=[];for(e in c)e!=u&&r(c,e)&&a.push(e);for(;n.length>f;)r(c,e=n[f++])&&(~i(a,e)||a.push(e));return a}},32:function(t,n){t.exports={}},322:function(t,n,e){function r(t){e(248)}var o=e(0)(e(153),e(413),r,null,null);t.exports=o.exports},33:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},34:function(t,n,e){var r=e(7),o=e(29),i=e(35);t.exports=function(t){return function(n,e,u){var c,f=r(n),a=o(f.length),s=i(u,a);if(t&&e!=e){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===e)return t||s||0;return!t&&-1}}},35:function(t,n,e){var r=e(15),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):i(t,n)}},37:function(t,n,e){var r=e(9).f,o=e(8),i=e(12)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},39:function(t,n){t.exports=!0},4:function(t,n){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},413:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"md-file",on:{click:t.openPicker}},[e("md-input",{ref:"textInput",attrs:{readonly:"",required:t.required,placeholder:t.placeholder,disabled:t.disabled},model:{value:t.filename,callback:function(n){t.filename=n},expression:"filename"}}),t._v(" "),e("md-icon",[t._v("attach_file")]),t._v(" "),e("input",{ref:"fileInput",attrs:{type:"file",id:t.id,name:t.name,disabled:t.disabled,multiple:t.multiple,accept:t.accept},on:{change:t.onFileSelected}})],1)},staticRenderFns:[]}},42:function(t,n,e){"use strict";var r=e(39),o=e(16),i=e(47),u=e(11),c=e(8),f=e(32),a=e(53),s=e(37),l=e(55),p=e(12)("iterator"),d=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,n,e,h,y,x,m){a(e,n,h);var _,g,b,O=function(t){if(!d&&t in M)return M[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},w=n+" Iterator",j="values"==y,S=!1,M=t.prototype,P=M[p]||M["@@iterator"]||y&&M[y],E=P||O(y),A=y?j?O("entries"):E:void 0,C="Array"==n?M.entries||P:P;if(C&&(b=l(C.call(new t)))!==Object.prototype&&(s(b,w,!0),r||c(b,p)||u(b,p,v)),j&&P&&"values"!==P.name&&(S=!0,E=function(){return P.call(this)}),r&&!m||!d&&!S&&M[p]||u(M,p,E),f[n]=E,f[w]=v,y)if(_={values:j?E:O("values"),keys:x?E:O("keys"),entries:A},m)for(g in _)g in M||i(M,g,_[g]);else o(o.P+o.F*(d||S),n,_);return _}},44:function(t,n,e){var r=e(13),o=e(54),i=e(21),u=e(19)("IE_PROTO"),c=function(){},f=function(){var t,n=e(25)("iframe"),r=i.length;for(n.style.display="none",e(52).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),f=t.F;r--;)delete f.prototype[i[r]];return f()};t.exports=Object.create||function(t,n){var e;return null!==t?(c.prototype=r(t),e=new c,c.prototype=null,e[u]=t):e=f(),void 0===n?e:o(e,n)}},456:function(t,n,e){t.exports=e(90)},47:function(t,n,e){t.exports=e(11)},49:function(t,n,e){"use strict";var r=e(56)(!0);e(42)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})}))},5:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},52:function(t,n,e){t.exports=e(2).document&&document.documentElement},53:function(t,n,e){"use strict";var r=e(44),o=e(17),i=e(37),u={};e(11)(u,e(12)("iterator"),(function(){return this})),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},54:function(t,n,e){var r=e(9),o=e(13),i=e(18);t.exports=e(3)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),c=u.length,f=0;c>f;)r.f(t,e=u[f++],n[e]);return t}},55:function(t,n,e){var r=e(8),o=e(23),i=e(19)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},56:function(t,n,e){var r=e(15),o=e(14);t.exports=function(t){return function(n,e){var i,u,c=String(o(n)),f=r(e),a=c.length;return f<0||f>=a?t?"":void 0:(i=c.charCodeAt(f),i<55296||i>56319||f+1===a||(u=c.charCodeAt(f+1))<56320||u>57343?t?c.charAt(f):i:t?c.slice(f,f+2):u-56320+(i-55296<<10)+65536)}}},57:function(t,n,e){var r=e(60),o=e(12)("iterator"),i=e(32);t.exports=e(4).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},6:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},60:function(t,n,e){var r=e(24),o=e(12)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,n){try{return t[n]}catch(t){}};t.exports=function(t){var n,e,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=u(n=Object(t),o))?e:i?r(n):"Object"==(c=r(n))&&"function"==typeof n.callee?"Arguments":c}},67:function(t,n,e){"use strict";n.__esModule=!0;var r=e(69),o=(function(t){return t&&t.__esModule?t:{default:t}})(r);n.default=function(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return(0,o.default)(t)}},69:function(t,n,e){t.exports={default:e(70),__esModule:!0}},7:function(t,n,e){var r=e(26),o=e(14);t.exports=function(t){return r(o(t))}},70:function(t,n,e){e(49),e(78),t.exports=e(4).Array.from},72:function(t,n,e){"use strict";var r=e(9),o=e(17);t.exports=function(t,n,e){n in t?r.f(t,n,o(0,e)):t[n]=e}},73:function(t,n,e){var r=e(32),o=e(12)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},74:function(t,n,e){var r=e(13);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},75:function(t,n,e){var r=e(12)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:e=!0}},i[r]=function(){return u},t(i)}catch(t){}return e}},78:function(t,n,e){"use strict";var r=e(28),o=e(16),i=e(23),u=e(74),c=e(73),f=e(29),a=e(72),s=e(57);o(o.S+o.F*!e(75)((function(t){Array.from(t)})),"Array",{from:function(t){var n,e,o,l,p=i(t),d="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,y=void 0!==h,x=0,m=s(p);if(y&&(h=r(h,v>2?arguments[2]:void 0,2)),void 0==m||d==Array&&c(m))for(n=f(p.length),e=new d(n);n>x;x++)a(e,x,y?h(p[x],x):p[x]);else for(l=m.call(p),e=new d;!(o=l.next()).done;x++)a(e,x,y?u(l,h,[o.value,x],!0):o.value);return e.length=x,e}})},8:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},9:function(t,n,e){var r=e(13),o=e(30),i=e(27),u=Object.defineProperty;n.f=e(3)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},90:function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){t.component("md-file",u.default),t.material.styles.push(f.default)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=o;var i=e(322),u=r(i),c=e(273),f=r(c);t.exports=n.default}})}));