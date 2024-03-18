(()=>{var n={208:(n,e,t)=>{"use strict";t.d(e,{A:()=>u});var r=t(601),i=t.n(r),o=t(314),a=t.n(o),s=t(417),p=t.n(s),c=new URL(t(280),t.b),d=a()(i()),l=p()(c);d.push([n.id,`body {\n    margin: 0;\n    padding: 0;\n    font-family: Montserrat;\n    background: rgb(248, 248, 248);\n    min-height: 100%;\n}\n\n.container,\n.header,\n.footer {\n    \n    min-width: 320px;\n    max-width: 380px;\n    margin: auto;\n}\n\n.header {\n    top: 0;\n    position: sticky;\n    width: 100%;\n    z-index: 10;\n    background: none; \n    border: none; \n    outline: none;\n\n}\n\n.header__inner {\n    background: rgb(248, 248, 248);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 0 auto;\n    padding: 0 10px; /* Уменьшаем отступы для адаптации */\n    max-width: 770px;\n}\n\n.header__logo {\n    width: 40px;\n    height: 40px;\n}\n\n.header__search {\n    background: url(${l}) no-repeat scroll 7px 7px;\n    font-size: 14px;\n    background-color: white;\n    padding-left: 40px;\n    border-radius: 24px;\n    border: none;\n    height: 36px;\n    flex: 1;\n}\n\n.header__notification {\n    width: 48px;\n    height: 48px;\n}\n\n/* Слайдер */\n.promo {\n    margin: 1rem 0;\n}\n\n.slider__title {\n    display: flex;\n    margin: 0px 16px 12px 16px;\n    font-size: 15px;\n    letter-spacing: 0.1px;\n    text-align: left;\n    font-family: Montserrat;\n    font-size: 14px;\n}\n\n.slide {\n    position: relative;\n    padding: 10px;\n}\n\n.slide img {\n    border-radius: 12px;\n    width: 100%; /* Используем ширину 100% для адаптивности */\n    max-width: 170px; /* Максимальная ширина для изображения */\n    height: auto; /* Автоматическая высота */\n    object-fit: cover;\n}\n\n.slide__content {\n    position: absolute;\n    top: 40px;\n    width: 100%;\n    padding: 8px;\n    box-sizing: border-box;\n    color: white;\n}\n\n.slide__content-title {\n    font-size: 16px;\n    line-height: 20px;\n    font-weight: 600;\n    text-align: left;\n}\n\n.slide__content-desc {\n    font-size: 14px;\n    line-height: 16px;\n    font-weight: lighter;\n    text-align: left;\n}\n\n/* Главный блок */\nmain {\n    margin-top: 56px;\n    margin-bottom: 56px;\n    padding: 10px 0px 10px 0px;\n}\n\n.main__block {\n    display: flex;\n    flex-direction: column;\n    padding: 15px;\n    padding-top: 25px;\n    border-radius: 16px;\n    background: linear-gradient(0deg, rgba(156, 214, 235, 0.16), rgba(4, 182, 245, 0.16)),\n        linear-gradient(0deg, rgba(4, 182, 245, 0.08), rgba(4, 182, 245, 0.08));\n    border: 2px solid #04B6F529;\n}\n\n.main__frame {\n    max-width: 380px;\n    border-radius: 8px;\n    margin-bottom: 1em;\n}\n\n.main__title {\n    font-family: Montserrat;\n    font-size: 18px;\n    font-weight: bold;\n    line-height: 24px;\n    letter-spacing: 0;\n    text-align: left;\n}\n\n.main__desc {\n    font-family: Montserrat;\n    font-size: 13px;\n    font-weight: 500;\n    line-height: 16px;\n    letter-spacing: 0;\n    text-align: left;\n    margin-bottom: 7%;\n    margin-top: 0;\n}\n\n.main__button {\n    padding: 18px 24px 18px 24px;\n    border-radius: 24px;\n    border: none;\n    gap: 10px;\n    background: #04B6F5;\n}\n\n.main__button-text {\n    font-family: Montserrat;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 12px;\n    letter-spacing: 0;\n    text-align: center;\n    color: white;\n}\n\n/* Сервисы */\n.service__title {\n    margin-top: 36px;\n    display: flex;\n    font-size: 18px;\n    font-weight: 750;\n    letter-spacing: 0.1px;\n    text-align: left;\n    font-style: Montserrat;\n}\n\n.services__list {\n    font-family: Montserrat;\n}\n\n.service__item {\n    padding: 16px;\n    background: white;\n    border-radius: 16px;\n    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n    word-wrap: break-word;\n    overflow-wrap: break-word;\n    word-break: break-all;\n    margin-bottom: 12px;\n}\n\n.service__item img {\n    width: 48px;\n    height: 48px;\n}\n\n/* Новости */\n.news__block {\n    margin-top: 35px;\n}\n\n.news__header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.news__title {\n    display: flex;\n    font-size: 18px;\n    font-weight: 750;\n    letter-spacing: 0.1px;\n    text-align: left;\n    font-family: Montserrat;\n}\n\n.news__read__all {\n    font-family: Montserrat;\n    color: #04B6F5;\n    font-size: 14px;\n    font-weight: 750;\n    margin-right: 16px;\n}\n\n.news__parent {\n    border-radius: 16px;\n    font-family: Montserrat;\n    padding: 16px;\n    background: white;\n    margin-bottom: 15px;\n}\n\n.news__item-title {\n    margin: 3px 0px 5px 0px;\n    font-size: 16px;\n}\n\n.news__item-text {\n    font-size: 14px;\n    margin-bottom: 5px;\n    line-height: 16px;\n}\n\n.news__img {\n    margin-right: 10px;\n}\n\n.news__parent .news__item {\n    display: flex;\n    flex-direction: column;\n}\n\n/* Подвал */\n.footer {\n    position: sticky;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    background-color: white;\n    z-index: 10;\n    user-select: none;\n    font-size: 10px;\n}\n\n.footer__text{\n    font-size:small\n}\n.footer__nav {\n    margin: 0 auto;\n    max-width: 770px;\n    padding-top: 2vh;\n}\n\n.footer__menu {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: flex-end;\n    height: 56px;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n\n.footer__item {\n    text-align: center;\n    padding: 5px;\n    margin: 0;\n    position: relative;\n}\n\n.footer__item:hover {\n    cursor: pointer;\n}\n\n\n/* Медиазапросы */\n@media only screen and (max-width: 767px) {\n    .container {\n        padding: 0 10px; /* Уменьшаем отступы для адаптации */\n    }\n\n    .header__inner {\n        padding: 0 5px; /* Уменьшаем отступы для адаптации */\n    }\n\n    .header__search {\n        padding-left: 30px; /* Уменьшаем отступы для адаптации */\n    }\n\n    .slide img {\n        width: 100%; /* Используем ширину 100% для адаптивности */\n        max-width: none; /* Отменяем максимальную ширину */\n    }\n\n    .main__frame {\n        max-width: 100%; /* Используем ширину 100% для адаптивности */\n    }\n\n    .footer__item {\n        font-size: 8px; /* Уменьшаем размер шрифта для адаптации */\n    }\n}\n`,""]);const u=d},314:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var p=this[s][0];null!=p&&(a[p]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},417:n=>{"use strict";n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{"use strict";n.exports=function(n){return n[1]}},72:n=>{"use strict";var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},a=[],s=0;s<n.length;s++){var p=n[s],c=r.base?p[0]+r.base:p[0],d=o[c]||0,l="".concat(c," ").concat(d);o[c]=d+1;var u=t(l),f={css:p[1],media:p[2],sourceMap:p[3],supports:p[4],layer:p[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var x=i(f,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:x,references:1})}a.push(l)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var o=r(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var s=t(o[a]);e[s].references--}for(var p=r(n,i),c=0;c<o.length;c++){var d=t(o[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=p}}},659:n=>{"use strict";var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},163:()=>{$(document).ready((function(){var n=["Развод","Банкротство","Банковские переводы","Банковская помощь","Судебная практика","Консультации"],e=$(".header__search"),t=$(".autocomplete-list");e.on("input",(function(){var e;e=$(this).val().trim(),t.empty().hide(),e.length>=3&&(n.filter((function(n){return n.toLowerCase().includes(e.toLowerCase())})).forEach((function(n){t.append("<li>"+n+"</li>")})),t.show())})),$(document).on("click",".autocomplete-list li",(function(){var n=$(this).text();e.val(n),t.hide()})),$(document).on("click",(function(n){$(n.target).closest(".autocomplete-list, .header__search").length||t.hide()}))}))},254:()=>{$(document).ready((function(){$(".slider").slick({autoplay:!0,slidesToScroll:1,arrows:!1,autoplaySpeed:1500,variableWidth:!0,infinite:!0})}))},280:(n,e,t)=>{"use strict";n.exports=t.p+"873202dd7fa20147ec20.png"}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&(!n||!/^http(s?):/.test(n));)n=r[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{"use strict";var n=t(72),e=t.n(n),r=t(825),i=t.n(r),o=t(659),a=t.n(o),s=t(56),p=t.n(s),c=t(540),d=t.n(c),l=t(113),u=t.n(l),f=t(208),x={};x.styleTagTransform=u(),x.setAttributes=p(),x.insert=a().bind(null,"head"),x.domAPI=i(),x.insertStyleElement=d(),e()(f.A,x),f.A&&f.A.locals&&f.A.locals;var g=t(254),h=t.n(g),m=t(163),_=t.n(m);document.addEventListener("DOMContentLoaded",(function(){h().init(),_().init()}))})()})();