(()=>{var A={303:function(A,e){var t,o,n;!function(i,s){"use strict";o=[],void 0===(n="function"==typeof(t=function(){return function(A){function e(A){A.icon=Object.prototype.hasOwnProperty.call(A,"icon")?A.icon:"",A.visible=Object.prototype.hasOwnProperty.call(A,"visible")?A.visible:"hover",A.placement=Object.prototype.hasOwnProperty.call(A,"placement")?A.placement:"right",A.ariaLabel=Object.prototype.hasOwnProperty.call(A,"ariaLabel")?A.ariaLabel:"Anchor",A.class=Object.prototype.hasOwnProperty.call(A,"class")?A.class:"",A.base=Object.prototype.hasOwnProperty.call(A,"base")?A.base:"",A.truncate=Object.prototype.hasOwnProperty.call(A,"truncate")?Math.floor(A.truncate):64,A.titleText=Object.prototype.hasOwnProperty.call(A,"titleText")?A.titleText:""}function t(A){var e;if("string"==typeof A||A instanceof String)e=[].slice.call(document.querySelectorAll(A));else{if(!(Array.isArray(A)||A instanceof NodeList))throw new TypeError("The selector provided to AnchorJS was invalid.");e=[].slice.call(A)}return e}this.options=A||{},this.elements=[],e(this.options),this.isTouchDevice=function(){return Boolean("ontouchstart"in window||window.TouchEvent||window.DocumentTouch&&document instanceof DocumentTouch)},this.add=function(A){var o,n,i,s,a,r,c,l,h,u,d,p,w=[];if(e(this.options),"touch"===(d=this.options.visible)&&(d=this.isTouchDevice()?"always":"hover"),A||(A="h2, h3, h4, h5, h6"),0===(o=t(A)).length)return this;for(function(){if(null===document.head.querySelector("style.anchorjs")){var A,e=document.createElement("style");e.className="anchorjs",e.appendChild(document.createTextNode("")),void 0===(A=document.head.querySelector('[rel="stylesheet"],style'))?document.head.appendChild(e):document.head.insertBefore(e,A),e.sheet.insertRule(".anchorjs-link{opacity:0;text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}",e.sheet.cssRules.length),e.sheet.insertRule(":hover>.anchorjs-link,.anchorjs-link:focus{opacity:1}",e.sheet.cssRules.length),e.sheet.insertRule("[data-anchorjs-icon]::after{content:attr(data-anchorjs-icon)}",e.sheet.cssRules.length),e.sheet.insertRule('@font-face{font-family:anchorjs-icons;src:url(data:n/a;base64,AAEAAAALAIAAAwAwT1MvMg8yG2cAAAE4AAAAYGNtYXDp3gC3AAABpAAAAExnYXNwAAAAEAAAA9wAAAAIZ2x5ZlQCcfwAAAH4AAABCGhlYWQHFvHyAAAAvAAAADZoaGVhBnACFwAAAPQAAAAkaG10eASAADEAAAGYAAAADGxvY2EACACEAAAB8AAAAAhtYXhwAAYAVwAAARgAAAAgbmFtZQGOH9cAAAMAAAAAunBvc3QAAwAAAAADvAAAACAAAQAAAAEAAHzE2p9fDzz1AAkEAAAAAADRecUWAAAAANQA6R8AAAAAAoACwAAAAAgAAgAAAAAAAAABAAADwP/AAAACgAAA/9MCrQABAAAAAAAAAAAAAAAAAAAAAwABAAAAAwBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAMCQAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAg//0DwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAAIAAAACgAAxAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADAAAAAIAAgAAgAAACDpy//9//8AAAAg6cv//f///+EWNwADAAEAAAAAAAAAAAAAAAAACACEAAEAAAAAAAAAAAAAAAAxAAACAAQARAKAAsAAKwBUAAABIiYnJjQ3NzY2MzIWFxYUBwcGIicmNDc3NjQnJiYjIgYHBwYUFxYUBwYGIwciJicmNDc3NjIXFhQHBwYUFxYWMzI2Nzc2NCcmNDc2MhcWFAcHBgYjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAAADACWAAEAAAAAAAEACAAAAAEAAAAAAAIAAwAIAAEAAAAAAAMACAAAAAEAAAAAAAQACAAAAAEAAAAAAAUAAQALAAEAAAAAAAYACAAAAAMAAQQJAAEAEAAMAAMAAQQJAAIABgAcAAMAAQQJAAMAEAAMAAMAAQQJAAQAEAAMAAMAAQQJAAUAAgAiAAMAAQQJAAYAEAAMYW5jaG9yanM0MDBAAGEAbgBjAGgAbwByAGoAcwA0ADAAMABAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAH//wAP) format("truetype")}',e.sheet.cssRules.length)}}(),n=document.querySelectorAll("[id]"),i=[].map.call(n,(function(A){return A.id})),a=0;a<o.length;a++)if(this.hasAnchorJSLink(o[a]))w.push(a);else{if(o[a].hasAttribute("id"))s=o[a].getAttribute("id");else if(o[a].hasAttribute("data-anchor-id"))s=o[a].getAttribute("data-anchor-id");else{h=l=this.urlify(o[a].textContent),c=0;do{void 0!==r&&(h=l+"-"+c),r=i.indexOf(h),c+=1}while(-1!==r);r=void 0,i.push(h),o[a].setAttribute("id",h),s=h}(u=document.createElement("a")).className="anchorjs-link "+this.options.class,u.setAttribute("aria-label",this.options.ariaLabel),u.setAttribute("data-anchorjs-icon",this.options.icon),this.options.titleText&&(u.title=this.options.titleText),p=document.querySelector("base")?window.location.pathname+window.location.search:"",p=this.options.base||p,u.href=p+"#"+s,"always"===d&&(u.style.opacity="1"),""===this.options.icon&&(u.style.font="1em/1 anchorjs-icons","left"===this.options.placement&&(u.style.lineHeight="inherit")),"left"===this.options.placement?(u.style.position="absolute",u.style.marginLeft="-1em",u.style.paddingRight=".5em",o[a].insertBefore(u,o[a].firstChild)):(u.style.paddingLeft=".375em",o[a].appendChild(u))}for(a=0;a<w.length;a++)o.splice(w[a]-a,1);return this.elements=this.elements.concat(o),this},this.remove=function(A){for(var e,o,n=t(A),i=0;i<n.length;i++)(o=n[i].querySelector(".anchorjs-link"))&&(-1!==(e=this.elements.indexOf(n[i]))&&this.elements.splice(e,1),n[i].removeChild(o));return this},this.removeAll=function(){this.remove(this.elements)},this.urlify=function(A){var t=document.createElement("textarea");t.innerHTML=A,A=t.value;return this.options.truncate||e(this.options),A.trim().replace(/'/gi,"").replace(/[& +$,:;=?@"#{}|^~[`%!'<>\]./()*\\\n\t\b\v\u00A0]/g,"-").replace(/-{2,}/g,"-").substring(0,this.options.truncate).replace(/^-+|-+$/gm,"").toLowerCase()},this.hasAnchorJSLink=function(A){var e=A.firstChild&&(" "+A.firstChild.className+" ").indexOf(" anchorjs-link ")>-1,t=A.lastChild&&(" "+A.lastChild.className+" ").indexOf(" anchorjs-link ")>-1;return e||t||!1}}})?t.apply(e,o):t)||(A.exports=n)}()}},e={};function t(o){var n=e[o];if(void 0!==n)return n.exports;var i=e[o]={exports:{}};return A[o].call(i.exports,i,i.exports,t),i.exports}t.n=A=>{var e=A&&A.__esModule?()=>A.default:()=>A;return t.d(e,{a:e}),e},t.d=(A,e)=>{for(var o in e)t.o(e,o)&&!t.o(A,o)&&Object.defineProperty(A,o,{enumerable:!0,get:e[o]})},t.o=(A,e)=>Object.prototype.hasOwnProperty.call(A,e),(()=>{"use strict";var A=t(303),e=t.n(A);new class{constructor(A){this.anchors=A,this.onInit()}_addEventListeners(){window.addEventListener("load",(()=>{setTimeout((()=>this._onPageLoaded()),0)}))}_onPageLoaded(){this.removeLoadingClass()}onInit(){this.addAnchorsLinks(),this._addEventListeners()}addAnchorsLinks(){this.anchors.options={placement:"left"},this.anchors.add()}removeLoadingClass(){document.body.classList.remove("conventional-branch--loading")}}(new(e()))})()})();