/*!
* Vue Material v0.7.1
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.VueMaterial=r():e.VueMaterial=r()})(this,(function(){return (function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var t={};return r.m=e,r.c=t,r.i=function(e){return e},r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="/",r(r.s=464)})({0:function(e,r){e.exports=function(e,r,t,n,o){var s,d=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(s=e,d=e.default);var i="function"==typeof d?d.options:d;r&&(i.render=r.render,i.staticRenderFns=r.staticRenderFns),n&&(i._scopeId=n);var u;if(o?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},i._ssrRegister=u):t&&(u=t),u){var c=i.functional,m=c?i.render:i.beforeCreate;c?i.render=function(e,r){return u.call(r),m(e,r)}:i.beforeCreate=m?[].concat(m,u):[u]}return{esModule:s,exports:d,options:i}}},1:function(e,r,t){"use strict";function n(e){if(!e)return null;var r=e.mdTheme;return r||"md-theme"!==e.$options._componentTag||(r=e.mdName),r||n(e.$parent)}Object.defineProperty(r,"__esModule",{value:!0}),r.default={props:{mdTheme:String},computed:{mdEffectiveTheme:function(){return n(this)||this.$material.currentTheme},themeClass:function(){return this.$material.prefix+this.mdEffectiveTheme}},watch:{mdTheme:function(e){this.$material.useTheme(e)}},beforeMount:function(){var e=this.mdTheme;this.$material.useTheme(e||"default")}},e.exports=r.default},173:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(1),o=(function(e){return e&&e.__esModule?e:{default:e}})(n);r.default={name:"md-progress",props:{mdIndeterminate:Boolean,mdProgress:{type:Number,default:0}},mixins:[o.default],computed:{classes:function(){return{"md-indeterminate":this.mdIndeterminate}},styles:function(){if(!this.mdIndeterminate)return{width:this.mdProgress+"%"}}}},e.exports=r.default},238:function(e,r){},280:function(e,r){e.exports=".THEME_NAME.md-progress{background-color:PRIMARY-COLOR-0.38}.THEME_NAME.md-progress:not(.md-indeterminate) .md-progress-track{background-color:PRIMARY-COLOR}.THEME_NAME.md-progress .md-progress-track:after,.THEME_NAME.md-progress .md-progress-track:before{background-color:PRIMARY-COLOR}.THEME_NAME.md-progress.md-accent{background-color:ACCENT-COLOR-0.38}.THEME_NAME.md-progress.md-accent:not(.md-indeterminate) .md-progress-track{background-color:ACCENT-COLOR}.THEME_NAME.md-progress.md-accent .md-progress-track:after,.THEME_NAME.md-progress.md-accent .md-progress-track:before{background-color:ACCENT-COLOR}.THEME_NAME.md-progress.md-warn{background-color:WARN-COLOR-0.38}.THEME_NAME.md-progress.md-warn:not(.md-indeterminate) .md-progress-track{background-color:WARN-COLOR}.THEME_NAME.md-progress.md-warn .md-progress-track:after,.THEME_NAME.md-progress.md-warn .md-progress-track:before{background-color:WARN-COLOR}\n"},342:function(e,r,t){function n(e){t(238)}var o=t(0)(t(173),t(393),n,null,null);e.exports=o.exports},393:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("transition",{attrs:{name:"md-progress",appear:""}},[t("div",{staticClass:"md-progress",class:[e.themeClass,e.classes]},[t("div",{staticClass:"md-progress-track",style:e.styles})])])},staticRenderFns:[]}},464:function(e,r,t){e.exports=t(98)},98:function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){e.component("md-progress",d.default),e.material.styles.push(i.default)}Object.defineProperty(r,"__esModule",{value:!0}),r.default=o;var s=t(342),d=n(s),a=t(280),i=n(a);e.exports=r.default}})}));