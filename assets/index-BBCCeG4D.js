(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var $m={exports:{}},jl={},Zm={exports:{}},Oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ta=Symbol.for("react.element"),s0=Symbol.for("react.portal"),o0=Symbol.for("react.fragment"),a0=Symbol.for("react.strict_mode"),l0=Symbol.for("react.profiler"),c0=Symbol.for("react.provider"),u0=Symbol.for("react.context"),d0=Symbol.for("react.forward_ref"),f0=Symbol.for("react.suspense"),h0=Symbol.for("react.memo"),p0=Symbol.for("react.lazy"),Yf=Symbol.iterator;function m0(n){return n===null||typeof n!="object"?null:(n=Yf&&n[Yf]||n["@@iterator"],typeof n=="function"?n:null)}var Qm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jm=Object.assign,eg={};function Xs(n,e,t){this.props=n,this.context=e,this.refs=eg,this.updater=t||Qm}Xs.prototype.isReactComponent={};Xs.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Xs.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function tg(){}tg.prototype=Xs.prototype;function Nd(n,e,t){this.props=n,this.context=e,this.refs=eg,this.updater=t||Qm}var Id=Nd.prototype=new tg;Id.constructor=Nd;Jm(Id,Xs.prototype);Id.isPureReactComponent=!0;var qf=Array.isArray,ng=Object.prototype.hasOwnProperty,Dd={current:null},ig={key:!0,ref:!0,__self:!0,__source:!0};function rg(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ng.call(e,i)&&!ig.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ta,type:n,key:s,ref:o,props:r,_owner:Dd.current}}function g0(n,e){return{$$typeof:ta,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Ud(n){return typeof n=="object"&&n!==null&&n.$$typeof===ta}function _0(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Kf=/\/+/g;function vc(n,e){return typeof n=="object"&&n!==null&&n.key!=null?_0(""+n.key):e.toString(36)}function tl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case ta:case s0:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+vc(o,0):i,qf(r)?(t="",n!=null&&(t=n.replace(Kf,"$&/")+"/"),tl(r,e,t,"",function(c){return c})):r!=null&&(Ud(r)&&(r=g0(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Kf,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",qf(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+vc(s,a);o+=tl(s,e,t,l,r)}else if(l=m0(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+vc(s,a++),o+=tl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function da(n,e,t){if(n==null)return n;var i=[],r=0;return tl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function v0(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Qt={current:null},nl={transition:null},x0={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:nl,ReactCurrentOwner:Dd};function sg(){throw Error("act(...) is not supported in production builds of React.")}Oe.Children={map:da,forEach:function(n,e,t){da(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return da(n,function(){e++}),e},toArray:function(n){return da(n,function(e){return e})||[]},only:function(n){if(!Ud(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Oe.Component=Xs;Oe.Fragment=o0;Oe.Profiler=l0;Oe.PureComponent=Nd;Oe.StrictMode=a0;Oe.Suspense=f0;Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x0;Oe.act=sg;Oe.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Jm({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Dd.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)ng.call(e,l)&&!ig.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ta,type:n.type,key:r,ref:s,props:i,_owner:o}};Oe.createContext=function(n){return n={$$typeof:u0,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:c0,_context:n},n.Consumer=n};Oe.createElement=rg;Oe.createFactory=function(n){var e=rg.bind(null,n);return e.type=n,e};Oe.createRef=function(){return{current:null}};Oe.forwardRef=function(n){return{$$typeof:d0,render:n}};Oe.isValidElement=Ud;Oe.lazy=function(n){return{$$typeof:p0,_payload:{_status:-1,_result:n},_init:v0}};Oe.memo=function(n,e){return{$$typeof:h0,type:n,compare:e===void 0?null:e}};Oe.startTransition=function(n){var e=nl.transition;nl.transition={};try{n()}finally{nl.transition=e}};Oe.unstable_act=sg;Oe.useCallback=function(n,e){return Qt.current.useCallback(n,e)};Oe.useContext=function(n){return Qt.current.useContext(n)};Oe.useDebugValue=function(){};Oe.useDeferredValue=function(n){return Qt.current.useDeferredValue(n)};Oe.useEffect=function(n,e){return Qt.current.useEffect(n,e)};Oe.useId=function(){return Qt.current.useId()};Oe.useImperativeHandle=function(n,e,t){return Qt.current.useImperativeHandle(n,e,t)};Oe.useInsertionEffect=function(n,e){return Qt.current.useInsertionEffect(n,e)};Oe.useLayoutEffect=function(n,e){return Qt.current.useLayoutEffect(n,e)};Oe.useMemo=function(n,e){return Qt.current.useMemo(n,e)};Oe.useReducer=function(n,e,t){return Qt.current.useReducer(n,e,t)};Oe.useRef=function(n){return Qt.current.useRef(n)};Oe.useState=function(n){return Qt.current.useState(n)};Oe.useSyncExternalStore=function(n,e,t){return Qt.current.useSyncExternalStore(n,e,t)};Oe.useTransition=function(){return Qt.current.useTransition()};Oe.version="18.3.1";Zm.exports=Oe;var Dn=Zm.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y0=Dn,S0=Symbol.for("react.element"),M0=Symbol.for("react.fragment"),E0=Object.prototype.hasOwnProperty,T0=y0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A0={key:!0,ref:!0,__self:!0,__source:!0};function og(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)E0.call(e,i)&&!A0.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:S0,type:n,key:s,ref:o,props:r,_owner:T0.current}}jl.Fragment=M0;jl.jsx=og;jl.jsxs=og;$m.exports=jl;var Rt=$m.exports,ag={exports:{}},gn={},lg={exports:{}},cg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(P,V){var G=P.length;P.push(V);e:for(;0<G;){var ne=G-1>>>1,pe=P[ne];if(0<r(pe,V))P[ne]=V,P[G]=pe,G=ne;else break e}}function t(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var V=P[0],G=P.pop();if(G!==V){P[0]=G;e:for(var ne=0,pe=P.length,We=pe>>>1;ne<We;){var H=2*(ne+1)-1,ee=P[H],le=H+1,oe=P[le];if(0>r(ee,G))le<pe&&0>r(oe,ee)?(P[ne]=oe,P[le]=G,ne=le):(P[ne]=ee,P[H]=G,ne=H);else if(le<pe&&0>r(oe,G))P[ne]=oe,P[le]=G,ne=le;else break e}}return V}function r(P,V){var G=P.sortIndex-V.sortIndex;return G!==0?G:P.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,p=!1,_=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(P){for(var V=t(c);V!==null;){if(V.callback===null)i(c);else if(V.startTime<=P)i(c),V.sortIndex=V.expirationTime,e(l,V);else break;V=t(c)}}function M(P){if(x=!1,g(P),!_)if(t(l)!==null)_=!0,Q(b);else{var V=t(c);V!==null&&Z(M,V.startTime-P)}}function b(P,V){_=!1,x&&(x=!1,h(L),L=-1),p=!0;var G=f;try{for(g(V),d=t(l);d!==null&&(!(d.expirationTime>V)||P&&!U());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,f=d.priorityLevel;var pe=ne(d.expirationTime<=V);V=n.unstable_now(),typeof pe=="function"?d.callback=pe:d===t(l)&&i(l),g(V)}else i(l);d=t(l)}if(d!==null)var We=!0;else{var H=t(c);H!==null&&Z(M,H.startTime-V),We=!1}return We}finally{d=null,f=G,p=!1}}var w=!1,A=null,L=-1,E=5,y=-1;function U(){return!(n.unstable_now()-y<E)}function W(){if(A!==null){var P=n.unstable_now();y=P;var V=!0;try{V=A(!0,P)}finally{V?N():(w=!1,A=null)}}else w=!1}var N;if(typeof v=="function")N=function(){v(W)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,X=j.port2;j.port1.onmessage=W,N=function(){X.postMessage(null)}}else N=function(){m(W,0)};function Q(P){A=P,w||(w=!0,N())}function Z(P,V){L=m(function(){P(n.unstable_now())},V)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(P){P.callback=null},n.unstable_continueExecution=function(){_||p||(_=!0,Q(b))},n.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<P?Math.floor(1e3/P):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(P){switch(f){case 1:case 2:case 3:var V=3;break;default:V=f}var G=f;f=V;try{return P()}finally{f=G}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(P,V){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var G=f;f=P;try{return V()}finally{f=G}},n.unstable_scheduleCallback=function(P,V,G){var ne=n.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ne+G:ne):G=ne,P){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=G+pe,P={id:u++,callback:V,priorityLevel:P,startTime:G,expirationTime:pe,sortIndex:-1},G>ne?(P.sortIndex=G,e(c,P),t(l)===null&&P===t(c)&&(x?(h(L),L=-1):x=!0,Z(M,G-ne))):(P.sortIndex=pe,e(l,P),_||p||(_=!0,Q(b))),P},n.unstable_shouldYield=U,n.unstable_wrapCallback=function(P){var V=f;return function(){var G=f;f=V;try{return P.apply(this,arguments)}finally{f=G}}}})(cg);lg.exports=cg;var w0=lg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R0=Dn,mn=w0;function $(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ug=new Set,Uo={};function Br(n,e){bs(n,e),bs(n+"Capture",e)}function bs(n,e){for(Uo[n]=e,n=0;n<e.length;n++)ug.add(e[n])}var xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bu=Object.prototype.hasOwnProperty,C0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$f={},Zf={};function b0(n){return bu.call(Zf,n)?!0:bu.call($f,n)?!1:C0.test(n)?Zf[n]=!0:($f[n]=!0,!1)}function P0(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function L0(n,e,t,i){if(e===null||typeof e>"u"||P0(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){It[n]=new Jt(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];It[e]=new Jt(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){It[n]=new Jt(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){It[n]=new Jt(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){It[n]=new Jt(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){It[n]=new Jt(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){It[n]=new Jt(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){It[n]=new Jt(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){It[n]=new Jt(n,5,!1,n.toLowerCase(),null,!1,!1)});var Fd=/[\-:]([a-z])/g;function Od(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Fd,Od);It[e]=new Jt(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Fd,Od);It[e]=new Jt(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Fd,Od);It[e]=new Jt(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){It[n]=new Jt(n,1,!1,n.toLowerCase(),null,!1,!1)});It.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){It[n]=new Jt(n,1,!1,n.toLowerCase(),null,!0,!0)});function kd(n,e,t,i){var r=It.hasOwnProperty(e)?It[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(L0(e,t,r,i)&&(t=null),i||r===null?b0(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Ti=R0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fa=Symbol.for("react.element"),os=Symbol.for("react.portal"),as=Symbol.for("react.fragment"),Bd=Symbol.for("react.strict_mode"),Pu=Symbol.for("react.profiler"),dg=Symbol.for("react.provider"),fg=Symbol.for("react.context"),zd=Symbol.for("react.forward_ref"),Lu=Symbol.for("react.suspense"),Nu=Symbol.for("react.suspense_list"),Hd=Symbol.for("react.memo"),Fi=Symbol.for("react.lazy"),hg=Symbol.for("react.offscreen"),Qf=Symbol.iterator;function eo(n){return n===null||typeof n!="object"?null:(n=Qf&&n[Qf]||n["@@iterator"],typeof n=="function"?n:null)}var pt=Object.assign,xc;function _o(n){if(xc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);xc=e&&e[1]||""}return`
`+xc+n}var yc=!1;function Sc(n,e){if(!n||yc)return"";yc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{yc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?_o(n):""}function N0(n){switch(n.tag){case 5:return _o(n.type);case 16:return _o("Lazy");case 13:return _o("Suspense");case 19:return _o("SuspenseList");case 0:case 2:case 15:return n=Sc(n.type,!1),n;case 11:return n=Sc(n.type.render,!1),n;case 1:return n=Sc(n.type,!0),n;default:return""}}function Iu(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case as:return"Fragment";case os:return"Portal";case Pu:return"Profiler";case Bd:return"StrictMode";case Lu:return"Suspense";case Nu:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case fg:return(n.displayName||"Context")+".Consumer";case dg:return(n._context.displayName||"Context")+".Provider";case zd:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Hd:return e=n.displayName||null,e!==null?e:Iu(n.type)||"Memo";case Fi:e=n._payload,n=n._init;try{return Iu(n(e))}catch{}}return null}function I0(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Iu(e);case 8:return e===Bd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ir(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function pg(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function D0(n){var e=pg(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function ha(n){n._valueTracker||(n._valueTracker=D0(n))}function mg(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=pg(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function ml(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Du(n,e){var t=e.checked;return pt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Jf(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=ir(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function gg(n,e){e=e.checked,e!=null&&kd(n,"checked",e,!1)}function Uu(n,e){gg(n,e);var t=ir(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Fu(n,e.type,t):e.hasOwnProperty("defaultValue")&&Fu(n,e.type,ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function eh(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Fu(n,e,t){(e!=="number"||ml(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var vo=Array.isArray;function xs(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+ir(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Ou(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error($(91));return pt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function th(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error($(92));if(vo(t)){if(1<t.length)throw Error($(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:ir(t)}}function _g(n,e){var t=ir(e.value),i=ir(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function nh(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function vg(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ku(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?vg(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var pa,xg=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(pa=pa||document.createElement("div"),pa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=pa.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Fo(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Eo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},U0=["Webkit","ms","Moz","O"];Object.keys(Eo).forEach(function(n){U0.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Eo[e]=Eo[n]})});function yg(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Eo.hasOwnProperty(n)&&Eo[n]?(""+e).trim():e+"px"}function Sg(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=yg(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var F0=pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bu(n,e){if(e){if(F0[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error($(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error($(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error($(61))}if(e.style!=null&&typeof e.style!="object")throw Error($(62))}}function zu(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hu=null;function Vd(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Vu=null,ys=null,Ss=null;function ih(n){if(n=ra(n)){if(typeof Vu!="function")throw Error($(280));var e=n.stateNode;e&&(e=Zl(e),Vu(n.stateNode,n.type,e))}}function Mg(n){ys?Ss?Ss.push(n):Ss=[n]:ys=n}function Eg(){if(ys){var n=ys,e=Ss;if(Ss=ys=null,ih(n),e)for(n=0;n<e.length;n++)ih(e[n])}}function Tg(n,e){return n(e)}function Ag(){}var Mc=!1;function wg(n,e,t){if(Mc)return n(e,t);Mc=!0;try{return Tg(n,e,t)}finally{Mc=!1,(ys!==null||Ss!==null)&&(Ag(),Eg())}}function Oo(n,e){var t=n.stateNode;if(t===null)return null;var i=Zl(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error($(231,e,typeof t));return t}var Gu=!1;if(xi)try{var to={};Object.defineProperty(to,"passive",{get:function(){Gu=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{Gu=!1}function O0(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var To=!1,gl=null,_l=!1,Wu=null,k0={onError:function(n){To=!0,gl=n}};function B0(n,e,t,i,r,s,o,a,l){To=!1,gl=null,O0.apply(k0,arguments)}function z0(n,e,t,i,r,s,o,a,l){if(B0.apply(this,arguments),To){if(To){var c=gl;To=!1,gl=null}else throw Error($(198));_l||(_l=!0,Wu=c)}}function zr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Rg(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function rh(n){if(zr(n)!==n)throw Error($(188))}function H0(n){var e=n.alternate;if(!e){if(e=zr(n),e===null)throw Error($(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return rh(r),n;if(s===i)return rh(r),e;s=s.sibling}throw Error($(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error($(189))}}if(t.alternate!==i)throw Error($(190))}if(t.tag!==3)throw Error($(188));return t.stateNode.current===t?n:e}function Cg(n){return n=H0(n),n!==null?bg(n):null}function bg(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=bg(n);if(e!==null)return e;n=n.sibling}return null}var Pg=mn.unstable_scheduleCallback,sh=mn.unstable_cancelCallback,V0=mn.unstable_shouldYield,G0=mn.unstable_requestPaint,_t=mn.unstable_now,W0=mn.unstable_getCurrentPriorityLevel,Gd=mn.unstable_ImmediatePriority,Lg=mn.unstable_UserBlockingPriority,vl=mn.unstable_NormalPriority,X0=mn.unstable_LowPriority,Ng=mn.unstable_IdlePriority,Yl=null,$n=null;function j0(n){if($n&&typeof $n.onCommitFiberRoot=="function")try{$n.onCommitFiberRoot(Yl,n,void 0,(n.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:K0,Y0=Math.log,q0=Math.LN2;function K0(n){return n>>>=0,n===0?32:31-(Y0(n)/q0|0)|0}var ma=64,ga=4194304;function xo(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function xl(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=xo(a):(s&=o,s!==0&&(i=xo(s)))}else o=t&~r,o!==0?i=xo(o):s!==0&&(i=xo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-On(e),r=1<<t,i|=n[t],e&=~r;return i}function $0(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Z0(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-On(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=$0(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Xu(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ig(){var n=ma;return ma<<=1,!(ma&4194240)&&(ma=64),n}function Ec(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function na(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-On(e),n[e]=t}function Q0(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-On(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Wd(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-On(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var $e=0;function Dg(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Ug,Xd,Fg,Og,kg,ju=!1,_a=[],ji=null,Yi=null,qi=null,ko=new Map,Bo=new Map,Bi=[],J0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function oh(n,e){switch(n){case"focusin":case"focusout":ji=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":qi=null;break;case"pointerover":case"pointerout":ko.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(e.pointerId)}}function no(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ra(e),e!==null&&Xd(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function ex(n,e,t,i,r){switch(e){case"focusin":return ji=no(ji,n,e,t,i,r),!0;case"dragenter":return Yi=no(Yi,n,e,t,i,r),!0;case"mouseover":return qi=no(qi,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return ko.set(s,no(ko.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Bo.set(s,no(Bo.get(s)||null,n,e,t,i,r)),!0}return!1}function Bg(n){var e=Ar(n.target);if(e!==null){var t=zr(e);if(t!==null){if(e=t.tag,e===13){if(e=Rg(t),e!==null){n.blockedOn=e,kg(n.priority,function(){Fg(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function il(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Yu(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Hu=i,t.target.dispatchEvent(i),Hu=null}else return e=ra(t),e!==null&&Xd(e),n.blockedOn=t,!1;e.shift()}return!0}function ah(n,e,t){il(n)&&t.delete(e)}function tx(){ju=!1,ji!==null&&il(ji)&&(ji=null),Yi!==null&&il(Yi)&&(Yi=null),qi!==null&&il(qi)&&(qi=null),ko.forEach(ah),Bo.forEach(ah)}function io(n,e){n.blockedOn===e&&(n.blockedOn=null,ju||(ju=!0,mn.unstable_scheduleCallback(mn.unstable_NormalPriority,tx)))}function zo(n){function e(r){return io(r,n)}if(0<_a.length){io(_a[0],n);for(var t=1;t<_a.length;t++){var i=_a[t];i.blockedOn===n&&(i.blockedOn=null)}}for(ji!==null&&io(ji,n),Yi!==null&&io(Yi,n),qi!==null&&io(qi,n),ko.forEach(e),Bo.forEach(e),t=0;t<Bi.length;t++)i=Bi[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Bi.length&&(t=Bi[0],t.blockedOn===null);)Bg(t),t.blockedOn===null&&Bi.shift()}var Ms=Ti.ReactCurrentBatchConfig,yl=!0;function nx(n,e,t,i){var r=$e,s=Ms.transition;Ms.transition=null;try{$e=1,jd(n,e,t,i)}finally{$e=r,Ms.transition=s}}function ix(n,e,t,i){var r=$e,s=Ms.transition;Ms.transition=null;try{$e=4,jd(n,e,t,i)}finally{$e=r,Ms.transition=s}}function jd(n,e,t,i){if(yl){var r=Yu(n,e,t,i);if(r===null)Ic(n,e,i,Sl,t),oh(n,i);else if(ex(r,n,e,t,i))i.stopPropagation();else if(oh(n,i),e&4&&-1<J0.indexOf(n)){for(;r!==null;){var s=ra(r);if(s!==null&&Ug(s),s=Yu(n,e,t,i),s===null&&Ic(n,e,i,Sl,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ic(n,e,i,null,t)}}var Sl=null;function Yu(n,e,t,i){if(Sl=null,n=Vd(i),n=Ar(n),n!==null)if(e=zr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Rg(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Sl=n,null}function zg(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(W0()){case Gd:return 1;case Lg:return 4;case vl:case X0:return 16;case Ng:return 536870912;default:return 16}default:return 16}}var Vi=null,Yd=null,rl=null;function Hg(){if(rl)return rl;var n,e=Yd,t=e.length,i,r="value"in Vi?Vi.value:Vi.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return rl=r.slice(n,1<i?1-i:void 0)}function sl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function va(){return!0}function lh(){return!1}function _n(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?va:lh,this.isPropagationStopped=lh,this}return pt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=va)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=va)},persist:function(){},isPersistent:va}),e}var js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qd=_n(js),ia=pt({},js,{view:0,detail:0}),rx=_n(ia),Tc,Ac,ro,ql=pt({},ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kd,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ro&&(ro&&n.type==="mousemove"?(Tc=n.screenX-ro.screenX,Ac=n.screenY-ro.screenY):Ac=Tc=0,ro=n),Tc)},movementY:function(n){return"movementY"in n?n.movementY:Ac}}),ch=_n(ql),sx=pt({},ql,{dataTransfer:0}),ox=_n(sx),ax=pt({},ia,{relatedTarget:0}),wc=_n(ax),lx=pt({},js,{animationName:0,elapsedTime:0,pseudoElement:0}),cx=_n(lx),ux=pt({},js,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),dx=_n(ux),fx=pt({},js,{data:0}),uh=_n(fx),hx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},px={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gx(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=mx[n])?!!e[n]:!1}function Kd(){return gx}var _x=pt({},ia,{key:function(n){if(n.key){var e=hx[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=sl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?px[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kd,charCode:function(n){return n.type==="keypress"?sl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?sl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),vx=_n(_x),xx=pt({},ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dh=_n(xx),yx=pt({},ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kd}),Sx=_n(yx),Mx=pt({},js,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ex=_n(Mx),Tx=pt({},ql,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ax=_n(Tx),wx=[9,13,27,32],$d=xi&&"CompositionEvent"in window,Ao=null;xi&&"documentMode"in document&&(Ao=document.documentMode);var Rx=xi&&"TextEvent"in window&&!Ao,Vg=xi&&(!$d||Ao&&8<Ao&&11>=Ao),fh=" ",hh=!1;function Gg(n,e){switch(n){case"keyup":return wx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wg(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ls=!1;function Cx(n,e){switch(n){case"compositionend":return Wg(e);case"keypress":return e.which!==32?null:(hh=!0,fh);case"textInput":return n=e.data,n===fh&&hh?null:n;default:return null}}function bx(n,e){if(ls)return n==="compositionend"||!$d&&Gg(n,e)?(n=Hg(),rl=Yd=Vi=null,ls=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Vg&&e.locale!=="ko"?null:e.data;default:return null}}var Px={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ph(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Px[n.type]:e==="textarea"}function Xg(n,e,t,i){Mg(i),e=Ml(e,"onChange"),0<e.length&&(t=new qd("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var wo=null,Ho=null;function Lx(n){n_(n,0)}function Kl(n){var e=ds(n);if(mg(e))return n}function Nx(n,e){if(n==="change")return e}var jg=!1;if(xi){var Rc;if(xi){var Cc="oninput"in document;if(!Cc){var mh=document.createElement("div");mh.setAttribute("oninput","return;"),Cc=typeof mh.oninput=="function"}Rc=Cc}else Rc=!1;jg=Rc&&(!document.documentMode||9<document.documentMode)}function gh(){wo&&(wo.detachEvent("onpropertychange",Yg),Ho=wo=null)}function Yg(n){if(n.propertyName==="value"&&Kl(Ho)){var e=[];Xg(e,Ho,n,Vd(n)),wg(Lx,e)}}function Ix(n,e,t){n==="focusin"?(gh(),wo=e,Ho=t,wo.attachEvent("onpropertychange",Yg)):n==="focusout"&&gh()}function Dx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Kl(Ho)}function Ux(n,e){if(n==="click")return Kl(e)}function Fx(n,e){if(n==="input"||n==="change")return Kl(e)}function Ox(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var zn=typeof Object.is=="function"?Object.is:Ox;function Vo(n,e){if(zn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!bu.call(e,r)||!zn(n[r],e[r]))return!1}return!0}function _h(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function vh(n,e){var t=_h(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=_h(t)}}function qg(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?qg(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Kg(){for(var n=window,e=ml();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=ml(n.document)}return e}function Zd(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function kx(n){var e=Kg(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&qg(t.ownerDocument.documentElement,t)){if(i!==null&&Zd(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=vh(t,s);var o=vh(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Bx=xi&&"documentMode"in document&&11>=document.documentMode,cs=null,qu=null,Ro=null,Ku=!1;function xh(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ku||cs==null||cs!==ml(i)||(i=cs,"selectionStart"in i&&Zd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ro&&Vo(Ro,i)||(Ro=i,i=Ml(qu,"onSelect"),0<i.length&&(e=new qd("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=cs)))}function xa(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var us={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionend:xa("Transition","TransitionEnd")},bc={},$g={};xi&&($g=document.createElement("div").style,"AnimationEvent"in window||(delete us.animationend.animation,delete us.animationiteration.animation,delete us.animationstart.animation),"TransitionEvent"in window||delete us.transitionend.transition);function $l(n){if(bc[n])return bc[n];if(!us[n])return n;var e=us[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in $g)return bc[n]=e[t];return n}var Zg=$l("animationend"),Qg=$l("animationiteration"),Jg=$l("animationstart"),e_=$l("transitionend"),t_=new Map,yh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(n,e){t_.set(n,e),Br(e,[n])}for(var Pc=0;Pc<yh.length;Pc++){var Lc=yh[Pc],zx=Lc.toLowerCase(),Hx=Lc[0].toUpperCase()+Lc.slice(1);or(zx,"on"+Hx)}or(Zg,"onAnimationEnd");or(Qg,"onAnimationIteration");or(Jg,"onAnimationStart");or("dblclick","onDoubleClick");or("focusin","onFocus");or("focusout","onBlur");or(e_,"onTransitionEnd");bs("onMouseEnter",["mouseout","mouseover"]);bs("onMouseLeave",["mouseout","mouseover"]);bs("onPointerEnter",["pointerout","pointerover"]);bs("onPointerLeave",["pointerout","pointerover"]);Br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Br("onBeforeInput",["compositionend","keypress","textInput","paste"]);Br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vx=new Set("cancel close invalid load scroll toggle".split(" ").concat(yo));function Sh(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,z0(i,e,void 0,n),n.currentTarget=null}function n_(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Sh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Sh(r,a,c),s=l}}}if(_l)throw n=Wu,_l=!1,Wu=null,n}function nt(n,e){var t=e[ed];t===void 0&&(t=e[ed]=new Set);var i=n+"__bubble";t.has(i)||(i_(e,n,2,!1),t.add(i))}function Nc(n,e,t){var i=0;e&&(i|=4),i_(t,n,i,e)}var ya="_reactListening"+Math.random().toString(36).slice(2);function Go(n){if(!n[ya]){n[ya]=!0,ug.forEach(function(t){t!=="selectionchange"&&(Vx.has(t)||Nc(t,!1,n),Nc(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[ya]||(e[ya]=!0,Nc("selectionchange",!1,e))}}function i_(n,e,t,i){switch(zg(e)){case 1:var r=nx;break;case 4:r=ix;break;default:r=jd}t=r.bind(null,e,t,n),r=void 0,!Gu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Ic(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ar(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}wg(function(){var c=s,u=Vd(t),d=[];e:{var f=t_.get(n);if(f!==void 0){var p=qd,_=n;switch(n){case"keypress":if(sl(t)===0)break e;case"keydown":case"keyup":p=vx;break;case"focusin":_="focus",p=wc;break;case"focusout":_="blur",p=wc;break;case"beforeblur":case"afterblur":p=wc;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=ch;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=ox;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Sx;break;case Zg:case Qg:case Jg:p=cx;break;case e_:p=Ex;break;case"scroll":p=rx;break;case"wheel":p=Ax;break;case"copy":case"cut":case"paste":p=dx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=dh}var x=(e&4)!==0,m=!x&&n==="scroll",h=x?f!==null?f+"Capture":null:f;x=[];for(var v=c,g;v!==null;){g=v;var M=g.stateNode;if(g.tag===5&&M!==null&&(g=M,h!==null&&(M=Oo(v,h),M!=null&&x.push(Wo(v,M,g)))),m)break;v=v.return}0<x.length&&(f=new p(f,_,null,t,u),d.push({event:f,listeners:x}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==Hu&&(_=t.relatedTarget||t.fromElement)&&(Ar(_)||_[yi]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=c,_=_?Ar(_):null,_!==null&&(m=zr(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(x=ch,M="onMouseLeave",h="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(x=dh,M="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?f:ds(p),g=_==null?f:ds(_),f=new x(M,v+"leave",p,t,u),f.target=m,f.relatedTarget=g,M=null,Ar(u)===c&&(x=new x(h,v+"enter",_,t,u),x.target=g,x.relatedTarget=m,M=x),m=M,p&&_)t:{for(x=p,h=_,v=0,g=x;g;g=Hr(g))v++;for(g=0,M=h;M;M=Hr(M))g++;for(;0<v-g;)x=Hr(x),v--;for(;0<g-v;)h=Hr(h),g--;for(;v--;){if(x===h||h!==null&&x===h.alternate)break t;x=Hr(x),h=Hr(h)}x=null}else x=null;p!==null&&Mh(d,f,p,x,!1),_!==null&&m!==null&&Mh(d,m,_,x,!0)}}e:{if(f=c?ds(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var b=Nx;else if(ph(f))if(jg)b=Fx;else{b=Dx;var w=Ix}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=Ux);if(b&&(b=b(n,c))){Xg(d,b,t,u);break e}w&&w(n,f,c),n==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&Fu(f,"number",f.value)}switch(w=c?ds(c):window,n){case"focusin":(ph(w)||w.contentEditable==="true")&&(cs=w,qu=c,Ro=null);break;case"focusout":Ro=qu=cs=null;break;case"mousedown":Ku=!0;break;case"contextmenu":case"mouseup":case"dragend":Ku=!1,xh(d,t,u);break;case"selectionchange":if(Bx)break;case"keydown":case"keyup":xh(d,t,u)}var A;if($d)e:{switch(n){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else ls?Gg(n,t)&&(L="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(L="onCompositionStart");L&&(Vg&&t.locale!=="ko"&&(ls||L!=="onCompositionStart"?L==="onCompositionEnd"&&ls&&(A=Hg()):(Vi=u,Yd="value"in Vi?Vi.value:Vi.textContent,ls=!0)),w=Ml(c,L),0<w.length&&(L=new uh(L,n,null,t,u),d.push({event:L,listeners:w}),A?L.data=A:(A=Wg(t),A!==null&&(L.data=A)))),(A=Rx?Cx(n,t):bx(n,t))&&(c=Ml(c,"onBeforeInput"),0<c.length&&(u=new uh("onBeforeInput","beforeinput",null,t,u),d.push({event:u,listeners:c}),u.data=A))}n_(d,e)})}function Wo(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Ml(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Oo(n,t),s!=null&&i.unshift(Wo(n,s,r)),s=Oo(n,e),s!=null&&i.push(Wo(n,s,r))),n=n.return}return i}function Hr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Mh(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Oo(t,s),l!=null&&o.unshift(Wo(t,l,a))):r||(l=Oo(t,s),l!=null&&o.push(Wo(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var Gx=/\r\n?/g,Wx=/\u0000|\uFFFD/g;function Eh(n){return(typeof n=="string"?n:""+n).replace(Gx,`
`).replace(Wx,"")}function Sa(n,e,t){if(e=Eh(e),Eh(n)!==e&&t)throw Error($(425))}function El(){}var $u=null,Zu=null;function Qu(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ju=typeof setTimeout=="function"?setTimeout:void 0,Xx=typeof clearTimeout=="function"?clearTimeout:void 0,Th=typeof Promise=="function"?Promise:void 0,jx=typeof queueMicrotask=="function"?queueMicrotask:typeof Th<"u"?function(n){return Th.resolve(null).then(n).catch(Yx)}:Ju;function Yx(n){setTimeout(function(){throw n})}function Dc(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),zo(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);zo(e)}function Ki(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Ah(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Ys=Math.random().toString(36).slice(2),jn="__reactFiber$"+Ys,Xo="__reactProps$"+Ys,yi="__reactContainer$"+Ys,ed="__reactEvents$"+Ys,qx="__reactListeners$"+Ys,Kx="__reactHandles$"+Ys;function Ar(n){var e=n[jn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[yi]||t[jn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Ah(n);n!==null;){if(t=n[jn])return t;n=Ah(n)}return e}n=t,t=n.parentNode}return null}function ra(n){return n=n[jn]||n[yi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ds(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error($(33))}function Zl(n){return n[Xo]||null}var td=[],fs=-1;function ar(n){return{current:n}}function rt(n){0>fs||(n.current=td[fs],td[fs]=null,fs--)}function et(n,e){fs++,td[fs]=n.current,n.current=e}var rr={},Gt=ar(rr),rn=ar(!1),Nr=rr;function Ps(n,e){var t=n.type.contextTypes;if(!t)return rr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function sn(n){return n=n.childContextTypes,n!=null}function Tl(){rt(rn),rt(Gt)}function wh(n,e,t){if(Gt.current!==rr)throw Error($(168));et(Gt,e),et(rn,t)}function r_(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error($(108,I0(n)||"Unknown",r));return pt({},t,i)}function Al(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||rr,Nr=Gt.current,et(Gt,n),et(rn,rn.current),!0}function Rh(n,e,t){var i=n.stateNode;if(!i)throw Error($(169));t?(n=r_(n,e,Nr),i.__reactInternalMemoizedMergedChildContext=n,rt(rn),rt(Gt),et(Gt,n)):rt(rn),et(rn,t)}var fi=null,Ql=!1,Uc=!1;function s_(n){fi===null?fi=[n]:fi.push(n)}function $x(n){Ql=!0,s_(n)}function lr(){if(!Uc&&fi!==null){Uc=!0;var n=0,e=$e;try{var t=fi;for($e=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}fi=null,Ql=!1}catch(r){throw fi!==null&&(fi=fi.slice(n+1)),Pg(Gd,lr),r}finally{$e=e,Uc=!1}}return null}var hs=[],ps=0,wl=null,Rl=0,Sn=[],Mn=0,Ir=null,hi=1,pi="";function xr(n,e){hs[ps++]=Rl,hs[ps++]=wl,wl=n,Rl=e}function o_(n,e,t){Sn[Mn++]=hi,Sn[Mn++]=pi,Sn[Mn++]=Ir,Ir=n;var i=hi;n=pi;var r=32-On(i)-1;i&=~(1<<r),t+=1;var s=32-On(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,hi=1<<32-On(e)+r|t<<r|i,pi=s+n}else hi=1<<s|t<<r|i,pi=n}function Qd(n){n.return!==null&&(xr(n,1),o_(n,1,0))}function Jd(n){for(;n===wl;)wl=hs[--ps],hs[ps]=null,Rl=hs[--ps],hs[ps]=null;for(;n===Ir;)Ir=Sn[--Mn],Sn[Mn]=null,pi=Sn[--Mn],Sn[Mn]=null,hi=Sn[--Mn],Sn[Mn]=null}var pn=null,hn=null,lt=!1,In=null;function a_(n,e){var t=En(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Ch(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,pn=n,hn=Ki(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,pn=n,hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Ir!==null?{id:hi,overflow:pi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=En(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,pn=n,hn=null,!0):!1;default:return!1}}function nd(n){return(n.mode&1)!==0&&(n.flags&128)===0}function id(n){if(lt){var e=hn;if(e){var t=e;if(!Ch(n,e)){if(nd(n))throw Error($(418));e=Ki(t.nextSibling);var i=pn;e&&Ch(n,e)?a_(i,t):(n.flags=n.flags&-4097|2,lt=!1,pn=n)}}else{if(nd(n))throw Error($(418));n.flags=n.flags&-4097|2,lt=!1,pn=n}}}function bh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;pn=n}function Ma(n){if(n!==pn)return!1;if(!lt)return bh(n),lt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Qu(n.type,n.memoizedProps)),e&&(e=hn)){if(nd(n))throw l_(),Error($(418));for(;e;)a_(n,e),e=Ki(e.nextSibling)}if(bh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error($(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){hn=Ki(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}hn=null}}else hn=pn?Ki(n.stateNode.nextSibling):null;return!0}function l_(){for(var n=hn;n;)n=Ki(n.nextSibling)}function Ls(){hn=pn=null,lt=!1}function ef(n){In===null?In=[n]:In.push(n)}var Zx=Ti.ReactCurrentBatchConfig;function so(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error($(309));var i=t.stateNode}if(!i)throw Error($(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error($(284));if(!t._owner)throw Error($(290,n))}return n}function Ea(n,e){throw n=Object.prototype.toString.call(e),Error($(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Ph(n){var e=n._init;return e(n._payload)}function c_(n){function e(h,v){if(n){var g=h.deletions;g===null?(h.deletions=[v],h.flags|=16):g.push(v)}}function t(h,v){if(!n)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=Ji(h,v),h.index=0,h.sibling=null,h}function s(h,v,g){return h.index=g,n?(g=h.alternate,g!==null?(g=g.index,g<v?(h.flags|=2,v):g):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return n&&h.alternate===null&&(h.flags|=2),h}function a(h,v,g,M){return v===null||v.tag!==6?(v=Vc(g,h.mode,M),v.return=h,v):(v=r(v,g),v.return=h,v)}function l(h,v,g,M){var b=g.type;return b===as?u(h,v,g.props.children,M,g.key):v!==null&&(v.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Fi&&Ph(b)===v.type)?(M=r(v,g.props),M.ref=so(h,v,g),M.return=h,M):(M=fl(g.type,g.key,g.props,null,h.mode,M),M.ref=so(h,v,g),M.return=h,M)}function c(h,v,g,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=Gc(g,h.mode,M),v.return=h,v):(v=r(v,g.children||[]),v.return=h,v)}function u(h,v,g,M,b){return v===null||v.tag!==7?(v=Lr(g,h.mode,M,b),v.return=h,v):(v=r(v,g),v.return=h,v)}function d(h,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Vc(""+v,h.mode,g),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case fa:return g=fl(v.type,v.key,v.props,null,h.mode,g),g.ref=so(h,null,v),g.return=h,g;case os:return v=Gc(v,h.mode,g),v.return=h,v;case Fi:var M=v._init;return d(h,M(v._payload),g)}if(vo(v)||eo(v))return v=Lr(v,h.mode,g,null),v.return=h,v;Ea(h,v)}return null}function f(h,v,g,M){var b=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return b!==null?null:a(h,v,""+g,M);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case fa:return g.key===b?l(h,v,g,M):null;case os:return g.key===b?c(h,v,g,M):null;case Fi:return b=g._init,f(h,v,b(g._payload),M)}if(vo(g)||eo(g))return b!==null?null:u(h,v,g,M,null);Ea(h,g)}return null}function p(h,v,g,M,b){if(typeof M=="string"&&M!==""||typeof M=="number")return h=h.get(g)||null,a(v,h,""+M,b);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case fa:return h=h.get(M.key===null?g:M.key)||null,l(v,h,M,b);case os:return h=h.get(M.key===null?g:M.key)||null,c(v,h,M,b);case Fi:var w=M._init;return p(h,v,g,w(M._payload),b)}if(vo(M)||eo(M))return h=h.get(g)||null,u(v,h,M,b,null);Ea(v,M)}return null}function _(h,v,g,M){for(var b=null,w=null,A=v,L=v=0,E=null;A!==null&&L<g.length;L++){A.index>L?(E=A,A=null):E=A.sibling;var y=f(h,A,g[L],M);if(y===null){A===null&&(A=E);break}n&&A&&y.alternate===null&&e(h,A),v=s(y,v,L),w===null?b=y:w.sibling=y,w=y,A=E}if(L===g.length)return t(h,A),lt&&xr(h,L),b;if(A===null){for(;L<g.length;L++)A=d(h,g[L],M),A!==null&&(v=s(A,v,L),w===null?b=A:w.sibling=A,w=A);return lt&&xr(h,L),b}for(A=i(h,A);L<g.length;L++)E=p(A,h,L,g[L],M),E!==null&&(n&&E.alternate!==null&&A.delete(E.key===null?L:E.key),v=s(E,v,L),w===null?b=E:w.sibling=E,w=E);return n&&A.forEach(function(U){return e(h,U)}),lt&&xr(h,L),b}function x(h,v,g,M){var b=eo(g);if(typeof b!="function")throw Error($(150));if(g=b.call(g),g==null)throw Error($(151));for(var w=b=null,A=v,L=v=0,E=null,y=g.next();A!==null&&!y.done;L++,y=g.next()){A.index>L?(E=A,A=null):E=A.sibling;var U=f(h,A,y.value,M);if(U===null){A===null&&(A=E);break}n&&A&&U.alternate===null&&e(h,A),v=s(U,v,L),w===null?b=U:w.sibling=U,w=U,A=E}if(y.done)return t(h,A),lt&&xr(h,L),b;if(A===null){for(;!y.done;L++,y=g.next())y=d(h,y.value,M),y!==null&&(v=s(y,v,L),w===null?b=y:w.sibling=y,w=y);return lt&&xr(h,L),b}for(A=i(h,A);!y.done;L++,y=g.next())y=p(A,h,L,y.value,M),y!==null&&(n&&y.alternate!==null&&A.delete(y.key===null?L:y.key),v=s(y,v,L),w===null?b=y:w.sibling=y,w=y);return n&&A.forEach(function(W){return e(h,W)}),lt&&xr(h,L),b}function m(h,v,g,M){if(typeof g=="object"&&g!==null&&g.type===as&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case fa:e:{for(var b=g.key,w=v;w!==null;){if(w.key===b){if(b=g.type,b===as){if(w.tag===7){t(h,w.sibling),v=r(w,g.props.children),v.return=h,h=v;break e}}else if(w.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Fi&&Ph(b)===w.type){t(h,w.sibling),v=r(w,g.props),v.ref=so(h,w,g),v.return=h,h=v;break e}t(h,w);break}else e(h,w);w=w.sibling}g.type===as?(v=Lr(g.props.children,h.mode,M,g.key),v.return=h,h=v):(M=fl(g.type,g.key,g.props,null,h.mode,M),M.ref=so(h,v,g),M.return=h,h=M)}return o(h);case os:e:{for(w=g.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){t(h,v.sibling),v=r(v,g.children||[]),v.return=h,h=v;break e}else{t(h,v);break}else e(h,v);v=v.sibling}v=Gc(g,h.mode,M),v.return=h,h=v}return o(h);case Fi:return w=g._init,m(h,v,w(g._payload),M)}if(vo(g))return _(h,v,g,M);if(eo(g))return x(h,v,g,M);Ea(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(t(h,v.sibling),v=r(v,g),v.return=h,h=v):(t(h,v),v=Vc(g,h.mode,M),v.return=h,h=v),o(h)):t(h,v)}return m}var Ns=c_(!0),u_=c_(!1),Cl=ar(null),bl=null,ms=null,tf=null;function nf(){tf=ms=bl=null}function rf(n){var e=Cl.current;rt(Cl),n._currentValue=e}function rd(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Es(n,e){bl=n,tf=ms=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(tn=!0),n.firstContext=null)}function An(n){var e=n._currentValue;if(tf!==n)if(n={context:n,memoizedValue:e,next:null},ms===null){if(bl===null)throw Error($(308));ms=n,bl.dependencies={lanes:0,firstContext:n}}else ms=ms.next=n;return e}var wr=null;function sf(n){wr===null?wr=[n]:wr.push(n)}function d_(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,sf(e)):(t.next=r.next,r.next=t),e.interleaved=t,Si(n,i)}function Si(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Oi=!1;function of(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function f_(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function _i(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function $i(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Ge&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Si(n,t)}return r=i.interleaved,r===null?(e.next=e,sf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Si(n,t)}function ol(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Wd(n,t)}}function Lh(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Pl(n,e,t,i){var r=n.updateQueue;Oi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=n.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,x=a;switch(f=e,p=t,x.tag){case 1:if(_=x.payload,typeof _=="function"){d=_.call(p,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,f=typeof _=="function"?_.call(p,d,f):_,f==null)break e;d=pt({},d,f);break e;case 2:Oi=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ur|=o,n.lanes=o,n.memoizedState=d}}function Nh(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error($(191,r));r.call(i)}}}var sa={},Zn=ar(sa),jo=ar(sa),Yo=ar(sa);function Rr(n){if(n===sa)throw Error($(174));return n}function af(n,e){switch(et(Yo,e),et(jo,n),et(Zn,sa),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ku(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=ku(e,n)}rt(Zn),et(Zn,e)}function Is(){rt(Zn),rt(jo),rt(Yo)}function h_(n){Rr(Yo.current);var e=Rr(Zn.current),t=ku(e,n.type);e!==t&&(et(jo,n),et(Zn,t))}function lf(n){jo.current===n&&(rt(Zn),rt(jo))}var dt=ar(0);function Ll(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fc=[];function cf(){for(var n=0;n<Fc.length;n++)Fc[n]._workInProgressVersionPrimary=null;Fc.length=0}var al=Ti.ReactCurrentDispatcher,Oc=Ti.ReactCurrentBatchConfig,Dr=0,ft=null,St=null,Ct=null,Nl=!1,Co=!1,qo=0,Qx=0;function Ot(){throw Error($(321))}function uf(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!zn(n[t],e[t]))return!1;return!0}function df(n,e,t,i,r,s){if(Dr=s,ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,al.current=n===null||n.memoizedState===null?ny:iy,n=t(i,r),Co){s=0;do{if(Co=!1,qo=0,25<=s)throw Error($(301));s+=1,Ct=St=null,e.updateQueue=null,al.current=ry,n=t(i,r)}while(Co)}if(al.current=Il,e=St!==null&&St.next!==null,Dr=0,Ct=St=ft=null,Nl=!1,e)throw Error($(300));return n}function ff(){var n=qo!==0;return qo=0,n}function Wn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?ft.memoizedState=Ct=n:Ct=Ct.next=n,Ct}function wn(){if(St===null){var n=ft.alternate;n=n!==null?n.memoizedState:null}else n=St.next;var e=Ct===null?ft.memoizedState:Ct.next;if(e!==null)Ct=e,St=n;else{if(n===null)throw Error($(310));St=n,n={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Ct===null?ft.memoizedState=Ct=n:Ct=Ct.next=n}return Ct}function Ko(n,e){return typeof e=="function"?e(n):e}function kc(n){var e=wn(),t=e.queue;if(t===null)throw Error($(311));t.lastRenderedReducer=n;var i=St,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Dr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,ft.lanes|=u,Ur|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,zn(i,e.memoizedState)||(tn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,ft.lanes|=s,Ur|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Bc(n){var e=wn(),t=e.queue;if(t===null)throw Error($(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);zn(s,e.memoizedState)||(tn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function p_(){}function m_(n,e){var t=ft,i=wn(),r=e(),s=!zn(i.memoizedState,r);if(s&&(i.memoizedState=r,tn=!0),i=i.queue,hf(v_.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Ct!==null&&Ct.memoizedState.tag&1){if(t.flags|=2048,$o(9,__.bind(null,t,i,r,e),void 0,null),bt===null)throw Error($(349));Dr&30||g_(t,e,r)}return r}function g_(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function __(n,e,t,i){e.value=t,e.getSnapshot=i,x_(e)&&y_(n)}function v_(n,e,t){return t(function(){x_(e)&&y_(n)})}function x_(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!zn(n,t)}catch{return!0}}function y_(n){var e=Si(n,1);e!==null&&kn(e,n,1,-1)}function Ih(n){var e=Wn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ko,lastRenderedState:n},e.queue=n,n=n.dispatch=ty.bind(null,ft,n),[e.memoizedState,n]}function $o(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function S_(){return wn().memoizedState}function ll(n,e,t,i){var r=Wn();ft.flags|=n,r.memoizedState=$o(1|e,t,void 0,i===void 0?null:i)}function Jl(n,e,t,i){var r=wn();i=i===void 0?null:i;var s=void 0;if(St!==null){var o=St.memoizedState;if(s=o.destroy,i!==null&&uf(i,o.deps)){r.memoizedState=$o(e,t,s,i);return}}ft.flags|=n,r.memoizedState=$o(1|e,t,s,i)}function Dh(n,e){return ll(8390656,8,n,e)}function hf(n,e){return Jl(2048,8,n,e)}function M_(n,e){return Jl(4,2,n,e)}function E_(n,e){return Jl(4,4,n,e)}function T_(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function A_(n,e,t){return t=t!=null?t.concat([n]):null,Jl(4,4,T_.bind(null,e,n),t)}function pf(){}function w_(n,e){var t=wn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&uf(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function R_(n,e){var t=wn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&uf(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function C_(n,e,t){return Dr&21?(zn(t,e)||(t=Ig(),ft.lanes|=t,Ur|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,tn=!0),n.memoizedState=t)}function Jx(n,e){var t=$e;$e=t!==0&&4>t?t:4,n(!0);var i=Oc.transition;Oc.transition={};try{n(!1),e()}finally{$e=t,Oc.transition=i}}function b_(){return wn().memoizedState}function ey(n,e,t){var i=Qi(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},P_(n))L_(e,t);else if(t=d_(n,e,t,i),t!==null){var r=$t();kn(t,n,i,r),N_(t,e,i)}}function ty(n,e,t){var i=Qi(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(P_(n))L_(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,zn(a,o)){var l=e.interleaved;l===null?(r.next=r,sf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=d_(n,e,r,i),t!==null&&(r=$t(),kn(t,n,i,r),N_(t,e,i))}}function P_(n){var e=n.alternate;return n===ft||e!==null&&e===ft}function L_(n,e){Co=Nl=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function N_(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Wd(n,t)}}var Il={readContext:An,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},ny={readContext:An,useCallback:function(n,e){return Wn().memoizedState=[n,e===void 0?null:e],n},useContext:An,useEffect:Dh,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,ll(4194308,4,T_.bind(null,e,n),t)},useLayoutEffect:function(n,e){return ll(4194308,4,n,e)},useInsertionEffect:function(n,e){return ll(4,2,n,e)},useMemo:function(n,e){var t=Wn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Wn();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=ey.bind(null,ft,n),[i.memoizedState,n]},useRef:function(n){var e=Wn();return n={current:n},e.memoizedState=n},useState:Ih,useDebugValue:pf,useDeferredValue:function(n){return Wn().memoizedState=n},useTransition:function(){var n=Ih(!1),e=n[0];return n=Jx.bind(null,n[1]),Wn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=ft,r=Wn();if(lt){if(t===void 0)throw Error($(407));t=t()}else{if(t=e(),bt===null)throw Error($(349));Dr&30||g_(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Dh(v_.bind(null,i,s,n),[n]),i.flags|=2048,$o(9,__.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Wn(),e=bt.identifierPrefix;if(lt){var t=pi,i=hi;t=(i&~(1<<32-On(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=qo++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=Qx++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},iy={readContext:An,useCallback:w_,useContext:An,useEffect:hf,useImperativeHandle:A_,useInsertionEffect:M_,useLayoutEffect:E_,useMemo:R_,useReducer:kc,useRef:S_,useState:function(){return kc(Ko)},useDebugValue:pf,useDeferredValue:function(n){var e=wn();return C_(e,St.memoizedState,n)},useTransition:function(){var n=kc(Ko)[0],e=wn().memoizedState;return[n,e]},useMutableSource:p_,useSyncExternalStore:m_,useId:b_,unstable_isNewReconciler:!1},ry={readContext:An,useCallback:w_,useContext:An,useEffect:hf,useImperativeHandle:A_,useInsertionEffect:M_,useLayoutEffect:E_,useMemo:R_,useReducer:Bc,useRef:S_,useState:function(){return Bc(Ko)},useDebugValue:pf,useDeferredValue:function(n){var e=wn();return St===null?e.memoizedState=n:C_(e,St.memoizedState,n)},useTransition:function(){var n=Bc(Ko)[0],e=wn().memoizedState;return[n,e]},useMutableSource:p_,useSyncExternalStore:m_,useId:b_,unstable_isNewReconciler:!1};function Ln(n,e){if(n&&n.defaultProps){e=pt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function sd(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:pt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var ec={isMounted:function(n){return(n=n._reactInternals)?zr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=$t(),r=Qi(n),s=_i(i,r);s.payload=e,t!=null&&(s.callback=t),e=$i(n,s,r),e!==null&&(kn(e,n,r,i),ol(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=$t(),r=Qi(n),s=_i(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=$i(n,s,r),e!==null&&(kn(e,n,r,i),ol(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=$t(),i=Qi(n),r=_i(t,i);r.tag=2,e!=null&&(r.callback=e),e=$i(n,r,i),e!==null&&(kn(e,n,i,t),ol(e,n,i))}};function Uh(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Vo(t,i)||!Vo(r,s):!0}function I_(n,e,t){var i=!1,r=rr,s=e.contextType;return typeof s=="object"&&s!==null?s=An(s):(r=sn(e)?Nr:Gt.current,i=e.contextTypes,s=(i=i!=null)?Ps(n,r):rr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ec,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Fh(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&ec.enqueueReplaceState(e,e.state,null)}function od(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},of(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=An(s):(s=sn(e)?Nr:Gt.current,r.context=Ps(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(sd(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ec.enqueueReplaceState(r,r.state,null),Pl(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ds(n,e){try{var t="",i=e;do t+=N0(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function zc(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function ad(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var sy=typeof WeakMap=="function"?WeakMap:Map;function D_(n,e,t){t=_i(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Ul||(Ul=!0,_d=i),ad(n,e)},t}function U_(n,e,t){t=_i(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){ad(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){ad(n,e),typeof i!="function"&&(Zi===null?Zi=new Set([this]):Zi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Oh(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new sy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=xy.bind(null,n,e,t),e.then(n,n))}function kh(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Bh(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=_i(-1,1),e.tag=2,$i(t,e,1))),t.lanes|=1),n)}var oy=Ti.ReactCurrentOwner,tn=!1;function jt(n,e,t,i){e.child=n===null?u_(e,null,t,i):Ns(e,n.child,t,i)}function zh(n,e,t,i,r){t=t.render;var s=e.ref;return Es(e,r),i=df(n,e,t,i,s,r),t=ff(),n!==null&&!tn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Mi(n,e,r)):(lt&&t&&Qd(e),e.flags|=1,jt(n,e,i,r),e.child)}function Hh(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Mf(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,F_(n,e,s,i,r)):(n=fl(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Vo,t(o,i)&&n.ref===e.ref)return Mi(n,e,r)}return e.flags|=1,n=Ji(s,i),n.ref=e.ref,n.return=e,e.child=n}function F_(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Vo(s,i)&&n.ref===e.ref)if(tn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(tn=!0);else return e.lanes=n.lanes,Mi(n,e,r)}return ld(n,e,t,i,r)}function O_(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},et(_s,dn),dn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,et(_s,dn),dn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,et(_s,dn),dn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,et(_s,dn),dn|=i;return jt(n,e,r,t),e.child}function k_(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function ld(n,e,t,i,r){var s=sn(t)?Nr:Gt.current;return s=Ps(e,s),Es(e,r),t=df(n,e,t,i,s,r),i=ff(),n!==null&&!tn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Mi(n,e,r)):(lt&&i&&Qd(e),e.flags|=1,jt(n,e,t,r),e.child)}function Vh(n,e,t,i,r){if(sn(t)){var s=!0;Al(e)}else s=!1;if(Es(e,r),e.stateNode===null)cl(n,e),I_(e,t,i),od(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=An(c):(c=sn(t)?Nr:Gt.current,c=Ps(e,c));var u=t.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Fh(e,o,i,c),Oi=!1;var f=e.memoizedState;o.state=f,Pl(e,i,o,r),l=e.memoizedState,a!==i||f!==l||rn.current||Oi?(typeof u=="function"&&(sd(e,t,u,i),l=e.memoizedState),(a=Oi||Uh(e,t,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,f_(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:Ln(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=An(l):(l=sn(t)?Nr:Gt.current,l=Ps(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Fh(e,o,i,l),Oi=!1,f=e.memoizedState,o.state=f,Pl(e,i,o,r);var _=e.memoizedState;a!==d||f!==_||rn.current||Oi?(typeof p=="function"&&(sd(e,t,p,i),_=e.memoizedState),(c=Oi||Uh(e,t,c,i,f,_,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return cd(n,e,t,i,s,r)}function cd(n,e,t,i,r,s){k_(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Rh(e,t,!1),Mi(n,e,s);i=e.stateNode,oy.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Ns(e,n.child,null,s),e.child=Ns(e,null,a,s)):jt(n,e,a,s),e.memoizedState=i.state,r&&Rh(e,t,!0),e.child}function B_(n){var e=n.stateNode;e.pendingContext?wh(n,e.pendingContext,e.pendingContext!==e.context):e.context&&wh(n,e.context,!1),af(n,e.containerInfo)}function Gh(n,e,t,i,r){return Ls(),ef(r),e.flags|=256,jt(n,e,t,i),e.child}var ud={dehydrated:null,treeContext:null,retryLane:0};function dd(n){return{baseLanes:n,cachePool:null,transitions:null}}function z_(n,e,t){var i=e.pendingProps,r=dt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),et(dt,r&1),n===null)return id(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ic(o,i,0,null),n=Lr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=dd(t),e.memoizedState=ud,n):mf(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return ay(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ji(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ji(a,s):(s=Lr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?dd(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=ud,i}return s=n.child,n=s.sibling,i=Ji(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function mf(n,e){return e=ic({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Ta(n,e,t,i){return i!==null&&ef(i),Ns(e,n.child,null,t),n=mf(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function ay(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=zc(Error($(422))),Ta(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ic({mode:"visible",children:i.children},r,0,null),s=Lr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ns(e,n.child,null,o),e.child.memoizedState=dd(o),e.memoizedState=ud,s);if(!(e.mode&1))return Ta(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error($(419)),i=zc(s,i,void 0),Ta(n,e,o,i)}if(a=(o&n.childLanes)!==0,tn||a){if(i=bt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Si(n,r),kn(i,n,r,-1))}return Sf(),i=zc(Error($(421))),Ta(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=yy.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,hn=Ki(r.nextSibling),pn=e,lt=!0,In=null,n!==null&&(Sn[Mn++]=hi,Sn[Mn++]=pi,Sn[Mn++]=Ir,hi=n.id,pi=n.overflow,Ir=e),e=mf(e,i.children),e.flags|=4096,e)}function Wh(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),rd(n.return,e,t)}function Hc(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function H_(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(jt(n,e,i.children,t),i=dt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Wh(n,t,e);else if(n.tag===19)Wh(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(et(dt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Ll(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Hc(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Ll(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Hc(e,!0,t,null,s);break;case"together":Hc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function cl(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Mi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Ur|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error($(153));if(e.child!==null){for(n=e.child,t=Ji(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Ji(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function ly(n,e,t){switch(e.tag){case 3:B_(e),Ls();break;case 5:h_(e);break;case 1:sn(e.type)&&Al(e);break;case 4:af(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;et(Cl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(et(dt,dt.current&1),e.flags|=128,null):t&e.child.childLanes?z_(n,e,t):(et(dt,dt.current&1),n=Mi(n,e,t),n!==null?n.sibling:null);et(dt,dt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return H_(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),et(dt,dt.current),i)break;return null;case 22:case 23:return e.lanes=0,O_(n,e,t)}return Mi(n,e,t)}var V_,fd,G_,W_;V_=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};fd=function(){};G_=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Rr(Zn.current);var s=null;switch(t){case"input":r=Du(n,r),i=Du(n,i),s=[];break;case"select":r=pt({},r,{value:void 0}),i=pt({},i,{value:void 0}),s=[];break;case"textarea":r=Ou(n,r),i=Ou(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=El)}Bu(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Uo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Uo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&nt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};W_=function(n,e,t,i){t!==i&&(e.flags|=4)};function oo(n,e){if(!lt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function kt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function cy(n,e,t){var i=e.pendingProps;switch(Jd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return sn(e.type)&&Tl(),kt(e),null;case 3:return i=e.stateNode,Is(),rt(rn),rt(Gt),cf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Ma(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,In!==null&&(yd(In),In=null))),fd(n,e),kt(e),null;case 5:lf(e);var r=Rr(Yo.current);if(t=e.type,n!==null&&e.stateNode!=null)G_(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error($(166));return kt(e),null}if(n=Rr(Zn.current),Ma(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[jn]=e,i[Xo]=s,n=(e.mode&1)!==0,t){case"dialog":nt("cancel",i),nt("close",i);break;case"iframe":case"object":case"embed":nt("load",i);break;case"video":case"audio":for(r=0;r<yo.length;r++)nt(yo[r],i);break;case"source":nt("error",i);break;case"img":case"image":case"link":nt("error",i),nt("load",i);break;case"details":nt("toggle",i);break;case"input":Jf(i,s),nt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},nt("invalid",i);break;case"textarea":th(i,s),nt("invalid",i)}Bu(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Sa(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Sa(i.textContent,a,n),r=["children",""+a]):Uo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&nt("scroll",i)}switch(t){case"input":ha(i),eh(i,s,!0);break;case"textarea":ha(i),nh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=El)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=vg(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[jn]=e,n[Xo]=i,V_(n,e,!1,!1),e.stateNode=n;e:{switch(o=zu(t,i),t){case"dialog":nt("cancel",n),nt("close",n),r=i;break;case"iframe":case"object":case"embed":nt("load",n),r=i;break;case"video":case"audio":for(r=0;r<yo.length;r++)nt(yo[r],n);r=i;break;case"source":nt("error",n),r=i;break;case"img":case"image":case"link":nt("error",n),nt("load",n),r=i;break;case"details":nt("toggle",n),r=i;break;case"input":Jf(n,i),r=Du(n,i),nt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=pt({},i,{value:void 0}),nt("invalid",n);break;case"textarea":th(n,i),r=Ou(n,i),nt("invalid",n);break;default:r=i}Bu(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Sg(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&xg(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Fo(n,l):typeof l=="number"&&Fo(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Uo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&nt("scroll",n):l!=null&&kd(n,s,l,o))}switch(t){case"input":ha(n),eh(n,i,!1);break;case"textarea":ha(n),nh(n);break;case"option":i.value!=null&&n.setAttribute("value",""+ir(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?xs(n,!!i.multiple,s,!1):i.defaultValue!=null&&xs(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=El)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return kt(e),null;case 6:if(n&&e.stateNode!=null)W_(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error($(166));if(t=Rr(Yo.current),Rr(Zn.current),Ma(e)){if(i=e.stateNode,t=e.memoizedProps,i[jn]=e,(s=i.nodeValue!==t)&&(n=pn,n!==null))switch(n.tag){case 3:Sa(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Sa(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[jn]=e,e.stateNode=i}return kt(e),null;case 13:if(rt(dt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(lt&&hn!==null&&e.mode&1&&!(e.flags&128))l_(),Ls(),e.flags|=98560,s=!1;else if(s=Ma(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error($(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error($(317));s[jn]=e}else Ls(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;kt(e),s=!1}else In!==null&&(yd(In),In=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||dt.current&1?Mt===0&&(Mt=3):Sf())),e.updateQueue!==null&&(e.flags|=4),kt(e),null);case 4:return Is(),fd(n,e),n===null&&Go(e.stateNode.containerInfo),kt(e),null;case 10:return rf(e.type._context),kt(e),null;case 17:return sn(e.type)&&Tl(),kt(e),null;case 19:if(rt(dt),s=e.memoizedState,s===null)return kt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)oo(s,!1);else{if(Mt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Ll(n),o!==null){for(e.flags|=128,oo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return et(dt,dt.current&1|2),e.child}n=n.sibling}s.tail!==null&&_t()>Us&&(e.flags|=128,i=!0,oo(s,!1),e.lanes=4194304)}else{if(!i)if(n=Ll(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),oo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!lt)return kt(e),null}else 2*_t()-s.renderingStartTime>Us&&t!==1073741824&&(e.flags|=128,i=!0,oo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=_t(),e.sibling=null,t=dt.current,et(dt,i?t&1|2:t&1),e):(kt(e),null);case 22:case 23:return yf(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?dn&1073741824&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),null;case 24:return null;case 25:return null}throw Error($(156,e.tag))}function uy(n,e){switch(Jd(e),e.tag){case 1:return sn(e.type)&&Tl(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Is(),rt(rn),rt(Gt),cf(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return lf(e),null;case 13:if(rt(dt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error($(340));Ls()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return rt(dt),null;case 4:return Is(),null;case 10:return rf(e.type._context),null;case 22:case 23:return yf(),null;case 24:return null;default:return null}}var Aa=!1,Ht=!1,dy=typeof WeakSet=="function"?WeakSet:Set,ce=null;function gs(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){mt(n,e,i)}else t.current=null}function hd(n,e,t){try{t()}catch(i){mt(n,e,i)}}var Xh=!1;function fy(n,e){if($u=yl,n=Kg(),Zd(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=n,f=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===n)break t;if(f===t&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Zu={focusedElem:n,selectionRange:t},yl=!1,ce=e;ce!==null;)if(e=ce,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,ce=n;else for(;ce!==null;){e=ce;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,m=_.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?x:Ln(e.type,x),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(M){mt(e,e.return,M)}if(n=e.sibling,n!==null){n.return=e.return,ce=n;break}ce=e.return}return _=Xh,Xh=!1,_}function bo(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&hd(e,t,s)}r=r.next}while(r!==i)}}function tc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function pd(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function X_(n){var e=n.alternate;e!==null&&(n.alternate=null,X_(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[jn],delete e[Xo],delete e[ed],delete e[qx],delete e[Kx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function j_(n){return n.tag===5||n.tag===3||n.tag===4}function jh(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||j_(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function md(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=El));else if(i!==4&&(n=n.child,n!==null))for(md(n,e,t),n=n.sibling;n!==null;)md(n,e,t),n=n.sibling}function gd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(gd(n,e,t),n=n.sibling;n!==null;)gd(n,e,t),n=n.sibling}var Lt=null,Nn=!1;function Ci(n,e,t){for(t=t.child;t!==null;)Y_(n,e,t),t=t.sibling}function Y_(n,e,t){if($n&&typeof $n.onCommitFiberUnmount=="function")try{$n.onCommitFiberUnmount(Yl,t)}catch{}switch(t.tag){case 5:Ht||gs(t,e);case 6:var i=Lt,r=Nn;Lt=null,Ci(n,e,t),Lt=i,Nn=r,Lt!==null&&(Nn?(n=Lt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Lt.removeChild(t.stateNode));break;case 18:Lt!==null&&(Nn?(n=Lt,t=t.stateNode,n.nodeType===8?Dc(n.parentNode,t):n.nodeType===1&&Dc(n,t),zo(n)):Dc(Lt,t.stateNode));break;case 4:i=Lt,r=Nn,Lt=t.stateNode.containerInfo,Nn=!0,Ci(n,e,t),Lt=i,Nn=r;break;case 0:case 11:case 14:case 15:if(!Ht&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&hd(t,e,o),r=r.next}while(r!==i)}Ci(n,e,t);break;case 1:if(!Ht&&(gs(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){mt(t,e,a)}Ci(n,e,t);break;case 21:Ci(n,e,t);break;case 22:t.mode&1?(Ht=(i=Ht)||t.memoizedState!==null,Ci(n,e,t),Ht=i):Ci(n,e,t);break;default:Ci(n,e,t)}}function Yh(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new dy),e.forEach(function(i){var r=Sy.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Rn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Lt=a.stateNode,Nn=!1;break e;case 3:Lt=a.stateNode.containerInfo,Nn=!0;break e;case 4:Lt=a.stateNode.containerInfo,Nn=!0;break e}a=a.return}if(Lt===null)throw Error($(160));Y_(s,o,r),Lt=null,Nn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)q_(e,n),e=e.sibling}function q_(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Rn(e,n),Gn(n),i&4){try{bo(3,n,n.return),tc(3,n)}catch(x){mt(n,n.return,x)}try{bo(5,n,n.return)}catch(x){mt(n,n.return,x)}}break;case 1:Rn(e,n),Gn(n),i&512&&t!==null&&gs(t,t.return);break;case 5:if(Rn(e,n),Gn(n),i&512&&t!==null&&gs(t,t.return),n.flags&32){var r=n.stateNode;try{Fo(r,"")}catch(x){mt(n,n.return,x)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&gg(r,s),zu(a,o);var c=zu(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?Sg(r,d):u==="dangerouslySetInnerHTML"?xg(r,d):u==="children"?Fo(r,d):kd(r,u,d,c)}switch(a){case"input":Uu(r,s);break;case"textarea":_g(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?xs(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?xs(r,!!s.multiple,s.defaultValue,!0):xs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Xo]=s}catch(x){mt(n,n.return,x)}}break;case 6:if(Rn(e,n),Gn(n),i&4){if(n.stateNode===null)throw Error($(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(x){mt(n,n.return,x)}}break;case 3:if(Rn(e,n),Gn(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{zo(e.containerInfo)}catch(x){mt(n,n.return,x)}break;case 4:Rn(e,n),Gn(n);break;case 13:Rn(e,n),Gn(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(vf=_t())),i&4&&Yh(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(Ht=(c=Ht)||u,Rn(e,n),Ht=c):Rn(e,n),Gn(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(ce=n,u=n.child;u!==null;){for(d=ce=u;ce!==null;){switch(f=ce,p=f.child,f.tag){case 0:case 11:case 14:case 15:bo(4,f,f.return);break;case 1:gs(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){mt(i,t,x)}}break;case 5:gs(f,f.return);break;case 22:if(f.memoizedState!==null){Kh(d);continue}}p!==null?(p.return=f,ce=p):Kh(d)}u=u.sibling}e:for(u=null,d=n;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=yg("display",o))}catch(x){mt(n,n.return,x)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){mt(n,n.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Rn(e,n),Gn(n),i&4&&Yh(n);break;case 21:break;default:Rn(e,n),Gn(n)}}function Gn(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(j_(t)){var i=t;break e}t=t.return}throw Error($(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Fo(r,""),i.flags&=-33);var s=jh(n);gd(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=jh(n);md(n,a,o);break;default:throw Error($(161))}}catch(l){mt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function hy(n,e,t){ce=n,K_(n)}function K_(n,e,t){for(var i=(n.mode&1)!==0;ce!==null;){var r=ce,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Aa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Ht;a=Aa;var c=Ht;if(Aa=o,(Ht=l)&&!c)for(ce=r;ce!==null;)o=ce,l=o.child,o.tag===22&&o.memoizedState!==null?$h(r):l!==null?(l.return=o,ce=l):$h(r);for(;s!==null;)ce=s,K_(s),s=s.sibling;ce=r,Aa=a,Ht=c}qh(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ce=s):qh(n)}}function qh(n){for(;ce!==null;){var e=ce;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ht||tc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ht)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Ln(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Nh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Nh(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&zo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}Ht||e.flags&512&&pd(e)}catch(f){mt(e,e.return,f)}}if(e===n){ce=null;break}if(t=e.sibling,t!==null){t.return=e.return,ce=t;break}ce=e.return}}function Kh(n){for(;ce!==null;){var e=ce;if(e===n){ce=null;break}var t=e.sibling;if(t!==null){t.return=e.return,ce=t;break}ce=e.return}}function $h(n){for(;ce!==null;){var e=ce;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{tc(4,e)}catch(l){mt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){mt(e,r,l)}}var s=e.return;try{pd(e)}catch(l){mt(e,s,l)}break;case 5:var o=e.return;try{pd(e)}catch(l){mt(e,o,l)}}}catch(l){mt(e,e.return,l)}if(e===n){ce=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ce=a;break}ce=e.return}}var py=Math.ceil,Dl=Ti.ReactCurrentDispatcher,gf=Ti.ReactCurrentOwner,Tn=Ti.ReactCurrentBatchConfig,Ge=0,bt=null,xt=null,Nt=0,dn=0,_s=ar(0),Mt=0,Zo=null,Ur=0,nc=0,_f=0,Po=null,en=null,vf=0,Us=1/0,di=null,Ul=!1,_d=null,Zi=null,wa=!1,Gi=null,Fl=0,Lo=0,vd=null,ul=-1,dl=0;function $t(){return Ge&6?_t():ul!==-1?ul:ul=_t()}function Qi(n){return n.mode&1?Ge&2&&Nt!==0?Nt&-Nt:Zx.transition!==null?(dl===0&&(dl=Ig()),dl):(n=$e,n!==0||(n=window.event,n=n===void 0?16:zg(n.type)),n):1}function kn(n,e,t,i){if(50<Lo)throw Lo=0,vd=null,Error($(185));na(n,t,i),(!(Ge&2)||n!==bt)&&(n===bt&&(!(Ge&2)&&(nc|=t),Mt===4&&zi(n,Nt)),on(n,i),t===1&&Ge===0&&!(e.mode&1)&&(Us=_t()+500,Ql&&lr()))}function on(n,e){var t=n.callbackNode;Z0(n,e);var i=xl(n,n===bt?Nt:0);if(i===0)t!==null&&sh(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&sh(t),e===1)n.tag===0?$x(Zh.bind(null,n)):s_(Zh.bind(null,n)),jx(function(){!(Ge&6)&&lr()}),t=null;else{switch(Dg(i)){case 1:t=Gd;break;case 4:t=Lg;break;case 16:t=vl;break;case 536870912:t=Ng;break;default:t=vl}t=iv(t,$_.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function $_(n,e){if(ul=-1,dl=0,Ge&6)throw Error($(327));var t=n.callbackNode;if(Ts()&&n.callbackNode!==t)return null;var i=xl(n,n===bt?Nt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Ol(n,i);else{e=i;var r=Ge;Ge|=2;var s=Q_();(bt!==n||Nt!==e)&&(di=null,Us=_t()+500,Pr(n,e));do try{_y();break}catch(a){Z_(n,a)}while(!0);nf(),Dl.current=s,Ge=r,xt!==null?e=0:(bt=null,Nt=0,e=Mt)}if(e!==0){if(e===2&&(r=Xu(n),r!==0&&(i=r,e=xd(n,r))),e===1)throw t=Zo,Pr(n,0),zi(n,i),on(n,_t()),t;if(e===6)zi(n,i);else{if(r=n.current.alternate,!(i&30)&&!my(r)&&(e=Ol(n,i),e===2&&(s=Xu(n),s!==0&&(i=s,e=xd(n,s))),e===1))throw t=Zo,Pr(n,0),zi(n,i),on(n,_t()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error($(345));case 2:yr(n,en,di);break;case 3:if(zi(n,i),(i&130023424)===i&&(e=vf+500-_t(),10<e)){if(xl(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){$t(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Ju(yr.bind(null,n,en,di),e);break}yr(n,en,di);break;case 4:if(zi(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-On(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=_t()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*py(i/1960))-i,10<i){n.timeoutHandle=Ju(yr.bind(null,n,en,di),i);break}yr(n,en,di);break;case 5:yr(n,en,di);break;default:throw Error($(329))}}}return on(n,_t()),n.callbackNode===t?$_.bind(null,n):null}function xd(n,e){var t=Po;return n.current.memoizedState.isDehydrated&&(Pr(n,e).flags|=256),n=Ol(n,e),n!==2&&(e=en,en=t,e!==null&&yd(e)),n}function yd(n){en===null?en=n:en.push.apply(en,n)}function my(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!zn(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function zi(n,e){for(e&=~_f,e&=~nc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-On(e),i=1<<t;n[t]=-1,e&=~i}}function Zh(n){if(Ge&6)throw Error($(327));Ts();var e=xl(n,0);if(!(e&1))return on(n,_t()),null;var t=Ol(n,e);if(n.tag!==0&&t===2){var i=Xu(n);i!==0&&(e=i,t=xd(n,i))}if(t===1)throw t=Zo,Pr(n,0),zi(n,e),on(n,_t()),t;if(t===6)throw Error($(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,yr(n,en,di),on(n,_t()),null}function xf(n,e){var t=Ge;Ge|=1;try{return n(e)}finally{Ge=t,Ge===0&&(Us=_t()+500,Ql&&lr())}}function Fr(n){Gi!==null&&Gi.tag===0&&!(Ge&6)&&Ts();var e=Ge;Ge|=1;var t=Tn.transition,i=$e;try{if(Tn.transition=null,$e=1,n)return n()}finally{$e=i,Tn.transition=t,Ge=e,!(Ge&6)&&lr()}}function yf(){dn=_s.current,rt(_s)}function Pr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Xx(t)),xt!==null)for(t=xt.return;t!==null;){var i=t;switch(Jd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Tl();break;case 3:Is(),rt(rn),rt(Gt),cf();break;case 5:lf(i);break;case 4:Is();break;case 13:rt(dt);break;case 19:rt(dt);break;case 10:rf(i.type._context);break;case 22:case 23:yf()}t=t.return}if(bt=n,xt=n=Ji(n.current,null),Nt=dn=e,Mt=0,Zo=null,_f=nc=Ur=0,en=Po=null,wr!==null){for(e=0;e<wr.length;e++)if(t=wr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}wr=null}return n}function Z_(n,e){do{var t=xt;try{if(nf(),al.current=Il,Nl){for(var i=ft.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Nl=!1}if(Dr=0,Ct=St=ft=null,Co=!1,qo=0,gf.current=null,t===null||t.return===null){Mt=1,Zo=e,xt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Nt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=kh(o);if(p!==null){p.flags&=-257,Bh(p,o,a,s,e),p.mode&1&&Oh(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){Oh(s,c,e),Sf();break e}l=Error($(426))}}else if(lt&&a.mode&1){var m=kh(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Bh(m,o,a,s,e),ef(Ds(l,a));break e}}s=l=Ds(l,a),Mt!==4&&(Mt=2),Po===null?Po=[s]:Po.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=D_(s,l,e);Lh(s,h);break e;case 1:a=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Zi===null||!Zi.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=U_(s,a,e);Lh(s,M);break e}}s=s.return}while(s!==null)}ev(t)}catch(b){e=b,xt===t&&t!==null&&(xt=t=t.return);continue}break}while(!0)}function Q_(){var n=Dl.current;return Dl.current=Il,n===null?Il:n}function Sf(){(Mt===0||Mt===3||Mt===2)&&(Mt=4),bt===null||!(Ur&268435455)&&!(nc&268435455)||zi(bt,Nt)}function Ol(n,e){var t=Ge;Ge|=2;var i=Q_();(bt!==n||Nt!==e)&&(di=null,Pr(n,e));do try{gy();break}catch(r){Z_(n,r)}while(!0);if(nf(),Ge=t,Dl.current=i,xt!==null)throw Error($(261));return bt=null,Nt=0,Mt}function gy(){for(;xt!==null;)J_(xt)}function _y(){for(;xt!==null&&!V0();)J_(xt)}function J_(n){var e=nv(n.alternate,n,dn);n.memoizedProps=n.pendingProps,e===null?ev(n):xt=e,gf.current=null}function ev(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=uy(t,e),t!==null){t.flags&=32767,xt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Mt=6,xt=null;return}}else if(t=cy(t,e,dn),t!==null){xt=t;return}if(e=e.sibling,e!==null){xt=e;return}xt=e=n}while(e!==null);Mt===0&&(Mt=5)}function yr(n,e,t){var i=$e,r=Tn.transition;try{Tn.transition=null,$e=1,vy(n,e,t,i)}finally{Tn.transition=r,$e=i}return null}function vy(n,e,t,i){do Ts();while(Gi!==null);if(Ge&6)throw Error($(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error($(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(Q0(n,s),n===bt&&(xt=bt=null,Nt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||wa||(wa=!0,iv(vl,function(){return Ts(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Tn.transition,Tn.transition=null;var o=$e;$e=1;var a=Ge;Ge|=4,gf.current=null,fy(n,t),q_(t,n),kx(Zu),yl=!!$u,Zu=$u=null,n.current=t,hy(t),G0(),Ge=a,$e=o,Tn.transition=s}else n.current=t;if(wa&&(wa=!1,Gi=n,Fl=r),s=n.pendingLanes,s===0&&(Zi=null),j0(t.stateNode),on(n,_t()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ul)throw Ul=!1,n=_d,_d=null,n;return Fl&1&&n.tag!==0&&Ts(),s=n.pendingLanes,s&1?n===vd?Lo++:(Lo=0,vd=n):Lo=0,lr(),null}function Ts(){if(Gi!==null){var n=Dg(Fl),e=Tn.transition,t=$e;try{if(Tn.transition=null,$e=16>n?16:n,Gi===null)var i=!1;else{if(n=Gi,Gi=null,Fl=0,Ge&6)throw Error($(331));var r=Ge;for(Ge|=4,ce=n.current;ce!==null;){var s=ce,o=s.child;if(ce.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ce=c;ce!==null;){var u=ce;switch(u.tag){case 0:case 11:case 15:bo(8,u,s)}var d=u.child;if(d!==null)d.return=u,ce=d;else for(;ce!==null;){u=ce;var f=u.sibling,p=u.return;if(X_(u),u===c){ce=null;break}if(f!==null){f.return=p,ce=f;break}ce=p}}}var _=s.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}ce=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ce=o;else e:for(;ce!==null;){if(s=ce,s.flags&2048)switch(s.tag){case 0:case 11:case 15:bo(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,ce=h;break e}ce=s.return}}var v=n.current;for(ce=v;ce!==null;){o=ce;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,ce=g;else e:for(o=v;ce!==null;){if(a=ce,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:tc(9,a)}}catch(b){mt(a,a.return,b)}if(a===o){ce=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,ce=M;break e}ce=a.return}}if(Ge=r,lr(),$n&&typeof $n.onPostCommitFiberRoot=="function")try{$n.onPostCommitFiberRoot(Yl,n)}catch{}i=!0}return i}finally{$e=t,Tn.transition=e}}return!1}function Qh(n,e,t){e=Ds(t,e),e=D_(n,e,1),n=$i(n,e,1),e=$t(),n!==null&&(na(n,1,e),on(n,e))}function mt(n,e,t){if(n.tag===3)Qh(n,n,t);else for(;e!==null;){if(e.tag===3){Qh(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Zi===null||!Zi.has(i))){n=Ds(t,n),n=U_(e,n,1),e=$i(e,n,1),n=$t(),e!==null&&(na(e,1,n),on(e,n));break}}e=e.return}}function xy(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=$t(),n.pingedLanes|=n.suspendedLanes&t,bt===n&&(Nt&t)===t&&(Mt===4||Mt===3&&(Nt&130023424)===Nt&&500>_t()-vf?Pr(n,0):_f|=t),on(n,e)}function tv(n,e){e===0&&(n.mode&1?(e=ga,ga<<=1,!(ga&130023424)&&(ga=4194304)):e=1);var t=$t();n=Si(n,e),n!==null&&(na(n,e,t),on(n,t))}function yy(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),tv(n,t)}function Sy(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error($(314))}i!==null&&i.delete(e),tv(n,t)}var nv;nv=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||rn.current)tn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return tn=!1,ly(n,e,t);tn=!!(n.flags&131072)}else tn=!1,lt&&e.flags&1048576&&o_(e,Rl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;cl(n,e),n=e.pendingProps;var r=Ps(e,Gt.current);Es(e,t),r=df(null,e,i,n,r,t);var s=ff();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,sn(i)?(s=!0,Al(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,of(e),r.updater=ec,e.stateNode=r,r._reactInternals=e,od(e,i,n,t),e=cd(null,e,i,!0,s,t)):(e.tag=0,lt&&s&&Qd(e),jt(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(cl(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ey(i),n=Ln(i,n),r){case 0:e=ld(null,e,i,n,t);break e;case 1:e=Vh(null,e,i,n,t);break e;case 11:e=zh(null,e,i,n,t);break e;case 14:e=Hh(null,e,i,Ln(i.type,n),t);break e}throw Error($(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),ld(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Vh(n,e,i,r,t);case 3:e:{if(B_(e),n===null)throw Error($(387));i=e.pendingProps,s=e.memoizedState,r=s.element,f_(n,e),Pl(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ds(Error($(423)),e),e=Gh(n,e,i,t,r);break e}else if(i!==r){r=Ds(Error($(424)),e),e=Gh(n,e,i,t,r);break e}else for(hn=Ki(e.stateNode.containerInfo.firstChild),pn=e,lt=!0,In=null,t=u_(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ls(),i===r){e=Mi(n,e,t);break e}jt(n,e,i,t)}e=e.child}return e;case 5:return h_(e),n===null&&id(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Qu(i,r)?o=null:s!==null&&Qu(i,s)&&(e.flags|=32),k_(n,e),jt(n,e,o,t),e.child;case 6:return n===null&&id(e),null;case 13:return z_(n,e,t);case 4:return af(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Ns(e,null,i,t):jt(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),zh(n,e,i,r,t);case 7:return jt(n,e,e.pendingProps,t),e.child;case 8:return jt(n,e,e.pendingProps.children,t),e.child;case 12:return jt(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,et(Cl,i._currentValue),i._currentValue=o,s!==null)if(zn(s.value,o)){if(s.children===r.children&&!rn.current){e=Mi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=_i(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),rd(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error($(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),rd(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}jt(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Es(e,t),r=An(r),i=i(r),e.flags|=1,jt(n,e,i,t),e.child;case 14:return i=e.type,r=Ln(i,e.pendingProps),r=Ln(i.type,r),Hh(n,e,i,r,t);case 15:return F_(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),cl(n,e),e.tag=1,sn(i)?(n=!0,Al(e)):n=!1,Es(e,t),I_(e,i,r),od(e,i,r,t),cd(null,e,i,!0,n,t);case 19:return H_(n,e,t);case 22:return O_(n,e,t)}throw Error($(156,e.tag))};function iv(n,e){return Pg(n,e)}function My(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(n,e,t,i){return new My(n,e,t,i)}function Mf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ey(n){if(typeof n=="function")return Mf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===zd)return 11;if(n===Hd)return 14}return 2}function Ji(n,e){var t=n.alternate;return t===null?(t=En(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function fl(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Mf(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case as:return Lr(t.children,r,s,e);case Bd:o=8,r|=8;break;case Pu:return n=En(12,t,e,r|2),n.elementType=Pu,n.lanes=s,n;case Lu:return n=En(13,t,e,r),n.elementType=Lu,n.lanes=s,n;case Nu:return n=En(19,t,e,r),n.elementType=Nu,n.lanes=s,n;case hg:return ic(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case dg:o=10;break e;case fg:o=9;break e;case zd:o=11;break e;case Hd:o=14;break e;case Fi:o=16,i=null;break e}throw Error($(130,n==null?n:typeof n,""))}return e=En(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Lr(n,e,t,i){return n=En(7,n,i,e),n.lanes=t,n}function ic(n,e,t,i){return n=En(22,n,i,e),n.elementType=hg,n.lanes=t,n.stateNode={isHidden:!1},n}function Vc(n,e,t){return n=En(6,n,null,e),n.lanes=t,n}function Gc(n,e,t){return e=En(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Ty(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ec(0),this.expirationTimes=Ec(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ec(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ef(n,e,t,i,r,s,o,a,l){return n=new Ty(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=En(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},of(s),n}function Ay(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:os,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function rv(n){if(!n)return rr;n=n._reactInternals;e:{if(zr(n)!==n||n.tag!==1)throw Error($(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error($(171))}if(n.tag===1){var t=n.type;if(sn(t))return r_(n,t,e)}return e}function sv(n,e,t,i,r,s,o,a,l){return n=Ef(t,i,!0,n,r,s,o,a,l),n.context=rv(null),t=n.current,i=$t(),r=Qi(t),s=_i(i,r),s.callback=e??null,$i(t,s,r),n.current.lanes=r,na(n,r,i),on(n,i),n}function rc(n,e,t,i){var r=e.current,s=$t(),o=Qi(r);return t=rv(t),e.context===null?e.context=t:e.pendingContext=t,e=_i(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=$i(r,e,o),n!==null&&(kn(n,r,o,s),ol(n,r,o)),o}function kl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Jh(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Tf(n,e){Jh(n,e),(n=n.alternate)&&Jh(n,e)}function wy(){return null}var ov=typeof reportError=="function"?reportError:function(n){console.error(n)};function Af(n){this._internalRoot=n}sc.prototype.render=Af.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error($(409));rc(n,e,null,null)};sc.prototype.unmount=Af.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Fr(function(){rc(null,n,null,null)}),e[yi]=null}};function sc(n){this._internalRoot=n}sc.prototype.unstable_scheduleHydration=function(n){if(n){var e=Og();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Bi.length&&e!==0&&e<Bi[t].priority;t++);Bi.splice(t,0,n),t===0&&Bg(n)}};function wf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function oc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function ep(){}function Ry(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=kl(o);s.call(c)}}var o=sv(e,i,n,0,null,!1,!1,"",ep);return n._reactRootContainer=o,n[yi]=o.current,Go(n.nodeType===8?n.parentNode:n),Fr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=kl(l);a.call(c)}}var l=Ef(n,0,!1,null,null,!1,!1,"",ep);return n._reactRootContainer=l,n[yi]=l.current,Go(n.nodeType===8?n.parentNode:n),Fr(function(){rc(e,l,t,i)}),l}function ac(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=kl(o);a.call(l)}}rc(e,o,n,r)}else o=Ry(t,e,n,r,i);return kl(o)}Ug=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=xo(e.pendingLanes);t!==0&&(Wd(e,t|1),on(e,_t()),!(Ge&6)&&(Us=_t()+500,lr()))}break;case 13:Fr(function(){var i=Si(n,1);if(i!==null){var r=$t();kn(i,n,1,r)}}),Tf(n,1)}};Xd=function(n){if(n.tag===13){var e=Si(n,134217728);if(e!==null){var t=$t();kn(e,n,134217728,t)}Tf(n,134217728)}};Fg=function(n){if(n.tag===13){var e=Qi(n),t=Si(n,e);if(t!==null){var i=$t();kn(t,n,e,i)}Tf(n,e)}};Og=function(){return $e};kg=function(n,e){var t=$e;try{return $e=n,e()}finally{$e=t}};Vu=function(n,e,t){switch(e){case"input":if(Uu(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Zl(i);if(!r)throw Error($(90));mg(i),Uu(i,r)}}}break;case"textarea":_g(n,t);break;case"select":e=t.value,e!=null&&xs(n,!!t.multiple,e,!1)}};Tg=xf;Ag=Fr;var Cy={usingClientEntryPoint:!1,Events:[ra,ds,Zl,Mg,Eg,xf]},ao={findFiberByHostInstance:Ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},by={bundleType:ao.bundleType,version:ao.version,rendererPackageName:ao.rendererPackageName,rendererConfig:ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ti.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Cg(n),n===null?null:n.stateNode},findFiberByHostInstance:ao.findFiberByHostInstance||wy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ra=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ra.isDisabled&&Ra.supportsFiber)try{Yl=Ra.inject(by),$n=Ra}catch{}}gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cy;gn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wf(e))throw Error($(200));return Ay(n,e,null,t)};gn.createRoot=function(n,e){if(!wf(n))throw Error($(299));var t=!1,i="",r=ov;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ef(n,1,!1,null,null,t,!1,i,r),n[yi]=e.current,Go(n.nodeType===8?n.parentNode:n),new Af(e)};gn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error($(188)):(n=Object.keys(n).join(","),Error($(268,n)));return n=Cg(e),n=n===null?null:n.stateNode,n};gn.flushSync=function(n){return Fr(n)};gn.hydrate=function(n,e,t){if(!oc(e))throw Error($(200));return ac(null,n,e,!0,t)};gn.hydrateRoot=function(n,e,t){if(!wf(n))throw Error($(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=ov;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=sv(e,null,n,1,t??null,r,!1,s,o),n[yi]=e.current,Go(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new sc(e)};gn.render=function(n,e,t){if(!oc(e))throw Error($(200));return ac(null,n,e,!1,t)};gn.unmountComponentAtNode=function(n){if(!oc(n))throw Error($(40));return n._reactRootContainer?(Fr(function(){ac(null,null,n,!1,function(){n._reactRootContainer=null,n[yi]=null})}),!0):!1};gn.unstable_batchedUpdates=xf;gn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!oc(t))throw Error($(200));if(n==null||n._reactInternals===void 0)throw Error($(38));return ac(n,e,t,!1,i)};gn.version="18.3.1-next-f1338f8080-20240426";function av(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(av)}catch(n){console.error(n)}}av(),ag.exports=gn;var Py=ag.exports,lv,tp=Py;lv=tp.createRoot,tp.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ly={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Iy=(n,e)=>{const t=Dn.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...c},u)=>Dn.createElement("svg",{ref:u,...Ly,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${Ny(n)}`,a].join(" "),...c},[...e.map(([d,f])=>Dn.createElement(d,f)),...Array.isArray(l)?l:[l]]));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=Iy("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rf="163",Dy=0,ip=1,Uy=2,cv=1,Fy=2,ui=3,Ei=0,an=1,Yn=2,er=0,As=1,rp=2,sp=3,op=4,Oy=5,Er=100,ky=101,By=102,zy=103,Hy=104,Vy=200,Gy=201,Wy=202,Xy=203,Sd=204,Md=205,jy=206,Yy=207,qy=208,Ky=209,$y=210,Zy=211,Qy=212,Jy=213,eS=214,tS=0,nS=1,iS=2,Bl=3,rS=4,sS=5,oS=6,aS=7,uv=0,lS=1,cS=2,tr=0,uS=1,dS=2,fS=3,hS=4,pS=5,mS=6,gS=7,ap="attached",_S="detached",dv=300,Fs=301,Os=302,Ed=303,Td=304,lc=306,ks=1e3,Wi=1001,zl=1002,Kt=1003,fv=1004,So=1005,fn=1006,hl=1007,mi=1008,nr=1009,vS=1010,xS=1011,hv=1012,pv=1013,Bs=1014,Kn=1015,Hl=1016,mv=1017,gv=1018,oa=1020,yS=35902,SS=1021,MS=1022,Fn=1023,ES=1024,TS=1025,ws=1026,Qo=1027,_v=1028,vv=1029,AS=1030,xv=1031,yv=1033,Wc=33776,Xc=33777,jc=33778,Yc=33779,lp=35840,cp=35841,up=35842,dp=35843,Sv=36196,fp=37492,hp=37496,pp=37808,mp=37809,gp=37810,_p=37811,vp=37812,xp=37813,yp=37814,Sp=37815,Mp=37816,Ep=37817,Tp=37818,Ap=37819,wp=37820,Rp=37821,qc=36492,Cp=36494,bp=36495,wS=36283,Pp=36284,Lp=36285,Np=36286,Jo=2300,zs=2301,Kc=2302,Ip=2400,Dp=2401,Up=2402,RS=2500,CS=0,Mv=1,Ad=2,bS=3200,PS=3201,Ev=0,LS=1,Hi="",Yt="srgb",Dt="srgb-linear",Cf="display-p3",cc="display-p3-linear",Vl="linear",it="srgb",Gl="rec709",Wl="p3",Vr=7680,Fp=519,NS=512,IS=513,DS=514,Tv=515,US=516,FS=517,OS=518,kS=519,wd=35044,Op="300 es",gi=2e3,Xl=2001;class qs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kp=1234567;const No=Math.PI/180,Hs=180/Math.PI;function Bn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Vt(n,e,t){return Math.max(e,Math.min(t,n))}function bf(n,e){return(n%e+e)%e}function BS(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function zS(n,e,t){return n!==e?(t-n)/(e-n):0}function Io(n,e,t){return(1-t)*n+t*e}function HS(n,e,t,i){return Io(n,e,1-Math.exp(-t*i))}function VS(n,e=1){return e-Math.abs(bf(n,e*2)-e)}function GS(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function WS(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function XS(n,e){return n+Math.floor(Math.random()*(e-n+1))}function jS(n,e){return n+Math.random()*(e-n)}function YS(n){return n*(.5-Math.random())}function qS(n){n!==void 0&&(kp=n);let e=kp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function KS(n){return n*No}function $S(n){return n*Hs}function ZS(n){return(n&n-1)===0&&n!==0}function QS(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function JS(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function eM(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Un(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function qe(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const tM={DEG2RAD:No,RAD2DEG:Hs,generateUUID:Bn,clamp:Vt,euclideanModulo:bf,mapLinear:BS,inverseLerp:zS,lerp:Io,damp:HS,pingpong:VS,smoothstep:GS,smootherstep:WS,randInt:XS,randFloat:jS,randFloatSpread:YS,seededRandom:qS,degToRad:KS,radToDeg:$S,isPowerOfTwo:ZS,ceilPowerOfTwo:QS,floorPowerOfTwo:JS,setQuaternionFromProperEuler:eM,normalize:qe,denormalize:Un};class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ie{constructor(e,t,i,r,s,o,a,l,c){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],_=i[8],x=r[0],m=r[3],h=r[6],v=r[1],g=r[4],M=r[7],b=r[2],w=r[5],A=r[8];return s[0]=o*x+a*v+l*b,s[3]=o*m+a*g+l*w,s[6]=o*h+a*M+l*A,s[1]=c*x+u*v+d*b,s[4]=c*m+u*g+d*w,s[7]=c*h+u*M+d*A,s[2]=f*x+p*v+_*b,s[5]=f*m+p*g+_*w,s[8]=f*h+p*M+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,_=t*d+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=d*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=f*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply($c.makeScale(e,t)),this}rotate(e){return this.premultiply($c.makeRotation(-e)),this}translate(e,t){return this.premultiply($c.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $c=new Ie;function Av(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ea(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function nM(){const n=ea("canvas");return n.style.display="block",n}const Bp={};function wv(n){n in Bp||(Bp[n]=!0,console.warn(n))}const zp=new Ie().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Hp=new Ie().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ca={[Dt]:{transfer:Vl,primaries:Gl,toReference:n=>n,fromReference:n=>n},[Yt]:{transfer:it,primaries:Gl,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[cc]:{transfer:Vl,primaries:Wl,toReference:n=>n.applyMatrix3(Hp),fromReference:n=>n.applyMatrix3(zp)},[Cf]:{transfer:it,primaries:Wl,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Hp),fromReference:n=>n.applyMatrix3(zp).convertLinearToSRGB()}},iM=new Set([Dt,cc]),je={enabled:!0,_workingColorSpace:Dt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!iM.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ca[e].toReference,r=Ca[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ca[n].primaries},getTransfer:function(n){return n===Hi?Vl:Ca[n].transfer}};function Rs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Gr;class rM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gr===void 0&&(Gr=ea("canvas")),Gr.width=e.width,Gr.height=e.height;const i=Gr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Gr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ea("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Rs(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Rs(t[i]/255)*255):t[i]=Rs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sM=0;class Rv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=Bn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Qc(r[o].image)):s.push(Qc(r[o]))}else s=Qc(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Qc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?rM.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oM=0;class Pt extends qs{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,i=Wi,r=Wi,s=fn,o=mi,a=Fn,l=nr,c=Pt.DEFAULT_ANISOTROPY,u=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=Bn(),this.name="",this.source=new Rv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ks:e.x=e.x-Math.floor(e.x);break;case Wi:e.x=e.x<0?0:1;break;case zl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ks:e.y=e.y-Math.floor(e.y);break;case Wi:e.y=e.y<0?0:1;break;case zl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=dv;Pt.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,i=0,r=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],_=l[9],x=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(c+1)/2,M=(p+1)/2,b=(h+1)/2,w=(u+f)/4,A=(d+x)/4,L=(_+m)/4;return g>M&&g>b?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=w/i,s=A/i):M>b?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=w/r,s=L/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=A/s,r=L/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-_)*(m-_)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(d-x)/v,this.z=(f-u)/v,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class aM extends qs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new Pt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Rv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Or extends aM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Cv extends Pt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lM extends Pt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],_=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=x;return}if(d!==x||l!==f||c!==p||u!==_){let m=1-a;const h=l*f+c*p+u*_+d*x,v=h>=0?1:-1,g=1-h*h;if(g>Number.EPSILON){const b=Math.sqrt(g),w=Math.atan2(b,h*v);m=Math.sin(m*w)/b,a=Math.sin(a*w)/b}const M=a*v;if(l=l*m+f*M,c=c*m+p*M,u=u*m+_*M,d=d*m+x*M,m===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=b,c*=b,u*=b,d*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+u*d+l*p-c*f,e[t+1]=l*_+u*f+c*d-a*p,e[t+2]=c*_+u*p+a*f-l*d,e[t+3]=u*_-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"YXZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"ZXY":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"ZYX":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"YZX":this._x=f*u*d+c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d-f*p*_;break;case"XZY":this._x=f*u*d-c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Jc.copy(this).projectOnVector(e),this.sub(Jc)}reflect(e){return this.sub(Jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jc=new I,Vp=new cr;class Ai{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Cn):Cn.fromBufferAttribute(s,o),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ba.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ba.copy(i.boundingBox)),ba.applyMatrix4(e.matrixWorld),this.union(ba)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lo),Pa.subVectors(this.max,lo),Wr.subVectors(e.a,lo),Xr.subVectors(e.b,lo),jr.subVectors(e.c,lo),bi.subVectors(Xr,Wr),Pi.subVectors(jr,Xr),fr.subVectors(Wr,jr);let t=[0,-bi.z,bi.y,0,-Pi.z,Pi.y,0,-fr.z,fr.y,bi.z,0,-bi.x,Pi.z,0,-Pi.x,fr.z,0,-fr.x,-bi.y,bi.x,0,-Pi.y,Pi.x,0,-fr.y,fr.x,0];return!eu(t,Wr,Xr,jr,Pa)||(t=[1,0,0,0,1,0,0,0,1],!eu(t,Wr,Xr,jr,Pa))?!1:(La.crossVectors(bi,Pi),t=[La.x,La.y,La.z],eu(t,Wr,Xr,jr,Pa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ri=[new I,new I,new I,new I,new I,new I,new I,new I],Cn=new I,ba=new Ai,Wr=new I,Xr=new I,jr=new I,bi=new I,Pi=new I,fr=new I,lo=new I,Pa=new I,La=new I,hr=new I;function eu(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){hr.fromArray(n,s);const a=r.x*Math.abs(hr.x)+r.y*Math.abs(hr.y)+r.z*Math.abs(hr.z),l=e.dot(hr),c=t.dot(hr),u=i.dot(hr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const cM=new Ai,co=new I,tu=new I;class ei{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):cM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;co.subVectors(e,this.center);const t=co.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(co,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(co.copy(e.center).add(tu)),this.expandByPoint(co.copy(e.center).sub(tu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const si=new I,nu=new I,Na=new I,Li=new I,iu=new I,Ia=new I,ru=new I;class uc{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,t),si.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){nu.copy(e).add(t).multiplyScalar(.5),Na.copy(t).sub(e).normalize(),Li.copy(this.origin).sub(nu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Na),a=Li.dot(this.direction),l=-Li.dot(Na),c=Li.lengthSq(),u=Math.abs(1-o*o);let d,f,p,_;if(u>0)if(d=o*l-a,f=o*a-l,_=s*u,d>=0)if(f>=-_)if(f<=_){const x=1/u;d*=x,f*=x,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(nu).addScaledVector(Na,f),p}intersectSphere(e,t){si.subVectors(e.center,this.origin);const i=si.dot(this.direction),r=si.dot(si)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,i,r,s){iu.subVectors(t,e),Ia.subVectors(i,e),ru.crossVectors(iu,Ia);let o=this.direction.dot(ru),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Li.subVectors(this.origin,e);const l=a*this.direction.dot(Ia.crossVectors(Li,Ia));if(l<0)return null;const c=a*this.direction.dot(iu.cross(Li));if(c<0||l+c>o)return null;const u=-a*Li.dot(ru);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class De{constructor(e,t,i,r,s,o,a,l,c,u,d,f,p,_,x,m){De.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,f,p,_,x,m)}set(e,t,i,r,s,o,a,l,c,u,d,f,p,_,x,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=_,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new De().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Yr.setFromMatrixColumn(e,0).length(),s=1/Yr.setFromMatrixColumn(e,1).length(),o=1/Yr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,_=a*u,x=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+_*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,_=c*u,x=c*d;t[0]=f+x*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,_=c*u,x=c*d;t[0]=f-x*a,t[4]=-o*d,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,_=a*u,x=a*d;t[0]=l*u,t[4]=_*c-p,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=x-f*d,t[8]=_*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*d+_,t[10]=f-x*d}else if(e.order==="XZY"){const f=o*l,p=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+x,t[5]=o*u,t[9]=p*d-_,t[2]=_*d-p,t[6]=a*u,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uM,e,dM)}lookAt(e,t,i){const r=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Ni.crossVectors(i,cn),Ni.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Ni.crossVectors(i,cn)),Ni.normalize(),Da.crossVectors(cn,Ni),r[0]=Ni.x,r[4]=Da.x,r[8]=cn.x,r[1]=Ni.y,r[5]=Da.y,r[9]=cn.y,r[2]=Ni.z,r[6]=Da.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],_=i[2],x=i[6],m=i[10],h=i[14],v=i[3],g=i[7],M=i[11],b=i[15],w=r[0],A=r[4],L=r[8],E=r[12],y=r[1],U=r[5],W=r[9],N=r[13],j=r[2],X=r[6],Q=r[10],Z=r[14],P=r[3],V=r[7],G=r[11],ne=r[15];return s[0]=o*w+a*y+l*j+c*P,s[4]=o*A+a*U+l*X+c*V,s[8]=o*L+a*W+l*Q+c*G,s[12]=o*E+a*N+l*Z+c*ne,s[1]=u*w+d*y+f*j+p*P,s[5]=u*A+d*U+f*X+p*V,s[9]=u*L+d*W+f*Q+p*G,s[13]=u*E+d*N+f*Z+p*ne,s[2]=_*w+x*y+m*j+h*P,s[6]=_*A+x*U+m*X+h*V,s[10]=_*L+x*W+m*Q+h*G,s[14]=_*E+x*N+m*Z+h*ne,s[3]=v*w+g*y+M*j+b*P,s[7]=v*A+g*U+M*X+b*V,s[11]=v*L+g*W+M*Q+b*G,s[15]=v*E+g*N+M*Z+b*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],_=e[3],x=e[7],m=e[11],h=e[15];return _*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*p-i*l*p)+x*(+t*l*p-t*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+t*c*d-t*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-t*l*d+t*a*f+r*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],_=e[12],x=e[13],m=e[14],h=e[15],v=d*m*c-x*f*c+x*l*p-a*m*p-d*l*h+a*f*h,g=_*f*c-u*m*c-_*l*p+o*m*p+u*l*h-o*f*h,M=u*x*c-_*d*c+_*a*p-o*x*p-u*a*h+o*d*h,b=_*d*l-u*x*l-_*a*f+o*x*f+u*a*m-o*d*m,w=t*v+i*g+r*M+s*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=v*A,e[1]=(x*f*s-d*m*s-x*r*p+i*m*p+d*r*h-i*f*h)*A,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*h+i*l*h)*A,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*p-i*l*p)*A,e[4]=g*A,e[5]=(u*m*s-_*f*s+_*r*p-t*m*p-u*r*h+t*f*h)*A,e[6]=(_*l*s-o*m*s-_*r*c+t*m*c+o*r*h-t*l*h)*A,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*p+t*l*p)*A,e[8]=M*A,e[9]=(_*d*s-u*x*s-_*i*p+t*x*p+u*i*h-t*d*h)*A,e[10]=(o*x*s-_*a*s+_*i*c-t*x*c-o*i*h+t*a*h)*A,e[11]=(u*a*s-o*d*s-u*i*c+t*d*c+o*i*p-t*a*p)*A,e[12]=b*A,e[13]=(u*x*r-_*d*r+_*i*f-t*x*f-u*i*m+t*d*m)*A,e[14]=(_*a*r-o*x*r-_*i*l+t*x*l+o*i*m-t*a*m)*A,e[15]=(o*d*r-u*a*r+u*i*l-t*d*l-o*i*f+t*a*f)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,_=s*d,x=o*u,m=o*d,h=a*d,v=l*c,g=l*u,M=l*d,b=i.x,w=i.y,A=i.z;return r[0]=(1-(x+h))*b,r[1]=(p+M)*b,r[2]=(_-g)*b,r[3]=0,r[4]=(p-M)*w,r[5]=(1-(f+h))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(_+g)*A,r[9]=(m-v)*A,r[10]=(1-(f+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Yr.set(r[0],r[1],r[2]).length();const o=Yr.set(r[4],r[5],r[6]).length(),a=Yr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],bn.copy(this);const c=1/s,u=1/o,d=1/a;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=u,bn.elements[5]*=u,bn.elements[6]*=u,bn.elements[8]*=d,bn.elements[9]*=d,bn.elements[10]*=d,t.setFromRotationMatrix(bn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=gi){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let p,_;if(a===gi)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Xl)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=gi){const l=this.elements,c=1/(t-e),u=1/(i-r),d=1/(o-s),f=(t+e)*c,p=(i+r)*u;let _,x;if(a===gi)_=(o+s)*d,x=-2*d;else if(a===Xl)_=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Yr=new I,bn=new De,uM=new I(0,0,0),dM=new I(1,1,1),Ni=new I,Da=new I,cn=new I,Gp=new De,Wp=new cr;class Jn{constructor(e=0,t=0,i=0,r=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Gp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wp.setFromEuler(this),this.setFromQuaternion(Wp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class bv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fM=0;const Xp=new I,qr=new cr,oi=new De,Ua=new I,uo=new I,hM=new I,pM=new cr,jp=new I(1,0,0),Yp=new I(0,1,0),qp=new I(0,0,1),Kp={type:"added"},mM={type:"removed"},Kr={type:"childadded",child:null},su={type:"childremoved",child:null};class ht extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new I,t=new Jn,i=new cr,r=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new De},normalMatrix:{value:new Ie}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qr.setFromAxisAngle(e,t),this.quaternion.multiply(qr),this}rotateOnWorldAxis(e,t){return qr.setFromAxisAngle(e,t),this.quaternion.premultiply(qr),this}rotateX(e){return this.rotateOnAxis(jp,e)}rotateY(e){return this.rotateOnAxis(Yp,e)}rotateZ(e){return this.rotateOnAxis(qp,e)}translateOnAxis(e,t){return Xp.copy(e).applyQuaternion(this.quaternion),this.position.add(Xp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jp,e)}translateY(e){return this.translateOnAxis(Yp,e)}translateZ(e){return this.translateOnAxis(qp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ua.copy(e):Ua.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(uo,Ua,this.up):oi.lookAt(Ua,uo,this.up),this.quaternion.setFromRotationMatrix(oi),r&&(oi.extractRotation(r.matrixWorld),qr.setFromRotationMatrix(oi),this.quaternion.premultiply(qr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kp),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mM),su.child=e,this.dispatchEvent(su),su.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kp),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,e,hM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,pM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ht.DEFAULT_UP=new I(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new I,ai=new I,ou=new I,li=new I,$r=new I,Zr=new I,$p=new I,au=new I,lu=new I,cu=new I;class qn{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Pn.subVectors(e,t),r.cross(Pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Pn.subVectors(r,t),ai.subVectors(i,t),ou.subVectors(e,t);const o=Pn.dot(Pn),a=Pn.dot(ai),l=Pn.dot(ou),c=ai.dot(ai),u=ai.dot(ou),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,li.x),l.addScaledVector(o,li.y),l.addScaledVector(a,li.z),l)}static isFrontFacing(e,t,i,r){return Pn.subVectors(i,t),ai.subVectors(e,t),Pn.cross(ai).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Pn.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return qn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;$r.subVectors(r,i),Zr.subVectors(s,i),au.subVectors(e,i);const l=$r.dot(au),c=Zr.dot(au);if(l<=0&&c<=0)return t.copy(i);lu.subVectors(e,r);const u=$r.dot(lu),d=Zr.dot(lu);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector($r,o);cu.subVectors(e,s);const p=$r.dot(cu),_=Zr.dot(cu);if(_>=0&&p<=_)return t.copy(s);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(Zr,a);const m=u*_-p*d;if(m<=0&&d-u>=0&&p-_>=0)return $p.subVectors(s,r),a=(d-u)/(d-u+(p-_)),t.copy(r).addScaledVector($p,a);const h=1/(m+x+f);return o=x*h,a=f*h,t.copy(i).addScaledVector($r,o).addScaledVector(Zr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},Fa={h:0,s:0,l:0};function uu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ae{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=je.workingColorSpace){if(e=bf(e,1),t=Vt(t,0,1),i=Vt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=uu(o,s,e+1/3),this.g=uu(o,s,e),this.b=uu(o,s,e-1/3)}return je.toWorkingColorSpace(this,r),this}setStyle(e,t=Yt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const i=Pv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}copyLinearToSRGB(e){return this.r=Zc(e.r),this.g=Zc(e.g),this.b=Zc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return je.fromWorkingColorSpace(zt.copy(this),e),Math.round(Vt(zt.r*255,0,255))*65536+Math.round(Vt(zt.g*255,0,255))*256+Math.round(Vt(zt.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(zt.copy(this),t);const i=zt.r,r=zt.g,s=zt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Yt){je.fromWorkingColorSpace(zt.copy(this),e);const t=zt.r,i=zt.g,r=zt.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+t,Ii.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ii),e.getHSL(Fa);const i=Io(Ii.h,Fa.h,t),r=Io(Ii.s,Fa.s,t),s=Io(Ii.l,Fa.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Ae;Ae.NAMES=Pv;let gM=0;class Qn extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=Bn(),this.name="",this.type="Material",this.blending=As,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sd,this.blendDst=Md,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=Bl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vr,this.stencilZFail=Vr,this.stencilZPass=Vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(i.blending=this.blending),this.side!==Ei&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Sd&&(i.blendSrc=this.blendSrc),this.blendDst!==Md&&(i.blendDst=this.blendDst),this.blendEquation!==Er&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Bl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Cr extends Qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=uv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new I,Oa=new Fe;class Zt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=wd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return wv("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Oa.fromBufferAttribute(this,t),Oa.applyMatrix3(e),this.setXY(t,Oa.x,Oa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Un(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=qe(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Un(t,this.array)),t}setX(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Un(t,this.array)),t}setY(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Un(t,this.array)),t}setW(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),i=qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),i=qe(i,this.array),r=qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),i=qe(i,this.array),r=qe(r,this.array),s=qe(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wd&&(e.usage=this.usage),e}}class Lv extends Zt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Nv extends Zt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class vi extends Zt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let _M=0;const xn=new De,du=new ht,Qr=new I,un=new Ai,fo=new Ai,wt=new I;class ti extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Av(e)?Nv:Lv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ie().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,i){return xn.makeTranslation(e,t,i),this.applyMatrix4(xn),this}scale(e,t,i){return xn.makeScale(e,t,i),this.applyMatrix4(xn),this}lookAt(e){return du.lookAt(e),du.updateMatrix(),this.applyMatrix4(du.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new vi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];un.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];fo.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(un.min,fo.min),un.expandByPoint(wt),wt.addVectors(un.max,fo.max),un.expandByPoint(wt)):(un.expandByPoint(fo.min),un.expandByPoint(fo.max))}un.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(wt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)wt.fromBufferAttribute(a,c),l&&(Qr.fromBufferAttribute(e,c),wt.add(Qr)),r=Math.max(r,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new I,l[L]=new I;const c=new I,u=new I,d=new I,f=new Fe,p=new Fe,_=new Fe,x=new I,m=new I;function h(L,E,y){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,y),f.fromBufferAttribute(s,L),p.fromBufferAttribute(s,E),_.fromBufferAttribute(s,y),u.sub(c),d.sub(c),p.sub(f),_.sub(f);const U=1/(p.x*_.y-_.x*p.y);isFinite(U)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(U),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(U),a[L].add(x),a[E].add(x),a[y].add(x),l[L].add(m),l[E].add(m),l[y].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let L=0,E=v.length;L<E;++L){const y=v[L],U=y.start,W=y.count;for(let N=U,j=U+W;N<j;N+=3)h(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const g=new I,M=new I,b=new I,w=new I;function A(L){b.fromBufferAttribute(r,L),w.copy(b);const E=a[L];g.copy(E),g.sub(b.multiplyScalar(b.dot(E))).normalize(),M.crossVectors(w,E);const U=M.dot(l[L])<0?-1:1;o.setXYZW(L,g.x,g.y,g.z,U)}for(let L=0,E=v.length;L<E;++L){const y=v[L],U=y.start,W=y.count;for(let N=U,j=U+W;N<j;N+=3)A(e.getX(N+0)),A(e.getX(N+1)),A(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,d=new I;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let h=0;h<u;h++)f[_++]=c[p++]}return new Zt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ti,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zp=new De,pr=new uc,ka=new ei,Qp=new I,Jr=new I,es=new I,ts=new I,fu=new I,Ba=new I,za=new Fe,Ha=new Fe,Va=new Fe,Jp=new I,em=new I,tm=new I,Ga=new I,Wa=new I;class nn extends ht{constructor(e=new ti,t=new Cr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ba.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(fu.fromBufferAttribute(d,e),o?Ba.addScaledVector(fu,u):Ba.addScaledVector(fu.sub(t),u))}t.add(Ba)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ka.copy(i.boundingSphere),ka.applyMatrix4(s),pr.copy(e.ray).recast(e.near),!(ka.containsPoint(pr.origin)===!1&&(pr.intersectSphere(ka,Qp)===null||pr.origin.distanceToSquared(Qp)>(e.far-e.near)**2))&&(Zp.copy(s).invert(),pr.copy(e.ray).applyMatrix4(Zp),!(i.boundingBox!==null&&pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,pr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const m=f[_],h=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,b=g;M<b;M+=3){const w=a.getX(M),A=a.getX(M+1),L=a.getX(M+2);r=Xa(this,h,e,i,c,u,d,w,A,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=_,h=x;m<h;m+=3){const v=a.getX(m),g=a.getX(m+1),M=a.getX(m+2);r=Xa(this,o,e,i,c,u,d,v,g,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const m=f[_],h=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,b=g;M<b;M+=3){const w=M,A=M+1,L=M+2;r=Xa(this,h,e,i,c,u,d,w,A,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,h=x;m<h;m+=3){const v=m,g=m+1,M=m+2;r=Xa(this,o,e,i,c,u,d,v,g,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function vM(n,e,t,i,r,s,o,a){let l;if(e.side===an?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ei,a),l===null)return null;Wa.copy(a),Wa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Wa);return c<t.near||c>t.far?null:{distance:c,point:Wa.clone(),object:n}}function Xa(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Jr),n.getVertexPosition(l,es),n.getVertexPosition(c,ts);const u=vM(n,e,t,i,Jr,es,ts,Ga);if(u){r&&(za.fromBufferAttribute(r,a),Ha.fromBufferAttribute(r,l),Va.fromBufferAttribute(r,c),u.uv=qn.getInterpolation(Ga,Jr,es,ts,za,Ha,Va,new Fe)),s&&(za.fromBufferAttribute(s,a),Ha.fromBufferAttribute(s,l),Va.fromBufferAttribute(s,c),u.uv1=qn.getInterpolation(Ga,Jr,es,ts,za,Ha,Va,new Fe)),o&&(Jp.fromBufferAttribute(o,a),em.fromBufferAttribute(o,l),tm.fromBufferAttribute(o,c),u.normal=qn.getInterpolation(Ga,Jr,es,ts,Jp,em,tm,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new I,materialIndex:0};qn.getNormal(Jr,es,ts,d.normal),u.face=d}return u}class aa extends ti{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new vi(c,3)),this.setAttribute("normal",new vi(u,3)),this.setAttribute("uv",new vi(d,2));function _(x,m,h,v,g,M,b,w,A,L,E){const y=M/A,U=b/L,W=M/2,N=b/2,j=w/2,X=A+1,Q=L+1;let Z=0,P=0;const V=new I;for(let G=0;G<Q;G++){const ne=G*U-N;for(let pe=0;pe<X;pe++){const We=pe*y-W;V[x]=We*v,V[m]=ne*g,V[h]=j,c.push(V.x,V.y,V.z),V[x]=0,V[m]=0,V[h]=w>0?1:-1,u.push(V.x,V.y,V.z),d.push(pe/A),d.push(1-G/L),Z+=1}}for(let G=0;G<L;G++)for(let ne=0;ne<A;ne++){const pe=f+ne+X*G,We=f+ne+X*(G+1),H=f+(ne+1)+X*(G+1),ee=f+(ne+1)+X*G;l.push(pe,We,ee),l.push(We,H,ee),P+=6}a.addGroup(p,P,E),p+=P,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new aa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Xt(n){const e={};for(let t=0;t<n.length;t++){const i=Vs(n[t]);for(const r in i)e[r]=i[r]}return e}function xM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Iv(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const yM={clone:Vs,merge:Xt};var SM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,MM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sr extends Qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=SM,this.fragmentShader=MM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=xM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Dv extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Di=new I,nm=new Fe,im=new Fe;class qt extends Dv{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(No*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hs*2*Math.atan(Math.tan(No*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Di.x,Di.y).multiplyScalar(-e/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Di.x,Di.y).multiplyScalar(-e/Di.z)}getViewSize(e,t){return this.getViewBounds(e,nm,im),t.subVectors(im,nm)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(No*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ns=-90,is=1;class EM extends ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new qt(ns,is,e,t);r.layers=this.layers,this.add(r);const s=new qt(ns,is,e,t);s.layers=this.layers,this.add(s);const o=new qt(ns,is,e,t);o.layers=this.layers,this.add(o);const a=new qt(ns,is,e,t);a.layers=this.layers,this.add(a);const l=new qt(ns,is,e,t);l.layers=this.layers,this.add(l);const c=new qt(ns,is,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Uv extends Pt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Fs,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class TM extends Or{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Uv(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new aa(5,5,5),s=new sr({name:"CubemapFromEquirect",uniforms:Vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:er});s.uniforms.tEquirect.value=t;const o=new nn(r,s),a=t.minFilter;return t.minFilter===mi&&(t.minFilter=fn),new EM(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const hu=new I,AM=new I,wM=new Ie;class Sr{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=hu.subVectors(i,t).cross(AM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(hu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||wM.getNormalMatrix(e),r=this.coplanarPoint(hu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new ei,ja=new I;class Pf{constructor(e=new Sr,t=new Sr,i=new Sr,r=new Sr,s=new Sr,o=new Sr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=gi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],p=r[8],_=r[9],x=r[10],m=r[11],h=r[12],v=r[13],g=r[14],M=r[15];if(i[0].setComponents(l-s,f-c,m-p,M-h).normalize(),i[1].setComponents(l+s,f+c,m+p,M+h).normalize(),i[2].setComponents(l+o,f+u,m+_,M+v).normalize(),i[3].setComponents(l-o,f-u,m-_,M-v).normalize(),i[4].setComponents(l-a,f-d,m-x,M-g).normalize(),t===gi)i[5].setComponents(l+a,f+d,m+x,M+g).normalize();else if(t===Xl)i[5].setComponents(a,d,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ja.x=r.normal.x>0?e.max.x:e.min.x,ja.y=r.normal.y>0?e.max.y:e.min.y,ja.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ja)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fv(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function RM(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l._updateRange,f=l.updateRanges;if(n.bindBuffer(c,a),d.count===-1&&f.length===0&&n.bufferSubData(c,0,u),f.length!==0){for(let p=0,_=f.length;p<_;p++){const x=f[p];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class dc extends ti{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,p=[],_=[],x=[],m=[];for(let h=0;h<u;h++){const v=h*f-o;for(let g=0;g<c;g++){const M=g*d-s;_.push(M,-v,0),x.push(0,0,1),m.push(g/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const g=v+c*h,M=v+c*(h+1),b=v+1+c*(h+1),w=v+1+c*h;p.push(g,M,w),p.push(M,b,w)}this.setIndex(p),this.setAttribute("position",new vi(_,3)),this.setAttribute("normal",new vi(x,3)),this.setAttribute("uv",new vi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dc(e.width,e.height,e.widthSegments,e.heightSegments)}}var CM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,PM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,LM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,IM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,DM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,UM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,FM=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,OM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,kM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,BM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,HM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,VM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,KM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$M=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ZM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,QM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,JM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,eE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rE="gl_FragColor = linearToOutputTexel( gl_FragColor );",sE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,oE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,aE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,_E=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,SE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ME=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,EE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,RE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,CE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,PE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,NE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,UE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,FE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,OE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,VE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,WE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,XE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,jE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,YE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$E=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ZE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,QE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,JE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,aT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,dT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_T=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ST=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,MT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ET=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,TT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,RT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const CT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,UT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,FT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,OT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,GT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,YT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,KT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$T=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,JT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,iA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,aA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:CM,alphahash_pars_fragment:bM,alphamap_fragment:PM,alphamap_pars_fragment:LM,alphatest_fragment:NM,alphatest_pars_fragment:IM,aomap_fragment:DM,aomap_pars_fragment:UM,batching_pars_vertex:FM,batching_vertex:OM,begin_vertex:kM,beginnormal_vertex:BM,bsdfs:zM,iridescence_fragment:HM,bumpmap_pars_fragment:VM,clipping_planes_fragment:GM,clipping_planes_pars_fragment:WM,clipping_planes_pars_vertex:XM,clipping_planes_vertex:jM,color_fragment:YM,color_pars_fragment:qM,color_pars_vertex:KM,color_vertex:$M,common:ZM,cube_uv_reflection_fragment:QM,defaultnormal_vertex:JM,displacementmap_pars_vertex:eE,displacementmap_vertex:tE,emissivemap_fragment:nE,emissivemap_pars_fragment:iE,colorspace_fragment:rE,colorspace_pars_fragment:sE,envmap_fragment:oE,envmap_common_pars_fragment:aE,envmap_pars_fragment:lE,envmap_pars_vertex:cE,envmap_physical_pars_fragment:SE,envmap_vertex:uE,fog_vertex:dE,fog_pars_vertex:fE,fog_fragment:hE,fog_pars_fragment:pE,gradientmap_pars_fragment:mE,lightmap_fragment:gE,lightmap_pars_fragment:_E,lights_lambert_fragment:vE,lights_lambert_pars_fragment:xE,lights_pars_begin:yE,lights_toon_fragment:ME,lights_toon_pars_fragment:EE,lights_phong_fragment:TE,lights_phong_pars_fragment:AE,lights_physical_fragment:wE,lights_physical_pars_fragment:RE,lights_fragment_begin:CE,lights_fragment_maps:bE,lights_fragment_end:PE,logdepthbuf_fragment:LE,logdepthbuf_pars_fragment:NE,logdepthbuf_pars_vertex:IE,logdepthbuf_vertex:DE,map_fragment:UE,map_pars_fragment:FE,map_particle_fragment:OE,map_particle_pars_fragment:kE,metalnessmap_fragment:BE,metalnessmap_pars_fragment:zE,morphinstance_vertex:HE,morphcolor_vertex:VE,morphnormal_vertex:GE,morphtarget_pars_vertex:WE,morphtarget_vertex:XE,normal_fragment_begin:jE,normal_fragment_maps:YE,normal_pars_fragment:qE,normal_pars_vertex:KE,normal_vertex:$E,normalmap_pars_fragment:ZE,clearcoat_normal_fragment_begin:QE,clearcoat_normal_fragment_maps:JE,clearcoat_pars_fragment:eT,iridescence_pars_fragment:tT,opaque_fragment:nT,packing:iT,premultiplied_alpha_fragment:rT,project_vertex:sT,dithering_fragment:oT,dithering_pars_fragment:aT,roughnessmap_fragment:lT,roughnessmap_pars_fragment:cT,shadowmap_pars_fragment:uT,shadowmap_pars_vertex:dT,shadowmap_vertex:fT,shadowmask_pars_fragment:hT,skinbase_vertex:pT,skinning_pars_vertex:mT,skinning_vertex:gT,skinnormal_vertex:_T,specularmap_fragment:vT,specularmap_pars_fragment:xT,tonemapping_fragment:yT,tonemapping_pars_fragment:ST,transmission_fragment:MT,transmission_pars_fragment:ET,uv_pars_fragment:TT,uv_pars_vertex:AT,uv_vertex:wT,worldpos_vertex:RT,background_vert:CT,background_frag:bT,backgroundCube_vert:PT,backgroundCube_frag:LT,cube_vert:NT,cube_frag:IT,depth_vert:DT,depth_frag:UT,distanceRGBA_vert:FT,distanceRGBA_frag:OT,equirect_vert:kT,equirect_frag:BT,linedashed_vert:zT,linedashed_frag:HT,meshbasic_vert:VT,meshbasic_frag:GT,meshlambert_vert:WT,meshlambert_frag:XT,meshmatcap_vert:jT,meshmatcap_frag:YT,meshnormal_vert:qT,meshnormal_frag:KT,meshphong_vert:$T,meshphong_frag:ZT,meshphysical_vert:QT,meshphysical_frag:JT,meshtoon_vert:eA,meshtoon_frag:tA,points_vert:nA,points_frag:iA,shadow_vert:rA,shadow_frag:sA,sprite_vert:oA,sprite_frag:aA},se={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},Xn={basic:{uniforms:Xt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Xt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Xt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Xt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Xt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Xt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Xt([se.points,se.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Xt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Xt([se.common,se.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Xt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Xt([se.sprite,se.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Xt([se.common,se.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Xt([se.lights,se.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Xn.physical={uniforms:Xt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const Ya={r:0,b:0,g:0},gr=new Jn,lA=new De;function cA(n,e,t,i,r,s,o){const a=new Ae(0);let l=s===!0?0:1,c,u,d=null,f=0,p=null;function _(m,h){let v=!1,g=h.isScene===!0?h.background:null;g&&g.isTexture&&(g=(h.backgroundBlurriness>0?t:e).get(g)),g===null?x(a,l):g&&g.isColor&&(x(g,1),v=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),g&&(g.isCubeTexture||g.mapping===lc)?(u===void 0&&(u=new nn(new aa(1,1,1),new sr({name:"BackgroundCubeMaterial",uniforms:Vs(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),gr.copy(h.backgroundRotation),gr.x*=-1,gr.y*=-1,gr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(lA.makeRotationFromEuler(gr)),u.material.toneMapped=je.getTransfer(g.colorSpace)!==it,(d!==g||f!==g.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=g,f=g.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new nn(new dc(2,2),new sr({name:"BackgroundMaterial",uniforms:Vs(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=je.getTransfer(g.colorSpace)!==it,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||f!==g.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=g,f=g.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,h){m.getRGB(Ya,Iv(n)),i.buffers.color.setClear(Ya.r,Ya.g,Ya.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(m,h=1){a.set(m),l=h,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:_}}function uA(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(y,U,W,N,j){let X=!1;const Q=d(N,W,U);s!==Q&&(s=Q,c(s.object)),X=p(y,N,W,j),X&&_(y,N,W,j),j!==null&&e.update(j,n.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,M(y,U,W,N),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function d(y,U,W){const N=W.wireframe===!0;let j=i[y.id];j===void 0&&(j={},i[y.id]=j);let X=j[U.id];X===void 0&&(X={},j[U.id]=X);let Q=X[N];return Q===void 0&&(Q=f(l()),X[N]=Q),Q}function f(y){const U=[],W=[],N=[];for(let j=0;j<t;j++)U[j]=0,W[j]=0,N[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:W,attributeDivisors:N,object:y,attributes:{},index:null}}function p(y,U,W,N){const j=s.attributes,X=U.attributes;let Q=0;const Z=W.getAttributes();for(const P in Z)if(Z[P].location>=0){const G=j[P];let ne=X[P];if(ne===void 0&&(P==="instanceMatrix"&&y.instanceMatrix&&(ne=y.instanceMatrix),P==="instanceColor"&&y.instanceColor&&(ne=y.instanceColor)),G===void 0||G.attribute!==ne||ne&&G.data!==ne.data)return!0;Q++}return s.attributesNum!==Q||s.index!==N}function _(y,U,W,N){const j={},X=U.attributes;let Q=0;const Z=W.getAttributes();for(const P in Z)if(Z[P].location>=0){let G=X[P];G===void 0&&(P==="instanceMatrix"&&y.instanceMatrix&&(G=y.instanceMatrix),P==="instanceColor"&&y.instanceColor&&(G=y.instanceColor));const ne={};ne.attribute=G,G&&G.data&&(ne.data=G.data),j[P]=ne,Q++}s.attributes=j,s.attributesNum=Q,s.index=N}function x(){const y=s.newAttributes;for(let U=0,W=y.length;U<W;U++)y[U]=0}function m(y){h(y,0)}function h(y,U){const W=s.newAttributes,N=s.enabledAttributes,j=s.attributeDivisors;W[y]=1,N[y]===0&&(n.enableVertexAttribArray(y),N[y]=1),j[y]!==U&&(n.vertexAttribDivisor(y,U),j[y]=U)}function v(){const y=s.newAttributes,U=s.enabledAttributes;for(let W=0,N=U.length;W<N;W++)U[W]!==y[W]&&(n.disableVertexAttribArray(W),U[W]=0)}function g(y,U,W,N,j,X,Q){Q===!0?n.vertexAttribIPointer(y,U,W,j,X):n.vertexAttribPointer(y,U,W,N,j,X)}function M(y,U,W,N){x();const j=N.attributes,X=W.getAttributes(),Q=U.defaultAttributeValues;for(const Z in X){const P=X[Z];if(P.location>=0){let V=j[Z];if(V===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(V=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(V=y.instanceColor)),V!==void 0){const G=V.normalized,ne=V.itemSize,pe=e.get(V);if(pe===void 0)continue;const We=pe.buffer,H=pe.type,ee=pe.bytesPerElement,le=H===n.INT||H===n.UNSIGNED_INT||V.gpuType===pv;if(V.isInterleavedBufferAttribute){const oe=V.data,Pe=oe.stride,Ue=V.offset;if(oe.isInstancedInterleavedBuffer){for(let He=0;He<P.locationSize;He++)h(P.location+He,oe.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let He=0;He<P.locationSize;He++)m(P.location+He);n.bindBuffer(n.ARRAY_BUFFER,We);for(let He=0;He<P.locationSize;He++)g(P.location+He,ne/P.locationSize,H,G,Pe*ee,(Ue+ne/P.locationSize*He)*ee,le)}else{if(V.isInstancedBufferAttribute){for(let oe=0;oe<P.locationSize;oe++)h(P.location+oe,V.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let oe=0;oe<P.locationSize;oe++)m(P.location+oe);n.bindBuffer(n.ARRAY_BUFFER,We);for(let oe=0;oe<P.locationSize;oe++)g(P.location+oe,ne/P.locationSize,H,G,ne*ee,ne/P.locationSize*oe*ee,le)}}else if(Q!==void 0){const G=Q[Z];if(G!==void 0)switch(G.length){case 2:n.vertexAttrib2fv(P.location,G);break;case 3:n.vertexAttrib3fv(P.location,G);break;case 4:n.vertexAttrib4fv(P.location,G);break;default:n.vertexAttrib1fv(P.location,G)}}}}v()}function b(){L();for(const y in i){const U=i[y];for(const W in U){const N=U[W];for(const j in N)u(N[j].object),delete N[j];delete U[W]}delete i[y]}}function w(y){if(i[y.id]===void 0)return;const U=i[y.id];for(const W in U){const N=U[W];for(const j in N)u(N[j].object),delete N[j];delete U[W]}delete i[y.id]}function A(y){for(const U in i){const W=i[U];if(W[y.id]===void 0)continue;const N=W[y.id];for(const j in N)u(N[j].object),delete N[j];delete W[y.id]}}function L(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:E,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function dA(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<u;f++)this.render(l[f],c[f]);else{d.multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let p=0;p<u;p++)f+=c[p];t.update(f,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function fA(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const g=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(g){if(g==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp";const a=s(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const l=t.logarithmicDepthBuffer===!0,c=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),u=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),m=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),h=u>0,v=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:m,vertexTextures:h,maxSamples:v}}function hA(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Sr,a=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const v=s?0:i,g=v*4;let M=h.clippingState||null;l.value=M,M=u(_,f,g,p);for(let b=0;b!==g;++b)M[b]=t[b];h.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,_){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const h=p+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let g=0,M=p;g!==x;++g,M+=4)o.copy(d[g]).applyMatrix4(v,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function pA(n){let e=new WeakMap;function t(o,a){return a===Ed?o.mapping=Fs:a===Td&&(o.mapping=Os),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ed||a===Td)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new TM(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Lf extends Dv{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const vs=4,rm=[.125,.215,.35,.446,.526,.582],Tr=20,pu=new Lf,sm=new Ae;let mu=null,gu=0,_u=0,vu=!1;const Mr=(1+Math.sqrt(5))/2,rs=1/Mr,om=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Mr,rs),new I(0,Mr,-rs),new I(rs,0,Mr),new I(-rs,0,Mr),new I(Mr,rs,0),new I(-Mr,rs,0)];class am{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){mu=this._renderer.getRenderTarget(),gu=this._renderer.getActiveCubeFace(),_u=this._renderer.getActiveMipmapLevel(),vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=um(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mu,gu,_u),this._renderer.xr.enabled=vu,e.scissorTest=!1,qa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fs||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mu=this._renderer.getRenderTarget(),gu=this._renderer.getActiveCubeFace(),_u=this._renderer.getActiveMipmapLevel(),vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Hl,format:Fn,colorSpace:Dt,depthBuffer:!1},r=lm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lm(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mA(s)),this._blurMaterial=gA(s,e,t)}return r}_compileMaterial(e){const t=new nn(this._lodPlanes[0],e);this._renderer.compile(t,pu)}_sceneToCubeUV(e,t,i,r){const a=new qt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(sm),u.toneMapping=tr,u.autoClear=!1;const p=new Cr({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),_=new nn(new aa,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(sm),x=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const g=this._cubeSize;qa(r,v*g,h>2?g:0,g,g),u.setRenderTarget(r),x&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Fs||e.mapping===Os;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=um()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new nn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;qa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,pu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=om[(r-1)%om.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new nn(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Tr-1),x=s/_,m=isFinite(s)?1+Math.floor(u*x):Tr;m>Tr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Tr}`);const h=[];let v=0;for(let A=0;A<Tr;++A){const L=A/x,E=Math.exp(-L*L/2);h.push(E),A===0?v+=E:A<m&&(v+=2*E)}for(let A=0;A<h.length;A++)h[A]=h[A]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:g}=this;f.dTheta.value=_,f.mipInt.value=g-i;const M=this._sizeLods[r],b=3*M*(r>g-vs?r-g+vs:0),w=4*(this._cubeSize-M);qa(t,b,w,3*M,2*M),l.setRenderTarget(t),l.render(d,pu)}}function mA(n){const e=[],t=[],i=[];let r=n;const s=n-vs+1+rm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-vs?l=rm[o-n+vs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,x=3,m=2,h=1,v=new Float32Array(x*_*p),g=new Float32Array(m*_*p),M=new Float32Array(h*_*p);for(let w=0;w<p;w++){const A=w%3*2/3-1,L=w>2?0:-1,E=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];v.set(E,x*_*w),g.set(f,m*_*w);const y=[w,w,w,w,w,w];M.set(y,h*_*w)}const b=new ti;b.setAttribute("position",new Zt(v,x)),b.setAttribute("uv",new Zt(g,m)),b.setAttribute("faceIndex",new Zt(M,h)),e.push(b),r>vs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function lm(n,e,t){const i=new Or(n,e,t);return i.texture.mapping=lc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function gA(n,e,t){const i=new Float32Array(Tr),r=new I(0,1,0);return new sr({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Nf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function cm(){return new sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function um(){return new sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function Nf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function _A(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ed||l===Td,u=l===Fs||l===Os;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new am(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new am(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function vA(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function xA(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const x=f.morphAttributes[_];for(let m=0,h=x.length;m<h;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const x=p[_];for(let m=0,h=x.length;m<h;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,_=d.attributes.position;let x=0;if(p!==null){const v=p.array;x=p.version;for(let g=0,M=v.length;g<M;g+=3){const b=v[g+0],w=v[g+1],A=v[g+2];f.push(b,w,w,A,A,b)}}else if(_!==void 0){const v=_.array;x=_.version;for(let g=0,M=v.length/3-1;g<M;g+=3){const b=g+0,w=g+1,A=g+2;f.push(b,w,w,A,A,b)}}else return;const m=new(Av(f)?Nv:Lv)(f,1);m.version=x;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function yA(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,s,d*o),t.update(f,i,1)}function c(d,f,p){p!==0&&(n.drawElementsInstanced(i,f,s,d*o,p),t.update(f,i,p))}function u(d,f,p){if(p===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let x=0;x<p;x++)this.render(d[x]/o,f[x]);else{_.multiDrawElementsWEBGL(i,f,0,s,d,0,p);let x=0;for(let m=0;m<p;m++)x+=f[m];t.update(x,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function SA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function MA(n,e,t){const i=new WeakMap,r=new Qe;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let y=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let M=0;_===!0&&(M=1),x===!0&&(M=2),m===!0&&(M=3);let b=a.attributes.position.count*M,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const A=new Float32Array(b*w*4*d),L=new Cv(A,b,w,d);L.type=Kn,L.needsUpdate=!0;const E=M*4;for(let U=0;U<d;U++){const W=h[U],N=v[U],j=g[U],X=b*w*4*U;for(let Q=0;Q<W.count;Q++){const Z=Q*E;_===!0&&(r.fromBufferAttribute(W,Q),A[X+Z+0]=r.x,A[X+Z+1]=r.y,A[X+Z+2]=r.z,A[X+Z+3]=0),x===!0&&(r.fromBufferAttribute(N,Q),A[X+Z+4]=r.x,A[X+Z+5]=r.y,A[X+Z+6]=r.z,A[X+Z+7]=0),m===!0&&(r.fromBufferAttribute(j,Q),A[X+Z+8]=r.x,A[X+Z+9]=r.y,A[X+Z+10]=r.z,A[X+Z+11]=j.itemSize===4?r.w:1)}}f={count:d,texture:L,size:new Fe(b,w)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function EA(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Ov extends Pt{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:ws,u!==ws&&u!==Qo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ws&&(i=Bs),i===void 0&&u===Qo&&(i=oa),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Kt,this.minFilter=l!==void 0?l:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const kv=new Pt,Bv=new Ov(1,1);Bv.compareFunction=Tv;const zv=new Cv,Hv=new lM,Vv=new Uv,dm=[],fm=[],hm=new Float32Array(16),pm=new Float32Array(9),mm=new Float32Array(4);function Ks(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=dm[r];if(s===void 0&&(s=new Float32Array(r),dm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Et(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Tt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function fc(n,e){let t=fm[e];t===void 0&&(t=new Int32Array(e),fm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function TA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function AA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2fv(this.addr,e),Tt(t,e)}}function wA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;n.uniform3fv(this.addr,e),Tt(t,e)}}function RA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4fv(this.addr,e),Tt(t,e)}}function CA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;mm.set(i),n.uniformMatrix2fv(this.addr,!1,mm),Tt(t,i)}}function bA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;pm.set(i),n.uniformMatrix3fv(this.addr,!1,pm),Tt(t,i)}}function PA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;hm.set(i),n.uniformMatrix4fv(this.addr,!1,hm),Tt(t,i)}}function LA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function NA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2iv(this.addr,e),Tt(t,e)}}function IA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3iv(this.addr,e),Tt(t,e)}}function DA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4iv(this.addr,e),Tt(t,e)}}function UA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function FA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2uiv(this.addr,e),Tt(t,e)}}function OA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3uiv(this.addr,e),Tt(t,e)}}function kA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4uiv(this.addr,e),Tt(t,e)}}function BA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Bv:kv;t.setTexture2D(e||s,r)}function zA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Hv,r)}function HA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Vv,r)}function VA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||zv,r)}function GA(n){switch(n){case 5126:return TA;case 35664:return AA;case 35665:return wA;case 35666:return RA;case 35674:return CA;case 35675:return bA;case 35676:return PA;case 5124:case 35670:return LA;case 35667:case 35671:return NA;case 35668:case 35672:return IA;case 35669:case 35673:return DA;case 5125:return UA;case 36294:return FA;case 36295:return OA;case 36296:return kA;case 35678:case 36198:case 36298:case 36306:case 35682:return BA;case 35679:case 36299:case 36307:return zA;case 35680:case 36300:case 36308:case 36293:return HA;case 36289:case 36303:case 36311:case 36292:return VA}}function WA(n,e){n.uniform1fv(this.addr,e)}function XA(n,e){const t=Ks(e,this.size,2);n.uniform2fv(this.addr,t)}function jA(n,e){const t=Ks(e,this.size,3);n.uniform3fv(this.addr,t)}function YA(n,e){const t=Ks(e,this.size,4);n.uniform4fv(this.addr,t)}function qA(n,e){const t=Ks(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function KA(n,e){const t=Ks(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function $A(n,e){const t=Ks(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ZA(n,e){n.uniform1iv(this.addr,e)}function QA(n,e){n.uniform2iv(this.addr,e)}function JA(n,e){n.uniform3iv(this.addr,e)}function ew(n,e){n.uniform4iv(this.addr,e)}function tw(n,e){n.uniform1uiv(this.addr,e)}function nw(n,e){n.uniform2uiv(this.addr,e)}function iw(n,e){n.uniform3uiv(this.addr,e)}function rw(n,e){n.uniform4uiv(this.addr,e)}function sw(n,e,t){const i=this.cache,r=e.length,s=fc(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||kv,s[o])}function ow(n,e,t){const i=this.cache,r=e.length,s=fc(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Hv,s[o])}function aw(n,e,t){const i=this.cache,r=e.length,s=fc(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Vv,s[o])}function lw(n,e,t){const i=this.cache,r=e.length,s=fc(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||zv,s[o])}function cw(n){switch(n){case 5126:return WA;case 35664:return XA;case 35665:return jA;case 35666:return YA;case 35674:return qA;case 35675:return KA;case 35676:return $A;case 5124:case 35670:return ZA;case 35667:case 35671:return QA;case 35668:case 35672:return JA;case 35669:case 35673:return ew;case 5125:return tw;case 36294:return nw;case 36295:return iw;case 36296:return rw;case 35678:case 36198:case 36298:case 36306:case 35682:return sw;case 35679:case 36299:case 36307:return ow;case 35680:case 36300:case 36308:case 36293:return aw;case 36289:case 36303:case 36311:case 36292:return lw}}class uw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=GA(t.type)}}class dw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cw(t.type)}}class fw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const xu=/(\w+)(\])?(\[|\.)?/g;function gm(n,e){n.seq.push(e),n.map[e.id]=e}function hw(n,e,t){const i=n.name,r=i.length;for(xu.lastIndex=0;;){const s=xu.exec(i),o=xu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){gm(t,c===void 0?new uw(a,n,e):new dw(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new fw(a),gm(t,d)),t=d}}}class pl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);hw(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function _m(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const pw=37297;let mw=0;function gw(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function _w(n){const e=je.getPrimaries(je.workingColorSpace),t=je.getPrimaries(n);let i;switch(e===t?i="":e===Wl&&t===Gl?i="LinearDisplayP3ToLinearSRGB":e===Gl&&t===Wl&&(i="LinearSRGBToLinearDisplayP3"),n){case Dt:case cc:return[i,"LinearTransferOETF"];case Yt:case Cf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function vm(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+gw(n.getShaderSource(e),o)}else return r}function vw(n,e){const t=_w(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function xw(n,e){let t;switch(e){case uS:t="Linear";break;case dS:t="Reinhard";break;case fS:t="OptimizedCineon";break;case hS:t="ACESFilmic";break;case mS:t="AgX";break;case gS:t="Neutral";break;case pS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function yw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mo).join(`
`)}function Sw(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Mw(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Mo(n){return n!==""}function xm(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ym(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ew=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rd(n){return n.replace(Ew,Aw)}const Tw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Aw(n,e){let t=Ne[e];if(t===void 0){const i=Tw.get(e);if(i!==void 0)t=Ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Rd(t)}const ww=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sm(n){return n.replace(ww,Rw)}function Rw(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Mm(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Cw(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===cv?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Fy?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function bw(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Fs:case Os:e="ENVMAP_TYPE_CUBE";break;case lc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Pw(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Os:e="ENVMAP_MODE_REFRACTION";break}return e}function Lw(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case uv:e="ENVMAP_BLENDING_MULTIPLY";break;case lS:e="ENVMAP_BLENDING_MIX";break;case cS:e="ENVMAP_BLENDING_ADD";break}return e}function Nw(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Iw(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Cw(t),c=bw(t),u=Pw(t),d=Lw(t),f=Nw(t),p=yw(t),_=Sw(s),x=r.createProgram();let m,h,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Mo).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Mo).join(`
`),h.length>0&&(h+=`
`)):(m=[Mm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mo).join(`
`),h=[Mm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==tr?"#define TONE_MAPPING":"",t.toneMapping!==tr?Ne.tonemapping_pars_fragment:"",t.toneMapping!==tr?xw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,vw("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mo).join(`
`)),o=Rd(o),o=xm(o,t),o=ym(o,t),a=Rd(a),a=xm(a,t),a=ym(a,t),o=Sm(o),a=Sm(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Op?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Op?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const g=v+m+o,M=v+h+a,b=_m(r,r.VERTEX_SHADER,g),w=_m(r,r.FRAGMENT_SHADER,M);r.attachShader(x,b),r.attachShader(x,w),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(U){if(n.debug.checkShaderErrors){const W=r.getProgramInfoLog(x).trim(),N=r.getShaderInfoLog(b).trim(),j=r.getShaderInfoLog(w).trim();let X=!0,Q=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,b,w);else{const Z=vm(r,b,"vertex"),P=vm(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+W+`
`+Z+`
`+P)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(N===""||j==="")&&(Q=!1);Q&&(U.diagnostics={runnable:X,programLog:W,vertexShader:{log:N,prefix:m},fragmentShader:{log:j,prefix:h}})}r.deleteShader(b),r.deleteShader(w),L=new pl(r,x),E=Mw(r,x)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,pw)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mw++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=w,this}let Dw=0;class Uw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Fw(e),t.set(e,i)),i}}class Fw{constructor(e){this.id=Dw++,this.code=e,this.usedTimes=0}}function Ow(n,e,t,i,r,s,o){const a=new bv,l=new Uw,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,y,U,W,N){const j=W.fog,X=N.geometry,Q=E.isMeshStandardMaterial?W.environment:null,Z=(E.isMeshStandardMaterial?t:e).get(E.envMap||Q),P=Z&&Z.mapping===lc?Z.image.height:null,V=_[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const G=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ne=G!==void 0?G.length:0;let pe=0;X.morphAttributes.position!==void 0&&(pe=1),X.morphAttributes.normal!==void 0&&(pe=2),X.morphAttributes.color!==void 0&&(pe=3);let We,H,ee,le;if(V){const Ut=Xn[V];We=Ut.vertexShader,H=Ut.fragmentShader}else We=E.vertexShader,H=E.fragmentShader,l.update(E),ee=l.getVertexShaderID(E),le=l.getFragmentShaderID(E);const oe=n.getRenderTarget(),Pe=N.isInstancedMesh===!0,Ue=N.isBatchedMesh===!0,He=!!E.map,F=!!E.matcap,ke=!!Z,Me=!!E.aoMap,yt=!!E.lightMap,Te=!!E.bumpMap,Ze=!!E.normalMap,R=!!E.displacementMap,S=!!E.emissiveMap,z=!!E.metalnessMap,Y=!!E.roughnessMap,q=E.anisotropy>0,K=E.clearcoat>0,ye=E.iridescence>0,J=E.sheen>0,_e=E.transmission>0,Se=q&&!!E.anisotropyMap,re=K&&!!E.clearcoatMap,ue=K&&!!E.clearcoatNormalMap,we=K&&!!E.clearcoatRoughnessMap,de=ye&&!!E.iridescenceMap,fe=ye&&!!E.iridescenceThicknessMap,ze=J&&!!E.sheenColorMap,Ve=J&&!!E.sheenRoughnessMap,Ye=!!E.specularMap,Xe=!!E.specularColorMap,st=!!E.specularIntensityMap,me=_e&&!!E.transmissionMap,C=_e&&!!E.thicknessMap,ie=!!E.gradientMap,te=!!E.alphaMap,ge=E.alphaTest>0,ve=!!E.alphaHash,Je=!!E.extensions;let ot=tr;E.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(ot=n.toneMapping);const ct={shaderID:V,shaderType:E.type,shaderName:E.name,vertexShader:We,fragmentShader:H,defines:E.defines,customVertexShaderID:ee,customFragmentShaderID:le,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ue,instancing:Pe,instancingColor:Pe&&N.instanceColor!==null,instancingMorph:Pe&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Dt,alphaToCoverage:!!E.alphaToCoverage,map:He,matcap:F,envMap:ke,envMapMode:ke&&Z.mapping,envMapCubeUVHeight:P,aoMap:Me,lightMap:yt,bumpMap:Te,normalMap:Ze,displacementMap:f&&R,emissiveMap:S,normalMapObjectSpace:Ze&&E.normalMapType===LS,normalMapTangentSpace:Ze&&E.normalMapType===Ev,metalnessMap:z,roughnessMap:Y,anisotropy:q,anisotropyMap:Se,clearcoat:K,clearcoatMap:re,clearcoatNormalMap:ue,clearcoatRoughnessMap:we,iridescence:ye,iridescenceMap:de,iridescenceThicknessMap:fe,sheen:J,sheenColorMap:ze,sheenRoughnessMap:Ve,specularMap:Ye,specularColorMap:Xe,specularIntensityMap:st,transmission:_e,transmissionMap:me,thicknessMap:C,gradientMap:ie,opaque:E.transparent===!1&&E.blending===As&&E.alphaToCoverage===!1,alphaMap:te,alphaTest:ge,alphaHash:ve,combine:E.combine,mapUv:He&&x(E.map.channel),aoMapUv:Me&&x(E.aoMap.channel),lightMapUv:yt&&x(E.lightMap.channel),bumpMapUv:Te&&x(E.bumpMap.channel),normalMapUv:Ze&&x(E.normalMap.channel),displacementMapUv:R&&x(E.displacementMap.channel),emissiveMapUv:S&&x(E.emissiveMap.channel),metalnessMapUv:z&&x(E.metalnessMap.channel),roughnessMapUv:Y&&x(E.roughnessMap.channel),anisotropyMapUv:Se&&x(E.anisotropyMap.channel),clearcoatMapUv:re&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:ue&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&x(E.sheenRoughnessMap.channel),specularMapUv:Ye&&x(E.specularMap.channel),specularColorMapUv:Xe&&x(E.specularColorMap.channel),specularIntensityMapUv:st&&x(E.specularIntensityMap.channel),transmissionMapUv:me&&x(E.transmissionMap.channel),thicknessMapUv:C&&x(E.thicknessMap.channel),alphaMapUv:te&&x(E.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ze||q),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!X.attributes.uv&&(He||te),fog:!!j,useFog:E.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:N.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:pe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:ot,useLegacyLights:n._useLegacyLights,decodeVideoTexture:He&&E.map.isVideoTexture===!0&&je.getTransfer(E.map.colorSpace)===it,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Yn,flipSided:E.side===an,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Je&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Je&&E.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ct.vertexUv1s=c.has(1),ct.vertexUv2s=c.has(2),ct.vertexUv3s=c.has(3),c.clear(),ct}function h(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const U in E.defines)y.push(U),y.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(v(y,E),g(y,E),y.push(n.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function v(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function g(E,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),E.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.alphaToCoverage&&a.enable(20),E.push(a.mask)}function M(E){const y=_[E.type];let U;if(y){const W=Xn[y];U=yM.clone(W.uniforms)}else U=E.uniforms;return U}function b(E,y){let U;for(let W=0,N=u.length;W<N;W++){const j=u[W];if(j.cacheKey===y){U=j,++U.usedTimes;break}}return U===void 0&&(U=new Iw(n,y,E,s),u.push(U)),U}function w(E){if(--E.usedTimes===0){const y=u.indexOf(E);u[y]=u[u.length-1],u.pop(),E.destroy()}}function A(E){l.remove(E)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:M,acquireProgram:b,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:L}}function kw(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Bw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Em(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Tm(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,p,_,x,m){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:x,group:m},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=x,h.group=m),e++,h}function a(d,f,p,_,x,m){const h=o(d,f,p,_,x,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(d,f,p,_,x,m){const h=o(d,f,p,_,x,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function c(d,f){t.length>1&&t.sort(d||Bw),i.length>1&&i.sort(f||Em),r.length>1&&r.sort(f||Em)}function u(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function zw(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Tm,n.set(i,[o])):r>=s.length?(o=new Tm,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Hw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ae};break;case"SpotLight":t={position:new I,direction:new I,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function Vw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Gw=0;function Ww(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Xw(n){const e=new Hw,t=Vw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const r=new I,s=new De,o=new De;function a(c,u){let d=0,f=0,p=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let _=0,x=0,m=0,h=0,v=0,g=0,M=0,b=0,w=0,A=0,L=0;c.sort(Ww);const E=u===!0?Math.PI:1;for(let U=0,W=c.length;U<W;U++){const N=c[U],j=N.color,X=N.intensity,Q=N.distance,Z=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=j.r*X*E,f+=j.g*X*E,p+=j.b*X*E;else if(N.isLightProbe){for(let P=0;P<9;P++)i.probe[P].addScaledVector(N.sh.coefficients[P],X);L++}else if(N.isDirectionalLight){const P=e.get(N);if(P.color.copy(N.color).multiplyScalar(N.intensity*E),N.castShadow){const V=N.shadow,G=t.get(N);G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,i.directionalShadow[_]=G,i.directionalShadowMap[_]=Z,i.directionalShadowMatrix[_]=N.shadow.matrix,g++}i.directional[_]=P,_++}else if(N.isSpotLight){const P=e.get(N);P.position.setFromMatrixPosition(N.matrixWorld),P.color.copy(j).multiplyScalar(X*E),P.distance=Q,P.coneCos=Math.cos(N.angle),P.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),P.decay=N.decay,i.spot[m]=P;const V=N.shadow;if(N.map&&(i.spotLightMap[w]=N.map,w++,V.updateMatrices(N),N.castShadow&&A++),i.spotLightMatrix[m]=V.matrix,N.castShadow){const G=t.get(N);G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,i.spotShadow[m]=G,i.spotShadowMap[m]=Z,b++}m++}else if(N.isRectAreaLight){const P=e.get(N);P.color.copy(j).multiplyScalar(X),P.halfWidth.set(N.width*.5,0,0),P.halfHeight.set(0,N.height*.5,0),i.rectArea[h]=P,h++}else if(N.isPointLight){const P=e.get(N);if(P.color.copy(N.color).multiplyScalar(N.intensity*E),P.distance=N.distance,P.decay=N.decay,N.castShadow){const V=N.shadow,G=t.get(N);G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,G.shadowCameraNear=V.camera.near,G.shadowCameraFar=V.camera.far,i.pointShadow[x]=G,i.pointShadowMap[x]=Z,i.pointShadowMatrix[x]=N.shadow.matrix,M++}i.point[x]=P,x++}else if(N.isHemisphereLight){const P=e.get(N);P.skyColor.copy(N.color).multiplyScalar(X*E),P.groundColor.copy(N.groundColor).multiplyScalar(X*E),i.hemi[v]=P,v++}}h>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=p;const y=i.hash;(y.directionalLength!==_||y.pointLength!==x||y.spotLength!==m||y.rectAreaLength!==h||y.hemiLength!==v||y.numDirectionalShadows!==g||y.numPointShadows!==M||y.numSpotShadows!==b||y.numSpotMaps!==w||y.numLightProbes!==L)&&(i.directional.length=_,i.spot.length=m,i.rectArea.length=h,i.point.length=x,i.hemi.length=v,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=b+w-A,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=L,y.directionalLength=_,y.pointLength=x,y.spotLength=m,y.rectAreaLength=h,y.hemiLength=v,y.numDirectionalShadows=g,y.numPointShadows=M,y.numSpotShadows=b,y.numSpotMaps=w,y.numLightProbes=L,i.version=Gw++)}function l(c,u){let d=0,f=0,p=0,_=0,x=0;const m=u.matrixWorldInverse;for(let h=0,v=c.length;h<v;h++){const g=c[h];if(g.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(g.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(g.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(g.width*.5,0,0),M.halfHeight.set(0,g.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(g.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(m),f++}else if(g.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(g.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Am(n){const e=new Xw(n),t=[],i=[];function r(){t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(u){e.setup(t,u)}function l(u){e.setupView(t,u)}return{init:r,state:{lightsArray:t,shadowsArray:i,lights:e,transmissionRenderTarget:null},setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function jw(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Am(n),e.set(r,[a])):s>=o.length?(a=new Am(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class Yw extends Qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qw extends Qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Kw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$w=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Zw(n,e,t){let i=new Pf;const r=new Fe,s=new Fe,o=new Qe,a=new Yw({depthPacking:PS}),l=new qw,c={},u=t.maxTextureSize,d={[Ei]:an,[an]:Ei,[Yn]:Yn},f=new sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:Kw,fragmentShader:$w}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new ti;_.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new nn(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cv;let h=this.type;this.render=function(w,A,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const E=n.getRenderTarget(),y=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),W=n.state;W.setBlending(er),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const N=h!==ui&&this.type===ui,j=h===ui&&this.type!==ui;for(let X=0,Q=w.length;X<Q;X++){const Z=w[X],P=Z.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const V=P.getFrameExtents();if(r.multiply(V),s.copy(P.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/V.x),r.x=s.x*V.x,P.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/V.y),r.y=s.y*V.y,P.mapSize.y=s.y)),P.map===null||N===!0||j===!0){const ne=this.type!==ui?{minFilter:Kt,magFilter:Kt}:{};P.map!==null&&P.map.dispose(),P.map=new Or(r.x,r.y,ne),P.map.texture.name=Z.name+".shadowMap",P.camera.updateProjectionMatrix()}n.setRenderTarget(P.map),n.clear();const G=P.getViewportCount();for(let ne=0;ne<G;ne++){const pe=P.getViewport(ne);o.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),W.viewport(o),P.updateMatrices(Z,ne),i=P.getFrustum(),M(A,L,P.camera,Z,this.type)}P.isPointLightShadow!==!0&&this.type===ui&&v(P,L),P.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(E,y,U)};function v(w,A){const L=e.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Or(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,L,f,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,L,p,x,null)}function g(w,A,L,E){let y=null;const U=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)y=U;else if(y=L.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const W=y.uuid,N=A.uuid;let j=c[W];j===void 0&&(j={},c[W]=j);let X=j[N];X===void 0&&(X=y.clone(),j[N]=X,A.addEventListener("dispose",b)),y=X}if(y.visible=A.visible,y.wireframe=A.wireframe,E===ui?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:d[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const W=n.properties.get(y);W.light=L}return y}function M(w,A,L,E,y){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===ui)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const N=e.update(w),j=w.material;if(Array.isArray(j)){const X=N.groups;for(let Q=0,Z=X.length;Q<Z;Q++){const P=X[Q],V=j[P.materialIndex];if(V&&V.visible){const G=g(w,V,E,y);w.onBeforeShadow(n,w,A,L,N,G,P),n.renderBufferDirect(L,null,N,G,w,P),w.onAfterShadow(n,w,A,L,N,G,P)}}}else if(j.visible){const X=g(w,j,E,y);w.onBeforeShadow(n,w,A,L,N,X,null),n.renderBufferDirect(L,null,N,X,w,null),w.onAfterShadow(n,w,A,L,N,X,null)}}const W=w.children;for(let N=0,j=W.length;N<j;N++)M(W[N],A,L,E,y)}function b(w){w.target.removeEventListener("dispose",b);for(const L in c){const E=c[L],y=w.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}function Qw(n){function e(){let C=!1;const ie=new Qe;let te=null;const ge=new Qe(0,0,0,0);return{setMask:function(ve){te!==ve&&!C&&(n.colorMask(ve,ve,ve,ve),te=ve)},setLocked:function(ve){C=ve},setClear:function(ve,Je,ot,ct,Ut){Ut===!0&&(ve*=ct,Je*=ct,ot*=ct),ie.set(ve,Je,ot,ct),ge.equals(ie)===!1&&(n.clearColor(ve,Je,ot,ct),ge.copy(ie))},reset:function(){C=!1,te=null,ge.set(-1,0,0,0)}}}function t(){let C=!1,ie=null,te=null,ge=null;return{setTest:function(ve){ve?le(n.DEPTH_TEST):oe(n.DEPTH_TEST)},setMask:function(ve){ie!==ve&&!C&&(n.depthMask(ve),ie=ve)},setFunc:function(ve){if(te!==ve){switch(ve){case tS:n.depthFunc(n.NEVER);break;case nS:n.depthFunc(n.ALWAYS);break;case iS:n.depthFunc(n.LESS);break;case Bl:n.depthFunc(n.LEQUAL);break;case rS:n.depthFunc(n.EQUAL);break;case sS:n.depthFunc(n.GEQUAL);break;case oS:n.depthFunc(n.GREATER);break;case aS:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}te=ve}},setLocked:function(ve){C=ve},setClear:function(ve){ge!==ve&&(n.clearDepth(ve),ge=ve)},reset:function(){C=!1,ie=null,te=null,ge=null}}}function i(){let C=!1,ie=null,te=null,ge=null,ve=null,Je=null,ot=null,ct=null,Ut=null;return{setTest:function(tt){C||(tt?le(n.STENCIL_TEST):oe(n.STENCIL_TEST))},setMask:function(tt){ie!==tt&&!C&&(n.stencilMask(tt),ie=tt)},setFunc:function(tt,Hn,Vn){(te!==tt||ge!==Hn||ve!==Vn)&&(n.stencilFunc(tt,Hn,Vn),te=tt,ge=Hn,ve=Vn)},setOp:function(tt,Hn,Vn){(Je!==tt||ot!==Hn||ct!==Vn)&&(n.stencilOp(tt,Hn,Vn),Je=tt,ot=Hn,ct=Vn)},setLocked:function(tt){C=tt},setClear:function(tt){Ut!==tt&&(n.clearStencil(tt),Ut=tt)},reset:function(){C=!1,ie=null,te=null,ge=null,ve=null,Je=null,ot=null,ct=null,Ut=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,f=[],p=null,_=!1,x=null,m=null,h=null,v=null,g=null,M=null,b=null,w=new Ae(0,0,0),A=0,L=!1,E=null,y=null,U=null,W=null,N=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Q=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(Z)[1]),X=Q>=1):Z.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),X=Q>=2);let P=null,V={};const G=n.getParameter(n.SCISSOR_BOX),ne=n.getParameter(n.VIEWPORT),pe=new Qe().fromArray(G),We=new Qe().fromArray(ne);function H(C,ie,te,ge){const ve=new Uint8Array(4),Je=n.createTexture();n.bindTexture(C,Je),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ot=0;ot<te;ot++)C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY?n.texImage3D(ie,0,n.RGBA,1,1,ge,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(ie+ot,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return Je}const ee={};ee[n.TEXTURE_2D]=H(n.TEXTURE_2D,n.TEXTURE_2D,1),ee[n.TEXTURE_CUBE_MAP]=H(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[n.TEXTURE_2D_ARRAY]=H(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ee[n.TEXTURE_3D]=H(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),le(n.DEPTH_TEST),s.setFunc(Bl),Te(!1),Ze(ip),le(n.CULL_FACE),Me(er);function le(C){c[C]!==!0&&(n.enable(C),c[C]=!0)}function oe(C){c[C]!==!1&&(n.disable(C),c[C]=!1)}function Pe(C,ie){return u[C]!==ie?(n.bindFramebuffer(C,ie),u[C]=ie,C===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ie),C===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ue(C,ie){let te=f,ge=!1;if(C){te=d.get(ie),te===void 0&&(te=[],d.set(ie,te));const ve=C.textures;if(te.length!==ve.length||te[0]!==n.COLOR_ATTACHMENT0){for(let Je=0,ot=ve.length;Je<ot;Je++)te[Je]=n.COLOR_ATTACHMENT0+Je;te.length=ve.length,ge=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,ge=!0);ge&&n.drawBuffers(te)}function He(C){return p!==C?(n.useProgram(C),p=C,!0):!1}const F={[Er]:n.FUNC_ADD,[ky]:n.FUNC_SUBTRACT,[By]:n.FUNC_REVERSE_SUBTRACT};F[zy]=n.MIN,F[Hy]=n.MAX;const ke={[Vy]:n.ZERO,[Gy]:n.ONE,[Wy]:n.SRC_COLOR,[Sd]:n.SRC_ALPHA,[$y]:n.SRC_ALPHA_SATURATE,[qy]:n.DST_COLOR,[jy]:n.DST_ALPHA,[Xy]:n.ONE_MINUS_SRC_COLOR,[Md]:n.ONE_MINUS_SRC_ALPHA,[Ky]:n.ONE_MINUS_DST_COLOR,[Yy]:n.ONE_MINUS_DST_ALPHA,[Zy]:n.CONSTANT_COLOR,[Qy]:n.ONE_MINUS_CONSTANT_COLOR,[Jy]:n.CONSTANT_ALPHA,[eS]:n.ONE_MINUS_CONSTANT_ALPHA};function Me(C,ie,te,ge,ve,Je,ot,ct,Ut,tt){if(C===er){_===!0&&(oe(n.BLEND),_=!1);return}if(_===!1&&(le(n.BLEND),_=!0),C!==Oy){if(C!==x||tt!==L){if((m!==Er||g!==Er)&&(n.blendEquation(n.FUNC_ADD),m=Er,g=Er),tt)switch(C){case As:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rp:n.blendFunc(n.ONE,n.ONE);break;case sp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case op:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case As:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rp:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case sp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case op:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}h=null,v=null,M=null,b=null,w.set(0,0,0),A=0,x=C,L=tt}return}ve=ve||ie,Je=Je||te,ot=ot||ge,(ie!==m||ve!==g)&&(n.blendEquationSeparate(F[ie],F[ve]),m=ie,g=ve),(te!==h||ge!==v||Je!==M||ot!==b)&&(n.blendFuncSeparate(ke[te],ke[ge],ke[Je],ke[ot]),h=te,v=ge,M=Je,b=ot),(ct.equals(w)===!1||Ut!==A)&&(n.blendColor(ct.r,ct.g,ct.b,Ut),w.copy(ct),A=Ut),x=C,L=!1}function yt(C,ie){C.side===Yn?oe(n.CULL_FACE):le(n.CULL_FACE);let te=C.side===an;ie&&(te=!te),Te(te),C.blending===As&&C.transparent===!1?Me(er):Me(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),s.setFunc(C.depthFunc),s.setTest(C.depthTest),s.setMask(C.depthWrite),r.setMask(C.colorWrite);const ge=C.stencilWrite;o.setTest(ge),ge&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),S(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?le(n.SAMPLE_ALPHA_TO_COVERAGE):oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Te(C){E!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),E=C)}function Ze(C){C!==Dy?(le(n.CULL_FACE),C!==y&&(C===ip?n.cullFace(n.BACK):C===Uy?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):oe(n.CULL_FACE),y=C}function R(C){C!==U&&(X&&n.lineWidth(C),U=C)}function S(C,ie,te){C?(le(n.POLYGON_OFFSET_FILL),(W!==ie||N!==te)&&(n.polygonOffset(ie,te),W=ie,N=te)):oe(n.POLYGON_OFFSET_FILL)}function z(C){C?le(n.SCISSOR_TEST):oe(n.SCISSOR_TEST)}function Y(C){C===void 0&&(C=n.TEXTURE0+j-1),P!==C&&(n.activeTexture(C),P=C)}function q(C,ie,te){te===void 0&&(P===null?te=n.TEXTURE0+j-1:te=P);let ge=V[te];ge===void 0&&(ge={type:void 0,texture:void 0},V[te]=ge),(ge.type!==C||ge.texture!==ie)&&(P!==te&&(n.activeTexture(te),P=te),n.bindTexture(C,ie||ee[C]),ge.type=C,ge.texture=ie)}function K(){const C=V[P];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function ye(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _e(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Se(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function re(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ue(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function we(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function de(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function fe(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ze(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ve(C){pe.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),pe.copy(C))}function Ye(C){We.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),We.copy(C))}function Xe(C,ie){let te=l.get(ie);te===void 0&&(te=new WeakMap,l.set(ie,te));let ge=te.get(C);ge===void 0&&(ge=n.getUniformBlockIndex(ie,C.name),te.set(C,ge))}function st(C,ie){const ge=l.get(ie).get(C);a.get(ie)!==ge&&(n.uniformBlockBinding(ie,ge,C.__bindingPointIndex),a.set(ie,ge))}function me(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},P=null,V={},u={},d=new WeakMap,f=[],p=null,_=!1,x=null,m=null,h=null,v=null,g=null,M=null,b=null,w=new Ae(0,0,0),A=0,L=!1,E=null,y=null,U=null,W=null,N=null,pe.set(0,0,n.canvas.width,n.canvas.height),We.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:le,disable:oe,bindFramebuffer:Pe,drawBuffers:Ue,useProgram:He,setBlending:Me,setMaterial:yt,setFlipSided:Te,setCullFace:Ze,setLineWidth:R,setPolygonOffset:S,setScissorTest:z,activeTexture:Y,bindTexture:q,unbindTexture:K,compressedTexImage2D:ye,compressedTexImage3D:J,texImage2D:fe,texImage3D:ze,updateUBOMapping:Xe,uniformBlockBinding:st,texStorage2D:we,texStorage3D:de,texSubImage2D:_e,texSubImage3D:Se,compressedTexSubImage2D:re,compressedTexSubImage3D:ue,scissor:Ve,viewport:Ye,reset:me}}function Jw(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Fe,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,S){return p?new OffscreenCanvas(R,S):ea("canvas")}function x(R,S,z){let Y=1;const q=Ze(R);if((q.width>z||q.height>z)&&(Y=z/Math.max(q.width,q.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const K=Math.floor(Y*q.width),ye=Math.floor(Y*q.height);d===void 0&&(d=_(K,ye));const J=S?_(K,ye):d;return J.width=K,J.height=ye,J.getContext("2d").drawImage(R,0,0,K,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+K+"x"+ye+")."),J}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==Kt&&R.minFilter!==fn}function h(R){n.generateMipmap(R)}function v(R,S,z,Y,q=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=S;if(S===n.RED&&(z===n.FLOAT&&(K=n.R32F),z===n.HALF_FLOAT&&(K=n.R16F),z===n.UNSIGNED_BYTE&&(K=n.R8)),S===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.R8UI),z===n.UNSIGNED_SHORT&&(K=n.R16UI),z===n.UNSIGNED_INT&&(K=n.R32UI),z===n.BYTE&&(K=n.R8I),z===n.SHORT&&(K=n.R16I),z===n.INT&&(K=n.R32I)),S===n.RG&&(z===n.FLOAT&&(K=n.RG32F),z===n.HALF_FLOAT&&(K=n.RG16F),z===n.UNSIGNED_BYTE&&(K=n.RG8)),S===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.RG8UI),z===n.UNSIGNED_SHORT&&(K=n.RG16UI),z===n.UNSIGNED_INT&&(K=n.RG32UI),z===n.BYTE&&(K=n.RG8I),z===n.SHORT&&(K=n.RG16I),z===n.INT&&(K=n.RG32I)),S===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),S===n.RGBA){const ye=q?Vl:je.getTransfer(Y);z===n.FLOAT&&(K=n.RGBA32F),z===n.HALF_FLOAT&&(K=n.RGBA16F),z===n.UNSIGNED_BYTE&&(K=ye===it?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function g(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Kt&&R.minFilter!==fn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function M(R){const S=R.target;S.removeEventListener("dispose",M),w(S),S.isVideoTexture&&u.delete(S)}function b(R){const S=R.target;S.removeEventListener("dispose",b),L(S)}function w(R){const S=i.get(R);if(S.__webglInit===void 0)return;const z=R.source,Y=f.get(z);if(Y){const q=Y[S.__cacheKey];q.usedTimes--,q.usedTimes===0&&A(R),Object.keys(Y).length===0&&f.delete(z)}i.remove(R)}function A(R){const S=i.get(R);n.deleteTexture(S.__webglTexture);const z=R.source,Y=f.get(z);delete Y[S.__cacheKey],o.memory.textures--}function L(R){const S=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let q=0;q<S.__webglFramebuffer[Y].length;q++)n.deleteFramebuffer(S.__webglFramebuffer[Y][q]);else n.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)n.deleteFramebuffer(S.__webglFramebuffer[Y]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=R.textures;for(let Y=0,q=z.length;Y<q;Y++){const K=i.get(z[Y]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(z[Y])}i.remove(R)}let E=0;function y(){E=0}function U(){const R=E;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),E+=1,R}function W(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function N(R,S){const z=i.get(R);if(R.isVideoTexture&&yt(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const Y=R.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(z,R,S);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+S)}function j(R,S){const z=i.get(R);if(R.version>0&&z.__version!==R.version){pe(z,R,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+S)}function X(R,S){const z=i.get(R);if(R.version>0&&z.__version!==R.version){pe(z,R,S);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+S)}function Q(R,S){const z=i.get(R);if(R.version>0&&z.__version!==R.version){We(z,R,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+S)}const Z={[ks]:n.REPEAT,[Wi]:n.CLAMP_TO_EDGE,[zl]:n.MIRRORED_REPEAT},P={[Kt]:n.NEAREST,[fv]:n.NEAREST_MIPMAP_NEAREST,[So]:n.NEAREST_MIPMAP_LINEAR,[fn]:n.LINEAR,[hl]:n.LINEAR_MIPMAP_NEAREST,[mi]:n.LINEAR_MIPMAP_LINEAR},V={[NS]:n.NEVER,[kS]:n.ALWAYS,[IS]:n.LESS,[Tv]:n.LEQUAL,[DS]:n.EQUAL,[OS]:n.GEQUAL,[US]:n.GREATER,[FS]:n.NOTEQUAL};function G(R,S){if(S.type===Kn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===fn||S.magFilter===hl||S.magFilter===So||S.magFilter===mi||S.minFilter===fn||S.minFilter===hl||S.minFilter===So||S.minFilter===mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Z[S.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Z[S.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Z[S.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,P[S.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,P[S.minFilter]),S.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,V[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Kt||S.minFilter!==So&&S.minFilter!==mi||S.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ne(R,S){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",M));const Y=S.source;let q=f.get(Y);q===void 0&&(q={},f.set(Y,q));const K=W(S);if(K!==R.__cacheKey){q[K]===void 0&&(q[K]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),q[K].usedTimes++;const ye=q[R.__cacheKey];ye!==void 0&&(q[R.__cacheKey].usedTimes--,ye.usedTimes===0&&A(S)),R.__cacheKey=K,R.__webglTexture=q[K].texture}return z}function pe(R,S,z){let Y=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=n.TEXTURE_3D);const q=ne(R,S),K=S.source;t.bindTexture(Y,R.__webglTexture,n.TEXTURE0+z);const ye=i.get(K);if(K.version!==ye.__version||q===!0){t.activeTexture(n.TEXTURE0+z);const J=je.getPrimaries(je.workingColorSpace),_e=S.colorSpace===Hi?null:je.getPrimaries(S.colorSpace),Se=S.colorSpace===Hi||J===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let re=x(S.image,!1,r.maxTextureSize);re=Te(S,re);const ue=s.convert(S.format,S.colorSpace),we=s.convert(S.type);let de=v(S.internalFormat,ue,we,S.colorSpace,S.isVideoTexture);G(Y,S);let fe;const ze=S.mipmaps,Ve=S.isVideoTexture!==!0&&de!==Sv,Ye=ye.__version===void 0||q===!0,Xe=K.dataReady,st=g(S,re);if(S.isDepthTexture)de=n.DEPTH_COMPONENT16,S.type===Kn?de=n.DEPTH_COMPONENT32F:S.type===Bs?de=n.DEPTH_COMPONENT24:S.type===oa&&(de=n.DEPTH24_STENCIL8),Ye&&(Ve?t.texStorage2D(n.TEXTURE_2D,1,de,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,de,re.width,re.height,0,ue,we,null));else if(S.isDataTexture)if(ze.length>0){Ve&&Ye&&t.texStorage2D(n.TEXTURE_2D,st,de,ze[0].width,ze[0].height);for(let me=0,C=ze.length;me<C;me++)fe=ze[me],Ve?Xe&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,fe.width,fe.height,ue,we,fe.data):t.texImage2D(n.TEXTURE_2D,me,de,fe.width,fe.height,0,ue,we,fe.data);S.generateMipmaps=!1}else Ve?(Ye&&t.texStorage2D(n.TEXTURE_2D,st,de,re.width,re.height),Xe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,re.width,re.height,ue,we,re.data)):t.texImage2D(n.TEXTURE_2D,0,de,re.width,re.height,0,ue,we,re.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ve&&Ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,st,de,ze[0].width,ze[0].height,re.depth);for(let me=0,C=ze.length;me<C;me++)fe=ze[me],S.format!==Fn?ue!==null?Ve?Xe&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,fe.width,fe.height,re.depth,ue,fe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,de,fe.width,fe.height,re.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?Xe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,fe.width,fe.height,re.depth,ue,we,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,de,fe.width,fe.height,re.depth,0,ue,we,fe.data)}else{Ve&&Ye&&t.texStorage2D(n.TEXTURE_2D,st,de,ze[0].width,ze[0].height);for(let me=0,C=ze.length;me<C;me++)fe=ze[me],S.format!==Fn?ue!==null?Ve?Xe&&t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,fe.width,fe.height,ue,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,me,de,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?Xe&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,fe.width,fe.height,ue,we,fe.data):t.texImage2D(n.TEXTURE_2D,me,de,fe.width,fe.height,0,ue,we,fe.data)}else if(S.isDataArrayTexture)Ve?(Ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,st,de,re.width,re.height,re.depth),Xe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ue,we,re.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,de,re.width,re.height,re.depth,0,ue,we,re.data);else if(S.isData3DTexture)Ve?(Ye&&t.texStorage3D(n.TEXTURE_3D,st,de,re.width,re.height,re.depth),Xe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ue,we,re.data)):t.texImage3D(n.TEXTURE_3D,0,de,re.width,re.height,re.depth,0,ue,we,re.data);else if(S.isFramebufferTexture){if(Ye)if(Ve)t.texStorage2D(n.TEXTURE_2D,st,de,re.width,re.height);else{let me=re.width,C=re.height;for(let ie=0;ie<st;ie++)t.texImage2D(n.TEXTURE_2D,ie,de,me,C,0,ue,we,null),me>>=1,C>>=1}}else if(ze.length>0){if(Ve&&Ye){const me=Ze(ze[0]);t.texStorage2D(n.TEXTURE_2D,st,de,me.width,me.height)}for(let me=0,C=ze.length;me<C;me++)fe=ze[me],Ve?Xe&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,ue,we,fe):t.texImage2D(n.TEXTURE_2D,me,de,ue,we,fe);S.generateMipmaps=!1}else if(Ve){if(Ye){const me=Ze(re);t.texStorage2D(n.TEXTURE_2D,st,de,me.width,me.height)}Xe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue,we,re)}else t.texImage2D(n.TEXTURE_2D,0,de,ue,we,re);m(S)&&h(Y),ye.__version=K.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function We(R,S,z){if(S.image.length!==6)return;const Y=ne(R,S),q=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+z);const K=i.get(q);if(q.version!==K.__version||Y===!0){t.activeTexture(n.TEXTURE0+z);const ye=je.getPrimaries(je.workingColorSpace),J=S.colorSpace===Hi?null:je.getPrimaries(S.colorSpace),_e=S.colorSpace===Hi||ye===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Se=S.isCompressedTexture||S.image[0].isCompressedTexture,re=S.image[0]&&S.image[0].isDataTexture,ue=[];for(let C=0;C<6;C++)!Se&&!re?ue[C]=x(S.image[C],!0,r.maxCubemapSize):ue[C]=re?S.image[C].image:S.image[C],ue[C]=Te(S,ue[C]);const we=ue[0],de=s.convert(S.format,S.colorSpace),fe=s.convert(S.type),ze=v(S.internalFormat,de,fe,S.colorSpace),Ve=S.isVideoTexture!==!0,Ye=K.__version===void 0||Y===!0,Xe=q.dataReady;let st=g(S,we);G(n.TEXTURE_CUBE_MAP,S);let me;if(Se){Ve&&Ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,st,ze,we.width,we.height);for(let C=0;C<6;C++){me=ue[C].mipmaps;for(let ie=0;ie<me.length;ie++){const te=me[ie];S.format!==Fn?de!==null?Ve?Xe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,ie,0,0,te.width,te.height,de,te.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,ie,ze,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?Xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,ie,0,0,te.width,te.height,de,fe,te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,ie,ze,te.width,te.height,0,de,fe,te.data)}}}else{if(me=S.mipmaps,Ve&&Ye){me.length>0&&st++;const C=Ze(ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,st,ze,C.width,C.height)}for(let C=0;C<6;C++)if(re){Ve?Xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,0,0,ue[C].width,ue[C].height,de,fe,ue[C].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,ze,ue[C].width,ue[C].height,0,de,fe,ue[C].data);for(let ie=0;ie<me.length;ie++){const ge=me[ie].image[C].image;Ve?Xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,ie+1,0,0,ge.width,ge.height,de,fe,ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,ie+1,ze,ge.width,ge.height,0,de,fe,ge.data)}}else{Ve?Xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,0,0,de,fe,ue[C]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,ze,de,fe,ue[C]);for(let ie=0;ie<me.length;ie++){const te=me[ie];Ve?Xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,ie+1,0,0,de,fe,te.image[C]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+C,ie+1,ze,de,fe,te.image[C])}}}m(S)&&h(n.TEXTURE_CUBE_MAP),K.__version=q.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function H(R,S,z,Y,q,K){const ye=s.convert(z.format,z.colorSpace),J=s.convert(z.type),_e=v(z.internalFormat,ye,J,z.colorSpace);if(!i.get(S).__hasExternalTextures){const re=Math.max(1,S.width>>K),ue=Math.max(1,S.height>>K);q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?t.texImage3D(q,K,_e,re,ue,S.depth,0,ye,J,null):t.texImage2D(q,K,_e,re,ue,0,ye,J,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),Me(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,q,i.get(z).__webglTexture,0,ke(S)):(q===n.TEXTURE_2D||q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,q,i.get(z).__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(R,S,z){if(n.bindRenderbuffer(n.RENDERBUFFER,R),S.depthBuffer&&!S.stencilBuffer){let Y=n.DEPTH_COMPONENT24;if(z||Me(S)){const q=S.depthTexture;q&&q.isDepthTexture&&(q.type===Kn?Y=n.DEPTH_COMPONENT32F:q.type===Bs&&(Y=n.DEPTH_COMPONENT24));const K=ke(S);Me(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,K,Y,S.width,S.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,K,Y,S.width,S.height)}else n.renderbufferStorage(n.RENDERBUFFER,Y,S.width,S.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,R)}else if(S.depthBuffer&&S.stencilBuffer){const Y=ke(S);z&&Me(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Y,n.DEPTH24_STENCIL8,S.width,S.height):Me(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Y,n.DEPTH24_STENCIL8,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,R)}else{const Y=S.textures;for(let q=0;q<Y.length;q++){const K=Y[q],ye=s.convert(K.format,K.colorSpace),J=s.convert(K.type),_e=v(K.internalFormat,ye,J,K.colorSpace),Se=ke(S);z&&Me(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,_e,S.width,S.height):Me(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se,_e,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,_e,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function le(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),N(S.depthTexture,0);const Y=i.get(S.depthTexture).__webglTexture,q=ke(S);if(S.depthTexture.format===ws)Me(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0);else if(S.depthTexture.format===Qo)Me(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function oe(R){const S=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");le(S.__webglFramebuffer,R)}else if(z){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]=n.createRenderbuffer(),ee(S.__webglDepthbuffer[Y],R,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),ee(S.__webglDepthbuffer,R,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(R,S,z){const Y=i.get(R);S!==void 0&&H(Y.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&oe(R)}function Ue(R){const S=R.texture,z=i.get(R),Y=i.get(S);R.addEventListener("dispose",b);const q=R.textures,K=R.isWebGLCubeRenderTarget===!0,ye=q.length>1;if(ye||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=S.version,o.memory.textures++),K){z.__webglFramebuffer=[];for(let J=0;J<6;J++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[J]=[];for(let _e=0;_e<S.mipmaps.length;_e++)z.__webglFramebuffer[J][_e]=n.createFramebuffer()}else z.__webglFramebuffer[J]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let J=0;J<S.mipmaps.length;J++)z.__webglFramebuffer[J]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(ye)for(let J=0,_e=q.length;J<_e;J++){const Se=i.get(q[J]);Se.__webglTexture===void 0&&(Se.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&Me(R)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let J=0;J<q.length;J++){const _e=q[J];z.__webglColorRenderbuffer[J]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[J]);const Se=s.convert(_e.format,_e.colorSpace),re=s.convert(_e.type),ue=v(_e.internalFormat,Se,re,_e.colorSpace,R.isXRRenderTarget===!0),we=ke(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,we,ue,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,z.__webglColorRenderbuffer[J])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),ee(z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),G(n.TEXTURE_CUBE_MAP,S);for(let J=0;J<6;J++)if(S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)H(z.__webglFramebuffer[J][_e],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e);else H(z.__webglFramebuffer[J],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);m(S)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let J=0,_e=q.length;J<_e;J++){const Se=q[J],re=i.get(Se);t.bindTexture(n.TEXTURE_2D,re.__webglTexture),G(n.TEXTURE_2D,Se),H(z.__webglFramebuffer,R,Se,n.COLOR_ATTACHMENT0+J,n.TEXTURE_2D,0),m(Se)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let J=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(J=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(J,Y.__webglTexture),G(J,S),S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)H(z.__webglFramebuffer[_e],R,S,n.COLOR_ATTACHMENT0,J,_e);else H(z.__webglFramebuffer,R,S,n.COLOR_ATTACHMENT0,J,0);m(S)&&h(J),t.unbindTexture()}R.depthBuffer&&oe(R)}function He(R){const S=R.textures;for(let z=0,Y=S.length;z<Y;z++){const q=S[z];if(m(q)){const K=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ye=i.get(q).__webglTexture;t.bindTexture(K,ye),h(K),t.unbindTexture()}}}function F(R){if(R.samples>0&&Me(R)===!1){const S=R.textures,z=R.width,Y=R.height;let q=n.COLOR_BUFFER_BIT;const K=[],ye=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=i.get(R),_e=S.length>1;if(_e)for(let Se=0;Se<S.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,J.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,J.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,J.__webglFramebuffer);for(let Se=0;Se<S.length;Se++){K.push(n.COLOR_ATTACHMENT0+Se),R.depthBuffer&&K.push(ye);const re=J.__ignoreDepthValues!==void 0?J.__ignoreDepthValues:!1;if(re===!1&&(R.depthBuffer&&(q|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&J.__isTransmissionRenderTarget!==!0&&(q|=n.STENCIL_BUFFER_BIT)),_e&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,J.__webglColorRenderbuffer[Se]),re===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ye]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ye])),_e){const ue=i.get(S[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ue,0)}n.blitFramebuffer(0,0,z,Y,0,0,z,Y,q,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,K)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let Se=0;Se<S.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,J.__webglColorRenderbuffer[Se]);const re=i.get(S[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,J.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,J.__webglMultisampledFramebuffer)}}function ke(R){return Math.min(r.maxSamples,R.samples)}function Me(R){const S=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function yt(R){const S=o.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function Te(R,S){const z=R.colorSpace,Y=R.format,q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Dt&&z!==Hi&&(je.getTransfer(z)===it?(Y!==Fn||q!==nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function Ze(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=y,this.setTexture2D=N,this.setTexture2DArray=j,this.setTexture3D=X,this.setTextureCube=Q,this.rebindTextures=Pe,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=F,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=H,this.useMultisampledRTT=Me}function e1(n,e){function t(i,r=Hi){let s;const o=je.getTransfer(r);if(i===nr)return n.UNSIGNED_BYTE;if(i===mv)return n.UNSIGNED_SHORT_4_4_4_4;if(i===gv)return n.UNSIGNED_SHORT_5_5_5_1;if(i===yS)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===vS)return n.BYTE;if(i===xS)return n.SHORT;if(i===hv)return n.UNSIGNED_SHORT;if(i===pv)return n.INT;if(i===Bs)return n.UNSIGNED_INT;if(i===Kn)return n.FLOAT;if(i===Hl)return n.HALF_FLOAT;if(i===SS)return n.ALPHA;if(i===MS)return n.RGB;if(i===Fn)return n.RGBA;if(i===ES)return n.LUMINANCE;if(i===TS)return n.LUMINANCE_ALPHA;if(i===ws)return n.DEPTH_COMPONENT;if(i===Qo)return n.DEPTH_STENCIL;if(i===_v)return n.RED;if(i===vv)return n.RED_INTEGER;if(i===AS)return n.RG;if(i===xv)return n.RG_INTEGER;if(i===yv)return n.RGBA_INTEGER;if(i===Wc||i===Xc||i===jc||i===Yc)if(o===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Wc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Yc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Wc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Yc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===lp||i===cp||i===up||i===dp)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===lp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===cp)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===up)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===dp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sv)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===fp||i===hp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===fp)return o===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===hp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===pp||i===mp||i===gp||i===_p||i===vp||i===xp||i===yp||i===Sp||i===Mp||i===Ep||i===Tp||i===Ap||i===wp||i===Rp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===pp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===mp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===gp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_p)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Sp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Mp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ep)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Tp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ap)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Rp)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qc||i===Cp||i===bp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===qc)return o===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Cp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wS||i===Pp||i===Lp||i===Np)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===qc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Pp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Lp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Np)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===oa?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class t1 extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class br extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const n1={type:"move"};class yu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),h=this._getHandJoint(c,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(n1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new br;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const i1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,r1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class s1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Pt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new sr({vertexShader:i1,fragmentShader:r1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new nn(new dc(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class o1 extends qs{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,_=null;const x=new s1,m=t.getContextAttributes();let h=null,v=null;const g=[],M=[],b=new Fe;let w=null;const A=new qt;A.layers.enable(1),A.viewport=new Qe;const L=new qt;L.layers.enable(2),L.viewport=new Qe;const E=[A,L],y=new t1;y.layers.enable(1),y.layers.enable(2);let U=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ee=g[H];return ee===void 0&&(ee=new yu,g[H]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(H){let ee=g[H];return ee===void 0&&(ee=new yu,g[H]=ee),ee.getGripSpace()},this.getHand=function(H){let ee=g[H];return ee===void 0&&(ee=new yu,g[H]=ee),ee.getHandSpace()};function N(H){const ee=M.indexOf(H.inputSource);if(ee===-1)return;const le=g[ee];le!==void 0&&(le.update(H.inputSource,H.frame,c||o),le.dispatchEvent({type:H.type,data:H.inputSource}))}function j(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",X);for(let H=0;H<g.length;H++){const ee=M[H];ee!==null&&(M[H]=null,g[H].disconnect(ee))}U=null,W=null,x.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,v=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",j),r.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){const ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Or(p.framebufferWidth,p.framebufferHeight,{format:Fn,type:nr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,le=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?Qo:ws,le=m.stencil?oa:Bs);const Pe={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(Pe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Or(f.textureWidth,f.textureHeight,{format:Fn,type:nr,depthTexture:new Ov(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const Ue=e.properties.get(v);Ue.__ignoreDepthValues=f.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),We.setContext(r),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function X(H){for(let ee=0;ee<H.removed.length;ee++){const le=H.removed[ee],oe=M.indexOf(le);oe>=0&&(M[oe]=null,g[oe].disconnect(le))}for(let ee=0;ee<H.added.length;ee++){const le=H.added[ee];let oe=M.indexOf(le);if(oe===-1){for(let Ue=0;Ue<g.length;Ue++)if(Ue>=M.length){M.push(le),oe=Ue;break}else if(M[Ue]===null){M[Ue]=le,oe=Ue;break}if(oe===-1)break}const Pe=g[oe];Pe&&Pe.connect(le)}}const Q=new I,Z=new I;function P(H,ee,le){Q.setFromMatrixPosition(ee.matrixWorld),Z.setFromMatrixPosition(le.matrixWorld);const oe=Q.distanceTo(Z),Pe=ee.projectionMatrix.elements,Ue=le.projectionMatrix.elements,He=Pe[14]/(Pe[10]-1),F=Pe[14]/(Pe[10]+1),ke=(Pe[9]+1)/Pe[5],Me=(Pe[9]-1)/Pe[5],yt=(Pe[8]-1)/Pe[0],Te=(Ue[8]+1)/Ue[0],Ze=He*yt,R=He*Te,S=oe/(-yt+Te),z=S*-yt;ee.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(z),H.translateZ(S),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const Y=He+S,q=F+S,K=Ze-z,ye=R+(oe-z),J=ke*F/q*Y,_e=Me*F/q*Y;H.projectionMatrix.makePerspective(K,ye,J,_e,Y,q),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function V(H,ee){ee===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ee.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;x.texture!==null&&(H.near=x.depthNear,H.far=x.depthFar),y.near=L.near=A.near=H.near,y.far=L.far=A.far=H.far,(U!==y.near||W!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),U=y.near,W=y.far,A.near=U,A.far=W,L.near=U,L.far=W,A.updateProjectionMatrix(),L.updateProjectionMatrix(),H.updateProjectionMatrix());const ee=H.parent,le=y.cameras;V(y,ee);for(let oe=0;oe<le.length;oe++)V(le[oe],ee);le.length===2?P(y,A,L):y.projectionMatrix.copy(A.projectionMatrix),G(H,y,ee)};function G(H,ee,le){le===null?H.matrix.copy(ee.matrixWorld):(H.matrix.copy(le.matrixWorld),H.matrix.invert(),H.matrix.multiply(ee.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(ee.projectionMatrix),H.projectionMatrixInverse.copy(ee.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Hs*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return x.texture!==null};let ne=null;function pe(H,ee){if(u=ee.getViewerPose(c||o),_=ee,u!==null){const le=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let oe=!1;le.length!==y.cameras.length&&(y.cameras.length=0,oe=!0);for(let Ue=0;Ue<le.length;Ue++){const He=le[Ue];let F=null;if(p!==null)F=p.getViewport(He);else{const Me=d.getViewSubImage(f,He);F=Me.viewport,Ue===0&&(e.setRenderTargetTextures(v,Me.colorTexture,f.ignoreDepthValues?void 0:Me.depthStencilTexture),e.setRenderTarget(v))}let ke=E[Ue];ke===void 0&&(ke=new qt,ke.layers.enable(Ue),ke.viewport=new Qe,E[Ue]=ke),ke.matrix.fromArray(He.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(He.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(F.x,F.y,F.width,F.height),Ue===0&&(y.matrix.copy(ke.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),oe===!0&&y.cameras.push(ke)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Ue=d.getDepthInformation(le[0]);Ue&&Ue.isValid&&Ue.texture&&x.init(e,Ue,r.renderState)}}for(let le=0;le<g.length;le++){const oe=M[le],Pe=g[le];oe!==null&&Pe!==void 0&&Pe.update(oe,ee,c||o)}x.render(e,y),ne&&ne(H,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),_=null}const We=new Fv;We.setAnimationLoop(pe),this.setAnimationLoop=function(H){ne=H},this.dispose=function(){}}}const _r=new Jn,a1=new De;function l1(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Iv(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,g,M){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,M)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),x(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,v,g):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===an&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===an&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h),g=v.envMap,M=v.envMapRotation;if(g&&(m.envMap.value=g,_r.copy(M),_r.x*=-1,_r.y*=-1,_r.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),m.envMapRotation.value.setFromMatrix4(a1.makeRotationFromEuler(_r)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const b=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*b,t(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,g){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=g*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===an&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function c1(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,g){const M=g.program;i.uniformBlockBinding(v,M)}function c(v,g){let M=r[v.id];M===void 0&&(_(v),M=u(v),r[v.id]=M,v.addEventListener("dispose",m));const b=g.program;i.updateUBOMapping(v,b);const w=e.render.frame;s[v.id]!==w&&(f(v),s[v.id]=w)}function u(v){const g=d();v.__bindingPointIndex=g;const M=n.createBuffer(),b=v.__size,w=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,b,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,g,M),M}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const g=r[v.id],M=v.uniforms,b=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,g);for(let w=0,A=M.length;w<A;w++){const L=Array.isArray(M[w])?M[w]:[M[w]];for(let E=0,y=L.length;E<y;E++){const U=L[E];if(p(U,w,E,b)===!0){const W=U.__offset,N=Array.isArray(U.value)?U.value:[U.value];let j=0;for(let X=0;X<N.length;X++){const Q=N[X],Z=x(Q);typeof Q=="number"||typeof Q=="boolean"?(U.__data[0]=Q,n.bufferSubData(n.UNIFORM_BUFFER,W+j,U.__data)):Q.isMatrix3?(U.__data[0]=Q.elements[0],U.__data[1]=Q.elements[1],U.__data[2]=Q.elements[2],U.__data[3]=0,U.__data[4]=Q.elements[3],U.__data[5]=Q.elements[4],U.__data[6]=Q.elements[5],U.__data[7]=0,U.__data[8]=Q.elements[6],U.__data[9]=Q.elements[7],U.__data[10]=Q.elements[8],U.__data[11]=0):(Q.toArray(U.__data,j),j+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,g,M,b){const w=v.value,A=g+"_"+M;if(b[A]===void 0)return typeof w=="number"||typeof w=="boolean"?b[A]=w:b[A]=w.clone(),!0;{const L=b[A];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return b[A]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function _(v){const g=v.uniforms;let M=0;const b=16;for(let A=0,L=g.length;A<L;A++){const E=Array.isArray(g[A])?g[A]:[g[A]];for(let y=0,U=E.length;y<U;y++){const W=E[y],N=Array.isArray(W.value)?W.value:[W.value];for(let j=0,X=N.length;j<X;j++){const Q=N[j],Z=x(Q),P=M%b;P!==0&&b-P<Z.boundary&&(M+=b-P),W.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=M,M+=Z.storage}}}const w=M%b;return w>0&&(M+=b-w),v.__size=M,v.__cache={},this}function x(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const M=o.indexOf(g.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function h(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class u1{constructor(e={}){const{canvas:t=nM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),_=new Int32Array(4);let x=null,m=null;const h=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yt,this._useLegacyLights=!1,this.toneMapping=tr,this.toneMappingExposure=1;const g=this;let M=!1,b=0,w=0,A=null,L=-1,E=null;const y=new Qe,U=new Qe;let W=null;const N=new Ae(0);let j=0,X=t.width,Q=t.height,Z=1,P=null,V=null;const G=new Qe(0,0,X,Q),ne=new Qe(0,0,X,Q);let pe=!1;const We=new Pf;let H=!1,ee=!1;const le=new De,oe=new Fe,Pe=new I,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function He(){return A===null?Z:1}let F=i;function ke(T,D){const k=t.getContext(T,D);return k!==null?k:null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rf}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",te,!1),t.addEventListener("webglcontextcreationerror",ge,!1),F===null){const D="webgl2";if(F=ke(D,T),F===null)throw ke(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Me,yt,Te,Ze,R,S,z,Y,q,K,ye,J,_e,Se,re,ue,we,de,fe,ze,Ve,Ye,Xe,st;function me(){Me=new vA(F),Me.init(),yt=new fA(F,Me,e),Ye=new e1(F,Me),Te=new Qw(F),Ze=new SA(F),R=new kw,S=new Jw(F,Me,Te,R,yt,Ye,Ze),z=new pA(g),Y=new _A(g),q=new RM(F),Xe=new uA(F,q),K=new xA(F,q,Ze,Xe),ye=new EA(F,K,q,Ze),fe=new MA(F,yt,S),ue=new hA(R),J=new Ow(g,z,Y,Me,yt,Xe,ue),_e=new l1(g,R),Se=new zw,re=new jw(Me),de=new cA(g,z,Y,Te,ye,f,l),we=new Zw(g,ye,yt),st=new c1(F,Ze,yt,Te),ze=new dA(F,Me,Ze),Ve=new yA(F,Me,Ze),Ze.programs=J.programs,g.capabilities=yt,g.extensions=Me,g.properties=R,g.renderLists=Se,g.shadowMap=we,g.state=Te,g.info=Ze}me();const C=new o1(g,F);this.xr=C,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=Me.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Me.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(T){T!==void 0&&(Z=T,this.setSize(X,Q,!1))},this.getSize=function(T){return T.set(X,Q)},this.setSize=function(T,D,k=!0){if(C.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,Q=D,t.width=Math.floor(T*Z),t.height=Math.floor(D*Z),k===!0&&(t.style.width=T+"px",t.style.height=D+"px"),this.setViewport(0,0,T,D)},this.getDrawingBufferSize=function(T){return T.set(X*Z,Q*Z).floor()},this.setDrawingBufferSize=function(T,D,k){X=T,Q=D,Z=k,t.width=Math.floor(T*k),t.height=Math.floor(D*k),this.setViewport(0,0,T,D)},this.getCurrentViewport=function(T){return T.copy(y)},this.getViewport=function(T){return T.copy(G)},this.setViewport=function(T,D,k,B){T.isVector4?G.set(T.x,T.y,T.z,T.w):G.set(T,D,k,B),Te.viewport(y.copy(G).multiplyScalar(Z).round())},this.getScissor=function(T){return T.copy(ne)},this.setScissor=function(T,D,k,B){T.isVector4?ne.set(T.x,T.y,T.z,T.w):ne.set(T,D,k,B),Te.scissor(U.copy(ne).multiplyScalar(Z).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(T){Te.setScissorTest(pe=T)},this.setOpaqueSort=function(T){P=T},this.setTransparentSort=function(T){V=T},this.getClearColor=function(T){return T.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(T=!0,D=!0,k=!0){let B=0;if(T){let O=!1;if(A!==null){const ae=A.texture.format;O=ae===yv||ae===xv||ae===vv}if(O){const ae=A.texture.type,he=ae===nr||ae===Bs||ae===hv||ae===oa||ae===mv||ae===gv,xe=de.getClearColor(),Ee=de.getClearAlpha(),Ce=xe.r,Re=xe.g,be=xe.b;he?(p[0]=Ce,p[1]=Re,p[2]=be,p[3]=Ee,F.clearBufferuiv(F.COLOR,0,p)):(_[0]=Ce,_[1]=Re,_[2]=be,_[3]=Ee,F.clearBufferiv(F.COLOR,0,_))}else B|=F.COLOR_BUFFER_BIT}D&&(B|=F.DEPTH_BUFFER_BIT),k&&(B|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",te,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Se.dispose(),re.dispose(),R.dispose(),z.dispose(),Y.dispose(),ye.dispose(),Xe.dispose(),st.dispose(),J.dispose(),C.dispose(),C.removeEventListener("sessionstart",Hn),C.removeEventListener("sessionend",Vn),ur.stop()};function ie(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function te(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=Ze.autoReset,D=we.enabled,k=we.autoUpdate,B=we.needsUpdate,O=we.type;me(),Ze.autoReset=T,we.enabled=D,we.autoUpdate=k,we.needsUpdate=B,we.type=O}function ge(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ve(T){const D=T.target;D.removeEventListener("dispose",ve),Je(D)}function Je(T){ot(T),R.remove(T)}function ot(T){const D=R.get(T).programs;D!==void 0&&(D.forEach(function(k){J.releaseProgram(k)}),T.isShaderMaterial&&J.releaseShaderCache(T))}this.renderBufferDirect=function(T,D,k,B,O,ae){D===null&&(D=Ue);const he=O.isMesh&&O.matrixWorld.determinant()<0,xe=t0(T,D,k,B,O);Te.setMaterial(B,he);let Ee=k.index,Ce=1;if(B.wireframe===!0){if(Ee=K.getWireframeAttribute(k),Ee===void 0)return;Ce=2}const Re=k.drawRange,be=k.attributes.position;let gt=Re.start*Ce,ln=(Re.start+Re.count)*Ce;ae!==null&&(gt=Math.max(gt,ae.start*Ce),ln=Math.min(ln,(ae.start+ae.count)*Ce)),Ee!==null?(gt=Math.max(gt,0),ln=Math.min(ln,Ee.count)):be!=null&&(gt=Math.max(gt,0),ln=Math.min(ln,be.count));const At=ln-gt;if(At<0||At===1/0)return;Xe.setup(O,B,xe,k,Ee);let ii,ut=ze;if(Ee!==null&&(ii=q.get(Ee),ut=Ve,ut.setIndex(ii)),O.isMesh)B.wireframe===!0?(Te.setLineWidth(B.wireframeLinewidth*He()),ut.setMode(F.LINES)):ut.setMode(F.TRIANGLES);else if(O.isLine){let Le=B.linewidth;Le===void 0&&(Le=1),Te.setLineWidth(Le*He()),O.isLineSegments?ut.setMode(F.LINES):O.isLineLoop?ut.setMode(F.LINE_LOOP):ut.setMode(F.LINE_STRIP)}else O.isPoints?ut.setMode(F.POINTS):O.isSprite&&ut.setMode(F.TRIANGLES);if(O.isBatchedMesh)ut.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)ut.renderInstances(gt,At,O.count);else if(k.isInstancedBufferGeometry){const Le=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,pc=Math.min(k.instanceCount,Le);ut.renderInstances(gt,At,pc)}else ut.render(gt,At)};function ct(T,D,k){T.transparent===!0&&T.side===Yn&&T.forceSinglePass===!1?(T.side=an,T.needsUpdate=!0,ua(T,D,k),T.side=Ei,T.needsUpdate=!0,ua(T,D,k),T.side=Yn):ua(T,D,k)}this.compile=function(T,D,k=null){k===null&&(k=T),m=re.get(k),m.init(),v.push(m),k.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),T!==k&&T.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights(g._useLegacyLights);const B=new Set;return T.traverse(function(O){const ae=O.material;if(ae)if(Array.isArray(ae))for(let he=0;he<ae.length;he++){const xe=ae[he];ct(xe,k,O),B.add(xe)}else ct(ae,k,O),B.add(ae)}),v.pop(),m=null,B},this.compileAsync=function(T,D,k=null){const B=this.compile(T,D,k);return new Promise(O=>{function ae(){if(B.forEach(function(he){R.get(he).currentProgram.isReady()&&B.delete(he)}),B.size===0){O(T);return}setTimeout(ae,10)}Me.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Ut=null;function tt(T){Ut&&Ut(T)}function Hn(){ur.stop()}function Vn(){ur.start()}const ur=new Fv;ur.setAnimationLoop(tt),typeof self<"u"&&ur.setContext(self),this.setAnimationLoop=function(T){Ut=T,C.setAnimationLoop(T),T===null?ur.stop():ur.start()},C.addEventListener("sessionstart",Hn),C.addEventListener("sessionend",Vn),this.render=function(T,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),C.enabled===!0&&C.isPresenting===!0&&(C.cameraAutoUpdate===!0&&C.updateCamera(D),D=C.getCamera()),T.isScene===!0&&T.onBeforeRender(g,T,D,A),m=re.get(T,v.length),m.init(),v.push(m),le.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),We.setFromProjectionMatrix(le),ee=this.localClippingEnabled,H=ue.init(this.clippingPlanes,ee),x=Se.get(T,h.length),x.init(),h.push(x),zf(T,D,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(P,V),this.info.render.frame++,H===!0&&ue.beginShadows();const k=m.state.shadowsArray;if(we.render(k,T,D),H===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),(C.enabled===!1||C.isPresenting===!1||C.hasDepthSensing()===!1)&&de.render(x,T),m.setupLights(g._useLegacyLights),D.isArrayCamera){const B=D.cameras;for(let O=0,ae=B.length;O<ae;O++){const he=B[O];Hf(x,T,he,he.viewport)}}else Hf(x,T,D);A!==null&&(S.updateMultisampleRenderTarget(A),S.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(g,T,D),Xe.resetDefaultState(),L=-1,E=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function zf(T,D,k,B){if(T.visible===!1)return;if(T.layers.test(D.layers)){if(T.isGroup)k=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(D);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||We.intersectsSprite(T)){B&&Pe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(le);const he=ye.update(T),xe=T.material;xe.visible&&x.push(T,he,xe,k,Pe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||We.intersectsObject(T))){const he=ye.update(T),xe=T.material;if(B&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Pe.copy(T.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Pe.copy(he.boundingSphere.center)),Pe.applyMatrix4(T.matrixWorld).applyMatrix4(le)),Array.isArray(xe)){const Ee=he.groups;for(let Ce=0,Re=Ee.length;Ce<Re;Ce++){const be=Ee[Ce],gt=xe[be.materialIndex];gt&&gt.visible&&x.push(T,he,gt,k,Pe.z,be)}}else xe.visible&&x.push(T,he,xe,k,Pe.z,null)}}const ae=T.children;for(let he=0,xe=ae.length;he<xe;he++)zf(ae[he],D,k,B)}function Hf(T,D,k,B){const O=T.opaque,ae=T.transmissive,he=T.transparent;m.setupLightsView(k),H===!0&&ue.setGlobalState(g.clippingPlanes,k),ae.length>0&&e0(O,ae,D,k),B&&Te.viewport(y.copy(B)),O.length>0&&ca(O,D,k),ae.length>0&&ca(ae,D,k),he.length>0&&ca(he,D,k),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function e0(T,D,k,B){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(m.state.transmissionRenderTarget===null){m.state.transmissionRenderTarget=new Or(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float")?Hl:nr,minFilter:mi,samples:4,stencilBuffer:s});const Ce=R.get(m.state.transmissionRenderTarget);Ce.__isTransmissionRenderTarget=!0}const ae=m.state.transmissionRenderTarget;g.getDrawingBufferSize(oe),ae.setSize(oe.x,oe.y);const he=g.getRenderTarget();g.setRenderTarget(ae),g.getClearColor(N),j=g.getClearAlpha(),j<1&&g.setClearColor(16777215,.5),g.clear();const xe=g.toneMapping;g.toneMapping=tr,ca(T,k,B),S.updateMultisampleRenderTarget(ae),S.updateRenderTargetMipmap(ae);let Ee=!1;for(let Ce=0,Re=D.length;Ce<Re;Ce++){const be=D[Ce],gt=be.object,ln=be.geometry,At=be.material,ii=be.group;if(At.side===Yn&&gt.layers.test(B.layers)){const ut=At.side;At.side=an,At.needsUpdate=!0,Vf(gt,k,B,ln,At,ii),At.side=ut,At.needsUpdate=!0,Ee=!0}}Ee===!0&&(S.updateMultisampleRenderTarget(ae),S.updateRenderTargetMipmap(ae)),g.setRenderTarget(he),g.setClearColor(N,j),g.toneMapping=xe}function ca(T,D,k){const B=D.isScene===!0?D.overrideMaterial:null;for(let O=0,ae=T.length;O<ae;O++){const he=T[O],xe=he.object,Ee=he.geometry,Ce=B===null?he.material:B,Re=he.group;xe.layers.test(k.layers)&&Vf(xe,D,k,Ee,Ce,Re)}}function Vf(T,D,k,B,O,ae){T.onBeforeRender(g,D,k,B,O,ae),T.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(g,D,k,B,T,ae),O.transparent===!0&&O.side===Yn&&O.forceSinglePass===!1?(O.side=an,O.needsUpdate=!0,g.renderBufferDirect(k,D,B,O,T,ae),O.side=Ei,O.needsUpdate=!0,g.renderBufferDirect(k,D,B,O,T,ae),O.side=Yn):g.renderBufferDirect(k,D,B,O,T,ae),T.onAfterRender(g,D,k,B,O,ae)}function ua(T,D,k){D.isScene!==!0&&(D=Ue);const B=R.get(T),O=m.state.lights,ae=m.state.shadowsArray,he=O.state.version,xe=J.getParameters(T,O.state,ae,D,k),Ee=J.getProgramCacheKey(xe);let Ce=B.programs;B.environment=T.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(T.isMeshStandardMaterial?Y:z).get(T.envMap||B.environment),B.envMapRotation=B.environment!==null&&T.envMap===null?D.environmentRotation:T.envMapRotation,Ce===void 0&&(T.addEventListener("dispose",ve),Ce=new Map,B.programs=Ce);let Re=Ce.get(Ee);if(Re!==void 0){if(B.currentProgram===Re&&B.lightsStateVersion===he)return Wf(T,xe),Re}else xe.uniforms=J.getUniforms(T),T.onBuild(k,xe,g),T.onBeforeCompile(xe,g),Re=J.acquireProgram(xe,Ee),Ce.set(Ee,Re),B.uniforms=xe.uniforms;const be=B.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(be.clippingPlanes=ue.uniform),Wf(T,xe),B.needsLights=i0(T),B.lightsStateVersion=he,B.needsLights&&(be.ambientLightColor.value=O.state.ambient,be.lightProbe.value=O.state.probe,be.directionalLights.value=O.state.directional,be.directionalLightShadows.value=O.state.directionalShadow,be.spotLights.value=O.state.spot,be.spotLightShadows.value=O.state.spotShadow,be.rectAreaLights.value=O.state.rectArea,be.ltc_1.value=O.state.rectAreaLTC1,be.ltc_2.value=O.state.rectAreaLTC2,be.pointLights.value=O.state.point,be.pointLightShadows.value=O.state.pointShadow,be.hemisphereLights.value=O.state.hemi,be.directionalShadowMap.value=O.state.directionalShadowMap,be.directionalShadowMatrix.value=O.state.directionalShadowMatrix,be.spotShadowMap.value=O.state.spotShadowMap,be.spotLightMatrix.value=O.state.spotLightMatrix,be.spotLightMap.value=O.state.spotLightMap,be.pointShadowMap.value=O.state.pointShadowMap,be.pointShadowMatrix.value=O.state.pointShadowMatrix),B.currentProgram=Re,B.uniformsList=null,Re}function Gf(T){if(T.uniformsList===null){const D=T.currentProgram.getUniforms();T.uniformsList=pl.seqWithValue(D.seq,T.uniforms)}return T.uniformsList}function Wf(T,D){const k=R.get(T);k.outputColorSpace=D.outputColorSpace,k.batching=D.batching,k.instancing=D.instancing,k.instancingColor=D.instancingColor,k.instancingMorph=D.instancingMorph,k.skinning=D.skinning,k.morphTargets=D.morphTargets,k.morphNormals=D.morphNormals,k.morphColors=D.morphColors,k.morphTargetsCount=D.morphTargetsCount,k.numClippingPlanes=D.numClippingPlanes,k.numIntersection=D.numClipIntersection,k.vertexAlphas=D.vertexAlphas,k.vertexTangents=D.vertexTangents,k.toneMapping=D.toneMapping}function t0(T,D,k,B,O){D.isScene!==!0&&(D=Ue),S.resetTextureUnits();const ae=D.fog,he=B.isMeshStandardMaterial?D.environment:null,xe=A===null?g.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Dt,Ee=(B.isMeshStandardMaterial?Y:z).get(B.envMap||he),Ce=B.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Re=!!k.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),be=!!k.morphAttributes.position,gt=!!k.morphAttributes.normal,ln=!!k.morphAttributes.color;let At=tr;B.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(At=g.toneMapping);const ii=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ut=ii!==void 0?ii.length:0,Le=R.get(B),pc=m.state.lights;if(H===!0&&(ee===!0||T!==E)){const vn=T===E&&B.id===L;ue.setState(B,T,vn)}let at=!1;B.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==pc.state.version||Le.outputColorSpace!==xe||O.isBatchedMesh&&Le.batching===!1||!O.isBatchedMesh&&Le.batching===!0||O.isInstancedMesh&&Le.instancing===!1||!O.isInstancedMesh&&Le.instancing===!0||O.isSkinnedMesh&&Le.skinning===!1||!O.isSkinnedMesh&&Le.skinning===!0||O.isInstancedMesh&&Le.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Le.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Le.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Le.instancingMorph===!1&&O.morphTexture!==null||Le.envMap!==Ee||B.fog===!0&&Le.fog!==ae||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==ue.numPlanes||Le.numIntersection!==ue.numIntersection)||Le.vertexAlphas!==Ce||Le.vertexTangents!==Re||Le.morphTargets!==be||Le.morphNormals!==gt||Le.morphColors!==ln||Le.toneMapping!==At||Le.morphTargetsCount!==ut)&&(at=!0):(at=!0,Le.__version=B.version);let dr=Le.currentProgram;at===!0&&(dr=ua(B,D,O));let Xf=!1,Js=!1,mc=!1;const Ft=dr.getUniforms(),Ri=Le.uniforms;if(Te.useProgram(dr.program)&&(Xf=!0,Js=!0,mc=!0),B.id!==L&&(L=B.id,Js=!0),Xf||E!==T){Ft.setValue(F,"projectionMatrix",T.projectionMatrix),Ft.setValue(F,"viewMatrix",T.matrixWorldInverse);const vn=Ft.map.cameraPosition;vn!==void 0&&vn.setValue(F,Pe.setFromMatrixPosition(T.matrixWorld)),yt.logarithmicDepthBuffer&&Ft.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Ft.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,Js=!0,mc=!0)}if(O.isSkinnedMesh){Ft.setOptional(F,O,"bindMatrix"),Ft.setOptional(F,O,"bindMatrixInverse");const vn=O.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Ft.setValue(F,"boneTexture",vn.boneTexture,S))}O.isBatchedMesh&&(Ft.setOptional(F,O,"batchingTexture"),Ft.setValue(F,"batchingTexture",O._matricesTexture,S));const gc=k.morphAttributes;if((gc.position!==void 0||gc.normal!==void 0||gc.color!==void 0)&&fe.update(O,k,dr),(Js||Le.receiveShadow!==O.receiveShadow)&&(Le.receiveShadow=O.receiveShadow,Ft.setValue(F,"receiveShadow",O.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Ri.envMap.value=Ee,Ri.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&D.environment!==null&&(Ri.envMapIntensity.value=D.environmentIntensity),Js&&(Ft.setValue(F,"toneMappingExposure",g.toneMappingExposure),Le.needsLights&&n0(Ri,mc),ae&&B.fog===!0&&_e.refreshFogUniforms(Ri,ae),_e.refreshMaterialUniforms(Ri,B,Z,Q,m.state.transmissionRenderTarget),pl.upload(F,Gf(Le),Ri,S)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(pl.upload(F,Gf(Le),Ri,S),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Ft.setValue(F,"center",O.center),Ft.setValue(F,"modelViewMatrix",O.modelViewMatrix),Ft.setValue(F,"normalMatrix",O.normalMatrix),Ft.setValue(F,"modelMatrix",O.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const vn=B.uniformsGroups;for(let _c=0,r0=vn.length;_c<r0;_c++){const jf=vn[_c];st.update(jf,dr),st.bind(jf,dr)}}return dr}function n0(T,D){T.ambientLightColor.needsUpdate=D,T.lightProbe.needsUpdate=D,T.directionalLights.needsUpdate=D,T.directionalLightShadows.needsUpdate=D,T.pointLights.needsUpdate=D,T.pointLightShadows.needsUpdate=D,T.spotLights.needsUpdate=D,T.spotLightShadows.needsUpdate=D,T.rectAreaLights.needsUpdate=D,T.hemisphereLights.needsUpdate=D}function i0(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,D,k){R.get(T.texture).__webglTexture=D,R.get(T.depthTexture).__webglTexture=k;const B=R.get(T);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=k===void 0,B.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,D){const k=R.get(T);k.__webglFramebuffer=D,k.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(T,D=0,k=0){A=T,b=D,w=k;let B=!0,O=null,ae=!1,he=!1;if(T){const Ee=R.get(T);Ee.__useDefaultFramebuffer!==void 0?(Te.bindFramebuffer(F.FRAMEBUFFER,null),B=!1):Ee.__webglFramebuffer===void 0?S.setupRenderTarget(T):Ee.__hasExternalTextures&&S.rebindTextures(T,R.get(T.texture).__webglTexture,R.get(T.depthTexture).__webglTexture);const Ce=T.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(he=!0);const Re=R.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Re[D])?O=Re[D][k]:O=Re[D],ae=!0):T.samples>0&&S.useMultisampledRTT(T)===!1?O=R.get(T).__webglMultisampledFramebuffer:Array.isArray(Re)?O=Re[k]:O=Re,y.copy(T.viewport),U.copy(T.scissor),W=T.scissorTest}else y.copy(G).multiplyScalar(Z).floor(),U.copy(ne).multiplyScalar(Z).floor(),W=pe;if(Te.bindFramebuffer(F.FRAMEBUFFER,O)&&B&&Te.drawBuffers(T,O),Te.viewport(y),Te.scissor(U),Te.setScissorTest(W),ae){const Ee=R.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+D,Ee.__webglTexture,k)}else if(he){const Ee=R.get(T.texture),Ce=D||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ee.__webglTexture,k||0,Ce)}L=-1},this.readRenderTargetPixels=function(T,D,k,B,O,ae,he){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=R.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&he!==void 0&&(xe=xe[he]),xe){Te.bindFramebuffer(F.FRAMEBUFFER,xe);try{const Ee=T.texture,Ce=Ee.format,Re=Ee.type;if(Ce!==Fn&&Ye.convert(Ce)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const be=Re===Hl&&(Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float"));if(Re!==nr&&Ye.convert(Re)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&Re!==Kn&&!be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=T.width-B&&k>=0&&k<=T.height-O&&F.readPixels(D,k,B,O,Ye.convert(Ce),Ye.convert(Re),ae)}finally{const Ee=A!==null?R.get(A).__webglFramebuffer:null;Te.bindFramebuffer(F.FRAMEBUFFER,Ee)}}},this.copyFramebufferToTexture=function(T,D,k=0){const B=Math.pow(2,-k),O=Math.floor(D.image.width*B),ae=Math.floor(D.image.height*B);S.setTexture2D(D,0),F.copyTexSubImage2D(F.TEXTURE_2D,k,0,0,T.x,T.y,O,ae),Te.unbindTexture()},this.copyTextureToTexture=function(T,D,k,B=0){const O=D.image.width,ae=D.image.height,he=Ye.convert(k.format),xe=Ye.convert(k.type);S.setTexture2D(k,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment),D.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,B,T.x,T.y,O,ae,he,xe,D.image.data):D.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,B,T.x,T.y,D.mipmaps[0].width,D.mipmaps[0].height,he,D.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,B,T.x,T.y,he,xe,D.image),B===0&&k.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(T,D,k,B,O=0){const ae=Math.round(T.max.x-T.min.x),he=Math.round(T.max.y-T.min.y),xe=T.max.z-T.min.z+1,Ee=Ye.convert(B.format),Ce=Ye.convert(B.type);let Re;if(B.isData3DTexture)S.setTexture3D(B,0),Re=F.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)S.setTexture2DArray(B,0),Re=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment);const be=F.getParameter(F.UNPACK_ROW_LENGTH),gt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ln=F.getParameter(F.UNPACK_SKIP_PIXELS),At=F.getParameter(F.UNPACK_SKIP_ROWS),ii=F.getParameter(F.UNPACK_SKIP_IMAGES),ut=k.isCompressedTexture?k.mipmaps[O]:k.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,ut.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ut.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,T.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,T.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,T.min.z),k.isDataTexture||k.isData3DTexture?F.texSubImage3D(Re,O,D.x,D.y,D.z,ae,he,xe,Ee,Ce,ut.data):B.isCompressedArrayTexture?F.compressedTexSubImage3D(Re,O,D.x,D.y,D.z,ae,he,xe,Ee,ut.data):F.texSubImage3D(Re,O,D.x,D.y,D.z,ae,he,xe,Ee,Ce,ut),F.pixelStorei(F.UNPACK_ROW_LENGTH,be),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,gt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ln),F.pixelStorei(F.UNPACK_SKIP_ROWS,At),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ii),O===0&&B.generateMipmaps&&F.generateMipmap(Re),Te.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?S.setTextureCube(T,0):T.isData3DTexture?S.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?S.setTexture2DArray(T,0):S.setTexture2D(T,0),Te.unbindTexture()},this.resetState=function(){b=0,w=0,A=null,Te.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Cf?"display-p3":"srgb",t.unpackColorSpace=je.workingColorSpace===cc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class d1 extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class f1{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=wd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return wv("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Wt=new I;class If{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Un(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Un(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=qe(t,this.array),i=qe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=qe(t,this.array),i=qe(i,this.array),r=qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=qe(t,this.array),i=qe(i,this.array),r=qe(r,this.array),s=qe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new If(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const wm=new I,Rm=new Qe,Cm=new Qe,h1=new I,bm=new De,Ka=new I,Su=new ei,Pm=new De,Mu=new uc;class p1 extends nn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ap,this.bindMatrix=new De,this.bindMatrixInverse=new De,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ai),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ka),this.boundingBox.expandByPoint(Ka)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ei),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ka),this.boundingSphere.expandByPoint(Ka)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Su.copy(this.boundingSphere),Su.applyMatrix4(r),e.ray.intersectsSphere(Su)!==!1&&(Pm.copy(r).invert(),Mu.copy(e.ray).applyMatrix4(Pm),!(this.boundingBox!==null&&Mu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Mu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Qe,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ap?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===_S?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;Rm.fromBufferAttribute(r.attributes.skinIndex,e),Cm.fromBufferAttribute(r.attributes.skinWeight,e),wm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Cm.getComponent(s);if(o!==0){const a=Rm.getComponent(s);bm.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(h1.copy(wm).applyMatrix4(bm),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Gv extends ht{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Wv extends Pt{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Kt,u=Kt,d,f){super(null,o,a,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Lm=new De,m1=new De;class Df{constructor(e=[],t=[]){this.uuid=Bn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new De)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new De;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:m1;Lm.multiplyMatrices(a,t[s]),Lm.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Df(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Wv(t,e,e,Fn,Kn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Gv),this.bones.push(o),this.boneInverses.push(new De().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class Cd extends Zt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ss=new De,Nm=new De,$a=[],Im=new Ai,g1=new De,ho=new nn,po=new ei;class _1 extends nn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Cd(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,g1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ai),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ss),Im.copy(e.boundingBox).applyMatrix4(ss),this.boundingBox.union(Im)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ss),po.copy(e.boundingSphere).applyMatrix4(ss),this.boundingSphere.union(po)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(ho.geometry=this.geometry,ho.material=this.material,ho.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),po.copy(this.boundingSphere),po.applyMatrix4(i),e.ray.intersectsSphere(po)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ss),Nm.multiplyMatrices(i,ss),ho.matrixWorld=Nm,ho.raycast(e,$a);for(let o=0,a=$a.length;o<a;o++){const l=$a[o];l.instanceId=s,l.object=this,t.push(l)}$a.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Cd(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Wv(new Float32Array(r*this.count),r,this.count,_v,Kn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Xv extends Qn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Dm=new I,Um=new I,Fm=new De,Eu=new uc,Za=new ei;class Uf extends ht{constructor(e=new ti,t=new Xv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Dm.fromBufferAttribute(t,r-1),Um.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Dm.distanceTo(Um);e.setAttribute("lineDistance",new vi(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Za.copy(i.boundingSphere),Za.applyMatrix4(r),Za.radius+=s,e.ray.intersectsSphere(Za)===!1)return;Fm.copy(r).invert(),Eu.copy(e.ray).applyMatrix4(Fm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new I,u=new I,d=new I,f=new I,p=this.isLineSegments?2:1,_=i.index,m=i.attributes.position;if(_!==null){const h=Math.max(0,o.start),v=Math.min(_.count,o.start+o.count);for(let g=h,M=v-1;g<M;g+=p){const b=_.getX(g),w=_.getX(g+1);if(c.fromBufferAttribute(m,b),u.fromBufferAttribute(m,w),Eu.distanceSqToSegment(c,u,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(f);L<e.near||L>e.far||t.push({distance:L,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let g=h,M=v-1;g<M;g+=p){if(c.fromBufferAttribute(m,g),u.fromBufferAttribute(m,g+1),Eu.distanceSqToSegment(c,u,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(f);w<e.near||w>e.far||t.push({distance:w,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Om=new I,km=new I;class v1 extends Uf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Om.fromBufferAttribute(t,r),km.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Om.distanceTo(km);e.setAttribute("lineDistance",new vi(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class x1 extends Uf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class jv extends Qn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bm=new De,bd=new uc,Qa=new ei,Ja=new I;class y1 extends ht{constructor(e=new ti,t=new jv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qa.copy(i.boundingSphere),Qa.applyMatrix4(r),Qa.radius+=s,e.ray.intersectsSphere(Qa)===!1)return;Bm.copy(r).invert(),bd.copy(e.ray).applyMatrix4(Bm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=f,x=p;_<x;_++){const m=c.getX(_);Ja.fromBufferAttribute(d,m),zm(Ja,m,l,r,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=f,x=p;_<x;_++)Ja.fromBufferAttribute(d,_),zm(Ja,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function zm(n,e,t,i,r,s,o){const a=bd.distanceSqToPoint(n);if(a<t){const l=new I;bd.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Ff extends Qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ev,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wi extends Ff{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ae(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function el(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function S1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function M1(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function Hm(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function Yv(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class la{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class E1 extends la{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ip,endingEnd:Ip}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Dp:s=e,a=2*t-i;break;case Up:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Dp:o=e,l=2*i-t;break;case Up:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(i-t)/(r-t),x=_*_,m=x*_,h=-f*m+2*f*x-f*_,v=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*_+1,g=(-1-p)*m+(1.5+p)*x+.5*_,M=p*m-p*x;for(let b=0;b!==a;++b)s[b]=h*o[u+b]+v*o[c+b]+g*o[l+b]+M*o[d+b];return s}}class T1 extends la{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*d+o[l+f]*u;return s}}class A1 extends la{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class ni{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=el(t,this.TimeBufferType),this.values=el(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:el(e.times,Array),values:el(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new A1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new T1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new E1(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Jo:t=this.InterpolantFactoryMethodDiscrete;break;case zs:t=this.InterpolantFactoryMethodLinear;break;case Kc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Jo;case this.InterpolantFactoryMethodLinear:return zs;case this.InterpolantFactoryMethodSmooth:return Kc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&S1(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Kc,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const d=a*i,f=d-i,p=d+i;for(let _=0;_!==i;++_){const x=t[d+_];if(x!==t[f+_]||x!==t[p+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[d+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}ni.prototype.TimeBufferType=Float32Array;ni.prototype.ValueBufferType=Float32Array;ni.prototype.DefaultInterpolation=zs;class $s extends ni{}$s.prototype.ValueTypeName="bool";$s.prototype.ValueBufferType=Array;$s.prototype.DefaultInterpolation=Jo;$s.prototype.InterpolantFactoryMethodLinear=void 0;$s.prototype.InterpolantFactoryMethodSmooth=void 0;class qv extends ni{}qv.prototype.ValueTypeName="color";class Gs extends ni{}Gs.prototype.ValueTypeName="number";class w1 extends la{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)cr.slerpFlat(s,0,o,c-a,o,c,l);return s}}class kr extends ni{InterpolantFactoryMethodLinear(e){return new w1(this.times,this.values,this.getValueSize(),e)}}kr.prototype.ValueTypeName="quaternion";kr.prototype.DefaultInterpolation=zs;kr.prototype.InterpolantFactoryMethodSmooth=void 0;class Zs extends ni{}Zs.prototype.ValueTypeName="string";Zs.prototype.ValueBufferType=Array;Zs.prototype.DefaultInterpolation=Jo;Zs.prototype.InterpolantFactoryMethodLinear=void 0;Zs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ws extends ni{}Ws.prototype.ValueTypeName="vector";class R1{constructor(e="",t=-1,i=[],r=RS){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Bn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(b1(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(ni.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=M1(l);l=Hm(l,1,u),c=Hm(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Gs(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const d=u[1];let f=r[d];f||(r[d]=f=[]),f.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(d,f,p,_,x){if(p.length!==0){const m=[],h=[];Yv(p,m,h,_),m.length!==0&&x.push(new d(f,m,h))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const f=c[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let x=0;x<f[_].morphTargets.length;x++)p[f[_].morphTargets[x]]=-1;for(const x in p){const m=[],h=[];for(let v=0;v!==f[_].morphTargets.length;++v){const g=f[_];m.push(g.time),h.push(g.morphTarget===x?1:0)}r.push(new Gs(".morphTargetInfluence["+x+"]",m,h))}l=p.length*o}else{const p=".bones["+t[d].name+"]";i(Ws,p+".position",f,"pos",r),i(kr,p+".quaternion",f,"rot",r),i(Ws,p+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function C1(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Gs;case"vector":case"vector2":case"vector3":case"vector4":return Ws;case"color":return qv;case"quaternion":return kr;case"bool":case"boolean":return $s;case"string":return Zs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function b1(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=C1(n.type);if(n.times===void 0){const t=[],i=[];Yv(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Xi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class P1{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const p=c[d],_=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const L1=new P1;class Qs{constructor(e){this.manager=e!==void 0?e:L1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Qs.DEFAULT_MATERIAL_NAME="__DEFAULT";const ci={};class N1 extends Error{constructor(e,t){super(e),this.response=t}}class Kv extends Qs{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Xi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ci[e]!==void 0){ci[e].push({onLoad:t,onProgress:i,onError:r});return}ci[e]=[],ci[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ci[e],d=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=f?parseInt(f):0,_=p!==0;let x=0;const m=new ReadableStream({start(h){v();function v(){d.read().then(({done:g,value:M})=>{if(g)h.close();else{x+=M.byteLength;const b=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:p});for(let w=0,A=u.length;w<A;w++){const L=u[w];L.onProgress&&L.onProgress(b)}h.enqueue(M),v()}})}}});return new Response(m)}else throw new N1(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{Xi.add(e,c);const u=ci[e];delete ci[e];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=ci[e];if(u===void 0)throw this.manager.itemError(e),c;delete ci[e];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class I1 extends Qs{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Xi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=ea("img");function l(){u(),Xi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class D1 extends Qs{constructor(e){super(e)}load(e,t,i,r){const s=new Pt,o=new I1(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class hc extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Tu=new De,Vm=new I,Gm=new I;class Of{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pf,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Vm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vm),Gm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gm),t.updateMatrixWorld(),Tu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Tu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class U1 extends Of{constructor(){super(new qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Hs*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class F1 extends hc{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new U1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Wm=new De,mo=new I,Au=new I;class O1 extends Of{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Fe(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),mo.setFromMatrixPosition(e.matrixWorld),i.position.copy(mo),Au.copy(i.position),Au.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Au),i.updateMatrixWorld(),r.makeTranslation(-mo.x,-mo.y,-mo.z),Wm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wm)}}class $v extends hc{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new O1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class k1 extends Of{constructor(){super(new Lf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zv extends hc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new k1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class B1 extends hc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Do{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class z1 extends Qs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Xi.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Xi.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),Xi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Xi.add(e,l),s.manager.itemStart(e)}}const kf="\\[\\]\\.:\\/",H1=new RegExp("["+kf+"]","g"),Bf="[^"+kf+"]",V1="[^"+kf.replace("\\.","")+"]",G1=/((?:WC+[\/:])*)/.source.replace("WC",Bf),W1=/(WCOD+)?/.source.replace("WCOD",V1),X1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bf),j1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bf),Y1=new RegExp("^"+G1+W1+X1+j1+"$"),q1=["material","materials","bones","map"];class K1{constructor(e,t,i){const r=i||Ke.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Ke{constructor(e,t,i){this.path=t,this.parsedPath=i||Ke.parseTrackName(t),this.node=Ke.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Ke.Composite(e,t,i):new Ke(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(H1,"")}static parseTrackName(e){const t=Y1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);q1.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=Ke.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ke.Composite=K1;Ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ke.prototype.GetterByBindingType=[Ke.prototype._getValue_direct,Ke.prototype._getValue_array,Ke.prototype._getValue_arrayElement,Ke.prototype._getValue_toArray];Ke.prototype.SetterByBindingTypeAndVersioning=[[Ke.prototype._setValue_direct,Ke.prototype._setValue_direct_setNeedsUpdate,Ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_array,Ke.prototype._setValue_array_setNeedsUpdate,Ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_arrayElement,Ke.prototype._setValue_arrayElement_setNeedsUpdate,Ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_fromArray,Ke.prototype._setValue_fromArray_setNeedsUpdate,Ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rf);function Xm(n,e){if(e===CS)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Ad||e===Mv){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===Ad)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class $1 extends Qs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new tR(t)}),this.register(function(t){return new uR(t)}),this.register(function(t){return new dR(t)}),this.register(function(t){return new fR(t)}),this.register(function(t){return new iR(t)}),this.register(function(t){return new rR(t)}),this.register(function(t){return new sR(t)}),this.register(function(t){return new oR(t)}),this.register(function(t){return new eR(t)}),this.register(function(t){return new aR(t)}),this.register(function(t){return new nR(t)}),this.register(function(t){return new cR(t)}),this.register(function(t){return new lR(t)}),this.register(function(t){return new Q1(t)}),this.register(function(t){return new hR(t)}),this.register(function(t){return new pR(t)})}load(e,t,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Do.extractUrlBase(e);o=Do.resolveURL(c,this.path)}else o=Do.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Kv(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Qv){try{o[Be.KHR_BINARY_GLTF]=new mR(e)}catch(d){r&&r(d);return}s=JSON.parse(o[Be.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new CR(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const d=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(d){case Be.KHR_MATERIALS_UNLIT:o[d]=new J1;break;case Be.KHR_DRACO_MESH_COMPRESSION:o[d]=new gR(s,this.dracoLoader);break;case Be.KHR_TEXTURE_TRANSFORM:o[d]=new _R;break;case Be.KHR_MESH_QUANTIZATION:o[d]=new vR;break;default:f.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function Z1(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const Be={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Q1{constructor(e){this.parser=e,this.name=Be.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ae(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Dt);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Zv(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new $v(u),c.distance=d;break;case"spot":c=new F1(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ki(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class J1{constructor(){this.name=Be.KHR_MATERIALS_UNLIT}getMaterialType(){return Cr}extendParams(e,t,i){const r=[];e.color=new Ae(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Dt),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,Yt))}return Promise.all(r)}}class eR{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class tR{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Fe(a,a)}return Promise.all(s)}}class nR{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class iR{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ae(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Dt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Yt)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class rR{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class sR{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ae().setRGB(a[0],a[1],a[2],Dt),Promise.all(s)}}class oR{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class aR{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ae().setRGB(a[0],a[1],a[2],Dt),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Yt)),Promise.all(s)}}class lR{constructor(e){this.parser=e,this.name=Be.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class cR{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class uR{constructor(e){this.parser=e,this.name=Be.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class dR{constructor(e){this.parser=e,this.name=Be.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class fR{constructor(e){this.parser=e,this.name=Be.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class hR{constructor(e){this.name=Be.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,d=r.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,f,r.mode,r.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(p),u,d,f,r.mode,r.filter),p})})}else return null}}class pR{constructor(e){this.name=Be.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==yn.TRIANGLES&&c.mode!==yn.TRIANGLE_STRIP&&c.mode!==yn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),d=u.isGroup?u.children:[u],f=c[0].count,p=[];for(const _ of d){const x=new De,m=new I,h=new cr,v=new I(1,1,1),g=new _1(_.geometry,_.material,f);for(let M=0;M<f;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&h.fromBufferAttribute(l.ROTATION,M),l.SCALE&&v.fromBufferAttribute(l.SCALE,M),g.setMatrixAt(M,x.compose(m,h,v));for(const M in l)if(M==="_COLOR_0"){const b=l[M];g.instanceColor=new Cd(b.array,b.itemSize,b.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&_.geometry.setAttribute(M,l[M]);ht.prototype.copy.call(g,_),this.parser.assignFinalMaterial(g),p.push(g)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Qv="glTF",go=12,jm={JSON:1313821514,BIN:5130562};class mR{constructor(e){this.name=Be.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,go),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Qv)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-go,s=new DataView(e,go);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===jm.JSON){const c=new Uint8Array(e,go+o,a);this.content=i.decode(c)}else if(l===jm.BIN){const c=go+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class gR{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Be.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const d=Pd[u]||u.toLowerCase();a[d]=o[u]}for(const u in e.attributes){const d=Pd[u]||u.toLowerCase();if(o[u]!==void 0){const f=i.accessors[e.attributes[u]],p=Cs[f.componentType];c[d]=p.name,l[d]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(d,f){r.decodeDracoFile(u,function(p){for(const _ in p.attributes){const x=p.attributes[_],m=l[_];m!==void 0&&(x.normalized=m)}d(p)},a,c,Dt,f)})})}}class _R{constructor(){this.name=Be.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class vR{constructor(){this.name=Be.KHR_MESH_QUANTIZATION}}class Jv extends la{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,d=(i-t)/u,f=d*d,p=f*d,_=e*c,x=_-c,m=-2*p+3*f,h=p-f,v=1-m,g=h-f+d;for(let M=0;M!==a;M++){const b=o[x+M+a],w=o[x+M+l]*u,A=o[_+M+a],L=o[_+M]*u;s[M]=v*b+g*w+m*A+h*L}return s}}const xR=new cr;class yR extends Jv{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return xR.fromArray(s).normalize().toArray(s),s}}const yn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Cs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ym={9728:Kt,9729:fn,9984:fv,9985:hl,9986:So,9987:mi},qm={33071:Wi,33648:zl,10497:ks},wu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Pd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ui={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},SR={CUBICSPLINE:void 0,LINEAR:zs,STEP:Jo},Ru={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function MR(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Ff({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ei})),n.DefaultMaterial}function vr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ki(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ER(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const d=e[c];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(r=!0),d.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const d=e[c];if(i){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):n.attributes.position;o.push(f)}if(r){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):n.attributes.normal;a.push(f)}if(s){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],f=c[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=d),s&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function TR(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function AR(n){let e;const t=n.extensions&&n.extensions[Be.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Cu(t.attributes):e=n.indices+":"+Cu(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+Cu(n.targets[i]);return e}function Cu(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Ld(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function wR(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const RR=new De;class CR{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Z1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=!1,s=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||r&&s<98?this.textureLoader=new D1(this.options.manager):this.textureLoader=new z1(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Kv(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return vr(s,a,r),ki(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Be.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(Do.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=wu[r.type],a=Cs[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new Zt(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=wu[r.type],c=Cs[r.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,f=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,_=r.normalized===!0;let x,m;if(p&&p!==d){const h=Math.floor(f/p),v="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+h+":"+r.count;let g=t.cache.get(v);g||(x=new c(a,h*p,r.count*p/u),g=new f1(x,p/u),t.cache.add(v,g)),m=new If(g,l,f%p/u,_)}else a===null?x=new c(r.count*l):x=new c(a,f,r.count*l),m=new Zt(x,l,_);if(r.sparse!==void 0){const h=wu.SCALAR,v=Cs[r.sparse.indices.componentType],g=r.sparse.indices.byteOffset||0,M=r.sparse.values.byteOffset||0,b=new v(o[1],g,r.sparse.count*h),w=new c(o[2],M,r.sparse.count*l);a!==null&&(m=new Zt(m.array.slice(),m.itemSize,m.normalized));for(let A=0,L=b.length;A<L;A++){const E=b[A];if(m.setX(E,w[A*l]),l>=2&&m.setY(E,w[A*l+1]),l>=3&&m.setZ(E,w[A*l+2]),l>=4&&m.setW(E,w[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=Ym[f.magFilter]||fn,u.minFilter=Ym[f.minFilter]||mi,u.wrapS=qm[f.wrapS]||ks,u.wrapT=qm[f.wrapT]||ks,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const f=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(f,p){let _=f;t.isImageBitmapLoader===!0&&(_=function(x){const m=new Pt(x);m.needsUpdate=!0,f(m)}),t.load(Do.resolveURL(d,s.path),_,void 0,p)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),d.userData.mimeType=o.mimeType||wR(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[Be.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Be.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[Be.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new jv,Qn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Xv,Qn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Ff}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[Be.KHR_MATERIALS_UNLIT]){const d=r[Be.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,s,t))}else{const d=s.pbrMetallicRoughness||{};if(a.color=new Ae(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Dt),a.opacity=f[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,Yt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Yn);const u=s.alphaMode||Ru.OPAQUE;if(u===Ru.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Ru.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Cr&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Fe(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;a.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&o!==Cr&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Cr){const d=s.emissiveFactor;a.emissive=new Ae().setRGB(d[0],d[1],d[2],Dt)}return s.emissiveTexture!==void 0&&o!==Cr&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Yt)),Promise.all(c).then(function(){const d=new o(a);return s.name&&(d.name=s.name),ki(d,s),t.associations.set(d,{materials:e}),s.extensions&&vr(r,d,s),d})}createUniqueName(e){const t=Ke.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[Be.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Km(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=AR(c),d=r[u];if(d)o.push(d.promise);else{let f;c.extensions&&c.extensions[Be.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=Km(new ti,c,t),r[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?MR(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let p=0,_=u.length;p<_;p++){const x=u[p],m=o[p];let h;const v=c[p];if(m.mode===yn.TRIANGLES||m.mode===yn.TRIANGLE_STRIP||m.mode===yn.TRIANGLE_FAN||m.mode===void 0)h=s.isSkinnedMesh===!0?new p1(x,v):new nn(x,v),h.isSkinnedMesh===!0&&h.normalizeSkinWeights(),m.mode===yn.TRIANGLE_STRIP?h.geometry=Xm(h.geometry,Mv):m.mode===yn.TRIANGLE_FAN&&(h.geometry=Xm(h.geometry,Ad));else if(m.mode===yn.LINES)h=new v1(x,v);else if(m.mode===yn.LINE_STRIP)h=new Uf(x,v);else if(m.mode===yn.LINE_LOOP)h=new x1(x,v);else if(m.mode===yn.POINTS)h=new y1(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(h.geometry.morphAttributes).length>0&&TR(h,s),h.name=t.createUniqueName(s.name||"mesh_"+e),ki(h,s),m.extensions&&vr(r,h,m),t.assignFinalMaterial(h),d.push(h)}for(let p=0,_=d.length;p<_;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return s.extensions&&vr(r,d[0],s),d[0];const f=new br;s.extensions&&vr(r,f,s),t.associations.set(f,{meshes:e});for(let p=0,_=d.length;p<_;p++)f.add(d[p]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new qt(tM.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Lf(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ki(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const d=o[c];if(d){a.push(d);const f=new De;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Df(a,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let d=0,f=r.channels.length;d<f;d++){const p=r.channels[d],_=r.samplers[p.sampler],x=p.target,m=x.node,h=r.parameters!==void 0?r.parameters[_.input]:_.input,v=r.parameters!==void 0?r.parameters[_.output]:_.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",h)),l.push(this.getDependency("accessor",v)),c.push(_),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){const f=d[0],p=d[1],_=d[2],x=d[3],m=d[4],h=[];for(let v=0,g=f.length;v<g;v++){const M=f[v],b=p[v],w=_[v],A=x[v],L=m[v];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const E=i._createAnimationTracks(M,b,w,A,L);if(E)for(let y=0;y<E.length;y++)h.push(E[y])}return new R1(s,void 0,h)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],d=c[1],f=c[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,RR)});for(let p=0,_=d.length;p<_;p++)u.add(d[p]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Gv:c.length>1?u=new br:c.length===1?u=c[0]:u=new ht,u!==c[0])for(let d=0,f=c.length;d<f;d++)u.add(c[d]);if(s.name&&(u.userData.name=s.name,u.name=o),ki(u,s),s.extensions&&vr(i,u,s),s.matrix!==void 0){const d=new De;d.fromArray(s.matrix),u.applyMatrix4(d)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new br;i.name&&(s.name=r.createUniqueName(i.name)),ki(s,i),i.extensions&&vr(t,s,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,d=l.length;u<d;u++)s.add(l[u]);const c=u=>{const d=new Map;for(const[f,p]of r.associations)(f instanceof Qn||f instanceof Pt)&&d.set(f,p);return u.traverse(f=>{const p=r.associations.get(f);p!=null&&d.set(f,p)}),d};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];Ui[s.path]===Ui.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Ui[s.path]){case Ui.weights:c=Gs;break;case Ui.rotation:c=kr;break;case Ui.position:case Ui.scale:c=Ws;break;default:switch(i.itemSize){case 1:c=Gs;break;case 2:case 3:default:c=Ws;break}break}const u=r.interpolation!==void 0?SR[r.interpolation]:zs,d=this._getArrayFromAccessor(i);for(let f=0,p=l.length;f<p;f++){const _=new c(l[f]+"."+Ui[s.path],t.array,d,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Ld(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof kr?yR:Jv;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function bR(n,e,t){const i=e.attributes,r=new Ai;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){const u=Ld(Cs[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new I,l=new I;for(let c=0,u=s.length;c<u;c++){const d=s[c];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],p=f.min,_=f.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),f.normalized){const x=Ld(Cs[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new ei;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function Km(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=Pd[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return je.workingColorSpace!==Dt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${je.workingColorSpace}" not supported.`),ki(n,e),bR(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?ER(n,e.targets,t):n})}function PR(){const n=Dn.useRef(null),e=Dn.useRef(null),t=Dn.useRef(null),i=Dn.useRef(null);return Dn.useEffect(()=>{if(!n.current)return;const r=n.current.clientWidth,s=n.current.clientHeight,o=new d1;o.background=null,e.current=o;const a=new qt(75,r/s,.1,1e3);a.position.z=.5;const l=new u1({antialias:!0,alpha:!0});l.setSize(r,s),l.setPixelRatio(window.devicePixelRatio),l.shadowMap.enabled=!0,n.current.appendChild(l.domElement),t.current=l;const c=new B1(16777215,1.5);o.add(c);const u=new Zv(16777215,1);u.position.set(5,10,7),u.castShadow=!0,u.shadow.mapSize.width=2048,u.shadow.mapSize.height=2048,o.add(u);const d=new $v(16758465,.8);d.position.set(-5,5,5),o.add(d),new $1().load("/scene.gltf",x=>{const m=x.scene;m.scale.set(2,2,2),m.position.set(0,0,0),m.traverse(h=>{h instanceof nn&&(h.castShadow=!0,h.receiveShadow=!0)}),o.add(m),i.current=m},void 0,x=>{console.error("Error loading model:",x)});const p=()=>{if(!n.current)return;const x=n.current.clientWidth,m=n.current.clientHeight;a.aspect=x/m,a.updateProjectionMatrix(),l.setSize(x,m)};window.addEventListener("resize",p);const _=()=>{requestAnimationFrame(_),i.current&&(i.current.rotation.y+=.005,i.current.rotation.x+=.001),l.render(o,a)};return _(),()=>{var x;window.removeEventListener("resize",p),(x=n.current)==null||x.removeChild(l.domElement),l.dispose()}},[]),Rt.jsx("div",{ref:n,className:"w-full h-full"})}function LR(){return Rt.jsx("div",{className:"min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 flex items-center justify-center p-4",children:Rt.jsx("div",{className:"w-full max-w-6xl space-y-8",children:Rt.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 items-center",children:[Rt.jsx("div",{className:"h-96 md:h-full rounded-2xl overflow-hidden shadow-2xl bg-white/30 backdrop-blur-sm",children:Rt.jsx(PR,{})}),Rt.jsxs("div",{className:"text-center md:text-left space-y-8 animate-fade-in",children:[Rt.jsxs("div",{className:"space-y-4",children:[Rt.jsx("h1",{className:"text-6xl md:text-7xl font-bold text-rose-600 tracking-tight",children:"Hola"}),Rt.jsxs("div",{className:"flex items-center justify-center md:justify-start space-x-3",children:[Rt.jsx(np,{className:"w-8 h-8 text-pink-500 animate-heartbeat fill-pink-500"}),Rt.jsx("h2",{className:"text-5xl md:text-6xl font-semibold text-pink-600",children:"Te quiero"}),Rt.jsx(np,{className:"w-8 h-8 text-pink-500 animate-heartbeat fill-pink-500",style:{animationDelay:"0.3s"}})]})]}),Rt.jsx("p",{className:"text-xl text-gray-700 leading-relaxed",children:"Mira estas hermosas flores que girar para ti"}),Rt.jsx("div",{className:"flex justify-center md:justify-start space-x-2 pt-4",children:[...Array(5)].map((n,e)=>Rt.jsx("div",{className:"w-2 h-2 bg-pink-400 rounded-full animate-bounce",style:{animationDelay:`${e*.1}s`}},e))})]})]})})})}lv(document.getElementById("root")).render(Rt.jsx(Dn.StrictMode,{children:Rt.jsx(LR,{})}));
