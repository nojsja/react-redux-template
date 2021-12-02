/*! For license information please see bundle_34fbc1e3.js.LICENSE.txt */
(()=>{var e={748:(e,t,r)=>{e.exports=r.p+"resources/images/logo.svg"},889:(e,t,r)=>{e.exports=r.p+"resources/images/tauri.svg"},310:(e,t,r)=>{e.exports=r.p+"resources/images/wordmark.svg"},679:(e,t,r)=>{"use strict";var n=r(864),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},u={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function c(e){return n.isMemo(e)?u:a[e.$$typeof]||o}a[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[n.Memo]=u;var f=Object.defineProperty,s=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,v=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(v){var o=d(r);o&&o!==v&&e(t,o,n)}var u=s(r);l&&(u=u.concat(l(r)));for(var a=c(t),y=c(r),h=0;h<u.length;++h){var m=u[h];if(!(i[m]||n&&n[m]||y&&y[m]||a&&a[m])){var b=p(r,m);try{f(t,m,b)}catch(e){}}}}return t}},921:(e,t)=>{"use strict";var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,u=r?Symbol.for("react.strict_mode"):60108,a=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,s=r?Symbol.for("react.async_mode"):60111,l=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,v=r?Symbol.for("react.suspense_list"):60120,y=r?Symbol.for("react.memo"):60115,h=r?Symbol.for("react.lazy"):60116,m=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,g=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119;function O(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case s:case l:case i:case a:case u:case d:return e;default:switch(e=e&&e.$$typeof){case f:case p:case h:case y:case c:return e;default:return t}}case o:return t}}}function P(e){return O(e)===l}t.AsyncMode=s,t.ConcurrentMode=l,t.ContextConsumer=f,t.ContextProvider=c,t.Element=n,t.ForwardRef=p,t.Fragment=i,t.Lazy=h,t.Memo=y,t.Portal=o,t.Profiler=a,t.StrictMode=u,t.Suspense=d,t.isAsyncMode=function(e){return P(e)||O(e)===s},t.isConcurrentMode=P,t.isContextConsumer=function(e){return O(e)===f},t.isContextProvider=function(e){return O(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return O(e)===p},t.isFragment=function(e){return O(e)===i},t.isLazy=function(e){return O(e)===h},t.isMemo=function(e){return O(e)===y},t.isPortal=function(e){return O(e)===o},t.isProfiler=function(e){return O(e)===a},t.isStrictMode=function(e){return O(e)===u},t.isSuspense=function(e){return O(e)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===l||e===a||e===u||e===d||e===v||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===y||e.$$typeof===c||e.$$typeof===f||e.$$typeof===p||e.$$typeof===b||e.$$typeof===g||e.$$typeof===w||e.$$typeof===m)},t.typeOf=O},864:(e,t,r)=>{"use strict";e.exports=r(921)},903:(e,t,r)=>{"use strict";r.d(t,{Z:()=>dt,m:()=>pt});var n=r(587),o=r(922),i=(r(166),n.createContext(null)),u=function(e){e()},a=function(){return u},c={notify:function(){},get:function(){return[]}};function f(e,t){var r,n=c;function o(){u.onStateChange&&u.onStateChange()}function i(){r||(r=t?t.addNestedSub(o):e.subscribe(o),n=function(){var e=a(),t=null,r=null;return{clear:function(){t=null,r=null},notify:function(){e((function(){for(var e=t;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],r=t;r;)e.push(r),r=r.next;return e},subscribe:function(e){var n=!0,o=r={callback:e,next:null,prev:r};return o.prev?o.prev.next=o:t=o,function(){n&&null!==t&&(n=!1,o.next?o.next.prev=o.prev:r=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}())}var u={addNestedSub:function(e){return i(),n.subscribe(e)},notifyNestedSubs:function(){n.notify()},handleChangeWrapper:o,isSubscribed:function(){return Boolean(r)},trySubscribe:i,tryUnsubscribe:function(){r&&(r(),r=void 0,n.clear(),n=c)},getListeners:function(){return n}};return u}var s="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?n.useLayoutEffect:n.useEffect;const l=function(e){var t=e.store,r=e.context,o=e.children,u=(0,n.useMemo)((function(){var e=f(t);return e.onStateChange=e.notifyNestedSubs,{store:t,subscription:e}}),[t]),a=(0,n.useMemo)((function(){return t.getState()}),[t]);s((function(){var e=u.subscription;return e.trySubscribe(),a!==t.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[u,a]);var c=r||i;return n.createElement(c.Provider,{value:u},o)};function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function d(){return(0,n.useContext)(i)}function v(e){void 0===e&&(e=i);var t=e===i?d:function(){return(0,n.useContext)(e)};return function(){return t().store}}r(679),r(864);var y=v();function h(e){void 0===e&&(e=i);var t=e===i?y:v(e);return function(){return t().dispatch}}var m=h(),b=function(e,t){return e===t};function g(e){void 0===e&&(e=i);var t=e===i?d:function(){return(0,n.useContext)(e)};return function(e,r){void 0===r&&(r=b);var o=t(),i=function(e,t,r,o){var i,u=(0,n.useReducer)((function(e){return e+1}),0),a=u[1],c=(0,n.useMemo)((function(){return f(r,o)}),[r,o]),l=(0,n.useRef)(),p=(0,n.useRef)(),d=(0,n.useRef)(),v=(0,n.useRef)(),y=r.getState();try{if(e!==p.current||y!==d.current||l.current){var h=e(y);i=void 0!==v.current&&t(h,v.current)?v.current:h}else i=v.current}catch(e){throw l.current&&(e.message+="\nThe error may be correlated with this previous error:\n"+l.current.stack+"\n\n"),e}return s((function(){p.current=e,d.current=y,v.current=i,l.current=void 0})),s((function(){function e(){try{var e=r.getState();if(e===d.current)return;var n=p.current(e);if(t(n,v.current))return;v.current=n,d.current=e}catch(e){l.current=e}a()}return c.onStateChange=e,c.trySubscribe(),e(),function(){return c.tryUnsubscribe()}}),[r,c]),i}(e,r,o.store,o.subscription);return(0,n.useDebugValue)(i),i}}var w,O=g();function P(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.map((function(e){return"'"+e+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function S(e){return!!e&&!!e[fe]}function E(e){return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;var r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===se}(e)||Array.isArray(e)||!!e[ce]||!!e.constructor[ce]||k(e)||D(e))}function A(e,t,r){void 0===r&&(r=!1),0===x(e)?(r?Object.keys:le)(e).forEach((function(n){r&&"symbol"==typeof n||t(n,e[n],e)})):e.forEach((function(r,n){return t(n,r,e)}))}function x(e){var t=e[fe];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:k(e)?2:D(e)?3:0}function j(e,t){return 2===x(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function _(e,t,r){var n=x(e);2===n?e.set(t,r):3===n?(e.delete(t),e.add(r)):e[t]=r}function C(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function k(e){return oe&&e instanceof Map}function D(e){return ie&&e instanceof Set}function $(e){return e.o||e.t}function R(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=pe(e);delete t[fe];for(var r=le(t),n=0;n<r.length;n++){var o=r[n],i=t[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function N(e,t){return void 0===t&&(t=!1),M(e)||S(e)||!E(e)||(x(e)>1&&(e.set=e.add=e.clear=e.delete=T),Object.freeze(e),t&&A(e,(function(e,t){return N(t,!0)}),!0)),e}function T(){P(2)}function M(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function I(e){var t=de[e];return t||P(18,e),t}function F(){return re}function L(e,t){t&&(I("Patches"),e.u=[],e.s=[],e.v=t)}function U(e){z(e),e.p.forEach(K),e.p=null}function z(e){e===re&&(re=e.l)}function X(e){return re={p:[],l:re,h:e,m:!0,_:0}}function K(e){var t=e[fe];0===t.i||1===t.i?t.j():t.O=!0}function V(e,t){t._=t.p.length;var r=t.p[0],n=void 0!==e&&e!==r;return t.h.g||I("ES5").S(t,e,n),n?(r[fe].P&&(U(t),P(4)),E(e)&&(e=B(t,e),t.l||q(t,e)),t.u&&I("Patches").M(r[fe],e,t.u,t.s)):e=B(t,r,[]),U(t),t.u&&t.v(t.u,t.s),e!==ae?e:void 0}function B(e,t,r){if(M(t))return t;var n=t[fe];if(!n)return A(t,(function(o,i){return W(e,n,t,o,i,r)}),!0),t;if(n.A!==e)return t;if(!n.P)return q(e,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=4===n.i||5===n.i?n.o=R(n.k):n.o;A(3===n.i?new Set(o):o,(function(t,i){return W(e,n,o,t,i,r)})),q(e,o,!1),r&&e.u&&I("Patches").R(n,r,e.u,e.s)}return n.o}function W(e,t,r,n,o,i){if(S(o)){var u=B(e,o,i&&t&&3!==t.i&&!j(t.D,n)?i.concat(n):void 0);if(_(r,n,u),!S(u))return;e.m=!1}if(E(o)&&!M(o)){if(!e.h.F&&e._<1)return;B(e,o),t&&t.A.l||q(e,o)}}function q(e,t,r){void 0===r&&(r=!1),e.h.F&&e.m&&N(t,r)}function H(e,t){var r=e[fe];return(r?$(r):e)[t]}function J(e,t){if(t in e)for(var r=Object.getPrototypeOf(e);r;){var n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=Object.getPrototypeOf(r)}}function Z(e){e.P||(e.P=!0,e.l&&Z(e.l))}function G(e){e.o||(e.o=R(e.t))}function Q(e,t,r){var n=k(t)?I("MapSet").N(t,r):D(t)?I("MapSet").T(t,r):e.g?function(e,t){var r=Array.isArray(e),n={i:r?1:0,A:t?t.A:F(),P:!1,I:!1,D:{},l:t,t:e,k:null,o:null,j:null,C:!1},o=n,i=ve;r&&(o=[n],i=ye);var u=Proxy.revocable(o,i),a=u.revoke,c=u.proxy;return n.k=c,n.j=a,c}(t,r):I("ES5").J(t,r);return(r?r.A:F()).p.push(n),n}function Y(e){return S(e)||P(22,e),function e(t){if(!E(t))return t;var r,n=t[fe],o=x(t);if(n){if(!n.P&&(n.i<4||!I("ES5").K(n)))return n.t;n.I=!0,r=ee(t,o),n.I=!1}else r=ee(t,o);return A(r,(function(t,o){n&&function(e,t){return 2===x(e)?e.get(t):e[t]}(n.t,t)===o||_(r,t,e(o))})),3===o?new Set(r):r}(e)}function ee(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return R(e)}w=r(543).unstable_batchedUpdates,u=w;var te,re,ne="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),oe="undefined"!=typeof Map,ie="undefined"!=typeof Set,ue="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,ae=ne?Symbol.for("immer-nothing"):((te={})["immer-nothing"]=!0,te),ce=ne?Symbol.for("immer-draftable"):"__$immer_draftable",fe=ne?Symbol.for("immer-state"):"__$immer_state",se=("undefined"!=typeof Symbol&&Symbol.iterator,""+Object.prototype.constructor),le="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,pe=Object.getOwnPropertyDescriptors||function(e){var t={};return le(e).forEach((function(r){t[r]=Object.getOwnPropertyDescriptor(e,r)})),t},de={},ve={get:function(e,t){if(t===fe)return e;var r=$(e);if(!j(r,t))return function(e,t,r){var n,o=J(t,r);return o?"value"in o?o.value:null===(n=o.get)||void 0===n?void 0:n.call(e.k):void 0}(e,r,t);var n=r[t];return e.I||!E(n)?n:n===H(e.t,t)?(G(e),e.o[t]=Q(e.A.h,n,e)):n},has:function(e,t){return t in $(e)},ownKeys:function(e){return Reflect.ownKeys($(e))},set:function(e,t,r){var n=J($(e),t);if(null==n?void 0:n.set)return n.set.call(e.k,r),!0;if(!e.P){var o=H($(e),t),i=null==o?void 0:o[fe];if(i&&i.t===r)return e.o[t]=r,e.D[t]=!1,!0;if(C(r,o)&&(void 0!==r||j(e.t,t)))return!0;G(e),Z(e)}return e.o[t]===r&&"number"!=typeof r&&(void 0!==r||t in e.o)||(e.o[t]=r,e.D[t]=!0,!0)},deleteProperty:function(e,t){return void 0!==H(e.t,t)||t in e.t?(e.D[t]=!1,G(e),Z(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var r=$(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty:function(){P(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){P(12)}},ye={};A(ve,(function(e,t){ye[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),ye.deleteProperty=function(e,t){return ve.deleteProperty.call(this,e[0],t)},ye.set=function(e,t,r){return ve.set.call(this,e[0],t,r,e[0])};var he=function(){function e(e){var t=this;this.g=ue,this.F=!0,this.produce=function(e,r,n){if("function"==typeof e&&"function"!=typeof r){var o=r;r=e;var i=t;return function(e){var t=this;void 0===e&&(e=o);for(var n=arguments.length,u=Array(n>1?n-1:0),a=1;a<n;a++)u[a-1]=arguments[a];return i.produce(e,(function(e){var n;return(n=r).call.apply(n,[t,e].concat(u))}))}}var u;if("function"!=typeof r&&P(6),void 0!==n&&"function"!=typeof n&&P(7),E(e)){var a=X(t),c=Q(t,e,void 0),f=!0;try{u=r(c),f=!1}finally{f?U(a):z(a)}return"undefined"!=typeof Promise&&u instanceof Promise?u.then((function(e){return L(a,n),V(e,a)}),(function(e){throw U(a),e})):(L(a,n),V(u,a))}if(!e||"object"!=typeof e){if((u=r(e))===ae)return;return void 0===u&&(u=e),t.F&&N(u,!0),u}P(21,e)},this.produceWithPatches=function(e,r){return"function"==typeof e?function(r){for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return t.produceWithPatches(r,(function(t){return e.apply(void 0,[t].concat(o))}))}:[t.produce(e,r,(function(e,t){n=e,o=t})),n,o];var n,o},"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze)}var t=e.prototype;return t.createDraft=function(e){E(e)||P(8),S(e)&&(e=Y(e));var t=X(this),r=Q(this,e,void 0);return r[fe].C=!0,z(t),r},t.finishDraft=function(e,t){var r=(e&&e[fe]).A;return L(r,t),V(void 0,r)},t.setAutoFreeze=function(e){this.F=e},t.setUseProxies=function(e){e&&!ue&&P(20),this.g=e},t.applyPatches=function(e,t){var r;for(r=t.length-1;r>=0;r--){var n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));var o=I("Patches").$;return S(e)?o(e,t):this.produce(e,(function(e){return o(e,t)}))},e}(),me=new he,be=me.produce;me.produceWithPatches.bind(me),me.setAutoFreeze.bind(me),me.setUseProxies.bind(me),me.applyPatches.bind(me),me.createDraft.bind(me),me.finishDraft.bind(me);const ge=be;var we=r(201);function Oe(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(o){return"function"==typeof o?o(r,n,e):t(o)}}}}var Pe=Oe();Pe.withExtraArgument=Oe;const Se=Pe;var Ee,Ae=(Ee=function(e,t){return Ee=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},Ee(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}Ee(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),xe=function(e,t){for(var r=0,n=t.length,o=e.length;r<n;r++,o++)e[o]=t[r];return e},je=Object.defineProperty,_e=(Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols),Ce=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable,De=function(e,t,r){return t in e?je(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},$e=function(e,t){for(var r in t||(t={}))Ce.call(t,r)&&De(e,r,t[r]);if(_e)for(var n=0,o=_e(t);n<o.length;n++)r=o[n],ke.call(t,r)&&De(e,r,t[r]);return e},Re="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?we.compose:we.compose.apply(null,arguments)};"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;var Ne,Te=function(e){function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=e.apply(this,r)||this;return Object.setPrototypeOf(o,t.prototype),o}return Ae(t,e),Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return e.prototype.concat.apply(this,t)},t.prototype.prepend=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return 1===e.length&&Array.isArray(e[0])?new(t.bind.apply(t,xe([void 0],e[0].concat(this)))):new(t.bind.apply(t,xe([void 0],e.concat(this))))},t}(Array);function Me(e,t){function r(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];if(t){var o=t.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return $e($e({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:r[0]}}return r.toString=function(){return""+e},r.type=e,r.match=function(t){return t.type===e},r}function Ie(e){var t,r={},n=[],o={addCase:function(e,t){var n="string"==typeof e?e:e.type;if(n in r)throw new Error("addCase cannot be called with two reducers for the same action type");return r[n]=t,o},addMatcher:function(e,t){return n.push({matcher:e,reducer:t}),o},addDefaultCase:function(e){return t=e,o}};return e(o),[r,n,t]}!function(){function e(e,t){var r=o[e];return r?r.enumerable=t:o[e]=r={configurable:!0,enumerable:t,get:function(){var t=this[fe];return ve.get(t,e)},set:function(t){var r=this[fe];ve.set(r,e,t)}},r}function t(e){for(var t=e.length-1;t>=0;t--){var o=e[t][fe];if(!o.P)switch(o.i){case 5:n(o)&&Z(o);break;case 4:r(o)&&Z(o)}}}function r(e){for(var t=e.t,r=e.k,n=le(r),o=n.length-1;o>=0;o--){var i=n[o];if(i!==fe){var u=t[i];if(void 0===u&&!j(t,i))return!0;var a=r[i],c=a&&a[fe];if(c?c.t!==u:!C(a,u))return!0}}var f=!!t[fe];return n.length!==le(t).length+(f?0:1)}function n(e){var t=e.k;if(t.length!==e.t.length)return!0;var r=Object.getOwnPropertyDescriptor(t,t.length-1);return!(!r||r.get)}var o={};!function(e,t){de[e]||(de[e]=t)}("ES5",{J:function(t,r){var n=Array.isArray(t),o=function(t,r){if(t){for(var n=Array(r.length),o=0;o<r.length;o++)Object.defineProperty(n,""+o,e(o,!0));return n}var i=pe(r);delete i[fe];for(var u=le(i),a=0;a<u.length;a++){var c=u[a];i[c]=e(c,t||!!i[c].enumerable)}return Object.create(Object.getPrototypeOf(r),i)}(n,t),i={i:n?5:4,A:r?r.A:F(),P:!1,I:!1,D:{},l:r,t,k:o,o:null,O:!1,C:!1};return Object.defineProperty(o,fe,{value:i,writable:!0}),o},S:function(e,r,o){o?S(r)&&r[fe].A===e&&t(e.p):(e.u&&function e(t){if(t&&"object"==typeof t){var r=t[fe];if(r){var o=r.t,i=r.k,u=r.D,a=r.i;if(4===a)A(i,(function(t){t!==fe&&(void 0!==o[t]||j(o,t)?u[t]||e(i[t]):(u[t]=!0,Z(r)))})),A(o,(function(e){void 0!==i[e]||j(i,e)||(u[e]=!1,Z(r))}));else if(5===a){if(n(r)&&(Z(r),u.length=!0),i.length<o.length)for(var c=i.length;c<o.length;c++)u[c]=!1;else for(var f=o.length;f<i.length;f++)u[f]=!0;for(var s=Math.min(i.length,o.length),l=0;l<s;l++)void 0===u[l]&&e(i[l])}}}}(e.p[0]),t(e.p))},K:function(e){return 4===e.i?r(e):n(e)}})}();var Fe=function(e){var t=e.name,r=e.initialState;if(!t)throw new Error("`name` is a required option for createSlice");var n=e.reducers||{},o="function"==typeof e.extraReducers?Ie(e.extraReducers):[e.extraReducers],i=o[0],u=void 0===i?{}:i,a=o[1],c=void 0===a?[]:a,f=o[2],s=void 0===f?void 0:f,l=Object.keys(n),p={},d={},v={};l.forEach((function(e){var r,o,i=n[e],u=t+"/"+e;"reducer"in i?(r=i.reducer,o=i.prepare):r=i,p[e]=r,d[u]=r,v[e]=o?Me(u,o):Me(u)}));var y=function(e,t,r,n){void 0===r&&(r=[]);var o="function"==typeof t?Ie(t):[t,r,n],i=o[0],u=o[1],a=o[2],c=ge(e,(function(){}));return function(e,t){void 0===e&&(e=c);var r=xe([i[t.type]],u.filter((function(e){return(0,e.matcher)(t)})).map((function(e){return e.reducer})));return 0===r.filter((function(e){return!!e})).length&&(r=[a]),r.reduce((function(e,r){if(r){var n;if(S(e))return void 0===(n=r(e,t))?e:n;if(E(e))return ge(e,(function(e){return r(e,t)}));if(void 0===(n=r(e,t))){if(null===e)return e;throw Error("A case reducer on a non-draftable value must not return undefined")}return n}return e}),e)}}(r,$e($e({},u),d),c,s);return{name:t,reducer:y,actions:v,caseReducers:p}}({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),Le=(Ne=Fe.actions).increment,Ue=Ne.decrement;Ne.incrementByAmount;const ze=function(e){var t,r=function(e){return function(e){void 0===e&&(e={});var t=e.thunk,r=void 0===t||t,n=(e.immutableCheck,e.serializableCheck,new Te);return r&&(function(e){return"boolean"==typeof e}(r)?n.push(Se):n.push(Se.withExtraArgument(r.extraArgument))),n}(e)},n=e||{},o=n.reducer,i=void 0===o?void 0:o,u=n.middleware,a=void 0===u?r():u,c=n.devTools,f=void 0===c||c,s=n.preloadedState,l=void 0===s?void 0:s,p=n.enhancers,d=void 0===p?void 0:p;if("function"==typeof i)t=i;else{if(!function(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}(i))throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');t=(0,we.combineReducers)(i)}var v=a;"function"==typeof v&&(v=v(r));var y=we.applyMiddleware.apply(void 0,v),h=we.compose;f&&(h=Re($e({trace:!1},"object"==typeof f&&f)));var m=[y];Array.isArray(d)?m=xe([y],d):"function"==typeof d&&(m=d(m));var b=h.apply(void 0,m);return(0,we.createStore)(t,l,b)}({reducer:{counter:Fe.reducer}});function Xe(e){return"/"===e.charAt(0)}function Ke(e,t){for(var r=t,n=r+1,o=e.length;n<o;r+=1,n+=1)e[r]=e[n];e.pop()}function Ve(e){return"/"===e.charAt(0)?e:"/"+e}function Be(e){return"/"===e.charAt(0)?e.substr(1):e}function We(e){var t=e.pathname,r=e.search,n=e.hash,o=t||"/";return r&&"?"!==r&&(o+="?"===r.charAt(0)?r:"?"+r),n&&"#"!==n&&(o+="#"===n.charAt(0)?n:"#"+n),o}function qe(e,t,r,n){var o;"string"==typeof e?(o=function(e){var t=e||"/",r="",n="",o=t.indexOf("#");-1!==o&&(n=t.substr(o),t=t.substr(0,o));var i=t.indexOf("?");return-1!==i&&(r=t.substr(i),t=t.substr(0,i)),{pathname:t,search:"?"===r?"":r,hash:"#"===n?"":n}}(e),o.state=t):(void 0===(o=p({},e)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==t&&void 0===o.state&&(o.state=t));try{o.pathname=decodeURI(o.pathname)}catch(e){throw e instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):e}return r&&(o.key=r),n?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=function(e,t){void 0===t&&(t="");var r,n=e&&e.split("/")||[],o=t&&t.split("/")||[],i=e&&Xe(e),u=t&&Xe(t),a=i||u;if(e&&Xe(e)?o=n:n.length&&(o.pop(),o=o.concat(n)),!o.length)return"/";if(o.length){var c=o[o.length-1];r="."===c||".."===c||""===c}else r=!1;for(var f=0,s=o.length;s>=0;s--){var l=o[s];"."===l?Ke(o,s):".."===l?(Ke(o,s),f++):f&&(Ke(o,s),f--)}if(!a)for(;f--;f)o.unshift("..");!a||""===o[0]||o[0]&&Xe(o[0])||o.unshift("");var p=o.join("/");return r&&"/"!==p.substr(-1)&&(p+="/"),p}(o.pathname,n.pathname)):o.pathname=n.pathname:o.pathname||(o.pathname="/"),o}var He=!("undefined"==typeof window||!window.document||!window.document.createElement);function Je(e,t){t(window.confirm(e))}var Ze="hashchange",Ge={hashbang:{encodePath:function(e){return"!"===e.charAt(0)?e:"!/"+Be(e)},decodePath:function(e){return"!"===e.charAt(0)?e.substr(1):e}},noslash:{encodePath:Be,decodePath:Ve},slash:{encodePath:Ve,decodePath:Ve}};function Qe(e){var t=e.indexOf("#");return-1===t?e:e.slice(0,t)}function Ye(){var e=window.location.href,t=e.indexOf("#");return-1===t?"":e.substring(t+1)}function et(e){window.location.replace(Qe(window.location.href)+"#"+e)}var tt=function(){return tt=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},tt.apply(this,arguments)};const rt=function(e){var t=e.route;return n.createElement(o.Route,{path:t.path,exact:t.exact,render:function(e){return n.createElement(t.component,tt({},e,{routes:t.routes}))}})};var nt=r(748),ot=r.n(nt),it=r(889),ut=r.n(it),at=r(310),ct=r.n(at),ft=O,st={path:"/",component:function(e){var t=e.routes,r=ft((function(e){return e.counter.value})),o=m();return n.createElement("div",{className:"App"},n.createElement("header",{className:"App-header"},n.createElement("div",null,n.createElement("div",null,n.createElement("button",{"aria-label":"Increment value",className:"App-link",onClick:function(){return o(Le())}},"Increment"),n.createElement("span",null,r),n.createElement("button",{"aria-label":"Decrement value",className:"App-link",onClick:function(){return o(Ue())}},"Decrement"))),n.createElement("div",{className:"inline-logo"},n.createElement("img",{src:ut(),className:"App-logo rotate",alt:"logo"}),n.createElement("img",{src:ct(),className:"App-logo smaller",alt:"logo"})),n.createElement("a",{className:"App-link",href:"https://tauri.studio",target:"_blank",rel:"noopener noreferrer"},"Learn Tauri"),n.createElement("img",{src:ot(),className:"App-logo rotate",alt:"logo"}),n.createElement("button",{className:"App-link",onClick:function(){pt.push("/page1")}},"Go to page 1"),n.createElement("button",{className:"App-link",onClick:function(){pt.push("/")}},"Home"),n.createElement("p",null,"Edit ",n.createElement("code",null,"src/App.tsx")," and save to reload."),n.createElement("p",null,t&&t.map((function(e,t){return n.createElement(rt,{key:"".concat(e.path,"_").concat(t),route:e})})))))},routes:[{path:"/page1",component:function(){return n.createElement("div",null,"Page1")}}]};const lt=st;var pt=function(e){void 0===e&&(e={}),He||function(e,t){if(!e)throw new Error("Invariant failed")}(!1);var t=window.history,r=(window.navigator.userAgent.indexOf("Firefox"),e),n=r.getUserConfirmation,o=void 0===n?Je:n,i=r.hashType,u=void 0===i?"slash":i,a=e.basename?function(e){return"/"===e.charAt(e.length-1)?e.slice(0,-1):e}(Ve(e.basename)):"",c=Ge[u],f=c.encodePath,s=c.decodePath;function l(){var e=s(Ye());return a&&(e=function(e,t){return function(e,t){return 0===e.toLowerCase().indexOf(t.toLowerCase())&&-1!=="/?#".indexOf(e.charAt(t.length))}(e,t)?e.substr(t.length):e}(e,a)),qe(e)}var d,v,y=(d=null,v=[],{setPrompt:function(e){return d=e,function(){d===e&&(d=null)}},confirmTransitionTo:function(e,t,r,n){if(null!=d){var o="function"==typeof d?d(e,t):d;"string"==typeof o?"function"==typeof r?r(o,n):n(!0):n(!1!==o)}else n(!0)},appendListener:function(e){var t=!0;function r(){t&&e.apply(void 0,arguments)}return v.push(r),function(){t=!1,v=v.filter((function(e){return e!==r}))}},notifyListeners:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];v.forEach((function(e){return e.apply(void 0,t)}))}});function h(e){p(_,e),_.length=t.length,y.notifyListeners(_.location,_.action)}var m=!1,b=null;function g(){var e=Ye(),t=f(e);if(e!==t)et(t);else{var r=l(),n=_.location;if(!m&&function(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash===t.hash}(n,r))return;if(b===We(r))return;b=null,function(e){if(m)m=!1,h();else{y.confirmTransitionTo(e,"POP",o,(function(t){t?h({action:"POP",location:e}):function(e){var t=_.location,r=S.lastIndexOf(We(t));-1===r&&(r=0);var n=S.lastIndexOf(We(e));-1===n&&(n=0);var o=r-n;o&&(m=!0,E(o))}(e)}))}}(r)}}var w=Ye(),O=f(w);w!==O&&et(O);var P=l(),S=[We(P)];function E(e){t.go(e)}var A=0;function x(e){1===(A+=e)&&1===e?window.addEventListener(Ze,g):0===A&&window.removeEventListener(Ze,g)}var j=!1,_={length:t.length,action:"POP",location:P,createHref:function(e){var t=document.querySelector("base"),r="";return t&&t.getAttribute("href")&&(r=Qe(window.location.href)),r+"#"+f(a+We(e))},push:function(e,t){var r="PUSH",n=qe(e,void 0,void 0,_.location);y.confirmTransitionTo(n,r,o,(function(e){if(e){var t=We(n),o=f(a+t);if(Ye()!==o){b=t,function(e){window.location.hash=e}(o);var i=S.lastIndexOf(We(_.location)),u=S.slice(0,i+1);u.push(t),S=u,h({action:r,location:n})}else h()}}))},replace:function(e,t){var r="REPLACE",n=qe(e,void 0,void 0,_.location);y.confirmTransitionTo(n,r,o,(function(e){if(e){var t=We(n),o=f(a+t);Ye()!==o&&(b=t,et(o));var i=S.indexOf(We(_.location));-1!==i&&(S[i]=t),h({action:r,location:n})}}))},go:E,goBack:function(){E(-1)},goForward:function(){E(1)},block:function(e){void 0===e&&(e=!1);var t=y.setPrompt(e);return j||(x(1),j=!0),function(){return j&&(j=!1,x(-1)),t()}},listen:function(e){var t=y.appendListener(e);return x(1),function(){x(-1),t()}}};return _}();const dt=function(){return n.createElement(l,{store:ze},n.createElement(o.Router,{history:pt},n.createElement(o.Router,{history:pt},n.createElement(rt,{route:lt}))))}},922:(e,t,r)=>{e.exports=r(391)(3641)},543:(e,t,r)=>{e.exports=r(391)(3935)},201:(e,t,r)=>{e.exports=r(391)(4890)},166:(e,t,r)=>{e.exports=r(391)(5697)},587:(e,t,r)=>{e.exports=r(391)(7294)},391:e=>{"use strict";e.exports=vendor_cbca2458}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.p="",(()=>{"use strict";var e,t=r(587),n=r(543),o=document.getElementById("root");e=r(903).Z,(0,n.render)(t.createElement(e,null),o)})()})();