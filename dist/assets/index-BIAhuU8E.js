(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))o(p);new MutationObserver(p=>{for(const h of p)if(h.type==="childList")for(const y of h.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&o(y)}).observe(document,{childList:!0,subtree:!0});function d(p){const h={};return p.integrity&&(h.integrity=p.integrity),p.referrerPolicy&&(h.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?h.credentials="include":p.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function o(p){if(p.ep)return;p.ep=!0;const h=d(p);fetch(p.href,h)}})();function Op(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Yc={exports:{}},Hn={};var dp;function km(){if(dp)return Hn;dp=1;var r=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function d(o,p,h){var y=null;if(h!==void 0&&(y=""+h),p.key!==void 0&&(y=""+p.key),"key"in p){h={};for(var b in p)b!=="key"&&(h[b]=p[b])}else h=p;return p=h.ref,{$$typeof:r,type:o,key:y,ref:p!==void 0?p:null,props:h}}return Hn.Fragment=u,Hn.jsx=d,Hn.jsxs=d,Hn}var pp;function Um(){return pp||(pp=1,Yc.exports=km()),Yc.exports}var s=Um(),qc={exports:{}},ie={};var hp;function Hm(){if(hp)return ie;hp=1;var r=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),y=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),B=Symbol.iterator;function X(j){return j===null||typeof j!="object"?null:(j=B&&j[B]||j["@@iterator"],typeof j=="function"?j:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,G={};function V(j,O,L){this.props=j,this.context=O,this.refs=G,this.updater=L||q}V.prototype.isReactComponent={},V.prototype.setState=function(j,O){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,O,"setState")},V.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function Y(){}Y.prototype=V.prototype;function U(j,O,L){this.props=j,this.context=O,this.refs=G,this.updater=L||q}var Z=U.prototype=new Y;Z.constructor=U,Q(Z,V.prototype),Z.isPureReactComponent=!0;var K=Array.isArray;function ee(){}var H={H:null,A:null,T:null,S:null},oe=Object.prototype.hasOwnProperty;function I(j,O,L){var F=L.ref;return{$$typeof:r,type:j,key:O,ref:F!==void 0?F:null,props:L}}function le(j,O){return I(j.type,O,j.props)}function Ne(j){return typeof j=="object"&&j!==null&&j.$$typeof===r}function ve(j){var O={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(L){return O[L]})}var Xe=/\/+/g;function Qe(j,O){return typeof j=="object"&&j!==null&&j.key!=null?ve(""+j.key):O.toString(36)}function P(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then(ee,ee):(j.status="pending",j.then(function(O){j.status==="pending"&&(j.status="fulfilled",j.value=O)},function(O){j.status==="pending"&&(j.status="rejected",j.reason=O)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function A(j,O,L,F,se){var fe=typeof j;(fe==="undefined"||fe==="boolean")&&(j=null);var Se=!1;if(j===null)Se=!0;else switch(fe){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(j.$$typeof){case r:case u:Se=!0;break;case z:return Se=j._init,A(Se(j._payload),O,L,F,se)}}if(Se)return se=se(j),Se=F===""?"."+Qe(j,0):F,K(se)?(L="",Se!=null&&(L=Se.replace(Xe,"$&/")+"/"),A(se,O,L,"",function(Vl){return Vl})):se!=null&&(Ne(se)&&(se=le(se,L+(se.key==null||j&&j.key===se.key?"":(""+se.key).replace(Xe,"$&/")+"/")+Se)),O.push(se)),1;Se=0;var at=F===""?".":F+":";if(K(j))for(var ke=0;ke<j.length;ke++)F=j[ke],fe=at+Qe(F,ke),Se+=A(F,O,L,fe,se);else if(ke=X(j),typeof ke=="function")for(j=ke.call(j),ke=0;!(F=j.next()).done;)F=F.value,fe=at+Qe(F,ke++),Se+=A(F,O,L,fe,se);else if(fe==="object"){if(typeof j.then=="function")return A(P(j),O,L,F,se);throw O=String(j),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return Se}function k(j,O,L){if(j==null)return j;var F=[],se=0;return A(j,F,"","",function(fe){return O.call(L,fe,se++)}),F}function J(j){if(j._status===-1){var O=j._result;O=O(),O.then(function(L){(j._status===0||j._status===-1)&&(j._status=1,j._result=L)},function(L){(j._status===0||j._status===-1)&&(j._status=2,j._result=L)}),j._status===-1&&(j._status=0,j._result=O)}if(j._status===1)return j._result.default;throw j._result}var ue=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)},xe={map:k,forEach:function(j,O,L){k(j,function(){O.apply(this,arguments)},L)},count:function(j){var O=0;return k(j,function(){O++}),O},toArray:function(j){return k(j,function(O){return O})||[]},only:function(j){if(!Ne(j))throw Error("React.Children.only expected to receive a single React element child.");return j}};return ie.Activity=E,ie.Children=xe,ie.Component=V,ie.Fragment=d,ie.Profiler=p,ie.PureComponent=U,ie.StrictMode=o,ie.Suspense=g,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,ie.__COMPILER_RUNTIME={__proto__:null,c:function(j){return H.H.useMemoCache(j)}},ie.cache=function(j){return function(){return j.apply(null,arguments)}},ie.cacheSignal=function(){return null},ie.cloneElement=function(j,O,L){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var F=Q({},j.props),se=j.key;if(O!=null)for(fe in O.key!==void 0&&(se=""+O.key),O)!oe.call(O,fe)||fe==="key"||fe==="__self"||fe==="__source"||fe==="ref"&&O.ref===void 0||(F[fe]=O[fe]);var fe=arguments.length-2;if(fe===1)F.children=L;else if(1<fe){for(var Se=Array(fe),at=0;at<fe;at++)Se[at]=arguments[at+2];F.children=Se}return I(j.type,se,F)},ie.createContext=function(j){return j={$$typeof:y,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:h,_context:j},j},ie.createElement=function(j,O,L){var F,se={},fe=null;if(O!=null)for(F in O.key!==void 0&&(fe=""+O.key),O)oe.call(O,F)&&F!=="key"&&F!=="__self"&&F!=="__source"&&(se[F]=O[F]);var Se=arguments.length-2;if(Se===1)se.children=L;else if(1<Se){for(var at=Array(Se),ke=0;ke<Se;ke++)at[ke]=arguments[ke+2];se.children=at}if(j&&j.defaultProps)for(F in Se=j.defaultProps,Se)se[F]===void 0&&(se[F]=Se[F]);return I(j,fe,se)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(j){return{$$typeof:b,render:j}},ie.isValidElement=Ne,ie.lazy=function(j){return{$$typeof:z,_payload:{_status:-1,_result:j},_init:J}},ie.memo=function(j,O){return{$$typeof:m,type:j,compare:O===void 0?null:O}},ie.startTransition=function(j){var O=H.T,L={};H.T=L;try{var F=j(),se=H.S;se!==null&&se(L,F),typeof F=="object"&&F!==null&&typeof F.then=="function"&&F.then(ee,ue)}catch(fe){ue(fe)}finally{O!==null&&L.types!==null&&(O.types=L.types),H.T=O}},ie.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},ie.use=function(j){return H.H.use(j)},ie.useActionState=function(j,O,L){return H.H.useActionState(j,O,L)},ie.useCallback=function(j,O){return H.H.useCallback(j,O)},ie.useContext=function(j){return H.H.useContext(j)},ie.useDebugValue=function(){},ie.useDeferredValue=function(j,O){return H.H.useDeferredValue(j,O)},ie.useEffect=function(j,O){return H.H.useEffect(j,O)},ie.useEffectEvent=function(j){return H.H.useEffectEvent(j)},ie.useId=function(){return H.H.useId()},ie.useImperativeHandle=function(j,O,L){return H.H.useImperativeHandle(j,O,L)},ie.useInsertionEffect=function(j,O){return H.H.useInsertionEffect(j,O)},ie.useLayoutEffect=function(j,O){return H.H.useLayoutEffect(j,O)},ie.useMemo=function(j,O){return H.H.useMemo(j,O)},ie.useOptimistic=function(j,O){return H.H.useOptimistic(j,O)},ie.useReducer=function(j,O,L){return H.H.useReducer(j,O,L)},ie.useRef=function(j){return H.H.useRef(j)},ie.useState=function(j){return H.H.useState(j)},ie.useSyncExternalStore=function(j,O,L){return H.H.useSyncExternalStore(j,O,L)},ie.useTransition=function(){return H.H.useTransition()},ie.version="19.2.4",ie}var mp;function to(){return mp||(mp=1,qc.exports=Hm()),qc.exports}var S=to();const Lm=Op(S);var Gc={exports:{}},Ln={},Xc={exports:{}},Vc={};var gp;function Ym(){return gp||(gp=1,(function(r){function u(A,k){var J=A.length;A.push(k);e:for(;0<J;){var ue=J-1>>>1,xe=A[ue];if(0<p(xe,k))A[ue]=k,A[J]=xe,J=ue;else break e}}function d(A){return A.length===0?null:A[0]}function o(A){if(A.length===0)return null;var k=A[0],J=A.pop();if(J!==k){A[0]=J;e:for(var ue=0,xe=A.length,j=xe>>>1;ue<j;){var O=2*(ue+1)-1,L=A[O],F=O+1,se=A[F];if(0>p(L,J))F<xe&&0>p(se,L)?(A[ue]=se,A[F]=J,ue=F):(A[ue]=L,A[O]=J,ue=O);else if(F<xe&&0>p(se,J))A[ue]=se,A[F]=J,ue=F;else break e}}return k}function p(A,k){var J=A.sortIndex-k.sortIndex;return J!==0?J:A.id-k.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;r.unstable_now=function(){return h.now()}}else{var y=Date,b=y.now();r.unstable_now=function(){return y.now()-b}}var g=[],m=[],z=1,E=null,B=3,X=!1,q=!1,Q=!1,G=!1,V=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function Z(A){for(var k=d(m);k!==null;){if(k.callback===null)o(m);else if(k.startTime<=A)o(m),k.sortIndex=k.expirationTime,u(g,k);else break;k=d(m)}}function K(A){if(Q=!1,Z(A),!q)if(d(g)!==null)q=!0,ee||(ee=!0,ve());else{var k=d(m);k!==null&&P(K,k.startTime-A)}}var ee=!1,H=-1,oe=5,I=-1;function le(){return G?!0:!(r.unstable_now()-I<oe)}function Ne(){if(G=!1,ee){var A=r.unstable_now();I=A;var k=!0;try{e:{q=!1,Q&&(Q=!1,Y(H),H=-1),X=!0;var J=B;try{t:{for(Z(A),E=d(g);E!==null&&!(E.expirationTime>A&&le());){var ue=E.callback;if(typeof ue=="function"){E.callback=null,B=E.priorityLevel;var xe=ue(E.expirationTime<=A);if(A=r.unstable_now(),typeof xe=="function"){E.callback=xe,Z(A),k=!0;break t}E===d(g)&&o(g),Z(A)}else o(g);E=d(g)}if(E!==null)k=!0;else{var j=d(m);j!==null&&P(K,j.startTime-A),k=!1}}break e}finally{E=null,B=J,X=!1}k=void 0}}finally{k?ve():ee=!1}}}var ve;if(typeof U=="function")ve=function(){U(Ne)};else if(typeof MessageChannel<"u"){var Xe=new MessageChannel,Qe=Xe.port2;Xe.port1.onmessage=Ne,ve=function(){Qe.postMessage(null)}}else ve=function(){V(Ne,0)};function P(A,k){H=V(function(){A(r.unstable_now())},k)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(A){A.callback=null},r.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):oe=0<A?Math.floor(1e3/A):5},r.unstable_getCurrentPriorityLevel=function(){return B},r.unstable_next=function(A){switch(B){case 1:case 2:case 3:var k=3;break;default:k=B}var J=B;B=k;try{return A()}finally{B=J}},r.unstable_requestPaint=function(){G=!0},r.unstable_runWithPriority=function(A,k){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var J=B;B=A;try{return k()}finally{B=J}},r.unstable_scheduleCallback=function(A,k,J){var ue=r.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ue+J:ue):J=ue,A){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=J+xe,A={id:z++,callback:k,priorityLevel:A,startTime:J,expirationTime:xe,sortIndex:-1},J>ue?(A.sortIndex=J,u(m,A),d(g)===null&&A===d(m)&&(Q?(Y(H),H=-1):Q=!0,P(K,J-ue))):(A.sortIndex=xe,u(g,A),q||X||(q=!0,ee||(ee=!0,ve()))),A},r.unstable_shouldYield=le,r.unstable_wrapCallback=function(A){var k=B;return function(){var J=B;B=k;try{return A.apply(this,arguments)}finally{B=J}}}})(Vc)),Vc}var vp;function qm(){return vp||(vp=1,Xc.exports=Ym()),Xc.exports}var Qc={exports:{}},Pe={};var xp;function Gm(){if(xp)return Pe;xp=1;var r=to();function u(g){var m="https://react.dev/errors/"+g;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var z=2;z<arguments.length;z++)m+="&args[]="+encodeURIComponent(arguments[z])}return"Minified React error #"+g+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var o={d:{f:d,r:function(){throw Error(u(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},p=Symbol.for("react.portal");function h(g,m,z){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:E==null?null:""+E,children:g,containerInfo:m,implementation:z}}var y=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(g,m){if(g==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Pe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Pe.createPortal=function(g,m){var z=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(u(299));return h(g,m,null,z)},Pe.flushSync=function(g){var m=y.T,z=o.p;try{if(y.T=null,o.p=2,g)return g()}finally{y.T=m,o.p=z,o.d.f()}},Pe.preconnect=function(g,m){typeof g=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,o.d.C(g,m))},Pe.prefetchDNS=function(g){typeof g=="string"&&o.d.D(g)},Pe.preinit=function(g,m){if(typeof g=="string"&&m&&typeof m.as=="string"){var z=m.as,E=b(z,m.crossOrigin),B=typeof m.integrity=="string"?m.integrity:void 0,X=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;z==="style"?o.d.S(g,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:E,integrity:B,fetchPriority:X}):z==="script"&&o.d.X(g,{crossOrigin:E,integrity:B,fetchPriority:X,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Pe.preinitModule=function(g,m){if(typeof g=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var z=b(m.as,m.crossOrigin);o.d.M(g,{crossOrigin:z,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&o.d.M(g)},Pe.preload=function(g,m){if(typeof g=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var z=m.as,E=b(z,m.crossOrigin);o.d.L(g,z,{crossOrigin:E,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Pe.preloadModule=function(g,m){if(typeof g=="string")if(m){var z=b(m.as,m.crossOrigin);o.d.m(g,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:z,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else o.d.m(g)},Pe.requestFormReset=function(g){o.d.r(g)},Pe.unstable_batchedUpdates=function(g,m){return g(m)},Pe.useFormState=function(g,m,z){return y.H.useFormState(g,m,z)},Pe.useFormStatus=function(){return y.H.useHostTransitionStatus()},Pe.version="19.2.4",Pe}var yp;function Xm(){if(yp)return Qc.exports;yp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(u){console.error(u)}}return r(),Qc.exports=Gm(),Qc.exports}var bp;function Vm(){if(bp)return Ln;bp=1;var r=qm(),u=to(),d=Xm();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function y(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(h(e)!==e)throw Error(o(188))}function m(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(o(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return g(n),e;if(i===l)return g(n),t;i=i.sibling}throw Error(o(188))}if(a.return!==l.return)a=n,l=i;else{for(var c=!1,f=n.child;f;){if(f===a){c=!0,a=n,l=i;break}if(f===l){c=!0,l=n,a=i;break}f=f.sibling}if(!c){for(f=i.child;f;){if(f===a){c=!0,a=i,l=n;break}if(f===l){c=!0,l=i,a=n;break}f=f.sibling}if(!c)throw Error(o(189))}}if(a.alternate!==l)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:t}function z(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=z(e),t!==null)return t;e=e.sibling}return null}var E=Object.assign,B=Symbol.for("react.element"),X=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),Q=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),Y=Symbol.for("react.consumer"),U=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),le=Symbol.for("react.memo_cache_sentinel"),Ne=Symbol.iterator;function ve(e){return e===null||typeof e!="object"?null:(e=Ne&&e[Ne]||e["@@iterator"],typeof e=="function"?e:null)}var Xe=Symbol.for("react.client.reference");function Qe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Xe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Q:return"Fragment";case V:return"Profiler";case G:return"StrictMode";case K:return"Suspense";case ee:return"SuspenseList";case I:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case q:return"Portal";case U:return e.displayName||"Context";case Y:return(e._context.displayName||"Context")+".Consumer";case Z:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return t=e.displayName||null,t!==null?t:Qe(e.type)||"Memo";case oe:t=e._payload,e=e._init;try{return Qe(e(t))}catch{}}return null}var P=Array.isArray,A=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},ue=[],xe=-1;function j(e){return{current:e}}function O(e){0>xe||(e.current=ue[xe],ue[xe]=null,xe--)}function L(e,t){xe++,ue[xe]=e.current,e.current=t}var F=j(null),se=j(null),fe=j(null),Se=j(null);function at(e,t){switch(L(fe,t),L(se,e),L(F,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Bd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Bd(t),e=kd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}O(F),L(F,e)}function ke(){O(F),O(se),O(fe)}function Vl(e){e.memoizedState!==null&&L(Se,e);var t=F.current,a=kd(t,e.type);t!==a&&(L(se,e),L(F,a))}function Zn(e){se.current===e&&(O(F),O(se)),Se.current===e&&(O(Se),On._currentValue=J)}var Ss,oo;function Ba(e){if(Ss===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Ss=t&&t[1]||"",oo=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ss+e+oo}var Ns=!1;function zs(e,t){if(!e||Ns)return"";Ns=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(M){var T=M}Reflect.construct(e,[],D)}else{try{D.call()}catch(M){T=M}e.call(D.prototype)}}else{try{throw Error()}catch(M){T=M}(D=e())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(M){if(M&&T&&typeof M.stack=="string")return[M.stack,T.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),c=i[0],f=i[1];if(c&&f){var v=c.split(`
`),w=f.split(`
`);for(n=l=0;l<v.length&&!v[l].includes("DetermineComponentFrameRoot");)l++;for(;n<w.length&&!w[n].includes("DetermineComponentFrameRoot");)n++;if(l===v.length||n===w.length)for(l=v.length-1,n=w.length-1;1<=l&&0<=n&&v[l]!==w[n];)n--;for(;1<=l&&0<=n;l--,n--)if(v[l]!==w[n]){if(l!==1||n!==1)do if(l--,n--,0>n||v[l]!==w[n]){var _=`
`+v[l].replace(" at new "," at ");return e.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",e.displayName)),_}while(1<=l&&0<=n);break}}}finally{Ns=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ba(a):""}function p0(e,t){switch(e.tag){case 26:case 27:case 5:return Ba(e.type);case 16:return Ba("Lazy");case 13:return e.child!==t&&t!==null?Ba("Suspense Fallback"):Ba("Suspense");case 19:return Ba("SuspenseList");case 0:case 15:return zs(e.type,!1);case 11:return zs(e.type.render,!1);case 1:return zs(e.type,!0);case 31:return Ba("Activity");default:return""}}function uo(e){try{var t="",a=null;do t+=p0(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Es=Object.prototype.hasOwnProperty,As=r.unstable_scheduleCallback,Cs=r.unstable_cancelCallback,h0=r.unstable_shouldYield,m0=r.unstable_requestPaint,ft=r.unstable_now,g0=r.unstable_getCurrentPriorityLevel,fo=r.unstable_ImmediatePriority,po=r.unstable_UserBlockingPriority,Kn=r.unstable_NormalPriority,v0=r.unstable_LowPriority,ho=r.unstable_IdlePriority,x0=r.log,y0=r.unstable_setDisableYieldValue,Ql=null,dt=null;function ca(e){if(typeof x0=="function"&&y0(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(Ql,e)}catch{}}var pt=Math.clz32?Math.clz32:S0,b0=Math.log,j0=Math.LN2;function S0(e){return e>>>=0,e===0?32:31-(b0(e)/j0|0)|0}var Jn=256,$n=262144,Fn=4194304;function ka(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Wn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var f=l&134217727;return f!==0?(l=f&~i,l!==0?n=ka(l):(c&=f,c!==0?n=ka(c):a||(a=f&~e,a!==0&&(n=ka(a))))):(f=l&~i,f!==0?n=ka(f):c!==0?n=ka(c):a||(a=l&~e,a!==0&&(n=ka(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Zl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function N0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mo(){var e=Fn;return Fn<<=1,(Fn&62914560)===0&&(Fn=4194304),e}function ws(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Kl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function z0(e,t,a,l,n,i){var c=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var f=e.entanglements,v=e.expirationTimes,w=e.hiddenUpdates;for(a=c&~a;0<a;){var _=31-pt(a),D=1<<_;f[_]=0,v[_]=-1;var T=w[_];if(T!==null)for(w[_]=null,_=0;_<T.length;_++){var M=T[_];M!==null&&(M.lane&=-536870913)}a&=~D}l!==0&&go(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(c&~t))}function go(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-pt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function vo(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-pt(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function xo(e,t){var a=t&-t;return a=(a&42)!==0?1:Ts(a),(a&(e.suspendedLanes|t))!==0?0:a}function Ts(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ms(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function yo(){var e=k.p;return e!==0?e:(e=window.event,e===void 0?32:ip(e.type))}function bo(e,t){var a=k.p;try{return k.p=e,t()}finally{k.p=a}}var oa=Math.random().toString(36).slice(2),Je="__reactFiber$"+oa,nt="__reactProps$"+oa,al="__reactContainer$"+oa,_s="__reactEvents$"+oa,E0="__reactListeners$"+oa,A0="__reactHandles$"+oa,jo="__reactResources$"+oa,Jl="__reactMarker$"+oa;function Rs(e){delete e[Je],delete e[nt],delete e[_s],delete e[E0],delete e[A0]}function ll(e){var t=e[Je];if(t)return t;for(var a=e.parentNode;a;){if(t=a[al]||a[Je]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Xd(e);e!==null;){if(a=e[Je])return a;e=Xd(e)}return t}e=a,a=e.parentNode}return null}function nl(e){if(e=e[Je]||e[al]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function $l(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function il(e){var t=e[jo];return t||(t=e[jo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ze(e){e[Jl]=!0}var So=new Set,No={};function Ua(e,t){sl(e,t),sl(e+"Capture",t)}function sl(e,t){for(No[e]=t,e=0;e<t.length;e++)So.add(t[e])}var C0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),zo={},Eo={};function w0(e){return Es.call(Eo,e)?!0:Es.call(zo,e)?!1:C0.test(e)?Eo[e]=!0:(zo[e]=!0,!1)}function In(e,t,a){if(w0(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Pn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Gt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function jt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ao(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function T0(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(c){a=""+c,i.call(this,c)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ds(e){if(!e._valueTracker){var t=Ao(e)?"checked":"value";e._valueTracker=T0(e,t,""+e[t])}}function Co(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Ao(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function ei(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var M0=/[\n"\\]/g;function St(e){return e.replace(M0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Os(e,t,a,l,n,i,c,f){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+jt(t)):e.value!==""+jt(t)&&(e.value=""+jt(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?Bs(e,c,jt(t)):a!=null?Bs(e,c,jt(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+jt(f):e.removeAttribute("name")}function wo(e,t,a,l,n,i,c,f){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Ds(e);return}a=a!=null?""+jt(a):"",t=t!=null?""+jt(t):a,f||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=f?e.checked:!!l,e.defaultChecked=!!l,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),Ds(e)}function Bs(e,t,a){t==="number"&&ei(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function rl(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+jt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function To(e,t,a){if(t!=null&&(t=""+jt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+jt(a):""}function Mo(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(o(92));if(P(l)){if(1<l.length)throw Error(o(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=jt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Ds(e)}function cl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var _0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _o(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||_0.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Ro(e,t,a){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&_o(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&_o(e,i,t[i])}function ks(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var R0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),D0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ti(e){return D0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Xt(){}var Us=null;function Hs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ol=null,ul=null;function Do(e){var t=nl(e);if(t&&(e=t.stateNode)){var a=e[nt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Os(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+St(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[nt]||null;if(!n)throw Error(o(90));Os(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Co(l)}break e;case"textarea":To(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&rl(e,!!a.multiple,t,!1)}}}var Ls=!1;function Oo(e,t,a){if(Ls)return e(t,a);Ls=!0;try{var l=e(t);return l}finally{if(Ls=!1,(ol!==null||ul!==null)&&(Gi(),ol&&(t=ol,e=ul,ul=ol=null,Do(t),e)))for(t=0;t<e.length;t++)Do(e[t])}}function Fl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[nt]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,t,typeof a));return a}var Vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ys=!1;if(Vt)try{var Wl={};Object.defineProperty(Wl,"passive",{get:function(){Ys=!0}}),window.addEventListener("test",Wl,Wl),window.removeEventListener("test",Wl,Wl)}catch{Ys=!1}var ua=null,qs=null,ai=null;function Bo(){if(ai)return ai;var e,t=qs,a=t.length,l,n="value"in ua?ua.value:ua.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var c=a-e;for(l=1;l<=c&&t[a-l]===n[i-l];l++);return ai=n.slice(e,1<l?1-l:void 0)}function li(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ni(){return!0}function ko(){return!1}function it(e){function t(a,l,n,i,c){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(a=e[f],this[f]=a?a(i):i[f]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ni:ko,this.isPropagationStopped=ko,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ni)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ni)},persist:function(){},isPersistent:ni}),t}var Ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ii=it(Ha),Il=E({},Ha,{view:0,detail:0}),O0=it(Il),Gs,Xs,Pl,si=E({},Il,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pl&&(Pl&&e.type==="mousemove"?(Gs=e.screenX-Pl.screenX,Xs=e.screenY-Pl.screenY):Xs=Gs=0,Pl=e),Gs)},movementY:function(e){return"movementY"in e?e.movementY:Xs}}),Uo=it(si),B0=E({},si,{dataTransfer:0}),k0=it(B0),U0=E({},Il,{relatedTarget:0}),Vs=it(U0),H0=E({},Ha,{animationName:0,elapsedTime:0,pseudoElement:0}),L0=it(H0),Y0=E({},Ha,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),q0=it(Y0),G0=E({},Ha,{data:0}),Ho=it(G0),X0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},V0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Q0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Q0[e])?!!t[e]:!1}function Qs(){return Z0}var K0=E({},Il,{key:function(e){if(e.key){var t=X0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=li(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?V0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qs,charCode:function(e){return e.type==="keypress"?li(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?li(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),J0=it(K0),$0=E({},si,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lo=it($0),F0=E({},Il,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qs}),W0=it(F0),I0=E({},Ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),P0=it(I0),eh=E({},si,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),th=it(eh),ah=E({},Ha,{newState:0,oldState:0}),lh=it(ah),nh=[9,13,27,32],Zs=Vt&&"CompositionEvent"in window,en=null;Vt&&"documentMode"in document&&(en=document.documentMode);var ih=Vt&&"TextEvent"in window&&!en,Yo=Vt&&(!Zs||en&&8<en&&11>=en),qo=" ",Go=!1;function Xo(e,t){switch(e){case"keyup":return nh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fl=!1;function sh(e,t){switch(e){case"compositionend":return Vo(t);case"keypress":return t.which!==32?null:(Go=!0,qo);case"textInput":return e=t.data,e===qo&&Go?null:e;default:return null}}function rh(e,t){if(fl)return e==="compositionend"||!Zs&&Xo(e,t)?(e=Bo(),ai=qs=ua=null,fl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yo&&t.locale!=="ko"?null:t.data;default:return null}}var ch={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ch[e.type]:t==="textarea"}function Zo(e,t,a,l){ol?ul?ul.push(l):ul=[l]:ol=l,t=$i(t,"onChange"),0<t.length&&(a=new ii("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var tn=null,an=null;function oh(e){Td(e,0)}function ri(e){var t=$l(e);if(Co(t))return e}function Ko(e,t){if(e==="change")return t}var Jo=!1;if(Vt){var Ks;if(Vt){var Js="oninput"in document;if(!Js){var $o=document.createElement("div");$o.setAttribute("oninput","return;"),Js=typeof $o.oninput=="function"}Ks=Js}else Ks=!1;Jo=Ks&&(!document.documentMode||9<document.documentMode)}function Fo(){tn&&(tn.detachEvent("onpropertychange",Wo),an=tn=null)}function Wo(e){if(e.propertyName==="value"&&ri(an)){var t=[];Zo(t,an,e,Hs(e)),Oo(oh,t)}}function uh(e,t,a){e==="focusin"?(Fo(),tn=t,an=a,tn.attachEvent("onpropertychange",Wo)):e==="focusout"&&Fo()}function fh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ri(an)}function dh(e,t){if(e==="click")return ri(t)}function ph(e,t){if(e==="input"||e==="change")return ri(t)}function hh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:hh;function ln(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Es.call(t,n)||!ht(e[n],t[n]))return!1}return!0}function Io(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Po(e,t){var a=Io(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Io(a)}}function eu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?eu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function tu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ei(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=ei(e.document)}return t}function $s(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var mh=Vt&&"documentMode"in document&&11>=document.documentMode,dl=null,Fs=null,nn=null,Ws=!1;function au(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ws||dl==null||dl!==ei(l)||(l=dl,"selectionStart"in l&&$s(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),nn&&ln(nn,l)||(nn=l,l=$i(Fs,"onSelect"),0<l.length&&(t=new ii("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=dl)))}function La(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var pl={animationend:La("Animation","AnimationEnd"),animationiteration:La("Animation","AnimationIteration"),animationstart:La("Animation","AnimationStart"),transitionrun:La("Transition","TransitionRun"),transitionstart:La("Transition","TransitionStart"),transitioncancel:La("Transition","TransitionCancel"),transitionend:La("Transition","TransitionEnd")},Is={},lu={};Vt&&(lu=document.createElement("div").style,"AnimationEvent"in window||(delete pl.animationend.animation,delete pl.animationiteration.animation,delete pl.animationstart.animation),"TransitionEvent"in window||delete pl.transitionend.transition);function Ya(e){if(Is[e])return Is[e];if(!pl[e])return e;var t=pl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in lu)return Is[e]=t[a];return e}var nu=Ya("animationend"),iu=Ya("animationiteration"),su=Ya("animationstart"),gh=Ya("transitionrun"),vh=Ya("transitionstart"),xh=Ya("transitioncancel"),ru=Ya("transitionend"),cu=new Map,Ps="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ps.push("scrollEnd");function Rt(e,t){cu.set(e,t),Ua(t,[e])}var ci=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Nt=[],hl=0,er=0;function oi(){for(var e=hl,t=er=hl=0;t<e;){var a=Nt[t];Nt[t++]=null;var l=Nt[t];Nt[t++]=null;var n=Nt[t];Nt[t++]=null;var i=Nt[t];if(Nt[t++]=null,l!==null&&n!==null){var c=l.pending;c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n}i!==0&&ou(a,n,i)}}function ui(e,t,a,l){Nt[hl++]=e,Nt[hl++]=t,Nt[hl++]=a,Nt[hl++]=l,er|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function tr(e,t,a,l){return ui(e,t,a,l),fi(e)}function qa(e,t){return ui(e,null,null,t),fi(e)}function ou(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-pt(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function fi(e){if(50<Cn)throw Cn=0,uc=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ml={};function yh(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,a,l){return new yh(e,t,a,l)}function ar(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qt(e,t){var a=e.alternate;return a===null?(a=mt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function uu(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function di(e,t,a,l,n,i){var c=0;if(l=e,typeof e=="function")ar(e)&&(c=1);else if(typeof e=="string")c=zm(e,a,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case I:return e=mt(31,a,t,n),e.elementType=I,e.lanes=i,e;case Q:return Ga(a.children,n,i,t);case G:c=8,n|=24;break;case V:return e=mt(12,a,t,n|2),e.elementType=V,e.lanes=i,e;case K:return e=mt(13,a,t,n),e.elementType=K,e.lanes=i,e;case ee:return e=mt(19,a,t,n),e.elementType=ee,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:c=10;break e;case Y:c=9;break e;case Z:c=11;break e;case H:c=14;break e;case oe:c=16,l=null;break e}c=29,a=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=mt(c,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Ga(e,t,a,l){return e=mt(7,e,l,t),e.lanes=a,e}function lr(e,t,a){return e=mt(6,e,null,t),e.lanes=a,e}function fu(e){var t=mt(18,null,null,0);return t.stateNode=e,t}function nr(e,t,a){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var du=new WeakMap;function zt(e,t){if(typeof e=="object"&&e!==null){var a=du.get(e);return a!==void 0?a:(t={value:e,source:t,stack:uo(t)},du.set(e,t),t)}return{value:e,source:t,stack:uo(t)}}var gl=[],vl=0,pi=null,sn=0,Et=[],At=0,fa=null,kt=1,Ut="";function Zt(e,t){gl[vl++]=sn,gl[vl++]=pi,pi=e,sn=t}function pu(e,t,a){Et[At++]=kt,Et[At++]=Ut,Et[At++]=fa,fa=e;var l=kt;e=Ut;var n=32-pt(l)-1;l&=~(1<<n),a+=1;var i=32-pt(t)+n;if(30<i){var c=n-n%5;i=(l&(1<<c)-1).toString(32),l>>=c,n-=c,kt=1<<32-pt(t)+n|a<<n|l,Ut=i+e}else kt=1<<i|a<<n|l,Ut=e}function ir(e){e.return!==null&&(Zt(e,1),pu(e,1,0))}function sr(e){for(;e===pi;)pi=gl[--vl],gl[vl]=null,sn=gl[--vl],gl[vl]=null;for(;e===fa;)fa=Et[--At],Et[At]=null,Ut=Et[--At],Et[At]=null,kt=Et[--At],Et[At]=null}function hu(e,t){Et[At++]=kt,Et[At++]=Ut,Et[At++]=fa,kt=t.id,Ut=t.overflow,fa=e}var $e=null,Me=null,ge=!1,da=null,Ct=!1,rr=Error(o(519));function pa(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw rn(zt(t,e)),rr}function mu(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Je]=e,t[nt]=l,a){case"dialog":pe("cancel",t),pe("close",t);break;case"iframe":case"object":case"embed":pe("load",t);break;case"video":case"audio":for(a=0;a<Tn.length;a++)pe(Tn[a],t);break;case"source":pe("error",t);break;case"img":case"image":case"link":pe("error",t),pe("load",t);break;case"details":pe("toggle",t);break;case"input":pe("invalid",t),wo(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":pe("invalid",t);break;case"textarea":pe("invalid",t),Mo(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Dd(t.textContent,a)?(l.popover!=null&&(pe("beforetoggle",t),pe("toggle",t)),l.onScroll!=null&&pe("scroll",t),l.onScrollEnd!=null&&pe("scrollend",t),l.onClick!=null&&(t.onclick=Xt),t=!0):t=!1,t||pa(e,!0)}function gu(e){for($e=e.return;$e;)switch($e.tag){case 5:case 31:case 13:Ct=!1;return;case 27:case 3:Ct=!0;return;default:$e=$e.return}}function xl(e){if(e!==$e)return!1;if(!ge)return gu(e),ge=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ec(e.type,e.memoizedProps)),a=!a),a&&Me&&pa(e),gu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Me=Gd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Me=Gd(e)}else t===27?(t=Me,Ca(e.type)?(e=Mc,Mc=null,Me=e):Me=t):Me=$e?Tt(e.stateNode.nextSibling):null;return!0}function Xa(){Me=$e=null,ge=!1}function cr(){var e=da;return e!==null&&(ot===null?ot=e:ot.push.apply(ot,e),da=null),e}function rn(e){da===null?da=[e]:da.push(e)}var or=j(null),Va=null,Kt=null;function ha(e,t,a){L(or,t._currentValue),t._currentValue=a}function Jt(e){e._currentValue=or.current,O(or)}function ur(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function fr(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var c=n.child;i=i.firstContext;e:for(;i!==null;){var f=i;i=n;for(var v=0;v<t.length;v++)if(f.context===t[v]){i.lanes|=a,f=i.alternate,f!==null&&(f.lanes|=a),ur(i.return,a,e),l||(c=null);break e}i=f.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(o(341));c.lanes|=a,i=c.alternate,i!==null&&(i.lanes|=a),ur(c,a,e),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===e){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function yl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(o(387));if(c=c.memoizedProps,c!==null){var f=n.type;ht(n.pendingProps.value,c.value)||(e!==null?e.push(f):e=[f])}}else if(n===Se.current){if(c=n.alternate,c===null)throw Error(o(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(On):e=[On])}n=n.return}e!==null&&fr(t,e,a,l),t.flags|=262144}function hi(e){for(e=e.firstContext;e!==null;){if(!ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Qa(e){Va=e,Kt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Fe(e){return vu(Va,e)}function mi(e,t){return Va===null&&Qa(e),vu(e,t)}function vu(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Kt===null){if(e===null)throw Error(o(308));Kt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Kt=Kt.next=t;return a}var bh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},jh=r.unstable_scheduleCallback,Sh=r.unstable_NormalPriority,Le={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function dr(){return{controller:new bh,data:new Map,refCount:0}}function cn(e){e.refCount--,e.refCount===0&&jh(Sh,function(){e.controller.abort()})}var on=null,pr=0,bl=0,jl=null;function Nh(e,t){if(on===null){var a=on=[];pr=0,bl=gc(),jl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return pr++,t.then(xu,xu),t}function xu(){if(--pr===0&&on!==null){jl!==null&&(jl.status="fulfilled");var e=on;on=null,bl=0,jl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function zh(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var yu=A.S;A.S=function(e,t){ld=ft(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Nh(e,t),yu!==null&&yu(e,t)};var Za=j(null);function hr(){var e=Za.current;return e!==null?e:Te.pooledCache}function gi(e,t){t===null?L(Za,Za.current):L(Za,t.pool)}function bu(){var e=hr();return e===null?null:{parent:Le._currentValue,pool:e}}var Sl=Error(o(460)),mr=Error(o(474)),vi=Error(o(542)),xi={then:function(){}};function ju(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Su(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Xt,Xt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,zu(e),e;default:if(typeof t.status=="string")t.then(Xt,Xt);else{if(e=Te,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,zu(e),e}throw Ja=t,Sl}}function Ka(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ja=a,Sl):a}}var Ja=null;function Nu(){if(Ja===null)throw Error(o(459));var e=Ja;return Ja=null,e}function zu(e){if(e===Sl||e===vi)throw Error(o(483))}var Nl=null,un=0;function yi(e){var t=un;return un+=1,Nl===null&&(Nl=[]),Su(Nl,e,t)}function fn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function bi(e,t){throw t.$$typeof===B?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Eu(e){function t(N,x){if(e){var C=N.deletions;C===null?(N.deletions=[x],N.flags|=16):C.push(x)}}function a(N,x){if(!e)return null;for(;x!==null;)t(N,x),x=x.sibling;return null}function l(N){for(var x=new Map;N!==null;)N.key!==null?x.set(N.key,N):x.set(N.index,N),N=N.sibling;return x}function n(N,x){return N=Qt(N,x),N.index=0,N.sibling=null,N}function i(N,x,C){return N.index=C,e?(C=N.alternate,C!==null?(C=C.index,C<x?(N.flags|=67108866,x):C):(N.flags|=67108866,x)):(N.flags|=1048576,x)}function c(N){return e&&N.alternate===null&&(N.flags|=67108866),N}function f(N,x,C,R){return x===null||x.tag!==6?(x=lr(C,N.mode,R),x.return=N,x):(x=n(x,C),x.return=N,x)}function v(N,x,C,R){var te=C.type;return te===Q?_(N,x,C.props.children,R,C.key):x!==null&&(x.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===oe&&Ka(te)===x.type)?(x=n(x,C.props),fn(x,C),x.return=N,x):(x=di(C.type,C.key,C.props,null,N.mode,R),fn(x,C),x.return=N,x)}function w(N,x,C,R){return x===null||x.tag!==4||x.stateNode.containerInfo!==C.containerInfo||x.stateNode.implementation!==C.implementation?(x=nr(C,N.mode,R),x.return=N,x):(x=n(x,C.children||[]),x.return=N,x)}function _(N,x,C,R,te){return x===null||x.tag!==7?(x=Ga(C,N.mode,R,te),x.return=N,x):(x=n(x,C),x.return=N,x)}function D(N,x,C){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=lr(""+x,N.mode,C),x.return=N,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case X:return C=di(x.type,x.key,x.props,null,N.mode,C),fn(C,x),C.return=N,C;case q:return x=nr(x,N.mode,C),x.return=N,x;case oe:return x=Ka(x),D(N,x,C)}if(P(x)||ve(x))return x=Ga(x,N.mode,C,null),x.return=N,x;if(typeof x.then=="function")return D(N,yi(x),C);if(x.$$typeof===U)return D(N,mi(N,x),C);bi(N,x)}return null}function T(N,x,C,R){var te=x!==null?x.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return te!==null?null:f(N,x,""+C,R);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case X:return C.key===te?v(N,x,C,R):null;case q:return C.key===te?w(N,x,C,R):null;case oe:return C=Ka(C),T(N,x,C,R)}if(P(C)||ve(C))return te!==null?null:_(N,x,C,R,null);if(typeof C.then=="function")return T(N,x,yi(C),R);if(C.$$typeof===U)return T(N,x,mi(N,C),R);bi(N,C)}return null}function M(N,x,C,R,te){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return N=N.get(C)||null,f(x,N,""+R,te);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case X:return N=N.get(R.key===null?C:R.key)||null,v(x,N,R,te);case q:return N=N.get(R.key===null?C:R.key)||null,w(x,N,R,te);case oe:return R=Ka(R),M(N,x,C,R,te)}if(P(R)||ve(R))return N=N.get(C)||null,_(x,N,R,te,null);if(typeof R.then=="function")return M(N,x,C,yi(R),te);if(R.$$typeof===U)return M(N,x,C,mi(x,R),te);bi(x,R)}return null}function $(N,x,C,R){for(var te=null,ye=null,W=x,ce=x=0,me=null;W!==null&&ce<C.length;ce++){W.index>ce?(me=W,W=null):me=W.sibling;var be=T(N,W,C[ce],R);if(be===null){W===null&&(W=me);break}e&&W&&be.alternate===null&&t(N,W),x=i(be,x,ce),ye===null?te=be:ye.sibling=be,ye=be,W=me}if(ce===C.length)return a(N,W),ge&&Zt(N,ce),te;if(W===null){for(;ce<C.length;ce++)W=D(N,C[ce],R),W!==null&&(x=i(W,x,ce),ye===null?te=W:ye.sibling=W,ye=W);return ge&&Zt(N,ce),te}for(W=l(W);ce<C.length;ce++)me=M(W,N,ce,C[ce],R),me!==null&&(e&&me.alternate!==null&&W.delete(me.key===null?ce:me.key),x=i(me,x,ce),ye===null?te=me:ye.sibling=me,ye=me);return e&&W.forEach(function(Ra){return t(N,Ra)}),ge&&Zt(N,ce),te}function ae(N,x,C,R){if(C==null)throw Error(o(151));for(var te=null,ye=null,W=x,ce=x=0,me=null,be=C.next();W!==null&&!be.done;ce++,be=C.next()){W.index>ce?(me=W,W=null):me=W.sibling;var Ra=T(N,W,be.value,R);if(Ra===null){W===null&&(W=me);break}e&&W&&Ra.alternate===null&&t(N,W),x=i(Ra,x,ce),ye===null?te=Ra:ye.sibling=Ra,ye=Ra,W=me}if(be.done)return a(N,W),ge&&Zt(N,ce),te;if(W===null){for(;!be.done;ce++,be=C.next())be=D(N,be.value,R),be!==null&&(x=i(be,x,ce),ye===null?te=be:ye.sibling=be,ye=be);return ge&&Zt(N,ce),te}for(W=l(W);!be.done;ce++,be=C.next())be=M(W,N,ce,be.value,R),be!==null&&(e&&be.alternate!==null&&W.delete(be.key===null?ce:be.key),x=i(be,x,ce),ye===null?te=be:ye.sibling=be,ye=be);return e&&W.forEach(function(Bm){return t(N,Bm)}),ge&&Zt(N,ce),te}function we(N,x,C,R){if(typeof C=="object"&&C!==null&&C.type===Q&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case X:e:{for(var te=C.key;x!==null;){if(x.key===te){if(te=C.type,te===Q){if(x.tag===7){a(N,x.sibling),R=n(x,C.props.children),R.return=N,N=R;break e}}else if(x.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===oe&&Ka(te)===x.type){a(N,x.sibling),R=n(x,C.props),fn(R,C),R.return=N,N=R;break e}a(N,x);break}else t(N,x);x=x.sibling}C.type===Q?(R=Ga(C.props.children,N.mode,R,C.key),R.return=N,N=R):(R=di(C.type,C.key,C.props,null,N.mode,R),fn(R,C),R.return=N,N=R)}return c(N);case q:e:{for(te=C.key;x!==null;){if(x.key===te)if(x.tag===4&&x.stateNode.containerInfo===C.containerInfo&&x.stateNode.implementation===C.implementation){a(N,x.sibling),R=n(x,C.children||[]),R.return=N,N=R;break e}else{a(N,x);break}else t(N,x);x=x.sibling}R=nr(C,N.mode,R),R.return=N,N=R}return c(N);case oe:return C=Ka(C),we(N,x,C,R)}if(P(C))return $(N,x,C,R);if(ve(C)){if(te=ve(C),typeof te!="function")throw Error(o(150));return C=te.call(C),ae(N,x,C,R)}if(typeof C.then=="function")return we(N,x,yi(C),R);if(C.$$typeof===U)return we(N,x,mi(N,C),R);bi(N,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,x!==null&&x.tag===6?(a(N,x.sibling),R=n(x,C),R.return=N,N=R):(a(N,x),R=lr(C,N.mode,R),R.return=N,N=R),c(N)):a(N,x)}return function(N,x,C,R){try{un=0;var te=we(N,x,C,R);return Nl=null,te}catch(W){if(W===Sl||W===vi)throw W;var ye=mt(29,W,null,N.mode);return ye.lanes=R,ye.return=N,ye}}}var $a=Eu(!0),Au=Eu(!1),ma=!1;function gr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function va(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(je&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=fi(e),ou(e,null,a),t}return ui(e,l,t,a),fi(e)}function dn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,vo(e,a)}}function xr(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=c:i=i.next=c,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var yr=!1;function pn(){if(yr){var e=jl;if(e!==null)throw e}}function hn(e,t,a,l){yr=!1;var n=e.updateQueue;ma=!1;var i=n.firstBaseUpdate,c=n.lastBaseUpdate,f=n.shared.pending;if(f!==null){n.shared.pending=null;var v=f,w=v.next;v.next=null,c===null?i=w:c.next=w,c=v;var _=e.alternate;_!==null&&(_=_.updateQueue,f=_.lastBaseUpdate,f!==c&&(f===null?_.firstBaseUpdate=w:f.next=w,_.lastBaseUpdate=v))}if(i!==null){var D=n.baseState;c=0,_=w=v=null,f=i;do{var T=f.lane&-536870913,M=T!==f.lane;if(M?(he&T)===T:(l&T)===T){T!==0&&T===bl&&(yr=!0),_!==null&&(_=_.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var $=e,ae=f;T=t;var we=a;switch(ae.tag){case 1:if($=ae.payload,typeof $=="function"){D=$.call(we,D,T);break e}D=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=ae.payload,T=typeof $=="function"?$.call(we,D,T):$,T==null)break e;D=E({},D,T);break e;case 2:ma=!0}}T=f.callback,T!==null&&(e.flags|=64,M&&(e.flags|=8192),M=n.callbacks,M===null?n.callbacks=[T]:M.push(T))}else M={lane:T,tag:f.tag,payload:f.payload,callback:f.callback,next:null},_===null?(w=_=M,v=D):_=_.next=M,c|=T;if(f=f.next,f===null){if(f=n.shared.pending,f===null)break;M=f,f=M.next,M.next=null,n.lastBaseUpdate=M,n.shared.pending=null}}while(!0);_===null&&(v=D),n.baseState=v,n.firstBaseUpdate=w,n.lastBaseUpdate=_,i===null&&(n.shared.lanes=0),Sa|=c,e.lanes=c,e.memoizedState=D}}function Cu(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function wu(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Cu(a[e],t)}var zl=j(null),ji=j(0);function Tu(e,t){e=la,L(ji,e),L(zl,t),la=e|t.baseLanes}function br(){L(ji,la),L(zl,zl.current)}function jr(){la=ji.current,O(zl),O(ji)}var gt=j(null),wt=null;function xa(e){var t=e.alternate;L(Ue,Ue.current&1),L(gt,e),wt===null&&(t===null||zl.current!==null||t.memoizedState!==null)&&(wt=e)}function Sr(e){L(Ue,Ue.current),L(gt,e),wt===null&&(wt=e)}function Mu(e){e.tag===22?(L(Ue,Ue.current),L(gt,e),wt===null&&(wt=e)):ya()}function ya(){L(Ue,Ue.current),L(gt,gt.current)}function vt(e){O(gt),wt===e&&(wt=null),O(Ue)}var Ue=j(0);function Si(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||wc(a)||Tc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $t=0,re=null,Ae=null,Ye=null,Ni=!1,El=!1,Fa=!1,zi=0,mn=0,Al=null,Eh=0;function Oe(){throw Error(o(321))}function Nr(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ht(e[a],t[a]))return!1;return!0}function zr(e,t,a,l,n,i){return $t=i,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,A.H=e===null||e.memoizedState===null?hf:Lr,Fa=!1,i=a(l,n),Fa=!1,El&&(i=Ru(t,a,l,n)),_u(e),i}function _u(e){A.H=xn;var t=Ae!==null&&Ae.next!==null;if($t=0,Ye=Ae=re=null,Ni=!1,mn=0,Al=null,t)throw Error(o(300));e===null||qe||(e=e.dependencies,e!==null&&hi(e)&&(qe=!0))}function Ru(e,t,a,l){re=e;var n=0;do{if(El&&(Al=null),mn=0,El=!1,25<=n)throw Error(o(301));if(n+=1,Ye=Ae=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}A.H=mf,i=t(a,l)}while(El);return i}function Ah(){var e=A.H,t=e.useState()[0];return t=typeof t.then=="function"?gn(t):t,e=e.useState()[0],(Ae!==null?Ae.memoizedState:null)!==e&&(re.flags|=1024),t}function Er(){var e=zi!==0;return zi=0,e}function Ar(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Cr(e){if(Ni){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ni=!1}$t=0,Ye=Ae=re=null,El=!1,mn=zi=0,Al=null}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?re.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function He(){if(Ae===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=Ye===null?re.memoizedState:Ye.next;if(t!==null)Ye=t,Ae=e;else{if(e===null)throw re.alternate===null?Error(o(467)):Error(o(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Ye===null?re.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function Ei(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function gn(e){var t=mn;return mn+=1,Al===null&&(Al=[]),e=Su(Al,e,t),t=re,(Ye===null?t.memoizedState:Ye.next)===null&&(t=t.alternate,A.H=t===null||t.memoizedState===null?hf:Lr),e}function Ai(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return gn(e);if(e.$$typeof===U)return Fe(e)}throw Error(o(438,String(e)))}function wr(e){var t=null,a=re.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=re.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Ei(),re.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=le;return t.index++,a}function Ft(e,t){return typeof t=="function"?t(e):t}function Ci(e){var t=He();return Tr(t,Ae,e)}function Tr(e,t,a){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var c=n.next;n.next=i.next,i.next=c}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var f=c=null,v=null,w=t,_=!1;do{var D=w.lane&-536870913;if(D!==w.lane?(he&D)===D:($t&D)===D){var T=w.revertLane;if(T===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),D===bl&&(_=!0);else if(($t&T)===T){w=w.next,T===bl&&(_=!0);continue}else D={lane:0,revertLane:w.revertLane,gesture:null,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},v===null?(f=v=D,c=i):v=v.next=D,re.lanes|=T,Sa|=T;D=w.action,Fa&&a(i,D),i=w.hasEagerState?w.eagerState:a(i,D)}else T={lane:D,revertLane:w.revertLane,gesture:w.gesture,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},v===null?(f=v=T,c=i):v=v.next=T,re.lanes|=D,Sa|=D;w=w.next}while(w!==null&&w!==t);if(v===null?c=i:v.next=f,!ht(i,e.memoizedState)&&(qe=!0,_&&(a=jl,a!==null)))throw a;e.memoizedState=i,e.baseState=c,e.baseQueue=v,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Mr(e){var t=He(),a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var c=n=n.next;do i=e(i,c.action),c=c.next;while(c!==n);ht(i,t.memoizedState)||(qe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function Du(e,t,a){var l=re,n=He(),i=ge;if(i){if(a===void 0)throw Error(o(407));a=a()}else a=t();var c=!ht((Ae||n).memoizedState,a);if(c&&(n.memoizedState=a,qe=!0),n=n.queue,Dr(ku.bind(null,l,n,e),[e]),n.getSnapshot!==t||c||Ye!==null&&Ye.memoizedState.tag&1){if(l.flags|=2048,Cl(9,{destroy:void 0},Bu.bind(null,l,n,a,t),null),Te===null)throw Error(o(349));i||($t&127)!==0||Ou(l,t,a)}return a}function Ou(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=re.updateQueue,t===null?(t=Ei(),re.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Bu(e,t,a,l){t.value=a,t.getSnapshot=l,Uu(t)&&Hu(e)}function ku(e,t,a){return a(function(){Uu(t)&&Hu(e)})}function Uu(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ht(e,a)}catch{return!0}}function Hu(e){var t=qa(e,2);t!==null&&ut(t,e,2)}function _r(e){var t=lt();if(typeof e=="function"){var a=e;if(e=a(),Fa){ca(!0);try{a()}finally{ca(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ft,lastRenderedState:e},t}function Lu(e,t,a,l){return e.baseState=a,Tr(e,Ae,typeof l=="function"?l:Ft)}function Ch(e,t,a,l,n){if(Mi(e))throw Error(o(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};A.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,Yu(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Yu(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=A.T,c={};A.T=c;try{var f=a(n,l),v=A.S;v!==null&&v(c,f),qu(e,t,f)}catch(w){Rr(e,t,w)}finally{i!==null&&c.types!==null&&(i.types=c.types),A.T=i}}else try{i=a(n,l),qu(e,t,i)}catch(w){Rr(e,t,w)}}function qu(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Gu(e,t,l)},function(l){return Rr(e,t,l)}):Gu(e,t,a)}function Gu(e,t,a){t.status="fulfilled",t.value=a,Xu(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Yu(e,a)))}function Rr(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Xu(t),t=t.next;while(t!==l)}e.action=null}function Xu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Vu(e,t){return t}function Qu(e,t){if(ge){var a=Te.formState;if(a!==null){e:{var l=re;if(ge){if(Me){t:{for(var n=Me,i=Ct;n.nodeType!==8;){if(!i){n=null;break t}if(n=Tt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Me=Tt(n.nextSibling),l=n.data==="F!";break e}}pa(l)}l=!1}l&&(t=a[0])}}return a=lt(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vu,lastRenderedState:t},a.queue=l,a=ff.bind(null,re,l),l.dispatch=a,l=_r(!1),i=Hr.bind(null,re,!1,l.queue),l=lt(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Ch.bind(null,re,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Zu(e){var t=He();return Ku(t,Ae,e)}function Ku(e,t,a){if(t=Tr(e,t,Vu)[0],e=Ci(Ft)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=gn(t)}catch(c){throw c===Sl?vi:c}else l=t;t=He();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(re.flags|=2048,Cl(9,{destroy:void 0},wh.bind(null,n,a),null)),[l,i,e]}function wh(e,t){e.action=t}function Ju(e){var t=He(),a=Ae;if(a!==null)return Ku(t,a,e);He(),t=t.memoizedState,a=He();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Cl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=re.updateQueue,t===null&&(t=Ei(),re.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function $u(){return He().memoizedState}function wi(e,t,a,l){var n=lt();re.flags|=e,n.memoizedState=Cl(1|t,{destroy:void 0},a,l===void 0?null:l)}function Ti(e,t,a,l){var n=He();l=l===void 0?null:l;var i=n.memoizedState.inst;Ae!==null&&l!==null&&Nr(l,Ae.memoizedState.deps)?n.memoizedState=Cl(t,i,a,l):(re.flags|=e,n.memoizedState=Cl(1|t,i,a,l))}function Fu(e,t){wi(8390656,8,e,t)}function Dr(e,t){Ti(2048,8,e,t)}function Th(e){re.flags|=4;var t=re.updateQueue;if(t===null)t=Ei(),re.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Wu(e){var t=He().memoizedState;return Th({ref:t,nextImpl:e}),function(){if((je&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function Iu(e,t){return Ti(4,2,e,t)}function Pu(e,t){return Ti(4,4,e,t)}function ef(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function tf(e,t,a){a=a!=null?a.concat([e]):null,Ti(4,4,ef.bind(null,t,e),a)}function Or(){}function af(e,t){var a=He();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Nr(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function lf(e,t){var a=He();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Nr(t,l[1]))return l[0];if(l=e(),Fa){ca(!0);try{e()}finally{ca(!1)}}return a.memoizedState=[l,t],l}function Br(e,t,a){return a===void 0||($t&1073741824)!==0&&(he&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=id(),re.lanes|=e,Sa|=e,a)}function nf(e,t,a,l){return ht(a,t)?a:zl.current!==null?(e=Br(e,a,l),ht(e,t)||(qe=!0),e):($t&42)===0||($t&1073741824)!==0&&(he&261930)===0?(qe=!0,e.memoizedState=a):(e=id(),re.lanes|=e,Sa|=e,t)}function sf(e,t,a,l,n){var i=k.p;k.p=i!==0&&8>i?i:8;var c=A.T,f={};A.T=f,Hr(e,!1,t,a);try{var v=n(),w=A.S;if(w!==null&&w(f,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var _=zh(v,l);vn(e,t,_,bt(e))}else vn(e,t,l,bt(e))}catch(D){vn(e,t,{then:function(){},status:"rejected",reason:D},bt())}finally{k.p=i,c!==null&&f.types!==null&&(c.types=f.types),A.T=c}}function Mh(){}function kr(e,t,a,l){if(e.tag!==5)throw Error(o(476));var n=rf(e).queue;sf(e,n,t,J,a===null?Mh:function(){return cf(e),a(l)})}function rf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ft,lastRenderedState:J},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ft,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function cf(e){var t=rf(e);t.next===null&&(t=e.alternate.memoizedState),vn(e,t.next.queue,{},bt())}function Ur(){return Fe(On)}function of(){return He().memoizedState}function uf(){return He().memoizedState}function _h(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=bt();e=ga(a);var l=va(t,e,a);l!==null&&(ut(l,t,a),dn(l,t,a)),t={cache:dr()},e.payload=t;return}t=t.return}}function Rh(e,t,a){var l=bt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Mi(e)?df(t,a):(a=tr(e,t,a,l),a!==null&&(ut(a,e,l),pf(a,t,l)))}function ff(e,t,a){var l=bt();vn(e,t,a,l)}function vn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Mi(e))df(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var c=t.lastRenderedState,f=i(c,a);if(n.hasEagerState=!0,n.eagerState=f,ht(f,c))return ui(e,t,n,0),Te===null&&oi(),!1}catch{}if(a=tr(e,t,n,l),a!==null)return ut(a,e,l),pf(a,t,l),!0}return!1}function Hr(e,t,a,l){if(l={lane:2,revertLane:gc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Mi(e)){if(t)throw Error(o(479))}else t=tr(e,a,l,2),t!==null&&ut(t,e,2)}function Mi(e){var t=e.alternate;return e===re||t!==null&&t===re}function df(e,t){El=Ni=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function pf(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,vo(e,a)}}var xn={readContext:Fe,use:Ai,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useLayoutEffect:Oe,useInsertionEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useSyncExternalStore:Oe,useId:Oe,useHostTransitionStatus:Oe,useFormState:Oe,useActionState:Oe,useOptimistic:Oe,useMemoCache:Oe,useCacheRefresh:Oe};xn.useEffectEvent=Oe;var hf={readContext:Fe,use:Ai,useCallback:function(e,t){return lt().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:Fu,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,wi(4194308,4,ef.bind(null,t,e),a)},useLayoutEffect:function(e,t){return wi(4194308,4,e,t)},useInsertionEffect:function(e,t){wi(4,2,e,t)},useMemo:function(e,t){var a=lt();t=t===void 0?null:t;var l=e();if(Fa){ca(!0);try{e()}finally{ca(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=lt();if(a!==void 0){var n=a(t);if(Fa){ca(!0);try{a(t)}finally{ca(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Rh.bind(null,re,e),[l.memoizedState,e]},useRef:function(e){var t=lt();return e={current:e},t.memoizedState=e},useState:function(e){e=_r(e);var t=e.queue,a=ff.bind(null,re,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Or,useDeferredValue:function(e,t){var a=lt();return Br(a,e,t)},useTransition:function(){var e=_r(!1);return e=sf.bind(null,re,e.queue,!0,!1),lt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=re,n=lt();if(ge){if(a===void 0)throw Error(o(407));a=a()}else{if(a=t(),Te===null)throw Error(o(349));(he&127)!==0||Ou(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,Fu(ku.bind(null,l,i,e),[e]),l.flags|=2048,Cl(9,{destroy:void 0},Bu.bind(null,l,i,a,t),null),a},useId:function(){var e=lt(),t=Te.identifierPrefix;if(ge){var a=Ut,l=kt;a=(l&~(1<<32-pt(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=zi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Eh++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ur,useFormState:Qu,useActionState:Qu,useOptimistic:function(e){var t=lt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Hr.bind(null,re,!0,a),a.dispatch=t,[e,t]},useMemoCache:wr,useCacheRefresh:function(){return lt().memoizedState=_h.bind(null,re)},useEffectEvent:function(e){var t=lt(),a={impl:e};return t.memoizedState=a,function(){if((je&2)!==0)throw Error(o(440));return a.impl.apply(void 0,arguments)}}},Lr={readContext:Fe,use:Ai,useCallback:af,useContext:Fe,useEffect:Dr,useImperativeHandle:tf,useInsertionEffect:Iu,useLayoutEffect:Pu,useMemo:lf,useReducer:Ci,useRef:$u,useState:function(){return Ci(Ft)},useDebugValue:Or,useDeferredValue:function(e,t){var a=He();return nf(a,Ae.memoizedState,e,t)},useTransition:function(){var e=Ci(Ft)[0],t=He().memoizedState;return[typeof e=="boolean"?e:gn(e),t]},useSyncExternalStore:Du,useId:of,useHostTransitionStatus:Ur,useFormState:Zu,useActionState:Zu,useOptimistic:function(e,t){var a=He();return Lu(a,Ae,e,t)},useMemoCache:wr,useCacheRefresh:uf};Lr.useEffectEvent=Wu;var mf={readContext:Fe,use:Ai,useCallback:af,useContext:Fe,useEffect:Dr,useImperativeHandle:tf,useInsertionEffect:Iu,useLayoutEffect:Pu,useMemo:lf,useReducer:Mr,useRef:$u,useState:function(){return Mr(Ft)},useDebugValue:Or,useDeferredValue:function(e,t){var a=He();return Ae===null?Br(a,e,t):nf(a,Ae.memoizedState,e,t)},useTransition:function(){var e=Mr(Ft)[0],t=He().memoizedState;return[typeof e=="boolean"?e:gn(e),t]},useSyncExternalStore:Du,useId:of,useHostTransitionStatus:Ur,useFormState:Ju,useActionState:Ju,useOptimistic:function(e,t){var a=He();return Ae!==null?Lu(a,Ae,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:wr,useCacheRefresh:uf};mf.useEffectEvent=Wu;function Yr(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:E({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var qr={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=bt(),n=ga(l);n.payload=t,a!=null&&(n.callback=a),t=va(e,n,l),t!==null&&(ut(t,e,l),dn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=bt(),n=ga(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=va(e,n,l),t!==null&&(ut(t,e,l),dn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=bt(),l=ga(a);l.tag=2,t!=null&&(l.callback=t),t=va(e,l,a),t!==null&&(ut(t,e,a),dn(t,e,a))}};function gf(e,t,a,l,n,i,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,c):t.prototype&&t.prototype.isPureReactComponent?!ln(a,l)||!ln(n,i):!0}function vf(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&qr.enqueueReplaceState(t,t.state,null)}function Wa(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=E({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function xf(e){ci(e)}function yf(e){console.error(e)}function bf(e){ci(e)}function _i(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function jf(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Gr(e,t,a){return a=ga(a),a.tag=3,a.payload={element:null},a.callback=function(){_i(e,t)},a}function Sf(e){return e=ga(e),e.tag=3,e}function Nf(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){jf(t,a,l)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){jf(t,a,l),typeof n!="function"&&(Na===null?Na=new Set([this]):Na.add(this));var f=l.stack;this.componentDidCatch(l.value,{componentStack:f!==null?f:""})})}function Dh(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&yl(t,a,n,!0),a=gt.current,a!==null){switch(a.tag){case 31:case 13:return wt===null?Xi():a.alternate===null&&Be===0&&(Be=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===xi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),pc(e,l,n)),!1;case 22:return a.flags|=65536,l===xi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),pc(e,l,n)),!1}throw Error(o(435,a.tag))}return pc(e,l,n),Xi(),!1}if(ge)return t=gt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==rr&&(e=Error(o(422),{cause:l}),rn(zt(e,a)))):(l!==rr&&(t=Error(o(423),{cause:l}),rn(zt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=zt(l,a),n=Gr(e.stateNode,l,n),xr(e,n),Be!==4&&(Be=2)),!1;var i=Error(o(520),{cause:l});if(i=zt(i,a),An===null?An=[i]:An.push(i),Be!==4&&(Be=2),t===null)return!0;l=zt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Gr(a.stateNode,l,e),xr(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Na===null||!Na.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Sf(n),Nf(n,e,a,l),xr(a,n),!1}a=a.return}while(a!==null);return!1}var Xr=Error(o(461)),qe=!1;function We(e,t,a,l){t.child=e===null?Au(t,null,a,l):$a(t,e.child,a,l)}function zf(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var c={};for(var f in l)f!=="ref"&&(c[f]=l[f])}else c=l;return Qa(t),l=zr(e,t,a,c,i,n),f=Er(),e!==null&&!qe?(Ar(e,t,n),Wt(e,t,n)):(ge&&f&&ir(t),t.flags|=1,We(e,t,l,n),t.child)}function Ef(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!ar(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Af(e,t,i,l,n)):(e=di(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Wr(e,n)){var c=i.memoizedProps;if(a=a.compare,a=a!==null?a:ln,a(c,l)&&e.ref===t.ref)return Wt(e,t,n)}return t.flags|=1,e=Qt(i,l),e.ref=t.ref,e.return=t,t.child=e}function Af(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(ln(i,l)&&e.ref===t.ref)if(qe=!1,t.pendingProps=l=i,Wr(e,n))(e.flags&131072)!==0&&(qe=!0);else return t.lanes=e.lanes,Wt(e,t,n)}return Vr(e,t,a,l,n)}function Cf(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return wf(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&gi(t,i!==null?i.cachePool:null),i!==null?Tu(t,i):br(),Mu(t);else return l=t.lanes=536870912,wf(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(gi(t,i.cachePool),Tu(t,i),ya(),t.memoizedState=null):(e!==null&&gi(t,null),br(),ya());return We(e,t,n,a),t.child}function yn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function wf(e,t,a,l,n){var i=hr();return i=i===null?null:{parent:Le._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&gi(t,null),br(),Mu(t),e!==null&&yl(e,t,l,!0),t.childLanes=n,null}function Ri(e,t){return t=Oi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Tf(e,t,a){return $a(t,e.child,null,a),e=Ri(t,t.pendingProps),e.flags|=2,vt(t),t.memoizedState=null,e}function Oh(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ge){if(l.mode==="hidden")return e=Ri(t,l),t.lanes=536870912,yn(null,e);if(Sr(t),(e=Me)?(e=qd(e,Ct),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:fa!==null?{id:kt,overflow:Ut}:null,retryLane:536870912,hydrationErrors:null},a=fu(e),a.return=t,t.child=a,$e=t,Me=null)):e=null,e===null)throw pa(t);return t.lanes=536870912,null}return Ri(t,l)}var i=e.memoizedState;if(i!==null){var c=i.dehydrated;if(Sr(t),n)if(t.flags&256)t.flags&=-257,t=Tf(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(qe||yl(e,t,a,!1),n=(a&e.childLanes)!==0,qe||n){if(l=Te,l!==null&&(c=xo(l,a),c!==0&&c!==i.retryLane))throw i.retryLane=c,qa(e,c),ut(l,e,c),Xr;Xi(),t=Tf(e,t,a)}else e=i.treeContext,Me=Tt(c.nextSibling),$e=t,ge=!0,da=null,Ct=!1,e!==null&&hu(t,e),t=Ri(t,l),t.flags|=4096;return t}return e=Qt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Di(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Vr(e,t,a,l,n){return Qa(t),a=zr(e,t,a,l,void 0,n),l=Er(),e!==null&&!qe?(Ar(e,t,n),Wt(e,t,n)):(ge&&l&&ir(t),t.flags|=1,We(e,t,a,n),t.child)}function Mf(e,t,a,l,n,i){return Qa(t),t.updateQueue=null,a=Ru(t,l,a,n),_u(e),l=Er(),e!==null&&!qe?(Ar(e,t,i),Wt(e,t,i)):(ge&&l&&ir(t),t.flags|=1,We(e,t,a,i),t.child)}function _f(e,t,a,l,n){if(Qa(t),t.stateNode===null){var i=ml,c=a.contextType;typeof c=="object"&&c!==null&&(i=Fe(c)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=qr,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},gr(t),c=a.contextType,i.context=typeof c=="object"&&c!==null?Fe(c):ml,i.state=t.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(Yr(t,a,c,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&qr.enqueueReplaceState(i,i.state,null),hn(t,l,i,n),pn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var f=t.memoizedProps,v=Wa(a,f);i.props=v;var w=i.context,_=a.contextType;c=ml,typeof _=="object"&&_!==null&&(c=Fe(_));var D=a.getDerivedStateFromProps;_=typeof D=="function"||typeof i.getSnapshotBeforeUpdate=="function",f=t.pendingProps!==f,_||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(f||w!==c)&&vf(t,i,l,c),ma=!1;var T=t.memoizedState;i.state=T,hn(t,l,i,n),pn(),w=t.memoizedState,f||T!==w||ma?(typeof D=="function"&&(Yr(t,a,D,l),w=t.memoizedState),(v=ma||gf(t,a,v,l,T,w,c))?(_||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=w),i.props=l,i.state=w,i.context=c,l=v):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,vr(e,t),c=t.memoizedProps,_=Wa(a,c),i.props=_,D=t.pendingProps,T=i.context,w=a.contextType,v=ml,typeof w=="object"&&w!==null&&(v=Fe(w)),f=a.getDerivedStateFromProps,(w=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==D||T!==v)&&vf(t,i,l,v),ma=!1,T=t.memoizedState,i.state=T,hn(t,l,i,n),pn();var M=t.memoizedState;c!==D||T!==M||ma||e!==null&&e.dependencies!==null&&hi(e.dependencies)?(typeof f=="function"&&(Yr(t,a,f,l),M=t.memoizedState),(_=ma||gf(t,a,_,l,T,M,v)||e!==null&&e.dependencies!==null&&hi(e.dependencies))?(w||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,M,v),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,M,v)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=M),i.props=l,i.state=M,i.context=v,l=_):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Di(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=$a(t,e.child,null,n),t.child=$a(t,null,a,n)):We(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Wt(e,t,n),e}function Rf(e,t,a,l){return Xa(),t.flags|=256,We(e,t,a,l),t.child}var Qr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zr(e){return{baseLanes:e,cachePool:bu()}}function Kr(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=yt),e}function Df(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,c;if((c=i)||(c=e!==null&&e.memoizedState===null?!1:(Ue.current&2)!==0),c&&(n=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(ge){if(n?xa(t):ya(),(e=Me)?(e=qd(e,Ct),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:fa!==null?{id:kt,overflow:Ut}:null,retryLane:536870912,hydrationErrors:null},a=fu(e),a.return=t,t.child=a,$e=t,Me=null)):e=null,e===null)throw pa(t);return Tc(e)?t.lanes=32:t.lanes=536870912,null}var f=l.children;return l=l.fallback,n?(ya(),n=t.mode,f=Oi({mode:"hidden",children:f},n),l=Ga(l,n,a,null),f.return=t,l.return=t,f.sibling=l,t.child=f,l=t.child,l.memoizedState=Zr(a),l.childLanes=Kr(e,c,a),t.memoizedState=Qr,yn(null,l)):(xa(t),Jr(t,f))}var v=e.memoizedState;if(v!==null&&(f=v.dehydrated,f!==null)){if(i)t.flags&256?(xa(t),t.flags&=-257,t=$r(e,t,a)):t.memoizedState!==null?(ya(),t.child=e.child,t.flags|=128,t=null):(ya(),f=l.fallback,n=t.mode,l=Oi({mode:"visible",children:l.children},n),f=Ga(f,n,a,null),f.flags|=2,l.return=t,f.return=t,l.sibling=f,t.child=l,$a(t,e.child,null,a),l=t.child,l.memoizedState=Zr(a),l.childLanes=Kr(e,c,a),t.memoizedState=Qr,t=yn(null,l));else if(xa(t),Tc(f)){if(c=f.nextSibling&&f.nextSibling.dataset,c)var w=c.dgst;c=w,l=Error(o(419)),l.stack="",l.digest=c,rn({value:l,source:null,stack:null}),t=$r(e,t,a)}else if(qe||yl(e,t,a,!1),c=(a&e.childLanes)!==0,qe||c){if(c=Te,c!==null&&(l=xo(c,a),l!==0&&l!==v.retryLane))throw v.retryLane=l,qa(e,l),ut(c,e,l),Xr;wc(f)||Xi(),t=$r(e,t,a)}else wc(f)?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,Me=Tt(f.nextSibling),$e=t,ge=!0,da=null,Ct=!1,e!==null&&hu(t,e),t=Jr(t,l.children),t.flags|=4096);return t}return n?(ya(),f=l.fallback,n=t.mode,v=e.child,w=v.sibling,l=Qt(v,{mode:"hidden",children:l.children}),l.subtreeFlags=v.subtreeFlags&65011712,w!==null?f=Qt(w,f):(f=Ga(f,n,a,null),f.flags|=2),f.return=t,l.return=t,l.sibling=f,t.child=l,yn(null,l),l=t.child,f=e.child.memoizedState,f===null?f=Zr(a):(n=f.cachePool,n!==null?(v=Le._currentValue,n=n.parent!==v?{parent:v,pool:v}:n):n=bu(),f={baseLanes:f.baseLanes|a,cachePool:n}),l.memoizedState=f,l.childLanes=Kr(e,c,a),t.memoizedState=Qr,yn(e.child,l)):(xa(t),a=e.child,e=a.sibling,a=Qt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=a,t.memoizedState=null,a)}function Jr(e,t){return t=Oi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Oi(e,t){return e=mt(22,e,null,t),e.lanes=0,e}function $r(e,t,a){return $a(t,e.child,null,a),e=Jr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Of(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),ur(e.return,t,a)}function Fr(e,t,a,l,n,i){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=l,c.tail=a,c.tailMode=n,c.treeForkCount=i)}function Bf(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var c=Ue.current,f=(c&2)!==0;if(f?(c=c&1|2,t.flags|=128):c&=1,L(Ue,c),We(e,t,l,a),l=ge?sn:0,!f&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Of(e,a,t);else if(e.tag===19)Of(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Si(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Fr(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Si(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Fr(t,!0,a,null,i,l);break;case"together":Fr(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Wt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Sa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(yl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,a=Qt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Qt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Wr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&hi(e)))}function Bh(e,t,a){switch(t.tag){case 3:at(t,t.stateNode.containerInfo),ha(t,Le,e.memoizedState.cache),Xa();break;case 27:case 5:Vl(t);break;case 4:at(t,t.stateNode.containerInfo);break;case 10:ha(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Sr(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(xa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Df(e,t,a):(xa(t),e=Wt(e,t,a),e!==null?e.sibling:null);xa(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(yl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return Bf(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),L(Ue,Ue.current),l)break;return null;case 22:return t.lanes=0,Cf(e,t,a,t.pendingProps);case 24:ha(t,Le,e.memoizedState.cache)}return Wt(e,t,a)}function kf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)qe=!0;else{if(!Wr(e,a)&&(t.flags&128)===0)return qe=!1,Bh(e,t,a);qe=(e.flags&131072)!==0}else qe=!1,ge&&(t.flags&1048576)!==0&&pu(t,sn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Ka(t.elementType),t.type=e,typeof e=="function")ar(e)?(l=Wa(e,l),t.tag=1,t=_f(null,t,e,l,a)):(t.tag=0,t=Vr(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===Z){t.tag=11,t=zf(null,t,e,l,a);break e}else if(n===H){t.tag=14,t=Ef(null,t,e,l,a);break e}}throw t=Qe(e)||e,Error(o(306,t,""))}}return t;case 0:return Vr(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Wa(l,t.pendingProps),_f(e,t,l,n,a);case 3:e:{if(at(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,vr(e,t),hn(t,l,null,a);var c=t.memoizedState;if(l=c.cache,ha(t,Le,l),l!==i.cache&&fr(t,[Le],a,!0),pn(),l=c.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Rf(e,t,l,a);break e}else if(l!==n){n=zt(Error(o(424)),t),rn(n),t=Rf(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Me=Tt(e.firstChild),$e=t,ge=!0,da=null,Ct=!0,a=Au(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Xa(),l===n){t=Wt(e,t,a);break e}We(e,t,l,a)}t=t.child}return t;case 26:return Di(e,t),e===null?(a=Kd(t.type,null,t.pendingProps,null))?t.memoizedState=a:ge||(a=t.type,e=t.pendingProps,l=Fi(fe.current).createElement(a),l[Je]=t,l[nt]=e,Ie(l,a,e),Ze(l),t.stateNode=l):t.memoizedState=Kd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Vl(t),e===null&&ge&&(l=t.stateNode=Vd(t.type,t.pendingProps,fe.current),$e=t,Ct=!0,n=Me,Ca(t.type)?(Mc=n,Me=Tt(l.firstChild)):Me=n),We(e,t,t.pendingProps.children,a),Di(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ge&&((n=l=Me)&&(l=fm(l,t.type,t.pendingProps,Ct),l!==null?(t.stateNode=l,$e=t,Me=Tt(l.firstChild),Ct=!1,n=!0):n=!1),n||pa(t)),Vl(t),n=t.type,i=t.pendingProps,c=e!==null?e.memoizedProps:null,l=i.children,Ec(n,i)?l=null:c!==null&&Ec(n,c)&&(t.flags|=32),t.memoizedState!==null&&(n=zr(e,t,Ah,null,null,a),On._currentValue=n),Di(e,t),We(e,t,l,a),t.child;case 6:return e===null&&ge&&((e=a=Me)&&(a=dm(a,t.pendingProps,Ct),a!==null?(t.stateNode=a,$e=t,Me=null,e=!0):e=!1),e||pa(t)),null;case 13:return Df(e,t,a);case 4:return at(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=$a(t,null,l,a):We(e,t,l,a),t.child;case 11:return zf(e,t,t.type,t.pendingProps,a);case 7:return We(e,t,t.pendingProps,a),t.child;case 8:return We(e,t,t.pendingProps.children,a),t.child;case 12:return We(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ha(t,t.type,l.value),We(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Qa(t),n=Fe(n),l=l(n),t.flags|=1,We(e,t,l,a),t.child;case 14:return Ef(e,t,t.type,t.pendingProps,a);case 15:return Af(e,t,t.type,t.pendingProps,a);case 19:return Bf(e,t,a);case 31:return Oh(e,t,a);case 22:return Cf(e,t,a,t.pendingProps);case 24:return Qa(t),l=Fe(Le),e===null?(n=hr(),n===null&&(n=Te,i=dr(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},gr(t),ha(t,Le,n)):((e.lanes&a)!==0&&(vr(e,t),hn(t,null,null,a),pn()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ha(t,Le,l)):(l=i.cache,ha(t,Le,l),l!==n.cache&&fr(t,[Le],a,!0))),We(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function It(e){e.flags|=4}function Ir(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(od())e.flags|=8192;else throw Ja=xi,mr}else e.flags&=-16777217}function Uf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Id(t))if(od())e.flags|=8192;else throw Ja=xi,mr}function Bi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?mo():536870912,e.lanes|=t,_l|=t)}function bn(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function _e(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function kh(e,t,a){var l=t.pendingProps;switch(sr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(t),null;case 1:return _e(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Jt(Le),ke(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(xl(t)?It(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,cr())),_e(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(It(t),i!==null?(_e(t),Uf(t,i)):(_e(t),Ir(t,n,null,l,a))):i?i!==e.memoizedState?(It(t),_e(t),Uf(t,i)):(_e(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&It(t),_e(t),Ir(t,n,e,l,a)),null;case 27:if(Zn(t),a=fe.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&It(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return _e(t),null}e=F.current,xl(t)?mu(t):(e=Vd(n,l,a),t.stateNode=e,It(t))}return _e(t),null;case 5:if(Zn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&It(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return _e(t),null}if(i=F.current,xl(t))mu(t);else{var c=Fi(fe.current);switch(i){case 1:i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=c.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?c.createElement(n,{is:l.is}):c.createElement(n)}}i[Je]=t,i[nt]=l;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=i;e:switch(Ie(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&It(t)}}return _e(t),Ir(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&It(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=fe.current,xl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=$e,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Je]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Dd(e.nodeValue,a)),e||pa(t,!0)}else e=Fi(e).createTextNode(l),e[Je]=t,t.stateNode=e}return _e(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=xl(t),a!==null){if(e===null){if(!l)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[Je]=t}else Xa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_e(t),e=!1}else a=cr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(vt(t),t):(vt(t),null);if((t.flags&128)!==0)throw Error(o(558))}return _e(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=xl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(o(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));n[Je]=t}else Xa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_e(t),n=!1}else n=cr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(vt(t),t):(vt(t),null)}return vt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Bi(t,t.updateQueue),_e(t),null);case 4:return ke(),e===null&&bc(t.stateNode.containerInfo),_e(t),null;case 10:return Jt(t.type),_e(t),null;case 19:if(O(Ue),l=t.memoizedState,l===null)return _e(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)bn(l,!1);else{if(Be!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Si(e),i!==null){for(t.flags|=128,bn(l,!1),e=i.updateQueue,t.updateQueue=e,Bi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)uu(a,e),a=a.sibling;return L(Ue,Ue.current&1|2),ge&&Zt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&ft()>Yi&&(t.flags|=128,n=!0,bn(l,!1),t.lanes=4194304)}else{if(!n)if(e=Si(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Bi(t,e),bn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ge)return _e(t),null}else 2*ft()-l.renderingStartTime>Yi&&a!==536870912&&(t.flags|=128,n=!0,bn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=ft(),e.sibling=null,a=Ue.current,L(Ue,n?a&1|2:a&1),ge&&Zt(t,l.treeForkCount),e):(_e(t),null);case 22:case 23:return vt(t),jr(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(_e(t),t.subtreeFlags&6&&(t.flags|=8192)):_e(t),a=t.updateQueue,a!==null&&Bi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&O(Za),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Jt(Le),_e(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function Uh(e,t){switch(sr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Jt(Le),ke(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Zn(t),null;case 31:if(t.memoizedState!==null){if(vt(t),t.alternate===null)throw Error(o(340));Xa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(vt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Xa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(Ue),null;case 4:return ke(),null;case 10:return Jt(t.type),null;case 22:case 23:return vt(t),jr(),e!==null&&O(Za),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Jt(Le),null;case 25:return null;default:return null}}function Hf(e,t){switch(sr(t),t.tag){case 3:Jt(Le),ke();break;case 26:case 27:case 5:Zn(t);break;case 4:ke();break;case 31:t.memoizedState!==null&&vt(t);break;case 13:vt(t);break;case 19:O(Ue);break;case 10:Jt(t.type);break;case 22:case 23:vt(t),jr(),e!==null&&O(Za);break;case 24:Jt(Le)}}function jn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,c=a.inst;l=i(),c.destroy=l}a=a.next}while(a!==n)}}catch(f){Ee(t,t.return,f)}}function ba(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var c=l.inst,f=c.destroy;if(f!==void 0){c.destroy=void 0,n=t;var v=a,w=f;try{w()}catch(_){Ee(n,v,_)}}}l=l.next}while(l!==i)}}catch(_){Ee(t,t.return,_)}}function Lf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{wu(t,a)}catch(l){Ee(e,e.return,l)}}}function Yf(e,t,a){a.props=Wa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Ee(e,t,l)}}function Sn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){Ee(e,t,n)}}function Ht(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){Ee(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){Ee(e,t,n)}else a.current=null}function qf(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){Ee(e,e.return,n)}}function Pr(e,t,a){try{var l=e.stateNode;im(l,e.type,a,t),l[nt]=t}catch(n){Ee(e,e.return,n)}}function Gf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ca(e.type)||e.tag===4}function ec(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ca(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tc(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Xt));else if(l!==4&&(l===27&&Ca(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(tc(e,t,a),e=e.sibling;e!==null;)tc(e,t,a),e=e.sibling}function ki(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Ca(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ki(e,t,a),e=e.sibling;e!==null;)ki(e,t,a),e=e.sibling}function Xf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ie(t,l,a),t[Je]=e,t[nt]=a}catch(i){Ee(e,e.return,i)}}var Pt=!1,Ge=!1,ac=!1,Vf=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function Hh(e,t){if(e=e.containerInfo,Nc=ls,e=tu(e),$s(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var c=0,f=-1,v=-1,w=0,_=0,D=e,T=null;t:for(;;){for(var M;D!==a||n!==0&&D.nodeType!==3||(f=c+n),D!==i||l!==0&&D.nodeType!==3||(v=c+l),D.nodeType===3&&(c+=D.nodeValue.length),(M=D.firstChild)!==null;)T=D,D=M;for(;;){if(D===e)break t;if(T===a&&++w===n&&(f=c),T===i&&++_===l&&(v=c),(M=D.nextSibling)!==null)break;D=T,T=D.parentNode}D=M}a=f===-1||v===-1?null:{start:f,end:v}}else a=null}a=a||{start:0,end:0}}else a=null;for(zc={focusedElem:e,selectionRange:a},ls=!1,Ke=t;Ke!==null;)if(t=Ke,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ke=e;else for(;Ke!==null;){switch(t=Ke,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var $=Wa(a.type,n);e=l.getSnapshotBeforeUpdate($,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Ee(a,a.return,ae)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Cc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Cc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,Ke=e;break}Ke=t.return}}function Qf(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ta(e,a),l&4&&jn(5,a);break;case 1:if(ta(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(c){Ee(a,a.return,c)}else{var n=Wa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){Ee(a,a.return,c)}}l&64&&Lf(a),l&512&&Sn(a,a.return);break;case 3:if(ta(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{wu(e,t)}catch(c){Ee(a,a.return,c)}}break;case 27:t===null&&l&4&&Xf(a);case 26:case 5:ta(e,a),t===null&&l&4&&qf(a),l&512&&Sn(a,a.return);break;case 12:ta(e,a);break;case 31:ta(e,a),l&4&&Jf(e,a);break;case 13:ta(e,a),l&4&&$f(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Kh.bind(null,a),pm(e,a))));break;case 22:if(l=a.memoizedState!==null||Pt,!l){t=t!==null&&t.memoizedState!==null||Ge,n=Pt;var i=Ge;Pt=l,(Ge=t)&&!i?aa(e,a,(a.subtreeFlags&8772)!==0):ta(e,a),Pt=n,Ge=i}break;case 30:break;default:ta(e,a)}}function Zf(e){var t=e.alternate;t!==null&&(e.alternate=null,Zf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Rs(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Re=null,st=!1;function ea(e,t,a){for(a=a.child;a!==null;)Kf(e,t,a),a=a.sibling}function Kf(e,t,a){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(Ql,a)}catch{}switch(a.tag){case 26:Ge||Ht(a,t),ea(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ge||Ht(a,t);var l=Re,n=st;Ca(a.type)&&(Re=a.stateNode,st=!1),ea(e,t,a),_n(a.stateNode),Re=l,st=n;break;case 5:Ge||Ht(a,t);case 6:if(l=Re,n=st,Re=null,ea(e,t,a),Re=l,st=n,Re!==null)if(st)try{(Re.nodeType===9?Re.body:Re.nodeName==="HTML"?Re.ownerDocument.body:Re).removeChild(a.stateNode)}catch(i){Ee(a,t,i)}else try{Re.removeChild(a.stateNode)}catch(i){Ee(a,t,i)}break;case 18:Re!==null&&(st?(e=Re,Ld(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ll(e)):Ld(Re,a.stateNode));break;case 4:l=Re,n=st,Re=a.stateNode.containerInfo,st=!0,ea(e,t,a),Re=l,st=n;break;case 0:case 11:case 14:case 15:ba(2,a,t),Ge||ba(4,a,t),ea(e,t,a);break;case 1:Ge||(Ht(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Yf(a,t,l)),ea(e,t,a);break;case 21:ea(e,t,a);break;case 22:Ge=(l=Ge)||a.memoizedState!==null,ea(e,t,a),Ge=l;break;default:ea(e,t,a)}}function Jf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ll(e)}catch(a){Ee(t,t.return,a)}}}function $f(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ll(e)}catch(a){Ee(t,t.return,a)}}function Lh(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Vf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Vf),t;default:throw Error(o(435,e.tag))}}function Ui(e,t){var a=Lh(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=Jh.bind(null,e,l);l.then(n,n)}})}function rt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,c=t,f=c;e:for(;f!==null;){switch(f.tag){case 27:if(Ca(f.type)){Re=f.stateNode,st=!1;break e}break;case 5:Re=f.stateNode,st=!1;break e;case 3:case 4:Re=f.stateNode.containerInfo,st=!0;break e}f=f.return}if(Re===null)throw Error(o(160));Kf(i,c,n),Re=null,st=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Ff(t,e),t=t.sibling}var Dt=null;function Ff(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:rt(t,e),ct(e),l&4&&(ba(3,e,e.return),jn(3,e),ba(5,e,e.return));break;case 1:rt(t,e),ct(e),l&512&&(Ge||a===null||Ht(a,a.return)),l&64&&Pt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Dt;if(rt(t,e),ct(e),l&512&&(Ge||a===null||Ht(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Jl]||i[Je]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Ie(i,l,a),i[Je]=e,Ze(i),l=i;break e;case"link":var c=Fd("link","href",n).get(l+(a.href||""));if(c){for(var f=0;f<c.length;f++)if(i=c[f],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(f,1);break t}}i=n.createElement(l),Ie(i,l,a),n.head.appendChild(i);break;case"meta":if(c=Fd("meta","content",n).get(l+(a.content||""))){for(f=0;f<c.length;f++)if(i=c[f],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(f,1);break t}}i=n.createElement(l),Ie(i,l,a),n.head.appendChild(i);break;default:throw Error(o(468,l))}i[Je]=e,Ze(i),l=i}e.stateNode=l}else Wd(n,e.type,e.stateNode);else e.stateNode=$d(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?Wd(n,e.type,e.stateNode):$d(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Pr(e,e.memoizedProps,a.memoizedProps)}break;case 27:rt(t,e),ct(e),l&512&&(Ge||a===null||Ht(a,a.return)),a!==null&&l&4&&Pr(e,e.memoizedProps,a.memoizedProps);break;case 5:if(rt(t,e),ct(e),l&512&&(Ge||a===null||Ht(a,a.return)),e.flags&32){n=e.stateNode;try{cl(n,"")}catch($){Ee(e,e.return,$)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Pr(e,n,a!==null?a.memoizedProps:n)),l&1024&&(ac=!0);break;case 6:if(rt(t,e),ct(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch($){Ee(e,e.return,$)}}break;case 3:if(Pi=null,n=Dt,Dt=Wi(t.containerInfo),rt(t,e),Dt=n,ct(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Ll(t.containerInfo)}catch($){Ee(e,e.return,$)}ac&&(ac=!1,Wf(e));break;case 4:l=Dt,Dt=Wi(e.stateNode.containerInfo),rt(t,e),ct(e),Dt=l;break;case 12:rt(t,e),ct(e);break;case 31:rt(t,e),ct(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ui(e,l)));break;case 13:rt(t,e),ct(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Li=ft()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ui(e,l)));break;case 22:n=e.memoizedState!==null;var v=a!==null&&a.memoizedState!==null,w=Pt,_=Ge;if(Pt=w||n,Ge=_||v,rt(t,e),Ge=_,Pt=w,ct(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||v||Pt||Ge||Ia(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){v=a=t;try{if(i=v.stateNode,n)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{f=v.stateNode;var D=v.memoizedProps.style,T=D!=null&&D.hasOwnProperty("display")?D.display:null;f.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch($){Ee(v,v.return,$)}}}else if(t.tag===6){if(a===null){v=t;try{v.stateNode.nodeValue=n?"":v.memoizedProps}catch($){Ee(v,v.return,$)}}}else if(t.tag===18){if(a===null){v=t;try{var M=v.stateNode;n?Yd(M,!0):Yd(v.stateNode,!1)}catch($){Ee(v,v.return,$)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Ui(e,a))));break;case 19:rt(t,e),ct(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ui(e,l)));break;case 30:break;case 21:break;default:rt(t,e),ct(e)}}function ct(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Gf(l)){a=l;break}l=l.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var n=a.stateNode,i=ec(e);ki(e,i,n);break;case 5:var c=a.stateNode;a.flags&32&&(cl(c,""),a.flags&=-33);var f=ec(e);ki(e,f,c);break;case 3:case 4:var v=a.stateNode.containerInfo,w=ec(e);tc(e,w,v);break;default:throw Error(o(161))}}catch(_){Ee(e,e.return,_)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Wf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ta(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Qf(e,t.alternate,t),t=t.sibling}function Ia(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ba(4,t,t.return),Ia(t);break;case 1:Ht(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Yf(t,t.return,a),Ia(t);break;case 27:_n(t.stateNode);case 26:case 5:Ht(t,t.return),Ia(t);break;case 22:t.memoizedState===null&&Ia(t);break;case 30:Ia(t);break;default:Ia(t)}e=e.sibling}}function aa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,c=i.flags;switch(i.tag){case 0:case 11:case 15:aa(n,i,a),jn(4,i);break;case 1:if(aa(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(w){Ee(l,l.return,w)}if(l=i,n=l.updateQueue,n!==null){var f=l.stateNode;try{var v=n.shared.hiddenCallbacks;if(v!==null)for(n.shared.hiddenCallbacks=null,n=0;n<v.length;n++)Cu(v[n],f)}catch(w){Ee(l,l.return,w)}}a&&c&64&&Lf(i),Sn(i,i.return);break;case 27:Xf(i);case 26:case 5:aa(n,i,a),a&&l===null&&c&4&&qf(i),Sn(i,i.return);break;case 12:aa(n,i,a);break;case 31:aa(n,i,a),a&&c&4&&Jf(n,i);break;case 13:aa(n,i,a),a&&c&4&&$f(n,i);break;case 22:i.memoizedState===null&&aa(n,i,a),Sn(i,i.return);break;case 30:break;default:aa(n,i,a)}t=t.sibling}}function lc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&cn(a))}function nc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&cn(e))}function Ot(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)If(e,t,a,l),t=t.sibling}function If(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Ot(e,t,a,l),n&2048&&jn(9,t);break;case 1:Ot(e,t,a,l);break;case 3:Ot(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&cn(e)));break;case 12:if(n&2048){Ot(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,c=i.id,f=i.onPostCommit;typeof f=="function"&&f(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){Ee(t,t.return,v)}}else Ot(e,t,a,l);break;case 31:Ot(e,t,a,l);break;case 13:Ot(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,c=t.alternate,t.memoizedState!==null?i._visibility&2?Ot(e,t,a,l):Nn(e,t):i._visibility&2?Ot(e,t,a,l):(i._visibility|=2,wl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&lc(c,t);break;case 24:Ot(e,t,a,l),n&2048&&nc(t.alternate,t);break;default:Ot(e,t,a,l)}}function wl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,c=t,f=a,v=l,w=c.flags;switch(c.tag){case 0:case 11:case 15:wl(i,c,f,v,n),jn(8,c);break;case 23:break;case 22:var _=c.stateNode;c.memoizedState!==null?_._visibility&2?wl(i,c,f,v,n):Nn(i,c):(_._visibility|=2,wl(i,c,f,v,n)),n&&w&2048&&lc(c.alternate,c);break;case 24:wl(i,c,f,v,n),n&&w&2048&&nc(c.alternate,c);break;default:wl(i,c,f,v,n)}t=t.sibling}}function Nn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:Nn(a,l),n&2048&&lc(l.alternate,l);break;case 24:Nn(a,l),n&2048&&nc(l.alternate,l);break;default:Nn(a,l)}t=t.sibling}}var zn=8192;function Tl(e,t,a){if(e.subtreeFlags&zn)for(e=e.child;e!==null;)Pf(e,t,a),e=e.sibling}function Pf(e,t,a){switch(e.tag){case 26:Tl(e,t,a),e.flags&zn&&e.memoizedState!==null&&Em(a,Dt,e.memoizedState,e.memoizedProps);break;case 5:Tl(e,t,a);break;case 3:case 4:var l=Dt;Dt=Wi(e.stateNode.containerInfo),Tl(e,t,a),Dt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=zn,zn=16777216,Tl(e,t,a),zn=l):Tl(e,t,a));break;default:Tl(e,t,a)}}function ed(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function En(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ke=l,ad(l,e)}ed(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)td(e),e=e.sibling}function td(e){switch(e.tag){case 0:case 11:case 15:En(e),e.flags&2048&&ba(9,e,e.return);break;case 3:En(e);break;case 12:En(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Hi(e)):En(e);break;default:En(e)}}function Hi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ke=l,ad(l,e)}ed(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ba(8,t,t.return),Hi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Hi(t));break;default:Hi(t)}e=e.sibling}}function ad(e,t){for(;Ke!==null;){var a=Ke;switch(a.tag){case 0:case 11:case 15:ba(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:cn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ke=l;else e:for(a=e;Ke!==null;){l=Ke;var n=l.sibling,i=l.return;if(Zf(l),l===a){Ke=null;break e}if(n!==null){n.return=i,Ke=n;break e}Ke=i}}}var Yh={getCacheForType:function(e){var t=Fe(Le),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Fe(Le).controller.signal}},qh=typeof WeakMap=="function"?WeakMap:Map,je=0,Te=null,de=null,he=0,ze=0,xt=null,ja=!1,Ml=!1,ic=!1,la=0,Be=0,Sa=0,Pa=0,sc=0,yt=0,_l=0,An=null,ot=null,rc=!1,Li=0,ld=0,Yi=1/0,qi=null,Na=null,Ve=0,za=null,Rl=null,na=0,cc=0,oc=null,nd=null,Cn=0,uc=null;function bt(){return(je&2)!==0&&he!==0?he&-he:A.T!==null?gc():yo()}function id(){if(yt===0)if((he&536870912)===0||ge){var e=$n;$n<<=1,($n&3932160)===0&&($n=262144),yt=e}else yt=536870912;return e=gt.current,e!==null&&(e.flags|=32),yt}function ut(e,t,a){(e===Te&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(Dl(e,0),Ea(e,he,yt,!1)),Kl(e,a),((je&2)===0||e!==Te)&&(e===Te&&((je&2)===0&&(Pa|=a),Be===4&&Ea(e,he,yt,!1)),Lt(e))}function sd(e,t,a){if((je&6)!==0)throw Error(o(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Zl(e,t),n=l?Vh(e,t):dc(e,t,!0),i=l;do{if(n===0){Ml&&!l&&Ea(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!Gh(a)){n=dc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var f=e;n=An;var v=f.current.memoizedState.isDehydrated;if(v&&(Dl(f,c).flags|=256),c=dc(f,c,!1),c!==2){if(ic&&!v){f.errorRecoveryDisabledLanes|=i,Pa|=i,n=4;break e}i=ot,ot=n,i!==null&&(ot===null?ot=i:ot.push.apply(ot,i))}n=c}if(i=!1,n!==2)continue}}if(n===1){Dl(e,0),Ea(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:Ea(l,t,yt,!ja);break e;case 2:ot=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(n=Li+300-ft(),10<n)){if(Ea(l,t,yt,!ja),Wn(l,0,!0)!==0)break e;na=t,l.timeoutHandle=Ud(rd.bind(null,l,a,ot,qi,rc,t,yt,Pa,_l,ja,i,"Throttled",-0,0),n);break e}rd(l,a,ot,qi,rc,t,yt,Pa,_l,ja,i,null,-0,0)}}break}while(!0);Lt(e)}function rd(e,t,a,l,n,i,c,f,v,w,_,D,T,M){if(e.timeoutHandle=-1,D=t.subtreeFlags,D&8192||(D&16785408)===16785408){D={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xt},Pf(t,i,D);var $=(i&62914560)===i?Li-ft():(i&4194048)===i?ld-ft():0;if($=Am(D,$),$!==null){na=i,e.cancelPendingCommit=$(md.bind(null,e,t,i,a,l,n,c,f,v,_,D,null,T,M)),Ea(e,i,c,!w);return}}md(e,t,i,a,l,n,c,f,v)}function Gh(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!ht(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ea(e,t,a,l){t&=~sc,t&=~Pa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-pt(n),c=1<<i;l[i]=-1,n&=~c}a!==0&&go(e,a,t)}function Gi(){return(je&6)===0?(wn(0),!1):!0}function fc(){if(de!==null){if(ze===0)var e=de.return;else e=de,Kt=Va=null,Cr(e),Nl=null,un=0,e=de;for(;e!==null;)Hf(e.alternate,e),e=e.return;de=null}}function Dl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,cm(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),na=0,fc(),Te=e,de=a=Qt(e.current,null),he=t,ze=0,xt=null,ja=!1,Ml=Zl(e,t),ic=!1,_l=yt=sc=Pa=Sa=Be=0,ot=An=null,rc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-pt(l),i=1<<n;t|=e[n],l&=~i}return la=t,oi(),a}function cd(e,t){re=null,A.H=xn,t===Sl||t===vi?(t=Nu(),ze=3):t===mr?(t=Nu(),ze=4):ze=t===Xr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,xt=t,de===null&&(Be=1,_i(e,zt(t,e.current)))}function od(){var e=gt.current;return e===null?!0:(he&4194048)===he?wt===null:(he&62914560)===he||(he&536870912)!==0?e===wt:!1}function ud(){var e=A.H;return A.H=xn,e===null?xn:e}function fd(){var e=A.A;return A.A=Yh,e}function Xi(){Be=4,ja||(he&4194048)!==he&&gt.current!==null||(Ml=!0),(Sa&134217727)===0&&(Pa&134217727)===0||Te===null||Ea(Te,he,yt,!1)}function dc(e,t,a){var l=je;je|=2;var n=ud(),i=fd();(Te!==e||he!==t)&&(qi=null,Dl(e,t)),t=!1;var c=Be;e:do try{if(ze!==0&&de!==null){var f=de,v=xt;switch(ze){case 8:fc(),c=6;break e;case 3:case 2:case 9:case 6:gt.current===null&&(t=!0);var w=ze;if(ze=0,xt=null,Ol(e,f,v,w),a&&Ml){c=0;break e}break;default:w=ze,ze=0,xt=null,Ol(e,f,v,w)}}Xh(),c=Be;break}catch(_){cd(e,_)}while(!0);return t&&e.shellSuspendCounter++,Kt=Va=null,je=l,A.H=n,A.A=i,de===null&&(Te=null,he=0,oi()),c}function Xh(){for(;de!==null;)dd(de)}function Vh(e,t){var a=je;je|=2;var l=ud(),n=fd();Te!==e||he!==t?(qi=null,Yi=ft()+500,Dl(e,t)):Ml=Zl(e,t);e:do try{if(ze!==0&&de!==null){t=de;var i=xt;t:switch(ze){case 1:ze=0,xt=null,Ol(e,t,i,1);break;case 2:case 9:if(ju(i)){ze=0,xt=null,pd(t);break}t=function(){ze!==2&&ze!==9||Te!==e||(ze=7),Lt(e)},i.then(t,t);break e;case 3:ze=7;break e;case 4:ze=5;break e;case 7:ju(i)?(ze=0,xt=null,pd(t)):(ze=0,xt=null,Ol(e,t,i,7));break;case 5:var c=null;switch(de.tag){case 26:c=de.memoizedState;case 5:case 27:var f=de;if(c?Id(c):f.stateNode.complete){ze=0,xt=null;var v=f.sibling;if(v!==null)de=v;else{var w=f.return;w!==null?(de=w,Vi(w)):de=null}break t}}ze=0,xt=null,Ol(e,t,i,5);break;case 6:ze=0,xt=null,Ol(e,t,i,6);break;case 8:fc(),Be=6;break e;default:throw Error(o(462))}}Qh();break}catch(_){cd(e,_)}while(!0);return Kt=Va=null,A.H=l,A.A=n,je=a,de!==null?0:(Te=null,he=0,oi(),Be)}function Qh(){for(;de!==null&&!h0();)dd(de)}function dd(e){var t=kf(e.alternate,e,la);e.memoizedProps=e.pendingProps,t===null?Vi(e):de=t}function pd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Mf(a,t,t.pendingProps,t.type,void 0,he);break;case 11:t=Mf(a,t,t.pendingProps,t.type.render,t.ref,he);break;case 5:Cr(t);default:Hf(a,t),t=de=uu(t,la),t=kf(a,t,la)}e.memoizedProps=e.pendingProps,t===null?Vi(e):de=t}function Ol(e,t,a,l){Kt=Va=null,Cr(t),Nl=null,un=0;var n=t.return;try{if(Dh(e,n,t,a,he)){Be=1,_i(e,zt(a,e.current)),de=null;return}}catch(i){if(n!==null)throw de=n,i;Be=1,_i(e,zt(a,e.current)),de=null;return}t.flags&32768?(ge||l===1?e=!0:Ml||(he&536870912)!==0?e=!1:(ja=e=!0,(l===2||l===9||l===3||l===6)&&(l=gt.current,l!==null&&l.tag===13&&(l.flags|=16384))),hd(t,e)):Vi(t)}function Vi(e){var t=e;do{if((t.flags&32768)!==0){hd(t,ja);return}e=t.return;var a=kh(t.alternate,t,la);if(a!==null){de=a;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);Be===0&&(Be=5)}function hd(e,t){do{var a=Uh(e.alternate,e);if(a!==null){a.flags&=32767,de=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){de=e;return}de=e=a}while(e!==null);Be=6,de=null}function md(e,t,a,l,n,i,c,f,v){e.cancelPendingCommit=null;do Qi();while(Ve!==0);if((je&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(i=t.lanes|t.childLanes,i|=er,z0(e,a,i,c,f,v),e===Te&&(de=Te=null,he=0),Rl=t,za=e,na=a,cc=i,oc=n,nd=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,$h(Kn,function(){return bd(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=A.T,A.T=null,n=k.p,k.p=2,c=je,je|=4;try{Hh(e,t,a)}finally{je=c,k.p=n,A.T=l}}Ve=1,gd(),vd(),xd()}}function gd(){if(Ve===1){Ve=0;var e=za,t=Rl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=A.T,A.T=null;var l=k.p;k.p=2;var n=je;je|=4;try{Ff(t,e);var i=zc,c=tu(e.containerInfo),f=i.focusedElem,v=i.selectionRange;if(c!==f&&f&&f.ownerDocument&&eu(f.ownerDocument.documentElement,f)){if(v!==null&&$s(f)){var w=v.start,_=v.end;if(_===void 0&&(_=w),"selectionStart"in f)f.selectionStart=w,f.selectionEnd=Math.min(_,f.value.length);else{var D=f.ownerDocument||document,T=D&&D.defaultView||window;if(T.getSelection){var M=T.getSelection(),$=f.textContent.length,ae=Math.min(v.start,$),we=v.end===void 0?ae:Math.min(v.end,$);!M.extend&&ae>we&&(c=we,we=ae,ae=c);var N=Po(f,ae),x=Po(f,we);if(N&&x&&(M.rangeCount!==1||M.anchorNode!==N.node||M.anchorOffset!==N.offset||M.focusNode!==x.node||M.focusOffset!==x.offset)){var C=D.createRange();C.setStart(N.node,N.offset),M.removeAllRanges(),ae>we?(M.addRange(C),M.extend(x.node,x.offset)):(C.setEnd(x.node,x.offset),M.addRange(C))}}}}for(D=[],M=f;M=M.parentNode;)M.nodeType===1&&D.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<D.length;f++){var R=D[f];R.element.scrollLeft=R.left,R.element.scrollTop=R.top}}ls=!!Nc,zc=Nc=null}finally{je=n,k.p=l,A.T=a}}e.current=t,Ve=2}}function vd(){if(Ve===2){Ve=0;var e=za,t=Rl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=A.T,A.T=null;var l=k.p;k.p=2;var n=je;je|=4;try{Qf(e,t.alternate,t)}finally{je=n,k.p=l,A.T=a}}Ve=3}}function xd(){if(Ve===4||Ve===3){Ve=0,m0();var e=za,t=Rl,a=na,l=nd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ve=5:(Ve=0,Rl=za=null,yd(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Na=null),Ms(a),t=t.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(Ql,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=A.T,n=k.p,k.p=2,A.T=null;try{for(var i=e.onRecoverableError,c=0;c<l.length;c++){var f=l[c];i(f.value,{componentStack:f.stack})}}finally{A.T=t,k.p=n}}(na&3)!==0&&Qi(),Lt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===uc?Cn++:(Cn=0,uc=e):Cn=0,wn(0)}}function yd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,cn(t)))}function Qi(){return gd(),vd(),xd(),bd()}function bd(){if(Ve!==5)return!1;var e=za,t=cc;cc=0;var a=Ms(na),l=A.T,n=k.p;try{k.p=32>a?32:a,A.T=null,a=oc,oc=null;var i=za,c=na;if(Ve=0,Rl=za=null,na=0,(je&6)!==0)throw Error(o(331));var f=je;if(je|=4,td(i.current),If(i,i.current,c,a),je=f,wn(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(Ql,i)}catch{}return!0}finally{k.p=n,A.T=l,yd(e,t)}}function jd(e,t,a){t=zt(a,t),t=Gr(e.stateNode,t,2),e=va(e,t,2),e!==null&&(Kl(e,2),Lt(e))}function Ee(e,t,a){if(e.tag===3)jd(e,e,a);else for(;t!==null;){if(t.tag===3){jd(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Na===null||!Na.has(l))){e=zt(a,e),a=Sf(2),l=va(t,a,2),l!==null&&(Nf(a,l,t,e),Kl(l,2),Lt(l));break}}t=t.return}}function pc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new qh;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(ic=!0,n.add(a),e=Zh.bind(null,e,t,a),t.then(e,e))}function Zh(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Te===e&&(he&a)===a&&(Be===4||Be===3&&(he&62914560)===he&&300>ft()-Li?(je&2)===0&&Dl(e,0):sc|=a,_l===he&&(_l=0)),Lt(e)}function Sd(e,t){t===0&&(t=mo()),e=qa(e,t),e!==null&&(Kl(e,t),Lt(e))}function Kh(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Sd(e,a)}function Jh(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),Sd(e,a)}function $h(e,t){return As(e,t)}var Zi=null,Bl=null,hc=!1,Ki=!1,mc=!1,Aa=0;function Lt(e){e!==Bl&&e.next===null&&(Bl===null?Zi=Bl=e:Bl=Bl.next=e),Ki=!0,hc||(hc=!0,Wh())}function wn(e,t){if(!mc&&Ki){mc=!0;do for(var a=!1,l=Zi;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var c=l.suspendedLanes,f=l.pingedLanes;i=(1<<31-pt(42|e)+1)-1,i&=n&~(c&~f),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Ad(l,i))}else i=he,i=Wn(l,l===Te?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Zl(l,i)||(a=!0,Ad(l,i));l=l.next}while(a);mc=!1}}function Fh(){Nd()}function Nd(){Ki=hc=!1;var e=0;Aa!==0&&rm()&&(e=Aa);for(var t=ft(),a=null,l=Zi;l!==null;){var n=l.next,i=zd(l,t);i===0?(l.next=null,a===null?Zi=n:a.next=n,n===null&&(Bl=a)):(a=l,(e!==0||(i&3)!==0)&&(Ki=!0)),l=n}Ve!==0&&Ve!==5||wn(e),Aa!==0&&(Aa=0)}function zd(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var c=31-pt(i),f=1<<c,v=n[c];v===-1?((f&a)===0||(f&l)!==0)&&(n[c]=N0(f,t)):v<=t&&(e.expiredLanes|=f),i&=~f}if(t=Te,a=he,a=Wn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Cs(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Zl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&Cs(l),Ms(a)){case 2:case 8:a=po;break;case 32:a=Kn;break;case 268435456:a=ho;break;default:a=Kn}return l=Ed.bind(null,e),a=As(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&Cs(l),e.callbackPriority=2,e.callbackNode=null,2}function Ed(e,t){if(Ve!==0&&Ve!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Qi()&&e.callbackNode!==a)return null;var l=he;return l=Wn(e,e===Te?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(sd(e,l,t),zd(e,ft()),e.callbackNode!=null&&e.callbackNode===a?Ed.bind(null,e):null)}function Ad(e,t){if(Qi())return null;sd(e,t,!0)}function Wh(){om(function(){(je&6)!==0?As(fo,Fh):Nd()})}function gc(){if(Aa===0){var e=bl;e===0&&(e=Jn,Jn<<=1,(Jn&261888)===0&&(Jn=256)),Aa=e}return Aa}function Cd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ti(""+e)}function wd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Ih(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=Cd((n[nt]||null).action),c=l.submitter;c&&(t=(t=c[nt]||null)?Cd(t.formAction):c.getAttribute("formAction"),t!==null&&(i=t,c=null));var f=new ii("action","action",null,l,n);e.push({event:f,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Aa!==0){var v=c?wd(n,c):new FormData(n);kr(a,{pending:!0,data:v,method:n.method,action:i},null,v)}}else typeof i=="function"&&(f.preventDefault(),v=c?wd(n,c):new FormData(n),kr(a,{pending:!0,data:v,method:n.method,action:i},i,v))},currentTarget:n}]})}}for(var vc=0;vc<Ps.length;vc++){var xc=Ps[vc],Ph=xc.toLowerCase(),em=xc[0].toUpperCase()+xc.slice(1);Rt(Ph,"on"+em)}Rt(nu,"onAnimationEnd"),Rt(iu,"onAnimationIteration"),Rt(su,"onAnimationStart"),Rt("dblclick","onDoubleClick"),Rt("focusin","onFocus"),Rt("focusout","onBlur"),Rt(gh,"onTransitionRun"),Rt(vh,"onTransitionStart"),Rt(xh,"onTransitionCancel"),Rt(ru,"onTransitionEnd"),sl("onMouseEnter",["mouseout","mouseover"]),sl("onMouseLeave",["mouseout","mouseover"]),sl("onPointerEnter",["pointerout","pointerover"]),sl("onPointerLeave",["pointerout","pointerover"]),Ua("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ua("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ua("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ua("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ua("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ua("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Tn));function Td(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var c=l.length-1;0<=c;c--){var f=l[c],v=f.instance,w=f.currentTarget;if(f=f.listener,v!==i&&n.isPropagationStopped())break e;i=f,n.currentTarget=w;try{i(n)}catch(_){ci(_)}n.currentTarget=null,i=v}else for(c=0;c<l.length;c++){if(f=l[c],v=f.instance,w=f.currentTarget,f=f.listener,v!==i&&n.isPropagationStopped())break e;i=f,n.currentTarget=w;try{i(n)}catch(_){ci(_)}n.currentTarget=null,i=v}}}}function pe(e,t){var a=t[_s];a===void 0&&(a=t[_s]=new Set);var l=e+"__bubble";a.has(l)||(Md(t,e,2,!1),a.add(l))}function yc(e,t,a){var l=0;t&&(l|=4),Md(a,e,l,t)}var Ji="_reactListening"+Math.random().toString(36).slice(2);function bc(e){if(!e[Ji]){e[Ji]=!0,So.forEach(function(a){a!=="selectionchange"&&(tm.has(a)||yc(a,!1,e),yc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ji]||(t[Ji]=!0,yc("selectionchange",!1,t))}}function Md(e,t,a,l){switch(ip(t)){case 2:var n=Tm;break;case 8:n=Mm;break;default:n=Bc}a=n.bind(null,t,a,e),n=void 0,!Ys||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function jc(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var c=l.tag;if(c===3||c===4){var f=l.stateNode.containerInfo;if(f===n)break;if(c===4)for(c=l.return;c!==null;){var v=c.tag;if((v===3||v===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;f!==null;){if(c=ll(f),c===null)return;if(v=c.tag,v===5||v===6||v===26||v===27){l=i=c;continue e}f=f.parentNode}}l=l.return}Oo(function(){var w=i,_=Hs(a),D=[];e:{var T=cu.get(e);if(T!==void 0){var M=ii,$=e;switch(e){case"keypress":if(li(a)===0)break e;case"keydown":case"keyup":M=J0;break;case"focusin":$="focus",M=Vs;break;case"focusout":$="blur",M=Vs;break;case"beforeblur":case"afterblur":M=Vs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=Uo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=k0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=W0;break;case nu:case iu:case su:M=L0;break;case ru:M=P0;break;case"scroll":case"scrollend":M=O0;break;case"wheel":M=th;break;case"copy":case"cut":case"paste":M=q0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=Lo;break;case"toggle":case"beforetoggle":M=lh}var ae=(t&4)!==0,we=!ae&&(e==="scroll"||e==="scrollend"),N=ae?T!==null?T+"Capture":null:T;ae=[];for(var x=w,C;x!==null;){var R=x;if(C=R.stateNode,R=R.tag,R!==5&&R!==26&&R!==27||C===null||N===null||(R=Fl(x,N),R!=null&&ae.push(Mn(x,R,C))),we)break;x=x.return}0<ae.length&&(T=new M(T,$,null,a,_),D.push({event:T,listeners:ae}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",T&&a!==Us&&($=a.relatedTarget||a.fromElement)&&(ll($)||$[al]))break e;if((M||T)&&(T=_.window===_?_:(T=_.ownerDocument)?T.defaultView||T.parentWindow:window,M?($=a.relatedTarget||a.toElement,M=w,$=$?ll($):null,$!==null&&(we=h($),ae=$.tag,$!==we||ae!==5&&ae!==27&&ae!==6)&&($=null)):(M=null,$=w),M!==$)){if(ae=Uo,R="onMouseLeave",N="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(ae=Lo,R="onPointerLeave",N="onPointerEnter",x="pointer"),we=M==null?T:$l(M),C=$==null?T:$l($),T=new ae(R,x+"leave",M,a,_),T.target=we,T.relatedTarget=C,R=null,ll(_)===w&&(ae=new ae(N,x+"enter",$,a,_),ae.target=C,ae.relatedTarget=we,R=ae),we=R,M&&$)t:{for(ae=am,N=M,x=$,C=0,R=N;R;R=ae(R))C++;R=0;for(var te=x;te;te=ae(te))R++;for(;0<C-R;)N=ae(N),C--;for(;0<R-C;)x=ae(x),R--;for(;C--;){if(N===x||x!==null&&N===x.alternate){ae=N;break t}N=ae(N),x=ae(x)}ae=null}else ae=null;M!==null&&_d(D,T,M,ae,!1),$!==null&&we!==null&&_d(D,we,$,ae,!0)}}e:{if(T=w?$l(w):window,M=T.nodeName&&T.nodeName.toLowerCase(),M==="select"||M==="input"&&T.type==="file")var ye=Ko;else if(Qo(T))if(Jo)ye=ph;else{ye=fh;var W=uh}else M=T.nodeName,!M||M.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?w&&ks(w.elementType)&&(ye=Ko):ye=dh;if(ye&&(ye=ye(e,w))){Zo(D,ye,a,_);break e}W&&W(e,T,w),e==="focusout"&&w&&T.type==="number"&&w.memoizedProps.value!=null&&Bs(T,"number",T.value)}switch(W=w?$l(w):window,e){case"focusin":(Qo(W)||W.contentEditable==="true")&&(dl=W,Fs=w,nn=null);break;case"focusout":nn=Fs=dl=null;break;case"mousedown":Ws=!0;break;case"contextmenu":case"mouseup":case"dragend":Ws=!1,au(D,a,_);break;case"selectionchange":if(mh)break;case"keydown":case"keyup":au(D,a,_)}var ce;if(Zs)e:{switch(e){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else fl?Xo(e,a)&&(me="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(me="onCompositionStart");me&&(Yo&&a.locale!=="ko"&&(fl||me!=="onCompositionStart"?me==="onCompositionEnd"&&fl&&(ce=Bo()):(ua=_,qs="value"in ua?ua.value:ua.textContent,fl=!0)),W=$i(w,me),0<W.length&&(me=new Ho(me,e,null,a,_),D.push({event:me,listeners:W}),ce?me.data=ce:(ce=Vo(a),ce!==null&&(me.data=ce)))),(ce=ih?sh(e,a):rh(e,a))&&(me=$i(w,"onBeforeInput"),0<me.length&&(W=new Ho("onBeforeInput","beforeinput",null,a,_),D.push({event:W,listeners:me}),W.data=ce)),Ih(D,e,w,a,_)}Td(D,t)})}function Mn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function $i(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Fl(e,a),n!=null&&l.unshift(Mn(e,n,i)),n=Fl(e,t),n!=null&&l.push(Mn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function am(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function _d(e,t,a,l,n){for(var i=t._reactName,c=[];a!==null&&a!==l;){var f=a,v=f.alternate,w=f.stateNode;if(f=f.tag,v!==null&&v===l)break;f!==5&&f!==26&&f!==27||w===null||(v=w,n?(w=Fl(a,i),w!=null&&c.unshift(Mn(a,w,v))):n||(w=Fl(a,i),w!=null&&c.push(Mn(a,w,v)))),a=a.return}c.length!==0&&e.push({event:t,listeners:c})}var lm=/\r\n?/g,nm=/\u0000|\uFFFD/g;function Rd(e){return(typeof e=="string"?e:""+e).replace(lm,`
`).replace(nm,"")}function Dd(e,t){return t=Rd(t),Rd(e)===t}function Ce(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||cl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&cl(e,""+l);break;case"className":Pn(e,"class",l);break;case"tabIndex":Pn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Pn(e,a,l);break;case"style":Ro(e,l,i);break;case"data":if(t!=="object"){Pn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ti(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&Ce(e,t,"name",n.name,n,null),Ce(e,t,"formEncType",n.formEncType,n,null),Ce(e,t,"formMethod",n.formMethod,n,null),Ce(e,t,"formTarget",n.formTarget,n,null)):(Ce(e,t,"encType",n.encType,n,null),Ce(e,t,"method",n.method,n,null),Ce(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ti(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Xt);break;case"onScroll":l!=null&&pe("scroll",e);break;case"onScrollEnd":l!=null&&pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=ti(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":pe("beforetoggle",e),pe("toggle",e),In(e,"popover",l);break;case"xlinkActuate":Gt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Gt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Gt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Gt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Gt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Gt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":In(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=R0.get(a)||a,In(e,a,l))}}function Sc(e,t,a,l,n,i){switch(a){case"style":Ro(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"children":typeof l=="string"?cl(e,l):(typeof l=="number"||typeof l=="bigint")&&cl(e,""+l);break;case"onScroll":l!=null&&pe("scroll",e);break;case"onScrollEnd":l!=null&&pe("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Xt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!No.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[nt]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):In(e,a,l)}}}function Ie(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];if(c!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ce(e,t,i,c,a,null)}}n&&Ce(e,t,"srcSet",a.srcSet,a,null),l&&Ce(e,t,"src",a.src,a,null);return;case"input":pe("invalid",e);var f=i=c=n=null,v=null,w=null;for(l in a)if(a.hasOwnProperty(l)){var _=a[l];if(_!=null)switch(l){case"name":n=_;break;case"type":c=_;break;case"checked":v=_;break;case"defaultChecked":w=_;break;case"value":i=_;break;case"defaultValue":f=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(o(137,t));break;default:Ce(e,t,l,_,a,null)}}wo(e,i,f,v,w,c,n,!1);return;case"select":pe("invalid",e),l=c=i=null;for(n in a)if(a.hasOwnProperty(n)&&(f=a[n],f!=null))switch(n){case"value":i=f;break;case"defaultValue":c=f;break;case"multiple":l=f;default:Ce(e,t,n,f,a,null)}t=i,a=c,e.multiple=!!l,t!=null?rl(e,!!l,t,!1):a!=null&&rl(e,!!l,a,!0);return;case"textarea":pe("invalid",e),i=n=l=null;for(c in a)if(a.hasOwnProperty(c)&&(f=a[c],f!=null))switch(c){case"value":l=f;break;case"defaultValue":n=f;break;case"children":i=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(o(91));break;default:Ce(e,t,c,f,a,null)}Mo(e,l,n,i);return;case"option":for(v in a)a.hasOwnProperty(v)&&(l=a[v],l!=null)&&(v==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Ce(e,t,v,l,a,null));return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(l=0;l<Tn.length;l++)pe(Tn[l],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in a)if(a.hasOwnProperty(w)&&(l=a[w],l!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ce(e,t,w,l,a,null)}return;default:if(ks(t)){for(_ in a)a.hasOwnProperty(_)&&(l=a[_],l!==void 0&&Sc(e,t,_,l,a,void 0));return}}for(f in a)a.hasOwnProperty(f)&&(l=a[f],l!=null&&Ce(e,t,f,l,a,null))}function im(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,c=null,f=null,v=null,w=null,_=null;for(M in a){var D=a[M];if(a.hasOwnProperty(M)&&D!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":v=D;default:l.hasOwnProperty(M)||Ce(e,t,M,null,l,D)}}for(var T in l){var M=l[T];if(D=a[T],l.hasOwnProperty(T)&&(M!=null||D!=null))switch(T){case"type":i=M;break;case"name":n=M;break;case"checked":w=M;break;case"defaultChecked":_=M;break;case"value":c=M;break;case"defaultValue":f=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(o(137,t));break;default:M!==D&&Ce(e,t,T,M,l,D)}}Os(e,c,f,v,w,_,i,n);return;case"select":M=c=f=T=null;for(i in a)if(v=a[i],a.hasOwnProperty(i)&&v!=null)switch(i){case"value":break;case"multiple":M=v;default:l.hasOwnProperty(i)||Ce(e,t,i,null,l,v)}for(n in l)if(i=l[n],v=a[n],l.hasOwnProperty(n)&&(i!=null||v!=null))switch(n){case"value":T=i;break;case"defaultValue":f=i;break;case"multiple":c=i;default:i!==v&&Ce(e,t,n,i,l,v)}t=f,a=c,l=M,T!=null?rl(e,!!a,T,!1):!!l!=!!a&&(t!=null?rl(e,!!a,t,!0):rl(e,!!a,a?[]:"",!1));return;case"textarea":M=T=null;for(f in a)if(n=a[f],a.hasOwnProperty(f)&&n!=null&&!l.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:Ce(e,t,f,null,l,n)}for(c in l)if(n=l[c],i=a[c],l.hasOwnProperty(c)&&(n!=null||i!=null))switch(c){case"value":T=n;break;case"defaultValue":M=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(o(91));break;default:n!==i&&Ce(e,t,c,n,l,i)}To(e,T,M);return;case"option":for(var $ in a)T=a[$],a.hasOwnProperty($)&&T!=null&&!l.hasOwnProperty($)&&($==="selected"?e.selected=!1:Ce(e,t,$,null,l,T));for(v in l)T=l[v],M=a[v],l.hasOwnProperty(v)&&T!==M&&(T!=null||M!=null)&&(v==="selected"?e.selected=T&&typeof T!="function"&&typeof T!="symbol":Ce(e,t,v,T,l,M));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)T=a[ae],a.hasOwnProperty(ae)&&T!=null&&!l.hasOwnProperty(ae)&&Ce(e,t,ae,null,l,T);for(w in l)if(T=l[w],M=a[w],l.hasOwnProperty(w)&&T!==M&&(T!=null||M!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(o(137,t));break;default:Ce(e,t,w,T,l,M)}return;default:if(ks(t)){for(var we in a)T=a[we],a.hasOwnProperty(we)&&T!==void 0&&!l.hasOwnProperty(we)&&Sc(e,t,we,void 0,l,T);for(_ in l)T=l[_],M=a[_],!l.hasOwnProperty(_)||T===M||T===void 0&&M===void 0||Sc(e,t,_,T,l,M);return}}for(var N in a)T=a[N],a.hasOwnProperty(N)&&T!=null&&!l.hasOwnProperty(N)&&Ce(e,t,N,null,l,T);for(D in l)T=l[D],M=a[D],!l.hasOwnProperty(D)||T===M||T==null&&M==null||Ce(e,t,D,T,l,M)}function Od(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function sm(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,c=n.initiatorType,f=n.duration;if(i&&f&&Od(c)){for(c=0,f=n.responseEnd,l+=1;l<a.length;l++){var v=a[l],w=v.startTime;if(w>f)break;var _=v.transferSize,D=v.initiatorType;_&&Od(D)&&(v=v.responseEnd,c+=_*(v<f?1:(f-w)/(v-w)))}if(--l,t+=8*(i+c)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Nc=null,zc=null;function Fi(e){return e.nodeType===9?e:e.ownerDocument}function Bd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function kd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ec(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ac=null;function rm(){var e=window.event;return e&&e.type==="popstate"?e===Ac?!1:(Ac=e,!0):(Ac=null,!1)}var Ud=typeof setTimeout=="function"?setTimeout:void 0,cm=typeof clearTimeout=="function"?clearTimeout:void 0,Hd=typeof Promise=="function"?Promise:void 0,om=typeof queueMicrotask=="function"?queueMicrotask:typeof Hd<"u"?function(e){return Hd.resolve(null).then(e).catch(um)}:Ud;function um(e){setTimeout(function(){throw e})}function Ca(e){return e==="head"}function Ld(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Ll(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")_n(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,_n(a);for(var i=a.firstChild;i;){var c=i.nextSibling,f=i.nodeName;i[Jl]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=c}}else a==="body"&&_n(e.ownerDocument.body);a=n}while(a);Ll(t)}function Yd(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Cc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Cc(a),Rs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function fm(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Jl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Tt(e.nextSibling),e===null)break}return null}function dm(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Tt(e.nextSibling),e===null))return null;return e}function qd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Tt(e.nextSibling),e===null))return null;return e}function wc(e){return e.data==="$?"||e.data==="$~"}function Tc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function pm(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Tt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Mc=null;function Gd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Tt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Xd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Vd(e,t,a){switch(t=Fi(a),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function _n(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Rs(e)}var Mt=new Map,Qd=new Set;function Wi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ia=k.d;k.d={f:hm,r:mm,D:gm,C:vm,L:xm,m:ym,X:jm,S:bm,M:Sm};function hm(){var e=ia.f(),t=Gi();return e||t}function mm(e){var t=nl(e);t!==null&&t.tag===5&&t.type==="form"?cf(t):ia.r(e)}var kl=typeof document>"u"?null:document;function Zd(e,t,a){var l=kl;if(l&&typeof t=="string"&&t){var n=St(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Qd.has(n)||(Qd.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Ie(t,"link",e),Ze(t),l.head.appendChild(t)))}}function gm(e){ia.D(e),Zd("dns-prefetch",e,null)}function vm(e,t){ia.C(e,t),Zd("preconnect",e,t)}function xm(e,t,a){ia.L(e,t,a);var l=kl;if(l&&e&&t){var n='link[rel="preload"][as="'+St(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+St(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+St(a.imageSizes)+'"]')):n+='[href="'+St(e)+'"]';var i=n;switch(t){case"style":i=Ul(e);break;case"script":i=Hl(e)}Mt.has(i)||(e=E({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Mt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Rn(i))||t==="script"&&l.querySelector(Dn(i))||(t=l.createElement("link"),Ie(t,"link",e),Ze(t),l.head.appendChild(t)))}}function ym(e,t){ia.m(e,t);var a=kl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+St(l)+'"][href="'+St(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Hl(e)}if(!Mt.has(i)&&(e=E({rel:"modulepreload",href:e},t),Mt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Dn(i)))return}l=a.createElement("link"),Ie(l,"link",e),Ze(l),a.head.appendChild(l)}}}function bm(e,t,a){ia.S(e,t,a);var l=kl;if(l&&e){var n=il(l).hoistableStyles,i=Ul(e);t=t||"default";var c=n.get(i);if(!c){var f={loading:0,preload:null};if(c=l.querySelector(Rn(i)))f.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Mt.get(i))&&_c(e,a);var v=c=l.createElement("link");Ze(v),Ie(v,"link",e),v._p=new Promise(function(w,_){v.onload=w,v.onerror=_}),v.addEventListener("load",function(){f.loading|=1}),v.addEventListener("error",function(){f.loading|=2}),f.loading|=4,Ii(c,t,l)}c={type:"stylesheet",instance:c,count:1,state:f},n.set(i,c)}}}function jm(e,t){ia.X(e,t);var a=kl;if(a&&e){var l=il(a).hoistableScripts,n=Hl(e),i=l.get(n);i||(i=a.querySelector(Dn(n)),i||(e=E({src:e,async:!0},t),(t=Mt.get(n))&&Rc(e,t),i=a.createElement("script"),Ze(i),Ie(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Sm(e,t){ia.M(e,t);var a=kl;if(a&&e){var l=il(a).hoistableScripts,n=Hl(e),i=l.get(n);i||(i=a.querySelector(Dn(n)),i||(e=E({src:e,async:!0,type:"module"},t),(t=Mt.get(n))&&Rc(e,t),i=a.createElement("script"),Ze(i),Ie(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Kd(e,t,a,l){var n=(n=fe.current)?Wi(n):null;if(!n)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Ul(a.href),a=il(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ul(a.href);var i=il(n).hoistableStyles,c=i.get(e);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,c),(i=n.querySelector(Rn(e)))&&!i._p&&(c.instance=i,c.state.loading=5),Mt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Mt.set(e,a),i||Nm(n,e,a,c.state))),t&&l===null)throw Error(o(528,""));return c}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Hl(a),a=il(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Ul(e){return'href="'+St(e)+'"'}function Rn(e){return'link[rel="stylesheet"]['+e+"]"}function Jd(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function Nm(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Ie(t,"link",a),Ze(t),e.head.appendChild(t))}function Hl(e){return'[src="'+St(e)+'"]'}function Dn(e){return"script[async]"+e}function $d(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+St(a.href)+'"]');if(l)return t.instance=l,Ze(l),l;var n=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ze(l),Ie(l,"style",n),Ii(l,a.precedence,e),t.instance=l;case"stylesheet":n=Ul(a.href);var i=e.querySelector(Rn(n));if(i)return t.state.loading|=4,t.instance=i,Ze(i),i;l=Jd(a),(n=Mt.get(n))&&_c(l,n),i=(e.ownerDocument||e).createElement("link"),Ze(i);var c=i;return c._p=new Promise(function(f,v){c.onload=f,c.onerror=v}),Ie(i,"link",l),t.state.loading|=4,Ii(i,a.precedence,e),t.instance=i;case"script":return i=Hl(a.src),(n=e.querySelector(Dn(i)))?(t.instance=n,Ze(n),n):(l=a,(n=Mt.get(i))&&(l=E({},a),Rc(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ze(n),Ie(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Ii(l,a.precedence,e));return t.instance}function Ii(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,c=0;c<l.length;c++){var f=l[c];if(f.dataset.precedence===t)i=f;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function _c(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Rc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Pi=null;function Fd(e,t,a){if(Pi===null){var l=new Map,n=Pi=new Map;n.set(a,l)}else n=Pi,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Jl]||i[Je]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(t)||"";c=e+c;var f=l.get(c);f?f.push(i):l.set(c,[i])}}return l}function Wd(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function zm(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Id(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Em(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Ul(l.href),i=t.querySelector(Rn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=es.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Ze(i);return}i=t.ownerDocument||t,l=Jd(l),(n=Mt.get(n))&&_c(l,n),i=i.createElement("link"),Ze(i);var c=i;c._p=new Promise(function(f,v){c.onload=f,c.onerror=v}),Ie(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=es.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Dc=0;function Am(e,t){return e.stylesheets&&e.count===0&&as(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&as(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Dc===0&&(Dc=62500*sm());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&as(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Dc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function es(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)as(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ts=null;function as(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ts=new Map,t.forEach(Cm,e),ts=null,es.call(e))}function Cm(e,t){if(!(t.state.loading&4)){var a=ts.get(e);if(a)var l=a.get(null);else{a=new Map,ts.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var c=n[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),l=c)}l&&a.set(null,l)}n=t.instance,c=n.getAttribute("data-precedence"),i=a.get(c)||l,i===l&&a.set(null,n),a.set(c,n),this.count++,l=es.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var On={$$typeof:U,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function wm(e,t,a,l,n,i,c,f,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ws(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ws(0),this.hiddenUpdates=ws(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function Pd(e,t,a,l,n,i,c,f,v,w,_,D){return e=new wm(e,t,a,c,v,w,_,D,f),t=1,i===!0&&(t|=24),i=mt(3,null,null,t),e.current=i,i.stateNode=e,t=dr(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},gr(i),e}function ep(e){return e?(e=ml,e):ml}function tp(e,t,a,l,n,i){n=ep(n),l.context===null?l.context=n:l.pendingContext=n,l=ga(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=va(e,l,t),a!==null&&(ut(a,e,t),dn(a,e,t))}function ap(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Oc(e,t){ap(e,t),(e=e.alternate)&&ap(e,t)}function lp(e){if(e.tag===13||e.tag===31){var t=qa(e,67108864);t!==null&&ut(t,e,67108864),Oc(e,67108864)}}function np(e){if(e.tag===13||e.tag===31){var t=bt();t=Ts(t);var a=qa(e,t);a!==null&&ut(a,e,t),Oc(e,t)}}var ls=!0;function Tm(e,t,a,l){var n=A.T;A.T=null;var i=k.p;try{k.p=2,Bc(e,t,a,l)}finally{k.p=i,A.T=n}}function Mm(e,t,a,l){var n=A.T;A.T=null;var i=k.p;try{k.p=8,Bc(e,t,a,l)}finally{k.p=i,A.T=n}}function Bc(e,t,a,l){if(ls){var n=kc(l);if(n===null)jc(e,t,l,ns,a),sp(e,l);else if(Rm(n,e,t,a,l))l.stopPropagation();else if(sp(e,l),t&4&&-1<_m.indexOf(e)){for(;n!==null;){var i=nl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=ka(i.pendingLanes);if(c!==0){var f=i;for(f.pendingLanes|=2,f.entangledLanes|=2;c;){var v=1<<31-pt(c);f.entanglements[1]|=v,c&=~v}Lt(i),(je&6)===0&&(Yi=ft()+500,wn(0))}}break;case 31:case 13:f=qa(i,2),f!==null&&ut(f,i,2),Gi(),Oc(i,2)}if(i=kc(l),i===null&&jc(e,t,l,ns,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else jc(e,t,l,null,a)}}function kc(e){return e=Hs(e),Uc(e)}var ns=null;function Uc(e){if(ns=null,e=ll(e),e!==null){var t=h(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=y(t),e!==null)return e;e=null}else if(a===31){if(e=b(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ns=e,null}function ip(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(g0()){case fo:return 2;case po:return 8;case Kn:case v0:return 32;case ho:return 268435456;default:return 32}default:return 32}}var Hc=!1,wa=null,Ta=null,Ma=null,Bn=new Map,kn=new Map,_a=[],_m="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sp(e,t){switch(e){case"focusin":case"focusout":wa=null;break;case"dragenter":case"dragleave":Ta=null;break;case"mouseover":case"mouseout":Ma=null;break;case"pointerover":case"pointerout":Bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":kn.delete(t.pointerId)}}function Un(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=nl(t),t!==null&&lp(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Rm(e,t,a,l,n){switch(t){case"focusin":return wa=Un(wa,e,t,a,l,n),!0;case"dragenter":return Ta=Un(Ta,e,t,a,l,n),!0;case"mouseover":return Ma=Un(Ma,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return Bn.set(i,Un(Bn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,kn.set(i,Un(kn.get(i)||null,e,t,a,l,n)),!0}return!1}function rp(e){var t=ll(e.target);if(t!==null){var a=h(t);if(a!==null){if(t=a.tag,t===13){if(t=y(a),t!==null){e.blockedOn=t,bo(e.priority,function(){np(a)});return}}else if(t===31){if(t=b(a),t!==null){e.blockedOn=t,bo(e.priority,function(){np(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function is(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=kc(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Us=l,a.target.dispatchEvent(l),Us=null}else return t=nl(a),t!==null&&lp(t),e.blockedOn=a,!1;t.shift()}return!0}function cp(e,t,a){is(e)&&a.delete(t)}function Dm(){Hc=!1,wa!==null&&is(wa)&&(wa=null),Ta!==null&&is(Ta)&&(Ta=null),Ma!==null&&is(Ma)&&(Ma=null),Bn.forEach(cp),kn.forEach(cp)}function ss(e,t){e.blockedOn===t&&(e.blockedOn=null,Hc||(Hc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Dm)))}var rs=null;function op(e){rs!==e&&(rs=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){rs===e&&(rs=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(Uc(l||a)===null)continue;break}var i=nl(a);i!==null&&(e.splice(t,3),t-=3,kr(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Ll(e){function t(v){return ss(v,e)}wa!==null&&ss(wa,e),Ta!==null&&ss(Ta,e),Ma!==null&&ss(Ma,e),Bn.forEach(t),kn.forEach(t);for(var a=0;a<_a.length;a++){var l=_a[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<_a.length&&(a=_a[0],a.blockedOn===null);)rp(a),a.blockedOn===null&&_a.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],c=n[nt]||null;if(typeof i=="function")c||op(a);else if(c){var f=null;if(i&&i.hasAttribute("formAction")){if(n=i,c=i[nt]||null)f=c.formAction;else if(Uc(n)!==null)continue}else f=c.action;typeof f=="function"?a[l+1]=f:(a.splice(l,3),l-=3),op(a)}}}function up(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(c){return n=c})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Lc(e){this._internalRoot=e}cs.prototype.render=Lc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var a=t.current,l=bt();tp(a,l,e,t,null,null)},cs.prototype.unmount=Lc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;tp(e.current,2,null,e,null,null),Gi(),t[al]=null}};function cs(e){this._internalRoot=e}cs.prototype.unstable_scheduleHydration=function(e){if(e){var t=yo();e={blockedOn:null,target:e,priority:t};for(var a=0;a<_a.length&&t!==0&&t<_a[a].priority;a++);_a.splice(a,0,e),a===0&&rp(e)}};var fp=u.version;if(fp!=="19.2.4")throw Error(o(527,fp,"19.2.4"));k.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=m(t),e=e!==null?z(e):null,e=e===null?null:e.stateNode,e};var Om={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:A,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var os=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!os.isDisabled&&os.supportsFiber)try{Ql=os.inject(Om),dt=os}catch{}}return Ln.createRoot=function(e,t){if(!p(e))throw Error(o(299));var a=!1,l="",n=xf,i=yf,c=bf;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=Pd(e,1,!1,null,null,a,l,null,n,i,c,up),e[al]=t.current,bc(e),new Lc(t)},Ln.hydrateRoot=function(e,t,a){if(!p(e))throw Error(o(299));var l=!1,n="",i=xf,c=yf,f=bf,v=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(f=a.onRecoverableError),a.formState!==void 0&&(v=a.formState)),t=Pd(e,1,!0,t,a??null,l,n,v,i,c,f,up),t.context=ep(null),a=t.current,l=bt(),l=Ts(l),n=ga(l),n.callback=null,va(a,n,l),a=l,t.current.lanes=a,Kl(t,a),Lt(t),e[al]=t.current,bc(e),new cs(t)},Ln.version="19.2.4",Ln}var jp;function Qm(){if(jp)return Gc.exports;jp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(u){console.error(u)}}return r(),Gc.exports=Vm(),Gc.exports}var Zm=Qm();const Km=Op(Zm);var Sp="popstate";function Jm(r={}){function u(o,p){let{pathname:h,search:y,hash:b}=o.location;return Ic("",{pathname:h,search:y,hash:b},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function d(o,p){return typeof p=="string"?p:Gn(p)}return Fm(u,d,null,r)}function De(r,u){if(r===!1||r===null||typeof r>"u")throw new Error(u)}function Yt(r,u){if(!r){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function $m(){return Math.random().toString(36).substring(2,10)}function Np(r,u){return{usr:r.state,key:r.key,idx:u}}function Ic(r,u,d=null,o){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof u=="string"?ql(u):u,state:d,key:u&&u.key||o||$m()}}function Gn({pathname:r="/",search:u="",hash:d=""}){return u&&u!=="?"&&(r+=u.charAt(0)==="?"?u:"?"+u),d&&d!=="#"&&(r+=d.charAt(0)==="#"?d:"#"+d),r}function ql(r){let u={};if(r){let d=r.indexOf("#");d>=0&&(u.hash=r.substring(d),r=r.substring(0,d));let o=r.indexOf("?");o>=0&&(u.search=r.substring(o),r=r.substring(0,o)),r&&(u.pathname=r)}return u}function Fm(r,u,d,o={}){let{window:p=document.defaultView,v5Compat:h=!1}=o,y=p.history,b="POP",g=null,m=z();m==null&&(m=0,y.replaceState({...y.state,idx:m},""));function z(){return(y.state||{idx:null}).idx}function E(){b="POP";let G=z(),V=G==null?null:G-m;m=G,g&&g({action:b,location:Q.location,delta:V})}function B(G,V){b="PUSH";let Y=Ic(Q.location,G,V);m=z()+1;let U=Np(Y,m),Z=Q.createHref(Y);try{y.pushState(U,"",Z)}catch(K){if(K instanceof DOMException&&K.name==="DataCloneError")throw K;p.location.assign(Z)}h&&g&&g({action:b,location:Q.location,delta:1})}function X(G,V){b="REPLACE";let Y=Ic(Q.location,G,V);m=z();let U=Np(Y,m),Z=Q.createHref(Y);y.replaceState(U,"",Z),h&&g&&g({action:b,location:Q.location,delta:0})}function q(G){return Wm(G)}let Q={get action(){return b},get location(){return r(p,y)},listen(G){if(g)throw new Error("A history only accepts one active listener");return p.addEventListener(Sp,E),g=G,()=>{p.removeEventListener(Sp,E),g=null}},createHref(G){return u(p,G)},createURL:q,encodeLocation(G){let V=q(G);return{pathname:V.pathname,search:V.search,hash:V.hash}},push:B,replace:X,go(G){return y.go(G)}};return Q}function Wm(r,u=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),De(d,"No window.location.(origin|href) available to create URL");let o=typeof r=="string"?r:Gn(r);return o=o.replace(/ $/,"%20"),!u&&o.startsWith("//")&&(o=d+o),new URL(o,d)}function Bp(r,u,d="/"){return Im(r,u,d,!1)}function Im(r,u,d,o){let p=typeof u=="string"?ql(u):u,h=ra(p.pathname||"/",d);if(h==null)return null;let y=kp(r);Pm(y);let b=null;for(let g=0;b==null&&g<y.length;++g){let m=ug(h);b=cg(y[g],m,o)}return b}function kp(r,u=[],d=[],o="",p=!1){let h=(y,b,g=p,m)=>{let z={relativePath:m===void 0?y.path||"":m,caseSensitive:y.caseSensitive===!0,childrenIndex:b,route:y};if(z.relativePath.startsWith("/")){if(!z.relativePath.startsWith(o)&&g)return;De(z.relativePath.startsWith(o),`Absolute route path "${z.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),z.relativePath=z.relativePath.slice(o.length)}let E=sa([o,z.relativePath]),B=d.concat(z);y.children&&y.children.length>0&&(De(y.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),kp(y.children,u,B,E,g)),!(y.path==null&&!y.index)&&u.push({path:E,score:sg(E,y.index),routesMeta:B})};return r.forEach((y,b)=>{if(y.path===""||!y.path?.includes("?"))h(y,b);else for(let g of Up(y.path))h(y,b,!0,g)}),u}function Up(r){let u=r.split("/");if(u.length===0)return[];let[d,...o]=u,p=d.endsWith("?"),h=d.replace(/\?$/,"");if(o.length===0)return p?[h,""]:[h];let y=Up(o.join("/")),b=[];return b.push(...y.map(g=>g===""?h:[h,g].join("/"))),p&&b.push(...y),b.map(g=>r.startsWith("/")&&g===""?"/":g)}function Pm(r){r.sort((u,d)=>u.score!==d.score?d.score-u.score:rg(u.routesMeta.map(o=>o.childrenIndex),d.routesMeta.map(o=>o.childrenIndex)))}var eg=/^:[\w-]+$/,tg=3,ag=2,lg=1,ng=10,ig=-2,zp=r=>r==="*";function sg(r,u){let d=r.split("/"),o=d.length;return d.some(zp)&&(o+=ig),u&&(o+=ag),d.filter(p=>!zp(p)).reduce((p,h)=>p+(eg.test(h)?tg:h===""?lg:ng),o)}function rg(r,u){return r.length===u.length&&r.slice(0,-1).every((o,p)=>o===u[p])?r[r.length-1]-u[u.length-1]:0}function cg(r,u,d=!1){let{routesMeta:o}=r,p={},h="/",y=[];for(let b=0;b<o.length;++b){let g=o[b],m=b===o.length-1,z=h==="/"?u:u.slice(h.length)||"/",E=hs({path:g.relativePath,caseSensitive:g.caseSensitive,end:m},z),B=g.route;if(!E&&m&&d&&!o[o.length-1].route.index&&(E=hs({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},z)),!E)return null;Object.assign(p,E.params),y.push({params:p,pathname:sa([h,E.pathname]),pathnameBase:hg(sa([h,E.pathnameBase])),route:B}),E.pathnameBase!=="/"&&(h=sa([h,E.pathnameBase]))}return y}function hs(r,u){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[d,o]=og(r.path,r.caseSensitive,r.end),p=u.match(d);if(!p)return null;let h=p[0],y=h.replace(/(.)\/+$/,"$1"),b=p.slice(1);return{params:o.reduce((m,{paramName:z,isOptional:E},B)=>{if(z==="*"){let q=b[B]||"";y=h.slice(0,h.length-q.length).replace(/(.)\/+$/,"$1")}const X=b[B];return E&&!X?m[z]=void 0:m[z]=(X||"").replace(/%2F/g,"/"),m},{}),pathname:h,pathnameBase:y,pattern:r}}function og(r,u=!1,d=!0){Yt(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let o=[],p="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(y,b,g)=>(o.push({paramName:b,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(o.push({paramName:"*"}),p+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?p+="\\/*$":r!==""&&r!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,u?void 0:"i"),o]}function ug(r){try{return r.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return Yt(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),r}}function ra(r,u){if(u==="/")return r;if(!r.toLowerCase().startsWith(u.toLowerCase()))return null;let d=u.endsWith("/")?u.length-1:u.length,o=r.charAt(d);return o&&o!=="/"?null:r.slice(d)||"/"}var fg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function dg(r,u="/"){let{pathname:d,search:o="",hash:p=""}=typeof r=="string"?ql(r):r,h;return d?(d=d.replace(/\/\/+/g,"/"),d.startsWith("/")?h=Ep(d.substring(1),"/"):h=Ep(d,u)):h=u,{pathname:h,search:mg(o),hash:gg(p)}}function Ep(r,u){let d=u.replace(/\/+$/,"").split("/");return r.split("/").forEach(p=>{p===".."?d.length>1&&d.pop():p!=="."&&d.push(p)}),d.length>1?d.join("/"):"/"}function Zc(r,u,d,o){return`Cannot include a '${r}' character in a manually specified \`to.${u}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function pg(r){return r.filter((u,d)=>d===0||u.route.path&&u.route.path.length>0)}function Hp(r){let u=pg(r);return u.map((d,o)=>o===u.length-1?d.pathname:d.pathnameBase)}function Lp(r,u,d,o=!1){let p;typeof r=="string"?p=ql(r):(p={...r},De(!p.pathname||!p.pathname.includes("?"),Zc("?","pathname","search",p)),De(!p.pathname||!p.pathname.includes("#"),Zc("#","pathname","hash",p)),De(!p.search||!p.search.includes("#"),Zc("#","search","hash",p)));let h=r===""||p.pathname==="",y=h?"/":p.pathname,b;if(y==null)b=d;else{let E=u.length-1;if(!o&&y.startsWith("..")){let B=y.split("/");for(;B[0]==="..";)B.shift(),E-=1;p.pathname=B.join("/")}b=E>=0?u[E]:"/"}let g=dg(p,b),m=y&&y!=="/"&&y.endsWith("/"),z=(h||y===".")&&d.endsWith("/");return!g.pathname.endsWith("/")&&(m||z)&&(g.pathname+="/"),g}var sa=r=>r.join("/").replace(/\/\/+/g,"/"),hg=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),mg=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,gg=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,vg=class{constructor(r,u,d,o=!1){this.status=r,this.statusText=u||"",this.internal=o,d instanceof Error?(this.data=d.toString(),this.error=d):this.data=d}};function xg(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function yg(r){return r.map(u=>u.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Yp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function qp(r,u){let d=r;if(typeof d!="string"||!fg.test(d))return{absoluteURL:void 0,isExternal:!1,to:d};let o=d,p=!1;if(Yp)try{let h=new URL(window.location.href),y=d.startsWith("//")?new URL(h.protocol+d):new URL(d),b=ra(y.pathname,u);y.origin===h.origin&&b!=null?d=b+y.search+y.hash:p=!0}catch{Yt(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:p,to:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Gp=["POST","PUT","PATCH","DELETE"];new Set(Gp);var bg=["GET",...Gp];new Set(bg);var Gl=S.createContext(null);Gl.displayName="DataRouter";var vs=S.createContext(null);vs.displayName="DataRouterState";var jg=S.createContext(!1),Xp=S.createContext({isTransitioning:!1});Xp.displayName="ViewTransition";var Sg=S.createContext(new Map);Sg.displayName="Fetchers";var Ng=S.createContext(null);Ng.displayName="Await";var _t=S.createContext(null);_t.displayName="Navigation";var Xn=S.createContext(null);Xn.displayName="Location";var qt=S.createContext({outlet:null,matches:[],isDataRoute:!1});qt.displayName="Route";var ao=S.createContext(null);ao.displayName="RouteError";var Vp="REACT_ROUTER_ERROR",zg="REDIRECT",Eg="ROUTE_ERROR_RESPONSE";function Ag(r){if(r.startsWith(`${Vp}:${zg}:{`))try{let u=JSON.parse(r.slice(28));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.location=="string"&&typeof u.reloadDocument=="boolean"&&typeof u.replace=="boolean")return u}catch{}}function Cg(r){if(r.startsWith(`${Vp}:${Eg}:{`))try{let u=JSON.parse(r.slice(40));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string")return new vg(u.status,u.statusText,u.data)}catch{}}function wg(r,{relative:u}={}){De(Vn(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:o}=S.useContext(_t),{hash:p,pathname:h,search:y}=Qn(r,{relative:u}),b=h;return d!=="/"&&(b=h==="/"?d:sa([d,h])),o.createHref({pathname:b,search:y,hash:p})}function Vn(){return S.useContext(Xn)!=null}function Bt(){return De(Vn(),"useLocation() may be used only in the context of a <Router> component."),S.useContext(Xn).location}var Qp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Zp(r){S.useContext(_t).static||S.useLayoutEffect(r)}function tt(){let{isDataRoute:r}=S.useContext(qt);return r?Gg():Tg()}function Tg(){De(Vn(),"useNavigate() may be used only in the context of a <Router> component.");let r=S.useContext(Gl),{basename:u,navigator:d}=S.useContext(_t),{matches:o}=S.useContext(qt),{pathname:p}=Bt(),h=JSON.stringify(Hp(o)),y=S.useRef(!1);return Zp(()=>{y.current=!0}),S.useCallback((g,m={})=>{if(Yt(y.current,Qp),!y.current)return;if(typeof g=="number"){d.go(g);return}let z=Lp(g,JSON.parse(h),p,m.relative==="path");r==null&&u!=="/"&&(z.pathname=z.pathname==="/"?u:sa([u,z.pathname])),(m.replace?d.replace:d.push)(z,m.state,m)},[u,d,h,p,r])}S.createContext(null);function Mg(){let{matches:r}=S.useContext(qt),u=r[r.length-1];return u?u.params:{}}function Qn(r,{relative:u}={}){let{matches:d}=S.useContext(qt),{pathname:o}=Bt(),p=JSON.stringify(Hp(d));return S.useMemo(()=>Lp(r,JSON.parse(p),o,u==="path"),[r,p,o,u])}function _g(r,u){return Kp(r,u)}function Kp(r,u,d,o,p){De(Vn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:h}=S.useContext(_t),{matches:y}=S.useContext(qt),b=y[y.length-1],g=b?b.params:{},m=b?b.pathname:"/",z=b?b.pathnameBase:"/",E=b&&b.route;{let Y=E&&E.path||"";$p(m,!E||Y.endsWith("*")||Y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${Y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Y}"> to <Route path="${Y==="/"?"*":`${Y}/*`}">.`)}let B=Bt(),X;if(u){let Y=typeof u=="string"?ql(u):u;De(z==="/"||Y.pathname?.startsWith(z),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${z}" but pathname "${Y.pathname}" was given in the \`location\` prop.`),X=Y}else X=B;let q=X.pathname||"/",Q=q;if(z!=="/"){let Y=z.replace(/^\//,"").split("/");Q="/"+q.replace(/^\//,"").split("/").slice(Y.length).join("/")}let G=Bp(r,{pathname:Q});Yt(E||G!=null,`No routes matched location "${X.pathname}${X.search}${X.hash}" `),Yt(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${X.pathname}${X.search}${X.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let V=kg(G&&G.map(Y=>Object.assign({},Y,{params:Object.assign({},g,Y.params),pathname:sa([z,h.encodeLocation?h.encodeLocation(Y.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Y.pathname]),pathnameBase:Y.pathnameBase==="/"?z:sa([z,h.encodeLocation?h.encodeLocation(Y.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Y.pathnameBase])})),y,d,o,p);return u&&V?S.createElement(Xn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...X},navigationType:"POP"}},V):V}function Rg(){let r=qg(),u=xg(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),d=r instanceof Error?r.stack:null,o="rgba(200,200,200, 0.5)",p={padding:"0.5rem",backgroundColor:o},h={padding:"2px 4px",backgroundColor:o},y=null;return console.error("Error handled by React Router default ErrorBoundary:",r),y=S.createElement(S.Fragment,null,S.createElement("p",null,"💿 Hey developer 👋"),S.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",S.createElement("code",{style:h},"ErrorBoundary")," or"," ",S.createElement("code",{style:h},"errorElement")," prop on your route.")),S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},u),d?S.createElement("pre",{style:p},d):null,y)}var Dg=S.createElement(Rg,null),Jp=class extends S.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,u){return u.location!==r.location||u.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:u.error,location:u.location,revalidation:r.revalidation||u.revalidation}}componentDidCatch(r,u){this.props.onError?this.props.onError(r,u):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const d=Cg(r.digest);d&&(r=d)}let u=r!==void 0?S.createElement(qt.Provider,{value:this.props.routeContext},S.createElement(ao.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?S.createElement(Og,{error:r},u):u}};Jp.contextType=jg;var Kc=new WeakMap;function Og({children:r,error:u}){let{basename:d}=S.useContext(_t);if(typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){let o=Ag(u.digest);if(o){let p=Kc.get(u);if(p)throw p;let h=qp(o.location,d);if(Yp&&!Kc.get(u))if(h.isExternal||o.reloadDocument)window.location.href=h.absoluteURL||h.to;else{const y=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to,{replace:o.replace}));throw Kc.set(u,y),y}return S.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h.absoluteURL||h.to}`})}}return r}function Bg({routeContext:r,match:u,children:d}){let o=S.useContext(Gl);return o&&o.static&&o.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=u.route.id),S.createElement(qt.Provider,{value:r},d)}function kg(r,u=[],d=null,o=null,p=null){if(r==null){if(!d)return null;if(d.errors)r=d.matches;else if(u.length===0&&!d.initialized&&d.matches.length>0)r=d.matches;else return null}let h=r,y=d?.errors;if(y!=null){let z=h.findIndex(E=>E.route.id&&y?.[E.route.id]!==void 0);De(z>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(y).join(",")}`),h=h.slice(0,Math.min(h.length,z+1))}let b=!1,g=-1;if(d)for(let z=0;z<h.length;z++){let E=h[z];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(g=z),E.route.id){let{loaderData:B,errors:X}=d,q=E.route.loader&&!B.hasOwnProperty(E.route.id)&&(!X||X[E.route.id]===void 0);if(E.route.lazy||q){b=!0,g>=0?h=h.slice(0,g+1):h=[h[0]];break}}}let m=d&&o?(z,E)=>{o(z,{location:d.location,params:d.matches?.[0]?.params??{},unstable_pattern:yg(d.matches),errorInfo:E})}:void 0;return h.reduceRight((z,E,B)=>{let X,q=!1,Q=null,G=null;d&&(X=y&&E.route.id?y[E.route.id]:void 0,Q=E.route.errorElement||Dg,b&&(g<0&&B===0?($p("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),q=!0,G=null):g===B&&(q=!0,G=E.route.hydrateFallbackElement||null)));let V=u.concat(h.slice(0,B+1)),Y=()=>{let U;return X?U=Q:q?U=G:E.route.Component?U=S.createElement(E.route.Component,null):E.route.element?U=E.route.element:U=z,S.createElement(Bg,{match:E,routeContext:{outlet:z,matches:V,isDataRoute:d!=null},children:U})};return d&&(E.route.ErrorBoundary||E.route.errorElement||B===0)?S.createElement(Jp,{location:d.location,revalidation:d.revalidation,component:Q,error:X,children:Y(),routeContext:{outlet:null,matches:V,isDataRoute:!0},onError:m}):Y()},null)}function lo(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ug(r){let u=S.useContext(Gl);return De(u,lo(r)),u}function Hg(r){let u=S.useContext(vs);return De(u,lo(r)),u}function Lg(r){let u=S.useContext(qt);return De(u,lo(r)),u}function no(r){let u=Lg(r),d=u.matches[u.matches.length-1];return De(d.route.id,`${r} can only be used on routes that contain a unique "id"`),d.route.id}function Yg(){return no("useRouteId")}function qg(){let r=S.useContext(ao),u=Hg("useRouteError"),d=no("useRouteError");return r!==void 0?r:u.errors?.[d]}function Gg(){let{router:r}=Ug("useNavigate"),u=no("useNavigate"),d=S.useRef(!1);return Zp(()=>{d.current=!0}),S.useCallback(async(p,h={})=>{Yt(d.current,Qp),d.current&&(typeof p=="number"?await r.navigate(p):await r.navigate(p,{fromRouteId:u,...h}))},[r,u])}var Ap={};function $p(r,u,d){!u&&!Ap[r]&&(Ap[r]=!0,Yt(!1,d))}S.memo(Xg);function Xg({routes:r,future:u,state:d,onError:o}){return Kp(r,void 0,d,o,u)}function et(r){De(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Vg({basename:r="/",children:u=null,location:d,navigationType:o="POP",navigator:p,static:h=!1,unstable_useTransitions:y}){De(!Vn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let b=r.replace(/^\/*/,"/"),g=S.useMemo(()=>({basename:b,navigator:p,static:h,unstable_useTransitions:y,future:{}}),[b,p,h,y]);typeof d=="string"&&(d=ql(d));let{pathname:m="/",search:z="",hash:E="",state:B=null,key:X="default"}=d,q=S.useMemo(()=>{let Q=ra(m,b);return Q==null?null:{location:{pathname:Q,search:z,hash:E,state:B,key:X},navigationType:o}},[b,m,z,E,B,X,o]);return Yt(q!=null,`<Router basename="${b}"> is not able to match the URL "${m}${z}${E}" because it does not start with the basename, so the <Router> won't render anything.`),q==null?null:S.createElement(_t.Provider,{value:g},S.createElement(Xn.Provider,{children:u,value:q}))}function Qg({children:r,location:u}){return _g(Pc(r),u)}function Pc(r,u=[]){let d=[];return S.Children.forEach(r,(o,p)=>{if(!S.isValidElement(o))return;let h=[...u,p];if(o.type===S.Fragment){d.push.apply(d,Pc(o.props.children,h));return}De(o.type===et,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),De(!o.props.index||!o.props.children,"An index route cannot have child routes.");let y={id:o.props.id||h.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(y.children=Pc(o.props.children,h)),d.push(y)}),d}var ds="get",ps="application/x-www-form-urlencoded";function xs(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function Zg(r){return xs(r)&&r.tagName.toLowerCase()==="button"}function Kg(r){return xs(r)&&r.tagName.toLowerCase()==="form"}function Jg(r){return xs(r)&&r.tagName.toLowerCase()==="input"}function $g(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Fg(r,u){return r.button===0&&(!u||u==="_self")&&!$g(r)}var us=null;function Wg(){if(us===null)try{new FormData(document.createElement("form"),0),us=!1}catch{us=!0}return us}var Ig=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Jc(r){return r!=null&&!Ig.has(r)?(Yt(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ps}"`),null):r}function Pg(r,u){let d,o,p,h,y;if(Kg(r)){let b=r.getAttribute("action");o=b?ra(b,u):null,d=r.getAttribute("method")||ds,p=Jc(r.getAttribute("enctype"))||ps,h=new FormData(r)}else if(Zg(r)||Jg(r)&&(r.type==="submit"||r.type==="image")){let b=r.form;if(b==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=r.getAttribute("formaction")||b.getAttribute("action");if(o=g?ra(g,u):null,d=r.getAttribute("formmethod")||b.getAttribute("method")||ds,p=Jc(r.getAttribute("formenctype"))||Jc(b.getAttribute("enctype"))||ps,h=new FormData(b,r),!Wg()){let{name:m,type:z,value:E}=r;if(z==="image"){let B=m?`${m}.`:"";h.append(`${B}x`,"0"),h.append(`${B}y`,"0")}else m&&h.append(m,E)}}else{if(xs(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=ds,o=null,p=ps,y=r}return h&&p==="text/plain"&&(y=h,h=void 0),{action:o,method:d.toLowerCase(),encType:p,formData:h,body:y}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function io(r,u){if(r===!1||r===null||typeof r>"u")throw new Error(u)}function e1(r,u,d,o){let p=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return d?p.pathname.endsWith("/")?p.pathname=`${p.pathname}_.${o}`:p.pathname=`${p.pathname}.${o}`:p.pathname==="/"?p.pathname=`_root.${o}`:u&&ra(p.pathname,u)==="/"?p.pathname=`${u.replace(/\/$/,"")}/_root.${o}`:p.pathname=`${p.pathname.replace(/\/$/,"")}.${o}`,p}async function t1(r,u){if(r.id in u)return u[r.id];try{let d=await import(r.module);return u[r.id]=d,d}catch(d){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function a1(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function l1(r,u,d){let o=await Promise.all(r.map(async p=>{let h=u.routes[p.route.id];if(h){let y=await t1(h,d);return y.links?y.links():[]}return[]}));return r1(o.flat(1).filter(a1).filter(p=>p.rel==="stylesheet"||p.rel==="preload").map(p=>p.rel==="stylesheet"?{...p,rel:"prefetch",as:"style"}:{...p,rel:"prefetch"}))}function Cp(r,u,d,o,p,h){let y=(g,m)=>d[m]?g.route.id!==d[m].route.id:!0,b=(g,m)=>d[m].pathname!==g.pathname||d[m].route.path?.endsWith("*")&&d[m].params["*"]!==g.params["*"];return h==="assets"?u.filter((g,m)=>y(g,m)||b(g,m)):h==="data"?u.filter((g,m)=>{let z=o.routes[g.route.id];if(!z||!z.hasLoader)return!1;if(y(g,m)||b(g,m))return!0;if(g.route.shouldRevalidate){let E=g.route.shouldRevalidate({currentUrl:new URL(p.pathname+p.search+p.hash,window.origin),currentParams:d[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function n1(r,u,{includeHydrateFallback:d}={}){return i1(r.map(o=>{let p=u.routes[o.route.id];if(!p)return[];let h=[p.module];return p.clientActionModule&&(h=h.concat(p.clientActionModule)),p.clientLoaderModule&&(h=h.concat(p.clientLoaderModule)),d&&p.hydrateFallbackModule&&(h=h.concat(p.hydrateFallbackModule)),p.imports&&(h=h.concat(p.imports)),h}).flat(1))}function i1(r){return[...new Set(r)]}function s1(r){let u={},d=Object.keys(r).sort();for(let o of d)u[o]=r[o];return u}function r1(r,u){let d=new Set;return new Set(u),r.reduce((o,p)=>{let h=JSON.stringify(s1(p));return d.has(h)||(d.add(h),o.push({key:h,link:p})),o},[])}function Fp(){let r=S.useContext(Gl);return io(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function c1(){let r=S.useContext(vs);return io(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var so=S.createContext(void 0);so.displayName="FrameworkContext";function Wp(){let r=S.useContext(so);return io(r,"You must render this element inside a <HydratedRouter> element"),r}function o1(r,u){let d=S.useContext(so),[o,p]=S.useState(!1),[h,y]=S.useState(!1),{onFocus:b,onBlur:g,onMouseEnter:m,onMouseLeave:z,onTouchStart:E}=u,B=S.useRef(null);S.useEffect(()=>{if(r==="render"&&y(!0),r==="viewport"){let Q=V=>{V.forEach(Y=>{y(Y.isIntersecting)})},G=new IntersectionObserver(Q,{threshold:.5});return B.current&&G.observe(B.current),()=>{G.disconnect()}}},[r]),S.useEffect(()=>{if(o){let Q=setTimeout(()=>{y(!0)},100);return()=>{clearTimeout(Q)}}},[o]);let X=()=>{p(!0)},q=()=>{p(!1),y(!1)};return d?r!=="intent"?[h,B,{}]:[h,B,{onFocus:Yn(b,X),onBlur:Yn(g,q),onMouseEnter:Yn(m,X),onMouseLeave:Yn(z,q),onTouchStart:Yn(E,X)}]:[!1,B,{}]}function Yn(r,u){return d=>{r&&r(d),d.defaultPrevented||u(d)}}function u1({page:r,...u}){let{router:d}=Fp(),o=S.useMemo(()=>Bp(d.routes,r,d.basename),[d.routes,r,d.basename]);return o?S.createElement(d1,{page:r,matches:o,...u}):null}function f1(r){let{manifest:u,routeModules:d}=Wp(),[o,p]=S.useState([]);return S.useEffect(()=>{let h=!1;return l1(r,u,d).then(y=>{h||p(y)}),()=>{h=!0}},[r,u,d]),o}function d1({page:r,matches:u,...d}){let o=Bt(),{future:p,manifest:h,routeModules:y}=Wp(),{basename:b}=Fp(),{loaderData:g,matches:m}=c1(),z=S.useMemo(()=>Cp(r,u,m,h,o,"data"),[r,u,m,h,o]),E=S.useMemo(()=>Cp(r,u,m,h,o,"assets"),[r,u,m,h,o]),B=S.useMemo(()=>{if(r===o.pathname+o.search+o.hash)return[];let Q=new Set,G=!1;if(u.forEach(Y=>{let U=h.routes[Y.route.id];!U||!U.hasLoader||(!z.some(Z=>Z.route.id===Y.route.id)&&Y.route.id in g&&y[Y.route.id]?.shouldRevalidate||U.hasClientLoader?G=!0:Q.add(Y.route.id))}),Q.size===0)return[];let V=e1(r,b,p.unstable_trailingSlashAwareDataRequests,"data");return G&&Q.size>0&&V.searchParams.set("_routes",u.filter(Y=>Q.has(Y.route.id)).map(Y=>Y.route.id).join(",")),[V.pathname+V.search]},[b,p.unstable_trailingSlashAwareDataRequests,g,o,h,z,u,r,y]),X=S.useMemo(()=>n1(E,h),[E,h]),q=f1(E);return S.createElement(S.Fragment,null,B.map(Q=>S.createElement("link",{key:Q,rel:"prefetch",as:"fetch",href:Q,...d})),X.map(Q=>S.createElement("link",{key:Q,rel:"modulepreload",href:Q,...d})),q.map(({key:Q,link:G})=>S.createElement("link",{key:Q,nonce:d.nonce,...G,crossOrigin:G.crossOrigin??d.crossOrigin})))}function p1(...r){return u=>{r.forEach(d=>{typeof d=="function"?d(u):d!=null&&(d.current=u)})}}var h1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{h1&&(window.__reactRouterVersion="7.13.0")}catch{}function m1({basename:r,children:u,unstable_useTransitions:d,window:o}){let p=S.useRef();p.current==null&&(p.current=Jm({window:o,v5Compat:!0}));let h=p.current,[y,b]=S.useState({action:h.action,location:h.location}),g=S.useCallback(m=>{d===!1?b(m):S.startTransition(()=>b(m))},[d]);return S.useLayoutEffect(()=>h.listen(g),[h,g]),S.createElement(Vg,{basename:r,children:u,location:y.location,navigationType:y.action,navigator:h,unstable_useTransitions:d})}var Ip=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pp=S.forwardRef(function({onClick:u,discover:d="render",prefetch:o="none",relative:p,reloadDocument:h,replace:y,state:b,target:g,to:m,preventScrollReset:z,viewTransition:E,unstable_defaultShouldRevalidate:B,...X},q){let{basename:Q,unstable_useTransitions:G}=S.useContext(_t),V=typeof m=="string"&&Ip.test(m),Y=qp(m,Q);m=Y.to;let U=wg(m,{relative:p}),[Z,K,ee]=o1(o,X),H=x1(m,{replace:y,state:b,target:g,preventScrollReset:z,relative:p,viewTransition:E,unstable_defaultShouldRevalidate:B,unstable_useTransitions:G});function oe(le){u&&u(le),le.defaultPrevented||H(le)}let I=S.createElement("a",{...X,...ee,href:Y.absoluteURL||U,onClick:Y.isExternal||h?u:oe,ref:p1(q,K),target:g,"data-discover":!V&&d==="render"?"true":void 0});return Z&&!V?S.createElement(S.Fragment,null,I,S.createElement(u1,{page:U})):I});Pp.displayName="Link";var ro=S.forwardRef(function({"aria-current":u="page",caseSensitive:d=!1,className:o="",end:p=!1,style:h,to:y,viewTransition:b,children:g,...m},z){let E=Qn(y,{relative:m.relative}),B=Bt(),X=S.useContext(vs),{navigator:q,basename:Q}=S.useContext(_t),G=X!=null&&N1(E)&&b===!0,V=q.encodeLocation?q.encodeLocation(E).pathname:E.pathname,Y=B.pathname,U=X&&X.navigation&&X.navigation.location?X.navigation.location.pathname:null;d||(Y=Y.toLowerCase(),U=U?U.toLowerCase():null,V=V.toLowerCase()),U&&Q&&(U=ra(U,Q)||U);const Z=V!=="/"&&V.endsWith("/")?V.length-1:V.length;let K=Y===V||!p&&Y.startsWith(V)&&Y.charAt(Z)==="/",ee=U!=null&&(U===V||!p&&U.startsWith(V)&&U.charAt(V.length)==="/"),H={isActive:K,isPending:ee,isTransitioning:G},oe=K?u:void 0,I;typeof o=="function"?I=o(H):I=[o,K?"active":null,ee?"pending":null,G?"transitioning":null].filter(Boolean).join(" ");let le=typeof h=="function"?h(H):h;return S.createElement(Pp,{...m,"aria-current":oe,className:I,ref:z,style:le,to:y,viewTransition:b},typeof g=="function"?g(H):g)});ro.displayName="NavLink";var g1=S.forwardRef(({discover:r="render",fetcherKey:u,navigate:d,reloadDocument:o,replace:p,state:h,method:y=ds,action:b,onSubmit:g,relative:m,preventScrollReset:z,viewTransition:E,unstable_defaultShouldRevalidate:B,...X},q)=>{let{unstable_useTransitions:Q}=S.useContext(_t),G=j1(),V=S1(b,{relative:m}),Y=y.toLowerCase()==="get"?"get":"post",U=typeof b=="string"&&Ip.test(b),Z=K=>{if(g&&g(K),K.defaultPrevented)return;K.preventDefault();let ee=K.nativeEvent.submitter,H=ee?.getAttribute("formmethod")||y,oe=()=>G(ee||K.currentTarget,{fetcherKey:u,method:H,navigate:d,replace:p,state:h,relative:m,preventScrollReset:z,viewTransition:E,unstable_defaultShouldRevalidate:B});Q&&d!==!1?S.startTransition(()=>oe()):oe()};return S.createElement("form",{ref:q,method:Y,action:V,onSubmit:o?g:Z,...X,"data-discover":!U&&r==="render"?"true":void 0})});g1.displayName="Form";function v1(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function e0(r){let u=S.useContext(Gl);return De(u,v1(r)),u}function x1(r,{target:u,replace:d,state:o,preventScrollReset:p,relative:h,viewTransition:y,unstable_defaultShouldRevalidate:b,unstable_useTransitions:g}={}){let m=tt(),z=Bt(),E=Qn(r,{relative:h});return S.useCallback(B=>{if(Fg(B,u)){B.preventDefault();let X=d!==void 0?d:Gn(z)===Gn(E),q=()=>m(r,{replace:X,state:o,preventScrollReset:p,relative:h,viewTransition:y,unstable_defaultShouldRevalidate:b});g?S.startTransition(()=>q()):q()}},[z,m,E,d,o,u,r,p,h,y,b,g])}var y1=0,b1=()=>`__${String(++y1)}__`;function j1(){let{router:r}=e0("useSubmit"),{basename:u}=S.useContext(_t),d=Yg(),o=r.fetch,p=r.navigate;return S.useCallback(async(h,y={})=>{let{action:b,method:g,encType:m,formData:z,body:E}=Pg(h,u);if(y.navigate===!1){let B=y.fetcherKey||b1();await o(B,d,y.action||b,{unstable_defaultShouldRevalidate:y.unstable_defaultShouldRevalidate,preventScrollReset:y.preventScrollReset,formData:z,body:E,formMethod:y.method||g,formEncType:y.encType||m,flushSync:y.flushSync})}else await p(y.action||b,{unstable_defaultShouldRevalidate:y.unstable_defaultShouldRevalidate,preventScrollReset:y.preventScrollReset,formData:z,body:E,formMethod:y.method||g,formEncType:y.encType||m,replace:y.replace,state:y.state,fromRouteId:d,flushSync:y.flushSync,viewTransition:y.viewTransition})},[o,p,u,d])}function S1(r,{relative:u}={}){let{basename:d}=S.useContext(_t),o=S.useContext(qt);De(o,"useFormAction must be used inside a RouteContext");let[p]=o.matches.slice(-1),h={...Qn(r||".",{relative:u})},y=Bt();if(r==null){h.search=y.search;let b=new URLSearchParams(h.search),g=b.getAll("index");if(g.some(z=>z==="")){b.delete("index"),g.filter(E=>E).forEach(E=>b.append("index",E));let z=b.toString();h.search=z?`?${z}`:""}}return(!r||r===".")&&p.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(h.pathname=h.pathname==="/"?d:sa([d,h.pathname])),Gn(h)}function N1(r,{relative:u}={}){let d=S.useContext(Xp);De(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=e0("useViewTransitionState"),p=Qn(r,{relative:u});if(!d.isTransitioning)return!1;let h=ra(d.currentLocation.pathname,o)||d.currentLocation.pathname,y=ra(d.nextLocation.pathname,o)||d.nextLocation.pathname;return hs(p.pathname,y)!=null||hs(p.pathname,h)!=null}function z1(){const r=tt(),[u,d]=S.useState(0);return S.useEffect(()=>{const o=setTimeout(()=>d(1),300),p=setTimeout(()=>d(2),1200),h=setTimeout(()=>r("/login"),2800);return()=>{clearTimeout(o),clearTimeout(p),clearTimeout(h)}},[r]),s.jsxs("div",{className:"splash",children:[s.jsxs("div",{className:`splash-content ${u>=1?"visible":""}`,children:[s.jsxs("div",{className:"splash-logo",children:[s.jsx("div",{className:"lotus-icon",children:s.jsxs("svg",{viewBox:"0 0 80 80",fill:"none",children:[s.jsx("path",{d:"M40 8C40 8 25 25 25 40C25 55 40 65 40 65C40 65 55 55 55 40C55 25 40 8 40 8Z",fill:"rgba(139,168,136,0.3)",stroke:"#8BA888",strokeWidth:"1.5"}),s.jsx("path",{d:"M40 15C40 15 18 30 15 45C12 60 40 70 40 70C40 70 68 60 65 45C62 30 40 15 40 15Z",fill:"rgba(139,168,136,0.15)",stroke:"#8BA888",strokeWidth:"1"}),s.jsx("path",{d:"M40 20C40 20 30 35 30 45C30 55 40 60 40 60C40 60 50 55 50 45C50 35 40 20 40 20Z",fill:"rgba(139,168,136,0.4)",stroke:"#8BA888",strokeWidth:"1.5"}),s.jsx("circle",{cx:"40",cy:"42",r:"4",fill:"#8BA888"})]})}),s.jsx("h1",{className:"splash-title",children:"Revoshalaa"})]}),s.jsx("p",{className:`splash-tagline ${u>=2?"visible":""}`,children:"Learn. Move. Transform."})]}),s.jsx("div",{className:`splash-footer ${u>=2?"visible":""}`,children:s.jsx("p",{children:"Your Creator Store"})}),s.jsx("style",{children:`
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
      `})]})}const t0=(...r)=>r.filter((u,d,o)=>!!u&&u.trim()!==""&&o.indexOf(u)===d).join(" ").trim();const E1=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const A1=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(u,d,o)=>o?o.toUpperCase():d.toLowerCase());const wp=r=>{const u=A1(r);return u.charAt(0).toUpperCase()+u.slice(1)};var C1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const w1=r=>{for(const u in r)if(u.startsWith("aria-")||u==="role"||u==="title")return!0;return!1};const T1=S.forwardRef(({color:r="currentColor",size:u=24,strokeWidth:d=2,absoluteStrokeWidth:o,className:p="",children:h,iconNode:y,...b},g)=>S.createElement("svg",{ref:g,...C1,width:u,height:u,stroke:r,strokeWidth:o?Number(d)*24/Number(u):d,className:t0("lucide",p),...!h&&!w1(b)&&{"aria-hidden":"true"},...b},[...y.map(([m,z])=>S.createElement(m,z)),...Array.isArray(h)?h:[h]]));const ne=(r,u)=>{const d=S.forwardRef(({className:o,...p},h)=>S.createElement(T1,{ref:h,iconNode:u,className:t0(`lucide-${E1(wp(r))}`,`lucide-${r}`,o),...p}));return d.displayName=wp(r),d};const M1=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Yl=ne("arrow-left",M1);const _1=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],eo=ne("arrow-right",_1);const R1=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],D1=ne("award",R1);const O1=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742",key:"178tsu"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05",key:"1hqiys"}]],B1=ne("bell-off",O1);const k1=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],a0=ne("bell",k1);const U1=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],ys=ne("calendar",U1);const H1=[["path",{d:"M14.564 14.558a3 3 0 1 1-4.122-4.121",key:"1rnrzw"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M20 20H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 .819-.175",key:"1x3arw"}],["path",{d:"M9.695 4.024A2 2 0 0 1 10.004 4h3.993a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v7.344",key:"1i84u0"}]],L1=ne("camera-off",H1);const Y1=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],q1=ne("camera",Y1);const G1=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],qn=ne("check",G1);const X1=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Da=ne("chevron-right",X1);const V1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],el=ne("clock",V1);const Q1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]],Z1=ne("compass",Q1);const K1=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],l0=ne("credit-card",K1);const J1=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],ms=ne("crown",J1);const $1=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],F1=ne("dollar-sign",$1);const W1=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],I1=ne("file-text",W1);const P1=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],ev=ne("house",P1);const tv=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],av=ne("key",tv);const lv=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],nv=ne("layout-dashboard",lv);const iv=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],sv=ne("lock",iv);const rv=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],n0=ne("log-out",rv);const cv=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],i0=ne("mail",cv);const ov=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],s0=ne("maximize-2",ov);const uv=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],co=ne("message-circle",uv);const fv=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M16.95 16.95A7 7 0 0 1 5 12v-2",key:"cqa7eg"}],["path",{d:"M18.89 13.23A7 7 0 0 0 19 12v-2",key:"16hl24"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}]],Tp=ne("mic-off",fv);const dv=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],Mp=ne("mic",dv);const pv=[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]],hv=ne("minimize-2",pv);const mv=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],gv=ne("pause",mv);const vv=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],r0=ne("phone",vv);const xv=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],gs=ne("play",xv);const yv=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],bv=ne("plus",yv);const jv=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],c0=ne("radio",jv);const Sv=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Nv=ne("search",Sv);const zv=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Ev=ne("send",zv);const Av=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],o0=ne("settings",Av);const Cv=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],wv=ne("share-2",Cv);const Tv=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],u0=ne("shield",Tv);const Mv=[["path",{d:"M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",key:"15892j"}],["path",{d:"M3 20V4",key:"1ptbpl"}]],_v=ne("skip-back",Mv);const Rv=[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]],Dv=ne("skip-forward",Rv);const Ov=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Bv=ne("sparkles",Ov);const kv=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],bs=ne("star",kv);const Uv=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],_p=ne("tag",Uv);const Hv=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Lv=ne("trending-up",Hv);const Yv=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],js=ne("user",Yv);const qv=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Xl=ne("users",qv);const Gv=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],tl=ne("video",Gv);const Xv=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Vv=ne("volume-2",Xv);const Qv=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Zv=ne("x",Qv);const Kv=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],f0=ne("zap",Kv),d0=S.createContext({user:null,onlineUsers:{},checkOnlineStatus:()=>!1,login:()=>{},logout:()=>{},addCategory:()=>{},startLiveSession:()=>{},endLiveSession:()=>{},categories:[],tutors:[],liveSessions:[]}),Oa=()=>S.useContext(d0),fs=[{id:"fitness",name:"Fitness",emoji:"💪"},{id:"music",name:"Music",emoji:"🎵"},{id:"cooking",name:"Cooking",emoji:"🍳"},{id:"art",name:"Art & Design",emoji:"🎨"},{id:"business",name:"Business",emoji:"📈"},{id:"wellness",name:"Wellness",emoji:"🧘"}],Jv=({children:r})=>{const[u,d]=S.useState(null),[o,p]=S.useState([]),[h,y]=S.useState([]),[b,g]=S.useState([]),[m,z]=S.useState({}),E=U=>{if(!U)return!1;const Z=U.toString().toLowerCase();return!!m[Z]},B=(U,Z)=>{U&&z(K=>{const ee={...K,[U.toString()]:!0};return Z&&(ee[Z.toLowerCase()]=!0),localStorage.setItem("revoshalaa_online_users",JSON.stringify(ee)),ee})},X=(U,Z)=>{z(K=>{const ee={...K};return U&&delete ee[U.toString()],Z&&delete ee[Z.toLowerCase()],localStorage.setItem("revoshalaa_online_users",JSON.stringify(ee)),ee})};S.useEffect(()=>{const U=K=>{if(K.key==="revoshalaa_online_users")try{const ee=JSON.parse(K.newValue);ee&&z(ee)}catch{}};window.addEventListener("storage",U);const Z=localStorage.getItem("revoshalaa_online_users");if(Z)try{z(JSON.parse(Z))}catch{}return()=>window.removeEventListener("storage",U)},[]),S.useEffect(()=>{const U=localStorage.getItem("revoshalaa_user"),Z=localStorage.getItem("revoshalaa_tutors"),K=localStorage.getItem("revoshalaa_sessions"),ee=localStorage.getItem("revoshalaa_categories");if(U)try{const H=JSON.parse(U);d(H),H&&H.id&&B(H.id,H.name)}catch(H){console.error("Failed to parse user",H),localStorage.removeItem("revoshalaa_user")}if(Z)try{p(JSON.parse(Z))}catch{localStorage.removeItem("revoshalaa_tutors")}if(K)try{y(JSON.parse(K))}catch{localStorage.removeItem("revoshalaa_sessions")}if(ee)try{g(JSON.parse(ee))}catch{localStorage.removeItem("revoshalaa_categories"),g(fs),localStorage.setItem("revoshalaa_categories",JSON.stringify(fs))}else g(fs),localStorage.setItem("revoshalaa_categories",JSON.stringify(fs))},[]);const q=(U,Z="📌")=>{const K=U.toLowerCase().replace(/[^a-z0-9]/g,"-");if(b.some(I=>I.id===K||I.name.toLowerCase()===U.toLowerCase()))return b.find(I=>I.id===K||I.name.toLowerCase()===U.toLowerCase());const H={id:K,name:U,emoji:Z},oe=[...b,H];return g(oe),localStorage.setItem("revoshalaa_categories",JSON.stringify(oe)),H},Q=(U,Z)=>{const K={id:Date.now().toString(),name:Z.firstName?`${Z.firstName} ${Z.lastName||""}`.trim():Z.identifier?.split("@")[0]||"User",firstName:Z.firstName||"",lastName:Z.lastName||"",type:U,avatar:U==="tutor"?"🎓":"👤",category:Z.category||"",specialty:Z.specialty||"",identifier:Z.identifier||""};if(d(K),B(K.id,K.name),localStorage.setItem("revoshalaa_user",JSON.stringify(K)),U==="tutor"){const ee=o.findIndex(oe=>oe.identifier===K.identifier);let H;ee>=0?(H=[...o],H[ee]=K):H=[...o,K],p(H),localStorage.setItem("revoshalaa_tutors",JSON.stringify(H))}return!0},G=()=>{u&&X(u.id,u.name),d(null),localStorage.removeItem("revoshalaa_user")},V=U=>{if(!u||u.type!=="tutor")return;const Z={id:Date.now().toString(),tutorId:u.id,tutorName:u.name,tutorAvatar:u.avatar,title:U.title,category:U.category,viewers:0,startedAt:new Date().toISOString()},K=[...h,Z];return y(K),localStorage.setItem("revoshalaa_sessions",JSON.stringify(K)),Z},Y=U=>{const Z=h.filter(K=>K.id!==U);y(Z),localStorage.setItem("revoshalaa_sessions",JSON.stringify(Z))};return s.jsx(d0.Provider,{value:{user:u,tutors:o,liveSessions:h,categories:b,onlineUsers:m,checkOnlineStatus:E,login:Q,logout:G,addCategory:q,startLiveSession:V,endLiveSession:Y},children:r})},Rp=["linear-gradient(135deg, #A8C4A5 0%, #8BA888 100%)","linear-gradient(135deg, #9B8EC4 0%, #7B6FA4 100%)","linear-gradient(135deg, #D9A87C 0%, #C68B59 100%)","linear-gradient(135deg, #C4857A 0%, #B06B5E 100%)","linear-gradient(135deg, #6B8FAD 0%, #537A96 100%)","linear-gradient(135deg, #BCA9D4 0%, #A08CC0 100%)","linear-gradient(135deg, #7ABFB0 0%, #5CA69A 100%)","linear-gradient(135deg, #D4A853 0%, #B88F3A 100%)"];function $v(){const r=tt(),{user:u,liveSessions:d,categories:o}=Oa(),p=(o||[]).map((m,z)=>({...m,sessions:15+m.name.length*3%20,gradient:Rp[z%Rp.length]})),[h,y]=S.useState([]);S.useEffect(()=>{const m=async()=>{try{const B=await(await fetch("/api/live-sessions")).json();y(B)}catch{}};m();const z=setInterval(m,3e3);return()=>clearInterval(z)},[]);const b=h.length>0?h:d,g=b.length>0?b[0]:null;return s.jsxs("div",{className:"page home-page",children:[s.jsxs("div",{className:"home-header",children:[s.jsxs("div",{children:[s.jsxs("p",{className:"greeting",children:["Hey, ",u?.name||"Guest"," 👋"]}),s.jsx("h1",{children:"Revoshalaa"})]}),s.jsx("div",{className:"header-actions",children:s.jsx("button",{className:"search-btn",onClick:()=>r("/explore"),children:s.jsx(Bv,{size:20})})})]}),s.jsxs("div",{className:"page-content",children:[g?s.jsxs("div",{className:"live-banner glass-card",onClick:()=>r("/live-session",{state:g}),children:[s.jsxs("div",{className:"live-banner-badge",children:[s.jsx("span",{className:"badge badge-live",children:"● LIVE"}),s.jsxs("span",{className:"viewer-count",children:[s.jsx(Xl,{size:12})," ",g.viewers+12]})]}),s.jsxs("div",{className:"live-banner-info",children:[s.jsx("h3",{children:g.title}),s.jsxs("p",{children:[g.tutorName," · ",g.category]})]}),s.jsxs("button",{className:"btn-primary live-join-btn",children:[s.jsx(gs,{size:16,fill:"white"})," Join"]})]}):s.jsxs("div",{className:"no-live-banner glass-card",children:[s.jsx("div",{className:"icon-circle",children:s.jsx(ys,{size:24,color:"var(--text-secondary)"})}),s.jsxs("div",{className:"no-live-info",children:[s.jsx("h3",{children:"No live sessions right now"}),s.jsx("p",{children:"Check the schedule for upcoming classes"})]}),s.jsx("button",{className:"btn-outline",onClick:()=>r("/schedule"),children:"View Schedule"})]}),s.jsxs("section",{className:"home-section",style:{marginTop:24},children:[s.jsx("div",{className:"section-header",children:s.jsx("h2",{children:"Categories"})}),s.jsx("div",{className:"categories-grid",children:p.map(m=>s.jsxs("div",{className:"category-big-card",style:{background:m.gradient},onClick:()=>r(`/category/${m.id}`),children:[s.jsx("span",{className:"cat-emoji",children:m.emoji}),s.jsx("h3",{children:m.name}),s.jsxs("p",{children:[m.sessions," sessions"]})]},m.id))})]}),s.jsxs("section",{className:"home-section",children:[s.jsxs("div",{className:"section-header",children:[s.jsx("h2",{children:"Upcoming Live"}),s.jsx("button",{className:"see-all",onClick:()=>r("/schedule"),children:"See All"})]}),s.jsxs("div",{className:"h-scroll",style:{paddingLeft:0},children:[s.jsxs("div",{className:"session-card glass-card",onClick:()=>r("/schedule"),children:[s.jsxs("div",{className:"session-card-top",children:[s.jsx("span",{className:"badge badge-free",children:"FREE"}),s.jsx("span",{className:"session-cat",children:"Fitness"})]}),s.jsx("h3",{children:"HIIT Burn Challenge"}),s.jsx("p",{className:"session-instructor",children:"Ankit Verma"}),s.jsxs("div",{className:"session-time",children:[s.jsx(el,{size:13}),s.jsx("span",{children:"Today, 6:00 PM"})]})]}),s.jsxs("div",{className:"session-card glass-card",onClick:()=>r("/schedule"),children:[s.jsxs("div",{className:"session-card-top",children:[s.jsx("span",{className:"badge badge-paid",children:"$5"}),s.jsx("span",{className:"session-cat",children:"Music"})]}),s.jsx("h3",{children:"Guitar for Beginners"}),s.jsx("p",{className:"session-instructor",children:"Rohan Mehta"}),s.jsxs("div",{className:"session-time",children:[s.jsx(el,{size:13}),s.jsx("span",{children:"Today, 8:00 PM"})]})]}),s.jsxs("div",{className:"session-card glass-card",onClick:()=>r("/schedule"),children:[s.jsxs("div",{className:"session-card-top",children:[s.jsx("span",{className:"badge badge-free",children:"FREE"}),s.jsx("span",{className:"session-cat",children:"Cooking"})]}),s.jsx("h3",{children:"5-Min Healthy Meals"}),s.jsx("p",{className:"session-instructor",children:"Chef Ananya"}),s.jsxs("div",{className:"session-time",children:[s.jsx(el,{size:13}),s.jsx("span",{children:"Tomorrow, 12:00 PM"})]})]})]})]})]}),s.jsx("style",{children:`
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
      `})]})}const Fv=[{id:"hiit",name:"HIIT Training",type:"Fitness",emoji:"🔥",sessions:8,color:"#A8C4A5"},{id:"strength",name:"Strength",type:"Fitness",emoji:"💪",sessions:6,color:"#8BA888"},{id:"yoga",name:"Yoga",type:"Fitness",emoji:"🧘",sessions:7,color:"#6D8A6A"},{id:"crossfit",name:"CrossFit",type:"Fitness",emoji:"🏋️",sessions:5,color:"#7AA27E"},{id:"guitar",name:"Guitar",type:"Music",emoji:"🎸",sessions:8,color:"#9B8EC4"},{id:"piano",name:"Piano",type:"Music",emoji:"🎹",sessions:6,color:"#7B6FA4"},{id:"vocals",name:"Vocals",type:"Music",emoji:"🎤",sessions:5,color:"#A99BD4"},{id:"production",name:"Music Production",type:"Music",emoji:"🎧",sessions:4,color:"#8676B4"},{id:"healthy",name:"Healthy Meals",type:"Cooking",emoji:"🥗",sessions:6,color:"#D9A87C"},{id:"baking",name:"Baking",type:"Cooking",emoji:"🧁",sessions:5,color:"#C68B59"},{id:"indian",name:"Indian Cuisine",type:"Cooking",emoji:"🍛",sessions:4,color:"#B87A4A"},{id:"illustration",name:"Illustration",type:"Art & Design",emoji:"✏️",sessions:6,color:"#C4857A"},{id:"uidesign",name:"UI/UX Design",type:"Art & Design",emoji:"📱",sessions:5,color:"#B06B5E"},{id:"painting",name:"Painting",type:"Art & Design",emoji:"🖌️",sessions:4,color:"#D9927A"},{id:"marketing",name:"Marketing",type:"Business",emoji:"📣",sessions:5,color:"#6B8FAD"},{id:"freelance",name:"Freelancing",type:"Business",emoji:"💼",sessions:4,color:"#537A96"},{id:"finance",name:"Finance",type:"Business",emoji:"💰",sessions:3,color:"#4A6A80"},{id:"meditation",name:"Meditation",type:"Wellness",emoji:"🧘‍♀️",sessions:5,color:"#BCA9D4"},{id:"mindfulness",name:"Mindfulness",type:"Wellness",emoji:"🌿",sessions:4,color:"#A08CC0"},{id:"breathwork",name:"Breathwork",type:"Wellness",emoji:"🌬️",sessions:3,color:"#9182B0"}],Wv=["fitness","music","cooking","art","business","wellness"];function Iv(){const r=tt(),{categories:u}=Oa(),[d,o]=S.useState(""),[p,h]=S.useState("All"),y=["All",...(u||[]).map(z=>z.name)],b=(u||[]).filter(z=>!Wv.includes(z.id)).map(z=>({id:z.id,name:z.name,type:z.name,emoji:z.emoji,sessions:3,color:"#8BA888"})),m=[...Fv,...b].filter(z=>{const E=z.name.toLowerCase().includes(d.toLowerCase()),B=p==="All"||z.type===p;return E&&B});return s.jsxs("div",{className:"page explore-page",children:[s.jsx("div",{className:"page-header",children:s.jsx("h1",{children:"Explore"})}),s.jsxs("div",{className:"page-content",children:[s.jsxs("div",{className:"search-bar glass-card",children:[s.jsx(Nv,{size:18,color:"var(--text-tertiary)"}),s.jsx("input",{type:"text",placeholder:"Search creators, topics...",value:d,onChange:z=>o(z.target.value)})]}),s.jsx("div",{className:"filter-chips h-scroll",children:y.map(z=>s.jsx("button",{className:`chip ${p===z?"chip-active":""}`,onClick:()=>h(z),children:z},z))}),s.jsx("div",{className:"explore-grid",children:m.map(z=>s.jsxs("div",{className:"explore-card glass-card",onClick:()=>r(`/category/${z.type?z.type.toLowerCase().replace(/[^a-z]/g,"-"):"fitness"}`),children:[s.jsx("div",{className:"explore-card-emoji",style:{background:`${z.color}20`},children:s.jsx("span",{children:z.emoji})}),s.jsxs("div",{className:"explore-card-info",children:[s.jsx("h3",{children:z.name}),s.jsxs("p",{children:[z.sessions," sessions · ",z.type]})]}),s.jsx(Da,{size:16,color:"var(--text-tertiary)"})]},z.id))})]}),s.jsx("style",{children:`
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
      `})]})}const Dp={fitness:{name:"Fitness",emoji:"💪",tagline:"Train with top fitness creators",gradient:"linear-gradient(135deg, #A8C4A5 0%, #8BA888 100%)",instructors:[{id:1,name:"Ankit Verma",specialty:"HIIT & Strength",rating:4.9,avatar:"💪",nextLive:"Today, 6:00 PM"},{id:2,name:"Neha Gupta",specialty:"Yoga & Pilates",rating:4.8,avatar:"🧘‍♀️",nextLive:"Tomorrow, 7:00 AM"}],upcomingSessions:[{id:1,title:"HIIT Burn Challenge",time:"Today, 6:00 PM",free:!0,viewers:0},{id:2,title:"Full Body Strength",time:"Wed, 7:00 AM",free:!1,viewers:0},{id:3,title:"Morning Yoga Flow",time:"Thu, 6:00 AM",free:!0,viewers:0}]},music:{name:"Music",emoji:"🎵",tagline:"Learn instruments, production & voice",gradient:"linear-gradient(135deg, #9B8EC4 0%, #7B6FA4 100%)",instructors:[{id:1,name:"Rohan Mehta",specialty:"Guitar & Songwriting",rating:4.9,avatar:"🎸",nextLive:"Today, 8:00 PM"},{id:2,name:"Priya Sen",specialty:"Vocals & Classical",rating:4.8,avatar:"🎤",nextLive:"Fri, 7:00 PM"}],upcomingSessions:[{id:1,title:"Guitar for Beginners",time:"Today, 8:00 PM",free:!0,viewers:0},{id:2,title:"Music Production 101",time:"Fri, 6:00 PM",free:!1,viewers:0},{id:3,title:"Vocal Warm-ups",time:"Sat, 10:00 AM",free:!0,viewers:0}]},cooking:{name:"Cooking",emoji:"🍳",tagline:"Cook with chefs from around the world",gradient:"linear-gradient(135deg, #D9A87C 0%, #C68B59 100%)",instructors:[{id:1,name:"Chef Ananya",specialty:"Healthy & Quick",rating:4.9,avatar:"🍳",nextLive:"Tomorrow, 12:00 PM"},{id:2,name:"Chef Ravi",specialty:"Indian Cuisine",rating:4.7,avatar:"🍛",nextLive:"Sat, 5:00 PM"}],upcomingSessions:[{id:1,title:"5-Min Healthy Meals",time:"Tomorrow, 12:00 PM",free:!0,viewers:0},{id:2,title:"Baking Basics",time:"Sat, 3:00 PM",free:!1,viewers:0},{id:3,title:"Indian Street Food",time:"Sun, 4:00 PM",free:!0,viewers:0}]},art:{name:"Art & Design",emoji:"🎨",tagline:"Express yourself through art & design",gradient:"linear-gradient(135deg, #C4857A 0%, #B06B5E 100%)",instructors:[{id:1,name:"Sanya Kapoor",specialty:"Illustration & Sketching",rating:4.8,avatar:"✏️",nextLive:"Wed, 4:00 PM"},{id:2,name:"Aman Singh",specialty:"UI/UX Design",rating:4.9,avatar:"📱",nextLive:"Thu, 6:00 PM"}],upcomingSessions:[{id:1,title:"Sketch Basics",time:"Wed, 4:00 PM",free:!0,viewers:0},{id:2,title:"Figma Masterclass",time:"Thu, 6:00 PM",free:!1,viewers:0},{id:3,title:"Watercolor Painting",time:"Sat, 11:00 AM",free:!0,viewers:0}]},business:{name:"Business",emoji:"📈",tagline:"Grow your career & side hustle",gradient:"linear-gradient(135deg, #6B8FAD 0%, #537A96 100%)",instructors:[{id:1,name:"Vikram Shah",specialty:"Marketing & Growth",rating:4.9,avatar:"📣",nextLive:"Today, 7:00 PM"},{id:2,name:"Pooja Nair",specialty:"Freelancing & Finance",rating:4.7,avatar:"💼",nextLive:"Fri, 8:00 PM"}],upcomingSessions:[{id:1,title:"Social Media Marketing",time:"Today, 7:00 PM",free:!0,viewers:0},{id:2,title:"Start Freelancing",time:"Fri, 8:00 PM",free:!1,viewers:0},{id:3,title:"Personal Finance 101",time:"Sun, 6:00 PM",free:!0,viewers:0}]},wellness:{name:"Wellness",emoji:"🧘",tagline:"Mind, body & soul practices",gradient:"linear-gradient(135deg, #BCA9D4 0%, #A08CC0 100%)",instructors:[{id:1,name:"Kavya Nair",specialty:"Meditation & Breathwork",rating:4.9,avatar:"🧘‍♀️",nextLive:"Tomorrow, 7:00 AM"},{id:2,name:"Dr. Arjun",specialty:"Mindfulness Coach",rating:4.8,avatar:"🌿",nextLive:"Wed, 8:00 PM"}],upcomingSessions:[{id:1,title:"Morning Meditation",time:"Tomorrow, 7:00 AM",free:!0,viewers:0},{id:2,title:"Breathwork Essentials",time:"Wed, 8:00 PM",free:!1,viewers:0},{id:3,title:"Stress Relief Session",time:"Fri, 9:00 PM",free:!0,viewers:0}]}};function Pv(){const r=tt(),{id:u}=Mg(),{checkOnlineStatus:d}=useAuth(),o=Dp[u]||Dp.fitness;return s.jsxs("div",{className:"page category-page",children:[s.jsxs("div",{className:"category-hero",style:{background:o.gradient},children:[s.jsx("button",{className:"back-btn",onClick:()=>r(-1),children:s.jsx(Yl,{size:24,color:"white"})}),s.jsxs("div",{className:"hero-content",children:[s.jsx("span",{className:"hero-emoji",children:o.emoji}),s.jsx("h1",{children:o.name}),s.jsx("p",{children:o.tagline})]})]}),s.jsxs("div",{className:"page-content",style:{marginTop:-20,position:"relative",zIndex:1},children:[s.jsxs("div",{className:"intro-video glass-card",onClick:()=>r("/video-player"),children:[s.jsx("div",{className:"video-play-overlay",children:s.jsx(gs,{size:28,fill:"white",color:"white"})}),s.jsx("p",{className:"video-label",children:"Watch Intro"})]}),s.jsxs("section",{className:"home-section",children:[s.jsx("div",{className:"section-header",children:s.jsx("h2",{children:"Top Creators"})}),o.instructors.map(p=>{const h=d?d(p.name):!1;return s.jsxs("div",{className:"instructor-detail-card glass-card",children:[s.jsxs("div",{className:"inst-avatar",style:{position:"relative"},children:[p.avatar,h&&s.jsx("div",{className:"online-badge-dot"})]}),s.jsxs("div",{className:"inst-info",children:[s.jsxs("div",{className:"inst-header-row",children:[s.jsx("h3",{children:p.name}),h&&s.jsx("span",{className:"online-tag",children:"Online"})]}),s.jsx("p",{className:"inst-specialty",children:p.specialty}),s.jsxs("div",{className:"inst-meta",children:[s.jsxs("span",{children:[s.jsx(bs,{size:12,fill:"#D4A853",color:"#D4A853"})," ",p.rating]}),s.jsxs("span",{children:[s.jsx(el,{size:12})," ",p.nextLive]})]})]})]},p.id)})]}),s.jsxs("section",{className:"home-section",children:[s.jsx("div",{className:"section-header",children:s.jsx("h2",{children:"Upcoming Sessions"})}),o.upcomingSessions.map(p=>s.jsxs("div",{className:"upcoming-card glass-card",onClick:()=>r("/schedule"),children:[s.jsxs("div",{className:"upcoming-info",children:[s.jsx("h4",{children:p.title}),s.jsxs("p",{children:[s.jsx(el,{size:12})," ",p.time]})]}),s.jsx("span",{className:`badge ${p.free?"badge-free":"badge-paid"}`,children:p.free?"FREE":"$5"})]},p.id))]})]}),s.jsx("style",{children:`
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

        /* Online Status */
        .online-badge-dot {
          position: absolute;
          bottom: 2px;
          right: 2px;
          width: 12px;
          height: 12px;
          background: #4CAF50;
          border: 2px solid white;
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .inst-header-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 2px;
        }

        .inst-header-row h3 {
          margin-bottom: 0;
        }

        .online-tag {
          font-size: 10px;
          font-weight: 600;
          color: #4CAF50;
          background: rgba(76, 175, 80, 0.1);
          padding: 2px 6px;
          border-radius: 4px;
        }
      `})]})}function ex(){const r=tt(),[u,d]=S.useState(!1);return s.jsxs("div",{className:"video-player-page",children:[s.jsxs("div",{className:"vp-video-area",children:[s.jsx("video",{src:"https://www.w3schools.com/html/mov_bbb.mp4",className:"vp-video",playsInline:!0,onClick:()=>d(!u)}),s.jsxs("div",{className:"vp-overlay",children:[s.jsx("button",{className:"vp-back",onClick:()=>r(-1),children:s.jsx(Yl,{size:22,color:"white"})}),s.jsxs("div",{className:"vp-center-controls",children:[s.jsx("button",{className:"vp-ctrl-btn",children:s.jsx(_v,{size:24,color:"white"})}),s.jsx("button",{className:"vp-play-btn",onClick:()=>d(!u),children:u?s.jsx(gv,{size:30,fill:"white",color:"white"}):s.jsx(gs,{size:30,fill:"white",color:"white"})}),s.jsx("button",{className:"vp-ctrl-btn",children:s.jsx(Dv,{size:24,color:"white"})})]}),s.jsxs("div",{className:"vp-bottom-bar",children:[s.jsx("div",{className:"vp-progress",children:s.jsx("div",{className:"vp-progress-fill",style:{width:"35%"}})}),s.jsxs("div",{className:"vp-time-row",children:[s.jsx("span",{children:"2:14"}),s.jsxs("div",{className:"vp-right-ctrls",children:[s.jsx(Vv,{size:18,color:"white"}),s.jsx(s0,{size:18,color:"white"})]}),s.jsx("span",{children:"6:30"})]})]})]})]}),s.jsxs("div",{className:"vp-info",children:[s.jsx("h2",{children:"Introduction to Vinyasa"}),s.jsx("p",{className:"vp-instructor",children:"by Ankit Verma · Fitness"}),s.jsx("p",{className:"vp-desc",children:"Get started with this beginner-friendly session. Your creator will guide you through fundamental poses, breathing techniques, and how to connect movement with breath."}),s.jsxs("button",{className:"btn-primary",style:{width:"100%",marginTop:20},onClick:()=>r("/live-session"),children:[s.jsx(gs,{size:18,fill:"white"})," Join Live Session"]})]}),s.jsx("style",{children:`
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
      `})]})}const tx=[{id:1,user:"Ananya R.",msg:"Namaste everyone! 🙏",time:"2m ago"},{id:2,user:"Priya S.",msg:"Let's begin with some deep breaths",time:"1m ago",isInstructor:!0},{id:3,user:"Kavita M.",msg:"So excited for today's session!",time:"1m ago"},{id:4,user:"Arjun D.",msg:"First time here, loving the energy ❤️",time:"45s ago"},{id:5,user:"Priya S.",msg:"Welcome Arjun! Let's flow together 🧘‍♀️",time:"30s ago",isInstructor:!0}],ax=[{emoji:"❤️"},{emoji:"🔥"},{emoji:"🙏"},{emoji:"👏"}];function lx(){const r=tt(),d=Bt().state||{},o=d.tutorName||"Priya Sharma",p=d.title||"Live Session",h=d.category||"Wellness",[y,b]=S.useState(tx),[g,m]=S.useState(""),[z,E]=S.useState([]),[B,X]=S.useState(d.viewers||142),[q,Q]=S.useState(0),[G,V]=S.useState(!0),[Y,U]=S.useState(!1),Z=S.useRef(null),K=S.useRef(null),ee=S.useRef(null);S.useEffect(()=>{const le=d.id;if(!le)return;let Ne=!1,ve;async function Xe(){ve=setInterval(async()=>{if(!Ne)try{const P=await(await fetch(`/api/signal/get/${le}`)).json();if(P.offer&&!ee.current){clearInterval(ve);const A=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]});ee.current=A,A.ontrack=J=>{console.log("[WebRTC] Received tutor stream!"),K.current&&(K.current.srcObject=J.streams[0],U(!0))},A.onicecandidate=J=>{J.candidate&&fetch("/api/signal/viewer-candidate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sessionId:le,candidate:J.candidate})}).catch(()=>{})},await A.setRemoteDescription(new RTCSessionDescription(P.offer));for(const J of P.tutorCandidates)await A.addIceCandidate(new RTCIceCandidate(J)).catch(()=>{});const k=await A.createAnswer();await A.setLocalDescription(k),await fetch("/api/signal/answer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sessionId:le,answer:A.localDescription})}),console.log("[WebRTC] Answer sent, connecting...")}}catch{}},1e3)}return Xe(),()=>{Ne=!0,ve&&clearInterval(ve),ee.current&&(ee.current.close(),ee.current=null)}},[d.id]),S.useEffect(()=>{const le=setInterval(()=>Q(Ne=>Ne+1),1e3);return()=>clearInterval(le)},[]),S.useEffect(()=>{const le=setInterval(()=>{X(Ne=>Math.max(1,Ne+Math.floor(Math.random()*5)-2))},5e3);return()=>clearInterval(le)},[]),S.useEffect(()=>{const le=["Aarav",o,"Rahul","Sneha","Vikram","Meera","Riya"],Ne=["Amazing! 🔥","Love this!","So helpful!","Namaste 🙏","❤️","Great energy!","🙌","Wow!"],ve=setInterval(()=>{const Xe=Math.random()>.7;b(Qe=>[...Qe,{id:Date.now(),user:Xe?o:le[Math.floor(Math.random()*le.length)],msg:Ne[Math.floor(Math.random()*Ne.length)],time:"now",isInstructor:Xe}])},4e3);return()=>clearInterval(ve)},[]),S.useEffect(()=>{Z.current&&(Z.current.scrollTop=Z.current.scrollHeight)},[y]);const H=le=>{const Ne=Math.floor(le/60).toString().padStart(2,"0"),ve=(le%60).toString().padStart(2,"0");return`${Ne}:${ve}`},oe=le=>{const Ne=Date.now()+Math.random(),ve=20+Math.random()*60;E(Xe=>[...Xe,{id:Ne,emoji:le,left:ve}]),setTimeout(()=>{E(Xe=>Xe.filter(Qe=>Qe.id!==Ne))},2e3)},I=()=>{g.trim()&&(b(le=>[...le,{id:Date.now(),user:"You",msg:g,time:"now"}]),m(""))};return s.jsxs("div",{className:"live-session-page",children:[s.jsxs("div",{className:"live-video-area",children:[s.jsx("video",{ref:K,autoPlay:!0,playsInline:!0,muted:!1,className:"live-video-element",style:{display:Y?"block":"none"}}),!Y&&s.jsxs("div",{className:"tutor-stream-visual",children:[s.jsx("div",{className:"stream-orb orb-1"}),s.jsx("div",{className:"stream-orb orb-2"}),s.jsx("div",{className:"stream-orb orb-3"}),s.jsxs("div",{className:"stream-center",children:[s.jsx("div",{className:"stream-avatar",children:"🧘‍♀️"}),s.jsx("h2",{children:o}),s.jsx("p",{children:"Connecting to stream..."}),s.jsxs("div",{className:"connecting-dots",children:[s.jsx("span",{}),s.jsx("span",{}),s.jsx("span",{})]})]})]}),s.jsx("div",{className:"live-gradient-top"}),s.jsx("div",{className:"live-gradient-bottom"}),s.jsxs("div",{className:"live-topbar",children:[s.jsx("button",{className:"live-btn-back",onClick:()=>r(-1),children:s.jsx(Yl,{size:20,color:"white"})}),s.jsxs("div",{className:"live-pills",children:[s.jsxs("div",{className:"pill-live",children:[s.jsx("span",{className:"dot-anim"})," LIVE"]}),s.jsxs("div",{className:"pill-info",children:[s.jsx(Xl,{size:13})," ",B]}),s.jsx("div",{className:"pill-info",children:H(q)})]}),s.jsx("button",{className:"live-btn-back",onClick:()=>V(!G),children:G?s.jsx(hv,{size:18,color:"white"}):s.jsx(s0,{size:18,color:"white"})})]}),s.jsxs("div",{className:"live-instructor",children:[s.jsx("div",{className:"live-inst-av",children:"🧘‍♀️"}),s.jsxs("div",{className:"live-inst-text",children:[s.jsx("h4",{children:o}),s.jsxs("p",{children:[p," · ",h]})]}),s.jsx("button",{className:"follow-pill",children:"Follow"})]}),z.map(le=>s.jsx("div",{className:"float-emoji",style:{left:`${le.left}%`},children:le.emoji},le.id))]}),s.jsxs("div",{className:`live-bottom ${G?"":"collapsed"}`,children:[G&&s.jsx("div",{className:"live-chat-list",ref:Z,children:y.slice(-20).map(le=>s.jsxs("div",{className:`live-msg ${le.isInstructor?"instructor":""}`,children:[s.jsx("span",{className:"live-msg-user",children:le.user}),s.jsx("span",{className:"live-msg-text",children:le.msg})]},le.id))}),s.jsx("div",{className:"live-reactions",children:ax.map((le,Ne)=>s.jsx("button",{className:"reaction-pill",onClick:()=>oe(le.emoji),children:le.emoji},Ne))}),s.jsxs("div",{className:"live-input-bar",children:[s.jsx("input",{type:"text",placeholder:"Say something...",value:g,onChange:le=>m(le.target.value),onKeyDown:le=>le.key==="Enter"&&I()}),s.jsx("button",{className:"send-pill",onClick:I,children:s.jsx(Ev,{size:18,color:"white"})})]})]}),s.jsx("style",{children:`
        .live-session-page {
          height: 100vh;
          background: #000;
          position: relative;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        /* Video */
        .live-video-area {
          flex: 1;
          position: relative;
          min-height: 0;
        }

        .live-video-element {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          inset: 0;
        }

        .tutor-stream-visual {
          width: 100%;
          height: 100%;
          background: radial-gradient(ellipse at 50% 40%, #1a2d1a 0%, #0d150d 50%, #050805 100%);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stream-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.35;
        }

        .orb-1 {
          width: 200px; height: 200px;
          background: #8BA888;
          top: 20%; left: 10%;
          animation: orbFloat1 8s ease-in-out infinite;
        }

        .orb-2 {
          width: 150px; height: 150px;
          background: #D4A853;
          bottom: 30%; right: 10%;
          animation: orbFloat2 10s ease-in-out infinite;
        }

        .orb-3 {
          width: 120px; height: 120px;
          background: #9B8EC4;
          top: 50%; left: 60%;
          animation: orbFloat3 12s ease-in-out infinite;
        }

        @keyframes orbFloat1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -40px); }
        }

        @keyframes orbFloat2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, 30px); }
        }

        @keyframes orbFloat3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, -20px); }
        }

        .stream-center {
          text-align: center;
          z-index: 5;
        }

        .stream-avatar {
          width: 80px; height: 80px;
          border-radius: 50%;
          background: rgba(139,168,136,0.15);
          border: 2px solid rgba(139,168,136,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 40px;
          margin: 0 auto 14px;
          box-shadow: 0 0 30px rgba(139,168,136,0.2);
          animation: avatarPulse 3s ease-in-out infinite;
        }

        @keyframes avatarPulse {
          0%, 100% { box-shadow: 0 0 30px rgba(139,168,136,0.2); }
          50% { box-shadow: 0 0 50px rgba(139,168,136,0.4); }
        }

        .stream-center h2 {
          color: white;
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .stream-center p {
          color: rgba(255,255,255,0.5);
          font-size: 13px;
          margin-bottom: 10px;
        }

        .connecting-dots {
          display: flex;
          gap: 6px;
          justify-content: center;
          margin-top: 8px;
        }

        .connecting-dots span {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #8BA888;
          animation: dotBounce 1.4s ease-in-out infinite;
        }

        .connecting-dots span:nth-child(2) { animation-delay: 0.2s; }
        .connecting-dots span:nth-child(3) { animation-delay: 0.4s; }

        @keyframes dotBounce {
          0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); }
          40% { opacity: 1; transform: scale(1.2); }
        }

        .live-gradient-top {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 120px;
          background: linear-gradient(to bottom, rgba(0,0,0,0.6), transparent);
          z-index: 2;
          pointer-events: none;
        }

        .live-gradient-bottom {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 200px;
          background: linear-gradient(transparent, rgba(0,0,0,0.8));
          z-index: 2;
          pointer-events: none;
        }

        /* Top Bar */
        .live-topbar {
          position: absolute;
          top: 0; left: 0; right: 0;
          padding: 16px;
          padding-top: calc(var(--safe-area-top, 0px) + 16px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 10;
        }

        .live-btn-back {
          width: 38px; height: 38px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
        }

        .live-pills {
          display: flex;
          gap: 8px;
        }

        .pill-live {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: rgba(231,76,60,0.85);
          border-radius: 20px;
          color: white;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .dot-anim {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: white;
          animation: livePulse 1.5s infinite;
        }

        @keyframes livePulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .pill-info {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 6px 12px;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          color: white;
          font-size: 12px;
          font-weight: 500;
        }

        /* Instructor */
        .live-instructor {
          position: absolute;
          bottom: 16px; left: 16px; right: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 10;
        }

        .live-inst-av {
          width: 44px; height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          border: 2px solid rgba(255,255,255,0.2);
        }

        .live-inst-text h4 {
          color: white;
          font-size: 14px;
          font-weight: 600;
        }

        .live-inst-text p {
          color: rgba(255,255,255,0.5);
          font-size: 12px;
        }

        .follow-pill {
          margin-left: auto;
          padding: 8px 18px;
          background: rgba(139,168,136,0.8);
          border-radius: 20px;
          color: white;
          font-size: 12px;
          font-weight: 600;
          border: none;
          cursor: pointer;
        }

        /* Floating Emojis */
        .float-emoji {
          position: absolute;
          bottom: 140px;
          font-size: 28px;
          animation: floatUp 2s ease forwards;
          z-index: 20;
          pointer-events: none;
        }

        @keyframes floatUp {
          0% { opacity: 1; transform: translateY(0) scale(1); }
          100% { opacity: 0; transform: translateY(-200px) scale(0.5); }
        }

        /* Bottom */
        .live-bottom {
          background: rgba(10,10,15,0.95);
          backdrop-filter: blur(20px);
          padding: 12px 16px;
          padding-bottom: calc(var(--safe-area-bottom, 0px) + 12px);
          border-radius: 20px 20px 0 0;
          z-index: 10;
          transition: all 0.3s ease;
        }

        .live-bottom.collapsed {
          border-radius: 0;
        }

        .live-chat-list {
          max-height: 180px;
          overflow-y: auto;
          margin-bottom: 12px;
          scrollbar-width: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .live-chat-list::-webkit-scrollbar { display: none; }

        .live-msg {
          padding: 8px 12px;
          background: rgba(255,255,255,0.05);
          border-radius: 10px;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .live-msg.instructor {
          background: rgba(139,168,136,0.12);
          border-left: 3px solid #8BA888;
        }

        .live-msg-user {
          font-size: 12px;
          font-weight: 600;
          color: #8BA888;
          margin-right: 8px;
        }

        .live-msg.instructor .live-msg-user {
          color: #D4A853;
        }

        .live-msg-text {
          font-size: 13px;
          color: rgba(255,255,255,0.85);
        }

        .live-reactions {
          display: flex;
          gap: 10px;
          margin-bottom: 10px;
          justify-content: center;
        }

        .reaction-pill {
          width: 44px; height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          border: 1px solid rgba(255,255,255,0.06);
          cursor: pointer;
          transition: all 0.2s;
        }

        .reaction-pill:active {
          transform: scale(1.2);
          background: rgba(255,255,255,0.15);
        }

        .live-input-bar {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .live-input-bar input {
          flex: 1;
          padding: 12px 16px;
          background: rgba(255,255,255,0.08);
          border-radius: 24px;
          color: white;
          font-size: 14px;
          border: 1px solid rgba(255,255,255,0.06);
          outline: none;
        }

        .live-input-bar input::placeholder {
          color: rgba(255,255,255,0.3);
        }

        .send-pill {
          width: 44px; height: 44px;
          border-radius: 50%;
          background: #8BA888;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(139,168,136,0.3);
        }

        .send-pill:active {
          transform: scale(0.95);
        }
      `})]})}const $c=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],nx=[17,18,19,20,21,22,23],Fc=[1,4],ix={1:[{id:1,title:"HIIT Burn Challenge",instructor:"Ankit Verma",time:"7:00 AM",duration:"45 min",category:"Fitness",free:!0},{id:2,title:"Guitar for Beginners",instructor:"Rohan Mehta",time:"5:00 PM",duration:"60 min",category:"Music",free:!1},{id:3,title:"5-Min Healthy Meals",instructor:"Chef Ananya",time:"8:00 PM",duration:"50 min",category:"Cooking",free:!1}],4:[{id:4,title:"Morning Meditation",instructor:"Kavya Nair",time:"6:30 AM",duration:"30 min",category:"Wellness",free:!0},{id:5,title:"Social Media Marketing",instructor:"Vikram Shah",time:"4:00 PM",duration:"50 min",category:"Business",free:!1},{id:6,title:"Sketch & Illustrate",instructor:"Sanya Kapoor",time:"7:00 PM",duration:"45 min",category:"Art",free:!1}]};function sx(){const[r,u]=S.useState(1),[d,o]=S.useState({}),p=tt(),h=ix[r]||[],y=Fc.includes(r),b=g=>{o(m=>({...m,[g]:!m[g]}))};return s.jsxs("div",{className:"page schedule-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsx("h1",{children:"Live Schedule"}),s.jsx("p",{className:"text-secondary",children:"Live sessions every Tuesday & Friday"})]}),s.jsxs("div",{className:"page-content",children:[s.jsxs("div",{className:"week-calendar glass-card",children:[s.jsxs("div",{className:"week-header",children:[s.jsx(ys,{size:16,color:"var(--accent-sage)"}),s.jsx("span",{children:"This Week"})]}),s.jsx("div",{className:"week-days",children:$c.map((g,m)=>s.jsxs("button",{className:`day-btn ${r===m?"selected":""} ${Fc.includes(m)?"has-live":""}`,onClick:()=>u(m),children:[s.jsx("span",{className:"day-name",children:g}),s.jsx("span",{className:"day-date",children:nx[m]}),Fc.includes(m)&&s.jsx("span",{className:"day-live-dot"})]},m))})]}),y?s.jsxs("div",{className:"schedule-sessions",children:[s.jsxs("div",{className:"schedule-section-title",children:[s.jsx(c0,{size:16,color:"var(--accent-sage)"}),s.jsxs("span",{children:[$c[r],"'s Live Sessions"]})]}),h.map((g,m)=>s.jsxs("div",{className:"schedule-card glass-card animate-fade-in-up",style:{animationDelay:`${m*.1}s`},children:[s.jsx("div",{className:"sched-left",children:s.jsxs("div",{className:"sched-time-block",children:[s.jsx("span",{className:"sched-time",children:g.time}),s.jsx("span",{className:"sched-duration",children:g.duration})]})}),s.jsxs("div",{className:"sched-info",children:[s.jsx("h3",{children:g.title}),s.jsxs("p",{children:[g.instructor," · ",g.category]})]}),s.jsxs("div",{className:"sched-right",children:[s.jsx("span",{className:`badge ${g.free?"badge-free":"badge-paid"}`,children:g.free?"FREE":"$5"}),s.jsx("button",{className:`reminder-btn ${d[g.id]?"active":""}`,onClick:()=>b(g.id),children:d[g.id]?s.jsx(a0,{size:16,fill:"var(--accent-sage)"}):s.jsx(B1,{size:16})})]})]},g.id)),s.jsxs("div",{className:"schedule-cta glass-card",onClick:()=>p("/pricing"),children:[s.jsxs("div",{children:[s.jsx("h3",{children:"Unlock All Sessions"}),s.jsx("p",{children:"Subscribe for $49/month"})]}),s.jsx(Da,{size:20,color:"var(--accent-sage)"})]})]}):s.jsxs("div",{className:"no-live-day",children:[s.jsx("div",{className:"no-live-icon",children:"🧘"}),s.jsx("h3",{children:"Rest Day"}),s.jsxs("p",{children:["No live sessions on ",$c[r],". Live sessions are every ",s.jsx("strong",{children:"Tuesday"})," and ",s.jsx("strong",{children:"Friday"}),"."]}),s.jsx("p",{className:"no-live-hint",children:"Use today for personal practice!"})]})]}),s.jsx("style",{children:`
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
      `})]})}const rx=[{id:"free",name:"Free Trial",price:"$0",period:"First session",description:"Try your first live session absolutely free",icon:bs,color:"#8BA888",features:["1 free live session","Access to intro videos","Browse all categories","Chat during live session"],buttonText:"Start Free",popular:!1},{id:"session",name:"Per Session",price:"$5",period:"per live session",description:"Pay as you go — attend sessions that interest you",icon:f0,color:"#C68B59",features:["Access any single live session","Full live interaction (chat, reactions)","Session replay for 48 hours","All intro videos included"],buttonText:"Buy Session",popular:!1},{id:"monthly",name:"Monthly",price:"$49",period:"/month",description:"Unlimited access to all live sessions",icon:ms,color:"#D4A853",features:["Unlimited live sessions","All creator categories","Priority chat with instructors","Full replay library access","Exclusive members-only sessions","Cancel anytime"],buttonText:"Subscribe Now",popular:!0}];function cx(){const[r,u]=S.useState(null),[d,o]=S.useState(!1),p=tt(),h=g=>{if(u(g),g.id==="free"){p("/live-session");return}y(g)},y=g=>{const m=document.createElement("script");m.src="https://checkout.razorpay.com/v1/checkout.js",m.onload=()=>b(g),m.onerror=()=>{o(!0)},document.body.appendChild(m)},b=g=>{const z={key:"rzp_test_PLACEHOLDER",amount:(g.id==="session"?500:4900)*100,currency:"INR",name:"Revoshalaa",description:`${g.name} — ${g.description}`,image:"",handler:function(E){o(!0)},prefill:{name:"",email:"",contact:""},theme:{color:"#8BA888"}};try{new window.Razorpay(z).open()}catch{o(!0)}};return s.jsxs("div",{className:"page pricing-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsx("h1",{children:"Choose Your Path"}),s.jsx("p",{className:"text-secondary",children:"Start learning from the best."})]}),s.jsxs("div",{className:"page-content",children:[rx.map((g,m)=>{const z=g.icon;return s.jsxs("div",{className:`pricing-card glass-card animate-fade-in-up ${g.popular?"popular":""}`,style:{animationDelay:`${m*.12}s`},children:[g.popular&&s.jsxs("div",{className:"popular-badge",children:[s.jsx(ms,{size:12})," BEST VALUE"]}),s.jsxs("div",{className:"pricing-card-header",children:[s.jsx("div",{className:"pricing-icon",style:{background:`${g.color}18`},children:s.jsx(z,{size:24,color:g.color})}),s.jsxs("div",{children:[s.jsx("h3",{children:g.name}),s.jsx("p",{className:"pricing-desc",children:g.description})]})]}),s.jsxs("div",{className:"pricing-price",children:[s.jsx("span",{className:"price-amount",children:g.price}),s.jsx("span",{className:"price-period",children:g.period})]}),s.jsx("div",{className:"pricing-features",children:g.features.map((E,B)=>s.jsxs("div",{className:"pricing-feature",children:[s.jsx(qn,{size:16,color:g.color}),s.jsx("span",{children:E})]},B))}),s.jsxs("button",{className:g.popular?"btn-gold":"btn-primary",style:{width:"100%"},onClick:()=>h(g),children:[g.buttonText," ",s.jsx(eo,{size:16})]})]},g.id)}),s.jsxs("div",{className:"trust-section",children:[s.jsxs("div",{className:"trust-item",children:[s.jsx(u0,{size:18,color:"var(--accent-sage)"}),s.jsx("span",{children:"Secure payments via Razorpay"})]}),s.jsxs("div",{className:"trust-item",children:[s.jsx(bs,{size:18,color:"var(--accent-gold)"}),s.jsx("span",{children:"Cancel subscription anytime"})]})]})]}),d&&s.jsx("div",{className:"modal-overlay",onClick:()=>o(!1),children:s.jsx("div",{className:"modal-content",onClick:g=>g.stopPropagation(),children:s.jsxs("div",{className:"success-modal",children:[s.jsx("div",{className:"success-check",children:s.jsx(qn,{size:36,color:"white"})}),s.jsx("h2",{children:"Payment Successful!"}),s.jsxs("p",{children:["You now have access to ",r?.name," plan."]}),s.jsx("p",{className:"success-detail",children:r?.id==="session"?"Your session pass is now active.":"Your monthly subscription is active."}),s.jsxs("button",{className:"btn-primary",style:{width:"100%",marginTop:20},onClick:()=>{o(!1),p("/schedule")},children:["Start Learning ",s.jsx(eo,{size:16})]})]})})}),s.jsx("style",{children:`
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
      `})]})}function ox(){const r=tt(),{user:u,logout:d}=Oa(),[o,p]=S.useState(!0),h=()=>{d(),r("/login")},y=[{icon:ms,label:"My Subscription",desc:"Monthly — Active",action:()=>r("/pricing"),color:"#D4A853"},{icon:ys,label:"My Sessions",desc:"12 sessions attended",action:()=>r("/schedule"),color:"#8BA888"},{icon:l0,label:"Payment History",desc:"View transactions",action:()=>{},color:"#C68B59"},{icon:bs,label:"Rate Instructors",desc:"Share your feedback",action:()=>{},color:"#9B8EC4"}];return s.jsxs("div",{className:"page profile-page",children:[s.jsxs("div",{className:"page-header",style:{textAlign:"center"},children:[s.jsx("div",{className:"profile-avatar",children:s.jsx(js,{size:36,color:"var(--accent-sage)"})}),s.jsx("h1",{style:{fontSize:22,marginTop:12},children:u?.name||"Guest"}),s.jsx("p",{className:"text-secondary",style:{fontSize:13},children:"Member since Feb 2026"})]}),s.jsxs("div",{className:"page-content",children:[s.jsxs("div",{className:"subscription-card glass-card",children:[s.jsxs("div",{className:"sub-card-left",children:[s.jsx(ms,{size:22,color:"#D4A853"}),s.jsxs("div",{children:[s.jsx("h3",{children:"Monthly Plan"}),s.jsx("p",{children:"Renews Mar 18, 2026"})]})]}),s.jsx("span",{className:"badge badge-free",style:{background:"rgba(212,168,83,0.15)",color:"#D4A853"},children:"Active"})]}),s.jsxs("div",{className:"profile-stats",children:[s.jsxs("div",{className:"stat-item glass-card",children:[s.jsx("span",{className:"stat-value",children:"12"}),s.jsx("span",{className:"stat-label",children:"Sessions"})]}),s.jsxs("div",{className:"stat-item glass-card",children:[s.jsx("span",{className:"stat-value",children:"8h"}),s.jsx("span",{className:"stat-label",children:"Practice"})]}),s.jsxs("div",{className:"stat-item glass-card",children:[s.jsx("span",{className:"stat-value",children:"5"}),s.jsx("span",{className:"stat-label",children:"Streak 🔥"})]})]}),s.jsx("div",{className:"profile-menu",children:y.map((b,g)=>{const m=b.icon;return s.jsxs("div",{className:"profile-menu-item glass-card",onClick:b.action,children:[s.jsx("div",{className:"menu-icon",style:{background:`${b.color}15`},children:s.jsx(m,{size:20,color:b.color})}),s.jsxs("div",{className:"menu-info",children:[s.jsx("h4",{children:b.label}),s.jsx("p",{children:b.desc})]}),s.jsx(Da,{size:18,color:"var(--text-tertiary)"})]},g)})}),s.jsxs("div",{className:"profile-menu-item glass-card",style:{marginTop:16},children:[s.jsx("div",{className:"menu-icon",style:{background:"rgba(139,168,136,0.1)"},children:s.jsx(a0,{size:20,color:"var(--accent-sage)"})}),s.jsxs("div",{className:"menu-info",style:{flex:1},children:[s.jsx("h4",{children:"Notifications"}),s.jsx("p",{children:"Live session reminders"})]}),s.jsxs("label",{className:"toggle-switch",children:[s.jsx("input",{type:"checkbox",checked:o,onChange:()=>p(!o)}),s.jsx("span",{className:"toggle-slider"})]})]}),s.jsxs("div",{className:"profile-footer",children:[s.jsxs("button",{className:"btn-secondary",style:{gap:6},children:[s.jsx(o0,{size:16})," Settings"]}),s.jsxs("button",{className:"btn-secondary",style:{gap:6,color:"#C4857A"},onClick:h,children:[s.jsx(n0,{size:16})," Sign Out"]})]})]}),s.jsx("style",{children:`
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
      `})]})}function ux(){const r=tt(),{login:u}=Oa(),[d,o]=S.useState({identifier:"",password:"",otp:""}),[p,h]=S.useState("email"),[y,b]=S.useState(1),[g,m]=S.useState(!0),[z,E]=S.useState(!1),B=()=>{E(!0),setTimeout(()=>{E(!1),b(2),alert(`OTP sent to ${d.identifier}: 1234`)},1500)},X=q=>{q.preventDefault(),E(!0),setTimeout(()=>{u("customer",{identifier:d.identifier||"guest"}),E(!1),r("/home")},1500)};return s.jsxs("div",{className:"page login-page",children:[s.jsxs("div",{className:"page-content",children:[s.jsxs("div",{className:"login-header",children:[s.jsx("div",{className:"login-logo animate-fade-in-up",children:s.jsxs("svg",{viewBox:"0 0 80 80",width:"60",height:"60",fill:"none",children:[s.jsx("path",{d:"M40 8C40 8 25 25 25 40C25 55 40 65 40 65C40 65 55 55 55 40C55 25 40 8 40 8Z",fill:"white",stroke:"#8BA888",strokeWidth:"1.5"}),s.jsx("path",{d:"M40 15C40 15 18 30 15 45C12 60 40 70 40 70C40 70 68 60 65 45C62 30 40 15 40 15Z",fill:"white",stroke:"#8BA888",strokeWidth:"1"}),s.jsx("circle",{cx:"40",cy:"42",r:"4",fill:"#8BA888"})]})}),s.jsx("h1",{className:"animate-fade-in-up",style:{animationDelay:"0.1s"},children:g?"Welcome Back":"Join Revoshalaa"}),s.jsx("p",{className:"subtitle animate-fade-in-up",style:{animationDelay:"0.2s"},children:"Your Creator Store"})]}),s.jsxs("div",{className:"login-form-container glass-card animate-fade-in-up",style:{animationDelay:"0.3s"},children:[s.jsxs("div",{className:"login-method-toggle",children:[s.jsx("button",{className:p==="email"?"active":"",onClick:()=>{h("email"),b(1)},children:"Email"}),s.jsx("button",{className:p==="mobile"?"active":"",onClick:()=>{h("mobile"),b(1)},children:"Mobile"})]}),s.jsxs("form",{onSubmit:y===1&&p==="mobile"?q=>{q.preventDefault(),B()}:X,children:[y===1&&s.jsxs("div",{className:"input-group",children:[p==="email"?s.jsx(i0,{size:18,className:"input-icon"}):s.jsx(r0,{size:18,className:"input-icon"}),s.jsx("input",{type:p==="email"?"email":"tel",placeholder:p==="email"?"Email Address":"Mobile Number",value:d.identifier,onChange:q=>o({...d,identifier:q.target.value}),required:!0})]}),y===2&&s.jsxs("div",{className:"input-group animate-fade-in",children:[p==="email"?s.jsx(sv,{size:18,className:"input-icon"}):s.jsx(co,{size:18,className:"input-icon"}),s.jsx("input",{type:p==="email"?"password":"text",placeholder:p==="email"?"Password":"Enter OTP",value:p==="email"?d.password:d.otp,onChange:q=>o({...d,[p==="email"?"password":"otp"]:q.target.value}),required:!0})]}),s.jsx("button",{type:"submit",className:"btn-primary w-full",disabled:z,children:z?"Processing...":s.jsxs(s.Fragment,{children:[y===1&&p==="mobile"?"Send OTP":g?"Login":"Create Account",s.jsx(eo,{size:18})]})})]}),p==="email"&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"divider",children:s.jsx("span",{children:"or continue with"})}),s.jsxs("div",{className:"social-buttons",children:[s.jsx("button",{className:"social-btn",onClick:()=>{const q=prompt("Enter your Google email:");q&&(u("customer",{identifier:q}),r("/home"))},children:"Google"}),s.jsx("button",{className:"social-btn",onClick:()=>{const q=prompt("Enter your Apple ID email:");q&&(u("customer",{identifier:q}),r("/home"))},children:"Apple"})]})]})]}),s.jsxs("div",{className:"login-footer animate-fade-in-up",style:{animationDelay:"0.4s"},children:[s.jsxs("p",{onClick:()=>m(!g),children:[g?"New here? ":"Already a member? ",s.jsx("span",{className:"link-text",children:g?"Create Account":"Login"})]}),s.jsxs("div",{className:"tutor-link",onClick:()=>r("/login/tutor"),children:["Are you a tutor? ",s.jsx("span",{className:"link-text",children:"Login here"})]})]})]}),s.jsx("style",{children:`
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
      `})]})}function fx(){const r=tt(),{login:u,categories:d,addCategory:o}=Oa(),[p,h]=S.useState("credentials"),[y,b]=S.useState("email"),[g,m]=S.useState(!1),[z,E]=S.useState({firstName:"",lastName:"",identifier:"",password:"",otp:""}),[B,X]=S.useState(""),[q,Q]=S.useState(""),[G,V]=S.useState(!1),[Y,U]=S.useState(""),Z=I=>{I.preventDefault(),z.firstName.trim()&&(y==="mobile"?(m(!0),setTimeout(()=>{m(!1),h("otp"),alert(`OTP sent to ${z.identifier}: 5678`)},1200)):h("category"))},K=I=>{I.preventDefault(),h("category")},ee=()=>{if(!q.trim())return;const I=o(q.trim());X(I.id),Q(""),V(!1)},H=()=>{B&&(m(!0),setTimeout(()=>{u("tutor",{firstName:z.firstName,lastName:z.lastName,identifier:z.identifier,category:B,specialty:Y}),m(!1),r("/tutor/dashboard")},1e3))},oe=d.find(I=>I.id===B)?.name||"";return s.jsxs("div",{className:"page tutor-login-page",children:[s.jsxs("div",{className:"page-content",children:[s.jsxs("div",{className:"tutor-header",children:[s.jsx("div",{className:"tutor-icon animate-scale-in",children:s.jsx(tl,{size:32,color:"white"})}),s.jsx("h1",{className:"animate-fade-in-up",style:{animationDelay:"0.1s"},children:p==="credentials"||p==="otp"?"Tutor Access":p==="category"?"Choose Your Category":"Your Specialty"}),s.jsx("p",{className:"subtitle animate-fade-in-up",style:{animationDelay:"0.2s"},children:p==="credentials"||p==="otp"?"Create your profile & start teaching":p==="category"?"What will you teach on Revoshalaa?":`Tell us more about your ${oe} expertise`}),s.jsxs("div",{className:"progress-dots",children:[s.jsx("span",{className:`dot ${["credentials","otp","category","specialty"].includes(p)?"active":""}`}),s.jsx("span",{className:`dot ${["category","specialty"].includes(p)?"active":""}`}),s.jsx("span",{className:`dot ${p==="specialty"?"active":""}`})]})]}),p==="credentials"&&s.jsxs("div",{className:"login-form-container glass-card animate-fade-in-up",style:{animationDelay:"0.3s"},children:[s.jsxs("div",{className:"login-method-toggle",children:[s.jsx("button",{className:y==="email"?"active":"",onClick:()=>b("email"),children:"Email"}),s.jsx("button",{className:y==="mobile"?"active":"",onClick:()=>b("mobile"),children:"Mobile"})]}),s.jsxs("form",{onSubmit:Z,children:[s.jsxs("div",{className:"name-row",children:[s.jsxs("div",{className:"input-group",children:[s.jsx(js,{size:18,className:"input-icon"}),s.jsx("input",{type:"text",placeholder:"First Name",value:z.firstName,onChange:I=>E({...z,firstName:I.target.value}),required:!0})]}),s.jsx("div",{className:"input-group",children:s.jsx("input",{type:"text",placeholder:"Last Name",value:z.lastName,onChange:I=>E({...z,lastName:I.target.value}),style:{paddingLeft:16}})})]}),s.jsxs("div",{className:"input-group",children:[y==="email"?s.jsx(i0,{size:18,className:"input-icon"}):s.jsx(r0,{size:18,className:"input-icon"}),s.jsx("input",{type:y==="email"?"email":"tel",placeholder:y==="email"?"Email Address":"Mobile Number",value:z.identifier,onChange:I=>E({...z,identifier:I.target.value}),required:!0})]}),s.jsx("button",{type:"submit",className:"btn-gold w-full",disabled:g,children:g?"Sending OTP...":s.jsxs(s.Fragment,{children:["Continue ",s.jsx(Da,{size:18})]})})]})]}),p==="otp"&&s.jsxs("div",{className:"login-form-container glass-card animate-fade-in",children:[s.jsxs("form",{onSubmit:K,children:[s.jsxs("div",{className:"input-group",children:[s.jsx(co,{size:18,className:"input-icon"}),s.jsx("input",{type:"text",placeholder:"Enter OTP",value:z.otp,onChange:I=>E({...z,otp:I.target.value}),required:!0})]}),s.jsxs("button",{type:"submit",className:"btn-gold w-full",children:["Verify ",s.jsx(qn,{size:18})]})]}),s.jsxs("button",{className:"back-step",onClick:()=>h("credentials"),children:[s.jsx(Yl,{size:14})," Back"]})]}),p==="category"&&s.jsxs("div",{className:"category-phase animate-fade-in",children:[s.jsxs("div",{className:"category-grid",children:[d.map(I=>s.jsxs("div",{className:`cat-option ${B===I.id?"selected":""}`,onClick:()=>X(I.id),children:[s.jsx("span",{className:"cat-emoji-big",children:I.emoji}),s.jsx("span",{className:"cat-label",children:I.name}),B===I.id&&s.jsx(qn,{size:16,className:"cat-check"})]},I.id)),G?s.jsxs("div",{className:"cat-option add-new-input",children:[s.jsx("input",{type:"text",placeholder:"Category name",value:q,onChange:I=>Q(I.target.value),onKeyDown:I=>I.key==="Enter"&&ee(),autoFocus:!0}),s.jsx("button",{className:"add-btn",onClick:ee,children:s.jsx(qn,{size:16})})]}):s.jsxs("div",{className:"cat-option add-new",onClick:()=>V(!0),children:[s.jsx(bv,{size:24,color:"#8BA888"}),s.jsx("span",{className:"cat-label",children:"Add New"})]})]}),B&&s.jsxs("button",{className:"btn-gold w-full",style:{marginTop:20},onClick:()=>h("specialty"),children:["Continue ",s.jsx(Da,{size:18})]}),s.jsxs("button",{className:"back-step",onClick:()=>h("credentials"),children:[s.jsx(Yl,{size:14})," Back to login"]})]}),p==="specialty"&&s.jsxs("div",{className:"specialty-phase animate-fade-in",children:[s.jsxs("div",{className:"login-form-container glass-card",children:[s.jsxs("div",{className:"selected-cat-badge",children:[s.jsx("span",{children:d.find(I=>I.id===B)?.emoji}),s.jsx("span",{children:oe})]}),s.jsxs("p",{className:"specialty-prompt",children:["What's your specialty within ",oe,"?"]}),s.jsxs("p",{className:"specialty-hint",children:[B==="fitness"&&"e.g. HIIT, Yoga, Strength Training, Calisthenics...",B==="music"&&"e.g. Guitar, Piano, Vocals, Music Production...",B==="cooking"&&"e.g. Indian Cuisine, Baking, Healthy Meals...",B==="art"&&"e.g. Illustration, UI/UX, Watercolor, Digital Art...",B==="business"&&"e.g. Marketing, Freelancing, Finance, Startups...",B==="wellness"&&"e.g. Meditation, Breathwork, Mindfulness, Reiki...",!["fitness","music","cooking","art","business","wellness"].includes(B)&&"Describe what you teach in detail"]}),s.jsx("div",{className:"input-group",children:s.jsx("input",{type:"text",placeholder:"Your specialty (e.g. Power Yoga & HIIT)",value:Y,onChange:I=>U(I.target.value),style:{paddingLeft:16}})}),s.jsx("button",{className:"btn-gold w-full",disabled:g,onClick:H,children:g?"Setting up...":s.jsxs(s.Fragment,{children:["Start Teaching ",s.jsx(av,{size:18})]})})]}),s.jsxs("button",{className:"back-step",onClick:()=>h("category"),children:[s.jsx(Yl,{size:14})," Change category"]})]}),p==="credentials"&&s.jsx("div",{className:"tutor-footer animate-fade-in-up",style:{animationDelay:"0.4s"},children:s.jsx("div",{className:"back-link",onClick:()=>r("/login"),children:"Back to Role Selection"})})]}),s.jsx("style",{children:`
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
      `})]})}function dx(){const r=tt();return s.jsxs("div",{className:"page role-page",children:[s.jsxs("div",{className:"role-content",children:[s.jsx("div",{className:"role-logo animate-fade-in-up",children:s.jsxs("svg",{viewBox:"0 0 80 80",width:"70",height:"70",fill:"none",children:[s.jsx("path",{d:"M40 8C40 8 25 25 25 40C25 55 40 65 40 65C40 65 55 55 55 40C55 25 40 8 40 8Z",fill:"white",stroke:"#8BA888",strokeWidth:"1.5"}),s.jsx("path",{d:"M40 15C40 15 18 30 15 45C12 60 40 70 40 70C40 70 68 60 65 45C62 30 40 15 40 15Z",fill:"white",stroke:"#8BA888",strokeWidth:"1"}),s.jsx("path",{d:"M40 20C40 20 30 35 30 45C30 55 40 60 40 60C40 60 50 55 50 45C50 35 40 20 40 20Z",fill:"rgba(139,168,136,0.4)",stroke:"#8BA888",strokeWidth:"1"}),s.jsx("circle",{cx:"40",cy:"42",r:"4",fill:"#8BA888"})]})}),s.jsx("h1",{className:"role-title animate-fade-in-up",style:{animationDelay:"0.1s"},children:"Revoshalaa"}),s.jsx("p",{className:"role-subtitle animate-fade-in-up",style:{animationDelay:"0.2s"},children:"Your Creator Store"}),s.jsx("h2",{className:"role-question animate-fade-in-up",style:{animationDelay:"0.3s"},children:"How would you like to join?"}),s.jsxs("div",{className:"role-cards animate-fade-in-up",style:{animationDelay:"0.4s"},children:[s.jsxs("div",{className:"role-card member-card",onClick:()=>r("/login/customer"),children:[s.jsx("div",{className:"role-card-icon",children:s.jsx(Xl,{size:28,color:"var(--accent-sage)"})}),s.jsx("h3",{children:"I'm a Member"}),s.jsx("p",{children:"Join live sessions, courses & communities from top creators"})]}),s.jsxs("div",{className:"role-card tutor-card",onClick:()=>r("/login/tutor"),children:[s.jsx("div",{className:"role-card-icon tutor-icon-bg",children:s.jsx(tl,{size:28,color:"#D4A853"})}),s.jsx("h3",{children:"I'm a Tutor"}),s.jsx("p",{children:"Go live, teach your class, and grow your community"})]})]})]}),s.jsx("style",{children:`
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
      `})]})}function px(){const r=tt(),{user:u,categories:d,startLiveSession:o,endLiveSession:p}=Oa(),[h,y]=S.useState(!1),[b,g]=S.useState({title:"",description:"",category:u?.category||"fitness",duration:"45",pricing:"free",price:"",tags:""}),[m,z]=S.useState(!0),[E,B]=S.useState(!0),[X,q]=S.useState(0),[Q,G]=S.useState([]),[V,Y]=S.useState(null),[U,Z]=S.useState(0),K=S.useRef(null),ee=S.useRef(null),H=S.useRef(null),oe=S.useRef(null);S.useEffect(()=>{u?.category&&g(P=>({...P,category:u.category}))},[u]),S.useEffect(()=>{async function P(){try{const A=await navigator.mediaDevices.getUserMedia({video:!0,audio:!0});ee.current=A,K.current&&(K.current.srcObject=A)}catch(A){console.error("Error accessing camera:",A)}}return E&&P(),()=>{K.current?.srcObject&&K.current.srcObject.getTracks().forEach(A=>A.stop())}},[E]),S.useEffect(()=>{if(!h||!V||!ee.current)return;async function P(){const A=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]});H.current=A,ee.current.getTracks().forEach(ue=>{A.addTrack(ue,ee.current)}),A.onicecandidate=ue=>{ue.candidate&&fetch("/api/signal/tutor-candidate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sessionId:V,candidate:ue.candidate})}).catch(()=>{})};const k=await A.createOffer();await A.setLocalDescription(k),await fetch("/api/signal/offer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sessionId:V,offer:A.localDescription})}),console.log("[WebRTC] Offer sent, waiting for viewer...");let J=!1;oe.current=setInterval(async()=>{if(!J)try{const xe=await(await fetch(`/api/signal/get/${V}`)).json();if(xe.answer&&!J){J=!0,await A.setRemoteDescription(new RTCSessionDescription(xe.answer)),console.log("[WebRTC] Answer received, connection establishing...");for(const j of xe.viewerCandidates)await A.addIceCandidate(new RTCIceCandidate(j)).catch(()=>{})}}catch{}},1e3)}return P(),()=>{oe.current&&clearInterval(oe.current),H.current&&(H.current.close(),H.current=null)}},[h,V]),S.useEffect(()=>{let P,A,k;return h&&(P=setInterval(()=>{q(J=>J+Math.floor(Math.random()*3))},3e3),A=setInterval(()=>{const J=["Amazing session! 🔥","Love the energy!","So helpful, thanks!","Hello from Mumbai!","❤️","Great tips!","🙌"],ue=["Aarav","Priya","Rahul","Sneha","Vikram","Meera"];G(xe=>[...xe,{user:ue[Math.floor(Math.random()*ue.length)],text:J[Math.floor(Math.random()*J.length)]}])},4e3),k=setInterval(()=>{Z(J=>J+1)},1e3)),()=>{clearInterval(P),clearInterval(A),clearInterval(k)}},[h]);const I=P=>{const A=Math.floor(P/60),k=P%60;return`${A.toString().padStart(2,"0")}:${k.toString().padStart(2,"0")}`},le=async()=>{if(!b.title)return alert("Please enter a session title");const P=o(b);Y(P.id),y(!0),Z(0);try{await fetch("/api/go-live",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:P.id,title:b.title,tutorName:u?.name||"Creator",tutorId:u?.id,category:d?.find(A=>A.id===b.category)?.name||b.category})})}catch(A){console.error("Failed to register live session:",A)}},Ne=async()=>{if(confirm("Are you sure you want to end the live session?")){oe.current&&clearInterval(oe.current),H.current&&(H.current.close(),H.current=null),p(V),y(!1);try{await fetch("/api/end-live",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:V})})}catch(P){console.error("Failed to end live session on server:",P)}r("/tutor/dashboard")}},ve=(P,A)=>{g(k=>({...k,[P]:A}))},Xe=d?.find(P=>P.id===b.category)?.name||b.category,Qe=d?.find(P=>P.id===b.category)?.emoji||"📌";return!u||u.type!=="tutor"?s.jsxs("div",{className:"unauthorized",children:[s.jsx("div",{className:"unauth-icon",children:"🎓"}),s.jsx("h2",{children:"Tutor Access Only"}),s.jsx("p",{children:"You need a tutor account to go live."}),s.jsx("button",{className:"btn-sage",onClick:()=>r("/login/tutor"),children:"Login as Tutor"})]}):s.jsxs("div",{className:"broadcast-page",children:[s.jsx("video",{ref:K,autoPlay:!0,playsInline:!0,muted:!0,className:"camera-feed"}),s.jsxs("div",{className:"broadcast-top",children:[h?s.jsxs("div",{className:"live-badge-row",children:[s.jsx("div",{className:"live-badge pulse-live",children:"🔴 LIVE"}),s.jsx("div",{className:"live-timer",children:I(U)})]}):s.jsx("div",{className:"preview-badge",children:"📹 PREVIEW"}),s.jsxs("div",{className:"top-actions",children:[h&&s.jsxs("div",{className:"viewer-count",children:[s.jsx(Xl,{size:14})," ",X]}),s.jsx("button",{className:"icon-btn",onClick:()=>r("/home"),children:s.jsx(Zv,{size:22,color:"white"})})]})]}),!h&&s.jsxs("div",{className:"pre-live-panel",children:[s.jsxs("div",{className:"tutor-profile-card",children:[s.jsx("div",{className:"tp-avatar",children:u.avatar||"🎓"}),s.jsxs("div",{className:"tp-info",children:[s.jsx("h3",{children:u.name}),s.jsxs("p",{children:[u.specialty?`${u.specialty}`:Xe," Creator"]})]}),s.jsx("div",{className:"tp-badge",children:Qe})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("label",{className:"form-label",children:[s.jsx(I1,{size:14})," Session Title *"]}),s.jsx("input",{type:"text",placeholder:"e.g. Morning Power Flow, Guitar Basics",value:b.title,onChange:P=>ve("title",P.target.value),className:"form-input"})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("label",{className:"form-label",children:[s.jsx(co,{size:14})," Description"]}),s.jsx("textarea",{placeholder:"What will you cover in this session?",value:b.description,onChange:P=>ve("description",P.target.value),className:"form-textarea",rows:2})]}),s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-section flex-1",children:[s.jsxs("label",{className:"form-label",children:[s.jsx(_p,{size:14})," Category"]}),s.jsx("select",{value:b.category,onChange:P=>ve("category",P.target.value),className:"form-select",children:(d||[]).map(P=>s.jsxs("option",{value:P.id,children:[P.emoji," ",P.name]},P.id))})]}),s.jsxs("div",{className:"form-section flex-1",children:[s.jsxs("label",{className:"form-label",children:[s.jsx(el,{size:14})," Duration"]}),s.jsxs("select",{value:b.duration,onChange:P=>ve("duration",P.target.value),className:"form-select",children:[s.jsx("option",{value:"15",children:"15 min"}),s.jsx("option",{value:"30",children:"30 min"}),s.jsx("option",{value:"45",children:"45 min"}),s.jsx("option",{value:"60",children:"60 min"}),s.jsx("option",{value:"90",children:"90 min"})]})]})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("label",{className:"form-label",children:[s.jsx(F1,{size:14})," Pricing"]}),s.jsxs("div",{className:"pricing-toggle",children:[s.jsx("button",{className:`pt-btn ${b.pricing==="free"?"active":""}`,onClick:()=>ve("pricing","free"),children:"🆓 Free"}),s.jsx("button",{className:`pt-btn ${b.pricing==="paid"?"active":""}`,onClick:()=>ve("pricing","paid"),children:"💰 Paid"})]}),b.pricing==="paid"&&s.jsx("input",{type:"number",placeholder:"Price (₹)",value:b.price,onChange:P=>ve("price",P.target.value),className:"form-input price-input"})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("label",{className:"form-label",children:[s.jsx(_p,{size:14})," Tags"]}),s.jsx("input",{type:"text",placeholder:"e.g. beginner, cardio, guitar (comma separated)",value:b.tags,onChange:P=>ve("tags",P.target.value),className:"form-input"})]}),s.jsxs("div",{className:"media-controls",children:[s.jsxs("button",{className:`media-btn ${m?"on":"off"}`,onClick:()=>z(!m),children:[m?s.jsx(Mp,{size:20}):s.jsx(Tp,{size:20}),s.jsx("span",{children:m?"Mic On":"Mic Off"})]}),s.jsxs("button",{className:`media-btn ${E?"on":"off"}`,onClick:()=>B(!E),children:[E?s.jsx(q1,{size:20}):s.jsx(L1,{size:20}),s.jsx("span",{children:E?"Camera On":"Camera Off"})]})]}),s.jsxs("button",{className:"go-live-btn",onClick:le,children:[s.jsx("div",{className:"ring-pulse"}),s.jsx(tl,{size:20})," GO LIVE"]})]}),h&&s.jsxs("div",{className:"live-overlay",children:[s.jsxs("div",{className:"live-session-info",children:[s.jsx("h3",{children:b.title}),s.jsxs("p",{children:[Qe," ",Xe," · ",b.duration," min · ",b.pricing==="free"?"FREE":`₹${b.price}`]})]}),s.jsx("div",{className:"live-chat-area",children:Q.map((P,A)=>s.jsxs("div",{className:"chat-msg animate-fade-in-up",children:[s.jsx("span",{className:"chat-user",children:P.user})," ",P.text]},A))}),s.jsxs("div",{className:"live-bottom-bar",children:[s.jsx("input",{type:"text",placeholder:"Reply to chat...",className:"tutor-chat-input"}),s.jsxs("div",{className:"live-actions",children:[s.jsx("button",{className:"action-btn",onClick:()=>z(!m),children:m?s.jsx(Mp,{size:18}):s.jsx(Tp,{size:18})}),s.jsx("button",{className:"action-btn",children:s.jsx(wv,{size:18})}),s.jsx("button",{className:"end-btn",onClick:Ne,children:"END"})]})]})]}),s.jsx("style",{children:`
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
      `})]})}function hx(){const r=tt(),{user:u,liveSessions:d}=Oa(),o=d.filter(b=>b.tutorId===u?.id),p=o.reduce((b,g)=>b+(g.viewers||0),0),h=[{label:"Total Sessions",value:o.length,icon:tl,color:"#8BA888"},{label:"Live Viewers",value:p,icon:Xl,color:"#D4A853"},{label:"Hours Live",value:Math.floor(Math.random()*50+10),icon:el,color:"#9B8EC4"},{label:"Followers",value:Math.floor(Math.random()*200+50),icon:Lv,color:"#C4857A"}],y=[{id:1,title:"Morning Power Flow",viewers:45,duration:"45 min",date:"Today"},{id:2,title:"Evening Stretch",viewers:32,duration:"30 min",date:"Yesterday"},{id:3,title:"HIIT Challenge",viewers:67,duration:"60 min",date:"2 days ago"}];return s.jsxs("div",{className:"tutor-dash",children:[s.jsxs("div",{className:"td-header",children:[s.jsxs("div",{className:"td-greeting",children:[s.jsx("p",{className:"td-hello",children:"Welcome back"}),s.jsxs("h1",{children:[u?.name||"Creator"," 🎓"]})]}),s.jsx("div",{className:"td-avatar",children:u?.avatar||"🎓"})]}),s.jsxs("div",{className:"td-content",children:[s.jsxs("button",{className:"td-go-live-btn",onClick:()=>r("/tutor-broadcast"),children:[s.jsx("div",{className:"td-live-pulse"}),s.jsx(f0,{size:20}),s.jsx("span",{children:"Go Live Now"}),s.jsx(Da,{size:18})]}),s.jsx("div",{className:"td-stats-grid",children:h.map((b,g)=>s.jsxs("div",{className:"td-stat-card",children:[s.jsx("div",{className:"td-stat-icon",style:{background:`${b.color}15`,color:b.color},children:s.jsx(b.icon,{size:18})}),s.jsx("div",{className:"td-stat-value",children:b.value}),s.jsx("div",{className:"td-stat-label",children:b.label})]},g))}),o.length>0&&s.jsxs("section",{className:"td-section",children:[s.jsx("h2",{children:"🔴 Your Active Sessions"}),o.map(b=>s.jsxs("div",{className:"td-session-card active-session",children:[s.jsxs("div",{className:"td-session-info",children:[s.jsx("h3",{children:b.title}),s.jsxs("p",{children:[b.category," · ",b.viewers," viewers"]})]}),s.jsx("span",{className:"td-live-tag",children:"LIVE"})]},b.id))]}),s.jsxs("section",{className:"td-section",children:[s.jsxs("div",{className:"td-section-header",children:[s.jsx("h2",{children:"Recent Sessions"}),s.jsx("button",{className:"td-see-all",children:"See All"})]}),y.map(b=>s.jsxs("div",{className:"td-session-card",children:[s.jsxs("div",{className:"td-session-left",children:[s.jsx("div",{className:"td-session-icon",children:s.jsx(tl,{size:16})}),s.jsxs("div",{className:"td-session-info",children:[s.jsx("h3",{children:b.title}),s.jsxs("p",{children:[b.date," · ",b.duration," · ",b.viewers," viewers"]})]})]}),s.jsx(Da,{size:16,color:"rgba(255,255,255,0.3)"})]},b.id))]}),s.jsxs("section",{className:"td-section",children:[s.jsx("div",{className:"td-section-header",children:s.jsx("h2",{children:"Upcoming"})}),s.jsxs("div",{className:"td-empty-state",children:[s.jsx(ys,{size:32,color:"rgba(255,255,255,0.2)"}),s.jsx("p",{children:"No upcoming sessions scheduled"}),s.jsx("button",{className:"td-schedule-btn",onClick:()=>r("/tutor-broadcast"),children:"Schedule a Session"})]})]})]}),s.jsx("style",{children:`
        .tutor-dash {
          min-height: 100vh;
          background: linear-gradient(165deg, #1a1f1a 0%, #0f140f 40%, #0a0f0a 100%);
          color: white;
          padding-bottom: calc(var(--bottom-nav-height) + var(--safe-area-bottom) + 20px);
        }

        .td-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 20px 16px;
          padding-top: calc(var(--safe-area-top, 0px) + 20px);
        }

        .td-hello {
          font-size: 13px;
          color: rgba(255,255,255,0.5);
          margin-bottom: 4px;
        }

        .td-header h1 {
          font-size: 24px;
          font-weight: 700;
          font-family: var(--font-display, 'Playfair Display', serif);
        }

        .td-avatar {
          width: 48px;
          height: 48px;
          border-radius: 16px;
          background: linear-gradient(135deg, #3D5A3A, #2A3F28);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          border: 1.5px solid rgba(139,168,136,0.2);
        }

        .td-content {
          padding: 0 20px;
        }

        /* Go Live CTA */
        .td-go-live-btn {
          width: 100%;
          padding: 18px 20px;
          background: linear-gradient(135deg, #3D5A3A 0%, #2A4328 100%);
          border: 1.5px solid rgba(139,168,136,0.25);
          border-radius: 16px;
          color: #8BA888;
          font-size: 16px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .td-go-live-btn:active {
          transform: scale(0.98);
        }

        .td-go-live-btn span {
          flex: 1;
          text-align: left;
        }

        .td-live-pulse {
          position: absolute;
          inset: 0;
          border-radius: 16px;
          animation: ringPulse 2.5s ease-out infinite;
        }

        @keyframes ringPulse {
          0% { box-shadow: inset 0 0 0 0 rgba(139,168,136,0.3); }
          100% { box-shadow: inset 0 0 0 0 rgba(139,168,136,0); }
        }

        /* Stats */
        .td-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 20px;
        }

        .td-stat-card {
          padding: 18px 16px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          text-align: center;
        }

        .td-stat-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 10px;
        }

        .td-stat-value {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .td-stat-label {
          font-size: 11px;
          color: rgba(255,255,255,0.4);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Sections */
        .td-section {
          margin-top: 28px;
        }

        .td-section h2 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 14px;
          color: rgba(255,255,255,0.9);
        }

        .td-section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .td-see-all {
          font-size: 12px;
          color: #8BA888;
          font-weight: 500;
          background: none;
          border: none;
          cursor: pointer;
        }

        /* Session Cards */
        .td-session-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 14px;
          margin-bottom: 10px;
          cursor: pointer;
          transition: background 0.2s;
        }

        .td-session-card:active {
          background: rgba(255,255,255,0.06);
        }

        .td-session-card.active-session {
          border-color: rgba(231,76,60,0.3);
          background: rgba(231,76,60,0.05);
        }

        .td-session-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .td-session-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(139,168,136,0.1);
          color: #8BA888;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .td-session-info h3 {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 3px;
        }

        .td-session-info p {
          font-size: 11px;
          color: rgba(255,255,255,0.4);
        }

        .td-live-tag {
          font-size: 10px;
          font-weight: 700;
          color: #e74c3c;
          background: rgba(231,76,60,0.1);
          padding: 4px 10px;
          border-radius: 6px;
          letter-spacing: 0.5px;
        }

        /* Empty State */
        .td-empty-state {
          text-align: center;
          padding: 32px 16px;
          background: rgba(255,255,255,0.02);
          border: 1px dashed rgba(255,255,255,0.08);
          border-radius: 16px;
        }

        .td-empty-state p {
          font-size: 13px;
          color: rgba(255,255,255,0.3);
          margin: 10px 0 16px;
        }

        .td-schedule-btn {
          padding: 10px 20px;
          background: rgba(139,168,136,0.1);
          border: 1px solid rgba(139,168,136,0.2);
          border-radius: 10px;
          color: #8BA888;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .td-schedule-btn:active {
          transform: scale(0.97);
        }
      `})]})}function mx(){const r=tt(),{user:u,logout:d}=Oa(),o=()=>{d(),r("/login")},p=[{icon:tl,label:"My Sessions",desc:"View all past broadcasts",action:()=>{}},{icon:Xl,label:"My Followers",desc:"Manage your audience",action:()=>{}},{icon:D1,label:"Achievements",desc:"Badges & milestones",action:()=>{}},{icon:o0,label:"Settings",desc:"Account preferences",action:()=>{}},{icon:u0,label:"Privacy",desc:"Manage visibility",action:()=>{}}];return s.jsxs("div",{className:"tutor-profile-page",children:[s.jsxs("div",{className:"tp-header",children:[s.jsx("div",{className:"tp-avatar-large",children:u?.avatar||"🎓"}),s.jsx("h1",{children:u?.name||"Creator"}),s.jsxs("p",{className:"tp-specialty",children:[u?.specialty||"Creator"," · ",u?.category||"General"]}),s.jsxs("div",{className:"tp-badges",children:[s.jsx("span",{className:"tp-badge-item",children:"🎓 Tutor"}),s.jsx("span",{className:"tp-badge-item",children:"⭐ Verified"})]})]}),s.jsxs("div",{className:"tp-stats-row",children:[s.jsxs("div",{className:"tp-stat",children:[s.jsx("span",{className:"tp-stat-val",children:Math.floor(Math.random()*50+10)}),s.jsx("span",{className:"tp-stat-lbl",children:"Sessions"})]}),s.jsx("div",{className:"tp-divider"}),s.jsxs("div",{className:"tp-stat",children:[s.jsx("span",{className:"tp-stat-val",children:Math.floor(Math.random()*200+50)}),s.jsx("span",{className:"tp-stat-lbl",children:"Followers"})]}),s.jsx("div",{className:"tp-divider"}),s.jsxs("div",{className:"tp-stat",children:[s.jsx("span",{className:"tp-stat-val",children:(Math.random()*2+3).toFixed(1)}),s.jsx("span",{className:"tp-stat-lbl",children:"Rating"})]})]}),s.jsx("div",{className:"tp-menu",children:p.map((h,y)=>s.jsxs("button",{className:"tp-menu-item",onClick:h.action,children:[s.jsx("div",{className:"tp-menu-icon",children:s.jsx(h.icon,{size:18})}),s.jsxs("div",{className:"tp-menu-text",children:[s.jsx("span",{className:"tp-menu-label",children:h.label}),s.jsx("span",{className:"tp-menu-desc",children:h.desc})]}),s.jsx(Da,{size:16,color:"rgba(255,255,255,0.2)"})]},y))}),s.jsxs("button",{className:"tp-logout-btn",onClick:o,children:[s.jsx(n0,{size:18}),"Sign Out"]}),s.jsx("style",{children:`
        .tutor-profile-page {
          min-height: 100vh;
          background: linear-gradient(165deg, #1a1f1a 0%, #0f140f 40%, #0a0f0a 100%);
          color: white;
          padding-bottom: calc(var(--bottom-nav-height) + var(--safe-area-bottom) + 20px);
        }

        /* Header */
        .tp-header {
          text-align: center;
          padding: 32px 20px 24px;
          padding-top: calc(var(--safe-area-top, 0px) + 32px);
        }

        .tp-avatar-large {
          width: 80px;
          height: 80px;
          border-radius: 24px;
          background: linear-gradient(135deg, #3D5A3A, #2A3F28);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 40px;
          margin: 0 auto 16px;
          border: 2px solid rgba(139,168,136,0.25);
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        }

        .tp-header h1 {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 4px;
          font-family: var(--font-display, 'Playfair Display', serif);
        }

        .tp-specialty {
          font-size: 13px;
          color: rgba(255,255,255,0.5);
          margin-bottom: 14px;
        }

        .tp-badges {
          display: flex;
          gap: 8px;
          justify-content: center;
        }

        .tp-badge-item {
          font-size: 11px;
          padding: 4px 10px;
          background: rgba(139,168,136,0.1);
          border: 1px solid rgba(139,168,136,0.15);
          border-radius: 20px;
          color: #8BA888;
          font-weight: 500;
        }

        /* Stats Row */
        .tp-stats-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          margin: 0 20px 28px;
          padding: 18px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
        }

        .tp-stat {
          flex: 1;
          text-align: center;
        }

        .tp-stat-val {
          display: block;
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 3px;
        }

        .tp-stat-lbl {
          font-size: 11px;
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .tp-divider {
          width: 1px;
          height: 32px;
          background: rgba(255,255,255,0.08);
        }

        /* Menu */
        .tp-menu {
          padding: 0 20px;
        }

        .tp-menu-item {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 14px;
          margin-bottom: 8px;
          cursor: pointer;
          transition: background 0.2s;
          color: white;
          text-align: left;
        }

        .tp-menu-item:active {
          background: rgba(255,255,255,0.06);
        }

        .tp-menu-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(139,168,136,0.1);
          color: #8BA888;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .tp-menu-text {
          flex: 1;
        }

        .tp-menu-label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 2px;
        }

        .tp-menu-desc {
          font-size: 11px;
          color: rgba(255,255,255,0.35);
        }

        /* Logout */
        .tp-logout-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: calc(100% - 40px);
          margin: 24px 20px 0;
          padding: 14px;
          border-radius: 14px;
          background: rgba(231, 76, 60, 0.08);
          border: 1px solid rgba(231, 76, 60, 0.15);
          color: #e74c3c;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .tp-logout-btn:active {
          transform: scale(0.98);
          background: rgba(231, 76, 60, 0.12);
        }
      `})]})}const gx=[{path:"/home",label:"Home",icon:ev},{path:"/explore",label:"Explore",icon:Z1},{path:"/schedule",label:"Live",icon:c0},{path:"/pricing",label:"Pricing",icon:l0},{path:"/profile",label:"Profile",icon:js}];function vx(){const r=Bt();return s.jsxs("nav",{className:"bottom-nav",children:[gx.map(u=>{const d=r.pathname===u.path||u.path==="/explore"&&r.pathname.startsWith("/category"),o=u.icon;return s.jsxs(ro,{to:u.path,className:`bottom-nav-item ${d?"active":""}`,children:[s.jsxs("div",{className:"nav-icon-wrap",children:[u.path==="/schedule"&&s.jsx("span",{className:"live-dot"}),s.jsx(o,{size:22,strokeWidth:d?2.2:1.8})]}),s.jsx("span",{className:"nav-label",children:u.label})]},u.path)}),s.jsx("style",{children:`
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
      `})]})}const xx=[{path:"/tutor/dashboard",label:"Dashboard",icon:nv},{path:"/tutor-broadcast",label:"Go Live",icon:tl},{path:"/tutor/profile",label:"Profile",icon:js}];function yx(){const r=Bt();return s.jsxs("nav",{className:"tutor-bottom-nav",children:[xx.map(u=>{const d=r.pathname===u.path,o=u.icon;return s.jsxs(ro,{to:u.path,className:`tutor-nav-item ${d?"active":""}`,children:[s.jsxs("div",{className:"tutor-nav-icon-wrap",children:[u.path==="/tutor-broadcast"&&s.jsx("span",{className:"go-live-ring"}),s.jsx(o,{size:22,strokeWidth:d?2.2:1.8})]}),s.jsx("span",{className:"tutor-nav-label",children:u.label})]},u.path)}),s.jsx("style",{children:`
                .tutor-bottom-nav {
                    position: fixed;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 100%;
                    max-width: 430px;
                    height: var(--bottom-nav-height);
                    background: rgba(26, 32, 26, 0.95);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border-top: 1px solid rgba(139, 168, 136, 0.15);
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    padding-bottom: var(--safe-area-bottom);
                    z-index: 100;
                    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.2);
                }

                .tutor-nav-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 3px;
                    padding: 8px 0;
                    color: rgba(255, 255, 255, 0.4);
                    transition: all 0.3s ease;
                    position: relative;
                    min-width: 72px;
                    text-decoration: none;
                }

                .tutor-nav-item.active {
                    color: #8BA888;
                }

                .tutor-nav-item.active .tutor-nav-icon-wrap {
                    transform: translateY(-2px);
                }

                .tutor-nav-icon-wrap {
                    position: relative;
                    transition: transform 0.3s ease;
                }

                .tutor-nav-label {
                    font-size: 10px;
                    font-weight: 500;
                    letter-spacing: 0.3px;
                }

                .tutor-nav-item.active .tutor-nav-label {
                    font-weight: 600;
                }

                .go-live-ring {
                    position: absolute;
                    top: -3px;
                    right: -5px;
                    width: 8px;
                    height: 8px;
                    background: #e74c3c;
                    border-radius: 50%;
                    animation: livePulse 2s infinite;
                }

                @keyframes livePulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.4; }
                }
            `})]})}function bx(){const r=Bt(),u=["/","/login","/login/customer","/login/tutor","/tutor-broadcast","/live-session","/video-player"].includes(r.pathname),d=r.pathname.startsWith("/tutor/");return s.jsxs(s.Fragment,{children:[s.jsxs(Qg,{children:[s.jsx(et,{path:"/",element:s.jsx(z1,{})}),s.jsx(et,{path:"/login",element:s.jsx(dx,{})}),s.jsx(et,{path:"/login/customer",element:s.jsx(ux,{})}),s.jsx(et,{path:"/login/tutor",element:s.jsx(fx,{})}),s.jsx(et,{path:"/home",element:s.jsx($v,{})}),s.jsx(et,{path:"/explore",element:s.jsx(Iv,{})}),s.jsx(et,{path:"/category/:id",element:s.jsx(Pv,{})}),s.jsx(et,{path:"/video-player",element:s.jsx(ex,{})}),s.jsx(et,{path:"/live-session",element:s.jsx(lx,{})}),s.jsx(et,{path:"/schedule",element:s.jsx(sx,{})}),s.jsx(et,{path:"/pricing",element:s.jsx(cx,{})}),s.jsx(et,{path:"/profile",element:s.jsx(ox,{})}),s.jsx(et,{path:"/tutor/dashboard",element:s.jsx(hx,{})}),s.jsx(et,{path:"/tutor/profile",element:s.jsx(mx,{})}),s.jsx(et,{path:"/tutor-broadcast",element:s.jsx(px,{})})]}),!u&&d&&s.jsx(yx,{}),!u&&!d&&s.jsx(vx,{})]})}function jx(){return s.jsx(m1,{children:s.jsx(Jv,{children:s.jsx(bx,{})})})}const Sx=S.createContext(null),Wc={didCatch:!1,error:null};class Nx extends S.Component{constructor(u){super(u),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=Wc}static getDerivedStateFromError(u){return{didCatch:!0,error:u}}resetErrorBoundary(...u){const{error:d}=this.state;d!==null&&(this.props.onReset?.({args:u,reason:"imperative-api"}),this.setState(Wc))}componentDidCatch(u,d){this.props.onError?.(u,d)}componentDidUpdate(u,d){const{didCatch:o}=this.state,{resetKeys:p}=this.props;o&&d.error!==null&&zx(u.resetKeys,p)&&(this.props.onReset?.({next:p,prev:u.resetKeys,reason:"keys"}),this.setState(Wc))}render(){const{children:u,fallbackRender:d,FallbackComponent:o,fallback:p}=this.props,{didCatch:h,error:y}=this.state;let b=u;if(h){const g={error:y,resetErrorBoundary:this.resetErrorBoundary};if(typeof d=="function")b=d(g);else if(o)b=S.createElement(o,g);else if(p!==void 0)b=p;else throw y}return S.createElement(Sx.Provider,{value:{didCatch:h,error:y,resetErrorBoundary:this.resetErrorBoundary}},b)}}function zx(r=[],u=[]){return r.length!==u.length||r.some((d,o)=>!Object.is(d,u[o]))}function Ex({error:r,resetErrorBoundary:u}){return s.jsxs("div",{role:"alert",style:{padding:"20px",color:"red"},children:[s.jsx("h2",{children:"Something went wrong:"}),s.jsx("pre",{children:r.message}),s.jsx("button",{onClick:u,children:"Try again"}),s.jsx("button",{onClick:()=>{localStorage.clear(),window.location.reload()},children:"Clear Data & Reload"})]})}Km.createRoot(document.getElementById("root")).render(s.jsx(Lm.StrictMode,{children:s.jsx(Nx,{FallbackComponent:Ex,children:s.jsx(jx,{})})}));
