// build time:Tue Jul 21 2020 13:11:08 GMT+0800 (GMT+08:00)
(function(e,n){if(typeof define==="function"&&define.amd){define(n)}else if(typeof exports==="object"){module.exports=n()}else{e.NProgress=n()}})(this,function(){var e={};e.version="0.2.0";var n=e.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:true,trickleRate:.02,trickleSpeed:800,showSpinner:true,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};e.configure=function(e){var t,r;for(t in e){r=e[t];if(r!==undefined&&e.hasOwnProperty(t))n[t]=r}return this};e.status=null;e.set=function(r){var a=e.isStarted();r=t(r,n.minimum,1);e.status=r===1?null:r;var u=e.render(!a),f=u.querySelector(n.barSelector),c=n.speed,l=n.easing;u.offsetWidth;s(function(t){if(n.positionUsing==="")n.positionUsing=e.getPositioningCSS();o(f,i(r,c,l));if(r===1){o(u,{transition:"none",opacity:1});u.offsetWidth;setTimeout(function(){o(u,{transition:"all "+c+"ms linear",opacity:0});setTimeout(function(){e.remove();t()},c)},c)}else{setTimeout(t,c)}});return this};e.isStarted=function(){return typeof e.status==="number"};e.start=function(){if(!e.status)e.set(0);var t=function(){setTimeout(function(){if(!e.status)return;e.trickle();t()},n.trickleSpeed)};if(n.trickle)t();return this};e.done=function(n){if(!n&&!e.status)return this;return e.inc(.3+.5*Math.random()).set(1)};e.inc=function(n){var r=e.status;if(!r){return e.start()}else{if(typeof n!=="number"){n=(1-r)*t(Math.random()*r,.1,.95)}r=t(r+n,0,.994);return e.set(r)}};e.trickle=function(){return e.inc(Math.random()*n.trickleRate)};(function(){var n=0,t=0;e.promise=function(r){if(!r||r.state()==="resolved"){return this}if(t===0){e.start()}n++;t++;r.always(function(){t--;if(t===0){n=0;e.done()}else{e.set((n-t)/n)}});return this}})();e.render=function(t){if(e.isRendered())return document.getElementById("nprogress");u(document.documentElement,"nprogress-busy");var i=document.createElement("div");i.id="nprogress";i.innerHTML=n.template;var s=i.querySelector(n.barSelector),a=t?"-100":r(e.status||0),f=document.querySelector(n.parent),c;o(s,{transition:"all 0 linear",transform:"translate3d("+a+"%,0,0)"});if(!n.showSpinner){c=i.querySelector(n.spinnerSelector);c&&l(c)}if(f!=document.body){u(f,"nprogress-custom-parent")}f.appendChild(i);return i};e.remove=function(){f(document.documentElement,"nprogress-busy");f(document.querySelector(n.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&l(e)};e.isRendered=function(){return!!document.getElementById("nprogress")};e.getPositioningCSS=function(){var e=document.body.style;var n="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";if(n+"Perspective"in e){return"translate3d"}else if(n+"Transform"in e){return"translate"}else{return"margin"}};function t(e,n,t){if(e<n)return n;if(e>t)return t;return e}function r(e){return(-1+e)*100}function i(e,t,i){var s;if(n.positionUsing==="translate3d"){s={transform:"translate3d("+r(e)+"%,0,0)"}}else if(n.positionUsing==="translate"){s={transform:"translate("+r(e)+"%,0)"}}else{s={"margin-left":r(e)+"%"}}s.transition="all "+t+"ms "+i;return s}var s=function(){var e=[];function n(){var t=e.shift();if(t){t(n)}}return function(t){e.push(t);if(e.length==1)n()}}();var o=function(){var e=["Webkit","O","Moz","ms"],n={};function t(e){return e.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(e,n){return n.toUpperCase()})}function r(n){var t=document.body.style;if(n in t)return n;var r=e.length,i=n.charAt(0).toUpperCase()+n.slice(1),s;while(r--){s=e[r]+i;if(s in t)return s}return n}function i(e){e=t(e);return n[e]||(n[e]=r(e))}function s(e,n,t){n=i(n);e.style[n]=t}return function(e,n){var t=arguments,r,i;if(t.length==2){for(r in n){i=n[r];if(i!==undefined&&n.hasOwnProperty(r))s(e,r,i)}}else{s(e,t[1],t[2])}}}();function a(e,n){var t=typeof e=="string"?e:c(e);return t.indexOf(" "+n+" ")>=0}function u(e,n){var t=c(e),r=t+n;if(a(t,n))return;e.className=r.substring(1)}function f(e,n){var t=c(e),r;if(!a(e,n))return;r=t.replace(" "+n+" "," ");e.className=r.substring(1,r.length-1)}function c(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function l(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return e});
//rebuild by neat 