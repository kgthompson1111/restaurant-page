(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>x});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),d=t(667),c=t.n(d),s=new URL(t(931),t.b),p=new URL(t(74),t.b),l=new URL(t(638),t.b),u=i()(o()),m=c()(s),h=c()(p),f=c()(l);u.push([n.id,"@font-face {\n    font-family: 'CalibriBold';\n    src: url("+m+") format('truetype');\n}\n\n@font-face {\n    font-family: 'CalibriRegular';\n    src: url("+h+") format('truetype');\n}\n\n@font-face {\n    font-family: 'Painter';\n    src: url("+f+") format('truetype');\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\n#navHeader {\n    max-width: 100vw;\n    height: 100px;\n\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    border-bottom: solid 3px;\n    box-sizing: border-box;\n\n}\n\n#headerLogo {\n    display: flex;\n    align-items: center;\n}\n\n#headerText {\n    font-family: 'Painter', 'CalibriBold', Arial, sans-serif;\n}\n\nh1 {\n    font-family: 'CalibriBold', Arial, sans-serif;\n    margin-left: 20px;\n    color: rgb(46, 24, 9);\n    font-size: 4vw;\n    \n}\n\nh2 {\n    font-family: 'CalibriRegular', Arial, sans-serif;\n    font-size: 30px;\n    margin-bottom: 30px;\n}\n\nh3 {\n    font-family: 'CalibriRegular', Arial, sans-serif;\n    font-size: 20px;\n    margin-bottom: 8px;\n}\n\n#logo {\n    margin: 0px 5px 0px 20px;\n    width: 80px;\n    height: auto;\n}\n\nul {\n    font-family: CalibriBold, Arial, sans-serif;\n    list-style-type: none;\n    display: flex;\n    margin-right: 20px;\n}\n\nli {\n    margin: 20px;\n    font-size: 35px;\n    cursor: hand;\n}\n\na {\n    text-decoration: none;\n    color: black;\n    cursor: hand;\n}\n\n#contentBody {\n    height: auto;\n    max-width: 100vw;\n    background-color: #BCAA99;\n\n    display: flex;\n    justify-content: center;\n}\n\n#card {\n    width: 60vw;\n    border-top-left-radius: 35px;\n    border-bottom-right-radius: 35px;\n    border: solid 3px #3a222b;\n    box-sizing: border-box;\n\n    margin: 50px 0px;\n\n    display: flex;\n    padding: 20px;\n}\n\n#cardContent {\n    width: 100%;\n    background-color: rgb(250, 244, 231);\n    height: auto;\n    box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.616);\n    border: solid 3px #3a222b;\n    box-sizing: border-box;\n    border-top-left-radius: 20px;\n    margin-right: -35px;\n    padding: 30px 60px 0px 25px;\n    margin-bottom: 20%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n}\n\n.cardHeader {\n    font-family: 'Painter', 'CalibriBold', Arial, sans-serif;\n    margin-top: 22px;\n}\n\n.cardText {\n    margin-bottom: 20px;\n    text-align: center;\n}\n\n#footerLogo {\n    width: 40px;\n    height: auto;\n    margin-top: 100px;\n    margin-bottom: 20px;\n}\n\n#cardImage {\n    max-height: 650px;\n    max-width: 35%;\n    border-bottom-right-radius: 20px;\n    border: solid 3px #3a222b;\n    box-sizing: border-box;\n    align-self: flex-end;\n}\n\n#footer {\n    height: 80px;\n    max-width: 100vw;\n    font-size: 30px;\n    border-top: solid 3px #3a222b;\n    box-sizing: border-box;\n    font-family: 'CalibriRegular',  Arial, sans-serif;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\np {\n    margin-bottom: 20px;\n}\n\n#navHeader, #card, #footer {\n    background-color: #83526b;\n}\n",""]);const x=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var s=0;s<n.length;s++){var p=[].concat(n[s]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],d=0;d<n.length;d++){var c=n[d],s=r.base?c[0]+r.base:c[0],p=a[s]||0,l="".concat(s," ").concat(p);a[s]=p+1;var u=t(l),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var h=o(m,r);r.byIndex=d,e.splice(d,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var d=t(a[i]);e[d].references--}for(var c=r(n,o),s=0;s<a.length;s++){var p=t(a[s]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},931:(n,e,t)=>{n.exports=t.p+"d2362af0b37d31196c7c.ttf"},74:(n,e,t)=>{n.exports=t.p+"29c57b05b7345f94042a.ttf"},572:(n,e,t)=>{n.exports=t.p+"760ee19522a11ec46ae5.png"},638:(n,e,t)=>{n.exports=t.p+"7e951b7051a3d4c0b58a.ttf"},244:(n,e,t)=>{n.exports=t.p+"73bf5c07ff26335be341.jpg"},389:(n,e,t)=>{n.exports=t.p+"ee2c4ed61902e1cf0055.jpg"},198:(n,e,t)=>{n.exports=t.p+"2b43b4ca6b3f0a26c27f.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,(()=>{var n=t(572),e=t(244);function r(){const e=document.createElement("img");e.id="footerLogo",e.src=n,cardContent.appendChild(e)}function o(){cardContent.innerHTML="";const n=document.createElement("h2");n.id="aboutHeader",n.classList.add("cardHeader"),n.innerText="About",cardContent.appendChild(n);const t=document.createElement("div");t.id="aboutText",t.classList.add("cardText"),t.innerHTML="<p>There's <em>nothing</em> better than a bowl of hot, savoury soup on a cold winter's day.</p><p>That's why we opened our cozy caf&eacute; in the middle of the Canadian tundra</p><p>Feed the body <em>and</em> the soul at Soup d'Jour.",cardContent.appendChild(t),r(),cardImage.src=e}var a=t(389),i=t(198),d=t(379),c=t.n(d),s=t(795),p=t.n(s),l=t(569),u=t.n(l),m=t(565),h=t.n(m),f=t(216),x=t.n(f),g=t(589),b=t.n(g),C=t(426),v={};v.styleTagTransform=b(),v.setAttributes=h(),v.insert=u().bind(null,"head"),v.domAPI=p(),v.insertStyleElement=x(),c()(C.Z,v),C.Z&&C.Z.locals&&C.Z.locals,function(){const e=document.getElementById("content"),t=document.createElement("div");t.id="navHeader",e.appendChild(t);const r=document.createElement("div");r.id="headerLogo",t.appendChild(r);const a=document.createElement("img");a.id="logo",a.src=n,r.appendChild(a);const i=document.createElement("h1");i.id="headerText",i.innerText="Soup d'Jour",r.appendChild(i);const d=document.createElement("ul"),c=document.createElement("li");d.appendChild(c);const s=document.createElement("a");s.innerText="About",s.href="#",s.id="aboutButtonLink",c.appendChild(s);const p=document.createElement("li");d.appendChild(p);const l=document.createElement("a");l.innerHTML="Menu",l.href="#",l.id="menuButtonLink",p.appendChild(l);const u=document.createElement("li");d.appendChild(u);const m=document.createElement("a");m.innerText="Contact",m.href="#",m.id="contactButtonLink",u.appendChild(m),t.appendChild(d);const h=document.createElement("div");h.id="contentBody",e.appendChild(h);const f=document.createElement("div");f.id="card",h.appendChild(f);const x=document.createElement("div");x.id="cardContent",f.appendChild(x);const g=document.createElement("img");g.id="cardImage",f.appendChild(g),o();const b=document.createElement("div");b.id="footer",b.innerHTML="&copy; 2021  Kelly Thompson",e.appendChild(b)}(),aboutButtonLink.addEventListener("click",o),menuButtonLink.addEventListener("click",(function(){cardContent.innerHTML="";const n=document.createElement("h2");n.classList.add("cardHeader"),n.id="menuHeader",n.innerText="Menu",cardContent.appendChild(n);const e=document.createElement("h3");e.id="squashSoup",e.innerText="Butternut Squash Soup - $15",cardContent.appendChild(e);const t=document.createElement("div");t.innerHTML="<p>Creamy vegan butternut squash soup</p>",t.classList.add("cardText"),cardContent.appendChild(t);const o=document.createElement("h3");o.id="carrotSoup",o.innerText="Ginger Carrot Soup - $15",cardContent.appendChild(o);const i=document.createElement("div");i.innerHTML="<p>Spicy vegan ginger carrot soup</p>",i.classList.add("cardText"),cardContent.appendChild(i);const d=document.createElement("h3");d.id="tomatoSoup",d.innerText="Heirloom Tomato Soup - $16",cardContent.appendChild(d);const c=document.createElement("div");c.innerHTML="<p>Savoury vegan heirloom tomato soup</p>",c.classList.add("cardText"),cardContent.appendChild(c);const s=document.createElement("h3");s.id="potatoSoup",s.innerText="Chunky German Potato Soup - $16",cardContent.appendChild(s);const p=document.createElement("div");p.innerHTML="<p>Chunky german potato soup</p>",p.classList.add("cardText"),cardContent.appendChild(p);const l=document.createElement("h3");l.id="veggieTray",l.innerText="Veggie Tray with Hummus - $9",cardContent.appendChild(l);const u=document.createElement("div");u.id="veggieTrayDescription",u.innerHTML="<p>Seasonal veggies with garlic hummus for dippins</p>",cardContent.appendChild(u);const m=document.createElement("div");m.classList.add("cardText"),m.innerHTML="<br><br>All soup served with local Einkorn sourdough bread and butter",cardContent.appendChild(m),r(),cardImage.src=a})),contactButtonLink.addEventListener("click",(function(){cardContent.innerHTML="";const n=document.createElement("h2");n.classList.add("cardHeader"),n.id="contactUsHeader",n.innerText="Contact Us",cardContent.appendChild(n);const e=document.createElement("h3");e.id="locationHeader",e.innerText="Location",cardContent.appendChild(e);const t=document.createElement("div");t.id="locationText",t.classList.add("locationText"),t.innerHTML="<p>Located at 123a - 456 st<br>Tundratown, Alberta</p>",cardContent.appendChild(t);const o=document.createElement("h3");o.id="hoursHeader",o.innerText="Hours",cardContent.appendChild(o);const a=document.createElement("div");a.id="hoursText",a.classList.add("cardText"),a.innerHTML="Monday to Friday: 10:00 - 20:00<br>Saturday: 12:00 - 18:00<br>Sunday: Closed",cardContent.appendChild(a);const d=document.createElement("h3");d.id="contactHeader",d.innerText="Contact Us",cardContent.appendChild(d);const c=document.createElement("div");c.id="contactText",c.innerHTML="<p>780-999-9999<br>contact@souppdjour.net</p>",cardContent.appendChild(c),r(),cardImage.src=i}))})()})();