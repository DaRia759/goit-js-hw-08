function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function g(e,t,n){var r,o,i,a,f,u,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function x(e){return c=e,f=setTimeout(j,t),l?y(e):a}function T(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function j(){var e=v();if(T(e))return h(e);f=setTimeout(j,function(e){var n=t-(e-u);return s?m(n,i-(e-c)):n}(e))}function h(e){return f=void 0,g&&r?y(e):(r=o=void 0,a)}function w(){var e=v(),n=T(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return x(u);if(s)return f=setTimeout(j,t),y(u)}return void 0===f&&(f=setTimeout(j,t)),a}return t=b(t)||0,p(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=o=f=void 0},w.flush=function(){return void 0===f?a:h(v())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};const y={},x={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea")};x.form.addEventListener("submit",(function(e){e.preventDefault(),y=e.currentTarget.elements,console.log({email:email.value,message:message.value}),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset()})),x.textarea.addEventListener("input",e(t)((function(e){data=e.target.value,localStorage.setItem("feedback-form-state",data)}),500)),x.form.addEventListener("input",(e=>{y[e.target.name]=e.target.value,console.log(y)})),function(e){const t=localStorage.getItem("feedback-form-state");t&&(console.log(t),x.textarea.value=t)}();
//# sourceMappingURL=03-feedback.d335b423.js.map
