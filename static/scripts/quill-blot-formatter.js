!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("Quill")):"function"==typeof define&&define.amd?define(["Quill"],t):"object"==typeof exports?exports.QuillBlotFormatter=t(require("Quill")):e.QuillBlotFormatter=t(e.Quill)}(self,(function(e){return(()=>{"use strict";var t={272:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(664)),o=i(n(646));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}i(n(376)),i(n(432));var c=function(e,t){return t},s=function(){function e(t){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(this,e),u(this,"quill",void 0),u(this,"options",void 0),u(this,"currentSpec",void 0),u(this,"specs",void 0),u(this,"overlay",void 0),u(this,"actions",void 0),u(this,"onClick",(function(){n.hide()})),this.quill=t,this.options=(0,r.default)(o.default,i,{arrayMerge:c}),this.currentSpec=null,this.actions=[],this.overlay=document.createElement("div"),this.overlay.classList.add(this.options.overlay.className),this.overlay.onkeydown=function(e){return e.preventDefault()},this.options.overlay.style&&Object.assign(this.overlay.style,this.options.overlay.style),document.execCommand("enableObjectResizing",!1,"false"),this.quill.root.parentNode.style.position=this.quill.root.parentNode.style.position||"relative",this.quill.root.addEventListener("click",this.onClick),this.specs=this.options.specs.map((function(e){return new e(n)})),this.specs.forEach((function(e){return e.init()}))}var t,n;return t=e,(n=[{key:"show",value:function(e){this.currentSpec=e,this.currentSpec.setSelection(),this.setUserSelect("none"),this.quill.root.parentNode.appendChild(this.overlay),this.repositionOverlay(),this.createActions(e)}},{key:"hide",value:function(){this.currentSpec&&(this.currentSpec.onHide(),this.currentSpec=null,this.quill.root.parentNode.removeChild(this.overlay),this.overlay.style.setProperty("display","none"),this.setUserSelect(""),this.destroyActions())}},{key:"update",value:function(){this.repositionOverlay(),this.actions.forEach((function(e){return e.onUpdate()}))}},{key:"createActions",value:function(e){var t=this;this.actions=e.getActions().map((function(e){var n=new e(t);return n.onCreate(),n}))}},{key:"destroyActions",value:function(){this.actions.forEach((function(e){return e.onDestroy()})),this.actions=[]}},{key:"repositionOverlay",value:function(){if(this.currentSpec){var e=this.currentSpec.getOverlayElement();if(e){var t=this.quill.root.parentNode,n=e.getBoundingClientRect(),r=t.getBoundingClientRect();Object.assign(this.overlay.style,{display:"block",left:"".concat(n.left-r.left-1+t.scrollLeft,"px"),top:"".concat(n.top-r.top+t.scrollTop,"px"),width:"".concat(n.width,"px"),height:"".concat(n.height,"px")})}}}},{key:"setUserSelect",value:function(e){var t=this;["userSelect","mozUserSelect","webkitUserSelect","msUserSelect"].forEach((function(n){t.quill.root.style.setProperty(n,e),document.documentElement&&document.documentElement.style.setProperty(n,e)}))}}])&&l(t.prototype,n),e}();t.default=s},646:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i(n(432));var r=i(n(903)),o=i(n(826));function i(e){return e&&e.__esModule?e:{default:e}}var a={specs:[r.default,o.default],overlay:{className:"blot-formatter__overlay",style:{position:"absolute",boxSizing:"border-box",border:"1px dashed #444"}},align:{attribute:"data-align",aligner:{applyStyle:!0},icons:{left:'\n        <svg viewbox="0 0 18 18">\n          <line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"></line>\n          <line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"></line>\n          <line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"></line>\n        </svg>\n      ',center:'\n        <svg viewbox="0 0 18 18">\n           <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>\n          <line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"></line>\n          <line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"></line>\n        </svg>\n      ',right:'\n        <svg viewbox="0 0 18 18">\n          <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>\n          <line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"></line>\n          <line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"></line>\n        </svg>\n      '},toolbar:{allowDeselect:!0,mainClassName:"blot-formatter__toolbar",mainStyle:{position:"absolute",top:"-12px",right:"0",left:"0",height:"0",minWidth:"100px",font:"12px/1.0 Arial, Helvetica, sans-serif",textAlign:"center",color:"#333",boxSizing:"border-box",cursor:"default",zIndex:"1"},buttonClassName:"blot-formatter__toolbar-button",addButtonSelectStyle:!0,buttonStyle:{display:"inline-block",width:"24px",height:"24px",background:"white",border:"1px solid #999",verticalAlign:"middle"},svgStyle:{display:"inline-block",width:"24px",height:"24px",background:"white",border:"1px solid #999",verticalAlign:"middle"}}},resize:{handleClassName:"blot-formatter__resize-handle",handleStyle:{position:"absolute",height:"24px",width:"24px",borderRadius:"50%",backgroundColor:"white",border:"3px solid #ccc",boxSizing:"border-box",opacity:"0.80",touchAction:"none"}}};t.default=a},376:(e,t,n)=>{var r;function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,(r=n(272))&&r.__esModule;var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(this,"formatter",void 0),this.formatter=t}var t,n;return t=e,(n=[{key:"onCreate",value:function(){}},{key:"onDestroy",value:function(){}},{key:"onUpdate",value:function(){}}])&&o(t.prototype,n),e}();t.default=i},684:(e,t,n)=>{function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(581));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?s(e):t}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(d,e);var t,n,r,i,p=(r=d,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(r);if(i){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return c(this,e)});function d(){var e;a(this,d);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return y(s(e=p.call.apply(p,[this].concat(n))),"onKeyUp",(function(t){if(e.formatter.currentSpec&&(46===t.keyCode||8===t.keyCode)){var n=o.default.find(e.formatter.currentSpec.getTargetElement());n&&n.deleteAt(0),e.formatter.hide()}})),e}return t=d,(n=[{key:"onCreate",value:function(){document.addEventListener("keyup",this.onKeyUp,!0),this.formatter.quill.root.addEventListener("input",this.onKeyUp,!0)}},{key:"onDestroy",value:function(){document.removeEventListener("keyup",this.onKeyUp),this.formatter.quill.root.removeEventListener("input",this.onKeyUp)}}])&&l(t.prototype,n),d}(i(n(376)).default);t.default=p},135:(e,t,n)=>{function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(376));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?c(e):t}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}i(n(272));var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(y,e);var t,n,r,o,i=(r=y,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=s(r);if(o){var n=s(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return u(this,e)});function y(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),f(c(t=i.call(this,e)),"topLeftHandle",void 0),f(c(t),"topRightHandle",void 0),f(c(t),"bottomRightHandle",void 0),f(c(t),"bottomLeftHandle",void 0),f(c(t),"dragHandle",void 0),f(c(t),"dragStartX",void 0),f(c(t),"preDragWidth",void 0),f(c(t),"targetRatio",void 0),f(c(t),"onMouseDown",(function(e){if(e.target instanceof HTMLElement&&(t.dragHandle=e.target,t.setCursor(t.dragHandle.style.cursor),t.formatter.currentSpec)){var n=t.formatter.currentSpec.getTargetElement();if(n){var r=n.getBoundingClientRect();t.dragStartX=e.clientX,t.preDragWidth=r.width,t.targetRatio=r.height/r.width,document.addEventListener("pointermove",t.onDrag),document.addEventListener("pointerup",t.onMouseUp)}}})),f(c(t),"onDrag",(function(e){if(t.formatter.currentSpec){var n=t.formatter.currentSpec.getTargetElement();if(n){var r,o=e.clientX-t.dragStartX;r=t.dragHandle===t.topLeftHandle||t.dragHandle===t.bottomLeftHandle?Math.round(t.preDragWidth-o):Math.round(t.preDragWidth+o);var i=t.targetRatio*r;n.setAttribute("width","".concat(r)),n.setAttribute("height","".concat(i)),t.formatter.update()}}})),f(c(t),"onMouseUp",(function(){t.setCursor(""),document.removeEventListener("pointermove",t.onDrag),document.removeEventListener("pointerup",t.onMouseUp)})),t.topLeftHandle=t.createHandle("top-left","nwse-resize"),t.topRightHandle=t.createHandle("top-right","nesw-resize"),t.bottomRightHandle=t.createHandle("bottom-right","nwse-resize"),t.bottomLeftHandle=t.createHandle("bottom-left","nesw-resize"),t.dragHandle=null,t.dragStartX=0,t.preDragWidth=0,t.targetRatio=0,t}return t=y,(n=[{key:"onCreate",value:function(){this.formatter.overlay.appendChild(this.topLeftHandle),this.formatter.overlay.appendChild(this.topRightHandle),this.formatter.overlay.appendChild(this.bottomRightHandle),this.formatter.overlay.appendChild(this.bottomLeftHandle),this.repositionHandles(this.formatter.options.resize.handleStyle)}},{key:"onDestroy",value:function(){this.setCursor(""),this.formatter.overlay.removeChild(this.topLeftHandle),this.formatter.overlay.removeChild(this.topRightHandle),this.formatter.overlay.removeChild(this.bottomRightHandle),this.formatter.overlay.removeChild(this.bottomLeftHandle)}},{key:"createHandle",value:function(e,t){var n=document.createElement("div");return n.classList.add(this.formatter.options.resize.handleClassName),n.setAttribute("data-position",e),n.style.cursor=t,this.formatter.options.resize.handleStyle&&Object.assign(n.style,this.formatter.options.resize.handleStyle),n.addEventListener("dragstart",(function(){return!1})),n.addEventListener("pointerdown",this.onMouseDown,!1),n}},{key:"repositionHandles",value:function(e){var t="0px",n="0px";e&&(e.width&&(t="".concat(-parseFloat(e.width)/2,"px")),e.height&&(n="".concat(-parseFloat(e.height)/2,"px"))),Object.assign(this.topLeftHandle.style,{left:t,top:n}),Object.assign(this.topRightHandle.style,{right:t,top:n}),Object.assign(this.bottomRightHandle.style,{right:t,bottom:n}),Object.assign(this.bottomLeftHandle.style,{left:t,bottom:n})}},{key:"setCursor",value:function(e){if(document.body&&(document.body.style.cursor=e),this.formatter.currentSpec){var t=this.formatter.currentSpec.getOverlayElement();t&&(t.style.cursor=e)}}}])&&a(t.prototype,n),y}(o.default);t.default=y},736:(e,t,n)=>{function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(n(376)),i=(l(n(272)),l(n(178))),a=(n(856),n(768),l(n(488)));function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(d,e);var t,n,r,o,l=(r=d,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return s(this,e)});function d(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),p(f(t=l.call(this,e)),"toolbar",void 0),p(f(t),"aligner",void 0),t.aligner=new i.default(e.options.align),t.toolbar=new a.default,t}return t=d,(n=[{key:"onCreate",value:function(){var e=this.toolbar.create(this.formatter,this.aligner);this.formatter.overlay.appendChild(e)}},{key:"onDestroy",value:function(){var e=this.toolbar.getElement();e&&(this.formatter.overlay.removeChild(e),this.toolbar.destroy())}}])&&u(t.prototype,n),d}(o.default);t.default=d},856:()=>{},178:(e,t,n)=>{function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(856);var i="left",a="center",l="right",u=function(){function e(t){var n,r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(this,"alignments",void 0),o(this,"alignAttribute",void 0),o(this,"applyStyle",void 0),this.applyStyle=t.aligner.applyStyle,this.alignAttribute=t.attribute,this.alignments=(o(n={},i,{name:i,icon:t.icons.left,apply:function(e){r.setAlignment(e,i),r.setStyle(e,"inline","left","0 1em 1em 0")}}),o(n,a,{name:a,icon:t.icons.center,apply:function(e){r.setAlignment(e,a),r.setStyle(e,"block",null,"auto")}}),o(n,l,{name:l,icon:t.icons.right,apply:function(e){r.setAlignment(e,l),r.setStyle(e,"inline","right","0 0 1em 1em")}}),n)}var t,n;return t=e,(n=[{key:"getAlignments",value:function(){var e=this;return Object.keys(this.alignments).map((function(t){return e.alignments[t]}))}},{key:"clear",value:function(e){e.removeAttribute(this.alignAttribute),this.setStyle(e,null,null,null)}},{key:"isAligned",value:function(e,t){return e.getAttribute(this.alignAttribute)===t.name}},{key:"setAlignment",value:function(e,t){e.setAttribute(this.alignAttribute,t)}},{key:"setStyle",value:function(e,t,n,r){this.applyStyle&&(e.style.setProperty("display",t),e.style.setProperty("float",n),e.style.setProperty("margin",r))}}])&&r(t.prototype,n),e}();t.default=u},488:(e,t,n)=>{var r;function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(768),n(856),(r=n(272))&&r.__esModule;var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"toolbar",void 0),i(this,"buttons",void 0),this.toolbar=null,this.buttons=[]}var t,n;return t=e,(n=[{key:"create",value:function(e,t){var n=document.createElement("div");return n.classList.add(e.options.align.toolbar.mainClassName),this.addToolbarStyle(e,n),this.addButtons(e,n,t),this.toolbar=n,this.toolbar}},{key:"destroy",value:function(){this.toolbar=null,this.buttons=[]}},{key:"getElement",value:function(){return this.toolbar}},{key:"addToolbarStyle",value:function(e,t){e.options.align.toolbar.mainStyle&&Object.assign(t.style,e.options.align.toolbar.mainStyle)}},{key:"addButtonStyle",value:function(e,t,n){n.options.align.toolbar.buttonStyle&&(Object.assign(e.style,n.options.align.toolbar.buttonStyle),t>0&&(e.style.borderLeftWidth="0")),n.options.align.toolbar.svgStyle&&Object.assign(e.children[0].style,n.options.align.toolbar.svgStyle)}},{key:"addButtons",value:function(e,t,n){var r=this;n.getAlignments().forEach((function(o,i){var a=document.createElement("span");a.classList.add(e.options.align.toolbar.buttonClassName),a.innerHTML=o.icon,a.addEventListener("click",(function(){r.onButtonClick(a,e,o,n)})),r.preselectButton(a,o,e,n),r.addButtonStyle(a,i,e),r.buttons.push(a),t.appendChild(a)}))}},{key:"preselectButton",value:function(e,t,n,r){if(n.currentSpec){var o=n.currentSpec.getTargetElement();o&&r.isAligned(o,t)&&this.selectButton(n,e)}}},{key:"onButtonClick",value:function(e,t,n,r){if(t.currentSpec){var o=t.currentSpec.getTargetElement();o&&this.clickButton(e,o,t,n,r)}}},{key:"clickButton",value:function(e,t,n,r,o){var i=this;this.buttons.forEach((function(e){i.deselectButton(n,e)})),o.isAligned(t,r)?n.options.align.toolbar.allowDeselect?o.clear(t):this.selectButton(n,e):(this.selectButton(n,e),r.apply(t)),n.update()}},{key:"selectButton",value:function(e,t){t.classList.add("is-selected"),e.options.align.toolbar.addButtonSelectStyle&&t.style.setProperty("filter","invert(20%)")}},{key:"deselectButton",value:function(e,t){t.classList.remove("is-selected"),e.options.align.toolbar.addButtonSelectStyle&&t.style.removeProperty("filter")}}])&&o(t.prototype,n),e}();t.default=a},768:(e,t,n)=>{var r;n(856),(r=n(272))&&r.__esModule},590:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DefaultOptions",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Action",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"AlignAction",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"DefaultAligner",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"DefaultToolbar",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"DeleteAction",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"ResizeAction",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"BlotSpec",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"ImageSpec",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"UnclickableBlotSpec",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"IframeVideoSpec",{enumerable:!0,get:function(){return d.default}});var r=b(n(646)),o=b(n(272)),i=b(n(376)),a=b(n(736)),l=b(n(178)),u=b(n(488)),c=b(n(684)),s=b(n(135)),f=b(n(432)),y=b(n(903)),p=b(n(777)),d=b(n(826));function b(e){return e&&e.__esModule?e:{default:e}}},432:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a(n(272)),a(n(376));var r=a(n(736)),o=a(n(135)),i=a(n(684));function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=void 0,(n="formatter")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this.formatter=t}var t,n;return t=e,(n=[{key:"init",value:function(){}},{key:"getActions",value:function(){return[r.default,o.default,i.default]}},{key:"getTargetElement",value:function(){return null}},{key:"getOverlayElement",value:function(){return this.getTargetElement()}},{key:"setSelection",value:function(){this.formatter.quill.setSelection(null)}},{key:"onHide",value:function(){}}])&&l(t.prototype,n),e}();t.default=u},826:(e,t,n)=>{function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(777));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}i(n(272));var c=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=u(t);if(n){var o=u(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return l(this,e)});function o(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),r.call(this,e,"iframe.ql-video")}return o}(o.default);t.default=c},903:(e,t,n)=>{function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(432));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?c(e):t}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}i(n(272));var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(y,e);var t,n,r,o,i=(r=y,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=s(r);if(o){var n=s(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return u(this,e)});function y(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),f(c(t=i.call(this,e)),"img",void 0),f(c(t),"onClick",(function(e){var n=e.target;n instanceof HTMLElement&&"IMG"===n.tagName&&(t.img=n,t.formatter.show(c(t)))})),t.img=null,t}return t=y,(n=[{key:"init",value:function(){this.formatter.quill.root.addEventListener("click",this.onClick)}},{key:"getTargetElement",value:function(){return this.img}},{key:"onHide",value:function(){this.img=null}}])&&a(t.prototype,n),y}(o.default);t.default=y},777:(e,t,n)=>{function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(432));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?c(e):t}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}i(n(272));var y="data-blot-formatter-unclickable-bound",p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(p,e);var t,n,r,o,i=(r=p,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=s(r);if(o){var n=s(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return u(this,e)});function p(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),f(c(n=i.call(this,e)),"selector",void 0),f(c(n),"unclickable",void 0),f(c(n),"nextUnclickable",void 0),f(c(n),"proxyImage",void 0),f(c(n),"onTextChange",(function(){Array.from(document.querySelectorAll("".concat(n.selector,":not([").concat(y,"])"))).forEach((function(e){e.setAttribute(y,"true"),e.addEventListener("pointerenter",n.onMouseEnter)}))})),f(c(n),"onMouseEnter",(function(e){var t=e.target;t instanceof HTMLElement&&(n.nextUnclickable=t,n.repositionProxyImage(n.nextUnclickable))})),f(c(n),"onProxyImageClick",(function(){n.unclickable=n.nextUnclickable,n.nextUnclickable=null,n.formatter.show(c(n)),n.hideProxyImage()})),n.selector=t,n.unclickable=null,n.nextUnclickable=null,n}return t=p,(n=[{key:"init",value:function(){document.body&&document.body.appendChild(this.createProxyImage()),this.hideProxyImage(),this.proxyImage.addEventListener("click",this.onProxyImageClick),this.formatter.quill.on("text-change",this.onTextChange)}},{key:"getTargetElement",value:function(){return this.unclickable}},{key:"getOverlayElement",value:function(){return this.unclickable}},{key:"onHide",value:function(){this.hideProxyImage(),this.nextUnclickable=null,this.unclickable=null}},{key:"createProxyImage",value:function(){var e=document.createElement("canvas"),t=e.getContext("2d");return t.globalAlpha=0,t.fillRect(0,0,1,1),this.proxyImage=document.createElement("img"),this.proxyImage.src=e.toDataURL("image/png"),this.proxyImage.classList.add("blot-formatter__proxy-image"),Object.assign(this.proxyImage.style,{position:"absolute",margin:"0"}),this.proxyImage}},{key:"hideProxyImage",value:function(){Object.assign(this.proxyImage.style,{display:"none"})}},{key:"repositionProxyImage",value:function(e){var t=e.getBoundingClientRect();Object.assign(this.proxyImage.style,{display:"block",left:"".concat(t.left+window.pageXOffset,"px"),top:"".concat(t.top+window.pageYOffset,"px"),width:"".concat(t.width,"px"),height:"".concat(t.height,"px")})}}])&&a(t.prototype,n),p}(o.default);t.default=p},664:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===o}(e)}(e)},o="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function i(e,t){return!1!==t.clone&&t.isMergeableObject(e)?l((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function a(e,t,n){return e.concat(t).map((function(e){return i(e,n)}))}function l(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||a,n.isMergeableObject=n.isMergeableObject||r;var o=Array.isArray(t);return o===Array.isArray(e)?o?n.arrayMerge(e,t,n):function(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach((function(t){r[t]=i(e[t],n)})),Object.keys(t).forEach((function(o){n.isMergeableObject(t[o])&&e[o]?r[o]=l(e[o],t[o],n):r[o]=i(t[o],n)})),r}(e,t,n):i(t,n)}l.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,n){return l(e,n,t)}),{})};const u=l},581:t=>{t.exports=e}},n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(590)})()}));