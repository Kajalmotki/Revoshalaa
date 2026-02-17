(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))r(h);new MutationObserver(h=>{for(const m of h)if(m.type==="childList")for(const x of m.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&r(x)}).observe(document,{childList:!0,subtree:!0});function d(h){const m={};return h.integrity&&(m.integrity=h.integrity),h.referrerPolicy&&(m.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?m.credentials="include":h.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function r(h){if(h.ep)return;h.ep=!0;const m=d(h);fetch(h.href,m)}})();function D0(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var Us={exports:{}},Bn={};var r0;function wp(){if(r0)return Bn;r0=1;var c=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function d(r,h,m){var x=null;if(m!==void 0&&(x=""+m),h.key!==void 0&&(x=""+h.key),"key"in h){m={};for(var z in h)z!=="key"&&(m[z]=h[z])}else m=h;return h=m.ref,{$$typeof:c,type:r,key:x,ref:h!==void 0?h:null,props:m}}return Bn.Fragment=o,Bn.jsx=d,Bn.jsxs=d,Bn}var o0;function Dp(){return o0||(o0=1,Us.exports=wp()),Us.exports}var u=Dp(),Hs={exports:{}},te={};var f0;function Rp(){if(f0)return te;f0=1;var c=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),x=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),B=Symbol.iterator;function X(b){return b===null||typeof b!="object"?null:(b=B&&b[B]||b["@@iterator"],typeof b=="function"?b:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,q={};function U(b,O,G){this.props=b,this.context=O,this.refs=q,this.updater=G||k}U.prototype.isReactComponent={},U.prototype.setState=function(b,O){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,O,"setState")},U.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function H(){}H.prototype=U.prototype;function V(b,O,G){this.props=b,this.context=O,this.refs=q,this.updater=G||k}var ie=V.prototype=new H;ie.constructor=V,L(ie,U.prototype),ie.isPureReactComponent=!0;var re=Array.isArray;function ze(){}var ee={H:null,A:null,T:null,S:null},Ne=Object.prototype.hasOwnProperty;function J(b,O,G){var Z=G.ref;return{$$typeof:c,type:b,key:O,ref:Z!==void 0?Z:null,props:G}}function Ie(b,O){return J(b.type,O,b.props)}function ot(b){return typeof b=="object"&&b!==null&&b.$$typeof===c}function F(b){var O={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(G){return O[G]})}var we=/\/+/g;function Fe(b,O){return typeof b=="object"&&b!==null&&b.key!=null?F(""+b.key):O.toString(36)}function Ge(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(ze,ze):(b.status="pending",b.then(function(O){b.status==="pending"&&(b.status="fulfilled",b.value=O)},function(O){b.status==="pending"&&(b.status="rejected",b.reason=O)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function w(b,O,G,Z,ae){var ue=typeof b;(ue==="undefined"||ue==="boolean")&&(b=null);var ge=!1;if(b===null)ge=!0;else switch(ue){case"bigint":case"string":case"number":ge=!0;break;case"object":switch(b.$$typeof){case c:case o:ge=!0;break;case N:return ge=b._init,w(ge(b._payload),O,G,Z,ae)}}if(ge)return ae=ae(b),ge=Z===""?"."+Fe(b,0):Z,re(ae)?(G="",ge!=null&&(G=ge.replace(we,"$&/")+"/"),w(ae,O,G,"",function(Yl){return Yl})):ae!=null&&(ot(ae)&&(ae=Ie(ae,G+(ae.key==null||b&&b.key===ae.key?"":(""+ae.key).replace(we,"$&/")+"/")+ge)),O.push(ae)),1;ge=0;var Pe=Z===""?".":Z+":";if(re(b))for(var Oe=0;Oe<b.length;Oe++)Z=b[Oe],ue=Pe+Fe(Z,Oe),ge+=w(Z,O,G,ue,ae);else if(Oe=X(b),typeof Oe=="function")for(b=Oe.call(b),Oe=0;!(Z=b.next()).done;)Z=Z.value,ue=Pe+Fe(Z,Oe++),ge+=w(Z,O,G,ue,ae);else if(ue==="object"){if(typeof b.then=="function")return w(Ge(b),O,G,Z,ae);throw O=String(b),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return ge}function Y(b,O,G){if(b==null)return b;var Z=[],ae=0;return w(b,Z,"","",function(ue){return O.call(G,ue,ae++)}),Z}function I(b){if(b._status===-1){var O=b._result;O=O(),O.then(function(G){(b._status===0||b._status===-1)&&(b._status=1,b._result=G)},function(G){(b._status===0||b._status===-1)&&(b._status=2,b._result=G)}),b._status===-1&&(b._status=0,b._result=O)}if(b._status===1)return b._result.default;throw b._result}var xe=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)},Ee={map:Y,forEach:function(b,O,G){Y(b,function(){O.apply(this,arguments)},G)},count:function(b){var O=0;return Y(b,function(){O++}),O},toArray:function(b){return Y(b,function(O){return O})||[]},only:function(b){if(!ot(b))throw Error("React.Children.only expected to receive a single React element child.");return b}};return te.Activity=E,te.Children=Ee,te.Component=U,te.Fragment=d,te.Profiler=h,te.PureComponent=V,te.StrictMode=r,te.Suspense=v,te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee,te.__COMPILER_RUNTIME={__proto__:null,c:function(b){return ee.H.useMemoCache(b)}},te.cache=function(b){return function(){return b.apply(null,arguments)}},te.cacheSignal=function(){return null},te.cloneElement=function(b,O,G){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var Z=L({},b.props),ae=b.key;if(O!=null)for(ue in O.key!==void 0&&(ae=""+O.key),O)!Ne.call(O,ue)||ue==="key"||ue==="__self"||ue==="__source"||ue==="ref"&&O.ref===void 0||(Z[ue]=O[ue]);var ue=arguments.length-2;if(ue===1)Z.children=G;else if(1<ue){for(var ge=Array(ue),Pe=0;Pe<ue;Pe++)ge[Pe]=arguments[Pe+2];Z.children=ge}return J(b.type,ae,Z)},te.createContext=function(b){return b={$$typeof:x,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:m,_context:b},b},te.createElement=function(b,O,G){var Z,ae={},ue=null;if(O!=null)for(Z in O.key!==void 0&&(ue=""+O.key),O)Ne.call(O,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(ae[Z]=O[Z]);var ge=arguments.length-2;if(ge===1)ae.children=G;else if(1<ge){for(var Pe=Array(ge),Oe=0;Oe<ge;Oe++)Pe[Oe]=arguments[Oe+2];ae.children=Pe}if(b&&b.defaultProps)for(Z in ge=b.defaultProps,ge)ae[Z]===void 0&&(ae[Z]=ge[Z]);return J(b,ue,ae)},te.createRef=function(){return{current:null}},te.forwardRef=function(b){return{$$typeof:z,render:b}},te.isValidElement=ot,te.lazy=function(b){return{$$typeof:N,_payload:{_status:-1,_result:b},_init:I}},te.memo=function(b,O){return{$$typeof:p,type:b,compare:O===void 0?null:O}},te.startTransition=function(b){var O=ee.T,G={};ee.T=G;try{var Z=b(),ae=ee.S;ae!==null&&ae(G,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(ze,xe)}catch(ue){xe(ue)}finally{O!==null&&G.types!==null&&(O.types=G.types),ee.T=O}},te.unstable_useCacheRefresh=function(){return ee.H.useCacheRefresh()},te.use=function(b){return ee.H.use(b)},te.useActionState=function(b,O,G){return ee.H.useActionState(b,O,G)},te.useCallback=function(b,O){return ee.H.useCallback(b,O)},te.useContext=function(b){return ee.H.useContext(b)},te.useDebugValue=function(){},te.useDeferredValue=function(b,O){return ee.H.useDeferredValue(b,O)},te.useEffect=function(b,O){return ee.H.useEffect(b,O)},te.useEffectEvent=function(b){return ee.H.useEffectEvent(b)},te.useId=function(){return ee.H.useId()},te.useImperativeHandle=function(b,O,G){return ee.H.useImperativeHandle(b,O,G)},te.useInsertionEffect=function(b,O){return ee.H.useInsertionEffect(b,O)},te.useLayoutEffect=function(b,O){return ee.H.useLayoutEffect(b,O)},te.useMemo=function(b,O){return ee.H.useMemo(b,O)},te.useOptimistic=function(b,O){return ee.H.useOptimistic(b,O)},te.useReducer=function(b,O,G){return ee.H.useReducer(b,O,G)},te.useRef=function(b){return ee.H.useRef(b)},te.useState=function(b){return ee.H.useState(b)},te.useSyncExternalStore=function(b,O,G){return ee.H.useSyncExternalStore(b,O,G)},te.useTransition=function(){return ee.H.useTransition()},te.version="19.2.4",te}var d0;function Fs(){return d0||(d0=1,Hs.exports=Rp()),Hs.exports}var j=Fs();const Op=D0(j);var ks={exports:{}},Un={},Ls={exports:{}},qs={};var h0;function Bp(){return h0||(h0=1,(function(c){function o(w,Y){var I=w.length;w.push(Y);e:for(;0<I;){var xe=I-1>>>1,Ee=w[xe];if(0<h(Ee,Y))w[xe]=Y,w[I]=Ee,I=xe;else break e}}function d(w){return w.length===0?null:w[0]}function r(w){if(w.length===0)return null;var Y=w[0],I=w.pop();if(I!==Y){w[0]=I;e:for(var xe=0,Ee=w.length,b=Ee>>>1;xe<b;){var O=2*(xe+1)-1,G=w[O],Z=O+1,ae=w[Z];if(0>h(G,I))Z<Ee&&0>h(ae,G)?(w[xe]=ae,w[Z]=I,xe=Z):(w[xe]=G,w[O]=I,xe=O);else if(Z<Ee&&0>h(ae,I))w[xe]=ae,w[Z]=I,xe=Z;else break e}}return Y}function h(w,Y){var I=w.sortIndex-Y.sortIndex;return I!==0?I:w.id-Y.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;c.unstable_now=function(){return m.now()}}else{var x=Date,z=x.now();c.unstable_now=function(){return x.now()-z}}var v=[],p=[],N=1,E=null,B=3,X=!1,k=!1,L=!1,q=!1,U=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;function ie(w){for(var Y=d(p);Y!==null;){if(Y.callback===null)r(p);else if(Y.startTime<=w)r(p),Y.sortIndex=Y.expirationTime,o(v,Y);else break;Y=d(p)}}function re(w){if(L=!1,ie(w),!k)if(d(v)!==null)k=!0,ze||(ze=!0,F());else{var Y=d(p);Y!==null&&Ge(re,Y.startTime-w)}}var ze=!1,ee=-1,Ne=5,J=-1;function Ie(){return q?!0:!(c.unstable_now()-J<Ne)}function ot(){if(q=!1,ze){var w=c.unstable_now();J=w;var Y=!0;try{e:{k=!1,L&&(L=!1,H(ee),ee=-1),X=!0;var I=B;try{t:{for(ie(w),E=d(v);E!==null&&!(E.expirationTime>w&&Ie());){var xe=E.callback;if(typeof xe=="function"){E.callback=null,B=E.priorityLevel;var Ee=xe(E.expirationTime<=w);if(w=c.unstable_now(),typeof Ee=="function"){E.callback=Ee,ie(w),Y=!0;break t}E===d(v)&&r(v),ie(w)}else r(v);E=d(v)}if(E!==null)Y=!0;else{var b=d(p);b!==null&&Ge(re,b.startTime-w),Y=!1}}break e}finally{E=null,B=I,X=!1}Y=void 0}}finally{Y?F():ze=!1}}}var F;if(typeof V=="function")F=function(){V(ot)};else if(typeof MessageChannel<"u"){var we=new MessageChannel,Fe=we.port2;we.port1.onmessage=ot,F=function(){Fe.postMessage(null)}}else F=function(){U(ot,0)};function Ge(w,Y){ee=U(function(){w(c.unstable_now())},Y)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(w){w.callback=null},c.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ne=0<w?Math.floor(1e3/w):5},c.unstable_getCurrentPriorityLevel=function(){return B},c.unstable_next=function(w){switch(B){case 1:case 2:case 3:var Y=3;break;default:Y=B}var I=B;B=Y;try{return w()}finally{B=I}},c.unstable_requestPaint=function(){q=!0},c.unstable_runWithPriority=function(w,Y){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var I=B;B=w;try{return Y()}finally{B=I}},c.unstable_scheduleCallback=function(w,Y,I){var xe=c.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?xe+I:xe):I=xe,w){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=I+Ee,w={id:N++,callback:Y,priorityLevel:w,startTime:I,expirationTime:Ee,sortIndex:-1},I>xe?(w.sortIndex=I,o(p,w),d(v)===null&&w===d(p)&&(L?(H(ee),ee=-1):L=!0,Ge(re,I-xe))):(w.sortIndex=Ee,o(v,w),k||X||(k=!0,ze||(ze=!0,F()))),w},c.unstable_shouldYield=Ie,c.unstable_wrapCallback=function(w){var Y=B;return function(){var I=B;B=Y;try{return w.apply(this,arguments)}finally{B=I}}}})(qs)),qs}var m0;function Up(){return m0||(m0=1,Ls.exports=Bp()),Ls.exports}var Ys={exports:{}},We={};var p0;function Hp(){if(p0)return We;p0=1;var c=Fs();function o(v){var p="https://react.dev/errors/"+v;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)p+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+v+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var r={d:{f:d,r:function(){throw Error(o(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},h=Symbol.for("react.portal");function m(v,p,N){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:E==null?null:""+E,children:v,containerInfo:p,implementation:N}}var x=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function z(v,p){if(v==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return We.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,We.createPortal=function(v,p){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(o(299));return m(v,p,null,N)},We.flushSync=function(v){var p=x.T,N=r.p;try{if(x.T=null,r.p=2,v)return v()}finally{x.T=p,r.p=N,r.d.f()}},We.preconnect=function(v,p){typeof v=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(v,p))},We.prefetchDNS=function(v){typeof v=="string"&&r.d.D(v)},We.preinit=function(v,p){if(typeof v=="string"&&p&&typeof p.as=="string"){var N=p.as,E=z(N,p.crossOrigin),B=typeof p.integrity=="string"?p.integrity:void 0,X=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;N==="style"?r.d.S(v,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:E,integrity:B,fetchPriority:X}):N==="script"&&r.d.X(v,{crossOrigin:E,integrity:B,fetchPriority:X,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},We.preinitModule=function(v,p){if(typeof v=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var N=z(p.as,p.crossOrigin);r.d.M(v,{crossOrigin:N,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(v)},We.preload=function(v,p){if(typeof v=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var N=p.as,E=z(N,p.crossOrigin);r.d.L(v,N,{crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},We.preloadModule=function(v,p){if(typeof v=="string")if(p){var N=z(p.as,p.crossOrigin);r.d.m(v,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:N,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(v)},We.requestFormReset=function(v){r.d.r(v)},We.unstable_batchedUpdates=function(v,p){return v(p)},We.useFormState=function(v,p,N){return x.H.useFormState(v,p,N)},We.useFormStatus=function(){return x.H.useHostTransitionStatus()},We.version="19.2.4",We}var g0;function kp(){if(g0)return Ys.exports;g0=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(o){console.error(o)}}return c(),Ys.exports=Hp(),Ys.exports}var v0;function Lp(){if(v0)return Un;v0=1;var c=Up(),o=Fs(),d=kp();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function x(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function z(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(m(e)!==e)throw Error(r(188))}function p(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(r(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return v(n),e;if(i===l)return v(n),t;i=i.sibling}throw Error(r(188))}if(a.return!==l.return)a=n,l=i;else{for(var s=!1,f=n.child;f;){if(f===a){s=!0,a=n,l=i;break}if(f===l){s=!0,l=n,a=i;break}f=f.sibling}if(!s){for(f=i.child;f;){if(f===a){s=!0,a=i,l=n;break}if(f===l){s=!0,l=i,a=n;break}f=f.sibling}if(!s)throw Error(r(189))}}if(a.alternate!==l)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:t}function N(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=N(e),t!==null)return t;e=e.sibling}return null}var E=Object.assign,B=Symbol.for("react.element"),X=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),V=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),ze=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),Ne=Symbol.for("react.lazy"),J=Symbol.for("react.activity"),Ie=Symbol.for("react.memo_cache_sentinel"),ot=Symbol.iterator;function F(e){return e===null||typeof e!="object"?null:(e=ot&&e[ot]||e["@@iterator"],typeof e=="function"?e:null)}var we=Symbol.for("react.client.reference");function Fe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===we?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case U:return"Profiler";case q:return"StrictMode";case re:return"Suspense";case ze:return"SuspenseList";case J:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case V:return e.displayName||"Context";case H:return(e._context.displayName||"Context")+".Consumer";case ie:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return t=e.displayName||null,t!==null?t:Fe(e.type)||"Memo";case Ne:t=e._payload,e=e._init;try{return Fe(e(t))}catch{}}return null}var Ge=Array.isArray,w=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},xe=[],Ee=-1;function b(e){return{current:e}}function O(e){0>Ee||(e.current=xe[Ee],xe[Ee]=null,Ee--)}function G(e,t){Ee++,xe[Ee]=e.current,e.current=t}var Z=b(null),ae=b(null),ue=b(null),ge=b(null);function Pe(e,t){switch(G(ue,t),G(ae,e),G(Z,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Dd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Dd(t),e=Rd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}O(Z),G(Z,e)}function Oe(){O(Z),O(ae),O(ue)}function Yl(e){e.memoizedState!==null&&G(ge,e);var t=Z.current,a=Rd(t,e.type);t!==a&&(G(ae,e),G(Z,a))}function Qn(e){ae.current===e&&(O(Z),O(ae)),ge.current===e&&(O(ge),wn._currentValue=I)}var yu,ur;function Ra(e){if(yu===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);yu=t&&t[1]||"",ur=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+yu+e+ur}var xu=!1;function bu(e,t){if(!e||xu)return"";xu=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var R=function(){throw Error()};if(Object.defineProperty(R.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(R,[])}catch(T){var M=T}Reflect.construct(e,[],R)}else{try{R.call()}catch(T){M=T}e.call(R.prototype)}}else{try{throw Error()}catch(T){M=T}(R=e())&&typeof R.catch=="function"&&R.catch(function(){})}}catch(T){if(T&&M&&typeof T.stack=="string")return[T.stack,M.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),s=i[0],f=i[1];if(s&&f){var g=s.split(`
`),C=f.split(`
`);for(n=l=0;l<g.length&&!g[l].includes("DetermineComponentFrameRoot");)l++;for(;n<C.length&&!C[n].includes("DetermineComponentFrameRoot");)n++;if(l===g.length||n===C.length)for(l=g.length-1,n=C.length-1;1<=l&&0<=n&&g[l]!==C[n];)n--;for(;1<=l&&0<=n;l--,n--)if(g[l]!==C[n]){if(l!==1||n!==1)do if(l--,n--,0>n||g[l]!==C[n]){var _=`
`+g[l].replace(" at new "," at ");return e.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",e.displayName)),_}while(1<=l&&0<=n);break}}}finally{xu=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ra(a):""}function sh(e,t){switch(e.tag){case 26:case 27:case 5:return Ra(e.type);case 16:return Ra("Lazy");case 13:return e.child!==t&&t!==null?Ra("Suspense Fallback"):Ra("Suspense");case 19:return Ra("SuspenseList");case 0:case 15:return bu(e.type,!1);case 11:return bu(e.type.render,!1);case 1:return bu(e.type,!0);case 31:return Ra("Activity");default:return""}}function cr(e){try{var t="",a=null;do t+=sh(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Su=Object.prototype.hasOwnProperty,ju=c.unstable_scheduleCallback,zu=c.unstable_cancelCallback,rh=c.unstable_shouldYield,oh=c.unstable_requestPaint,ft=c.unstable_now,fh=c.unstable_getCurrentPriorityLevel,sr=c.unstable_ImmediatePriority,rr=c.unstable_UserBlockingPriority,Vn=c.unstable_NormalPriority,dh=c.unstable_LowPriority,or=c.unstable_IdlePriority,hh=c.log,mh=c.unstable_setDisableYieldValue,Gl=null,dt=null;function sa(e){if(typeof hh=="function"&&mh(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(Gl,e)}catch{}}var ht=Math.clz32?Math.clz32:vh,ph=Math.log,gh=Math.LN2;function vh(e){return e>>>=0,e===0?32:31-(ph(e)/gh|0)|0}var Zn=256,Kn=262144,Jn=4194304;function Oa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $n(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var f=l&134217727;return f!==0?(l=f&~i,l!==0?n=Oa(l):(s&=f,s!==0?n=Oa(s):a||(a=f&~e,a!==0&&(n=Oa(a))))):(f=l&~i,f!==0?n=Oa(f):s!==0?n=Oa(s):a||(a=l&~e,a!==0&&(n=Oa(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Xl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function yh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fr(){var e=Jn;return Jn<<=1,(Jn&62914560)===0&&(Jn=4194304),e}function Nu(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Ql(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function xh(e,t,a,l,n,i){var s=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var f=e.entanglements,g=e.expirationTimes,C=e.hiddenUpdates;for(a=s&~a;0<a;){var _=31-ht(a),R=1<<_;f[_]=0,g[_]=-1;var M=C[_];if(M!==null)for(C[_]=null,_=0;_<M.length;_++){var T=M[_];T!==null&&(T.lane&=-536870913)}a&=~R}l!==0&&dr(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(s&~t))}function dr(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-ht(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function hr(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-ht(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function mr(e,t){var a=t&-t;return a=(a&42)!==0?1:Eu(a),(a&(e.suspendedLanes|t))!==0?0:a}function Eu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Au(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function pr(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:a0(e.type))}function gr(e,t){var a=Y.p;try{return Y.p=e,t()}finally{Y.p=a}}var ra=Math.random().toString(36).slice(2),Ve="__reactFiber$"+ra,tt="__reactProps$"+ra,Ia="__reactContainer$"+ra,Cu="__reactEvents$"+ra,bh="__reactListeners$"+ra,Sh="__reactHandles$"+ra,vr="__reactResources$"+ra,Vl="__reactMarker$"+ra;function Mu(e){delete e[Ve],delete e[tt],delete e[Cu],delete e[bh],delete e[Sh]}function Pa(e){var t=e[Ve];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ia]||a[Ve]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=qd(e);e!==null;){if(a=e[Ve])return a;e=qd(e)}return t}e=a,a=e.parentNode}return null}function el(e){if(e=e[Ve]||e[Ia]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Zl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(r(33))}function tl(e){var t=e[vr];return t||(t=e[vr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Xe(e){e[Vl]=!0}var yr=new Set,xr={};function Ba(e,t){al(e,t),al(e+"Capture",t)}function al(e,t){for(xr[e]=t,e=0;e<t.length;e++)yr.add(t[e])}var jh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),br={},Sr={};function zh(e){return Su.call(Sr,e)?!0:Su.call(br,e)?!1:jh.test(e)?Sr[e]=!0:(br[e]=!0,!1)}function Fn(e,t,a){if(zh(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Wn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Yt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function St(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jr(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Nh(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(s){a=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Tu(e){if(!e._valueTracker){var t=jr(e)?"checked":"value";e._valueTracker=Nh(e,t,""+e[t])}}function zr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=jr(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function In(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Eh=/[\n"\\]/g;function jt(e){return e.replace(Eh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function _u(e,t,a,l,n,i,s,f){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+St(t)):e.value!==""+St(t)&&(e.value=""+St(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?wu(e,s,St(t)):a!=null?wu(e,s,St(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+St(f):e.removeAttribute("name")}function Nr(e,t,a,l,n,i,s,f){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Tu(e);return}a=a!=null?""+St(a):"",t=t!=null?""+St(t):a,f||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=f?e.checked:!!l,e.defaultChecked=!!l,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),Tu(e)}function wu(e,t,a){t==="number"&&In(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ll(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+St(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Er(e,t,a){if(t!=null&&(t=""+St(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+St(a):""}function Ar(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(r(92));if(Ge(l)){if(1<l.length)throw Error(r(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=St(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Tu(e)}function nl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Ah=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Cr(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Ah.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Mr(e,t,a){if(t!=null&&typeof t!="object")throw Error(r(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Cr(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&Cr(e,i,t[i])}function Du(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ch=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Mh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pn(e){return Mh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Gt(){}var Ru=null;function Ou(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var il=null,ul=null;function Tr(e){var t=el(e);if(t&&(e=t.stateNode)){var a=e[tt]||null;e:switch(e=t.stateNode,t.type){case"input":if(_u(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+jt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[tt]||null;if(!n)throw Error(r(90));_u(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&zr(l)}break e;case"textarea":Er(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&ll(e,!!a.multiple,t,!1)}}}var Bu=!1;function _r(e,t,a){if(Bu)return e(t,a);Bu=!0;try{var l=e(t);return l}finally{if(Bu=!1,(il!==null||ul!==null)&&(qi(),il&&(t=il,e=ul,ul=il=null,Tr(t),e)))for(t=0;t<e.length;t++)Tr(e[t])}}function Kl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[tt]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,t,typeof a));return a}var Xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uu=!1;if(Xt)try{var Jl={};Object.defineProperty(Jl,"passive",{get:function(){Uu=!0}}),window.addEventListener("test",Jl,Jl),window.removeEventListener("test",Jl,Jl)}catch{Uu=!1}var oa=null,Hu=null,ei=null;function wr(){if(ei)return ei;var e,t=Hu,a=t.length,l,n="value"in oa?oa.value:oa.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var s=a-e;for(l=1;l<=s&&t[a-l]===n[i-l];l++);return ei=n.slice(e,1<l?1-l:void 0)}function ti(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ai(){return!0}function Dr(){return!1}function at(e){function t(a,l,n,i,s){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(a=e[f],this[f]=a?a(i):i[f]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ai:Dr,this.isPropagationStopped=Dr,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ai)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ai)},persist:function(){},isPersistent:ai}),t}var Ua={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},li=at(Ua),$l=E({},Ua,{view:0,detail:0}),Th=at($l),ku,Lu,Fl,ni=E({},$l,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fl&&(Fl&&e.type==="mousemove"?(ku=e.screenX-Fl.screenX,Lu=e.screenY-Fl.screenY):Lu=ku=0,Fl=e),ku)},movementY:function(e){return"movementY"in e?e.movementY:Lu}}),Rr=at(ni),_h=E({},ni,{dataTransfer:0}),wh=at(_h),Dh=E({},$l,{relatedTarget:0}),qu=at(Dh),Rh=E({},Ua,{animationName:0,elapsedTime:0,pseudoElement:0}),Oh=at(Rh),Bh=E({},Ua,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Uh=at(Bh),Hh=E({},Ua,{data:0}),Or=at(Hh),kh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=qh[e])?!!t[e]:!1}function Yu(){return Yh}var Gh=E({},$l,{key:function(e){if(e.key){var t=kh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ti(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yu,charCode:function(e){return e.type==="keypress"?ti(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ti(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xh=at(Gh),Qh=E({},ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Br=at(Qh),Vh=E({},$l,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yu}),Zh=at(Vh),Kh=E({},Ua,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jh=at(Kh),$h=E({},ni,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fh=at($h),Wh=E({},Ua,{newState:0,oldState:0}),Ih=at(Wh),Ph=[9,13,27,32],Gu=Xt&&"CompositionEvent"in window,Wl=null;Xt&&"documentMode"in document&&(Wl=document.documentMode);var em=Xt&&"TextEvent"in window&&!Wl,Ur=Xt&&(!Gu||Wl&&8<Wl&&11>=Wl),Hr=" ",kr=!1;function Lr(e,t){switch(e){case"keyup":return Ph.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qr(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cl=!1;function tm(e,t){switch(e){case"compositionend":return qr(t);case"keypress":return t.which!==32?null:(kr=!0,Hr);case"textInput":return e=t.data,e===Hr&&kr?null:e;default:return null}}function am(e,t){if(cl)return e==="compositionend"||!Gu&&Lr(e,t)?(e=wr(),ei=Hu=oa=null,cl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ur&&t.locale!=="ko"?null:t.data;default:return null}}var lm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!lm[e.type]:t==="textarea"}function Gr(e,t,a,l){il?ul?ul.push(l):ul=[l]:il=l,t=Ki(t,"onChange"),0<t.length&&(a=new li("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Il=null,Pl=null;function nm(e){Ad(e,0)}function ii(e){var t=Zl(e);if(zr(t))return e}function Xr(e,t){if(e==="change")return t}var Qr=!1;if(Xt){var Xu;if(Xt){var Qu="oninput"in document;if(!Qu){var Vr=document.createElement("div");Vr.setAttribute("oninput","return;"),Qu=typeof Vr.oninput=="function"}Xu=Qu}else Xu=!1;Qr=Xu&&(!document.documentMode||9<document.documentMode)}function Zr(){Il&&(Il.detachEvent("onpropertychange",Kr),Pl=Il=null)}function Kr(e){if(e.propertyName==="value"&&ii(Pl)){var t=[];Gr(t,Pl,e,Ou(e)),_r(nm,t)}}function im(e,t,a){e==="focusin"?(Zr(),Il=t,Pl=a,Il.attachEvent("onpropertychange",Kr)):e==="focusout"&&Zr()}function um(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ii(Pl)}function cm(e,t){if(e==="click")return ii(t)}function sm(e,t){if(e==="input"||e==="change")return ii(t)}function rm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:rm;function en(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Su.call(t,n)||!mt(e[n],t[n]))return!1}return!0}function Jr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $r(e,t){var a=Jr(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Jr(a)}}function Fr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fr(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=In(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=In(e.document)}return t}function Vu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var om=Xt&&"documentMode"in document&&11>=document.documentMode,sl=null,Zu=null,tn=null,Ku=!1;function Ir(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ku||sl==null||sl!==In(l)||(l=sl,"selectionStart"in l&&Vu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),tn&&en(tn,l)||(tn=l,l=Ki(Zu,"onSelect"),0<l.length&&(t=new li("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=sl)))}function Ha(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var rl={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionrun:Ha("Transition","TransitionRun"),transitionstart:Ha("Transition","TransitionStart"),transitioncancel:Ha("Transition","TransitionCancel"),transitionend:Ha("Transition","TransitionEnd")},Ju={},Pr={};Xt&&(Pr=document.createElement("div").style,"AnimationEvent"in window||(delete rl.animationend.animation,delete rl.animationiteration.animation,delete rl.animationstart.animation),"TransitionEvent"in window||delete rl.transitionend.transition);function ka(e){if(Ju[e])return Ju[e];if(!rl[e])return e;var t=rl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Pr)return Ju[e]=t[a];return e}var eo=ka("animationend"),to=ka("animationiteration"),ao=ka("animationstart"),fm=ka("transitionrun"),dm=ka("transitionstart"),hm=ka("transitioncancel"),lo=ka("transitionend"),no=new Map,$u="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$u.push("scrollEnd");function Dt(e,t){no.set(e,t),Ba(t,[e])}var ui=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},zt=[],ol=0,Fu=0;function ci(){for(var e=ol,t=Fu=ol=0;t<e;){var a=zt[t];zt[t++]=null;var l=zt[t];zt[t++]=null;var n=zt[t];zt[t++]=null;var i=zt[t];if(zt[t++]=null,l!==null&&n!==null){var s=l.pending;s===null?n.next=n:(n.next=s.next,s.next=n),l.pending=n}i!==0&&io(a,n,i)}}function si(e,t,a,l){zt[ol++]=e,zt[ol++]=t,zt[ol++]=a,zt[ol++]=l,Fu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Wu(e,t,a,l){return si(e,t,a,l),ri(e)}function La(e,t){return si(e,null,null,t),ri(e)}function io(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-ht(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function ri(e){if(50<Nn)throw Nn=0,us=null,Error(r(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var fl={};function mm(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(e,t,a,l){return new mm(e,t,a,l)}function Iu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qt(e,t){var a=e.alternate;return a===null?(a=pt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function uo(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function oi(e,t,a,l,n,i){var s=0;if(l=e,typeof e=="function")Iu(e)&&(s=1);else if(typeof e=="string")s=xp(e,a,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case J:return e=pt(31,a,t,n),e.elementType=J,e.lanes=i,e;case L:return qa(a.children,n,i,t);case q:s=8,n|=24;break;case U:return e=pt(12,a,t,n|2),e.elementType=U,e.lanes=i,e;case re:return e=pt(13,a,t,n),e.elementType=re,e.lanes=i,e;case ze:return e=pt(19,a,t,n),e.elementType=ze,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case V:s=10;break e;case H:s=9;break e;case ie:s=11;break e;case ee:s=14;break e;case Ne:s=16,l=null;break e}s=29,a=Error(r(130,e===null?"null":typeof e,"")),l=null}return t=pt(s,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function qa(e,t,a,l){return e=pt(7,e,l,t),e.lanes=a,e}function Pu(e,t,a){return e=pt(6,e,null,t),e.lanes=a,e}function co(e){var t=pt(18,null,null,0);return t.stateNode=e,t}function ec(e,t,a){return t=pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var so=new WeakMap;function Nt(e,t){if(typeof e=="object"&&e!==null){var a=so.get(e);return a!==void 0?a:(t={value:e,source:t,stack:cr(t)},so.set(e,t),t)}return{value:e,source:t,stack:cr(t)}}var dl=[],hl=0,fi=null,an=0,Et=[],At=0,fa=null,Bt=1,Ut="";function Vt(e,t){dl[hl++]=an,dl[hl++]=fi,fi=e,an=t}function ro(e,t,a){Et[At++]=Bt,Et[At++]=Ut,Et[At++]=fa,fa=e;var l=Bt;e=Ut;var n=32-ht(l)-1;l&=~(1<<n),a+=1;var i=32-ht(t)+n;if(30<i){var s=n-n%5;i=(l&(1<<s)-1).toString(32),l>>=s,n-=s,Bt=1<<32-ht(t)+n|a<<n|l,Ut=i+e}else Bt=1<<i|a<<n|l,Ut=e}function tc(e){e.return!==null&&(Vt(e,1),ro(e,1,0))}function ac(e){for(;e===fi;)fi=dl[--hl],dl[hl]=null,an=dl[--hl],dl[hl]=null;for(;e===fa;)fa=Et[--At],Et[At]=null,Ut=Et[--At],Et[At]=null,Bt=Et[--At],Et[At]=null}function oo(e,t){Et[At++]=Bt,Et[At++]=Ut,Et[At++]=fa,Bt=t.id,Ut=t.overflow,fa=e}var Ze=null,Ce=null,de=!1,da=null,Ct=!1,lc=Error(r(519));function ha(e){var t=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ln(Nt(t,e)),lc}function fo(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Ve]=e,t[tt]=l,a){case"dialog":se("cancel",t),se("close",t);break;case"iframe":case"object":case"embed":se("load",t);break;case"video":case"audio":for(a=0;a<An.length;a++)se(An[a],t);break;case"source":se("error",t);break;case"img":case"image":case"link":se("error",t),se("load",t);break;case"details":se("toggle",t);break;case"input":se("invalid",t),Nr(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":se("invalid",t);break;case"textarea":se("invalid",t),Ar(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||_d(t.textContent,a)?(l.popover!=null&&(se("beforetoggle",t),se("toggle",t)),l.onScroll!=null&&se("scroll",t),l.onScrollEnd!=null&&se("scrollend",t),l.onClick!=null&&(t.onclick=Gt),t=!0):t=!1,t||ha(e,!0)}function ho(e){for(Ze=e.return;Ze;)switch(Ze.tag){case 5:case 31:case 13:Ct=!1;return;case 27:case 3:Ct=!0;return;default:Ze=Ze.return}}function ml(e){if(e!==Ze)return!1;if(!de)return ho(e),de=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ss(e.type,e.memoizedProps)),a=!a),a&&Ce&&ha(e),ho(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Ce=Ld(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Ce=Ld(e)}else t===27?(t=Ce,Ca(e.type)?(e=As,As=null,Ce=e):Ce=t):Ce=Ze?Tt(e.stateNode.nextSibling):null;return!0}function Ya(){Ce=Ze=null,de=!1}function nc(){var e=da;return e!==null&&(ut===null?ut=e:ut.push.apply(ut,e),da=null),e}function ln(e){da===null?da=[e]:da.push(e)}var ic=b(null),Ga=null,Zt=null;function ma(e,t,a){G(ic,t._currentValue),t._currentValue=a}function Kt(e){e._currentValue=ic.current,O(ic)}function uc(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function cc(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var s=n.child;i=i.firstContext;e:for(;i!==null;){var f=i;i=n;for(var g=0;g<t.length;g++)if(f.context===t[g]){i.lanes|=a,f=i.alternate,f!==null&&(f.lanes|=a),uc(i.return,a,e),l||(s=null);break e}i=f.next}}else if(n.tag===18){if(s=n.return,s===null)throw Error(r(341));s.lanes|=a,i=s.alternate,i!==null&&(i.lanes|=a),uc(s,a,e),s=null}else s=n.child;if(s!==null)s.return=n;else for(s=n;s!==null;){if(s===e){s=null;break}if(n=s.sibling,n!==null){n.return=s.return,s=n;break}s=s.return}n=s}}function pl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var s=n.alternate;if(s===null)throw Error(r(387));if(s=s.memoizedProps,s!==null){var f=n.type;mt(n.pendingProps.value,s.value)||(e!==null?e.push(f):e=[f])}}else if(n===ge.current){if(s=n.alternate,s===null)throw Error(r(387));s.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(wn):e=[wn])}n=n.return}e!==null&&cc(t,e,a,l),t.flags|=262144}function di(e){for(e=e.firstContext;e!==null;){if(!mt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Xa(e){Ga=e,Zt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ke(e){return mo(Ga,e)}function hi(e,t){return Ga===null&&Xa(e),mo(e,t)}function mo(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Zt===null){if(e===null)throw Error(r(308));Zt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Zt=Zt.next=t;return a}var pm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},gm=c.unstable_scheduleCallback,vm=c.unstable_NormalPriority,He={$$typeof:V,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sc(){return{controller:new pm,data:new Map,refCount:0}}function nn(e){e.refCount--,e.refCount===0&&gm(vm,function(){e.controller.abort()})}var un=null,rc=0,gl=0,vl=null;function ym(e,t){if(un===null){var a=un=[];rc=0,gl=ds(),vl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return rc++,t.then(po,po),t}function po(){if(--rc===0&&un!==null){vl!==null&&(vl.status="fulfilled");var e=un;un=null,gl=0,vl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function xm(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var go=w.S;w.S=function(e,t){ed=ft(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&ym(e,t),go!==null&&go(e,t)};var Qa=b(null);function oc(){var e=Qa.current;return e!==null?e:Ae.pooledCache}function mi(e,t){t===null?G(Qa,Qa.current):G(Qa,t.pool)}function vo(){var e=oc();return e===null?null:{parent:He._currentValue,pool:e}}var yl=Error(r(460)),fc=Error(r(474)),pi=Error(r(542)),gi={then:function(){}};function yo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function xo(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Gt,Gt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,So(e),e;default:if(typeof t.status=="string")t.then(Gt,Gt);else{if(e=Ae,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,So(e),e}throw Za=t,yl}}function Va(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Za=a,yl):a}}var Za=null;function bo(){if(Za===null)throw Error(r(459));var e=Za;return Za=null,e}function So(e){if(e===yl||e===pi)throw Error(r(483))}var xl=null,cn=0;function vi(e){var t=cn;return cn+=1,xl===null&&(xl=[]),xo(xl,e,t)}function sn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function yi(e,t){throw t.$$typeof===B?Error(r(525)):(e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function jo(e){function t(S,y){if(e){var A=S.deletions;A===null?(S.deletions=[y],S.flags|=16):A.push(y)}}function a(S,y){if(!e)return null;for(;y!==null;)t(S,y),y=y.sibling;return null}function l(S){for(var y=new Map;S!==null;)S.key!==null?y.set(S.key,S):y.set(S.index,S),S=S.sibling;return y}function n(S,y){return S=Qt(S,y),S.index=0,S.sibling=null,S}function i(S,y,A){return S.index=A,e?(A=S.alternate,A!==null?(A=A.index,A<y?(S.flags|=67108866,y):A):(S.flags|=67108866,y)):(S.flags|=1048576,y)}function s(S){return e&&S.alternate===null&&(S.flags|=67108866),S}function f(S,y,A,D){return y===null||y.tag!==6?(y=Pu(A,S.mode,D),y.return=S,y):(y=n(y,A),y.return=S,y)}function g(S,y,A,D){var $=A.type;return $===L?_(S,y,A.props.children,D,A.key):y!==null&&(y.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Ne&&Va($)===y.type)?(y=n(y,A.props),sn(y,A),y.return=S,y):(y=oi(A.type,A.key,A.props,null,S.mode,D),sn(y,A),y.return=S,y)}function C(S,y,A,D){return y===null||y.tag!==4||y.stateNode.containerInfo!==A.containerInfo||y.stateNode.implementation!==A.implementation?(y=ec(A,S.mode,D),y.return=S,y):(y=n(y,A.children||[]),y.return=S,y)}function _(S,y,A,D,$){return y===null||y.tag!==7?(y=qa(A,S.mode,D,$),y.return=S,y):(y=n(y,A),y.return=S,y)}function R(S,y,A){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=Pu(""+y,S.mode,A),y.return=S,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case X:return A=oi(y.type,y.key,y.props,null,S.mode,A),sn(A,y),A.return=S,A;case k:return y=ec(y,S.mode,A),y.return=S,y;case Ne:return y=Va(y),R(S,y,A)}if(Ge(y)||F(y))return y=qa(y,S.mode,A,null),y.return=S,y;if(typeof y.then=="function")return R(S,vi(y),A);if(y.$$typeof===V)return R(S,hi(S,y),A);yi(S,y)}return null}function M(S,y,A,D){var $=y!==null?y.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return $!==null?null:f(S,y,""+A,D);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case X:return A.key===$?g(S,y,A,D):null;case k:return A.key===$?C(S,y,A,D):null;case Ne:return A=Va(A),M(S,y,A,D)}if(Ge(A)||F(A))return $!==null?null:_(S,y,A,D,null);if(typeof A.then=="function")return M(S,y,vi(A),D);if(A.$$typeof===V)return M(S,y,hi(S,A),D);yi(S,A)}return null}function T(S,y,A,D,$){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return S=S.get(A)||null,f(y,S,""+D,$);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case X:return S=S.get(D.key===null?A:D.key)||null,g(y,S,D,$);case k:return S=S.get(D.key===null?A:D.key)||null,C(y,S,D,$);case Ne:return D=Va(D),T(S,y,A,D,$)}if(Ge(D)||F(D))return S=S.get(A)||null,_(y,S,D,$,null);if(typeof D.then=="function")return T(S,y,A,vi(D),$);if(D.$$typeof===V)return T(S,y,A,hi(y,D),$);yi(y,D)}return null}function Q(S,y,A,D){for(var $=null,he=null,K=y,ne=y=0,fe=null;K!==null&&ne<A.length;ne++){K.index>ne?(fe=K,K=null):fe=K.sibling;var me=M(S,K,A[ne],D);if(me===null){K===null&&(K=fe);break}e&&K&&me.alternate===null&&t(S,K),y=i(me,y,ne),he===null?$=me:he.sibling=me,he=me,K=fe}if(ne===A.length)return a(S,K),de&&Vt(S,ne),$;if(K===null){for(;ne<A.length;ne++)K=R(S,A[ne],D),K!==null&&(y=i(K,y,ne),he===null?$=K:he.sibling=K,he=K);return de&&Vt(S,ne),$}for(K=l(K);ne<A.length;ne++)fe=T(K,S,ne,A[ne],D),fe!==null&&(e&&fe.alternate!==null&&K.delete(fe.key===null?ne:fe.key),y=i(fe,y,ne),he===null?$=fe:he.sibling=fe,he=fe);return e&&K.forEach(function(Da){return t(S,Da)}),de&&Vt(S,ne),$}function W(S,y,A,D){if(A==null)throw Error(r(151));for(var $=null,he=null,K=y,ne=y=0,fe=null,me=A.next();K!==null&&!me.done;ne++,me=A.next()){K.index>ne?(fe=K,K=null):fe=K.sibling;var Da=M(S,K,me.value,D);if(Da===null){K===null&&(K=fe);break}e&&K&&Da.alternate===null&&t(S,K),y=i(Da,y,ne),he===null?$=Da:he.sibling=Da,he=Da,K=fe}if(me.done)return a(S,K),de&&Vt(S,ne),$;if(K===null){for(;!me.done;ne++,me=A.next())me=R(S,me.value,D),me!==null&&(y=i(me,y,ne),he===null?$=me:he.sibling=me,he=me);return de&&Vt(S,ne),$}for(K=l(K);!me.done;ne++,me=A.next())me=T(K,S,ne,me.value,D),me!==null&&(e&&me.alternate!==null&&K.delete(me.key===null?ne:me.key),y=i(me,y,ne),he===null?$=me:he.sibling=me,he=me);return e&&K.forEach(function(_p){return t(S,_p)}),de&&Vt(S,ne),$}function je(S,y,A,D){if(typeof A=="object"&&A!==null&&A.type===L&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case X:e:{for(var $=A.key;y!==null;){if(y.key===$){if($=A.type,$===L){if(y.tag===7){a(S,y.sibling),D=n(y,A.props.children),D.return=S,S=D;break e}}else if(y.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Ne&&Va($)===y.type){a(S,y.sibling),D=n(y,A.props),sn(D,A),D.return=S,S=D;break e}a(S,y);break}else t(S,y);y=y.sibling}A.type===L?(D=qa(A.props.children,S.mode,D,A.key),D.return=S,S=D):(D=oi(A.type,A.key,A.props,null,S.mode,D),sn(D,A),D.return=S,S=D)}return s(S);case k:e:{for($=A.key;y!==null;){if(y.key===$)if(y.tag===4&&y.stateNode.containerInfo===A.containerInfo&&y.stateNode.implementation===A.implementation){a(S,y.sibling),D=n(y,A.children||[]),D.return=S,S=D;break e}else{a(S,y);break}else t(S,y);y=y.sibling}D=ec(A,S.mode,D),D.return=S,S=D}return s(S);case Ne:return A=Va(A),je(S,y,A,D)}if(Ge(A))return Q(S,y,A,D);if(F(A)){if($=F(A),typeof $!="function")throw Error(r(150));return A=$.call(A),W(S,y,A,D)}if(typeof A.then=="function")return je(S,y,vi(A),D);if(A.$$typeof===V)return je(S,y,hi(S,A),D);yi(S,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,y!==null&&y.tag===6?(a(S,y.sibling),D=n(y,A),D.return=S,S=D):(a(S,y),D=Pu(A,S.mode,D),D.return=S,S=D),s(S)):a(S,y)}return function(S,y,A,D){try{cn=0;var $=je(S,y,A,D);return xl=null,$}catch(K){if(K===yl||K===pi)throw K;var he=pt(29,K,null,S.mode);return he.lanes=D,he.return=S,he}}}var Ka=jo(!0),zo=jo(!1),pa=!1;function dc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function va(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(pe&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=ri(e),io(e,null,a),t}return si(e,l,t,a),ri(e)}function rn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,hr(e,a)}}function mc(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=s:i=i.next=s,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var pc=!1;function on(){if(pc){var e=vl;if(e!==null)throw e}}function fn(e,t,a,l){pc=!1;var n=e.updateQueue;pa=!1;var i=n.firstBaseUpdate,s=n.lastBaseUpdate,f=n.shared.pending;if(f!==null){n.shared.pending=null;var g=f,C=g.next;g.next=null,s===null?i=C:s.next=C,s=g;var _=e.alternate;_!==null&&(_=_.updateQueue,f=_.lastBaseUpdate,f!==s&&(f===null?_.firstBaseUpdate=C:f.next=C,_.lastBaseUpdate=g))}if(i!==null){var R=n.baseState;s=0,_=C=g=null,f=i;do{var M=f.lane&-536870913,T=M!==f.lane;if(T?(oe&M)===M:(l&M)===M){M!==0&&M===gl&&(pc=!0),_!==null&&(_=_.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var Q=e,W=f;M=t;var je=a;switch(W.tag){case 1:if(Q=W.payload,typeof Q=="function"){R=Q.call(je,R,M);break e}R=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=W.payload,M=typeof Q=="function"?Q.call(je,R,M):Q,M==null)break e;R=E({},R,M);break e;case 2:pa=!0}}M=f.callback,M!==null&&(e.flags|=64,T&&(e.flags|=8192),T=n.callbacks,T===null?n.callbacks=[M]:T.push(M))}else T={lane:M,tag:f.tag,payload:f.payload,callback:f.callback,next:null},_===null?(C=_=T,g=R):_=_.next=T,s|=M;if(f=f.next,f===null){if(f=n.shared.pending,f===null)break;T=f,f=T.next,T.next=null,n.lastBaseUpdate=T,n.shared.pending=null}}while(!0);_===null&&(g=R),n.baseState=g,n.firstBaseUpdate=C,n.lastBaseUpdate=_,i===null&&(n.shared.lanes=0),ja|=s,e.lanes=s,e.memoizedState=R}}function No(e,t){if(typeof e!="function")throw Error(r(191,e));e.call(t)}function Eo(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)No(a[e],t)}var bl=b(null),xi=b(0);function Ao(e,t){e=aa,G(xi,e),G(bl,t),aa=e|t.baseLanes}function gc(){G(xi,aa),G(bl,bl.current)}function vc(){aa=xi.current,O(bl),O(xi)}var gt=b(null),Mt=null;function ya(e){var t=e.alternate;G(Be,Be.current&1),G(gt,e),Mt===null&&(t===null||bl.current!==null||t.memoizedState!==null)&&(Mt=e)}function yc(e){G(Be,Be.current),G(gt,e),Mt===null&&(Mt=e)}function Co(e){e.tag===22?(G(Be,Be.current),G(gt,e),Mt===null&&(Mt=e)):xa()}function xa(){G(Be,Be.current),G(gt,gt.current)}function vt(e){O(gt),Mt===e&&(Mt=null),O(Be)}var Be=b(0);function bi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ns(a)||Es(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Jt=0,le=null,be=null,ke=null,Si=!1,Sl=!1,Ja=!1,ji=0,dn=0,jl=null,bm=0;function De(){throw Error(r(321))}function xc(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!mt(e[a],t[a]))return!1;return!0}function bc(e,t,a,l,n,i){return Jt=i,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,w.H=e===null||e.memoizedState===null?ff:Bc,Ja=!1,i=a(l,n),Ja=!1,Sl&&(i=To(t,a,l,n)),Mo(e),i}function Mo(e){w.H=pn;var t=be!==null&&be.next!==null;if(Jt=0,ke=be=le=null,Si=!1,dn=0,jl=null,t)throw Error(r(300));e===null||Le||(e=e.dependencies,e!==null&&di(e)&&(Le=!0))}function To(e,t,a,l){le=e;var n=0;do{if(Sl&&(jl=null),dn=0,Sl=!1,25<=n)throw Error(r(301));if(n+=1,ke=be=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}w.H=df,i=t(a,l)}while(Sl);return i}function Sm(){var e=w.H,t=e.useState()[0];return t=typeof t.then=="function"?hn(t):t,e=e.useState()[0],(be!==null?be.memoizedState:null)!==e&&(le.flags|=1024),t}function Sc(){var e=ji!==0;return ji=0,e}function jc(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function zc(e){if(Si){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Si=!1}Jt=0,ke=be=le=null,Sl=!1,dn=ji=0,jl=null}function et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?le.memoizedState=ke=e:ke=ke.next=e,ke}function Ue(){if(be===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=ke===null?le.memoizedState:ke.next;if(t!==null)ke=t,be=e;else{if(e===null)throw le.alternate===null?Error(r(467)):Error(r(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},ke===null?le.memoizedState=ke=e:ke=ke.next=e}return ke}function zi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hn(e){var t=dn;return dn+=1,jl===null&&(jl=[]),e=xo(jl,e,t),t=le,(ke===null?t.memoizedState:ke.next)===null&&(t=t.alternate,w.H=t===null||t.memoizedState===null?ff:Bc),e}function Ni(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return hn(e);if(e.$$typeof===V)return Ke(e)}throw Error(r(438,String(e)))}function Nc(e){var t=null,a=le.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=le.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=zi(),le.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Ie;return t.index++,a}function $t(e,t){return typeof t=="function"?t(e):t}function Ei(e){var t=Ue();return Ec(t,be,e)}function Ec(e,t,a){var l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var s=n.next;n.next=i.next,i.next=s}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var f=s=null,g=null,C=t,_=!1;do{var R=C.lane&-536870913;if(R!==C.lane?(oe&R)===R:(Jt&R)===R){var M=C.revertLane;if(M===0)g!==null&&(g=g.next={lane:0,revertLane:0,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),R===gl&&(_=!0);else if((Jt&M)===M){C=C.next,M===gl&&(_=!0);continue}else R={lane:0,revertLane:C.revertLane,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},g===null?(f=g=R,s=i):g=g.next=R,le.lanes|=M,ja|=M;R=C.action,Ja&&a(i,R),i=C.hasEagerState?C.eagerState:a(i,R)}else M={lane:R,revertLane:C.revertLane,gesture:C.gesture,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},g===null?(f=g=M,s=i):g=g.next=M,le.lanes|=R,ja|=R;C=C.next}while(C!==null&&C!==t);if(g===null?s=i:g.next=f,!mt(i,e.memoizedState)&&(Le=!0,_&&(a=vl,a!==null)))throw a;e.memoizedState=i,e.baseState=s,e.baseQueue=g,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Ac(e){var t=Ue(),a=t.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var s=n=n.next;do i=e(i,s.action),s=s.next;while(s!==n);mt(i,t.memoizedState)||(Le=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function _o(e,t,a){var l=le,n=Ue(),i=de;if(i){if(a===void 0)throw Error(r(407));a=a()}else a=t();var s=!mt((be||n).memoizedState,a);if(s&&(n.memoizedState=a,Le=!0),n=n.queue,Tc(Ro.bind(null,l,n,e),[e]),n.getSnapshot!==t||s||ke!==null&&ke.memoizedState.tag&1){if(l.flags|=2048,zl(9,{destroy:void 0},Do.bind(null,l,n,a,t),null),Ae===null)throw Error(r(349));i||(Jt&127)!==0||wo(l,t,a)}return a}function wo(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=le.updateQueue,t===null?(t=zi(),le.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Do(e,t,a,l){t.value=a,t.getSnapshot=l,Oo(t)&&Bo(e)}function Ro(e,t,a){return a(function(){Oo(t)&&Bo(e)})}function Oo(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!mt(e,a)}catch{return!0}}function Bo(e){var t=La(e,2);t!==null&&ct(t,e,2)}function Cc(e){var t=et();if(typeof e=="function"){var a=e;if(e=a(),Ja){sa(!0);try{a()}finally{sa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$t,lastRenderedState:e},t}function Uo(e,t,a,l){return e.baseState=a,Ec(e,be,typeof l=="function"?l:$t)}function jm(e,t,a,l,n){if(Mi(e))throw Error(r(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){i.listeners.push(s)}};w.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,Ho(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Ho(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=w.T,s={};w.T=s;try{var f=a(n,l),g=w.S;g!==null&&g(s,f),ko(e,t,f)}catch(C){Mc(e,t,C)}finally{i!==null&&s.types!==null&&(i.types=s.types),w.T=i}}else try{i=a(n,l),ko(e,t,i)}catch(C){Mc(e,t,C)}}function ko(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Lo(e,t,l)},function(l){return Mc(e,t,l)}):Lo(e,t,a)}function Lo(e,t,a){t.status="fulfilled",t.value=a,qo(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Ho(e,a)))}function Mc(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,qo(t),t=t.next;while(t!==l)}e.action=null}function qo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Yo(e,t){return t}function Go(e,t){if(de){var a=Ae.formState;if(a!==null){e:{var l=le;if(de){if(Ce){t:{for(var n=Ce,i=Ct;n.nodeType!==8;){if(!i){n=null;break t}if(n=Tt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Ce=Tt(n.nextSibling),l=n.data==="F!";break e}}ha(l)}l=!1}l&&(t=a[0])}}return a=et(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yo,lastRenderedState:t},a.queue=l,a=sf.bind(null,le,l),l.dispatch=a,l=Cc(!1),i=Oc.bind(null,le,!1,l.queue),l=et(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=jm.bind(null,le,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Xo(e){var t=Ue();return Qo(t,be,e)}function Qo(e,t,a){if(t=Ec(e,t,Yo)[0],e=Ei($t)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=hn(t)}catch(s){throw s===yl?pi:s}else l=t;t=Ue();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(le.flags|=2048,zl(9,{destroy:void 0},zm.bind(null,n,a),null)),[l,i,e]}function zm(e,t){e.action=t}function Vo(e){var t=Ue(),a=be;if(a!==null)return Qo(t,a,e);Ue(),t=t.memoizedState,a=Ue();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function zl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=le.updateQueue,t===null&&(t=zi(),le.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Zo(){return Ue().memoizedState}function Ai(e,t,a,l){var n=et();le.flags|=e,n.memoizedState=zl(1|t,{destroy:void 0},a,l===void 0?null:l)}function Ci(e,t,a,l){var n=Ue();l=l===void 0?null:l;var i=n.memoizedState.inst;be!==null&&l!==null&&xc(l,be.memoizedState.deps)?n.memoizedState=zl(t,i,a,l):(le.flags|=e,n.memoizedState=zl(1|t,i,a,l))}function Ko(e,t){Ai(8390656,8,e,t)}function Tc(e,t){Ci(2048,8,e,t)}function Nm(e){le.flags|=4;var t=le.updateQueue;if(t===null)t=zi(),le.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Jo(e){var t=Ue().memoizedState;return Nm({ref:t,nextImpl:e}),function(){if((pe&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}function $o(e,t){return Ci(4,2,e,t)}function Fo(e,t){return Ci(4,4,e,t)}function Wo(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Io(e,t,a){a=a!=null?a.concat([e]):null,Ci(4,4,Wo.bind(null,t,e),a)}function _c(){}function Po(e,t){var a=Ue();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&xc(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function ef(e,t){var a=Ue();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&xc(t,l[1]))return l[0];if(l=e(),Ja){sa(!0);try{e()}finally{sa(!1)}}return a.memoizedState=[l,t],l}function wc(e,t,a){return a===void 0||(Jt&1073741824)!==0&&(oe&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=ad(),le.lanes|=e,ja|=e,a)}function tf(e,t,a,l){return mt(a,t)?a:bl.current!==null?(e=wc(e,a,l),mt(e,t)||(Le=!0),e):(Jt&42)===0||(Jt&1073741824)!==0&&(oe&261930)===0?(Le=!0,e.memoizedState=a):(e=ad(),le.lanes|=e,ja|=e,t)}function af(e,t,a,l,n){var i=Y.p;Y.p=i!==0&&8>i?i:8;var s=w.T,f={};w.T=f,Oc(e,!1,t,a);try{var g=n(),C=w.S;if(C!==null&&C(f,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var _=xm(g,l);mn(e,t,_,bt(e))}else mn(e,t,l,bt(e))}catch(R){mn(e,t,{then:function(){},status:"rejected",reason:R},bt())}finally{Y.p=i,s!==null&&f.types!==null&&(s.types=f.types),w.T=s}}function Em(){}function Dc(e,t,a,l){if(e.tag!==5)throw Error(r(476));var n=lf(e).queue;af(e,n,t,I,a===null?Em:function(){return nf(e),a(l)})}function lf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$t,lastRenderedState:I},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$t,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function nf(e){var t=lf(e);t.next===null&&(t=e.alternate.memoizedState),mn(e,t.next.queue,{},bt())}function Rc(){return Ke(wn)}function uf(){return Ue().memoizedState}function cf(){return Ue().memoizedState}function Am(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=bt();e=ga(a);var l=va(t,e,a);l!==null&&(ct(l,t,a),rn(l,t,a)),t={cache:sc()},e.payload=t;return}t=t.return}}function Cm(e,t,a){var l=bt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Mi(e)?rf(t,a):(a=Wu(e,t,a,l),a!==null&&(ct(a,e,l),of(a,t,l)))}function sf(e,t,a){var l=bt();mn(e,t,a,l)}function mn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Mi(e))rf(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,f=i(s,a);if(n.hasEagerState=!0,n.eagerState=f,mt(f,s))return si(e,t,n,0),Ae===null&&ci(),!1}catch{}if(a=Wu(e,t,n,l),a!==null)return ct(a,e,l),of(a,t,l),!0}return!1}function Oc(e,t,a,l){if(l={lane:2,revertLane:ds(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Mi(e)){if(t)throw Error(r(479))}else t=Wu(e,a,l,2),t!==null&&ct(t,e,2)}function Mi(e){var t=e.alternate;return e===le||t!==null&&t===le}function rf(e,t){Sl=Si=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function of(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,hr(e,a)}}var pn={readContext:Ke,use:Ni,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useLayoutEffect:De,useInsertionEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useSyncExternalStore:De,useId:De,useHostTransitionStatus:De,useFormState:De,useActionState:De,useOptimistic:De,useMemoCache:De,useCacheRefresh:De};pn.useEffectEvent=De;var ff={readContext:Ke,use:Ni,useCallback:function(e,t){return et().memoizedState=[e,t===void 0?null:t],e},useContext:Ke,useEffect:Ko,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Ai(4194308,4,Wo.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Ai(4194308,4,e,t)},useInsertionEffect:function(e,t){Ai(4,2,e,t)},useMemo:function(e,t){var a=et();t=t===void 0?null:t;var l=e();if(Ja){sa(!0);try{e()}finally{sa(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=et();if(a!==void 0){var n=a(t);if(Ja){sa(!0);try{a(t)}finally{sa(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Cm.bind(null,le,e),[l.memoizedState,e]},useRef:function(e){var t=et();return e={current:e},t.memoizedState=e},useState:function(e){e=Cc(e);var t=e.queue,a=sf.bind(null,le,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:_c,useDeferredValue:function(e,t){var a=et();return wc(a,e,t)},useTransition:function(){var e=Cc(!1);return e=af.bind(null,le,e.queue,!0,!1),et().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=le,n=et();if(de){if(a===void 0)throw Error(r(407));a=a()}else{if(a=t(),Ae===null)throw Error(r(349));(oe&127)!==0||wo(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,Ko(Ro.bind(null,l,i,e),[e]),l.flags|=2048,zl(9,{destroy:void 0},Do.bind(null,l,i,a,t),null),a},useId:function(){var e=et(),t=Ae.identifierPrefix;if(de){var a=Ut,l=Bt;a=(l&~(1<<32-ht(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=ji++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=bm++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Rc,useFormState:Go,useActionState:Go,useOptimistic:function(e){var t=et();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Oc.bind(null,le,!0,a),a.dispatch=t,[e,t]},useMemoCache:Nc,useCacheRefresh:function(){return et().memoizedState=Am.bind(null,le)},useEffectEvent:function(e){var t=et(),a={impl:e};return t.memoizedState=a,function(){if((pe&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Bc={readContext:Ke,use:Ni,useCallback:Po,useContext:Ke,useEffect:Tc,useImperativeHandle:Io,useInsertionEffect:$o,useLayoutEffect:Fo,useMemo:ef,useReducer:Ei,useRef:Zo,useState:function(){return Ei($t)},useDebugValue:_c,useDeferredValue:function(e,t){var a=Ue();return tf(a,be.memoizedState,e,t)},useTransition:function(){var e=Ei($t)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:hn(e),t]},useSyncExternalStore:_o,useId:uf,useHostTransitionStatus:Rc,useFormState:Xo,useActionState:Xo,useOptimistic:function(e,t){var a=Ue();return Uo(a,be,e,t)},useMemoCache:Nc,useCacheRefresh:cf};Bc.useEffectEvent=Jo;var df={readContext:Ke,use:Ni,useCallback:Po,useContext:Ke,useEffect:Tc,useImperativeHandle:Io,useInsertionEffect:$o,useLayoutEffect:Fo,useMemo:ef,useReducer:Ac,useRef:Zo,useState:function(){return Ac($t)},useDebugValue:_c,useDeferredValue:function(e,t){var a=Ue();return be===null?wc(a,e,t):tf(a,be.memoizedState,e,t)},useTransition:function(){var e=Ac($t)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:hn(e),t]},useSyncExternalStore:_o,useId:uf,useHostTransitionStatus:Rc,useFormState:Vo,useActionState:Vo,useOptimistic:function(e,t){var a=Ue();return be!==null?Uo(a,be,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Nc,useCacheRefresh:cf};df.useEffectEvent=Jo;function Uc(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:E({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Hc={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=bt(),n=ga(l);n.payload=t,a!=null&&(n.callback=a),t=va(e,n,l),t!==null&&(ct(t,e,l),rn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=bt(),n=ga(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=va(e,n,l),t!==null&&(ct(t,e,l),rn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=bt(),l=ga(a);l.tag=2,t!=null&&(l.callback=t),t=va(e,l,a),t!==null&&(ct(t,e,a),rn(t,e,a))}};function hf(e,t,a,l,n,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,s):t.prototype&&t.prototype.isPureReactComponent?!en(a,l)||!en(n,i):!0}function mf(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Hc.enqueueReplaceState(t,t.state,null)}function $a(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=E({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function pf(e){ui(e)}function gf(e){console.error(e)}function vf(e){ui(e)}function Ti(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function yf(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function kc(e,t,a){return a=ga(a),a.tag=3,a.payload={element:null},a.callback=function(){Ti(e,t)},a}function xf(e){return e=ga(e),e.tag=3,e}function bf(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){yf(t,a,l)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){yf(t,a,l),typeof n!="function"&&(za===null?za=new Set([this]):za.add(this));var f=l.stack;this.componentDidCatch(l.value,{componentStack:f!==null?f:""})})}function Mm(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&pl(t,a,n,!0),a=gt.current,a!==null){switch(a.tag){case 31:case 13:return Mt===null?Yi():a.alternate===null&&Re===0&&(Re=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===gi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),rs(e,l,n)),!1;case 22:return a.flags|=65536,l===gi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),rs(e,l,n)),!1}throw Error(r(435,a.tag))}return rs(e,l,n),Yi(),!1}if(de)return t=gt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==lc&&(e=Error(r(422),{cause:l}),ln(Nt(e,a)))):(l!==lc&&(t=Error(r(423),{cause:l}),ln(Nt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=Nt(l,a),n=kc(e.stateNode,l,n),mc(e,n),Re!==4&&(Re=2)),!1;var i=Error(r(520),{cause:l});if(i=Nt(i,a),zn===null?zn=[i]:zn.push(i),Re!==4&&(Re=2),t===null)return!0;l=Nt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=kc(a.stateNode,l,e),mc(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(za===null||!za.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=xf(n),bf(n,e,a,l),mc(a,n),!1}a=a.return}while(a!==null);return!1}var Lc=Error(r(461)),Le=!1;function Je(e,t,a,l){t.child=e===null?zo(t,null,a,l):Ka(t,e.child,a,l)}function Sf(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var s={};for(var f in l)f!=="ref"&&(s[f]=l[f])}else s=l;return Xa(t),l=bc(e,t,a,s,i,n),f=Sc(),e!==null&&!Le?(jc(e,t,n),Ft(e,t,n)):(de&&f&&tc(t),t.flags|=1,Je(e,t,l,n),t.child)}function jf(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!Iu(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,zf(e,t,i,l,n)):(e=oi(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Kc(e,n)){var s=i.memoizedProps;if(a=a.compare,a=a!==null?a:en,a(s,l)&&e.ref===t.ref)return Ft(e,t,n)}return t.flags|=1,e=Qt(i,l),e.ref=t.ref,e.return=t,t.child=e}function zf(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(en(i,l)&&e.ref===t.ref)if(Le=!1,t.pendingProps=l=i,Kc(e,n))(e.flags&131072)!==0&&(Le=!0);else return t.lanes=e.lanes,Ft(e,t,n)}return qc(e,t,a,l,n)}function Nf(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return Ef(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&mi(t,i!==null?i.cachePool:null),i!==null?Ao(t,i):gc(),Co(t);else return l=t.lanes=536870912,Ef(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(mi(t,i.cachePool),Ao(t,i),xa(),t.memoizedState=null):(e!==null&&mi(t,null),gc(),xa());return Je(e,t,n,a),t.child}function gn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ef(e,t,a,l,n){var i=oc();return i=i===null?null:{parent:He._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&mi(t,null),gc(),Co(t),e!==null&&pl(e,t,l,!0),t.childLanes=n,null}function _i(e,t){return t=Di({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Af(e,t,a){return Ka(t,e.child,null,a),e=_i(t,t.pendingProps),e.flags|=2,vt(t),t.memoizedState=null,e}function Tm(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(de){if(l.mode==="hidden")return e=_i(t,l),t.lanes=536870912,gn(null,e);if(yc(t),(e=Ce)?(e=kd(e,Ct),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:fa!==null?{id:Bt,overflow:Ut}:null,retryLane:536870912,hydrationErrors:null},a=co(e),a.return=t,t.child=a,Ze=t,Ce=null)):e=null,e===null)throw ha(t);return t.lanes=536870912,null}return _i(t,l)}var i=e.memoizedState;if(i!==null){var s=i.dehydrated;if(yc(t),n)if(t.flags&256)t.flags&=-257,t=Af(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(r(558));else if(Le||pl(e,t,a,!1),n=(a&e.childLanes)!==0,Le||n){if(l=Ae,l!==null&&(s=mr(l,a),s!==0&&s!==i.retryLane))throw i.retryLane=s,La(e,s),ct(l,e,s),Lc;Yi(),t=Af(e,t,a)}else e=i.treeContext,Ce=Tt(s.nextSibling),Ze=t,de=!0,da=null,Ct=!1,e!==null&&oo(t,e),t=_i(t,l),t.flags|=4096;return t}return e=Qt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function wi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function qc(e,t,a,l,n){return Xa(t),a=bc(e,t,a,l,void 0,n),l=Sc(),e!==null&&!Le?(jc(e,t,n),Ft(e,t,n)):(de&&l&&tc(t),t.flags|=1,Je(e,t,a,n),t.child)}function Cf(e,t,a,l,n,i){return Xa(t),t.updateQueue=null,a=To(t,l,a,n),Mo(e),l=Sc(),e!==null&&!Le?(jc(e,t,i),Ft(e,t,i)):(de&&l&&tc(t),t.flags|=1,Je(e,t,a,i),t.child)}function Mf(e,t,a,l,n){if(Xa(t),t.stateNode===null){var i=fl,s=a.contextType;typeof s=="object"&&s!==null&&(i=Ke(s)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Hc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},dc(t),s=a.contextType,i.context=typeof s=="object"&&s!==null?Ke(s):fl,i.state=t.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(Uc(t,a,s,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&Hc.enqueueReplaceState(i,i.state,null),fn(t,l,i,n),on(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var f=t.memoizedProps,g=$a(a,f);i.props=g;var C=i.context,_=a.contextType;s=fl,typeof _=="object"&&_!==null&&(s=Ke(_));var R=a.getDerivedStateFromProps;_=typeof R=="function"||typeof i.getSnapshotBeforeUpdate=="function",f=t.pendingProps!==f,_||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(f||C!==s)&&mf(t,i,l,s),pa=!1;var M=t.memoizedState;i.state=M,fn(t,l,i,n),on(),C=t.memoizedState,f||M!==C||pa?(typeof R=="function"&&(Uc(t,a,R,l),C=t.memoizedState),(g=pa||hf(t,a,g,l,M,C,s))?(_||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=C),i.props=l,i.state=C,i.context=s,l=g):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,hc(e,t),s=t.memoizedProps,_=$a(a,s),i.props=_,R=t.pendingProps,M=i.context,C=a.contextType,g=fl,typeof C=="object"&&C!==null&&(g=Ke(C)),f=a.getDerivedStateFromProps,(C=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==R||M!==g)&&mf(t,i,l,g),pa=!1,M=t.memoizedState,i.state=M,fn(t,l,i,n),on();var T=t.memoizedState;s!==R||M!==T||pa||e!==null&&e.dependencies!==null&&di(e.dependencies)?(typeof f=="function"&&(Uc(t,a,f,l),T=t.memoizedState),(_=pa||hf(t,a,_,l,M,T,g)||e!==null&&e.dependencies!==null&&di(e.dependencies))?(C||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,T,g),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,T,g)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=T),i.props=l,i.state=T,i.context=g,l=_):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,wi(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Ka(t,e.child,null,n),t.child=Ka(t,null,a,n)):Je(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Ft(e,t,n),e}function Tf(e,t,a,l){return Ya(),t.flags|=256,Je(e,t,a,l),t.child}var Yc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Gc(e){return{baseLanes:e,cachePool:vo()}}function Xc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=xt),e}function _f(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(Be.current&2)!==0),s&&(n=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(de){if(n?ya(t):xa(),(e=Ce)?(e=kd(e,Ct),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:fa!==null?{id:Bt,overflow:Ut}:null,retryLane:536870912,hydrationErrors:null},a=co(e),a.return=t,t.child=a,Ze=t,Ce=null)):e=null,e===null)throw ha(t);return Es(e)?t.lanes=32:t.lanes=536870912,null}var f=l.children;return l=l.fallback,n?(xa(),n=t.mode,f=Di({mode:"hidden",children:f},n),l=qa(l,n,a,null),f.return=t,l.return=t,f.sibling=l,t.child=f,l=t.child,l.memoizedState=Gc(a),l.childLanes=Xc(e,s,a),t.memoizedState=Yc,gn(null,l)):(ya(t),Qc(t,f))}var g=e.memoizedState;if(g!==null&&(f=g.dehydrated,f!==null)){if(i)t.flags&256?(ya(t),t.flags&=-257,t=Vc(e,t,a)):t.memoizedState!==null?(xa(),t.child=e.child,t.flags|=128,t=null):(xa(),f=l.fallback,n=t.mode,l=Di({mode:"visible",children:l.children},n),f=qa(f,n,a,null),f.flags|=2,l.return=t,f.return=t,l.sibling=f,t.child=l,Ka(t,e.child,null,a),l=t.child,l.memoizedState=Gc(a),l.childLanes=Xc(e,s,a),t.memoizedState=Yc,t=gn(null,l));else if(ya(t),Es(f)){if(s=f.nextSibling&&f.nextSibling.dataset,s)var C=s.dgst;s=C,l=Error(r(419)),l.stack="",l.digest=s,ln({value:l,source:null,stack:null}),t=Vc(e,t,a)}else if(Le||pl(e,t,a,!1),s=(a&e.childLanes)!==0,Le||s){if(s=Ae,s!==null&&(l=mr(s,a),l!==0&&l!==g.retryLane))throw g.retryLane=l,La(e,l),ct(s,e,l),Lc;Ns(f)||Yi(),t=Vc(e,t,a)}else Ns(f)?(t.flags|=192,t.child=e.child,t=null):(e=g.treeContext,Ce=Tt(f.nextSibling),Ze=t,de=!0,da=null,Ct=!1,e!==null&&oo(t,e),t=Qc(t,l.children),t.flags|=4096);return t}return n?(xa(),f=l.fallback,n=t.mode,g=e.child,C=g.sibling,l=Qt(g,{mode:"hidden",children:l.children}),l.subtreeFlags=g.subtreeFlags&65011712,C!==null?f=Qt(C,f):(f=qa(f,n,a,null),f.flags|=2),f.return=t,l.return=t,l.sibling=f,t.child=l,gn(null,l),l=t.child,f=e.child.memoizedState,f===null?f=Gc(a):(n=f.cachePool,n!==null?(g=He._currentValue,n=n.parent!==g?{parent:g,pool:g}:n):n=vo(),f={baseLanes:f.baseLanes|a,cachePool:n}),l.memoizedState=f,l.childLanes=Xc(e,s,a),t.memoizedState=Yc,gn(e.child,l)):(ya(t),a=e.child,e=a.sibling,a=Qt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=a,t.memoizedState=null,a)}function Qc(e,t){return t=Di({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Di(e,t){return e=pt(22,e,null,t),e.lanes=0,e}function Vc(e,t,a){return Ka(t,e.child,null,a),e=Qc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wf(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),uc(e.return,t,a)}function Zc(e,t,a,l,n,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=l,s.tail=a,s.tailMode=n,s.treeForkCount=i)}function Df(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var s=Be.current,f=(s&2)!==0;if(f?(s=s&1|2,t.flags|=128):s&=1,G(Be,s),Je(e,t,l,a),l=de?an:0,!f&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wf(e,a,t);else if(e.tag===19)wf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&bi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Zc(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&bi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Zc(t,!0,a,null,i,l);break;case"together":Zc(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Ft(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ja|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(pl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,a=Qt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Qt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Kc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&di(e)))}function _m(e,t,a){switch(t.tag){case 3:Pe(t,t.stateNode.containerInfo),ma(t,He,e.memoizedState.cache),Ya();break;case 27:case 5:Yl(t);break;case 4:Pe(t,t.stateNode.containerInfo);break;case 10:ma(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,yc(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ya(t),t.flags|=128,null):(a&t.child.childLanes)!==0?_f(e,t,a):(ya(t),e=Ft(e,t,a),e!==null?e.sibling:null);ya(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(pl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return Df(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),G(Be,Be.current),l)break;return null;case 22:return t.lanes=0,Nf(e,t,a,t.pendingProps);case 24:ma(t,He,e.memoizedState.cache)}return Ft(e,t,a)}function Rf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Le=!0;else{if(!Kc(e,a)&&(t.flags&128)===0)return Le=!1,_m(e,t,a);Le=(e.flags&131072)!==0}else Le=!1,de&&(t.flags&1048576)!==0&&ro(t,an,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Va(t.elementType),t.type=e,typeof e=="function")Iu(e)?(l=$a(e,l),t.tag=1,t=Mf(null,t,e,l,a)):(t.tag=0,t=qc(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===ie){t.tag=11,t=Sf(null,t,e,l,a);break e}else if(n===ee){t.tag=14,t=jf(null,t,e,l,a);break e}}throw t=Fe(e)||e,Error(r(306,t,""))}}return t;case 0:return qc(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=$a(l,t.pendingProps),Mf(e,t,l,n,a);case 3:e:{if(Pe(t,t.stateNode.containerInfo),e===null)throw Error(r(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,hc(e,t),fn(t,l,null,a);var s=t.memoizedState;if(l=s.cache,ma(t,He,l),l!==i.cache&&cc(t,[He],a,!0),on(),l=s.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Tf(e,t,l,a);break e}else if(l!==n){n=Nt(Error(r(424)),t),ln(n),t=Tf(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ce=Tt(e.firstChild),Ze=t,de=!0,da=null,Ct=!0,a=zo(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ya(),l===n){t=Ft(e,t,a);break e}Je(e,t,l,a)}t=t.child}return t;case 26:return wi(e,t),e===null?(a=Qd(t.type,null,t.pendingProps,null))?t.memoizedState=a:de||(a=t.type,e=t.pendingProps,l=Ji(ue.current).createElement(a),l[Ve]=t,l[tt]=e,$e(l,a,e),Xe(l),t.stateNode=l):t.memoizedState=Qd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Yl(t),e===null&&de&&(l=t.stateNode=Yd(t.type,t.pendingProps,ue.current),Ze=t,Ct=!0,n=Ce,Ca(t.type)?(As=n,Ce=Tt(l.firstChild)):Ce=n),Je(e,t,t.pendingProps.children,a),wi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&de&&((n=l=Ce)&&(l=up(l,t.type,t.pendingProps,Ct),l!==null?(t.stateNode=l,Ze=t,Ce=Tt(l.firstChild),Ct=!1,n=!0):n=!1),n||ha(t)),Yl(t),n=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,l=i.children,Ss(n,i)?l=null:s!==null&&Ss(n,s)&&(t.flags|=32),t.memoizedState!==null&&(n=bc(e,t,Sm,null,null,a),wn._currentValue=n),wi(e,t),Je(e,t,l,a),t.child;case 6:return e===null&&de&&((e=a=Ce)&&(a=cp(a,t.pendingProps,Ct),a!==null?(t.stateNode=a,Ze=t,Ce=null,e=!0):e=!1),e||ha(t)),null;case 13:return _f(e,t,a);case 4:return Pe(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ka(t,null,l,a):Je(e,t,l,a),t.child;case 11:return Sf(e,t,t.type,t.pendingProps,a);case 7:return Je(e,t,t.pendingProps,a),t.child;case 8:return Je(e,t,t.pendingProps.children,a),t.child;case 12:return Je(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ma(t,t.type,l.value),Je(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Xa(t),n=Ke(n),l=l(n),t.flags|=1,Je(e,t,l,a),t.child;case 14:return jf(e,t,t.type,t.pendingProps,a);case 15:return zf(e,t,t.type,t.pendingProps,a);case 19:return Df(e,t,a);case 31:return Tm(e,t,a);case 22:return Nf(e,t,a,t.pendingProps);case 24:return Xa(t),l=Ke(He),e===null?(n=oc(),n===null&&(n=Ae,i=sc(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},dc(t),ma(t,He,n)):((e.lanes&a)!==0&&(hc(e,t),fn(t,null,null,a),on()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ma(t,He,l)):(l=i.cache,ma(t,He,l),l!==n.cache&&cc(t,[He],a,!0))),Je(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}function Wt(e){e.flags|=4}function Jc(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(ud())e.flags|=8192;else throw Za=gi,fc}else e.flags&=-16777217}function Of(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!$d(t))if(ud())e.flags|=8192;else throw Za=gi,fc}function Ri(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?fr():536870912,e.lanes|=t,Cl|=t)}function vn(e,t){if(!de)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function wm(e,t,a){var l=t.pendingProps;switch(ac(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Me(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Kt(He),Oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ml(t)?Wt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,nc())),Me(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(Wt(t),i!==null?(Me(t),Of(t,i)):(Me(t),Jc(t,n,null,l,a))):i?i!==e.memoizedState?(Wt(t),Me(t),Of(t,i)):(Me(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Wt(t),Me(t),Jc(t,n,e,l,a)),null;case 27:if(Qn(t),a=ue.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Wt(t);else{if(!l){if(t.stateNode===null)throw Error(r(166));return Me(t),null}e=Z.current,ml(t)?fo(t):(e=Yd(n,l,a),t.stateNode=e,Wt(t))}return Me(t),null;case 5:if(Qn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Wt(t);else{if(!l){if(t.stateNode===null)throw Error(r(166));return Me(t),null}if(i=Z.current,ml(t))fo(t);else{var s=Ji(ue.current);switch(i){case 1:i=s.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=s.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=s.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?s.createElement("select",{is:l.is}):s.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?s.createElement(n,{is:l.is}):s.createElement(n)}}i[Ve]=t,i[tt]=l;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)i.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=i;e:switch($e(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Wt(t)}}return Me(t),Jc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Wt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(r(166));if(e=ue.current,ml(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Ze,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Ve]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||_d(e.nodeValue,a)),e||ha(t,!0)}else e=Ji(e).createTextNode(l),e[Ve]=t,t.stateNode=e}return Me(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=ml(t),a!==null){if(e===null){if(!l)throw Error(r(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[Ve]=t}else Ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),e=!1}else a=nc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(vt(t),t):(vt(t),null);if((t.flags&128)!==0)throw Error(r(558))}return Me(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=ml(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(r(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));n[Ve]=t}else Ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),n=!1}else n=nc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(vt(t),t):(vt(t),null)}return vt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Ri(t,t.updateQueue),Me(t),null);case 4:return Oe(),e===null&&gs(t.stateNode.containerInfo),Me(t),null;case 10:return Kt(t.type),Me(t),null;case 19:if(O(Be),l=t.memoizedState,l===null)return Me(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)vn(l,!1);else{if(Re!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=bi(e),i!==null){for(t.flags|=128,vn(l,!1),e=i.updateQueue,t.updateQueue=e,Ri(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)uo(a,e),a=a.sibling;return G(Be,Be.current&1|2),de&&Vt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&ft()>ki&&(t.flags|=128,n=!0,vn(l,!1),t.lanes=4194304)}else{if(!n)if(e=bi(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Ri(t,e),vn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!de)return Me(t),null}else 2*ft()-l.renderingStartTime>ki&&a!==536870912&&(t.flags|=128,n=!0,vn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=ft(),e.sibling=null,a=Be.current,G(Be,n?a&1|2:a&1),de&&Vt(t,l.treeForkCount),e):(Me(t),null);case 22:case 23:return vt(t),vc(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),a=t.updateQueue,a!==null&&Ri(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&O(Qa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Kt(He),Me(t),null;case 25:return null;case 30:return null}throw Error(r(156,t.tag))}function Dm(e,t){switch(ac(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Kt(He),Oe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Qn(t),null;case 31:if(t.memoizedState!==null){if(vt(t),t.alternate===null)throw Error(r(340));Ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(vt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(Be),null;case 4:return Oe(),null;case 10:return Kt(t.type),null;case 22:case 23:return vt(t),vc(),e!==null&&O(Qa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Kt(He),null;case 25:return null;default:return null}}function Bf(e,t){switch(ac(t),t.tag){case 3:Kt(He),Oe();break;case 26:case 27:case 5:Qn(t);break;case 4:Oe();break;case 31:t.memoizedState!==null&&vt(t);break;case 13:vt(t);break;case 19:O(Be);break;case 10:Kt(t.type);break;case 22:case 23:vt(t),vc(),e!==null&&O(Qa);break;case 24:Kt(He)}}function yn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,s=a.inst;l=i(),s.destroy=l}a=a.next}while(a!==n)}}catch(f){ye(t,t.return,f)}}function ba(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var s=l.inst,f=s.destroy;if(f!==void 0){s.destroy=void 0,n=t;var g=a,C=f;try{C()}catch(_){ye(n,g,_)}}}l=l.next}while(l!==i)}}catch(_){ye(t,t.return,_)}}function Uf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Eo(t,a)}catch(l){ye(e,e.return,l)}}}function Hf(e,t,a){a.props=$a(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ye(e,t,l)}}function xn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){ye(e,t,n)}}function Ht(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ye(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ye(e,t,n)}else a.current=null}function kf(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ye(e,e.return,n)}}function $c(e,t,a){try{var l=e.stateNode;ep(l,e.type,a,t),l[tt]=t}catch(n){ye(e,e.return,n)}}function Lf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ca(e.type)||e.tag===4}function Fc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ca(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wc(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Gt));else if(l!==4&&(l===27&&Ca(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Wc(e,t,a),e=e.sibling;e!==null;)Wc(e,t,a),e=e.sibling}function Oi(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Ca(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Oi(e,t,a),e=e.sibling;e!==null;)Oi(e,t,a),e=e.sibling}function qf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);$e(t,l,a),t[Ve]=e,t[tt]=a}catch(i){ye(e,e.return,i)}}var It=!1,qe=!1,Ic=!1,Yf=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function Rm(e,t){if(e=e.containerInfo,xs=tu,e=Wr(e),Vu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var s=0,f=-1,g=-1,C=0,_=0,R=e,M=null;t:for(;;){for(var T;R!==a||n!==0&&R.nodeType!==3||(f=s+n),R!==i||l!==0&&R.nodeType!==3||(g=s+l),R.nodeType===3&&(s+=R.nodeValue.length),(T=R.firstChild)!==null;)M=R,R=T;for(;;){if(R===e)break t;if(M===a&&++C===n&&(f=s),M===i&&++_===l&&(g=s),(T=R.nextSibling)!==null)break;R=M,M=R.parentNode}R=T}a=f===-1||g===-1?null:{start:f,end:g}}else a=null}a=a||{start:0,end:0}}else a=null;for(bs={focusedElem:e,selectionRange:a},tu=!1,Qe=t;Qe!==null;)if(t=Qe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Qe=e;else for(;Qe!==null;){switch(t=Qe,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var Q=$a(a.type,n);e=l.getSnapshotBeforeUpdate(Q,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(W){ye(a,a.return,W)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)zs(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":zs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=t.sibling,e!==null){e.return=t.return,Qe=e;break}Qe=t.return}}function Gf(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ea(e,a),l&4&&yn(5,a);break;case 1:if(ea(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(s){ye(a,a.return,s)}else{var n=$a(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){ye(a,a.return,s)}}l&64&&Uf(a),l&512&&xn(a,a.return);break;case 3:if(ea(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Eo(e,t)}catch(s){ye(a,a.return,s)}}break;case 27:t===null&&l&4&&qf(a);case 26:case 5:ea(e,a),t===null&&l&4&&kf(a),l&512&&xn(a,a.return);break;case 12:ea(e,a);break;case 31:ea(e,a),l&4&&Vf(e,a);break;case 13:ea(e,a),l&4&&Zf(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Gm.bind(null,a),sp(e,a))));break;case 22:if(l=a.memoizedState!==null||It,!l){t=t!==null&&t.memoizedState!==null||qe,n=It;var i=qe;It=l,(qe=t)&&!i?ta(e,a,(a.subtreeFlags&8772)!==0):ea(e,a),It=n,qe=i}break;case 30:break;default:ea(e,a)}}function Xf(e){var t=e.alternate;t!==null&&(e.alternate=null,Xf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Mu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Te=null,lt=!1;function Pt(e,t,a){for(a=a.child;a!==null;)Qf(e,t,a),a=a.sibling}function Qf(e,t,a){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(Gl,a)}catch{}switch(a.tag){case 26:qe||Ht(a,t),Pt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:qe||Ht(a,t);var l=Te,n=lt;Ca(a.type)&&(Te=a.stateNode,lt=!1),Pt(e,t,a),Mn(a.stateNode),Te=l,lt=n;break;case 5:qe||Ht(a,t);case 6:if(l=Te,n=lt,Te=null,Pt(e,t,a),Te=l,lt=n,Te!==null)if(lt)try{(Te.nodeType===9?Te.body:Te.nodeName==="HTML"?Te.ownerDocument.body:Te).removeChild(a.stateNode)}catch(i){ye(a,t,i)}else try{Te.removeChild(a.stateNode)}catch(i){ye(a,t,i)}break;case 18:Te!==null&&(lt?(e=Te,Ud(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Bl(e)):Ud(Te,a.stateNode));break;case 4:l=Te,n=lt,Te=a.stateNode.containerInfo,lt=!0,Pt(e,t,a),Te=l,lt=n;break;case 0:case 11:case 14:case 15:ba(2,a,t),qe||ba(4,a,t),Pt(e,t,a);break;case 1:qe||(Ht(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Hf(a,t,l)),Pt(e,t,a);break;case 21:Pt(e,t,a);break;case 22:qe=(l=qe)||a.memoizedState!==null,Pt(e,t,a),qe=l;break;default:Pt(e,t,a)}}function Vf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Bl(e)}catch(a){ye(t,t.return,a)}}}function Zf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Bl(e)}catch(a){ye(t,t.return,a)}}function Om(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Yf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Yf),t;default:throw Error(r(435,e.tag))}}function Bi(e,t){var a=Om(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=Xm.bind(null,e,l);l.then(n,n)}})}function nt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,s=t,f=s;e:for(;f!==null;){switch(f.tag){case 27:if(Ca(f.type)){Te=f.stateNode,lt=!1;break e}break;case 5:Te=f.stateNode,lt=!1;break e;case 3:case 4:Te=f.stateNode.containerInfo,lt=!0;break e}f=f.return}if(Te===null)throw Error(r(160));Qf(i,s,n),Te=null,lt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Kf(t,e),t=t.sibling}var Rt=null;function Kf(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:nt(t,e),it(e),l&4&&(ba(3,e,e.return),yn(3,e),ba(5,e,e.return));break;case 1:nt(t,e),it(e),l&512&&(qe||a===null||Ht(a,a.return)),l&64&&It&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Rt;if(nt(t,e),it(e),l&512&&(qe||a===null||Ht(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Vl]||i[Ve]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),$e(i,l,a),i[Ve]=e,Xe(i),l=i;break e;case"link":var s=Kd("link","href",n).get(l+(a.href||""));if(s){for(var f=0;f<s.length;f++)if(i=s[f],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(f,1);break t}}i=n.createElement(l),$e(i,l,a),n.head.appendChild(i);break;case"meta":if(s=Kd("meta","content",n).get(l+(a.content||""))){for(f=0;f<s.length;f++)if(i=s[f],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(f,1);break t}}i=n.createElement(l),$e(i,l,a),n.head.appendChild(i);break;default:throw Error(r(468,l))}i[Ve]=e,Xe(i),l=i}e.stateNode=l}else Jd(n,e.type,e.stateNode);else e.stateNode=Zd(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?Jd(n,e.type,e.stateNode):Zd(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&$c(e,e.memoizedProps,a.memoizedProps)}break;case 27:nt(t,e),it(e),l&512&&(qe||a===null||Ht(a,a.return)),a!==null&&l&4&&$c(e,e.memoizedProps,a.memoizedProps);break;case 5:if(nt(t,e),it(e),l&512&&(qe||a===null||Ht(a,a.return)),e.flags&32){n=e.stateNode;try{nl(n,"")}catch(Q){ye(e,e.return,Q)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,$c(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Ic=!0);break;case 6:if(nt(t,e),it(e),l&4){if(e.stateNode===null)throw Error(r(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(Q){ye(e,e.return,Q)}}break;case 3:if(Wi=null,n=Rt,Rt=$i(t.containerInfo),nt(t,e),Rt=n,it(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Bl(t.containerInfo)}catch(Q){ye(e,e.return,Q)}Ic&&(Ic=!1,Jf(e));break;case 4:l=Rt,Rt=$i(e.stateNode.containerInfo),nt(t,e),it(e),Rt=l;break;case 12:nt(t,e),it(e);break;case 31:nt(t,e),it(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Bi(e,l)));break;case 13:nt(t,e),it(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Hi=ft()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Bi(e,l)));break;case 22:n=e.memoizedState!==null;var g=a!==null&&a.memoizedState!==null,C=It,_=qe;if(It=C||n,qe=_||g,nt(t,e),qe=_,It=C,it(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||g||It||qe||Fa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){g=a=t;try{if(i=g.stateNode,n)s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{f=g.stateNode;var R=g.memoizedProps.style,M=R!=null&&R.hasOwnProperty("display")?R.display:null;f.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch(Q){ye(g,g.return,Q)}}}else if(t.tag===6){if(a===null){g=t;try{g.stateNode.nodeValue=n?"":g.memoizedProps}catch(Q){ye(g,g.return,Q)}}}else if(t.tag===18){if(a===null){g=t;try{var T=g.stateNode;n?Hd(T,!0):Hd(g.stateNode,!1)}catch(Q){ye(g,g.return,Q)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Bi(e,a))));break;case 19:nt(t,e),it(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Bi(e,l)));break;case 30:break;case 21:break;default:nt(t,e),it(e)}}function it(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Lf(l)){a=l;break}l=l.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var n=a.stateNode,i=Fc(e);Oi(e,i,n);break;case 5:var s=a.stateNode;a.flags&32&&(nl(s,""),a.flags&=-33);var f=Fc(e);Oi(e,f,s);break;case 3:case 4:var g=a.stateNode.containerInfo,C=Fc(e);Wc(e,C,g);break;default:throw Error(r(161))}}catch(_){ye(e,e.return,_)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Jf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Jf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ea(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Gf(e,t.alternate,t),t=t.sibling}function Fa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ba(4,t,t.return),Fa(t);break;case 1:Ht(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Hf(t,t.return,a),Fa(t);break;case 27:Mn(t.stateNode);case 26:case 5:Ht(t,t.return),Fa(t);break;case 22:t.memoizedState===null&&Fa(t);break;case 30:Fa(t);break;default:Fa(t)}e=e.sibling}}function ta(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,s=i.flags;switch(i.tag){case 0:case 11:case 15:ta(n,i,a),yn(4,i);break;case 1:if(ta(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(C){ye(l,l.return,C)}if(l=i,n=l.updateQueue,n!==null){var f=l.stateNode;try{var g=n.shared.hiddenCallbacks;if(g!==null)for(n.shared.hiddenCallbacks=null,n=0;n<g.length;n++)No(g[n],f)}catch(C){ye(l,l.return,C)}}a&&s&64&&Uf(i),xn(i,i.return);break;case 27:qf(i);case 26:case 5:ta(n,i,a),a&&l===null&&s&4&&kf(i),xn(i,i.return);break;case 12:ta(n,i,a);break;case 31:ta(n,i,a),a&&s&4&&Vf(n,i);break;case 13:ta(n,i,a),a&&s&4&&Zf(n,i);break;case 22:i.memoizedState===null&&ta(n,i,a),xn(i,i.return);break;case 30:break;default:ta(n,i,a)}t=t.sibling}}function Pc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&nn(a))}function es(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&nn(e))}function Ot(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)$f(e,t,a,l),t=t.sibling}function $f(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Ot(e,t,a,l),n&2048&&yn(9,t);break;case 1:Ot(e,t,a,l);break;case 3:Ot(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&nn(e)));break;case 12:if(n&2048){Ot(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,s=i.id,f=i.onPostCommit;typeof f=="function"&&f(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(g){ye(t,t.return,g)}}else Ot(e,t,a,l);break;case 31:Ot(e,t,a,l);break;case 13:Ot(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,s=t.alternate,t.memoizedState!==null?i._visibility&2?Ot(e,t,a,l):bn(e,t):i._visibility&2?Ot(e,t,a,l):(i._visibility|=2,Nl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Pc(s,t);break;case 24:Ot(e,t,a,l),n&2048&&es(t.alternate,t);break;default:Ot(e,t,a,l)}}function Nl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,s=t,f=a,g=l,C=s.flags;switch(s.tag){case 0:case 11:case 15:Nl(i,s,f,g,n),yn(8,s);break;case 23:break;case 22:var _=s.stateNode;s.memoizedState!==null?_._visibility&2?Nl(i,s,f,g,n):bn(i,s):(_._visibility|=2,Nl(i,s,f,g,n)),n&&C&2048&&Pc(s.alternate,s);break;case 24:Nl(i,s,f,g,n),n&&C&2048&&es(s.alternate,s);break;default:Nl(i,s,f,g,n)}t=t.sibling}}function bn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:bn(a,l),n&2048&&Pc(l.alternate,l);break;case 24:bn(a,l),n&2048&&es(l.alternate,l);break;default:bn(a,l)}t=t.sibling}}var Sn=8192;function El(e,t,a){if(e.subtreeFlags&Sn)for(e=e.child;e!==null;)Ff(e,t,a),e=e.sibling}function Ff(e,t,a){switch(e.tag){case 26:El(e,t,a),e.flags&Sn&&e.memoizedState!==null&&bp(a,Rt,e.memoizedState,e.memoizedProps);break;case 5:El(e,t,a);break;case 3:case 4:var l=Rt;Rt=$i(e.stateNode.containerInfo),El(e,t,a),Rt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Sn,Sn=16777216,El(e,t,a),Sn=l):El(e,t,a));break;default:El(e,t,a)}}function Wf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function jn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Qe=l,Pf(l,e)}Wf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)If(e),e=e.sibling}function If(e){switch(e.tag){case 0:case 11:case 15:jn(e),e.flags&2048&&ba(9,e,e.return);break;case 3:jn(e);break;case 12:jn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ui(e)):jn(e);break;default:jn(e)}}function Ui(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Qe=l,Pf(l,e)}Wf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ba(8,t,t.return),Ui(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ui(t));break;default:Ui(t)}e=e.sibling}}function Pf(e,t){for(;Qe!==null;){var a=Qe;switch(a.tag){case 0:case 11:case 15:ba(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:nn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Qe=l;else e:for(a=e;Qe!==null;){l=Qe;var n=l.sibling,i=l.return;if(Xf(l),l===a){Qe=null;break e}if(n!==null){n.return=i,Qe=n;break e}Qe=i}}}var Bm={getCacheForType:function(e){var t=Ke(He),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ke(He).controller.signal}},Um=typeof WeakMap=="function"?WeakMap:Map,pe=0,Ae=null,ce=null,oe=0,ve=0,yt=null,Sa=!1,Al=!1,ts=!1,aa=0,Re=0,ja=0,Wa=0,as=0,xt=0,Cl=0,zn=null,ut=null,ls=!1,Hi=0,ed=0,ki=1/0,Li=null,za=null,Ye=0,Na=null,Ml=null,la=0,ns=0,is=null,td=null,Nn=0,us=null;function bt(){return(pe&2)!==0&&oe!==0?oe&-oe:w.T!==null?ds():pr()}function ad(){if(xt===0)if((oe&536870912)===0||de){var e=Kn;Kn<<=1,(Kn&3932160)===0&&(Kn=262144),xt=e}else xt=536870912;return e=gt.current,e!==null&&(e.flags|=32),xt}function ct(e,t,a){(e===Ae&&(ve===2||ve===9)||e.cancelPendingCommit!==null)&&(Tl(e,0),Ea(e,oe,xt,!1)),Ql(e,a),((pe&2)===0||e!==Ae)&&(e===Ae&&((pe&2)===0&&(Wa|=a),Re===4&&Ea(e,oe,xt,!1)),kt(e))}function ld(e,t,a){if((pe&6)!==0)throw Error(r(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Xl(e,t),n=l?Lm(e,t):ss(e,t,!0),i=l;do{if(n===0){Al&&!l&&Ea(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!Hm(a)){n=ss(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var f=e;n=zn;var g=f.current.memoizedState.isDehydrated;if(g&&(Tl(f,s).flags|=256),s=ss(f,s,!1),s!==2){if(ts&&!g){f.errorRecoveryDisabledLanes|=i,Wa|=i,n=4;break e}i=ut,ut=n,i!==null&&(ut===null?ut=i:ut.push.apply(ut,i))}n=s}if(i=!1,n!==2)continue}}if(n===1){Tl(e,0),Ea(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(r(345));case 4:if((t&4194048)!==t)break;case 6:Ea(l,t,xt,!Sa);break e;case 2:ut=null;break;case 3:case 5:break;default:throw Error(r(329))}if((t&62914560)===t&&(n=Hi+300-ft(),10<n)){if(Ea(l,t,xt,!Sa),$n(l,0,!0)!==0)break e;la=t,l.timeoutHandle=Od(nd.bind(null,l,a,ut,Li,ls,t,xt,Wa,Cl,Sa,i,"Throttled",-0,0),n);break e}nd(l,a,ut,Li,ls,t,xt,Wa,Cl,Sa,i,null,-0,0)}}break}while(!0);kt(e)}function nd(e,t,a,l,n,i,s,f,g,C,_,R,M,T){if(e.timeoutHandle=-1,R=t.subtreeFlags,R&8192||(R&16785408)===16785408){R={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gt},Ff(t,i,R);var Q=(i&62914560)===i?Hi-ft():(i&4194048)===i?ed-ft():0;if(Q=Sp(R,Q),Q!==null){la=i,e.cancelPendingCommit=Q(dd.bind(null,e,t,i,a,l,n,s,f,g,_,R,null,M,T)),Ea(e,i,s,!C);return}}dd(e,t,i,a,l,n,s,f,g)}function Hm(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!mt(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ea(e,t,a,l){t&=~as,t&=~Wa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-ht(n),s=1<<i;l[i]=-1,n&=~s}a!==0&&dr(e,a,t)}function qi(){return(pe&6)===0?(En(0),!1):!0}function cs(){if(ce!==null){if(ve===0)var e=ce.return;else e=ce,Zt=Ga=null,zc(e),xl=null,cn=0,e=ce;for(;e!==null;)Bf(e.alternate,e),e=e.return;ce=null}}function Tl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,lp(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),la=0,cs(),Ae=e,ce=a=Qt(e.current,null),oe=t,ve=0,yt=null,Sa=!1,Al=Xl(e,t),ts=!1,Cl=xt=as=Wa=ja=Re=0,ut=zn=null,ls=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-ht(l),i=1<<n;t|=e[n],l&=~i}return aa=t,ci(),a}function id(e,t){le=null,w.H=pn,t===yl||t===pi?(t=bo(),ve=3):t===fc?(t=bo(),ve=4):ve=t===Lc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,yt=t,ce===null&&(Re=1,Ti(e,Nt(t,e.current)))}function ud(){var e=gt.current;return e===null?!0:(oe&4194048)===oe?Mt===null:(oe&62914560)===oe||(oe&536870912)!==0?e===Mt:!1}function cd(){var e=w.H;return w.H=pn,e===null?pn:e}function sd(){var e=w.A;return w.A=Bm,e}function Yi(){Re=4,Sa||(oe&4194048)!==oe&&gt.current!==null||(Al=!0),(ja&134217727)===0&&(Wa&134217727)===0||Ae===null||Ea(Ae,oe,xt,!1)}function ss(e,t,a){var l=pe;pe|=2;var n=cd(),i=sd();(Ae!==e||oe!==t)&&(Li=null,Tl(e,t)),t=!1;var s=Re;e:do try{if(ve!==0&&ce!==null){var f=ce,g=yt;switch(ve){case 8:cs(),s=6;break e;case 3:case 2:case 9:case 6:gt.current===null&&(t=!0);var C=ve;if(ve=0,yt=null,_l(e,f,g,C),a&&Al){s=0;break e}break;default:C=ve,ve=0,yt=null,_l(e,f,g,C)}}km(),s=Re;break}catch(_){id(e,_)}while(!0);return t&&e.shellSuspendCounter++,Zt=Ga=null,pe=l,w.H=n,w.A=i,ce===null&&(Ae=null,oe=0,ci()),s}function km(){for(;ce!==null;)rd(ce)}function Lm(e,t){var a=pe;pe|=2;var l=cd(),n=sd();Ae!==e||oe!==t?(Li=null,ki=ft()+500,Tl(e,t)):Al=Xl(e,t);e:do try{if(ve!==0&&ce!==null){t=ce;var i=yt;t:switch(ve){case 1:ve=0,yt=null,_l(e,t,i,1);break;case 2:case 9:if(yo(i)){ve=0,yt=null,od(t);break}t=function(){ve!==2&&ve!==9||Ae!==e||(ve=7),kt(e)},i.then(t,t);break e;case 3:ve=7;break e;case 4:ve=5;break e;case 7:yo(i)?(ve=0,yt=null,od(t)):(ve=0,yt=null,_l(e,t,i,7));break;case 5:var s=null;switch(ce.tag){case 26:s=ce.memoizedState;case 5:case 27:var f=ce;if(s?$d(s):f.stateNode.complete){ve=0,yt=null;var g=f.sibling;if(g!==null)ce=g;else{var C=f.return;C!==null?(ce=C,Gi(C)):ce=null}break t}}ve=0,yt=null,_l(e,t,i,5);break;case 6:ve=0,yt=null,_l(e,t,i,6);break;case 8:cs(),Re=6;break e;default:throw Error(r(462))}}qm();break}catch(_){id(e,_)}while(!0);return Zt=Ga=null,w.H=l,w.A=n,pe=a,ce!==null?0:(Ae=null,oe=0,ci(),Re)}function qm(){for(;ce!==null&&!rh();)rd(ce)}function rd(e){var t=Rf(e.alternate,e,aa);e.memoizedProps=e.pendingProps,t===null?Gi(e):ce=t}function od(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Cf(a,t,t.pendingProps,t.type,void 0,oe);break;case 11:t=Cf(a,t,t.pendingProps,t.type.render,t.ref,oe);break;case 5:zc(t);default:Bf(a,t),t=ce=uo(t,aa),t=Rf(a,t,aa)}e.memoizedProps=e.pendingProps,t===null?Gi(e):ce=t}function _l(e,t,a,l){Zt=Ga=null,zc(t),xl=null,cn=0;var n=t.return;try{if(Mm(e,n,t,a,oe)){Re=1,Ti(e,Nt(a,e.current)),ce=null;return}}catch(i){if(n!==null)throw ce=n,i;Re=1,Ti(e,Nt(a,e.current)),ce=null;return}t.flags&32768?(de||l===1?e=!0:Al||(oe&536870912)!==0?e=!1:(Sa=e=!0,(l===2||l===9||l===3||l===6)&&(l=gt.current,l!==null&&l.tag===13&&(l.flags|=16384))),fd(t,e)):Gi(t)}function Gi(e){var t=e;do{if((t.flags&32768)!==0){fd(t,Sa);return}e=t.return;var a=wm(t.alternate,t,aa);if(a!==null){ce=a;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);Re===0&&(Re=5)}function fd(e,t){do{var a=Dm(e.alternate,e);if(a!==null){a.flags&=32767,ce=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ce=e;return}ce=e=a}while(e!==null);Re=6,ce=null}function dd(e,t,a,l,n,i,s,f,g){e.cancelPendingCommit=null;do Xi();while(Ye!==0);if((pe&6)!==0)throw Error(r(327));if(t!==null){if(t===e.current)throw Error(r(177));if(i=t.lanes|t.childLanes,i|=Fu,xh(e,a,i,s,f,g),e===Ae&&(ce=Ae=null,oe=0),Ml=t,Na=e,la=a,ns=i,is=n,td=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Qm(Vn,function(){return vd(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=w.T,w.T=null,n=Y.p,Y.p=2,s=pe,pe|=4;try{Rm(e,t,a)}finally{pe=s,Y.p=n,w.T=l}}Ye=1,hd(),md(),pd()}}function hd(){if(Ye===1){Ye=0;var e=Na,t=Ml,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=w.T,w.T=null;var l=Y.p;Y.p=2;var n=pe;pe|=4;try{Kf(t,e);var i=bs,s=Wr(e.containerInfo),f=i.focusedElem,g=i.selectionRange;if(s!==f&&f&&f.ownerDocument&&Fr(f.ownerDocument.documentElement,f)){if(g!==null&&Vu(f)){var C=g.start,_=g.end;if(_===void 0&&(_=C),"selectionStart"in f)f.selectionStart=C,f.selectionEnd=Math.min(_,f.value.length);else{var R=f.ownerDocument||document,M=R&&R.defaultView||window;if(M.getSelection){var T=M.getSelection(),Q=f.textContent.length,W=Math.min(g.start,Q),je=g.end===void 0?W:Math.min(g.end,Q);!T.extend&&W>je&&(s=je,je=W,W=s);var S=$r(f,W),y=$r(f,je);if(S&&y&&(T.rangeCount!==1||T.anchorNode!==S.node||T.anchorOffset!==S.offset||T.focusNode!==y.node||T.focusOffset!==y.offset)){var A=R.createRange();A.setStart(S.node,S.offset),T.removeAllRanges(),W>je?(T.addRange(A),T.extend(y.node,y.offset)):(A.setEnd(y.node,y.offset),T.addRange(A))}}}}for(R=[],T=f;T=T.parentNode;)T.nodeType===1&&R.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<R.length;f++){var D=R[f];D.element.scrollLeft=D.left,D.element.scrollTop=D.top}}tu=!!xs,bs=xs=null}finally{pe=n,Y.p=l,w.T=a}}e.current=t,Ye=2}}function md(){if(Ye===2){Ye=0;var e=Na,t=Ml,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=w.T,w.T=null;var l=Y.p;Y.p=2;var n=pe;pe|=4;try{Gf(e,t.alternate,t)}finally{pe=n,Y.p=l,w.T=a}}Ye=3}}function pd(){if(Ye===4||Ye===3){Ye=0,oh();var e=Na,t=Ml,a=la,l=td;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ye=5:(Ye=0,Ml=Na=null,gd(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(za=null),Au(a),t=t.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(Gl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=w.T,n=Y.p,Y.p=2,w.T=null;try{for(var i=e.onRecoverableError,s=0;s<l.length;s++){var f=l[s];i(f.value,{componentStack:f.stack})}}finally{w.T=t,Y.p=n}}(la&3)!==0&&Xi(),kt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===us?Nn++:(Nn=0,us=e):Nn=0,En(0)}}function gd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,nn(t)))}function Xi(){return hd(),md(),pd(),vd()}function vd(){if(Ye!==5)return!1;var e=Na,t=ns;ns=0;var a=Au(la),l=w.T,n=Y.p;try{Y.p=32>a?32:a,w.T=null,a=is,is=null;var i=Na,s=la;if(Ye=0,Ml=Na=null,la=0,(pe&6)!==0)throw Error(r(331));var f=pe;if(pe|=4,If(i.current),$f(i,i.current,s,a),pe=f,En(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(Gl,i)}catch{}return!0}finally{Y.p=n,w.T=l,gd(e,t)}}function yd(e,t,a){t=Nt(a,t),t=kc(e.stateNode,t,2),e=va(e,t,2),e!==null&&(Ql(e,2),kt(e))}function ye(e,t,a){if(e.tag===3)yd(e,e,a);else for(;t!==null;){if(t.tag===3){yd(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(za===null||!za.has(l))){e=Nt(a,e),a=xf(2),l=va(t,a,2),l!==null&&(bf(a,l,t,e),Ql(l,2),kt(l));break}}t=t.return}}function rs(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Um;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(ts=!0,n.add(a),e=Ym.bind(null,e,t,a),t.then(e,e))}function Ym(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ae===e&&(oe&a)===a&&(Re===4||Re===3&&(oe&62914560)===oe&&300>ft()-Hi?(pe&2)===0&&Tl(e,0):as|=a,Cl===oe&&(Cl=0)),kt(e)}function xd(e,t){t===0&&(t=fr()),e=La(e,t),e!==null&&(Ql(e,t),kt(e))}function Gm(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),xd(e,a)}function Xm(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(t),xd(e,a)}function Qm(e,t){return ju(e,t)}var Qi=null,wl=null,os=!1,Vi=!1,fs=!1,Aa=0;function kt(e){e!==wl&&e.next===null&&(wl===null?Qi=wl=e:wl=wl.next=e),Vi=!0,os||(os=!0,Zm())}function En(e,t){if(!fs&&Vi){fs=!0;do for(var a=!1,l=Qi;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var s=l.suspendedLanes,f=l.pingedLanes;i=(1<<31-ht(42|e)+1)-1,i&=n&~(s&~f),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,zd(l,i))}else i=oe,i=$n(l,l===Ae?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Xl(l,i)||(a=!0,zd(l,i));l=l.next}while(a);fs=!1}}function Vm(){bd()}function bd(){Vi=os=!1;var e=0;Aa!==0&&ap()&&(e=Aa);for(var t=ft(),a=null,l=Qi;l!==null;){var n=l.next,i=Sd(l,t);i===0?(l.next=null,a===null?Qi=n:a.next=n,n===null&&(wl=a)):(a=l,(e!==0||(i&3)!==0)&&(Vi=!0)),l=n}Ye!==0&&Ye!==5||En(e),Aa!==0&&(Aa=0)}function Sd(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var s=31-ht(i),f=1<<s,g=n[s];g===-1?((f&a)===0||(f&l)!==0)&&(n[s]=yh(f,t)):g<=t&&(e.expiredLanes|=f),i&=~f}if(t=Ae,a=oe,a=$n(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(ve===2||ve===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&zu(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Xl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&zu(l),Au(a)){case 2:case 8:a=rr;break;case 32:a=Vn;break;case 268435456:a=or;break;default:a=Vn}return l=jd.bind(null,e),a=ju(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&zu(l),e.callbackPriority=2,e.callbackNode=null,2}function jd(e,t){if(Ye!==0&&Ye!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Xi()&&e.callbackNode!==a)return null;var l=oe;return l=$n(e,e===Ae?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(ld(e,l,t),Sd(e,ft()),e.callbackNode!=null&&e.callbackNode===a?jd.bind(null,e):null)}function zd(e,t){if(Xi())return null;ld(e,t,!0)}function Zm(){np(function(){(pe&6)!==0?ju(sr,Vm):bd()})}function ds(){if(Aa===0){var e=gl;e===0&&(e=Zn,Zn<<=1,(Zn&261888)===0&&(Zn=256)),Aa=e}return Aa}function Nd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Pn(""+e)}function Ed(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Km(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=Nd((n[tt]||null).action),s=l.submitter;s&&(t=(t=s[tt]||null)?Nd(t.formAction):s.getAttribute("formAction"),t!==null&&(i=t,s=null));var f=new li("action","action",null,l,n);e.push({event:f,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Aa!==0){var g=s?Ed(n,s):new FormData(n);Dc(a,{pending:!0,data:g,method:n.method,action:i},null,g)}}else typeof i=="function"&&(f.preventDefault(),g=s?Ed(n,s):new FormData(n),Dc(a,{pending:!0,data:g,method:n.method,action:i},i,g))},currentTarget:n}]})}}for(var hs=0;hs<$u.length;hs++){var ms=$u[hs],Jm=ms.toLowerCase(),$m=ms[0].toUpperCase()+ms.slice(1);Dt(Jm,"on"+$m)}Dt(eo,"onAnimationEnd"),Dt(to,"onAnimationIteration"),Dt(ao,"onAnimationStart"),Dt("dblclick","onDoubleClick"),Dt("focusin","onFocus"),Dt("focusout","onBlur"),Dt(fm,"onTransitionRun"),Dt(dm,"onTransitionStart"),Dt(hm,"onTransitionCancel"),Dt(lo,"onTransitionEnd"),al("onMouseEnter",["mouseout","mouseover"]),al("onMouseLeave",["mouseout","mouseover"]),al("onPointerEnter",["pointerout","pointerover"]),al("onPointerLeave",["pointerout","pointerover"]),Ba("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ba("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ba("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ba("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ba("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ba("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var An="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(An));function Ad(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var s=l.length-1;0<=s;s--){var f=l[s],g=f.instance,C=f.currentTarget;if(f=f.listener,g!==i&&n.isPropagationStopped())break e;i=f,n.currentTarget=C;try{i(n)}catch(_){ui(_)}n.currentTarget=null,i=g}else for(s=0;s<l.length;s++){if(f=l[s],g=f.instance,C=f.currentTarget,f=f.listener,g!==i&&n.isPropagationStopped())break e;i=f,n.currentTarget=C;try{i(n)}catch(_){ui(_)}n.currentTarget=null,i=g}}}}function se(e,t){var a=t[Cu];a===void 0&&(a=t[Cu]=new Set);var l=e+"__bubble";a.has(l)||(Cd(t,e,2,!1),a.add(l))}function ps(e,t,a){var l=0;t&&(l|=4),Cd(a,e,l,t)}var Zi="_reactListening"+Math.random().toString(36).slice(2);function gs(e){if(!e[Zi]){e[Zi]=!0,yr.forEach(function(a){a!=="selectionchange"&&(Fm.has(a)||ps(a,!1,e),ps(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zi]||(t[Zi]=!0,ps("selectionchange",!1,t))}}function Cd(e,t,a,l){switch(a0(t)){case 2:var n=Np;break;case 8:n=Ep;break;default:n=ws}a=n.bind(null,t,a,e),n=void 0,!Uu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function vs(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var s=l.tag;if(s===3||s===4){var f=l.stateNode.containerInfo;if(f===n)break;if(s===4)for(s=l.return;s!==null;){var g=s.tag;if((g===3||g===4)&&s.stateNode.containerInfo===n)return;s=s.return}for(;f!==null;){if(s=Pa(f),s===null)return;if(g=s.tag,g===5||g===6||g===26||g===27){l=i=s;continue e}f=f.parentNode}}l=l.return}_r(function(){var C=i,_=Ou(a),R=[];e:{var M=no.get(e);if(M!==void 0){var T=li,Q=e;switch(e){case"keypress":if(ti(a)===0)break e;case"keydown":case"keyup":T=Xh;break;case"focusin":Q="focus",T=qu;break;case"focusout":Q="blur",T=qu;break;case"beforeblur":case"afterblur":T=qu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Rr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=wh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=Zh;break;case eo:case to:case ao:T=Oh;break;case lo:T=Jh;break;case"scroll":case"scrollend":T=Th;break;case"wheel":T=Fh;break;case"copy":case"cut":case"paste":T=Uh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Br;break;case"toggle":case"beforetoggle":T=Ih}var W=(t&4)!==0,je=!W&&(e==="scroll"||e==="scrollend"),S=W?M!==null?M+"Capture":null:M;W=[];for(var y=C,A;y!==null;){var D=y;if(A=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||A===null||S===null||(D=Kl(y,S),D!=null&&W.push(Cn(y,D,A))),je)break;y=y.return}0<W.length&&(M=new T(M,Q,null,a,_),R.push({event:M,listeners:W}))}}if((t&7)===0){e:{if(M=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",M&&a!==Ru&&(Q=a.relatedTarget||a.fromElement)&&(Pa(Q)||Q[Ia]))break e;if((T||M)&&(M=_.window===_?_:(M=_.ownerDocument)?M.defaultView||M.parentWindow:window,T?(Q=a.relatedTarget||a.toElement,T=C,Q=Q?Pa(Q):null,Q!==null&&(je=m(Q),W=Q.tag,Q!==je||W!==5&&W!==27&&W!==6)&&(Q=null)):(T=null,Q=C),T!==Q)){if(W=Rr,D="onMouseLeave",S="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(W=Br,D="onPointerLeave",S="onPointerEnter",y="pointer"),je=T==null?M:Zl(T),A=Q==null?M:Zl(Q),M=new W(D,y+"leave",T,a,_),M.target=je,M.relatedTarget=A,D=null,Pa(_)===C&&(W=new W(S,y+"enter",Q,a,_),W.target=A,W.relatedTarget=je,D=W),je=D,T&&Q)t:{for(W=Wm,S=T,y=Q,A=0,D=S;D;D=W(D))A++;D=0;for(var $=y;$;$=W($))D++;for(;0<A-D;)S=W(S),A--;for(;0<D-A;)y=W(y),D--;for(;A--;){if(S===y||y!==null&&S===y.alternate){W=S;break t}S=W(S),y=W(y)}W=null}else W=null;T!==null&&Md(R,M,T,W,!1),Q!==null&&je!==null&&Md(R,je,Q,W,!0)}}e:{if(M=C?Zl(C):window,T=M.nodeName&&M.nodeName.toLowerCase(),T==="select"||T==="input"&&M.type==="file")var he=Xr;else if(Yr(M))if(Qr)he=sm;else{he=um;var K=im}else T=M.nodeName,!T||T.toLowerCase()!=="input"||M.type!=="checkbox"&&M.type!=="radio"?C&&Du(C.elementType)&&(he=Xr):he=cm;if(he&&(he=he(e,C))){Gr(R,he,a,_);break e}K&&K(e,M,C),e==="focusout"&&C&&M.type==="number"&&C.memoizedProps.value!=null&&wu(M,"number",M.value)}switch(K=C?Zl(C):window,e){case"focusin":(Yr(K)||K.contentEditable==="true")&&(sl=K,Zu=C,tn=null);break;case"focusout":tn=Zu=sl=null;break;case"mousedown":Ku=!0;break;case"contextmenu":case"mouseup":case"dragend":Ku=!1,Ir(R,a,_);break;case"selectionchange":if(om)break;case"keydown":case"keyup":Ir(R,a,_)}var ne;if(Gu)e:{switch(e){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else cl?Lr(e,a)&&(fe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(fe="onCompositionStart");fe&&(Ur&&a.locale!=="ko"&&(cl||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&cl&&(ne=wr()):(oa=_,Hu="value"in oa?oa.value:oa.textContent,cl=!0)),K=Ki(C,fe),0<K.length&&(fe=new Or(fe,e,null,a,_),R.push({event:fe,listeners:K}),ne?fe.data=ne:(ne=qr(a),ne!==null&&(fe.data=ne)))),(ne=em?tm(e,a):am(e,a))&&(fe=Ki(C,"onBeforeInput"),0<fe.length&&(K=new Or("onBeforeInput","beforeinput",null,a,_),R.push({event:K,listeners:fe}),K.data=ne)),Km(R,e,C,a,_)}Ad(R,t)})}function Cn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ki(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Kl(e,a),n!=null&&l.unshift(Cn(e,n,i)),n=Kl(e,t),n!=null&&l.push(Cn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function Wm(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Md(e,t,a,l,n){for(var i=t._reactName,s=[];a!==null&&a!==l;){var f=a,g=f.alternate,C=f.stateNode;if(f=f.tag,g!==null&&g===l)break;f!==5&&f!==26&&f!==27||C===null||(g=C,n?(C=Kl(a,i),C!=null&&s.unshift(Cn(a,C,g))):n||(C=Kl(a,i),C!=null&&s.push(Cn(a,C,g)))),a=a.return}s.length!==0&&e.push({event:t,listeners:s})}var Im=/\r\n?/g,Pm=/\u0000|\uFFFD/g;function Td(e){return(typeof e=="string"?e:""+e).replace(Im,`
`).replace(Pm,"")}function _d(e,t){return t=Td(t),Td(e)===t}function Se(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||nl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&nl(e,""+l);break;case"className":Wn(e,"class",l);break;case"tabIndex":Wn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Wn(e,a,l);break;case"style":Mr(e,l,i);break;case"data":if(t!=="object"){Wn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Pn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&Se(e,t,"name",n.name,n,null),Se(e,t,"formEncType",n.formEncType,n,null),Se(e,t,"formMethod",n.formMethod,n,null),Se(e,t,"formTarget",n.formTarget,n,null)):(Se(e,t,"encType",n.encType,n,null),Se(e,t,"method",n.method,n,null),Se(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Pn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Gt);break;case"onScroll":l!=null&&se("scroll",e);break;case"onScrollEnd":l!=null&&se("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Pn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":se("beforetoggle",e),se("toggle",e),Fn(e,"popover",l);break;case"xlinkActuate":Yt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Yt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Yt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Yt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Yt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Yt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Fn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ch.get(a)||a,Fn(e,a,l))}}function ys(e,t,a,l,n,i){switch(a){case"style":Mr(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof l=="string"?nl(e,l):(typeof l=="number"||typeof l=="bigint")&&nl(e,""+l);break;case"onScroll":l!=null&&se("scroll",e);break;case"onScrollEnd":l!=null&&se("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Gt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!xr.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[tt]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Fn(e,a,l)}}}function $e(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":se("error",e),se("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];if(s!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:Se(e,t,i,s,a,null)}}n&&Se(e,t,"srcSet",a.srcSet,a,null),l&&Se(e,t,"src",a.src,a,null);return;case"input":se("invalid",e);var f=i=s=n=null,g=null,C=null;for(l in a)if(a.hasOwnProperty(l)){var _=a[l];if(_!=null)switch(l){case"name":n=_;break;case"type":s=_;break;case"checked":g=_;break;case"defaultChecked":C=_;break;case"value":i=_;break;case"defaultValue":f=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(r(137,t));break;default:Se(e,t,l,_,a,null)}}Nr(e,i,f,g,C,s,n,!1);return;case"select":se("invalid",e),l=s=i=null;for(n in a)if(a.hasOwnProperty(n)&&(f=a[n],f!=null))switch(n){case"value":i=f;break;case"defaultValue":s=f;break;case"multiple":l=f;default:Se(e,t,n,f,a,null)}t=i,a=s,e.multiple=!!l,t!=null?ll(e,!!l,t,!1):a!=null&&ll(e,!!l,a,!0);return;case"textarea":se("invalid",e),i=n=l=null;for(s in a)if(a.hasOwnProperty(s)&&(f=a[s],f!=null))switch(s){case"value":l=f;break;case"defaultValue":n=f;break;case"children":i=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:Se(e,t,s,f,a,null)}Ar(e,l,n,i);return;case"option":for(g in a)a.hasOwnProperty(g)&&(l=a[g],l!=null)&&(g==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Se(e,t,g,l,a,null));return;case"dialog":se("beforetoggle",e),se("toggle",e),se("cancel",e),se("close",e);break;case"iframe":case"object":se("load",e);break;case"video":case"audio":for(l=0;l<An.length;l++)se(An[l],e);break;case"image":se("error",e),se("load",e);break;case"details":se("toggle",e);break;case"embed":case"source":case"link":se("error",e),se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in a)if(a.hasOwnProperty(C)&&(l=a[C],l!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:Se(e,t,C,l,a,null)}return;default:if(Du(t)){for(_ in a)a.hasOwnProperty(_)&&(l=a[_],l!==void 0&&ys(e,t,_,l,a,void 0));return}}for(f in a)a.hasOwnProperty(f)&&(l=a[f],l!=null&&Se(e,t,f,l,a,null))}function ep(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,s=null,f=null,g=null,C=null,_=null;for(T in a){var R=a[T];if(a.hasOwnProperty(T)&&R!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":g=R;default:l.hasOwnProperty(T)||Se(e,t,T,null,l,R)}}for(var M in l){var T=l[M];if(R=a[M],l.hasOwnProperty(M)&&(T!=null||R!=null))switch(M){case"type":i=T;break;case"name":n=T;break;case"checked":C=T;break;case"defaultChecked":_=T;break;case"value":s=T;break;case"defaultValue":f=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(137,t));break;default:T!==R&&Se(e,t,M,T,l,R)}}_u(e,s,f,g,C,_,i,n);return;case"select":T=s=f=M=null;for(i in a)if(g=a[i],a.hasOwnProperty(i)&&g!=null)switch(i){case"value":break;case"multiple":T=g;default:l.hasOwnProperty(i)||Se(e,t,i,null,l,g)}for(n in l)if(i=l[n],g=a[n],l.hasOwnProperty(n)&&(i!=null||g!=null))switch(n){case"value":M=i;break;case"defaultValue":f=i;break;case"multiple":s=i;default:i!==g&&Se(e,t,n,i,l,g)}t=f,a=s,l=T,M!=null?ll(e,!!a,M,!1):!!l!=!!a&&(t!=null?ll(e,!!a,t,!0):ll(e,!!a,a?[]:"",!1));return;case"textarea":T=M=null;for(f in a)if(n=a[f],a.hasOwnProperty(f)&&n!=null&&!l.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:Se(e,t,f,null,l,n)}for(s in l)if(n=l[s],i=a[s],l.hasOwnProperty(s)&&(n!=null||i!=null))switch(s){case"value":M=n;break;case"defaultValue":T=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(r(91));break;default:n!==i&&Se(e,t,s,n,l,i)}Er(e,M,T);return;case"option":for(var Q in a)M=a[Q],a.hasOwnProperty(Q)&&M!=null&&!l.hasOwnProperty(Q)&&(Q==="selected"?e.selected=!1:Se(e,t,Q,null,l,M));for(g in l)M=l[g],T=a[g],l.hasOwnProperty(g)&&M!==T&&(M!=null||T!=null)&&(g==="selected"?e.selected=M&&typeof M!="function"&&typeof M!="symbol":Se(e,t,g,M,l,T));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var W in a)M=a[W],a.hasOwnProperty(W)&&M!=null&&!l.hasOwnProperty(W)&&Se(e,t,W,null,l,M);for(C in l)if(M=l[C],T=a[C],l.hasOwnProperty(C)&&M!==T&&(M!=null||T!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(r(137,t));break;default:Se(e,t,C,M,l,T)}return;default:if(Du(t)){for(var je in a)M=a[je],a.hasOwnProperty(je)&&M!==void 0&&!l.hasOwnProperty(je)&&ys(e,t,je,void 0,l,M);for(_ in l)M=l[_],T=a[_],!l.hasOwnProperty(_)||M===T||M===void 0&&T===void 0||ys(e,t,_,M,l,T);return}}for(var S in a)M=a[S],a.hasOwnProperty(S)&&M!=null&&!l.hasOwnProperty(S)&&Se(e,t,S,null,l,M);for(R in l)M=l[R],T=a[R],!l.hasOwnProperty(R)||M===T||M==null&&T==null||Se(e,t,R,M,l,T)}function wd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function tp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,s=n.initiatorType,f=n.duration;if(i&&f&&wd(s)){for(s=0,f=n.responseEnd,l+=1;l<a.length;l++){var g=a[l],C=g.startTime;if(C>f)break;var _=g.transferSize,R=g.initiatorType;_&&wd(R)&&(g=g.responseEnd,s+=_*(g<f?1:(f-C)/(g-C)))}if(--l,t+=8*(i+s)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var xs=null,bs=null;function Ji(e){return e.nodeType===9?e:e.ownerDocument}function Dd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Rd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ss(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var js=null;function ap(){var e=window.event;return e&&e.type==="popstate"?e===js?!1:(js=e,!0):(js=null,!1)}var Od=typeof setTimeout=="function"?setTimeout:void 0,lp=typeof clearTimeout=="function"?clearTimeout:void 0,Bd=typeof Promise=="function"?Promise:void 0,np=typeof queueMicrotask=="function"?queueMicrotask:typeof Bd<"u"?function(e){return Bd.resolve(null).then(e).catch(ip)}:Od;function ip(e){setTimeout(function(){throw e})}function Ca(e){return e==="head"}function Ud(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Bl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Mn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Mn(a);for(var i=a.firstChild;i;){var s=i.nextSibling,f=i.nodeName;i[Vl]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=s}}else a==="body"&&Mn(e.ownerDocument.body);a=n}while(a);Bl(t)}function Hd(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function zs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":zs(a),Mu(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function up(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Vl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Tt(e.nextSibling),e===null)break}return null}function cp(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Tt(e.nextSibling),e===null))return null;return e}function kd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Tt(e.nextSibling),e===null))return null;return e}function Ns(e){return e.data==="$?"||e.data==="$~"}function Es(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function sp(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Tt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var As=null;function Ld(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Tt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function qd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Yd(e,t,a){switch(t=Ji(a),e){case"html":if(e=t.documentElement,!e)throw Error(r(452));return e;case"head":if(e=t.head,!e)throw Error(r(453));return e;case"body":if(e=t.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Mn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Mu(e)}var _t=new Map,Gd=new Set;function $i(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var na=Y.d;Y.d={f:rp,r:op,D:fp,C:dp,L:hp,m:mp,X:gp,S:pp,M:vp};function rp(){var e=na.f(),t=qi();return e||t}function op(e){var t=el(e);t!==null&&t.tag===5&&t.type==="form"?nf(t):na.r(e)}var Dl=typeof document>"u"?null:document;function Xd(e,t,a){var l=Dl;if(l&&typeof t=="string"&&t){var n=jt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Gd.has(n)||(Gd.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),$e(t,"link",e),Xe(t),l.head.appendChild(t)))}}function fp(e){na.D(e),Xd("dns-prefetch",e,null)}function dp(e,t){na.C(e,t),Xd("preconnect",e,t)}function hp(e,t,a){na.L(e,t,a);var l=Dl;if(l&&e&&t){var n='link[rel="preload"][as="'+jt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+jt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+jt(a.imageSizes)+'"]')):n+='[href="'+jt(e)+'"]';var i=n;switch(t){case"style":i=Rl(e);break;case"script":i=Ol(e)}_t.has(i)||(e=E({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),_t.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Tn(i))||t==="script"&&l.querySelector(_n(i))||(t=l.createElement("link"),$e(t,"link",e),Xe(t),l.head.appendChild(t)))}}function mp(e,t){na.m(e,t);var a=Dl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+jt(l)+'"][href="'+jt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ol(e)}if(!_t.has(i)&&(e=E({rel:"modulepreload",href:e},t),_t.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(_n(i)))return}l=a.createElement("link"),$e(l,"link",e),Xe(l),a.head.appendChild(l)}}}function pp(e,t,a){na.S(e,t,a);var l=Dl;if(l&&e){var n=tl(l).hoistableStyles,i=Rl(e);t=t||"default";var s=n.get(i);if(!s){var f={loading:0,preload:null};if(s=l.querySelector(Tn(i)))f.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},a),(a=_t.get(i))&&Cs(e,a);var g=s=l.createElement("link");Xe(g),$e(g,"link",e),g._p=new Promise(function(C,_){g.onload=C,g.onerror=_}),g.addEventListener("load",function(){f.loading|=1}),g.addEventListener("error",function(){f.loading|=2}),f.loading|=4,Fi(s,t,l)}s={type:"stylesheet",instance:s,count:1,state:f},n.set(i,s)}}}function gp(e,t){na.X(e,t);var a=Dl;if(a&&e){var l=tl(a).hoistableScripts,n=Ol(e),i=l.get(n);i||(i=a.querySelector(_n(n)),i||(e=E({src:e,async:!0},t),(t=_t.get(n))&&Ms(e,t),i=a.createElement("script"),Xe(i),$e(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function vp(e,t){na.M(e,t);var a=Dl;if(a&&e){var l=tl(a).hoistableScripts,n=Ol(e),i=l.get(n);i||(i=a.querySelector(_n(n)),i||(e=E({src:e,async:!0,type:"module"},t),(t=_t.get(n))&&Ms(e,t),i=a.createElement("script"),Xe(i),$e(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Qd(e,t,a,l){var n=(n=ue.current)?$i(n):null;if(!n)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Rl(a.href),a=tl(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Rl(a.href);var i=tl(n).hoistableStyles,s=i.get(e);if(s||(n=n.ownerDocument||n,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,s),(i=n.querySelector(Tn(e)))&&!i._p&&(s.instance=i,s.state.loading=5),_t.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},_t.set(e,a),i||yp(n,e,a,s.state))),t&&l===null)throw Error(r(528,""));return s}if(t&&l!==null)throw Error(r(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ol(a),a=tl(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Rl(e){return'href="'+jt(e)+'"'}function Tn(e){return'link[rel="stylesheet"]['+e+"]"}function Vd(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function yp(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),$e(t,"link",a),Xe(t),e.head.appendChild(t))}function Ol(e){return'[src="'+jt(e)+'"]'}function _n(e){return"script[async]"+e}function Zd(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+jt(a.href)+'"]');if(l)return t.instance=l,Xe(l),l;var n=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Xe(l),$e(l,"style",n),Fi(l,a.precedence,e),t.instance=l;case"stylesheet":n=Rl(a.href);var i=e.querySelector(Tn(n));if(i)return t.state.loading|=4,t.instance=i,Xe(i),i;l=Vd(a),(n=_t.get(n))&&Cs(l,n),i=(e.ownerDocument||e).createElement("link"),Xe(i);var s=i;return s._p=new Promise(function(f,g){s.onload=f,s.onerror=g}),$e(i,"link",l),t.state.loading|=4,Fi(i,a.precedence,e),t.instance=i;case"script":return i=Ol(a.src),(n=e.querySelector(_n(i)))?(t.instance=n,Xe(n),n):(l=a,(n=_t.get(i))&&(l=E({},a),Ms(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Xe(n),$e(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(r(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Fi(l,a.precedence,e));return t.instance}function Fi(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,s=0;s<l.length;s++){var f=l[s];if(f.dataset.precedence===t)i=f;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Cs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ms(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Wi=null;function Kd(e,t,a){if(Wi===null){var l=new Map,n=Wi=new Map;n.set(a,l)}else n=Wi,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Vl]||i[Ve]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var s=i.getAttribute(t)||"";s=e+s;var f=l.get(s);f?f.push(i):l.set(s,[i])}}return l}function Jd(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function xp(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function $d(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function bp(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Rl(l.href),i=t.querySelector(Tn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ii.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Xe(i);return}i=t.ownerDocument||t,l=Vd(l),(n=_t.get(n))&&Cs(l,n),i=i.createElement("link"),Xe(i);var s=i;s._p=new Promise(function(f,g){s.onload=f,s.onerror=g}),$e(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ii.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Ts=0;function Sp(e,t){return e.stylesheets&&e.count===0&&eu(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&eu(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Ts===0&&(Ts=62500*tp());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&eu(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Ts?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Ii(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)eu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Pi=null;function eu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Pi=new Map,t.forEach(jp,e),Pi=null,Ii.call(e))}function jp(e,t){if(!(t.state.loading&4)){var a=Pi.get(e);if(a)var l=a.get(null);else{a=new Map,Pi.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var s=n[i];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),l=s)}l&&a.set(null,l)}n=t.instance,s=n.getAttribute("data-precedence"),i=a.get(s)||l,i===l&&a.set(null,n),a.set(s,n),this.count++,l=Ii.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var wn={$$typeof:V,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function zp(e,t,a,l,n,i,s,f,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Nu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nu(0),this.hiddenUpdates=Nu(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function Fd(e,t,a,l,n,i,s,f,g,C,_,R){return e=new zp(e,t,a,s,g,C,_,R,f),t=1,i===!0&&(t|=24),i=pt(3,null,null,t),e.current=i,i.stateNode=e,t=sc(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},dc(i),e}function Wd(e){return e?(e=fl,e):fl}function Id(e,t,a,l,n,i){n=Wd(n),l.context===null?l.context=n:l.pendingContext=n,l=ga(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=va(e,l,t),a!==null&&(ct(a,e,t),rn(a,e,t))}function Pd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function _s(e,t){Pd(e,t),(e=e.alternate)&&Pd(e,t)}function e0(e){if(e.tag===13||e.tag===31){var t=La(e,67108864);t!==null&&ct(t,e,67108864),_s(e,67108864)}}function t0(e){if(e.tag===13||e.tag===31){var t=bt();t=Eu(t);var a=La(e,t);a!==null&&ct(a,e,t),_s(e,t)}}var tu=!0;function Np(e,t,a,l){var n=w.T;w.T=null;var i=Y.p;try{Y.p=2,ws(e,t,a,l)}finally{Y.p=i,w.T=n}}function Ep(e,t,a,l){var n=w.T;w.T=null;var i=Y.p;try{Y.p=8,ws(e,t,a,l)}finally{Y.p=i,w.T=n}}function ws(e,t,a,l){if(tu){var n=Ds(l);if(n===null)vs(e,t,l,au,a),l0(e,l);else if(Cp(n,e,t,a,l))l.stopPropagation();else if(l0(e,l),t&4&&-1<Ap.indexOf(e)){for(;n!==null;){var i=el(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var s=Oa(i.pendingLanes);if(s!==0){var f=i;for(f.pendingLanes|=2,f.entangledLanes|=2;s;){var g=1<<31-ht(s);f.entanglements[1]|=g,s&=~g}kt(i),(pe&6)===0&&(ki=ft()+500,En(0))}}break;case 31:case 13:f=La(i,2),f!==null&&ct(f,i,2),qi(),_s(i,2)}if(i=Ds(l),i===null&&vs(e,t,l,au,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else vs(e,t,l,null,a)}}function Ds(e){return e=Ou(e),Rs(e)}var au=null;function Rs(e){if(au=null,e=Pa(e),e!==null){var t=m(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=x(t),e!==null)return e;e=null}else if(a===31){if(e=z(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return au=e,null}function a0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(fh()){case sr:return 2;case rr:return 8;case Vn:case dh:return 32;case or:return 268435456;default:return 32}default:return 32}}var Os=!1,Ma=null,Ta=null,_a=null,Dn=new Map,Rn=new Map,wa=[],Ap="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function l0(e,t){switch(e){case"focusin":case"focusout":Ma=null;break;case"dragenter":case"dragleave":Ta=null;break;case"mouseover":case"mouseout":_a=null;break;case"pointerover":case"pointerout":Dn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rn.delete(t.pointerId)}}function On(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=el(t),t!==null&&e0(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Cp(e,t,a,l,n){switch(t){case"focusin":return Ma=On(Ma,e,t,a,l,n),!0;case"dragenter":return Ta=On(Ta,e,t,a,l,n),!0;case"mouseover":return _a=On(_a,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return Dn.set(i,On(Dn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Rn.set(i,On(Rn.get(i)||null,e,t,a,l,n)),!0}return!1}function n0(e){var t=Pa(e.target);if(t!==null){var a=m(t);if(a!==null){if(t=a.tag,t===13){if(t=x(a),t!==null){e.blockedOn=t,gr(e.priority,function(){t0(a)});return}}else if(t===31){if(t=z(a),t!==null){e.blockedOn=t,gr(e.priority,function(){t0(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Ds(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Ru=l,a.target.dispatchEvent(l),Ru=null}else return t=el(a),t!==null&&e0(t),e.blockedOn=a,!1;t.shift()}return!0}function i0(e,t,a){lu(e)&&a.delete(t)}function Mp(){Os=!1,Ma!==null&&lu(Ma)&&(Ma=null),Ta!==null&&lu(Ta)&&(Ta=null),_a!==null&&lu(_a)&&(_a=null),Dn.forEach(i0),Rn.forEach(i0)}function nu(e,t){e.blockedOn===t&&(e.blockedOn=null,Os||(Os=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Mp)))}var iu=null;function u0(e){iu!==e&&(iu=e,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){iu===e&&(iu=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(Rs(l||a)===null)continue;break}var i=el(a);i!==null&&(e.splice(t,3),t-=3,Dc(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Bl(e){function t(g){return nu(g,e)}Ma!==null&&nu(Ma,e),Ta!==null&&nu(Ta,e),_a!==null&&nu(_a,e),Dn.forEach(t),Rn.forEach(t);for(var a=0;a<wa.length;a++){var l=wa[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<wa.length&&(a=wa[0],a.blockedOn===null);)n0(a),a.blockedOn===null&&wa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],s=n[tt]||null;if(typeof i=="function")s||u0(a);else if(s){var f=null;if(i&&i.hasAttribute("formAction")){if(n=i,s=i[tt]||null)f=s.formAction;else if(Rs(n)!==null)continue}else f=s.action;typeof f=="function"?a[l+1]=f:(a.splice(l,3),l-=3),u0(a)}}}function c0(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(s){return n=s})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Bs(e){this._internalRoot=e}uu.prototype.render=Bs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));var a=t.current,l=bt();Id(a,l,e,t,null,null)},uu.prototype.unmount=Bs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Id(e.current,2,null,e,null,null),qi(),t[Ia]=null}};function uu(e){this._internalRoot=e}uu.prototype.unstable_scheduleHydration=function(e){if(e){var t=pr();e={blockedOn:null,target:e,priority:t};for(var a=0;a<wa.length&&t!==0&&t<wa[a].priority;a++);wa.splice(a,0,e),a===0&&n0(e)}};var s0=o.version;if(s0!=="19.2.4")throw Error(r(527,s0,"19.2.4"));Y.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(t),e=e!==null?N(e):null,e=e===null?null:e.stateNode,e};var Tp={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:w,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cu.isDisabled&&cu.supportsFiber)try{Gl=cu.inject(Tp),dt=cu}catch{}}return Un.createRoot=function(e,t){if(!h(e))throw Error(r(299));var a=!1,l="",n=pf,i=gf,s=vf;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Fd(e,1,!1,null,null,a,l,null,n,i,s,c0),e[Ia]=t.current,gs(e),new Bs(t)},Un.hydrateRoot=function(e,t,a){if(!h(e))throw Error(r(299));var l=!1,n="",i=pf,s=gf,f=vf,g=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(f=a.onRecoverableError),a.formState!==void 0&&(g=a.formState)),t=Fd(e,1,!0,t,a??null,l,n,g,i,s,f,c0),t.context=Wd(null),a=t.current,l=bt(),l=Eu(l),n=ga(l),n.callback=null,va(a,n,l),a=l,t.current.lanes=a,Ql(t,a),kt(t),e[Ia]=t.current,gs(e),new uu(t)},Un.version="19.2.4",Un}var y0;function qp(){if(y0)return ks.exports;y0=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(o){console.error(o)}}return c(),ks.exports=Lp(),ks.exports}var Yp=qp();const Gp=D0(Yp);var x0="popstate";function Xp(c={}){function o(r,h){let{pathname:m,search:x,hash:z}=r.location;return Ks("",{pathname:m,search:x,hash:z},h.state&&h.state.usr||null,h.state&&h.state.key||"default")}function d(r,h){return typeof h=="string"?h:Ln(h)}return Vp(o,d,null,c)}function _e(c,o){if(c===!1||c===null||typeof c>"u")throw new Error(o)}function Lt(c,o){if(!c){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function Qp(){return Math.random().toString(36).substring(2,10)}function b0(c,o){return{usr:c.state,key:c.key,idx:o}}function Ks(c,o,d=null,r){return{pathname:typeof c=="string"?c:c.pathname,search:"",hash:"",...typeof o=="string"?kl(o):o,state:d,key:o&&o.key||r||Qp()}}function Ln({pathname:c="/",search:o="",hash:d=""}){return o&&o!=="?"&&(c+=o.charAt(0)==="?"?o:"?"+o),d&&d!=="#"&&(c+=d.charAt(0)==="#"?d:"#"+d),c}function kl(c){let o={};if(c){let d=c.indexOf("#");d>=0&&(o.hash=c.substring(d),c=c.substring(0,d));let r=c.indexOf("?");r>=0&&(o.search=c.substring(r),c=c.substring(0,r)),c&&(o.pathname=c)}return o}function Vp(c,o,d,r={}){let{window:h=document.defaultView,v5Compat:m=!1}=r,x=h.history,z="POP",v=null,p=N();p==null&&(p=0,x.replaceState({...x.state,idx:p},""));function N(){return(x.state||{idx:null}).idx}function E(){z="POP";let q=N(),U=q==null?null:q-p;p=q,v&&v({action:z,location:L.location,delta:U})}function B(q,U){z="PUSH";let H=Ks(L.location,q,U);p=N()+1;let V=b0(H,p),ie=L.createHref(H);try{x.pushState(V,"",ie)}catch(re){if(re instanceof DOMException&&re.name==="DataCloneError")throw re;h.location.assign(ie)}m&&v&&v({action:z,location:L.location,delta:1})}function X(q,U){z="REPLACE";let H=Ks(L.location,q,U);p=N();let V=b0(H,p),ie=L.createHref(H);x.replaceState(V,"",ie),m&&v&&v({action:z,location:L.location,delta:0})}function k(q){return Zp(q)}let L={get action(){return z},get location(){return c(h,x)},listen(q){if(v)throw new Error("A history only accepts one active listener");return h.addEventListener(x0,E),v=q,()=>{h.removeEventListener(x0,E),v=null}},createHref(q){return o(h,q)},createURL:k,encodeLocation(q){let U=k(q);return{pathname:U.pathname,search:U.search,hash:U.hash}},push:B,replace:X,go(q){return x.go(q)}};return L}function Zp(c,o=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),_e(d,"No window.location.(origin|href) available to create URL");let r=typeof c=="string"?c:Ln(c);return r=r.replace(/ $/,"%20"),!o&&r.startsWith("//")&&(r=d+r),new URL(r,d)}function R0(c,o,d="/"){return Kp(c,o,d,!1)}function Kp(c,o,d,r){let h=typeof o=="string"?kl(o):o,m=ua(h.pathname||"/",d);if(m==null)return null;let x=O0(c);Jp(x);let z=null;for(let v=0;z==null&&v<x.length;++v){let p=ig(m);z=lg(x[v],p,r)}return z}function O0(c,o=[],d=[],r="",h=!1){let m=(x,z,v=h,p)=>{let N={relativePath:p===void 0?x.path||"":p,caseSensitive:x.caseSensitive===!0,childrenIndex:z,route:x};if(N.relativePath.startsWith("/")){if(!N.relativePath.startsWith(r)&&v)return;_e(N.relativePath.startsWith(r),`Absolute route path "${N.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),N.relativePath=N.relativePath.slice(r.length)}let E=ia([r,N.relativePath]),B=d.concat(N);x.children&&x.children.length>0&&(_e(x.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),O0(x.children,o,B,E,v)),!(x.path==null&&!x.index)&&o.push({path:E,score:tg(E,x.index),routesMeta:B})};return c.forEach((x,z)=>{if(x.path===""||!x.path?.includes("?"))m(x,z);else for(let v of B0(x.path))m(x,z,!0,v)}),o}function B0(c){let o=c.split("/");if(o.length===0)return[];let[d,...r]=o,h=d.endsWith("?"),m=d.replace(/\?$/,"");if(r.length===0)return h?[m,""]:[m];let x=B0(r.join("/")),z=[];return z.push(...x.map(v=>v===""?m:[m,v].join("/"))),h&&z.push(...x),z.map(v=>c.startsWith("/")&&v===""?"/":v)}function Jp(c){c.sort((o,d)=>o.score!==d.score?d.score-o.score:ag(o.routesMeta.map(r=>r.childrenIndex),d.routesMeta.map(r=>r.childrenIndex)))}var $p=/^:[\w-]+$/,Fp=3,Wp=2,Ip=1,Pp=10,eg=-2,S0=c=>c==="*";function tg(c,o){let d=c.split("/"),r=d.length;return d.some(S0)&&(r+=eg),o&&(r+=Wp),d.filter(h=>!S0(h)).reduce((h,m)=>h+($p.test(m)?Fp:m===""?Ip:Pp),r)}function ag(c,o){return c.length===o.length&&c.slice(0,-1).every((r,h)=>r===o[h])?c[c.length-1]-o[o.length-1]:0}function lg(c,o,d=!1){let{routesMeta:r}=c,h={},m="/",x=[];for(let z=0;z<r.length;++z){let v=r[z],p=z===r.length-1,N=m==="/"?o:o.slice(m.length)||"/",E=fu({path:v.relativePath,caseSensitive:v.caseSensitive,end:p},N),B=v.route;if(!E&&p&&d&&!r[r.length-1].route.index&&(E=fu({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},N)),!E)return null;Object.assign(h,E.params),x.push({params:h,pathname:ia([m,E.pathname]),pathnameBase:rg(ia([m,E.pathnameBase])),route:B}),E.pathnameBase!=="/"&&(m=ia([m,E.pathnameBase]))}return x}function fu(c,o){typeof c=="string"&&(c={path:c,caseSensitive:!1,end:!0});let[d,r]=ng(c.path,c.caseSensitive,c.end),h=o.match(d);if(!h)return null;let m=h[0],x=m.replace(/(.)\/+$/,"$1"),z=h.slice(1);return{params:r.reduce((p,{paramName:N,isOptional:E},B)=>{if(N==="*"){let k=z[B]||"";x=m.slice(0,m.length-k.length).replace(/(.)\/+$/,"$1")}const X=z[B];return E&&!X?p[N]=void 0:p[N]=(X||"").replace(/%2F/g,"/"),p},{}),pathname:m,pathnameBase:x,pattern:c}}function ng(c,o=!1,d=!0){Lt(c==="*"||!c.endsWith("*")||c.endsWith("/*"),`Route path "${c}" will be treated as if it were "${c.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${c.replace(/\*$/,"/*")}".`);let r=[],h="^"+c.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(x,z,v)=>(r.push({paramName:z,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return c.endsWith("*")?(r.push({paramName:"*"}),h+=c==="*"||c==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?h+="\\/*$":c!==""&&c!=="/"&&(h+="(?:(?=\\/|$))"),[new RegExp(h,o?void 0:"i"),r]}function ig(c){try{return c.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Lt(!1,`The URL path "${c}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),c}}function ua(c,o){if(o==="/")return c;if(!c.toLowerCase().startsWith(o.toLowerCase()))return null;let d=o.endsWith("/")?o.length-1:o.length,r=c.charAt(d);return r&&r!=="/"?null:c.slice(d)||"/"}var ug=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function cg(c,o="/"){let{pathname:d,search:r="",hash:h=""}=typeof c=="string"?kl(c):c,m;return d?(d=d.replace(/\/\/+/g,"/"),d.startsWith("/")?m=j0(d.substring(1),"/"):m=j0(d,o)):m=o,{pathname:m,search:og(r),hash:fg(h)}}function j0(c,o){let d=o.replace(/\/+$/,"").split("/");return c.split("/").forEach(h=>{h===".."?d.length>1&&d.pop():h!=="."&&d.push(h)}),d.length>1?d.join("/"):"/"}function Gs(c,o,d,r){return`Cannot include a '${c}' character in a manually specified \`to.${o}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function sg(c){return c.filter((o,d)=>d===0||o.route.path&&o.route.path.length>0)}function U0(c){let o=sg(c);return o.map((d,r)=>r===o.length-1?d.pathname:d.pathnameBase)}function H0(c,o,d,r=!1){let h;typeof c=="string"?h=kl(c):(h={...c},_e(!h.pathname||!h.pathname.includes("?"),Gs("?","pathname","search",h)),_e(!h.pathname||!h.pathname.includes("#"),Gs("#","pathname","hash",h)),_e(!h.search||!h.search.includes("#"),Gs("#","search","hash",h)));let m=c===""||h.pathname==="",x=m?"/":h.pathname,z;if(x==null)z=d;else{let E=o.length-1;if(!r&&x.startsWith("..")){let B=x.split("/");for(;B[0]==="..";)B.shift(),E-=1;h.pathname=B.join("/")}z=E>=0?o[E]:"/"}let v=cg(h,z),p=x&&x!=="/"&&x.endsWith("/"),N=(m||x===".")&&d.endsWith("/");return!v.pathname.endsWith("/")&&(p||N)&&(v.pathname+="/"),v}var ia=c=>c.join("/").replace(/\/\/+/g,"/"),rg=c=>c.replace(/\/+$/,"").replace(/^\/*/,"/"),og=c=>!c||c==="?"?"":c.startsWith("?")?c:"?"+c,fg=c=>!c||c==="#"?"":c.startsWith("#")?c:"#"+c,dg=class{constructor(c,o,d,r=!1){this.status=c,this.statusText=o||"",this.internal=r,d instanceof Error?(this.data=d.toString(),this.error=d):this.data=d}};function hg(c){return c!=null&&typeof c.status=="number"&&typeof c.statusText=="string"&&typeof c.internal=="boolean"&&"data"in c}function mg(c){return c.map(o=>o.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var k0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function L0(c,o){let d=c;if(typeof d!="string"||!ug.test(d))return{absoluteURL:void 0,isExternal:!1,to:d};let r=d,h=!1;if(k0)try{let m=new URL(window.location.href),x=d.startsWith("//")?new URL(m.protocol+d):new URL(d),z=ua(x.pathname,o);x.origin===m.origin&&z!=null?d=z+x.search+x.hash:h=!0}catch{Lt(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:h,to:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var q0=["POST","PUT","PATCH","DELETE"];new Set(q0);var pg=["GET",...q0];new Set(pg);var Ll=j.createContext(null);Ll.displayName="DataRouter";var mu=j.createContext(null);mu.displayName="DataRouterState";var gg=j.createContext(!1),Y0=j.createContext({isTransitioning:!1});Y0.displayName="ViewTransition";var vg=j.createContext(new Map);vg.displayName="Fetchers";var yg=j.createContext(null);yg.displayName="Await";var wt=j.createContext(null);wt.displayName="Navigation";var Yn=j.createContext(null);Yn.displayName="Location";var qt=j.createContext({outlet:null,matches:[],isDataRoute:!1});qt.displayName="Route";var Ws=j.createContext(null);Ws.displayName="RouteError";var G0="REACT_ROUTER_ERROR",xg="REDIRECT",bg="ROUTE_ERROR_RESPONSE";function Sg(c){if(c.startsWith(`${G0}:${xg}:{`))try{let o=JSON.parse(c.slice(28));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.location=="string"&&typeof o.reloadDocument=="boolean"&&typeof o.replace=="boolean")return o}catch{}}function jg(c){if(c.startsWith(`${G0}:${bg}:{`))try{let o=JSON.parse(c.slice(40));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string")return new dg(o.status,o.statusText,o.data)}catch{}}function zg(c,{relative:o}={}){_e(Gn(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:r}=j.useContext(wt),{hash:h,pathname:m,search:x}=Xn(c,{relative:o}),z=m;return d!=="/"&&(z=m==="/"?d:ia([d,m])),r.createHref({pathname:z,search:x,hash:h})}function Gn(){return j.useContext(Yn)!=null}function ca(){return _e(Gn(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(Yn).location}var X0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Q0(c){j.useContext(wt).static||j.useLayoutEffect(c)}function rt(){let{isDataRoute:c}=j.useContext(qt);return c?Hg():Ng()}function Ng(){_e(Gn(),"useNavigate() may be used only in the context of a <Router> component.");let c=j.useContext(Ll),{basename:o,navigator:d}=j.useContext(wt),{matches:r}=j.useContext(qt),{pathname:h}=ca(),m=JSON.stringify(U0(r)),x=j.useRef(!1);return Q0(()=>{x.current=!0}),j.useCallback((v,p={})=>{if(Lt(x.current,X0),!x.current)return;if(typeof v=="number"){d.go(v);return}let N=H0(v,JSON.parse(m),h,p.relative==="path");c==null&&o!=="/"&&(N.pathname=N.pathname==="/"?o:ia([o,N.pathname])),(p.replace?d.replace:d.push)(N,p.state,p)},[o,d,m,h,c])}j.createContext(null);function Eg(){let{matches:c}=j.useContext(qt),o=c[c.length-1];return o?o.params:{}}function Xn(c,{relative:o}={}){let{matches:d}=j.useContext(qt),{pathname:r}=ca(),h=JSON.stringify(U0(d));return j.useMemo(()=>H0(c,JSON.parse(h),r,o==="path"),[c,h,r,o])}function Ag(c,o){return V0(c,o)}function V0(c,o,d,r,h){_e(Gn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:m}=j.useContext(wt),{matches:x}=j.useContext(qt),z=x[x.length-1],v=z?z.params:{},p=z?z.pathname:"/",N=z?z.pathnameBase:"/",E=z&&z.route;{let H=E&&E.path||"";K0(p,!E||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let B=ca(),X;if(o){let H=typeof o=="string"?kl(o):o;_e(N==="/"||H.pathname?.startsWith(N),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${N}" but pathname "${H.pathname}" was given in the \`location\` prop.`),X=H}else X=B;let k=X.pathname||"/",L=k;if(N!=="/"){let H=N.replace(/^\//,"").split("/");L="/"+k.replace(/^\//,"").split("/").slice(H.length).join("/")}let q=R0(c,{pathname:L});Lt(E||q!=null,`No routes matched location "${X.pathname}${X.search}${X.hash}" `),Lt(q==null||q[q.length-1].route.element!==void 0||q[q.length-1].route.Component!==void 0||q[q.length-1].route.lazy!==void 0,`Matched leaf route at location "${X.pathname}${X.search}${X.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let U=wg(q&&q.map(H=>Object.assign({},H,{params:Object.assign({},v,H.params),pathname:ia([N,m.encodeLocation?m.encodeLocation(H.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?N:ia([N,m.encodeLocation?m.encodeLocation(H.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathnameBase])})),x,d,r,h);return o&&U?j.createElement(Yn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...X},navigationType:"POP"}},U):U}function Cg(){let c=Ug(),o=hg(c)?`${c.status} ${c.statusText}`:c instanceof Error?c.message:JSON.stringify(c),d=c instanceof Error?c.stack:null,r="rgba(200,200,200, 0.5)",h={padding:"0.5rem",backgroundColor:r},m={padding:"2px 4px",backgroundColor:r},x=null;return console.error("Error handled by React Router default ErrorBoundary:",c),x=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:m},"ErrorBoundary")," or"," ",j.createElement("code",{style:m},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},o),d?j.createElement("pre",{style:h},d):null,x)}var Mg=j.createElement(Cg,null),Z0=class extends j.Component{constructor(c){super(c),this.state={location:c.location,revalidation:c.revalidation,error:c.error}}static getDerivedStateFromError(c){return{error:c}}static getDerivedStateFromProps(c,o){return o.location!==c.location||o.revalidation!=="idle"&&c.revalidation==="idle"?{error:c.error,location:c.location,revalidation:c.revalidation}:{error:c.error!==void 0?c.error:o.error,location:o.location,revalidation:c.revalidation||o.revalidation}}componentDidCatch(c,o){this.props.onError?this.props.onError(c,o):console.error("React Router caught the following error during render",c)}render(){let c=this.state.error;if(this.context&&typeof c=="object"&&c&&"digest"in c&&typeof c.digest=="string"){const d=jg(c.digest);d&&(c=d)}let o=c!==void 0?j.createElement(qt.Provider,{value:this.props.routeContext},j.createElement(Ws.Provider,{value:c,children:this.props.component})):this.props.children;return this.context?j.createElement(Tg,{error:c},o):o}};Z0.contextType=gg;var Xs=new WeakMap;function Tg({children:c,error:o}){let{basename:d}=j.useContext(wt);if(typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){let r=Sg(o.digest);if(r){let h=Xs.get(o);if(h)throw h;let m=L0(r.location,d);if(k0&&!Xs.get(o))if(m.isExternal||r.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const x=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:r.replace}));throw Xs.set(o,x),x}return j.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return c}function _g({routeContext:c,match:o,children:d}){let r=j.useContext(Ll);return r&&r.static&&r.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=o.route.id),j.createElement(qt.Provider,{value:c},d)}function wg(c,o=[],d=null,r=null,h=null){if(c==null){if(!d)return null;if(d.errors)c=d.matches;else if(o.length===0&&!d.initialized&&d.matches.length>0)c=d.matches;else return null}let m=c,x=d?.errors;if(x!=null){let N=m.findIndex(E=>E.route.id&&x?.[E.route.id]!==void 0);_e(N>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(x).join(",")}`),m=m.slice(0,Math.min(m.length,N+1))}let z=!1,v=-1;if(d)for(let N=0;N<m.length;N++){let E=m[N];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(v=N),E.route.id){let{loaderData:B,errors:X}=d,k=E.route.loader&&!B.hasOwnProperty(E.route.id)&&(!X||X[E.route.id]===void 0);if(E.route.lazy||k){z=!0,v>=0?m=m.slice(0,v+1):m=[m[0]];break}}}let p=d&&r?(N,E)=>{r(N,{location:d.location,params:d.matches?.[0]?.params??{},unstable_pattern:mg(d.matches),errorInfo:E})}:void 0;return m.reduceRight((N,E,B)=>{let X,k=!1,L=null,q=null;d&&(X=x&&E.route.id?x[E.route.id]:void 0,L=E.route.errorElement||Mg,z&&(v<0&&B===0?(K0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),k=!0,q=null):v===B&&(k=!0,q=E.route.hydrateFallbackElement||null)));let U=o.concat(m.slice(0,B+1)),H=()=>{let V;return X?V=L:k?V=q:E.route.Component?V=j.createElement(E.route.Component,null):E.route.element?V=E.route.element:V=N,j.createElement(_g,{match:E,routeContext:{outlet:N,matches:U,isDataRoute:d!=null},children:V})};return d&&(E.route.ErrorBoundary||E.route.errorElement||B===0)?j.createElement(Z0,{location:d.location,revalidation:d.revalidation,component:L,error:X,children:H(),routeContext:{outlet:null,matches:U,isDataRoute:!0},onError:p}):H()},null)}function Is(c){return`${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Dg(c){let o=j.useContext(Ll);return _e(o,Is(c)),o}function Rg(c){let o=j.useContext(mu);return _e(o,Is(c)),o}function Og(c){let o=j.useContext(qt);return _e(o,Is(c)),o}function Ps(c){let o=Og(c),d=o.matches[o.matches.length-1];return _e(d.route.id,`${c} can only be used on routes that contain a unique "id"`),d.route.id}function Bg(){return Ps("useRouteId")}function Ug(){let c=j.useContext(Ws),o=Rg("useRouteError"),d=Ps("useRouteError");return c!==void 0?c:o.errors?.[d]}function Hg(){let{router:c}=Dg("useNavigate"),o=Ps("useNavigate"),d=j.useRef(!1);return Q0(()=>{d.current=!0}),j.useCallback(async(h,m={})=>{Lt(d.current,X0),d.current&&(typeof h=="number"?await c.navigate(h):await c.navigate(h,{fromRouteId:o,...m}))},[c,o])}var z0={};function K0(c,o,d){!o&&!z0[c]&&(z0[c]=!0,Lt(!1,d))}j.memo(kg);function kg({routes:c,future:o,state:d,onError:r}){return V0(c,void 0,d,r,o)}function st(c){_e(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Lg({basename:c="/",children:o=null,location:d,navigationType:r="POP",navigator:h,static:m=!1,unstable_useTransitions:x}){_e(!Gn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let z=c.replace(/^\/*/,"/"),v=j.useMemo(()=>({basename:z,navigator:h,static:m,unstable_useTransitions:x,future:{}}),[z,h,m,x]);typeof d=="string"&&(d=kl(d));let{pathname:p="/",search:N="",hash:E="",state:B=null,key:X="default"}=d,k=j.useMemo(()=>{let L=ua(p,z);return L==null?null:{location:{pathname:L,search:N,hash:E,state:B,key:X},navigationType:r}},[z,p,N,E,B,X,r]);return Lt(k!=null,`<Router basename="${z}"> is not able to match the URL "${p}${N}${E}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:j.createElement(wt.Provider,{value:v},j.createElement(Yn.Provider,{children:o,value:k}))}function qg({children:c,location:o}){return Ag(Js(c),o)}function Js(c,o=[]){let d=[];return j.Children.forEach(c,(r,h)=>{if(!j.isValidElement(r))return;let m=[...o,h];if(r.type===j.Fragment){d.push.apply(d,Js(r.props.children,m));return}_e(r.type===st,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),_e(!r.props.index||!r.props.children,"An index route cannot have child routes.");let x={id:r.props.id||m.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(x.children=Js(r.props.children,m)),d.push(x)}),d}var ru="get",ou="application/x-www-form-urlencoded";function pu(c){return typeof HTMLElement<"u"&&c instanceof HTMLElement}function Yg(c){return pu(c)&&c.tagName.toLowerCase()==="button"}function Gg(c){return pu(c)&&c.tagName.toLowerCase()==="form"}function Xg(c){return pu(c)&&c.tagName.toLowerCase()==="input"}function Qg(c){return!!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)}function Vg(c,o){return c.button===0&&(!o||o==="_self")&&!Qg(c)}var su=null;function Zg(){if(su===null)try{new FormData(document.createElement("form"),0),su=!1}catch{su=!0}return su}var Kg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Qs(c){return c!=null&&!Kg.has(c)?(Lt(!1,`"${c}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ou}"`),null):c}function Jg(c,o){let d,r,h,m,x;if(Gg(c)){let z=c.getAttribute("action");r=z?ua(z,o):null,d=c.getAttribute("method")||ru,h=Qs(c.getAttribute("enctype"))||ou,m=new FormData(c)}else if(Yg(c)||Xg(c)&&(c.type==="submit"||c.type==="image")){let z=c.form;if(z==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=c.getAttribute("formaction")||z.getAttribute("action");if(r=v?ua(v,o):null,d=c.getAttribute("formmethod")||z.getAttribute("method")||ru,h=Qs(c.getAttribute("formenctype"))||Qs(z.getAttribute("enctype"))||ou,m=new FormData(z,c),!Zg()){let{name:p,type:N,value:E}=c;if(N==="image"){let B=p?`${p}.`:"";m.append(`${B}x`,"0"),m.append(`${B}y`,"0")}else p&&m.append(p,E)}}else{if(pu(c))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=ru,r=null,h=ou,x=c}return m&&h==="text/plain"&&(x=m,m=void 0),{action:r,method:d.toLowerCase(),encType:h,formData:m,body:x}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function er(c,o){if(c===!1||c===null||typeof c>"u")throw new Error(o)}function $g(c,o,d,r){let h=typeof c=="string"?new URL(c,typeof window>"u"?"server://singlefetch/":window.location.origin):c;return d?h.pathname.endsWith("/")?h.pathname=`${h.pathname}_.${r}`:h.pathname=`${h.pathname}.${r}`:h.pathname==="/"?h.pathname=`_root.${r}`:o&&ua(h.pathname,o)==="/"?h.pathname=`${o.replace(/\/$/,"")}/_root.${r}`:h.pathname=`${h.pathname.replace(/\/$/,"")}.${r}`,h}async function Fg(c,o){if(c.id in o)return o[c.id];try{let d=await import(c.module);return o[c.id]=d,d}catch(d){return console.error(`Error loading route module \`${c.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Wg(c){return c==null?!1:c.href==null?c.rel==="preload"&&typeof c.imageSrcSet=="string"&&typeof c.imageSizes=="string":typeof c.rel=="string"&&typeof c.href=="string"}async function Ig(c,o,d){let r=await Promise.all(c.map(async h=>{let m=o.routes[h.route.id];if(m){let x=await Fg(m,d);return x.links?x.links():[]}return[]}));return a1(r.flat(1).filter(Wg).filter(h=>h.rel==="stylesheet"||h.rel==="preload").map(h=>h.rel==="stylesheet"?{...h,rel:"prefetch",as:"style"}:{...h,rel:"prefetch"}))}function N0(c,o,d,r,h,m){let x=(v,p)=>d[p]?v.route.id!==d[p].route.id:!0,z=(v,p)=>d[p].pathname!==v.pathname||d[p].route.path?.endsWith("*")&&d[p].params["*"]!==v.params["*"];return m==="assets"?o.filter((v,p)=>x(v,p)||z(v,p)):m==="data"?o.filter((v,p)=>{let N=r.routes[v.route.id];if(!N||!N.hasLoader)return!1;if(x(v,p)||z(v,p))return!0;if(v.route.shouldRevalidate){let E=v.route.shouldRevalidate({currentUrl:new URL(h.pathname+h.search+h.hash,window.origin),currentParams:d[0]?.params||{},nextUrl:new URL(c,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function Pg(c,o,{includeHydrateFallback:d}={}){return e1(c.map(r=>{let h=o.routes[r.route.id];if(!h)return[];let m=[h.module];return h.clientActionModule&&(m=m.concat(h.clientActionModule)),h.clientLoaderModule&&(m=m.concat(h.clientLoaderModule)),d&&h.hydrateFallbackModule&&(m=m.concat(h.hydrateFallbackModule)),h.imports&&(m=m.concat(h.imports)),m}).flat(1))}function e1(c){return[...new Set(c)]}function t1(c){let o={},d=Object.keys(c).sort();for(let r of d)o[r]=c[r];return o}function a1(c,o){let d=new Set;return new Set(o),c.reduce((r,h)=>{let m=JSON.stringify(t1(h));return d.has(m)||(d.add(m),r.push({key:m,link:h})),r},[])}function J0(){let c=j.useContext(Ll);return er(c,"You must render this element inside a <DataRouterContext.Provider> element"),c}function l1(){let c=j.useContext(mu);return er(c,"You must render this element inside a <DataRouterStateContext.Provider> element"),c}var tr=j.createContext(void 0);tr.displayName="FrameworkContext";function $0(){let c=j.useContext(tr);return er(c,"You must render this element inside a <HydratedRouter> element"),c}function n1(c,o){let d=j.useContext(tr),[r,h]=j.useState(!1),[m,x]=j.useState(!1),{onFocus:z,onBlur:v,onMouseEnter:p,onMouseLeave:N,onTouchStart:E}=o,B=j.useRef(null);j.useEffect(()=>{if(c==="render"&&x(!0),c==="viewport"){let L=U=>{U.forEach(H=>{x(H.isIntersecting)})},q=new IntersectionObserver(L,{threshold:.5});return B.current&&q.observe(B.current),()=>{q.disconnect()}}},[c]),j.useEffect(()=>{if(r){let L=setTimeout(()=>{x(!0)},100);return()=>{clearTimeout(L)}}},[r]);let X=()=>{h(!0)},k=()=>{h(!1),x(!1)};return d?c!=="intent"?[m,B,{}]:[m,B,{onFocus:Hn(z,X),onBlur:Hn(v,k),onMouseEnter:Hn(p,X),onMouseLeave:Hn(N,k),onTouchStart:Hn(E,X)}]:[!1,B,{}]}function Hn(c,o){return d=>{c&&c(d),d.defaultPrevented||o(d)}}function i1({page:c,...o}){let{router:d}=J0(),r=j.useMemo(()=>R0(d.routes,c,d.basename),[d.routes,c,d.basename]);return r?j.createElement(c1,{page:c,matches:r,...o}):null}function u1(c){let{manifest:o,routeModules:d}=$0(),[r,h]=j.useState([]);return j.useEffect(()=>{let m=!1;return Ig(c,o,d).then(x=>{m||h(x)}),()=>{m=!0}},[c,o,d]),r}function c1({page:c,matches:o,...d}){let r=ca(),{future:h,manifest:m,routeModules:x}=$0(),{basename:z}=J0(),{loaderData:v,matches:p}=l1(),N=j.useMemo(()=>N0(c,o,p,m,r,"data"),[c,o,p,m,r]),E=j.useMemo(()=>N0(c,o,p,m,r,"assets"),[c,o,p,m,r]),B=j.useMemo(()=>{if(c===r.pathname+r.search+r.hash)return[];let L=new Set,q=!1;if(o.forEach(H=>{let V=m.routes[H.route.id];!V||!V.hasLoader||(!N.some(ie=>ie.route.id===H.route.id)&&H.route.id in v&&x[H.route.id]?.shouldRevalidate||V.hasClientLoader?q=!0:L.add(H.route.id))}),L.size===0)return[];let U=$g(c,z,h.unstable_trailingSlashAwareDataRequests,"data");return q&&L.size>0&&U.searchParams.set("_routes",o.filter(H=>L.has(H.route.id)).map(H=>H.route.id).join(",")),[U.pathname+U.search]},[z,h.unstable_trailingSlashAwareDataRequests,v,r,m,N,o,c,x]),X=j.useMemo(()=>Pg(E,m),[E,m]),k=u1(E);return j.createElement(j.Fragment,null,B.map(L=>j.createElement("link",{key:L,rel:"prefetch",as:"fetch",href:L,...d})),X.map(L=>j.createElement("link",{key:L,rel:"modulepreload",href:L,...d})),k.map(({key:L,link:q})=>j.createElement("link",{key:L,nonce:d.nonce,...q,crossOrigin:q.crossOrigin??d.crossOrigin})))}function s1(...c){return o=>{c.forEach(d=>{typeof d=="function"?d(o):d!=null&&(d.current=o)})}}var r1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{r1&&(window.__reactRouterVersion="7.13.0")}catch{}function o1({basename:c,children:o,unstable_useTransitions:d,window:r}){let h=j.useRef();h.current==null&&(h.current=Xp({window:r,v5Compat:!0}));let m=h.current,[x,z]=j.useState({action:m.action,location:m.location}),v=j.useCallback(p=>{d===!1?z(p):j.startTransition(()=>z(p))},[d]);return j.useLayoutEffect(()=>m.listen(v),[m,v]),j.createElement(Lg,{basename:c,children:o,location:x.location,navigationType:x.action,navigator:m,unstable_useTransitions:d})}var F0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,W0=j.forwardRef(function({onClick:o,discover:d="render",prefetch:r="none",relative:h,reloadDocument:m,replace:x,state:z,target:v,to:p,preventScrollReset:N,viewTransition:E,unstable_defaultShouldRevalidate:B,...X},k){let{basename:L,unstable_useTransitions:q}=j.useContext(wt),U=typeof p=="string"&&F0.test(p),H=L0(p,L);p=H.to;let V=zg(p,{relative:h}),[ie,re,ze]=n1(r,X),ee=h1(p,{replace:x,state:z,target:v,preventScrollReset:N,relative:h,viewTransition:E,unstable_defaultShouldRevalidate:B,unstable_useTransitions:q});function Ne(Ie){o&&o(Ie),Ie.defaultPrevented||ee(Ie)}let J=j.createElement("a",{...X,...ze,href:H.absoluteURL||V,onClick:H.isExternal||m?o:Ne,ref:s1(k,re),target:v,"data-discover":!U&&d==="render"?"true":void 0});return ie&&!U?j.createElement(j.Fragment,null,J,j.createElement(i1,{page:V})):J});W0.displayName="Link";var I0=j.forwardRef(function({"aria-current":o="page",caseSensitive:d=!1,className:r="",end:h=!1,style:m,to:x,viewTransition:z,children:v,...p},N){let E=Xn(x,{relative:p.relative}),B=ca(),X=j.useContext(mu),{navigator:k,basename:L}=j.useContext(wt),q=X!=null&&y1(E)&&z===!0,U=k.encodeLocation?k.encodeLocation(E).pathname:E.pathname,H=B.pathname,V=X&&X.navigation&&X.navigation.location?X.navigation.location.pathname:null;d||(H=H.toLowerCase(),V=V?V.toLowerCase():null,U=U.toLowerCase()),V&&L&&(V=ua(V,L)||V);const ie=U!=="/"&&U.endsWith("/")?U.length-1:U.length;let re=H===U||!h&&H.startsWith(U)&&H.charAt(ie)==="/",ze=V!=null&&(V===U||!h&&V.startsWith(U)&&V.charAt(U.length)==="/"),ee={isActive:re,isPending:ze,isTransitioning:q},Ne=re?o:void 0,J;typeof r=="function"?J=r(ee):J=[r,re?"active":null,ze?"pending":null,q?"transitioning":null].filter(Boolean).join(" ");let Ie=typeof m=="function"?m(ee):m;return j.createElement(W0,{...p,"aria-current":Ne,className:J,ref:N,style:Ie,to:x,viewTransition:z},typeof v=="function"?v(ee):v)});I0.displayName="NavLink";var f1=j.forwardRef(({discover:c="render",fetcherKey:o,navigate:d,reloadDocument:r,replace:h,state:m,method:x=ru,action:z,onSubmit:v,relative:p,preventScrollReset:N,viewTransition:E,unstable_defaultShouldRevalidate:B,...X},k)=>{let{unstable_useTransitions:L}=j.useContext(wt),q=g1(),U=v1(z,{relative:p}),H=x.toLowerCase()==="get"?"get":"post",V=typeof z=="string"&&F0.test(z),ie=re=>{if(v&&v(re),re.defaultPrevented)return;re.preventDefault();let ze=re.nativeEvent.submitter,ee=ze?.getAttribute("formmethod")||x,Ne=()=>q(ze||re.currentTarget,{fetcherKey:o,method:ee,navigate:d,replace:h,state:m,relative:p,preventScrollReset:N,viewTransition:E,unstable_defaultShouldRevalidate:B});L&&d!==!1?j.startTransition(()=>Ne()):Ne()};return j.createElement("form",{ref:k,method:H,action:U,onSubmit:r?v:ie,...X,"data-discover":!V&&c==="render"?"true":void 0})});f1.displayName="Form";function d1(c){return`${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function P0(c){let o=j.useContext(Ll);return _e(o,d1(c)),o}function h1(c,{target:o,replace:d,state:r,preventScrollReset:h,relative:m,viewTransition:x,unstable_defaultShouldRevalidate:z,unstable_useTransitions:v}={}){let p=rt(),N=ca(),E=Xn(c,{relative:m});return j.useCallback(B=>{if(Vg(B,o)){B.preventDefault();let X=d!==void 0?d:Ln(N)===Ln(E),k=()=>p(c,{replace:X,state:r,preventScrollReset:h,relative:m,viewTransition:x,unstable_defaultShouldRevalidate:z});v?j.startTransition(()=>k()):k()}},[N,p,E,d,r,o,c,h,m,x,z,v])}var m1=0,p1=()=>`__${String(++m1)}__`;function g1(){let{router:c}=P0("useSubmit"),{basename:o}=j.useContext(wt),d=Bg(),r=c.fetch,h=c.navigate;return j.useCallback(async(m,x={})=>{let{action:z,method:v,encType:p,formData:N,body:E}=Jg(m,o);if(x.navigate===!1){let B=x.fetcherKey||p1();await r(B,d,x.action||z,{unstable_defaultShouldRevalidate:x.unstable_defaultShouldRevalidate,preventScrollReset:x.preventScrollReset,formData:N,body:E,formMethod:x.method||v,formEncType:x.encType||p,flushSync:x.flushSync})}else await h(x.action||z,{unstable_defaultShouldRevalidate:x.unstable_defaultShouldRevalidate,preventScrollReset:x.preventScrollReset,formData:N,body:E,formMethod:x.method||v,formEncType:x.encType||p,replace:x.replace,state:x.state,fromRouteId:d,flushSync:x.flushSync,viewTransition:x.viewTransition})},[r,h,o,d])}function v1(c,{relative:o}={}){let{basename:d}=j.useContext(wt),r=j.useContext(qt);_e(r,"useFormAction must be used inside a RouteContext");let[h]=r.matches.slice(-1),m={...Xn(c||".",{relative:o})},x=ca();if(c==null){m.search=x.search;let z=new URLSearchParams(m.search),v=z.getAll("index");if(v.some(N=>N==="")){z.delete("index"),v.filter(E=>E).forEach(E=>z.append("index",E));let N=z.toString();m.search=N?`?${N}`:""}}return(!c||c===".")&&h.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(m.pathname=m.pathname==="/"?d:ia([d,m.pathname])),Ln(m)}function y1(c,{relative:o}={}){let d=j.useContext(Y0);_e(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=P0("useViewTransitionState"),h=Xn(c,{relative:o});if(!d.isTransitioning)return!1;let m=ua(d.currentLocation.pathname,r)||d.currentLocation.pathname,x=ua(d.nextLocation.pathname,r)||d.nextLocation.pathname;return fu(h.pathname,x)!=null||fu(h.pathname,m)!=null}function x1(){const c=rt(),[o,d]=j.useState(0);return j.useEffect(()=>{const r=setTimeout(()=>d(1),300),h=setTimeout(()=>d(2),1200),m=setTimeout(()=>c("/login"),2800);return()=>{clearTimeout(r),clearTimeout(h),clearTimeout(m)}},[c]),u.jsxs("div",{className:"splash",children:[u.jsxs("div",{className:`splash-content ${o>=1?"visible":""}`,children:[u.jsxs("div",{className:"splash-logo",children:[u.jsx("div",{className:"lotus-icon",children:u.jsxs("svg",{viewBox:"0 0 80 80",fill:"none",children:[u.jsx("path",{d:"M40 8C40 8 25 25 25 40C25 55 40 65 40 65C40 65 55 55 55 40C55 25 40 8 40 8Z",fill:"rgba(139,168,136,0.3)",stroke:"#8BA888",strokeWidth:"1.5"}),u.jsx("path",{d:"M40 15C40 15 18 30 15 45C12 60 40 70 40 70C40 70 68 60 65 45C62 30 40 15 40 15Z",fill:"rgba(139,168,136,0.15)",stroke:"#8BA888",strokeWidth:"1"}),u.jsx("path",{d:"M40 20C40 20 30 35 30 45C30 55 40 60 40 60C40 60 50 55 50 45C50 35 40 20 40 20Z",fill:"rgba(139,168,136,0.4)",stroke:"#8BA888",strokeWidth:"1.5"}),u.jsx("circle",{cx:"40",cy:"42",r:"4",fill:"#8BA888"})]})}),u.jsx("h1",{className:"splash-title",children:"Revoshalaa"})]}),u.jsx("p",{className:`splash-tagline ${o>=2?"visible":""}`,children:"Learn. Move. Transform."})]}),u.jsx("div",{className:`splash-footer ${o>=2?"visible":""}`,children:u.jsx("p",{children:"Your Creator Store"})}),u.jsx("style",{children:`
        .splash {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(165deg, #FAF7F2 0%, #F0EBE0 30%, #E8E2D5 100%);
          position: relative;
          overflow: hidden;
        }

        .splash::before {
          content: '';
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(139,168,136,0.12) 0%, transparent 70%);
          top: 30%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: breathe 4s ease-in-out infinite;
        }

        .splash-content {
          text-align: center;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 1;
        }

        .splash-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .splash-logo {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .lotus-icon {
          width: 80px;
          height: 80px;
          animation: breathe 3s ease-in-out infinite;
        }

        .splash-title {
          font-family: var(--font-display);
          font-size: 36px;
          font-weight: 600;
          color: var(--text-primary);
          letter-spacing: 2px;
        }

        .splash-tagline {
          margin-top: 12px;
          font-size: 15px;
          color: var(--text-secondary);
          font-weight: 300;
          letter-spacing: 3px;
          text-transform: uppercase;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.6s ease 0.2s;
        }

        .splash-tagline.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .splash-footer {
          position: absolute;
          bottom: 50px;
          font-size: 12px;
          color: var(--text-tertiary);
          letter-spacing: 1px;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .splash-footer.visible {
          opacity: 1;
        }
      `})]})}const eh=(...c)=>c.filter((o,d,r)=>!!o&&o.trim()!==""&&r.indexOf(o)===d).join(" ").trim();const b1=c=>c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const S1=c=>c.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,d,r)=>r?r.toUpperCase():d.toLowerCase());const E0=c=>{const o=S1(c);return o.charAt(0).toUpperCase()+o.slice(1)};var j1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const z1=c=>{for(const o in c)if(o.startsWith("aria-")||o==="role"||o==="title")return!0;return!1};const N1=j.forwardRef(({color:c="currentColor",size:o=24,strokeWidth:d=2,absoluteStrokeWidth:r,className:h="",children:m,iconNode:x,...z},v)=>j.createElement("svg",{ref:v,...j1,width:o,height:o,stroke:c,strokeWidth:r?Number(d)*24/Number(o):d,className:eh("lucide",h),...!m&&!z1(z)&&{"aria-hidden":"true"},...z},[...x.map(([p,N])=>j.createElement(p,N)),...Array.isArray(m)?m:[m]]));const P=(c,o)=>{const d=j.forwardRef(({className:r,...h},m)=>j.createElement(N1,{ref:m,iconNode:o,className:eh(`lucide-${b1(E0(c))}`,`lucide-${c}`,r),...h}));return d.displayName=E0(c),d};const E1=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Ul=P("arrow-left",E1);const A1=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],$s=P("arrow-right",A1);const C1=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742",key:"178tsu"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05",key:"1hqiys"}]],M1=P("bell-off",C1);const T1=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],th=P("bell",T1);const _1=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],ar=P("calendar",_1);const w1=[["path",{d:"M14.564 14.558a3 3 0 1 1-4.122-4.121",key:"1rnrzw"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M20 20H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 .819-.175",key:"1x3arw"}],["path",{d:"M9.695 4.024A2 2 0 0 1 10.004 4h3.993a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v7.344",key:"1i84u0"}]],D1=P("camera-off",w1);const R1=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],O1=P("camera",R1);const B1=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],kn=P("check",B1);const U1=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],qn=P("chevron-right",U1);const H1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],Hl=P("clock",H1);const k1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]],L1=P("compass",k1);const q1=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],ah=P("credit-card",q1);const Y1=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],du=P("crown",Y1);const G1=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],X1=P("dollar-sign",G1);const Q1=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],V1=P("file-text",Q1);const Z1=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],K1=P("flame",Z1);const J1=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],$1=P("heart",J1);const F1=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],W1=P("house",F1);const I1=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],P1=P("key",I1);const ev=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],tv=P("lock",ev);const av=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],lv=P("log-out",av);const nv=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],lh=P("mail",nv);const iv=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],nh=P("maximize-2",iv);const uv=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],lr=P("message-circle",uv);const cv=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M16.95 16.95A7 7 0 0 1 5 12v-2",key:"cqa7eg"}],["path",{d:"M18.89 13.23A7 7 0 0 0 19 12v-2",key:"16hl24"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}]],A0=P("mic-off",cv);const sv=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],C0=P("mic",sv);const rv=[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]],ov=P("minimize-2",rv);const fv=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],dv=P("pause",fv);const hv=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],ih=P("phone",hv);const mv=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],hu=P("play",mv);const pv=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],gv=P("plus",pv);const vv=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],uh=P("radio",vv);const yv=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],xv=P("search",yv);const bv=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Sv=P("send",bv);const jv=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],zv=P("settings",jv);const Nv=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],Ev=P("share-2",Nv);const Av=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Cv=P("shield",Av);const Mv=[["path",{d:"M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",key:"15892j"}],["path",{d:"M3 20V4",key:"1ptbpl"}]],Tv=P("skip-back",Mv);const _v=[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]],wv=P("skip-forward",_v);const Dv=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Rv=P("sparkles",Dv);const Ov=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],gu=P("star",Ov);const Bv=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],M0=P("tag",Bv);const Uv=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],nr=P("user",Uv);const Hv=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],vu=P("users",Hv);const kv=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],ir=P("video",kv);const Lv=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],qv=P("volume-2",Lv);const Yv=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Gv=P("x",Yv);const Xv=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Qv=P("zap",Xv),ch=j.createContext(),ql=()=>j.useContext(ch),T0=[{id:"fitness",name:"Fitness",emoji:"💪"},{id:"music",name:"Music",emoji:"🎵"},{id:"cooking",name:"Cooking",emoji:"🍳"},{id:"art",name:"Art & Design",emoji:"🎨"},{id:"business",name:"Business",emoji:"📈"},{id:"wellness",name:"Wellness",emoji:"🧘"}],Vv=({children:c})=>{const[o,d]=j.useState(null),[r,h]=j.useState([]),[m,x]=j.useState([]),[z,v]=j.useState([]);j.useEffect(()=>{const k=localStorage.getItem("revoshalaa_user"),L=localStorage.getItem("revoshalaa_tutors"),q=localStorage.getItem("revoshalaa_sessions"),U=localStorage.getItem("revoshalaa_categories");k&&d(JSON.parse(k)),L&&h(JSON.parse(L)),q&&x(JSON.parse(q)),U?v(JSON.parse(U)):(v(T0),localStorage.setItem("revoshalaa_categories",JSON.stringify(T0)))},[]);const p=(k,L="📌")=>{const q=k.toLowerCase().replace(/[^a-z0-9]/g,"-");if(z.some(ie=>ie.id===q||ie.name.toLowerCase()===k.toLowerCase()))return z.find(ie=>ie.id===q||ie.name.toLowerCase()===k.toLowerCase());const H={id:q,name:k,emoji:L},V=[...z,H];return v(V),localStorage.setItem("revoshalaa_categories",JSON.stringify(V)),H},N=(k,L)=>{const q={id:Date.now().toString(),name:L.firstName?`${L.firstName} ${L.lastName||""}`.trim():L.identifier?.split("@")[0]||"User",firstName:L.firstName||"",lastName:L.lastName||"",type:k,avatar:k==="tutor"?"🎓":"👤",category:L.category||"",specialty:L.specialty||"",identifier:L.identifier||""};if(d(q),localStorage.setItem("revoshalaa_user",JSON.stringify(q)),k==="tutor"){const U=r.findIndex(V=>V.identifier===q.identifier);let H;U>=0?(H=[...r],H[U]=q):H=[...r,q],h(H),localStorage.setItem("revoshalaa_tutors",JSON.stringify(H))}return!0},E=()=>{d(null),localStorage.removeItem("revoshalaa_user")},B=k=>{if(!o||o.type!=="tutor")return;const L={id:Date.now().toString(),tutorId:o.id,tutorName:o.name,tutorAvatar:o.avatar,title:k.title,category:k.category,viewers:0,startedAt:new Date().toISOString()},q=[...m,L];return x(q),localStorage.setItem("revoshalaa_sessions",JSON.stringify(q)),L},X=k=>{const L=m.filter(q=>q.id!==k);x(L),localStorage.setItem("revoshalaa_sessions",JSON.stringify(L))};return u.jsx(ch.Provider,{value:{user:o,tutors:r,liveSessions:m,categories:z,login:N,logout:E,addCategory:p,startLiveSession:B,endLiveSession:X},children:c})},_0=["linear-gradient(135deg, #A8C4A5 0%, #8BA888 100%)","linear-gradient(135deg, #9B8EC4 0%, #7B6FA4 100%)","linear-gradient(135deg, #D9A87C 0%, #C68B59 100%)","linear-gradient(135deg, #C4857A 0%, #B06B5E 100%)","linear-gradient(135deg, #6B8FAD 0%, #537A96 100%)","linear-gradient(135deg, #BCA9D4 0%, #A08CC0 100%)","linear-gradient(135deg, #7ABFB0 0%, #5CA69A 100%)","linear-gradient(135deg, #D4A853 0%, #B88F3A 100%)"];function Zv(){const c=rt(),{user:o,liveSessions:d,categories:r}=ql(),h=(r||[]).map((x,z)=>({...x,sessions:15+x.name.length*3%20,gradient:_0[z%_0.length]})),m=d.length>0?d[0]:null;return u.jsxs("div",{className:"page home-page",children:[u.jsxs("div",{className:"home-header",children:[u.jsxs("div",{children:[u.jsxs("p",{className:"greeting",children:["Hey, ",o?.name||"Guest"," 👋"]}),u.jsx("h1",{children:"Revoshalaa"})]}),u.jsx("div",{className:"header-actions",children:u.jsx("button",{className:"search-btn",onClick:()=>c("/explore"),children:u.jsx(Rv,{size:20})})})]}),u.jsxs("div",{className:"page-content",children:[m?u.jsxs("div",{className:"live-banner glass-card",onClick:()=>c("/live-session",{state:m}),children:[u.jsxs("div",{className:"live-banner-badge",children:[u.jsx("span",{className:"badge badge-live",children:"● LIVE"}),u.jsxs("span",{className:"viewer-count",children:[u.jsx(vu,{size:12})," ",m.viewers+12]})]}),u.jsxs("div",{className:"live-banner-info",children:[u.jsx("h3",{children:m.title}),u.jsxs("p",{children:[m.tutorName," · ",m.category]})]}),u.jsxs("button",{className:"btn-primary live-join-btn",children:[u.jsx(hu,{size:16,fill:"white"})," Join"]})]}):u.jsxs("div",{className:"no-live-banner glass-card",children:[u.jsx("div",{className:"icon-circle",children:u.jsx(ar,{size:24,color:"var(--text-secondary)"})}),u.jsxs("div",{className:"no-live-info",children:[u.jsx("h3",{children:"No live sessions right now"}),u.jsx("p",{children:"Check the schedule for upcoming classes"})]}),u.jsx("button",{className:"btn-outline",onClick:()=>c("/schedule"),children:"View Schedule"})]}),u.jsxs("section",{className:"home-section",style:{marginTop:24},children:[u.jsx("div",{className:"section-header",children:u.jsx("h2",{children:"Categories"})}),u.jsx("div",{className:"categories-grid",children:h.map(x=>u.jsxs("div",{className:"category-big-card",style:{background:x.gradient},onClick:()=>c(`/category/${x.id}`),children:[u.jsx("span",{className:"cat-emoji",children:x.emoji}),u.jsx("h3",{children:x.name}),u.jsxs("p",{children:[x.sessions," sessions"]})]},x.id))})]}),u.jsxs("section",{className:"home-section",children:[u.jsxs("div",{className:"section-header",children:[u.jsx("h2",{children:"Upcoming Live"}),u.jsx("button",{className:"see-all",onClick:()=>c("/schedule"),children:"See All"})]}),u.jsxs("div",{className:"h-scroll",style:{paddingLeft:0},children:[u.jsxs("div",{className:"session-card glass-card",onClick:()=>c("/schedule"),children:[u.jsxs("div",{className:"session-card-top",children:[u.jsx("span",{className:"badge badge-free",children:"FREE"}),u.jsx("span",{className:"session-cat",children:"Fitness"})]}),u.jsx("h3",{children:"HIIT Burn Challenge"}),u.jsx("p",{className:"session-instructor",children:"Ankit Verma"}),u.jsxs("div",{className:"session-time",children:[u.jsx(Hl,{size:13}),u.jsx("span",{children:"Today, 6:00 PM"})]})]}),u.jsxs("div",{className:"session-card glass-card",onClick:()=>c("/schedule"),children:[u.jsxs("div",{className:"session-card-top",children:[u.jsx("span",{className:"badge badge-paid",children:"$5"}),u.jsx("span",{className:"session-cat",children:"Music"})]}),u.jsx("h3",{children:"Guitar for Beginners"}),u.jsx("p",{className:"session-instructor",children:"Rohan Mehta"}),u.jsxs("div",{className:"session-time",children:[u.jsx(Hl,{size:13}),u.jsx("span",{children:"Today, 8:00 PM"})]})]}),u.jsxs("div",{className:"session-card glass-card",onClick:()=>c("/schedule"),children:[u.jsxs("div",{className:"session-card-top",children:[u.jsx("span",{className:"badge badge-free",children:"FREE"}),u.jsx("span",{className:"session-cat",children:"Cooking"})]}),u.jsx("h3",{children:"5-Min Healthy Meals"}),u.jsx("p",{className:"session-instructor",children:"Chef Ananya"}),u.jsxs("div",{className:"session-time",children:[u.jsx(Hl,{size:13}),u.jsx("span",{children:"Tomorrow, 12:00 PM"})]})]})]})]})]}),u.jsx("style",{children:`
        .home-page {
          background: var(--bg-primary);
        }

        .home-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 16px 8px;
          padding-top: calc(var(--safe-area-top) + 20px);
        }

        .greeting {
          font-size: 14px;
          color: var(--text-secondary);
          margin-bottom: 2px;
        }

        .home-header h1 {
          font-size: 26px;
          font-family: var(--font-display);
        }

        .search-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-sage);
          box-shadow: var(--shadow-sm);
        }

        /* Live Banner */
        .live-banner {
          padding: 18px;
          display: flex;
          align-items: center;
          gap: 14px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(139,168,136,0.08), rgba(198,139,89,0.06)) !important;
        }

        .live-banner::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(139,168,136,0.05) 50%, transparent 100%);
          animation: shimmer 3s infinite;
          background-size: 200% 100%;
        }

        .live-banner-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }

        .viewer-count {
          font-size: 11px;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 3px;
        }

        .live-banner-info {
          flex: 1;
        }

        .live-banner-info h3 {
          font-size: 15px;
          font-family: var(--font-body);
          font-weight: 600;
          margin-bottom: 2px;
        }

        .live-banner-info p {
          font-size: 12px;
          color: var(--text-secondary);
        }

        .live-join-btn {
          padding: 10px 20px;
          font-size: 13px;
        }

        /* No Live State */
        .no-live-banner {
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          background: rgba(255,255,255,0.4);
        }

        .icon-circle {
          width: 48px; 
          height: 48px;
          border-radius: 50%;
          background: rgba(0,0,0,0.03);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .no-live-info {
          flex: 1;
        }

        .no-live-info h3 {
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 2px;
          color: var(--text-primary);
        }

        .no-live-info p {
          font-size: 12px;
          color: var(--text-secondary);
        }

        .btn-outline {
          padding: 8px 16px;
          border: 1px solid var(--border-medium);
          background: transparent;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
          color: var(--text-secondary);
        }

        /* Categories Grid */
        .categories-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .category-big-card {
          padding: 28px 18px;
          border-radius: var(--radius-lg);
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .category-big-card:active {
          transform: scale(0.97);
        }

        .cat-emoji {
          font-size: 32px;
          display: block;
          margin-bottom: 12px;
        }

        .category-big-card h3 {
          color: white;
          font-family: var(--font-display);
          font-size: 20px;
          margin-bottom: 4px;
        }

        .category-big-card p {
          font-size: 12px;
          opacity: 0.85;
        }

        /* Session Cards */
        .session-card {
          width: 220px;
          padding: 16px;
          cursor: pointer;
        }

        .session-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .session-cat {
          font-size: 11px;
          color: var(--text-tertiary);
          font-weight: 500;
        }

        .session-card h3 {
          font-size: 15px;
          font-family: var(--font-body);
          font-weight: 600;
          margin-bottom: 4px;
          line-height: 1.3;
        }

        .session-instructor {
          font-size: 12px;
          color: var(--text-secondary);
          margin-bottom: 10px;
        }

        .session-time {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 12px;
          color: var(--accent-sage);
          font-weight: 500;
        }

        .home-section {
          margin-top: 28px;
        }
      `})]})}const Kv=[{id:"hiit",name:"HIIT Training",type:"Fitness",emoji:"🔥",sessions:8,color:"#A8C4A5"},{id:"strength",name:"Strength",type:"Fitness",emoji:"💪",sessions:6,color:"#8BA888"},{id:"yoga",name:"Yoga",type:"Fitness",emoji:"🧘",sessions:7,color:"#6D8A6A"},{id:"crossfit",name:"CrossFit",type:"Fitness",emoji:"🏋️",sessions:5,color:"#7AA27E"},{id:"guitar",name:"Guitar",type:"Music",emoji:"🎸",sessions:8,color:"#9B8EC4"},{id:"piano",name:"Piano",type:"Music",emoji:"🎹",sessions:6,color:"#7B6FA4"},{id:"vocals",name:"Vocals",type:"Music",emoji:"🎤",sessions:5,color:"#A99BD4"},{id:"production",name:"Music Production",type:"Music",emoji:"🎧",sessions:4,color:"#8676B4"},{id:"healthy",name:"Healthy Meals",type:"Cooking",emoji:"🥗",sessions:6,color:"#D9A87C"},{id:"baking",name:"Baking",type:"Cooking",emoji:"🧁",sessions:5,color:"#C68B59"},{id:"indian",name:"Indian Cuisine",type:"Cooking",emoji:"🍛",sessions:4,color:"#B87A4A"},{id:"illustration",name:"Illustration",type:"Art & Design",emoji:"✏️",sessions:6,color:"#C4857A"},{id:"uidesign",name:"UI/UX Design",type:"Art & Design",emoji:"📱",sessions:5,color:"#B06B5E"},{id:"painting",name:"Painting",type:"Art & Design",emoji:"🖌️",sessions:4,color:"#D9927A"},{id:"marketing",name:"Marketing",type:"Business",emoji:"📣",sessions:5,color:"#6B8FAD"},{id:"freelance",name:"Freelancing",type:"Business",emoji:"💼",sessions:4,color:"#537A96"},{id:"finance",name:"Finance",type:"Business",emoji:"💰",sessions:3,color:"#4A6A80"},{id:"meditation",name:"Meditation",type:"Wellness",emoji:"🧘‍♀️",sessions:5,color:"#BCA9D4"},{id:"mindfulness",name:"Mindfulness",type:"Wellness",emoji:"🌿",sessions:4,color:"#A08CC0"},{id:"breathwork",name:"Breathwork",type:"Wellness",emoji:"🌬️",sessions:3,color:"#9182B0"}],Jv=["fitness","music","cooking","art","business","wellness"];function $v(){const c=rt(),{categories:o}=ql(),[d,r]=j.useState(""),[h,m]=j.useState("All"),x=["All",...(o||[]).map(N=>N.name)],z=(o||[]).filter(N=>!Jv.includes(N.id)).map(N=>({id:N.id,name:N.name,type:N.name,emoji:N.emoji,sessions:3,color:"#8BA888"})),p=[...Kv,...z].filter(N=>{const E=N.name.toLowerCase().includes(d.toLowerCase()),B=h==="All"||N.type===h;return E&&B});return u.jsxs("div",{className:"page explore-page",children:[u.jsx("div",{className:"page-header",children:u.jsx("h1",{children:"Explore"})}),u.jsxs("div",{className:"page-content",children:[u.jsxs("div",{className:"search-bar glass-card",children:[u.jsx(xv,{size:18,color:"var(--text-tertiary)"}),u.jsx("input",{type:"text",placeholder:"Search creators, topics...",value:d,onChange:N=>r(N.target.value)})]}),u.jsx("div",{className:"filter-chips h-scroll",children:x.map(N=>u.jsx("button",{className:`chip ${h===N?"chip-active":""}`,onClick:()=>m(N),children:N},N))}),u.jsx("div",{className:"explore-grid",children:p.map(N=>u.jsxs("div",{className:"explore-card glass-card",onClick:()=>c(`/category/${N.type.toLowerCase().replace(/[^a-z]/g,"-")}`),children:[u.jsx("div",{className:"explore-card-emoji",style:{background:`${N.color}20`},children:u.jsx("span",{children:N.emoji})}),u.jsxs("div",{className:"explore-card-info",children:[u.jsx("h3",{children:N.name}),u.jsxs("p",{children:[N.sessions," sessions · ",N.type]})]}),u.jsx(qn,{size:16,color:"var(--text-tertiary)"})]},N.id))})]}),u.jsx("style",{children:`
        .explore-page .search-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
        }

        .search-bar input {
          flex: 1;
          border: none;
          background: none;
          font-size: 15px;
          color: var(--text-primary);
          outline: none;
        }

        .filter-chips {
          display: flex;
          gap: 8px;
          padding: 16px 0;
          overflow-x: auto;
        }

        .chip {
          padding: 8px 16px;
          border-radius: var(--radius-full);
          font-size: 13px;
          font-weight: 500;
          white-space: nowrap;
          border: 1px solid var(--border-medium);
          color: var(--text-secondary);
          background: var(--bg-card);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .chip-active {
          background: var(--accent-sage);
          color: white;
          border-color: var(--accent-sage);
        }

        .explore-grid {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .explore-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 16px;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .explore-card:active {
          transform: scale(0.98);
        }

        .explore-card-emoji {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          flex-shrink: 0;
        }

        .explore-card-info {
          flex: 1;
        }

        .explore-card-info h3 {
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 2px;
        }

        .explore-card-info p {
          font-size: 12px;
          color: var(--text-secondary);
        }
      `})]})}const w0={fitness:{name:"Fitness",emoji:"💪",tagline:"Train with top fitness creators",gradient:"linear-gradient(135deg, #A8C4A5 0%, #8BA888 100%)",instructors:[{id:1,name:"Ankit Verma",specialty:"HIIT & Strength",rating:4.9,avatar:"💪",nextLive:"Today, 6:00 PM"},{id:2,name:"Neha Gupta",specialty:"Yoga & Pilates",rating:4.8,avatar:"🧘‍♀️",nextLive:"Tomorrow, 7:00 AM"}],upcomingSessions:[{id:1,title:"HIIT Burn Challenge",time:"Today, 6:00 PM",free:!0,viewers:0},{id:2,title:"Full Body Strength",time:"Wed, 7:00 AM",free:!1,viewers:0},{id:3,title:"Morning Yoga Flow",time:"Thu, 6:00 AM",free:!0,viewers:0}]},music:{name:"Music",emoji:"🎵",tagline:"Learn instruments, production & voice",gradient:"linear-gradient(135deg, #9B8EC4 0%, #7B6FA4 100%)",instructors:[{id:1,name:"Rohan Mehta",specialty:"Guitar & Songwriting",rating:4.9,avatar:"🎸",nextLive:"Today, 8:00 PM"},{id:2,name:"Priya Sen",specialty:"Vocals & Classical",rating:4.8,avatar:"🎤",nextLive:"Fri, 7:00 PM"}],upcomingSessions:[{id:1,title:"Guitar for Beginners",time:"Today, 8:00 PM",free:!0,viewers:0},{id:2,title:"Music Production 101",time:"Fri, 6:00 PM",free:!1,viewers:0},{id:3,title:"Vocal Warm-ups",time:"Sat, 10:00 AM",free:!0,viewers:0}]},cooking:{name:"Cooking",emoji:"🍳",tagline:"Cook with chefs from around the world",gradient:"linear-gradient(135deg, #D9A87C 0%, #C68B59 100%)",instructors:[{id:1,name:"Chef Ananya",specialty:"Healthy & Quick",rating:4.9,avatar:"🍳",nextLive:"Tomorrow, 12:00 PM"},{id:2,name:"Chef Ravi",specialty:"Indian Cuisine",rating:4.7,avatar:"🍛",nextLive:"Sat, 5:00 PM"}],upcomingSessions:[{id:1,title:"5-Min Healthy Meals",time:"Tomorrow, 12:00 PM",free:!0,viewers:0},{id:2,title:"Baking Basics",time:"Sat, 3:00 PM",free:!1,viewers:0},{id:3,title:"Indian Street Food",time:"Sun, 4:00 PM",free:!0,viewers:0}]},art:{name:"Art & Design",emoji:"🎨",tagline:"Express yourself through art & design",gradient:"linear-gradient(135deg, #C4857A 0%, #B06B5E 100%)",instructors:[{id:1,name:"Sanya Kapoor",specialty:"Illustration & Sketching",rating:4.8,avatar:"✏️",nextLive:"Wed, 4:00 PM"},{id:2,name:"Aman Singh",specialty:"UI/UX Design",rating:4.9,avatar:"📱",nextLive:"Thu, 6:00 PM"}],upcomingSessions:[{id:1,title:"Sketch Basics",time:"Wed, 4:00 PM",free:!0,viewers:0},{id:2,title:"Figma Masterclass",time:"Thu, 6:00 PM",free:!1,viewers:0},{id:3,title:"Watercolor Painting",time:"Sat, 11:00 AM",free:!0,viewers:0}]},business:{name:"Business",emoji:"📈",tagline:"Grow your career & side hustle",gradient:"linear-gradient(135deg, #6B8FAD 0%, #537A96 100%)",instructors:[{id:1,name:"Vikram Shah",specialty:"Marketing & Growth",rating:4.9,avatar:"📣",nextLive:"Today, 7:00 PM"},{id:2,name:"Pooja Nair",specialty:"Freelancing & Finance",rating:4.7,avatar:"💼",nextLive:"Fri, 8:00 PM"}],upcomingSessions:[{id:1,title:"Social Media Marketing",time:"Today, 7:00 PM",free:!0,viewers:0},{id:2,title:"Start Freelancing",time:"Fri, 8:00 PM",free:!1,viewers:0},{id:3,title:"Personal Finance 101",time:"Sun, 6:00 PM",free:!0,viewers:0}]},wellness:{name:"Wellness",emoji:"🧘",tagline:"Mind, body & soul practices",gradient:"linear-gradient(135deg, #BCA9D4 0%, #A08CC0 100%)",instructors:[{id:1,name:"Kavya Nair",specialty:"Meditation & Breathwork",rating:4.9,avatar:"🧘‍♀️",nextLive:"Tomorrow, 7:00 AM"},{id:2,name:"Dr. Arjun",specialty:"Mindfulness Coach",rating:4.8,avatar:"🌿",nextLive:"Wed, 8:00 PM"}],upcomingSessions:[{id:1,title:"Morning Meditation",time:"Tomorrow, 7:00 AM",free:!0,viewers:0},{id:2,title:"Breathwork Essentials",time:"Wed, 8:00 PM",free:!1,viewers:0},{id:3,title:"Stress Relief Session",time:"Fri, 9:00 PM",free:!0,viewers:0}]}};function Fv(){const c=rt(),{id:o}=Eg(),d=w0[o]||w0.fitness;return u.jsxs("div",{className:"page category-page",children:[u.jsxs("div",{className:"category-hero",style:{background:d.gradient},children:[u.jsx("button",{className:"back-btn",onClick:()=>c(-1),children:u.jsx(Ul,{size:24,color:"white"})}),u.jsxs("div",{className:"hero-content",children:[u.jsx("span",{className:"hero-emoji",children:d.emoji}),u.jsx("h1",{children:d.name}),u.jsx("p",{children:d.tagline})]})]}),u.jsxs("div",{className:"page-content",style:{marginTop:-20,position:"relative",zIndex:1},children:[u.jsxs("div",{className:"intro-video glass-card",onClick:()=>c("/video-player"),children:[u.jsx("div",{className:"video-play-overlay",children:u.jsx(hu,{size:28,fill:"white",color:"white"})}),u.jsx("p",{className:"video-label",children:"Watch Intro"})]}),u.jsxs("section",{className:"home-section",children:[u.jsx("div",{className:"section-header",children:u.jsx("h2",{children:"Top Creators"})}),d.instructors.map(r=>u.jsxs("div",{className:"instructor-detail-card glass-card",children:[u.jsx("div",{className:"inst-avatar",children:r.avatar}),u.jsxs("div",{className:"inst-info",children:[u.jsx("h3",{children:r.name}),u.jsx("p",{className:"inst-specialty",children:r.specialty}),u.jsxs("div",{className:"inst-meta",children:[u.jsxs("span",{children:[u.jsx(gu,{size:12,fill:"#D4A853",color:"#D4A853"})," ",r.rating]}),u.jsxs("span",{children:[u.jsx(Hl,{size:12})," ",r.nextLive]})]})]})]},r.id))]}),u.jsxs("section",{className:"home-section",children:[u.jsx("div",{className:"section-header",children:u.jsx("h2",{children:"Upcoming Sessions"})}),d.upcomingSessions.map(r=>u.jsxs("div",{className:"upcoming-card glass-card",onClick:()=>c("/schedule"),children:[u.jsxs("div",{className:"upcoming-info",children:[u.jsx("h4",{children:r.title}),u.jsxs("p",{children:[u.jsx(Hl,{size:12})," ",r.time]})]}),u.jsx("span",{className:`badge ${r.free?"badge-free":"badge-paid"}`,children:r.free?"FREE":"$5"})]},r.id))]})]}),u.jsx("style",{children:`
        .category-hero {
          padding: 60px 20px 50px;
          position: relative;
          padding-top: calc(var(--safe-area-top) + 60px);
        }

        .back-btn {
          position: absolute;
          top: calc(var(--safe-area-top) + 16px);
          left: 16px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(0,0,0,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-content {
          text-align: center;
          color: white;
        }

        .hero-emoji {
          font-size: 48px;
          display: block;
          margin-bottom: 12px;
        }

        .hero-content h1 {
          font-size: 28px;
          font-family: var(--font-display);
          margin-bottom: 6px;
          color: white;
        }

        .hero-content p {
          font-size: 14px;
          opacity: 0.85;
        }

        .intro-video {
          height: 120px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          background: linear-gradient(135deg, rgba(139,168,136,0.05), rgba(198,139,89,0.03)) !important;
        }

        .video-play-overlay {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--accent-sage);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(139,168,136,0.3);
        }

        .video-label {
          font-size: 13px;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .instructor-detail-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px;
          margin-bottom: 10px;
          cursor: pointer;
        }

        .inst-avatar {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
          flex-shrink: 0;
        }

        .inst-info h3 {
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 2px;
        }

        .inst-specialty {
          font-size: 12px;
          color: var(--text-secondary);
          margin-bottom: 6px;
        }

        .inst-meta {
          display: flex;
          gap: 12px;
          font-size: 12px;
          color: var(--text-tertiary);
        }

        .inst-meta span {
          display: flex;
          align-items: center;
          gap: 3px;
        }

        .upcoming-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px;
          margin-bottom: 10px;
          cursor: pointer;
        }

        .upcoming-info h4 {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .upcoming-info p {
          font-size: 12px;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 4px;
        }
      `})]})}function Wv(){const c=rt(),[o,d]=j.useState(!1);return u.jsxs("div",{className:"video-player-page",children:[u.jsxs("div",{className:"vp-video-area",children:[u.jsx("video",{src:"https://www.w3schools.com/html/mov_bbb.mp4",className:"vp-video",playsInline:!0,onClick:()=>d(!o)}),u.jsxs("div",{className:"vp-overlay",children:[u.jsx("button",{className:"vp-back",onClick:()=>c(-1),children:u.jsx(Ul,{size:22,color:"white"})}),u.jsxs("div",{className:"vp-center-controls",children:[u.jsx("button",{className:"vp-ctrl-btn",children:u.jsx(Tv,{size:24,color:"white"})}),u.jsx("button",{className:"vp-play-btn",onClick:()=>d(!o),children:o?u.jsx(dv,{size:30,fill:"white",color:"white"}):u.jsx(hu,{size:30,fill:"white",color:"white"})}),u.jsx("button",{className:"vp-ctrl-btn",children:u.jsx(wv,{size:24,color:"white"})})]}),u.jsxs("div",{className:"vp-bottom-bar",children:[u.jsx("div",{className:"vp-progress",children:u.jsx("div",{className:"vp-progress-fill",style:{width:"35%"}})}),u.jsxs("div",{className:"vp-time-row",children:[u.jsx("span",{children:"2:14"}),u.jsxs("div",{className:"vp-right-ctrls",children:[u.jsx(qv,{size:18,color:"white"}),u.jsx(nh,{size:18,color:"white"})]}),u.jsx("span",{children:"6:30"})]})]})]})]}),u.jsxs("div",{className:"vp-info",children:[u.jsx("h2",{children:"Introduction to Vinyasa"}),u.jsx("p",{className:"vp-instructor",children:"by Ankit Verma · Fitness"}),u.jsx("p",{className:"vp-desc",children:"Get started with this beginner-friendly session. Your creator will guide you through fundamental poses, breathing techniques, and how to connect movement with breath."}),u.jsxs("button",{className:"btn-primary",style:{width:"100%",marginTop:20},onClick:()=>c("/live-session"),children:[u.jsx(hu,{size:18,fill:"white"})," Join Live Session"]})]}),u.jsx("style",{children:`
        .video-player-page {
          min-height: 100vh;
          background: #0a0a0a;
        }

        .vp-video-area {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          background: #000;
        }

        .vp-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .vp-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(
            180deg,
            rgba(0,0,0,0.4) 0%,
            transparent 30%,
            transparent 60%,
            rgba(0,0,0,0.6) 100%
          );
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 16px;
        }

        .vp-back {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .vp-center-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 28px;
        }

        .vp-ctrl-btn {
          opacity: 0.7;
        }

        .vp-play-btn {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .vp-bottom-bar {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .vp-progress {
          width: 100%;
          height: 3px;
          background: rgba(255,255,255,0.2);
          border-radius: 10px;
          overflow: hidden;
        }

        .vp-progress-fill {
          height: 100%;
          background: var(--accent-sage);
          border-radius: 10px;
          transition: width 0.3s ease;
        }

        .vp-time-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 12px;
          color: rgba(255,255,255,0.7);
        }

        .vp-right-ctrls {
          display: flex;
          gap: 16px;
        }

        .vp-info {
          padding: 24px 16px;
          background: var(--bg-primary);
          border-radius: var(--radius-xl) var(--radius-xl) 0 0;
          margin-top: -16px;
          position: relative;
        }

        .vp-info h2 {
          font-size: 22px;
          margin-bottom: 4px;
        }

        .vp-instructor {
          font-size: 13px;
          color: var(--accent-sage);
          font-weight: 500;
          margin-bottom: 12px;
        }

        .vp-desc {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
        }
      `})]})}const Iv=[{id:1,user:"Ananya R.",msg:"Namaste everyone! 🙏",time:"2m ago"},{id:2,user:"Priya S.",msg:"Let's begin with some deep breaths",time:"1m ago",isInstructor:!0},{id:3,user:"Kavita M.",msg:"So excited for today's session!",time:"1m ago"},{id:4,user:"Arjun D.",msg:"First time here, loving the energy ❤️",time:"45s ago"},{id:5,user:"Priya S.",msg:"Welcome Arjun! Let's flow together 🧘‍♀️",time:"30s ago",isInstructor:!0}],Pv=[{emoji:"❤️",icon:$1},{emoji:"🔥",icon:K1},{emoji:"🙏",icon:null},{emoji:"👏",icon:null}];function ey(){const c=rt(),[o,d]=j.useState(Iv),[r,h]=j.useState(""),[m,x]=j.useState([]),[z,v]=j.useState(142),[p,N]=j.useState(0),[E,B]=j.useState(!0),X=j.useRef(null);j.useEffect(()=>{const U=setInterval(()=>N(H=>H+1),1e3);return()=>clearInterval(U)},[]),j.useEffect(()=>{const U=setInterval(()=>{v(H=>H+Math.floor(Math.random()*5)-2)},5e3);return()=>clearInterval(U)},[]),j.useEffect(()=>{X.current&&(X.current.scrollTop=X.current.scrollHeight)},[o]);const k=U=>{const H=Math.floor(U/60).toString().padStart(2,"0"),V=(U%60).toString().padStart(2,"0");return`${H}:${V}`},L=U=>{const H=Date.now()+Math.random(),V=20+Math.random()*60;x(ie=>[...ie,{id:H,emoji:U,left:V}]),setTimeout(()=>{x(ie=>ie.filter(re=>re.id!==H))},2e3)},q=()=>{r.trim()&&(d(U=>[...U,{id:Date.now(),user:"You",msg:r,time:"now"}]),h(""))};return u.jsxs("div",{className:"live-session-page",children:[u.jsxs("div",{className:"live-video-bg",children:[u.jsx("div",{className:"live-video-gradient"}),u.jsxs("div",{className:"live-top-bar",children:[u.jsx("button",{className:"live-back-btn",onClick:()=>c(-1),children:u.jsx(Ul,{size:20,color:"white"})}),u.jsxs("div",{className:"live-info-pills",children:[u.jsxs("div",{className:"live-badge-pill",children:[u.jsx("span",{className:"live-dot-anim"}),"LIVE"]}),u.jsxs("div",{className:"viewer-pill",children:[u.jsx(vu,{size:13})," ",z]}),u.jsx("div",{className:"timer-pill",children:k(p)})]}),u.jsx("button",{className:"live-minimize-btn",onClick:()=>B(!E),children:E?u.jsx(ov,{size:18,color:"white"}):u.jsx(nh,{size:18,color:"white"})})]}),u.jsxs("div",{className:"live-instructor-bar",children:[u.jsx("div",{className:"live-inst-avatar",children:"🧘‍♀️"}),u.jsxs("div",{className:"live-inst-info",children:[u.jsx("h4",{children:"Priya Sharma"}),u.jsx("p",{children:"Live Session · Creator"})]}),u.jsx("button",{className:"follow-btn",children:"Follow"})]}),m.map(U=>u.jsx("div",{className:"floating-emoji",style:{left:`${U.left}%`},children:U.emoji},U.id))]}),u.jsxs("div",{className:`live-bottom-section ${E?"":"collapsed"}`,children:[E&&u.jsx("div",{className:"live-chat",ref:X,children:o.map(U=>u.jsxs("div",{className:`chat-msg ${U.isInstructor?"instructor":""}`,children:[u.jsx("span",{className:"chat-user",children:U.user}),u.jsx("span",{className:"chat-text",children:U.msg})]},U.id))}),u.jsx("div",{className:"reactions-bar",children:Pv.map((U,H)=>u.jsx("button",{className:"reaction-btn",onClick:()=>L(U.emoji),children:U.emoji},H))}),u.jsxs("div",{className:"chat-input-bar",children:[u.jsx("input",{type:"text",placeholder:"Say something...",value:r,onChange:U=>h(U.target.value),onKeyDown:U=>U.key==="Enter"&&q()}),u.jsx("button",{className:"send-btn",onClick:q,children:u.jsx(Sv,{size:18,color:"white"})})]})]}),u.jsx("style",{children:`
        .live-session-page {
          min-height: 100vh;
          background: #0a0a0f;
          position: relative;
          display: flex;
          flex-direction: column;
        }

        /* Live Video Background */
        .live-video-bg {
          flex: 1;
          background: var(--bg-live);
          position: relative;
          display: flex;
          flex-direction: column;
          min-height: 55vh;
        }

        .live-video-bg::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background:
            radial-gradient(circle at 30% 40%, rgba(139,168,136,0.15) 0%, transparent 50%),
            radial-gradient(circle at 70% 60%, rgba(198,139,89,0.1) 0%, transparent 50%);
          animation: breathe 6s ease-in-out infinite;
        }

        .live-video-gradient {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 200px;
          background: linear-gradient(transparent, rgba(10, 10, 15, 0.9));
          z-index: 1;
        }

        /* Top Bar */
        .live-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px;
          padding-top: calc(var(--safe-area-top) + 16px);
          z-index: 10;
        }

        .live-back-btn, .live-minimize-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .live-info-pills {
          display: flex;
          gap: 8px;
        }

        .live-badge-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: rgba(231, 76, 60, 0.85);
          border-radius: var(--radius-full);
          color: white;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .live-dot-anim {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: white;
          animation: livePulse 1.5s infinite;
        }

        .viewer-pill, .timer-pill {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 6px 12px;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          border-radius: var(--radius-full);
          color: white;
          font-size: 12px;
          font-weight: 500;
        }

        /* Instructor Bar */
        .live-instructor-bar {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 16px;
          margin-top: auto;
          margin-bottom: 16px;
          z-index: 10;
        }

        .live-inst-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          border: 2px solid rgba(255,255,255,0.2);
        }

        .live-inst-info h4 {
          color: white;
          font-size: 14px;
          font-weight: 600;
        }

        .live-inst-info p {
          color: rgba(255,255,255,0.6);
          font-size: 12px;
        }

        .follow-btn {
          margin-left: auto;
          padding: 8px 18px;
          background: rgba(139,168,136,0.8);
          border-radius: var(--radius-full);
          color: white;
          font-size: 12px;
          font-weight: 600;
        }

        /* Floating Emojis */
        .floating-emoji {
          position: absolute;
          bottom: 120px;
          font-size: 28px;
          animation: floatUp 2s ease forwards;
          z-index: 20;
          pointer-events: none;
        }

        /* Bottom Section */
        .live-bottom-section {
          background: rgba(10, 10, 15, 0.95);
          backdrop-filter: blur(20px);
          padding: 12px 16px;
          padding-bottom: calc(var(--safe-area-bottom) + 12px);
          border-radius: var(--radius-xl) var(--radius-xl) 0 0;
          z-index: 10;
          transition: all 0.3s ease;
        }

        .live-bottom-section.collapsed {
          border-radius: 0;
        }

        /* Chat */
        .live-chat {
          max-height: 180px;
          overflow-y: auto;
          margin-bottom: 12px;
          scrollbar-width: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .live-chat::-webkit-scrollbar { display: none; }

        .chat-msg {
          padding: 8px 12px;
          background: rgba(255,255,255,0.05);
          border-radius: var(--radius-md);
          animation: fadeIn 0.3s ease;
        }

        .chat-msg.instructor {
          background: rgba(139,168,136,0.15);
          border-left: 3px solid var(--accent-sage);
        }

        .chat-user {
          font-size: 12px;
          font-weight: 600;
          color: var(--accent-sage);
          margin-right: 8px;
        }

        .chat-msg.instructor .chat-user {
          color: var(--accent-gold);
        }

        .chat-text {
          font-size: 13px;
          color: rgba(255,255,255,0.85);
        }

        /* Reactions */
        .reactions-bar {
          display: flex;
          gap: 10px;
          margin-bottom: 10px;
          justify-content: center;
        }

        .reaction-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          transition: all 0.2s ease;
          border: 1px solid rgba(255,255,255,0.06);
        }

        .reaction-btn:active {
          transform: scale(1.2);
          background: rgba(255,255,255,0.15);
        }

        /* Chat Input */
        .chat-input-bar {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .chat-input-bar input {
          flex: 1;
          padding: 12px 16px;
          background: rgba(255,255,255,0.08);
          border-radius: var(--radius-full);
          color: white;
          font-size: 14px;
          border: 1px solid rgba(255,255,255,0.06);
        }

        .chat-input-bar input::placeholder {
          color: rgba(255,255,255,0.3);
        }

        .send-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--accent-sage);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(139,168,136,0.3);
        }

        .send-btn:active {
          transform: scale(0.95);
        }
      `})]})}const Vs=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],ty=[17,18,19,20,21,22,23],Zs=[1,4],ay={1:[{id:1,title:"HIIT Burn Challenge",instructor:"Ankit Verma",time:"7:00 AM",duration:"45 min",category:"Fitness",free:!0},{id:2,title:"Guitar for Beginners",instructor:"Rohan Mehta",time:"5:00 PM",duration:"60 min",category:"Music",free:!1},{id:3,title:"5-Min Healthy Meals",instructor:"Chef Ananya",time:"8:00 PM",duration:"50 min",category:"Cooking",free:!1}],4:[{id:4,title:"Morning Meditation",instructor:"Kavya Nair",time:"6:30 AM",duration:"30 min",category:"Wellness",free:!0},{id:5,title:"Social Media Marketing",instructor:"Vikram Shah",time:"4:00 PM",duration:"50 min",category:"Business",free:!1},{id:6,title:"Sketch & Illustrate",instructor:"Sanya Kapoor",time:"7:00 PM",duration:"45 min",category:"Art",free:!1}]};function ly(){const[c,o]=j.useState(1),[d,r]=j.useState({}),h=rt(),m=ay[c]||[],x=Zs.includes(c),z=v=>{r(p=>({...p,[v]:!p[v]}))};return u.jsxs("div",{className:"page schedule-page",children:[u.jsxs("div",{className:"page-header",children:[u.jsx("h1",{children:"Live Schedule"}),u.jsx("p",{className:"text-secondary",children:"Live sessions every Tuesday & Friday"})]}),u.jsxs("div",{className:"page-content",children:[u.jsxs("div",{className:"week-calendar glass-card",children:[u.jsxs("div",{className:"week-header",children:[u.jsx(ar,{size:16,color:"var(--accent-sage)"}),u.jsx("span",{children:"This Week"})]}),u.jsx("div",{className:"week-days",children:Vs.map((v,p)=>u.jsxs("button",{className:`day-btn ${c===p?"selected":""} ${Zs.includes(p)?"has-live":""}`,onClick:()=>o(p),children:[u.jsx("span",{className:"day-name",children:v}),u.jsx("span",{className:"day-date",children:ty[p]}),Zs.includes(p)&&u.jsx("span",{className:"day-live-dot"})]},p))})]}),x?u.jsxs("div",{className:"schedule-sessions",children:[u.jsxs("div",{className:"schedule-section-title",children:[u.jsx(uh,{size:16,color:"var(--accent-sage)"}),u.jsxs("span",{children:[Vs[c],"'s Live Sessions"]})]}),m.map((v,p)=>u.jsxs("div",{className:"schedule-card glass-card animate-fade-in-up",style:{animationDelay:`${p*.1}s`},children:[u.jsx("div",{className:"sched-left",children:u.jsxs("div",{className:"sched-time-block",children:[u.jsx("span",{className:"sched-time",children:v.time}),u.jsx("span",{className:"sched-duration",children:v.duration})]})}),u.jsxs("div",{className:"sched-info",children:[u.jsx("h3",{children:v.title}),u.jsxs("p",{children:[v.instructor," · ",v.category]})]}),u.jsxs("div",{className:"sched-right",children:[u.jsx("span",{className:`badge ${v.free?"badge-free":"badge-paid"}`,children:v.free?"FREE":"$5"}),u.jsx("button",{className:`reminder-btn ${d[v.id]?"active":""}`,onClick:()=>z(v.id),children:d[v.id]?u.jsx(th,{size:16,fill:"var(--accent-sage)"}):u.jsx(M1,{size:16})})]})]},v.id)),u.jsxs("div",{className:"schedule-cta glass-card",onClick:()=>h("/pricing"),children:[u.jsxs("div",{children:[u.jsx("h3",{children:"Unlock All Sessions"}),u.jsx("p",{children:"Subscribe for $49/month"})]}),u.jsx(qn,{size:20,color:"var(--accent-sage)"})]})]}):u.jsxs("div",{className:"no-live-day",children:[u.jsx("div",{className:"no-live-icon",children:"🧘"}),u.jsx("h3",{children:"Rest Day"}),u.jsxs("p",{children:["No live sessions on ",Vs[c],". Live sessions are every ",u.jsx("strong",{children:"Tuesday"})," and ",u.jsx("strong",{children:"Friday"}),"."]}),u.jsx("p",{className:"no-live-hint",children:"Use today for personal practice!"})]})]}),u.jsx("style",{children:`
        .schedule-page .page-header h1 {
          font-size: 26px;
        }

        /* Week Calendar */
        .week-calendar {
          padding: 16px;
          margin-bottom: 24px;
        }

        .week-header {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 14px;
          color: var(--text-secondary);
        }

        .week-days {
          display: flex;
          justify-content: space-between;
        }

        .day-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          padding: 10px 8px;
          border-radius: var(--radius-md);
          transition: all 0.3s ease;
          position: relative;
          min-width: 44px;
        }

        .day-btn.selected {
          background: var(--accent-sage);
          color: white;
        }

        .day-btn.selected .day-name,
        .day-btn.selected .day-date {
          color: white;
        }

        .day-name {
          font-size: 10px;
          color: var(--text-tertiary);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .day-date {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .day-live-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #e74c3c;
          position: absolute;
          bottom: 4px;
        }

        .day-btn.selected .day-live-dot {
          background: white;
        }

        /* Schedule Cards */
        .schedule-section-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 14px;
        }

        .schedule-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px;
          margin-bottom: 10px;
          opacity: 0;
        }

        .sched-time-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 60px;
        }

        .sched-time {
          font-size: 14px;
          font-weight: 600;
          color: var(--accent-sage);
        }

        .sched-duration {
          font-size: 11px;
          color: var(--text-tertiary);
        }

        .sched-info {
          flex: 1;
        }

        .sched-info h3 {
          font-size: 14px;
          font-family: var(--font-body);
          font-weight: 600;
          margin-bottom: 2px;
        }

        .sched-info p {
          font-size: 12px;
          color: var(--text-secondary);
        }

        .sched-right {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .reminder-btn {
          color: var(--text-tertiary);
          transition: all 0.3s ease;
        }

        .reminder-btn.active {
          color: var(--accent-sage);
        }

        /* CTA */
        .schedule-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px;
          margin-top: 20px;
          cursor: pointer;
          background: linear-gradient(135deg, rgba(139,168,136,0.08), rgba(212,168,83,0.06)) !important;
        }

        .schedule-cta h3 {
          font-size: 16px;
          font-family: var(--font-body);
          font-weight: 600;
          margin-bottom: 2px;
        }

        .schedule-cta p {
          font-size: 13px;
          color: var(--accent-sage);
          font-weight: 500;
        }

        /* No Live */
        .no-live-day {
          text-align: center;
          padding: 48px 20px;
        }

        .no-live-icon {
          font-size: 56px;
          margin-bottom: 16px;
          animation: breathe 3s ease-in-out infinite;
        }

        .no-live-day h3 {
          font-size: 20px;
          margin-bottom: 8px;
        }

        .no-live-day p {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .no-live-hint {
          margin-top: 12px;
          color: var(--accent-sage) !important;
          font-weight: 500;
        }

        .schedule-sessions {
          margin-top: 0;
        }
      `})]})}const ny=[{id:"free",name:"Free Trial",price:"$0",period:"First session",description:"Try your first live session absolutely free",icon:gu,color:"#8BA888",features:["1 free live session","Access to intro videos","Browse all categories","Chat during live session"],buttonText:"Start Free",popular:!1},{id:"session",name:"Per Session",price:"$5",period:"per live session",description:"Pay as you go — attend sessions that interest you",icon:Qv,color:"#C68B59",features:["Access any single live session","Full live interaction (chat, reactions)","Session replay for 48 hours","All intro videos included"],buttonText:"Buy Session",popular:!1},{id:"monthly",name:"Monthly",price:"$49",period:"/month",description:"Unlimited access to all live sessions",icon:du,color:"#D4A853",features:["Unlimited live sessions","All creator categories","Priority chat with instructors","Full replay library access","Exclusive members-only sessions","Cancel anytime"],buttonText:"Subscribe Now",popular:!0}];function iy(){const[c,o]=j.useState(null),[d,r]=j.useState(!1),h=rt(),m=v=>{if(o(v),v.id==="free"){h("/live-session");return}x(v)},x=v=>{const p=document.createElement("script");p.src="https://checkout.razorpay.com/v1/checkout.js",p.onload=()=>z(v),p.onerror=()=>{r(!0)},document.body.appendChild(p)},z=v=>{const N={key:"rzp_test_PLACEHOLDER",amount:(v.id==="session"?500:4900)*100,currency:"INR",name:"Revoshalaa",description:`${v.name} — ${v.description}`,image:"",handler:function(E){r(!0)},prefill:{name:"",email:"",contact:""},theme:{color:"#8BA888"}};try{new window.Razorpay(N).open()}catch{r(!0)}};return u.jsxs("div",{className:"page pricing-page",children:[u.jsxs("div",{className:"page-header",children:[u.jsx("h1",{children:"Choose Your Path"}),u.jsx("p",{className:"text-secondary",children:"Start learning from the best."})]}),u.jsxs("div",{className:"page-content",children:[ny.map((v,p)=>{const N=v.icon;return u.jsxs("div",{className:`pricing-card glass-card animate-fade-in-up ${v.popular?"popular":""}`,style:{animationDelay:`${p*.12}s`},children:[v.popular&&u.jsxs("div",{className:"popular-badge",children:[u.jsx(du,{size:12})," BEST VALUE"]}),u.jsxs("div",{className:"pricing-card-header",children:[u.jsx("div",{className:"pricing-icon",style:{background:`${v.color}18`},children:u.jsx(N,{size:24,color:v.color})}),u.jsxs("div",{children:[u.jsx("h3",{children:v.name}),u.jsx("p",{className:"pricing-desc",children:v.description})]})]}),u.jsxs("div",{className:"pricing-price",children:[u.jsx("span",{className:"price-amount",children:v.price}),u.jsx("span",{className:"price-period",children:v.period})]}),u.jsx("div",{className:"pricing-features",children:v.features.map((E,B)=>u.jsxs("div",{className:"pricing-feature",children:[u.jsx(kn,{size:16,color:v.color}),u.jsx("span",{children:E})]},B))}),u.jsxs("button",{className:v.popular?"btn-gold":"btn-primary",style:{width:"100%"},onClick:()=>m(v),children:[v.buttonText," ",u.jsx($s,{size:16})]})]},v.id)}),u.jsxs("div",{className:"trust-section",children:[u.jsxs("div",{className:"trust-item",children:[u.jsx(Cv,{size:18,color:"var(--accent-sage)"}),u.jsx("span",{children:"Secure payments via Razorpay"})]}),u.jsxs("div",{className:"trust-item",children:[u.jsx(gu,{size:18,color:"var(--accent-gold)"}),u.jsx("span",{children:"Cancel subscription anytime"})]})]})]}),d&&u.jsx("div",{className:"modal-overlay",onClick:()=>r(!1),children:u.jsx("div",{className:"modal-content",onClick:v=>v.stopPropagation(),children:u.jsxs("div",{className:"success-modal",children:[u.jsx("div",{className:"success-check",children:u.jsx(kn,{size:36,color:"white"})}),u.jsx("h2",{children:"Payment Successful!"}),u.jsxs("p",{children:["You now have access to ",c?.name," plan."]}),u.jsx("p",{className:"success-detail",children:c?.id==="session"?"Your session pass is now active.":"Your monthly subscription is active."}),u.jsxs("button",{className:"btn-primary",style:{width:"100%",marginTop:20},onClick:()=>{r(!1),h("/schedule")},children:["Start Learning ",u.jsx($s,{size:16})]})]})})}),u.jsx("style",{children:`
        .pricing-page .page-header {
          text-align: center;
        }

        .pricing-page .page-header h1 {
          font-size: 26px;
        }

        .pricing-card {
          padding: 22px;
          margin-bottom: 16px;
          opacity: 0;
          position: relative;
          overflow: hidden;
        }

        .pricing-card.popular {
          border: 2px solid var(--accent-gold);
          background: linear-gradient(135deg, rgba(212,168,83,0.04), rgba(198,139,89,0.04)) !important;
        }

        .popular-badge {
          position: absolute;
          top: 14px;
          right: 14px;
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          background: linear-gradient(135deg, var(--accent-gold), var(--accent-terracotta));
          border-radius: var(--radius-full);
          color: white;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .pricing-card-header {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 18px;
        }

        .pricing-icon {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .pricing-card-header h3 {
          font-size: 18px;
          font-family: var(--font-display);
          margin-bottom: 2px;
        }

        .pricing-desc {
          font-size: 12px;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .pricing-price {
          display: flex;
          align-items: baseline;
          gap: 6px;
          margin-bottom: 18px;
        }

        .price-amount {
          font-family: var(--font-display);
          font-size: 36px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .price-period {
          font-size: 14px;
          color: var(--text-secondary);
        }

        .pricing-features {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 22px;
        }

        .pricing-feature {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: var(--text-secondary);
        }

        /* Trust */
        .trust-section {
          text-align: center;
          padding: 24px 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: center;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--text-secondary);
        }

        /* Success Modal */
        .success-modal {
          text-align: center;
          padding: 20px 0;
        }

        .success-check {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent-sage), var(--accent-sage-dark));
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          animation: scaleIn 0.5s ease;
        }

        .success-modal h2 {
          font-size: 22px;
          margin-bottom: 8px;
        }

        .success-modal p {
          font-size: 14px;
          color: var(--text-secondary);
        }

        .success-detail {
          margin-top: 6px;
          font-size: 13px !important;
          color: var(--accent-sage) !important;
          font-weight: 500;
        }
      `})]})}function uy(){const c=rt(),{user:o,logout:d}=ql(),[r,h]=j.useState(!0),m=()=>{d(),c("/login")},x=[{icon:du,label:"My Subscription",desc:"Monthly — Active",action:()=>c("/pricing"),color:"#D4A853"},{icon:ar,label:"My Sessions",desc:"12 sessions attended",action:()=>c("/schedule"),color:"#8BA888"},{icon:ah,label:"Payment History",desc:"View transactions",action:()=>{},color:"#C68B59"},{icon:gu,label:"Rate Instructors",desc:"Share your feedback",action:()=>{},color:"#9B8EC4"}];return u.jsxs("div",{className:"page profile-page",children:[u.jsxs("div",{className:"page-header",style:{textAlign:"center"},children:[u.jsx("div",{className:"profile-avatar",children:u.jsx(nr,{size:36,color:"var(--accent-sage)"})}),u.jsx("h1",{style:{fontSize:22,marginTop:12},children:o?.name||"Guest"}),u.jsx("p",{className:"text-secondary",style:{fontSize:13},children:"Member since Feb 2026"})]}),u.jsxs("div",{className:"page-content",children:[u.jsxs("div",{className:"subscription-card glass-card",children:[u.jsxs("div",{className:"sub-card-left",children:[u.jsx(du,{size:22,color:"#D4A853"}),u.jsxs("div",{children:[u.jsx("h3",{children:"Monthly Plan"}),u.jsx("p",{children:"Renews Mar 18, 2026"})]})]}),u.jsx("span",{className:"badge badge-free",style:{background:"rgba(212,168,83,0.15)",color:"#D4A853"},children:"Active"})]}),u.jsxs("div",{className:"profile-stats",children:[u.jsxs("div",{className:"stat-item glass-card",children:[u.jsx("span",{className:"stat-value",children:"12"}),u.jsx("span",{className:"stat-label",children:"Sessions"})]}),u.jsxs("div",{className:"stat-item glass-card",children:[u.jsx("span",{className:"stat-value",children:"8h"}),u.jsx("span",{className:"stat-label",children:"Practice"})]}),u.jsxs("div",{className:"stat-item glass-card",children:[u.jsx("span",{className:"stat-value",children:"5"}),u.jsx("span",{className:"stat-label",children:"Streak 🔥"})]})]}),u.jsx("div",{className:"profile-menu",children:x.map((z,v)=>{const p=z.icon;return u.jsxs("div",{className:"profile-menu-item glass-card",onClick:z.action,children:[u.jsx("div",{className:"menu-icon",style:{background:`${z.color}15`},children:u.jsx(p,{size:20,color:z.color})}),u.jsxs("div",{className:"menu-info",children:[u.jsx("h4",{children:z.label}),u.jsx("p",{children:z.desc})]}),u.jsx(qn,{size:18,color:"var(--text-tertiary)"})]},v)})}),u.jsxs("div",{className:"profile-menu-item glass-card",style:{marginTop:16},children:[u.jsx("div",{className:"menu-icon",style:{background:"rgba(139,168,136,0.1)"},children:u.jsx(th,{size:20,color:"var(--accent-sage)"})}),u.jsxs("div",{className:"menu-info",style:{flex:1},children:[u.jsx("h4",{children:"Notifications"}),u.jsx("p",{children:"Live session reminders"})]}),u.jsxs("label",{className:"toggle-switch",children:[u.jsx("input",{type:"checkbox",checked:r,onChange:()=>h(!r)}),u.jsx("span",{className:"toggle-slider"})]})]}),u.jsxs("div",{className:"profile-footer",children:[u.jsxs("button",{className:"btn-secondary",style:{gap:6},children:[u.jsx(zv,{size:16})," Settings"]}),u.jsxs("button",{className:"btn-secondary",style:{gap:6,color:"#C4857A"},onClick:m,children:[u.jsx(lv,{size:16})," Sign Out"]})]})]}),u.jsx("style",{children:`
        .profile-page .page-header {
          padding-bottom: 20px;
        }

        .profile-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(139,168,136,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          border: 2px solid var(--accent-sage-light);
        }

        /* Subscription Card */
        .subscription-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px;
          background: linear-gradient(135deg, rgba(212,168,83,0.06), rgba(198,139,89,0.04)) !important;
          border: 1px solid rgba(212,168,83,0.2) !important;
        }

        .sub-card-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .sub-card-left h3 {
          font-size: 15px;
          font-family: var(--font-body);
          font-weight: 600;
          margin-bottom: 1px;
        }

        .sub-card-left p {
          font-size: 12px;
          color: var(--text-secondary);
        }

        /* Stats */
        .profile-stats {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 10px;
          margin-top: 18px;
        }

        .stat-item {
          text-align: center;
          padding: 16px 10px;
        }

        .stat-value {
          display: block;
          font-size: 22px;
          font-weight: 700;
          color: var(--accent-sage);
          font-family: var(--font-display);
        }

        .stat-label {
          font-size: 11px;
          color: var(--text-secondary);
          margin-top: 2px;
        }

        /* Menu */
        .profile-menu {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 22px;
        }

        .profile-menu-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px;
          cursor: pointer;
        }

        .menu-icon {
          width: 42px;
          height: 42px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .menu-info {
          flex: 1;
        }

        .menu-info h4 {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 1px;
        }

        .menu-info p {
          font-size: 12px;
          color: var(--text-secondary);
        }

        /* Toggle */
        .toggle-switch {
          position: relative;
          width: 44px;
          height: 24px;
          cursor: pointer;
        }

        .toggle-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .toggle-slider {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: var(--bg-secondary);
          border-radius: 24px;
          transition: all 0.3s ease;
        }

        .toggle-slider::before {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: white;
          top: 2px;
          left: 2px;
          transition: all 0.3s ease;
          box-shadow: 0 1px 4px rgba(0,0,0,0.1);
        }

        .toggle-switch input:checked + .toggle-slider {
          background: var(--accent-sage);
        }

        .toggle-switch input:checked + .toggle-slider::before {
          transform: translateX(20px);
        }

        /* Footer */
        .profile-footer {
          display: flex;
          gap: 12px;
          margin-top: 28px;
          padding-bottom: 20px;
        }

        .profile-footer .btn-secondary {
          flex: 1;
        }
      `})]})}function cy(){const c=rt(),{login:o}=ql(),[d,r]=j.useState({identifier:"",password:"",otp:""}),[h,m]=j.useState("email"),[x,z]=j.useState(1),[v,p]=j.useState(!0),[N,E]=j.useState(!1),B=()=>{E(!0),setTimeout(()=>{E(!1),z(2),alert(`OTP sent to ${d.identifier}: 1234`)},1500)},X=k=>{k.preventDefault(),E(!0),setTimeout(()=>{o("customer",{identifier:d.identifier||"guest"}),E(!1),c("/home")},1500)};return u.jsxs("div",{className:"page login-page",children:[u.jsxs("div",{className:"page-content",children:[u.jsxs("div",{className:"login-header",children:[u.jsx("div",{className:"login-logo animate-fade-in-up",children:u.jsxs("svg",{viewBox:"0 0 80 80",width:"60",height:"60",fill:"none",children:[u.jsx("path",{d:"M40 8C40 8 25 25 25 40C25 55 40 65 40 65C40 65 55 55 55 40C55 25 40 8 40 8Z",fill:"white",stroke:"#8BA888",strokeWidth:"1.5"}),u.jsx("path",{d:"M40 15C40 15 18 30 15 45C12 60 40 70 40 70C40 70 68 60 65 45C62 30 40 15 40 15Z",fill:"white",stroke:"#8BA888",strokeWidth:"1"}),u.jsx("circle",{cx:"40",cy:"42",r:"4",fill:"#8BA888"})]})}),u.jsx("h1",{className:"animate-fade-in-up",style:{animationDelay:"0.1s"},children:v?"Welcome Back":"Join Revoshalaa"}),u.jsx("p",{className:"subtitle animate-fade-in-up",style:{animationDelay:"0.2s"},children:"Your Creator Store"})]}),u.jsxs("div",{className:"login-form-container glass-card animate-fade-in-up",style:{animationDelay:"0.3s"},children:[u.jsxs("div",{className:"login-method-toggle",children:[u.jsx("button",{className:h==="email"?"active":"",onClick:()=>{m("email"),z(1)},children:"Email"}),u.jsx("button",{className:h==="mobile"?"active":"",onClick:()=>{m("mobile"),z(1)},children:"Mobile"})]}),u.jsxs("form",{onSubmit:x===1&&h==="mobile"?k=>{k.preventDefault(),B()}:X,children:[x===1&&u.jsxs("div",{className:"input-group",children:[h==="email"?u.jsx(lh,{size:18,className:"input-icon"}):u.jsx(ih,{size:18,className:"input-icon"}),u.jsx("input",{type:h==="email"?"email":"tel",placeholder:h==="email"?"Email Address":"Mobile Number",value:d.identifier,onChange:k=>r({...d,identifier:k.target.value}),required:!0})]}),x===2&&u.jsxs("div",{className:"input-group animate-fade-in",children:[h==="email"?u.jsx(tv,{size:18,className:"input-icon"}):u.jsx(lr,{size:18,className:"input-icon"}),u.jsx("input",{type:h==="email"?"password":"text",placeholder:h==="email"?"Password":"Enter OTP",value:h==="email"?d.password:d.otp,onChange:k=>r({...d,[h==="email"?"password":"otp"]:k.target.value}),required:!0})]}),u.jsx("button",{type:"submit",className:"btn-primary w-full",disabled:N,children:N?"Processing...":u.jsxs(u.Fragment,{children:[x===1&&h==="mobile"?"Send OTP":v?"Login":"Create Account",u.jsx($s,{size:18})]})})]}),h==="email"&&u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"divider",children:u.jsx("span",{children:"or continue with"})}),u.jsxs("div",{className:"social-buttons",children:[u.jsx("button",{className:"social-btn",onClick:()=>{const k=prompt("Enter your Google email:");k&&(o("customer",{identifier:k}),c("/home"))},children:"Google"}),u.jsx("button",{className:"social-btn",onClick:()=>{const k=prompt("Enter your Apple ID email:");k&&(o("customer",{identifier:k}),c("/home"))},children:"Apple"})]})]})]}),u.jsxs("div",{className:"login-footer animate-fade-in-up",style:{animationDelay:"0.4s"},children:[u.jsxs("p",{onClick:()=>p(!v),children:[v?"New here? ":"Already a member? ",u.jsx("span",{className:"link-text",children:v?"Create Account":"Login"})]}),u.jsxs("div",{className:"tutor-link",onClick:()=>c("/login/tutor"),children:["Are you a tutor? ",u.jsx("span",{className:"link-text",children:"Login here"})]})]})]}),u.jsx("style",{children:`
        .login-page {
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 100vh;
          background: linear-gradient(135deg, #FAF7F2 0%, #F0EBE0 100%);
          padding-bottom: var(--safe-area-bottom);
        }

        .login-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .login-logo {
          display: flex;
          justify-content: center;
          margin-bottom: 16px;
        }

        .login-header h1 {
          font-size: 28px;
          color: var(--text-primary);
          margin-bottom: 8px;
          font-family: var(--font-display);
        }

        .subtitle {
          color: var(--text-secondary);
          font-size: 15px;
        }

        .login-form-container {
          padding: 24px;
          margin-bottom: 24px;
        }

        .login-method-toggle {
          display: flex;
          background: rgba(0,0,0,0.05);
          padding: 4px;
          border-radius: var(--radius-full);
          margin-bottom: 20px;
        }

        .login-method-toggle button {
          flex: 1;
          padding: 10px;
          font-size: 13px;
          font-weight: 500;
          color: var(--text-secondary);
          border-radius: var(--radius-full);
          transition: all 0.3s ease;
          border: none;
          background: transparent;
          cursor: pointer;
        }

        .login-method-toggle button.active {
          background: white;
          color: var(--accent-sage);
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          font-weight: 600;
        }

        .input-group {
          position: relative;
          margin-bottom: 16px;
        }

        .input-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-tertiary);
        }

        .input-group input {
          width: 100%;
          padding: 14px 16px 14px 44px;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.5);
          border: 1px solid var(--border-light);
          font-size: 15px;
          color: var(--text-primary);
          transition: all 0.3s ease;
          outline: none;
          box-sizing: border-box;
        }

        .input-group input:focus {
          background: white;
          border-color: var(--accent-sage);
          box-shadow: 0 0 0 3px rgba(139, 168, 136, 0.1);
        }

        .input-group input::placeholder {
          color: var(--text-tertiary);
        }

        .w-full {
          width: 100%;
        }

        .divider {
          display: flex;
          align-items: center;
          color: var(--text-tertiary);
          font-size: 12px;
          margin: 24px 0;
        }

        .divider::before, .divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--border-medium);
        }

        .divider span {
          padding: 0 12px;
        }

        .social-buttons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .social-btn {
          padding: 12px;
          border-radius: var(--radius-full);
          background: white;
          border: 1px solid var(--border-light);
          font-size: 14px;
          font-weight: 500;
          color: var(--text-secondary);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .social-btn:hover {
          background: var(--bg-secondary);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.06);
        }

        .login-footer {
          text-align: center;
          font-size: 14px;
          color: var(--text-secondary);
        }

        .login-footer p {
          cursor: pointer;
        }

        .link-text {
          color: var(--accent-sage);
          font-weight: 600;
          cursor: pointer;
        }

        .tutor-link {
          margin-top: 24px;
          font-size: 13px;
          padding-top: 16px;
          border-top: 1px solid var(--border-light);
          cursor: pointer;
        }

        .animate-fade-in {
          animation: fadeIn 0.4s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `})]})}function sy(){const c=rt(),{login:o,categories:d,addCategory:r}=ql(),[h,m]=j.useState("credentials"),[x,z]=j.useState("email"),[v,p]=j.useState(!1),[N,E]=j.useState({firstName:"",lastName:"",identifier:"",password:"",otp:""}),[B,X]=j.useState(""),[k,L]=j.useState(""),[q,U]=j.useState(!1),[H,V]=j.useState(""),ie=J=>{J.preventDefault(),N.firstName.trim()&&(x==="mobile"?(p(!0),setTimeout(()=>{p(!1),m("otp"),alert(`OTP sent to ${N.identifier}: 5678`)},1200)):m("category"))},re=J=>{J.preventDefault(),m("category")},ze=()=>{if(!k.trim())return;const J=r(k.trim());X(J.id),L(""),U(!1)},ee=()=>{B&&(p(!0),setTimeout(()=>{o("tutor",{firstName:N.firstName,lastName:N.lastName,identifier:N.identifier,category:B,specialty:H}),p(!1),c("/tutor-broadcast")},1e3))},Ne=d.find(J=>J.id===B)?.name||"";return u.jsxs("div",{className:"page tutor-login-page",children:[u.jsxs("div",{className:"page-content",children:[u.jsxs("div",{className:"tutor-header",children:[u.jsx("div",{className:"tutor-icon animate-scale-in",children:u.jsx(ir,{size:32,color:"white"})}),u.jsx("h1",{className:"animate-fade-in-up",style:{animationDelay:"0.1s"},children:h==="credentials"||h==="otp"?"Tutor Access":h==="category"?"Choose Your Category":"Your Specialty"}),u.jsx("p",{className:"subtitle animate-fade-in-up",style:{animationDelay:"0.2s"},children:h==="credentials"||h==="otp"?"Create your profile & start teaching":h==="category"?"What will you teach on Revoshalaa?":`Tell us more about your ${Ne} expertise`}),u.jsxs("div",{className:"progress-dots",children:[u.jsx("span",{className:`dot ${["credentials","otp","category","specialty"].includes(h)?"active":""}`}),u.jsx("span",{className:`dot ${["category","specialty"].includes(h)?"active":""}`}),u.jsx("span",{className:`dot ${h==="specialty"?"active":""}`})]})]}),h==="credentials"&&u.jsxs("div",{className:"login-form-container glass-card animate-fade-in-up",style:{animationDelay:"0.3s"},children:[u.jsxs("div",{className:"login-method-toggle",children:[u.jsx("button",{className:x==="email"?"active":"",onClick:()=>z("email"),children:"Email"}),u.jsx("button",{className:x==="mobile"?"active":"",onClick:()=>z("mobile"),children:"Mobile"})]}),u.jsxs("form",{onSubmit:ie,children:[u.jsxs("div",{className:"name-row",children:[u.jsxs("div",{className:"input-group",children:[u.jsx(nr,{size:18,className:"input-icon"}),u.jsx("input",{type:"text",placeholder:"First Name",value:N.firstName,onChange:J=>E({...N,firstName:J.target.value}),required:!0})]}),u.jsx("div",{className:"input-group",children:u.jsx("input",{type:"text",placeholder:"Last Name",value:N.lastName,onChange:J=>E({...N,lastName:J.target.value}),style:{paddingLeft:16}})})]}),u.jsxs("div",{className:"input-group",children:[x==="email"?u.jsx(lh,{size:18,className:"input-icon"}):u.jsx(ih,{size:18,className:"input-icon"}),u.jsx("input",{type:x==="email"?"email":"tel",placeholder:x==="email"?"Email Address":"Mobile Number",value:N.identifier,onChange:J=>E({...N,identifier:J.target.value}),required:!0})]}),u.jsx("button",{type:"submit",className:"btn-gold w-full",disabled:v,children:v?"Sending OTP...":u.jsxs(u.Fragment,{children:["Continue ",u.jsx(qn,{size:18})]})})]})]}),h==="otp"&&u.jsxs("div",{className:"login-form-container glass-card animate-fade-in",children:[u.jsxs("form",{onSubmit:re,children:[u.jsxs("div",{className:"input-group",children:[u.jsx(lr,{size:18,className:"input-icon"}),u.jsx("input",{type:"text",placeholder:"Enter OTP",value:N.otp,onChange:J=>E({...N,otp:J.target.value}),required:!0})]}),u.jsxs("button",{type:"submit",className:"btn-gold w-full",children:["Verify ",u.jsx(kn,{size:18})]})]}),u.jsxs("button",{className:"back-step",onClick:()=>m("credentials"),children:[u.jsx(Ul,{size:14})," Back"]})]}),h==="category"&&u.jsxs("div",{className:"category-phase animate-fade-in",children:[u.jsxs("div",{className:"category-grid",children:[d.map(J=>u.jsxs("div",{className:`cat-option ${B===J.id?"selected":""}`,onClick:()=>X(J.id),children:[u.jsx("span",{className:"cat-emoji-big",children:J.emoji}),u.jsx("span",{className:"cat-label",children:J.name}),B===J.id&&u.jsx(kn,{size:16,className:"cat-check"})]},J.id)),q?u.jsxs("div",{className:"cat-option add-new-input",children:[u.jsx("input",{type:"text",placeholder:"Category name",value:k,onChange:J=>L(J.target.value),onKeyDown:J=>J.key==="Enter"&&ze(),autoFocus:!0}),u.jsx("button",{className:"add-btn",onClick:ze,children:u.jsx(kn,{size:16})})]}):u.jsxs("div",{className:"cat-option add-new",onClick:()=>U(!0),children:[u.jsx(gv,{size:24,color:"#8BA888"}),u.jsx("span",{className:"cat-label",children:"Add New"})]})]}),B&&u.jsxs("button",{className:"btn-gold w-full",style:{marginTop:20},onClick:()=>m("specialty"),children:["Continue ",u.jsx(qn,{size:18})]}),u.jsxs("button",{className:"back-step",onClick:()=>m("credentials"),children:[u.jsx(Ul,{size:14})," Back to login"]})]}),h==="specialty"&&u.jsxs("div",{className:"specialty-phase animate-fade-in",children:[u.jsxs("div",{className:"login-form-container glass-card",children:[u.jsxs("div",{className:"selected-cat-badge",children:[u.jsx("span",{children:d.find(J=>J.id===B)?.emoji}),u.jsx("span",{children:Ne})]}),u.jsxs("p",{className:"specialty-prompt",children:["What's your specialty within ",Ne,"?"]}),u.jsxs("p",{className:"specialty-hint",children:[B==="fitness"&&"e.g. HIIT, Yoga, Strength Training, Calisthenics...",B==="music"&&"e.g. Guitar, Piano, Vocals, Music Production...",B==="cooking"&&"e.g. Indian Cuisine, Baking, Healthy Meals...",B==="art"&&"e.g. Illustration, UI/UX, Watercolor, Digital Art...",B==="business"&&"e.g. Marketing, Freelancing, Finance, Startups...",B==="wellness"&&"e.g. Meditation, Breathwork, Mindfulness, Reiki...",!["fitness","music","cooking","art","business","wellness"].includes(B)&&"Describe what you teach in detail"]}),u.jsx("div",{className:"input-group",children:u.jsx("input",{type:"text",placeholder:"Your specialty (e.g. Power Yoga & HIIT)",value:H,onChange:J=>V(J.target.value),style:{paddingLeft:16}})}),u.jsx("button",{className:"btn-gold w-full",disabled:v,onClick:ee,children:v?"Setting up...":u.jsxs(u.Fragment,{children:["Start Teaching ",u.jsx(P1,{size:18})]})})]}),u.jsxs("button",{className:"back-step",onClick:()=>m("category"),children:[u.jsx(Ul,{size:14})," Change category"]})]}),h==="credentials"&&u.jsx("div",{className:"tutor-footer animate-fade-in-up",style:{animationDelay:"0.4s"},children:u.jsx("div",{className:"back-link",onClick:()=>c("/login"),children:"Back to Role Selection"})})]}),u.jsx("style",{children:`
        .tutor-login-page {
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 100vh;
          background: linear-gradient(165deg, #F5F0EB 0%, #EDE7DF 40%, #E8E0D8 100%);
          color: var(--text-primary);
          padding-bottom: var(--safe-area-bottom);
        }

        .tutor-login-page .login-method-toggle {
          display: flex;
          background: rgba(139,168,136,0.08);
          padding: 4px;
          border-radius: var(--radius-full);
          margin-bottom: 20px;
        }

        .tutor-login-page .login-method-toggle button {
          flex: 1;
          padding: 10px;
          font-size: 13px;
          font-weight: 500;
          color: var(--text-secondary);
          border-radius: var(--radius-full);
          transition: all 0.3s ease;
          border: none;
          background: transparent;
          cursor: pointer;
        }

        .tutor-login-page .login-method-toggle button.active {
          background: white;
          color: #7A9B76;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
          font-weight: 600;
        }

        .tutor-header {
          text-align: center;
          margin-bottom: 24px;
        }

        .tutor-icon {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, #B8D4B4 0%, #A3C19E 100%);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          box-shadow: 0 8px 24px rgba(139,168,136,0.2);
        }

        .tutor-header h1 {
          font-size: 24px;
          color: #3D5A3A;
          margin-bottom: 6px;
          font-family: var(--font-display);
        }

        .tutor-login-page .subtitle {
          color: #8B9B87;
          font-size: 14px;
        }

        .progress-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 16px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(139,168,136,0.2);
          transition: all 0.3s ease;
        }

        .dot.active {
          background: #8BA888;
          width: 24px;
          border-radius: 4px;
        }

        .tutor-login-page .login-form-container {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          padding: 24px;
          margin-bottom: 16px;
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.04);
        }

        .name-row {
          display: flex;
          gap: 10px;
        }

        .name-row .input-group {
          flex: 1;
        }

        .tutor-login-page .input-group {
          position: relative;
          margin-bottom: 14px;
        }

        .tutor-login-page .input-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #A3B8A0;
          z-index: 1;
        }

        .tutor-login-page .input-group input {
          width: 100%;
          padding: 14px 16px 14px 44px;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.5);
          border: 1px solid rgba(139,168,136,0.15);
          color: var(--text-primary);
          font-size: 15px;
          transition: all 0.3s ease;
          outline: none;
          box-sizing: border-box;
        }

        .tutor-login-page .input-group input::placeholder {
          color: #B0BBA0;
        }

        .tutor-login-page .input-group input:focus {
          background: white;
          border-color: #A3C19E;
          box-shadow: 0 0 0 3px rgba(139,168,136,0.1);
        }

        .w-full { width: 100%; }

        .btn-gold {
          background: linear-gradient(135deg, #A3C19E 0%, #8BA888 100%);
          color: white;
          font-weight: 600;
          font-size: 15px;
          padding: 14px 24px;
          border-radius: var(--radius-full);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(139,168,136,0.25);
        }

        .btn-gold:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(139,168,136,0.3);
        }

        .btn-gold:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* Category Grid */
        .category-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .cat-option {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 18px 10px;
          border-radius: 16px;
          background: rgba(255,255,255,0.6);
          backdrop-filter: blur(8px);
          border: 2px solid rgba(255,255,255,0.8);
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .cat-option:active { transform: scale(0.96); }

        .cat-option.selected {
          border-color: #8BA888;
          background: rgba(139,168,136,0.08);
          box-shadow: 0 4px 16px rgba(139,168,136,0.15);
        }

        .cat-check {
          position: absolute;
          top: 8px;
          right: 8px;
          color: #8BA888;
        }

        .cat-emoji-big { font-size: 28px; }
        .cat-label {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-primary);
          text-align: center;
        }

        .cat-option.add-new {
          border-style: dashed;
          border-color: rgba(139,168,136,0.3);
          background: transparent;
        }

        .cat-option.add-new-input {
          padding: 12px;
          grid-column: span 2;
          flex-direction: row;
          gap: 8px;
        }

        .add-new-input input {
          flex: 1;
          border: 1px solid rgba(139,168,136,0.2);
          border-radius: 12px;
          padding: 10px 14px;
          font-size: 14px;
          outline: none;
          background: rgba(255,255,255,0.5);
          color: var(--text-primary);
        }

        .add-new-input input:focus {
          border-color: #8BA888;
          background: white;
        }

        .add-btn {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: #8BA888;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          flex-shrink: 0;
        }

        /* Specialty */
        .selected-cat-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: var(--radius-full);
          background: rgba(139,168,136,0.08);
          font-size: 14px;
          font-weight: 600;
          color: #5A7A56;
          margin-bottom: 16px;
        }

        .specialty-prompt {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 6px;
        }

        .specialty-hint {
          font-size: 13px;
          color: #8B9B87;
          margin-bottom: 16px;
          line-height: 1.5;
        }

        .specialty-phase .input-group input {
          padding-left: 16px !important;
        }

        /* Back step */
        .back-step {
          display: flex;
          align-items: center;
          gap: 4px;
          color: #B0BBA0;
          font-size: 13px;
          margin-top: 20px;
          cursor: pointer;
          border: none;
          background: none;
          margin-left: auto;
          margin-right: auto;
          transition: color 0.3s;
        }

        .back-step:hover { color: #7A9B76; }

        /* Footer */
        .tutor-footer {
          text-align: center;
          font-size: 14px;
          color: #8B9B87;
        }

        .back-link {
          margin-top: 24px;
          font-size: 13px;
          color: #B0BBA0;
          cursor: pointer;
          transition: color 0.3s;
        }

        .back-link:hover { color: #7A9B76; }

        .animate-fade-in {
          animation: fadeIn 0.4s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `})]})}function ry(){const c=rt();return u.jsxs("div",{className:"page role-page",children:[u.jsxs("div",{className:"role-content",children:[u.jsx("div",{className:"role-logo animate-fade-in-up",children:u.jsxs("svg",{viewBox:"0 0 80 80",width:"70",height:"70",fill:"none",children:[u.jsx("path",{d:"M40 8C40 8 25 25 25 40C25 55 40 65 40 65C40 65 55 55 55 40C55 25 40 8 40 8Z",fill:"white",stroke:"#8BA888",strokeWidth:"1.5"}),u.jsx("path",{d:"M40 15C40 15 18 30 15 45C12 60 40 70 40 70C40 70 68 60 65 45C62 30 40 15 40 15Z",fill:"white",stroke:"#8BA888",strokeWidth:"1"}),u.jsx("path",{d:"M40 20C40 20 30 35 30 45C30 55 40 60 40 60C40 60 50 55 50 45C50 35 40 20 40 20Z",fill:"rgba(139,168,136,0.4)",stroke:"#8BA888",strokeWidth:"1"}),u.jsx("circle",{cx:"40",cy:"42",r:"4",fill:"#8BA888"})]})}),u.jsx("h1",{className:"role-title animate-fade-in-up",style:{animationDelay:"0.1s"},children:"Revoshalaa"}),u.jsx("p",{className:"role-subtitle animate-fade-in-up",style:{animationDelay:"0.2s"},children:"Your Creator Store"}),u.jsx("h2",{className:"role-question animate-fade-in-up",style:{animationDelay:"0.3s"},children:"How would you like to join?"}),u.jsxs("div",{className:"role-cards animate-fade-in-up",style:{animationDelay:"0.4s"},children:[u.jsxs("div",{className:"role-card member-card",onClick:()=>c("/login/customer"),children:[u.jsx("div",{className:"role-card-icon",children:u.jsx(vu,{size:28,color:"var(--accent-sage)"})}),u.jsx("h3",{children:"I'm a Member"}),u.jsx("p",{children:"Join live sessions, courses & communities from top creators"})]}),u.jsxs("div",{className:"role-card tutor-card",onClick:()=>c("/login/tutor"),children:[u.jsx("div",{className:"role-card-icon tutor-icon-bg",children:u.jsx(ir,{size:28,color:"#D4A853"})}),u.jsx("h3",{children:"I'm a Tutor"}),u.jsx("p",{children:"Go live, teach your class, and grow your community"})]})]})]}),u.jsx("style",{children:`
        .role-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(165deg, #FAF7F2 0%, #F0EBE0 30%, #E8E2D5 100%);
          position: relative;
          overflow: hidden;
        }

        .role-page::before {
          content: '';
          position: absolute;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(139,168,136,0.1) 0%, transparent 70%);
          top: 20%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: breathe 5s ease-in-out infinite;
        }

        .role-content {
          text-align: center;
          padding: 24px 20px;
          z-index: 1;
          width: 100%;
          max-width: 400px;
        }

        .role-logo {
          margin-bottom: 16px;
        }

        .role-title {
          font-family: var(--font-display);
          font-size: 32px;
          color: var(--text-primary);
          letter-spacing: 1.5px;
          margin-bottom: 6px;
        }

        .role-subtitle {
          color: var(--text-secondary);
          font-size: 14px;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 300;
        }

        .role-question {
          font-family: var(--font-display);
          font-size: 20px;
          color: var(--text-primary);
          margin: 40px 0 24px;
          font-weight: 500;
        }

        .role-cards {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .role-card {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.8);
          border-radius: 20px;
          padding: 24px 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
        }

        .role-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
        }

        .role-card:active {
          transform: scale(0.98);
        }

        .role-card-icon {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: rgba(139,168,136,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .tutor-icon-bg {
          background: rgba(212,168,83,0.1) !important;
        }

        .role-card h3 {
          font-size: 17px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .role-card p {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .member-card {
          border-left: 3px solid var(--accent-sage);
        }

        .tutor-card {
          border-left: 3px solid #D4A853;
        }
      `})]})}function oy(){const c=rt(),{user:o,categories:d,startLiveSession:r,endLiveSession:h}=ql(),[m,x]=j.useState(!1),[z,v]=j.useState({title:"",description:"",category:o?.category||"fitness",duration:"45",pricing:"free",price:"",tags:""}),[p,N]=j.useState(!0),[E,B]=j.useState(!0),[X,k]=j.useState(0),[L,q]=j.useState([]),[U,H]=j.useState(null),[V,ie]=j.useState(0),re=j.useRef(null);j.useEffect(()=>{o?.category&&v(F=>({...F,category:o.category}))},[o]),j.useEffect(()=>{async function F(){try{const we=await navigator.mediaDevices.getUserMedia({video:!0,audio:!0});re.current&&(re.current.srcObject=we)}catch(we){console.error("Error accessing camera:",we)}}return E&&F(),()=>{re.current?.srcObject&&re.current.srcObject.getTracks().forEach(we=>we.stop())}},[E]),j.useEffect(()=>{let F,we,Fe;return m&&(F=setInterval(()=>{k(Ge=>Ge+Math.floor(Math.random()*3))},3e3),we=setInterval(()=>{const Ge=["Amazing session! 🔥","Love the energy!","So helpful, thanks!","Hello from Mumbai!","❤️","Great tips!","🙌"],w=["Aarav","Priya","Rahul","Sneha","Vikram","Meera"];q(Y=>[...Y,{user:w[Math.floor(Math.random()*w.length)],text:Ge[Math.floor(Math.random()*Ge.length)]}])},4e3),Fe=setInterval(()=>{ie(Ge=>Ge+1)},1e3)),()=>{clearInterval(F),clearInterval(we),clearInterval(Fe)}},[m]);const ze=F=>{const we=Math.floor(F/60),Fe=F%60;return`${we.toString().padStart(2,"0")}:${Fe.toString().padStart(2,"0")}`},ee=()=>{if(!z.title)return alert("Please enter a session title");const F=r(z);H(F.id),x(!0),ie(0)},Ne=()=>{confirm("Are you sure you want to end the live session?")&&(h(U),x(!1),c("/home"))},J=(F,we)=>{v(Fe=>({...Fe,[F]:we}))},Ie=d?.find(F=>F.id===z.category)?.name||z.category,ot=d?.find(F=>F.id===z.category)?.emoji||"📌";return!o||o.type!=="tutor"?u.jsxs("div",{className:"unauthorized",children:[u.jsx("div",{className:"unauth-icon",children:"🎓"}),u.jsx("h2",{children:"Tutor Access Only"}),u.jsx("p",{children:"You need a tutor account to go live."}),u.jsx("button",{className:"btn-sage",onClick:()=>c("/login/tutor"),children:"Login as Tutor"})]}):u.jsxs("div",{className:"broadcast-page",children:[u.jsx("video",{ref:re,autoPlay:!0,playsInline:!0,muted:!0,className:"camera-feed"}),u.jsxs("div",{className:"broadcast-top",children:[m?u.jsxs("div",{className:"live-badge-row",children:[u.jsx("div",{className:"live-badge pulse-live",children:"🔴 LIVE"}),u.jsx("div",{className:"live-timer",children:ze(V)})]}):u.jsx("div",{className:"preview-badge",children:"📹 PREVIEW"}),u.jsxs("div",{className:"top-actions",children:[m&&u.jsxs("div",{className:"viewer-count",children:[u.jsx(vu,{size:14})," ",X]}),u.jsx("button",{className:"icon-btn",onClick:()=>c("/home"),children:u.jsx(Gv,{size:22,color:"white"})})]})]}),!m&&u.jsxs("div",{className:"pre-live-panel",children:[u.jsxs("div",{className:"tutor-profile-card",children:[u.jsx("div",{className:"tp-avatar",children:o.avatar||"🎓"}),u.jsxs("div",{className:"tp-info",children:[u.jsx("h3",{children:o.name}),u.jsxs("p",{children:[o.specialty?`${o.specialty}`:Ie," Creator"]})]}),u.jsx("div",{className:"tp-badge",children:ot})]}),u.jsxs("div",{className:"form-section",children:[u.jsxs("label",{className:"form-label",children:[u.jsx(V1,{size:14})," Session Title *"]}),u.jsx("input",{type:"text",placeholder:"e.g. Morning Power Flow, Guitar Basics",value:z.title,onChange:F=>J("title",F.target.value),className:"form-input"})]}),u.jsxs("div",{className:"form-section",children:[u.jsxs("label",{className:"form-label",children:[u.jsx(lr,{size:14})," Description"]}),u.jsx("textarea",{placeholder:"What will you cover in this session?",value:z.description,onChange:F=>J("description",F.target.value),className:"form-textarea",rows:2})]}),u.jsxs("div",{className:"form-row",children:[u.jsxs("div",{className:"form-section flex-1",children:[u.jsxs("label",{className:"form-label",children:[u.jsx(M0,{size:14})," Category"]}),u.jsx("select",{value:z.category,onChange:F=>J("category",F.target.value),className:"form-select",children:(d||[]).map(F=>u.jsxs("option",{value:F.id,children:[F.emoji," ",F.name]},F.id))})]}),u.jsxs("div",{className:"form-section flex-1",children:[u.jsxs("label",{className:"form-label",children:[u.jsx(Hl,{size:14})," Duration"]}),u.jsxs("select",{value:z.duration,onChange:F=>J("duration",F.target.value),className:"form-select",children:[u.jsx("option",{value:"15",children:"15 min"}),u.jsx("option",{value:"30",children:"30 min"}),u.jsx("option",{value:"45",children:"45 min"}),u.jsx("option",{value:"60",children:"60 min"}),u.jsx("option",{value:"90",children:"90 min"})]})]})]}),u.jsxs("div",{className:"form-section",children:[u.jsxs("label",{className:"form-label",children:[u.jsx(X1,{size:14})," Pricing"]}),u.jsxs("div",{className:"pricing-toggle",children:[u.jsx("button",{className:`pt-btn ${z.pricing==="free"?"active":""}`,onClick:()=>J("pricing","free"),children:"🆓 Free"}),u.jsx("button",{className:`pt-btn ${z.pricing==="paid"?"active":""}`,onClick:()=>J("pricing","paid"),children:"💰 Paid"})]}),z.pricing==="paid"&&u.jsx("input",{type:"number",placeholder:"Price (₹)",value:z.price,onChange:F=>J("price",F.target.value),className:"form-input price-input"})]}),u.jsxs("div",{className:"form-section",children:[u.jsxs("label",{className:"form-label",children:[u.jsx(M0,{size:14})," Tags"]}),u.jsx("input",{type:"text",placeholder:"e.g. beginner, cardio, guitar (comma separated)",value:z.tags,onChange:F=>J("tags",F.target.value),className:"form-input"})]}),u.jsxs("div",{className:"media-controls",children:[u.jsxs("button",{className:`media-btn ${p?"on":"off"}`,onClick:()=>N(!p),children:[p?u.jsx(C0,{size:20}):u.jsx(A0,{size:20}),u.jsx("span",{children:p?"Mic On":"Mic Off"})]}),u.jsxs("button",{className:`media-btn ${E?"on":"off"}`,onClick:()=>B(!E),children:[E?u.jsx(O1,{size:20}):u.jsx(D1,{size:20}),u.jsx("span",{children:E?"Camera On":"Camera Off"})]})]}),u.jsxs("button",{className:"go-live-btn",onClick:ee,children:[u.jsx("div",{className:"ring-pulse"}),u.jsx(ir,{size:20})," GO LIVE"]})]}),m&&u.jsxs("div",{className:"live-overlay",children:[u.jsxs("div",{className:"live-session-info",children:[u.jsx("h3",{children:z.title}),u.jsxs("p",{children:[ot," ",Ie," · ",z.duration," min · ",z.pricing==="free"?"FREE":`₹${z.price}`]})]}),u.jsx("div",{className:"live-chat-area",children:L.map((F,we)=>u.jsxs("div",{className:"chat-msg animate-fade-in-up",children:[u.jsx("span",{className:"chat-user",children:F.user})," ",F.text]},we))}),u.jsxs("div",{className:"live-bottom-bar",children:[u.jsx("input",{type:"text",placeholder:"Reply to chat...",className:"tutor-chat-input"}),u.jsxs("div",{className:"live-actions",children:[u.jsx("button",{className:"action-btn",onClick:()=>N(!p),children:p?u.jsx(C0,{size:18}):u.jsx(A0,{size:18})}),u.jsx("button",{className:"action-btn",children:u.jsx(Ev,{size:18})}),u.jsx("button",{className:"end-btn",onClick:Ne,children:"END"})]})]})]}),u.jsx("style",{children:`
        .broadcast-page {
          height: 100vh;
          background: #0a0a0a;
          position: relative;
          color: white;
          overflow: hidden;
        }

        .camera-feed {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scaleX(-1);
        }

        /* Top Bar */
        .broadcast-top {
          position: absolute;
          top: calc(var(--safe-area-top, 0px) + 12px);
          left: 16px; right: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 10;
        }

        .live-badge-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .live-badge {
          background: #e74c3c;
          padding: 4px 12px;
          border-radius: 6px;
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 0.5px;
        }

        .pulse-live {
          animation: pulseBadge 2s ease infinite;
        }

        @keyframes pulseBadge {
          0%, 100% { box-shadow: 0 0 0 0 rgba(231,76,60,0.6); }
          50% { box-shadow: 0 0 0 8px rgba(231,76,60,0); }
        }

        .live-timer {
          background: rgba(0,0,0,0.5);
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 600;
          font-variant-numeric: tabular-nums;
        }

        .preview-badge {
          background: rgba(0,0,0,0.5);
          padding: 4px 14px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 13px;
        }

        .top-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .viewer-count {
          background: rgba(0,0,0,0.5);
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 13px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .icon-btn {
          width: 36px; height: 36px;
          border-radius: 50%;
          background: rgba(0,0,0,0.3);
          display: flex; align-items: center; justify-content: center;
          border: none; cursor: pointer;
        }

        /* ===== PRE-LIVE PANEL ===== */
        .pre-live-panel {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          max-height: 75vh;
          overflow-y: auto;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(24px);
          padding: 20px 20px calc(var(--safe-area-bottom, 0px) + 20px);
          border-radius: 24px 24px 0 0;
          color: var(--text-primary, #1a1a2e);
          box-shadow: 0 -4px 40px rgba(0,0,0,0.15);
        }

        /* Tutor Profile Card */
        .tutor-profile-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(139,168,136,0.08), rgba(139,168,136,0.03));
          border: 1px solid rgba(139,168,136,0.15);
          margin-bottom: 18px;
        }

        .tp-avatar {
          width: 44px; height: 44px;
          border-radius: 14px;
          background: linear-gradient(135deg, #B8D4B4, #A3C19E);
          display: flex; align-items: center; justify-content: center;
          font-size: 22px;
        }

        .tp-info {
          flex: 1;
        }

        .tp-info h3 {
          font-size: 15px;
          font-weight: 700;
          color: #2a3f28;
          margin-bottom: 2px;
        }

        .tp-info p {
          font-size: 12px;
          color: #7A9B76;
          font-weight: 500;
        }

        .tp-badge {
          font-size: 24px;
        }

        /* Form Styles */
        .form-section {
          margin-bottom: 14px;
        }

        .form-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          color: #6B7280;
          margin-bottom: 6px;
          text-transform: uppercase;
          letter-spacing: 0.6px;
        }

        .form-input, .form-select, .form-textarea {
          width: 100%;
          padding: 12px 14px;
          border-radius: 12px;
          background: rgba(249,250,251,1);
          border: 1px solid rgba(139,168,136,0.15);
          color: #1a1a2e;
          font-size: 14px;
          outline: none;
          transition: all 0.3s ease;
          box-sizing: border-box;
          font-family: inherit;
        }

        .form-input:focus, .form-select:focus, .form-textarea:focus {
          border-color: #8BA888;
          background: white;
          box-shadow: 0 0 0 3px rgba(139,168,136,0.08);
        }

        .form-input::placeholder, .form-textarea::placeholder {
          color: #B0BBA0;
        }

        .form-textarea {
          resize: none;
          line-height: 1.5;
        }

        .form-row {
          display: flex;
          gap: 10px;
        }

        .flex-1 { flex: 1; }

        /* Pricing Toggle */
        .pricing-toggle {
          display: flex;
          gap: 8px;
          margin-bottom: 8px;
        }

        .pt-btn {
          flex: 1;
          padding: 10px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 600;
          border: 1.5px solid rgba(139,168,136,0.15);
          background: rgba(249,250,251,1);
          color: #6B7280;
          cursor: pointer;
          transition: all 0.3s;
        }

        .pt-btn.active {
          border-color: #8BA888;
          background: rgba(139,168,136,0.08);
          color: #3D5A3A;
        }

        .price-input {
          margin-top: 8px;
        }

        /* Media Controls */
        .media-controls {
          display: flex;
          gap: 10px;
          margin: 16px 0 12px;
        }

        .media-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
        }

        .media-btn.on {
          background: rgba(139,168,136,0.1);
          color: #3D5A3A;
        }

        .media-btn.off {
          background: rgba(231,76,60,0.06);
          color: #e74c3c;
        }

        /* GO LIVE Button */
        .go-live-btn {
          width: 100%;
          background: linear-gradient(135deg, #8BA888 0%, #6D8A6A 100%);
          color: white;
          font-weight: 700;
          font-size: 16px;
          padding: 16px;
          border-radius: 16px;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(109,138,106,0.35);
          transition: all 0.3s;
        }

        .go-live-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 24px rgba(109,138,106,0.4);
        }

        .ring-pulse {
          position: absolute;
          inset: 0;
          border-radius: 16px;
          animation: ringPulse 2s ease-out infinite;
        }

        @keyframes ringPulse {
          0% { box-shadow: 0 0 0 0 rgba(139,168,136,0.4); }
          100% { box-shadow: 0 0 0 16px rgba(139,168,136,0); }
        }

        /* ===== LIVE OVERLAY ===== */
        .live-overlay {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 16px;
          padding-bottom: calc(var(--safe-area-bottom, 0px) + 16px);
          background: linear-gradient(to top, rgba(0,0,0,0.85) 30%, transparent);
        }

        .live-session-info {
          margin-bottom: 12px;
        }

        .live-session-info h3 {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 2px;
        }

        .live-session-info p {
          font-size: 12px;
          color: rgba(255,255,255,0.7);
        }

        .live-chat-area {
          height: 180px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 6px;
          margin-bottom: 12px;
          mask-image: linear-gradient(to top, black 80%, transparent 100%);
        }

        .chat-msg {
          font-size: 13px;
          text-shadow: 0 1px 2px rgba(0,0,0,0.8);
          line-height: 1.4;
        }

        .chat-user {
          font-weight: 700;
          color: #8BA888;
          margin-right: 6px;
        }

        .live-bottom-bar {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .tutor-chat-input {
          flex: 1;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.1);
          color: white;
          padding: 10px 16px;
          border-radius: 20px;
          font-size: 14px;
          outline: none;
        }

        .live-actions {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .action-btn {
          width: 38px; height: 38px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          color: white;
          border: none; cursor: pointer;
        }

        .end-btn {
          background: #e74c3c;
          color: white;
          font-weight: 700;
          font-size: 12px;
          padding: 0 16px;
          height: 38px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          border: none;
          cursor: pointer;
          letter-spacing: 0.5px;
        }

        /* Unauthorized */
        .unauthorized {
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background: linear-gradient(165deg, #F5F0EB 0%, #EDE7DF 40%, #E8E0D8 100%);
        }

        .unauth-icon { font-size: 48px; }

        .unauthorized h2 {
          font-size: 22px;
          color: #3D5A3A;
        }

        .unauthorized p {
          font-size: 14px;
          color: #8B9B87;
        }

        .btn-sage {
          margin-top: 8px;
          background: linear-gradient(135deg, #A3C19E, #8BA888);
          color: white;
          padding: 12px 32px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 15px;
          border: none;
          cursor: pointer;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.3s ease;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `})]})}const fy=[{path:"/home",label:"Home",icon:W1},{path:"/explore",label:"Explore",icon:L1},{path:"/schedule",label:"Live",icon:uh},{path:"/pricing",label:"Pricing",icon:ah},{path:"/profile",label:"Profile",icon:nr}];function dy(){const c=ca();return u.jsxs("nav",{className:"bottom-nav",children:[fy.map(o=>{const d=c.pathname===o.path||o.path==="/explore"&&c.pathname.startsWith("/category"),r=o.icon;return u.jsxs(I0,{to:o.path,className:`bottom-nav-item ${d?"active":""}`,children:[u.jsxs("div",{className:"nav-icon-wrap",children:[o.path==="/schedule"&&u.jsx("span",{className:"live-dot"}),u.jsx(r,{size:22,strokeWidth:d?2.2:1.8})]}),u.jsx("span",{className:"nav-label",children:o.label})]},o.path)}),u.jsx("style",{children:`
        .bottom-nav {
          position: fixed;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 430px;
          height: var(--bottom-nav-height);
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-top: 1px solid var(--border-light);
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding-bottom: var(--safe-area-bottom);
          z-index: 100;
          box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.03);
        }

        .bottom-nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
          padding: 8px 0;
          color: var(--text-tertiary);
          transition: all 0.3s ease;
          position: relative;
          min-width: 56px;
        }

        .bottom-nav-item.active {
          color: var(--accent-sage);
        }

        .bottom-nav-item.active .nav-icon-wrap {
          transform: translateY(-2px);
        }

        .nav-icon-wrap {
          position: relative;
          transition: transform 0.3s ease;
        }

        .nav-label {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.3px;
        }

        .bottom-nav-item.active .nav-label {
          font-weight: 600;
        }

        .live-dot {
          position: absolute;
          top: -2px;
          right: -4px;
          width: 7px;
          height: 7px;
          background: #e74c3c;
          border-radius: 50%;
          animation: livePulse 2s infinite;
        }
      `})]})}function hy(){const c=ca(),o=["/","/login","/login/customer","/login/tutor","/tutor-broadcast","/live-session","/video-player"].includes(c.pathname);return u.jsxs(u.Fragment,{children:[u.jsxs(qg,{children:[u.jsx(st,{path:"/",element:u.jsx(x1,{})}),u.jsx(st,{path:"/login",element:u.jsx(ry,{})}),u.jsx(st,{path:"/login/customer",element:u.jsx(cy,{})}),u.jsx(st,{path:"/login/tutor",element:u.jsx(sy,{})}),u.jsx(st,{path:"/tutor-broadcast",element:u.jsx(oy,{})}),u.jsx(st,{path:"/home",element:u.jsx(Zv,{})}),u.jsx(st,{path:"/explore",element:u.jsx($v,{})}),u.jsx(st,{path:"/category/:id",element:u.jsx(Fv,{})}),u.jsx(st,{path:"/video-player",element:u.jsx(Wv,{})}),u.jsx(st,{path:"/live-session",element:u.jsx(ey,{})}),u.jsx(st,{path:"/schedule",element:u.jsx(ly,{})}),u.jsx(st,{path:"/pricing",element:u.jsx(iy,{})}),u.jsx(st,{path:"/profile",element:u.jsx(uy,{})})]}),!o&&u.jsx(dy,{})]})}function my(){return u.jsx(o1,{children:u.jsx(Vv,{children:u.jsx(hy,{})})})}Gp.createRoot(document.getElementById("root")).render(u.jsx(Op.StrictMode,{children:u.jsx(my,{})}));
