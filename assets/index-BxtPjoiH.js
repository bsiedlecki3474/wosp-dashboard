(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();var ku={exports:{}},es={},Nu={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var op;function Ry(){if(op)return X;op=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),y=Symbol.iterator;function T(S){return S===null||typeof S!="object"?null:(S=y&&S[y]||S["@@iterator"],typeof S=="function"?S:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,V={};function q(S,R,Y){this.props=S,this.context=R,this.refs=V,this.updater=Y||D}q.prototype.isReactComponent={},q.prototype.setState=function(S,R){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,R,"setState")},q.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function Re(){}Re.prototype=q.prototype;function Me(S,R,Y){this.props=S,this.context=R,this.refs=V,this.updater=Y||D}var Pe=Me.prototype=new Re;Pe.constructor=Me,b(Pe,q.prototype),Pe.isPureReactComponent=!0;var Ie=Array.isArray,tt=Object.prototype.hasOwnProperty,Ae={current:null},We={key:!0,ref:!0,__self:!0,__source:!0};function nt(S,R,Y){var ee,re={},ie=null,de=null;if(R!=null)for(ee in R.ref!==void 0&&(de=R.ref),R.key!==void 0&&(ie=""+R.key),R)tt.call(R,ee)&&!We.hasOwnProperty(ee)&&(re[ee]=R[ee]);var le=arguments.length-2;if(le===1)re.children=Y;else if(1<le){for(var _e=Array(le),pt=0;pt<le;pt++)_e[pt]=arguments[pt+2];re.children=_e}if(S&&S.defaultProps)for(ee in le=S.defaultProps,le)re[ee]===void 0&&(re[ee]=le[ee]);return{$$typeof:i,type:S,key:ie,ref:de,props:re,_owner:Ae.current}}function wt(S,R){return{$$typeof:i,type:S.type,key:R,ref:S.ref,props:S.props,_owner:S._owner}}function Nt(S){return typeof S=="object"&&S!==null&&S.$$typeof===i}function Jn(S){var R={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(Y){return R[Y]})}var Wt=/\/+/g;function ft(S,R){return typeof S=="object"&&S!==null&&S.key!=null?Jn(""+S.key):R.toString(36)}function Rt(S,R,Y,ee,re){var ie=typeof S;(ie==="undefined"||ie==="boolean")&&(S=null);var de=!1;if(S===null)de=!0;else switch(ie){case"string":case"number":de=!0;break;case"object":switch(S.$$typeof){case i:case e:de=!0}}if(de)return de=S,re=re(de),S=ee===""?"."+ft(de,0):ee,Ie(re)?(Y="",S!=null&&(Y=S.replace(Wt,"$&/")+"/"),Rt(re,R,Y,"",function(pt){return pt})):re!=null&&(Nt(re)&&(re=wt(re,Y+(!re.key||de&&de.key===re.key?"":(""+re.key).replace(Wt,"$&/")+"/")+S)),R.push(re)),1;if(de=0,ee=ee===""?".":ee+":",Ie(S))for(var le=0;le<S.length;le++){ie=S[le];var _e=ee+ft(ie,le);de+=Rt(ie,R,Y,_e,re)}else if(_e=T(S),typeof _e=="function")for(S=_e.call(S),le=0;!(ie=S.next()).done;)ie=ie.value,_e=ee+ft(ie,le++),de+=Rt(ie,R,Y,_e,re);else if(ie==="object")throw R=String(S),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.");return de}function Vt(S,R,Y){if(S==null)return S;var ee=[],re=0;return Rt(S,ee,"","",function(ie){return R.call(Y,ie,re++)}),ee}function rt(S){if(S._status===-1){var R=S._result;R=R(),R.then(function(Y){(S._status===0||S._status===-1)&&(S._status=1,S._result=Y)},function(Y){(S._status===0||S._status===-1)&&(S._status=2,S._result=Y)}),S._status===-1&&(S._status=0,S._result=R)}if(S._status===1)return S._result.default;throw S._result}var Se={current:null},L={transition:null},$={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:L,ReactCurrentOwner:Ae};function U(){throw Error("act(...) is not supported in production builds of React.")}return X.Children={map:Vt,forEach:function(S,R,Y){Vt(S,function(){R.apply(this,arguments)},Y)},count:function(S){var R=0;return Vt(S,function(){R++}),R},toArray:function(S){return Vt(S,function(R){return R})||[]},only:function(S){if(!Nt(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},X.Component=q,X.Fragment=n,X.Profiler=l,X.PureComponent=Me,X.StrictMode=s,X.Suspense=m,X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,X.act=U,X.cloneElement=function(S,R,Y){if(S==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+S+".");var ee=b({},S.props),re=S.key,ie=S.ref,de=S._owner;if(R!=null){if(R.ref!==void 0&&(ie=R.ref,de=Ae.current),R.key!==void 0&&(re=""+R.key),S.type&&S.type.defaultProps)var le=S.type.defaultProps;for(_e in R)tt.call(R,_e)&&!We.hasOwnProperty(_e)&&(ee[_e]=R[_e]===void 0&&le!==void 0?le[_e]:R[_e])}var _e=arguments.length-2;if(_e===1)ee.children=Y;else if(1<_e){le=Array(_e);for(var pt=0;pt<_e;pt++)le[pt]=arguments[pt+2];ee.children=le}return{$$typeof:i,type:S.type,key:re,ref:ie,props:ee,_owner:de}},X.createContext=function(S){return S={$$typeof:d,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},S.Provider={$$typeof:u,_context:S},S.Consumer=S},X.createElement=nt,X.createFactory=function(S){var R=nt.bind(null,S);return R.type=S,R},X.createRef=function(){return{current:null}},X.forwardRef=function(S){return{$$typeof:f,render:S}},X.isValidElement=Nt,X.lazy=function(S){return{$$typeof:E,_payload:{_status:-1,_result:S},_init:rt}},X.memo=function(S,R){return{$$typeof:g,type:S,compare:R===void 0?null:R}},X.startTransition=function(S){var R=L.transition;L.transition={};try{S()}finally{L.transition=R}},X.unstable_act=U,X.useCallback=function(S,R){return Se.current.useCallback(S,R)},X.useContext=function(S){return Se.current.useContext(S)},X.useDebugValue=function(){},X.useDeferredValue=function(S){return Se.current.useDeferredValue(S)},X.useEffect=function(S,R){return Se.current.useEffect(S,R)},X.useId=function(){return Se.current.useId()},X.useImperativeHandle=function(S,R,Y){return Se.current.useImperativeHandle(S,R,Y)},X.useInsertionEffect=function(S,R){return Se.current.useInsertionEffect(S,R)},X.useLayoutEffect=function(S,R){return Se.current.useLayoutEffect(S,R)},X.useMemo=function(S,R){return Se.current.useMemo(S,R)},X.useReducer=function(S,R,Y){return Se.current.useReducer(S,R,Y)},X.useRef=function(S){return Se.current.useRef(S)},X.useState=function(S){return Se.current.useState(S)},X.useSyncExternalStore=function(S,R,Y){return Se.current.useSyncExternalStore(S,R,Y)},X.useTransition=function(){return Se.current.useTransition()},X.version="18.3.1",X}var lp;function hc(){return lp||(lp=1,Nu.exports=Ry()),Nu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ap;function Py(){if(ap)return es;ap=1;var i=hc(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(f,m,g){var E,y={},T=null,D=null;g!==void 0&&(T=""+g),m.key!==void 0&&(T=""+m.key),m.ref!==void 0&&(D=m.ref);for(E in m)s.call(m,E)&&!u.hasOwnProperty(E)&&(y[E]=m[E]);if(f&&f.defaultProps)for(E in m=f.defaultProps,m)y[E]===void 0&&(y[E]=m[E]);return{$$typeof:e,type:f,key:T,ref:D,props:y,_owner:l.current}}return es.Fragment=n,es.jsx=d,es.jsxs=d,es}var up;function Ay(){return up||(up=1,ku.exports=Py()),ku.exports}var Je=Ay(),on=hc(),Ho={},Ru={exports:{}},ut={},Pu={exports:{}},Au={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cp;function xy(){return cp||(cp=1,function(i){function e(L,$){var U=L.length;L.push($);e:for(;0<U;){var S=U-1>>>1,R=L[S];if(0<l(R,$))L[S]=$,L[U]=R,U=S;else break e}}function n(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var $=L[0],U=L.pop();if(U!==$){L[0]=U;e:for(var S=0,R=L.length,Y=R>>>1;S<Y;){var ee=2*(S+1)-1,re=L[ee],ie=ee+1,de=L[ie];if(0>l(re,U))ie<R&&0>l(de,re)?(L[S]=de,L[ie]=U,S=ie):(L[S]=re,L[ee]=U,S=ee);else if(ie<R&&0>l(de,U))L[S]=de,L[ie]=U,S=ie;else break e}}return $}function l(L,$){var U=L.sortIndex-$.sortIndex;return U!==0?U:L.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();i.unstable_now=function(){return d.now()-f}}var m=[],g=[],E=1,y=null,T=3,D=!1,b=!1,V=!1,q=typeof setTimeout=="function"?setTimeout:null,Re=typeof clearTimeout=="function"?clearTimeout:null,Me=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Pe(L){for(var $=n(g);$!==null;){if($.callback===null)s(g);else if($.startTime<=L)s(g),$.sortIndex=$.expirationTime,e(m,$);else break;$=n(g)}}function Ie(L){if(V=!1,Pe(L),!b)if(n(m)!==null)b=!0,rt(tt);else{var $=n(g);$!==null&&Se(Ie,$.startTime-L)}}function tt(L,$){b=!1,V&&(V=!1,Re(nt),nt=-1),D=!0;var U=T;try{for(Pe($),y=n(m);y!==null&&(!(y.expirationTime>$)||L&&!Jn());){var S=y.callback;if(typeof S=="function"){y.callback=null,T=y.priorityLevel;var R=S(y.expirationTime<=$);$=i.unstable_now(),typeof R=="function"?y.callback=R:y===n(m)&&s(m),Pe($)}else s(m);y=n(m)}if(y!==null)var Y=!0;else{var ee=n(g);ee!==null&&Se(Ie,ee.startTime-$),Y=!1}return Y}finally{y=null,T=U,D=!1}}var Ae=!1,We=null,nt=-1,wt=5,Nt=-1;function Jn(){return!(i.unstable_now()-Nt<wt)}function Wt(){if(We!==null){var L=i.unstable_now();Nt=L;var $=!0;try{$=We(!0,L)}finally{$?ft():(Ae=!1,We=null)}}else Ae=!1}var ft;if(typeof Me=="function")ft=function(){Me(Wt)};else if(typeof MessageChannel<"u"){var Rt=new MessageChannel,Vt=Rt.port2;Rt.port1.onmessage=Wt,ft=function(){Vt.postMessage(null)}}else ft=function(){q(Wt,0)};function rt(L){We=L,Ae||(Ae=!0,ft())}function Se(L,$){nt=q(function(){L(i.unstable_now())},$)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(L){L.callback=null},i.unstable_continueExecution=function(){b||D||(b=!0,rt(tt))},i.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):wt=0<L?Math.floor(1e3/L):5},i.unstable_getCurrentPriorityLevel=function(){return T},i.unstable_getFirstCallbackNode=function(){return n(m)},i.unstable_next=function(L){switch(T){case 1:case 2:case 3:var $=3;break;default:$=T}var U=T;T=$;try{return L()}finally{T=U}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(L,$){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var U=T;T=L;try{return $()}finally{T=U}},i.unstable_scheduleCallback=function(L,$,U){var S=i.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?S+U:S):U=S,L){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=U+R,L={id:E++,callback:$,priorityLevel:L,startTime:U,expirationTime:R,sortIndex:-1},U>S?(L.sortIndex=U,e(g,L),n(m)===null&&L===n(g)&&(V?(Re(nt),nt=-1):V=!0,Se(Ie,U-S))):(L.sortIndex=R,e(m,L),b||D||(b=!0,rt(tt))),L},i.unstable_shouldYield=Jn,i.unstable_wrapCallback=function(L){var $=T;return function(){var U=T;T=$;try{return L.apply(this,arguments)}finally{T=U}}}}(Au)),Au}var dp;function Oy(){return dp||(dp=1,Pu.exports=xy()),Pu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hp;function Dy(){if(hp)return ut;hp=1;var i=hc(),e=Oy();function n(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function u(t,r){d(t,r),d(t+"Capture",r)}function d(t,r){for(l[t]=r,t=0;t<r.length;t++)s.add(r[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},y={};function T(t){return m.call(y,t)?!0:m.call(E,t)?!1:g.test(t)?y[t]=!0:(E[t]=!0,!1)}function D(t,r,o,a){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function b(t,r,o,a){if(r===null||typeof r>"u"||D(t,r,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function V(t,r,o,a,c,h,p){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=a,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=r,this.sanitizeURL=h,this.removeEmptyString=p}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){q[t]=new V(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];q[r]=new V(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){q[t]=new V(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){q[t]=new V(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){q[t]=new V(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){q[t]=new V(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){q[t]=new V(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){q[t]=new V(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){q[t]=new V(t,5,!1,t.toLowerCase(),null,!1,!1)});var Re=/[\-:]([a-z])/g;function Me(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(Re,Me);q[r]=new V(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(Re,Me);q[r]=new V(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(Re,Me);q[r]=new V(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){q[t]=new V(t,1,!1,t.toLowerCase(),null,!1,!1)}),q.xlinkHref=new V("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){q[t]=new V(t,1,!1,t.toLowerCase(),null,!0,!0)});function Pe(t,r,o,a){var c=q.hasOwnProperty(r)?q[r]:null;(c!==null?c.type!==0:a||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(b(r,o,c,a)&&(o=null),a||c===null?T(r)&&(o===null?t.removeAttribute(r):t.setAttribute(r,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(r=c.attributeName,a=c.attributeNamespace,o===null?t.removeAttribute(r):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,a?t.setAttributeNS(a,r,o):t.setAttribute(r,o))))}var Ie=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tt=Symbol.for("react.element"),Ae=Symbol.for("react.portal"),We=Symbol.for("react.fragment"),nt=Symbol.for("react.strict_mode"),wt=Symbol.for("react.profiler"),Nt=Symbol.for("react.provider"),Jn=Symbol.for("react.context"),Wt=Symbol.for("react.forward_ref"),ft=Symbol.for("react.suspense"),Rt=Symbol.for("react.suspense_list"),Vt=Symbol.for("react.memo"),rt=Symbol.for("react.lazy"),Se=Symbol.for("react.offscreen"),L=Symbol.iterator;function $(t){return t===null||typeof t!="object"?null:(t=L&&t[L]||t["@@iterator"],typeof t=="function"?t:null)}var U=Object.assign,S;function R(t){if(S===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);S=r&&r[1]||""}return`
`+S+t}var Y=!1;function ee(t,r){if(!t||Y)return"";Y=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(k){var a=k}Reflect.construct(t,[],r)}else{try{r.call()}catch(k){a=k}t.call(r.prototype)}else{try{throw Error()}catch(k){a=k}t()}}catch(k){if(k&&a&&typeof k.stack=="string"){for(var c=k.stack.split(`
`),h=a.stack.split(`
`),p=c.length-1,_=h.length-1;1<=p&&0<=_&&c[p]!==h[_];)_--;for(;1<=p&&0<=_;p--,_--)if(c[p]!==h[_]){if(p!==1||_!==1)do if(p--,_--,0>_||c[p]!==h[_]){var v=`
`+c[p].replace(" at new "," at ");return t.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",t.displayName)),v}while(1<=p&&0<=_);break}}}finally{Y=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?R(t):""}function re(t){switch(t.tag){case 5:return R(t.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return t=ee(t.type,!1),t;case 11:return t=ee(t.type.render,!1),t;case 1:return t=ee(t.type,!0),t;default:return""}}function ie(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case We:return"Fragment";case Ae:return"Portal";case wt:return"Profiler";case nt:return"StrictMode";case ft:return"Suspense";case Rt:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Jn:return(t.displayName||"Context")+".Consumer";case Nt:return(t._context.displayName||"Context")+".Provider";case Wt:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vt:return r=t.displayName||null,r!==null?r:ie(t.type)||"Memo";case rt:r=t._payload,t=t._init;try{return ie(t(r))}catch{}}return null}function de(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(r);case 8:return r===nt?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function le(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _e(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function pt(t){var r=_e(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),a=""+t[r];if(!t.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return c.call(this)},set:function(p){a=""+p,h.call(this,p)}}),Object.defineProperty(t,r,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(p){a=""+p},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function Ds(t){t._valueTracker||(t._valueTracker=pt(t))}function dd(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var o=r.getValue(),a="";return t&&(a=_e(t)?t.checked?"true":"false":t.value),t=a,t!==o?(r.setValue(t),!0):!1}function Ls(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Dl(t,r){var o=r.checked;return U({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function hd(t,r){var o=r.defaultValue==null?"":r.defaultValue,a=r.checked!=null?r.checked:r.defaultChecked;o=le(r.value!=null?r.value:o),t._wrapperState={initialChecked:a,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function fd(t,r){r=r.checked,r!=null&&Pe(t,"checked",r,!1)}function Ll(t,r){fd(t,r);var o=le(r.value),a=r.type;if(o!=null)a==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?Ml(t,r.type,o):r.hasOwnProperty("defaultValue")&&Ml(t,r.type,le(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function pd(t,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var a=r.type;if(!(a!=="submit"&&a!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,o||r===t.value||(t.value=r),t.defaultValue=r}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Ml(t,r,o){(r!=="number"||Ls(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var mi=Array.isArray;function Ir(t,r,o,a){if(t=t.options,r){r={};for(var c=0;c<o.length;c++)r["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=r.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&a&&(t[o].defaultSelected=!0)}else{for(o=""+le(o),r=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,a&&(t[c].defaultSelected=!0);return}r!==null||t[c].disabled||(r=t[c])}r!==null&&(r.selected=!0)}}function bl(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(n(91));return U({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function md(t,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(n(92));if(mi(o)){if(1<o.length)throw Error(n(93));o=o[0]}r=o}r==null&&(r=""),o=r}t._wrapperState={initialValue:le(o)}}function gd(t,r){var o=le(r.value),a=le(r.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),r.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),a!=null&&(t.defaultValue=""+a)}function _d(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function vd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fl(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?vd(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ms,yd=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,a,c){MSApp.execUnsafeLocalFunction(function(){return t(r,o,a,c)})}:t}(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Ms=Ms||document.createElement("div"),Ms.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ms.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function gi(t,r){if(r){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=r;return}}t.textContent=r}var _i={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},O_=["Webkit","ms","Moz","O"];Object.keys(_i).forEach(function(t){O_.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),_i[r]=_i[t]})});function wd(t,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||_i.hasOwnProperty(t)&&_i[t]?(""+r).trim():r+"px"}function Ed(t,r){t=t.style;for(var o in r)if(r.hasOwnProperty(o)){var a=o.indexOf("--")===0,c=wd(o,r[o],a);o==="float"&&(o="cssFloat"),a?t.setProperty(o,c):t[o]=c}}var D_=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ul(t,r){if(r){if(D_[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(n(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(n(61))}if(r.style!=null&&typeof r.style!="object")throw Error(n(62))}}function zl(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bl=null;function Wl(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Vl=null,Tr=null,kr=null;function Sd(t){if(t=zi(t)){if(typeof Vl!="function")throw Error(n(280));var r=t.stateNode;r&&(r=io(r),Vl(t.stateNode,t.type,r))}}function Cd(t){Tr?kr?kr.push(t):kr=[t]:Tr=t}function Id(){if(Tr){var t=Tr,r=kr;if(kr=Tr=null,Sd(t),r)for(t=0;t<r.length;t++)Sd(r[t])}}function Td(t,r){return t(r)}function kd(){}var jl=!1;function Nd(t,r,o){if(jl)return t(r,o);jl=!0;try{return Td(t,r,o)}finally{jl=!1,(Tr!==null||kr!==null)&&(kd(),Id())}}function vi(t,r){var o=t.stateNode;if(o===null)return null;var a=io(o);if(a===null)return null;o=a[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,r,typeof o));return o}var Hl=!1;if(f)try{var yi={};Object.defineProperty(yi,"passive",{get:function(){Hl=!0}}),window.addEventListener("test",yi,yi),window.removeEventListener("test",yi,yi)}catch{Hl=!1}function L_(t,r,o,a,c,h,p,_,v){var k=Array.prototype.slice.call(arguments,3);try{r.apply(o,k)}catch(P){this.onError(P)}}var wi=!1,bs=null,Fs=!1,$l=null,M_={onError:function(t){wi=!0,bs=t}};function b_(t,r,o,a,c,h,p,_,v){wi=!1,bs=null,L_.apply(M_,arguments)}function F_(t,r,o,a,c,h,p,_,v){if(b_.apply(this,arguments),wi){if(wi){var k=bs;wi=!1,bs=null}else throw Error(n(198));Fs||(Fs=!0,$l=k)}}function Zn(t){var r=t,o=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,r.flags&4098&&(o=r.return),t=r.return;while(t)}return r.tag===3?o:null}function Rd(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function Pd(t){if(Zn(t)!==t)throw Error(n(188))}function U_(t){var r=t.alternate;if(!r){if(r=Zn(t),r===null)throw Error(n(188));return r!==t?null:t}for(var o=t,a=r;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(a=c.return,a!==null){o=a;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return Pd(c),t;if(h===a)return Pd(c),r;h=h.sibling}throw Error(n(188))}if(o.return!==a.return)o=c,a=h;else{for(var p=!1,_=c.child;_;){if(_===o){p=!0,o=c,a=h;break}if(_===a){p=!0,a=c,o=h;break}_=_.sibling}if(!p){for(_=h.child;_;){if(_===o){p=!0,o=h,a=c;break}if(_===a){p=!0,a=h,o=c;break}_=_.sibling}if(!p)throw Error(n(189))}}if(o.alternate!==a)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:r}function Ad(t){return t=U_(t),t!==null?xd(t):null}function xd(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=xd(t);if(r!==null)return r;t=t.sibling}return null}var Od=e.unstable_scheduleCallback,Dd=e.unstable_cancelCallback,z_=e.unstable_shouldYield,B_=e.unstable_requestPaint,Te=e.unstable_now,W_=e.unstable_getCurrentPriorityLevel,Gl=e.unstable_ImmediatePriority,Ld=e.unstable_UserBlockingPriority,Us=e.unstable_NormalPriority,V_=e.unstable_LowPriority,Md=e.unstable_IdlePriority,zs=null,jt=null;function j_(t){if(jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(zs,t,void 0,(t.current.flags&128)===128)}catch{}}var Pt=Math.clz32?Math.clz32:G_,H_=Math.log,$_=Math.LN2;function G_(t){return t>>>=0,t===0?32:31-(H_(t)/$_|0)|0}var Bs=64,Ws=4194304;function Ei(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Vs(t,r){var o=t.pendingLanes;if(o===0)return 0;var a=0,c=t.suspendedLanes,h=t.pingedLanes,p=o&268435455;if(p!==0){var _=p&~c;_!==0?a=Ei(_):(h&=p,h!==0&&(a=Ei(h)))}else p=o&~c,p!==0?a=Ei(p):h!==0&&(a=Ei(h));if(a===0)return 0;if(r!==0&&r!==a&&!(r&c)&&(c=a&-a,h=r&-r,c>=h||c===16&&(h&4194240)!==0))return r;if(a&4&&(a|=o&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=a;0<r;)o=31-Pt(r),c=1<<o,a|=t[o],r&=~c;return a}function q_(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function K_(t,r){for(var o=t.suspendedLanes,a=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var p=31-Pt(h),_=1<<p,v=c[p];v===-1?(!(_&o)||_&a)&&(c[p]=q_(_,r)):v<=r&&(t.expiredLanes|=_),h&=~_}}function ql(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function bd(){var t=Bs;return Bs<<=1,!(Bs&4194240)&&(Bs=64),t}function Kl(t){for(var r=[],o=0;31>o;o++)r.push(t);return r}function Si(t,r,o){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-Pt(r),t[r]=o}function Q_(t,r){var o=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-Pt(o),h=1<<c;r[c]=0,a[c]=-1,t[c]=-1,o&=~h}}function Ql(t,r){var o=t.entangledLanes|=r;for(t=t.entanglements;o;){var a=31-Pt(o),c=1<<a;c&r|t[a]&r&&(t[a]|=r),o&=~c}}var ae=0;function Fd(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ud,Yl,zd,Bd,Wd,Xl=!1,js=[],vn=null,yn=null,wn=null,Ci=new Map,Ii=new Map,En=[],Y_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vd(t,r){switch(t){case"focusin":case"focusout":vn=null;break;case"dragenter":case"dragleave":yn=null;break;case"mouseover":case"mouseout":wn=null;break;case"pointerover":case"pointerout":Ci.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ii.delete(r.pointerId)}}function Ti(t,r,o,a,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:r,domEventName:o,eventSystemFlags:a,nativeEvent:h,targetContainers:[c]},r!==null&&(r=zi(r),r!==null&&Yl(r)),t):(t.eventSystemFlags|=a,r=t.targetContainers,c!==null&&r.indexOf(c)===-1&&r.push(c),t)}function X_(t,r,o,a,c){switch(r){case"focusin":return vn=Ti(vn,t,r,o,a,c),!0;case"dragenter":return yn=Ti(yn,t,r,o,a,c),!0;case"mouseover":return wn=Ti(wn,t,r,o,a,c),!0;case"pointerover":var h=c.pointerId;return Ci.set(h,Ti(Ci.get(h)||null,t,r,o,a,c)),!0;case"gotpointercapture":return h=c.pointerId,Ii.set(h,Ti(Ii.get(h)||null,t,r,o,a,c)),!0}return!1}function jd(t){var r=er(t.target);if(r!==null){var o=Zn(r);if(o!==null){if(r=o.tag,r===13){if(r=Rd(o),r!==null){t.blockedOn=r,Wd(t.priority,function(){zd(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hs(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var o=Zl(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var a=new o.constructor(o.type,o);Bl=a,o.target.dispatchEvent(a),Bl=null}else return r=zi(o),r!==null&&Yl(r),t.blockedOn=o,!1;r.shift()}return!0}function Hd(t,r,o){Hs(t)&&o.delete(r)}function J_(){Xl=!1,vn!==null&&Hs(vn)&&(vn=null),yn!==null&&Hs(yn)&&(yn=null),wn!==null&&Hs(wn)&&(wn=null),Ci.forEach(Hd),Ii.forEach(Hd)}function ki(t,r){t.blockedOn===r&&(t.blockedOn=null,Xl||(Xl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,J_)))}function Ni(t){function r(c){return ki(c,t)}if(0<js.length){ki(js[0],t);for(var o=1;o<js.length;o++){var a=js[o];a.blockedOn===t&&(a.blockedOn=null)}}for(vn!==null&&ki(vn,t),yn!==null&&ki(yn,t),wn!==null&&ki(wn,t),Ci.forEach(r),Ii.forEach(r),o=0;o<En.length;o++)a=En[o],a.blockedOn===t&&(a.blockedOn=null);for(;0<En.length&&(o=En[0],o.blockedOn===null);)jd(o),o.blockedOn===null&&En.shift()}var Nr=Ie.ReactCurrentBatchConfig,$s=!0;function Z_(t,r,o,a){var c=ae,h=Nr.transition;Nr.transition=null;try{ae=1,Jl(t,r,o,a)}finally{ae=c,Nr.transition=h}}function ev(t,r,o,a){var c=ae,h=Nr.transition;Nr.transition=null;try{ae=4,Jl(t,r,o,a)}finally{ae=c,Nr.transition=h}}function Jl(t,r,o,a){if($s){var c=Zl(t,r,o,a);if(c===null)ga(t,r,a,Gs,o),Vd(t,a);else if(X_(c,t,r,o,a))a.stopPropagation();else if(Vd(t,a),r&4&&-1<Y_.indexOf(t)){for(;c!==null;){var h=zi(c);if(h!==null&&Ud(h),h=Zl(t,r,o,a),h===null&&ga(t,r,a,Gs,o),h===c)break;c=h}c!==null&&a.stopPropagation()}else ga(t,r,a,null,o)}}var Gs=null;function Zl(t,r,o,a){if(Gs=null,t=Wl(a),t=er(t),t!==null)if(r=Zn(t),r===null)t=null;else if(o=r.tag,o===13){if(t=Rd(r),t!==null)return t;t=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return Gs=t,null}function $d(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(W_()){case Gl:return 1;case Ld:return 4;case Us:case V_:return 16;case Md:return 536870912;default:return 16}default:return 16}}var Sn=null,ea=null,qs=null;function Gd(){if(qs)return qs;var t,r=ea,o=r.length,a,c="value"in Sn?Sn.value:Sn.textContent,h=c.length;for(t=0;t<o&&r[t]===c[t];t++);var p=o-t;for(a=1;a<=p&&r[o-a]===c[h-a];a++);return qs=c.slice(t,1<a?1-a:void 0)}function Ks(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function Qs(){return!0}function qd(){return!1}function mt(t){function r(o,a,c,h,p){this._reactName=o,this._targetInst=c,this.type=a,this.nativeEvent=h,this.target=p,this.currentTarget=null;for(var _ in t)t.hasOwnProperty(_)&&(o=t[_],this[_]=o?o(h):h[_]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Qs:qd,this.isPropagationStopped=qd,this}return U(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Qs)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Qs)},persist:function(){},isPersistent:Qs}),r}var Rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ta=mt(Rr),Ri=U({},Rr,{view:0,detail:0}),tv=mt(Ri),na,ra,Pi,Ys=U({},Ri,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sa,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Pi&&(Pi&&t.type==="mousemove"?(na=t.screenX-Pi.screenX,ra=t.screenY-Pi.screenY):ra=na=0,Pi=t),na)},movementY:function(t){return"movementY"in t?t.movementY:ra}}),Kd=mt(Ys),nv=U({},Ys,{dataTransfer:0}),rv=mt(nv),iv=U({},Ri,{relatedTarget:0}),ia=mt(iv),sv=U({},Rr,{animationName:0,elapsedTime:0,pseudoElement:0}),ov=mt(sv),lv=U({},Rr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),av=mt(lv),uv=U({},Rr,{data:0}),Qd=mt(uv),cv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fv(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=hv[t])?!!r[t]:!1}function sa(){return fv}var pv=U({},Ri,{key:function(t){if(t.key){var r=cv[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=Ks(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sa,charCode:function(t){return t.type==="keypress"?Ks(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ks(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),mv=mt(pv),gv=U({},Ys,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yd=mt(gv),_v=U({},Ri,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sa}),vv=mt(_v),yv=U({},Rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),wv=mt(yv),Ev=U({},Ys,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Sv=mt(Ev),Cv=[9,13,27,32],oa=f&&"CompositionEvent"in window,Ai=null;f&&"documentMode"in document&&(Ai=document.documentMode);var Iv=f&&"TextEvent"in window&&!Ai,Xd=f&&(!oa||Ai&&8<Ai&&11>=Ai),Jd=" ",Zd=!1;function eh(t,r){switch(t){case"keyup":return Cv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function th(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pr=!1;function Tv(t,r){switch(t){case"compositionend":return th(r);case"keypress":return r.which!==32?null:(Zd=!0,Jd);case"textInput":return t=r.data,t===Jd&&Zd?null:t;default:return null}}function kv(t,r){if(Pr)return t==="compositionend"||!oa&&eh(t,r)?(t=Gd(),qs=ea=Sn=null,Pr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Xd&&r.locale!=="ko"?null:r.data;default:return null}}var Nv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nh(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!Nv[t.type]:r==="textarea"}function rh(t,r,o,a){Cd(a),r=to(r,"onChange"),0<r.length&&(o=new ta("onChange","change",null,o,a),t.push({event:o,listeners:r}))}var xi=null,Oi=null;function Rv(t){Eh(t,0)}function Xs(t){var r=Lr(t);if(dd(r))return t}function Pv(t,r){if(t==="change")return r}var ih=!1;if(f){var la;if(f){var aa="oninput"in document;if(!aa){var sh=document.createElement("div");sh.setAttribute("oninput","return;"),aa=typeof sh.oninput=="function"}la=aa}else la=!1;ih=la&&(!document.documentMode||9<document.documentMode)}function oh(){xi&&(xi.detachEvent("onpropertychange",lh),Oi=xi=null)}function lh(t){if(t.propertyName==="value"&&Xs(Oi)){var r=[];rh(r,Oi,t,Wl(t)),Nd(Rv,r)}}function Av(t,r,o){t==="focusin"?(oh(),xi=r,Oi=o,xi.attachEvent("onpropertychange",lh)):t==="focusout"&&oh()}function xv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xs(Oi)}function Ov(t,r){if(t==="click")return Xs(r)}function Dv(t,r){if(t==="input"||t==="change")return Xs(r)}function Lv(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var At=typeof Object.is=="function"?Object.is:Lv;function Di(t,r){if(At(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var o=Object.keys(t),a=Object.keys(r);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var c=o[a];if(!m.call(r,c)||!At(t[c],r[c]))return!1}return!0}function ah(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function uh(t,r){var o=ah(t);t=0;for(var a;o;){if(o.nodeType===3){if(a=t+o.textContent.length,t<=r&&a>=r)return{node:o,offset:r-t};t=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=ah(o)}}function ch(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?ch(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function dh(){for(var t=window,r=Ls();r instanceof t.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)t=r.contentWindow;else break;r=Ls(t.document)}return r}function ua(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function Mv(t){var r=dh(),o=t.focusedElem,a=t.selectionRange;if(r!==o&&o&&o.ownerDocument&&ch(o.ownerDocument.documentElement,o)){if(a!==null&&ua(o)){if(r=a.start,t=a.end,t===void 0&&(t=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(t,o.value.length);else if(t=(r=o.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(a.start,c);a=a.end===void 0?h:Math.min(a.end,c),!t.extend&&h>a&&(c=a,a=h,h=c),c=uh(o,h);var p=uh(o,a);c&&p&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==p.node||t.focusOffset!==p.offset)&&(r=r.createRange(),r.setStart(c.node,c.offset),t.removeAllRanges(),h>a?(t.addRange(r),t.extend(p.node,p.offset)):(r.setEnd(p.node,p.offset),t.addRange(r)))}}for(r=[],t=o;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)t=r[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var bv=f&&"documentMode"in document&&11>=document.documentMode,Ar=null,ca=null,Li=null,da=!1;function hh(t,r,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;da||Ar==null||Ar!==Ls(a)||(a=Ar,"selectionStart"in a&&ua(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Li&&Di(Li,a)||(Li=a,a=to(ca,"onSelect"),0<a.length&&(r=new ta("onSelect","select",null,r,o),t.push({event:r,listeners:a}),r.target=Ar)))}function Js(t,r){var o={};return o[t.toLowerCase()]=r.toLowerCase(),o["Webkit"+t]="webkit"+r,o["Moz"+t]="moz"+r,o}var xr={animationend:Js("Animation","AnimationEnd"),animationiteration:Js("Animation","AnimationIteration"),animationstart:Js("Animation","AnimationStart"),transitionend:Js("Transition","TransitionEnd")},ha={},fh={};f&&(fh=document.createElement("div").style,"AnimationEvent"in window||(delete xr.animationend.animation,delete xr.animationiteration.animation,delete xr.animationstart.animation),"TransitionEvent"in window||delete xr.transitionend.transition);function Zs(t){if(ha[t])return ha[t];if(!xr[t])return t;var r=xr[t],o;for(o in r)if(r.hasOwnProperty(o)&&o in fh)return ha[t]=r[o];return t}var ph=Zs("animationend"),mh=Zs("animationiteration"),gh=Zs("animationstart"),_h=Zs("transitionend"),vh=new Map,yh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cn(t,r){vh.set(t,r),u(r,[t])}for(var fa=0;fa<yh.length;fa++){var pa=yh[fa],Fv=pa.toLowerCase(),Uv=pa[0].toUpperCase()+pa.slice(1);Cn(Fv,"on"+Uv)}Cn(ph,"onAnimationEnd"),Cn(mh,"onAnimationIteration"),Cn(gh,"onAnimationStart"),Cn("dblclick","onDoubleClick"),Cn("focusin","onFocus"),Cn("focusout","onBlur"),Cn(_h,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mi));function wh(t,r,o){var a=t.type||"unknown-event";t.currentTarget=o,F_(a,r,void 0,t),t.currentTarget=null}function Eh(t,r){r=(r&4)!==0;for(var o=0;o<t.length;o++){var a=t[o],c=a.event;a=a.listeners;e:{var h=void 0;if(r)for(var p=a.length-1;0<=p;p--){var _=a[p],v=_.instance,k=_.currentTarget;if(_=_.listener,v!==h&&c.isPropagationStopped())break e;wh(c,_,k),h=v}else for(p=0;p<a.length;p++){if(_=a[p],v=_.instance,k=_.currentTarget,_=_.listener,v!==h&&c.isPropagationStopped())break e;wh(c,_,k),h=v}}}if(Fs)throw t=$l,Fs=!1,$l=null,t}function pe(t,r){var o=r[Sa];o===void 0&&(o=r[Sa]=new Set);var a=t+"__bubble";o.has(a)||(Sh(r,t,2,!1),o.add(a))}function ma(t,r,o){var a=0;r&&(a|=4),Sh(o,t,a,r)}var eo="_reactListening"+Math.random().toString(36).slice(2);function bi(t){if(!t[eo]){t[eo]=!0,s.forEach(function(o){o!=="selectionchange"&&(zv.has(o)||ma(o,!1,t),ma(o,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[eo]||(r[eo]=!0,ma("selectionchange",!1,r))}}function Sh(t,r,o,a){switch($d(r)){case 1:var c=Z_;break;case 4:c=ev;break;default:c=Jl}o=c.bind(null,r,o,t),c=void 0,!Hl||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(c=!0),a?c!==void 0?t.addEventListener(r,o,{capture:!0,passive:c}):t.addEventListener(r,o,!0):c!==void 0?t.addEventListener(r,o,{passive:c}):t.addEventListener(r,o,!1)}function ga(t,r,o,a,c){var h=a;if(!(r&1)&&!(r&2)&&a!==null)e:for(;;){if(a===null)return;var p=a.tag;if(p===3||p===4){var _=a.stateNode.containerInfo;if(_===c||_.nodeType===8&&_.parentNode===c)break;if(p===4)for(p=a.return;p!==null;){var v=p.tag;if((v===3||v===4)&&(v=p.stateNode.containerInfo,v===c||v.nodeType===8&&v.parentNode===c))return;p=p.return}for(;_!==null;){if(p=er(_),p===null)return;if(v=p.tag,v===5||v===6){a=h=p;continue e}_=_.parentNode}}a=a.return}Nd(function(){var k=h,P=Wl(o),A=[];e:{var N=vh.get(t);if(N!==void 0){var M=ta,z=t;switch(t){case"keypress":if(Ks(o)===0)break e;case"keydown":case"keyup":M=mv;break;case"focusin":z="focus",M=ia;break;case"focusout":z="blur",M=ia;break;case"beforeblur":case"afterblur":M=ia;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=Kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=rv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=vv;break;case ph:case mh:case gh:M=ov;break;case _h:M=wv;break;case"scroll":M=tv;break;case"wheel":M=Sv;break;case"copy":case"cut":case"paste":M=av;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=Yd}var B=(r&4)!==0,ke=!B&&t==="scroll",C=B?N!==null?N+"Capture":null:N;B=[];for(var w=k,I;w!==null;){I=w;var x=I.stateNode;if(I.tag===5&&x!==null&&(I=x,C!==null&&(x=vi(w,C),x!=null&&B.push(Fi(w,x,I)))),ke)break;w=w.return}0<B.length&&(N=new M(N,z,null,o,P),A.push({event:N,listeners:B}))}}if(!(r&7)){e:{if(N=t==="mouseover"||t==="pointerover",M=t==="mouseout"||t==="pointerout",N&&o!==Bl&&(z=o.relatedTarget||o.fromElement)&&(er(z)||z[Xt]))break e;if((M||N)&&(N=P.window===P?P:(N=P.ownerDocument)?N.defaultView||N.parentWindow:window,M?(z=o.relatedTarget||o.toElement,M=k,z=z?er(z):null,z!==null&&(ke=Zn(z),z!==ke||z.tag!==5&&z.tag!==6)&&(z=null)):(M=null,z=k),M!==z)){if(B=Kd,x="onMouseLeave",C="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(B=Yd,x="onPointerLeave",C="onPointerEnter",w="pointer"),ke=M==null?N:Lr(M),I=z==null?N:Lr(z),N=new B(x,w+"leave",M,o,P),N.target=ke,N.relatedTarget=I,x=null,er(P)===k&&(B=new B(C,w+"enter",z,o,P),B.target=I,B.relatedTarget=ke,x=B),ke=x,M&&z)t:{for(B=M,C=z,w=0,I=B;I;I=Or(I))w++;for(I=0,x=C;x;x=Or(x))I++;for(;0<w-I;)B=Or(B),w--;for(;0<I-w;)C=Or(C),I--;for(;w--;){if(B===C||C!==null&&B===C.alternate)break t;B=Or(B),C=Or(C)}B=null}else B=null;M!==null&&Ch(A,N,M,B,!1),z!==null&&ke!==null&&Ch(A,ke,z,B,!0)}}e:{if(N=k?Lr(k):window,M=N.nodeName&&N.nodeName.toLowerCase(),M==="select"||M==="input"&&N.type==="file")var W=Pv;else if(nh(N))if(ih)W=Dv;else{W=xv;var j=Av}else(M=N.nodeName)&&M.toLowerCase()==="input"&&(N.type==="checkbox"||N.type==="radio")&&(W=Ov);if(W&&(W=W(t,k))){rh(A,W,o,P);break e}j&&j(t,N,k),t==="focusout"&&(j=N._wrapperState)&&j.controlled&&N.type==="number"&&Ml(N,"number",N.value)}switch(j=k?Lr(k):window,t){case"focusin":(nh(j)||j.contentEditable==="true")&&(Ar=j,ca=k,Li=null);break;case"focusout":Li=ca=Ar=null;break;case"mousedown":da=!0;break;case"contextmenu":case"mouseup":case"dragend":da=!1,hh(A,o,P);break;case"selectionchange":if(bv)break;case"keydown":case"keyup":hh(A,o,P)}var H;if(oa)e:{switch(t){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else Pr?eh(t,o)&&(K="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(K="onCompositionStart");K&&(Xd&&o.locale!=="ko"&&(Pr||K!=="onCompositionStart"?K==="onCompositionEnd"&&Pr&&(H=Gd()):(Sn=P,ea="value"in Sn?Sn.value:Sn.textContent,Pr=!0)),j=to(k,K),0<j.length&&(K=new Qd(K,t,null,o,P),A.push({event:K,listeners:j}),H?K.data=H:(H=th(o),H!==null&&(K.data=H)))),(H=Iv?Tv(t,o):kv(t,o))&&(k=to(k,"onBeforeInput"),0<k.length&&(P=new Qd("onBeforeInput","beforeinput",null,o,P),A.push({event:P,listeners:k}),P.data=H))}Eh(A,r)})}function Fi(t,r,o){return{instance:t,listener:r,currentTarget:o}}function to(t,r){for(var o=r+"Capture",a=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=vi(t,o),h!=null&&a.unshift(Fi(t,h,c)),h=vi(t,r),h!=null&&a.push(Fi(t,h,c))),t=t.return}return a}function Or(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ch(t,r,o,a,c){for(var h=r._reactName,p=[];o!==null&&o!==a;){var _=o,v=_.alternate,k=_.stateNode;if(v!==null&&v===a)break;_.tag===5&&k!==null&&(_=k,c?(v=vi(o,h),v!=null&&p.unshift(Fi(o,v,_))):c||(v=vi(o,h),v!=null&&p.push(Fi(o,v,_)))),o=o.return}p.length!==0&&t.push({event:r,listeners:p})}var Bv=/\r\n?/g,Wv=/\u0000|\uFFFD/g;function Ih(t){return(typeof t=="string"?t:""+t).replace(Bv,`
`).replace(Wv,"")}function no(t,r,o){if(r=Ih(r),Ih(t)!==r&&o)throw Error(n(425))}function ro(){}var _a=null,va=null;function ya(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var wa=typeof setTimeout=="function"?setTimeout:void 0,Vv=typeof clearTimeout=="function"?clearTimeout:void 0,Th=typeof Promise=="function"?Promise:void 0,jv=typeof queueMicrotask=="function"?queueMicrotask:typeof Th<"u"?function(t){return Th.resolve(null).then(t).catch(Hv)}:wa;function Hv(t){setTimeout(function(){throw t})}function Ea(t,r){var o=r,a=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(a===0){t.removeChild(c),Ni(r);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=c}while(o);Ni(r)}function In(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function kh(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return t;r--}else o==="/$"&&r++}t=t.previousSibling}return null}var Dr=Math.random().toString(36).slice(2),Ht="__reactFiber$"+Dr,Ui="__reactProps$"+Dr,Xt="__reactContainer$"+Dr,Sa="__reactEvents$"+Dr,$v="__reactListeners$"+Dr,Gv="__reactHandles$"+Dr;function er(t){var r=t[Ht];if(r)return r;for(var o=t.parentNode;o;){if(r=o[Xt]||o[Ht]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(t=kh(t);t!==null;){if(o=t[Ht])return o;t=kh(t)}return r}t=o,o=t.parentNode}return null}function zi(t){return t=t[Ht]||t[Xt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Lr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function io(t){return t[Ui]||null}var Ca=[],Mr=-1;function Tn(t){return{current:t}}function me(t){0>Mr||(t.current=Ca[Mr],Ca[Mr]=null,Mr--)}function he(t,r){Mr++,Ca[Mr]=t.current,t.current=r}var kn={},$e=Tn(kn),it=Tn(!1),tr=kn;function br(t,r){var o=t.type.contextTypes;if(!o)return kn;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===r)return a.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=r[h];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=c),c}function st(t){return t=t.childContextTypes,t!=null}function so(){me(it),me($e)}function Nh(t,r,o){if($e.current!==kn)throw Error(n(168));he($e,r),he(it,o)}function Rh(t,r,o){var a=t.stateNode;if(r=r.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var c in a)if(!(c in r))throw Error(n(108,de(t)||"Unknown",c));return U({},o,a)}function oo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||kn,tr=$e.current,he($e,t),he(it,it.current),!0}function Ph(t,r,o){var a=t.stateNode;if(!a)throw Error(n(169));o?(t=Rh(t,r,tr),a.__reactInternalMemoizedMergedChildContext=t,me(it),me($e),he($e,t)):me(it),he(it,o)}var Jt=null,lo=!1,Ia=!1;function Ah(t){Jt===null?Jt=[t]:Jt.push(t)}function qv(t){lo=!0,Ah(t)}function Nn(){if(!Ia&&Jt!==null){Ia=!0;var t=0,r=ae;try{var o=Jt;for(ae=1;t<o.length;t++){var a=o[t];do a=a(!0);while(a!==null)}Jt=null,lo=!1}catch(c){throw Jt!==null&&(Jt=Jt.slice(t+1)),Od(Gl,Nn),c}finally{ae=r,Ia=!1}}return null}var Fr=[],Ur=0,ao=null,uo=0,Et=[],St=0,nr=null,Zt=1,en="";function rr(t,r){Fr[Ur++]=uo,Fr[Ur++]=ao,ao=t,uo=r}function xh(t,r,o){Et[St++]=Zt,Et[St++]=en,Et[St++]=nr,nr=t;var a=Zt;t=en;var c=32-Pt(a)-1;a&=~(1<<c),o+=1;var h=32-Pt(r)+c;if(30<h){var p=c-c%5;h=(a&(1<<p)-1).toString(32),a>>=p,c-=p,Zt=1<<32-Pt(r)+c|o<<c|a,en=h+t}else Zt=1<<h|o<<c|a,en=t}function Ta(t){t.return!==null&&(rr(t,1),xh(t,1,0))}function ka(t){for(;t===ao;)ao=Fr[--Ur],Fr[Ur]=null,uo=Fr[--Ur],Fr[Ur]=null;for(;t===nr;)nr=Et[--St],Et[St]=null,en=Et[--St],Et[St]=null,Zt=Et[--St],Et[St]=null}var gt=null,_t=null,ve=!1,xt=null;function Oh(t,r){var o=kt(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=t,r=t.deletions,r===null?(t.deletions=[o],t.flags|=16):r.push(o)}function Dh(t,r){switch(t.tag){case 5:var o=t.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,gt=t,_t=In(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,gt=t,_t=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=nr!==null?{id:Zt,overflow:en}:null,t.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=kt(18,null,null,0),o.stateNode=r,o.return=t,t.child=o,gt=t,_t=null,!0):!1;default:return!1}}function Na(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ra(t){if(ve){var r=_t;if(r){var o=r;if(!Dh(t,r)){if(Na(t))throw Error(n(418));r=In(o.nextSibling);var a=gt;r&&Dh(t,r)?Oh(a,o):(t.flags=t.flags&-4097|2,ve=!1,gt=t)}}else{if(Na(t))throw Error(n(418));t.flags=t.flags&-4097|2,ve=!1,gt=t}}}function Lh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gt=t}function co(t){if(t!==gt)return!1;if(!ve)return Lh(t),ve=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!ya(t.type,t.memoizedProps)),r&&(r=_t)){if(Na(t))throw Mh(),Error(n(418));for(;r;)Oh(t,r),r=In(r.nextSibling)}if(Lh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(r===0){_t=In(t.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}t=t.nextSibling}_t=null}}else _t=gt?In(t.stateNode.nextSibling):null;return!0}function Mh(){for(var t=_t;t;)t=In(t.nextSibling)}function zr(){_t=gt=null,ve=!1}function Pa(t){xt===null?xt=[t]:xt.push(t)}var Kv=Ie.ReactCurrentBatchConfig;function Bi(t,r,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var a=o.stateNode}if(!a)throw Error(n(147,t));var c=a,h=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===h?r.ref:(r=function(p){var _=c.refs;p===null?delete _[h]:_[h]=p},r._stringRef=h,r)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function ho(t,r){throw t=Object.prototype.toString.call(r),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function bh(t){var r=t._init;return r(t._payload)}function Fh(t){function r(C,w){if(t){var I=C.deletions;I===null?(C.deletions=[w],C.flags|=16):I.push(w)}}function o(C,w){if(!t)return null;for(;w!==null;)r(C,w),w=w.sibling;return null}function a(C,w){for(C=new Map;w!==null;)w.key!==null?C.set(w.key,w):C.set(w.index,w),w=w.sibling;return C}function c(C,w){return C=Mn(C,w),C.index=0,C.sibling=null,C}function h(C,w,I){return C.index=I,t?(I=C.alternate,I!==null?(I=I.index,I<w?(C.flags|=2,w):I):(C.flags|=2,w)):(C.flags|=1048576,w)}function p(C){return t&&C.alternate===null&&(C.flags|=2),C}function _(C,w,I,x){return w===null||w.tag!==6?(w=wu(I,C.mode,x),w.return=C,w):(w=c(w,I),w.return=C,w)}function v(C,w,I,x){var W=I.type;return W===We?P(C,w,I.props.children,x,I.key):w!==null&&(w.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===rt&&bh(W)===w.type)?(x=c(w,I.props),x.ref=Bi(C,w,I),x.return=C,x):(x=bo(I.type,I.key,I.props,null,C.mode,x),x.ref=Bi(C,w,I),x.return=C,x)}function k(C,w,I,x){return w===null||w.tag!==4||w.stateNode.containerInfo!==I.containerInfo||w.stateNode.implementation!==I.implementation?(w=Eu(I,C.mode,x),w.return=C,w):(w=c(w,I.children||[]),w.return=C,w)}function P(C,w,I,x,W){return w===null||w.tag!==7?(w=dr(I,C.mode,x,W),w.return=C,w):(w=c(w,I),w.return=C,w)}function A(C,w,I){if(typeof w=="string"&&w!==""||typeof w=="number")return w=wu(""+w,C.mode,I),w.return=C,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case tt:return I=bo(w.type,w.key,w.props,null,C.mode,I),I.ref=Bi(C,null,w),I.return=C,I;case Ae:return w=Eu(w,C.mode,I),w.return=C,w;case rt:var x=w._init;return A(C,x(w._payload),I)}if(mi(w)||$(w))return w=dr(w,C.mode,I,null),w.return=C,w;ho(C,w)}return null}function N(C,w,I,x){var W=w!==null?w.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return W!==null?null:_(C,w,""+I,x);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case tt:return I.key===W?v(C,w,I,x):null;case Ae:return I.key===W?k(C,w,I,x):null;case rt:return W=I._init,N(C,w,W(I._payload),x)}if(mi(I)||$(I))return W!==null?null:P(C,w,I,x,null);ho(C,I)}return null}function M(C,w,I,x,W){if(typeof x=="string"&&x!==""||typeof x=="number")return C=C.get(I)||null,_(w,C,""+x,W);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case tt:return C=C.get(x.key===null?I:x.key)||null,v(w,C,x,W);case Ae:return C=C.get(x.key===null?I:x.key)||null,k(w,C,x,W);case rt:var j=x._init;return M(C,w,I,j(x._payload),W)}if(mi(x)||$(x))return C=C.get(I)||null,P(w,C,x,W,null);ho(w,x)}return null}function z(C,w,I,x){for(var W=null,j=null,H=w,K=w=0,Ue=null;H!==null&&K<I.length;K++){H.index>K?(Ue=H,H=null):Ue=H.sibling;var se=N(C,H,I[K],x);if(se===null){H===null&&(H=Ue);break}t&&H&&se.alternate===null&&r(C,H),w=h(se,w,K),j===null?W=se:j.sibling=se,j=se,H=Ue}if(K===I.length)return o(C,H),ve&&rr(C,K),W;if(H===null){for(;K<I.length;K++)H=A(C,I[K],x),H!==null&&(w=h(H,w,K),j===null?W=H:j.sibling=H,j=H);return ve&&rr(C,K),W}for(H=a(C,H);K<I.length;K++)Ue=M(H,C,K,I[K],x),Ue!==null&&(t&&Ue.alternate!==null&&H.delete(Ue.key===null?K:Ue.key),w=h(Ue,w,K),j===null?W=Ue:j.sibling=Ue,j=Ue);return t&&H.forEach(function(bn){return r(C,bn)}),ve&&rr(C,K),W}function B(C,w,I,x){var W=$(I);if(typeof W!="function")throw Error(n(150));if(I=W.call(I),I==null)throw Error(n(151));for(var j=W=null,H=w,K=w=0,Ue=null,se=I.next();H!==null&&!se.done;K++,se=I.next()){H.index>K?(Ue=H,H=null):Ue=H.sibling;var bn=N(C,H,se.value,x);if(bn===null){H===null&&(H=Ue);break}t&&H&&bn.alternate===null&&r(C,H),w=h(bn,w,K),j===null?W=bn:j.sibling=bn,j=bn,H=Ue}if(se.done)return o(C,H),ve&&rr(C,K),W;if(H===null){for(;!se.done;K++,se=I.next())se=A(C,se.value,x),se!==null&&(w=h(se,w,K),j===null?W=se:j.sibling=se,j=se);return ve&&rr(C,K),W}for(H=a(C,H);!se.done;K++,se=I.next())se=M(H,C,K,se.value,x),se!==null&&(t&&se.alternate!==null&&H.delete(se.key===null?K:se.key),w=h(se,w,K),j===null?W=se:j.sibling=se,j=se);return t&&H.forEach(function(Ny){return r(C,Ny)}),ve&&rr(C,K),W}function ke(C,w,I,x){if(typeof I=="object"&&I!==null&&I.type===We&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case tt:e:{for(var W=I.key,j=w;j!==null;){if(j.key===W){if(W=I.type,W===We){if(j.tag===7){o(C,j.sibling),w=c(j,I.props.children),w.return=C,C=w;break e}}else if(j.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===rt&&bh(W)===j.type){o(C,j.sibling),w=c(j,I.props),w.ref=Bi(C,j,I),w.return=C,C=w;break e}o(C,j);break}else r(C,j);j=j.sibling}I.type===We?(w=dr(I.props.children,C.mode,x,I.key),w.return=C,C=w):(x=bo(I.type,I.key,I.props,null,C.mode,x),x.ref=Bi(C,w,I),x.return=C,C=x)}return p(C);case Ae:e:{for(j=I.key;w!==null;){if(w.key===j)if(w.tag===4&&w.stateNode.containerInfo===I.containerInfo&&w.stateNode.implementation===I.implementation){o(C,w.sibling),w=c(w,I.children||[]),w.return=C,C=w;break e}else{o(C,w);break}else r(C,w);w=w.sibling}w=Eu(I,C.mode,x),w.return=C,C=w}return p(C);case rt:return j=I._init,ke(C,w,j(I._payload),x)}if(mi(I))return z(C,w,I,x);if($(I))return B(C,w,I,x);ho(C,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,w!==null&&w.tag===6?(o(C,w.sibling),w=c(w,I),w.return=C,C=w):(o(C,w),w=wu(I,C.mode,x),w.return=C,C=w),p(C)):o(C,w)}return ke}var Br=Fh(!0),Uh=Fh(!1),fo=Tn(null),po=null,Wr=null,Aa=null;function xa(){Aa=Wr=po=null}function Oa(t){var r=fo.current;me(fo),t._currentValue=r}function Da(t,r,o){for(;t!==null;){var a=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,a!==null&&(a.childLanes|=r)):a!==null&&(a.childLanes&r)!==r&&(a.childLanes|=r),t===o)break;t=t.return}}function Vr(t,r){po=t,Aa=Wr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&r&&(ot=!0),t.firstContext=null)}function Ct(t){var r=t._currentValue;if(Aa!==t)if(t={context:t,memoizedValue:r,next:null},Wr===null){if(po===null)throw Error(n(308));Wr=t,po.dependencies={lanes:0,firstContext:t}}else Wr=Wr.next=t;return r}var ir=null;function La(t){ir===null?ir=[t]:ir.push(t)}function zh(t,r,o,a){var c=r.interleaved;return c===null?(o.next=o,La(r)):(o.next=c.next,c.next=o),r.interleaved=o,tn(t,a)}function tn(t,r){t.lanes|=r;var o=t.alternate;for(o!==null&&(o.lanes|=r),o=t,t=t.return;t!==null;)t.childLanes|=r,o=t.alternate,o!==null&&(o.childLanes|=r),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Rn=!1;function Ma(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bh(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function nn(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function Pn(t,r,o){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,ne&2){var c=a.pending;return c===null?r.next=r:(r.next=c.next,c.next=r),a.pending=r,tn(t,o)}return c=a.interleaved,c===null?(r.next=r,La(a)):(r.next=c.next,c.next=r),a.interleaved=r,tn(t,o)}function mo(t,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var a=r.lanes;a&=t.pendingLanes,o|=a,r.lanes=o,Ql(t,o)}}function Wh(t,r){var o=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var p={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=p:h=h.next=p,o=o.next}while(o!==null);h===null?c=h=r:h=h.next=r}else c=h=r;o={baseState:a.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:a.shared,effects:a.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=r:t.next=r,o.lastBaseUpdate=r}function go(t,r,o,a){var c=t.updateQueue;Rn=!1;var h=c.firstBaseUpdate,p=c.lastBaseUpdate,_=c.shared.pending;if(_!==null){c.shared.pending=null;var v=_,k=v.next;v.next=null,p===null?h=k:p.next=k,p=v;var P=t.alternate;P!==null&&(P=P.updateQueue,_=P.lastBaseUpdate,_!==p&&(_===null?P.firstBaseUpdate=k:_.next=k,P.lastBaseUpdate=v))}if(h!==null){var A=c.baseState;p=0,P=k=v=null,_=h;do{var N=_.lane,M=_.eventTime;if((a&N)===N){P!==null&&(P=P.next={eventTime:M,lane:0,tag:_.tag,payload:_.payload,callback:_.callback,next:null});e:{var z=t,B=_;switch(N=r,M=o,B.tag){case 1:if(z=B.payload,typeof z=="function"){A=z.call(M,A,N);break e}A=z;break e;case 3:z.flags=z.flags&-65537|128;case 0:if(z=B.payload,N=typeof z=="function"?z.call(M,A,N):z,N==null)break e;A=U({},A,N);break e;case 2:Rn=!0}}_.callback!==null&&_.lane!==0&&(t.flags|=64,N=c.effects,N===null?c.effects=[_]:N.push(_))}else M={eventTime:M,lane:N,tag:_.tag,payload:_.payload,callback:_.callback,next:null},P===null?(k=P=M,v=A):P=P.next=M,p|=N;if(_=_.next,_===null){if(_=c.shared.pending,_===null)break;N=_,_=N.next,N.next=null,c.lastBaseUpdate=N,c.shared.pending=null}}while(!0);if(P===null&&(v=A),c.baseState=v,c.firstBaseUpdate=k,c.lastBaseUpdate=P,r=c.shared.interleaved,r!==null){c=r;do p|=c.lane,c=c.next;while(c!==r)}else h===null&&(c.shared.lanes=0);lr|=p,t.lanes=p,t.memoizedState=A}}function Vh(t,r,o){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var a=t[r],c=a.callback;if(c!==null){if(a.callback=null,a=o,typeof c!="function")throw Error(n(191,c));c.call(a)}}}var Wi={},$t=Tn(Wi),Vi=Tn(Wi),ji=Tn(Wi);function sr(t){if(t===Wi)throw Error(n(174));return t}function ba(t,r){switch(he(ji,r),he(Vi,t),he($t,Wi),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Fl(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=Fl(r,t)}me($t),he($t,r)}function jr(){me($t),me(Vi),me(ji)}function jh(t){sr(ji.current);var r=sr($t.current),o=Fl(r,t.type);r!==o&&(he(Vi,t),he($t,o))}function Fa(t){Vi.current===t&&(me($t),me(Vi))}var ye=Tn(0);function _o(t){for(var r=t;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ua=[];function za(){for(var t=0;t<Ua.length;t++)Ua[t]._workInProgressVersionPrimary=null;Ua.length=0}var vo=Ie.ReactCurrentDispatcher,Ba=Ie.ReactCurrentBatchConfig,or=0,we=null,xe=null,be=null,yo=!1,Hi=!1,$i=0,Qv=0;function Ge(){throw Error(n(321))}function Wa(t,r){if(r===null)return!1;for(var o=0;o<r.length&&o<t.length;o++)if(!At(t[o],r[o]))return!1;return!0}function Va(t,r,o,a,c,h){if(or=h,we=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,vo.current=t===null||t.memoizedState===null?Zv:ey,t=o(a,c),Hi){h=0;do{if(Hi=!1,$i=0,25<=h)throw Error(n(301));h+=1,be=xe=null,r.updateQueue=null,vo.current=ty,t=o(a,c)}while(Hi)}if(vo.current=So,r=xe!==null&&xe.next!==null,or=0,be=xe=we=null,yo=!1,r)throw Error(n(300));return t}function ja(){var t=$i!==0;return $i=0,t}function Gt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?we.memoizedState=be=t:be=be.next=t,be}function It(){if(xe===null){var t=we.alternate;t=t!==null?t.memoizedState:null}else t=xe.next;var r=be===null?we.memoizedState:be.next;if(r!==null)be=r,xe=t;else{if(t===null)throw Error(n(310));xe=t,t={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},be===null?we.memoizedState=be=t:be=be.next=t}return be}function Gi(t,r){return typeof r=="function"?r(t):r}function Ha(t){var r=It(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=xe,c=a.baseQueue,h=o.pending;if(h!==null){if(c!==null){var p=c.next;c.next=h.next,h.next=p}a.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,a=a.baseState;var _=p=null,v=null,k=h;do{var P=k.lane;if((or&P)===P)v!==null&&(v=v.next={lane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),a=k.hasEagerState?k.eagerState:t(a,k.action);else{var A={lane:P,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null};v===null?(_=v=A,p=a):v=v.next=A,we.lanes|=P,lr|=P}k=k.next}while(k!==null&&k!==h);v===null?p=a:v.next=_,At(a,r.memoizedState)||(ot=!0),r.memoizedState=a,r.baseState=p,r.baseQueue=v,o.lastRenderedState=a}if(t=o.interleaved,t!==null){c=t;do h=c.lane,we.lanes|=h,lr|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function $a(t){var r=It(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=o.dispatch,c=o.pending,h=r.memoizedState;if(c!==null){o.pending=null;var p=c=c.next;do h=t(h,p.action),p=p.next;while(p!==c);At(h,r.memoizedState)||(ot=!0),r.memoizedState=h,r.baseQueue===null&&(r.baseState=h),o.lastRenderedState=h}return[h,a]}function Hh(){}function $h(t,r){var o=we,a=It(),c=r(),h=!At(a.memoizedState,c);if(h&&(a.memoizedState=c,ot=!0),a=a.queue,Ga(Kh.bind(null,o,a,t),[t]),a.getSnapshot!==r||h||be!==null&&be.memoizedState.tag&1){if(o.flags|=2048,qi(9,qh.bind(null,o,a,c,r),void 0,null),Fe===null)throw Error(n(349));or&30||Gh(o,r,c)}return c}function Gh(t,r,o){t.flags|=16384,t={getSnapshot:r,value:o},r=we.updateQueue,r===null?(r={lastEffect:null,stores:null},we.updateQueue=r,r.stores=[t]):(o=r.stores,o===null?r.stores=[t]:o.push(t))}function qh(t,r,o,a){r.value=o,r.getSnapshot=a,Qh(r)&&Yh(t)}function Kh(t,r,o){return o(function(){Qh(r)&&Yh(t)})}function Qh(t){var r=t.getSnapshot;t=t.value;try{var o=r();return!At(t,o)}catch{return!0}}function Yh(t){var r=tn(t,1);r!==null&&Mt(r,t,1,-1)}function Xh(t){var r=Gt();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:t},r.queue=t,t=t.dispatch=Jv.bind(null,we,t),[r.memoizedState,t]}function qi(t,r,o,a){return t={tag:t,create:r,destroy:o,deps:a,next:null},r=we.updateQueue,r===null?(r={lastEffect:null,stores:null},we.updateQueue=r,r.lastEffect=t.next=t):(o=r.lastEffect,o===null?r.lastEffect=t.next=t:(a=o.next,o.next=t,t.next=a,r.lastEffect=t)),t}function Jh(){return It().memoizedState}function wo(t,r,o,a){var c=Gt();we.flags|=t,c.memoizedState=qi(1|r,o,void 0,a===void 0?null:a)}function Eo(t,r,o,a){var c=It();a=a===void 0?null:a;var h=void 0;if(xe!==null){var p=xe.memoizedState;if(h=p.destroy,a!==null&&Wa(a,p.deps)){c.memoizedState=qi(r,o,h,a);return}}we.flags|=t,c.memoizedState=qi(1|r,o,h,a)}function Zh(t,r){return wo(8390656,8,t,r)}function Ga(t,r){return Eo(2048,8,t,r)}function ef(t,r){return Eo(4,2,t,r)}function tf(t,r){return Eo(4,4,t,r)}function nf(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function rf(t,r,o){return o=o!=null?o.concat([t]):null,Eo(4,4,nf.bind(null,r,t),o)}function qa(){}function sf(t,r){var o=It();r=r===void 0?null:r;var a=o.memoizedState;return a!==null&&r!==null&&Wa(r,a[1])?a[0]:(o.memoizedState=[t,r],t)}function of(t,r){var o=It();r=r===void 0?null:r;var a=o.memoizedState;return a!==null&&r!==null&&Wa(r,a[1])?a[0]:(t=t(),o.memoizedState=[t,r],t)}function lf(t,r,o){return or&21?(At(o,r)||(o=bd(),we.lanes|=o,lr|=o,t.baseState=!0),r):(t.baseState&&(t.baseState=!1,ot=!0),t.memoizedState=o)}function Yv(t,r){var o=ae;ae=o!==0&&4>o?o:4,t(!0);var a=Ba.transition;Ba.transition={};try{t(!1),r()}finally{ae=o,Ba.transition=a}}function af(){return It().memoizedState}function Xv(t,r,o){var a=Dn(t);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},uf(t))cf(r,o);else if(o=zh(t,r,o,a),o!==null){var c=Xe();Mt(o,t,a,c),df(o,r,a)}}function Jv(t,r,o){var a=Dn(t),c={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(uf(t))cf(r,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=r.lastRenderedReducer,h!==null))try{var p=r.lastRenderedState,_=h(p,o);if(c.hasEagerState=!0,c.eagerState=_,At(_,p)){var v=r.interleaved;v===null?(c.next=c,La(r)):(c.next=v.next,v.next=c),r.interleaved=c;return}}catch{}finally{}o=zh(t,r,c,a),o!==null&&(c=Xe(),Mt(o,t,a,c),df(o,r,a))}}function uf(t){var r=t.alternate;return t===we||r!==null&&r===we}function cf(t,r){Hi=yo=!0;var o=t.pending;o===null?r.next=r:(r.next=o.next,o.next=r),t.pending=r}function df(t,r,o){if(o&4194240){var a=r.lanes;a&=t.pendingLanes,o|=a,r.lanes=o,Ql(t,o)}}var So={readContext:Ct,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},Zv={readContext:Ct,useCallback:function(t,r){return Gt().memoizedState=[t,r===void 0?null:r],t},useContext:Ct,useEffect:Zh,useImperativeHandle:function(t,r,o){return o=o!=null?o.concat([t]):null,wo(4194308,4,nf.bind(null,r,t),o)},useLayoutEffect:function(t,r){return wo(4194308,4,t,r)},useInsertionEffect:function(t,r){return wo(4,2,t,r)},useMemo:function(t,r){var o=Gt();return r=r===void 0?null:r,t=t(),o.memoizedState=[t,r],t},useReducer:function(t,r,o){var a=Gt();return r=o!==void 0?o(r):r,a.memoizedState=a.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},a.queue=t,t=t.dispatch=Xv.bind(null,we,t),[a.memoizedState,t]},useRef:function(t){var r=Gt();return t={current:t},r.memoizedState=t},useState:Xh,useDebugValue:qa,useDeferredValue:function(t){return Gt().memoizedState=t},useTransition:function(){var t=Xh(!1),r=t[0];return t=Yv.bind(null,t[1]),Gt().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,o){var a=we,c=Gt();if(ve){if(o===void 0)throw Error(n(407));o=o()}else{if(o=r(),Fe===null)throw Error(n(349));or&30||Gh(a,r,o)}c.memoizedState=o;var h={value:o,getSnapshot:r};return c.queue=h,Zh(Kh.bind(null,a,h,t),[t]),a.flags|=2048,qi(9,qh.bind(null,a,h,o,r),void 0,null),o},useId:function(){var t=Gt(),r=Fe.identifierPrefix;if(ve){var o=en,a=Zt;o=(a&~(1<<32-Pt(a)-1)).toString(32)+o,r=":"+r+"R"+o,o=$i++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=Qv++,r=":"+r+"r"+o.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},ey={readContext:Ct,useCallback:sf,useContext:Ct,useEffect:Ga,useImperativeHandle:rf,useInsertionEffect:ef,useLayoutEffect:tf,useMemo:of,useReducer:Ha,useRef:Jh,useState:function(){return Ha(Gi)},useDebugValue:qa,useDeferredValue:function(t){var r=It();return lf(r,xe.memoizedState,t)},useTransition:function(){var t=Ha(Gi)[0],r=It().memoizedState;return[t,r]},useMutableSource:Hh,useSyncExternalStore:$h,useId:af,unstable_isNewReconciler:!1},ty={readContext:Ct,useCallback:sf,useContext:Ct,useEffect:Ga,useImperativeHandle:rf,useInsertionEffect:ef,useLayoutEffect:tf,useMemo:of,useReducer:$a,useRef:Jh,useState:function(){return $a(Gi)},useDebugValue:qa,useDeferredValue:function(t){var r=It();return xe===null?r.memoizedState=t:lf(r,xe.memoizedState,t)},useTransition:function(){var t=$a(Gi)[0],r=It().memoizedState;return[t,r]},useMutableSource:Hh,useSyncExternalStore:$h,useId:af,unstable_isNewReconciler:!1};function Ot(t,r){if(t&&t.defaultProps){r=U({},r),t=t.defaultProps;for(var o in t)r[o]===void 0&&(r[o]=t[o]);return r}return r}function Ka(t,r,o,a){r=t.memoizedState,o=o(a,r),o=o==null?r:U({},r,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Co={isMounted:function(t){return(t=t._reactInternals)?Zn(t)===t:!1},enqueueSetState:function(t,r,o){t=t._reactInternals;var a=Xe(),c=Dn(t),h=nn(a,c);h.payload=r,o!=null&&(h.callback=o),r=Pn(t,h,c),r!==null&&(Mt(r,t,c,a),mo(r,t,c))},enqueueReplaceState:function(t,r,o){t=t._reactInternals;var a=Xe(),c=Dn(t),h=nn(a,c);h.tag=1,h.payload=r,o!=null&&(h.callback=o),r=Pn(t,h,c),r!==null&&(Mt(r,t,c,a),mo(r,t,c))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var o=Xe(),a=Dn(t),c=nn(o,a);c.tag=2,r!=null&&(c.callback=r),r=Pn(t,c,a),r!==null&&(Mt(r,t,a,o),mo(r,t,a))}};function hf(t,r,o,a,c,h,p){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,h,p):r.prototype&&r.prototype.isPureReactComponent?!Di(o,a)||!Di(c,h):!0}function ff(t,r,o){var a=!1,c=kn,h=r.contextType;return typeof h=="object"&&h!==null?h=Ct(h):(c=st(r)?tr:$e.current,a=r.contextTypes,h=(a=a!=null)?br(t,c):kn),r=new r(o,h),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Co,t.stateNode=r,r._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),r}function pf(t,r,o,a){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,a),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,a),r.state!==t&&Co.enqueueReplaceState(r,r.state,null)}function Qa(t,r,o,a){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},Ma(t);var h=r.contextType;typeof h=="object"&&h!==null?c.context=Ct(h):(h=st(r)?tr:$e.current,c.context=br(t,h)),c.state=t.memoizedState,h=r.getDerivedStateFromProps,typeof h=="function"&&(Ka(t,r,h,o),c.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(r=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),r!==c.state&&Co.enqueueReplaceState(c,c.state,null),go(t,o,c,a),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function Hr(t,r){try{var o="",a=r;do o+=re(a),a=a.return;while(a);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:r,stack:c,digest:null}}function Ya(t,r,o){return{value:t,source:null,stack:o??null,digest:r??null}}function Xa(t,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var ny=typeof WeakMap=="function"?WeakMap:Map;function mf(t,r,o){o=nn(-1,o),o.tag=3,o.payload={element:null};var a=r.value;return o.callback=function(){Ao||(Ao=!0,hu=a),Xa(t,r)},o}function gf(t,r,o){o=nn(-1,o),o.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var c=r.value;o.payload=function(){return a(c)},o.callback=function(){Xa(t,r)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Xa(t,r),typeof a!="function"&&(xn===null?xn=new Set([this]):xn.add(this));var p=r.stack;this.componentDidCatch(r.value,{componentStack:p!==null?p:""})}),o}function _f(t,r,o){var a=t.pingCache;if(a===null){a=t.pingCache=new ny;var c=new Set;a.set(r,c)}else c=a.get(r),c===void 0&&(c=new Set,a.set(r,c));c.has(o)||(c.add(o),t=gy.bind(null,t,r,o),r.then(t,t))}function vf(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function yf(t,r,o,a,c){return t.mode&1?(t.flags|=65536,t.lanes=c,t):(t===r?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=nn(-1,1),r.tag=2,Pn(o,r,1))),o.lanes|=1),t)}var ry=Ie.ReactCurrentOwner,ot=!1;function Ye(t,r,o,a){r.child=t===null?Uh(r,null,o,a):Br(r,t.child,o,a)}function wf(t,r,o,a,c){o=o.render;var h=r.ref;return Vr(r,c),a=Va(t,r,o,a,h,c),o=ja(),t!==null&&!ot?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~c,rn(t,r,c)):(ve&&o&&Ta(r),r.flags|=1,Ye(t,r,a,c),r.child)}function Ef(t,r,o,a,c){if(t===null){var h=o.type;return typeof h=="function"&&!yu(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=h,Sf(t,r,h,a,c)):(t=bo(o.type,null,a,r,r.mode,c),t.ref=r.ref,t.return=r,r.child=t)}if(h=t.child,!(t.lanes&c)){var p=h.memoizedProps;if(o=o.compare,o=o!==null?o:Di,o(p,a)&&t.ref===r.ref)return rn(t,r,c)}return r.flags|=1,t=Mn(h,a),t.ref=r.ref,t.return=r,r.child=t}function Sf(t,r,o,a,c){if(t!==null){var h=t.memoizedProps;if(Di(h,a)&&t.ref===r.ref)if(ot=!1,r.pendingProps=a=h,(t.lanes&c)!==0)t.flags&131072&&(ot=!0);else return r.lanes=t.lanes,rn(t,r,c)}return Ja(t,r,o,a,c)}function Cf(t,r,o){var a=r.pendingProps,c=a.children,h=t!==null?t.memoizedState:null;if(a.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(Gr,vt),vt|=o;else{if(!(o&1073741824))return t=h!==null?h.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,he(Gr,vt),vt|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=h!==null?h.baseLanes:o,he(Gr,vt),vt|=a}else h!==null?(a=h.baseLanes|o,r.memoizedState=null):a=o,he(Gr,vt),vt|=a;return Ye(t,r,c,o),r.child}function If(t,r){var o=r.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function Ja(t,r,o,a,c){var h=st(o)?tr:$e.current;return h=br(r,h),Vr(r,c),o=Va(t,r,o,a,h,c),a=ja(),t!==null&&!ot?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~c,rn(t,r,c)):(ve&&a&&Ta(r),r.flags|=1,Ye(t,r,o,c),r.child)}function Tf(t,r,o,a,c){if(st(o)){var h=!0;oo(r)}else h=!1;if(Vr(r,c),r.stateNode===null)To(t,r),ff(r,o,a),Qa(r,o,a,c),a=!0;else if(t===null){var p=r.stateNode,_=r.memoizedProps;p.props=_;var v=p.context,k=o.contextType;typeof k=="object"&&k!==null?k=Ct(k):(k=st(o)?tr:$e.current,k=br(r,k));var P=o.getDerivedStateFromProps,A=typeof P=="function"||typeof p.getSnapshotBeforeUpdate=="function";A||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(_!==a||v!==k)&&pf(r,p,a,k),Rn=!1;var N=r.memoizedState;p.state=N,go(r,a,p,c),v=r.memoizedState,_!==a||N!==v||it.current||Rn?(typeof P=="function"&&(Ka(r,o,P,a),v=r.memoizedState),(_=Rn||hf(r,o,_,a,N,v,k))?(A||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(r.flags|=4194308)):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=a,r.memoizedState=v),p.props=a,p.state=v,p.context=k,a=_):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),a=!1)}else{p=r.stateNode,Bh(t,r),_=r.memoizedProps,k=r.type===r.elementType?_:Ot(r.type,_),p.props=k,A=r.pendingProps,N=p.context,v=o.contextType,typeof v=="object"&&v!==null?v=Ct(v):(v=st(o)?tr:$e.current,v=br(r,v));var M=o.getDerivedStateFromProps;(P=typeof M=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(_!==A||N!==v)&&pf(r,p,a,v),Rn=!1,N=r.memoizedState,p.state=N,go(r,a,p,c);var z=r.memoizedState;_!==A||N!==z||it.current||Rn?(typeof M=="function"&&(Ka(r,o,M,a),z=r.memoizedState),(k=Rn||hf(r,o,k,a,N,z,v)||!1)?(P||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(a,z,v),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(a,z,v)),typeof p.componentDidUpdate=="function"&&(r.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof p.componentDidUpdate!="function"||_===t.memoizedProps&&N===t.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&N===t.memoizedState||(r.flags|=1024),r.memoizedProps=a,r.memoizedState=z),p.props=a,p.state=z,p.context=v,a=k):(typeof p.componentDidUpdate!="function"||_===t.memoizedProps&&N===t.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&N===t.memoizedState||(r.flags|=1024),a=!1)}return Za(t,r,o,a,h,c)}function Za(t,r,o,a,c,h){If(t,r);var p=(r.flags&128)!==0;if(!a&&!p)return c&&Ph(r,o,!1),rn(t,r,h);a=r.stateNode,ry.current=r;var _=p&&typeof o.getDerivedStateFromError!="function"?null:a.render();return r.flags|=1,t!==null&&p?(r.child=Br(r,t.child,null,h),r.child=Br(r,null,_,h)):Ye(t,r,_,h),r.memoizedState=a.state,c&&Ph(r,o,!0),r.child}function kf(t){var r=t.stateNode;r.pendingContext?Nh(t,r.pendingContext,r.pendingContext!==r.context):r.context&&Nh(t,r.context,!1),ba(t,r.containerInfo)}function Nf(t,r,o,a,c){return zr(),Pa(c),r.flags|=256,Ye(t,r,o,a),r.child}var eu={dehydrated:null,treeContext:null,retryLane:0};function tu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Rf(t,r,o){var a=r.pendingProps,c=ye.current,h=!1,p=(r.flags&128)!==0,_;if((_=p)||(_=t!==null&&t.memoizedState===null?!1:(c&2)!==0),_?(h=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),he(ye,c&1),t===null)return Ra(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(r.mode&1?t.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(p=a.children,t=a.fallback,h?(a=r.mode,h=r.child,p={mode:"hidden",children:p},!(a&1)&&h!==null?(h.childLanes=0,h.pendingProps=p):h=Fo(p,a,0,null),t=dr(t,a,o,null),h.return=r,t.return=r,h.sibling=t,r.child=h,r.child.memoizedState=tu(o),r.memoizedState=eu,t):nu(r,p));if(c=t.memoizedState,c!==null&&(_=c.dehydrated,_!==null))return iy(t,r,p,a,_,c,o);if(h){h=a.fallback,p=r.mode,c=t.child,_=c.sibling;var v={mode:"hidden",children:a.children};return!(p&1)&&r.child!==c?(a=r.child,a.childLanes=0,a.pendingProps=v,r.deletions=null):(a=Mn(c,v),a.subtreeFlags=c.subtreeFlags&14680064),_!==null?h=Mn(_,h):(h=dr(h,p,o,null),h.flags|=2),h.return=r,a.return=r,a.sibling=h,r.child=a,a=h,h=r.child,p=t.child.memoizedState,p=p===null?tu(o):{baseLanes:p.baseLanes|o,cachePool:null,transitions:p.transitions},h.memoizedState=p,h.childLanes=t.childLanes&~o,r.memoizedState=eu,a}return h=t.child,t=h.sibling,a=Mn(h,{mode:"visible",children:a.children}),!(r.mode&1)&&(a.lanes=o),a.return=r,a.sibling=null,t!==null&&(o=r.deletions,o===null?(r.deletions=[t],r.flags|=16):o.push(t)),r.child=a,r.memoizedState=null,a}function nu(t,r){return r=Fo({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function Io(t,r,o,a){return a!==null&&Pa(a),Br(r,t.child,null,o),t=nu(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function iy(t,r,o,a,c,h,p){if(o)return r.flags&256?(r.flags&=-257,a=Ya(Error(n(422))),Io(t,r,p,a)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(h=a.fallback,c=r.mode,a=Fo({mode:"visible",children:a.children},c,0,null),h=dr(h,c,p,null),h.flags|=2,a.return=r,h.return=r,a.sibling=h,r.child=a,r.mode&1&&Br(r,t.child,null,p),r.child.memoizedState=tu(p),r.memoizedState=eu,h);if(!(r.mode&1))return Io(t,r,p,null);if(c.data==="$!"){if(a=c.nextSibling&&c.nextSibling.dataset,a)var _=a.dgst;return a=_,h=Error(n(419)),a=Ya(h,a,void 0),Io(t,r,p,a)}if(_=(p&t.childLanes)!==0,ot||_){if(a=Fe,a!==null){switch(p&-p){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=c&(a.suspendedLanes|p)?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,tn(t,c),Mt(a,t,c,-1))}return vu(),a=Ya(Error(n(421))),Io(t,r,p,a)}return c.data==="$?"?(r.flags|=128,r.child=t.child,r=_y.bind(null,t),c._reactRetry=r,null):(t=h.treeContext,_t=In(c.nextSibling),gt=r,ve=!0,xt=null,t!==null&&(Et[St++]=Zt,Et[St++]=en,Et[St++]=nr,Zt=t.id,en=t.overflow,nr=r),r=nu(r,a.children),r.flags|=4096,r)}function Pf(t,r,o){t.lanes|=r;var a=t.alternate;a!==null&&(a.lanes|=r),Da(t.return,r,o)}function ru(t,r,o,a,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:c}:(h.isBackwards=r,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=o,h.tailMode=c)}function Af(t,r,o){var a=r.pendingProps,c=a.revealOrder,h=a.tail;if(Ye(t,r,a.children,o),a=ye.current,a&2)a=a&1|2,r.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Pf(t,o,r);else if(t.tag===19)Pf(t,o,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(he(ye,a),!(r.mode&1))r.memoizedState=null;else switch(c){case"forwards":for(o=r.child,c=null;o!==null;)t=o.alternate,t!==null&&_o(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=r.child,r.child=null):(c=o.sibling,o.sibling=null),ru(r,!1,c,o,h);break;case"backwards":for(o=null,c=r.child,r.child=null;c!==null;){if(t=c.alternate,t!==null&&_o(t)===null){r.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}ru(r,!0,o,null,h);break;case"together":ru(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function To(t,r){!(r.mode&1)&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function rn(t,r,o){if(t!==null&&(r.dependencies=t.dependencies),lr|=r.lanes,!(o&r.childLanes))return null;if(t!==null&&r.child!==t.child)throw Error(n(153));if(r.child!==null){for(t=r.child,o=Mn(t,t.pendingProps),r.child=o,o.return=r;t.sibling!==null;)t=t.sibling,o=o.sibling=Mn(t,t.pendingProps),o.return=r;o.sibling=null}return r.child}function sy(t,r,o){switch(r.tag){case 3:kf(r),zr();break;case 5:jh(r);break;case 1:st(r.type)&&oo(r);break;case 4:ba(r,r.stateNode.containerInfo);break;case 10:var a=r.type._context,c=r.memoizedProps.value;he(fo,a._currentValue),a._currentValue=c;break;case 13:if(a=r.memoizedState,a!==null)return a.dehydrated!==null?(he(ye,ye.current&1),r.flags|=128,null):o&r.child.childLanes?Rf(t,r,o):(he(ye,ye.current&1),t=rn(t,r,o),t!==null?t.sibling:null);he(ye,ye.current&1);break;case 19:if(a=(o&r.childLanes)!==0,t.flags&128){if(a)return Af(t,r,o);r.flags|=128}if(c=r.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),he(ye,ye.current),a)break;return null;case 22:case 23:return r.lanes=0,Cf(t,r,o)}return rn(t,r,o)}var xf,iu,Of,Df;xf=function(t,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},iu=function(){},Of=function(t,r,o,a){var c=t.memoizedProps;if(c!==a){t=r.stateNode,sr($t.current);var h=null;switch(o){case"input":c=Dl(t,c),a=Dl(t,a),h=[];break;case"select":c=U({},c,{value:void 0}),a=U({},a,{value:void 0}),h=[];break;case"textarea":c=bl(t,c),a=bl(t,a),h=[];break;default:typeof c.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=ro)}Ul(o,a);var p;o=null;for(k in c)if(!a.hasOwnProperty(k)&&c.hasOwnProperty(k)&&c[k]!=null)if(k==="style"){var _=c[k];for(p in _)_.hasOwnProperty(p)&&(o||(o={}),o[p]="")}else k!=="dangerouslySetInnerHTML"&&k!=="children"&&k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&k!=="autoFocus"&&(l.hasOwnProperty(k)?h||(h=[]):(h=h||[]).push(k,null));for(k in a){var v=a[k];if(_=c!=null?c[k]:void 0,a.hasOwnProperty(k)&&v!==_&&(v!=null||_!=null))if(k==="style")if(_){for(p in _)!_.hasOwnProperty(p)||v&&v.hasOwnProperty(p)||(o||(o={}),o[p]="");for(p in v)v.hasOwnProperty(p)&&_[p]!==v[p]&&(o||(o={}),o[p]=v[p])}else o||(h||(h=[]),h.push(k,o)),o=v;else k==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,_=_?_.__html:void 0,v!=null&&_!==v&&(h=h||[]).push(k,v)):k==="children"?typeof v!="string"&&typeof v!="number"||(h=h||[]).push(k,""+v):k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&(l.hasOwnProperty(k)?(v!=null&&k==="onScroll"&&pe("scroll",t),h||_===v||(h=[])):(h=h||[]).push(k,v))}o&&(h=h||[]).push("style",o);var k=h;(r.updateQueue=k)&&(r.flags|=4)}},Df=function(t,r,o,a){o!==a&&(r.flags|=4)};function Ki(t,r){if(!ve)switch(t.tailMode){case"hidden":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function qe(t){var r=t.alternate!==null&&t.alternate.child===t.child,o=0,a=0;if(r)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags&14680064,a|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags,a|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=a,t.childLanes=o,r}function oy(t,r,o){var a=r.pendingProps;switch(ka(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(r),null;case 1:return st(r.type)&&so(),qe(r),null;case 3:return a=r.stateNode,jr(),me(it),me($e),za(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(co(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,xt!==null&&(mu(xt),xt=null))),iu(t,r),qe(r),null;case 5:Fa(r);var c=sr(ji.current);if(o=r.type,t!==null&&r.stateNode!=null)Of(t,r,o,a,c),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!a){if(r.stateNode===null)throw Error(n(166));return qe(r),null}if(t=sr($t.current),co(r)){a=r.stateNode,o=r.type;var h=r.memoizedProps;switch(a[Ht]=r,a[Ui]=h,t=(r.mode&1)!==0,o){case"dialog":pe("cancel",a),pe("close",a);break;case"iframe":case"object":case"embed":pe("load",a);break;case"video":case"audio":for(c=0;c<Mi.length;c++)pe(Mi[c],a);break;case"source":pe("error",a);break;case"img":case"image":case"link":pe("error",a),pe("load",a);break;case"details":pe("toggle",a);break;case"input":hd(a,h),pe("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!h.multiple},pe("invalid",a);break;case"textarea":md(a,h),pe("invalid",a)}Ul(o,h),c=null;for(var p in h)if(h.hasOwnProperty(p)){var _=h[p];p==="children"?typeof _=="string"?a.textContent!==_&&(h.suppressHydrationWarning!==!0&&no(a.textContent,_,t),c=["children",_]):typeof _=="number"&&a.textContent!==""+_&&(h.suppressHydrationWarning!==!0&&no(a.textContent,_,t),c=["children",""+_]):l.hasOwnProperty(p)&&_!=null&&p==="onScroll"&&pe("scroll",a)}switch(o){case"input":Ds(a),pd(a,h,!0);break;case"textarea":Ds(a),_d(a);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(a.onclick=ro)}a=c,r.updateQueue=a,a!==null&&(r.flags|=4)}else{p=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=vd(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=p.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=p.createElement(o,{is:a.is}):(t=p.createElement(o),o==="select"&&(p=t,a.multiple?p.multiple=!0:a.size&&(p.size=a.size))):t=p.createElementNS(t,o),t[Ht]=r,t[Ui]=a,xf(t,r,!1,!1),r.stateNode=t;e:{switch(p=zl(o,a),o){case"dialog":pe("cancel",t),pe("close",t),c=a;break;case"iframe":case"object":case"embed":pe("load",t),c=a;break;case"video":case"audio":for(c=0;c<Mi.length;c++)pe(Mi[c],t);c=a;break;case"source":pe("error",t),c=a;break;case"img":case"image":case"link":pe("error",t),pe("load",t),c=a;break;case"details":pe("toggle",t),c=a;break;case"input":hd(t,a),c=Dl(t,a),pe("invalid",t);break;case"option":c=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},c=U({},a,{value:void 0}),pe("invalid",t);break;case"textarea":md(t,a),c=bl(t,a),pe("invalid",t);break;default:c=a}Ul(o,c),_=c;for(h in _)if(_.hasOwnProperty(h)){var v=_[h];h==="style"?Ed(t,v):h==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,v!=null&&yd(t,v)):h==="children"?typeof v=="string"?(o!=="textarea"||v!=="")&&gi(t,v):typeof v=="number"&&gi(t,""+v):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(l.hasOwnProperty(h)?v!=null&&h==="onScroll"&&pe("scroll",t):v!=null&&Pe(t,h,v,p))}switch(o){case"input":Ds(t),pd(t,a,!1);break;case"textarea":Ds(t),_d(t);break;case"option":a.value!=null&&t.setAttribute("value",""+le(a.value));break;case"select":t.multiple=!!a.multiple,h=a.value,h!=null?Ir(t,!!a.multiple,h,!1):a.defaultValue!=null&&Ir(t,!!a.multiple,a.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=ro)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return qe(r),null;case 6:if(t&&r.stateNode!=null)Df(t,r,t.memoizedProps,a);else{if(typeof a!="string"&&r.stateNode===null)throw Error(n(166));if(o=sr(ji.current),sr($t.current),co(r)){if(a=r.stateNode,o=r.memoizedProps,a[Ht]=r,(h=a.nodeValue!==o)&&(t=gt,t!==null))switch(t.tag){case 3:no(a.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&no(a.nodeValue,o,(t.mode&1)!==0)}h&&(r.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[Ht]=r,r.stateNode=a}return qe(r),null;case 13:if(me(ye),a=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ve&&_t!==null&&r.mode&1&&!(r.flags&128))Mh(),zr(),r.flags|=98560,h=!1;else if(h=co(r),a!==null&&a.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Ht]=r}else zr(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;qe(r),h=!1}else xt!==null&&(mu(xt),xt=null),h=!0;if(!h)return r.flags&65536?r:null}return r.flags&128?(r.lanes=o,r):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(r.child.flags|=8192,r.mode&1&&(t===null||ye.current&1?Oe===0&&(Oe=3):vu())),r.updateQueue!==null&&(r.flags|=4),qe(r),null);case 4:return jr(),iu(t,r),t===null&&bi(r.stateNode.containerInfo),qe(r),null;case 10:return Oa(r.type._context),qe(r),null;case 17:return st(r.type)&&so(),qe(r),null;case 19:if(me(ye),h=r.memoizedState,h===null)return qe(r),null;if(a=(r.flags&128)!==0,p=h.rendering,p===null)if(a)Ki(h,!1);else{if(Oe!==0||t!==null&&t.flags&128)for(t=r.child;t!==null;){if(p=_o(t),p!==null){for(r.flags|=128,Ki(h,!1),a=p.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),r.subtreeFlags=0,a=o,o=r.child;o!==null;)h=o,t=a,h.flags&=14680066,p=h.alternate,p===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=p.childLanes,h.lanes=p.lanes,h.child=p.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=p.memoizedProps,h.memoizedState=p.memoizedState,h.updateQueue=p.updateQueue,h.type=p.type,t=p.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return he(ye,ye.current&1|2),r.child}t=t.sibling}h.tail!==null&&Te()>qr&&(r.flags|=128,a=!0,Ki(h,!1),r.lanes=4194304)}else{if(!a)if(t=_o(p),t!==null){if(r.flags|=128,a=!0,o=t.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),Ki(h,!0),h.tail===null&&h.tailMode==="hidden"&&!p.alternate&&!ve)return qe(r),null}else 2*Te()-h.renderingStartTime>qr&&o!==1073741824&&(r.flags|=128,a=!0,Ki(h,!1),r.lanes=4194304);h.isBackwards?(p.sibling=r.child,r.child=p):(o=h.last,o!==null?o.sibling=p:r.child=p,h.last=p)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=Te(),r.sibling=null,o=ye.current,he(ye,a?o&1|2:o&1),r):(qe(r),null);case 22:case 23:return _u(),a=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(r.flags|=8192),a&&r.mode&1?vt&1073741824&&(qe(r),r.subtreeFlags&6&&(r.flags|=8192)):qe(r),null;case 24:return null;case 25:return null}throw Error(n(156,r.tag))}function ly(t,r){switch(ka(r),r.tag){case 1:return st(r.type)&&so(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return jr(),me(it),me($e),za(),t=r.flags,t&65536&&!(t&128)?(r.flags=t&-65537|128,r):null;case 5:return Fa(r),null;case 13:if(me(ye),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(n(340));zr()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return me(ye),null;case 4:return jr(),null;case 10:return Oa(r.type._context),null;case 22:case 23:return _u(),null;case 24:return null;default:return null}}var ko=!1,Ke=!1,ay=typeof WeakSet=="function"?WeakSet:Set,F=null;function $r(t,r){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){Ce(t,r,a)}else o.current=null}function su(t,r,o){try{o()}catch(a){Ce(t,r,a)}}var Lf=!1;function uy(t,r){if(_a=$s,t=dh(),ua(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var c=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var p=0,_=-1,v=-1,k=0,P=0,A=t,N=null;t:for(;;){for(var M;A!==o||c!==0&&A.nodeType!==3||(_=p+c),A!==h||a!==0&&A.nodeType!==3||(v=p+a),A.nodeType===3&&(p+=A.nodeValue.length),(M=A.firstChild)!==null;)N=A,A=M;for(;;){if(A===t)break t;if(N===o&&++k===c&&(_=p),N===h&&++P===a&&(v=p),(M=A.nextSibling)!==null)break;A=N,N=A.parentNode}A=M}o=_===-1||v===-1?null:{start:_,end:v}}else o=null}o=o||{start:0,end:0}}else o=null;for(va={focusedElem:t,selectionRange:o},$s=!1,F=r;F!==null;)if(r=F,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,F=t;else for(;F!==null;){r=F;try{var z=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(z!==null){var B=z.memoizedProps,ke=z.memoizedState,C=r.stateNode,w=C.getSnapshotBeforeUpdate(r.elementType===r.type?B:Ot(r.type,B),ke);C.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var I=r.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(x){Ce(r,r.return,x)}if(t=r.sibling,t!==null){t.return=r.return,F=t;break}F=r.return}return z=Lf,Lf=!1,z}function Qi(t,r,o){var a=r.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var c=a=a.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&su(r,o,h)}c=c.next}while(c!==a)}}function No(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&t)===t){var a=o.create;o.destroy=a()}o=o.next}while(o!==r)}}function ou(t){var r=t.ref;if(r!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof r=="function"?r(t):r.current=t}}function Mf(t){var r=t.alternate;r!==null&&(t.alternate=null,Mf(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[Ht],delete r[Ui],delete r[Sa],delete r[$v],delete r[Gv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function bf(t){return t.tag===5||t.tag===3||t.tag===4}function Ff(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||bf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function lu(t,r,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(t,r):o.insertBefore(t,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(t,o)):(r=o,r.appendChild(t)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=ro));else if(a!==4&&(t=t.child,t!==null))for(lu(t,r,o),t=t.sibling;t!==null;)lu(t,r,o),t=t.sibling}function au(t,r,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,r?o.insertBefore(t,r):o.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(au(t,r,o),t=t.sibling;t!==null;)au(t,r,o),t=t.sibling}var Ve=null,Dt=!1;function An(t,r,o){for(o=o.child;o!==null;)Uf(t,r,o),o=o.sibling}function Uf(t,r,o){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(zs,o)}catch{}switch(o.tag){case 5:Ke||$r(o,r);case 6:var a=Ve,c=Dt;Ve=null,An(t,r,o),Ve=a,Dt=c,Ve!==null&&(Dt?(t=Ve,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):Ve.removeChild(o.stateNode));break;case 18:Ve!==null&&(Dt?(t=Ve,o=o.stateNode,t.nodeType===8?Ea(t.parentNode,o):t.nodeType===1&&Ea(t,o),Ni(t)):Ea(Ve,o.stateNode));break;case 4:a=Ve,c=Dt,Ve=o.stateNode.containerInfo,Dt=!0,An(t,r,o),Ve=a,Dt=c;break;case 0:case 11:case 14:case 15:if(!Ke&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){c=a=a.next;do{var h=c,p=h.destroy;h=h.tag,p!==void 0&&(h&2||h&4)&&su(o,r,p),c=c.next}while(c!==a)}An(t,r,o);break;case 1:if(!Ke&&($r(o,r),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(_){Ce(o,r,_)}An(t,r,o);break;case 21:An(t,r,o);break;case 22:o.mode&1?(Ke=(a=Ke)||o.memoizedState!==null,An(t,r,o),Ke=a):An(t,r,o);break;default:An(t,r,o)}}function zf(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new ay),r.forEach(function(a){var c=vy.bind(null,t,a);o.has(a)||(o.add(a),a.then(c,c))})}}function Lt(t,r){var o=r.deletions;if(o!==null)for(var a=0;a<o.length;a++){var c=o[a];try{var h=t,p=r,_=p;e:for(;_!==null;){switch(_.tag){case 5:Ve=_.stateNode,Dt=!1;break e;case 3:Ve=_.stateNode.containerInfo,Dt=!0;break e;case 4:Ve=_.stateNode.containerInfo,Dt=!0;break e}_=_.return}if(Ve===null)throw Error(n(160));Uf(h,p,c),Ve=null,Dt=!1;var v=c.alternate;v!==null&&(v.return=null),c.return=null}catch(k){Ce(c,r,k)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Bf(r,t),r=r.sibling}function Bf(t,r){var o=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Lt(r,t),qt(t),a&4){try{Qi(3,t,t.return),No(3,t)}catch(B){Ce(t,t.return,B)}try{Qi(5,t,t.return)}catch(B){Ce(t,t.return,B)}}break;case 1:Lt(r,t),qt(t),a&512&&o!==null&&$r(o,o.return);break;case 5:if(Lt(r,t),qt(t),a&512&&o!==null&&$r(o,o.return),t.flags&32){var c=t.stateNode;try{gi(c,"")}catch(B){Ce(t,t.return,B)}}if(a&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,p=o!==null?o.memoizedProps:h,_=t.type,v=t.updateQueue;if(t.updateQueue=null,v!==null)try{_==="input"&&h.type==="radio"&&h.name!=null&&fd(c,h),zl(_,p);var k=zl(_,h);for(p=0;p<v.length;p+=2){var P=v[p],A=v[p+1];P==="style"?Ed(c,A):P==="dangerouslySetInnerHTML"?yd(c,A):P==="children"?gi(c,A):Pe(c,P,A,k)}switch(_){case"input":Ll(c,h);break;case"textarea":gd(c,h);break;case"select":var N=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var M=h.value;M!=null?Ir(c,!!h.multiple,M,!1):N!==!!h.multiple&&(h.defaultValue!=null?Ir(c,!!h.multiple,h.defaultValue,!0):Ir(c,!!h.multiple,h.multiple?[]:"",!1))}c[Ui]=h}catch(B){Ce(t,t.return,B)}}break;case 6:if(Lt(r,t),qt(t),a&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(B){Ce(t,t.return,B)}}break;case 3:if(Lt(r,t),qt(t),a&4&&o!==null&&o.memoizedState.isDehydrated)try{Ni(r.containerInfo)}catch(B){Ce(t,t.return,B)}break;case 4:Lt(r,t),qt(t);break;case 13:Lt(r,t),qt(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(du=Te())),a&4&&zf(t);break;case 22:if(P=o!==null&&o.memoizedState!==null,t.mode&1?(Ke=(k=Ke)||P,Lt(r,t),Ke=k):Lt(r,t),qt(t),a&8192){if(k=t.memoizedState!==null,(t.stateNode.isHidden=k)&&!P&&t.mode&1)for(F=t,P=t.child;P!==null;){for(A=F=P;F!==null;){switch(N=F,M=N.child,N.tag){case 0:case 11:case 14:case 15:Qi(4,N,N.return);break;case 1:$r(N,N.return);var z=N.stateNode;if(typeof z.componentWillUnmount=="function"){a=N,o=N.return;try{r=a,z.props=r.memoizedProps,z.state=r.memoizedState,z.componentWillUnmount()}catch(B){Ce(a,o,B)}}break;case 5:$r(N,N.return);break;case 22:if(N.memoizedState!==null){jf(A);continue}}M!==null?(M.return=N,F=M):jf(A)}P=P.sibling}e:for(P=null,A=t;;){if(A.tag===5){if(P===null){P=A;try{c=A.stateNode,k?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(_=A.stateNode,v=A.memoizedProps.style,p=v!=null&&v.hasOwnProperty("display")?v.display:null,_.style.display=wd("display",p))}catch(B){Ce(t,t.return,B)}}}else if(A.tag===6){if(P===null)try{A.stateNode.nodeValue=k?"":A.memoizedProps}catch(B){Ce(t,t.return,B)}}else if((A.tag!==22&&A.tag!==23||A.memoizedState===null||A===t)&&A.child!==null){A.child.return=A,A=A.child;continue}if(A===t)break e;for(;A.sibling===null;){if(A.return===null||A.return===t)break e;P===A&&(P=null),A=A.return}P===A&&(P=null),A.sibling.return=A.return,A=A.sibling}}break;case 19:Lt(r,t),qt(t),a&4&&zf(t);break;case 21:break;default:Lt(r,t),qt(t)}}function qt(t){var r=t.flags;if(r&2){try{e:{for(var o=t.return;o!==null;){if(bf(o)){var a=o;break e}o=o.return}throw Error(n(160))}switch(a.tag){case 5:var c=a.stateNode;a.flags&32&&(gi(c,""),a.flags&=-33);var h=Ff(t);au(t,h,c);break;case 3:case 4:var p=a.stateNode.containerInfo,_=Ff(t);lu(t,_,p);break;default:throw Error(n(161))}}catch(v){Ce(t,t.return,v)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function cy(t,r,o){F=t,Wf(t)}function Wf(t,r,o){for(var a=(t.mode&1)!==0;F!==null;){var c=F,h=c.child;if(c.tag===22&&a){var p=c.memoizedState!==null||ko;if(!p){var _=c.alternate,v=_!==null&&_.memoizedState!==null||Ke;_=ko;var k=Ke;if(ko=p,(Ke=v)&&!k)for(F=c;F!==null;)p=F,v=p.child,p.tag===22&&p.memoizedState!==null?Hf(c):v!==null?(v.return=p,F=v):Hf(c);for(;h!==null;)F=h,Wf(h),h=h.sibling;F=c,ko=_,Ke=k}Vf(t)}else c.subtreeFlags&8772&&h!==null?(h.return=c,F=h):Vf(t)}}function Vf(t){for(;F!==null;){var r=F;if(r.flags&8772){var o=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Ke||No(5,r);break;case 1:var a=r.stateNode;if(r.flags&4&&!Ke)if(o===null)a.componentDidMount();else{var c=r.elementType===r.type?o.memoizedProps:Ot(r.type,o.memoizedProps);a.componentDidUpdate(c,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var h=r.updateQueue;h!==null&&Vh(r,h,a);break;case 3:var p=r.updateQueue;if(p!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}Vh(r,p,o)}break;case 5:var _=r.stateNode;if(o===null&&r.flags&4){o=_;var v=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":v.autoFocus&&o.focus();break;case"img":v.src&&(o.src=v.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var k=r.alternate;if(k!==null){var P=k.memoizedState;if(P!==null){var A=P.dehydrated;A!==null&&Ni(A)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Ke||r.flags&512&&ou(r)}catch(N){Ce(r,r.return,N)}}if(r===t){F=null;break}if(o=r.sibling,o!==null){o.return=r.return,F=o;break}F=r.return}}function jf(t){for(;F!==null;){var r=F;if(r===t){F=null;break}var o=r.sibling;if(o!==null){o.return=r.return,F=o;break}F=r.return}}function Hf(t){for(;F!==null;){var r=F;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{No(4,r)}catch(v){Ce(r,o,v)}break;case 1:var a=r.stateNode;if(typeof a.componentDidMount=="function"){var c=r.return;try{a.componentDidMount()}catch(v){Ce(r,c,v)}}var h=r.return;try{ou(r)}catch(v){Ce(r,h,v)}break;case 5:var p=r.return;try{ou(r)}catch(v){Ce(r,p,v)}}}catch(v){Ce(r,r.return,v)}if(r===t){F=null;break}var _=r.sibling;if(_!==null){_.return=r.return,F=_;break}F=r.return}}var dy=Math.ceil,Ro=Ie.ReactCurrentDispatcher,uu=Ie.ReactCurrentOwner,Tt=Ie.ReactCurrentBatchConfig,ne=0,Fe=null,Ne=null,je=0,vt=0,Gr=Tn(0),Oe=0,Yi=null,lr=0,Po=0,cu=0,Xi=null,lt=null,du=0,qr=1/0,sn=null,Ao=!1,hu=null,xn=null,xo=!1,On=null,Oo=0,Ji=0,fu=null,Do=-1,Lo=0;function Xe(){return ne&6?Te():Do!==-1?Do:Do=Te()}function Dn(t){return t.mode&1?ne&2&&je!==0?je&-je:Kv.transition!==null?(Lo===0&&(Lo=bd()),Lo):(t=ae,t!==0||(t=window.event,t=t===void 0?16:$d(t.type)),t):1}function Mt(t,r,o,a){if(50<Ji)throw Ji=0,fu=null,Error(n(185));Si(t,o,a),(!(ne&2)||t!==Fe)&&(t===Fe&&(!(ne&2)&&(Po|=o),Oe===4&&Ln(t,je)),at(t,a),o===1&&ne===0&&!(r.mode&1)&&(qr=Te()+500,lo&&Nn()))}function at(t,r){var o=t.callbackNode;K_(t,r);var a=Vs(t,t===Fe?je:0);if(a===0)o!==null&&Dd(o),t.callbackNode=null,t.callbackPriority=0;else if(r=a&-a,t.callbackPriority!==r){if(o!=null&&Dd(o),r===1)t.tag===0?qv(Gf.bind(null,t)):Ah(Gf.bind(null,t)),jv(function(){!(ne&6)&&Nn()}),o=null;else{switch(Fd(a)){case 1:o=Gl;break;case 4:o=Ld;break;case 16:o=Us;break;case 536870912:o=Md;break;default:o=Us}o=ep(o,$f.bind(null,t))}t.callbackPriority=r,t.callbackNode=o}}function $f(t,r){if(Do=-1,Lo=0,ne&6)throw Error(n(327));var o=t.callbackNode;if(Kr()&&t.callbackNode!==o)return null;var a=Vs(t,t===Fe?je:0);if(a===0)return null;if(a&30||a&t.expiredLanes||r)r=Mo(t,a);else{r=a;var c=ne;ne|=2;var h=Kf();(Fe!==t||je!==r)&&(sn=null,qr=Te()+500,ur(t,r));do try{py();break}catch(_){qf(t,_)}while(!0);xa(),Ro.current=h,ne=c,Ne!==null?r=0:(Fe=null,je=0,r=Oe)}if(r!==0){if(r===2&&(c=ql(t),c!==0&&(a=c,r=pu(t,c))),r===1)throw o=Yi,ur(t,0),Ln(t,a),at(t,Te()),o;if(r===6)Ln(t,a);else{if(c=t.current.alternate,!(a&30)&&!hy(c)&&(r=Mo(t,a),r===2&&(h=ql(t),h!==0&&(a=h,r=pu(t,h))),r===1))throw o=Yi,ur(t,0),Ln(t,a),at(t,Te()),o;switch(t.finishedWork=c,t.finishedLanes=a,r){case 0:case 1:throw Error(n(345));case 2:cr(t,lt,sn);break;case 3:if(Ln(t,a),(a&130023424)===a&&(r=du+500-Te(),10<r)){if(Vs(t,0)!==0)break;if(c=t.suspendedLanes,(c&a)!==a){Xe(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=wa(cr.bind(null,t,lt,sn),r);break}cr(t,lt,sn);break;case 4:if(Ln(t,a),(a&4194240)===a)break;for(r=t.eventTimes,c=-1;0<a;){var p=31-Pt(a);h=1<<p,p=r[p],p>c&&(c=p),a&=~h}if(a=c,a=Te()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*dy(a/1960))-a,10<a){t.timeoutHandle=wa(cr.bind(null,t,lt,sn),a);break}cr(t,lt,sn);break;case 5:cr(t,lt,sn);break;default:throw Error(n(329))}}}return at(t,Te()),t.callbackNode===o?$f.bind(null,t):null}function pu(t,r){var o=Xi;return t.current.memoizedState.isDehydrated&&(ur(t,r).flags|=256),t=Mo(t,r),t!==2&&(r=lt,lt=o,r!==null&&mu(r)),t}function mu(t){lt===null?lt=t:lt.push.apply(lt,t)}function hy(t){for(var r=t;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var c=o[a],h=c.getSnapshot;c=c.value;try{if(!At(h(),c))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Ln(t,r){for(r&=~cu,r&=~Po,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var o=31-Pt(r),a=1<<o;t[o]=-1,r&=~a}}function Gf(t){if(ne&6)throw Error(n(327));Kr();var r=Vs(t,0);if(!(r&1))return at(t,Te()),null;var o=Mo(t,r);if(t.tag!==0&&o===2){var a=ql(t);a!==0&&(r=a,o=pu(t,a))}if(o===1)throw o=Yi,ur(t,0),Ln(t,r),at(t,Te()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,cr(t,lt,sn),at(t,Te()),null}function gu(t,r){var o=ne;ne|=1;try{return t(r)}finally{ne=o,ne===0&&(qr=Te()+500,lo&&Nn())}}function ar(t){On!==null&&On.tag===0&&!(ne&6)&&Kr();var r=ne;ne|=1;var o=Tt.transition,a=ae;try{if(Tt.transition=null,ae=1,t)return t()}finally{ae=a,Tt.transition=o,ne=r,!(ne&6)&&Nn()}}function _u(){vt=Gr.current,me(Gr)}function ur(t,r){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Vv(o)),Ne!==null)for(o=Ne.return;o!==null;){var a=o;switch(ka(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&so();break;case 3:jr(),me(it),me($e),za();break;case 5:Fa(a);break;case 4:jr();break;case 13:me(ye);break;case 19:me(ye);break;case 10:Oa(a.type._context);break;case 22:case 23:_u()}o=o.return}if(Fe=t,Ne=t=Mn(t.current,null),je=vt=r,Oe=0,Yi=null,cu=Po=lr=0,lt=Xi=null,ir!==null){for(r=0;r<ir.length;r++)if(o=ir[r],a=o.interleaved,a!==null){o.interleaved=null;var c=a.next,h=o.pending;if(h!==null){var p=h.next;h.next=c,a.next=p}o.pending=a}ir=null}return t}function qf(t,r){do{var o=Ne;try{if(xa(),vo.current=So,yo){for(var a=we.memoizedState;a!==null;){var c=a.queue;c!==null&&(c.pending=null),a=a.next}yo=!1}if(or=0,be=xe=we=null,Hi=!1,$i=0,uu.current=null,o===null||o.return===null){Oe=1,Yi=r,Ne=null;break}e:{var h=t,p=o.return,_=o,v=r;if(r=je,_.flags|=32768,v!==null&&typeof v=="object"&&typeof v.then=="function"){var k=v,P=_,A=P.tag;if(!(P.mode&1)&&(A===0||A===11||A===15)){var N=P.alternate;N?(P.updateQueue=N.updateQueue,P.memoizedState=N.memoizedState,P.lanes=N.lanes):(P.updateQueue=null,P.memoizedState=null)}var M=vf(p);if(M!==null){M.flags&=-257,yf(M,p,_,h,r),M.mode&1&&_f(h,k,r),r=M,v=k;var z=r.updateQueue;if(z===null){var B=new Set;B.add(v),r.updateQueue=B}else z.add(v);break e}else{if(!(r&1)){_f(h,k,r),vu();break e}v=Error(n(426))}}else if(ve&&_.mode&1){var ke=vf(p);if(ke!==null){!(ke.flags&65536)&&(ke.flags|=256),yf(ke,p,_,h,r),Pa(Hr(v,_));break e}}h=v=Hr(v,_),Oe!==4&&(Oe=2),Xi===null?Xi=[h]:Xi.push(h),h=p;do{switch(h.tag){case 3:h.flags|=65536,r&=-r,h.lanes|=r;var C=mf(h,v,r);Wh(h,C);break e;case 1:_=v;var w=h.type,I=h.stateNode;if(!(h.flags&128)&&(typeof w.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(xn===null||!xn.has(I)))){h.flags|=65536,r&=-r,h.lanes|=r;var x=gf(h,_,r);Wh(h,x);break e}}h=h.return}while(h!==null)}Yf(o)}catch(W){r=W,Ne===o&&o!==null&&(Ne=o=o.return);continue}break}while(!0)}function Kf(){var t=Ro.current;return Ro.current=So,t===null?So:t}function vu(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),Fe===null||!(lr&268435455)&&!(Po&268435455)||Ln(Fe,je)}function Mo(t,r){var o=ne;ne|=2;var a=Kf();(Fe!==t||je!==r)&&(sn=null,ur(t,r));do try{fy();break}catch(c){qf(t,c)}while(!0);if(xa(),ne=o,Ro.current=a,Ne!==null)throw Error(n(261));return Fe=null,je=0,Oe}function fy(){for(;Ne!==null;)Qf(Ne)}function py(){for(;Ne!==null&&!z_();)Qf(Ne)}function Qf(t){var r=Zf(t.alternate,t,vt);t.memoizedProps=t.pendingProps,r===null?Yf(t):Ne=r,uu.current=null}function Yf(t){var r=t;do{var o=r.alternate;if(t=r.return,r.flags&32768){if(o=ly(o,r),o!==null){o.flags&=32767,Ne=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Oe=6,Ne=null;return}}else if(o=oy(o,r,vt),o!==null){Ne=o;return}if(r=r.sibling,r!==null){Ne=r;return}Ne=r=t}while(r!==null);Oe===0&&(Oe=5)}function cr(t,r,o){var a=ae,c=Tt.transition;try{Tt.transition=null,ae=1,my(t,r,o,a)}finally{Tt.transition=c,ae=a}return null}function my(t,r,o,a){do Kr();while(On!==null);if(ne&6)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(Q_(t,h),t===Fe&&(Ne=Fe=null,je=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||xo||(xo=!0,ep(Us,function(){return Kr(),null})),h=(o.flags&15990)!==0,o.subtreeFlags&15990||h){h=Tt.transition,Tt.transition=null;var p=ae;ae=1;var _=ne;ne|=4,uu.current=null,uy(t,o),Bf(o,t),Mv(va),$s=!!_a,va=_a=null,t.current=o,cy(o),B_(),ne=_,ae=p,Tt.transition=h}else t.current=o;if(xo&&(xo=!1,On=t,Oo=c),h=t.pendingLanes,h===0&&(xn=null),j_(o.stateNode),at(t,Te()),r!==null)for(a=t.onRecoverableError,o=0;o<r.length;o++)c=r[o],a(c.value,{componentStack:c.stack,digest:c.digest});if(Ao)throw Ao=!1,t=hu,hu=null,t;return Oo&1&&t.tag!==0&&Kr(),h=t.pendingLanes,h&1?t===fu?Ji++:(Ji=0,fu=t):Ji=0,Nn(),null}function Kr(){if(On!==null){var t=Fd(Oo),r=Tt.transition,o=ae;try{if(Tt.transition=null,ae=16>t?16:t,On===null)var a=!1;else{if(t=On,On=null,Oo=0,ne&6)throw Error(n(331));var c=ne;for(ne|=4,F=t.current;F!==null;){var h=F,p=h.child;if(F.flags&16){var _=h.deletions;if(_!==null){for(var v=0;v<_.length;v++){var k=_[v];for(F=k;F!==null;){var P=F;switch(P.tag){case 0:case 11:case 15:Qi(8,P,h)}var A=P.child;if(A!==null)A.return=P,F=A;else for(;F!==null;){P=F;var N=P.sibling,M=P.return;if(Mf(P),P===k){F=null;break}if(N!==null){N.return=M,F=N;break}F=M}}}var z=h.alternate;if(z!==null){var B=z.child;if(B!==null){z.child=null;do{var ke=B.sibling;B.sibling=null,B=ke}while(B!==null)}}F=h}}if(h.subtreeFlags&2064&&p!==null)p.return=h,F=p;else e:for(;F!==null;){if(h=F,h.flags&2048)switch(h.tag){case 0:case 11:case 15:Qi(9,h,h.return)}var C=h.sibling;if(C!==null){C.return=h.return,F=C;break e}F=h.return}}var w=t.current;for(F=w;F!==null;){p=F;var I=p.child;if(p.subtreeFlags&2064&&I!==null)I.return=p,F=I;else e:for(p=w;F!==null;){if(_=F,_.flags&2048)try{switch(_.tag){case 0:case 11:case 15:No(9,_)}}catch(W){Ce(_,_.return,W)}if(_===p){F=null;break e}var x=_.sibling;if(x!==null){x.return=_.return,F=x;break e}F=_.return}}if(ne=c,Nn(),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(zs,t)}catch{}a=!0}return a}finally{ae=o,Tt.transition=r}}return!1}function Xf(t,r,o){r=Hr(o,r),r=mf(t,r,1),t=Pn(t,r,1),r=Xe(),t!==null&&(Si(t,1,r),at(t,r))}function Ce(t,r,o){if(t.tag===3)Xf(t,t,o);else for(;r!==null;){if(r.tag===3){Xf(r,t,o);break}else if(r.tag===1){var a=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(xn===null||!xn.has(a))){t=Hr(o,t),t=gf(r,t,1),r=Pn(r,t,1),t=Xe(),r!==null&&(Si(r,1,t),at(r,t));break}}r=r.return}}function gy(t,r,o){var a=t.pingCache;a!==null&&a.delete(r),r=Xe(),t.pingedLanes|=t.suspendedLanes&o,Fe===t&&(je&o)===o&&(Oe===4||Oe===3&&(je&130023424)===je&&500>Te()-du?ur(t,0):cu|=o),at(t,r)}function Jf(t,r){r===0&&(t.mode&1?(r=Ws,Ws<<=1,!(Ws&130023424)&&(Ws=4194304)):r=1);var o=Xe();t=tn(t,r),t!==null&&(Si(t,r,o),at(t,o))}function _y(t){var r=t.memoizedState,o=0;r!==null&&(o=r.retryLane),Jf(t,o)}function vy(t,r){var o=0;switch(t.tag){case 13:var a=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(n(314))}a!==null&&a.delete(r),Jf(t,o)}var Zf;Zf=function(t,r,o){if(t!==null)if(t.memoizedProps!==r.pendingProps||it.current)ot=!0;else{if(!(t.lanes&o)&&!(r.flags&128))return ot=!1,sy(t,r,o);ot=!!(t.flags&131072)}else ot=!1,ve&&r.flags&1048576&&xh(r,uo,r.index);switch(r.lanes=0,r.tag){case 2:var a=r.type;To(t,r),t=r.pendingProps;var c=br(r,$e.current);Vr(r,o),c=Va(null,r,a,t,c,o);var h=ja();return r.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,st(a)?(h=!0,oo(r)):h=!1,r.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Ma(r),c.updater=Co,r.stateNode=c,c._reactInternals=r,Qa(r,a,t,o),r=Za(null,r,a,!0,h,o)):(r.tag=0,ve&&h&&Ta(r),Ye(null,r,c,o),r=r.child),r;case 16:a=r.elementType;e:{switch(To(t,r),t=r.pendingProps,c=a._init,a=c(a._payload),r.type=a,c=r.tag=wy(a),t=Ot(a,t),c){case 0:r=Ja(null,r,a,t,o);break e;case 1:r=Tf(null,r,a,t,o);break e;case 11:r=wf(null,r,a,t,o);break e;case 14:r=Ef(null,r,a,Ot(a.type,t),o);break e}throw Error(n(306,a,""))}return r;case 0:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:Ot(a,c),Ja(t,r,a,c,o);case 1:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:Ot(a,c),Tf(t,r,a,c,o);case 3:e:{if(kf(r),t===null)throw Error(n(387));a=r.pendingProps,h=r.memoizedState,c=h.element,Bh(t,r),go(r,a,null,o);var p=r.memoizedState;if(a=p.element,h.isDehydrated)if(h={element:a,isDehydrated:!1,cache:p.cache,pendingSuspenseBoundaries:p.pendingSuspenseBoundaries,transitions:p.transitions},r.updateQueue.baseState=h,r.memoizedState=h,r.flags&256){c=Hr(Error(n(423)),r),r=Nf(t,r,a,o,c);break e}else if(a!==c){c=Hr(Error(n(424)),r),r=Nf(t,r,a,o,c);break e}else for(_t=In(r.stateNode.containerInfo.firstChild),gt=r,ve=!0,xt=null,o=Uh(r,null,a,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(zr(),a===c){r=rn(t,r,o);break e}Ye(t,r,a,o)}r=r.child}return r;case 5:return jh(r),t===null&&Ra(r),a=r.type,c=r.pendingProps,h=t!==null?t.memoizedProps:null,p=c.children,ya(a,c)?p=null:h!==null&&ya(a,h)&&(r.flags|=32),If(t,r),Ye(t,r,p,o),r.child;case 6:return t===null&&Ra(r),null;case 13:return Rf(t,r,o);case 4:return ba(r,r.stateNode.containerInfo),a=r.pendingProps,t===null?r.child=Br(r,null,a,o):Ye(t,r,a,o),r.child;case 11:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:Ot(a,c),wf(t,r,a,c,o);case 7:return Ye(t,r,r.pendingProps,o),r.child;case 8:return Ye(t,r,r.pendingProps.children,o),r.child;case 12:return Ye(t,r,r.pendingProps.children,o),r.child;case 10:e:{if(a=r.type._context,c=r.pendingProps,h=r.memoizedProps,p=c.value,he(fo,a._currentValue),a._currentValue=p,h!==null)if(At(h.value,p)){if(h.children===c.children&&!it.current){r=rn(t,r,o);break e}}else for(h=r.child,h!==null&&(h.return=r);h!==null;){var _=h.dependencies;if(_!==null){p=h.child;for(var v=_.firstContext;v!==null;){if(v.context===a){if(h.tag===1){v=nn(-1,o&-o),v.tag=2;var k=h.updateQueue;if(k!==null){k=k.shared;var P=k.pending;P===null?v.next=v:(v.next=P.next,P.next=v),k.pending=v}}h.lanes|=o,v=h.alternate,v!==null&&(v.lanes|=o),Da(h.return,o,r),_.lanes|=o;break}v=v.next}}else if(h.tag===10)p=h.type===r.type?null:h.child;else if(h.tag===18){if(p=h.return,p===null)throw Error(n(341));p.lanes|=o,_=p.alternate,_!==null&&(_.lanes|=o),Da(p,o,r),p=h.sibling}else p=h.child;if(p!==null)p.return=h;else for(p=h;p!==null;){if(p===r){p=null;break}if(h=p.sibling,h!==null){h.return=p.return,p=h;break}p=p.return}h=p}Ye(t,r,c.children,o),r=r.child}return r;case 9:return c=r.type,a=r.pendingProps.children,Vr(r,o),c=Ct(c),a=a(c),r.flags|=1,Ye(t,r,a,o),r.child;case 14:return a=r.type,c=Ot(a,r.pendingProps),c=Ot(a.type,c),Ef(t,r,a,c,o);case 15:return Sf(t,r,r.type,r.pendingProps,o);case 17:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:Ot(a,c),To(t,r),r.tag=1,st(a)?(t=!0,oo(r)):t=!1,Vr(r,o),ff(r,a,c),Qa(r,a,c,o),Za(null,r,a,!0,t,o);case 19:return Af(t,r,o);case 22:return Cf(t,r,o)}throw Error(n(156,r.tag))};function ep(t,r){return Od(t,r)}function yy(t,r,o,a){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(t,r,o,a){return new yy(t,r,o,a)}function yu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function wy(t){if(typeof t=="function")return yu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wt)return 11;if(t===Vt)return 14}return 2}function Mn(t,r){var o=t.alternate;return o===null?(o=kt(t.tag,r,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=r,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,r=t.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function bo(t,r,o,a,c,h){var p=2;if(a=t,typeof t=="function")yu(t)&&(p=1);else if(typeof t=="string")p=5;else e:switch(t){case We:return dr(o.children,c,h,r);case nt:p=8,c|=8;break;case wt:return t=kt(12,o,r,c|2),t.elementType=wt,t.lanes=h,t;case ft:return t=kt(13,o,r,c),t.elementType=ft,t.lanes=h,t;case Rt:return t=kt(19,o,r,c),t.elementType=Rt,t.lanes=h,t;case Se:return Fo(o,c,h,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Nt:p=10;break e;case Jn:p=9;break e;case Wt:p=11;break e;case Vt:p=14;break e;case rt:p=16,a=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return r=kt(p,o,r,c),r.elementType=t,r.type=a,r.lanes=h,r}function dr(t,r,o,a){return t=kt(7,t,a,r),t.lanes=o,t}function Fo(t,r,o,a){return t=kt(22,t,a,r),t.elementType=Se,t.lanes=o,t.stateNode={isHidden:!1},t}function wu(t,r,o){return t=kt(6,t,null,r),t.lanes=o,t}function Eu(t,r,o){return r=kt(4,t.children!==null?t.children:[],t.key,r),r.lanes=o,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function Ey(t,r,o,a,c){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kl(0),this.expirationTimes=Kl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kl(0),this.identifierPrefix=a,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function Su(t,r,o,a,c,h,p,_,v){return t=new Ey(t,r,o,_,v),r===1?(r=1,h===!0&&(r|=8)):r=0,h=kt(3,null,null,r),t.current=h,h.stateNode=t,h.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ma(h),t}function Sy(t,r,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ae,key:a==null?null:""+a,children:t,containerInfo:r,implementation:o}}function tp(t){if(!t)return kn;t=t._reactInternals;e:{if(Zn(t)!==t||t.tag!==1)throw Error(n(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(st(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(st(o))return Rh(t,o,r)}return r}function np(t,r,o,a,c,h,p,_,v){return t=Su(o,a,!0,t,c,h,p,_,v),t.context=tp(null),o=t.current,a=Xe(),c=Dn(o),h=nn(a,c),h.callback=r??null,Pn(o,h,c),t.current.lanes=c,Si(t,c,a),at(t,a),t}function Uo(t,r,o,a){var c=r.current,h=Xe(),p=Dn(c);return o=tp(o),r.context===null?r.context=o:r.pendingContext=o,r=nn(h,p),r.payload={element:t},a=a===void 0?null:a,a!==null&&(r.callback=a),t=Pn(c,r,p),t!==null&&(Mt(t,c,p,h),mo(t,c,p)),p}function zo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function rp(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<r?o:r}}function Cu(t,r){rp(t,r),(t=t.alternate)&&rp(t,r)}function Cy(){return null}var ip=typeof reportError=="function"?reportError:function(t){console.error(t)};function Iu(t){this._internalRoot=t}Bo.prototype.render=Iu.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(n(409));Uo(t,r,null,null)},Bo.prototype.unmount=Iu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;ar(function(){Uo(null,t,null,null)}),r[Xt]=null}};function Bo(t){this._internalRoot=t}Bo.prototype.unstable_scheduleHydration=function(t){if(t){var r=Bd();t={blockedOn:null,target:t,priority:r};for(var o=0;o<En.length&&r!==0&&r<En[o].priority;o++);En.splice(o,0,t),o===0&&jd(t)}};function Tu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function sp(){}function Iy(t,r,o,a,c){if(c){if(typeof a=="function"){var h=a;a=function(){var k=zo(p);h.call(k)}}var p=np(r,a,t,0,null,!1,!1,"",sp);return t._reactRootContainer=p,t[Xt]=p.current,bi(t.nodeType===8?t.parentNode:t),ar(),p}for(;c=t.lastChild;)t.removeChild(c);if(typeof a=="function"){var _=a;a=function(){var k=zo(v);_.call(k)}}var v=Su(t,0,!1,null,null,!1,!1,"",sp);return t._reactRootContainer=v,t[Xt]=v.current,bi(t.nodeType===8?t.parentNode:t),ar(function(){Uo(r,v,o,a)}),v}function Vo(t,r,o,a,c){var h=o._reactRootContainer;if(h){var p=h;if(typeof c=="function"){var _=c;c=function(){var v=zo(p);_.call(v)}}Uo(r,p,t,c)}else p=Iy(o,r,t,c,a);return zo(p)}Ud=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var o=Ei(r.pendingLanes);o!==0&&(Ql(r,o|1),at(r,Te()),!(ne&6)&&(qr=Te()+500,Nn()))}break;case 13:ar(function(){var a=tn(t,1);if(a!==null){var c=Xe();Mt(a,t,1,c)}}),Cu(t,1)}},Yl=function(t){if(t.tag===13){var r=tn(t,134217728);if(r!==null){var o=Xe();Mt(r,t,134217728,o)}Cu(t,134217728)}},zd=function(t){if(t.tag===13){var r=Dn(t),o=tn(t,r);if(o!==null){var a=Xe();Mt(o,t,r,a)}Cu(t,r)}},Bd=function(){return ae},Wd=function(t,r){var o=ae;try{return ae=t,r()}finally{ae=o}},Vl=function(t,r,o){switch(r){case"input":if(Ll(t,o),r=o.name,o.type==="radio"&&r!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var a=o[r];if(a!==t&&a.form===t.form){var c=io(a);if(!c)throw Error(n(90));dd(a),Ll(a,c)}}}break;case"textarea":gd(t,o);break;case"select":r=o.value,r!=null&&Ir(t,!!o.multiple,r,!1)}},Td=gu,kd=ar;var Ty={usingClientEntryPoint:!1,Events:[zi,Lr,io,Cd,Id,gu]},Zi={findFiberByHostInstance:er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ky={bundleType:Zi.bundleType,version:Zi.version,rendererPackageName:Zi.rendererPackageName,rendererConfig:Zi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ie.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ad(t),t===null?null:t.stateNode},findFiberByHostInstance:Zi.findFiberByHostInstance||Cy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jo.isDisabled&&jo.supportsFiber)try{zs=jo.inject(ky),jt=jo}catch{}}return ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ty,ut.createPortal=function(t,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tu(r))throw Error(n(200));return Sy(t,r,null,o)},ut.createRoot=function(t,r){if(!Tu(t))throw Error(n(299));var o=!1,a="",c=ip;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(c=r.onRecoverableError)),r=Su(t,1,!1,null,null,o,!1,a,c),t[Xt]=r.current,bi(t.nodeType===8?t.parentNode:t),new Iu(r)},ut.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Ad(r),t=t===null?null:t.stateNode,t},ut.flushSync=function(t){return ar(t)},ut.hydrate=function(t,r,o){if(!Wo(r))throw Error(n(200));return Vo(null,t,r,!0,o)},ut.hydrateRoot=function(t,r,o){if(!Tu(t))throw Error(n(405));var a=o!=null&&o.hydratedSources||null,c=!1,h="",p=ip;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(p=o.onRecoverableError)),r=np(r,null,t,1,o??null,c,!1,h,p),t[Xt]=r.current,bi(t),a)for(t=0;t<a.length;t++)o=a[t],c=o._getVersion,c=c(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,c]:r.mutableSourceEagerHydrationData.push(o,c);return new Bo(r)},ut.render=function(t,r,o){if(!Wo(r))throw Error(n(200));return Vo(null,t,r,!1,o)},ut.unmountComponentAtNode=function(t){if(!Wo(t))throw Error(n(40));return t._reactRootContainer?(ar(function(){Vo(null,null,t,!1,function(){t._reactRootContainer=null,t[Xt]=null})}),!0):!1},ut.unstable_batchedUpdates=gu,ut.unstable_renderSubtreeIntoContainer=function(t,r,o,a){if(!Wo(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Vo(t,r,o,!1,a)},ut.version="18.3.1-next-f1338f8080-20240426",ut}var fp;function Ly(){if(fp)return Ru.exports;fp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Ru.exports=Dy(),Ru.exports}var pp;function My(){if(pp)return Ho;pp=1;var i=Ly();return Ho.createRoot=i.createRoot,Ho.hydrateRoot=i.hydrateRoot,Ho}var by=My(),mp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=function(i,e){if(!i)throw ai(e)},ai=function(i){return new Error("Firebase Database ("+Cm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let l=i.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(i.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},Fy=function(i){const e=[];let n=0,s=0;for(;n<i.length;){const l=i[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const u=i[n++];e[s++]=String.fromCharCode((l&31)<<6|u&63)}else if(l>239&&l<365){const u=i[n++],d=i[n++],f=i[n++],m=((l&7)<<18|(u&63)<<12|(d&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(m>>10)),e[s++]=String.fromCharCode(56320+(m&1023))}else{const u=i[n++],d=i[n++];e[s++]=String.fromCharCode((l&15)<<12|(u&63)<<6|d&63)}}return e.join("")},fc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<i.length;l+=3){const u=i[l],d=l+1<i.length,f=d?i[l+1]:0,m=l+2<i.length,g=m?i[l+2]:0,E=u>>2,y=(u&3)<<4|f>>4;let T=(f&15)<<2|g>>6,D=g&63;m||(D=64,d||(T=64)),s.push(n[E],n[y],n[T],n[D])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Im(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Fy(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<i.length;){const u=n[i.charAt(l++)],f=l<i.length?n[i.charAt(l)]:0;++l;const g=l<i.length?n[i.charAt(l)]:64;++l;const y=l<i.length?n[i.charAt(l)]:64;if(++l,u==null||f==null||g==null||y==null)throw new Uy;const T=u<<2|f>>4;if(s.push(T),g!==64){const D=f<<4&240|g>>2;if(s.push(D),y!==64){const b=g<<6&192|y;s.push(b)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Uy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Tm=function(i){const e=Im(i);return fc.encodeByteArray(e,!0)},Zo=function(i){return Tm(i).replace(/\./g,"")},el=function(i){try{return fc.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(i){return km(void 0,i)}function km(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!By(n)||(i[n]=km(i[n],e[n]));return i}function By(i){return i!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy=()=>Wy().__FIREBASE_DEFAULTS__,jy=()=>{if(typeof process>"u"||typeof mp>"u")return;const i=mp.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Hy=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&el(i[1]);return e&&JSON.parse(e)},pc=()=>{try{return Vy()||jy()||Hy()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Nm=i=>{var e,n;return(n=(e=pc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[i]},$y=i=>{const e=Nm(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Rm=()=>{var i;return(i=pc())===null||i===void 0?void 0:i.config},Pm=i=>{var e;return(e=pc())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gy(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Zo(JSON.stringify(n)),Zo(JSON.stringify(d)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et())}function qy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ky(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Am(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qy(){const i=et();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function xm(){return Cm.NODE_ADMIN===!0}function Yy(){try{return typeof indexedDB=="object"}catch{return!1}}function Xy(){return new Promise((i,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var u;e(((u=l.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy="FirebaseError";class Yn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Jy,Object.setPrototypeOf(this,Yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ss.prototype.create)}}class Ss{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,u=this.errors[e],d=u?Zy(u,s):"Error",f=`${this.serviceName}: ${d} (${l}).`;return new Yn(l,f,s)}}function Zy(i,e){return i.replace(e0,(n,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const e0=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(i){return JSON.parse(i)}function De(i){return JSON.stringify(i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om=function(i){let e={},n={},s={},l="";try{const u=i.split(".");e=ds(el(u[0])||""),n=ds(el(u[1])||""),l=u[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:l}},t0=function(i){const e=Om(i),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},n0=function(i){const e=Om(i).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function ri(i,e){if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}function Gu(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function tl(i,e,n){const s={};for(const l in i)Object.prototype.hasOwnProperty.call(i,l)&&(s[l]=e.call(n,i[l],l,i));return s}function nl(i,e){if(i===e)return!0;const n=Object.keys(i),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const u=i[l],d=e[l];if(gp(u)&&gp(d)){if(!nl(u,d))return!1}else if(u!==d)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function gp(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(i){const e=[];for(const[n,s]of Object.entries(i))Array.isArray(s)?s.forEach(l=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let y=0;y<16;y++)s[y]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let y=0;y<16;y++)s[y]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let y=16;y<80;y++){const T=s[y-3]^s[y-8]^s[y-14]^s[y-16];s[y]=(T<<1|T>>>31)&4294967295}let l=this.chain_[0],u=this.chain_[1],d=this.chain_[2],f=this.chain_[3],m=this.chain_[4],g,E;for(let y=0;y<80;y++){y<40?y<20?(g=f^u&(d^f),E=1518500249):(g=u^d^f,E=1859775393):y<60?(g=u&d|f&(u|d),E=2400959708):(g=u^d^f,E=3395469782);const T=(l<<5|l>>>27)+g+m+E+s[y]&4294967295;m=f,f=d,d=(u<<30|u>>>2)&4294967295,u=l,l=T}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+d&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+m&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let l=0;const u=this.buf_;let d=this.inbuf_;for(;l<n;){if(d===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<n;)if(u[d]=e.charCodeAt(l),++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}else for(;l<n;)if(u[d]=e[l],++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}this.inbuf_=d,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let u=24;u>=0;u-=8)e[s]=this.chain_[l]>>u&255,++s;return e}}function i0(i,e){const n=new s0(i,e);return n.subscribe.bind(n)}class s0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");o0(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=xu),l.error===void 0&&(l.error=xu),l.complete===void 0&&(l.complete=xu);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function o0(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function xu(){}function _c(i,e){return`${i} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let l=i.charCodeAt(s);if(l>=55296&&l<=56319){const u=l-55296;s++,O(s<i.length,"Surrogate pair missing trail surrogate.");const d=i.charCodeAt(s)-56320;l=65536+(u<<10)+d}l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):l<65536?(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},El=function(i){let e=0;for(let n=0;n<i.length;n++){const s=i.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(i){return i&&i._delegate?i._delegate:i}class vr{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new mc;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),l=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(l)return null;throw u}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(c0(e))try{this.getOrInitializeService({instanceIdentifier:hr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:l});s.resolve(u)}catch{}}}}clearInstance(e=hr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hr){return this.instances.has(e)}getOptions(e=hr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,d]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(u);s===f&&d.resolve(l)}return l}onInit(e,n){var s;const l=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(l))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(l,u);const d=this.instances.get(l);return d&&e(d,l),()=>{u.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:u0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=hr){return this.component?this.component.multipleInstances?e:hr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function u0(i){return i===hr?void 0:i}function c0(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new a0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ue||(ue={}));const h0={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},f0=ue.INFO,p0={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},m0=(i,e,...n)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),l=p0[e];if(l)console[l](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vc{constructor(e){this.name=e,this._logLevel=f0,this._logHandler=m0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?h0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const g0=(i,e)=>e.some(n=>i instanceof n);let _p,vp;function _0(){return _p||(_p=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function v0(){return vp||(vp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dm=new WeakMap,qu=new WeakMap,Lm=new WeakMap,Ou=new WeakMap,yc=new WeakMap;function y0(i){const e=new Promise((n,s)=>{const l=()=>{i.removeEventListener("success",u),i.removeEventListener("error",d)},u=()=>{n(Wn(i.result)),l()},d=()=>{s(i.error),l()};i.addEventListener("success",u),i.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&Dm.set(n,i)}).catch(()=>{}),yc.set(e,i),e}function w0(i){if(qu.has(i))return;const e=new Promise((n,s)=>{const l=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",d),i.removeEventListener("abort",d)},u=()=>{n(),l()},d=()=>{s(i.error||new DOMException("AbortError","AbortError")),l()};i.addEventListener("complete",u),i.addEventListener("error",d),i.addEventListener("abort",d)});qu.set(i,e)}let Ku={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return qu.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Lm.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wn(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function E0(i){Ku=i(Ku)}function S0(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=i.call(Du(this),e,...n);return Lm.set(s,e.sort?e.sort():[e]),Wn(s)}:v0().includes(i)?function(...e){return i.apply(Du(this),e),Wn(Dm.get(this))}:function(...e){return Wn(i.apply(Du(this),e))}}function C0(i){return typeof i=="function"?S0(i):(i instanceof IDBTransaction&&w0(i),g0(i,_0())?new Proxy(i,Ku):i)}function Wn(i){if(i instanceof IDBRequest)return y0(i);if(Ou.has(i))return Ou.get(i);const e=C0(i);return e!==i&&(Ou.set(i,e),yc.set(e,i)),e}const Du=i=>yc.get(i);function I0(i,e,{blocked:n,upgrade:s,blocking:l,terminated:u}={}){const d=indexedDB.open(i,e),f=Wn(d);return s&&d.addEventListener("upgradeneeded",m=>{s(Wn(d.result),m.oldVersion,m.newVersion,Wn(d.transaction),m)}),n&&d.addEventListener("blocked",m=>n(m.oldVersion,m.newVersion,m)),f.then(m=>{u&&m.addEventListener("close",()=>u()),l&&m.addEventListener("versionchange",g=>l(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const T0=["get","getKey","getAll","getAllKeys","count"],k0=["put","add","delete","clear"],Lu=new Map;function yp(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Lu.get(e))return Lu.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=k0.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||T0.includes(n)))return;const u=async function(d,...f){const m=this.transaction(d,l?"readwrite":"readonly");let g=m.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[n](...f),l&&m.done]))[0]};return Lu.set(e,u),u}E0(i=>({...i,get:(e,n,s)=>yp(e,n)||i.get(e,n,s),has:(e,n)=>!!yp(e,n)||i.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(R0(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function R0(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qu="@firebase/app",wp="0.10.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=new vc("@firebase/app"),P0="@firebase/app-compat",A0="@firebase/analytics-compat",x0="@firebase/analytics",O0="@firebase/app-check-compat",D0="@firebase/app-check",L0="@firebase/auth",M0="@firebase/auth-compat",b0="@firebase/database",F0="@firebase/data-connect",U0="@firebase/database-compat",z0="@firebase/functions",B0="@firebase/functions-compat",W0="@firebase/installations",V0="@firebase/installations-compat",j0="@firebase/messaging",H0="@firebase/messaging-compat",$0="@firebase/performance",G0="@firebase/performance-compat",q0="@firebase/remote-config",K0="@firebase/remote-config-compat",Q0="@firebase/storage",Y0="@firebase/storage-compat",X0="@firebase/firestore",J0="@firebase/vertexai",Z0="@firebase/firestore-compat",ew="firebase",tw="11.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu="[DEFAULT]",nw={[Qu]:"fire-core",[P0]:"fire-core-compat",[x0]:"fire-analytics",[A0]:"fire-analytics-compat",[D0]:"fire-app-check",[O0]:"fire-app-check-compat",[L0]:"fire-auth",[M0]:"fire-auth-compat",[b0]:"fire-rtdb",[F0]:"fire-data-connect",[U0]:"fire-rtdb-compat",[z0]:"fire-fn",[B0]:"fire-fn-compat",[W0]:"fire-iid",[V0]:"fire-iid-compat",[j0]:"fire-fcm",[H0]:"fire-fcm-compat",[$0]:"fire-perf",[G0]:"fire-perf-compat",[q0]:"fire-rc",[K0]:"fire-rc-compat",[Q0]:"fire-gcs",[Y0]:"fire-gcs-compat",[X0]:"fire-fst",[Z0]:"fire-fst-compat",[J0]:"fire-vertex","fire-js":"fire-js",[ew]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl=new Map,rw=new Map,Xu=new Map;function Ep(i,e){try{i.container.addComponent(e)}catch(n){pn.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function ii(i){const e=i.name;if(Xu.has(e))return pn.debug(`There were multiple attempts to register component ${e}.`),!1;Xu.set(e,i);for(const n of rl.values())Ep(n,i);for(const n of rw.values())Ep(n,i);return!0}function wc(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function an(i){return i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vn=new Ss("app","Firebase",iw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new vr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=tw;function Mm(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Yu,automaticDataCollectionEnabled:!1},e),l=s.name;if(typeof l!="string"||!l)throw Vn.create("bad-app-name",{appName:String(l)});if(n||(n=Rm()),!n)throw Vn.create("no-options");const u=rl.get(l);if(u){if(nl(n,u.options)&&nl(s,u.config))return u;throw Vn.create("duplicate-app",{appName:l})}const d=new d0(l);for(const m of Xu.values())d.addComponent(m);const f=new sw(n,s,d);return rl.set(l,f),f}function bm(i=Yu){const e=rl.get(i);if(!e&&i===Yu&&Rm())return Mm();if(!e)throw Vn.create("no-app",{appName:i});return e}function jn(i,e,n){var s;let l=(s=nw[i])!==null&&s!==void 0?s:i;n&&(l+=`-${n}`);const u=l.match(/\s|\//),d=e.match(/\s|\//);if(u||d){const f=[`Unable to register library "${l}" with version "${e}":`];u&&f.push(`library name "${l}" contains illegal characters (whitespace or "/")`),u&&d&&f.push("and"),d&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pn.warn(f.join(" "));return}ii(new vr(`${l}-version`,()=>({library:l,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow="firebase-heartbeat-database",lw=1,hs="firebase-heartbeat-store";let Mu=null;function Fm(){return Mu||(Mu=I0(ow,lw,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(hs)}catch(n){console.warn(n)}}}}).catch(i=>{throw Vn.create("idb-open",{originalErrorMessage:i.message})})),Mu}async function aw(i){try{const n=(await Fm()).transaction(hs),s=await n.objectStore(hs).get(Um(i));return await n.done,s}catch(e){if(e instanceof Yn)pn.warn(e.message);else{const n=Vn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pn.warn(n.message)}}}async function Sp(i,e){try{const s=(await Fm()).transaction(hs,"readwrite");await s.objectStore(hs).put(e,Um(i)),await s.done}catch(n){if(n instanceof Yn)pn.warn(n.message);else{const s=Vn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pn.warn(s.message)}}}function Um(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw=1024,cw=30*24*60*60*1e3;class dw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Cp();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(d=>d.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:l}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(d=>{const f=new Date(d.date).valueOf();return Date.now()-f<=cw}),this._storage.overwrite(this._heartbeatsCache))}catch(s){pn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Cp(),{heartbeatsToSend:s,unsentEntries:l}=hw(this._heartbeatsCache.heartbeats),u=Zo(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return pn.warn(n),""}}}function Cp(){return new Date().toISOString().substring(0,10)}function hw(i,e=uw){const n=[];let s=i.slice();for(const l of i){const u=n.find(d=>d.agent===l.agent);if(u){if(u.dates.push(l.date),Ip(n)>e){u.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),Ip(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class fw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yy()?Xy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await aw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return Sp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return Sp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...e.heartbeats]})}else return}}function Ip(i){return Zo(JSON.stringify({version:2,heartbeats:i})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(i){ii(new vr("platform-logger",e=>new N0(e),"PRIVATE")),ii(new vr("heartbeat",e=>new dw(e),"PRIVATE")),jn(Qu,wp,i),jn(Qu,wp,"esm2017"),jn("fire-js","")}pw("");var mw="firebase",gw="11.0.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jn(mw,gw,"app");const _w={apiKey:"AIzaSyBquuQbu8OJcLiUgjj6WzQ4lzsRQbkU5f0",authDomain:"wosp-dashboard.firebaseapp.com",databaseURL:"https://wosp-dashboard-default-rtdb.europe-west1.firebasedatabase.app",projectId:"wosp-dashboard",storageBucket:"wosp-dashboard.firebasestorage.app",messagingSenderId:"1043214122412",appId:"1:1043214122412:web:fa1bffef051335b3ad0e09",measurementId:"G-Y88RCN6ZZ9"},zm=Mm(_w);function Ec(i,e){var n={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(n[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(i);l<s.length;l++)e.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(i,s[l])&&(n[s[l]]=i[s[l]]);return n}function Bm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vw=Bm,Wm=new Ss("auth","Firebase",Bm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il=new vc("@firebase/auth");function yw(i,...e){il.logLevel<=ue.WARN&&il.warn(`Auth (${ci}): ${i}`,...e)}function Ko(i,...e){il.logLevel<=ue.ERROR&&il.error(`Auth (${ci}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(i,...e){throw Cc(i,...e)}function zt(i,...e){return Cc(i,...e)}function Sc(i,e,n){const s=Object.assign(Object.assign({},vw()),{[e]:n});return new Ss("auth","Firebase",s).create(e,{appName:i.name})}function gr(i){return Sc(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ww(i,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Qt(i,"argument-error"),Sc(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Cc(i,...e){if(typeof i!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return Wm.create(i,...e)}function Q(i,e,...n){if(!i)throw Cc(e,...n)}function un(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Ko(e),new Error(e)}function mn(i,e){i||un(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function Ew(){return Tp()==="http:"||Tp()==="https:"}function Tp(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ew()||Ky()||"connection"in navigator)?navigator.onLine:!0}function Cw(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,n){this.shortDelay=e,this.longDelay=n,mn(n>e,"Short delay should be less than long delay!"),this.isMobile=gc()||Am()}get(){return Sw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(i,e){mn(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw=new Cs(3e4,6e4);function Tc(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function di(i,e,n,s,l={}){return jm(i,l,async()=>{let u={},d={};s&&(e==="GET"?d=s:u={body:JSON.stringify(s)});const f=ui(Object.assign({key:i.config.apiKey},d)).slice(1),m=await i._getAdditionalHeaders();m["Content-Type"]="application/json",i.languageCode&&(m["X-Firebase-Locale"]=i.languageCode);const g=Object.assign({method:e,headers:m},u);return qy()||(g.referrerPolicy="no-referrer"),Vm.fetch()(Hm(i,i.config.apiHost,n,f),g)})}async function jm(i,e,n){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},Iw),e);try{const l=new Nw(i),u=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const d=await u.json();if("needConfirmation"in d)throw $o(i,"account-exists-with-different-credential",d);if(u.ok&&!("errorMessage"in d))return d;{const f=u.ok?d.errorMessage:d.error.message,[m,g]=f.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw $o(i,"credential-already-in-use",d);if(m==="EMAIL_EXISTS")throw $o(i,"email-already-in-use",d);if(m==="USER_DISABLED")throw $o(i,"user-disabled",d);const E=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Sc(i,E,g);Qt(i,E)}}catch(l){if(l instanceof Yn)throw l;Qt(i,"network-request-failed",{message:String(l)})}}async function kw(i,e,n,s,l={}){const u=await di(i,e,n,s,l);return"mfaPendingCredential"in u&&Qt(i,"multi-factor-auth-required",{_serverResponse:u}),u}function Hm(i,e,n,s){const l=`${e}${n}?${s}`;return i.config.emulator?Ic(i.config,l):`${i.config.apiScheme}://${l}`}class Nw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(zt(this.auth,"network-request-failed")),Tw.get())})}}function $o(i,e,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=zt(i,e,s);return l.customData._tokenResponse=n,l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rw(i,e){return di(i,"POST","/v1/accounts:delete",e)}async function $m(i,e){return di(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Pw(i,e=!1){const n=ht(i),s=await n.getIdToken(e),l=kc(s);Q(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const u=typeof l.firebase=="object"?l.firebase:void 0,d=u==null?void 0:u.sign_in_provider;return{claims:l,token:s,authTime:ss(bu(l.auth_time)),issuedAtTime:ss(bu(l.iat)),expirationTime:ss(bu(l.exp)),signInProvider:d||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function bu(i){return Number(i)*1e3}function kc(i){const[e,n,s]=i.split(".");if(e===void 0||n===void 0||s===void 0)return Ko("JWT malformed, contained fewer than 3 sections"),null;try{const l=el(n);return l?JSON.parse(l):(Ko("Failed to decode base64 JWT payload"),null)}catch(l){return Ko("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function kp(i){const e=kc(i);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fs(i,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Yn&&Aw(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function Aw({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const l=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ss(this.lastLoginAt),this.creationTime=ss(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sl(i){var e;const n=i.auth,s=await i.getIdToken(),l=await fs(i,$m(n,{idToken:s}));Q(l==null?void 0:l.users.length,n,"internal-error");const u=l.users[0];i._notifyReloadListener(u);const d=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?Gm(u.providerUserInfo):[],f=Dw(i.providerData,d),m=i.isAnonymous,g=!(i.email&&u.passwordHash)&&!(f!=null&&f.length),E=m?g:!1,y={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:f,metadata:new Zu(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(i,y)}async function Ow(i){const e=ht(i);await sl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Dw(i,e){return[...i.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function Gm(i){return i.map(e=>{var{providerId:n}=e,s=Ec(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lw(i,e){const n=await jm(i,{},async()=>{const s=ui({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:u}=i.config,d=Hm(i,l,"/v1/token",`key=${u}`),f=await i._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",Vm.fetch()(d,{method:"POST",headers:f,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Mw(i,e){return di(i,"POST","/v2/accounts:revokeToken",Tc(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=kp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:u}=await Lw(e,n);this.updateTokensAndExpiration(s,l,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:u}=n,d=new Zr;return s&&(Q(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),l&&(Q(typeof l=="string","internal-error",{appName:e}),d.accessToken=l),u&&(Q(typeof u=="number","internal-error",{appName:e}),d.expirationTime=u),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zr,this.toJSON())}_performRefresh(){return un("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(i,e){Q(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class cn{constructor(e){var{uid:n,auth:s,stsTokenManager:l}=e,u=Ec(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Zu(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const n=await fs(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Pw(this,e)}reload(){return Ow(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new cn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await sl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(an(this.auth.app))return Promise.reject(gr(this.auth));const e=await this.getIdToken();return await fs(this,Rw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,l,u,d,f,m,g,E;const y=(s=n.displayName)!==null&&s!==void 0?s:void 0,T=(l=n.email)!==null&&l!==void 0?l:void 0,D=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,b=(d=n.photoURL)!==null&&d!==void 0?d:void 0,V=(f=n.tenantId)!==null&&f!==void 0?f:void 0,q=(m=n._redirectEventId)!==null&&m!==void 0?m:void 0,Re=(g=n.createdAt)!==null&&g!==void 0?g:void 0,Me=(E=n.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:Pe,emailVerified:Ie,isAnonymous:tt,providerData:Ae,stsTokenManager:We}=n;Q(Pe&&We,e,"internal-error");const nt=Zr.fromJSON(this.name,We);Q(typeof Pe=="string",e,"internal-error"),Fn(y,e.name),Fn(T,e.name),Q(typeof Ie=="boolean",e,"internal-error"),Q(typeof tt=="boolean",e,"internal-error"),Fn(D,e.name),Fn(b,e.name),Fn(V,e.name),Fn(q,e.name),Fn(Re,e.name),Fn(Me,e.name);const wt=new cn({uid:Pe,auth:e,email:T,emailVerified:Ie,displayName:y,isAnonymous:tt,photoURL:b,phoneNumber:D,tenantId:V,stsTokenManager:nt,createdAt:Re,lastLoginAt:Me});return Ae&&Array.isArray(Ae)&&(wt.providerData=Ae.map(Nt=>Object.assign({},Nt))),q&&(wt._redirectEventId=q),wt}static async _fromIdTokenResponse(e,n,s=!1){const l=new Zr;l.updateFromServerResponse(n);const u=new cn({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await sl(u),u}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];Q(l.localId!==void 0,"internal-error");const u=l.providerUserInfo!==void 0?Gm(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!(u!=null&&u.length),f=new Zr;f.updateFromIdToken(s);const m=new cn({uid:l.localId,auth:e,stsTokenManager:f,isAnonymous:d}),g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new Zu(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(u!=null&&u.length)};return Object.assign(m,g),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np=new Map;function dn(i){mn(i instanceof Function,"Expected a class definition");let e=Np.get(i);return e?(mn(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Np.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qm.type="NONE";const Rp=qm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(i,e,n){return`firebase:${i}:${e}:${n}`}class ei{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:u}=this.auth;this.fullUserKey=Qo(this.userKey,l.apiKey,u),this.fullPersistenceKey=Qo("persistence",l.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?cn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ei(dn(Rp),e,s);const l=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=l[0]||dn(Rp);const d=Qo(s,e.config.apiKey,e.name);let f=null;for(const g of n)try{const E=await g._get(d);if(E){const y=cn._fromJSON(e,E);g!==u&&(f=y),u=g;break}}catch{}const m=l.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!m.length?new ei(u,e,s):(u=m[0],f&&await u._set(d,f.toJSON()),await Promise.all(n.map(async g=>{if(g!==u)try{await g._remove(d)}catch{}})),new ei(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Km(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zm(e))return"Blackberry";if(eg(e))return"Webos";if(Qm(e))return"Safari";if((e.includes("chrome/")||Ym(e))&&!e.includes("edge/"))return"Chrome";if(Jm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Km(i=et()){return/firefox\//i.test(i)}function Qm(i=et()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ym(i=et()){return/crios\//i.test(i)}function Xm(i=et()){return/iemobile/i.test(i)}function Jm(i=et()){return/android/i.test(i)}function Zm(i=et()){return/blackberry/i.test(i)}function eg(i=et()){return/webos/i.test(i)}function Nc(i=et()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function bw(i=et()){var e;return Nc(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Fw(){return Qy()&&document.documentMode===10}function tg(i=et()){return Nc(i)||Jm(i)||eg(i)||Zm(i)||/windows phone/i.test(i)||Xm(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(i,e=[]){let n;switch(i){case"Browser":n=Pp(et());break;case"Worker":n=`${Pp(et())}-${i}`;break;default:n=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ci}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((d,f)=>{try{const m=e(u);d(m)}catch(m){f(m)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zw(i,e={}){return di(i,"GET","/v2/passwordPolicy",Tc(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw=6;class Ww{constructor(e){var n,s,l,u;const d=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=d.minPasswordLength)!==null&&n!==void 0?n:Bw,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,l,u,d,f;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(n=m.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),m.isValid&&(m.isValid=(s=m.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),m.isValid&&(m.isValid=(l=m.containsLowercaseLetter)!==null&&l!==void 0?l:!0),m.isValid&&(m.isValid=(u=m.containsUppercaseLetter)!==null&&u!==void 0?u:!0),m.isValid&&(m.isValid=(d=m.containsNumericCharacter)!==null&&d!==void 0?d:!0),m.isValid&&(m.isValid=(f=m.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),m}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,l,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ap(this),this.idTokenSubscription=new Ap(this),this.beforeStateQueue=new Uw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dn(n)),this._initializationPromise=this.queue(async()=>{var s,l;if(!this._deleted&&(this.persistenceManager=await ei.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await $m(this,{idToken:e}),s=await cn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(an(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let l=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,f=l==null?void 0:l._redirectEventId,m=await this.tryRedirectSignIn(e);(!d||d===f)&&(m!=null&&m.user)&&(l=m.user,u=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(l)}catch(d){l=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await sl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Cw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(an(this.app))return Promise.reject(gr(this));const n=e?ht(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return an(this.app)?Promise.reject(gr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return an(this.app)?Promise.reject(gr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zw(this),n=new Ww(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ss("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Mw(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await ei.create(this,[dn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let d=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(f,this,"internal-error"),f.then(()=>{d||u(this.currentUser)}),typeof n=="function"){const m=e.addObserver(n,s,l);return()=>{d=!0,m()}}else{const m=e.addObserver(n);return()=>{d=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ng(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const l=await this._getAppCheckToken();return l&&(n["X-Firebase-AppCheck"]=l),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&yw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Sl(i){return ht(i)}class Ap{constructor(e){this.auth=e,this.observer=null,this.addObserver=i0(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jw(i){Rc=i}function Hw(i){return Rc.loadJS(i)}function $w(){return Rc.gapiScript}function Gw(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw(i,e){const n=wc(i,"auth");if(n.isInitialized()){const l=n.getImmediate(),u=n.getOptions();if(nl(u,e??{}))return l;Qt(l,"already-initialized")}return n.initialize({options:e})}function Kw(i,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(dn);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Qw(i,e,n){const s=Sl(i);Q(s._canInitEmulator,s,"emulator-config-failed"),Q(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,u=rg(e),{host:d,port:f}=Yw(e),m=f===null?"":`:${f}`;s.config.emulator={url:`${u}//${d}${m}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:d,port:f,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:l})}),Xw()}function rg(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function Yw(i){const e=rg(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const u=l[1];return{host:u,port:xp(s.substr(u.length+1))}}else{const[u,d]=s.split(":");return{host:u,port:xp(d)}}}function xp(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function Xw(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return un("not implemented")}_getIdTokenResponse(e){return un("not implemented")}_linkToIdToken(e,n){return un("not implemented")}_getReauthenticationResolver(e){return un("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ti(i,e){return kw(i,"POST","/v1/accounts:signInWithIdp",Tc(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw="http://localhost";class yr extends ig{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l}=n,u=Ec(n,["providerId","signInMethod"]);if(!s||!l)return null;const d=new yr(s,l);return d.idToken=u.idToken||void 0,d.accessToken=u.accessToken||void 0,d.secret=u.secret,d.nonce=u.nonce,d.pendingToken=u.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return ti(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ti(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ti(e,n)}buildRequest(){const e={requestUri:Jw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ui(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is extends Pc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends Is{constructor(){super("facebook.com")}static credential(e){return yr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.FACEBOOK_SIGN_IN_METHOD="facebook.com";Un.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends Is{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return yr._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return ln.credential(n,s)}catch{return null}}}ln.GOOGLE_SIGN_IN_METHOD="google.com";ln.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Is{constructor(){super("github.com")}static credential(e){return yr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.GITHUB_SIGN_IN_METHOD="github.com";zn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends Is{constructor(){super("twitter.com")}static credential(e,n){return yr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Bn.credential(n,s)}catch{return null}}}Bn.TWITTER_SIGN_IN_METHOD="twitter.com";Bn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,l=!1){const u=await cn._fromIdTokenResponse(e,s,l),d=Op(s);return new si({user:u,providerId:d,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const l=Op(s);return new si({user:e,providerId:l,_tokenResponse:s,operationType:n})}}function Op(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol extends Yn{constructor(e,n,s,l){var u;super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,ol.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new ol(e,n,s,l)}}function sg(i,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?ol._fromErrorAndOperation(i,u,e,s):u})}async function Zw(i,e,n=!1){const s=await fs(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return si._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eE(i,e,n=!1){const{auth:s}=i;if(an(s.app))return Promise.reject(gr(s));const l="reauthenticate";try{const u=await fs(i,sg(s,l,e,i),n);Q(u.idToken,s,"internal-error");const d=kc(u.idToken);Q(d,s,"internal-error");const{sub:f}=d;return Q(i.uid===f,s,"user-mismatch"),si._forOperation(i,l,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Qt(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tE(i,e,n=!1){if(an(i.app))return Promise.reject(gr(i));const s="signIn",l=await sg(i,s,e),u=await si._fromIdTokenResponse(i,s,l);return n||await i._updateCurrentUser(u.user),u}function nE(i,e,n,s){return ht(i).onIdTokenChanged(e,n,s)}function rE(i,e,n){return ht(i).beforeAuthStateChanged(e,n)}function iE(i,e,n,s){return ht(i).onAuthStateChanged(e,n,s)}function sE(i){return ht(i).signOut()}const ll="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ll,"1"),this.storage.removeItem(ll),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE=1e3,lE=10;class lg extends og{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=tg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,f,m)=>{this.notifyListeners(d,m)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(s);!n&&this.localCache[s]===d||this.notifyListeners(s,d)},u=this.storage.getItem(s);Fw()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,lE):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},oE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}lg.type="LOCAL";const aE=lg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag extends og{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ag.type="SESSION";const ug=ag;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const s=new Cl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:l,data:u}=n.data,d=this.handlersMap[l];if(!(d!=null&&d.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const f=Array.from(d).map(async g=>g(n.origin,u)),m=await uE(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:m})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(i="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return i+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let u,d;return new Promise((f,m)=>{const g=Ac("",20);l.port1.start();const E=setTimeout(()=>{m(new Error("unsupported_event"))},s);d={messageChannel:l,onMessage(y){const T=y;if(T.data.eventId===g)switch(T.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),f(T.data.response);break;default:clearTimeout(E),clearTimeout(u),m(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(){return window}function dE(i){Kt().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(){return typeof Kt().WorkerGlobalScope<"u"&&typeof Kt().importScripts=="function"}async function hE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fE(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function pE(){return cg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg="firebaseLocalStorageDb",mE=1,al="firebaseLocalStorage",hg="fbase_key";class Ts{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Il(i,e){return i.transaction([al],e?"readwrite":"readonly").objectStore(al)}function gE(){const i=indexedDB.deleteDatabase(dg);return new Ts(i).toPromise()}function ec(){const i=indexedDB.open(dg,mE);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(al,{keyPath:hg})}catch(l){n(l)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(al)?e(s):(s.close(),await gE(),e(await ec()))})})}async function Dp(i,e,n){const s=Il(i,!0).put({[hg]:e,value:n});return new Ts(s).toPromise()}async function _E(i,e){const n=Il(i,!1).get(e),s=await new Ts(n).toPromise();return s===void 0?null:s.value}function Lp(i,e){const n=Il(i,!0).delete(e);return new Ts(n).toPromise()}const vE=800,yE=3;class fg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ec(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>yE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cl._getInstance(pE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await hE(),!this.activeServiceWorker)return;this.sender=new cE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ec();return await Dp(e,ll,"1"),await Lp(e,ll),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Dp(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>_E(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Lp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const u=Il(l,!1).getAll();return new Ts(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:u}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(u)&&(this.notifyListeners(l,u),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fg.type="LOCAL";const wE=fg;new Cs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(i,e){return e?dn(e):(Q(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc extends ig{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ti(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ti(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ti(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function EE(i){return tE(i.auth,new xc(i),i.bypassAuthState)}function SE(i){const{auth:e,user:n}=i;return Q(n,e,"internal-error"),eE(n,new xc(i),i.bypassAuthState)}async function CE(i){const{auth:e,user:n}=i;return Q(n,e,"internal-error"),Zw(n,new xc(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,n,s,l,u=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:l,tenantId:u,error:d,type:f}=e;if(d){this.reject(d);return}const m={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(m))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return EE;case"linkViaPopup":case"linkViaRedirect":return CE;case"reauthViaPopup":case"reauthViaRedirect":return SE;default:Qt(this.auth,"internal-error")}}resolve(e){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE=new Cs(2e3,1e4);async function TE(i,e,n){if(an(i.app))return Promise.reject(zt(i,"operation-not-supported-in-this-environment"));const s=Sl(i);ww(i,e,Pc);const l=pg(s,n);return new pr(s,"signInViaPopup",e,l).executeNotNull()}class pr extends mg{constructor(e,n,s,l,u){super(e,n,l,u),this.provider=s,this.authWindow=null,this.pollId=null,pr.currentPopupAction&&pr.currentPopupAction.cancel(),pr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){mn(this.filter.length===1,"Popup operations only handle one event");const e=Ac();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,IE.get())};e()}}pr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE="pendingRedirect",Yo=new Map;class NE extends mg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Yo.get(this.auth._key());if(!e){try{const s=await RE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Yo.set(this.auth._key(),e)}return this.bypassAuthState||Yo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RE(i,e){const n=xE(e),s=AE(i);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function PE(i,e){Yo.set(i._key(),e)}function AE(i){return dn(i._redirectPersistence)}function xE(i){return Qo(kE,i.config.apiKey,i.name)}async function OE(i,e,n=!1){if(an(i.app))return Promise.reject(gr(i));const s=Sl(i),l=pg(s,e),d=await new NE(s,l,n).execute();return d&&!n&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE=10*60*1e3;class LE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ME(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!gg(e)){const l=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(zt(this.auth,l))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=DE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mp(e))}saveEventToCache(e){this.cachedEventUids.add(Mp(e)),this.lastProcessedEventTime=Date.now()}}function Mp(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function gg({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ME(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gg(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bE(i,e={}){return di(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,UE=/^https?/;async function zE(i){if(i.config.emulator)return;const{authorizedDomains:e}=await bE(i);for(const n of e)try{if(BE(n))return}catch{}Qt(i,"unauthorized-domain")}function BE(i){const e=Ju(),{protocol:n,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const d=new URL(i);return d.hostname===""&&s===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===s}if(!UE.test(n))return!1;if(FE.test(i))return s===i;const l=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE=new Cs(3e4,6e4);function bp(){const i=Kt().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function VE(i){return new Promise((e,n)=>{var s,l,u;function d(){bp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bp(),n(zt(i,"network-request-failed"))},timeout:WE.get()})}if(!((l=(s=Kt().gapi)===null||s===void 0?void 0:s.iframes)===null||l===void 0)&&l.Iframe)e(gapi.iframes.getContext());else if(!((u=Kt().gapi)===null||u===void 0)&&u.load)d();else{const f=Gw("iframefcb");return Kt()[f]=()=>{gapi.load?d():n(zt(i,"network-request-failed"))},Hw(`${$w()}?onload=${f}`).catch(m=>n(m))}}).catch(e=>{throw Xo=null,e})}let Xo=null;function jE(i){return Xo=Xo||VE(i),Xo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE=new Cs(5e3,15e3),$E="__/auth/iframe",GE="emulator/auth/iframe",qE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},KE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function QE(i){const e=i.config;Q(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?Ic(e,GE):`https://${i.config.authDomain}/${$E}`,s={apiKey:e.apiKey,appName:i.name,v:ci},l=KE.get(i.config.apiHost);l&&(s.eid=l);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${ui(s).slice(1)}`}async function YE(i){const e=await jE(i),n=Kt().gapi;return Q(n,i,"internal-error"),e.open({where:document.body,url:QE(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qE,dontclear:!0},s=>new Promise(async(l,u)=>{await s.restyle({setHideOnLeave:!1});const d=zt(i,"network-request-failed"),f=Kt().setTimeout(()=>{u(d)},HE.get());function m(){Kt().clearTimeout(f),l(s)}s.ping(m).then(m,()=>{u(d)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},JE=500,ZE=600,eS="_blank",tS="http://localhost";class Fp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nS(i,e,n,s=JE,l=ZE){const u=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const m=Object.assign(Object.assign({},XE),{width:s.toString(),height:l.toString(),top:u,left:d}),g=et().toLowerCase();n&&(f=Ym(g)?eS:n),Km(g)&&(e=e||tS,m.scrollbars="yes");const E=Object.entries(m).reduce((T,[D,b])=>`${T}${D}=${b},`,"");if(bw(g)&&f!=="_self")return rS(e||"",f),new Fp(null);const y=window.open(e||"",f,E);Q(y,i,"popup-blocked");try{y.focus()}catch{}return new Fp(y)}function rS(i,e){const n=document.createElement("a");n.href=i,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS="__/auth/handler",sS="emulator/auth/handler",oS=encodeURIComponent("fac");async function Up(i,e,n,s,l,u){Q(i.config.authDomain,i,"auth-domain-config-required"),Q(i.config.apiKey,i,"invalid-api-key");const d={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:s,v:ci,eventId:l};if(e instanceof Pc){e.setDefaultLanguage(i.languageCode),d.providerId=e.providerId||"",Gu(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,y]of Object.entries({}))d[E]=y}if(e instanceof Is){const E=e.getScopes().filter(y=>y!=="");E.length>0&&(d.scopes=E.join(","))}i.tenantId&&(d.tid=i.tenantId);const f=d;for(const E of Object.keys(f))f[E]===void 0&&delete f[E];const m=await i._getAppCheckToken(),g=m?`#${oS}=${encodeURIComponent(m)}`:"";return`${lS(i)}?${ui(f).slice(1)}${g}`}function lS({config:i}){return i.emulator?Ic(i,sS):`https://${i.authDomain}/${iS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu="webStorageSupport";class aS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ug,this._completeRedirectFn=OE,this._overrideRedirectResult=PE}async _openPopup(e,n,s,l){var u;mn((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const d=await Up(e,n,s,Ju(),l);return nS(e,d,Ac())}async _openRedirect(e,n,s,l){await this._originValidation(e);const u=await Up(e,n,s,Ju(),l);return dE(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:u}=this.eventManagers[n];return l?Promise.resolve(l):(mn(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await YE(e),s=new LE(e);return n.register("authEvent",l=>(Q(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Fu,{type:Fu},l=>{var u;const d=(u=l==null?void 0:l[0])===null||u===void 0?void 0:u[Fu];d!==void 0&&n(!!d),Qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return tg()||Qm()||Nc()}}const uS=aS;var zp="@firebase/auth",Bp="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dS(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hS(i){ii(new vr("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:d,authDomain:f}=s.options;Q(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:d,authDomain:f,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ng(i)},g=new Vw(s,l,u,m);return Kw(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ii(new vr("auth-internal",e=>{const n=Sl(e.getProvider("auth").getImmediate());return(s=>new cS(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jn(zp,Bp,dS(i)),jn(zp,Bp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS=5*60,pS=Pm("authIdTokenMaxAge")||fS;let Wp=null;const mS=i=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>pS)return;const l=n==null?void 0:n.token;Wp!==l&&(Wp=l,await fetch(i,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function gS(i=bm()){const e=wc(i,"auth");if(e.isInitialized())return e.getImmediate();const n=qw(i,{popupRedirectResolver:uS,persistence:[wE,aE,ug]}),s=Pm("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const d=mS(u.toString());rE(n,d,()=>d(n.currentUser)),nE(n,f=>d(f))}}const l=Nm("auth");return l&&Qw(n,`http://${l}`),n}function _S(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}jw({loadJS(i){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=l=>{const u=zt("internal-error");u.customData=l,n(u)},s.type="text/javascript",s.charset="UTF-8",_S().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hS("Browser");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function vS(i,e,n,s){function l(u){return u instanceof n?u:new n(function(d){d(u)})}return new(n||(n=Promise))(function(u,d){function f(E){try{g(s.next(E))}catch(y){d(y)}}function m(E){try{g(s.throw(E))}catch(y){d(y)}}function g(E){E.done?u(E.value):l(E.value).then(f,m)}g((s=s.apply(i,[])).next())})}function yS(i,e){var n={label:0,sent:function(){if(u[0]&1)throw u[1];return u[1]},trys:[],ops:[]},s,l,u,d;return d={next:f(0),throw:f(1),return:f(2)},typeof Symbol=="function"&&(d[Symbol.iterator]=function(){return this}),d;function f(g){return function(E){return m([g,E])}}function m(g){if(s)throw new TypeError("Generator is already executing.");for(;n;)try{if(s=1,l&&(u=g[0]&2?l.return:g[0]?l.throw||((u=l.return)&&u.call(l),0):l.next)&&!(u=u.call(l,g[1])).done)return u;switch(l=0,u&&(g=[g[0]&2,u.value]),g[0]){case 0:case 1:u=g;break;case 4:return n.label++,{value:g[1],done:!1};case 5:n.label++,l=g[1],g=[0];continue;case 7:g=n.ops.pop(),n.trys.pop();continue;default:if(u=n.trys,!(u=u.length>0&&u[u.length-1])&&(g[0]===6||g[0]===2)){n=0;continue}if(g[0]===3&&(!u||g[1]>u[0]&&g[1]<u[3])){n.label=g[1];break}if(g[0]===6&&n.label<u[1]){n.label=u[1],u=g;break}if(u&&n.label<u[2]){n.label=u[2],n.ops.push(g);break}u[2]&&n.ops.pop(),n.trys.pop();continue}g=e.call(i,n)}catch(E){g=[6,E],l=0}finally{s=u=0}if(g[0]&5)throw g[1];return{value:g[0]?g[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Yr=function(){return Yr=Object.assign||function(e){for(var n,s=1,l=arguments.length;s<l;s++){n=arguments[s];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(e[u]=n[u])}return e},Yr.apply(this,arguments)},_g=function(i){return{loading:i==null,value:i}},wS=function(){return function(i,e){switch(e.type){case"error":return Yr(Yr({},i),{error:e.error,loading:!1,value:void 0});case"reset":return _g(e.defaultValue);case"value":return Yr(Yr({},i),{error:void 0,loading:!1,value:e.value});default:return i}}},ES=function(i){var e=i?i():void 0,n=on.useReducer(wS(),_g(e)),s=n[0],l=n[1],u=on.useCallback(function(){var m=i?i():void 0;l({type:"reset",defaultValue:m})},[i]),d=on.useCallback(function(m){l({type:"error",error:m})},[]),f=on.useCallback(function(m){l({type:"value",value:m})},[]);return on.useMemo(function(){return{error:s.error,loading:s.loading,reset:u,setError:d,setValue:f,value:s.value}},[s.error,s.loading,u,d,f,s.value])},SS=function(i,e){var n=ES(function(){return i.currentUser}),s=n.error,l=n.loading,u=n.setError,d=n.setValue,f=n.value;return on.useEffect(function(){var m=iE(i,function(g){return vS(void 0,void 0,void 0,function(){var E;return yS(this,function(y){switch(y.label){case 0:return[3,4];case 1:return y.trys.push([1,3,,4]),[4,e.onUserChanged(g)];case 2:return y.sent(),[3,4];case 3:return E=y.sent(),u(E),[3,4];case 4:return d(g),[2]}})})},u);return function(){m()}},[i]),[f,l,s]},Vp={};const jp="@firebase/database",Hp="1.0.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vg="";function CS(i){vg=i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),De(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ds(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Yt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const e=window[i];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new IS(e)}}catch{}return new TS},mr=yg("localStorage"),kS=yg("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=new vc("@firebase/database"),NS=function(){let i=1;return function(){return i++}}(),wg=function(i){const e=l0(i),n=new r0;n.update(e);const s=n.digest();return fc.encodeByteArray(s)},ks=function(...i){let e="";for(let n=0;n<i.length;n++){const s=i[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ks.apply(null,s):typeof s=="object"?e+=De(s):e+=s,e+=" "}return e};let os=null,$p=!0;const RS=function(i,e){O(!e,"Can't turn on custom loggers persistently."),ni.logLevel=ue.VERBOSE,os=ni.log.bind(ni)},Qe=function(...i){if($p===!0&&($p=!1,os===null&&kS.get("logging_enabled")===!0&&RS()),os){const e=ks.apply(null,i);os(e)}},Ns=function(i){return function(...e){Qe(i,...e)}},tc=function(...i){const e="FIREBASE INTERNAL ERROR: "+ks(...i);ni.error(e)},gn=function(...i){const e=`FIREBASE FATAL ERROR: ${ks(...i)}`;throw ni.error(e),new Error(e)},yt=function(...i){const e="FIREBASE WARNING: "+ks(...i);ni.warn(e)},PS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&yt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Oc=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},AS=function(i){if(document.readyState==="complete")i();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},wr="[MIN_NAME]",Gn="[MAX_NAME]",hi=function(i,e){if(i===e)return 0;if(i===wr||e===Gn)return-1;if(e===wr||i===Gn)return 1;{const n=Gp(i),s=Gp(e);return n!==null?s!==null?n-s===0?i.length-e.length:n-s:-1:s!==null?1:i<e?-1:1}},xS=function(i,e){return i===e?0:i<e?-1:1},ts=function(i,e){if(e&&i in e)return e[i];throw new Error("Missing required key ("+i+") in object: "+De(e))},Dc=function(i){if(typeof i!="object"||i===null)return De(i);const e=[];for(const s in i)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=De(e[s]),n+=":",n+=Dc(i[e[s]]);return n+="}",n},Eg=function(i,e){const n=i.length;if(n<=e)return[i];const s=[];for(let l=0;l<n;l+=e)l+e>n?s.push(i.substring(l,n)):s.push(i.substring(l,l+e));return s};function dt(i,e){for(const n in i)i.hasOwnProperty(n)&&e(n,i[n])}const Sg=function(i){O(!Oc(i),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let l,u,d,f,m;i===0?(u=0,d=0,l=1/i===-1/0?1:0):(l=i<0,i=Math.abs(i),i>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(i)/Math.LN2),s),u=f+s,d=Math.round(i*Math.pow(2,n-f)-Math.pow(2,n))):(u=0,d=Math.round(i/Math.pow(2,1-s-n))));const g=[];for(m=n;m;m-=1)g.push(d%2?1:0),d=Math.floor(d/2);for(m=e;m;m-=1)g.push(u%2?1:0),u=Math.floor(u/2);g.push(l?1:0),g.reverse();const E=g.join("");let y="";for(m=0;m<64;m+=8){let T=parseInt(E.substr(m,8),2).toString(16);T.length===1&&(T="0"+T),y=y+T}return y.toLowerCase()},OS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},DS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function LS(i,e){let n="Unknown Error";i==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":i==="permission_denied"?n="Client doesn't have permission to access the desired data.":i==="unavailable"&&(n="The service is unavailable");const s=new Error(i+" at "+e._path.toString()+": "+n);return s.code=i.toUpperCase(),s}const MS=new RegExp("^-?(0*)\\d{1,10}$"),bS=-2147483648,FS=2147483647,Gp=function(i){if(MS.test(i)){const e=Number(i);if(e>=bS&&e<=FS)return e}return null},Rs=function(i){try{i()}catch(e){setTimeout(()=>{const n=e.stack||"";throw yt("Exception was thrown by user callback.",n),e},Math.floor(0))}},US=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ls=function(i,e){const n=setTimeout(i,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){yt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Qe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',yt(e)}}class Jo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Jo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc="5",Cg="v",Ig="s",Tg="r",kg="f",Ng=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Rg="ls",Pg="p",nc="ac",Ag="websocket",xg="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e,n,s,l,u=!1,d="",f=!1,m=!1){this.secure=n,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=u,this.persistenceKey=d,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=m,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=mr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&mr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function WS(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function Dg(i,e,n){O(typeof e=="string","typeof type must == string"),O(typeof n=="object","typeof params must == object");let s;if(e===Ag)s=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(e===xg)s=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);WS(i)&&(n.ns=i.namespace);const l=[];return dt(n,(u,d)=>{l.push(u+"="+d)}),s+l.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(){this.counters_={}}incrementCounter(e,n=1){Yt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return zy(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu={},zu={};function Mc(i){const e=i.toString();return Uu[e]||(Uu[e]=new VS),Uu[e]}function jS(i,e){const n=i.toString();return zu[n]||(zu[n]=e()),zu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&Rs(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp="start",$S="close",GS="pLPCommand",qS="pRTLPCB",Lg="id",Mg="pw",bg="ser",KS="cb",QS="seg",YS="ts",XS="d",JS="dframe",Fg=1870,Ug=30,ZS=Fg-Ug,eC=25e3,tC=3e4;class Xr{constructor(e,n,s,l,u,d,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.transportSessionId=d,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ns(e),this.stats_=Mc(n),this.urlFn=m=>(this.appCheckToken&&(m[nc]=this.appCheckToken),Dg(n,xg,m))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new HS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(tC)),AS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new bc((...u)=>{const[d,f,m,g,E]=u;if(this.incrementIncomingBytes_(u),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,d===qp)this.id=f,this.password=m;else if(d===$S)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+d)},(...u)=>{const[d,f]=u;this.incrementIncomingBytes_(u),this.myPacketOrderer.handleResponse(d,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[qp]="t",s[bg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[KS]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Cg]=Lc,this.transportSessionId&&(s[Ig]=this.transportSessionId),this.lastSessionId&&(s[Rg]=this.lastSessionId),this.applicationId&&(s[Pg]=this.applicationId),this.appCheckToken&&(s[nc]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ng.test(location.hostname)&&(s[Tg]=kg);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Xr.forceAllow_=!0}static forceDisallow(){Xr.forceDisallow_=!0}static isAvailable(){return Xr.forceAllow_?!0:!Xr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!OS()&&!DS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=De(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Tm(n),l=Eg(s,ZS);for(let u=0;u<l.length;u++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[u]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[JS]="t",s[Lg]=e,s[Mg]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=De(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class bc{constructor(e,n,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=NS(),window[GS+this.uniqueCallbackIdentifier]=e,window[qS+this.uniqueCallbackIdentifier]=n,this.myIFrame=bc.createIFrame_();let u="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(u='<script>document.domain="'+document.domain+'";<\/script>');const d="<html><body>"+u+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(d),this.myIFrame.doc.close()}catch(f){Qe("frame writing exception"),f.stack&&Qe(f.stack),Qe(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Qe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Lg]=this.myID,e[Mg]=this.myPW,e[bg]=this.currentSerial;let n=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ug+s.length<=Fg;){const d=this.pendingSegs.shift();s=s+"&"+QS+l+"="+d.seg+"&"+YS+l+"="+d.ts+"&"+XS+l+"="+d.d,l++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},l=setTimeout(s,Math.floor(eC)),u=()=>{clearTimeout(l),s()};this.addTag(e,u)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Qe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=16384,rC=45e3;let ul=null;typeof MozWebSocket<"u"?ul=MozWebSocket:typeof WebSocket<"u"&&(ul=WebSocket);class bt{constructor(e,n,s,l,u,d,f){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ns(this.connId),this.stats_=Mc(n),this.connURL=bt.connectionURL_(n,d,f,l,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,l,u){const d={};return d[Cg]=Lc,typeof location<"u"&&location.hostname&&Ng.test(location.hostname)&&(d[Tg]=kg),n&&(d[Ig]=n),s&&(d[Rg]=s),l&&(d[nc]=l),u&&(d[Pg]=u),Dg(e,Ag,d)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,mr.set("previous_websocket_failure",!0);try{let s;xm(),this.mySock=new ul(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){bt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ul!==null&&!bt.forceDisallow_}static previouslyFailed(){return mr.isInMemoryStorage||mr.get("previous_websocket_failure")===!0}markConnectionHealthy(){mr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ds(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(O(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=De(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Eg(n,nC);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(rC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}bt.responsesRequiredToBeHealthy=2;bt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{static get ALL_TRANSPORTS(){return[Xr,bt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=bt&&bt.isAvailable();let s=n&&!bt.previouslyFailed();if(e.webSocketOnly&&(n||yt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[bt];else{const l=this.transports_=[];for(const u of ps.ALL_TRANSPORTS)u&&u.isAvailable()&&l.push(u);ps.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ps.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=6e4,sC=5e3,oC=10*1024,lC=100*1024,Bu="t",Kp="d",aC="s",Qp="r",uC="e",Yp="o",Xp="a",Jp="n",Zp="p",cC="h";class dC{constructor(e,n,s,l,u,d,f,m,g,E){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=u,this.onMessage_=d,this.onReady_=f,this.onDisconnect_=m,this.onKill_=g,this.lastSessionId=E,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ns("c:"+this.id+":"),this.transportManager_=new ps(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=ls(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>lC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>oC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Bu in e){const n=e[Bu];n===Xp?this.upgradeIfSecondaryHealthy_():n===Qp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Yp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ts("t",e),s=ts("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Zp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Xp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Jp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ts("t",e),s=ts("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ts(Bu,e);if(Kp in e){const s=e[Kp];if(n===cC){const l=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(n===Jp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===aC?this.onConnectionShutdown_(s):n===Qp?this.onReset_(s):n===uC?tc("Server Error: "+s):n===Yp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):tc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Lc!==s&&yt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ls(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(iC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ls(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(sC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Zp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(mr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{put(e,n,s,l){}merge(e,n,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e){this.allowedEvents_=e,this.listeners_={},O(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const l=this.getInitialEvent(e);l&&n.apply(s,l)}off(e,n,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let u=0;u<l.length;u++)if(l[u].callback===n&&(!s||s===l[u].context)){l.splice(u,1);return}}validateEventType_(e){O(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl extends Bg{static getInstance(){return new cl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!gc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return O(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em=32,tm=768;class ce{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function oe(){return new ce("")}function te(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function qn(i){return i.pieces_.length-i.pieceNum_}function fe(i){let e=i.pieceNum_;return e<i.pieces_.length&&e++,new ce(i.pieces_,e)}function Wg(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function hC(i){let e="";for(let n=i.pieceNum_;n<i.pieces_.length;n++)i.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(i.pieces_[n])));return e||"/"}function Vg(i,e=0){return i.pieces_.slice(i.pieceNum_+e)}function jg(i){if(i.pieceNum_>=i.pieces_.length)return null;const e=[];for(let n=i.pieceNum_;n<i.pieces_.length-1;n++)e.push(i.pieces_[n]);return new ce(e,0)}function Le(i,e){const n=[];for(let s=i.pieceNum_;s<i.pieces_.length;s++)n.push(i.pieces_[s]);if(e instanceof ce)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&n.push(s[l])}return new ce(n,0)}function J(i){return i.pieceNum_>=i.pieces_.length}function Ze(i,e){const n=te(i),s=te(e);if(n===null)return e;if(n===s)return Ze(fe(i),fe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+i+")")}function Hg(i,e){if(qn(i)!==qn(e))return!1;for(let n=i.pieceNum_,s=e.pieceNum_;n<=i.pieces_.length;n++,s++)if(i.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ft(i,e){let n=i.pieceNum_,s=e.pieceNum_;if(qn(i)>qn(e))return!1;for(;n<i.pieces_.length;){if(i.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class fC{constructor(e,n){this.errorPrefix_=n,this.parts_=Vg(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=El(this.parts_[s]);$g(this)}}function pC(i,e){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(e),i.byteLength_+=El(e),$g(i)}function mC(i){const e=i.parts_.pop();i.byteLength_-=El(e),i.parts_.length>0&&(i.byteLength_-=1)}function $g(i){if(i.byteLength_>tm)throw new Error(i.errorPrefix_+"has a key path longer than "+tm+" bytes ("+i.byteLength_+").");if(i.parts_.length>em)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+em+") or object contains a cycle "+fr(i))}function fr(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc extends Bg{static getInstance(){return new Fc}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return O(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=1e3,gC=60*5*1e3,nm=30*1e3,_C=1.3,vC=3e4,yC="server_kill",rm=3;class fn extends zg{constructor(e,n,s,l,u,d,f,m){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=u,this.authTokenProvider_=d,this.appCheckTokenProvider_=f,this.authOverride_=m,this.id=fn.nextPersistentConnectionId_++,this.log_=Ns("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ns,this.maxReconnectDelay_=gC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,m&&!xm())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Fc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&cl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const l=++this.requestNumber_,u={r:l,a:e,b:n};this.log_(De(u)),O(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(u),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const n=new mc,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:d=>{const f=d.d;d.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const u=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(u),n.promise}listen(e,n,s,l){this.initConnection_();const u=e._queryIdentifier,d=e._path.toString();this.log_("Listen called for "+d+" "+u),this.listens.has(d)||this.listens.set(d,new Map),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),O(!this.listens.get(d).has(u),"listen() called twice for same path/queryId.");const f={onComplete:l,hashFn:n,query:e,tag:s};this.listens.get(d).set(u,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),l=n._queryIdentifier;this.log_("Listen on "+s+" for "+l);const u={p:s},d="q";e.tag&&(u.q=n._queryObject,u.t=e.tag),u.h=e.hashFn(),this.sendRequest(d,u,f=>{const m=f.d,g=f.s;fn.warnOnListenWarnings_(m,n),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(g,m))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Yt(e,"w")){const s=ri(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+n._queryParams.getIndex().toString()+'"',u=n._path.toString();yt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${u} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||n0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=nm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=t0(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,l=>{const u=l.s,d=l.d||"error";this.authToken_===e&&(u==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(u,d))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,n)}sendUnlisten_(e,n,s,l){this.log_("Unlisten on "+e+" for "+n);const u={p:e},d="n";l&&(u.q=s,u.t=l),this.sendRequest(d,u)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,l){const u={p:n,d:s};this.log_("onDisconnect "+e,u),this.sendRequest(e,u,d=>{l&&setTimeout(()=>{l(d.s,d.d)},Math.floor(0))})}put(e,n,s,l){this.putInternal("p",e,n,s,l)}merge(e,n,s,l){this.putInternal("m",e,n,s,l)}putInternal(e,n,s,l,u){this.initConnection_();const d={p:n,d:s};u!==void 0&&(d.h=u),this.outstandingPuts_.push({action:e,request:d,onComplete:l}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,u=>{this.log_(n+" response",u),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(u.s,u.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const u=s.d;this.log_("reportStats","Error sending stats: "+u)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+De(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):tc("Unrecognized action received from server: "+De(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){O(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ns,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ns,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>vC&&(this.reconnectDelay_=ns),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*_C)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+fn.nextConnectionId_++,u=this.lastSessionId;let d=!1,f=null;const m=function(){f?f.close():(d=!0,s())},g=function(y){O(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(y)};this.realtime_={close:m,sendRequest:g};const E=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[y,T]=await Promise.all([this.authTokenProvider_.getToken(E),this.appCheckTokenProvider_.getToken(E)]);d?Qe("getToken() completed but was canceled"):(Qe("getToken() completed. Creating connection."),this.authToken_=y&&y.accessToken,this.appCheckToken_=T&&T.token,f=new dC(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,D=>{yt(D+" ("+this.repoInfo_.toString()+")"),this.interrupt(yC)},u))}catch(y){this.log_("Failed to get token: "+y),d||(this.repoInfo_.nodeAdmin&&yt(y),m())}}}interrupt(e){Qe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Qe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Gu(this.interruptReasons_)&&(this.reconnectDelay_=ns,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(u=>Dc(u)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,n){const s=new ce(e).toString();let l;if(this.listens.has(s)){const u=this.listens.get(s);l=u.get(n),u.delete(n),u.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,n){Qe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=rm&&(this.reconnectDelay_=nm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Qe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=rm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+vg.replace(/\./g,"-")]=1,gc()?e["framework.cordova"]=1:Am()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=cl.getInstance().currentlyOnline();return Gu(this.interruptReasons_)&&e}}fn.nextPersistentConnectionId_=0;fn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Z(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Z(wr,e),l=new Z(wr,n);return this.compare(s,l)!==0}minPost(){return Z.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Go;class Gg extends Tl{static get __EMPTY_NODE(){return Go}static set __EMPTY_NODE(e){Go=e}compare(e,n){return hi(e.name,n.name)}isDefinedOn(e){throw ai("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Z.MIN}maxPost(){return new Z(Gn,Go)}makePost(e,n){return O(typeof e=="string","KeyIndex indexValue must always be a string."),new Z(e,Go)}toString(){return".key"}}const _r=new Gg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n,s,l,u=null){this.isReverse_=l,this.resultGenerator_=u,this.nodeStack_=[];let d=1;for(;!e.isEmpty();)if(e=e,d=n?s(e.key,n):1,l&&(d*=-1),d<0)this.isReverse_?e=e.left:e=e.right;else if(d===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Be{constructor(e,n,s,l,u){this.key=e,this.value=n,this.color=s??Be.RED,this.left=l??ct.EMPTY_NODE,this.right=u??ct.EMPTY_NODE}copy(e,n,s,l,u){return new Be(e??this.key,n??this.value,s??this.color,l??this.left,u??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let l=this;const u=s(e,l.key);return u<0?l=l.copy(null,null,null,l.left.insert(e,n,s),null):u===0?l=l.copy(null,n,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,n,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return ct.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,l;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return ct.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Be.RED=!0;Be.BLACK=!1;class wC{copy(e,n,s,l,u){return this}insert(e,n,s){return new Be(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ct{constructor(e,n=ct.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ct(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Be.BLACK,null,null))}remove(e){return new ct(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Be.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,l=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new qo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new qo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new qo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new qo(this.root_,null,this.comparator_,!0,e)}}ct.EMPTY_NODE=new wC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(i,e){return hi(i.name,e.name)}function Uc(i,e){return hi(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rc;function SC(i){rc=i}const qg=function(i){return typeof i=="number"?"number:"+Sg(i):"string:"+i},Kg=function(i){if(i.isLeafNode()){const e=i.val();O(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Yt(e,".sv"),"Priority must be a string or number.")}else O(i===rc||i.isEmpty(),"priority of unexpected type.");O(i===rc||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let im;class ze{static set __childrenNodeConstructor(e){im=e}static get __childrenNodeConstructor(){return im}constructor(e,n=ze.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,O(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Kg(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ze(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ze.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return J(e)?this:te(e)===".priority"?this.priorityNode_:ze.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ze.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=te(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(O(s!==".priority"||qn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ze.__childrenNodeConstructor.EMPTY_NODE.updateChild(fe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+qg(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Sg(this.value_):e+=this.value_,this.lazyHash_=wg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ze.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ze.__childrenNodeConstructor?-1:(O(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,l=ze.VALUE_TYPE_ORDER.indexOf(n),u=ze.VALUE_TYPE_ORDER.indexOf(s);return O(l>=0,"Unknown leaf type: "+n),O(u>=0,"Unknown leaf type: "+s),l===u?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:u-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ze.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qg,Yg;function CC(i){Qg=i}function IC(i){Yg=i}class TC extends Tl{compare(e,n){const s=e.node.getPriority(),l=n.node.getPriority(),u=s.compareTo(l);return u===0?hi(e.name,n.name):u}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Z.MIN}maxPost(){return new Z(Gn,new ze("[PRIORITY-POST]",Yg))}makePost(e,n){const s=Qg(e);return new Z(n,new ze("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ee=new TC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC=Math.log(2);class NC{constructor(e){const n=u=>parseInt(Math.log(u)/kC,10),s=u=>parseInt(Array(u+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const dl=function(i,e,n,s){i.sort(e);const l=function(m,g){const E=g-m;let y,T;if(E===0)return null;if(E===1)return y=i[m],T=n?n(y):y,new Be(T,y.node,Be.BLACK,null,null);{const D=parseInt(E/2,10)+m,b=l(m,D),V=l(D+1,g);return y=i[D],T=n?n(y):y,new Be(T,y.node,Be.BLACK,b,V)}},u=function(m){let g=null,E=null,y=i.length;const T=function(b,V){const q=y-b,Re=y;y-=b;const Me=l(q+1,Re),Pe=i[q],Ie=n?n(Pe):Pe;D(new Be(Ie,Pe.node,V,null,Me))},D=function(b){g?(g.left=b,g=b):(E=b,g=b)};for(let b=0;b<m.count;++b){const V=m.nextBitIsOne(),q=Math.pow(2,m.count-(b+1));V?T(q,Be.BLACK):(T(q,Be.BLACK),T(q,Be.RED))}return E},d=new NC(i.length),f=u(d);return new ct(s||e,f)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wu;const Qr={};class hn{static get Default(){return O(Qr&&Ee,"ChildrenNode.ts has not been loaded"),Wu=Wu||new hn({".priority":Qr},{".priority":Ee}),Wu}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=ri(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ct?n:null}hasIndex(e){return Yt(this.indexSet_,e.toString())}addIndex(e,n){O(e!==_r,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const u=n.getIterator(Z.Wrap);let d=u.getNext();for(;d;)l=l||e.isDefinedOn(d.node),s.push(d),d=u.getNext();let f;l?f=dl(s,e.getCompare()):f=Qr;const m=e.toString(),g=Object.assign({},this.indexSet_);g[m]=e;const E=Object.assign({},this.indexes_);return E[m]=f,new hn(E,g)}addToIndexes(e,n){const s=tl(this.indexes_,(l,u)=>{const d=ri(this.indexSet_,u);if(O(d,"Missing index implementation for "+u),l===Qr)if(d.isDefinedOn(e.node)){const f=[],m=n.getIterator(Z.Wrap);let g=m.getNext();for(;g;)g.name!==e.name&&f.push(g),g=m.getNext();return f.push(e),dl(f,d.getCompare())}else return Qr;else{const f=n.get(e.name);let m=l;return f&&(m=m.remove(new Z(e.name,f))),m.insert(e,e.node)}});return new hn(s,this.indexSet_)}removeFromIndexes(e,n){const s=tl(this.indexes_,l=>{if(l===Qr)return l;{const u=n.get(e.name);return u?l.remove(new Z(e.name,u)):l}});return new hn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rs;class G{static get EMPTY_NODE(){return rs||(rs=new G(new ct(Uc),null,hn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Kg(this.priorityNode_),this.children_.isEmpty()&&O(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||rs}updatePriority(e){return this.children_.isEmpty()?this:new G(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?rs:n}}getChild(e){const n=te(e);return n===null?this:this.getImmediateChild(n).getChild(fe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(O(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Z(e,n);let l,u;n.isEmpty()?(l=this.children_.remove(e),u=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,n),u=this.indexMap_.addToIndexes(s,this.children_));const d=l.isEmpty()?rs:this.priorityNode_;return new G(l,d,u)}}updateChild(e,n){const s=te(e);if(s===null)return n;{O(te(e)!==".priority"||qn(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(fe(e),n);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,l=0,u=!0;if(this.forEachChild(Ee,(d,f)=>{n[d]=f.val(e),s++,u&&G.INTEGER_REGEXP_.test(d)?l=Math.max(l,Number(d)):u=!1}),!e&&u&&l<2*s){const d=[];for(const f in n)d[f]=n[f];return d}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+qg(this.getPriority().val())+":"),this.forEachChild(Ee,(n,s)=>{const l=s.hash();l!==""&&(e+=":"+n+":"+l)}),this.lazyHash_=e===""?"":wg(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const l=this.resolveIndex_(s);if(l){const u=l.getPredecessorKey(new Z(e,n));return u?u.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Z(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>n(l.name,l.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,Z.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)<0;)l.getNext(),u=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,Z.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)>0;)l.getNext(),u=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ps?-1:0}withIndex(e){if(e===_r||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new G(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===_r||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ee),l=n.getIterator(Ee);let u=s.getNext(),d=l.getNext();for(;u&&d;){if(u.name!==d.name||!u.node.equals(d.node))return!1;u=s.getNext(),d=l.getNext()}return u===null&&d===null}else return!1;else return!1}}resolveIndex_(e){return e===_r?null:this.indexMap_.get(e.toString())}}G.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class RC extends G{constructor(){super(new ct(Uc),G.EMPTY_NODE,hn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return G.EMPTY_NODE}isEmpty(){return!1}}const Ps=new RC;Object.defineProperties(Z,{MIN:{value:new Z(wr,G.EMPTY_NODE)},MAX:{value:new Z(Gn,Ps)}});Gg.__EMPTY_NODE=G.EMPTY_NODE;ze.__childrenNodeConstructor=G;SC(Ps);IC(Ps);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC=!0;function He(i,e=null){if(i===null)return G.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(e=i[".priority"]),O(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const n=i;return new ze(n,He(e))}if(!(i instanceof Array)&&PC){const n=[];let s=!1;if(dt(i,(d,f)=>{if(d.substring(0,1)!=="."){const m=He(f);m.isEmpty()||(s=s||!m.getPriority().isEmpty(),n.push(new Z(d,m)))}}),n.length===0)return G.EMPTY_NODE;const u=dl(n,EC,d=>d.name,Uc);if(s){const d=dl(n,Ee.getCompare());return new G(u,He(e),new hn({".priority":d},{".priority":Ee}))}else return new G(u,He(e),hn.Default)}else{let n=G.EMPTY_NODE;return dt(i,(s,l)=>{if(Yt(i,s)&&s.substring(0,1)!=="."){const u=He(l);(u.isLeafNode()||!u.isEmpty())&&(n=n.updateImmediateChild(s,u))}}),n.updatePriority(He(e))}}CC(He);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc extends Tl{constructor(e){super(),this.indexPath_=e,O(!J(e)&&te(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),l=this.extractChild(n.node),u=s.compareTo(l);return u===0?hi(e.name,n.name):u}makePost(e,n){const s=He(e),l=G.EMPTY_NODE.updateChild(this.indexPath_,s);return new Z(n,l)}maxPost(){const e=G.EMPTY_NODE.updateChild(this.indexPath_,Ps);return new Z(Gn,e)}toString(){return Vg(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC extends Tl{compare(e,n){const s=e.node.compareTo(n.node);return s===0?hi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Z.MIN}maxPost(){return Z.MAX}makePost(e,n){const s=He(e);return new Z(n,s)}toString(){return".value"}}const Xg=new AC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(i){return{type:"value",snapshotNode:i}}function oi(i,e){return{type:"child_added",snapshotNode:e,childName:i}}function ms(i,e){return{type:"child_removed",snapshotNode:e,childName:i}}function gs(i,e,n){return{type:"child_changed",snapshotNode:e,childName:i,oldSnap:n}}function xC(i,e){return{type:"child_moved",snapshotNode:e,childName:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e){this.index_=e}updateChild(e,n,s,l,u,d){O(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(l).equals(s.getChild(l))&&f.isEmpty()===s.isEmpty()||(d!=null&&(s.isEmpty()?e.hasChild(n)?d.trackChildChange(ms(n,f)):O(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?d.trackChildChange(oi(n,s)):d.trackChildChange(gs(n,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Ee,(l,u)=>{n.hasChild(l)||s.trackChildChange(ms(l,u))}),n.isLeafNode()||n.forEachChild(Ee,(l,u)=>{if(e.hasChild(l)){const d=e.getImmediateChild(l);d.equals(u)||s.trackChildChange(gs(l,u,d))}else s.trackChildChange(oi(l,u))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?G.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e){this.indexedFilter_=new Bc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=_s.getStartPost_(e),this.endPost_=_s.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,l,u,d){return this.matches(new Z(n,s))||(s=G.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,l,u,d)}updateFullNode(e,n,s){n.isLeafNode()&&(n=G.EMPTY_NODE);let l=n.withIndex(this.index_);l=l.updatePriority(G.EMPTY_NODE);const u=this;return n.forEachChild(Ee,(d,f)=>{u.matches(new Z(d,f))||(l=l.updateImmediateChild(d,G.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new _s(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,l,u,d){return this.rangedFilter_.matches(new Z(n,s))||(s=G.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,l,u,d):this.fullLimitUpdateChild_(e,n,s,u,d)}updateFullNode(e,n,s){let l;if(n.isLeafNode()||n.isEmpty())l=G.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){l=G.EMPTY_NODE.withIndex(this.index_);let u;this.reverse_?u=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):u=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let d=0;for(;u.hasNext()&&d<this.limit_;){const f=u.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))l=l.updateImmediateChild(f.name,f.node),d++;else break;else continue}}else{l=n.withIndex(this.index_),l=l.updatePriority(G.EMPTY_NODE);let u;this.reverse_?u=l.getReverseIterator(this.index_):u=l.getIterator(this.index_);let d=0;for(;u.hasNext();){const f=u.getNext();d<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?d++:l=l.updateImmediateChild(f.name,G.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,l,u){let d;if(this.reverse_){const y=this.index_.getCompare();d=(T,D)=>y(D,T)}else d=this.index_.getCompare();const f=e;O(f.numChildren()===this.limit_,"");const m=new Z(n,s),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),E=this.rangedFilter_.matches(m);if(f.hasChild(n)){const y=f.getImmediateChild(n);let T=l.getChildAfterChild(this.index_,g,this.reverse_);for(;T!=null&&(T.name===n||f.hasChild(T.name));)T=l.getChildAfterChild(this.index_,T,this.reverse_);const D=T==null?1:d(T,m);if(E&&!s.isEmpty()&&D>=0)return u!=null&&u.trackChildChange(gs(n,s,y)),f.updateImmediateChild(n,s);{u!=null&&u.trackChildChange(ms(n,y));const V=f.updateImmediateChild(n,G.EMPTY_NODE);return T!=null&&this.rangedFilter_.matches(T)?(u!=null&&u.trackChildChange(oi(T.name,T.node)),V.updateImmediateChild(T.name,T.node)):V}}else return s.isEmpty()?e:E&&d(g,m)>=0?(u!=null&&(u.trackChildChange(ms(g.name,g.node)),u.trackChildChange(oi(n,s))),f.updateImmediateChild(n,s).updateImmediateChild(g.name,G.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ee}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return O(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return O(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:wr}hasEnd(){return this.endSet_}getIndexEndValue(){return O(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return O(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Gn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return O(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ee}copy(){const e=new Wc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function DC(i){return i.loadsAllData()?new Bc(i.getIndex()):i.hasLimit()?new OC(i):new _s(i)}function LC(i,e,n){const s=i.copy();return s.startSet_=!0,e===void 0&&(e=null),s.indexStartValue_=e,n!=null?(s.startNameSet_=!0,s.indexStartName_=n):(s.startNameSet_=!1,s.indexStartName_=""),s}function MC(i,e,n){const s=i.copy();return s.endSet_=!0,e===void 0&&(e=null),s.indexEndValue_=e,n!==void 0?(s.endNameSet_=!0,s.indexEndName_=n):(s.endNameSet_=!1,s.indexEndName_=""),s}function bC(i,e){const n=i.copy();return n.index_=e,n}function sm(i){const e={};if(i.isDefault())return e;let n;if(i.index_===Ee?n="$priority":i.index_===Xg?n="$value":i.index_===_r?n="$key":(O(i.index_ instanceof zc,"Unrecognized index type!"),n=i.index_.toString()),e.orderBy=De(n),i.startSet_){const s=i.startAfterSet_?"startAfter":"startAt";e[s]=De(i.indexStartValue_),i.startNameSet_&&(e[s]+=","+De(i.indexStartName_))}if(i.endSet_){const s=i.endBeforeSet_?"endBefore":"endAt";e[s]=De(i.indexEndValue_),i.endNameSet_&&(e[s]+=","+De(i.indexEndName_))}return i.limitSet_&&(i.isViewFromLeft()?e.limitToFirst=i.limit_:e.limitToLast=i.limit_),e}function om(i){const e={};if(i.startSet_&&(e.sp=i.indexStartValue_,i.startNameSet_&&(e.sn=i.indexStartName_),e.sin=!i.startAfterSet_),i.endSet_&&(e.ep=i.indexEndValue_,i.endNameSet_&&(e.en=i.indexEndName_),e.ein=!i.endBeforeSet_),i.limitSet_){e.l=i.limit_;let n=i.viewFrom_;n===""&&(i.isViewFromLeft()?n="l":n="r"),e.vf=n}return i.index_!==Ee&&(e.i=i.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl extends zg{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(O(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=Ns("p:rest:"),this.listens_={}}listen(e,n,s,l){const u=e._path.toString();this.log_("Listen called for "+u+" "+e._queryIdentifier);const d=hl.getListenId_(e,s),f={};this.listens_[d]=f;const m=sm(e._queryParams);this.restRequest_(u+".json",m,(g,E)=>{let y=E;if(g===404&&(y=null,g=null),g===null&&this.onDataUpdate_(u,y,!1,s),ri(this.listens_,d)===f){let T;g?g===401?T="permission_denied":T="rest_error:"+g:T="ok",l(T,null)}})}unlisten(e,n){const s=hl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=sm(e._queryParams),s=e._path.toString(),l=new mc;return this.restRequest_(s+".json",n,(u,d)=>{let f=d;u===404&&(f=null,u=null),u===null?(this.onDataUpdate_(s,f,!1,null),l.resolve(f)):l.reject(new Error(f))}),l.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,u])=>{l&&l.accessToken&&(n.auth=l.accessToken),u&&u.token&&(n.ac=u.token);const d=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ui(n);this.log_("Sending REST request for "+d);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+d+" received. status:",f.status,"response:",f.responseText);let m=null;if(f.status>=200&&f.status<300){try{m=ds(f.responseText)}catch{yt("Failed to parse JSON response for "+d+": "+f.responseText)}s(null,m)}else f.status!==401&&f.status!==404&&yt("Got unsuccessful REST response for "+d+" Status: "+f.status),s(f.status);s=null}},f.open("GET",d,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(){this.rootNode_=G.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(){return{value:null,children:new Map}}function Zg(i,e,n){if(J(e))i.value=n,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(e,n);else{const s=te(e);i.children.has(s)||i.children.set(s,fl());const l=i.children.get(s);e=fe(e),Zg(l,e,n)}}function ic(i,e,n){i.value!==null?n(e,i.value):UC(i,(s,l)=>{const u=new ce(e.toString()+"/"+s);ic(l,u,n)})}function UC(i,e){i.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&dt(this.last_,(s,l)=>{n[s]=n[s]-l}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm=10*1e3,BC=30*1e3,WC=5*60*1e3;class VC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new zC(e);const s=lm+(BC-lm)*Math.random();ls(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;dt(e,(l,u)=>{u>0&&Yt(this.statsToReport_,l)&&(n[l]=u,s=!0)}),s&&this.server_.reportStats(n),ls(this.reportStats_.bind(this),Math.floor(Math.random()*2*WC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ut;(function(i){i[i.OVERWRITE=0]="OVERWRITE",i[i.MERGE=1]="MERGE",i[i.ACK_USER_WRITE=2]="ACK_USER_WRITE",i[i.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ut||(Ut={}));function e_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Vc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function jc(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Ut.ACK_USER_WRITE,this.source=e_()}operationForChild(e){if(J(this.path)){if(this.affectedTree.value!=null)return O(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ce(e));return new pl(oe(),n,this.revert)}}else return O(te(this.path)===e,"operationForChild called for unrelated child."),new pl(fe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n){this.source=e,this.path=n,this.type=Ut.LISTEN_COMPLETE}operationForChild(e){return J(this.path)?new vs(this.source,oe()):new vs(this.source,fe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Ut.OVERWRITE}operationForChild(e){return J(this.path)?new Er(this.source,oe(),this.snap.getImmediateChild(e)):new Er(this.source,fe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Ut.MERGE}operationForChild(e){if(J(this.path)){const n=this.children.subtree(new ce(e));return n.isEmpty()?null:n.value?new Er(this.source,oe(),n.value):new ys(this.source,oe(),n)}else return O(te(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ys(this.source,fe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(J(e))return this.isFullyInitialized()&&!this.filtered_;const n=te(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function HC(i,e,n,s){const l=[],u=[];return e.forEach(d=>{d.type==="child_changed"&&i.index_.indexedValueChanged(d.oldSnap,d.snapshotNode)&&u.push(xC(d.childName,d.snapshotNode))}),is(i,l,"child_removed",e,s,n),is(i,l,"child_added",e,s,n),is(i,l,"child_moved",u,s,n),is(i,l,"child_changed",e,s,n),is(i,l,"value",e,s,n),l}function is(i,e,n,s,l,u){const d=s.filter(f=>f.type===n);d.sort((f,m)=>GC(i,f,m)),d.forEach(f=>{const m=$C(i,f,u);l.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(m,i.query_))})})}function $C(i,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,i.index_)),e}function GC(i,e,n){if(e.childName==null||n.childName==null)throw ai("Should only compare child_ events.");const s=new Z(e.childName,e.snapshotNode),l=new Z(n.childName,n.snapshotNode);return i.index_.compare(s,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(i,e){return{eventCache:i,serverCache:e}}function as(i,e,n,s){return kl(new Kn(e,n,s),i.serverCache)}function t_(i,e,n,s){return kl(i.eventCache,new Kn(e,n,s))}function ml(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function Sr(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vu;const qC=()=>(Vu||(Vu=new ct(xS)),Vu);class ge{static fromObject(e){let n=new ge(null);return dt(e,(s,l)=>{n=n.set(new ce(s),l)}),n}constructor(e,n=qC()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:oe(),value:this.value};if(J(e))return null;{const s=te(e),l=this.children.get(s);if(l!==null){const u=l.findRootMostMatchingPathAndValue(fe(e),n);return u!=null?{path:Le(new ce(s),u.path),value:u.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(J(e))return this;{const n=te(e),s=this.children.get(n);return s!==null?s.subtree(fe(e)):new ge(null)}}set(e,n){if(J(e))return new ge(n,this.children);{const s=te(e),u=(this.children.get(s)||new ge(null)).set(fe(e),n),d=this.children.insert(s,u);return new ge(this.value,d)}}remove(e){if(J(e))return this.children.isEmpty()?new ge(null):new ge(null,this.children);{const n=te(e),s=this.children.get(n);if(s){const l=s.remove(fe(e));let u;return l.isEmpty()?u=this.children.remove(n):u=this.children.insert(n,l),this.value===null&&u.isEmpty()?new ge(null):new ge(this.value,u)}else return this}}get(e){if(J(e))return this.value;{const n=te(e),s=this.children.get(n);return s?s.get(fe(e)):null}}setTree(e,n){if(J(e))return n;{const s=te(e),u=(this.children.get(s)||new ge(null)).setTree(fe(e),n);let d;return u.isEmpty()?d=this.children.remove(s):d=this.children.insert(s,u),new ge(this.value,d)}}fold(e){return this.fold_(oe(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((l,u)=>{s[l]=u.fold_(Le(e,l),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,oe(),n)}findOnPath_(e,n,s){const l=this.value?s(n,this.value):!1;if(l)return l;if(J(e))return null;{const u=te(e),d=this.children.get(u);return d?d.findOnPath_(fe(e),Le(n,u),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,oe(),n)}foreachOnPath_(e,n,s){if(J(e))return this;{this.value&&s(n,this.value);const l=te(e),u=this.children.get(l);return u?u.foreachOnPath_(fe(e),Le(n,l),s):new ge(null)}}foreach(e){this.foreach_(oe(),e)}foreach_(e,n){this.children.inorderTraversal((s,l)=>{l.foreach_(Le(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.writeTree_=e}static empty(){return new Bt(new ge(null))}}function us(i,e,n){if(J(e))return new Bt(new ge(n));{const s=i.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let u=s.value;const d=Ze(l,e);return u=u.updateChild(d,n),new Bt(i.writeTree_.set(l,u))}else{const l=new ge(n),u=i.writeTree_.setTree(e,l);return new Bt(u)}}}function am(i,e,n){let s=i;return dt(n,(l,u)=>{s=us(s,Le(e,l),u)}),s}function um(i,e){if(J(e))return Bt.empty();{const n=i.writeTree_.setTree(e,new ge(null));return new Bt(n)}}function sc(i,e){return Cr(i,e)!=null}function Cr(i,e){const n=i.writeTree_.findRootMostValueAndPath(e);return n!=null?i.writeTree_.get(n.path).getChild(Ze(n.path,e)):null}function cm(i){const e=[],n=i.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ee,(s,l)=>{e.push(new Z(s,l))}):i.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new Z(s,l.value))}),e}function Hn(i,e){if(J(e))return i;{const n=Cr(i,e);return n!=null?new Bt(new ge(n)):new Bt(i.writeTree_.subtree(e))}}function oc(i){return i.writeTree_.isEmpty()}function li(i,e){return n_(oe(),i.writeTree_,e)}function n_(i,e,n){if(e.value!=null)return n.updateChild(i,e.value);{let s=null;return e.children.inorderTraversal((l,u)=>{l===".priority"?(O(u.value!==null,"Priority writes must always be leaf nodes"),s=u.value):n=n_(Le(i,l),u,n)}),!n.getChild(i).isEmpty()&&s!==null&&(n=n.updateChild(Le(i,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(i,e){return o_(e,i)}function KC(i,e,n,s,l){O(s>i.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),i.allWrites.push({path:e,snap:n,writeId:s,visible:l}),l&&(i.visibleWrites=us(i.visibleWrites,e,n)),i.lastWriteId=s}function QC(i,e){for(let n=0;n<i.allWrites.length;n++){const s=i.allWrites[n];if(s.writeId===e)return s}return null}function YC(i,e){const n=i.allWrites.findIndex(f=>f.writeId===e);O(n>=0,"removeWrite called with nonexistent writeId.");const s=i.allWrites[n];i.allWrites.splice(n,1);let l=s.visible,u=!1,d=i.allWrites.length-1;for(;l&&d>=0;){const f=i.allWrites[d];f.visible&&(d>=n&&XC(f,s.path)?l=!1:Ft(s.path,f.path)&&(u=!0)),d--}if(l){if(u)return JC(i),!0;if(s.snap)i.visibleWrites=um(i.visibleWrites,s.path);else{const f=s.children;dt(f,m=>{i.visibleWrites=um(i.visibleWrites,Le(s.path,m))})}return!0}else return!1}function XC(i,e){if(i.snap)return Ft(i.path,e);for(const n in i.children)if(i.children.hasOwnProperty(n)&&Ft(Le(i.path,n),e))return!0;return!1}function JC(i){i.visibleWrites=r_(i.allWrites,ZC,oe()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function ZC(i){return i.visible}function r_(i,e,n){let s=Bt.empty();for(let l=0;l<i.length;++l){const u=i[l];if(e(u)){const d=u.path;let f;if(u.snap)Ft(n,d)?(f=Ze(n,d),s=us(s,f,u.snap)):Ft(d,n)&&(f=Ze(d,n),s=us(s,oe(),u.snap.getChild(f)));else if(u.children){if(Ft(n,d))f=Ze(n,d),s=am(s,f,u.children);else if(Ft(d,n))if(f=Ze(d,n),J(f))s=am(s,oe(),u.children);else{const m=ri(u.children,te(f));if(m){const g=m.getChild(fe(f));s=us(s,oe(),g)}}}else throw ai("WriteRecord should have .snap or .children")}}return s}function i_(i,e,n,s,l){if(!s&&!l){const u=Cr(i.visibleWrites,e);if(u!=null)return u;{const d=Hn(i.visibleWrites,e);if(oc(d))return n;if(n==null&&!sc(d,oe()))return null;{const f=n||G.EMPTY_NODE;return li(d,f)}}}else{const u=Hn(i.visibleWrites,e);if(!l&&oc(u))return n;if(!l&&n==null&&!sc(u,oe()))return null;{const d=function(g){return(g.visible||l)&&(!s||!~s.indexOf(g.writeId))&&(Ft(g.path,e)||Ft(e,g.path))},f=r_(i.allWrites,d,e),m=n||G.EMPTY_NODE;return li(f,m)}}}function eI(i,e,n){let s=G.EMPTY_NODE;const l=Cr(i.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(Ee,(u,d)=>{s=s.updateImmediateChild(u,d)}),s;if(n){const u=Hn(i.visibleWrites,e);return n.forEachChild(Ee,(d,f)=>{const m=li(Hn(u,new ce(d)),f);s=s.updateImmediateChild(d,m)}),cm(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}else{const u=Hn(i.visibleWrites,e);return cm(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}}function tI(i,e,n,s,l){O(s||l,"Either existingEventSnap or existingServerSnap must exist");const u=Le(e,n);if(sc(i.visibleWrites,u))return null;{const d=Hn(i.visibleWrites,u);return oc(d)?l.getChild(n):li(d,l.getChild(n))}}function nI(i,e,n,s){const l=Le(e,n),u=Cr(i.visibleWrites,l);if(u!=null)return u;if(s.isCompleteForChild(n)){const d=Hn(i.visibleWrites,l);return li(d,s.getNode().getImmediateChild(n))}else return null}function rI(i,e){return Cr(i.visibleWrites,e)}function iI(i,e,n,s,l,u,d){let f;const m=Hn(i.visibleWrites,e),g=Cr(m,oe());if(g!=null)f=g;else if(n!=null)f=li(m,n);else return[];if(f=f.withIndex(d),!f.isEmpty()&&!f.isLeafNode()){const E=[],y=d.getCompare(),T=u?f.getReverseIteratorFrom(s,d):f.getIteratorFrom(s,d);let D=T.getNext();for(;D&&E.length<l;)y(D,s)!==0&&E.push(D),D=T.getNext();return E}else return[]}function sI(){return{visibleWrites:Bt.empty(),allWrites:[],lastWriteId:-1}}function gl(i,e,n,s){return i_(i.writeTree,i.treePath,e,n,s)}function Hc(i,e){return eI(i.writeTree,i.treePath,e)}function dm(i,e,n,s){return tI(i.writeTree,i.treePath,e,n,s)}function _l(i,e){return rI(i.writeTree,Le(i.treePath,e))}function oI(i,e,n,s,l,u){return iI(i.writeTree,i.treePath,e,n,s,l,u)}function $c(i,e,n){return nI(i.writeTree,i.treePath,e,n)}function s_(i,e){return o_(Le(i.treePath,e),i.writeTree)}function o_(i,e){return{treePath:i,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;O(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),O(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const u=l.type;if(n==="child_added"&&u==="child_removed")this.changeMap.set(s,gs(s,e.snapshotNode,l.snapshotNode));else if(n==="child_removed"&&u==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&u==="child_changed")this.changeMap.set(s,ms(s,l.oldSnap));else if(n==="child_changed"&&u==="child_added")this.changeMap.set(s,oi(s,e.snapshotNode));else if(n==="child_changed"&&u==="child_changed")this.changeMap.set(s,gs(s,e.snapshotNode,l.oldSnap));else throw ai("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const l_=new aI;class Gc{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Kn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return $c(this.writes_,e,s)}}getChildAfterChild(e,n,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Sr(this.viewCache_),u=oI(this.writes_,l,n,1,s,e);return u.length===0?null:u[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(i){return{filter:i}}function cI(i,e){O(e.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),O(e.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function dI(i,e,n,s,l){const u=new lI;let d,f;if(n.type===Ut.OVERWRITE){const g=n;g.source.fromUser?d=lc(i,e,g.path,g.snap,s,l,u):(O(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!J(g.path),d=vl(i,e,g.path,g.snap,s,l,f,u))}else if(n.type===Ut.MERGE){const g=n;g.source.fromUser?d=fI(i,e,g.path,g.children,s,l,u):(O(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),d=ac(i,e,g.path,g.children,s,l,f,u))}else if(n.type===Ut.ACK_USER_WRITE){const g=n;g.revert?d=gI(i,e,g.path,s,l,u):d=pI(i,e,g.path,g.affectedTree,s,l,u)}else if(n.type===Ut.LISTEN_COMPLETE)d=mI(i,e,n.path,s,u);else throw ai("Unknown operation type: "+n.type);const m=u.getChanges();return hI(e,d,m),{viewCache:d,changes:m}}function hI(i,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),u=ml(i);(n.length>0||!i.eventCache.isFullyInitialized()||l&&!s.getNode().equals(u)||!s.getNode().getPriority().equals(u.getPriority()))&&n.push(Jg(ml(e)))}}function a_(i,e,n,s,l,u){const d=e.eventCache;if(_l(s,n)!=null)return e;{let f,m;if(J(n))if(O(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Sr(e),E=g instanceof G?g:G.EMPTY_NODE,y=Hc(s,E);f=i.filter.updateFullNode(e.eventCache.getNode(),y,u)}else{const g=gl(s,Sr(e));f=i.filter.updateFullNode(e.eventCache.getNode(),g,u)}else{const g=te(n);if(g===".priority"){O(qn(n)===1,"Can't have a priority with additional path components");const E=d.getNode();m=e.serverCache.getNode();const y=dm(s,n,E,m);y!=null?f=i.filter.updatePriority(E,y):f=d.getNode()}else{const E=fe(n);let y;if(d.isCompleteForChild(g)){m=e.serverCache.getNode();const T=dm(s,n,d.getNode(),m);T!=null?y=d.getNode().getImmediateChild(g).updateChild(E,T):y=d.getNode().getImmediateChild(g)}else y=$c(s,g,e.serverCache);y!=null?f=i.filter.updateChild(d.getNode(),g,y,E,l,u):f=d.getNode()}}return as(e,f,d.isFullyInitialized()||J(n),i.filter.filtersNodes())}}function vl(i,e,n,s,l,u,d,f){const m=e.serverCache;let g;const E=d?i.filter:i.filter.getIndexedFilter();if(J(n))g=E.updateFullNode(m.getNode(),s,null);else if(E.filtersNodes()&&!m.isFiltered()){const D=m.getNode().updateChild(n,s);g=E.updateFullNode(m.getNode(),D,null)}else{const D=te(n);if(!m.isCompleteForPath(n)&&qn(n)>1)return e;const b=fe(n),q=m.getNode().getImmediateChild(D).updateChild(b,s);D===".priority"?g=E.updatePriority(m.getNode(),q):g=E.updateChild(m.getNode(),D,q,b,l_,null)}const y=t_(e,g,m.isFullyInitialized()||J(n),E.filtersNodes()),T=new Gc(l,y,u);return a_(i,y,n,l,T,f)}function lc(i,e,n,s,l,u,d){const f=e.eventCache;let m,g;const E=new Gc(l,e,u);if(J(n))g=i.filter.updateFullNode(e.eventCache.getNode(),s,d),m=as(e,g,!0,i.filter.filtersNodes());else{const y=te(n);if(y===".priority")g=i.filter.updatePriority(e.eventCache.getNode(),s),m=as(e,g,f.isFullyInitialized(),f.isFiltered());else{const T=fe(n),D=f.getNode().getImmediateChild(y);let b;if(J(T))b=s;else{const V=E.getCompleteChild(y);V!=null?Wg(T)===".priority"&&V.getChild(jg(T)).isEmpty()?b=V:b=V.updateChild(T,s):b=G.EMPTY_NODE}if(D.equals(b))m=e;else{const V=i.filter.updateChild(f.getNode(),y,b,T,E,d);m=as(e,V,f.isFullyInitialized(),i.filter.filtersNodes())}}}return m}function hm(i,e){return i.eventCache.isCompleteForChild(e)}function fI(i,e,n,s,l,u,d){let f=e;return s.foreach((m,g)=>{const E=Le(n,m);hm(e,te(E))&&(f=lc(i,f,E,g,l,u,d))}),s.foreach((m,g)=>{const E=Le(n,m);hm(e,te(E))||(f=lc(i,f,E,g,l,u,d))}),f}function fm(i,e,n){return n.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function ac(i,e,n,s,l,u,d,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let m=e,g;J(n)?g=s:g=new ge(null).setTree(n,s);const E=e.serverCache.getNode();return g.children.inorderTraversal((y,T)=>{if(E.hasChild(y)){const D=e.serverCache.getNode().getImmediateChild(y),b=fm(i,D,T);m=vl(i,m,new ce(y),b,l,u,d,f)}}),g.children.inorderTraversal((y,T)=>{const D=!e.serverCache.isCompleteForChild(y)&&T.value===null;if(!E.hasChild(y)&&!D){const b=e.serverCache.getNode().getImmediateChild(y),V=fm(i,b,T);m=vl(i,m,new ce(y),V,l,u,d,f)}}),m}function pI(i,e,n,s,l,u,d){if(_l(l,n)!=null)return e;const f=e.serverCache.isFiltered(),m=e.serverCache;if(s.value!=null){if(J(n)&&m.isFullyInitialized()||m.isCompleteForPath(n))return vl(i,e,n,m.getNode().getChild(n),l,u,f,d);if(J(n)){let g=new ge(null);return m.getNode().forEachChild(_r,(E,y)=>{g=g.set(new ce(E),y)}),ac(i,e,n,g,l,u,f,d)}else return e}else{let g=new ge(null);return s.foreach((E,y)=>{const T=Le(n,E);m.isCompleteForPath(T)&&(g=g.set(E,m.getNode().getChild(T)))}),ac(i,e,n,g,l,u,f,d)}}function mI(i,e,n,s,l){const u=e.serverCache,d=t_(e,u.getNode(),u.isFullyInitialized()||J(n),u.isFiltered());return a_(i,d,n,s,l_,l)}function gI(i,e,n,s,l,u){let d;if(_l(s,n)!=null)return e;{const f=new Gc(s,e,l),m=e.eventCache.getNode();let g;if(J(n)||te(n)===".priority"){let E;if(e.serverCache.isFullyInitialized())E=gl(s,Sr(e));else{const y=e.serverCache.getNode();O(y instanceof G,"serverChildren would be complete if leaf node"),E=Hc(s,y)}E=E,g=i.filter.updateFullNode(m,E,u)}else{const E=te(n);let y=$c(s,E,e.serverCache);y==null&&e.serverCache.isCompleteForChild(E)&&(y=m.getImmediateChild(E)),y!=null?g=i.filter.updateChild(m,E,y,fe(n),f,u):e.eventCache.getNode().hasChild(E)?g=i.filter.updateChild(m,E,G.EMPTY_NODE,fe(n),f,u):g=m,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(d=gl(s,Sr(e)),d.isLeafNode()&&(g=i.filter.updateFullNode(g,d,u)))}return d=e.serverCache.isFullyInitialized()||_l(s,oe())!=null,as(e,g,d,i.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new Bc(s.getIndex()),u=DC(s);this.processor_=uI(u);const d=n.serverCache,f=n.eventCache,m=l.updateFullNode(G.EMPTY_NODE,d.getNode(),null),g=u.updateFullNode(G.EMPTY_NODE,f.getNode(),null),E=new Kn(m,d.isFullyInitialized(),l.filtersNodes()),y=new Kn(g,f.isFullyInitialized(),u.filtersNodes());this.viewCache_=kl(y,E),this.eventGenerator_=new jC(this.query_)}get query(){return this.query_}}function vI(i){return i.viewCache_.serverCache.getNode()}function yI(i){return ml(i.viewCache_)}function wI(i,e){const n=Sr(i.viewCache_);return n&&(i.query._queryParams.loadsAllData()||!J(e)&&!n.getImmediateChild(te(e)).isEmpty())?n.getChild(e):null}function pm(i){return i.eventRegistrations_.length===0}function EI(i,e){i.eventRegistrations_.push(e)}function mm(i,e,n){const s=[];if(n){O(e==null,"A cancel should cancel all event registrations.");const l=i.query._path;i.eventRegistrations_.forEach(u=>{const d=u.createCancelEvent(n,l);d&&s.push(d)})}if(e){let l=[];for(let u=0;u<i.eventRegistrations_.length;++u){const d=i.eventRegistrations_[u];if(!d.matches(e))l.push(d);else if(e.hasAnyCallback()){l=l.concat(i.eventRegistrations_.slice(u+1));break}}i.eventRegistrations_=l}else i.eventRegistrations_=[];return s}function gm(i,e,n,s){e.type===Ut.MERGE&&e.source.queryId!==null&&(O(Sr(i.viewCache_),"We should always have a full cache before handling merges"),O(ml(i.viewCache_),"Missing event cache, even though we have a server cache"));const l=i.viewCache_,u=dI(i.processor_,l,e,n,s);return cI(i.processor_,u.viewCache),O(u.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=u.viewCache,u_(i,u.changes,u.viewCache.eventCache.getNode(),null)}function SI(i,e){const n=i.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ee,(u,d)=>{s.push(oi(u,d))}),n.isFullyInitialized()&&s.push(Jg(n.getNode())),u_(i,s,n.getNode(),e)}function u_(i,e,n,s){const l=s?[s]:i.eventRegistrations_;return HC(i.eventGenerator_,e,n,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yl;class c_{constructor(){this.views=new Map}}function CI(i){O(!yl,"__referenceConstructor has already been defined"),yl=i}function II(){return O(yl,"Reference.ts has not been loaded"),yl}function TI(i){return i.views.size===0}function qc(i,e,n,s){const l=e.source.queryId;if(l!==null){const u=i.views.get(l);return O(u!=null,"SyncTree gave us an op for an invalid query."),gm(u,e,n,s)}else{let u=[];for(const d of i.views.values())u=u.concat(gm(d,e,n,s));return u}}function d_(i,e,n,s,l){const u=e._queryIdentifier,d=i.views.get(u);if(!d){let f=gl(n,l?s:null),m=!1;f?m=!0:s instanceof G?(f=Hc(n,s),m=!1):(f=G.EMPTY_NODE,m=!1);const g=kl(new Kn(f,m,!1),new Kn(s,l,!1));return new _I(e,g)}return d}function kI(i,e,n,s,l,u){const d=d_(i,e,s,l,u);return i.views.has(e._queryIdentifier)||i.views.set(e._queryIdentifier,d),EI(d,n),SI(d,n)}function NI(i,e,n,s){const l=e._queryIdentifier,u=[];let d=[];const f=Qn(i);if(l==="default")for(const[m,g]of i.views.entries())d=d.concat(mm(g,n,s)),pm(g)&&(i.views.delete(m),g.query._queryParams.loadsAllData()||u.push(g.query));else{const m=i.views.get(l);m&&(d=d.concat(mm(m,n,s)),pm(m)&&(i.views.delete(l),m.query._queryParams.loadsAllData()||u.push(m.query)))}return f&&!Qn(i)&&u.push(new(II())(e._repo,e._path)),{removed:u,events:d}}function h_(i){const e=[];for(const n of i.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function $n(i,e){let n=null;for(const s of i.views.values())n=n||wI(s,e);return n}function f_(i,e){if(e._queryParams.loadsAllData())return Rl(i);{const s=e._queryIdentifier;return i.views.get(s)}}function p_(i,e){return f_(i,e)!=null}function Qn(i){return Rl(i)!=null}function Rl(i){for(const e of i.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wl;function RI(i){O(!wl,"__referenceConstructor has already been defined"),wl=i}function PI(){return O(wl,"Reference.ts has not been loaded"),wl}let AI=1;class _m{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ge(null),this.pendingWriteTree_=sI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function xI(i,e,n,s,l){return KC(i.pendingWriteTree_,e,n,s,l),l?xs(i,new Er(e_(),e,n)):[]}function Jr(i,e,n=!1){const s=QC(i.pendingWriteTree_,e);if(YC(i.pendingWriteTree_,e)){let u=new ge(null);return s.snap!=null?u=u.set(oe(),!0):dt(s.children,d=>{u=u.set(new ce(d),!0)}),xs(i,new pl(s.path,u,n))}else return[]}function As(i,e,n){return xs(i,new Er(Vc(),e,n))}function OI(i,e,n){const s=ge.fromObject(n);return xs(i,new ys(Vc(),e,s))}function DI(i,e){return xs(i,new vs(Vc(),e))}function LI(i,e,n){const s=Kc(i,n);if(s){const l=Qc(s),u=l.path,d=l.queryId,f=Ze(u,e),m=new vs(jc(d),f);return Yc(i,u,m)}else return[]}function m_(i,e,n,s,l=!1){const u=e._path,d=i.syncPointTree_.get(u);let f=[];if(d&&(e._queryIdentifier==="default"||p_(d,e))){const m=NI(d,e,n,s);TI(d)&&(i.syncPointTree_=i.syncPointTree_.remove(u));const g=m.removed;if(f=m.events,!l){const E=g.findIndex(T=>T._queryParams.loadsAllData())!==-1,y=i.syncPointTree_.findOnPath(u,(T,D)=>Qn(D));if(E&&!y){const T=i.syncPointTree_.subtree(u);if(!T.isEmpty()){const D=UI(T);for(let b=0;b<D.length;++b){const V=D[b],q=V.query,Re=w_(i,V);i.listenProvider_.startListening(cs(q),ws(i,q),Re.hashFn,Re.onComplete)}}}!y&&g.length>0&&!s&&(E?i.listenProvider_.stopListening(cs(e),null):g.forEach(T=>{const D=i.queryToTagMap.get(Pl(T));i.listenProvider_.stopListening(cs(T),D)}))}zI(i,g)}return f}function g_(i,e,n,s){const l=Kc(i,s);if(l!=null){const u=Qc(l),d=u.path,f=u.queryId,m=Ze(d,e),g=new Er(jc(f),m,n);return Yc(i,d,g)}else return[]}function MI(i,e,n,s){const l=Kc(i,s);if(l){const u=Qc(l),d=u.path,f=u.queryId,m=Ze(d,e),g=ge.fromObject(n),E=new ys(jc(f),m,g);return Yc(i,d,E)}else return[]}function bI(i,e,n,s=!1){const l=e._path;let u=null,d=!1;i.syncPointTree_.foreachOnPath(l,(T,D)=>{const b=Ze(T,l);u=u||$n(D,b),d=d||Qn(D)});let f=i.syncPointTree_.get(l);f?(d=d||Qn(f),u=u||$n(f,oe())):(f=new c_,i.syncPointTree_=i.syncPointTree_.set(l,f));let m;u!=null?m=!0:(m=!1,u=G.EMPTY_NODE,i.syncPointTree_.subtree(l).foreachChild((D,b)=>{const V=$n(b,oe());V&&(u=u.updateImmediateChild(D,V))}));const g=p_(f,e);if(!g&&!e._queryParams.loadsAllData()){const T=Pl(e);O(!i.queryToTagMap.has(T),"View does not exist, but we have a tag");const D=BI();i.queryToTagMap.set(T,D),i.tagToQueryMap.set(D,T)}const E=Nl(i.pendingWriteTree_,l);let y=kI(f,e,n,E,u,m);if(!g&&!d&&!s){const T=f_(f,e);y=y.concat(WI(i,e,T))}return y}function __(i,e,n){const l=i.pendingWriteTree_,u=i.syncPointTree_.findOnPath(e,(d,f)=>{const m=Ze(d,e),g=$n(f,m);if(g)return g});return i_(l,e,u,n,!0)}function FI(i,e){const n=e._path;let s=null;i.syncPointTree_.foreachOnPath(n,(g,E)=>{const y=Ze(g,n);s=s||$n(E,y)});let l=i.syncPointTree_.get(n);l?s=s||$n(l,oe()):(l=new c_,i.syncPointTree_=i.syncPointTree_.set(n,l));const u=s!=null,d=u?new Kn(s,!0,!1):null,f=Nl(i.pendingWriteTree_,e._path),m=d_(l,e,f,u?d.getNode():G.EMPTY_NODE,u);return yI(m)}function xs(i,e){return v_(e,i.syncPointTree_,null,Nl(i.pendingWriteTree_,oe()))}function v_(i,e,n,s){if(J(i.path))return y_(i,e,n,s);{const l=e.get(oe());n==null&&l!=null&&(n=$n(l,oe()));let u=[];const d=te(i.path),f=i.operationForChild(d),m=e.children.get(d);if(m&&f){const g=n?n.getImmediateChild(d):null,E=s_(s,d);u=u.concat(v_(f,m,g,E))}return l&&(u=u.concat(qc(l,i,s,n))),u}}function y_(i,e,n,s){const l=e.get(oe());n==null&&l!=null&&(n=$n(l,oe()));let u=[];return e.children.inorderTraversal((d,f)=>{const m=n?n.getImmediateChild(d):null,g=s_(s,d),E=i.operationForChild(d);E&&(u=u.concat(y_(E,f,m,g)))}),l&&(u=u.concat(qc(l,i,s,n))),u}function w_(i,e){const n=e.query,s=ws(i,n);return{hashFn:()=>(vI(e)||G.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?LI(i,n._path,s):DI(i,n._path);{const u=LS(l,n);return m_(i,n,null,u)}}}}function ws(i,e){const n=Pl(e);return i.queryToTagMap.get(n)}function Pl(i){return i._path.toString()+"$"+i._queryIdentifier}function Kc(i,e){return i.tagToQueryMap.get(e)}function Qc(i){const e=i.indexOf("$");return O(e!==-1&&e<i.length-1,"Bad queryKey."),{queryId:i.substr(e+1),path:new ce(i.substr(0,e))}}function Yc(i,e,n){const s=i.syncPointTree_.get(e);O(s,"Missing sync point for query tag that we're tracking");const l=Nl(i.pendingWriteTree_,e);return qc(s,n,l,null)}function UI(i){return i.fold((e,n,s)=>{if(n&&Qn(n))return[Rl(n)];{let l=[];return n&&(l=h_(n)),dt(s,(u,d)=>{l=l.concat(d)}),l}})}function cs(i){return i._queryParams.loadsAllData()&&!i._queryParams.isDefault()?new(PI())(i._repo,i._path):i}function zI(i,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const l=Pl(s),u=i.queryToTagMap.get(l);i.queryToTagMap.delete(l),i.tagToQueryMap.delete(u)}}}function BI(){return AI++}function WI(i,e,n){const s=e._path,l=ws(i,e),u=w_(i,n),d=i.listenProvider_.startListening(cs(e),l,u.hashFn,u.onComplete),f=i.syncPointTree_.subtree(s);if(l)O(!Qn(f.value),"If we're adding a query, it shouldn't be shadowed");else{const m=f.fold((g,E,y)=>{if(!J(g)&&E&&Qn(E))return[Rl(E).query];{let T=[];return E&&(T=T.concat(h_(E).map(D=>D.query))),dt(y,(D,b)=>{T=T.concat(b)}),T}});for(let g=0;g<m.length;++g){const E=m[g];i.listenProvider_.stopListening(cs(E),ws(i,E))}}return d}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Xc(n)}node(){return this.node_}}class Jc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Le(this.path_,e);return new Jc(this.syncTree_,n)}node(){return __(this.syncTree_,this.path_)}}const VI=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},vm=function(i,e,n){if(!i||typeof i!="object")return i;if(O(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return jI(i[".sv"],e,n);if(typeof i[".sv"]=="object")return HI(i[".sv"],e);O(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},jI=function(i,e,n){switch(i){case"timestamp":return n.timestamp;default:O(!1,"Unexpected server value: "+i)}},HI=function(i,e,n){i.hasOwnProperty("increment")||O(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const s=i.increment;typeof s!="number"&&O(!1,"Unexpected increment value: "+s);const l=e.node();if(O(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const d=l.getValue();return typeof d!="number"?s:d+s},$I=function(i,e,n,s){return Zc(e,new Jc(n,i),s)},GI=function(i,e,n){return Zc(i,new Xc(e),n)};function Zc(i,e,n){const s=i.getPriority().val(),l=vm(s,e.getImmediateChild(".priority"),n);let u;if(i.isLeafNode()){const d=i,f=vm(d.getValue(),e,n);return f!==d.getValue()||l!==d.getPriority().val()?new ze(f,He(l)):i}else{const d=i;return u=d,l!==d.getPriority().val()&&(u=u.updatePriority(new ze(l))),d.forEachChild(Ee,(f,m)=>{const g=Zc(m,e.getImmediateChild(f),n);g!==m&&(u=u.updateImmediateChild(f,g))}),u}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function td(i,e){let n=e instanceof ce?e:new ce(e),s=i,l=te(n);for(;l!==null;){const u=ri(s.node.children,l)||{children:{},childCount:0};s=new ed(l,s,u),n=fe(n),l=te(n)}return s}function fi(i){return i.node.value}function E_(i,e){i.node.value=e,uc(i)}function S_(i){return i.node.childCount>0}function qI(i){return fi(i)===void 0&&!S_(i)}function Al(i,e){dt(i.node.children,(n,s)=>{e(new ed(n,i,s))})}function C_(i,e,n,s){n&&!s&&e(i),Al(i,l=>{C_(l,e,!0,s)}),n&&s&&e(i)}function KI(i,e,n){let s=i.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Os(i){return new ce(i.parent===null?i.name:Os(i.parent)+"/"+i.name)}function uc(i){i.parent!==null&&QI(i.parent,i.name,i)}function QI(i,e,n){const s=qI(n),l=Yt(i.node.children,e);s&&l?(delete i.node.children[e],i.node.childCount--,uc(i)):!s&&!l&&(i.node.children[e]=n.node,i.node.childCount++,uc(i))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI=/[\[\].#$\/\u0000-\u001F\u007F]/,XI=/[\[\].#$\u0000-\u001F\u007F]/,ju=10*1024*1024,I_=function(i){return typeof i=="string"&&i.length!==0&&!YI.test(i)},T_=function(i){return typeof i=="string"&&i.length!==0&&!XI.test(i)},JI=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),T_(i)},ym=function(i){return i===null||typeof i=="string"||typeof i=="number"&&!Oc(i)||i&&typeof i=="object"&&Yt(i,".sv")},nd=function(i,e,n,s){s&&e===void 0||rd(_c(i,"value"),e,n)},rd=function(i,e,n){const s=n instanceof ce?new fC(n,i):n;if(e===void 0)throw new Error(i+"contains undefined "+fr(s));if(typeof e=="function")throw new Error(i+"contains a function "+fr(s)+" with contents = "+e.toString());if(Oc(e))throw new Error(i+"contains "+e.toString()+" "+fr(s));if(typeof e=="string"&&e.length>ju/3&&El(e)>ju)throw new Error(i+"contains a string greater than "+ju+" utf8 bytes "+fr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,u=!1;if(dt(e,(d,f)=>{if(d===".value")l=!0;else if(d!==".priority"&&d!==".sv"&&(u=!0,!I_(d)))throw new Error(i+" contains an invalid key ("+d+") "+fr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);pC(s,d),rd(i,f,s),mC(s)}),l&&u)throw new Error(i+' contains ".value" child '+fr(s)+" in addition to actual children.")}},id=function(i,e,n,s){if(!T_(n))throw new Error(_c(i,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},ZI=function(i,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),id(i,e,n)},eT=function(i,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!I_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!JI(n))throw new Error(_c(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function nT(i,e){let n=null;for(let s=0;s<e.length;s++){const l=e[s],u=l.getPath();n!==null&&!Hg(u,n.path)&&(i.eventLists_.push(n),n=null),n===null&&(n={events:[],path:u}),n.events.push(l)}n&&i.eventLists_.push(n)}function Xn(i,e,n){nT(i,n),rT(i,s=>Ft(s,e)||Ft(e,s))}function rT(i,e){i.recursionDepth_++;let n=!0;for(let s=0;s<i.eventLists_.length;s++){const l=i.eventLists_[s];if(l){const u=l.path;e(u)?(iT(i.eventLists_[s]),i.eventLists_[s]=null):n=!1}}n&&(i.eventLists_=[]),i.recursionDepth_--}function iT(i){for(let e=0;e<i.events.length;e++){const n=i.events[e];if(n!==null){i.events[e]=null;const s=n.getEventRunner();os&&Qe("event: "+n.toString()),Rs(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT="repo_interrupt",oT=25;class lT{constructor(e,n,s,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new tT,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=fl(),this.transactionQueueTree_=new ed,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function aT(i,e,n){if(i.stats_=Mc(i.repoInfo_),i.forceRestClient_||US())i.server_=new hl(i.repoInfo_,(s,l,u,d)=>{wm(i,s,l,u,d)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>Em(i,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{De(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}i.persistentConnection_=new fn(i.repoInfo_,e,(s,l,u,d)=>{wm(i,s,l,u,d)},s=>{Em(i,s)},s=>{cT(i,s)},i.authTokenProvider_,i.appCheckProvider_,n),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(s=>{i.server_.refreshAuthToken(s)}),i.appCheckProvider_.addTokenChangeListener(s=>{i.server_.refreshAppCheckToken(s.token)}),i.statsReporter_=jS(i.repoInfo_,()=>new VC(i.stats_,i.server_)),i.infoData_=new FC,i.infoSyncTree_=new _m({startListening:(s,l,u,d)=>{let f=[];const m=i.infoData_.getNode(s._path);return m.isEmpty()||(f=As(i.infoSyncTree_,s._path,m),setTimeout(()=>{d("ok")},0)),f},stopListening:()=>{}}),sd(i,"connected",!1),i.serverSyncTree_=new _m({startListening:(s,l,u,d)=>(i.server_.listen(s,u,l,(f,m)=>{const g=d(f,m);Xn(i.eventQueue_,s._path,g)}),[]),stopListening:(s,l)=>{i.server_.unlisten(s,l)}})}function uT(i){const n=i.infoData_.getNode(new ce(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function k_(i){return VI({timestamp:uT(i)})}function wm(i,e,n,s,l){i.dataUpdateCount++;const u=new ce(e);n=i.interceptServerDataCallback_?i.interceptServerDataCallback_(e,n):n;let d=[];if(l)if(s){const m=tl(n,g=>He(g));d=MI(i.serverSyncTree_,u,m,l)}else{const m=He(n);d=g_(i.serverSyncTree_,u,m,l)}else if(s){const m=tl(n,g=>He(g));d=OI(i.serverSyncTree_,u,m)}else{const m=He(n);d=As(i.serverSyncTree_,u,m)}let f=u;d.length>0&&(f=ad(i,u)),Xn(i.eventQueue_,f,d)}function Em(i,e){sd(i,"connected",e),e===!1&&fT(i)}function cT(i,e){dt(e,(n,s)=>{sd(i,n,s)})}function sd(i,e,n){const s=new ce("/.info/"+e),l=He(n);i.infoData_.updateSnapshot(s,l);const u=As(i.infoSyncTree_,s,l);Xn(i.eventQueue_,s,u)}function dT(i){return i.nextWriteId_++}function hT(i,e,n){const s=FI(i.serverSyncTree_,e);return s!=null?Promise.resolve(s):i.server_.get(e).then(l=>{const u=He(l).withIndex(e._queryParams.getIndex());bI(i.serverSyncTree_,e,n,!0);let d;if(e._queryParams.loadsAllData())d=As(i.serverSyncTree_,e._path,u);else{const f=ws(i.serverSyncTree_,e);d=g_(i.serverSyncTree_,e._path,u,f)}return Xn(i.eventQueue_,e._path,d),m_(i.serverSyncTree_,e,n,null,!0),u},l=>(od(i,"get for query "+De(e)+" failed: "+l),Promise.reject(new Error(l))))}function fT(i){od(i,"onDisconnectEvents");const e=k_(i),n=fl();ic(i.onDisconnect_,oe(),(l,u)=>{const d=$I(l,u,i.serverSyncTree_,e);Zg(n,l,d)});let s=[];ic(n,oe(),(l,u)=>{s=s.concat(As(i.serverSyncTree_,l,u));const d=_T(i,l);ad(i,d)}),i.onDisconnect_=fl(),Xn(i.eventQueue_,oe(),s)}function pT(i){i.persistentConnection_&&i.persistentConnection_.interrupt(sT)}function od(i,...e){let n="";i.persistentConnection_&&(n=i.persistentConnection_.id+":"),Qe(n,...e)}function N_(i,e,n){return __(i.serverSyncTree_,e,n)||G.EMPTY_NODE}function ld(i,e=i.transactionQueueTree_){if(e||xl(i,e),fi(e)){const n=P_(i,e);O(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&mT(i,Os(e),n)}else S_(e)&&Al(e,n=>{ld(i,n)})}function mT(i,e,n){const s=n.map(g=>g.currentWriteId),l=N_(i,e,s);let u=l;const d=l.hash();for(let g=0;g<n.length;g++){const E=n[g];O(E.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),E.status=1,E.retryCount++;const y=Ze(e,E.path);u=u.updateChild(y,E.currentOutputSnapshotRaw)}const f=u.val(!0),m=e;i.server_.put(m.toString(),f,g=>{od(i,"transaction put response",{path:m.toString(),status:g});let E=[];if(g==="ok"){const y=[];for(let T=0;T<n.length;T++)n[T].status=2,E=E.concat(Jr(i.serverSyncTree_,n[T].currentWriteId)),n[T].onComplete&&y.push(()=>n[T].onComplete(null,!0,n[T].currentOutputSnapshotResolved)),n[T].unwatcher();xl(i,td(i.transactionQueueTree_,e)),ld(i,i.transactionQueueTree_),Xn(i.eventQueue_,e,E);for(let T=0;T<y.length;T++)Rs(y[T])}else{if(g==="datastale")for(let y=0;y<n.length;y++)n[y].status===3?n[y].status=4:n[y].status=0;else{yt("transaction at "+m.toString()+" failed: "+g);for(let y=0;y<n.length;y++)n[y].status=4,n[y].abortReason=g}ad(i,e)}},d)}function ad(i,e){const n=R_(i,e),s=Os(n),l=P_(i,n);return gT(i,l,s),s}function gT(i,e,n){if(e.length===0)return;const s=[];let l=[];const d=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const m=e[f],g=Ze(n,m.path);let E=!1,y;if(O(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),m.status===4)E=!0,y=m.abortReason,l=l.concat(Jr(i.serverSyncTree_,m.currentWriteId,!0));else if(m.status===0)if(m.retryCount>=oT)E=!0,y="maxretry",l=l.concat(Jr(i.serverSyncTree_,m.currentWriteId,!0));else{const T=N_(i,m.path,d);m.currentInputSnapshot=T;const D=e[f].update(T.val());if(D!==void 0){rd("transaction failed: Data returned ",D,m.path);let b=He(D);typeof D=="object"&&D!=null&&Yt(D,".priority")||(b=b.updatePriority(T.getPriority()));const q=m.currentWriteId,Re=k_(i),Me=GI(b,T,Re);m.currentOutputSnapshotRaw=b,m.currentOutputSnapshotResolved=Me,m.currentWriteId=dT(i),d.splice(d.indexOf(q),1),l=l.concat(xI(i.serverSyncTree_,m.path,Me,m.currentWriteId,m.applyLocally)),l=l.concat(Jr(i.serverSyncTree_,q,!0))}else E=!0,y="nodata",l=l.concat(Jr(i.serverSyncTree_,m.currentWriteId,!0))}Xn(i.eventQueue_,n,l),l=[],E&&(e[f].status=2,function(T){setTimeout(T,Math.floor(0))}(e[f].unwatcher),e[f].onComplete&&(y==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(y),!1,null))))}xl(i,i.transactionQueueTree_);for(let f=0;f<s.length;f++)Rs(s[f]);ld(i,i.transactionQueueTree_)}function R_(i,e){let n,s=i.transactionQueueTree_;for(n=te(e);n!==null&&fi(s)===void 0;)s=td(s,n),e=fe(e),n=te(e);return s}function P_(i,e){const n=[];return A_(i,e,n),n.sort((s,l)=>s.order-l.order),n}function A_(i,e,n){const s=fi(e);if(s)for(let l=0;l<s.length;l++)n.push(s[l]);Al(e,l=>{A_(i,l,n)})}function xl(i,e){const n=fi(e);if(n){let s=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[s]=n[l],s++);n.length=s,E_(e,n.length>0?n:void 0)}Al(e,s=>{xl(i,s)})}function _T(i,e){const n=Os(R_(i,e)),s=td(i.transactionQueueTree_,e);return KI(s,l=>{Hu(i,l)}),Hu(i,s),C_(s,l=>{Hu(i,l)}),n}function Hu(i,e){const n=fi(e);if(n){const s=[];let l=[],u=-1;for(let d=0;d<n.length;d++)n[d].status===3||(n[d].status===1?(O(u===d-1,"All SENT items should be at beginning of queue."),u=d,n[d].status=3,n[d].abortReason="set"):(O(n[d].status===0,"Unexpected transaction status in abort"),n[d].unwatcher(),l=l.concat(Jr(i.serverSyncTree_,n[d].currentWriteId,!0)),n[d].onComplete&&s.push(n[d].onComplete.bind(null,new Error("set"),!1,null))));u===-1?E_(e,void 0):n.length=u+1,Xn(i.eventQueue_,Os(e),l);for(let d=0;d<s.length;d++)Rs(s[d])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vT(i){let e="";const n=i.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let l=n[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function yT(i){const e={};i.charAt(0)==="?"&&(i=i.substring(1));for(const n of i.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):yt(`Invalid query segment '${n}' in query '${i}'`)}return e}const Sm=function(i,e){const n=wT(i),s=n.namespace;n.domain==="firebase.com"&&gn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&gn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||PS();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Og(n.host,n.secure,s,l,e,"",s!==n.subdomain),path:new ce(n.pathString)}},wT=function(i){let e="",n="",s="",l="",u="",d=!0,f="https",m=443;if(typeof i=="string"){let g=i.indexOf("//");g>=0&&(f=i.substring(0,g-1),i=i.substring(g+2));let E=i.indexOf("/");E===-1&&(E=i.length);let y=i.indexOf("?");y===-1&&(y=i.length),e=i.substring(0,Math.min(E,y)),E<y&&(l=vT(i.substring(E,y)));const T=yT(i.substring(Math.min(i.length,y)));g=e.indexOf(":"),g>=0?(d=f==="https"||f==="wss",m=parseInt(e.substring(g+1),10)):g=e.length;const D=e.slice(0,g);if(D.toLowerCase()==="localhost")n="localhost";else if(D.split(".").length<=2)n=D;else{const b=e.indexOf(".");s=e.substring(0,b).toLowerCase(),n=e.substring(b+1),u=s}"ns"in T&&(u=T.ns)}return{host:e,port:m,domain:n,subdomain:s,secure:d,scheme:f,pathString:l,namespace:u}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e,n,s,l){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+De(this.snapshot.exportVal())}}class ST{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return O(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,n,s,l){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=l}get key(){return J(this._path)?null:Wg(this._path)}get ref(){return new _n(this._repo,this._path)}get _queryIdentifier(){const e=om(this._queryParams),n=Dc(e);return n==="{}"?"default":n}get _queryObject(){return om(this._queryParams)}isEqual(e){if(e=ht(e),!(e instanceof pi))return!1;const n=this._repo===e._repo,s=Hg(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+hC(this._path)}}function IT(i,e){if(i._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function ud(i){let e=null,n=null;if(i.hasStart()&&(e=i.getIndexStartValue()),i.hasEnd()&&(n=i.getIndexEndValue()),i.getIndex()===_r){const s="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",l="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(i.hasStart()){if(i.getIndexStartName()!==wr)throw new Error(s);if(typeof e!="string")throw new Error(l)}if(i.hasEnd()){if(i.getIndexEndName()!==Gn)throw new Error(s);if(typeof n!="string")throw new Error(l)}}else if(i.getIndex()===Ee){if(e!=null&&!ym(e)||n!=null&&!ym(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(O(i.getIndex()instanceof zc||i.getIndex()===Xg,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function x_(i){if(i.hasStart()&&i.hasEnd()&&i.hasLimit()&&!i.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class _n extends pi{constructor(e,n){super(e,n,new Wc,!1)}get parent(){const e=jg(this._path);return e===null?null:new _n(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Es{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ce(e),s=cc(this.ref,e);return new Es(this._node.getChild(n),s,Ee)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new Es(l,cc(this.ref,s),Ee)))}hasChild(e){const n=new ce(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function TT(i,e){return i=ht(i),i._checkNotDeleted("ref"),e!==void 0?cc(i._root,e):i._root}function cc(i,e){return i=ht(i),te(i._path)===null?ZI("child","path",e):id("child","path",e),new _n(i._repo,Le(i._path,e))}function kT(i){i=ht(i);const e=new CT(()=>{}),n=new cd(e);return hT(i._repo,i,n).then(s=>new Es(s,new _n(i._repo,i._path),i._queryParams.getIndex()))}class cd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new ET("value",this,new Es(e.snapshotNode,new _n(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new ST(this,e,n):null}matches(e){return e instanceof cd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Ol{}class NT extends Ol{constructor(e,n){super(),this._value=e,this._key=n,this.type="endAt"}_apply(e){nd("endAt",this._value,e._path,!0);const n=MC(e._queryParams,this._value,this._key);if(x_(n),ud(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new pi(e._repo,e._path,n,e._orderByCalled)}}class RT extends Ol{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){nd("startAt",this._value,e._path,!0);const n=LC(e._queryParams,this._value,this._key);if(x_(n),ud(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new pi(e._repo,e._path,n,e._orderByCalled)}}class PT extends Ol{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){IT(e,"orderByChild");const n=new ce(this._path);if(J(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const s=new zc(n),l=bC(e._queryParams,s);return ud(l),new pi(e._repo,e._path,l,!0)}}function AT(i){return id("orderByChild","path",i),new PT(i)}class xT extends Ol{constructor(e,n){super(),this._value=e,this._key=n,this.type="equalTo"}_apply(e){if(nd("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new NT(this._value,this._key)._apply(new RT(this._value,this._key)._apply(e))}}function OT(i,e){return new xT(i,e)}function DT(i,...e){let n=ht(i);for(const s of e)n=s._apply(n);return n}CI(_n);RI(_n);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT="FIREBASE_DATABASE_EMULATOR_HOST",dc={};let MT=!1;function bT(i,e,n,s){i.repoInfo_=new Og(`${e}:${n}`,!1,i.repoInfo_.namespace,i.repoInfo_.webSocketOnly,i.repoInfo_.nodeAdmin,i.repoInfo_.persistenceKey,i.repoInfo_.includeNamespaceInQueryParams,!0),s&&(i.authTokenProvider_=s)}function FT(i,e,n,s,l){let u=s||i.options.databaseURL;u===void 0&&(i.options.projectId||gn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Qe("Using default host for project ",i.options.projectId),u=`${i.options.projectId}-default-rtdb.firebaseio.com`);let d=Sm(u,l),f=d.repoInfo,m;typeof process<"u"&&Vp&&(m=Vp[LT]),m?(u=`http://${m}?ns=${f.namespace}`,d=Sm(u,l),f=d.repoInfo):d.repoInfo.secure;const g=new BS(i.name,i.options,e);eT("Invalid Firebase Database URL",d),J(d.path)||gn("Database URL must point to the root of a Firebase Database (not including a child path).");const E=zT(f,i,g,new zS(i.name,n));return new BT(E,i)}function UT(i,e){const n=dc[e];(!n||n[i.key]!==i)&&gn(`Database ${e}(${i.repoInfo_}) has already been deleted.`),pT(i),delete n[i.key]}function zT(i,e,n,s){let l=dc[e.name];l||(l={},dc[e.name]=l);let u=l[i.toURLString()];return u&&gn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),u=new lT(i,MT,n,s),l[i.toURLString()]=u,u}class BT{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(aT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new _n(this._repo,oe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(UT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&gn("Cannot call "+e+" on a deleted database.")}}function WT(i=bm(),e){const n=wc(i,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=$y("database");s&&VT(n,...s)}return n}function VT(i,e,n,s={}){i=ht(i),i._checkNotDeleted("useEmulator"),i._instanceStarted&&gn("Cannot call useEmulator() after instance has already been initialized.");const l=i._repoInternal;let u;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&gn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new Jo(Jo.OWNER);else if(s.mockUserToken){const d=typeof s.mockUserToken=="string"?s.mockUserToken:Gy(s.mockUserToken,i.app.options.projectId);u=new Jo(d)}bT(l,e,n,u)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jT(i){CS(ci),ii(new vr("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),u=e.getProvider("app-check-internal");return FT(s,l,u,n)},"PUBLIC").setMultipleInstances(!0)),jn(jp,Hp,i),jn(jp,Hp,"esm2017")}fn.prototype.simpleListen=function(i,e){this.sendRequest("q",{p:i},e)};fn.prototype.echo=function(i,e){this.sendRequest("echo",{d:i},e)};jT();const $u=gS(zm),HT=new ln,$T=WT(zm),GT=async i=>{if(!(i!=null&&i.uid))return!1;const e=TT($T,`tenants/${i.uid}/users`);return(await kT(DT(e,AT("uid"),OT("mPf1iBnjH8XSgLQ1SNUVLVs4vp43")))).val().filter(s=>!!(s!=null&&s.uid)).length>0};function qT(){const[i,e]=on.useState(!1),[n,s]=SS($u);return on.useEffect(()=>{n&&GT(n).then(l=>e(l))},[n]),s?Je.jsx("p",{children:"Loading..."}):n?Je.jsxs("div",{children:[Je.jsxs("p",{children:["displayName: ",Je.jsx("code",{children:n.displayName})]}),Je.jsxs("p",{children:["email: ",Je.jsx("code",{children:n.email})]}),Je.jsxs("p",{children:["isAdmin: ",Je.jsx("code",{children:i.toString()})]}),Je.jsx("button",{onClick:()=>sE($u),children:"logout"})]}):Je.jsxs(Je.Fragment,{children:[Je.jsx("p",{children:"testing stuff"}),Je.jsx("button",{onClick:()=>TE($u,HT),children:"login"})]})}by.createRoot(document.getElementById("root")).render(Je.jsx(on.StrictMode,{children:Je.jsx(qT,{})}));
