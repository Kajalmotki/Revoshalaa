(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const d of o)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function s(o){const d={};return o.integrity&&(d.integrity=o.integrity),o.referrerPolicy&&(d.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?d.credentials="include":o.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function l(o){if(o.ep)return;o.ep=!0;const d=s(o);fetch(o.href,d)}})();function iy(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var nd={exports:{}},Ps={};var Hg;function V_(){if(Hg)return Ps;Hg=1;var a=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function s(l,o,d){var h=null;if(d!==void 0&&(h=""+d),o.key!==void 0&&(h=""+o.key),"key"in o){d={};for(var p in o)p!=="key"&&(d[p]=o[p])}else d=o;return o=d.ref,{$$typeof:a,type:l,key:h,ref:o!==void 0?o:null,props:d}}return Ps.Fragment=n,Ps.jsx=s,Ps.jsxs=s,Ps}var qg;function F_(){return qg||(qg=1,nd.exports=V_()),nd.exports}var f=F_(),id={exports:{}},re={};var Yg;function Q_(){if(Yg)return re;Yg=1;var a=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),b=Symbol.iterator;function R(E){return E===null||typeof E!="object"?null:(E=b&&E[b]||E["@@iterator"],typeof E=="function"?E:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,H={};function V(E,B,Q){this.props=E,this.context=B,this.refs=H,this.updater=Q||z}V.prototype.isReactComponent={},V.prototype.setState=function(E,B){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,B,"setState")},V.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function G(){}G.prototype=V.prototype;function I(E,B,Q){this.props=E,this.context=B,this.refs=H,this.updater=Q||z}var X=I.prototype=new G;X.constructor=I,U(X,V.prototype),X.isPureReactComponent=!0;var K=Array.isArray;function ee(){}var F={H:null,A:null,T:null,S:null},Ce=Object.prototype.hasOwnProperty;function J(E,B,Q){var $=Q.ref;return{$$typeof:a,type:E,key:B,ref:$!==void 0?$:null,props:Q}}function ae(E,B){return J(E.type,B,E.props)}function he(E){return typeof E=="object"&&E!==null&&E.$$typeof===a}function ke(E){var B={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(Q){return B[Q]})}var Pe=/\/+/g;function P(E,B){return typeof E=="object"&&E!==null&&E.key!=null?ke(""+E.key):B.toString(36)}function pe(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(ee,ee):(E.status="pending",E.then(function(B){E.status==="pending"&&(E.status="fulfilled",E.value=B)},function(B){E.status==="pending"&&(E.status="rejected",E.reason=B)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function M(E,B,Q,$,oe){var ge=typeof E;(ge==="undefined"||ge==="boolean")&&(E=null);var je=!1;if(E===null)je=!0;else switch(ge){case"bigint":case"string":case"number":je=!0;break;case"object":switch(E.$$typeof){case a:case n:je=!0;break;case _:return je=E._init,M(je(E._payload),B,Q,$,oe)}}if(je)return oe=oe(E),je=$===""?"."+P(E,0):$,K(oe)?(Q="",je!=null&&(Q=je.replace(Pe,"$&/")+"/"),M(oe,B,Q,"",function(ts){return ts})):oe!=null&&(he(oe)&&(oe=ae(oe,Q+(oe.key==null||E&&E.key===oe.key?"":(""+oe.key).replace(Pe,"$&/")+"/")+je)),B.push(oe)),1;je=0;var xt=$===""?".":$+":";if(K(E))for(var Ke=0;Ke<E.length;Ke++)$=E[Ke],ge=xt+P($,Ke),je+=M($,B,Q,ge,oe);else if(Ke=R(E),typeof Ke=="function")for(E=Ke.call(E),Ke=0;!($=E.next()).done;)$=$.value,ge=xt+P($,Ke++),je+=M($,B,Q,ge,oe);else if(ge==="object"){if(typeof E.then=="function")return M(pe(E),B,Q,$,oe);throw B=String(E),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return je}function q(E,B,Q){if(E==null)return E;var $=[],oe=0;return M(E,$,"","",function(ge){return B.call(Q,ge,oe++)}),$}function ne(E){if(E._status===-1){var B=E._result;B=B(),B.then(function(Q){(E._status===0||E._status===-1)&&(E._status=1,E._result=Q)},function(Q){(E._status===0||E._status===-1)&&(E._status=2,E._result=Q)}),E._status===-1&&(E._status=0,E._result=B)}if(E._status===1)return E._result.default;throw E._result}var Ee=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},me={map:q,forEach:function(E,B,Q){q(E,function(){B.apply(this,arguments)},Q)},count:function(E){var B=0;return q(E,function(){B++}),B},toArray:function(E){return q(E,function(B){return B})||[]},only:function(E){if(!he(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return re.Activity=x,re.Children=me,re.Component=V,re.Fragment=s,re.Profiler=o,re.PureComponent=I,re.StrictMode=l,re.Suspense=g,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,re.__COMPILER_RUNTIME={__proto__:null,c:function(E){return F.H.useMemoCache(E)}},re.cache=function(E){return function(){return E.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(E,B,Q){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var $=U({},E.props),oe=E.key;if(B!=null)for(ge in B.key!==void 0&&(oe=""+B.key),B)!Ce.call(B,ge)||ge==="key"||ge==="__self"||ge==="__source"||ge==="ref"&&B.ref===void 0||($[ge]=B[ge]);var ge=arguments.length-2;if(ge===1)$.children=Q;else if(1<ge){for(var je=Array(ge),xt=0;xt<ge;xt++)je[xt]=arguments[xt+2];$.children=je}return J(E.type,oe,$)},re.createContext=function(E){return E={$$typeof:h,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:d,_context:E},E},re.createElement=function(E,B,Q){var $,oe={},ge=null;if(B!=null)for($ in B.key!==void 0&&(ge=""+B.key),B)Ce.call(B,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(oe[$]=B[$]);var je=arguments.length-2;if(je===1)oe.children=Q;else if(1<je){for(var xt=Array(je),Ke=0;Ke<je;Ke++)xt[Ke]=arguments[Ke+2];oe.children=xt}if(E&&E.defaultProps)for($ in je=E.defaultProps,je)oe[$]===void 0&&(oe[$]=je[$]);return J(E,ge,oe)},re.createRef=function(){return{current:null}},re.forwardRef=function(E){return{$$typeof:p,render:E}},re.isValidElement=he,re.lazy=function(E){return{$$typeof:_,_payload:{_status:-1,_result:E},_init:ne}},re.memo=function(E,B){return{$$typeof:y,type:E,compare:B===void 0?null:B}},re.startTransition=function(E){var B=F.T,Q={};F.T=Q;try{var $=E(),oe=F.S;oe!==null&&oe(Q,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(ee,Ee)}catch(ge){Ee(ge)}finally{B!==null&&Q.types!==null&&(B.types=Q.types),F.T=B}},re.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},re.use=function(E){return F.H.use(E)},re.useActionState=function(E,B,Q){return F.H.useActionState(E,B,Q)},re.useCallback=function(E,B){return F.H.useCallback(E,B)},re.useContext=function(E){return F.H.useContext(E)},re.useDebugValue=function(){},re.useDeferredValue=function(E,B){return F.H.useDeferredValue(E,B)},re.useEffect=function(E,B){return F.H.useEffect(E,B)},re.useEffectEvent=function(E){return F.H.useEffectEvent(E)},re.useId=function(){return F.H.useId()},re.useImperativeHandle=function(E,B,Q){return F.H.useImperativeHandle(E,B,Q)},re.useInsertionEffect=function(E,B){return F.H.useInsertionEffect(E,B)},re.useLayoutEffect=function(E,B){return F.H.useLayoutEffect(E,B)},re.useMemo=function(E,B){return F.H.useMemo(E,B)},re.useOptimistic=function(E,B){return F.H.useOptimistic(E,B)},re.useReducer=function(E,B,Q){return F.H.useReducer(E,B,Q)},re.useRef=function(E){return F.H.useRef(E)},re.useState=function(E){return F.H.useState(E)},re.useSyncExternalStore=function(E,B,Q){return F.H.useSyncExternalStore(E,B,Q)},re.useTransition=function(){return F.H.useTransition()},re.version="19.2.4",re}var Gg;function Qd(){return Gg||(Gg=1,id.exports=Q_()),id.exports}var N=Qd();const X_=iy(N);var ad={exports:{}},Ks={},sd={exports:{}},ld={};var Vg;function P_(){return Vg||(Vg=1,(function(a){function n(M,q){var ne=M.length;M.push(q);e:for(;0<ne;){var Ee=ne-1>>>1,me=M[Ee];if(0<o(me,q))M[Ee]=q,M[ne]=me,ne=Ee;else break e}}function s(M){return M.length===0?null:M[0]}function l(M){if(M.length===0)return null;var q=M[0],ne=M.pop();if(ne!==q){M[0]=ne;e:for(var Ee=0,me=M.length,E=me>>>1;Ee<E;){var B=2*(Ee+1)-1,Q=M[B],$=B+1,oe=M[$];if(0>o(Q,ne))$<me&&0>o(oe,Q)?(M[Ee]=oe,M[$]=ne,Ee=$):(M[Ee]=Q,M[B]=ne,Ee=B);else if($<me&&0>o(oe,ne))M[Ee]=oe,M[$]=ne,Ee=$;else break e}}return q}function o(M,q){var ne=M.sortIndex-q.sortIndex;return ne!==0?ne:M.id-q.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;a.unstable_now=function(){return d.now()}}else{var h=Date,p=h.now();a.unstable_now=function(){return h.now()-p}}var g=[],y=[],_=1,x=null,b=3,R=!1,z=!1,U=!1,H=!1,V=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function X(M){for(var q=s(y);q!==null;){if(q.callback===null)l(y);else if(q.startTime<=M)l(y),q.sortIndex=q.expirationTime,n(g,q);else break;q=s(y)}}function K(M){if(U=!1,X(M),!z)if(s(g)!==null)z=!0,ee||(ee=!0,ke());else{var q=s(y);q!==null&&pe(K,q.startTime-M)}}var ee=!1,F=-1,Ce=5,J=-1;function ae(){return H?!0:!(a.unstable_now()-J<Ce)}function he(){if(H=!1,ee){var M=a.unstable_now();J=M;var q=!0;try{e:{z=!1,U&&(U=!1,G(F),F=-1),R=!0;var ne=b;try{t:{for(X(M),x=s(g);x!==null&&!(x.expirationTime>M&&ae());){var Ee=x.callback;if(typeof Ee=="function"){x.callback=null,b=x.priorityLevel;var me=Ee(x.expirationTime<=M);if(M=a.unstable_now(),typeof me=="function"){x.callback=me,X(M),q=!0;break t}x===s(g)&&l(g),X(M)}else l(g);x=s(g)}if(x!==null)q=!0;else{var E=s(y);E!==null&&pe(K,E.startTime-M),q=!1}}break e}finally{x=null,b=ne,R=!1}q=void 0}}finally{q?ke():ee=!1}}}var ke;if(typeof I=="function")ke=function(){I(he)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,P=Pe.port2;Pe.port1.onmessage=he,ke=function(){P.postMessage(null)}}else ke=function(){V(he,0)};function pe(M,q){F=V(function(){M(a.unstable_now())},q)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(M){M.callback=null},a.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ce=0<M?Math.floor(1e3/M):5},a.unstable_getCurrentPriorityLevel=function(){return b},a.unstable_next=function(M){switch(b){case 1:case 2:case 3:var q=3;break;default:q=b}var ne=b;b=q;try{return M()}finally{b=ne}},a.unstable_requestPaint=function(){H=!0},a.unstable_runWithPriority=function(M,q){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var ne=b;b=M;try{return q()}finally{b=ne}},a.unstable_scheduleCallback=function(M,q,ne){var Ee=a.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?Ee+ne:Ee):ne=Ee,M){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=ne+me,M={id:_++,callback:q,priorityLevel:M,startTime:ne,expirationTime:me,sortIndex:-1},ne>Ee?(M.sortIndex=ne,n(y,M),s(g)===null&&M===s(y)&&(U?(G(F),F=-1):U=!0,pe(K,ne-Ee))):(M.sortIndex=me,n(g,M),z||R||(z=!0,ee||(ee=!0,ke()))),M},a.unstable_shouldYield=ae,a.unstable_wrapCallback=function(M){var q=b;return function(){var ne=b;b=q;try{return M.apply(this,arguments)}finally{b=ne}}}})(ld)),ld}var Fg;function K_(){return Fg||(Fg=1,sd.exports=P_()),sd.exports}var rd={exports:{}},mt={};var Qg;function Z_(){if(Qg)return mt;Qg=1;var a=Qd();function n(g){var y="https://react.dev/errors/"+g;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)y+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+g+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var l={d:{f:s,r:function(){throw Error(n(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},o=Symbol.for("react.portal");function d(g,y,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:x==null?null:""+x,children:g,containerInfo:y,implementation:_}}var h=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,y){if(g==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return mt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,mt.createPortal=function(g,y){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(n(299));return d(g,y,null,_)},mt.flushSync=function(g){var y=h.T,_=l.p;try{if(h.T=null,l.p=2,g)return g()}finally{h.T=y,l.p=_,l.d.f()}},mt.preconnect=function(g,y){typeof g=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,l.d.C(g,y))},mt.prefetchDNS=function(g){typeof g=="string"&&l.d.D(g)},mt.preinit=function(g,y){if(typeof g=="string"&&y&&typeof y.as=="string"){var _=y.as,x=p(_,y.crossOrigin),b=typeof y.integrity=="string"?y.integrity:void 0,R=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;_==="style"?l.d.S(g,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:x,integrity:b,fetchPriority:R}):_==="script"&&l.d.X(g,{crossOrigin:x,integrity:b,fetchPriority:R,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},mt.preinitModule=function(g,y){if(typeof g=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var _=p(y.as,y.crossOrigin);l.d.M(g,{crossOrigin:_,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&l.d.M(g)},mt.preload=function(g,y){if(typeof g=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var _=y.as,x=p(_,y.crossOrigin);l.d.L(g,_,{crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},mt.preloadModule=function(g,y){if(typeof g=="string")if(y){var _=p(y.as,y.crossOrigin);l.d.m(g,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:_,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else l.d.m(g)},mt.requestFormReset=function(g){l.d.r(g)},mt.unstable_batchedUpdates=function(g,y){return g(y)},mt.useFormState=function(g,y,_){return h.H.useFormState(g,y,_)},mt.useFormStatus=function(){return h.H.useHostTransitionStatus()},mt.version="19.2.4",mt}var Xg;function $_(){if(Xg)return rd.exports;Xg=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(n){console.error(n)}}return a(),rd.exports=Z_(),rd.exports}var Pg;function W_(){if(Pg)return Ks;Pg=1;var a=K_(),n=Qd(),s=$_();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(d(e)!==e)throw Error(l(188))}function y(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(l(188));return t!==e?null:e}for(var i=e,r=t;;){var c=i.return;if(c===null)break;var u=c.alternate;if(u===null){if(r=c.return,r!==null){i=r;continue}break}if(c.child===u.child){for(u=c.child;u;){if(u===i)return g(c),e;if(u===r)return g(c),t;u=u.sibling}throw Error(l(188))}if(i.return!==r.return)i=c,r=u;else{for(var m=!1,v=c.child;v;){if(v===i){m=!0,i=c,r=u;break}if(v===r){m=!0,r=c,i=u;break}v=v.sibling}if(!m){for(v=u.child;v;){if(v===i){m=!0,i=u,r=c;break}if(v===r){m=!0,r=u,i=c;break}v=v.sibling}if(!m)throw Error(l(189))}}if(i.alternate!==r)throw Error(l(190))}if(i.tag!==3)throw Error(l(188));return i.stateNode.current===i?e:t}function _(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=_(e),t!==null)return t;e=e.sibling}return null}var x=Object.assign,b=Symbol.for("react.element"),R=Symbol.for("react.transitional.element"),z=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),I=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),Ce=Symbol.for("react.lazy"),J=Symbol.for("react.activity"),ae=Symbol.for("react.memo_cache_sentinel"),he=Symbol.iterator;function ke(e){return e===null||typeof e!="object"?null:(e=he&&e[he]||e["@@iterator"],typeof e=="function"?e:null)}var Pe=Symbol.for("react.client.reference");function P(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Pe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case V:return"Profiler";case H:return"StrictMode";case K:return"Suspense";case ee:return"SuspenseList";case J:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case z:return"Portal";case I:return e.displayName||"Context";case G:return(e._context.displayName||"Context")+".Consumer";case X:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return t=e.displayName||null,t!==null?t:P(e.type)||"Memo";case Ce:t=e._payload,e=e._init;try{return P(e(t))}catch{}}return null}var pe=Array.isArray,M=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},Ee=[],me=-1;function E(e){return{current:e}}function B(e){0>me||(e.current=Ee[me],Ee[me]=null,me--)}function Q(e,t){me++,Ee[me]=e.current,e.current=t}var $=E(null),oe=E(null),ge=E(null),je=E(null);function xt(e,t){switch(Q(ge,t),Q(oe,e),Q($,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?cg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=cg(t),e=ug(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}B($),Q($,e)}function Ke(){B($),B(oe),B(ge)}function ts(e){e.memoizedState!==null&&Q(je,e);var t=$.current,i=ug(t,e.type);t!==i&&(Q(oe,e),Q($,i))}function jl(e){oe.current===e&&(B($),B(oe)),je.current===e&&(B(je),Vs._currentValue=ne)}var Uo,If;function bi(e){if(Uo===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);Uo=t&&t[1]||"",If=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Uo+e+If}var Io=!1;function Ho(e,t){if(!e||Io)return"";Io=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var L=function(){throw Error()};if(Object.defineProperty(L.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(L,[])}catch(D){var j=D}Reflect.construct(e,[],L)}else{try{L.call()}catch(D){j=D}e.call(L.prototype)}}else{try{throw Error()}catch(D){j=D}(L=e())&&typeof L.catch=="function"&&L.catch(function(){})}}catch(D){if(D&&j&&typeof D.stack=="string")return[D.stack,j.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=r.DetermineComponentFrameRoot(),m=u[0],v=u[1];if(m&&v){var S=m.split(`
`),A=v.split(`
`);for(c=r=0;r<S.length&&!S[r].includes("DetermineComponentFrameRoot");)r++;for(;c<A.length&&!A[c].includes("DetermineComponentFrameRoot");)c++;if(r===S.length||c===A.length)for(r=S.length-1,c=A.length-1;1<=r&&0<=c&&S[r]!==A[c];)c--;for(;1<=r&&0<=c;r--,c--)if(S[r]!==A[c]){if(r!==1||c!==1)do if(r--,c--,0>c||S[r]!==A[c]){var O=`
`+S[r].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=r&&0<=c);break}}}finally{Io=!1,Error.prepareStackTrace=i}return(i=e?e.displayName||e.name:"")?bi(i):""}function b1(e,t){switch(e.tag){case 26:case 27:case 5:return bi(e.type);case 16:return bi("Lazy");case 13:return e.child!==t&&t!==null?bi("Suspense Fallback"):bi("Suspense");case 19:return bi("SuspenseList");case 0:case 15:return Ho(e.type,!1);case 11:return Ho(e.type.render,!1);case 1:return Ho(e.type,!0);case 31:return bi("Activity");default:return""}}function Hf(e){try{var t="",i=null;do t+=b1(e,i),i=e,e=e.return;while(e);return t}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var qo=Object.prototype.hasOwnProperty,Yo=a.unstable_scheduleCallback,Go=a.unstable_cancelCallback,S1=a.unstable_shouldYield,C1=a.unstable_requestPaint,Dt=a.unstable_now,E1=a.unstable_getCurrentPriorityLevel,qf=a.unstable_ImmediatePriority,Yf=a.unstable_UserBlockingPriority,Rl=a.unstable_NormalPriority,N1=a.unstable_LowPriority,Gf=a.unstable_IdlePriority,w1=a.log,T1=a.unstable_setDisableYieldValue,ns=null,zt=null;function Gn(e){if(typeof w1=="function"&&T1(e),zt&&typeof zt.setStrictMode=="function")try{zt.setStrictMode(ns,e)}catch{}}var Ot=Math.clz32?Math.clz32:R1,A1=Math.log,j1=Math.LN2;function R1(e){return e>>>=0,e===0?32:31-(A1(e)/j1|0)|0}var Ml=256,Dl=262144,zl=4194304;function Si(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ol(e,t,i){var r=e.pendingLanes;if(r===0)return 0;var c=0,u=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var v=r&134217727;return v!==0?(r=v&~u,r!==0?c=Si(r):(m&=v,m!==0?c=Si(m):i||(i=v&~e,i!==0&&(c=Si(i))))):(v=r&~u,v!==0?c=Si(v):m!==0?c=Si(m):i||(i=r&~e,i!==0&&(c=Si(i)))),c===0?0:t!==0&&t!==c&&(t&u)===0&&(u=c&-c,i=t&-t,u>=i||u===32&&(i&4194048)!==0)?t:c}function is(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function M1(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vf(){var e=zl;return zl<<=1,(zl&62914560)===0&&(zl=4194304),e}function Vo(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function as(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function D1(e,t,i,r,c,u){var m=e.pendingLanes;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=i,e.entangledLanes&=i,e.errorRecoveryDisabledLanes&=i,e.shellSuspendCounter=0;var v=e.entanglements,S=e.expirationTimes,A=e.hiddenUpdates;for(i=m&~i;0<i;){var O=31-Ot(i),L=1<<O;v[O]=0,S[O]=-1;var j=A[O];if(j!==null)for(A[O]=null,O=0;O<j.length;O++){var D=j[O];D!==null&&(D.lane&=-536870913)}i&=~L}r!==0&&Ff(e,r,0),u!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=u&~(m&~t))}function Ff(e,t,i){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ot(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|i&261930}function Qf(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var r=31-Ot(i),c=1<<r;c&t|e[r]&t&&(e[r]|=t),i&=~c}}function Xf(e,t){var i=t&-t;return i=(i&42)!==0?1:Fo(i),(i&(e.suspendedLanes|t))!==0?0:i}function Fo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Qo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Pf(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:zg(e.type))}function Kf(e,t){var i=q.p;try{return q.p=e,t()}finally{q.p=i}}var Vn=Math.random().toString(36).slice(2),ct="__reactFiber$"+Vn,bt="__reactProps$"+Vn,$i="__reactContainer$"+Vn,Xo="__reactEvents$"+Vn,z1="__reactListeners$"+Vn,O1="__reactHandles$"+Vn,Zf="__reactResources$"+Vn,ss="__reactMarker$"+Vn;function Po(e){delete e[ct],delete e[bt],delete e[Xo],delete e[z1],delete e[O1]}function Wi(e){var t=e[ct];if(t)return t;for(var i=e.parentNode;i;){if(t=i[$i]||i[ct]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=yg(e);e!==null;){if(i=e[ct])return i;e=yg(e)}return t}e=i,i=e.parentNode}return null}function Ji(e){if(e=e[ct]||e[$i]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ls(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function ea(e){var t=e[Zf];return t||(t=e[Zf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function at(e){e[ss]=!0}var $f=new Set,Wf={};function Ci(e,t){ta(e,t),ta(e+"Capture",t)}function ta(e,t){for(Wf[e]=t,e=0;e<t.length;e++)$f.add(t[e])}var k1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jf={},eh={};function L1(e){return qo.call(eh,e)?!0:qo.call(Jf,e)?!1:k1.test(e)?eh[e]=!0:(Jf[e]=!0,!1)}function kl(e,t,i){if(L1(t))if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var r=t.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+i)}}function Ll(e,t,i){if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+i)}}function pn(e,t,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttributeNS(t,i,""+r)}}function Yt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function th(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function B1(e,t,i){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,u=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(m){i=""+m,u.call(this,m)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(m){i=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ko(e){if(!e._valueTracker){var t=th(e)?"checked":"value";e._valueTracker=B1(e,t,""+e[t])}}function nh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),r="";return e&&(r=th(e)?e.checked?"true":"false":e.value),e=r,e!==i?(t.setValue(e),!0):!1}function Bl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var U1=/[\n"\\]/g;function Gt(e){return e.replace(U1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Zo(e,t,i,r,c,u,m,v){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Yt(t)):e.value!==""+Yt(t)&&(e.value=""+Yt(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?$o(e,m,Yt(t)):i!=null?$o(e,m,Yt(i)):r!=null&&e.removeAttribute("value"),c==null&&u!=null&&(e.defaultChecked=!!u),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+Yt(v):e.removeAttribute("name")}function ih(e,t,i,r,c,u,m,v){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||i!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){Ko(e);return}i=i!=null?""+Yt(i):"",t=t!=null?""+Yt(t):i,v||t===e.value||(e.value=t),e.defaultValue=t}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=v?e.checked:!!r,e.defaultChecked=!!r,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),Ko(e)}function $o(e,t,i){t==="number"&&Bl(e.ownerDocument)===e||e.defaultValue===""+i||(e.defaultValue=""+i)}function na(e,t,i,r){if(e=e.options,t){t={};for(var c=0;c<i.length;c++)t["$"+i[c]]=!0;for(i=0;i<e.length;i++)c=t.hasOwnProperty("$"+e[i].value),e[i].selected!==c&&(e[i].selected=c),c&&r&&(e[i].defaultSelected=!0)}else{for(i=""+Yt(i),t=null,c=0;c<e.length;c++){if(e[c].value===i){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function ah(e,t,i){if(t!=null&&(t=""+Yt(t),t!==e.value&&(e.value=t),i==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=i!=null?""+Yt(i):""}function sh(e,t,i,r){if(t==null){if(r!=null){if(i!=null)throw Error(l(92));if(pe(r)){if(1<r.length)throw Error(l(93));r=r[0]}i=r}i==null&&(i=""),t=i}i=Yt(t),e.defaultValue=i,r=e.textContent,r===i&&r!==""&&r!==null&&(e.value=r),Ko(e)}function ia(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var I1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function lh(e,t,i){var r=t.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?r?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":r?e.setProperty(t,i):typeof i!="number"||i===0||I1.has(t)?t==="float"?e.cssFloat=i:e[t]=(""+i).trim():e[t]=i+"px"}function rh(e,t,i){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,i!=null){for(var r in i)!i.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var c in t)r=t[c],t.hasOwnProperty(c)&&i[c]!==r&&lh(e,c,r)}else for(var u in t)t.hasOwnProperty(u)&&lh(e,u,t[u])}function Wo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var H1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),q1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ul(e){return q1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function mn(){}var Jo=null;function ec(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var aa=null,sa=null;function oh(e){var t=Ji(e);if(t&&(e=t.stateNode)){var i=e[bt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Zo(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+Gt(""+t)+'"][type="radio"]'),t=0;t<i.length;t++){var r=i[t];if(r!==e&&r.form===e.form){var c=r[bt]||null;if(!c)throw Error(l(90));Zo(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(t=0;t<i.length;t++)r=i[t],r.form===e.form&&nh(r)}break e;case"textarea":ah(e,i.value,i.defaultValue);break e;case"select":t=i.value,t!=null&&na(e,!!i.multiple,t,!1)}}}var tc=!1;function ch(e,t,i){if(tc)return e(t,i);tc=!0;try{var r=e(t);return r}finally{if(tc=!1,(aa!==null||sa!==null)&&(Nr(),aa&&(t=aa,e=sa,sa=aa=null,oh(t),e)))for(t=0;t<e.length;t++)oh(e[t])}}function rs(e,t){var i=e.stateNode;if(i===null)return null;var r=i[bt]||null;if(r===null)return null;i=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(l(231,t,typeof i));return i}var gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nc=!1;if(gn)try{var os={};Object.defineProperty(os,"passive",{get:function(){nc=!0}}),window.addEventListener("test",os,os),window.removeEventListener("test",os,os)}catch{nc=!1}var Fn=null,ic=null,Il=null;function uh(){if(Il)return Il;var e,t=ic,i=t.length,r,c="value"in Fn?Fn.value:Fn.textContent,u=c.length;for(e=0;e<i&&t[e]===c[e];e++);var m=i-e;for(r=1;r<=m&&t[i-r]===c[u-r];r++);return Il=c.slice(e,1<r?1-r:void 0)}function Hl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ql(){return!0}function dh(){return!1}function St(e){function t(i,r,c,u,m){this._reactName=i,this._targetInst=c,this.type=r,this.nativeEvent=u,this.target=m,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(i=e[v],this[v]=i?i(u):u[v]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?ql:dh,this.isPropagationStopped=dh,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=ql)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=ql)},persist:function(){},isPersistent:ql}),t}var Ei={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yl=St(Ei),cs=x({},Ei,{view:0,detail:0}),Y1=St(cs),ac,sc,us,Gl=x({},cs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==us&&(us&&e.type==="mousemove"?(ac=e.screenX-us.screenX,sc=e.screenY-us.screenY):sc=ac=0,us=e),ac)},movementY:function(e){return"movementY"in e?e.movementY:sc}}),fh=St(Gl),G1=x({},Gl,{dataTransfer:0}),V1=St(G1),F1=x({},cs,{relatedTarget:0}),lc=St(F1),Q1=x({},Ei,{animationName:0,elapsedTime:0,pseudoElement:0}),X1=St(Q1),P1=x({},Ei,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),K1=St(P1),Z1=x({},Ei,{data:0}),hh=St(Z1),$1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},W1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},J1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ex(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=J1[e])?!!t[e]:!1}function rc(){return ex}var tx=x({},cs,{key:function(e){if(e.key){var t=$1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?W1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rc,charCode:function(e){return e.type==="keypress"?Hl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),nx=St(tx),ix=x({},Gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ph=St(ix),ax=x({},cs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rc}),sx=St(ax),lx=x({},Ei,{propertyName:0,elapsedTime:0,pseudoElement:0}),rx=St(lx),ox=x({},Gl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cx=St(ox),ux=x({},Ei,{newState:0,oldState:0}),dx=St(ux),fx=[9,13,27,32],oc=gn&&"CompositionEvent"in window,ds=null;gn&&"documentMode"in document&&(ds=document.documentMode);var hx=gn&&"TextEvent"in window&&!ds,mh=gn&&(!oc||ds&&8<ds&&11>=ds),gh=" ",yh=!1;function vh(e,t){switch(e){case"keyup":return fx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var la=!1;function px(e,t){switch(e){case"compositionend":return xh(t);case"keypress":return t.which!==32?null:(yh=!0,gh);case"textInput":return e=t.data,e===gh&&yh?null:e;default:return null}}function mx(e,t){if(la)return e==="compositionend"||!oc&&vh(e,t)?(e=uh(),Il=ic=Fn=null,la=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return mh&&t.locale!=="ko"?null:t.data;default:return null}}var gx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _h(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gx[e.type]:t==="textarea"}function bh(e,t,i,r){aa?sa?sa.push(r):sa=[r]:aa=r,t=Dr(t,"onChange"),0<t.length&&(i=new Yl("onChange","change",null,i,r),e.push({event:i,listeners:t}))}var fs=null,hs=null;function yx(e){ig(e,0)}function Vl(e){var t=ls(e);if(nh(t))return e}function Sh(e,t){if(e==="change")return t}var Ch=!1;if(gn){var cc;if(gn){var uc="oninput"in document;if(!uc){var Eh=document.createElement("div");Eh.setAttribute("oninput","return;"),uc=typeof Eh.oninput=="function"}cc=uc}else cc=!1;Ch=cc&&(!document.documentMode||9<document.documentMode)}function Nh(){fs&&(fs.detachEvent("onpropertychange",wh),hs=fs=null)}function wh(e){if(e.propertyName==="value"&&Vl(hs)){var t=[];bh(t,hs,e,ec(e)),ch(yx,t)}}function vx(e,t,i){e==="focusin"?(Nh(),fs=t,hs=i,fs.attachEvent("onpropertychange",wh)):e==="focusout"&&Nh()}function xx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vl(hs)}function _x(e,t){if(e==="click")return Vl(t)}function bx(e,t){if(e==="input"||e==="change")return Vl(t)}function Sx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kt=typeof Object.is=="function"?Object.is:Sx;function ps(e,t){if(kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),r=Object.keys(t);if(i.length!==r.length)return!1;for(r=0;r<i.length;r++){var c=i[r];if(!qo.call(t,c)||!kt(e[c],t[c]))return!1}return!0}function Th(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ah(e,t){var i=Th(e);e=0;for(var r;i;){if(i.nodeType===3){if(r=e+i.textContent.length,e<=t&&r>=t)return{node:i,offset:t-e};e=r}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Th(i)}}function jh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Rh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Bl(e.document);t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=Bl(e.document)}return t}function dc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Cx=gn&&"documentMode"in document&&11>=document.documentMode,ra=null,fc=null,ms=null,hc=!1;function Mh(e,t,i){var r=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;hc||ra==null||ra!==Bl(r)||(r=ra,"selectionStart"in r&&dc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ms&&ps(ms,r)||(ms=r,r=Dr(fc,"onSelect"),0<r.length&&(t=new Yl("onSelect","select",null,t,i),e.push({event:t,listeners:r}),t.target=ra)))}function Ni(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var oa={animationend:Ni("Animation","AnimationEnd"),animationiteration:Ni("Animation","AnimationIteration"),animationstart:Ni("Animation","AnimationStart"),transitionrun:Ni("Transition","TransitionRun"),transitionstart:Ni("Transition","TransitionStart"),transitioncancel:Ni("Transition","TransitionCancel"),transitionend:Ni("Transition","TransitionEnd")},pc={},Dh={};gn&&(Dh=document.createElement("div").style,"AnimationEvent"in window||(delete oa.animationend.animation,delete oa.animationiteration.animation,delete oa.animationstart.animation),"TransitionEvent"in window||delete oa.transitionend.transition);function wi(e){if(pc[e])return pc[e];if(!oa[e])return e;var t=oa[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in Dh)return pc[e]=t[i];return e}var zh=wi("animationend"),Oh=wi("animationiteration"),kh=wi("animationstart"),Ex=wi("transitionrun"),Nx=wi("transitionstart"),wx=wi("transitioncancel"),Lh=wi("transitionend"),Bh=new Map,mc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mc.push("scrollEnd");function Jt(e,t){Bh.set(e,t),Ci(t,[e])}var Fl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Vt=[],ca=0,gc=0;function Ql(){for(var e=ca,t=gc=ca=0;t<e;){var i=Vt[t];Vt[t++]=null;var r=Vt[t];Vt[t++]=null;var c=Vt[t];Vt[t++]=null;var u=Vt[t];if(Vt[t++]=null,r!==null&&c!==null){var m=r.pending;m===null?c.next=c:(c.next=m.next,m.next=c),r.pending=c}u!==0&&Uh(i,c,u)}}function Xl(e,t,i,r){Vt[ca++]=e,Vt[ca++]=t,Vt[ca++]=i,Vt[ca++]=r,gc|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function yc(e,t,i,r){return Xl(e,t,i,r),Pl(e)}function Ti(e,t){return Xl(e,null,null,t),Pl(e)}function Uh(e,t,i){e.lanes|=i;var r=e.alternate;r!==null&&(r.lanes|=i);for(var c=!1,u=e.return;u!==null;)u.childLanes|=i,r=u.alternate,r!==null&&(r.childLanes|=i),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(c=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,c&&t!==null&&(c=31-Ot(i),e=u.hiddenUpdates,r=e[c],r===null?e[c]=[t]:r.push(t),t.lane=i|536870912),u):null}function Pl(e){if(50<Bs)throw Bs=0,wu=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ua={};function Tx(e,t,i,r){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(e,t,i,r){return new Tx(e,t,i,r)}function vc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yn(e,t){var i=e.alternate;return i===null?(i=Lt(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&65011712,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i.refCleanup=e.refCleanup,i}function Ih(e,t){e.flags&=65011714;var i=e.alternate;return i===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=i.childLanes,e.lanes=i.lanes,e.child=i.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=i.memoizedProps,e.memoizedState=i.memoizedState,e.updateQueue=i.updateQueue,e.type=i.type,t=i.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Kl(e,t,i,r,c,u){var m=0;if(r=e,typeof e=="function")vc(e)&&(m=1);else if(typeof e=="string")m=D_(e,i,$.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case J:return e=Lt(31,i,t,c),e.elementType=J,e.lanes=u,e;case U:return Ai(i.children,c,u,t);case H:m=8,c|=24;break;case V:return e=Lt(12,i,t,c|2),e.elementType=V,e.lanes=u,e;case K:return e=Lt(13,i,t,c),e.elementType=K,e.lanes=u,e;case ee:return e=Lt(19,i,t,c),e.elementType=ee,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case I:m=10;break e;case G:m=9;break e;case X:m=11;break e;case F:m=14;break e;case Ce:m=16,r=null;break e}m=29,i=Error(l(130,e===null?"null":typeof e,"")),r=null}return t=Lt(m,i,t,c),t.elementType=e,t.type=r,t.lanes=u,t}function Ai(e,t,i,r){return e=Lt(7,e,r,t),e.lanes=i,e}function xc(e,t,i){return e=Lt(6,e,null,t),e.lanes=i,e}function Hh(e){var t=Lt(18,null,null,0);return t.stateNode=e,t}function _c(e,t,i){return t=Lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var qh=new WeakMap;function Ft(e,t){if(typeof e=="object"&&e!==null){var i=qh.get(e);return i!==void 0?i:(t={value:e,source:t,stack:Hf(t)},qh.set(e,t),t)}return{value:e,source:t,stack:Hf(t)}}var da=[],fa=0,Zl=null,gs=0,Qt=[],Xt=0,Qn=null,on=1,cn="";function vn(e,t){da[fa++]=gs,da[fa++]=Zl,Zl=e,gs=t}function Yh(e,t,i){Qt[Xt++]=on,Qt[Xt++]=cn,Qt[Xt++]=Qn,Qn=e;var r=on;e=cn;var c=32-Ot(r)-1;r&=~(1<<c),i+=1;var u=32-Ot(t)+c;if(30<u){var m=c-c%5;u=(r&(1<<m)-1).toString(32),r>>=m,c-=m,on=1<<32-Ot(t)+c|i<<c|r,cn=u+e}else on=1<<u|i<<c|r,cn=e}function bc(e){e.return!==null&&(vn(e,1),Yh(e,1,0))}function Sc(e){for(;e===Zl;)Zl=da[--fa],da[fa]=null,gs=da[--fa],da[fa]=null;for(;e===Qn;)Qn=Qt[--Xt],Qt[Xt]=null,cn=Qt[--Xt],Qt[Xt]=null,on=Qt[--Xt],Qt[Xt]=null}function Gh(e,t){Qt[Xt++]=on,Qt[Xt++]=cn,Qt[Xt++]=Qn,on=t.id,cn=t.overflow,Qn=e}var ut=null,He=null,Se=!1,Xn=null,Pt=!1,Cc=Error(l(519));function Pn(e){var t=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ys(Ft(t,e)),Cc}function Vh(e){var t=e.stateNode,i=e.type,r=e.memoizedProps;switch(t[ct]=e,t[bt]=r,i){case"dialog":ve("cancel",t),ve("close",t);break;case"iframe":case"object":case"embed":ve("load",t);break;case"video":case"audio":for(i=0;i<Is.length;i++)ve(Is[i],t);break;case"source":ve("error",t);break;case"img":case"image":case"link":ve("error",t),ve("load",t);break;case"details":ve("toggle",t);break;case"input":ve("invalid",t),ih(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":ve("invalid",t);break;case"textarea":ve("invalid",t),sh(t,r.value,r.defaultValue,r.children)}i=r.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||t.textContent===""+i||r.suppressHydrationWarning===!0||rg(t.textContent,i)?(r.popover!=null&&(ve("beforetoggle",t),ve("toggle",t)),r.onScroll!=null&&ve("scroll",t),r.onScrollEnd!=null&&ve("scrollend",t),r.onClick!=null&&(t.onclick=mn),t=!0):t=!1,t||Pn(e,!0)}function Fh(e){for(ut=e.return;ut;)switch(ut.tag){case 5:case 31:case 13:Pt=!1;return;case 27:case 3:Pt=!0;return;default:ut=ut.return}}function ha(e){if(e!==ut)return!1;if(!Se)return Fh(e),Se=!0,!1;var t=e.tag,i;if((i=t!==3&&t!==27)&&((i=t===5)&&(i=e.type,i=!(i!=="form"&&i!=="button")||qu(e.type,e.memoizedProps)),i=!i),i&&He&&Pn(e),Fh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));He=gg(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));He=gg(e)}else t===27?(t=He,oi(e.type)?(e=Qu,Qu=null,He=e):He=t):He=ut?Zt(e.stateNode.nextSibling):null;return!0}function ji(){He=ut=null,Se=!1}function Ec(){var e=Xn;return e!==null&&(wt===null?wt=e:wt.push.apply(wt,e),Xn=null),e}function ys(e){Xn===null?Xn=[e]:Xn.push(e)}var Nc=E(null),Ri=null,xn=null;function Kn(e,t,i){Q(Nc,t._currentValue),t._currentValue=i}function _n(e){e._currentValue=Nc.current,B(Nc)}function wc(e,t,i){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===i)break;e=e.return}}function Tc(e,t,i,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var u=c.dependencies;if(u!==null){var m=c.child;u=u.firstContext;e:for(;u!==null;){var v=u;u=c;for(var S=0;S<t.length;S++)if(v.context===t[S]){u.lanes|=i,v=u.alternate,v!==null&&(v.lanes|=i),wc(u.return,i,e),r||(m=null);break e}u=v.next}}else if(c.tag===18){if(m=c.return,m===null)throw Error(l(341));m.lanes|=i,u=m.alternate,u!==null&&(u.lanes|=i),wc(m,i,e),m=null}else m=c.child;if(m!==null)m.return=c;else for(m=c;m!==null;){if(m===e){m=null;break}if(c=m.sibling,c!==null){c.return=m.return,m=c;break}m=m.return}c=m}}function pa(e,t,i,r){e=null;for(var c=t,u=!1;c!==null;){if(!u){if((c.flags&524288)!==0)u=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var m=c.alternate;if(m===null)throw Error(l(387));if(m=m.memoizedProps,m!==null){var v=c.type;kt(c.pendingProps.value,m.value)||(e!==null?e.push(v):e=[v])}}else if(c===je.current){if(m=c.alternate,m===null)throw Error(l(387));m.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Vs):e=[Vs])}c=c.return}e!==null&&Tc(t,e,i,r),t.flags|=262144}function $l(e){for(e=e.firstContext;e!==null;){if(!kt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Mi(e){Ri=e,xn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function dt(e){return Qh(Ri,e)}function Wl(e,t){return Ri===null&&Mi(e),Qh(e,t)}function Qh(e,t){var i=t._currentValue;if(t={context:t,memoizedValue:i,next:null},xn===null){if(e===null)throw Error(l(308));xn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else xn=xn.next=t;return i}var Ax=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(i,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach(function(i){return i()})}},jx=a.unstable_scheduleCallback,Rx=a.unstable_NormalPriority,We={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ac(){return{controller:new Ax,data:new Map,refCount:0}}function vs(e){e.refCount--,e.refCount===0&&jx(Rx,function(){e.controller.abort()})}var xs=null,jc=0,ma=0,ga=null;function Mx(e,t){if(xs===null){var i=xs=[];jc=0,ma=Du(),ga={status:"pending",value:void 0,then:function(r){i.push(r)}}}return jc++,t.then(Xh,Xh),t}function Xh(){if(--jc===0&&xs!==null){ga!==null&&(ga.status="fulfilled");var e=xs;xs=null,ma=0,ga=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Dx(e,t){var i=[],r={status:"pending",value:null,reason:null,then:function(c){i.push(c)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var c=0;c<i.length;c++)(0,i[c])(t)},function(c){for(r.status="rejected",r.reason=c,c=0;c<i.length;c++)(0,i[c])(void 0)}),r}var Ph=M.S;M.S=function(e,t){Mm=Dt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Mx(e,t),Ph!==null&&Ph(e,t)};var Di=E(null);function Rc(){var e=Di.current;return e!==null?e:Le.pooledCache}function Jl(e,t){t===null?Q(Di,Di.current):Q(Di,t.pool)}function Kh(){var e=Rc();return e===null?null:{parent:We._currentValue,pool:e}}var ya=Error(l(460)),Mc=Error(l(474)),er=Error(l(542)),tr={then:function(){}};function Zh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function $h(e,t,i){switch(i=e[i],i===void 0?e.push(t):i!==t&&(t.then(mn,mn),t=i),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Jh(e),e;default:if(typeof t.status=="string")t.then(mn,mn);else{if(e=Le,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(r){if(t.status==="pending"){var c=t;c.status="fulfilled",c.value=r}},function(r){if(t.status==="pending"){var c=t;c.status="rejected",c.reason=r}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Jh(e),e}throw Oi=t,ya}}function zi(e){try{var t=e._init;return t(e._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(Oi=i,ya):i}}var Oi=null;function Wh(){if(Oi===null)throw Error(l(459));var e=Oi;return Oi=null,e}function Jh(e){if(e===ya||e===er)throw Error(l(483))}var va=null,_s=0;function nr(e){var t=_s;return _s+=1,va===null&&(va=[]),$h(va,e,t)}function bs(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ir(e,t){throw t.$$typeof===b?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ep(e){function t(w,C){if(e){var T=w.deletions;T===null?(w.deletions=[C],w.flags|=16):T.push(C)}}function i(w,C){if(!e)return null;for(;C!==null;)t(w,C),C=C.sibling;return null}function r(w){for(var C=new Map;w!==null;)w.key!==null?C.set(w.key,w):C.set(w.index,w),w=w.sibling;return C}function c(w,C){return w=yn(w,C),w.index=0,w.sibling=null,w}function u(w,C,T){return w.index=T,e?(T=w.alternate,T!==null?(T=T.index,T<C?(w.flags|=67108866,C):T):(w.flags|=67108866,C)):(w.flags|=1048576,C)}function m(w){return e&&w.alternate===null&&(w.flags|=67108866),w}function v(w,C,T,k){return C===null||C.tag!==6?(C=xc(T,w.mode,k),C.return=w,C):(C=c(C,T),C.return=w,C)}function S(w,C,T,k){var te=T.type;return te===U?O(w,C,T.props.children,k,T.key):C!==null&&(C.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===Ce&&zi(te)===C.type)?(C=c(C,T.props),bs(C,T),C.return=w,C):(C=Kl(T.type,T.key,T.props,null,w.mode,k),bs(C,T),C.return=w,C)}function A(w,C,T,k){return C===null||C.tag!==4||C.stateNode.containerInfo!==T.containerInfo||C.stateNode.implementation!==T.implementation?(C=_c(T,w.mode,k),C.return=w,C):(C=c(C,T.children||[]),C.return=w,C)}function O(w,C,T,k,te){return C===null||C.tag!==7?(C=Ai(T,w.mode,k,te),C.return=w,C):(C=c(C,T),C.return=w,C)}function L(w,C,T){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return C=xc(""+C,w.mode,T),C.return=w,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case R:return T=Kl(C.type,C.key,C.props,null,w.mode,T),bs(T,C),T.return=w,T;case z:return C=_c(C,w.mode,T),C.return=w,C;case Ce:return C=zi(C),L(w,C,T)}if(pe(C)||ke(C))return C=Ai(C,w.mode,T,null),C.return=w,C;if(typeof C.then=="function")return L(w,nr(C),T);if(C.$$typeof===I)return L(w,Wl(w,C),T);ir(w,C)}return null}function j(w,C,T,k){var te=C!==null?C.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return te!==null?null:v(w,C,""+T,k);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case R:return T.key===te?S(w,C,T,k):null;case z:return T.key===te?A(w,C,T,k):null;case Ce:return T=zi(T),j(w,C,T,k)}if(pe(T)||ke(T))return te!==null?null:O(w,C,T,k,null);if(typeof T.then=="function")return j(w,C,nr(T),k);if(T.$$typeof===I)return j(w,C,Wl(w,T),k);ir(w,T)}return null}function D(w,C,T,k,te){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return w=w.get(T)||null,v(C,w,""+k,te);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case R:return w=w.get(k.key===null?T:k.key)||null,S(C,w,k,te);case z:return w=w.get(k.key===null?T:k.key)||null,A(C,w,k,te);case Ce:return k=zi(k),D(w,C,T,k,te)}if(pe(k)||ke(k))return w=w.get(T)||null,O(C,w,k,te,null);if(typeof k.then=="function")return D(w,C,T,nr(k),te);if(k.$$typeof===I)return D(w,C,T,Wl(C,k),te);ir(C,k)}return null}function Z(w,C,T,k){for(var te=null,Ne=null,W=C,ue=C=0,be=null;W!==null&&ue<T.length;ue++){W.index>ue?(be=W,W=null):be=W.sibling;var we=j(w,W,T[ue],k);if(we===null){W===null&&(W=be);break}e&&W&&we.alternate===null&&t(w,W),C=u(we,C,ue),Ne===null?te=we:Ne.sibling=we,Ne=we,W=be}if(ue===T.length)return i(w,W),Se&&vn(w,ue),te;if(W===null){for(;ue<T.length;ue++)W=L(w,T[ue],k),W!==null&&(C=u(W,C,ue),Ne===null?te=W:Ne.sibling=W,Ne=W);return Se&&vn(w,ue),te}for(W=r(W);ue<T.length;ue++)be=D(W,w,ue,T[ue],k),be!==null&&(e&&be.alternate!==null&&W.delete(be.key===null?ue:be.key),C=u(be,C,ue),Ne===null?te=be:Ne.sibling=be,Ne=be);return e&&W.forEach(function(hi){return t(w,hi)}),Se&&vn(w,ue),te}function ie(w,C,T,k){if(T==null)throw Error(l(151));for(var te=null,Ne=null,W=C,ue=C=0,be=null,we=T.next();W!==null&&!we.done;ue++,we=T.next()){W.index>ue?(be=W,W=null):be=W.sibling;var hi=j(w,W,we.value,k);if(hi===null){W===null&&(W=be);break}e&&W&&hi.alternate===null&&t(w,W),C=u(hi,C,ue),Ne===null?te=hi:Ne.sibling=hi,Ne=hi,W=be}if(we.done)return i(w,W),Se&&vn(w,ue),te;if(W===null){for(;!we.done;ue++,we=T.next())we=L(w,we.value,k),we!==null&&(C=u(we,C,ue),Ne===null?te=we:Ne.sibling=we,Ne=we);return Se&&vn(w,ue),te}for(W=r(W);!we.done;ue++,we=T.next())we=D(W,w,ue,we.value,k),we!==null&&(e&&we.alternate!==null&&W.delete(we.key===null?ue:we.key),C=u(we,C,ue),Ne===null?te=we:Ne.sibling=we,Ne=we);return e&&W.forEach(function(G_){return t(w,G_)}),Se&&vn(w,ue),te}function Oe(w,C,T,k){if(typeof T=="object"&&T!==null&&T.type===U&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case R:e:{for(var te=T.key;C!==null;){if(C.key===te){if(te=T.type,te===U){if(C.tag===7){i(w,C.sibling),k=c(C,T.props.children),k.return=w,w=k;break e}}else if(C.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===Ce&&zi(te)===C.type){i(w,C.sibling),k=c(C,T.props),bs(k,T),k.return=w,w=k;break e}i(w,C);break}else t(w,C);C=C.sibling}T.type===U?(k=Ai(T.props.children,w.mode,k,T.key),k.return=w,w=k):(k=Kl(T.type,T.key,T.props,null,w.mode,k),bs(k,T),k.return=w,w=k)}return m(w);case z:e:{for(te=T.key;C!==null;){if(C.key===te)if(C.tag===4&&C.stateNode.containerInfo===T.containerInfo&&C.stateNode.implementation===T.implementation){i(w,C.sibling),k=c(C,T.children||[]),k.return=w,w=k;break e}else{i(w,C);break}else t(w,C);C=C.sibling}k=_c(T,w.mode,k),k.return=w,w=k}return m(w);case Ce:return T=zi(T),Oe(w,C,T,k)}if(pe(T))return Z(w,C,T,k);if(ke(T)){if(te=ke(T),typeof te!="function")throw Error(l(150));return T=te.call(T),ie(w,C,T,k)}if(typeof T.then=="function")return Oe(w,C,nr(T),k);if(T.$$typeof===I)return Oe(w,C,Wl(w,T),k);ir(w,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,C!==null&&C.tag===6?(i(w,C.sibling),k=c(C,T),k.return=w,w=k):(i(w,C),k=xc(T,w.mode,k),k.return=w,w=k),m(w)):i(w,C)}return function(w,C,T,k){try{_s=0;var te=Oe(w,C,T,k);return va=null,te}catch(W){if(W===ya||W===er)throw W;var Ne=Lt(29,W,null,w.mode);return Ne.lanes=k,Ne.return=w,Ne}}}var ki=ep(!0),tp=ep(!1),Zn=!1;function Dc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function $n(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Wn(e,t,i){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Te&2)!==0){var c=r.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),r.pending=t,t=Pl(e),Uh(e,null,i),t}return Xl(e,r,t,i),Pl(e)}function Ss(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194048)!==0)){var r=t.lanes;r&=e.pendingLanes,i|=r,t.lanes=i,Qf(e,i)}}function Oc(e,t){var i=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,i===r)){var c=null,u=null;if(i=i.firstBaseUpdate,i!==null){do{var m={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};u===null?c=u=m:u=u.next=m,i=i.next}while(i!==null);u===null?c=u=t:u=u.next=t}else c=u=t;i={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:u,shared:r.shared,callbacks:r.callbacks},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}var kc=!1;function Cs(){if(kc){var e=ga;if(e!==null)throw e}}function Es(e,t,i,r){kc=!1;var c=e.updateQueue;Zn=!1;var u=c.firstBaseUpdate,m=c.lastBaseUpdate,v=c.shared.pending;if(v!==null){c.shared.pending=null;var S=v,A=S.next;S.next=null,m===null?u=A:m.next=A,m=S;var O=e.alternate;O!==null&&(O=O.updateQueue,v=O.lastBaseUpdate,v!==m&&(v===null?O.firstBaseUpdate=A:v.next=A,O.lastBaseUpdate=S))}if(u!==null){var L=c.baseState;m=0,O=A=S=null,v=u;do{var j=v.lane&-536870913,D=j!==v.lane;if(D?(_e&j)===j:(r&j)===j){j!==0&&j===ma&&(kc=!0),O!==null&&(O=O.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var Z=e,ie=v;j=t;var Oe=i;switch(ie.tag){case 1:if(Z=ie.payload,typeof Z=="function"){L=Z.call(Oe,L,j);break e}L=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=ie.payload,j=typeof Z=="function"?Z.call(Oe,L,j):Z,j==null)break e;L=x({},L,j);break e;case 2:Zn=!0}}j=v.callback,j!==null&&(e.flags|=64,D&&(e.flags|=8192),D=c.callbacks,D===null?c.callbacks=[j]:D.push(j))}else D={lane:j,tag:v.tag,payload:v.payload,callback:v.callback,next:null},O===null?(A=O=D,S=L):O=O.next=D,m|=j;if(v=v.next,v===null){if(v=c.shared.pending,v===null)break;D=v,v=D.next,D.next=null,c.lastBaseUpdate=D,c.shared.pending=null}}while(!0);O===null&&(S=L),c.baseState=S,c.firstBaseUpdate=A,c.lastBaseUpdate=O,u===null&&(c.shared.lanes=0),ii|=m,e.lanes=m,e.memoizedState=L}}function np(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function ip(e,t){var i=e.callbacks;if(i!==null)for(e.callbacks=null,e=0;e<i.length;e++)np(i[e],t)}var xa=E(null),ar=E(0);function ap(e,t){e=jn,Q(ar,e),Q(xa,t),jn=e|t.baseLanes}function Lc(){Q(ar,jn),Q(xa,xa.current)}function Bc(){jn=ar.current,B(xa),B(ar)}var Bt=E(null),Kt=null;function Jn(e){var t=e.alternate;Q(Ze,Ze.current&1),Q(Bt,e),Kt===null&&(t===null||xa.current!==null||t.memoizedState!==null)&&(Kt=e)}function Uc(e){Q(Ze,Ze.current),Q(Bt,e),Kt===null&&(Kt=e)}function sp(e){e.tag===22?(Q(Ze,Ze.current),Q(Bt,e),Kt===null&&(Kt=e)):ei()}function ei(){Q(Ze,Ze.current),Q(Bt,Bt.current)}function Ut(e){B(Bt),Kt===e&&(Kt=null),B(Ze)}var Ze=E(0);function sr(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Vu(i)||Fu(i)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var bn=0,ce=null,De=null,Je=null,lr=!1,_a=!1,Li=!1,rr=0,Ns=0,ba=null,zx=0;function Fe(){throw Error(l(321))}function Ic(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!kt(e[i],t[i]))return!1;return!0}function Hc(e,t,i,r,c,u){return bn=u,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?Yp:tu,Li=!1,u=i(r,c),Li=!1,_a&&(u=rp(t,i,r,c)),lp(e),u}function lp(e){M.H=As;var t=De!==null&&De.next!==null;if(bn=0,Je=De=ce=null,lr=!1,Ns=0,ba=null,t)throw Error(l(300));e===null||et||(e=e.dependencies,e!==null&&$l(e)&&(et=!0))}function rp(e,t,i,r){ce=e;var c=0;do{if(_a&&(ba=null),Ns=0,_a=!1,25<=c)throw Error(l(301));if(c+=1,Je=De=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}M.H=Gp,u=t(i,r)}while(_a);return u}function Ox(){var e=M.H,t=e.useState()[0];return t=typeof t.then=="function"?ws(t):t,e=e.useState()[0],(De!==null?De.memoizedState:null)!==e&&(ce.flags|=1024),t}function qc(){var e=rr!==0;return rr=0,e}function Yc(e,t,i){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i}function Gc(e){if(lr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}lr=!1}bn=0,Je=De=ce=null,_a=!1,Ns=rr=0,ba=null}function _t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?ce.memoizedState=Je=e:Je=Je.next=e,Je}function $e(){if(De===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=Je===null?ce.memoizedState:Je.next;if(t!==null)Je=t,De=e;else{if(e===null)throw ce.alternate===null?Error(l(467)):Error(l(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Je===null?ce.memoizedState=Je=e:Je=Je.next=e}return Je}function or(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ws(e){var t=Ns;return Ns+=1,ba===null&&(ba=[]),e=$h(ba,e,t),t=ce,(Je===null?t.memoizedState:Je.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?Yp:tu),e}function cr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ws(e);if(e.$$typeof===I)return dt(e)}throw Error(l(438,String(e)))}function Vc(e){var t=null,i=ce.updateQueue;if(i!==null&&(t=i.memoCache),t==null){var r=ce.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(c){return c.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),i===null&&(i=or(),ce.updateQueue=i),i.memoCache=t,i=t.data[t.index],i===void 0)for(i=t.data[t.index]=Array(e),r=0;r<e;r++)i[r]=ae;return t.index++,i}function Sn(e,t){return typeof t=="function"?t(e):t}function ur(e){var t=$e();return Fc(t,De,e)}function Fc(e,t,i){var r=e.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=i;var c=e.baseQueue,u=r.pending;if(u!==null){if(c!==null){var m=c.next;c.next=u.next,u.next=m}t.baseQueue=c=u,r.pending=null}if(u=e.baseState,c===null)e.memoizedState=u;else{t=c.next;var v=m=null,S=null,A=t,O=!1;do{var L=A.lane&-536870913;if(L!==A.lane?(_e&L)===L:(bn&L)===L){var j=A.revertLane;if(j===0)S!==null&&(S=S.next={lane:0,revertLane:0,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),L===ma&&(O=!0);else if((bn&j)===j){A=A.next,j===ma&&(O=!0);continue}else L={lane:0,revertLane:A.revertLane,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},S===null?(v=S=L,m=u):S=S.next=L,ce.lanes|=j,ii|=j;L=A.action,Li&&i(u,L),u=A.hasEagerState?A.eagerState:i(u,L)}else j={lane:L,revertLane:A.revertLane,gesture:A.gesture,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},S===null?(v=S=j,m=u):S=S.next=j,ce.lanes|=L,ii|=L;A=A.next}while(A!==null&&A!==t);if(S===null?m=u:S.next=v,!kt(u,e.memoizedState)&&(et=!0,O&&(i=ga,i!==null)))throw i;e.memoizedState=u,e.baseState=m,e.baseQueue=S,r.lastRenderedState=u}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Qc(e){var t=$e(),i=t.queue;if(i===null)throw Error(l(311));i.lastRenderedReducer=e;var r=i.dispatch,c=i.pending,u=t.memoizedState;if(c!==null){i.pending=null;var m=c=c.next;do u=e(u,m.action),m=m.next;while(m!==c);kt(u,t.memoizedState)||(et=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),i.lastRenderedState=u}return[u,r]}function op(e,t,i){var r=ce,c=$e(),u=Se;if(u){if(i===void 0)throw Error(l(407));i=i()}else i=t();var m=!kt((De||c).memoizedState,i);if(m&&(c.memoizedState=i,et=!0),c=c.queue,Kc(dp.bind(null,r,c,e),[e]),c.getSnapshot!==t||m||Je!==null&&Je.memoizedState.tag&1){if(r.flags|=2048,Sa(9,{destroy:void 0},up.bind(null,r,c,i,t),null),Le===null)throw Error(l(349));u||(bn&127)!==0||cp(r,t,i)}return i}function cp(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=ce.updateQueue,t===null?(t=or(),ce.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function up(e,t,i,r){t.value=i,t.getSnapshot=r,fp(t)&&hp(e)}function dp(e,t,i){return i(function(){fp(t)&&hp(e)})}function fp(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!kt(e,i)}catch{return!0}}function hp(e){var t=Ti(e,2);t!==null&&Tt(t,e,2)}function Xc(e){var t=_t();if(typeof e=="function"){var i=e;if(e=i(),Li){Gn(!0);try{i()}finally{Gn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sn,lastRenderedState:e},t}function pp(e,t,i,r){return e.baseState=i,Fc(e,De,typeof r=="function"?r:Sn)}function kx(e,t,i,r,c){if(hr(e))throw Error(l(485));if(e=t.action,e!==null){var u={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){u.listeners.push(m)}};M.T!==null?i(!0):u.isTransition=!1,r(u),i=t.pending,i===null?(u.next=t.pending=u,mp(t,u)):(u.next=i.next,t.pending=i.next=u)}}function mp(e,t){var i=t.action,r=t.payload,c=e.state;if(t.isTransition){var u=M.T,m={};M.T=m;try{var v=i(c,r),S=M.S;S!==null&&S(m,v),gp(e,t,v)}catch(A){Pc(e,t,A)}finally{u!==null&&m.types!==null&&(u.types=m.types),M.T=u}}else try{u=i(c,r),gp(e,t,u)}catch(A){Pc(e,t,A)}}function gp(e,t,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(r){yp(e,t,r)},function(r){return Pc(e,t,r)}):yp(e,t,i)}function yp(e,t,i){t.status="fulfilled",t.value=i,vp(t),e.state=i,t=e.pending,t!==null&&(i=t.next,i===t?e.pending=null:(i=i.next,t.next=i,mp(e,i)))}function Pc(e,t,i){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status="rejected",t.reason=i,vp(t),t=t.next;while(t!==r)}e.action=null}function vp(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function xp(e,t){return t}function _p(e,t){if(Se){var i=Le.formState;if(i!==null){e:{var r=ce;if(Se){if(He){t:{for(var c=He,u=Pt;c.nodeType!==8;){if(!u){c=null;break t}if(c=Zt(c.nextSibling),c===null){c=null;break t}}u=c.data,c=u==="F!"||u==="F"?c:null}if(c){He=Zt(c.nextSibling),r=c.data==="F!";break e}}Pn(r)}r=!1}r&&(t=i[0])}}return i=_t(),i.memoizedState=i.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xp,lastRenderedState:t},i.queue=r,i=Ip.bind(null,ce,r),r.dispatch=i,r=Xc(!1),u=eu.bind(null,ce,!1,r.queue),r=_t(),c={state:t,dispatch:null,action:e,pending:null},r.queue=c,i=kx.bind(null,ce,c,u,i),c.dispatch=i,r.memoizedState=e,[t,i,!1]}function bp(e){var t=$e();return Sp(t,De,e)}function Sp(e,t,i){if(t=Fc(e,t,xp)[0],e=ur(Sn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var r=ws(t)}catch(m){throw m===ya?er:m}else r=t;t=$e();var c=t.queue,u=c.dispatch;return i!==t.memoizedState&&(ce.flags|=2048,Sa(9,{destroy:void 0},Lx.bind(null,c,i),null)),[r,u,e]}function Lx(e,t){e.action=t}function Cp(e){var t=$e(),i=De;if(i!==null)return Sp(t,i,e);$e(),t=t.memoizedState,i=$e();var r=i.queue.dispatch;return i.memoizedState=e,[t,r,!1]}function Sa(e,t,i,r){return e={tag:e,create:i,deps:r,inst:t,next:null},t=ce.updateQueue,t===null&&(t=or(),ce.updateQueue=t),i=t.lastEffect,i===null?t.lastEffect=e.next=e:(r=i.next,i.next=e,e.next=r,t.lastEffect=e),e}function Ep(){return $e().memoizedState}function dr(e,t,i,r){var c=_t();ce.flags|=e,c.memoizedState=Sa(1|t,{destroy:void 0},i,r===void 0?null:r)}function fr(e,t,i,r){var c=$e();r=r===void 0?null:r;var u=c.memoizedState.inst;De!==null&&r!==null&&Ic(r,De.memoizedState.deps)?c.memoizedState=Sa(t,u,i,r):(ce.flags|=e,c.memoizedState=Sa(1|t,u,i,r))}function Np(e,t){dr(8390656,8,e,t)}function Kc(e,t){fr(2048,8,e,t)}function Bx(e){ce.flags|=4;var t=ce.updateQueue;if(t===null)t=or(),ce.updateQueue=t,t.events=[e];else{var i=t.events;i===null?t.events=[e]:i.push(e)}}function wp(e){var t=$e().memoizedState;return Bx({ref:t,nextImpl:e}),function(){if((Te&2)!==0)throw Error(l(440));return t.impl.apply(void 0,arguments)}}function Tp(e,t){return fr(4,2,e,t)}function Ap(e,t){return fr(4,4,e,t)}function jp(e,t){if(typeof t=="function"){e=e();var i=t(e);return function(){typeof i=="function"?i():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rp(e,t,i){i=i!=null?i.concat([e]):null,fr(4,4,jp.bind(null,t,e),i)}function Zc(){}function Mp(e,t){var i=$e();t=t===void 0?null:t;var r=i.memoizedState;return t!==null&&Ic(t,r[1])?r[0]:(i.memoizedState=[e,t],e)}function Dp(e,t){var i=$e();t=t===void 0?null:t;var r=i.memoizedState;if(t!==null&&Ic(t,r[1]))return r[0];if(r=e(),Li){Gn(!0);try{e()}finally{Gn(!1)}}return i.memoizedState=[r,t],r}function $c(e,t,i){return i===void 0||(bn&1073741824)!==0&&(_e&261930)===0?e.memoizedState=t:(e.memoizedState=i,e=zm(),ce.lanes|=e,ii|=e,i)}function zp(e,t,i,r){return kt(i,t)?i:xa.current!==null?(e=$c(e,i,r),kt(e,t)||(et=!0),e):(bn&42)===0||(bn&1073741824)!==0&&(_e&261930)===0?(et=!0,e.memoizedState=i):(e=zm(),ce.lanes|=e,ii|=e,t)}function Op(e,t,i,r,c){var u=q.p;q.p=u!==0&&8>u?u:8;var m=M.T,v={};M.T=v,eu(e,!1,t,i);try{var S=c(),A=M.S;if(A!==null&&A(v,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var O=Dx(S,r);Ts(e,t,O,qt(e))}else Ts(e,t,r,qt(e))}catch(L){Ts(e,t,{then:function(){},status:"rejected",reason:L},qt())}finally{q.p=u,m!==null&&v.types!==null&&(m.types=v.types),M.T=m}}function Ux(){}function Wc(e,t,i,r){if(e.tag!==5)throw Error(l(476));var c=kp(e).queue;Op(e,c,t,ne,i===null?Ux:function(){return Lp(e),i(r)})}function kp(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sn,lastRenderedState:ne},next:null};var i={};return t.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sn,lastRenderedState:i},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Lp(e){var t=kp(e);t.next===null&&(t=e.alternate.memoizedState),Ts(e,t.next.queue,{},qt())}function Jc(){return dt(Vs)}function Bp(){return $e().memoizedState}function Up(){return $e().memoizedState}function Ix(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var i=qt();e=$n(i);var r=Wn(t,e,i);r!==null&&(Tt(r,t,i),Ss(r,t,i)),t={cache:Ac()},e.payload=t;return}t=t.return}}function Hx(e,t,i){var r=qt();i={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},hr(e)?Hp(t,i):(i=yc(e,t,i,r),i!==null&&(Tt(i,e,r),qp(i,t,r)))}function Ip(e,t,i){var r=qt();Ts(e,t,i,r)}function Ts(e,t,i,r){var c={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(hr(e))Hp(t,c);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var m=t.lastRenderedState,v=u(m,i);if(c.hasEagerState=!0,c.eagerState=v,kt(v,m))return Xl(e,t,c,0),Le===null&&Ql(),!1}catch{}if(i=yc(e,t,c,r),i!==null)return Tt(i,e,r),qp(i,t,r),!0}return!1}function eu(e,t,i,r){if(r={lane:2,revertLane:Du(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},hr(e)){if(t)throw Error(l(479))}else t=yc(e,i,r,2),t!==null&&Tt(t,e,2)}function hr(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function Hp(e,t){_a=lr=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function qp(e,t,i){if((i&4194048)!==0){var r=t.lanes;r&=e.pendingLanes,i|=r,t.lanes=i,Qf(e,i)}}var As={readContext:dt,use:cr,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useLayoutEffect:Fe,useInsertionEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useSyncExternalStore:Fe,useId:Fe,useHostTransitionStatus:Fe,useFormState:Fe,useActionState:Fe,useOptimistic:Fe,useMemoCache:Fe,useCacheRefresh:Fe};As.useEffectEvent=Fe;var Yp={readContext:dt,use:cr,useCallback:function(e,t){return _t().memoizedState=[e,t===void 0?null:t],e},useContext:dt,useEffect:Np,useImperativeHandle:function(e,t,i){i=i!=null?i.concat([e]):null,dr(4194308,4,jp.bind(null,t,e),i)},useLayoutEffect:function(e,t){return dr(4194308,4,e,t)},useInsertionEffect:function(e,t){dr(4,2,e,t)},useMemo:function(e,t){var i=_t();t=t===void 0?null:t;var r=e();if(Li){Gn(!0);try{e()}finally{Gn(!1)}}return i.memoizedState=[r,t],r},useReducer:function(e,t,i){var r=_t();if(i!==void 0){var c=i(t);if(Li){Gn(!0);try{i(t)}finally{Gn(!1)}}}else c=t;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=Hx.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var t=_t();return e={current:e},t.memoizedState=e},useState:function(e){e=Xc(e);var t=e.queue,i=Ip.bind(null,ce,t);return t.dispatch=i,[e.memoizedState,i]},useDebugValue:Zc,useDeferredValue:function(e,t){var i=_t();return $c(i,e,t)},useTransition:function(){var e=Xc(!1);return e=Op.bind(null,ce,e.queue,!0,!1),_t().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,i){var r=ce,c=_t();if(Se){if(i===void 0)throw Error(l(407));i=i()}else{if(i=t(),Le===null)throw Error(l(349));(_e&127)!==0||cp(r,t,i)}c.memoizedState=i;var u={value:i,getSnapshot:t};return c.queue=u,Np(dp.bind(null,r,u,e),[e]),r.flags|=2048,Sa(9,{destroy:void 0},up.bind(null,r,u,i,t),null),i},useId:function(){var e=_t(),t=Le.identifierPrefix;if(Se){var i=cn,r=on;i=(r&~(1<<32-Ot(r)-1)).toString(32)+i,t="_"+t+"R_"+i,i=rr++,0<i&&(t+="H"+i.toString(32)),t+="_"}else i=zx++,t="_"+t+"r_"+i.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Jc,useFormState:_p,useActionState:_p,useOptimistic:function(e){var t=_t();t.memoizedState=t.baseState=e;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=i,t=eu.bind(null,ce,!0,i),i.dispatch=t,[e,t]},useMemoCache:Vc,useCacheRefresh:function(){return _t().memoizedState=Ix.bind(null,ce)},useEffectEvent:function(e){var t=_t(),i={impl:e};return t.memoizedState=i,function(){if((Te&2)!==0)throw Error(l(440));return i.impl.apply(void 0,arguments)}}},tu={readContext:dt,use:cr,useCallback:Mp,useContext:dt,useEffect:Kc,useImperativeHandle:Rp,useInsertionEffect:Tp,useLayoutEffect:Ap,useMemo:Dp,useReducer:ur,useRef:Ep,useState:function(){return ur(Sn)},useDebugValue:Zc,useDeferredValue:function(e,t){var i=$e();return zp(i,De.memoizedState,e,t)},useTransition:function(){var e=ur(Sn)[0],t=$e().memoizedState;return[typeof e=="boolean"?e:ws(e),t]},useSyncExternalStore:op,useId:Bp,useHostTransitionStatus:Jc,useFormState:bp,useActionState:bp,useOptimistic:function(e,t){var i=$e();return pp(i,De,e,t)},useMemoCache:Vc,useCacheRefresh:Up};tu.useEffectEvent=wp;var Gp={readContext:dt,use:cr,useCallback:Mp,useContext:dt,useEffect:Kc,useImperativeHandle:Rp,useInsertionEffect:Tp,useLayoutEffect:Ap,useMemo:Dp,useReducer:Qc,useRef:Ep,useState:function(){return Qc(Sn)},useDebugValue:Zc,useDeferredValue:function(e,t){var i=$e();return De===null?$c(i,e,t):zp(i,De.memoizedState,e,t)},useTransition:function(){var e=Qc(Sn)[0],t=$e().memoizedState;return[typeof e=="boolean"?e:ws(e),t]},useSyncExternalStore:op,useId:Bp,useHostTransitionStatus:Jc,useFormState:Cp,useActionState:Cp,useOptimistic:function(e,t){var i=$e();return De!==null?pp(i,De,e,t):(i.baseState=e,[e,i.queue.dispatch])},useMemoCache:Vc,useCacheRefresh:Up};Gp.useEffectEvent=wp;function nu(e,t,i,r){t=e.memoizedState,i=i(r,t),i=i==null?t:x({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var iu={enqueueSetState:function(e,t,i){e=e._reactInternals;var r=qt(),c=$n(r);c.payload=t,i!=null&&(c.callback=i),t=Wn(e,c,r),t!==null&&(Tt(t,e,r),Ss(t,e,r))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var r=qt(),c=$n(r);c.tag=1,c.payload=t,i!=null&&(c.callback=i),t=Wn(e,c,r),t!==null&&(Tt(t,e,r),Ss(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=qt(),r=$n(i);r.tag=2,t!=null&&(r.callback=t),t=Wn(e,r,i),t!==null&&(Tt(t,e,i),Ss(t,e,i))}};function Vp(e,t,i,r,c,u,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,u,m):t.prototype&&t.prototype.isPureReactComponent?!ps(i,r)||!ps(c,u):!0}function Fp(e,t,i,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,r),t.state!==e&&iu.enqueueReplaceState(t,t.state,null)}function Bi(e,t){var i=t;if("ref"in t){i={};for(var r in t)r!=="ref"&&(i[r]=t[r])}if(e=e.defaultProps){i===t&&(i=x({},i));for(var c in e)i[c]===void 0&&(i[c]=e[c])}return i}function Qp(e){Fl(e)}function Xp(e){console.error(e)}function Pp(e){Fl(e)}function pr(e,t){try{var i=e.onUncaughtError;i(t.value,{componentStack:t.stack})}catch(r){setTimeout(function(){throw r})}}function Kp(e,t,i){try{var r=e.onCaughtError;r(i.value,{componentStack:i.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function au(e,t,i){return i=$n(i),i.tag=3,i.payload={element:null},i.callback=function(){pr(e,t)},i}function Zp(e){return e=$n(e),e.tag=3,e}function $p(e,t,i,r){var c=i.type.getDerivedStateFromError;if(typeof c=="function"){var u=r.value;e.payload=function(){return c(u)},e.callback=function(){Kp(t,i,r)}}var m=i.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){Kp(t,i,r),typeof c!="function"&&(ai===null?ai=new Set([this]):ai.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})})}function qx(e,t,i,r,c){if(i.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(t=i.alternate,t!==null&&pa(t,i,c,!0),i=Bt.current,i!==null){switch(i.tag){case 31:case 13:return Kt===null?wr():i.alternate===null&&Qe===0&&(Qe=3),i.flags&=-257,i.flags|=65536,i.lanes=c,r===tr?i.flags|=16384:(t=i.updateQueue,t===null?i.updateQueue=new Set([r]):t.add(r),ju(e,r,c)),!1;case 22:return i.flags|=65536,r===tr?i.flags|=16384:(t=i.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},i.updateQueue=t):(i=t.retryQueue,i===null?t.retryQueue=new Set([r]):i.add(r)),ju(e,r,c)),!1}throw Error(l(435,i.tag))}return ju(e,r,c),wr(),!1}if(Se)return t=Bt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=c,r!==Cc&&(e=Error(l(422),{cause:r}),ys(Ft(e,i)))):(r!==Cc&&(t=Error(l(423),{cause:r}),ys(Ft(t,i))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=Ft(r,i),c=au(e.stateNode,r,c),Oc(e,c),Qe!==4&&(Qe=2)),!1;var u=Error(l(520),{cause:r});if(u=Ft(u,i),Ls===null?Ls=[u]:Ls.push(u),Qe!==4&&(Qe=2),t===null)return!0;r=Ft(r,i),i=t;do{switch(i.tag){case 3:return i.flags|=65536,e=c&-c,i.lanes|=e,e=au(i.stateNode,r,e),Oc(i,e),!1;case 1:if(t=i.type,u=i.stateNode,(i.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(ai===null||!ai.has(u))))return i.flags|=65536,c&=-c,i.lanes|=c,c=Zp(c),$p(c,e,i,r),Oc(i,c),!1}i=i.return}while(i!==null);return!1}var su=Error(l(461)),et=!1;function ft(e,t,i,r){t.child=e===null?tp(t,null,i,r):ki(t,e.child,i,r)}function Wp(e,t,i,r,c){i=i.render;var u=t.ref;if("ref"in r){var m={};for(var v in r)v!=="ref"&&(m[v]=r[v])}else m=r;return Mi(t),r=Hc(e,t,i,m,u,c),v=qc(),e!==null&&!et?(Yc(e,t,c),Cn(e,t,c)):(Se&&v&&bc(t),t.flags|=1,ft(e,t,r,c),t.child)}function Jp(e,t,i,r,c){if(e===null){var u=i.type;return typeof u=="function"&&!vc(u)&&u.defaultProps===void 0&&i.compare===null?(t.tag=15,t.type=u,em(e,t,u,r,c)):(e=Kl(i.type,null,r,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!hu(e,c)){var m=u.memoizedProps;if(i=i.compare,i=i!==null?i:ps,i(m,r)&&e.ref===t.ref)return Cn(e,t,c)}return t.flags|=1,e=yn(u,r),e.ref=t.ref,e.return=t,t.child=e}function em(e,t,i,r,c){if(e!==null){var u=e.memoizedProps;if(ps(u,r)&&e.ref===t.ref)if(et=!1,t.pendingProps=r=u,hu(e,c))(e.flags&131072)!==0&&(et=!0);else return t.lanes=e.lanes,Cn(e,t,c)}return lu(e,t,i,r,c)}function tm(e,t,i,r){var c=r.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|i:i,e!==null){for(r=t.child=e.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~u}else r=0,t.child=null;return nm(e,t,u,i,r)}if((i&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Jl(t,u!==null?u.cachePool:null),u!==null?ap(t,u):Lc(),sp(t);else return r=t.lanes=536870912,nm(e,t,u!==null?u.baseLanes|i:i,i,r)}else u!==null?(Jl(t,u.cachePool),ap(t,u),ei(),t.memoizedState=null):(e!==null&&Jl(t,null),Lc(),ei());return ft(e,t,c,i),t.child}function js(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function nm(e,t,i,r,c){var u=Rc();return u=u===null?null:{parent:We._currentValue,pool:u},t.memoizedState={baseLanes:i,cachePool:u},e!==null&&Jl(t,null),Lc(),sp(t),e!==null&&pa(e,t,r,!0),t.childLanes=c,null}function mr(e,t){return t=yr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function im(e,t,i){return ki(t,e.child,null,i),e=mr(t,t.pendingProps),e.flags|=2,Ut(t),t.memoizedState=null,e}function Yx(e,t,i){var r=t.pendingProps,c=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Se){if(r.mode==="hidden")return e=mr(t,r),t.lanes=536870912,js(null,e);if(Uc(t),(e=He)?(e=mg(e,Pt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Qn!==null?{id:on,overflow:cn}:null,retryLane:536870912,hydrationErrors:null},i=Hh(e),i.return=t,t.child=i,ut=t,He=null)):e=null,e===null)throw Pn(t);return t.lanes=536870912,null}return mr(t,r)}var u=e.memoizedState;if(u!==null){var m=u.dehydrated;if(Uc(t),c)if(t.flags&256)t.flags&=-257,t=im(e,t,i);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(l(558));else if(et||pa(e,t,i,!1),c=(i&e.childLanes)!==0,et||c){if(r=Le,r!==null&&(m=Xf(r,i),m!==0&&m!==u.retryLane))throw u.retryLane=m,Ti(e,m),Tt(r,e,m),su;wr(),t=im(e,t,i)}else e=u.treeContext,He=Zt(m.nextSibling),ut=t,Se=!0,Xn=null,Pt=!1,e!==null&&Gh(t,e),t=mr(t,r),t.flags|=4096;return t}return e=yn(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function gr(e,t){var i=t.ref;if(i===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(l(284));(e===null||e.ref!==i)&&(t.flags|=4194816)}}function lu(e,t,i,r,c){return Mi(t),i=Hc(e,t,i,r,void 0,c),r=qc(),e!==null&&!et?(Yc(e,t,c),Cn(e,t,c)):(Se&&r&&bc(t),t.flags|=1,ft(e,t,i,c),t.child)}function am(e,t,i,r,c,u){return Mi(t),t.updateQueue=null,i=rp(t,r,i,c),lp(e),r=qc(),e!==null&&!et?(Yc(e,t,u),Cn(e,t,u)):(Se&&r&&bc(t),t.flags|=1,ft(e,t,i,u),t.child)}function sm(e,t,i,r,c){if(Mi(t),t.stateNode===null){var u=ua,m=i.contextType;typeof m=="object"&&m!==null&&(u=dt(m)),u=new i(r,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=iu,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=r,u.state=t.memoizedState,u.refs={},Dc(t),m=i.contextType,u.context=typeof m=="object"&&m!==null?dt(m):ua,u.state=t.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(nu(t,i,m,r),u.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(m=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),m!==u.state&&iu.enqueueReplaceState(u,u.state,null),Es(t,r,u,c),Cs(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),r=!0}else if(e===null){u=t.stateNode;var v=t.memoizedProps,S=Bi(i,v);u.props=S;var A=u.context,O=i.contextType;m=ua,typeof O=="object"&&O!==null&&(m=dt(O));var L=i.getDerivedStateFromProps;O=typeof L=="function"||typeof u.getSnapshotBeforeUpdate=="function",v=t.pendingProps!==v,O||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(v||A!==m)&&Fp(t,u,r,m),Zn=!1;var j=t.memoizedState;u.state=j,Es(t,r,u,c),Cs(),A=t.memoizedState,v||j!==A||Zn?(typeof L=="function"&&(nu(t,i,L,r),A=t.memoizedState),(S=Zn||Vp(t,i,S,r,j,A,m))?(O||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=A),u.props=r,u.state=A,u.context=m,r=S):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{u=t.stateNode,zc(e,t),m=t.memoizedProps,O=Bi(i,m),u.props=O,L=t.pendingProps,j=u.context,A=i.contextType,S=ua,typeof A=="object"&&A!==null&&(S=dt(A)),v=i.getDerivedStateFromProps,(A=typeof v=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(m!==L||j!==S)&&Fp(t,u,r,S),Zn=!1,j=t.memoizedState,u.state=j,Es(t,r,u,c),Cs();var D=t.memoizedState;m!==L||j!==D||Zn||e!==null&&e.dependencies!==null&&$l(e.dependencies)?(typeof v=="function"&&(nu(t,i,v,r),D=t.memoizedState),(O=Zn||Vp(t,i,O,r,j,D,S)||e!==null&&e.dependencies!==null&&$l(e.dependencies))?(A||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,D,S),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,D,S)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=D),u.props=r,u.state=D,u.context=S,r=O):(typeof u.componentDidUpdate!="function"||m===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),r=!1)}return u=r,gr(e,t),r=(t.flags&128)!==0,u||r?(u=t.stateNode,i=r&&typeof i.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&r?(t.child=ki(t,e.child,null,c),t.child=ki(t,null,i,c)):ft(e,t,i,c),t.memoizedState=u.state,e=t.child):e=Cn(e,t,c),e}function lm(e,t,i,r){return ji(),t.flags|=256,ft(e,t,i,r),t.child}var ru={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ou(e){return{baseLanes:e,cachePool:Kh()}}function cu(e,t,i){return e=e!==null?e.childLanes&~i:0,t&&(e|=Ht),e}function rm(e,t,i){var r=t.pendingProps,c=!1,u=(t.flags&128)!==0,m;if((m=u)||(m=e!==null&&e.memoizedState===null?!1:(Ze.current&2)!==0),m&&(c=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(Se){if(c?Jn(t):ei(),(e=He)?(e=mg(e,Pt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Qn!==null?{id:on,overflow:cn}:null,retryLane:536870912,hydrationErrors:null},i=Hh(e),i.return=t,t.child=i,ut=t,He=null)):e=null,e===null)throw Pn(t);return Fu(e)?t.lanes=32:t.lanes=536870912,null}var v=r.children;return r=r.fallback,c?(ei(),c=t.mode,v=yr({mode:"hidden",children:v},c),r=Ai(r,c,i,null),v.return=t,r.return=t,v.sibling=r,t.child=v,r=t.child,r.memoizedState=ou(i),r.childLanes=cu(e,m,i),t.memoizedState=ru,js(null,r)):(Jn(t),uu(t,v))}var S=e.memoizedState;if(S!==null&&(v=S.dehydrated,v!==null)){if(u)t.flags&256?(Jn(t),t.flags&=-257,t=du(e,t,i)):t.memoizedState!==null?(ei(),t.child=e.child,t.flags|=128,t=null):(ei(),v=r.fallback,c=t.mode,r=yr({mode:"visible",children:r.children},c),v=Ai(v,c,i,null),v.flags|=2,r.return=t,v.return=t,r.sibling=v,t.child=r,ki(t,e.child,null,i),r=t.child,r.memoizedState=ou(i),r.childLanes=cu(e,m,i),t.memoizedState=ru,t=js(null,r));else if(Jn(t),Fu(v)){if(m=v.nextSibling&&v.nextSibling.dataset,m)var A=m.dgst;m=A,r=Error(l(419)),r.stack="",r.digest=m,ys({value:r,source:null,stack:null}),t=du(e,t,i)}else if(et||pa(e,t,i,!1),m=(i&e.childLanes)!==0,et||m){if(m=Le,m!==null&&(r=Xf(m,i),r!==0&&r!==S.retryLane))throw S.retryLane=r,Ti(e,r),Tt(m,e,r),su;Vu(v)||wr(),t=du(e,t,i)}else Vu(v)?(t.flags|=192,t.child=e.child,t=null):(e=S.treeContext,He=Zt(v.nextSibling),ut=t,Se=!0,Xn=null,Pt=!1,e!==null&&Gh(t,e),t=uu(t,r.children),t.flags|=4096);return t}return c?(ei(),v=r.fallback,c=t.mode,S=e.child,A=S.sibling,r=yn(S,{mode:"hidden",children:r.children}),r.subtreeFlags=S.subtreeFlags&65011712,A!==null?v=yn(A,v):(v=Ai(v,c,i,null),v.flags|=2),v.return=t,r.return=t,r.sibling=v,t.child=r,js(null,r),r=t.child,v=e.child.memoizedState,v===null?v=ou(i):(c=v.cachePool,c!==null?(S=We._currentValue,c=c.parent!==S?{parent:S,pool:S}:c):c=Kh(),v={baseLanes:v.baseLanes|i,cachePool:c}),r.memoizedState=v,r.childLanes=cu(e,m,i),t.memoizedState=ru,js(e.child,r)):(Jn(t),i=e.child,e=i.sibling,i=yn(i,{mode:"visible",children:r.children}),i.return=t,i.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=i,t.memoizedState=null,i)}function uu(e,t){return t=yr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function yr(e,t){return e=Lt(22,e,null,t),e.lanes=0,e}function du(e,t,i){return ki(t,e.child,null,i),e=uu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function om(e,t,i){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),wc(e.return,t,i)}function fu(e,t,i,r,c,u){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:i,tailMode:c,treeForkCount:u}:(m.isBackwards=t,m.rendering=null,m.renderingStartTime=0,m.last=r,m.tail=i,m.tailMode=c,m.treeForkCount=u)}function cm(e,t,i){var r=t.pendingProps,c=r.revealOrder,u=r.tail;r=r.children;var m=Ze.current,v=(m&2)!==0;if(v?(m=m&1|2,t.flags|=128):m&=1,Q(Ze,m),ft(e,t,r,i),r=Se?gs:0,!v&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&om(e,i,t);else if(e.tag===19)om(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(i=t.child,c=null;i!==null;)e=i.alternate,e!==null&&sr(e)===null&&(c=i),i=i.sibling;i=c,i===null?(c=t.child,t.child=null):(c=i.sibling,i.sibling=null),fu(t,!1,c,i,u,r);break;case"backwards":case"unstable_legacy-backwards":for(i=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&sr(e)===null){t.child=c;break}e=c.sibling,c.sibling=i,i=c,c=e}fu(t,!0,i,null,u,r);break;case"together":fu(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Cn(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),ii|=t.lanes,(i&t.childLanes)===0)if(e!==null){if(pa(e,t,i,!1),(i&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,i=yn(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=yn(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function hu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&$l(e)))}function Gx(e,t,i){switch(t.tag){case 3:xt(t,t.stateNode.containerInfo),Kn(t,We,e.memoizedState.cache),ji();break;case 27:case 5:ts(t);break;case 4:xt(t,t.stateNode.containerInfo);break;case 10:Kn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Uc(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated!==null?(Jn(t),t.flags|=128,null):(i&t.child.childLanes)!==0?rm(e,t,i):(Jn(t),e=Cn(e,t,i),e!==null?e.sibling:null);Jn(t);break;case 19:var c=(e.flags&128)!==0;if(r=(i&t.childLanes)!==0,r||(pa(e,t,i,!1),r=(i&t.childLanes)!==0),c){if(r)return cm(e,t,i);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Q(Ze,Ze.current),r)break;return null;case 22:return t.lanes=0,tm(e,t,i,t.pendingProps);case 24:Kn(t,We,e.memoizedState.cache)}return Cn(e,t,i)}function um(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps)et=!0;else{if(!hu(e,i)&&(t.flags&128)===0)return et=!1,Gx(e,t,i);et=(e.flags&131072)!==0}else et=!1,Se&&(t.flags&1048576)!==0&&Yh(t,gs,t.index);switch(t.lanes=0,t.tag){case 16:e:{var r=t.pendingProps;if(e=zi(t.elementType),t.type=e,typeof e=="function")vc(e)?(r=Bi(e,r),t.tag=1,t=sm(null,t,e,r,i)):(t.tag=0,t=lu(null,t,e,r,i));else{if(e!=null){var c=e.$$typeof;if(c===X){t.tag=11,t=Wp(null,t,e,r,i);break e}else if(c===F){t.tag=14,t=Jp(null,t,e,r,i);break e}}throw t=P(e)||e,Error(l(306,t,""))}}return t;case 0:return lu(e,t,t.type,t.pendingProps,i);case 1:return r=t.type,c=Bi(r,t.pendingProps),sm(e,t,r,c,i);case 3:e:{if(xt(t,t.stateNode.containerInfo),e===null)throw Error(l(387));r=t.pendingProps;var u=t.memoizedState;c=u.element,zc(e,t),Es(t,r,null,i);var m=t.memoizedState;if(r=m.cache,Kn(t,We,r),r!==u.cache&&Tc(t,[We],i,!0),Cs(),r=m.element,u.isDehydrated)if(u={element:r,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=lm(e,t,r,i);break e}else if(r!==c){c=Ft(Error(l(424)),t),ys(c),t=lm(e,t,r,i);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,He=Zt(e.firstChild),ut=t,Se=!0,Xn=null,Pt=!0,i=tp(t,null,r,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(ji(),r===c){t=Cn(e,t,i);break e}ft(e,t,r,i)}t=t.child}return t;case 26:return gr(e,t),e===null?(i=bg(t.type,null,t.pendingProps,null))?t.memoizedState=i:Se||(i=t.type,e=t.pendingProps,r=zr(ge.current).createElement(i),r[ct]=t,r[bt]=e,ht(r,i,e),at(r),t.stateNode=r):t.memoizedState=bg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ts(t),e===null&&Se&&(r=t.stateNode=vg(t.type,t.pendingProps,ge.current),ut=t,Pt=!0,c=He,oi(t.type)?(Qu=c,He=Zt(r.firstChild)):He=c),ft(e,t,t.pendingProps.children,i),gr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Se&&((c=r=He)&&(r=x_(r,t.type,t.pendingProps,Pt),r!==null?(t.stateNode=r,ut=t,He=Zt(r.firstChild),Pt=!1,c=!0):c=!1),c||Pn(t)),ts(t),c=t.type,u=t.pendingProps,m=e!==null?e.memoizedProps:null,r=u.children,qu(c,u)?r=null:m!==null&&qu(c,m)&&(t.flags|=32),t.memoizedState!==null&&(c=Hc(e,t,Ox,null,null,i),Vs._currentValue=c),gr(e,t),ft(e,t,r,i),t.child;case 6:return e===null&&Se&&((e=i=He)&&(i=__(i,t.pendingProps,Pt),i!==null?(t.stateNode=i,ut=t,He=null,e=!0):e=!1),e||Pn(t)),null;case 13:return rm(e,t,i);case 4:return xt(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ki(t,null,r,i):ft(e,t,r,i),t.child;case 11:return Wp(e,t,t.type,t.pendingProps,i);case 7:return ft(e,t,t.pendingProps,i),t.child;case 8:return ft(e,t,t.pendingProps.children,i),t.child;case 12:return ft(e,t,t.pendingProps.children,i),t.child;case 10:return r=t.pendingProps,Kn(t,t.type,r.value),ft(e,t,r.children,i),t.child;case 9:return c=t.type._context,r=t.pendingProps.children,Mi(t),c=dt(c),r=r(c),t.flags|=1,ft(e,t,r,i),t.child;case 14:return Jp(e,t,t.type,t.pendingProps,i);case 15:return em(e,t,t.type,t.pendingProps,i);case 19:return cm(e,t,i);case 31:return Yx(e,t,i);case 22:return tm(e,t,i,t.pendingProps);case 24:return Mi(t),r=dt(We),e===null?(c=Rc(),c===null&&(c=Le,u=Ac(),c.pooledCache=u,u.refCount++,u!==null&&(c.pooledCacheLanes|=i),c=u),t.memoizedState={parent:r,cache:c},Dc(t),Kn(t,We,c)):((e.lanes&i)!==0&&(zc(e,t),Es(t,null,null,i),Cs()),c=e.memoizedState,u=t.memoizedState,c.parent!==r?(c={parent:r,cache:r},t.memoizedState=c,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=c),Kn(t,We,r)):(r=u.cache,Kn(t,We,r),r!==c.cache&&Tc(t,[We],i,!0))),ft(e,t,t.pendingProps.children,i),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function En(e){e.flags|=4}function pu(e,t,i,r,c){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(Bm())e.flags|=8192;else throw Oi=tr,Mc}else e.flags&=-16777217}function dm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!wg(t))if(Bm())e.flags|=8192;else throw Oi=tr,Mc}function vr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Vf():536870912,e.lanes|=t,wa|=t)}function Rs(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,r=0;if(t)for(var c=e.child;c!==null;)i|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)i|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=i,t}function Vx(e,t,i){var r=t.pendingProps;switch(Sc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(t),null;case 1:return qe(t),null;case 3:return i=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),_n(We),Ke(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(ha(t)?En(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ec())),qe(t),null;case 26:var c=t.type,u=t.memoizedState;return e===null?(En(t),u!==null?(qe(t),dm(t,u)):(qe(t),pu(t,c,null,r,i))):u?u!==e.memoizedState?(En(t),qe(t),dm(t,u)):(qe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==r&&En(t),qe(t),pu(t,c,e,r,i)),null;case 27:if(jl(t),i=ge.current,c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&En(t);else{if(!r){if(t.stateNode===null)throw Error(l(166));return qe(t),null}e=$.current,ha(t)?Vh(t):(e=vg(c,r,i),t.stateNode=e,En(t))}return qe(t),null;case 5:if(jl(t),c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&En(t);else{if(!r){if(t.stateNode===null)throw Error(l(166));return qe(t),null}if(u=$.current,ha(t))Vh(t);else{var m=zr(ge.current);switch(u){case 1:u=m.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:u=m.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":u=m.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":u=m.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":u=m.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof r.is=="string"?m.createElement("select",{is:r.is}):m.createElement("select"),r.multiple?u.multiple=!0:r.size&&(u.size=r.size);break;default:u=typeof r.is=="string"?m.createElement(c,{is:r.is}):m.createElement(c)}}u[ct]=t,u[bt]=r;e:for(m=t.child;m!==null;){if(m.tag===5||m.tag===6)u.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}t.stateNode=u;e:switch(ht(u,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&En(t)}}return qe(t),pu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,i),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&En(t);else{if(typeof r!="string"&&t.stateNode===null)throw Error(l(166));if(e=ge.current,ha(t)){if(e=t.stateNode,i=t.memoizedProps,r=null,c=ut,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[ct]=t,e=!!(e.nodeValue===i||r!==null&&r.suppressHydrationWarning===!0||rg(e.nodeValue,i)),e||Pn(t,!0)}else e=zr(e).createTextNode(r),e[ct]=t,t.stateNode=e}return qe(t),null;case 31:if(i=t.memoizedState,e===null||e.memoizedState!==null){if(r=ha(t),i!==null){if(e===null){if(!r)throw Error(l(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(557));e[ct]=t}else ji(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qe(t),e=!1}else i=Ec(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),e=!0;if(!e)return t.flags&256?(Ut(t),t):(Ut(t),null);if((t.flags&128)!==0)throw Error(l(558))}return qe(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=ha(t),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(l(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(l(317));c[ct]=t}else ji(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qe(t),c=!1}else c=Ec(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return t.flags&256?(Ut(t),t):(Ut(t),null)}return Ut(t),(t.flags&128)!==0?(t.lanes=i,t):(i=r!==null,e=e!==null&&e.memoizedState!==null,i&&(r=t.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==c&&(r.flags|=2048)),i!==e&&i&&(t.child.flags|=8192),vr(t,t.updateQueue),qe(t),null);case 4:return Ke(),e===null&&Lu(t.stateNode.containerInfo),qe(t),null;case 10:return _n(t.type),qe(t),null;case 19:if(B(Ze),r=t.memoizedState,r===null)return qe(t),null;if(c=(t.flags&128)!==0,u=r.rendering,u===null)if(c)Rs(r,!1);else{if(Qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=sr(e),u!==null){for(t.flags|=128,Rs(r,!1),e=u.updateQueue,t.updateQueue=e,vr(t,e),t.subtreeFlags=0,e=i,i=t.child;i!==null;)Ih(i,e),i=i.sibling;return Q(Ze,Ze.current&1|2),Se&&vn(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Dt()>Cr&&(t.flags|=128,c=!0,Rs(r,!1),t.lanes=4194304)}else{if(!c)if(e=sr(u),e!==null){if(t.flags|=128,c=!0,e=e.updateQueue,t.updateQueue=e,vr(t,e),Rs(r,!0),r.tail===null&&r.tailMode==="hidden"&&!u.alternate&&!Se)return qe(t),null}else 2*Dt()-r.renderingStartTime>Cr&&i!==536870912&&(t.flags|=128,c=!0,Rs(r,!1),t.lanes=4194304);r.isBackwards?(u.sibling=t.child,t.child=u):(e=r.last,e!==null?e.sibling=u:t.child=u,r.last=u)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Dt(),e.sibling=null,i=Ze.current,Q(Ze,c?i&1|2:i&1),Se&&vn(t,r.treeForkCount),e):(qe(t),null);case 22:case 23:return Ut(t),Bc(),r=t.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?(i&536870912)!==0&&(t.flags&128)===0&&(qe(t),t.subtreeFlags&6&&(t.flags|=8192)):qe(t),i=t.updateQueue,i!==null&&vr(t,i.retryQueue),i=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==i&&(t.flags|=2048),e!==null&&B(Di),null;case 24:return i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),_n(We),qe(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function Fx(e,t){switch(Sc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _n(We),Ke(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return jl(t),null;case 31:if(t.memoizedState!==null){if(Ut(t),t.alternate===null)throw Error(l(340));ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ut(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(Ze),null;case 4:return Ke(),null;case 10:return _n(t.type),null;case 22:case 23:return Ut(t),Bc(),e!==null&&B(Di),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return _n(We),null;case 25:return null;default:return null}}function fm(e,t){switch(Sc(t),t.tag){case 3:_n(We),Ke();break;case 26:case 27:case 5:jl(t);break;case 4:Ke();break;case 31:t.memoizedState!==null&&Ut(t);break;case 13:Ut(t);break;case 19:B(Ze);break;case 10:_n(t.type);break;case 22:case 23:Ut(t),Bc(),e!==null&&B(Di);break;case 24:_n(We)}}function Ms(e,t){try{var i=t.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var c=r.next;i=c;do{if((i.tag&e)===e){r=void 0;var u=i.create,m=i.inst;r=u(),m.destroy=r}i=i.next}while(i!==c)}}catch(v){Me(t,t.return,v)}}function ti(e,t,i){try{var r=t.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var u=c.next;r=u;do{if((r.tag&e)===e){var m=r.inst,v=m.destroy;if(v!==void 0){m.destroy=void 0,c=t;var S=i,A=v;try{A()}catch(O){Me(c,S,O)}}}r=r.next}while(r!==u)}}catch(O){Me(t,t.return,O)}}function hm(e){var t=e.updateQueue;if(t!==null){var i=e.stateNode;try{ip(t,i)}catch(r){Me(e,e.return,r)}}}function pm(e,t,i){i.props=Bi(e.type,e.memoizedProps),i.state=e.memoizedState;try{i.componentWillUnmount()}catch(r){Me(e,t,r)}}function Ds(e,t){try{var i=e.ref;if(i!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof i=="function"?e.refCleanup=i(r):i.current=r}}catch(c){Me(e,t,c)}}function un(e,t){var i=e.ref,r=e.refCleanup;if(i!==null)if(typeof r=="function")try{r()}catch(c){Me(e,t,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(c){Me(e,t,c)}else i.current=null}function mm(e){var t=e.type,i=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":i.autoFocus&&r.focus();break e;case"img":i.src?r.src=i.src:i.srcSet&&(r.srcset=i.srcSet)}}catch(c){Me(e,e.return,c)}}function mu(e,t,i){try{var r=e.stateNode;h_(r,e.type,i,t),r[bt]=t}catch(c){Me(e,e.return,c)}}function gm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&oi(e.type)||e.tag===4}function gu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&oi(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yu(e,t,i){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(e,t):(t=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,t.appendChild(e),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=mn));else if(r!==4&&(r===27&&oi(e.type)&&(i=e.stateNode,t=null),e=e.child,e!==null))for(yu(e,t,i),e=e.sibling;e!==null;)yu(e,t,i),e=e.sibling}function xr(e,t,i){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(r!==4&&(r===27&&oi(e.type)&&(i=e.stateNode),e=e.child,e!==null))for(xr(e,t,i),e=e.sibling;e!==null;)xr(e,t,i),e=e.sibling}function ym(e){var t=e.stateNode,i=e.memoizedProps;try{for(var r=e.type,c=t.attributes;c.length;)t.removeAttributeNode(c[0]);ht(t,r,i),t[ct]=e,t[bt]=i}catch(u){Me(e,e.return,u)}}var Nn=!1,tt=!1,vu=!1,vm=typeof WeakSet=="function"?WeakSet:Set,st=null;function Qx(e,t){if(e=e.containerInfo,Iu=Hr,e=Rh(e),dc(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var r=i.getSelection&&i.getSelection();if(r&&r.rangeCount!==0){i=r.anchorNode;var c=r.anchorOffset,u=r.focusNode;r=r.focusOffset;try{i.nodeType,u.nodeType}catch{i=null;break e}var m=0,v=-1,S=-1,A=0,O=0,L=e,j=null;t:for(;;){for(var D;L!==i||c!==0&&L.nodeType!==3||(v=m+c),L!==u||r!==0&&L.nodeType!==3||(S=m+r),L.nodeType===3&&(m+=L.nodeValue.length),(D=L.firstChild)!==null;)j=L,L=D;for(;;){if(L===e)break t;if(j===i&&++A===c&&(v=m),j===u&&++O===r&&(S=m),(D=L.nextSibling)!==null)break;L=j,j=L.parentNode}L=D}i=v===-1||S===-1?null:{start:v,end:S}}else i=null}i=i||{start:0,end:0}}else i=null;for(Hu={focusedElem:e,selectionRange:i},Hr=!1,st=t;st!==null;)if(t=st,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,st=e;else for(;st!==null;){switch(t=st,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(i=0;i<e.length;i++)c=e[i],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,i=t,c=u.memoizedProps,u=u.memoizedState,r=i.stateNode;try{var Z=Bi(i.type,c);e=r.getSnapshotBeforeUpdate(Z,u),r.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Me(i,i.return,ie)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,i=e.nodeType,i===9)Gu(e);else if(i===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Gu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,st=e;break}st=t.return}}function xm(e,t,i){var r=i.flags;switch(i.tag){case 0:case 11:case 15:Tn(e,i),r&4&&Ms(5,i);break;case 1:if(Tn(e,i),r&4)if(e=i.stateNode,t===null)try{e.componentDidMount()}catch(m){Me(i,i.return,m)}else{var c=Bi(i.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(c,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Me(i,i.return,m)}}r&64&&hm(i),r&512&&Ds(i,i.return);break;case 3:if(Tn(e,i),r&64&&(e=i.updateQueue,e!==null)){if(t=null,i.child!==null)switch(i.child.tag){case 27:case 5:t=i.child.stateNode;break;case 1:t=i.child.stateNode}try{ip(e,t)}catch(m){Me(i,i.return,m)}}break;case 27:t===null&&r&4&&ym(i);case 26:case 5:Tn(e,i),t===null&&r&4&&mm(i),r&512&&Ds(i,i.return);break;case 12:Tn(e,i);break;case 31:Tn(e,i),r&4&&Sm(e,i);break;case 13:Tn(e,i),r&4&&Cm(e,i),r&64&&(e=i.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(i=t_.bind(null,i),b_(e,i))));break;case 22:if(r=i.memoizedState!==null||Nn,!r){t=t!==null&&t.memoizedState!==null||tt,c=Nn;var u=tt;Nn=r,(tt=t)&&!u?An(e,i,(i.subtreeFlags&8772)!==0):Tn(e,i),Nn=c,tt=u}break;case 30:break;default:Tn(e,i)}}function _m(e){var t=e.alternate;t!==null&&(e.alternate=null,_m(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Po(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ge=null,Ct=!1;function wn(e,t,i){for(i=i.child;i!==null;)bm(e,t,i),i=i.sibling}function bm(e,t,i){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(ns,i)}catch{}switch(i.tag){case 26:tt||un(i,t),wn(e,t,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:tt||un(i,t);var r=Ge,c=Ct;oi(i.type)&&(Ge=i.stateNode,Ct=!1),wn(e,t,i),qs(i.stateNode),Ge=r,Ct=c;break;case 5:tt||un(i,t);case 6:if(r=Ge,c=Ct,Ge=null,wn(e,t,i),Ge=r,Ct=c,Ge!==null)if(Ct)try{(Ge.nodeType===9?Ge.body:Ge.nodeName==="HTML"?Ge.ownerDocument.body:Ge).removeChild(i.stateNode)}catch(u){Me(i,t,u)}else try{Ge.removeChild(i.stateNode)}catch(u){Me(i,t,u)}break;case 18:Ge!==null&&(Ct?(e=Ge,hg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,i.stateNode),Oa(e)):hg(Ge,i.stateNode));break;case 4:r=Ge,c=Ct,Ge=i.stateNode.containerInfo,Ct=!0,wn(e,t,i),Ge=r,Ct=c;break;case 0:case 11:case 14:case 15:ti(2,i,t),tt||ti(4,i,t),wn(e,t,i);break;case 1:tt||(un(i,t),r=i.stateNode,typeof r.componentWillUnmount=="function"&&pm(i,t,r)),wn(e,t,i);break;case 21:wn(e,t,i);break;case 22:tt=(r=tt)||i.memoizedState!==null,wn(e,t,i),tt=r;break;default:wn(e,t,i)}}function Sm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Oa(e)}catch(i){Me(t,t.return,i)}}}function Cm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Oa(e)}catch(i){Me(t,t.return,i)}}function Xx(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new vm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new vm),t;default:throw Error(l(435,e.tag))}}function _r(e,t){var i=Xx(e);t.forEach(function(r){if(!i.has(r)){i.add(r);var c=n_.bind(null,e,r);r.then(c,c)}})}function Et(e,t){var i=t.deletions;if(i!==null)for(var r=0;r<i.length;r++){var c=i[r],u=e,m=t,v=m;e:for(;v!==null;){switch(v.tag){case 27:if(oi(v.type)){Ge=v.stateNode,Ct=!1;break e}break;case 5:Ge=v.stateNode,Ct=!1;break e;case 3:case 4:Ge=v.stateNode.containerInfo,Ct=!0;break e}v=v.return}if(Ge===null)throw Error(l(160));bm(u,m,c),Ge=null,Ct=!1,u=c.alternate,u!==null&&(u.return=null),c.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Em(t,e),t=t.sibling}var en=null;function Em(e,t){var i=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Et(t,e),Nt(e),r&4&&(ti(3,e,e.return),Ms(3,e),ti(5,e,e.return));break;case 1:Et(t,e),Nt(e),r&512&&(tt||i===null||un(i,i.return)),r&64&&Nn&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(i=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=i===null?r:i.concat(r))));break;case 26:var c=en;if(Et(t,e),Nt(e),r&512&&(tt||i===null||un(i,i.return)),r&4){var u=i!==null?i.memoizedState:null;if(r=e.memoizedState,i===null)if(r===null)if(e.stateNode===null){e:{r=e.type,i=e.memoizedProps,c=c.ownerDocument||c;t:switch(r){case"title":u=c.getElementsByTagName("title")[0],(!u||u[ss]||u[ct]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=c.createElement(r),c.head.insertBefore(u,c.querySelector("head > title"))),ht(u,r,i),u[ct]=e,at(u),r=u;break e;case"link":var m=Eg("link","href",c).get(r+(i.href||""));if(m){for(var v=0;v<m.length;v++)if(u=m[v],u.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&u.getAttribute("rel")===(i.rel==null?null:i.rel)&&u.getAttribute("title")===(i.title==null?null:i.title)&&u.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){m.splice(v,1);break t}}u=c.createElement(r),ht(u,r,i),c.head.appendChild(u);break;case"meta":if(m=Eg("meta","content",c).get(r+(i.content||""))){for(v=0;v<m.length;v++)if(u=m[v],u.getAttribute("content")===(i.content==null?null:""+i.content)&&u.getAttribute("name")===(i.name==null?null:i.name)&&u.getAttribute("property")===(i.property==null?null:i.property)&&u.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&u.getAttribute("charset")===(i.charSet==null?null:i.charSet)){m.splice(v,1);break t}}u=c.createElement(r),ht(u,r,i),c.head.appendChild(u);break;default:throw Error(l(468,r))}u[ct]=e,at(u),r=u}e.stateNode=r}else Ng(c,e.type,e.stateNode);else e.stateNode=Cg(c,r,e.memoizedProps);else u!==r?(u===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):u.count--,r===null?Ng(c,e.type,e.stateNode):Cg(c,r,e.memoizedProps)):r===null&&e.stateNode!==null&&mu(e,e.memoizedProps,i.memoizedProps)}break;case 27:Et(t,e),Nt(e),r&512&&(tt||i===null||un(i,i.return)),i!==null&&r&4&&mu(e,e.memoizedProps,i.memoizedProps);break;case 5:if(Et(t,e),Nt(e),r&512&&(tt||i===null||un(i,i.return)),e.flags&32){c=e.stateNode;try{ia(c,"")}catch(Z){Me(e,e.return,Z)}}r&4&&e.stateNode!=null&&(c=e.memoizedProps,mu(e,c,i!==null?i.memoizedProps:c)),r&1024&&(vu=!0);break;case 6:if(Et(t,e),Nt(e),r&4){if(e.stateNode===null)throw Error(l(162));r=e.memoizedProps,i=e.stateNode;try{i.nodeValue=r}catch(Z){Me(e,e.return,Z)}}break;case 3:if(Lr=null,c=en,en=Or(t.containerInfo),Et(t,e),en=c,Nt(e),r&4&&i!==null&&i.memoizedState.isDehydrated)try{Oa(t.containerInfo)}catch(Z){Me(e,e.return,Z)}vu&&(vu=!1,Nm(e));break;case 4:r=en,en=Or(e.stateNode.containerInfo),Et(t,e),Nt(e),en=r;break;case 12:Et(t,e),Nt(e);break;case 31:Et(t,e),Nt(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_r(e,r)));break;case 13:Et(t,e),Nt(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(Sr=Dt()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_r(e,r)));break;case 22:c=e.memoizedState!==null;var S=i!==null&&i.memoizedState!==null,A=Nn,O=tt;if(Nn=A||c,tt=O||S,Et(t,e),tt=O,Nn=A,Nt(e),r&8192)e:for(t=e.stateNode,t._visibility=c?t._visibility&-2:t._visibility|1,c&&(i===null||S||Nn||tt||Ui(e)),i=null,t=e;;){if(t.tag===5||t.tag===26){if(i===null){S=i=t;try{if(u=S.stateNode,c)m=u.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{v=S.stateNode;var L=S.memoizedProps.style,j=L!=null&&L.hasOwnProperty("display")?L.display:null;v.style.display=j==null||typeof j=="boolean"?"":(""+j).trim()}}catch(Z){Me(S,S.return,Z)}}}else if(t.tag===6){if(i===null){S=t;try{S.stateNode.nodeValue=c?"":S.memoizedProps}catch(Z){Me(S,S.return,Z)}}}else if(t.tag===18){if(i===null){S=t;try{var D=S.stateNode;c?pg(D,!0):pg(S.stateNode,!1)}catch(Z){Me(S,S.return,Z)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;i===t&&(i=null),t=t.return}i===t&&(i=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(i=r.retryQueue,i!==null&&(r.retryQueue=null,_r(e,i))));break;case 19:Et(t,e),Nt(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_r(e,r)));break;case 30:break;case 21:break;default:Et(t,e),Nt(e)}}function Nt(e){var t=e.flags;if(t&2){try{for(var i,r=e.return;r!==null;){if(gm(r)){i=r;break}r=r.return}if(i==null)throw Error(l(160));switch(i.tag){case 27:var c=i.stateNode,u=gu(e);xr(e,u,c);break;case 5:var m=i.stateNode;i.flags&32&&(ia(m,""),i.flags&=-33);var v=gu(e);xr(e,v,m);break;case 3:case 4:var S=i.stateNode.containerInfo,A=gu(e);yu(e,A,S);break;default:throw Error(l(161))}}catch(O){Me(e,e.return,O)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Nm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Nm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Tn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)xm(e,t.alternate,t),t=t.sibling}function Ui(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ti(4,t,t.return),Ui(t);break;case 1:un(t,t.return);var i=t.stateNode;typeof i.componentWillUnmount=="function"&&pm(t,t.return,i),Ui(t);break;case 27:qs(t.stateNode);case 26:case 5:un(t,t.return),Ui(t);break;case 22:t.memoizedState===null&&Ui(t);break;case 30:Ui(t);break;default:Ui(t)}e=e.sibling}}function An(e,t,i){for(i=i&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var r=t.alternate,c=e,u=t,m=u.flags;switch(u.tag){case 0:case 11:case 15:An(c,u,i),Ms(4,u);break;case 1:if(An(c,u,i),r=u,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(A){Me(r,r.return,A)}if(r=u,c=r.updateQueue,c!==null){var v=r.stateNode;try{var S=c.shared.hiddenCallbacks;if(S!==null)for(c.shared.hiddenCallbacks=null,c=0;c<S.length;c++)np(S[c],v)}catch(A){Me(r,r.return,A)}}i&&m&64&&hm(u),Ds(u,u.return);break;case 27:ym(u);case 26:case 5:An(c,u,i),i&&r===null&&m&4&&mm(u),Ds(u,u.return);break;case 12:An(c,u,i);break;case 31:An(c,u,i),i&&m&4&&Sm(c,u);break;case 13:An(c,u,i),i&&m&4&&Cm(c,u);break;case 22:u.memoizedState===null&&An(c,u,i),Ds(u,u.return);break;case 30:break;default:An(c,u,i)}t=t.sibling}}function xu(e,t){var i=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==i&&(e!=null&&e.refCount++,i!=null&&vs(i))}function _u(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&vs(e))}function tn(e,t,i,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)wm(e,t,i,r),t=t.sibling}function wm(e,t,i,r){var c=t.flags;switch(t.tag){case 0:case 11:case 15:tn(e,t,i,r),c&2048&&Ms(9,t);break;case 1:tn(e,t,i,r);break;case 3:tn(e,t,i,r),c&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&vs(e)));break;case 12:if(c&2048){tn(e,t,i,r),e=t.stateNode;try{var u=t.memoizedProps,m=u.id,v=u.onPostCommit;typeof v=="function"&&v(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){Me(t,t.return,S)}}else tn(e,t,i,r);break;case 31:tn(e,t,i,r);break;case 13:tn(e,t,i,r);break;case 23:break;case 22:u=t.stateNode,m=t.alternate,t.memoizedState!==null?u._visibility&2?tn(e,t,i,r):zs(e,t):u._visibility&2?tn(e,t,i,r):(u._visibility|=2,Ca(e,t,i,r,(t.subtreeFlags&10256)!==0||!1)),c&2048&&xu(m,t);break;case 24:tn(e,t,i,r),c&2048&&_u(t.alternate,t);break;default:tn(e,t,i,r)}}function Ca(e,t,i,r,c){for(c=c&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,m=t,v=i,S=r,A=m.flags;switch(m.tag){case 0:case 11:case 15:Ca(u,m,v,S,c),Ms(8,m);break;case 23:break;case 22:var O=m.stateNode;m.memoizedState!==null?O._visibility&2?Ca(u,m,v,S,c):zs(u,m):(O._visibility|=2,Ca(u,m,v,S,c)),c&&A&2048&&xu(m.alternate,m);break;case 24:Ca(u,m,v,S,c),c&&A&2048&&_u(m.alternate,m);break;default:Ca(u,m,v,S,c)}t=t.sibling}}function zs(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var i=e,r=t,c=r.flags;switch(r.tag){case 22:zs(i,r),c&2048&&xu(r.alternate,r);break;case 24:zs(i,r),c&2048&&_u(r.alternate,r);break;default:zs(i,r)}t=t.sibling}}var Os=8192;function Ea(e,t,i){if(e.subtreeFlags&Os)for(e=e.child;e!==null;)Tm(e,t,i),e=e.sibling}function Tm(e,t,i){switch(e.tag){case 26:Ea(e,t,i),e.flags&Os&&e.memoizedState!==null&&z_(i,en,e.memoizedState,e.memoizedProps);break;case 5:Ea(e,t,i);break;case 3:case 4:var r=en;en=Or(e.stateNode.containerInfo),Ea(e,t,i),en=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Os,Os=16777216,Ea(e,t,i),Os=r):Ea(e,t,i));break;default:Ea(e,t,i)}}function Am(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ks(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];st=r,Rm(r,e)}Am(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)jm(e),e=e.sibling}function jm(e){switch(e.tag){case 0:case 11:case 15:ks(e),e.flags&2048&&ti(9,e,e.return);break;case 3:ks(e);break;case 12:ks(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,br(e)):ks(e);break;default:ks(e)}}function br(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];st=r,Rm(r,e)}Am(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ti(8,t,t.return),br(t);break;case 22:i=t.stateNode,i._visibility&2&&(i._visibility&=-3,br(t));break;default:br(t)}e=e.sibling}}function Rm(e,t){for(;st!==null;){var i=st;switch(i.tag){case 0:case 11:case 15:ti(8,i,t);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var r=i.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:vs(i.memoizedState.cache)}if(r=i.child,r!==null)r.return=i,st=r;else e:for(i=e;st!==null;){r=st;var c=r.sibling,u=r.return;if(_m(r),r===i){st=null;break e}if(c!==null){c.return=u,st=c;break e}st=u}}}var Px={getCacheForType:function(e){var t=dt(We),i=t.data.get(e);return i===void 0&&(i=e(),t.data.set(e,i)),i},cacheSignal:function(){return dt(We).controller.signal}},Kx=typeof WeakMap=="function"?WeakMap:Map,Te=0,Le=null,ye=null,_e=0,Re=0,It=null,ni=!1,Na=!1,bu=!1,jn=0,Qe=0,ii=0,Ii=0,Su=0,Ht=0,wa=0,Ls=null,wt=null,Cu=!1,Sr=0,Mm=0,Cr=1/0,Er=null,ai=null,nt=0,si=null,Ta=null,Rn=0,Eu=0,Nu=null,Dm=null,Bs=0,wu=null;function qt(){return(Te&2)!==0&&_e!==0?_e&-_e:M.T!==null?Du():Pf()}function zm(){if(Ht===0)if((_e&536870912)===0||Se){var e=Dl;Dl<<=1,(Dl&3932160)===0&&(Dl=262144),Ht=e}else Ht=536870912;return e=Bt.current,e!==null&&(e.flags|=32),Ht}function Tt(e,t,i){(e===Le&&(Re===2||Re===9)||e.cancelPendingCommit!==null)&&(Aa(e,0),li(e,_e,Ht,!1)),as(e,i),((Te&2)===0||e!==Le)&&(e===Le&&((Te&2)===0&&(Ii|=i),Qe===4&&li(e,_e,Ht,!1)),dn(e))}function Om(e,t,i){if((Te&6)!==0)throw Error(l(327));var r=!i&&(t&127)===0&&(t&e.expiredLanes)===0||is(e,t),c=r?Wx(e,t):Au(e,t,!0),u=r;do{if(c===0){Na&&!r&&li(e,t,0,!1);break}else{if(i=e.current.alternate,u&&!Zx(i)){c=Au(e,t,!1),u=!1;continue}if(c===2){if(u=t,e.errorRecoveryDisabledLanes&u)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var v=e;c=Ls;var S=v.current.memoizedState.isDehydrated;if(S&&(Aa(v,m).flags|=256),m=Au(v,m,!1),m!==2){if(bu&&!S){v.errorRecoveryDisabledLanes|=u,Ii|=u,c=4;break e}u=wt,wt=c,u!==null&&(wt===null?wt=u:wt.push.apply(wt,u))}c=m}if(u=!1,c!==2)continue}}if(c===1){Aa(e,0),li(e,t,0,!0);break}e:{switch(r=e,u=c,u){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:li(r,t,Ht,!ni);break e;case 2:wt=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(c=Sr+300-Dt(),10<c)){if(li(r,t,Ht,!ni),Ol(r,0,!0)!==0)break e;Rn=t,r.timeoutHandle=dg(km.bind(null,r,i,wt,Er,Cu,t,Ht,Ii,wa,ni,u,"Throttled",-0,0),c);break e}km(r,i,wt,Er,Cu,t,Ht,Ii,wa,ni,u,null,-0,0)}}break}while(!0);dn(e)}function km(e,t,i,r,c,u,m,v,S,A,O,L,j,D){if(e.timeoutHandle=-1,L=t.subtreeFlags,L&8192||(L&16785408)===16785408){L={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:mn},Tm(t,u,L);var Z=(u&62914560)===u?Sr-Dt():(u&4194048)===u?Mm-Dt():0;if(Z=O_(L,Z),Z!==null){Rn=u,e.cancelPendingCommit=Z(Gm.bind(null,e,t,u,i,r,c,m,v,S,O,L,null,j,D)),li(e,u,m,!A);return}}Gm(e,t,u,i,r,c,m,v,S)}function Zx(e){for(var t=e;;){var i=t.tag;if((i===0||i===11||i===15)&&t.flags&16384&&(i=t.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var r=0;r<i.length;r++){var c=i[r],u=c.getSnapshot;c=c.value;try{if(!kt(u(),c))return!1}catch{return!1}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function li(e,t,i,r){t&=~Su,t&=~Ii,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var c=t;0<c;){var u=31-Ot(c),m=1<<u;r[u]=-1,c&=~m}i!==0&&Ff(e,i,t)}function Nr(){return(Te&6)===0?(Us(0),!1):!0}function Tu(){if(ye!==null){if(Re===0)var e=ye.return;else e=ye,xn=Ri=null,Gc(e),va=null,_s=0,e=ye;for(;e!==null;)fm(e.alternate,e),e=e.return;ye=null}}function Aa(e,t){var i=e.timeoutHandle;i!==-1&&(e.timeoutHandle=-1,g_(i)),i=e.cancelPendingCommit,i!==null&&(e.cancelPendingCommit=null,i()),Rn=0,Tu(),Le=e,ye=i=yn(e.current,null),_e=t,Re=0,It=null,ni=!1,Na=is(e,t),bu=!1,wa=Ht=Su=Ii=ii=Qe=0,wt=Ls=null,Cu=!1,(t&8)!==0&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var c=31-Ot(r),u=1<<c;t|=e[c],r&=~u}return jn=t,Ql(),i}function Lm(e,t){ce=null,M.H=As,t===ya||t===er?(t=Wh(),Re=3):t===Mc?(t=Wh(),Re=4):Re=t===su?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,It=t,ye===null&&(Qe=1,pr(e,Ft(t,e.current)))}function Bm(){var e=Bt.current;return e===null?!0:(_e&4194048)===_e?Kt===null:(_e&62914560)===_e||(_e&536870912)!==0?e===Kt:!1}function Um(){var e=M.H;return M.H=As,e===null?As:e}function Im(){var e=M.A;return M.A=Px,e}function wr(){Qe=4,ni||(_e&4194048)!==_e&&Bt.current!==null||(Na=!0),(ii&134217727)===0&&(Ii&134217727)===0||Le===null||li(Le,_e,Ht,!1)}function Au(e,t,i){var r=Te;Te|=2;var c=Um(),u=Im();(Le!==e||_e!==t)&&(Er=null,Aa(e,t)),t=!1;var m=Qe;e:do try{if(Re!==0&&ye!==null){var v=ye,S=It;switch(Re){case 8:Tu(),m=6;break e;case 3:case 2:case 9:case 6:Bt.current===null&&(t=!0);var A=Re;if(Re=0,It=null,ja(e,v,S,A),i&&Na){m=0;break e}break;default:A=Re,Re=0,It=null,ja(e,v,S,A)}}$x(),m=Qe;break}catch(O){Lm(e,O)}while(!0);return t&&e.shellSuspendCounter++,xn=Ri=null,Te=r,M.H=c,M.A=u,ye===null&&(Le=null,_e=0,Ql()),m}function $x(){for(;ye!==null;)Hm(ye)}function Wx(e,t){var i=Te;Te|=2;var r=Um(),c=Im();Le!==e||_e!==t?(Er=null,Cr=Dt()+500,Aa(e,t)):Na=is(e,t);e:do try{if(Re!==0&&ye!==null){t=ye;var u=It;t:switch(Re){case 1:Re=0,It=null,ja(e,t,u,1);break;case 2:case 9:if(Zh(u)){Re=0,It=null,qm(t);break}t=function(){Re!==2&&Re!==9||Le!==e||(Re=7),dn(e)},u.then(t,t);break e;case 3:Re=7;break e;case 4:Re=5;break e;case 7:Zh(u)?(Re=0,It=null,qm(t)):(Re=0,It=null,ja(e,t,u,7));break;case 5:var m=null;switch(ye.tag){case 26:m=ye.memoizedState;case 5:case 27:var v=ye;if(m?wg(m):v.stateNode.complete){Re=0,It=null;var S=v.sibling;if(S!==null)ye=S;else{var A=v.return;A!==null?(ye=A,Tr(A)):ye=null}break t}}Re=0,It=null,ja(e,t,u,5);break;case 6:Re=0,It=null,ja(e,t,u,6);break;case 8:Tu(),Qe=6;break e;default:throw Error(l(462))}}Jx();break}catch(O){Lm(e,O)}while(!0);return xn=Ri=null,M.H=r,M.A=c,Te=i,ye!==null?0:(Le=null,_e=0,Ql(),Qe)}function Jx(){for(;ye!==null&&!S1();)Hm(ye)}function Hm(e){var t=um(e.alternate,e,jn);e.memoizedProps=e.pendingProps,t===null?Tr(e):ye=t}function qm(e){var t=e,i=t.alternate;switch(t.tag){case 15:case 0:t=am(i,t,t.pendingProps,t.type,void 0,_e);break;case 11:t=am(i,t,t.pendingProps,t.type.render,t.ref,_e);break;case 5:Gc(t);default:fm(i,t),t=ye=Ih(t,jn),t=um(i,t,jn)}e.memoizedProps=e.pendingProps,t===null?Tr(e):ye=t}function ja(e,t,i,r){xn=Ri=null,Gc(t),va=null,_s=0;var c=t.return;try{if(qx(e,c,t,i,_e)){Qe=1,pr(e,Ft(i,e.current)),ye=null;return}}catch(u){if(c!==null)throw ye=c,u;Qe=1,pr(e,Ft(i,e.current)),ye=null;return}t.flags&32768?(Se||r===1?e=!0:Na||(_e&536870912)!==0?e=!1:(ni=e=!0,(r===2||r===9||r===3||r===6)&&(r=Bt.current,r!==null&&r.tag===13&&(r.flags|=16384))),Ym(t,e)):Tr(t)}function Tr(e){var t=e;do{if((t.flags&32768)!==0){Ym(t,ni);return}e=t.return;var i=Vx(t.alternate,t,jn);if(i!==null){ye=i;return}if(t=t.sibling,t!==null){ye=t;return}ye=t=e}while(t!==null);Qe===0&&(Qe=5)}function Ym(e,t){do{var i=Fx(e.alternate,e);if(i!==null){i.flags&=32767,ye=i;return}if(i=e.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!t&&(e=e.sibling,e!==null)){ye=e;return}ye=e=i}while(e!==null);Qe=6,ye=null}function Gm(e,t,i,r,c,u,m,v,S){e.cancelPendingCommit=null;do Ar();while(nt!==0);if((Te&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(u=t.lanes|t.childLanes,u|=gc,D1(e,i,u,m,v,S),e===Le&&(ye=Le=null,_e=0),Ta=t,si=e,Rn=i,Eu=u,Nu=c,Dm=r,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,i_(Rl,function(){return Pm(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||r){r=M.T,M.T=null,c=q.p,q.p=2,m=Te,Te|=4;try{Qx(e,t,i)}finally{Te=m,q.p=c,M.T=r}}nt=1,Vm(),Fm(),Qm()}}function Vm(){if(nt===1){nt=0;var e=si,t=Ta,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=M.T,M.T=null;var r=q.p;q.p=2;var c=Te;Te|=4;try{Em(t,e);var u=Hu,m=Rh(e.containerInfo),v=u.focusedElem,S=u.selectionRange;if(m!==v&&v&&v.ownerDocument&&jh(v.ownerDocument.documentElement,v)){if(S!==null&&dc(v)){var A=S.start,O=S.end;if(O===void 0&&(O=A),"selectionStart"in v)v.selectionStart=A,v.selectionEnd=Math.min(O,v.value.length);else{var L=v.ownerDocument||document,j=L&&L.defaultView||window;if(j.getSelection){var D=j.getSelection(),Z=v.textContent.length,ie=Math.min(S.start,Z),Oe=S.end===void 0?ie:Math.min(S.end,Z);!D.extend&&ie>Oe&&(m=Oe,Oe=ie,ie=m);var w=Ah(v,ie),C=Ah(v,Oe);if(w&&C&&(D.rangeCount!==1||D.anchorNode!==w.node||D.anchorOffset!==w.offset||D.focusNode!==C.node||D.focusOffset!==C.offset)){var T=L.createRange();T.setStart(w.node,w.offset),D.removeAllRanges(),ie>Oe?(D.addRange(T),D.extend(C.node,C.offset)):(T.setEnd(C.node,C.offset),D.addRange(T))}}}}for(L=[],D=v;D=D.parentNode;)D.nodeType===1&&L.push({element:D,left:D.scrollLeft,top:D.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<L.length;v++){var k=L[v];k.element.scrollLeft=k.left,k.element.scrollTop=k.top}}Hr=!!Iu,Hu=Iu=null}finally{Te=c,q.p=r,M.T=i}}e.current=t,nt=2}}function Fm(){if(nt===2){nt=0;var e=si,t=Ta,i=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||i){i=M.T,M.T=null;var r=q.p;q.p=2;var c=Te;Te|=4;try{xm(e,t.alternate,t)}finally{Te=c,q.p=r,M.T=i}}nt=3}}function Qm(){if(nt===4||nt===3){nt=0,C1();var e=si,t=Ta,i=Rn,r=Dm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?nt=5:(nt=0,Ta=si=null,Xm(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(ai=null),Qo(i),t=t.stateNode,zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(ns,t,void 0,(t.current.flags&128)===128)}catch{}if(r!==null){t=M.T,c=q.p,q.p=2,M.T=null;try{for(var u=e.onRecoverableError,m=0;m<r.length;m++){var v=r[m];u(v.value,{componentStack:v.stack})}}finally{M.T=t,q.p=c}}(Rn&3)!==0&&Ar(),dn(e),c=e.pendingLanes,(i&261930)!==0&&(c&42)!==0?e===wu?Bs++:(Bs=0,wu=e):Bs=0,Us(0)}}function Xm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,vs(t)))}function Ar(){return Vm(),Fm(),Qm(),Pm()}function Pm(){if(nt!==5)return!1;var e=si,t=Eu;Eu=0;var i=Qo(Rn),r=M.T,c=q.p;try{q.p=32>i?32:i,M.T=null,i=Nu,Nu=null;var u=si,m=Rn;if(nt=0,Ta=si=null,Rn=0,(Te&6)!==0)throw Error(l(331));var v=Te;if(Te|=4,jm(u.current),wm(u,u.current,m,i),Te=v,Us(0,!1),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(ns,u)}catch{}return!0}finally{q.p=c,M.T=r,Xm(e,t)}}function Km(e,t,i){t=Ft(i,t),t=au(e.stateNode,t,2),e=Wn(e,t,2),e!==null&&(as(e,2),dn(e))}function Me(e,t,i){if(e.tag===3)Km(e,e,i);else for(;t!==null;){if(t.tag===3){Km(t,e,i);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ai===null||!ai.has(r))){e=Ft(i,e),i=Zp(2),r=Wn(t,i,2),r!==null&&($p(i,r,t,e),as(r,2),dn(r));break}}t=t.return}}function ju(e,t,i){var r=e.pingCache;if(r===null){r=e.pingCache=new Kx;var c=new Set;r.set(t,c)}else c=r.get(t),c===void 0&&(c=new Set,r.set(t,c));c.has(i)||(bu=!0,c.add(i),e=e_.bind(null,e,t,i),t.then(e,e))}function e_(e,t,i){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&i,e.warmLanes&=~i,Le===e&&(_e&i)===i&&(Qe===4||Qe===3&&(_e&62914560)===_e&&300>Dt()-Sr?(Te&2)===0&&Aa(e,0):Su|=i,wa===_e&&(wa=0)),dn(e)}function Zm(e,t){t===0&&(t=Vf()),e=Ti(e,t),e!==null&&(as(e,t),dn(e))}function t_(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),Zm(e,i)}function n_(e,t){var i=0;switch(e.tag){case 31:case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(i=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(l(314))}r!==null&&r.delete(t),Zm(e,i)}function i_(e,t){return Yo(e,t)}var jr=null,Ra=null,Ru=!1,Rr=!1,Mu=!1,ri=0;function dn(e){e!==Ra&&e.next===null&&(Ra===null?jr=Ra=e:Ra=Ra.next=e),Rr=!0,Ru||(Ru=!0,s_())}function Us(e,t){if(!Mu&&Rr){Mu=!0;do for(var i=!1,r=jr;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var u=0;else{var m=r.suspendedLanes,v=r.pingedLanes;u=(1<<31-Ot(42|e)+1)-1,u&=c&~(m&~v),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(i=!0,eg(r,u))}else u=_e,u=Ol(r,r===Le?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(u&3)===0||is(r,u)||(i=!0,eg(r,u));r=r.next}while(i);Mu=!1}}function a_(){$m()}function $m(){Rr=Ru=!1;var e=0;ri!==0&&m_()&&(e=ri);for(var t=Dt(),i=null,r=jr;r!==null;){var c=r.next,u=Wm(r,t);u===0?(r.next=null,i===null?jr=c:i.next=c,c===null&&(Ra=i)):(i=r,(e!==0||(u&3)!==0)&&(Rr=!0)),r=c}nt!==0&&nt!==5||Us(e),ri!==0&&(ri=0)}function Wm(e,t){for(var i=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var m=31-Ot(u),v=1<<m,S=c[m];S===-1?((v&i)===0||(v&r)!==0)&&(c[m]=M1(v,t)):S<=t&&(e.expiredLanes|=v),u&=~v}if(t=Le,i=_e,i=Ol(e,e===t?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,i===0||e===t&&(Re===2||Re===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Go(r),e.callbackNode=null,e.callbackPriority=0;if((i&3)===0||is(e,i)){if(t=i&-i,t===e.callbackPriority)return t;switch(r!==null&&Go(r),Qo(i)){case 2:case 8:i=Yf;break;case 32:i=Rl;break;case 268435456:i=Gf;break;default:i=Rl}return r=Jm.bind(null,e),i=Yo(i,r),e.callbackPriority=t,e.callbackNode=i,t}return r!==null&&r!==null&&Go(r),e.callbackPriority=2,e.callbackNode=null,2}function Jm(e,t){if(nt!==0&&nt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var i=e.callbackNode;if(Ar()&&e.callbackNode!==i)return null;var r=_e;return r=Ol(e,e===Le?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Om(e,r,t),Wm(e,Dt()),e.callbackNode!=null&&e.callbackNode===i?Jm.bind(null,e):null)}function eg(e,t){if(Ar())return null;Om(e,t,!0)}function s_(){y_(function(){(Te&6)!==0?Yo(qf,a_):$m()})}function Du(){if(ri===0){var e=ma;e===0&&(e=Ml,Ml<<=1,(Ml&261888)===0&&(Ml=256)),ri=e}return ri}function tg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ul(""+e)}function ng(e,t){var i=t.ownerDocument.createElement("input");return i.name=t.name,i.value=t.value,e.id&&i.setAttribute("form",e.id),t.parentNode.insertBefore(i,t),e=new FormData(e),i.parentNode.removeChild(i),e}function l_(e,t,i,r,c){if(t==="submit"&&i&&i.stateNode===c){var u=tg((c[bt]||null).action),m=r.submitter;m&&(t=(t=m[bt]||null)?tg(t.formAction):m.getAttribute("formAction"),t!==null&&(u=t,m=null));var v=new Yl("action","action",null,r,c);e.push({event:v,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ri!==0){var S=m?ng(c,m):new FormData(c);Wc(i,{pending:!0,data:S,method:c.method,action:u},null,S)}}else typeof u=="function"&&(v.preventDefault(),S=m?ng(c,m):new FormData(c),Wc(i,{pending:!0,data:S,method:c.method,action:u},u,S))},currentTarget:c}]})}}for(var zu=0;zu<mc.length;zu++){var Ou=mc[zu],r_=Ou.toLowerCase(),o_=Ou[0].toUpperCase()+Ou.slice(1);Jt(r_,"on"+o_)}Jt(zh,"onAnimationEnd"),Jt(Oh,"onAnimationIteration"),Jt(kh,"onAnimationStart"),Jt("dblclick","onDoubleClick"),Jt("focusin","onFocus"),Jt("focusout","onBlur"),Jt(Ex,"onTransitionRun"),Jt(Nx,"onTransitionStart"),Jt(wx,"onTransitionCancel"),Jt(Lh,"onTransitionEnd"),ta("onMouseEnter",["mouseout","mouseover"]),ta("onMouseLeave",["mouseout","mouseover"]),ta("onPointerEnter",["pointerout","pointerover"]),ta("onPointerLeave",["pointerout","pointerover"]),Ci("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ci("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ci("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ci("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ci("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ci("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Is="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),c_=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Is));function ig(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var r=e[i],c=r.event;r=r.listeners;e:{var u=void 0;if(t)for(var m=r.length-1;0<=m;m--){var v=r[m],S=v.instance,A=v.currentTarget;if(v=v.listener,S!==u&&c.isPropagationStopped())break e;u=v,c.currentTarget=A;try{u(c)}catch(O){Fl(O)}c.currentTarget=null,u=S}else for(m=0;m<r.length;m++){if(v=r[m],S=v.instance,A=v.currentTarget,v=v.listener,S!==u&&c.isPropagationStopped())break e;u=v,c.currentTarget=A;try{u(c)}catch(O){Fl(O)}c.currentTarget=null,u=S}}}}function ve(e,t){var i=t[Xo];i===void 0&&(i=t[Xo]=new Set);var r=e+"__bubble";i.has(r)||(ag(t,e,2,!1),i.add(r))}function ku(e,t,i){var r=0;t&&(r|=4),ag(i,e,r,t)}var Mr="_reactListening"+Math.random().toString(36).slice(2);function Lu(e){if(!e[Mr]){e[Mr]=!0,$f.forEach(function(i){i!=="selectionchange"&&(c_.has(i)||ku(i,!1,e),ku(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mr]||(t[Mr]=!0,ku("selectionchange",!1,t))}}function ag(e,t,i,r){switch(zg(t)){case 2:var c=B_;break;case 8:c=U_;break;default:c=$u}i=c.bind(null,t,i,e),c=void 0,!nc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(t,i,{capture:!0,passive:c}):e.addEventListener(t,i,!0):c!==void 0?e.addEventListener(t,i,{passive:c}):e.addEventListener(t,i,!1)}function Bu(e,t,i,r,c){var u=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var m=r.tag;if(m===3||m===4){var v=r.stateNode.containerInfo;if(v===c)break;if(m===4)for(m=r.return;m!==null;){var S=m.tag;if((S===3||S===4)&&m.stateNode.containerInfo===c)return;m=m.return}for(;v!==null;){if(m=Wi(v),m===null)return;if(S=m.tag,S===5||S===6||S===26||S===27){r=u=m;continue e}v=v.parentNode}}r=r.return}ch(function(){var A=u,O=ec(i),L=[];e:{var j=Bh.get(e);if(j!==void 0){var D=Yl,Z=e;switch(e){case"keypress":if(Hl(i)===0)break e;case"keydown":case"keyup":D=nx;break;case"focusin":Z="focus",D=lc;break;case"focusout":Z="blur",D=lc;break;case"beforeblur":case"afterblur":D=lc;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=fh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=V1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=sx;break;case zh:case Oh:case kh:D=X1;break;case Lh:D=rx;break;case"scroll":case"scrollend":D=Y1;break;case"wheel":D=cx;break;case"copy":case"cut":case"paste":D=K1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=ph;break;case"toggle":case"beforetoggle":D=dx}var ie=(t&4)!==0,Oe=!ie&&(e==="scroll"||e==="scrollend"),w=ie?j!==null?j+"Capture":null:j;ie=[];for(var C=A,T;C!==null;){var k=C;if(T=k.stateNode,k=k.tag,k!==5&&k!==26&&k!==27||T===null||w===null||(k=rs(C,w),k!=null&&ie.push(Hs(C,k,T))),Oe)break;C=C.return}0<ie.length&&(j=new D(j,Z,null,i,O),L.push({event:j,listeners:ie}))}}if((t&7)===0){e:{if(j=e==="mouseover"||e==="pointerover",D=e==="mouseout"||e==="pointerout",j&&i!==Jo&&(Z=i.relatedTarget||i.fromElement)&&(Wi(Z)||Z[$i]))break e;if((D||j)&&(j=O.window===O?O:(j=O.ownerDocument)?j.defaultView||j.parentWindow:window,D?(Z=i.relatedTarget||i.toElement,D=A,Z=Z?Wi(Z):null,Z!==null&&(Oe=d(Z),ie=Z.tag,Z!==Oe||ie!==5&&ie!==27&&ie!==6)&&(Z=null)):(D=null,Z=A),D!==Z)){if(ie=fh,k="onMouseLeave",w="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(ie=ph,k="onPointerLeave",w="onPointerEnter",C="pointer"),Oe=D==null?j:ls(D),T=Z==null?j:ls(Z),j=new ie(k,C+"leave",D,i,O),j.target=Oe,j.relatedTarget=T,k=null,Wi(O)===A&&(ie=new ie(w,C+"enter",Z,i,O),ie.target=T,ie.relatedTarget=Oe,k=ie),Oe=k,D&&Z)t:{for(ie=u_,w=D,C=Z,T=0,k=w;k;k=ie(k))T++;k=0;for(var te=C;te;te=ie(te))k++;for(;0<T-k;)w=ie(w),T--;for(;0<k-T;)C=ie(C),k--;for(;T--;){if(w===C||C!==null&&w===C.alternate){ie=w;break t}w=ie(w),C=ie(C)}ie=null}else ie=null;D!==null&&sg(L,j,D,ie,!1),Z!==null&&Oe!==null&&sg(L,Oe,Z,ie,!0)}}e:{if(j=A?ls(A):window,D=j.nodeName&&j.nodeName.toLowerCase(),D==="select"||D==="input"&&j.type==="file")var Ne=Sh;else if(_h(j))if(Ch)Ne=bx;else{Ne=xx;var W=vx}else D=j.nodeName,!D||D.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?A&&Wo(A.elementType)&&(Ne=Sh):Ne=_x;if(Ne&&(Ne=Ne(e,A))){bh(L,Ne,i,O);break e}W&&W(e,j,A),e==="focusout"&&A&&j.type==="number"&&A.memoizedProps.value!=null&&$o(j,"number",j.value)}switch(W=A?ls(A):window,e){case"focusin":(_h(W)||W.contentEditable==="true")&&(ra=W,fc=A,ms=null);break;case"focusout":ms=fc=ra=null;break;case"mousedown":hc=!0;break;case"contextmenu":case"mouseup":case"dragend":hc=!1,Mh(L,i,O);break;case"selectionchange":if(Cx)break;case"keydown":case"keyup":Mh(L,i,O)}var ue;if(oc)e:{switch(e){case"compositionstart":var be="onCompositionStart";break e;case"compositionend":be="onCompositionEnd";break e;case"compositionupdate":be="onCompositionUpdate";break e}be=void 0}else la?vh(e,i)&&(be="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(be="onCompositionStart");be&&(mh&&i.locale!=="ko"&&(la||be!=="onCompositionStart"?be==="onCompositionEnd"&&la&&(ue=uh()):(Fn=O,ic="value"in Fn?Fn.value:Fn.textContent,la=!0)),W=Dr(A,be),0<W.length&&(be=new hh(be,e,null,i,O),L.push({event:be,listeners:W}),ue?be.data=ue:(ue=xh(i),ue!==null&&(be.data=ue)))),(ue=hx?px(e,i):mx(e,i))&&(be=Dr(A,"onBeforeInput"),0<be.length&&(W=new hh("onBeforeInput","beforeinput",null,i,O),L.push({event:W,listeners:be}),W.data=ue)),l_(L,e,A,i,O)}ig(L,t)})}function Hs(e,t,i){return{instance:e,listener:t,currentTarget:i}}function Dr(e,t){for(var i=t+"Capture",r=[];e!==null;){var c=e,u=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||u===null||(c=rs(e,i),c!=null&&r.unshift(Hs(e,c,u)),c=rs(e,t),c!=null&&r.push(Hs(e,c,u))),e.tag===3)return r;e=e.return}return[]}function u_(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function sg(e,t,i,r,c){for(var u=t._reactName,m=[];i!==null&&i!==r;){var v=i,S=v.alternate,A=v.stateNode;if(v=v.tag,S!==null&&S===r)break;v!==5&&v!==26&&v!==27||A===null||(S=A,c?(A=rs(i,u),A!=null&&m.unshift(Hs(i,A,S))):c||(A=rs(i,u),A!=null&&m.push(Hs(i,A,S)))),i=i.return}m.length!==0&&e.push({event:t,listeners:m})}var d_=/\r\n?/g,f_=/\u0000|\uFFFD/g;function lg(e){return(typeof e=="string"?e:""+e).replace(d_,`
`).replace(f_,"")}function rg(e,t){return t=lg(t),lg(e)===t}function ze(e,t,i,r,c,u){switch(i){case"children":typeof r=="string"?t==="body"||t==="textarea"&&r===""||ia(e,r):(typeof r=="number"||typeof r=="bigint")&&t!=="body"&&ia(e,""+r);break;case"className":Ll(e,"class",r);break;case"tabIndex":Ll(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Ll(e,i,r);break;case"style":rh(e,r,u);break;case"data":if(t!=="object"){Ll(e,"data",r);break}case"src":case"href":if(r===""&&(t!=="a"||i!=="href")){e.removeAttribute(i);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(i);break}r=Ul(""+r),e.setAttribute(i,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(i==="formAction"?(t!=="input"&&ze(e,t,"name",c.name,c,null),ze(e,t,"formEncType",c.formEncType,c,null),ze(e,t,"formMethod",c.formMethod,c,null),ze(e,t,"formTarget",c.formTarget,c,null)):(ze(e,t,"encType",c.encType,c,null),ze(e,t,"method",c.method,c,null),ze(e,t,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(i);break}r=Ul(""+r),e.setAttribute(i,r);break;case"onClick":r!=null&&(e.onclick=mn);break;case"onScroll":r!=null&&ve("scroll",e);break;case"onScrollEnd":r!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(l(61));if(i=r.__html,i!=null){if(c.children!=null)throw Error(l(60));e.innerHTML=i}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}i=Ul(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(i,""+r):e.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(i,""):e.removeAttribute(i);break;case"capture":case"download":r===!0?e.setAttribute(i,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(i,r):e.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(i,r):e.removeAttribute(i);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(i):e.setAttribute(i,r);break;case"popover":ve("beforetoggle",e),ve("toggle",e),kl(e,"popover",r);break;case"xlinkActuate":pn(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":pn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":pn(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":pn(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":pn(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":pn(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":pn(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":pn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":pn(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":kl(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=H1.get(i)||i,kl(e,i,r))}}function Uu(e,t,i,r,c,u){switch(i){case"style":rh(e,r,u);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(l(61));if(i=r.__html,i!=null){if(c.children!=null)throw Error(l(60));e.innerHTML=i}}break;case"children":typeof r=="string"?ia(e,r):(typeof r=="number"||typeof r=="bigint")&&ia(e,""+r);break;case"onScroll":r!=null&&ve("scroll",e);break;case"onScrollEnd":r!=null&&ve("scrollend",e);break;case"onClick":r!=null&&(e.onclick=mn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Wf.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(c=i.endsWith("Capture"),t=i.slice(2,c?i.length-7:void 0),u=e[bt]||null,u=u!=null?u[i]:null,typeof u=="function"&&e.removeEventListener(t,u,c),typeof r=="function")){typeof u!="function"&&u!==null&&(i in e?e[i]=null:e.hasAttribute(i)&&e.removeAttribute(i)),e.addEventListener(t,r,c);break e}i in e?e[i]=r:r===!0?e.setAttribute(i,""):kl(e,i,r)}}}function ht(e,t,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var r=!1,c=!1,u;for(u in i)if(i.hasOwnProperty(u)){var m=i[u];if(m!=null)switch(u){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:ze(e,t,u,m,i,null)}}c&&ze(e,t,"srcSet",i.srcSet,i,null),r&&ze(e,t,"src",i.src,i,null);return;case"input":ve("invalid",e);var v=u=m=c=null,S=null,A=null;for(r in i)if(i.hasOwnProperty(r)){var O=i[r];if(O!=null)switch(r){case"name":c=O;break;case"type":m=O;break;case"checked":S=O;break;case"defaultChecked":A=O;break;case"value":u=O;break;case"defaultValue":v=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(l(137,t));break;default:ze(e,t,r,O,i,null)}}ih(e,u,v,S,A,m,c,!1);return;case"select":ve("invalid",e),r=m=u=null;for(c in i)if(i.hasOwnProperty(c)&&(v=i[c],v!=null))switch(c){case"value":u=v;break;case"defaultValue":m=v;break;case"multiple":r=v;default:ze(e,t,c,v,i,null)}t=u,i=m,e.multiple=!!r,t!=null?na(e,!!r,t,!1):i!=null&&na(e,!!r,i,!0);return;case"textarea":ve("invalid",e),u=c=r=null;for(m in i)if(i.hasOwnProperty(m)&&(v=i[m],v!=null))switch(m){case"value":r=v;break;case"defaultValue":c=v;break;case"children":u=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(l(91));break;default:ze(e,t,m,v,i,null)}sh(e,r,c,u);return;case"option":for(S in i)i.hasOwnProperty(S)&&(r=i[S],r!=null)&&(S==="selected"?e.selected=r&&typeof r!="function"&&typeof r!="symbol":ze(e,t,S,r,i,null));return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(r=0;r<Is.length;r++)ve(Is[r],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in i)if(i.hasOwnProperty(A)&&(r=i[A],r!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:ze(e,t,A,r,i,null)}return;default:if(Wo(t)){for(O in i)i.hasOwnProperty(O)&&(r=i[O],r!==void 0&&Uu(e,t,O,r,i,void 0));return}}for(v in i)i.hasOwnProperty(v)&&(r=i[v],r!=null&&ze(e,t,v,r,i,null))}function h_(e,t,i,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,u=null,m=null,v=null,S=null,A=null,O=null;for(D in i){var L=i[D];if(i.hasOwnProperty(D)&&L!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":S=L;default:r.hasOwnProperty(D)||ze(e,t,D,null,r,L)}}for(var j in r){var D=r[j];if(L=i[j],r.hasOwnProperty(j)&&(D!=null||L!=null))switch(j){case"type":u=D;break;case"name":c=D;break;case"checked":A=D;break;case"defaultChecked":O=D;break;case"value":m=D;break;case"defaultValue":v=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(l(137,t));break;default:D!==L&&ze(e,t,j,D,r,L)}}Zo(e,m,v,S,A,O,u,c);return;case"select":D=m=v=j=null;for(u in i)if(S=i[u],i.hasOwnProperty(u)&&S!=null)switch(u){case"value":break;case"multiple":D=S;default:r.hasOwnProperty(u)||ze(e,t,u,null,r,S)}for(c in r)if(u=r[c],S=i[c],r.hasOwnProperty(c)&&(u!=null||S!=null))switch(c){case"value":j=u;break;case"defaultValue":v=u;break;case"multiple":m=u;default:u!==S&&ze(e,t,c,u,r,S)}t=v,i=m,r=D,j!=null?na(e,!!i,j,!1):!!r!=!!i&&(t!=null?na(e,!!i,t,!0):na(e,!!i,i?[]:"",!1));return;case"textarea":D=j=null;for(v in i)if(c=i[v],i.hasOwnProperty(v)&&c!=null&&!r.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:ze(e,t,v,null,r,c)}for(m in r)if(c=r[m],u=i[m],r.hasOwnProperty(m)&&(c!=null||u!=null))switch(m){case"value":j=c;break;case"defaultValue":D=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(l(91));break;default:c!==u&&ze(e,t,m,c,r,u)}ah(e,j,D);return;case"option":for(var Z in i)j=i[Z],i.hasOwnProperty(Z)&&j!=null&&!r.hasOwnProperty(Z)&&(Z==="selected"?e.selected=!1:ze(e,t,Z,null,r,j));for(S in r)j=r[S],D=i[S],r.hasOwnProperty(S)&&j!==D&&(j!=null||D!=null)&&(S==="selected"?e.selected=j&&typeof j!="function"&&typeof j!="symbol":ze(e,t,S,j,r,D));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in i)j=i[ie],i.hasOwnProperty(ie)&&j!=null&&!r.hasOwnProperty(ie)&&ze(e,t,ie,null,r,j);for(A in r)if(j=r[A],D=i[A],r.hasOwnProperty(A)&&j!==D&&(j!=null||D!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(l(137,t));break;default:ze(e,t,A,j,r,D)}return;default:if(Wo(t)){for(var Oe in i)j=i[Oe],i.hasOwnProperty(Oe)&&j!==void 0&&!r.hasOwnProperty(Oe)&&Uu(e,t,Oe,void 0,r,j);for(O in r)j=r[O],D=i[O],!r.hasOwnProperty(O)||j===D||j===void 0&&D===void 0||Uu(e,t,O,j,r,D);return}}for(var w in i)j=i[w],i.hasOwnProperty(w)&&j!=null&&!r.hasOwnProperty(w)&&ze(e,t,w,null,r,j);for(L in r)j=r[L],D=i[L],!r.hasOwnProperty(L)||j===D||j==null&&D==null||ze(e,t,L,j,r,D)}function og(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function p_(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,i=performance.getEntriesByType("resource"),r=0;r<i.length;r++){var c=i[r],u=c.transferSize,m=c.initiatorType,v=c.duration;if(u&&v&&og(m)){for(m=0,v=c.responseEnd,r+=1;r<i.length;r++){var S=i[r],A=S.startTime;if(A>v)break;var O=S.transferSize,L=S.initiatorType;O&&og(L)&&(S=S.responseEnd,m+=O*(S<v?1:(v-A)/(S-A)))}if(--r,t+=8*(u+m)/(c.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Iu=null,Hu=null;function zr(e){return e.nodeType===9?e:e.ownerDocument}function cg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ug(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function qu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yu=null;function m_(){var e=window.event;return e&&e.type==="popstate"?e===Yu?!1:(Yu=e,!0):(Yu=null,!1)}var dg=typeof setTimeout=="function"?setTimeout:void 0,g_=typeof clearTimeout=="function"?clearTimeout:void 0,fg=typeof Promise=="function"?Promise:void 0,y_=typeof queueMicrotask=="function"?queueMicrotask:typeof fg<"u"?function(e){return fg.resolve(null).then(e).catch(v_)}:dg;function v_(e){setTimeout(function(){throw e})}function oi(e){return e==="head"}function hg(e,t){var i=t,r=0;do{var c=i.nextSibling;if(e.removeChild(i),c&&c.nodeType===8)if(i=c.data,i==="/$"||i==="/&"){if(r===0){e.removeChild(c),Oa(t);return}r--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")r++;else if(i==="html")qs(e.ownerDocument.documentElement);else if(i==="head"){i=e.ownerDocument.head,qs(i);for(var u=i.firstChild;u;){var m=u.nextSibling,v=u.nodeName;u[ss]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&u.rel.toLowerCase()==="stylesheet"||i.removeChild(u),u=m}}else i==="body"&&qs(e.ownerDocument.body);i=c}while(i);Oa(t)}function pg(e,t){var i=e;e=0;do{var r=i.nextSibling;if(i.nodeType===1?t?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(t?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),r&&r.nodeType===8)if(i=r.data,i==="/$"){if(e===0)break;e--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||e++;i=r}while(i)}function Gu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var i=t;switch(t=t.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Gu(i),Po(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}e.removeChild(i)}}function x_(e,t,i,r){for(;e.nodeType===1;){var c=i;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[ss])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Zt(e.nextSibling),e===null)break}return null}function __(e,t,i){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Zt(e.nextSibling),e===null))return null;return e}function mg(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Zt(e.nextSibling),e===null))return null;return e}function Vu(e){return e.data==="$?"||e.data==="$~"}function Fu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function b_(e,t){var i=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||i.readyState!=="loading")t();else{var r=function(){t(),i.removeEventListener("DOMContentLoaded",r)};i.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Qu=null;function gg(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"||i==="/&"){if(t===0)return Zt(e.nextSibling);t--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||t++}e=e.nextSibling}return null}function yg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(t===0)return e;t--}else i!=="/$"&&i!=="/&"||t++}e=e.previousSibling}return null}function vg(e,t,i){switch(t=zr(i),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function qs(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Po(e)}var $t=new Map,xg=new Set;function Or(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Mn=q.d;q.d={f:S_,r:C_,D:E_,C:N_,L:w_,m:T_,X:j_,S:A_,M:R_};function S_(){var e=Mn.f(),t=Nr();return e||t}function C_(e){var t=Ji(e);t!==null&&t.tag===5&&t.type==="form"?Lp(t):Mn.r(e)}var Ma=typeof document>"u"?null:document;function _g(e,t,i){var r=Ma;if(r&&typeof t=="string"&&t){var c=Gt(t);c='link[rel="'+e+'"][href="'+c+'"]',typeof i=="string"&&(c+='[crossorigin="'+i+'"]'),xg.has(c)||(xg.add(c),e={rel:e,crossOrigin:i,href:t},r.querySelector(c)===null&&(t=r.createElement("link"),ht(t,"link",e),at(t),r.head.appendChild(t)))}}function E_(e){Mn.D(e),_g("dns-prefetch",e,null)}function N_(e,t){Mn.C(e,t),_g("preconnect",e,t)}function w_(e,t,i){Mn.L(e,t,i);var r=Ma;if(r&&e&&t){var c='link[rel="preload"][as="'+Gt(t)+'"]';t==="image"&&i&&i.imageSrcSet?(c+='[imagesrcset="'+Gt(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(c+='[imagesizes="'+Gt(i.imageSizes)+'"]')):c+='[href="'+Gt(e)+'"]';var u=c;switch(t){case"style":u=Da(e);break;case"script":u=za(e)}$t.has(u)||(e=x({rel:"preload",href:t==="image"&&i&&i.imageSrcSet?void 0:e,as:t},i),$t.set(u,e),r.querySelector(c)!==null||t==="style"&&r.querySelector(Ys(u))||t==="script"&&r.querySelector(Gs(u))||(t=r.createElement("link"),ht(t,"link",e),at(t),r.head.appendChild(t)))}}function T_(e,t){Mn.m(e,t);var i=Ma;if(i&&e){var r=t&&typeof t.as=="string"?t.as:"script",c='link[rel="modulepreload"][as="'+Gt(r)+'"][href="'+Gt(e)+'"]',u=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=za(e)}if(!$t.has(u)&&(e=x({rel:"modulepreload",href:e},t),$t.set(u,e),i.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Gs(u)))return}r=i.createElement("link"),ht(r,"link",e),at(r),i.head.appendChild(r)}}}function A_(e,t,i){Mn.S(e,t,i);var r=Ma;if(r&&e){var c=ea(r).hoistableStyles,u=Da(e);t=t||"default";var m=c.get(u);if(!m){var v={loading:0,preload:null};if(m=r.querySelector(Ys(u)))v.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":t},i),(i=$t.get(u))&&Xu(e,i);var S=m=r.createElement("link");at(S),ht(S,"link",e),S._p=new Promise(function(A,O){S.onload=A,S.onerror=O}),S.addEventListener("load",function(){v.loading|=1}),S.addEventListener("error",function(){v.loading|=2}),v.loading|=4,kr(m,t,r)}m={type:"stylesheet",instance:m,count:1,state:v},c.set(u,m)}}}function j_(e,t){Mn.X(e,t);var i=Ma;if(i&&e){var r=ea(i).hoistableScripts,c=za(e),u=r.get(c);u||(u=i.querySelector(Gs(c)),u||(e=x({src:e,async:!0},t),(t=$t.get(c))&&Pu(e,t),u=i.createElement("script"),at(u),ht(u,"link",e),i.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(c,u))}}function R_(e,t){Mn.M(e,t);var i=Ma;if(i&&e){var r=ea(i).hoistableScripts,c=za(e),u=r.get(c);u||(u=i.querySelector(Gs(c)),u||(e=x({src:e,async:!0,type:"module"},t),(t=$t.get(c))&&Pu(e,t),u=i.createElement("script"),at(u),ht(u,"link",e),i.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(c,u))}}function bg(e,t,i,r){var c=(c=ge.current)?Or(c):null;if(!c)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(t=Da(i.href),i=ea(c).hoistableStyles,r=i.get(t),r||(r={type:"style",instance:null,count:0,state:null},i.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){e=Da(i.href);var u=ea(c).hoistableStyles,m=u.get(e);if(m||(c=c.ownerDocument||c,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,m),(u=c.querySelector(Ys(e)))&&!u._p&&(m.instance=u,m.state.loading=5),$t.has(e)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},$t.set(e,i),u||M_(c,e,i,m.state))),t&&r===null)throw Error(l(528,""));return m}if(t&&r!==null)throw Error(l(529,""));return null;case"script":return t=i.async,i=i.src,typeof i=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=za(i),i=ea(c).hoistableScripts,r=i.get(t),r||(r={type:"script",instance:null,count:0,state:null},i.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function Da(e){return'href="'+Gt(e)+'"'}function Ys(e){return'link[rel="stylesheet"]['+e+"]"}function Sg(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function M_(e,t,i,r){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?r.loading=1:(t=e.createElement("link"),r.preload=t,t.addEventListener("load",function(){return r.loading|=1}),t.addEventListener("error",function(){return r.loading|=2}),ht(t,"link",i),at(t),e.head.appendChild(t))}function za(e){return'[src="'+Gt(e)+'"]'}function Gs(e){return"script[async]"+e}function Cg(e,t,i){if(t.count++,t.instance===null)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+Gt(i.href)+'"]');if(r)return t.instance=r,at(r),r;var c=x({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),at(r),ht(r,"style",c),kr(r,i.precedence,e),t.instance=r;case"stylesheet":c=Da(i.href);var u=e.querySelector(Ys(c));if(u)return t.state.loading|=4,t.instance=u,at(u),u;r=Sg(i),(c=$t.get(c))&&Xu(r,c),u=(e.ownerDocument||e).createElement("link"),at(u);var m=u;return m._p=new Promise(function(v,S){m.onload=v,m.onerror=S}),ht(u,"link",r),t.state.loading|=4,kr(u,i.precedence,e),t.instance=u;case"script":return u=za(i.src),(c=e.querySelector(Gs(u)))?(t.instance=c,at(c),c):(r=i,(c=$t.get(u))&&(r=x({},i),Pu(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),at(c),ht(c,"link",r),e.head.appendChild(c),t.instance=c);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(r=t.instance,t.state.loading|=4,kr(r,i.precedence,e));return t.instance}function kr(e,t,i){for(var r=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,u=c,m=0;m<r.length;m++){var v=r[m];if(v.dataset.precedence===t)u=v;else if(u!==c)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=i.nodeType===9?i.head:i,t.insertBefore(e,t.firstChild))}function Xu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Pu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Lr=null;function Eg(e,t,i){if(Lr===null){var r=new Map,c=Lr=new Map;c.set(i,r)}else c=Lr,r=c.get(i),r||(r=new Map,c.set(i,r));if(r.has(e))return r;for(r.set(e,null),i=i.getElementsByTagName(e),c=0;c<i.length;c++){var u=i[c];if(!(u[ss]||u[ct]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var m=u.getAttribute(t)||"";m=e+m;var v=r.get(m);v?v.push(u):r.set(m,[u])}}return r}function Ng(e,t,i){e=e.ownerDocument||e,e.head.insertBefore(i,t==="title"?e.querySelector("head > title"):null)}function D_(e,t,i){if(i===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function wg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function z_(e,t,i,r){if(i.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var c=Da(r.href),u=t.querySelector(Ys(c));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Br.bind(e),t.then(e,e)),i.state.loading|=4,i.instance=u,at(u);return}u=t.ownerDocument||t,r=Sg(r),(c=$t.get(c))&&Xu(r,c),u=u.createElement("link"),at(u);var m=u;m._p=new Promise(function(v,S){m.onload=v,m.onerror=S}),ht(u,"link",r),i.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(e.count++,i=Br.bind(e),t.addEventListener("load",i),t.addEventListener("error",i))}}var Ku=0;function O_(e,t){return e.stylesheets&&e.count===0&&Ir(e,e.stylesheets),0<e.count||0<e.imgCount?function(i){var r=setTimeout(function(){if(e.stylesheets&&Ir(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&Ku===0&&(Ku=62500*p_());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ir(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Ku?50:800)+t);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function Br(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ir(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ur=null;function Ir(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ur=new Map,t.forEach(k_,e),Ur=null,Br.call(e))}function k_(e,t){if(!(t.state.loading&4)){var i=Ur.get(e);if(i)var r=i.get(null);else{i=new Map,Ur.set(e,i);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<c.length;u++){var m=c[u];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(i.set(m.dataset.precedence,m),r=m)}r&&i.set(null,r)}c=t.instance,m=c.getAttribute("data-precedence"),u=i.get(m)||r,u===r&&i.set(null,c),i.set(m,c),this.count++,r=Br.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),u?u.parentNode.insertBefore(c,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),t.state.loading|=4}}var Vs={$$typeof:I,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function L_(e,t,i,r,c,u,m,v,S){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vo(0),this.hiddenUpdates=Vo(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=u,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function Tg(e,t,i,r,c,u,m,v,S,A,O,L){return e=new L_(e,t,i,m,S,A,O,L,v),t=1,u===!0&&(t|=24),u=Lt(3,null,null,t),e.current=u,u.stateNode=e,t=Ac(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:r,isDehydrated:i,cache:t},Dc(u),e}function Ag(e){return e?(e=ua,e):ua}function jg(e,t,i,r,c,u){c=Ag(c),r.context===null?r.context=c:r.pendingContext=c,r=$n(t),r.payload={element:i},u=u===void 0?null:u,u!==null&&(r.callback=u),i=Wn(e,r,t),i!==null&&(Tt(i,e,t),Ss(i,e,t))}function Rg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function Zu(e,t){Rg(e,t),(e=e.alternate)&&Rg(e,t)}function Mg(e){if(e.tag===13||e.tag===31){var t=Ti(e,67108864);t!==null&&Tt(t,e,67108864),Zu(e,67108864)}}function Dg(e){if(e.tag===13||e.tag===31){var t=qt();t=Fo(t);var i=Ti(e,t);i!==null&&Tt(i,e,t),Zu(e,t)}}var Hr=!0;function B_(e,t,i,r){var c=M.T;M.T=null;var u=q.p;try{q.p=2,$u(e,t,i,r)}finally{q.p=u,M.T=c}}function U_(e,t,i,r){var c=M.T;M.T=null;var u=q.p;try{q.p=8,$u(e,t,i,r)}finally{q.p=u,M.T=c}}function $u(e,t,i,r){if(Hr){var c=Wu(r);if(c===null)Bu(e,t,r,qr,i),Og(e,r);else if(H_(c,e,t,i,r))r.stopPropagation();else if(Og(e,r),t&4&&-1<I_.indexOf(e)){for(;c!==null;){var u=Ji(c);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var m=Si(u.pendingLanes);if(m!==0){var v=u;for(v.pendingLanes|=2,v.entangledLanes|=2;m;){var S=1<<31-Ot(m);v.entanglements[1]|=S,m&=~S}dn(u),(Te&6)===0&&(Cr=Dt()+500,Us(0))}}break;case 31:case 13:v=Ti(u,2),v!==null&&Tt(v,u,2),Nr(),Zu(u,2)}if(u=Wu(r),u===null&&Bu(e,t,r,qr,i),u===c)break;c=u}c!==null&&r.stopPropagation()}else Bu(e,t,r,null,i)}}function Wu(e){return e=ec(e),Ju(e)}var qr=null;function Ju(e){if(qr=null,e=Wi(e),e!==null){var t=d(e);if(t===null)e=null;else{var i=t.tag;if(i===13){if(e=h(t),e!==null)return e;e=null}else if(i===31){if(e=p(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return qr=e,null}function zg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(E1()){case qf:return 2;case Yf:return 8;case Rl:case N1:return 32;case Gf:return 268435456;default:return 32}default:return 32}}var ed=!1,ci=null,ui=null,di=null,Fs=new Map,Qs=new Map,fi=[],I_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Og(e,t){switch(e){case"focusin":case"focusout":ci=null;break;case"dragenter":case"dragleave":ui=null;break;case"mouseover":case"mouseout":di=null;break;case"pointerover":case"pointerout":Fs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qs.delete(t.pointerId)}}function Xs(e,t,i,r,c,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:i,eventSystemFlags:r,nativeEvent:u,targetContainers:[c]},t!==null&&(t=Ji(t),t!==null&&Mg(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function H_(e,t,i,r,c){switch(t){case"focusin":return ci=Xs(ci,e,t,i,r,c),!0;case"dragenter":return ui=Xs(ui,e,t,i,r,c),!0;case"mouseover":return di=Xs(di,e,t,i,r,c),!0;case"pointerover":var u=c.pointerId;return Fs.set(u,Xs(Fs.get(u)||null,e,t,i,r,c)),!0;case"gotpointercapture":return u=c.pointerId,Qs.set(u,Xs(Qs.get(u)||null,e,t,i,r,c)),!0}return!1}function kg(e){var t=Wi(e.target);if(t!==null){var i=d(t);if(i!==null){if(t=i.tag,t===13){if(t=h(i),t!==null){e.blockedOn=t,Kf(e.priority,function(){Dg(i)});return}}else if(t===31){if(t=p(i),t!==null){e.blockedOn=t,Kf(e.priority,function(){Dg(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=Wu(e.nativeEvent);if(i===null){i=e.nativeEvent;var r=new i.constructor(i.type,i);Jo=r,i.target.dispatchEvent(r),Jo=null}else return t=Ji(i),t!==null&&Mg(t),e.blockedOn=i,!1;t.shift()}return!0}function Lg(e,t,i){Yr(e)&&i.delete(t)}function q_(){ed=!1,ci!==null&&Yr(ci)&&(ci=null),ui!==null&&Yr(ui)&&(ui=null),di!==null&&Yr(di)&&(di=null),Fs.forEach(Lg),Qs.forEach(Lg)}function Gr(e,t){e.blockedOn===t&&(e.blockedOn=null,ed||(ed=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,q_)))}var Vr=null;function Bg(e){Vr!==e&&(Vr=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Vr===e&&(Vr=null);for(var t=0;t<e.length;t+=3){var i=e[t],r=e[t+1],c=e[t+2];if(typeof r!="function"){if(Ju(r||i)===null)continue;break}var u=Ji(i);u!==null&&(e.splice(t,3),t-=3,Wc(u,{pending:!0,data:c,method:i.method,action:r},r,c))}}))}function Oa(e){function t(S){return Gr(S,e)}ci!==null&&Gr(ci,e),ui!==null&&Gr(ui,e),di!==null&&Gr(di,e),Fs.forEach(t),Qs.forEach(t);for(var i=0;i<fi.length;i++){var r=fi[i];r.blockedOn===e&&(r.blockedOn=null)}for(;0<fi.length&&(i=fi[0],i.blockedOn===null);)kg(i),i.blockedOn===null&&fi.shift();if(i=(e.ownerDocument||e).$$reactFormReplay,i!=null)for(r=0;r<i.length;r+=3){var c=i[r],u=i[r+1],m=c[bt]||null;if(typeof u=="function")m||Bg(i);else if(m){var v=null;if(u&&u.hasAttribute("formAction")){if(c=u,m=u[bt]||null)v=m.formAction;else if(Ju(c)!==null)continue}else v=m.action;typeof v=="function"?i[r+1]=v:(i.splice(r,3),r-=3),Bg(i)}}}function Ug(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(m){return c=m})},focusReset:"manual",scroll:"manual"})}function t(){c!==null&&(c(),c=null),r||setTimeout(i,20)}function i(){if(!r&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(i,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),c!==null&&(c(),c=null)}}}function td(e){this._internalRoot=e}Fr.prototype.render=td.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var i=t.current,r=qt();jg(i,r,e,t,null,null)},Fr.prototype.unmount=td.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jg(e.current,2,null,e,null,null),Nr(),t[$i]=null}};function Fr(e){this._internalRoot=e}Fr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Pf();e={blockedOn:null,target:e,priority:t};for(var i=0;i<fi.length&&t!==0&&t<fi[i].priority;i++);fi.splice(i,0,e),i===0&&kg(e)}};var Ig=n.version;if(Ig!=="19.2.4")throw Error(l(527,Ig,"19.2.4"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=y(t),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var Y_={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qr.isDisabled&&Qr.supportsFiber)try{ns=Qr.inject(Y_),zt=Qr}catch{}}return Ks.createRoot=function(e,t){if(!o(e))throw Error(l(299));var i=!1,r="",c=Qp,u=Xp,m=Pp;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(c=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError)),t=Tg(e,1,!1,null,null,i,r,null,c,u,m,Ug),e[$i]=t.current,Lu(e),new td(t)},Ks.hydrateRoot=function(e,t,i){if(!o(e))throw Error(l(299));var r=!1,c="",u=Qp,m=Xp,v=Pp,S=null;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.formState!==void 0&&(S=i.formState)),t=Tg(e,1,!0,t,i??null,r,c,S,u,m,v,Ug),t.context=Ag(null),i=t.current,r=qt(),r=Fo(r),c=$n(r),c.callback=null,Wn(i,c,r),i=r,t.current.lanes=i,as(t,i),dn(t),e[$i]=t.current,Lu(e),new Fr(t)},Ks.version="19.2.4",Ks}var Kg;function J_(){if(Kg)return ad.exports;Kg=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(n){console.error(n)}}return a(),ad.exports=W_(),ad.exports}var eb=J_();const tb=iy(eb);var Zg="popstate";function nb(a={}){function n(l,o){let{pathname:d,search:h,hash:p}=l.location;return Nd("",{pathname:d,search:h,hash:p},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function s(l,o){return typeof o=="string"?o:ol(o)}return ab(n,s,null,a)}function Ve(a,n){if(a===!1||a===null||typeof a>"u")throw new Error(n)}function fn(a,n){if(!a){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function ib(){return Math.random().toString(36).substring(2,10)}function $g(a,n){return{usr:a.state,key:a.key,idx:n}}function Nd(a,n,s=null,l){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof n=="string"?Xa(n):n,state:s,key:n&&n.key||l||ib()}}function ol({pathname:a="/",search:n="",hash:s=""}){return n&&n!=="?"&&(a+=n.charAt(0)==="?"?n:"?"+n),s&&s!=="#"&&(a+=s.charAt(0)==="#"?s:"#"+s),a}function Xa(a){let n={};if(a){let s=a.indexOf("#");s>=0&&(n.hash=a.substring(s),a=a.substring(0,s));let l=a.indexOf("?");l>=0&&(n.search=a.substring(l),a=a.substring(0,l)),a&&(n.pathname=a)}return n}function ab(a,n,s,l={}){let{window:o=document.defaultView,v5Compat:d=!1}=l,h=o.history,p="POP",g=null,y=_();y==null&&(y=0,h.replaceState({...h.state,idx:y},""));function _(){return(h.state||{idx:null}).idx}function x(){p="POP";let H=_(),V=H==null?null:H-y;y=H,g&&g({action:p,location:U.location,delta:V})}function b(H,V){p="PUSH";let G=Nd(U.location,H,V);y=_()+1;let I=$g(G,y),X=U.createHref(G);try{h.pushState(I,"",X)}catch(K){if(K instanceof DOMException&&K.name==="DataCloneError")throw K;o.location.assign(X)}d&&g&&g({action:p,location:U.location,delta:1})}function R(H,V){p="REPLACE";let G=Nd(U.location,H,V);y=_();let I=$g(G,y),X=U.createHref(G);h.replaceState(I,"",X),d&&g&&g({action:p,location:U.location,delta:0})}function z(H){return sb(H)}let U={get action(){return p},get location(){return a(o,h)},listen(H){if(g)throw new Error("A history only accepts one active listener");return o.addEventListener(Zg,x),g=H,()=>{o.removeEventListener(Zg,x),g=null}},createHref(H){return n(o,H)},createURL:z,encodeLocation(H){let V=z(H);return{pathname:V.pathname,search:V.search,hash:V.hash}},push:b,replace:R,go(H){return h.go(H)}};return U}function sb(a,n=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),Ve(s,"No window.location.(origin|href) available to create URL");let l=typeof a=="string"?a:ol(a);return l=l.replace(/ $/,"%20"),!n&&l.startsWith("//")&&(l=s+l),new URL(l,s)}function ay(a,n,s="/"){return lb(a,n,s,!1)}function lb(a,n,s,l){let o=typeof n=="string"?Xa(n):n,d=kn(o.pathname||"/",s);if(d==null)return null;let h=sy(a);rb(h);let p=null;for(let g=0;p==null&&g<h.length;++g){let y=vb(d);p=gb(h[g],y,l)}return p}function sy(a,n=[],s=[],l="",o=!1){let d=(h,p,g=o,y)=>{let _={relativePath:y===void 0?h.path||"":y,caseSensitive:h.caseSensitive===!0,childrenIndex:p,route:h};if(_.relativePath.startsWith("/")){if(!_.relativePath.startsWith(l)&&g)return;Ve(_.relativePath.startsWith(l),`Absolute route path "${_.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),_.relativePath=_.relativePath.slice(l.length)}let x=zn([l,_.relativePath]),b=s.concat(_);h.children&&h.children.length>0&&(Ve(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),sy(h.children,n,b,x,g)),!(h.path==null&&!h.index)&&n.push({path:x,score:pb(x,h.index),routesMeta:b})};return a.forEach((h,p)=>{if(h.path===""||!h.path?.includes("?"))d(h,p);else for(let g of ly(h.path))d(h,p,!0,g)}),n}function ly(a){let n=a.split("/");if(n.length===0)return[];let[s,...l]=n,o=s.endsWith("?"),d=s.replace(/\?$/,"");if(l.length===0)return o?[d,""]:[d];let h=ly(l.join("/")),p=[];return p.push(...h.map(g=>g===""?d:[d,g].join("/"))),o&&p.push(...h),p.map(g=>a.startsWith("/")&&g===""?"/":g)}function rb(a){a.sort((n,s)=>n.score!==s.score?s.score-n.score:mb(n.routesMeta.map(l=>l.childrenIndex),s.routesMeta.map(l=>l.childrenIndex)))}var ob=/^:[\w-]+$/,cb=3,ub=2,db=1,fb=10,hb=-2,Wg=a=>a==="*";function pb(a,n){let s=a.split("/"),l=s.length;return s.some(Wg)&&(l+=hb),n&&(l+=ub),s.filter(o=>!Wg(o)).reduce((o,d)=>o+(ob.test(d)?cb:d===""?db:fb),l)}function mb(a,n){return a.length===n.length&&a.slice(0,-1).every((l,o)=>l===n[o])?a[a.length-1]-n[n.length-1]:0}function gb(a,n,s=!1){let{routesMeta:l}=a,o={},d="/",h=[];for(let p=0;p<l.length;++p){let g=l[p],y=p===l.length-1,_=d==="/"?n:n.slice(d.length)||"/",x=eo({path:g.relativePath,caseSensitive:g.caseSensitive,end:y},_),b=g.route;if(!x&&y&&s&&!l[l.length-1].route.index&&(x=eo({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},_)),!x)return null;Object.assign(o,x.params),h.push({params:o,pathname:zn([d,x.pathname]),pathnameBase:Sb(zn([d,x.pathnameBase])),route:b}),x.pathnameBase!=="/"&&(d=zn([d,x.pathnameBase]))}return h}function eo(a,n){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[s,l]=yb(a.path,a.caseSensitive,a.end),o=n.match(s);if(!o)return null;let d=o[0],h=d.replace(/(.)\/+$/,"$1"),p=o.slice(1);return{params:l.reduce((y,{paramName:_,isOptional:x},b)=>{if(_==="*"){let z=p[b]||"";h=d.slice(0,d.length-z.length).replace(/(.)\/+$/,"$1")}const R=p[b];return x&&!R?y[_]=void 0:y[_]=(R||"").replace(/%2F/g,"/"),y},{}),pathname:d,pathnameBase:h,pattern:a}}function yb(a,n=!1,s=!0){fn(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let l=[],o="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,p,g)=>(l.push({paramName:p,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(l.push({paramName:"*"}),o+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?o+="\\/*$":a!==""&&a!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,n?void 0:"i"),l]}function vb(a){try{return a.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return fn(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),a}}function kn(a,n){if(n==="/")return a;if(!a.toLowerCase().startsWith(n.toLowerCase()))return null;let s=n.endsWith("/")?n.length-1:n.length,l=a.charAt(s);return l&&l!=="/"?null:a.slice(s)||"/"}var xb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function _b(a,n="/"){let{pathname:s,search:l="",hash:o=""}=typeof a=="string"?Xa(a):a,d;return s?(s=s.replace(/\/\/+/g,"/"),s.startsWith("/")?d=Jg(s.substring(1),"/"):d=Jg(s,n)):d=n,{pathname:d,search:Cb(l),hash:Eb(o)}}function Jg(a,n){let s=n.replace(/\/+$/,"").split("/");return a.split("/").forEach(o=>{o===".."?s.length>1&&s.pop():o!=="."&&s.push(o)}),s.length>1?s.join("/"):"/"}function od(a,n,s,l){return`Cannot include a '${a}' character in a manually specified \`to.${n}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function bb(a){return a.filter((n,s)=>s===0||n.route.path&&n.route.path.length>0)}function ry(a){let n=bb(a);return n.map((s,l)=>l===n.length-1?s.pathname:s.pathnameBase)}function oy(a,n,s,l=!1){let o;typeof a=="string"?o=Xa(a):(o={...a},Ve(!o.pathname||!o.pathname.includes("?"),od("?","pathname","search",o)),Ve(!o.pathname||!o.pathname.includes("#"),od("#","pathname","hash",o)),Ve(!o.search||!o.search.includes("#"),od("#","search","hash",o)));let d=a===""||o.pathname==="",h=d?"/":o.pathname,p;if(h==null)p=s;else{let x=n.length-1;if(!l&&h.startsWith("..")){let b=h.split("/");for(;b[0]==="..";)b.shift(),x-=1;o.pathname=b.join("/")}p=x>=0?n[x]:"/"}let g=_b(o,p),y=h&&h!=="/"&&h.endsWith("/"),_=(d||h===".")&&s.endsWith("/");return!g.pathname.endsWith("/")&&(y||_)&&(g.pathname+="/"),g}var zn=a=>a.join("/").replace(/\/\/+/g,"/"),Sb=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),Cb=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,Eb=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,Nb=class{constructor(a,n,s,l=!1){this.status=a,this.statusText=n||"",this.internal=l,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}};function wb(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function Tb(a){return a.map(n=>n.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var cy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function uy(a,n){let s=a;if(typeof s!="string"||!xb.test(s))return{absoluteURL:void 0,isExternal:!1,to:s};let l=s,o=!1;if(cy)try{let d=new URL(window.location.href),h=s.startsWith("//")?new URL(d.protocol+s):new URL(s),p=kn(h.pathname,n);h.origin===d.origin&&p!=null?s=p+h.search+h.hash:o=!0}catch{fn(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:l,isExternal:o,to:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var dy=["POST","PUT","PATCH","DELETE"];new Set(dy);var Ab=["GET",...dy];new Set(Ab);var Pa=N.createContext(null);Pa.displayName="DataRouter";var bo=N.createContext(null);bo.displayName="DataRouterState";var jb=N.createContext(!1),fy=N.createContext({isTransitioning:!1});fy.displayName="ViewTransition";var Rb=N.createContext(new Map);Rb.displayName="Fetchers";var Mb=N.createContext(null);Mb.displayName="Await";var Wt=N.createContext(null);Wt.displayName="Navigation";var xl=N.createContext(null);xl.displayName="Location";var hn=N.createContext({outlet:null,matches:[],isDataRoute:!1});hn.displayName="Route";var Xd=N.createContext(null);Xd.displayName="RouteError";var hy="REACT_ROUTER_ERROR",Db="REDIRECT",zb="ROUTE_ERROR_RESPONSE";function Ob(a){if(a.startsWith(`${hy}:${Db}:{`))try{let n=JSON.parse(a.slice(28));if(typeof n=="object"&&n&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.location=="string"&&typeof n.reloadDocument=="boolean"&&typeof n.replace=="boolean")return n}catch{}}function kb(a){if(a.startsWith(`${hy}:${zb}:{`))try{let n=JSON.parse(a.slice(40));if(typeof n=="object"&&n&&typeof n.status=="number"&&typeof n.statusText=="string")return new Nb(n.status,n.statusText,n.data)}catch{}}function Lb(a,{relative:n}={}){Ve(_l(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:l}=N.useContext(Wt),{hash:o,pathname:d,search:h}=bl(a,{relative:n}),p=d;return s!=="/"&&(p=d==="/"?s:zn([s,d])),l.createHref({pathname:p,search:h,hash:o})}function _l(){return N.useContext(xl)!=null}function rn(){return Ve(_l(),"useLocation() may be used only in the context of a <Router> component."),N.useContext(xl).location}var py="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function my(a){N.useContext(Wt).static||N.useLayoutEffect(a)}function vt(){let{isDataRoute:a}=N.useContext(hn);return a?Zb():Bb()}function Bb(){Ve(_l(),"useNavigate() may be used only in the context of a <Router> component.");let a=N.useContext(Pa),{basename:n,navigator:s}=N.useContext(Wt),{matches:l}=N.useContext(hn),{pathname:o}=rn(),d=JSON.stringify(ry(l)),h=N.useRef(!1);return my(()=>{h.current=!0}),N.useCallback((g,y={})=>{if(fn(h.current,py),!h.current)return;if(typeof g=="number"){s.go(g);return}let _=oy(g,JSON.parse(d),o,y.relative==="path");a==null&&n!=="/"&&(_.pathname=_.pathname==="/"?n:zn([n,_.pathname])),(y.replace?s.replace:s.push)(_,y.state,y)},[n,s,d,o,a])}N.createContext(null);function Ub(){let{matches:a}=N.useContext(hn),n=a[a.length-1];return n?n.params:{}}function bl(a,{relative:n}={}){let{matches:s}=N.useContext(hn),{pathname:l}=rn(),o=JSON.stringify(ry(s));return N.useMemo(()=>oy(a,JSON.parse(o),l,n==="path"),[a,o,l,n])}function Ib(a,n){return gy(a,n)}function gy(a,n,s,l,o){Ve(_l(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=N.useContext(Wt),{matches:h}=N.useContext(hn),p=h[h.length-1],g=p?p.params:{},y=p?p.pathname:"/",_=p?p.pathnameBase:"/",x=p&&p.route;{let G=x&&x.path||"";vy(y,!x||G.endsWith("*")||G.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${G==="/"?"*":`${G}/*`}">.`)}let b=rn(),R;if(n){let G=typeof n=="string"?Xa(n):n;Ve(_==="/"||G.pathname?.startsWith(_),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${G.pathname}" was given in the \`location\` prop.`),R=G}else R=b;let z=R.pathname||"/",U=z;if(_!=="/"){let G=_.replace(/^\//,"").split("/");U="/"+z.replace(/^\//,"").split("/").slice(G.length).join("/")}let H=ay(a,{pathname:U});fn(x||H!=null,`No routes matched location "${R.pathname}${R.search}${R.hash}" `),fn(H==null||H[H.length-1].route.element!==void 0||H[H.length-1].route.Component!==void 0||H[H.length-1].route.lazy!==void 0,`Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let V=Vb(H&&H.map(G=>Object.assign({},G,{params:Object.assign({},g,G.params),pathname:zn([_,d.encodeLocation?d.encodeLocation(G.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:G.pathname]),pathnameBase:G.pathnameBase==="/"?_:zn([_,d.encodeLocation?d.encodeLocation(G.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:G.pathnameBase])})),h,s,l,o);return n&&V?N.createElement(xl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...R},navigationType:"POP"}},V):V}function Hb(){let a=Kb(),n=wb(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),s=a instanceof Error?a.stack:null,l="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:l},d={padding:"2px 4px",backgroundColor:l},h=null;return console.error("Error handled by React Router default ErrorBoundary:",a),h=N.createElement(N.Fragment,null,N.createElement("p",null,"💿 Hey developer 👋"),N.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",N.createElement("code",{style:d},"ErrorBoundary")," or"," ",N.createElement("code",{style:d},"errorElement")," prop on your route.")),N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},n),s?N.createElement("pre",{style:o},s):null,h)}var qb=N.createElement(Hb,null),yy=class extends N.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,n){return n.location!==a.location||n.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:n.error,location:n.location,revalidation:a.revalidation||n.revalidation}}componentDidCatch(a,n){this.props.onError?this.props.onError(a,n):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const s=kb(a.digest);s&&(a=s)}let n=a!==void 0?N.createElement(hn.Provider,{value:this.props.routeContext},N.createElement(Xd.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?N.createElement(Yb,{error:a},n):n}};yy.contextType=jb;var cd=new WeakMap;function Yb({children:a,error:n}){let{basename:s}=N.useContext(Wt);if(typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){let l=Ob(n.digest);if(l){let o=cd.get(n);if(o)throw o;let d=uy(l.location,s);if(cy&&!cd.get(n))if(d.isExternal||l.reloadDocument)window.location.href=d.absoluteURL||d.to;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(d.to,{replace:l.replace}));throw cd.set(n,h),h}return N.createElement("meta",{httpEquiv:"refresh",content:`0;url=${d.absoluteURL||d.to}`})}}return a}function Gb({routeContext:a,match:n,children:s}){let l=N.useContext(Pa);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(hn.Provider,{value:a},s)}function Vb(a,n=[],s=null,l=null,o=null){if(a==null){if(!s)return null;if(s.errors)a=s.matches;else if(n.length===0&&!s.initialized&&s.matches.length>0)a=s.matches;else return null}let d=a,h=s?.errors;if(h!=null){let _=d.findIndex(x=>x.route.id&&h?.[x.route.id]!==void 0);Ve(_>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),d=d.slice(0,Math.min(d.length,_+1))}let p=!1,g=-1;if(s)for(let _=0;_<d.length;_++){let x=d[_];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(g=_),x.route.id){let{loaderData:b,errors:R}=s,z=x.route.loader&&!b.hasOwnProperty(x.route.id)&&(!R||R[x.route.id]===void 0);if(x.route.lazy||z){p=!0,g>=0?d=d.slice(0,g+1):d=[d[0]];break}}}let y=s&&l?(_,x)=>{l(_,{location:s.location,params:s.matches?.[0]?.params??{},unstable_pattern:Tb(s.matches),errorInfo:x})}:void 0;return d.reduceRight((_,x,b)=>{let R,z=!1,U=null,H=null;s&&(R=h&&x.route.id?h[x.route.id]:void 0,U=x.route.errorElement||qb,p&&(g<0&&b===0?(vy("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),z=!0,H=null):g===b&&(z=!0,H=x.route.hydrateFallbackElement||null)));let V=n.concat(d.slice(0,b+1)),G=()=>{let I;return R?I=U:z?I=H:x.route.Component?I=N.createElement(x.route.Component,null):x.route.element?I=x.route.element:I=_,N.createElement(Gb,{match:x,routeContext:{outlet:_,matches:V,isDataRoute:s!=null},children:I})};return s&&(x.route.ErrorBoundary||x.route.errorElement||b===0)?N.createElement(yy,{location:s.location,revalidation:s.revalidation,component:U,error:R,children:G(),routeContext:{outlet:null,matches:V,isDataRoute:!0},onError:y}):G()},null)}function Pd(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fb(a){let n=N.useContext(Pa);return Ve(n,Pd(a)),n}function Qb(a){let n=N.useContext(bo);return Ve(n,Pd(a)),n}function Xb(a){let n=N.useContext(hn);return Ve(n,Pd(a)),n}function Kd(a){let n=Xb(a),s=n.matches[n.matches.length-1];return Ve(s.route.id,`${a} can only be used on routes that contain a unique "id"`),s.route.id}function Pb(){return Kd("useRouteId")}function Kb(){let a=N.useContext(Xd),n=Qb("useRouteError"),s=Kd("useRouteError");return a!==void 0?a:n.errors?.[s]}function Zb(){let{router:a}=Fb("useNavigate"),n=Kd("useNavigate"),s=N.useRef(!1);return my(()=>{s.current=!0}),N.useCallback(async(o,d={})=>{fn(s.current,py),s.current&&(typeof o=="number"?await a.navigate(o):await a.navigate(o,{fromRouteId:n,...d}))},[a,n])}var e0={};function vy(a,n,s){!n&&!e0[a]&&(e0[a]=!0,fn(!1,s))}N.memo($b);function $b({routes:a,future:n,state:s,onError:l}){return gy(a,void 0,s,l,n)}function gt(a){Ve(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Wb({basename:a="/",children:n=null,location:s,navigationType:l="POP",navigator:o,static:d=!1,unstable_useTransitions:h}){Ve(!_l(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=a.replace(/^\/*/,"/"),g=N.useMemo(()=>({basename:p,navigator:o,static:d,unstable_useTransitions:h,future:{}}),[p,o,d,h]);typeof s=="string"&&(s=Xa(s));let{pathname:y="/",search:_="",hash:x="",state:b=null,key:R="default"}=s,z=N.useMemo(()=>{let U=kn(y,p);return U==null?null:{location:{pathname:U,search:_,hash:x,state:b,key:R},navigationType:l}},[p,y,_,x,b,R,l]);return fn(z!=null,`<Router basename="${p}"> is not able to match the URL "${y}${_}${x}" because it does not start with the basename, so the <Router> won't render anything.`),z==null?null:N.createElement(Wt.Provider,{value:g},N.createElement(xl.Provider,{children:n,value:z}))}function Jb({children:a,location:n}){return Ib(wd(a),n)}function wd(a,n=[]){let s=[];return N.Children.forEach(a,(l,o)=>{if(!N.isValidElement(l))return;let d=[...n,o];if(l.type===N.Fragment){s.push.apply(s,wd(l.props.children,d));return}Ve(l.type===gt,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ve(!l.props.index||!l.props.children,"An index route cannot have child routes.");let h={id:l.props.id||d.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,middleware:l.props.middleware,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(h.children=wd(l.props.children,d)),s.push(h)}),s}var $r="get",Wr="application/x-www-form-urlencoded";function So(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function e2(a){return So(a)&&a.tagName.toLowerCase()==="button"}function t2(a){return So(a)&&a.tagName.toLowerCase()==="form"}function n2(a){return So(a)&&a.tagName.toLowerCase()==="input"}function i2(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function a2(a,n){return a.button===0&&(!n||n==="_self")&&!i2(a)}var Xr=null;function s2(){if(Xr===null)try{new FormData(document.createElement("form"),0),Xr=!1}catch{Xr=!0}return Xr}var l2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ud(a){return a!=null&&!l2.has(a)?(fn(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Wr}"`),null):a}function r2(a,n){let s,l,o,d,h;if(t2(a)){let p=a.getAttribute("action");l=p?kn(p,n):null,s=a.getAttribute("method")||$r,o=ud(a.getAttribute("enctype"))||Wr,d=new FormData(a)}else if(e2(a)||n2(a)&&(a.type==="submit"||a.type==="image")){let p=a.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=a.getAttribute("formaction")||p.getAttribute("action");if(l=g?kn(g,n):null,s=a.getAttribute("formmethod")||p.getAttribute("method")||$r,o=ud(a.getAttribute("formenctype"))||ud(p.getAttribute("enctype"))||Wr,d=new FormData(p,a),!s2()){let{name:y,type:_,value:x}=a;if(_==="image"){let b=y?`${y}.`:"";d.append(`${b}x`,"0"),d.append(`${b}y`,"0")}else y&&d.append(y,x)}}else{if(So(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=$r,l=null,o=Wr,h=a}return d&&o==="text/plain"&&(h=d,d=void 0),{action:l,method:s.toLowerCase(),encType:o,formData:d,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Zd(a,n){if(a===!1||a===null||typeof a>"u")throw new Error(n)}function o2(a,n,s,l){let o=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return s?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${l}`:o.pathname=`${o.pathname}.${l}`:o.pathname==="/"?o.pathname=`_root.${l}`:n&&kn(o.pathname,n)==="/"?o.pathname=`${n.replace(/\/$/,"")}/_root.${l}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${l}`,o}async function c2(a,n){if(a.id in n)return n[a.id];try{let s=await import(a.module);return n[a.id]=s,s}catch(s){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function u2(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function d2(a,n,s){let l=await Promise.all(a.map(async o=>{let d=n.routes[o.route.id];if(d){let h=await c2(d,s);return h.links?h.links():[]}return[]}));return m2(l.flat(1).filter(u2).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function t0(a,n,s,l,o,d){let h=(g,y)=>s[y]?g.route.id!==s[y].route.id:!0,p=(g,y)=>s[y].pathname!==g.pathname||s[y].route.path?.endsWith("*")&&s[y].params["*"]!==g.params["*"];return d==="assets"?n.filter((g,y)=>h(g,y)||p(g,y)):d==="data"?n.filter((g,y)=>{let _=l.routes[g.route.id];if(!_||!_.hasLoader)return!1;if(h(g,y)||p(g,y))return!0;if(g.route.shouldRevalidate){let x=g.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:s[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function f2(a,n,{includeHydrateFallback:s}={}){return h2(a.map(l=>{let o=n.routes[l.route.id];if(!o)return[];let d=[o.module];return o.clientActionModule&&(d=d.concat(o.clientActionModule)),o.clientLoaderModule&&(d=d.concat(o.clientLoaderModule)),s&&o.hydrateFallbackModule&&(d=d.concat(o.hydrateFallbackModule)),o.imports&&(d=d.concat(o.imports)),d}).flat(1))}function h2(a){return[...new Set(a)]}function p2(a){let n={},s=Object.keys(a).sort();for(let l of s)n[l]=a[l];return n}function m2(a,n){let s=new Set;return new Set(n),a.reduce((l,o)=>{let d=JSON.stringify(p2(o));return s.has(d)||(s.add(d),l.push({key:d,link:o})),l},[])}function xy(){let a=N.useContext(Pa);return Zd(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function g2(){let a=N.useContext(bo);return Zd(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var $d=N.createContext(void 0);$d.displayName="FrameworkContext";function _y(){let a=N.useContext($d);return Zd(a,"You must render this element inside a <HydratedRouter> element"),a}function y2(a,n){let s=N.useContext($d),[l,o]=N.useState(!1),[d,h]=N.useState(!1),{onFocus:p,onBlur:g,onMouseEnter:y,onMouseLeave:_,onTouchStart:x}=n,b=N.useRef(null);N.useEffect(()=>{if(a==="render"&&h(!0),a==="viewport"){let U=V=>{V.forEach(G=>{h(G.isIntersecting)})},H=new IntersectionObserver(U,{threshold:.5});return b.current&&H.observe(b.current),()=>{H.disconnect()}}},[a]),N.useEffect(()=>{if(l){let U=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(U)}}},[l]);let R=()=>{o(!0)},z=()=>{o(!1),h(!1)};return s?a!=="intent"?[d,b,{}]:[d,b,{onFocus:Zs(p,R),onBlur:Zs(g,z),onMouseEnter:Zs(y,R),onMouseLeave:Zs(_,z),onTouchStart:Zs(x,R)}]:[!1,b,{}]}function Zs(a,n){return s=>{a&&a(s),s.defaultPrevented||n(s)}}function v2({page:a,...n}){let{router:s}=xy(),l=N.useMemo(()=>ay(s.routes,a,s.basename),[s.routes,a,s.basename]);return l?N.createElement(_2,{page:a,matches:l,...n}):null}function x2(a){let{manifest:n,routeModules:s}=_y(),[l,o]=N.useState([]);return N.useEffect(()=>{let d=!1;return d2(a,n,s).then(h=>{d||o(h)}),()=>{d=!0}},[a,n,s]),l}function _2({page:a,matches:n,...s}){let l=rn(),{future:o,manifest:d,routeModules:h}=_y(),{basename:p}=xy(),{loaderData:g,matches:y}=g2(),_=N.useMemo(()=>t0(a,n,y,d,l,"data"),[a,n,y,d,l]),x=N.useMemo(()=>t0(a,n,y,d,l,"assets"),[a,n,y,d,l]),b=N.useMemo(()=>{if(a===l.pathname+l.search+l.hash)return[];let U=new Set,H=!1;if(n.forEach(G=>{let I=d.routes[G.route.id];!I||!I.hasLoader||(!_.some(X=>X.route.id===G.route.id)&&G.route.id in g&&h[G.route.id]?.shouldRevalidate||I.hasClientLoader?H=!0:U.add(G.route.id))}),U.size===0)return[];let V=o2(a,p,o.unstable_trailingSlashAwareDataRequests,"data");return H&&U.size>0&&V.searchParams.set("_routes",n.filter(G=>U.has(G.route.id)).map(G=>G.route.id).join(",")),[V.pathname+V.search]},[p,o.unstable_trailingSlashAwareDataRequests,g,l,d,_,n,a,h]),R=N.useMemo(()=>f2(x,d),[x,d]),z=x2(x);return N.createElement(N.Fragment,null,b.map(U=>N.createElement("link",{key:U,rel:"prefetch",as:"fetch",href:U,...s})),R.map(U=>N.createElement("link",{key:U,rel:"modulepreload",href:U,...s})),z.map(({key:U,link:H})=>N.createElement("link",{key:U,nonce:s.nonce,...H,crossOrigin:H.crossOrigin??s.crossOrigin})))}function b2(...a){return n=>{a.forEach(s=>{typeof s=="function"?s(n):s!=null&&(s.current=n)})}}var S2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{S2&&(window.__reactRouterVersion="7.13.0")}catch{}function C2({basename:a,children:n,unstable_useTransitions:s,window:l}){let o=N.useRef();o.current==null&&(o.current=nb({window:l,v5Compat:!0}));let d=o.current,[h,p]=N.useState({action:d.action,location:d.location}),g=N.useCallback(y=>{s===!1?p(y):N.startTransition(()=>p(y))},[s]);return N.useLayoutEffect(()=>d.listen(g),[d,g]),N.createElement(Wb,{basename:a,children:n,location:h.location,navigationType:h.action,navigator:d,unstable_useTransitions:s})}var by=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Sy=N.forwardRef(function({onClick:n,discover:s="render",prefetch:l="none",relative:o,reloadDocument:d,replace:h,state:p,target:g,to:y,preventScrollReset:_,viewTransition:x,unstable_defaultShouldRevalidate:b,...R},z){let{basename:U,unstable_useTransitions:H}=N.useContext(Wt),V=typeof y=="string"&&by.test(y),G=uy(y,U);y=G.to;let I=Lb(y,{relative:o}),[X,K,ee]=y2(l,R),F=w2(y,{replace:h,state:p,target:g,preventScrollReset:_,relative:o,viewTransition:x,unstable_defaultShouldRevalidate:b,unstable_useTransitions:H});function Ce(ae){n&&n(ae),ae.defaultPrevented||F(ae)}let J=N.createElement("a",{...R,...ee,href:G.absoluteURL||I,onClick:G.isExternal||d?n:Ce,ref:b2(z,K),target:g,"data-discover":!V&&s==="render"?"true":void 0});return X&&!V?N.createElement(N.Fragment,null,J,N.createElement(v2,{page:I})):J});Sy.displayName="Link";var Wd=N.forwardRef(function({"aria-current":n="page",caseSensitive:s=!1,className:l="",end:o=!1,style:d,to:h,viewTransition:p,children:g,...y},_){let x=bl(h,{relative:y.relative}),b=rn(),R=N.useContext(bo),{navigator:z,basename:U}=N.useContext(Wt),H=R!=null&&M2(x)&&p===!0,V=z.encodeLocation?z.encodeLocation(x).pathname:x.pathname,G=b.pathname,I=R&&R.navigation&&R.navigation.location?R.navigation.location.pathname:null;s||(G=G.toLowerCase(),I=I?I.toLowerCase():null,V=V.toLowerCase()),I&&U&&(I=kn(I,U)||I);const X=V!=="/"&&V.endsWith("/")?V.length-1:V.length;let K=G===V||!o&&G.startsWith(V)&&G.charAt(X)==="/",ee=I!=null&&(I===V||!o&&I.startsWith(V)&&I.charAt(V.length)==="/"),F={isActive:K,isPending:ee,isTransitioning:H},Ce=K?n:void 0,J;typeof l=="function"?J=l(F):J=[l,K?"active":null,ee?"pending":null,H?"transitioning":null].filter(Boolean).join(" ");let ae=typeof d=="function"?d(F):d;return N.createElement(Sy,{...y,"aria-current":Ce,className:J,ref:_,style:ae,to:h,viewTransition:p},typeof g=="function"?g(F):g)});Wd.displayName="NavLink";var E2=N.forwardRef(({discover:a="render",fetcherKey:n,navigate:s,reloadDocument:l,replace:o,state:d,method:h=$r,action:p,onSubmit:g,relative:y,preventScrollReset:_,viewTransition:x,unstable_defaultShouldRevalidate:b,...R},z)=>{let{unstable_useTransitions:U}=N.useContext(Wt),H=j2(),V=R2(p,{relative:y}),G=h.toLowerCase()==="get"?"get":"post",I=typeof p=="string"&&by.test(p),X=K=>{if(g&&g(K),K.defaultPrevented)return;K.preventDefault();let ee=K.nativeEvent.submitter,F=ee?.getAttribute("formmethod")||h,Ce=()=>H(ee||K.currentTarget,{fetcherKey:n,method:F,navigate:s,replace:o,state:d,relative:y,preventScrollReset:_,viewTransition:x,unstable_defaultShouldRevalidate:b});U&&s!==!1?N.startTransition(()=>Ce()):Ce()};return N.createElement("form",{ref:z,method:G,action:V,onSubmit:l?g:X,...R,"data-discover":!I&&a==="render"?"true":void 0})});E2.displayName="Form";function N2(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Cy(a){let n=N.useContext(Pa);return Ve(n,N2(a)),n}function w2(a,{target:n,replace:s,state:l,preventScrollReset:o,relative:d,viewTransition:h,unstable_defaultShouldRevalidate:p,unstable_useTransitions:g}={}){let y=vt(),_=rn(),x=bl(a,{relative:d});return N.useCallback(b=>{if(a2(b,n)){b.preventDefault();let R=s!==void 0?s:ol(_)===ol(x),z=()=>y(a,{replace:R,state:l,preventScrollReset:o,relative:d,viewTransition:h,unstable_defaultShouldRevalidate:p});g?N.startTransition(()=>z()):z()}},[_,y,x,s,l,n,a,o,d,h,p,g])}var T2=0,A2=()=>`__${String(++T2)}__`;function j2(){let{router:a}=Cy("useSubmit"),{basename:n}=N.useContext(Wt),s=Pb(),l=a.fetch,o=a.navigate;return N.useCallback(async(d,h={})=>{let{action:p,method:g,encType:y,formData:_,body:x}=r2(d,n);if(h.navigate===!1){let b=h.fetcherKey||A2();await l(b,s,h.action||p,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:_,body:x,formMethod:h.method||g,formEncType:h.encType||y,flushSync:h.flushSync})}else await o(h.action||p,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:_,body:x,formMethod:h.method||g,formEncType:h.encType||y,replace:h.replace,state:h.state,fromRouteId:s,flushSync:h.flushSync,viewTransition:h.viewTransition})},[l,o,n,s])}function R2(a,{relative:n}={}){let{basename:s}=N.useContext(Wt),l=N.useContext(hn);Ve(l,"useFormAction must be used inside a RouteContext");let[o]=l.matches.slice(-1),d={...bl(a||".",{relative:n})},h=rn();if(a==null){d.search=h.search;let p=new URLSearchParams(d.search),g=p.getAll("index");if(g.some(_=>_==="")){p.delete("index"),g.filter(x=>x).forEach(x=>p.append("index",x));let _=p.toString();d.search=_?`?${_}`:""}}return(!a||a===".")&&o.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(d.pathname=d.pathname==="/"?s:zn([s,d.pathname])),ol(d)}function M2(a,{relative:n}={}){let s=N.useContext(fy);Ve(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=Cy("useViewTransitionState"),o=bl(a,{relative:n});if(!s.isTransitioning)return!1;let d=kn(s.currentLocation.pathname,l)||s.currentLocation.pathname,h=kn(s.nextLocation.pathname,l)||s.nextLocation.pathname;return eo(o.pathname,h)!=null||eo(o.pathname,d)!=null}function D2(){const a=vt(),[n,s]=N.useState(0);return N.useEffect(()=>{const l=setTimeout(()=>s(1),300),o=setTimeout(()=>s(2),1200),d=setTimeout(()=>a("/login"),2800);return()=>{clearTimeout(l),clearTimeout(o),clearTimeout(d)}},[a]),f.jsxs("div",{className:"splash",children:[f.jsxs("div",{className:`splash-content ${n>=1?"visible":""}`,children:[f.jsxs("div",{className:"splash-logo",children:[f.jsx("div",{className:"lotus-icon",children:f.jsxs("svg",{viewBox:"0 0 80 80",fill:"none",children:[f.jsx("path",{d:"M40 8C40 8 25 25 25 40C25 55 40 65 40 65C40 65 55 55 55 40C55 25 40 8 40 8Z",fill:"rgba(139,168,136,0.3)",stroke:"#8BA888",strokeWidth:"1.5"}),f.jsx("path",{d:"M40 15C40 15 18 30 15 45C12 60 40 70 40 70C40 70 68 60 65 45C62 30 40 15 40 15Z",fill:"rgba(139,168,136,0.15)",stroke:"#8BA888",strokeWidth:"1"}),f.jsx("path",{d:"M40 20C40 20 30 35 30 45C30 55 40 60 40 60C40 60 50 55 50 45C50 35 40 20 40 20Z",fill:"rgba(139,168,136,0.4)",stroke:"#8BA888",strokeWidth:"1.5"}),f.jsx("circle",{cx:"40",cy:"42",r:"4",fill:"#8BA888"})]})}),f.jsx("h1",{className:"splash-title",children:"Revoshalaa"})]}),f.jsx("p",{className:`splash-tagline ${n>=2?"visible":""}`,children:"Learn. Move. Transform."})]}),f.jsx("div",{className:`splash-footer ${n>=2?"visible":""}`,children:f.jsx("p",{children:"Your Creator Store"})}),f.jsx("style",{children:`
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
      `})]})}const Ey=(...a)=>a.filter((n,s,l)=>!!n&&n.trim()!==""&&l.indexOf(n)===s).join(" ").trim();const z2=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const O2=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,s,l)=>l?l.toUpperCase():s.toLowerCase());const n0=a=>{const n=O2(a);return n.charAt(0).toUpperCase()+n.slice(1)};var k2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const L2=a=>{for(const n in a)if(n.startsWith("aria-")||n==="role"||n==="title")return!0;return!1};const B2=N.forwardRef(({color:a="currentColor",size:n=24,strokeWidth:s=2,absoluteStrokeWidth:l,className:o="",children:d,iconNode:h,...p},g)=>N.createElement("svg",{ref:g,...k2,width:n,height:n,stroke:a,strokeWidth:l?Number(s)*24/Number(n):s,className:Ey("lucide",o),...!d&&!L2(p)&&{"aria-hidden":"true"},...p},[...h.map(([y,_])=>N.createElement(y,_)),...Array.isArray(d)?d:[d]]));const se=(a,n)=>{const s=N.forwardRef(({className:l,...o},d)=>N.createElement(B2,{ref:d,iconNode:n,className:Ey(`lucide-${z2(n0(a))}`,`lucide-${a}`,l),...o}));return s.displayName=n0(a),s};const U2=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Ba=se("arrow-left",U2);const I2=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Td=se("arrow-right",I2);const H2=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],q2=se("award",H2);const Y2=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742",key:"178tsu"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05",key:"1hqiys"}]],G2=se("bell-off",Y2);const V2=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Ny=se("bell",V2);const F2=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Co=se("calendar",F2);const Q2=[["path",{d:"M14.564 14.558a3 3 0 1 1-4.122-4.121",key:"1rnrzw"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M20 20H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 .819-.175",key:"1x3arw"}],["path",{d:"M9.695 4.024A2 2 0 0 1 10.004 4h3.993a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v7.344",key:"1i84u0"}]],X2=se("camera-off",Q2);const P2=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],K2=se("camera",P2);const Z2=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],tl=se("check",Z2);const $2=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],yi=se("chevron-right",$2);const W2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],Vi=se("clock",W2);const J2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]],eS=se("compass",J2);const tS=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],wy=se("credit-card",tS);const nS=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],to=se("crown",nS);const iS=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],aS=se("dollar-sign",iS);const sS=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],lS=se("file-text",sS);const rS=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],oS=se("house",rS);const cS=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],uS=se("key",cS);const dS=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],fS=se("layout-dashboard",dS);const hS=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],pS=se("lock",hS);const mS=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],Ty=se("log-out",mS);const gS=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Ay=se("mail",gS);const yS=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],jy=se("maximize-2",yS);const vS=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],Jd=se("message-circle",vS);const xS=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M16.95 16.95A7 7 0 0 1 5 12v-2",key:"cqa7eg"}],["path",{d:"M18.89 13.23A7 7 0 0 0 19 12v-2",key:"16hl24"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}]],i0=se("mic-off",xS);const _S=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],a0=se("mic",_S);const bS=[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]],SS=se("minimize-2",bS);const CS=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],ES=se("pause",CS);const NS=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Ry=se("phone",NS);const wS=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],no=se("play",wS);const TS=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],AS=se("plus",TS);const jS=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],My=se("radio",jS);const RS=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],MS=se("search",RS);const DS=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],zS=se("send",DS);const OS=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Dy=se("settings",OS);const kS=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],LS=se("share-2",kS);const BS=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],zy=se("shield",BS);const US=[["path",{d:"M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",key:"15892j"}],["path",{d:"M3 20V4",key:"1ptbpl"}]],IS=se("skip-back",US);const HS=[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]],qS=se("skip-forward",HS);const YS=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],GS=se("sparkles",YS);const VS=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Eo=se("star",VS);const FS=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],s0=se("tag",FS);const QS=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],XS=se("trending-up",QS);const PS=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],No=se("user",PS);const KS=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Ka=se("users",KS);const ZS=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],Fi=se("video",ZS);const $S=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],WS=se("volume-2",$S);const JS=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],eC=se("x",JS);const tC=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Oy=se("zap",tC),ky=N.createContext({user:null,onlineUsers:{},checkOnlineStatus:()=>!1,login:()=>{},logout:()=>{},addCategory:()=>{},startLiveSession:()=>{},endLiveSession:()=>{},categories:[],tutors:[],liveSessions:[]}),_i=()=>N.useContext(ky),Pr=[{id:"fitness",name:"Fitness",emoji:"💪"},{id:"music",name:"Music",emoji:"🎵"},{id:"cooking",name:"Cooking",emoji:"🍳"},{id:"art",name:"Art & Design",emoji:"🎨"},{id:"business",name:"Business",emoji:"📈"},{id:"wellness",name:"Wellness",emoji:"🧘"}],nC=({children:a})=>{const[n,s]=N.useState(null),[l,o]=N.useState([]),[d,h]=N.useState([]),[p,g]=N.useState([]),[y,_]=N.useState({}),x=I=>{if(!I)return!1;const X=I.toString().toLowerCase();return!!y[X]},b=(I,X)=>{I&&_(K=>{const ee={...K,[I.toString()]:!0};return X&&(ee[X.toLowerCase()]=!0),localStorage.setItem("revoshalaa_online_users",JSON.stringify(ee)),ee})},R=(I,X)=>{_(K=>{const ee={...K};return I&&delete ee[I.toString()],X&&delete ee[X.toLowerCase()],localStorage.setItem("revoshalaa_online_users",JSON.stringify(ee)),ee})};N.useEffect(()=>{const I=K=>{if(K.key==="revoshalaa_online_users")try{const ee=JSON.parse(K.newValue);ee&&_(ee)}catch{}};window.addEventListener("storage",I);const X=localStorage.getItem("revoshalaa_online_users");if(X)try{_(JSON.parse(X))}catch{}return()=>window.removeEventListener("storage",I)},[]),N.useEffect(()=>{const I=localStorage.getItem("revoshalaa_user"),X=localStorage.getItem("revoshalaa_tutors"),K=localStorage.getItem("revoshalaa_sessions"),ee=localStorage.getItem("revoshalaa_categories");if(I)try{const F=JSON.parse(I);s(F),F&&F.id&&b(F.id,F.name)}catch(F){console.error("Failed to parse user",F),localStorage.removeItem("revoshalaa_user")}if(X)try{o(JSON.parse(X))}catch{localStorage.removeItem("revoshalaa_tutors")}if(K)try{h(JSON.parse(K))}catch{localStorage.removeItem("revoshalaa_sessions")}if(ee)try{g(JSON.parse(ee))}catch{localStorage.removeItem("revoshalaa_categories"),g(Pr),localStorage.setItem("revoshalaa_categories",JSON.stringify(Pr))}else g(Pr),localStorage.setItem("revoshalaa_categories",JSON.stringify(Pr))},[]);const z=(I,X="📌")=>{const K=I.toLowerCase().replace(/[^a-z0-9]/g,"-");if(p.some(J=>J.id===K||J.name.toLowerCase()===I.toLowerCase()))return p.find(J=>J.id===K||J.name.toLowerCase()===I.toLowerCase());const F={id:K,name:I,emoji:X},Ce=[...p,F];return g(Ce),localStorage.setItem("revoshalaa_categories",JSON.stringify(Ce)),F},U=(I,X)=>{const K={id:Date.now().toString(),name:X.firstName?`${X.firstName} ${X.lastName||""}`.trim():X.identifier?.split("@")[0]||"User",firstName:X.firstName||"",lastName:X.lastName||"",type:I,avatar:I==="tutor"?"🎓":"👤",category:X.category||"",specialty:X.specialty||"",identifier:X.identifier||""};if(s(K),b(K.id,K.name),localStorage.setItem("revoshalaa_user",JSON.stringify(K)),I==="tutor"){const ee=l.findIndex(Ce=>Ce.identifier===K.identifier);let F;ee>=0?(F=[...l],F[ee]=K):F=[...l,K],o(F),localStorage.setItem("revoshalaa_tutors",JSON.stringify(F))}return!0},H=()=>{n&&R(n.id,n.name),s(null),localStorage.removeItem("revoshalaa_user")},V=I=>{if(!n||n.type!=="tutor")return;const X={id:Date.now().toString(),tutorId:n.id,tutorName:n.name,tutorAvatar:n.avatar,title:I.title,category:I.category,viewers:0,startedAt:new Date().toISOString()},K=[...d,X];return h(K),localStorage.setItem("revoshalaa_sessions",JSON.stringify(K)),X},G=I=>{const X=d.filter(K=>K.id!==I);h(X),localStorage.setItem("revoshalaa_sessions",JSON.stringify(X))};return f.jsx(ky.Provider,{value:{user:n,tutors:l,liveSessions:d,categories:p,onlineUsers:y,checkOnlineStatus:x,login:U,logout:H,addCategory:z,startLiveSession:V,endLiveSession:G},children:a})},iC=()=>{};var l0={};const Ly={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};const Y=function(a,n){if(!a)throw Za(n)},Za=function(a){return new Error("Firebase Database ("+Ly.SDK_VERSION+") INTERNAL ASSERT FAILED: "+a)};const By=function(a){const n=[];let s=0;for(let l=0;l<a.length;l++){let o=a.charCodeAt(l);o<128?n[s++]=o:o<2048?(n[s++]=o>>6|192,n[s++]=o&63|128):(o&64512)===55296&&l+1<a.length&&(a.charCodeAt(l+1)&64512)===56320?(o=65536+((o&1023)<<10)+(a.charCodeAt(++l)&1023),n[s++]=o>>18|240,n[s++]=o>>12&63|128,n[s++]=o>>6&63|128,n[s++]=o&63|128):(n[s++]=o>>12|224,n[s++]=o>>6&63|128,n[s++]=o&63|128)}return n},aC=function(a){const n=[];let s=0,l=0;for(;s<a.length;){const o=a[s++];if(o<128)n[l++]=String.fromCharCode(o);else if(o>191&&o<224){const d=a[s++];n[l++]=String.fromCharCode((o&31)<<6|d&63)}else if(o>239&&o<365){const d=a[s++],h=a[s++],p=a[s++],g=((o&7)<<18|(d&63)<<12|(h&63)<<6|p&63)-65536;n[l++]=String.fromCharCode(55296+(g>>10)),n[l++]=String.fromCharCode(56320+(g&1023))}else{const d=a[s++],h=a[s++];n[l++]=String.fromCharCode((o&15)<<12|(d&63)<<6|h&63)}}return n.join("")},ef={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(a,n){if(!Array.isArray(a))throw Error("encodeByteArray takes an array as a parameter");this.init_();const s=n?this.byteToCharMapWebSafe_:this.byteToCharMap_,l=[];for(let o=0;o<a.length;o+=3){const d=a[o],h=o+1<a.length,p=h?a[o+1]:0,g=o+2<a.length,y=g?a[o+2]:0,_=d>>2,x=(d&3)<<4|p>>4;let b=(p&15)<<2|y>>6,R=y&63;g||(R=64,h||(b=64)),l.push(s[_],s[x],s[b],s[R])}return l.join("")},encodeString(a,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(a):this.encodeByteArray(By(a),n)},decodeString(a,n){return this.HAS_NATIVE_SUPPORT&&!n?atob(a):aC(this.decodeStringToByteArray(a,n))},decodeStringToByteArray(a,n){this.init_();const s=n?this.charToByteMapWebSafe_:this.charToByteMap_,l=[];for(let o=0;o<a.length;){const d=s[a.charAt(o++)],p=o<a.length?s[a.charAt(o)]:0;++o;const y=o<a.length?s[a.charAt(o)]:64;++o;const x=o<a.length?s[a.charAt(o)]:64;if(++o,d==null||p==null||y==null||x==null)throw new sC;const b=d<<2|p>>4;if(l.push(b),y!==64){const R=p<<4&240|y>>2;if(l.push(R),x!==64){const z=y<<6&192|x;l.push(z)}}}return l},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let a=0;a<this.ENCODED_VALS.length;a++)this.byteToCharMap_[a]=this.ENCODED_VALS.charAt(a),this.charToByteMap_[this.byteToCharMap_[a]]=a,this.byteToCharMapWebSafe_[a]=this.ENCODED_VALS_WEBSAFE.charAt(a),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[a]]=a,a>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(a)]=a,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(a)]=a)}}};class sC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Uy=function(a){const n=By(a);return ef.encodeByteArray(n,!0)},io=function(a){return Uy(a).replace(/\./g,"")},Ad=function(a){try{return ef.decodeString(a,!0)}catch(n){console.error("base64Decode failed: ",n)}return null};function lC(a){return Iy(void 0,a)}function Iy(a,n){if(!(n instanceof Object))return n;switch(n.constructor){case Date:const s=n;return new Date(s.getTime());case Object:a===void 0&&(a={});break;case Array:a=[];break;default:return n}for(const s in n)!n.hasOwnProperty(s)||!rC(s)||(a[s]=Iy(a[s],n[s]));return a}function rC(a){return a!=="__proto__"}function oC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}const cC=()=>oC().__FIREBASE_DEFAULTS__,uC=()=>{if(typeof process>"u"||typeof l0>"u")return;const a=l0.__FIREBASE_DEFAULTS__;if(a)return JSON.parse(a)},dC=()=>{if(typeof document>"u")return;let a;try{a=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const n=a&&Ad(a[1]);return n&&JSON.parse(n)},Hy=()=>{try{return iC()||cC()||uC()||dC()}catch(a){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${a}`);return}},fC=a=>Hy()?.emulatorHosts?.[a],hC=a=>{const n=fC(a);if(!n)return;const s=n.lastIndexOf(":");if(s<=0||s+1===n.length)throw new Error(`Invalid host ${n} with no separate hostname and port!`);const l=parseInt(n.substring(s+1),10);return n[0]==="["?[n.substring(1,s-1),l]:[n.substring(0,s),l]},qy=()=>Hy()?.config;class wo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((n,s)=>{this.resolve=n,this.reject=s})}wrapCallback(n){return(s,l)=>{s?this.reject(s):this.resolve(l),typeof n=="function"&&(this.promise.catch(()=>{}),n.length===1?n(s):n(s,l))}}}function tf(a){try{return(a.startsWith("http://")||a.startsWith("https://")?new URL(a).hostname:a).endsWith(".cloudworkstations.dev")}catch{return!1}}async function pC(a){return(await fetch(a,{credentials:"include"})).ok}function mC(a,n){if(a.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const s={alg:"none",type:"JWT"},l=n||"demo-project",o=a.iat||0,d=a.sub||a.user_id;if(!d)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${l}`,aud:l,iat:o,exp:o+3600,auth_time:o,sub:d,user_id:d,firebase:{sign_in_provider:"custom",identities:{}},...a};return[io(JSON.stringify(s)),io(JSON.stringify(h)),""].join(".")}const nl={};function gC(){const a={prod:[],emulator:[]};for(const n of Object.keys(nl))nl[n]?a.emulator.push(n):a.prod.push(n);return a}function yC(a){let n=document.getElementById(a),s=!1;return n||(n=document.createElement("div"),n.setAttribute("id",a),s=!0),{created:s,element:n}}let r0=!1;function vC(a,n){if(typeof window>"u"||typeof document>"u"||!tf(window.location.host)||nl[a]===n||nl[a]||r0)return;nl[a]=n;function s(b){return`__firebase__banner__${b}`}const l="__firebase__banner",d=gC().prod.length>0;function h(){const b=document.getElementById(l);b&&b.remove()}function p(b){b.style.display="flex",b.style.background="#7faaf0",b.style.position="fixed",b.style.bottom="5px",b.style.left="5px",b.style.padding=".5em",b.style.borderRadius="5px",b.style.alignItems="center"}function g(b,R){b.setAttribute("width","24"),b.setAttribute("id",R),b.setAttribute("height","24"),b.setAttribute("viewBox","0 0 24 24"),b.setAttribute("fill","none"),b.style.marginLeft="-6px"}function y(){const b=document.createElement("span");return b.style.cursor="pointer",b.style.marginLeft="16px",b.style.fontSize="24px",b.innerHTML=" &times;",b.onclick=()=>{r0=!0,h()},b}function _(b,R){b.setAttribute("id",R),b.innerText="Learn more",b.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",b.setAttribute("target","__blank"),b.style.paddingLeft="5px",b.style.textDecoration="underline"}function x(){const b=yC(l),R=s("text"),z=document.getElementById(R)||document.createElement("span"),U=s("learnmore"),H=document.getElementById(U)||document.createElement("a"),V=s("preprendIcon"),G=document.getElementById(V)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(b.created){const I=b.element;p(I),_(H,U);const X=y();g(G,V),I.append(G,z,H,X),document.body.appendChild(I)}d?(z.innerText="Preview backend disconnected.",G.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(G.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,z.innerText="Preview backend running in this workspace."),z.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",x):x()}function xC(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xC())}function _C(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bC(){return Ly.NODE_ADMIN===!0}function SC(){try{return typeof indexedDB=="object"}catch{return!1}}function CC(){return new Promise((a,n)=>{try{let s=!0;const l="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(l);o.onsuccess=()=>{o.result.close(),s||self.indexedDB.deleteDatabase(l),a(!0)},o.onupgradeneeded=()=>{s=!1},o.onerror=()=>{n(o.error?.message||"")}}catch(s){n(s)}})}const EC="FirebaseError";class Sl extends Error{constructor(n,s,l){super(s),this.code=n,this.customData=l,this.name=EC,Object.setPrototypeOf(this,Sl.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gy.prototype.create)}}class Gy{constructor(n,s,l){this.service=n,this.serviceName=s,this.errors=l}create(n,...s){const l=s[0]||{},o=`${this.service}/${n}`,d=this.errors[n],h=d?NC(d,l):"Error",p=`${this.serviceName}: ${h} (${o}).`;return new Sl(o,p,l)}}function NC(a,n){return a.replace(wC,(s,l)=>{const o=n[l];return o!=null?String(o):`<${l}?>`})}const wC=/\{\$([^}]+)}/g;function cl(a){return JSON.parse(a)}function ot(a){return JSON.stringify(a)}const Vy=function(a){let n={},s={},l={},o="";try{const d=a.split(".");n=cl(Ad(d[0])||""),s=cl(Ad(d[1])||""),o=d[2],l=s.d||{},delete s.d}catch{}return{header:n,claims:s,data:l,signature:o}},TC=function(a){const n=Vy(a),s=n.claims;return!!s&&typeof s=="object"&&s.hasOwnProperty("iat")},AC=function(a){const n=Vy(a).claims;return typeof n=="object"&&n.admin===!0};function qn(a,n){return Object.prototype.hasOwnProperty.call(a,n)}function Ya(a,n){if(Object.prototype.hasOwnProperty.call(a,n))return a[n]}function o0(a){for(const n in a)if(Object.prototype.hasOwnProperty.call(a,n))return!1;return!0}function ao(a,n,s){const l={};for(const o in a)Object.prototype.hasOwnProperty.call(a,o)&&(l[o]=n.call(s,a[o],o,a));return l}function so(a,n){if(a===n)return!0;const s=Object.keys(a),l=Object.keys(n);for(const o of s){if(!l.includes(o))return!1;const d=a[o],h=n[o];if(c0(d)&&c0(h)){if(!so(d,h))return!1}else if(d!==h)return!1}for(const o of l)if(!s.includes(o))return!1;return!0}function c0(a){return a!==null&&typeof a=="object"}function jC(a){const n=[];for(const[s,l]of Object.entries(a))Array.isArray(l)?l.forEach(o=>{n.push(encodeURIComponent(s)+"="+encodeURIComponent(o))}):n.push(encodeURIComponent(s)+"="+encodeURIComponent(l));return n.length?"&"+n.join("&"):""}class RC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let n=1;n<this.blockSize;++n)this.pad_[n]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(n,s){s||(s=0);const l=this.W_;if(typeof n=="string")for(let x=0;x<16;x++)l[x]=n.charCodeAt(s)<<24|n.charCodeAt(s+1)<<16|n.charCodeAt(s+2)<<8|n.charCodeAt(s+3),s+=4;else for(let x=0;x<16;x++)l[x]=n[s]<<24|n[s+1]<<16|n[s+2]<<8|n[s+3],s+=4;for(let x=16;x<80;x++){const b=l[x-3]^l[x-8]^l[x-14]^l[x-16];l[x]=(b<<1|b>>>31)&4294967295}let o=this.chain_[0],d=this.chain_[1],h=this.chain_[2],p=this.chain_[3],g=this.chain_[4],y,_;for(let x=0;x<80;x++){x<40?x<20?(y=p^d&(h^p),_=1518500249):(y=d^h^p,_=1859775393):x<60?(y=d&h|p&(d|h),_=2400959708):(y=d^h^p,_=3395469782);const b=(o<<5|o>>>27)+y+g+_+l[x]&4294967295;g=p,p=h,h=(d<<30|d>>>2)&4294967295,d=o,o=b}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+d&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+p&4294967295,this.chain_[4]=this.chain_[4]+g&4294967295}update(n,s){if(n==null)return;s===void 0&&(s=n.length);const l=s-this.blockSize;let o=0;const d=this.buf_;let h=this.inbuf_;for(;o<s;){if(h===0)for(;o<=l;)this.compress_(n,o),o+=this.blockSize;if(typeof n=="string"){for(;o<s;)if(d[h]=n.charCodeAt(o),++h,++o,h===this.blockSize){this.compress_(d),h=0;break}}else for(;o<s;)if(d[h]=n[o],++h,++o,h===this.blockSize){this.compress_(d),h=0;break}}this.inbuf_=h,this.total_+=s}digest(){const n=[];let s=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=s&255,s/=256;this.compress_(this.buf_);let l=0;for(let o=0;o<5;o++)for(let d=24;d>=0;d-=8)n[l]=this.chain_[o]>>d&255,++l;return n}}function nf(a,n){return`${a} failed: ${n} argument `}const MC=function(a){const n=[];let s=0;for(let l=0;l<a.length;l++){let o=a.charCodeAt(l);if(o>=55296&&o<=56319){const d=o-55296;l++,Y(l<a.length,"Surrogate pair missing trail surrogate.");const h=a.charCodeAt(l)-56320;o=65536+(d<<10)+h}o<128?n[s++]=o:o<2048?(n[s++]=o>>6|192,n[s++]=o&63|128):o<65536?(n[s++]=o>>12|224,n[s++]=o>>6&63|128,n[s++]=o&63|128):(n[s++]=o>>18|240,n[s++]=o>>12&63|128,n[s++]=o>>6&63|128,n[s++]=o&63|128)}return n},To=function(a){let n=0;for(let s=0;s<a.length;s++){const l=a.charCodeAt(s);l<128?n++:l<2048?n+=2:l>=55296&&l<=56319?(n+=4,s++):n+=3}return n};function $a(a){return a&&a._delegate?a._delegate:a}class ul{constructor(n,s,l){this.name=n,this.instanceFactory=s,this.type=l,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(n){return this.instantiationMode=n,this}setMultipleInstances(n){return this.multipleInstances=n,this}setServiceProps(n){return this.serviceProps=n,this}setInstanceCreatedCallback(n){return this.onInstanceCreated=n,this}}const Hi="[DEFAULT]";class DC{constructor(n,s){this.name=n,this.container=s,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(n){const s=this.normalizeInstanceIdentifier(n);if(!this.instancesDeferred.has(s)){const l=new wo;if(this.instancesDeferred.set(s,l),this.isInitialized(s)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:s});o&&l.resolve(o)}catch{}}return this.instancesDeferred.get(s).promise}getImmediate(n){const s=this.normalizeInstanceIdentifier(n?.identifier),l=n?.optional??!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(o){if(l)return null;throw o}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(n){if(n.name!==this.name)throw Error(`Mismatching Component ${n.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=n,!!this.shouldAutoInitialize()){if(OC(n))try{this.getOrInitializeService({instanceIdentifier:Hi})}catch{}for(const[s,l]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);try{const d=this.getOrInitializeService({instanceIdentifier:o});l.resolve(d)}catch{}}}}clearInstance(n=Hi){this.instancesDeferred.delete(n),this.instancesOptions.delete(n),this.instances.delete(n)}async delete(){const n=Array.from(this.instances.values());await Promise.all([...n.filter(s=>"INTERNAL"in s).map(s=>s.INTERNAL.delete()),...n.filter(s=>"_delete"in s).map(s=>s._delete())])}isComponentSet(){return this.component!=null}isInitialized(n=Hi){return this.instances.has(n)}getOptions(n=Hi){return this.instancesOptions.get(n)||{}}initialize(n={}){const{options:s={}}=n,l=this.normalizeInstanceIdentifier(n.instanceIdentifier);if(this.isInitialized(l))throw Error(`${this.name}(${l}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:l,options:s});for(const[d,h]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(d);l===p&&h.resolve(o)}return o}onInit(n,s){const l=this.normalizeInstanceIdentifier(s),o=this.onInitCallbacks.get(l)??new Set;o.add(n),this.onInitCallbacks.set(l,o);const d=this.instances.get(l);return d&&n(d,l),()=>{o.delete(n)}}invokeOnInitCallbacks(n,s){const l=this.onInitCallbacks.get(s);if(l)for(const o of l)try{o(n,s)}catch{}}getOrInitializeService({instanceIdentifier:n,options:s={}}){let l=this.instances.get(n);if(!l&&this.component&&(l=this.component.instanceFactory(this.container,{instanceIdentifier:zC(n),options:s}),this.instances.set(n,l),this.instancesOptions.set(n,s),this.invokeOnInitCallbacks(l,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,l)}catch{}return l||null}normalizeInstanceIdentifier(n=Hi){return this.component?this.component.multipleInstances?n:Hi:n}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zC(a){return a===Hi?void 0:a}function OC(a){return a.instantiationMode==="EAGER"}class kC{constructor(n){this.name=n,this.providers=new Map}addComponent(n){const s=this.getProvider(n.name);if(s.isComponentSet())throw new Error(`Component ${n.name} has already been registered with ${this.name}`);s.setComponent(n)}addOrOverwriteComponent(n){this.getProvider(n.name).isComponentSet()&&this.providers.delete(n.name),this.addComponent(n)}getProvider(n){if(this.providers.has(n))return this.providers.get(n);const s=new DC(n,this);return this.providers.set(n,s),s}getProviders(){return Array.from(this.providers.values())}}var Ue;(function(a){a[a.DEBUG=0]="DEBUG",a[a.VERBOSE=1]="VERBOSE",a[a.INFO=2]="INFO",a[a.WARN=3]="WARN",a[a.ERROR=4]="ERROR",a[a.SILENT=5]="SILENT"})(Ue||(Ue={}));const LC={debug:Ue.DEBUG,verbose:Ue.VERBOSE,info:Ue.INFO,warn:Ue.WARN,error:Ue.ERROR,silent:Ue.SILENT},BC=Ue.INFO,UC={[Ue.DEBUG]:"log",[Ue.VERBOSE]:"log",[Ue.INFO]:"info",[Ue.WARN]:"warn",[Ue.ERROR]:"error"},IC=(a,n,...s)=>{if(n<a.logLevel)return;const l=new Date().toISOString(),o=UC[n];if(o)console[o](`[${l}]  ${a.name}:`,...s);else throw new Error(`Attempted to log a message with an invalid logType (value: ${n})`)};class Fy{constructor(n){this.name=n,this._logLevel=BC,this._logHandler=IC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(n){if(!(n in Ue))throw new TypeError(`Invalid value "${n}" assigned to \`logLevel\``);this._logLevel=n}setLogLevel(n){this._logLevel=typeof n=="string"?LC[n]:n}get logHandler(){return this._logHandler}set logHandler(n){if(typeof n!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=n}get userLogHandler(){return this._userLogHandler}set userLogHandler(n){this._userLogHandler=n}debug(...n){this._userLogHandler&&this._userLogHandler(this,Ue.DEBUG,...n),this._logHandler(this,Ue.DEBUG,...n)}log(...n){this._userLogHandler&&this._userLogHandler(this,Ue.VERBOSE,...n),this._logHandler(this,Ue.VERBOSE,...n)}info(...n){this._userLogHandler&&this._userLogHandler(this,Ue.INFO,...n),this._logHandler(this,Ue.INFO,...n)}warn(...n){this._userLogHandler&&this._userLogHandler(this,Ue.WARN,...n),this._logHandler(this,Ue.WARN,...n)}error(...n){this._userLogHandler&&this._userLogHandler(this,Ue.ERROR,...n),this._logHandler(this,Ue.ERROR,...n)}}const HC=(a,n)=>n.some(s=>a instanceof s);let u0,d0;function qC(){return u0||(u0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YC(){return d0||(d0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qy=new WeakMap,jd=new WeakMap,Xy=new WeakMap,dd=new WeakMap,af=new WeakMap;function GC(a){const n=new Promise((s,l)=>{const o=()=>{a.removeEventListener("success",d),a.removeEventListener("error",h)},d=()=>{s(pi(a.result)),o()},h=()=>{l(a.error),o()};a.addEventListener("success",d),a.addEventListener("error",h)});return n.then(s=>{s instanceof IDBCursor&&Qy.set(s,a)}).catch(()=>{}),af.set(n,a),n}function VC(a){if(jd.has(a))return;const n=new Promise((s,l)=>{const o=()=>{a.removeEventListener("complete",d),a.removeEventListener("error",h),a.removeEventListener("abort",h)},d=()=>{s(),o()},h=()=>{l(a.error||new DOMException("AbortError","AbortError")),o()};a.addEventListener("complete",d),a.addEventListener("error",h),a.addEventListener("abort",h)});jd.set(a,n)}let Rd={get(a,n,s){if(a instanceof IDBTransaction){if(n==="done")return jd.get(a);if(n==="objectStoreNames")return a.objectStoreNames||Xy.get(a);if(n==="store")return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return pi(a[n])},set(a,n,s){return a[n]=s,!0},has(a,n){return a instanceof IDBTransaction&&(n==="done"||n==="store")?!0:n in a}};function FC(a){Rd=a(Rd)}function QC(a){return a===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(n,...s){const l=a.call(fd(this),n,...s);return Xy.set(l,n.sort?n.sort():[n]),pi(l)}:YC().includes(a)?function(...n){return a.apply(fd(this),n),pi(Qy.get(this))}:function(...n){return pi(a.apply(fd(this),n))}}function XC(a){return typeof a=="function"?QC(a):(a instanceof IDBTransaction&&VC(a),HC(a,qC())?new Proxy(a,Rd):a)}function pi(a){if(a instanceof IDBRequest)return GC(a);if(dd.has(a))return dd.get(a);const n=XC(a);return n!==a&&(dd.set(a,n),af.set(n,a)),n}const fd=a=>af.get(a);function PC(a,n,{blocked:s,upgrade:l,blocking:o,terminated:d}={}){const h=indexedDB.open(a,n),p=pi(h);return l&&h.addEventListener("upgradeneeded",g=>{l(pi(h.result),g.oldVersion,g.newVersion,pi(h.transaction),g)}),s&&h.addEventListener("blocked",g=>s(g.oldVersion,g.newVersion,g)),p.then(g=>{d&&g.addEventListener("close",()=>d()),o&&g.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),p}const KC=["get","getKey","getAll","getAllKeys","count"],ZC=["put","add","delete","clear"],hd=new Map;function f0(a,n){if(!(a instanceof IDBDatabase&&!(n in a)&&typeof n=="string"))return;if(hd.get(n))return hd.get(n);const s=n.replace(/FromIndex$/,""),l=n!==s,o=ZC.includes(s);if(!(s in(l?IDBIndex:IDBObjectStore).prototype)||!(o||KC.includes(s)))return;const d=async function(h,...p){const g=this.transaction(h,o?"readwrite":"readonly");let y=g.store;return l&&(y=y.index(p.shift())),(await Promise.all([y[s](...p),o&&g.done]))[0]};return hd.set(n,d),d}FC(a=>({...a,get:(n,s,l)=>f0(n,s)||a.get(n,s,l),has:(n,s)=>!!f0(n,s)||a.has(n,s)}));class $C{constructor(n){this.container=n}getPlatformInfoString(){return this.container.getProviders().map(s=>{if(WC(s)){const l=s.getImmediate();return`${l.library}/${l.version}`}else return null}).filter(s=>s).join(" ")}}function WC(a){return a.getComponent()?.type==="VERSION"}const Md="@firebase/app",h0="0.14.8";const Ln=new Fy("@firebase/app"),JC="@firebase/app-compat",e5="@firebase/analytics-compat",t5="@firebase/analytics",n5="@firebase/app-check-compat",i5="@firebase/app-check",a5="@firebase/auth",s5="@firebase/auth-compat",l5="@firebase/database",r5="@firebase/data-connect",o5="@firebase/database-compat",c5="@firebase/functions",u5="@firebase/functions-compat",d5="@firebase/installations",f5="@firebase/installations-compat",h5="@firebase/messaging",p5="@firebase/messaging-compat",m5="@firebase/performance",g5="@firebase/performance-compat",y5="@firebase/remote-config",v5="@firebase/remote-config-compat",x5="@firebase/storage",_5="@firebase/storage-compat",b5="@firebase/firestore",S5="@firebase/ai",C5="@firebase/firestore-compat",E5="firebase",N5="12.9.0";const Dd="[DEFAULT]",w5={[Md]:"fire-core",[JC]:"fire-core-compat",[t5]:"fire-analytics",[e5]:"fire-analytics-compat",[i5]:"fire-app-check",[n5]:"fire-app-check-compat",[a5]:"fire-auth",[s5]:"fire-auth-compat",[l5]:"fire-rtdb",[r5]:"fire-data-connect",[o5]:"fire-rtdb-compat",[c5]:"fire-fn",[u5]:"fire-fn-compat",[d5]:"fire-iid",[f5]:"fire-iid-compat",[h5]:"fire-fcm",[p5]:"fire-fcm-compat",[m5]:"fire-perf",[g5]:"fire-perf-compat",[y5]:"fire-rc",[v5]:"fire-rc-compat",[x5]:"fire-gcs",[_5]:"fire-gcs-compat",[b5]:"fire-fst",[C5]:"fire-fst-compat",[S5]:"fire-vertex","fire-js":"fire-js",[E5]:"fire-js-all"};const lo=new Map,T5=new Map,zd=new Map;function p0(a,n){try{a.container.addComponent(n)}catch(s){Ln.debug(`Component ${n.name} failed to register with FirebaseApp ${a.name}`,s)}}function ro(a){const n=a.name;if(zd.has(n))return Ln.debug(`There were multiple attempts to register component ${n}.`),!1;zd.set(n,a);for(const s of lo.values())p0(s,a);for(const s of T5.values())p0(s,a);return!0}function A5(a,n){const s=a.container.getProvider("heartbeat").getImmediate({optional:!0});return s&&s.triggerHeartbeat(),a.container.getProvider(n)}function j5(a){return a==null?!1:a.settings!==void 0}const R5={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mi=new Gy("app","Firebase",R5);class M5{constructor(n,s,l){this._isDeleted=!1,this._options={...n},this._config={...s},this._name=s.name,this._automaticDataCollectionEnabled=s.automaticDataCollectionEnabled,this._container=l,this.container.addComponent(new ul("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(n){this.checkDestroyed(),this._automaticDataCollectionEnabled=n}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(n){this._isDeleted=n}checkDestroyed(){if(this.isDeleted)throw mi.create("app-deleted",{appName:this._name})}}const D5=N5;function Py(a,n={}){let s=a;typeof n!="object"&&(n={name:n});const l={name:Dd,automaticDataCollectionEnabled:!0,...n},o=l.name;if(typeof o!="string"||!o)throw mi.create("bad-app-name",{appName:String(o)});if(s||(s=qy()),!s)throw mi.create("no-options");const d=lo.get(o);if(d){if(so(s,d.options)&&so(l,d.config))return d;throw mi.create("duplicate-app",{appName:o})}const h=new kC(o);for(const g of zd.values())h.addComponent(g);const p=new M5(s,l,h);return lo.set(o,p),p}function z5(a=Dd){const n=lo.get(a);if(!n&&a===Dd&&qy())return Py();if(!n)throw mi.create("no-app",{appName:a});return n}function Ua(a,n,s){let l=w5[a]??a;s&&(l+=`-${s}`);const o=l.match(/\s|\//),d=n.match(/\s|\//);if(o||d){const h=[`Unable to register library "${l}" with version "${n}":`];o&&h.push(`library name "${l}" contains illegal characters (whitespace or "/")`),o&&d&&h.push("and"),d&&h.push(`version name "${n}" contains illegal characters (whitespace or "/")`),Ln.warn(h.join(" "));return}ro(new ul(`${l}-version`,()=>({library:l,version:n}),"VERSION"))}const O5="firebase-heartbeat-database",k5=1,dl="firebase-heartbeat-store";let pd=null;function Ky(){return pd||(pd=PC(O5,k5,{upgrade:(a,n)=>{switch(n){case 0:try{a.createObjectStore(dl)}catch(s){console.warn(s)}}}}).catch(a=>{throw mi.create("idb-open",{originalErrorMessage:a.message})})),pd}async function L5(a){try{const s=(await Ky()).transaction(dl),l=await s.objectStore(dl).get(Zy(a));return await s.done,l}catch(n){if(n instanceof Sl)Ln.warn(n.message);else{const s=mi.create("idb-get",{originalErrorMessage:n?.message});Ln.warn(s.message)}}}async function m0(a,n){try{const l=(await Ky()).transaction(dl,"readwrite");await l.objectStore(dl).put(n,Zy(a)),await l.done}catch(s){if(s instanceof Sl)Ln.warn(s.message);else{const l=mi.create("idb-set",{originalErrorMessage:s?.message});Ln.warn(l.message)}}}function Zy(a){return`${a.name}!${a.options.appId}`}const B5=1024,U5=30;class I5{constructor(n){this.container=n,this._heartbeatsCache=null;const s=this.container.getProvider("app").getImmediate();this._storage=new q5(s),this._heartbeatsCachePromise=this._storage.read().then(l=>(this._heartbeatsCache=l,l))}async triggerHeartbeat(){try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=g0();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(o=>o.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:s}),this._heartbeatsCache.heartbeats.length>U5){const o=Y5(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Ln.warn(n)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=g0(),{heartbeatsToSend:s,unsentEntries:l}=H5(this._heartbeatsCache.heartbeats),o=io(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return Ln.warn(n),""}}}function g0(){return new Date().toISOString().substring(0,10)}function H5(a,n=B5){const s=[];let l=a.slice();for(const o of a){const d=s.find(h=>h.agent===o.agent);if(d){if(d.dates.push(o.date),y0(s)>n){d.dates.pop();break}}else if(s.push({agent:o.agent,dates:[o.date]}),y0(s)>n){s.pop();break}l=l.slice(1)}return{heartbeatsToSend:s,unsentEntries:l}}class q5{constructor(n){this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return SC()?CC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const s=await L5(this.app);return s?.heartbeats?s:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(n){if(await this._canUseIndexedDBPromise){const l=await this.read();return m0(this.app,{lastSentHeartbeatDate:n.lastSentHeartbeatDate??l.lastSentHeartbeatDate,heartbeats:n.heartbeats})}else return}async add(n){if(await this._canUseIndexedDBPromise){const l=await this.read();return m0(this.app,{lastSentHeartbeatDate:n.lastSentHeartbeatDate??l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...n.heartbeats]})}else return}}function y0(a){return io(JSON.stringify({version:2,heartbeats:a})).length}function Y5(a){if(a.length===0)return-1;let n=0,s=a[0].date;for(let l=1;l<a.length;l++)a[l].date<s&&(s=a[l].date,n=l);return n}function G5(a){ro(new ul("platform-logger",n=>new $C(n),"PRIVATE")),ro(new ul("heartbeat",n=>new I5(n),"PRIVATE")),Ua(Md,h0,a),Ua(Md,h0,"esm2020"),Ua("fire-js","")}G5("");var V5="firebase",F5="12.9.0";Ua(V5,F5,"app");var v0={};const x0="@firebase/database",_0="1.1.0";let $y="";function Q5(a){$y=a}class X5{constructor(n){this.domStorage_=n,this.prefix_="firebase:"}set(n,s){s==null?this.domStorage_.removeItem(this.prefixedName_(n)):this.domStorage_.setItem(this.prefixedName_(n),ot(s))}get(n){const s=this.domStorage_.getItem(this.prefixedName_(n));return s==null?null:cl(s)}remove(n){this.domStorage_.removeItem(this.prefixedName_(n))}prefixedName_(n){return this.prefix_+n}toString(){return this.domStorage_.toString()}}class P5{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(n,s){s==null?delete this.cache_[n]:this.cache_[n]=s}get(n){return qn(this.cache_,n)?this.cache_[n]:null}remove(n){delete this.cache_[n]}}const Wy=function(a){try{if(typeof window<"u"&&typeof window[a]<"u"){const n=window[a];return n.setItem("firebase:sentinel","cache"),n.removeItem("firebase:sentinel"),new X5(n)}}catch{}return new P5},Yi=Wy("localStorage"),K5=Wy("sessionStorage");const Ia=new Fy("@firebase/database"),Z5=(function(){let a=1;return function(){return a++}})(),Jy=function(a){const n=MC(a),s=new RC;s.update(n);const l=s.digest();return ef.encodeByteArray(l)},Cl=function(...a){let n="";for(let s=0;s<a.length;s++){const l=a[s];Array.isArray(l)||l&&typeof l=="object"&&typeof l.length=="number"?n+=Cl.apply(null,l):typeof l=="object"?n+=ot(l):n+=l,n+=" "}return n};let il=null,b0=!0;const $5=function(a,n){Y(!0,"Can't turn on custom loggers persistently."),Ia.logLevel=Ue.VERBOSE,il=Ia.log.bind(Ia)},yt=function(...a){if(b0===!0&&(b0=!1,il===null&&K5.get("logging_enabled")===!0&&$5()),il){const n=Cl.apply(null,a);il(n)}},El=function(a){return function(...n){yt(a,...n)}},Od=function(...a){const n="FIREBASE INTERNAL ERROR: "+Cl(...a);Ia.error(n)},Bn=function(...a){const n=`FIREBASE FATAL ERROR: ${Cl(...a)}`;throw Ia.error(n),new Error(n)},Rt=function(...a){const n="FIREBASE WARNING: "+Cl(...a);Ia.warn(n)},W5=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Rt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ev=function(a){return typeof a=="number"&&(a!==a||a===Number.POSITIVE_INFINITY||a===Number.NEGATIVE_INFINITY)},J5=function(a){if(document.readyState==="complete")a();else{let n=!1;const s=function(){if(!document.body){setTimeout(s,Math.floor(10));return}n||(n=!0,a())};document.addEventListener?(document.addEventListener("DOMContentLoaded",s,!1),window.addEventListener("load",s,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&s()}),window.attachEvent("onload",s))}},Ga="[MIN_NAME]",Qi="[MAX_NAME]",Wa=function(a,n){if(a===n)return 0;if(a===Ga||n===Qi)return-1;if(n===Ga||a===Qi)return 1;{const s=S0(a),l=S0(n);return s!==null?l!==null?s-l===0?a.length-n.length:s-l:-1:l!==null?1:a<n?-1:1}},eE=function(a,n){return a===n?0:a<n?-1:1},$s=function(a,n){if(n&&a in n)return n[a];throw new Error("Missing required key ("+a+") in object: "+ot(n))},sf=function(a){if(typeof a!="object"||a===null)return ot(a);const n=[];for(const l in a)n.push(l);n.sort();let s="{";for(let l=0;l<n.length;l++)l!==0&&(s+=","),s+=ot(n[l]),s+=":",s+=sf(a[n[l]]);return s+="}",s},tv=function(a,n){const s=a.length;if(s<=n)return[a];const l=[];for(let o=0;o<s;o+=n)o+n>s?l.push(a.substring(o,s)):l.push(a.substring(o,o+n));return l};function Mt(a,n){for(const s in a)a.hasOwnProperty(s)&&n(s,a[s])}const nv=function(a){Y(!ev(a),"Invalid JSON number");const n=11,s=52,l=(1<<n-1)-1;let o,d,h,p,g;a===0?(d=0,h=0,o=1/a===-1/0?1:0):(o=a<0,a=Math.abs(a),a>=Math.pow(2,1-l)?(p=Math.min(Math.floor(Math.log(a)/Math.LN2),l),d=p+l,h=Math.round(a*Math.pow(2,s-p)-Math.pow(2,s))):(d=0,h=Math.round(a/Math.pow(2,1-l-s))));const y=[];for(g=s;g;g-=1)y.push(h%2?1:0),h=Math.floor(h/2);for(g=n;g;g-=1)y.push(d%2?1:0),d=Math.floor(d/2);y.push(o?1:0),y.reverse();const _=y.join("");let x="";for(g=0;g<64;g+=8){let b=parseInt(_.substr(g,8),2).toString(16);b.length===1&&(b="0"+b),x=x+b}return x.toLowerCase()},tE=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},nE=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function iE(a,n){let s="Unknown Error";a==="too_big"?s="The data requested exceeds the maximum size that can be accessed with a single request.":a==="permission_denied"?s="Client doesn't have permission to access the desired data.":a==="unavailable"&&(s="The service is unavailable");const l=new Error(a+" at "+n._path.toString()+": "+s);return l.code=a.toUpperCase(),l}const aE=new RegExp("^-?(0*)\\d{1,10}$"),sE=-2147483648,lE=2147483647,S0=function(a){if(aE.test(a)){const n=Number(a);if(n>=sE&&n<=lE)return n}return null},Ja=function(a){try{a()}catch(n){setTimeout(()=>{const s=n.stack||"";throw Rt("Exception was thrown by user callback.",s),n},Math.floor(0))}},rE=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},al=function(a,n){const s=setTimeout(a,n);return typeof s=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(s):typeof s=="object"&&s.unref&&s.unref(),s};class oE{constructor(n,s){this.appCheckProvider=s,this.appName=n.name,j5(n)&&n.settings.appCheckToken&&(this.serverAppAppCheckToken=n.settings.appCheckToken),this.appCheck=s?.getImmediate({optional:!0}),this.appCheck||s?.get().then(l=>this.appCheck=l)}getToken(n){if(this.serverAppAppCheckToken){if(n)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(n):new Promise((s,l)=>{setTimeout(()=>{this.appCheck?this.getToken(n).then(s,l):s(null)},0)})}addTokenChangeListener(n){this.appCheckProvider?.get().then(s=>s.addTokenListener(n))}notifyForInvalidToken(){Rt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}class cE{constructor(n,s,l){this.appName_=n,this.firebaseOptions_=s,this.authProvider_=l,this.auth_=null,this.auth_=l.getImmediate({optional:!0}),this.auth_||l.onInit(o=>this.auth_=o)}getToken(n){return this.auth_?this.auth_.getToken(n).catch(s=>s&&s.code==="auth/token-not-initialized"?(yt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(s)):new Promise((s,l)=>{setTimeout(()=>{this.auth_?this.getToken(n).then(s,l):s(null)},0)})}addTokenChangeListener(n){this.auth_?this.auth_.addAuthTokenListener(n):this.authProvider_.get().then(s=>s.addAuthTokenListener(n))}removeTokenChangeListener(n){this.authProvider_.get().then(s=>s.removeAuthTokenListener(n))}notifyForInvalidToken(){let n='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?n+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?n+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':n+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Rt(n)}}class Jr{constructor(n){this.accessToken=n}getToken(n){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(n){n(this.accessToken)}removeTokenChangeListener(n){}notifyForInvalidToken(){}}Jr.OWNER="owner";const lf="5",iv="v",av="s",sv="r",lv="f",rv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ov="ls",cv="p",kd="ac",uv="websocket",dv="long_polling";class fv{constructor(n,s,l,o,d=!1,h="",p=!1,g=!1,y=null){this.secure=s,this.namespace=l,this.webSocketOnly=o,this.nodeAdmin=d,this.persistenceKey=h,this.includeNamespaceInQueryParams=p,this.isUsingEmulator=g,this.emulatorOptions=y,this._host=n.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Yi.get("host:"+n)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(n){n!==this.internalHost&&(this.internalHost=n,this.isCacheableHost()&&Yi.set("host:"+this._host,this.internalHost))}toString(){let n=this.toURLString();return this.persistenceKey&&(n+="<"+this.persistenceKey+">"),n}toURLString(){const n=this.secure?"https://":"http://",s=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${n}${this.host}/${s}`}}function uE(a){return a.host!==a.internalHost||a.isCustomHost()||a.includeNamespaceInQueryParams}function hv(a,n,s){Y(typeof n=="string","typeof type must == string"),Y(typeof s=="object","typeof params must == object");let l;if(n===uv)l=(a.secure?"wss://":"ws://")+a.internalHost+"/.ws?";else if(n===dv)l=(a.secure?"https://":"http://")+a.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+n);uE(a)&&(s.ns=a.namespace);const o=[];return Mt(s,(d,h)=>{o.push(d+"="+h)}),l+o.join("&")}class dE{constructor(){this.counters_={}}incrementCounter(n,s=1){qn(this.counters_,n)||(this.counters_[n]=0),this.counters_[n]+=s}get(){return lC(this.counters_)}}const md={},gd={};function rf(a){const n=a.toString();return md[n]||(md[n]=new dE),md[n]}function fE(a,n){const s=a.toString();return gd[s]||(gd[s]=n()),gd[s]}class hE{constructor(n){this.onMessage_=n,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(n,s){this.closeAfterResponse=n,this.onClose=s,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(n,s){for(this.pendingResponses[n]=s;this.pendingResponses[this.currentResponseNum];){const l=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<l.length;++o)l[o]&&Ja(()=>{this.onMessage_(l[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}const C0="start",pE="close",mE="pLPCommand",gE="pRTLPCB",pv="id",mv="pw",gv="ser",yE="cb",vE="seg",xE="ts",_E="d",bE="dframe",yv=1870,vv=30,SE=yv-vv,CE=25e3,EE=3e4;class La{constructor(n,s,l,o,d,h,p){this.connId=n,this.repoInfo=s,this.applicationId=l,this.appCheckToken=o,this.authToken=d,this.transportSessionId=h,this.lastSessionId=p,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=El(n),this.stats_=rf(s),this.urlFn=g=>(this.appCheckToken&&(g[kd]=this.appCheckToken),hv(s,dv,g))}open(n,s){this.curSegmentNum=0,this.onDisconnect_=s,this.myPacketOrderer=new hE(n),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(EE)),J5(()=>{if(this.isClosed_)return;this.scriptTagHolder=new of((...d)=>{const[h,p,g,y,_]=d;if(this.incrementIncomingBytes_(d),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,h===C0)this.id=p,this.password=g;else if(h===pE)p?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(p,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+h)},(...d)=>{const[h,p]=d;this.incrementIncomingBytes_(d),this.myPacketOrderer.handleResponse(h,p)},()=>{this.onClosed_()},this.urlFn);const l={};l[C0]="t",l[gv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(l[yE]=this.scriptTagHolder.uniqueCallbackIdentifier),l[iv]=lf,this.transportSessionId&&(l[av]=this.transportSessionId),this.lastSessionId&&(l[ov]=this.lastSessionId),this.applicationId&&(l[cv]=this.applicationId),this.appCheckToken&&(l[kd]=this.appCheckToken),typeof location<"u"&&location.hostname&&rv.test(location.hostname)&&(l[sv]=lv);const o=this.urlFn(l);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){La.forceAllow_=!0}static forceDisallow(){La.forceDisallow_=!0}static isAvailable(){return La.forceAllow_?!0:!La.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!tE()&&!nE()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(n){const s=ot(n);this.bytesSent+=s.length,this.stats_.incrementCounter("bytes_sent",s.length);const l=Uy(s),o=tv(l,SE);for(let d=0;d<o.length;d++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[d]),this.curSegmentNum++}addDisconnectPingFrame(n,s){this.myDisconnFrame=document.createElement("iframe");const l={};l[bE]="t",l[pv]=n,l[mv]=s,this.myDisconnFrame.src=this.urlFn(l),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(n){const s=ot(n).length;this.bytesReceived+=s,this.stats_.incrementCounter("bytes_received",s)}}class of{constructor(n,s,l,o){this.onDisconnect=l,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Z5(),window[mE+this.uniqueCallbackIdentifier]=n,window[gE+this.uniqueCallbackIdentifier]=s,this.myIFrame=of.createIFrame_();let d="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(d='<script>document.domain="'+document.domain+'";<\/script>');const h="<html><body>"+d+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(h),this.myIFrame.doc.close()}catch(p){yt("frame writing exception"),p.stack&&yt(p.stack),yt(p)}}}static createIFrame_(){const n=document.createElement("iframe");if(n.style.display="none",document.body){document.body.appendChild(n);try{n.contentWindow.document||yt("No IE domain setting required")}catch{const l=document.domain;n.src="javascript:void((function(){document.open();document.domain='"+l+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return n.contentDocument?n.doc=n.contentDocument:n.contentWindow?n.doc=n.contentWindow.document:n.document&&(n.doc=n.document),n}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const n=this.onDisconnect;n&&(this.onDisconnect=null,n())}startLongPoll(n,s){for(this.myID=n,this.myPW=s,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const n={};n[pv]=this.myID,n[mv]=this.myPW,n[gv]=this.currentSerial;let s=this.urlFn(n),l="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+vv+l.length<=yv;){const h=this.pendingSegs.shift();l=l+"&"+vE+o+"="+h.seg+"&"+xE+o+"="+h.ts+"&"+_E+o+"="+h.d,o++}return s=s+l,this.addLongPollTag_(s,this.currentSerial),!0}else return!1}enqueueSegment(n,s,l){this.pendingSegs.push({seg:n,ts:s,d:l}),this.alive&&this.newRequest_()}addLongPollTag_(n,s){this.outstandingRequests.add(s);const l=()=>{this.outstandingRequests.delete(s),this.newRequest_()},o=setTimeout(l,Math.floor(CE)),d=()=>{clearTimeout(o),l()};this.addTag(n,d)}addTag(n,s){setTimeout(()=>{try{if(!this.sendNewPolls)return;const l=this.myIFrame.doc.createElement("script");l.type="text/javascript",l.async=!0,l.src=n,l.onload=l.onreadystatechange=function(){const o=l.readyState;(!o||o==="loaded"||o==="complete")&&(l.onload=l.onreadystatechange=null,l.parentNode&&l.parentNode.removeChild(l),s())},l.onerror=()=>{yt("Long-poll script failed to load: "+n),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(l)}catch{}},Math.floor(1))}}const NE=16384,wE=45e3;let oo=null;typeof MozWebSocket<"u"?oo=MozWebSocket:typeof WebSocket<"u"&&(oo=WebSocket);class nn{constructor(n,s,l,o,d,h,p){this.connId=n,this.applicationId=l,this.appCheckToken=o,this.authToken=d,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=El(this.connId),this.stats_=rf(s),this.connURL=nn.connectionURL_(s,h,p,o,l),this.nodeAdmin=s.nodeAdmin}static connectionURL_(n,s,l,o,d){const h={};return h[iv]=lf,typeof location<"u"&&location.hostname&&rv.test(location.hostname)&&(h[sv]=lv),s&&(h[av]=s),l&&(h[ov]=l),o&&(h[kd]=o),d&&(h[cv]=d),hv(n,uv,h)}open(n,s){this.onDisconnect=s,this.onMessage=n,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Yi.set("previous_websocket_failure",!0);try{let l;bC(),this.mySock=new oo(this.connURL,[],l)}catch(l){this.log_("Error instantiating WebSocket.");const o=l.message||l.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=l=>{this.handleIncomingFrame(l)},this.mySock.onerror=l=>{this.log_("WebSocket error.  Closing connection.");const o=l.message||l.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){nn.forceDisallow_=!0}static isAvailable(){let n=!1;if(typeof navigator<"u"&&navigator.userAgent){const s=/Android ([0-9]{0,}\.[0-9]{0,})/,l=navigator.userAgent.match(s);l&&l.length>1&&parseFloat(l[1])<4.4&&(n=!0)}return!n&&oo!==null&&!nn.forceDisallow_}static previouslyFailed(){return Yi.isInMemoryStorage||Yi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Yi.remove("previous_websocket_failure")}appendFrame_(n){if(this.frames.push(n),this.frames.length===this.totalFrames){const s=this.frames.join("");this.frames=null;const l=cl(s);this.onMessage(l)}}handleNewFrameCount_(n){this.totalFrames=n,this.frames=[]}extractFrameCount_(n){if(Y(this.frames===null,"We already have a frame buffer"),n.length<=6){const s=Number(n);if(!isNaN(s))return this.handleNewFrameCount_(s),null}return this.handleNewFrameCount_(1),n}handleIncomingFrame(n){if(this.mySock===null)return;const s=n.data;if(this.bytesReceived+=s.length,this.stats_.incrementCounter("bytes_received",s.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(s);else{const l=this.extractFrameCount_(s);l!==null&&this.appendFrame_(l)}}send(n){this.resetKeepAlive();const s=ot(n);this.bytesSent+=s.length,this.stats_.incrementCounter("bytes_sent",s.length);const l=tv(s,NE);l.length>1&&this.sendString_(String(l.length));for(let o=0;o<l.length;o++)this.sendString_(l[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(wE))}sendString_(n){try{this.mySock.send(n)}catch(s){this.log_("Exception thrown from WebSocket.send():",s.message||s.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}nn.responsesRequiredToBeHealthy=2;nn.healthyTimeout=3e4;class fl{static get ALL_TRANSPORTS(){return[La,nn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(n){this.initTransports_(n)}initTransports_(n){const s=nn&&nn.isAvailable();let l=s&&!nn.previouslyFailed();if(n.webSocketOnly&&(s||Rt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),l=!0),l)this.transports_=[nn];else{const o=this.transports_=[];for(const d of fl.ALL_TRANSPORTS)d&&d.isAvailable()&&o.push(d);fl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}fl.globalTransportInitialized_=!1;const TE=6e4,AE=5e3,jE=10*1024,RE=100*1024,yd="t",E0="d",ME="s",N0="r",DE="e",w0="o",T0="a",A0="n",j0="p",zE="h";class OE{constructor(n,s,l,o,d,h,p,g,y,_){this.id=n,this.repoInfo_=s,this.applicationId_=l,this.appCheckToken_=o,this.authToken_=d,this.onMessage_=h,this.onReady_=p,this.onDisconnect_=g,this.onKill_=y,this.lastSessionId=_,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=El("c:"+this.id+":"),this.transportManager_=new fl(s),this.log_("Connection created"),this.start_()}start_(){const n=this.transportManager_.initialTransport();this.conn_=new n(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=n.responsesRequiredToBeHealthy||0;const s=this.connReceiver_(this.conn_),l=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(s,l)},Math.floor(0));const o=n.healthyTimeout||0;o>0&&(this.healthyTimeout_=al(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>RE?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>jE?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(n){return s=>{n===this.conn_?this.onConnectionLost_(s):n===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(n){return s=>{this.state_!==2&&(n===this.rx_?this.onPrimaryMessageReceived_(s):n===this.secondaryConn_?this.onSecondaryMessageReceived_(s):this.log_("message on old connection"))}}sendRequest(n){const s={t:"d",d:n};this.sendData_(s)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(n){if(yd in n){const s=n[yd];s===T0?this.upgradeIfSecondaryHealthy_():s===N0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):s===w0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(n){const s=$s("t",n),l=$s("d",n);if(s==="c")this.onSecondaryControl_(l);else if(s==="d")this.pendingDataMessages.push(l);else throw new Error("Unknown protocol layer: "+s)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:j0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:T0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:A0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(n){const s=$s("t",n),l=$s("d",n);s==="c"?this.onControl_(l):s==="d"&&this.onDataMessage_(l)}onDataMessage_(n){this.onPrimaryResponse_(),this.onMessage_(n)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(n){const s=$s(yd,n);if(E0 in n){const l=n[E0];if(s===zE){const o={...l};this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(s===A0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else s===ME?this.onConnectionShutdown_(l):s===N0?this.onReset_(l):s===DE?Od("Server Error: "+l):s===w0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Od("Unknown control packet command: "+s)}}onHandshake_(n){const s=n.ts,l=n.v,o=n.h;this.sessionId=n.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,s),lf!==l&&Rt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const n=this.transportManager_.upgradeTransport();n&&this.startUpgrade_(n)}startUpgrade_(n){this.secondaryConn_=new n(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=n.responsesRequiredToBeHealthy||0;const s=this.connReceiver_(this.secondaryConn_),l=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(s,l),al(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(TE))}onReset_(n){this.log_("Reset packet received.  New host: "+n),this.repoInfo_.host=n,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(n,s){this.log_("Realtime connection established."),this.conn_=n,this.state_=1,this.onReady_&&(this.onReady_(s,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):al(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(AE))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:j0,d:{}}}))}onSecondaryConnectionLost_(){const n=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===n||this.rx_===n)&&this.close()}onConnectionLost_(n){this.conn_=null,!n&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Yi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(n){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(n),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(n){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(n)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}class xv{put(n,s,l,o){}merge(n,s,l,o){}refreshAuthToken(n){}refreshAppCheckToken(n){}onDisconnectPut(n,s,l){}onDisconnectMerge(n,s,l){}onDisconnectCancel(n,s){}reportStats(n){}}class _v{constructor(n){this.allowedEvents_=n,this.listeners_={},Y(Array.isArray(n)&&n.length>0,"Requires a non-empty array")}trigger(n,...s){if(Array.isArray(this.listeners_[n])){const l=[...this.listeners_[n]];for(let o=0;o<l.length;o++)l[o].callback.apply(l[o].context,s)}}on(n,s,l){this.validateEventType_(n),this.listeners_[n]=this.listeners_[n]||[],this.listeners_[n].push({callback:s,context:l});const o=this.getInitialEvent(n);o&&s.apply(l,o)}off(n,s,l){this.validateEventType_(n);const o=this.listeners_[n]||[];for(let d=0;d<o.length;d++)if(o[d].callback===s&&(!l||l===o[d].context)){o.splice(d,1);return}}validateEventType_(n){Y(this.allowedEvents_.find(s=>s===n),"Unknown event: "+n)}}class co extends _v{static getInstance(){return new co}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Yy()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(n){return Y(n==="online","Unknown event type: "+n),[this.online_]}currentlyOnline(){return this.online_}}const R0=32,M0=768;class Be{constructor(n,s){if(s===void 0){this.pieces_=n.split("/");let l=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[l]=this.pieces_[o],l++);this.pieces_.length=l,this.pieceNum_=0}else this.pieces_=n,this.pieceNum_=s}toString(){let n="";for(let s=this.pieceNum_;s<this.pieces_.length;s++)this.pieces_[s]!==""&&(n+="/"+this.pieces_[s]);return n||"/"}}function Ae(){return new Be("")}function de(a){return a.pieceNum_>=a.pieces_.length?null:a.pieces_[a.pieceNum_]}function vi(a){return a.pieces_.length-a.pieceNum_}function Ie(a){let n=a.pieceNum_;return n<a.pieces_.length&&n++,new Be(a.pieces_,n)}function bv(a){return a.pieceNum_<a.pieces_.length?a.pieces_[a.pieces_.length-1]:null}function kE(a){let n="";for(let s=a.pieceNum_;s<a.pieces_.length;s++)a.pieces_[s]!==""&&(n+="/"+encodeURIComponent(String(a.pieces_[s])));return n||"/"}function Sv(a,n=0){return a.pieces_.slice(a.pieceNum_+n)}function Cv(a){if(a.pieceNum_>=a.pieces_.length)return null;const n=[];for(let s=a.pieceNum_;s<a.pieces_.length-1;s++)n.push(a.pieces_[s]);return new Be(n,0)}function it(a,n){const s=[];for(let l=a.pieceNum_;l<a.pieces_.length;l++)s.push(a.pieces_[l]);if(n instanceof Be)for(let l=n.pieceNum_;l<n.pieces_.length;l++)s.push(n.pieces_[l]);else{const l=n.split("/");for(let o=0;o<l.length;o++)l[o].length>0&&s.push(l[o])}return new Be(s,0)}function xe(a){return a.pieceNum_>=a.pieces_.length}function At(a,n){const s=de(a),l=de(n);if(s===null)return n;if(s===l)return At(Ie(a),Ie(n));throw new Error("INTERNAL ERROR: innerPath ("+n+") is not within outerPath ("+a+")")}function cf(a,n){if(vi(a)!==vi(n))return!1;for(let s=a.pieceNum_,l=n.pieceNum_;s<=a.pieces_.length;s++,l++)if(a.pieces_[s]!==n.pieces_[l])return!1;return!0}function an(a,n){let s=a.pieceNum_,l=n.pieceNum_;if(vi(a)>vi(n))return!1;for(;s<a.pieces_.length;){if(a.pieces_[s]!==n.pieces_[l])return!1;++s,++l}return!0}class LE{constructor(n,s){this.errorPrefix_=s,this.parts_=Sv(n,0),this.byteLength_=Math.max(1,this.parts_.length);for(let l=0;l<this.parts_.length;l++)this.byteLength_+=To(this.parts_[l]);Ev(this)}}function BE(a,n){a.parts_.length>0&&(a.byteLength_+=1),a.parts_.push(n),a.byteLength_+=To(n),Ev(a)}function UE(a){const n=a.parts_.pop();a.byteLength_-=To(n),a.parts_.length>0&&(a.byteLength_-=1)}function Ev(a){if(a.byteLength_>M0)throw new Error(a.errorPrefix_+"has a key path longer than "+M0+" bytes ("+a.byteLength_+").");if(a.parts_.length>R0)throw new Error(a.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+R0+") or object contains a cycle "+qi(a))}function qi(a){return a.parts_.length===0?"":"in property '"+a.parts_.join(".")+"'"}class uf extends _v{static getInstance(){return new uf}constructor(){super(["visible"]);let n,s;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(s="visibilitychange",n="hidden"):typeof document.mozHidden<"u"?(s="mozvisibilitychange",n="mozHidden"):typeof document.msHidden<"u"?(s="msvisibilitychange",n="msHidden"):typeof document.webkitHidden<"u"&&(s="webkitvisibilitychange",n="webkitHidden")),this.visible_=!0,s&&document.addEventListener(s,()=>{const l=!document[n];l!==this.visible_&&(this.visible_=l,this.trigger("visible",l))},!1)}getInitialEvent(n){return Y(n==="visible","Unknown event type: "+n),[this.visible_]}}const Ws=1e3,IE=300*1e3,D0=30*1e3,HE=1.3,qE=3e4,YE="server_kill",z0=3;class On extends xv{constructor(n,s,l,o,d,h,p,g){if(super(),this.repoInfo_=n,this.applicationId_=s,this.onDataUpdate_=l,this.onConnectStatus_=o,this.onServerInfoUpdate_=d,this.authTokenProvider_=h,this.appCheckTokenProvider_=p,this.authOverride_=g,this.id=On.nextPersistentConnectionId_++,this.log_=El("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ws,this.maxReconnectDelay_=IE,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,g)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");uf.getInstance().on("visible",this.onVisible_,this),n.host.indexOf("fblocal")===-1&&co.getInstance().on("online",this.onOnline_,this)}sendRequest(n,s,l){const o=++this.requestNumber_,d={r:o,a:n,b:s};this.log_(ot(d)),Y(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(d),l&&(this.requestCBHash_[o]=l)}get(n){this.initConnection_();const s=new wo,o={action:"g",request:{p:n._path.toString(),q:n._queryObject},onComplete:h=>{const p=h.d;h.s==="ok"?s.resolve(p):s.reject(p)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const d=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(d),s.promise}listen(n,s,l,o){this.initConnection_();const d=n._queryIdentifier,h=n._path.toString();this.log_("Listen called for "+h+" "+d),this.listens.has(h)||this.listens.set(h,new Map),Y(n._queryParams.isDefault()||!n._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Y(!this.listens.get(h).has(d),"listen() called twice for same path/queryId.");const p={onComplete:o,hashFn:s,query:n,tag:l};this.listens.get(h).set(d,p),this.connected_&&this.sendListen_(p)}sendGet_(n){const s=this.outstandingGets_[n];this.sendRequest("g",s.request,l=>{delete this.outstandingGets_[n],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),s.onComplete&&s.onComplete(l)})}sendListen_(n){const s=n.query,l=s._path.toString(),o=s._queryIdentifier;this.log_("Listen on "+l+" for "+o);const d={p:l},h="q";n.tag&&(d.q=s._queryObject,d.t=n.tag),d.h=n.hashFn(),this.sendRequest(h,d,p=>{const g=p.d,y=p.s;On.warnOnListenWarnings_(g,s),(this.listens.get(l)&&this.listens.get(l).get(o))===n&&(this.log_("listen response",p),y!=="ok"&&this.removeListen_(l,o),n.onComplete&&n.onComplete(y,g))})}static warnOnListenWarnings_(n,s){if(n&&typeof n=="object"&&qn(n,"w")){const l=Ya(n,"w");if(Array.isArray(l)&&~l.indexOf("no_index")){const o='".indexOn": "'+s._queryParams.getIndex().toString()+'"',d=s._path.toString();Rt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${d} to your security rules for better performance.`)}}}refreshAuthToken(n){this.authToken_=n,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(n)}reduceReconnectDelayIfAdminCredential_(n){(n&&n.length===40||AC(n))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=D0)}refreshAppCheckToken(n){this.appCheckToken_=n,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const n=this.authToken_,s=TC(n)?"auth":"gauth",l={cred:n};this.authOverride_===null?l.noauth=!0:typeof this.authOverride_=="object"&&(l.authvar=this.authOverride_),this.sendRequest(s,l,o=>{const d=o.s,h=o.d||"error";this.authToken_===n&&(d==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(d,h))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},n=>{const s=n.s,l=n.d||"error";s==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(s,l)})}unlisten(n,s){const l=n._path.toString(),o=n._queryIdentifier;this.log_("Unlisten called for "+l+" "+o),Y(n._queryParams.isDefault()||!n._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(l,o)&&this.connected_&&this.sendUnlisten_(l,o,n._queryObject,s)}sendUnlisten_(n,s,l,o){this.log_("Unlisten on "+n+" for "+s);const d={p:n},h="n";o&&(d.q=l,d.t=o),this.sendRequest(h,d)}onDisconnectPut(n,s,l){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",n,s,l):this.onDisconnectRequestQueue_.push({pathString:n,action:"o",data:s,onComplete:l})}onDisconnectMerge(n,s,l){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",n,s,l):this.onDisconnectRequestQueue_.push({pathString:n,action:"om",data:s,onComplete:l})}onDisconnectCancel(n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",n,null,s):this.onDisconnectRequestQueue_.push({pathString:n,action:"oc",data:null,onComplete:s})}sendOnDisconnect_(n,s,l,o){const d={p:s,d:l};this.log_("onDisconnect "+n,d),this.sendRequest(n,d,h=>{o&&setTimeout(()=>{o(h.s,h.d)},Math.floor(0))})}put(n,s,l,o){this.putInternal("p",n,s,l,o)}merge(n,s,l,o){this.putInternal("m",n,s,l,o)}putInternal(n,s,l,o,d){this.initConnection_();const h={p:s,d:l};d!==void 0&&(h.h=d),this.outstandingPuts_.push({action:n,request:h,onComplete:o}),this.outstandingPutCount_++;const p=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(p):this.log_("Buffering put: "+s)}sendPut_(n){const s=this.outstandingPuts_[n].action,l=this.outstandingPuts_[n].request,o=this.outstandingPuts_[n].onComplete;this.outstandingPuts_[n].queued=this.connected_,this.sendRequest(s,l,d=>{this.log_(s+" response",d),delete this.outstandingPuts_[n],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(d.s,d.d)})}reportStats(n){if(this.connected_){const s={c:n};this.log_("reportStats",s),this.sendRequest("s",s,l=>{if(l.s!=="ok"){const d=l.d;this.log_("reportStats","Error sending stats: "+d)}})}}onDataMessage_(n){if("r"in n){this.log_("from server: "+ot(n));const s=n.r,l=this.requestCBHash_[s];l&&(delete this.requestCBHash_[s],l(n.b))}else{if("error"in n)throw"A server-side error has occurred: "+n.error;"a"in n&&this.onDataPush_(n.a,n.b)}}onDataPush_(n,s){this.log_("handleServerMessage",n,s),n==="d"?this.onDataUpdate_(s.p,s.d,!1,s.t):n==="m"?this.onDataUpdate_(s.p,s.d,!0,s.t):n==="c"?this.onListenRevoked_(s.p,s.q):n==="ac"?this.onAuthRevoked_(s.s,s.d):n==="apc"?this.onAppCheckRevoked_(s.s,s.d):n==="sd"?this.onSecurityDebugPacket_(s):Od("Unrecognized action received from server: "+ot(n)+`
Are you using the latest client?`)}onReady_(n,s){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(n),this.lastSessionId=s,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(n){Y(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(n))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(n){n&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ws,this.realtime_||this.scheduleConnect_(0)),this.visible_=n}onOnline_(n){n?(this.log_("Browser went online."),this.reconnectDelay_=Ws,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>qE&&(this.reconnectDelay_=Ws),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const n=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let s=Math.max(0,this.reconnectDelay_-n);s=Math.random()*s,this.log_("Trying to reconnect in "+s+"ms"),this.scheduleConnect_(s),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*HE)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const n=this.onDataMessage_.bind(this),s=this.onReady_.bind(this),l=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+On.nextConnectionId_++,d=this.lastSessionId;let h=!1,p=null;const g=function(){p?p.close():(h=!0,l())},y=function(x){Y(p,"sendRequest call when we're not connected not allowed."),p.sendRequest(x)};this.realtime_={close:g,sendRequest:y};const _=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[x,b]=await Promise.all([this.authTokenProvider_.getToken(_),this.appCheckTokenProvider_.getToken(_)]);h?yt("getToken() completed but was canceled"):(yt("getToken() completed. Creating connection."),this.authToken_=x&&x.accessToken,this.appCheckToken_=b&&b.token,p=new OE(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,n,s,l,R=>{Rt(R+" ("+this.repoInfo_.toString()+")"),this.interrupt(YE)},d))}catch(x){this.log_("Failed to get token: "+x),h||(this.repoInfo_.nodeAdmin&&Rt(x),g())}}}interrupt(n){yt("Interrupting connection for reason: "+n),this.interruptReasons_[n]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(n){yt("Resuming connection for reason: "+n),delete this.interruptReasons_[n],o0(this.interruptReasons_)&&(this.reconnectDelay_=Ws,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(n){const s=n-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:s})}cancelSentTransactions_(){for(let n=0;n<this.outstandingPuts_.length;n++){const s=this.outstandingPuts_[n];s&&"h"in s.request&&s.queued&&(s.onComplete&&s.onComplete("disconnect"),delete this.outstandingPuts_[n],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(n,s){let l;s?l=s.map(d=>sf(d)).join("$"):l="default";const o=this.removeListen_(n,l);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(n,s){const l=new Be(n).toString();let o;if(this.listens.has(l)){const d=this.listens.get(l);o=d.get(s),d.delete(s),d.size===0&&this.listens.delete(l)}else o=void 0;return o}onAuthRevoked_(n,s){yt("Auth token revoked: "+n+"/"+s),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(n==="invalid_token"||n==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=z0&&(this.reconnectDelay_=D0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(n,s){yt("App check token revoked: "+n+"/"+s),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(n==="invalid_token"||n==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=z0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(n){this.securityDebugCallback_?this.securityDebugCallback_(n):"msg"in n&&console.log("FIREBASE: "+n.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const n of this.listens.values())for(const s of n.values())this.sendListen_(s);for(let n=0;n<this.outstandingPuts_.length;n++)this.outstandingPuts_[n]&&this.sendPut_(n);for(;this.onDisconnectRequestQueue_.length;){const n=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(n.action,n.pathString,n.data,n.onComplete)}for(let n=0;n<this.outstandingGets_.length;n++)this.outstandingGets_[n]&&this.sendGet_(n)}sendConnectStats_(){const n={};let s="js";n["sdk."+s+"."+$y.replace(/\./g,"-")]=1,Yy()?n["framework.cordova"]=1:_C()&&(n["framework.reactnative"]=1),this.reportStats(n)}shouldReconnect_(){const n=co.getInstance().currentlyOnline();return o0(this.interruptReasons_)&&n}}On.nextPersistentConnectionId_=0;On.nextConnectionId_=0;class fe{constructor(n,s){this.name=n,this.node=s}static Wrap(n,s){return new fe(n,s)}}class Ao{getCompare(){return this.compare.bind(this)}indexedValueChanged(n,s){const l=new fe(Ga,n),o=new fe(Ga,s);return this.compare(l,o)!==0}minPost(){return fe.MIN}}let Kr;class Nv extends Ao{static get __EMPTY_NODE(){return Kr}static set __EMPTY_NODE(n){Kr=n}compare(n,s){return Wa(n.name,s.name)}isDefinedOn(n){throw Za("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(n,s){return!1}minPost(){return fe.MIN}maxPost(){return new fe(Qi,Kr)}makePost(n,s){return Y(typeof n=="string","KeyIndex indexValue must always be a string."),new fe(n,Kr)}toString(){return".key"}}const Ha=new Nv;class Zr{constructor(n,s,l,o,d=null){this.isReverse_=o,this.resultGenerator_=d,this.nodeStack_=[];let h=1;for(;!n.isEmpty();)if(n=n,h=s?l(n.key,s):1,o&&(h*=-1),h<0)this.isReverse_?n=n.left:n=n.right;else if(h===0){this.nodeStack_.push(n);break}else this.nodeStack_.push(n),this.isReverse_?n=n.right:n=n.left}getNext(){if(this.nodeStack_.length===0)return null;let n=this.nodeStack_.pop(),s;if(this.resultGenerator_?s=this.resultGenerator_(n.key,n.value):s={key:n.key,value:n.value},this.isReverse_)for(n=n.left;!n.isEmpty();)this.nodeStack_.push(n),n=n.right;else for(n=n.right;!n.isEmpty();)this.nodeStack_.push(n),n=n.left;return s}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const n=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(n.key,n.value):{key:n.key,value:n.value}}}class rt{constructor(n,s,l,o,d){this.key=n,this.value=s,this.color=l??rt.RED,this.left=o??jt.EMPTY_NODE,this.right=d??jt.EMPTY_NODE}copy(n,s,l,o,d){return new rt(n??this.key,s??this.value,l??this.color,o??this.left,d??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(n){return this.left.inorderTraversal(n)||!!n(this.key,this.value)||this.right.inorderTraversal(n)}reverseTraversal(n){return this.right.reverseTraversal(n)||n(this.key,this.value)||this.left.reverseTraversal(n)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(n,s,l){let o=this;const d=l(n,o.key);return d<0?o=o.copy(null,null,null,o.left.insert(n,s,l),null):d===0?o=o.copy(null,s,null,null,null):o=o.copy(null,null,null,null,o.right.insert(n,s,l)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return jt.EMPTY_NODE;let n=this;return!n.left.isRed_()&&!n.left.left.isRed_()&&(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.removeMin_(),null),n.fixUp_()}remove(n,s){let l,o;if(l=this,s(n,l.key)<0)!l.left.isEmpty()&&!l.left.isRed_()&&!l.left.left.isRed_()&&(l=l.moveRedLeft_()),l=l.copy(null,null,null,l.left.remove(n,s),null);else{if(l.left.isRed_()&&(l=l.rotateRight_()),!l.right.isEmpty()&&!l.right.isRed_()&&!l.right.left.isRed_()&&(l=l.moveRedRight_()),s(n,l.key)===0){if(l.right.isEmpty())return jt.EMPTY_NODE;o=l.right.min_(),l=l.copy(o.key,o.value,null,null,l.right.removeMin_())}l=l.copy(null,null,null,null,l.right.remove(n,s))}return l.fixUp_()}isRed_(){return this.color}fixUp_(){let n=this;return n.right.isRed_()&&!n.left.isRed_()&&(n=n.rotateLeft_()),n.left.isRed_()&&n.left.left.isRed_()&&(n=n.rotateRight_()),n.left.isRed_()&&n.right.isRed_()&&(n=n.colorFlip_()),n}moveRedLeft_(){let n=this.colorFlip_();return n.right.left.isRed_()&&(n=n.copy(null,null,null,null,n.right.rotateRight_()),n=n.rotateLeft_(),n=n.colorFlip_()),n}moveRedRight_(){let n=this.colorFlip_();return n.left.left.isRed_()&&(n=n.rotateRight_(),n=n.colorFlip_()),n}rotateLeft_(){const n=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,n,null)}rotateRight_(){const n=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,n)}colorFlip_(){const n=this.left.copy(null,null,!this.left.color,null,null),s=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,n,s)}checkMaxDepth_(){const n=this.check_();return Math.pow(2,n)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const n=this.left.check_();if(n!==this.right.check_())throw new Error("Black depths differ");return n+(this.isRed_()?0:1)}}rt.RED=!0;rt.BLACK=!1;class GE{copy(n,s,l,o,d){return this}insert(n,s,l){return new rt(n,s,null)}remove(n,s){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class jt{constructor(n,s=jt.EMPTY_NODE){this.comparator_=n,this.root_=s}insert(n,s){return new jt(this.comparator_,this.root_.insert(n,s,this.comparator_).copy(null,null,rt.BLACK,null,null))}remove(n){return new jt(this.comparator_,this.root_.remove(n,this.comparator_).copy(null,null,rt.BLACK,null,null))}get(n){let s,l=this.root_;for(;!l.isEmpty();){if(s=this.comparator_(n,l.key),s===0)return l.value;s<0?l=l.left:s>0&&(l=l.right)}return null}getPredecessorKey(n){let s,l=this.root_,o=null;for(;!l.isEmpty();)if(s=this.comparator_(n,l.key),s===0){if(l.left.isEmpty())return o?o.key:null;for(l=l.left;!l.right.isEmpty();)l=l.right;return l.key}else s<0?l=l.left:s>0&&(o=l,l=l.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(n){return this.root_.inorderTraversal(n)}reverseTraversal(n){return this.root_.reverseTraversal(n)}getIterator(n){return new Zr(this.root_,null,this.comparator_,!1,n)}getIteratorFrom(n,s){return new Zr(this.root_,n,this.comparator_,!1,s)}getReverseIteratorFrom(n,s){return new Zr(this.root_,n,this.comparator_,!0,s)}getReverseIterator(n){return new Zr(this.root_,null,this.comparator_,!0,n)}}jt.EMPTY_NODE=new GE;function VE(a,n){return Wa(a.name,n.name)}function df(a,n){return Wa(a,n)}let Ld;function FE(a){Ld=a}const wv=function(a){return typeof a=="number"?"number:"+nv(a):"string:"+a},Tv=function(a){if(a.isLeafNode()){const n=a.val();Y(typeof n=="string"||typeof n=="number"||typeof n=="object"&&qn(n,".sv"),"Priority must be a string or number.")}else Y(a===Ld||a.isEmpty(),"priority of unexpected type.");Y(a===Ld||a.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};let O0;class lt{static set __childrenNodeConstructor(n){O0=n}static get __childrenNodeConstructor(){return O0}constructor(n,s=lt.__childrenNodeConstructor.EMPTY_NODE){this.value_=n,this.priorityNode_=s,this.lazyHash_=null,Y(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Tv(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(n){return new lt(this.value_,n)}getImmediateChild(n){return n===".priority"?this.priorityNode_:lt.__childrenNodeConstructor.EMPTY_NODE}getChild(n){return xe(n)?this:de(n)===".priority"?this.priorityNode_:lt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(n,s){return null}updateImmediateChild(n,s){return n===".priority"?this.updatePriority(s):s.isEmpty()&&n!==".priority"?this:lt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(n,s).updatePriority(this.priorityNode_)}updateChild(n,s){const l=de(n);return l===null?s:s.isEmpty()&&l!==".priority"?this:(Y(l!==".priority"||vi(n)===1,".priority must be the last token in a path"),this.updateImmediateChild(l,lt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ie(n),s)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(n,s){return!1}val(n){return n&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let n="";this.priorityNode_.isEmpty()||(n+="priority:"+wv(this.priorityNode_.val())+":");const s=typeof this.value_;n+=s+":",s==="number"?n+=nv(this.value_):n+=this.value_,this.lazyHash_=Jy(n)}return this.lazyHash_}getValue(){return this.value_}compareTo(n){return n===lt.__childrenNodeConstructor.EMPTY_NODE?1:n instanceof lt.__childrenNodeConstructor?-1:(Y(n.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(n))}compareToLeafNode_(n){const s=typeof n.value_,l=typeof this.value_,o=lt.VALUE_TYPE_ORDER.indexOf(s),d=lt.VALUE_TYPE_ORDER.indexOf(l);return Y(o>=0,"Unknown leaf type: "+s),Y(d>=0,"Unknown leaf type: "+l),o===d?l==="object"?0:this.value_<n.value_?-1:this.value_===n.value_?0:1:d-o}withIndex(){return this}isIndexed(){return!0}equals(n){if(n===this)return!0;if(n.isLeafNode()){const s=n;return this.value_===s.value_&&this.priorityNode_.equals(s.priorityNode_)}else return!1}}lt.VALUE_TYPE_ORDER=["object","boolean","number","string"];let Av,jv;function QE(a){Av=a}function XE(a){jv=a}class PE extends Ao{compare(n,s){const l=n.node.getPriority(),o=s.node.getPriority(),d=l.compareTo(o);return d===0?Wa(n.name,s.name):d}isDefinedOn(n){return!n.getPriority().isEmpty()}indexedValueChanged(n,s){return!n.getPriority().equals(s.getPriority())}minPost(){return fe.MIN}maxPost(){return new fe(Qi,new lt("[PRIORITY-POST]",jv))}makePost(n,s){const l=Av(n);return new fe(s,new lt("[PRIORITY-POST]",l))}toString(){return".priority"}}const Xe=new PE;const KE=Math.log(2);class ZE{constructor(n){const s=d=>parseInt(Math.log(d)/KE,10),l=d=>parseInt(Array(d+1).join("1"),2);this.count=s(n+1),this.current_=this.count-1;const o=l(this.count);this.bits_=n+1&o}nextBitIsOne(){const n=!(this.bits_&1<<this.current_);return this.current_--,n}}const uo=function(a,n,s,l){a.sort(n);const o=function(g,y){const _=y-g;let x,b;if(_===0)return null;if(_===1)return x=a[g],b=s?s(x):x,new rt(b,x.node,rt.BLACK,null,null);{const R=parseInt(_/2,10)+g,z=o(g,R),U=o(R+1,y);return x=a[R],b=s?s(x):x,new rt(b,x.node,rt.BLACK,z,U)}},d=function(g){let y=null,_=null,x=a.length;const b=function(z,U){const H=x-z,V=x;x-=z;const G=o(H+1,V),I=a[H],X=s?s(I):I;R(new rt(X,I.node,U,null,G))},R=function(z){y?(y.left=z,y=z):(_=z,y=z)};for(let z=0;z<g.count;++z){const U=g.nextBitIsOne(),H=Math.pow(2,g.count-(z+1));U?b(H,rt.BLACK):(b(H,rt.BLACK),b(H,rt.RED))}return _},h=new ZE(a.length),p=d(h);return new jt(l||n,p)};let vd;const ka={};class Dn{static get Default(){return Y(ka&&Xe,"ChildrenNode.ts has not been loaded"),vd=vd||new Dn({".priority":ka},{".priority":Xe}),vd}constructor(n,s){this.indexes_=n,this.indexSet_=s}get(n){const s=Ya(this.indexes_,n);if(!s)throw new Error("No index defined for "+n);return s instanceof jt?s:null}hasIndex(n){return qn(this.indexSet_,n.toString())}addIndex(n,s){Y(n!==Ha,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const l=[];let o=!1;const d=s.getIterator(fe.Wrap);let h=d.getNext();for(;h;)o=o||n.isDefinedOn(h.node),l.push(h),h=d.getNext();let p;o?p=uo(l,n.getCompare()):p=ka;const g=n.toString(),y={...this.indexSet_};y[g]=n;const _={...this.indexes_};return _[g]=p,new Dn(_,y)}addToIndexes(n,s){const l=ao(this.indexes_,(o,d)=>{const h=Ya(this.indexSet_,d);if(Y(h,"Missing index implementation for "+d),o===ka)if(h.isDefinedOn(n.node)){const p=[],g=s.getIterator(fe.Wrap);let y=g.getNext();for(;y;)y.name!==n.name&&p.push(y),y=g.getNext();return p.push(n),uo(p,h.getCompare())}else return ka;else{const p=s.get(n.name);let g=o;return p&&(g=g.remove(new fe(n.name,p))),g.insert(n,n.node)}});return new Dn(l,this.indexSet_)}removeFromIndexes(n,s){const l=ao(this.indexes_,o=>{if(o===ka)return o;{const d=s.get(n.name);return d?o.remove(new fe(n.name,d)):o}});return new Dn(l,this.indexSet_)}}let Js;class le{static get EMPTY_NODE(){return Js||(Js=new le(new jt(df),null,Dn.Default))}constructor(n,s,l){this.children_=n,this.priorityNode_=s,this.indexMap_=l,this.lazyHash_=null,this.priorityNode_&&Tv(this.priorityNode_),this.children_.isEmpty()&&Y(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Js}updatePriority(n){return this.children_.isEmpty()?this:new le(this.children_,n,this.indexMap_)}getImmediateChild(n){if(n===".priority")return this.getPriority();{const s=this.children_.get(n);return s===null?Js:s}}getChild(n){const s=de(n);return s===null?this:this.getImmediateChild(s).getChild(Ie(n))}hasChild(n){return this.children_.get(n)!==null}updateImmediateChild(n,s){if(Y(s,"We should always be passing snapshot nodes"),n===".priority")return this.updatePriority(s);{const l=new fe(n,s);let o,d;s.isEmpty()?(o=this.children_.remove(n),d=this.indexMap_.removeFromIndexes(l,this.children_)):(o=this.children_.insert(n,s),d=this.indexMap_.addToIndexes(l,this.children_));const h=o.isEmpty()?Js:this.priorityNode_;return new le(o,h,d)}}updateChild(n,s){const l=de(n);if(l===null)return s;{Y(de(n)!==".priority"||vi(n)===1,".priority must be the last token in a path");const o=this.getImmediateChild(l).updateChild(Ie(n),s);return this.updateImmediateChild(l,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(n){if(this.isEmpty())return null;const s={};let l=0,o=0,d=!0;if(this.forEachChild(Xe,(h,p)=>{s[h]=p.val(n),l++,d&&le.INTEGER_REGEXP_.test(h)?o=Math.max(o,Number(h)):d=!1}),!n&&d&&o<2*l){const h=[];for(const p in s)h[p]=s[p];return h}else return n&&!this.getPriority().isEmpty()&&(s[".priority"]=this.getPriority().val()),s}hash(){if(this.lazyHash_===null){let n="";this.getPriority().isEmpty()||(n+="priority:"+wv(this.getPriority().val())+":"),this.forEachChild(Xe,(s,l)=>{const o=l.hash();o!==""&&(n+=":"+s+":"+o)}),this.lazyHash_=n===""?"":Jy(n)}return this.lazyHash_}getPredecessorChildName(n,s,l){const o=this.resolveIndex_(l);if(o){const d=o.getPredecessorKey(new fe(n,s));return d?d.name:null}else return this.children_.getPredecessorKey(n)}getFirstChildName(n){const s=this.resolveIndex_(n);if(s){const l=s.minKey();return l&&l.name}else return this.children_.minKey()}getFirstChild(n){const s=this.getFirstChildName(n);return s?new fe(s,this.children_.get(s)):null}getLastChildName(n){const s=this.resolveIndex_(n);if(s){const l=s.maxKey();return l&&l.name}else return this.children_.maxKey()}getLastChild(n){const s=this.getLastChildName(n);return s?new fe(s,this.children_.get(s)):null}forEachChild(n,s){const l=this.resolveIndex_(n);return l?l.inorderTraversal(o=>s(o.name,o.node)):this.children_.inorderTraversal(s)}getIterator(n){return this.getIteratorFrom(n.minPost(),n)}getIteratorFrom(n,s){const l=this.resolveIndex_(s);if(l)return l.getIteratorFrom(n,o=>o);{const o=this.children_.getIteratorFrom(n.name,fe.Wrap);let d=o.peek();for(;d!=null&&s.compare(d,n)<0;)o.getNext(),d=o.peek();return o}}getReverseIterator(n){return this.getReverseIteratorFrom(n.maxPost(),n)}getReverseIteratorFrom(n,s){const l=this.resolveIndex_(s);if(l)return l.getReverseIteratorFrom(n,o=>o);{const o=this.children_.getReverseIteratorFrom(n.name,fe.Wrap);let d=o.peek();for(;d!=null&&s.compare(d,n)>0;)o.getNext(),d=o.peek();return o}}compareTo(n){return this.isEmpty()?n.isEmpty()?0:-1:n.isLeafNode()||n.isEmpty()?1:n===Nl?-1:0}withIndex(n){if(n===Ha||this.indexMap_.hasIndex(n))return this;{const s=this.indexMap_.addIndex(n,this.children_);return new le(this.children_,this.priorityNode_,s)}}isIndexed(n){return n===Ha||this.indexMap_.hasIndex(n)}equals(n){if(n===this)return!0;if(n.isLeafNode())return!1;{const s=n;if(this.getPriority().equals(s.getPriority()))if(this.children_.count()===s.children_.count()){const l=this.getIterator(Xe),o=s.getIterator(Xe);let d=l.getNext(),h=o.getNext();for(;d&&h;){if(d.name!==h.name||!d.node.equals(h.node))return!1;d=l.getNext(),h=o.getNext()}return d===null&&h===null}else return!1;else return!1}}resolveIndex_(n){return n===Ha?null:this.indexMap_.get(n.toString())}}le.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class $E extends le{constructor(){super(new jt(df),le.EMPTY_NODE,Dn.Default)}compareTo(n){return n===this?0:1}equals(n){return n===this}getPriority(){return this}getImmediateChild(n){return le.EMPTY_NODE}isEmpty(){return!1}}const Nl=new $E;Object.defineProperties(fe,{MIN:{value:new fe(Ga,le.EMPTY_NODE)},MAX:{value:new fe(Qi,Nl)}});Nv.__EMPTY_NODE=le.EMPTY_NODE;lt.__childrenNodeConstructor=le;FE(Nl);XE(Nl);const WE=!0;function pt(a,n=null){if(a===null)return le.EMPTY_NODE;if(typeof a=="object"&&".priority"in a&&(n=a[".priority"]),Y(n===null||typeof n=="string"||typeof n=="number"||typeof n=="object"&&".sv"in n,"Invalid priority type found: "+typeof n),typeof a=="object"&&".value"in a&&a[".value"]!==null&&(a=a[".value"]),typeof a!="object"||".sv"in a){const s=a;return new lt(s,pt(n))}if(!(a instanceof Array)&&WE){const s=[];let l=!1;if(Mt(a,(h,p)=>{if(h.substring(0,1)!=="."){const g=pt(p);g.isEmpty()||(l=l||!g.getPriority().isEmpty(),s.push(new fe(h,g)))}}),s.length===0)return le.EMPTY_NODE;const d=uo(s,VE,h=>h.name,df);if(l){const h=uo(s,Xe.getCompare());return new le(d,pt(n),new Dn({".priority":h},{".priority":Xe}))}else return new le(d,pt(n),Dn.Default)}else{let s=le.EMPTY_NODE;return Mt(a,(l,o)=>{if(qn(a,l)&&l.substring(0,1)!=="."){const d=pt(o);(d.isLeafNode()||!d.isEmpty())&&(s=s.updateImmediateChild(l,d))}}),s.updatePriority(pt(n))}}QE(pt);class JE extends Ao{constructor(n){super(),this.indexPath_=n,Y(!xe(n)&&de(n)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(n){return n.getChild(this.indexPath_)}isDefinedOn(n){return!n.getChild(this.indexPath_).isEmpty()}compare(n,s){const l=this.extractChild(n.node),o=this.extractChild(s.node),d=l.compareTo(o);return d===0?Wa(n.name,s.name):d}makePost(n,s){const l=pt(n),o=le.EMPTY_NODE.updateChild(this.indexPath_,l);return new fe(s,o)}maxPost(){const n=le.EMPTY_NODE.updateChild(this.indexPath_,Nl);return new fe(Qi,n)}toString(){return Sv(this.indexPath_,0).join("/")}}class e3 extends Ao{compare(n,s){const l=n.node.compareTo(s.node);return l===0?Wa(n.name,s.name):l}isDefinedOn(n){return!0}indexedValueChanged(n,s){return!n.equals(s)}minPost(){return fe.MIN}maxPost(){return fe.MAX}makePost(n,s){const l=pt(n);return new fe(s,l)}toString(){return".value"}}const t3=new e3;function Rv(a){return{type:"value",snapshotNode:a}}function Va(a,n){return{type:"child_added",snapshotNode:n,childName:a}}function hl(a,n){return{type:"child_removed",snapshotNode:n,childName:a}}function pl(a,n,s){return{type:"child_changed",snapshotNode:n,childName:a,oldSnap:s}}function n3(a,n){return{type:"child_moved",snapshotNode:n,childName:a}}class ff{constructor(n){this.index_=n}updateChild(n,s,l,o,d,h){Y(n.isIndexed(this.index_),"A node must be indexed if only a child is updated");const p=n.getImmediateChild(s);return p.getChild(o).equals(l.getChild(o))&&p.isEmpty()===l.isEmpty()||(h!=null&&(l.isEmpty()?n.hasChild(s)?h.trackChildChange(hl(s,p)):Y(n.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):p.isEmpty()?h.trackChildChange(Va(s,l)):h.trackChildChange(pl(s,l,p))),n.isLeafNode()&&l.isEmpty())?n:n.updateImmediateChild(s,l).withIndex(this.index_)}updateFullNode(n,s,l){return l!=null&&(n.isLeafNode()||n.forEachChild(Xe,(o,d)=>{s.hasChild(o)||l.trackChildChange(hl(o,d))}),s.isLeafNode()||s.forEachChild(Xe,(o,d)=>{if(n.hasChild(o)){const h=n.getImmediateChild(o);h.equals(d)||l.trackChildChange(pl(o,d,h))}else l.trackChildChange(Va(o,d))})),s.withIndex(this.index_)}updatePriority(n,s){return n.isEmpty()?le.EMPTY_NODE:n.updatePriority(s)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}class ml{constructor(n){this.indexedFilter_=new ff(n.getIndex()),this.index_=n.getIndex(),this.startPost_=ml.getStartPost_(n),this.endPost_=ml.getEndPost_(n),this.startIsInclusive_=!n.startAfterSet_,this.endIsInclusive_=!n.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(n){const s=this.startIsInclusive_?this.index_.compare(this.getStartPost(),n)<=0:this.index_.compare(this.getStartPost(),n)<0,l=this.endIsInclusive_?this.index_.compare(n,this.getEndPost())<=0:this.index_.compare(n,this.getEndPost())<0;return s&&l}updateChild(n,s,l,o,d,h){return this.matches(new fe(s,l))||(l=le.EMPTY_NODE),this.indexedFilter_.updateChild(n,s,l,o,d,h)}updateFullNode(n,s,l){s.isLeafNode()&&(s=le.EMPTY_NODE);let o=s.withIndex(this.index_);o=o.updatePriority(le.EMPTY_NODE);const d=this;return s.forEachChild(Xe,(h,p)=>{d.matches(new fe(h,p))||(o=o.updateImmediateChild(h,le.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(n,o,l)}updatePriority(n,s){return n}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(n){if(n.hasStart()){const s=n.getIndexStartName();return n.getIndex().makePost(n.getIndexStartValue(),s)}else return n.getIndex().minPost()}static getEndPost_(n){if(n.hasEnd()){const s=n.getIndexEndName();return n.getIndex().makePost(n.getIndexEndValue(),s)}else return n.getIndex().maxPost()}}class i3{constructor(n){this.withinDirectionalStart=s=>this.reverse_?this.withinEndPost(s):this.withinStartPost(s),this.withinDirectionalEnd=s=>this.reverse_?this.withinStartPost(s):this.withinEndPost(s),this.withinStartPost=s=>{const l=this.index_.compare(this.rangedFilter_.getStartPost(),s);return this.startIsInclusive_?l<=0:l<0},this.withinEndPost=s=>{const l=this.index_.compare(s,this.rangedFilter_.getEndPost());return this.endIsInclusive_?l<=0:l<0},this.rangedFilter_=new ml(n),this.index_=n.getIndex(),this.limit_=n.getLimit(),this.reverse_=!n.isViewFromLeft(),this.startIsInclusive_=!n.startAfterSet_,this.endIsInclusive_=!n.endBeforeSet_}updateChild(n,s,l,o,d,h){return this.rangedFilter_.matches(new fe(s,l))||(l=le.EMPTY_NODE),n.getImmediateChild(s).equals(l)?n:n.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(n,s,l,o,d,h):this.fullLimitUpdateChild_(n,s,l,d,h)}updateFullNode(n,s,l){let o;if(s.isLeafNode()||s.isEmpty())o=le.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<s.numChildren()&&s.isIndexed(this.index_)){o=le.EMPTY_NODE.withIndex(this.index_);let d;this.reverse_?d=s.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):d=s.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let h=0;for(;d.hasNext()&&h<this.limit_;){const p=d.getNext();if(this.withinDirectionalStart(p))if(this.withinDirectionalEnd(p))o=o.updateImmediateChild(p.name,p.node),h++;else break;else continue}}else{o=s.withIndex(this.index_),o=o.updatePriority(le.EMPTY_NODE);let d;this.reverse_?d=o.getReverseIterator(this.index_):d=o.getIterator(this.index_);let h=0;for(;d.hasNext();){const p=d.getNext();h<this.limit_&&this.withinDirectionalStart(p)&&this.withinDirectionalEnd(p)?h++:o=o.updateImmediateChild(p.name,le.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(n,o,l)}updatePriority(n,s){return n}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(n,s,l,o,d){let h;if(this.reverse_){const x=this.index_.getCompare();h=(b,R)=>x(R,b)}else h=this.index_.getCompare();const p=n;Y(p.numChildren()===this.limit_,"");const g=new fe(s,l),y=this.reverse_?p.getFirstChild(this.index_):p.getLastChild(this.index_),_=this.rangedFilter_.matches(g);if(p.hasChild(s)){const x=p.getImmediateChild(s);let b=o.getChildAfterChild(this.index_,y,this.reverse_);for(;b!=null&&(b.name===s||p.hasChild(b.name));)b=o.getChildAfterChild(this.index_,b,this.reverse_);const R=b==null?1:h(b,g);if(_&&!l.isEmpty()&&R>=0)return d?.trackChildChange(pl(s,l,x)),p.updateImmediateChild(s,l);{d?.trackChildChange(hl(s,x));const U=p.updateImmediateChild(s,le.EMPTY_NODE);return b!=null&&this.rangedFilter_.matches(b)?(d?.trackChildChange(Va(b.name,b.node)),U.updateImmediateChild(b.name,b.node)):U}}else return l.isEmpty()?n:_&&h(y,g)>=0?(d!=null&&(d.trackChildChange(hl(y.name,y.node)),d.trackChildChange(Va(s,l))),p.updateImmediateChild(s,l).updateImmediateChild(y.name,le.EMPTY_NODE)):n}}class hf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Xe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return Y(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Y(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ga}hasEnd(){return this.endSet_}getIndexEndValue(){return Y(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Y(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Qi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return Y(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Xe}copy(){const n=new hf;return n.limitSet_=this.limitSet_,n.limit_=this.limit_,n.startSet_=this.startSet_,n.startAfterSet_=this.startAfterSet_,n.indexStartValue_=this.indexStartValue_,n.startNameSet_=this.startNameSet_,n.indexStartName_=this.indexStartName_,n.endSet_=this.endSet_,n.endBeforeSet_=this.endBeforeSet_,n.indexEndValue_=this.indexEndValue_,n.endNameSet_=this.endNameSet_,n.indexEndName_=this.indexEndName_,n.index_=this.index_,n.viewFrom_=this.viewFrom_,n}}function a3(a){return a.loadsAllData()?new ff(a.getIndex()):a.hasLimit()?new i3(a):new ml(a)}function k0(a){const n={};if(a.isDefault())return n;let s;if(a.index_===Xe?s="$priority":a.index_===t3?s="$value":a.index_===Ha?s="$key":(Y(a.index_ instanceof JE,"Unrecognized index type!"),s=a.index_.toString()),n.orderBy=ot(s),a.startSet_){const l=a.startAfterSet_?"startAfter":"startAt";n[l]=ot(a.indexStartValue_),a.startNameSet_&&(n[l]+=","+ot(a.indexStartName_))}if(a.endSet_){const l=a.endBeforeSet_?"endBefore":"endAt";n[l]=ot(a.indexEndValue_),a.endNameSet_&&(n[l]+=","+ot(a.indexEndName_))}return a.limitSet_&&(a.isViewFromLeft()?n.limitToFirst=a.limit_:n.limitToLast=a.limit_),n}function L0(a){const n={};if(a.startSet_&&(n.sp=a.indexStartValue_,a.startNameSet_&&(n.sn=a.indexStartName_),n.sin=!a.startAfterSet_),a.endSet_&&(n.ep=a.indexEndValue_,a.endNameSet_&&(n.en=a.indexEndName_),n.ein=!a.endBeforeSet_),a.limitSet_){n.l=a.limit_;let s=a.viewFrom_;s===""&&(a.isViewFromLeft()?s="l":s="r"),n.vf=s}return a.index_!==Xe&&(n.i=a.index_.toString()),n}class fo extends xv{reportStats(n){throw new Error("Method not implemented.")}static getListenId_(n,s){return s!==void 0?"tag$"+s:(Y(n._queryParams.isDefault(),"should have a tag if it's not a default query."),n._path.toString())}constructor(n,s,l,o){super(),this.repoInfo_=n,this.onDataUpdate_=s,this.authTokenProvider_=l,this.appCheckTokenProvider_=o,this.log_=El("p:rest:"),this.listens_={}}listen(n,s,l,o){const d=n._path.toString();this.log_("Listen called for "+d+" "+n._queryIdentifier);const h=fo.getListenId_(n,l),p={};this.listens_[h]=p;const g=k0(n._queryParams);this.restRequest_(d+".json",g,(y,_)=>{let x=_;if(y===404&&(x=null,y=null),y===null&&this.onDataUpdate_(d,x,!1,l),Ya(this.listens_,h)===p){let b;y?y===401?b="permission_denied":b="rest_error:"+y:b="ok",o(b,null)}})}unlisten(n,s){const l=fo.getListenId_(n,s);delete this.listens_[l]}get(n){const s=k0(n._queryParams),l=n._path.toString(),o=new wo;return this.restRequest_(l+".json",s,(d,h)=>{let p=h;d===404&&(p=null,d=null),d===null?(this.onDataUpdate_(l,p,!1,null),o.resolve(p)):o.reject(new Error(p))}),o.promise}refreshAuthToken(n){}restRequest_(n,s={},l){return s.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,d])=>{o&&o.accessToken&&(s.auth=o.accessToken),d&&d.token&&(s.ac=d.token);const h=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+n+"?ns="+this.repoInfo_.namespace+jC(s);this.log_("Sending REST request for "+h);const p=new XMLHttpRequest;p.onreadystatechange=()=>{if(l&&p.readyState===4){this.log_("REST Response for "+h+" received. status:",p.status,"response:",p.responseText);let g=null;if(p.status>=200&&p.status<300){try{g=cl(p.responseText)}catch{Rt("Failed to parse JSON response for "+h+": "+p.responseText)}l(null,g)}else p.status!==401&&p.status!==404&&Rt("Got unsuccessful REST response for "+h+" Status: "+p.status),l(p.status);l=null}},p.open("GET",h,!0),p.send()})}}class s3{constructor(){this.rootNode_=le.EMPTY_NODE}getNode(n){return this.rootNode_.getChild(n)}updateSnapshot(n,s){this.rootNode_=this.rootNode_.updateChild(n,s)}}function ho(){return{value:null,children:new Map}}function Mv(a,n,s){if(xe(n))a.value=s,a.children.clear();else if(a.value!==null)a.value=a.value.updateChild(n,s);else{const l=de(n);a.children.has(l)||a.children.set(l,ho());const o=a.children.get(l);n=Ie(n),Mv(o,n,s)}}function Bd(a,n,s){a.value!==null?s(n,a.value):l3(a,(l,o)=>{const d=new Be(n.toString()+"/"+l);Bd(o,d,s)})}function l3(a,n){a.children.forEach((s,l)=>{n(l,s)})}class r3{constructor(n){this.collection_=n,this.last_=null}get(){const n=this.collection_.get(),s={...n};return this.last_&&Mt(this.last_,(l,o)=>{s[l]=s[l]-o}),this.last_=n,s}}const B0=10*1e3,o3=30*1e3,c3=300*1e3;class u3{constructor(n,s){this.server_=s,this.statsToReport_={},this.statsListener_=new r3(n);const l=B0+(o3-B0)*Math.random();al(this.reportStats_.bind(this),Math.floor(l))}reportStats_(){const n=this.statsListener_.get(),s={};let l=!1;Mt(n,(o,d)=>{d>0&&qn(this.statsToReport_,o)&&(s[o]=d,l=!0)}),l&&this.server_.reportStats(s),al(this.reportStats_.bind(this),Math.floor(Math.random()*2*c3))}}var sn;(function(a){a[a.OVERWRITE=0]="OVERWRITE",a[a.MERGE=1]="MERGE",a[a.ACK_USER_WRITE=2]="ACK_USER_WRITE",a[a.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(sn||(sn={}));function Dv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function pf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function mf(a){return{fromUser:!1,fromServer:!0,queryId:a,tagged:!0}}class po{constructor(n,s,l){this.path=n,this.affectedTree=s,this.revert=l,this.type=sn.ACK_USER_WRITE,this.source=Dv()}operationForChild(n){if(xe(this.path)){if(this.affectedTree.value!=null)return Y(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const s=this.affectedTree.subtree(new Be(n));return new po(Ae(),s,this.revert)}}else return Y(de(this.path)===n,"operationForChild called for unrelated child."),new po(Ie(this.path),this.affectedTree,this.revert)}}class gl{constructor(n,s){this.source=n,this.path=s,this.type=sn.LISTEN_COMPLETE}operationForChild(n){return xe(this.path)?new gl(this.source,Ae()):new gl(this.source,Ie(this.path))}}class Xi{constructor(n,s,l){this.source=n,this.path=s,this.snap=l,this.type=sn.OVERWRITE}operationForChild(n){return xe(this.path)?new Xi(this.source,Ae(),this.snap.getImmediateChild(n)):new Xi(this.source,Ie(this.path),this.snap)}}class yl{constructor(n,s,l){this.source=n,this.path=s,this.children=l,this.type=sn.MERGE}operationForChild(n){if(xe(this.path)){const s=this.children.subtree(new Be(n));return s.isEmpty()?null:s.value?new Xi(this.source,Ae(),s.value):new yl(this.source,Ae(),s)}else return Y(de(this.path)===n,"Can't get a merge for a child not on the path of the operation"),new yl(this.source,Ie(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}class Pi{constructor(n,s,l){this.node_=n,this.fullyInitialized_=s,this.filtered_=l}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(n){if(xe(n))return this.isFullyInitialized()&&!this.filtered_;const s=de(n);return this.isCompleteForChild(s)}isCompleteForChild(n){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(n)}getNode(){return this.node_}}class d3{constructor(n){this.query_=n,this.index_=this.query_._queryParams.getIndex()}}function f3(a,n,s,l){const o=[],d=[];return n.forEach(h=>{h.type==="child_changed"&&a.index_.indexedValueChanged(h.oldSnap,h.snapshotNode)&&d.push(n3(h.childName,h.snapshotNode))}),el(a,o,"child_removed",n,l,s),el(a,o,"child_added",n,l,s),el(a,o,"child_moved",d,l,s),el(a,o,"child_changed",n,l,s),el(a,o,"value",n,l,s),o}function el(a,n,s,l,o,d){const h=l.filter(p=>p.type===s);h.sort((p,g)=>p3(a,p,g)),h.forEach(p=>{const g=h3(a,p,d);o.forEach(y=>{y.respondsTo(p.type)&&n.push(y.createEvent(g,a.query_))})})}function h3(a,n,s){return n.type==="value"||n.type==="child_removed"||(n.prevName=s.getPredecessorChildName(n.childName,n.snapshotNode,a.index_)),n}function p3(a,n,s){if(n.childName==null||s.childName==null)throw Za("Should only compare child_ events.");const l=new fe(n.childName,n.snapshotNode),o=new fe(s.childName,s.snapshotNode);return a.index_.compare(l,o)}function jo(a,n){return{eventCache:a,serverCache:n}}function sl(a,n,s,l){return jo(new Pi(n,s,l),a.serverCache)}function zv(a,n,s,l){return jo(a.eventCache,new Pi(n,s,l))}function Ud(a){return a.eventCache.isFullyInitialized()?a.eventCache.getNode():null}function Ki(a){return a.serverCache.isFullyInitialized()?a.serverCache.getNode():null}let xd;const m3=()=>(xd||(xd=new jt(eE)),xd);class Ye{static fromObject(n){let s=new Ye(null);return Mt(n,(l,o)=>{s=s.set(new Be(l),o)}),s}constructor(n,s=m3()){this.value=n,this.children=s}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(n,s){if(this.value!=null&&s(this.value))return{path:Ae(),value:this.value};if(xe(n))return null;{const l=de(n),o=this.children.get(l);if(o!==null){const d=o.findRootMostMatchingPathAndValue(Ie(n),s);return d!=null?{path:it(new Be(l),d.path),value:d.value}:null}else return null}}findRootMostValueAndPath(n){return this.findRootMostMatchingPathAndValue(n,()=>!0)}subtree(n){if(xe(n))return this;{const s=de(n),l=this.children.get(s);return l!==null?l.subtree(Ie(n)):new Ye(null)}}set(n,s){if(xe(n))return new Ye(s,this.children);{const l=de(n),d=(this.children.get(l)||new Ye(null)).set(Ie(n),s),h=this.children.insert(l,d);return new Ye(this.value,h)}}remove(n){if(xe(n))return this.children.isEmpty()?new Ye(null):new Ye(null,this.children);{const s=de(n),l=this.children.get(s);if(l){const o=l.remove(Ie(n));let d;return o.isEmpty()?d=this.children.remove(s):d=this.children.insert(s,o),this.value===null&&d.isEmpty()?new Ye(null):new Ye(this.value,d)}else return this}}get(n){if(xe(n))return this.value;{const s=de(n),l=this.children.get(s);return l?l.get(Ie(n)):null}}setTree(n,s){if(xe(n))return s;{const l=de(n),d=(this.children.get(l)||new Ye(null)).setTree(Ie(n),s);let h;return d.isEmpty()?h=this.children.remove(l):h=this.children.insert(l,d),new Ye(this.value,h)}}fold(n){return this.fold_(Ae(),n)}fold_(n,s){const l={};return this.children.inorderTraversal((o,d)=>{l[o]=d.fold_(it(n,o),s)}),s(n,this.value,l)}findOnPath(n,s){return this.findOnPath_(n,Ae(),s)}findOnPath_(n,s,l){const o=this.value?l(s,this.value):!1;if(o)return o;if(xe(n))return null;{const d=de(n),h=this.children.get(d);return h?h.findOnPath_(Ie(n),it(s,d),l):null}}foreachOnPath(n,s){return this.foreachOnPath_(n,Ae(),s)}foreachOnPath_(n,s,l){if(xe(n))return this;{this.value&&l(s,this.value);const o=de(n),d=this.children.get(o);return d?d.foreachOnPath_(Ie(n),it(s,o),l):new Ye(null)}}foreach(n){this.foreach_(Ae(),n)}foreach_(n,s){this.children.inorderTraversal((l,o)=>{o.foreach_(it(n,l),s)}),this.value&&s(n,this.value)}foreachChild(n){this.children.inorderTraversal((s,l)=>{l.value&&n(s,l.value)})}}class ln{constructor(n){this.writeTree_=n}static empty(){return new ln(new Ye(null))}}function ll(a,n,s){if(xe(n))return new ln(new Ye(s));{const l=a.writeTree_.findRootMostValueAndPath(n);if(l!=null){const o=l.path;let d=l.value;const h=At(o,n);return d=d.updateChild(h,s),new ln(a.writeTree_.set(o,d))}else{const o=new Ye(s),d=a.writeTree_.setTree(n,o);return new ln(d)}}}function U0(a,n,s){let l=a;return Mt(s,(o,d)=>{l=ll(l,it(n,o),d)}),l}function I0(a,n){if(xe(n))return ln.empty();{const s=a.writeTree_.setTree(n,new Ye(null));return new ln(s)}}function Id(a,n){return Zi(a,n)!=null}function Zi(a,n){const s=a.writeTree_.findRootMostValueAndPath(n);return s!=null?a.writeTree_.get(s.path).getChild(At(s.path,n)):null}function H0(a){const n=[],s=a.writeTree_.value;return s!=null?s.isLeafNode()||s.forEachChild(Xe,(l,o)=>{n.push(new fe(l,o))}):a.writeTree_.children.inorderTraversal((l,o)=>{o.value!=null&&n.push(new fe(l,o.value))}),n}function gi(a,n){if(xe(n))return a;{const s=Zi(a,n);return s!=null?new ln(new Ye(s)):new ln(a.writeTree_.subtree(n))}}function Hd(a){return a.writeTree_.isEmpty()}function Fa(a,n){return Ov(Ae(),a.writeTree_,n)}function Ov(a,n,s){if(n.value!=null)return s.updateChild(a,n.value);{let l=null;return n.children.inorderTraversal((o,d)=>{o===".priority"?(Y(d.value!==null,"Priority writes must always be leaf nodes"),l=d.value):s=Ov(it(a,o),d,s)}),!s.getChild(a).isEmpty()&&l!==null&&(s=s.updateChild(it(a,".priority"),l)),s}}function gf(a,n){return Uv(n,a)}function g3(a,n,s,l,o){Y(l>a.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),a.allWrites.push({path:n,snap:s,writeId:l,visible:o}),o&&(a.visibleWrites=ll(a.visibleWrites,n,s)),a.lastWriteId=l}function y3(a,n){for(let s=0;s<a.allWrites.length;s++){const l=a.allWrites[s];if(l.writeId===n)return l}return null}function v3(a,n){const s=a.allWrites.findIndex(p=>p.writeId===n);Y(s>=0,"removeWrite called with nonexistent writeId.");const l=a.allWrites[s];a.allWrites.splice(s,1);let o=l.visible,d=!1,h=a.allWrites.length-1;for(;o&&h>=0;){const p=a.allWrites[h];p.visible&&(h>=s&&x3(p,l.path)?o=!1:an(l.path,p.path)&&(d=!0)),h--}if(o){if(d)return _3(a),!0;if(l.snap)a.visibleWrites=I0(a.visibleWrites,l.path);else{const p=l.children;Mt(p,g=>{a.visibleWrites=I0(a.visibleWrites,it(l.path,g))})}return!0}else return!1}function x3(a,n){if(a.snap)return an(a.path,n);for(const s in a.children)if(a.children.hasOwnProperty(s)&&an(it(a.path,s),n))return!0;return!1}function _3(a){a.visibleWrites=kv(a.allWrites,b3,Ae()),a.allWrites.length>0?a.lastWriteId=a.allWrites[a.allWrites.length-1].writeId:a.lastWriteId=-1}function b3(a){return a.visible}function kv(a,n,s){let l=ln.empty();for(let o=0;o<a.length;++o){const d=a[o];if(n(d)){const h=d.path;let p;if(d.snap)an(s,h)?(p=At(s,h),l=ll(l,p,d.snap)):an(h,s)&&(p=At(h,s),l=ll(l,Ae(),d.snap.getChild(p)));else if(d.children){if(an(s,h))p=At(s,h),l=U0(l,p,d.children);else if(an(h,s))if(p=At(h,s),xe(p))l=U0(l,Ae(),d.children);else{const g=Ya(d.children,de(p));if(g){const y=g.getChild(Ie(p));l=ll(l,Ae(),y)}}}else throw Za("WriteRecord should have .snap or .children")}}return l}function Lv(a,n,s,l,o){if(!l&&!o){const d=Zi(a.visibleWrites,n);if(d!=null)return d;{const h=gi(a.visibleWrites,n);if(Hd(h))return s;if(s==null&&!Id(h,Ae()))return null;{const p=s||le.EMPTY_NODE;return Fa(h,p)}}}else{const d=gi(a.visibleWrites,n);if(!o&&Hd(d))return s;if(!o&&s==null&&!Id(d,Ae()))return null;{const h=function(y){return(y.visible||o)&&(!l||!~l.indexOf(y.writeId))&&(an(y.path,n)||an(n,y.path))},p=kv(a.allWrites,h,n),g=s||le.EMPTY_NODE;return Fa(p,g)}}}function S3(a,n,s){let l=le.EMPTY_NODE;const o=Zi(a.visibleWrites,n);if(o)return o.isLeafNode()||o.forEachChild(Xe,(d,h)=>{l=l.updateImmediateChild(d,h)}),l;if(s){const d=gi(a.visibleWrites,n);return s.forEachChild(Xe,(h,p)=>{const g=Fa(gi(d,new Be(h)),p);l=l.updateImmediateChild(h,g)}),H0(d).forEach(h=>{l=l.updateImmediateChild(h.name,h.node)}),l}else{const d=gi(a.visibleWrites,n);return H0(d).forEach(h=>{l=l.updateImmediateChild(h.name,h.node)}),l}}function C3(a,n,s,l,o){Y(l||o,"Either existingEventSnap or existingServerSnap must exist");const d=it(n,s);if(Id(a.visibleWrites,d))return null;{const h=gi(a.visibleWrites,d);return Hd(h)?o.getChild(s):Fa(h,o.getChild(s))}}function E3(a,n,s,l){const o=it(n,s),d=Zi(a.visibleWrites,o);if(d!=null)return d;if(l.isCompleteForChild(s)){const h=gi(a.visibleWrites,o);return Fa(h,l.getNode().getImmediateChild(s))}else return null}function N3(a,n){return Zi(a.visibleWrites,n)}function w3(a,n,s,l,o,d,h){let p;const g=gi(a.visibleWrites,n),y=Zi(g,Ae());if(y!=null)p=y;else if(s!=null)p=Fa(g,s);else return[];if(p=p.withIndex(h),!p.isEmpty()&&!p.isLeafNode()){const _=[],x=h.getCompare(),b=d?p.getReverseIteratorFrom(l,h):p.getIteratorFrom(l,h);let R=b.getNext();for(;R&&_.length<o;)x(R,l)!==0&&_.push(R),R=b.getNext();return _}else return[]}function T3(){return{visibleWrites:ln.empty(),allWrites:[],lastWriteId:-1}}function mo(a,n,s,l){return Lv(a.writeTree,a.treePath,n,s,l)}function yf(a,n){return S3(a.writeTree,a.treePath,n)}function q0(a,n,s,l){return C3(a.writeTree,a.treePath,n,s,l)}function go(a,n){return N3(a.writeTree,it(a.treePath,n))}function A3(a,n,s,l,o,d){return w3(a.writeTree,a.treePath,n,s,l,o,d)}function vf(a,n,s){return E3(a.writeTree,a.treePath,n,s)}function Bv(a,n){return Uv(it(a.treePath,n),a.writeTree)}function Uv(a,n){return{treePath:a,writeTree:n}}class j3{constructor(){this.changeMap=new Map}trackChildChange(n){const s=n.type,l=n.childName;Y(s==="child_added"||s==="child_changed"||s==="child_removed","Only child changes supported for tracking"),Y(l!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(l);if(o){const d=o.type;if(s==="child_added"&&d==="child_removed")this.changeMap.set(l,pl(l,n.snapshotNode,o.snapshotNode));else if(s==="child_removed"&&d==="child_added")this.changeMap.delete(l);else if(s==="child_removed"&&d==="child_changed")this.changeMap.set(l,hl(l,o.oldSnap));else if(s==="child_changed"&&d==="child_added")this.changeMap.set(l,Va(l,n.snapshotNode));else if(s==="child_changed"&&d==="child_changed")this.changeMap.set(l,pl(l,n.snapshotNode,o.oldSnap));else throw Za("Illegal combination of changes: "+n+" occurred after "+o)}else this.changeMap.set(l,n)}getChanges(){return Array.from(this.changeMap.values())}}class R3{getCompleteChild(n){return null}getChildAfterChild(n,s,l){return null}}const Iv=new R3;class xf{constructor(n,s,l=null){this.writes_=n,this.viewCache_=s,this.optCompleteServerCache_=l}getCompleteChild(n){const s=this.viewCache_.eventCache;if(s.isCompleteForChild(n))return s.getNode().getImmediateChild(n);{const l=this.optCompleteServerCache_!=null?new Pi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return vf(this.writes_,n,l)}}getChildAfterChild(n,s,l){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ki(this.viewCache_),d=A3(this.writes_,o,s,1,l,n);return d.length===0?null:d[0]}}function M3(a){return{filter:a}}function D3(a,n){Y(n.eventCache.getNode().isIndexed(a.filter.getIndex()),"Event snap not indexed"),Y(n.serverCache.getNode().isIndexed(a.filter.getIndex()),"Server snap not indexed")}function z3(a,n,s,l,o){const d=new j3;let h,p;if(s.type===sn.OVERWRITE){const y=s;y.source.fromUser?h=qd(a,n,y.path,y.snap,l,o,d):(Y(y.source.fromServer,"Unknown source."),p=y.source.tagged||n.serverCache.isFiltered()&&!xe(y.path),h=yo(a,n,y.path,y.snap,l,o,p,d))}else if(s.type===sn.MERGE){const y=s;y.source.fromUser?h=k3(a,n,y.path,y.children,l,o,d):(Y(y.source.fromServer,"Unknown source."),p=y.source.tagged||n.serverCache.isFiltered(),h=Yd(a,n,y.path,y.children,l,o,p,d))}else if(s.type===sn.ACK_USER_WRITE){const y=s;y.revert?h=U3(a,n,y.path,l,o,d):h=L3(a,n,y.path,y.affectedTree,l,o,d)}else if(s.type===sn.LISTEN_COMPLETE)h=B3(a,n,s.path,l,d);else throw Za("Unknown operation type: "+s.type);const g=d.getChanges();return O3(n,h,g),{viewCache:h,changes:g}}function O3(a,n,s){const l=n.eventCache;if(l.isFullyInitialized()){const o=l.getNode().isLeafNode()||l.getNode().isEmpty(),d=Ud(a);(s.length>0||!a.eventCache.isFullyInitialized()||o&&!l.getNode().equals(d)||!l.getNode().getPriority().equals(d.getPriority()))&&s.push(Rv(Ud(n)))}}function Hv(a,n,s,l,o,d){const h=n.eventCache;if(go(l,s)!=null)return n;{let p,g;if(xe(s))if(Y(n.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),n.serverCache.isFiltered()){const y=Ki(n),_=y instanceof le?y:le.EMPTY_NODE,x=yf(l,_);p=a.filter.updateFullNode(n.eventCache.getNode(),x,d)}else{const y=mo(l,Ki(n));p=a.filter.updateFullNode(n.eventCache.getNode(),y,d)}else{const y=de(s);if(y===".priority"){Y(vi(s)===1,"Can't have a priority with additional path components");const _=h.getNode();g=n.serverCache.getNode();const x=q0(l,s,_,g);x!=null?p=a.filter.updatePriority(_,x):p=h.getNode()}else{const _=Ie(s);let x;if(h.isCompleteForChild(y)){g=n.serverCache.getNode();const b=q0(l,s,h.getNode(),g);b!=null?x=h.getNode().getImmediateChild(y).updateChild(_,b):x=h.getNode().getImmediateChild(y)}else x=vf(l,y,n.serverCache);x!=null?p=a.filter.updateChild(h.getNode(),y,x,_,o,d):p=h.getNode()}}return sl(n,p,h.isFullyInitialized()||xe(s),a.filter.filtersNodes())}}function yo(a,n,s,l,o,d,h,p){const g=n.serverCache;let y;const _=h?a.filter:a.filter.getIndexedFilter();if(xe(s))y=_.updateFullNode(g.getNode(),l,null);else if(_.filtersNodes()&&!g.isFiltered()){const R=g.getNode().updateChild(s,l);y=_.updateFullNode(g.getNode(),R,null)}else{const R=de(s);if(!g.isCompleteForPath(s)&&vi(s)>1)return n;const z=Ie(s),H=g.getNode().getImmediateChild(R).updateChild(z,l);R===".priority"?y=_.updatePriority(g.getNode(),H):y=_.updateChild(g.getNode(),R,H,z,Iv,null)}const x=zv(n,y,g.isFullyInitialized()||xe(s),_.filtersNodes()),b=new xf(o,x,d);return Hv(a,x,s,o,b,p)}function qd(a,n,s,l,o,d,h){const p=n.eventCache;let g,y;const _=new xf(o,n,d);if(xe(s))y=a.filter.updateFullNode(n.eventCache.getNode(),l,h),g=sl(n,y,!0,a.filter.filtersNodes());else{const x=de(s);if(x===".priority")y=a.filter.updatePriority(n.eventCache.getNode(),l),g=sl(n,y,p.isFullyInitialized(),p.isFiltered());else{const b=Ie(s),R=p.getNode().getImmediateChild(x);let z;if(xe(b))z=l;else{const U=_.getCompleteChild(x);U!=null?bv(b)===".priority"&&U.getChild(Cv(b)).isEmpty()?z=U:z=U.updateChild(b,l):z=le.EMPTY_NODE}if(R.equals(z))g=n;else{const U=a.filter.updateChild(p.getNode(),x,z,b,_,h);g=sl(n,U,p.isFullyInitialized(),a.filter.filtersNodes())}}}return g}function Y0(a,n){return a.eventCache.isCompleteForChild(n)}function k3(a,n,s,l,o,d,h){let p=n;return l.foreach((g,y)=>{const _=it(s,g);Y0(n,de(_))&&(p=qd(a,p,_,y,o,d,h))}),l.foreach((g,y)=>{const _=it(s,g);Y0(n,de(_))||(p=qd(a,p,_,y,o,d,h))}),p}function G0(a,n,s){return s.foreach((l,o)=>{n=n.updateChild(l,o)}),n}function Yd(a,n,s,l,o,d,h,p){if(n.serverCache.getNode().isEmpty()&&!n.serverCache.isFullyInitialized())return n;let g=n,y;xe(s)?y=l:y=new Ye(null).setTree(s,l);const _=n.serverCache.getNode();return y.children.inorderTraversal((x,b)=>{if(_.hasChild(x)){const R=n.serverCache.getNode().getImmediateChild(x),z=G0(a,R,b);g=yo(a,g,new Be(x),z,o,d,h,p)}}),y.children.inorderTraversal((x,b)=>{const R=!n.serverCache.isCompleteForChild(x)&&b.value===null;if(!_.hasChild(x)&&!R){const z=n.serverCache.getNode().getImmediateChild(x),U=G0(a,z,b);g=yo(a,g,new Be(x),U,o,d,h,p)}}),g}function L3(a,n,s,l,o,d,h){if(go(o,s)!=null)return n;const p=n.serverCache.isFiltered(),g=n.serverCache;if(l.value!=null){if(xe(s)&&g.isFullyInitialized()||g.isCompleteForPath(s))return yo(a,n,s,g.getNode().getChild(s),o,d,p,h);if(xe(s)){let y=new Ye(null);return g.getNode().forEachChild(Ha,(_,x)=>{y=y.set(new Be(_),x)}),Yd(a,n,s,y,o,d,p,h)}else return n}else{let y=new Ye(null);return l.foreach((_,x)=>{const b=it(s,_);g.isCompleteForPath(b)&&(y=y.set(_,g.getNode().getChild(b)))}),Yd(a,n,s,y,o,d,p,h)}}function B3(a,n,s,l,o){const d=n.serverCache,h=zv(n,d.getNode(),d.isFullyInitialized()||xe(s),d.isFiltered());return Hv(a,h,s,l,Iv,o)}function U3(a,n,s,l,o,d){let h;if(go(l,s)!=null)return n;{const p=new xf(l,n,o),g=n.eventCache.getNode();let y;if(xe(s)||de(s)===".priority"){let _;if(n.serverCache.isFullyInitialized())_=mo(l,Ki(n));else{const x=n.serverCache.getNode();Y(x instanceof le,"serverChildren would be complete if leaf node"),_=yf(l,x)}_=_,y=a.filter.updateFullNode(g,_,d)}else{const _=de(s);let x=vf(l,_,n.serverCache);x==null&&n.serverCache.isCompleteForChild(_)&&(x=g.getImmediateChild(_)),x!=null?y=a.filter.updateChild(g,_,x,Ie(s),p,d):n.eventCache.getNode().hasChild(_)?y=a.filter.updateChild(g,_,le.EMPTY_NODE,Ie(s),p,d):y=g,y.isEmpty()&&n.serverCache.isFullyInitialized()&&(h=mo(l,Ki(n)),h.isLeafNode()&&(y=a.filter.updateFullNode(y,h,d)))}return h=n.serverCache.isFullyInitialized()||go(l,Ae())!=null,sl(n,y,h,a.filter.filtersNodes())}}class I3{constructor(n,s){this.query_=n,this.eventRegistrations_=[];const l=this.query_._queryParams,o=new ff(l.getIndex()),d=a3(l);this.processor_=M3(d);const h=s.serverCache,p=s.eventCache,g=o.updateFullNode(le.EMPTY_NODE,h.getNode(),null),y=d.updateFullNode(le.EMPTY_NODE,p.getNode(),null),_=new Pi(g,h.isFullyInitialized(),o.filtersNodes()),x=new Pi(y,p.isFullyInitialized(),d.filtersNodes());this.viewCache_=jo(x,_),this.eventGenerator_=new d3(this.query_)}get query(){return this.query_}}function H3(a){return a.viewCache_.serverCache.getNode()}function q3(a,n){const s=Ki(a.viewCache_);return s&&(a.query._queryParams.loadsAllData()||!xe(n)&&!s.getImmediateChild(de(n)).isEmpty())?s.getChild(n):null}function V0(a){return a.eventRegistrations_.length===0}function Y3(a,n){a.eventRegistrations_.push(n)}function F0(a,n,s){const l=[];if(s){Y(n==null,"A cancel should cancel all event registrations.");const o=a.query._path;a.eventRegistrations_.forEach(d=>{const h=d.createCancelEvent(s,o);h&&l.push(h)})}if(n){let o=[];for(let d=0;d<a.eventRegistrations_.length;++d){const h=a.eventRegistrations_[d];if(!h.matches(n))o.push(h);else if(n.hasAnyCallback()){o=o.concat(a.eventRegistrations_.slice(d+1));break}}a.eventRegistrations_=o}else a.eventRegistrations_=[];return l}function Q0(a,n,s,l){n.type===sn.MERGE&&n.source.queryId!==null&&(Y(Ki(a.viewCache_),"We should always have a full cache before handling merges"),Y(Ud(a.viewCache_),"Missing event cache, even though we have a server cache"));const o=a.viewCache_,d=z3(a.processor_,o,n,s,l);return D3(a.processor_,d.viewCache),Y(d.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),a.viewCache_=d.viewCache,qv(a,d.changes,d.viewCache.eventCache.getNode(),null)}function G3(a,n){const s=a.viewCache_.eventCache,l=[];return s.getNode().isLeafNode()||s.getNode().forEachChild(Xe,(d,h)=>{l.push(Va(d,h))}),s.isFullyInitialized()&&l.push(Rv(s.getNode())),qv(a,l,s.getNode(),n)}function qv(a,n,s,l){const o=l?[l]:a.eventRegistrations_;return f3(a.eventGenerator_,n,s,o)}let vo;class V3{constructor(){this.views=new Map}}function F3(a){Y(!vo,"__referenceConstructor has already been defined"),vo=a}function Q3(){return Y(vo,"Reference.ts has not been loaded"),vo}function X3(a){return a.views.size===0}function _f(a,n,s,l){const o=n.source.queryId;if(o!==null){const d=a.views.get(o);return Y(d!=null,"SyncTree gave us an op for an invalid query."),Q0(d,n,s,l)}else{let d=[];for(const h of a.views.values())d=d.concat(Q0(h,n,s,l));return d}}function P3(a,n,s,l,o){const d=n._queryIdentifier,h=a.views.get(d);if(!h){let p=mo(s,o?l:null),g=!1;p?g=!0:l instanceof le?(p=yf(s,l),g=!1):(p=le.EMPTY_NODE,g=!1);const y=jo(new Pi(p,g,!1),new Pi(l,o,!1));return new I3(n,y)}return h}function K3(a,n,s,l,o,d){const h=P3(a,n,l,o,d);return a.views.has(n._queryIdentifier)||a.views.set(n._queryIdentifier,h),Y3(h,s),G3(h,s)}function Z3(a,n,s,l){const o=n._queryIdentifier,d=[];let h=[];const p=xi(a);if(o==="default")for(const[g,y]of a.views.entries())h=h.concat(F0(y,s,l)),V0(y)&&(a.views.delete(g),y.query._queryParams.loadsAllData()||d.push(y.query));else{const g=a.views.get(o);g&&(h=h.concat(F0(g,s,l)),V0(g)&&(a.views.delete(o),g.query._queryParams.loadsAllData()||d.push(g.query)))}return p&&!xi(a)&&d.push(new(Q3())(n._repo,n._path)),{removed:d,events:h}}function Yv(a){const n=[];for(const s of a.views.values())s.query._queryParams.loadsAllData()||n.push(s);return n}function qa(a,n){let s=null;for(const l of a.views.values())s=s||q3(l,n);return s}function Gv(a,n){if(n._queryParams.loadsAllData())return Ro(a);{const l=n._queryIdentifier;return a.views.get(l)}}function Vv(a,n){return Gv(a,n)!=null}function xi(a){return Ro(a)!=null}function Ro(a){for(const n of a.views.values())if(n.query._queryParams.loadsAllData())return n;return null}let xo;function $3(a){Y(!xo,"__referenceConstructor has already been defined"),xo=a}function W3(){return Y(xo,"Reference.ts has not been loaded"),xo}let J3=1;class X0{constructor(n){this.listenProvider_=n,this.syncPointTree_=new Ye(null),this.pendingWriteTree_=T3(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Fv(a,n,s,l,o){return g3(a.pendingWriteTree_,n,s,l,o),o?wl(a,new Xi(Dv(),n,s)):[]}function Gi(a,n,s=!1){const l=y3(a.pendingWriteTree_,n);if(v3(a.pendingWriteTree_,n)){let d=new Ye(null);return l.snap!=null?d=d.set(Ae(),!0):Mt(l.children,h=>{d=d.set(new Be(h),!0)}),wl(a,new po(l.path,d,s))}else return[]}function Mo(a,n,s){return wl(a,new Xi(pf(),n,s))}function e4(a,n,s){const l=Ye.fromObject(s);return wl(a,new yl(pf(),n,l))}function t4(a,n){return wl(a,new gl(pf(),n))}function n4(a,n,s){const l=Sf(a,s);if(l){const o=Cf(l),d=o.path,h=o.queryId,p=At(d,n),g=new gl(mf(h),p);return Ef(a,d,g)}else return[]}function Gd(a,n,s,l,o=!1){const d=n._path,h=a.syncPointTree_.get(d);let p=[];if(h&&(n._queryIdentifier==="default"||Vv(h,n))){const g=Z3(h,n,s,l);X3(h)&&(a.syncPointTree_=a.syncPointTree_.remove(d));const y=g.removed;if(p=g.events,!o){const _=y.findIndex(b=>b._queryParams.loadsAllData())!==-1,x=a.syncPointTree_.findOnPath(d,(b,R)=>xi(R));if(_&&!x){const b=a.syncPointTree_.subtree(d);if(!b.isEmpty()){const R=s4(b);for(let z=0;z<R.length;++z){const U=R[z],H=U.query,V=Pv(a,U);a.listenProvider_.startListening(rl(H),_o(a,H),V.hashFn,V.onComplete)}}}!x&&y.length>0&&!l&&(_?a.listenProvider_.stopListening(rl(n),null):y.forEach(b=>{const R=a.queryToTagMap.get(Do(b));a.listenProvider_.stopListening(rl(b),R)}))}l4(a,y)}return p}function i4(a,n,s,l){const o=Sf(a,l);if(o!=null){const d=Cf(o),h=d.path,p=d.queryId,g=At(h,n),y=new Xi(mf(p),g,s);return Ef(a,h,y)}else return[]}function a4(a,n,s,l){const o=Sf(a,l);if(o){const d=Cf(o),h=d.path,p=d.queryId,g=At(h,n),y=Ye.fromObject(s),_=new yl(mf(p),g,y);return Ef(a,h,_)}else return[]}function P0(a,n,s,l=!1){const o=n._path;let d=null,h=!1;a.syncPointTree_.foreachOnPath(o,(b,R)=>{const z=At(b,o);d=d||qa(R,z),h=h||xi(R)});let p=a.syncPointTree_.get(o);p?(h=h||xi(p),d=d||qa(p,Ae())):(p=new V3,a.syncPointTree_=a.syncPointTree_.set(o,p));let g;d!=null?g=!0:(g=!1,d=le.EMPTY_NODE,a.syncPointTree_.subtree(o).foreachChild((R,z)=>{const U=qa(z,Ae());U&&(d=d.updateImmediateChild(R,U))}));const y=Vv(p,n);if(!y&&!n._queryParams.loadsAllData()){const b=Do(n);Y(!a.queryToTagMap.has(b),"View does not exist, but we have a tag");const R=r4();a.queryToTagMap.set(b,R),a.tagToQueryMap.set(R,b)}const _=gf(a.pendingWriteTree_,o);let x=K3(p,n,s,_,d,g);if(!y&&!h&&!l){const b=Gv(p,n);x=x.concat(o4(a,n,b))}return x}function bf(a,n,s){const o=a.pendingWriteTree_,d=a.syncPointTree_.findOnPath(n,(h,p)=>{const g=At(h,n),y=qa(p,g);if(y)return y});return Lv(o,n,d,s,!0)}function wl(a,n){return Qv(n,a.syncPointTree_,null,gf(a.pendingWriteTree_,Ae()))}function Qv(a,n,s,l){if(xe(a.path))return Xv(a,n,s,l);{const o=n.get(Ae());s==null&&o!=null&&(s=qa(o,Ae()));let d=[];const h=de(a.path),p=a.operationForChild(h),g=n.children.get(h);if(g&&p){const y=s?s.getImmediateChild(h):null,_=Bv(l,h);d=d.concat(Qv(p,g,y,_))}return o&&(d=d.concat(_f(o,a,l,s))),d}}function Xv(a,n,s,l){const o=n.get(Ae());s==null&&o!=null&&(s=qa(o,Ae()));let d=[];return n.children.inorderTraversal((h,p)=>{const g=s?s.getImmediateChild(h):null,y=Bv(l,h),_=a.operationForChild(h);_&&(d=d.concat(Xv(_,p,g,y)))}),o&&(d=d.concat(_f(o,a,l,s))),d}function Pv(a,n){const s=n.query,l=_o(a,s);return{hashFn:()=>(H3(n)||le.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return l?n4(a,s._path,l):t4(a,s._path);{const d=iE(o,s);return Gd(a,s,null,d)}}}}function _o(a,n){const s=Do(n);return a.queryToTagMap.get(s)}function Do(a){return a._path.toString()+"$"+a._queryIdentifier}function Sf(a,n){return a.tagToQueryMap.get(n)}function Cf(a){const n=a.indexOf("$");return Y(n!==-1&&n<a.length-1,"Bad queryKey."),{queryId:a.substr(n+1),path:new Be(a.substr(0,n))}}function Ef(a,n,s){const l=a.syncPointTree_.get(n);Y(l,"Missing sync point for query tag that we're tracking");const o=gf(a.pendingWriteTree_,n);return _f(l,s,o,null)}function s4(a){return a.fold((n,s,l)=>{if(s&&xi(s))return[Ro(s)];{let o=[];return s&&(o=Yv(s)),Mt(l,(d,h)=>{o=o.concat(h)}),o}})}function rl(a){return a._queryParams.loadsAllData()&&!a._queryParams.isDefault()?new(W3())(a._repo,a._path):a}function l4(a,n){for(let s=0;s<n.length;++s){const l=n[s];if(!l._queryParams.loadsAllData()){const o=Do(l),d=a.queryToTagMap.get(o);a.queryToTagMap.delete(o),a.tagToQueryMap.delete(d)}}}function r4(){return J3++}function o4(a,n,s){const l=n._path,o=_o(a,n),d=Pv(a,s),h=a.listenProvider_.startListening(rl(n),o,d.hashFn,d.onComplete),p=a.syncPointTree_.subtree(l);if(o)Y(!xi(p.value),"If we're adding a query, it shouldn't be shadowed");else{const g=p.fold((y,_,x)=>{if(!xe(y)&&_&&xi(_))return[Ro(_).query];{let b=[];return _&&(b=b.concat(Yv(_).map(R=>R.query))),Mt(x,(R,z)=>{b=b.concat(z)}),b}});for(let y=0;y<g.length;++y){const _=g[y];a.listenProvider_.stopListening(rl(_),_o(a,_))}}return h}class Nf{constructor(n){this.node_=n}getImmediateChild(n){const s=this.node_.getImmediateChild(n);return new Nf(s)}node(){return this.node_}}class wf{constructor(n,s){this.syncTree_=n,this.path_=s}getImmediateChild(n){const s=it(this.path_,n);return new wf(this.syncTree_,s)}node(){return bf(this.syncTree_,this.path_)}}const c4=function(a){return a=a||{},a.timestamp=a.timestamp||new Date().getTime(),a},K0=function(a,n,s){if(!a||typeof a!="object")return a;if(Y(".sv"in a,"Unexpected leaf node or priority contents"),typeof a[".sv"]=="string")return u4(a[".sv"],n,s);if(typeof a[".sv"]=="object")return d4(a[".sv"],n);Y(!1,"Unexpected server value: "+JSON.stringify(a,null,2))},u4=function(a,n,s){if(a==="timestamp")return s.timestamp;Y(!1,"Unexpected server value: "+a)},d4=function(a,n,s){a.hasOwnProperty("increment")||Y(!1,"Unexpected server value: "+JSON.stringify(a,null,2));const l=a.increment;typeof l!="number"&&Y(!1,"Unexpected increment value: "+l);const o=n.node();if(Y(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return l;const h=o.getValue();return typeof h!="number"?l:h+l},f4=function(a,n,s,l){return Tf(n,new wf(s,a),l)},Kv=function(a,n,s){return Tf(a,new Nf(n),s)};function Tf(a,n,s){const l=a.getPriority().val(),o=K0(l,n.getImmediateChild(".priority"),s);let d;if(a.isLeafNode()){const h=a,p=K0(h.getValue(),n,s);return p!==h.getValue()||o!==h.getPriority().val()?new lt(p,pt(o)):a}else{const h=a;return d=h,o!==h.getPriority().val()&&(d=d.updatePriority(new lt(o))),h.forEachChild(Xe,(p,g)=>{const y=Tf(g,n.getImmediateChild(p),s);y!==g&&(d=d.updateImmediateChild(p,y))}),d}}class Af{constructor(n="",s=null,l={children:{},childCount:0}){this.name=n,this.parent=s,this.node=l}}function jf(a,n){let s=n instanceof Be?n:new Be(n),l=a,o=de(s);for(;o!==null;){const d=Ya(l.node.children,o)||{children:{},childCount:0};l=new Af(o,l,d),s=Ie(s),o=de(s)}return l}function es(a){return a.node.value}function Zv(a,n){a.node.value=n,Vd(a)}function $v(a){return a.node.childCount>0}function h4(a){return es(a)===void 0&&!$v(a)}function zo(a,n){Mt(a.node.children,(s,l)=>{n(new Af(s,a,l))})}function Wv(a,n,s,l){s&&n(a),zo(a,o=>{Wv(o,n,!0)})}function p4(a,n,s){let l=a.parent;for(;l!==null;){if(n(l))return!0;l=l.parent}return!1}function Tl(a){return new Be(a.parent===null?a.name:Tl(a.parent)+"/"+a.name)}function Vd(a){a.parent!==null&&m4(a.parent,a.name,a)}function m4(a,n,s){const l=h4(s),o=qn(a.node.children,n);l&&o?(delete a.node.children[n],a.node.childCount--,Vd(a)):!l&&!o&&(a.node.children[n]=s.node,a.node.childCount++,Vd(a))}const g4=/[\[\].#$\/\u0000-\u001F\u007F]/,y4=/[\[\].#$\u0000-\u001F\u007F]/,_d=10*1024*1024,Jv=function(a){return typeof a=="string"&&a.length!==0&&!g4.test(a)},e1=function(a){return typeof a=="string"&&a.length!==0&&!y4.test(a)},v4=function(a){return a&&(a=a.replace(/^\/*\.info(\/|$)/,"/")),e1(a)},t1=function(a,n,s,l){l&&n===void 0||Rf(nf(a,"value"),n,s)},Rf=function(a,n,s){const l=s instanceof Be?new LE(s,a):s;if(n===void 0)throw new Error(a+"contains undefined "+qi(l));if(typeof n=="function")throw new Error(a+"contains a function "+qi(l)+" with contents = "+n.toString());if(ev(n))throw new Error(a+"contains "+n.toString()+" "+qi(l));if(typeof n=="string"&&n.length>_d/3&&To(n)>_d)throw new Error(a+"contains a string greater than "+_d+" utf8 bytes "+qi(l)+" ('"+n.substring(0,50)+"...')");if(n&&typeof n=="object"){let o=!1,d=!1;if(Mt(n,(h,p)=>{if(h===".value")o=!0;else if(h!==".priority"&&h!==".sv"&&(d=!0,!Jv(h)))throw new Error(a+" contains an invalid key ("+h+") "+qi(l)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);BE(l,h),Rf(a,p,l),UE(l)}),o&&d)throw new Error(a+' contains ".value" child '+qi(l)+" in addition to actual children.")}},n1=function(a,n,s,l){if(!e1(s))throw new Error(nf(a,n)+'was an invalid path = "'+s+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},x4=function(a,n,s,l){s&&(s=s.replace(/^\/*\.info(\/|$)/,"/")),n1(a,n,s)},Mf=function(a,n){if(de(n)===".info")throw new Error(a+" failed = Can't modify data under /.info/")},_4=function(a,n){const s=n.path.toString();if(typeof n.repoInfo.host!="string"||n.repoInfo.host.length===0||!Jv(n.repoInfo.namespace)&&n.repoInfo.host.split(":")[0]!=="localhost"||s.length!==0&&!v4(s))throw new Error(nf(a,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};class b4{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Df(a,n){let s=null;for(let l=0;l<n.length;l++){const o=n[l],d=o.getPath();s!==null&&!cf(d,s.path)&&(a.eventLists_.push(s),s=null),s===null&&(s={events:[],path:d}),s.events.push(o)}s&&a.eventLists_.push(s)}function i1(a,n,s){Df(a,s),a1(a,l=>cf(l,n))}function Un(a,n,s){Df(a,s),a1(a,l=>an(l,n)||an(n,l))}function a1(a,n){a.recursionDepth_++;let s=!0;for(let l=0;l<a.eventLists_.length;l++){const o=a.eventLists_[l];if(o){const d=o.path;n(d)?(S4(a.eventLists_[l]),a.eventLists_[l]=null):s=!1}}s&&(a.eventLists_=[]),a.recursionDepth_--}function S4(a){for(let n=0;n<a.events.length;n++){const s=a.events[n];if(s!==null){a.events[n]=null;const l=s.getEventRunner();il&&yt("event: "+s.toString()),Ja(l)}}}const C4="repo_interrupt",E4=25;class N4{constructor(n,s,l,o){this.repoInfo_=n,this.forceRestClient_=s,this.authTokenProvider_=l,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new b4,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ho(),this.transactionQueueTree_=new Af,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function w4(a,n,s){if(a.stats_=rf(a.repoInfo_),a.forceRestClient_||rE())a.server_=new fo(a.repoInfo_,(l,o,d,h)=>{Z0(a,l,o,d,h)},a.authTokenProvider_,a.appCheckProvider_),setTimeout(()=>$0(a,!0),0);else{if(typeof s<"u"&&s!==null){if(typeof s!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ot(s)}catch(l){throw new Error("Invalid authOverride provided: "+l)}}a.persistentConnection_=new On(a.repoInfo_,n,(l,o,d,h)=>{Z0(a,l,o,d,h)},l=>{$0(a,l)},l=>{T4(a,l)},a.authTokenProvider_,a.appCheckProvider_,s),a.server_=a.persistentConnection_}a.authTokenProvider_.addTokenChangeListener(l=>{a.server_.refreshAuthToken(l)}),a.appCheckProvider_.addTokenChangeListener(l=>{a.server_.refreshAppCheckToken(l.token)}),a.statsReporter_=fE(a.repoInfo_,()=>new u3(a.stats_,a.server_)),a.infoData_=new s3,a.infoSyncTree_=new X0({startListening:(l,o,d,h)=>{let p=[];const g=a.infoData_.getNode(l._path);return g.isEmpty()||(p=Mo(a.infoSyncTree_,l._path,g),setTimeout(()=>{h("ok")},0)),p},stopListening:()=>{}}),Of(a,"connected",!1),a.serverSyncTree_=new X0({startListening:(l,o,d,h)=>(a.server_.listen(l,d,o,(p,g)=>{const y=h(p,g);Un(a.eventQueue_,l._path,y)}),[]),stopListening:(l,o)=>{a.server_.unlisten(l,o)}})}function s1(a){const s=a.infoData_.getNode(new Be(".info/serverTimeOffset")).val()||0;return new Date().getTime()+s}function zf(a){return c4({timestamp:s1(a)})}function Z0(a,n,s,l,o){a.dataUpdateCount++;const d=new Be(n);s=a.interceptServerDataCallback_?a.interceptServerDataCallback_(n,s):s;let h=[];if(o)if(l){const g=ao(s,y=>pt(y));h=a4(a.serverSyncTree_,d,g,o)}else{const g=pt(s);h=i4(a.serverSyncTree_,d,g,o)}else if(l){const g=ao(s,y=>pt(y));h=e4(a.serverSyncTree_,d,g)}else{const g=pt(s);h=Mo(a.serverSyncTree_,d,g)}let p=d;h.length>0&&(p=Oo(a,d)),Un(a.eventQueue_,p,h)}function $0(a,n){Of(a,"connected",n),n===!1&&j4(a)}function T4(a,n){Mt(n,(s,l)=>{Of(a,s,l)})}function Of(a,n,s){const l=new Be("/.info/"+n),o=pt(s);a.infoData_.updateSnapshot(l,o);const d=Mo(a.infoSyncTree_,l,o);Un(a.eventQueue_,l,d)}function l1(a){return a.nextWriteId_++}function A4(a,n,s,l,o){kf(a,"set",{path:n.toString(),value:s,priority:l});const d=zf(a),h=pt(s,l),p=bf(a.serverSyncTree_,n),g=Kv(h,p,d),y=l1(a),_=Fv(a.serverSyncTree_,n,g,y,!0);Df(a.eventQueue_,_),a.server_.put(n.toString(),h.val(!0),(b,R)=>{const z=b==="ok";z||Rt("set at "+n+" failed: "+b);const U=Gi(a.serverSyncTree_,y,!z);Un(a.eventQueue_,n,U),D4(a,o,b,R)});const x=f1(a,n);Oo(a,x),Un(a.eventQueue_,x,[])}function j4(a){kf(a,"onDisconnectEvents");const n=zf(a),s=ho();Bd(a.onDisconnect_,Ae(),(o,d)=>{const h=f4(o,d,a.serverSyncTree_,n);Mv(s,o,h)});let l=[];Bd(s,Ae(),(o,d)=>{l=l.concat(Mo(a.serverSyncTree_,o,d));const h=f1(a,o);Oo(a,h)}),a.onDisconnect_=ho(),Un(a.eventQueue_,Ae(),l)}function R4(a,n,s){let l;de(n._path)===".info"?l=P0(a.infoSyncTree_,n,s):l=P0(a.serverSyncTree_,n,s),i1(a.eventQueue_,n._path,l)}function r1(a,n,s){let l;de(n._path)===".info"?l=Gd(a.infoSyncTree_,n,s):l=Gd(a.serverSyncTree_,n,s),i1(a.eventQueue_,n._path,l)}function M4(a){a.persistentConnection_&&a.persistentConnection_.interrupt(C4)}function kf(a,...n){let s="";a.persistentConnection_&&(s=a.persistentConnection_.id+":"),yt(s,...n)}function D4(a,n,s,l){n&&Ja(()=>{if(s==="ok")n(null);else{const o=(s||"error").toUpperCase();let d=o;l&&(d+=": "+l);const h=new Error(d);h.code=o,n(h)}})}function o1(a,n,s){return bf(a.serverSyncTree_,n,s)||le.EMPTY_NODE}function Lf(a,n=a.transactionQueueTree_){if(n||ko(a,n),es(n)){const s=u1(a,n);Y(s.length>0,"Sending zero length transaction queue"),s.every(o=>o.status===0)&&z4(a,Tl(n),s)}else $v(n)&&zo(n,s=>{Lf(a,s)})}function z4(a,n,s){const l=s.map(y=>y.currentWriteId),o=o1(a,n,l);let d=o;const h=o.hash();for(let y=0;y<s.length;y++){const _=s[y];Y(_.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),_.status=1,_.retryCount++;const x=At(n,_.path);d=d.updateChild(x,_.currentOutputSnapshotRaw)}const p=d.val(!0),g=n;a.server_.put(g.toString(),p,y=>{kf(a,"transaction put response",{path:g.toString(),status:y});let _=[];if(y==="ok"){const x=[];for(let b=0;b<s.length;b++)s[b].status=2,_=_.concat(Gi(a.serverSyncTree_,s[b].currentWriteId)),s[b].onComplete&&x.push(()=>s[b].onComplete(null,!0,s[b].currentOutputSnapshotResolved)),s[b].unwatcher();ko(a,jf(a.transactionQueueTree_,n)),Lf(a,a.transactionQueueTree_),Un(a.eventQueue_,n,_);for(let b=0;b<x.length;b++)Ja(x[b])}else{if(y==="datastale")for(let x=0;x<s.length;x++)s[x].status===3?s[x].status=4:s[x].status=0;else{Rt("transaction at "+g.toString()+" failed: "+y);for(let x=0;x<s.length;x++)s[x].status=4,s[x].abortReason=y}Oo(a,n)}},h)}function Oo(a,n){const s=c1(a,n),l=Tl(s),o=u1(a,s);return O4(a,o,l),l}function O4(a,n,s){if(n.length===0)return;const l=[];let o=[];const h=n.filter(p=>p.status===0).map(p=>p.currentWriteId);for(let p=0;p<n.length;p++){const g=n[p],y=At(s,g.path);let _=!1,x;if(Y(y!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),g.status===4)_=!0,x=g.abortReason,o=o.concat(Gi(a.serverSyncTree_,g.currentWriteId,!0));else if(g.status===0)if(g.retryCount>=E4)_=!0,x="maxretry",o=o.concat(Gi(a.serverSyncTree_,g.currentWriteId,!0));else{const b=o1(a,g.path,h);g.currentInputSnapshot=b;const R=n[p].update(b.val());if(R!==void 0){Rf("transaction failed: Data returned ",R,g.path);let z=pt(R);typeof R=="object"&&R!=null&&qn(R,".priority")||(z=z.updatePriority(b.getPriority()));const H=g.currentWriteId,V=zf(a),G=Kv(z,b,V);g.currentOutputSnapshotRaw=z,g.currentOutputSnapshotResolved=G,g.currentWriteId=l1(a),h.splice(h.indexOf(H),1),o=o.concat(Fv(a.serverSyncTree_,g.path,G,g.currentWriteId,g.applyLocally)),o=o.concat(Gi(a.serverSyncTree_,H,!0))}else _=!0,x="nodata",o=o.concat(Gi(a.serverSyncTree_,g.currentWriteId,!0))}Un(a.eventQueue_,s,o),o=[],_&&(n[p].status=2,(function(b){setTimeout(b,Math.floor(0))})(n[p].unwatcher),n[p].onComplete&&(x==="nodata"?l.push(()=>n[p].onComplete(null,!1,n[p].currentInputSnapshot)):l.push(()=>n[p].onComplete(new Error(x),!1,null))))}ko(a,a.transactionQueueTree_);for(let p=0;p<l.length;p++)Ja(l[p]);Lf(a,a.transactionQueueTree_)}function c1(a,n){let s,l=a.transactionQueueTree_;for(s=de(n);s!==null&&es(l)===void 0;)l=jf(l,s),n=Ie(n),s=de(n);return l}function u1(a,n){const s=[];return d1(a,n,s),s.sort((l,o)=>l.order-o.order),s}function d1(a,n,s){const l=es(n);if(l)for(let o=0;o<l.length;o++)s.push(l[o]);zo(n,o=>{d1(a,o,s)})}function ko(a,n){const s=es(n);if(s){let l=0;for(let o=0;o<s.length;o++)s[o].status!==2&&(s[l]=s[o],l++);s.length=l,Zv(n,s.length>0?s:void 0)}zo(n,l=>{ko(a,l)})}function f1(a,n){const s=Tl(c1(a,n)),l=jf(a.transactionQueueTree_,n);return p4(l,o=>{bd(a,o)}),bd(a,l),Wv(l,o=>{bd(a,o)}),s}function bd(a,n){const s=es(n);if(s){const l=[];let o=[],d=-1;for(let h=0;h<s.length;h++)s[h].status===3||(s[h].status===1?(Y(d===h-1,"All SENT items should be at beginning of queue."),d=h,s[h].status=3,s[h].abortReason="set"):(Y(s[h].status===0,"Unexpected transaction status in abort"),s[h].unwatcher(),o=o.concat(Gi(a.serverSyncTree_,s[h].currentWriteId,!0)),s[h].onComplete&&l.push(s[h].onComplete.bind(null,new Error("set"),!1,null))));d===-1?Zv(n,void 0):s.length=d+1,Un(a.eventQueue_,Tl(n),o);for(let h=0;h<l.length;h++)Ja(l[h])}}function k4(a){let n="";const s=a.split("/");for(let l=0;l<s.length;l++)if(s[l].length>0){let o=s[l];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}n+="/"+o}return n}function L4(a){const n={};a.charAt(0)==="?"&&(a=a.substring(1));for(const s of a.split("&")){if(s.length===0)continue;const l=s.split("=");l.length===2?n[decodeURIComponent(l[0])]=decodeURIComponent(l[1]):Rt(`Invalid query segment '${s}' in query '${a}'`)}return n}const W0=function(a,n){const s=B4(a),l=s.namespace;s.domain==="firebase.com"&&Bn(s.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!l||l==="undefined")&&s.domain!=="localhost"&&Bn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),s.secure||W5();const o=s.scheme==="ws"||s.scheme==="wss";return{repoInfo:new fv(s.host,s.secure,l,o,n,"",l!==s.subdomain),path:new Be(s.pathString)}},B4=function(a){let n="",s="",l="",o="",d="",h=!0,p="https",g=443;if(typeof a=="string"){let y=a.indexOf("//");y>=0&&(p=a.substring(0,y-1),a=a.substring(y+2));let _=a.indexOf("/");_===-1&&(_=a.length);let x=a.indexOf("?");x===-1&&(x=a.length),n=a.substring(0,Math.min(_,x)),_<x&&(o=k4(a.substring(_,x)));const b=L4(a.substring(Math.min(a.length,x)));y=n.indexOf(":"),y>=0?(h=p==="https"||p==="wss",g=parseInt(n.substring(y+1),10)):y=n.length;const R=n.slice(0,y);if(R.toLowerCase()==="localhost")s="localhost";else if(R.split(".").length<=2)s=R;else{const z=n.indexOf(".");l=n.substring(0,z).toLowerCase(),s=n.substring(z+1),d=l}"ns"in b&&(d=b.ns)}return{host:n,port:g,domain:s,subdomain:l,secure:h,scheme:p,pathString:o,namespace:d}};const J0="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",U4=(function(){let a=0;const n=[];return function(s){const l=s===a;a=s;let o;const d=new Array(8);for(o=7;o>=0;o--)d[o]=J0.charAt(s%64),s=Math.floor(s/64);Y(s===0,"Cannot push at time == 0");let h=d.join("");if(l){for(o=11;o>=0&&n[o]===63;o--)n[o]=0;n[o]++}else for(o=0;o<12;o++)n[o]=Math.floor(Math.random()*64);for(o=0;o<12;o++)h+=J0.charAt(n[o]);return Y(h.length===20,"nextPushId: Length should be 20."),h}})();class h1{constructor(n,s,l,o){this.eventType=n,this.eventRegistration=s,this.snapshot=l,this.prevName=o}getPath(){const n=this.snapshot.ref;return this.eventType==="value"?n._path:n.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ot(this.snapshot.exportVal())}}class p1{constructor(n,s,l){this.eventRegistration=n,this.error=s,this.path=l}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}class m1{constructor(n,s){this.snapshotCallback=n,this.cancelCallback=s}onValue(n,s){this.snapshotCallback.call(null,n,s)}onCancel(n){return Y(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,n)}get hasCancelCallback(){return!!this.cancelCallback}matches(n){return this.snapshotCallback===n.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===n.snapshotCallback.userCallback&&this.snapshotCallback.context===n.snapshotCallback.context}}class Bf{constructor(n,s,l,o){this._repo=n,this._path=s,this._queryParams=l,this._orderByCalled=o}get key(){return xe(this._path)?null:bv(this._path)}get ref(){return new Yn(this._repo,this._path)}get _queryIdentifier(){const n=L0(this._queryParams),s=sf(n);return s==="{}"?"default":s}get _queryObject(){return L0(this._queryParams)}isEqual(n){if(n=$a(n),!(n instanceof Bf))return!1;const s=this._repo===n._repo,l=cf(this._path,n._path),o=this._queryIdentifier===n._queryIdentifier;return s&&l&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+kE(this._path)}}class Yn extends Bf{constructor(n,s){super(n,s,new hf,!1)}get parent(){const n=Cv(this._path);return n===null?null:new Yn(this._repo,n)}get root(){let n=this;for(;n.parent!==null;)n=n.parent;return n}}class vl{constructor(n,s,l){this._node=n,this.ref=s,this._index=l}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(n){const s=new Be(n),l=Qa(this.ref,n);return new vl(this._node.getChild(s),l,Xe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(n){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(l,o)=>n(new vl(o,Qa(this.ref,l),Xe)))}hasChild(n){const s=new Be(n);return!this._node.getChild(s).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function In(a,n){return a=$a(a),a._checkNotDeleted("ref"),n!==void 0?Qa(a._root,n):a._root}function Qa(a,n){return a=$a(a),de(a._path)===null?x4("child","path",n):n1("child","path",n),new Yn(a._repo,it(a._path,n))}function I4(a,n){a=$a(a),Mf("push",a._path),t1("push",n,a._path,!0);const s=s1(a._repo),l=U4(s),o=Qa(a,l),d=Qa(a,l);let h;return n!=null?h=Al(d,n).then(()=>d):h=Promise.resolve(d),o.then=h.then.bind(h),o.catch=h.then.bind(h,void 0),o}function ey(a){return Mf("remove",a._path),Al(a,null)}function Al(a,n){a=$a(a),Mf("set",a._path),t1("set",n,a._path,!1);const s=new wo;return A4(a._repo,a._path,n,null,s.wrapCallback(()=>{})),s.promise}class Lo{constructor(n){this.callbackContext=n}respondsTo(n){return n==="value"}createEvent(n,s){const l=s._queryParams.getIndex();return new h1("value",this,new vl(n.snapshotNode,new Yn(s._repo,s._path),l))}getEventRunner(n){return n.getEventType()==="cancel"?()=>this.callbackContext.onCancel(n.error):()=>this.callbackContext.onValue(n.snapshot,null)}createCancelEvent(n,s){return this.callbackContext.hasCancelCallback?new p1(this,n,s):null}matches(n){return n instanceof Lo?!n.callbackContext||!this.callbackContext?!0:n.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Bo{constructor(n,s){this.eventType=n,this.callbackContext=s}respondsTo(n){let s=n==="children_added"?"child_added":n;return s=s==="children_removed"?"child_removed":s,this.eventType===s}createCancelEvent(n,s){return this.callbackContext.hasCancelCallback?new p1(this,n,s):null}createEvent(n,s){Y(n.childName!=null,"Child events should have a childName.");const l=Qa(new Yn(s._repo,s._path),n.childName),o=s._queryParams.getIndex();return new h1(n.type,this,new vl(n.snapshotNode,l,o),n.prevName)}getEventRunner(n){return n.getEventType()==="cancel"?()=>this.callbackContext.onCancel(n.error):()=>this.callbackContext.onValue(n.snapshot,n.prevName)}matches(n){return n instanceof Bo?this.eventType===n.eventType&&(!this.callbackContext||!n.callbackContext||this.callbackContext.matches(n.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function g1(a,n,s,l,o){const d=new m1(s,void 0),h=n==="value"?new Lo(d):new Bo(n,d);return R4(a._repo,a,h),()=>r1(a._repo,a,h)}function y1(a,n,s,l){return g1(a,"value",n)}function H4(a,n,s,l){return g1(a,"child_added",n)}function Uf(a,n,s){let l=null;const o=s?new m1(s):null;n==="value"?l=new Lo(o):n&&(l=new Bo(n,o)),r1(a._repo,a,l)}F3(Yn);$3(Yn);const q4="FIREBASE_DATABASE_EMULATOR_HOST",Fd={};let Y4=!1;function G4(a,n,s,l){const o=n.lastIndexOf(":"),d=n.substring(0,o),h=tf(d);a.repoInfo_=new fv(n,h,a.repoInfo_.namespace,a.repoInfo_.webSocketOnly,a.repoInfo_.nodeAdmin,a.repoInfo_.persistenceKey,a.repoInfo_.includeNamespaceInQueryParams,!0,s),l&&(a.authTokenProvider_=l)}function V4(a,n,s,l,o){let d=l||a.options.databaseURL;d===void 0&&(a.options.projectId||Bn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),yt("Using default host for project ",a.options.projectId),d=`${a.options.projectId}-default-rtdb.firebaseio.com`);let h=W0(d,o),p=h.repoInfo,g;typeof process<"u"&&v0&&(g=v0[q4]),g?(d=`http://${g}?ns=${p.namespace}`,h=W0(d,o),p=h.repoInfo):h.repoInfo.secure;const y=new cE(a.name,a.options,n);_4("Invalid Firebase Database URL",h),xe(h.path)||Bn("Database URL must point to the root of a Firebase Database (not including a child path).");const _=Q4(p,a,y,new oE(a,s));return new X4(_,a)}function F4(a,n){const s=Fd[n];(!s||s[a.key]!==a)&&Bn(`Database ${n}(${a.repoInfo_}) has already been deleted.`),M4(a),delete s[a.key]}function Q4(a,n,s,l){let o=Fd[n.name];o||(o={},Fd[n.name]=o);let d=o[a.toURLString()];return d&&Bn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),d=new N4(a,Y4,s,l),o[a.toURLString()]=d,d}class X4{constructor(n,s){this._repoInternal=n,this.app=s,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(w4(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Yn(this._repo,Ae())),this._rootInternal}_delete(){return this._rootInternal!==null&&(F4(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(n){this._rootInternal===null&&Bn("Cannot call "+n+" on a deleted database.")}}function P4(a=z5(),n){const s=A5(a,"database").getImmediate({identifier:n});if(!s._instanceStarted){const l=hC("database");l&&K4(s,...l)}return s}function K4(a,n,s,l={}){a=$a(a),a._checkNotDeleted("useEmulator");const o=`${n}:${s}`,d=a._repoInternal;if(a._instanceStarted){if(o===a._repoInternal.repoInfo_.host&&so(l,d.repoInfo_.emulatorOptions))return;Bn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let h;if(d.repoInfo_.nodeAdmin)l.mockUserToken&&Bn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),h=new Jr(Jr.OWNER);else if(l.mockUserToken){const p=typeof l.mockUserToken=="string"?l.mockUserToken:mC(l.mockUserToken,a.app.options.projectId);h=new Jr(p)}tf(n)&&(pC(n),vC("Database",!0)),G4(d,o,l,h)}function Z4(a){Q5(D5),ro(new ul("database",(n,{instanceIdentifier:s})=>{const l=n.getProvider("app").getImmediate(),o=n.getProvider("auth-internal"),d=n.getProvider("app-check-internal");return V4(l,o,d,s)},"PUBLIC").setMultipleInstances(!0)),Ua(x0,_0,a),Ua(x0,_0,"esm2020")}On.prototype.simpleListen=function(a,n){this.sendRequest("q",{p:a},n)};On.prototype.echo=function(a,n){this.sendRequest("echo",{d:a},n)};Z4();const $4={apiKey:"AIzaSyDEXAMPLE-replace-with-your-key",authDomain:"revoshalaa.firebaseapp.com",databaseURL:"https://revoshalaa-default-rtdb.firebaseio.com",projectId:"revoshalaa",storageBucket:"revoshalaa.appspot.com",messagingSenderId:"123456789",appId:"1:123456789:web:abcdef123456"},W4=Py($4),Hn=P4(W4);function J4(a){const n=In(Hn,`live-sessions/${a.id}`);return Al(n,{...a,startedAt:new Date().toISOString()})}function e6(a){const n=In(Hn,`live-sessions/${a}`),s=In(Hn,`signaling/${a}`);return Promise.all([ey(n),ey(s)])}function t6(a){const n=In(Hn,"live-sessions"),s=y1(n,l=>{const o=l.val(),d=o?Object.values(o):[];a(d)});return()=>Uf(n,"value",s)}function n6(a,n){return Al(In(Hn,`signaling/${a}/offer`),JSON.stringify(n))}function i6(a,n){return Al(In(Hn,`signaling/${a}/answer`),JSON.stringify(n))}function v1(a,n,s){const l=In(Hn,`signaling/${a}/${n}-candidates`);return I4(l,JSON.stringify(s))}function x1(a,n){const s=In(Hn,`signaling/${a}`),l=y1(s,o=>{const d=o.val()||{},h={offer:d.offer?JSON.parse(d.offer):null,answer:d.answer?JSON.parse(d.answer):null,tutorCandidates:d["tutor-candidates"]?Object.values(d["tutor-candidates"]).map(p=>JSON.parse(p)):[],viewerCandidates:d["viewer-candidates"]?Object.values(d["viewer-candidates"]).map(p=>JSON.parse(p)):[]};n(h)});return()=>Uf(s,"value",l)}function _1(a,n,s){const l=In(Hn,`signaling/${a}/${n}-candidates`),o=H4(l,d=>{const h=JSON.parse(d.val());s(h)});return()=>Uf(l,"child_added",o)}const ty=["linear-gradient(135deg, #A8C4A5 0%, #8BA888 100%)","linear-gradient(135deg, #9B8EC4 0%, #7B6FA4 100%)","linear-gradient(135deg, #D9A87C 0%, #C68B59 100%)","linear-gradient(135deg, #C4857A 0%, #B06B5E 100%)","linear-gradient(135deg, #6B8FAD 0%, #537A96 100%)","linear-gradient(135deg, #BCA9D4 0%, #A08CC0 100%)","linear-gradient(135deg, #7ABFB0 0%, #5CA69A 100%)","linear-gradient(135deg, #D4A853 0%, #B88F3A 100%)"];function a6(){const a=vt(),{user:n,liveSessions:s,categories:l}=_i(),o=(l||[]).map((y,_)=>({...y,sessions:15+y.name.length*3%20,gradient:ty[_%ty.length]})),[d,h]=N.useState([]);N.useEffect(()=>{const y=t6(_=>{h(_)});return()=>y()},[]);const p=d.length>0?d:s,g=p.length>0?p[0]:null;return f.jsxs("div",{className:"page home-page",children:[f.jsxs("div",{className:"home-header",children:[f.jsxs("div",{children:[f.jsxs("p",{className:"greeting",children:["Hey, ",n?.name||"Guest"," 👋"]}),f.jsx("h1",{children:"Revoshalaa"})]}),f.jsx("div",{className:"header-actions",children:f.jsx("button",{className:"search-btn",onClick:()=>a("/explore"),children:f.jsx(GS,{size:20})})})]}),f.jsxs("div",{className:"page-content",children:[g?f.jsxs("div",{className:"live-banner glass-card",onClick:()=>a("/live-session",{state:g}),children:[f.jsxs("div",{className:"live-banner-badge",children:[f.jsx("span",{className:"badge badge-live",children:"● LIVE"}),f.jsxs("span",{className:"viewer-count",children:[f.jsx(Ka,{size:12})," ",g.viewers+12]})]}),f.jsxs("div",{className:"live-banner-info",children:[f.jsx("h3",{children:g.title}),f.jsxs("p",{children:[g.tutorName," · ",g.category]})]}),f.jsxs("button",{className:"btn-primary live-join-btn",children:[f.jsx(no,{size:16,fill:"white"})," Join"]})]}):f.jsxs("div",{className:"no-live-banner glass-card",children:[f.jsx("div",{className:"icon-circle",children:f.jsx(Co,{size:24,color:"var(--text-secondary)"})}),f.jsxs("div",{className:"no-live-info",children:[f.jsx("h3",{children:"No live sessions right now"}),f.jsx("p",{children:"Check the schedule for upcoming classes"})]}),f.jsx("button",{className:"btn-outline",onClick:()=>a("/schedule"),children:"View Schedule"})]}),f.jsxs("section",{className:"home-section",style:{marginTop:24},children:[f.jsx("div",{className:"section-header",children:f.jsx("h2",{children:"Categories"})}),f.jsx("div",{className:"categories-grid",children:o.map(y=>f.jsxs("div",{className:"category-big-card",style:{background:y.gradient},onClick:()=>a(`/category/${y.id}`),children:[f.jsx("span",{className:"cat-emoji",children:y.emoji}),f.jsx("h3",{children:y.name}),f.jsxs("p",{children:[y.sessions," sessions"]})]},y.id))})]}),f.jsxs("section",{className:"home-section",children:[f.jsxs("div",{className:"section-header",children:[f.jsx("h2",{children:"Upcoming Live"}),f.jsx("button",{className:"see-all",onClick:()=>a("/schedule"),children:"See All"})]}),f.jsxs("div",{className:"h-scroll",style:{paddingLeft:0},children:[f.jsxs("div",{className:"session-card glass-card",onClick:()=>a("/schedule"),children:[f.jsxs("div",{className:"session-card-top",children:[f.jsx("span",{className:"badge badge-free",children:"FREE"}),f.jsx("span",{className:"session-cat",children:"Fitness"})]}),f.jsx("h3",{children:"HIIT Burn Challenge"}),f.jsx("p",{className:"session-instructor",children:"Ankit Verma"}),f.jsxs("div",{className:"session-time",children:[f.jsx(Vi,{size:13}),f.jsx("span",{children:"Today, 6:00 PM"})]})]}),f.jsxs("div",{className:"session-card glass-card",onClick:()=>a("/schedule"),children:[f.jsxs("div",{className:"session-card-top",children:[f.jsx("span",{className:"badge badge-paid",children:"$5"}),f.jsx("span",{className:"session-cat",children:"Music"})]}),f.jsx("h3",{children:"Guitar for Beginners"}),f.jsx("p",{className:"session-instructor",children:"Rohan Mehta"}),f.jsxs("div",{className:"session-time",children:[f.jsx(Vi,{size:13}),f.jsx("span",{children:"Today, 8:00 PM"})]})]}),f.jsxs("div",{className:"session-card glass-card",onClick:()=>a("/schedule"),children:[f.jsxs("div",{className:"session-card-top",children:[f.jsx("span",{className:"badge badge-free",children:"FREE"}),f.jsx("span",{className:"session-cat",children:"Cooking"})]}),f.jsx("h3",{children:"5-Min Healthy Meals"}),f.jsx("p",{className:"session-instructor",children:"Chef Ananya"}),f.jsxs("div",{className:"session-time",children:[f.jsx(Vi,{size:13}),f.jsx("span",{children:"Tomorrow, 12:00 PM"})]})]})]})]})]}),f.jsx("style",{children:`
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
      `})]})}const s6=[{id:"hiit",name:"HIIT Training",type:"Fitness",emoji:"🔥",sessions:8,color:"#A8C4A5"},{id:"strength",name:"Strength",type:"Fitness",emoji:"💪",sessions:6,color:"#8BA888"},{id:"yoga",name:"Yoga",type:"Fitness",emoji:"🧘",sessions:7,color:"#6D8A6A"},{id:"crossfit",name:"CrossFit",type:"Fitness",emoji:"🏋️",sessions:5,color:"#7AA27E"},{id:"guitar",name:"Guitar",type:"Music",emoji:"🎸",sessions:8,color:"#9B8EC4"},{id:"piano",name:"Piano",type:"Music",emoji:"🎹",sessions:6,color:"#7B6FA4"},{id:"vocals",name:"Vocals",type:"Music",emoji:"🎤",sessions:5,color:"#A99BD4"},{id:"production",name:"Music Production",type:"Music",emoji:"🎧",sessions:4,color:"#8676B4"},{id:"healthy",name:"Healthy Meals",type:"Cooking",emoji:"🥗",sessions:6,color:"#D9A87C"},{id:"baking",name:"Baking",type:"Cooking",emoji:"🧁",sessions:5,color:"#C68B59"},{id:"indian",name:"Indian Cuisine",type:"Cooking",emoji:"🍛",sessions:4,color:"#B87A4A"},{id:"illustration",name:"Illustration",type:"Art & Design",emoji:"✏️",sessions:6,color:"#C4857A"},{id:"uidesign",name:"UI/UX Design",type:"Art & Design",emoji:"📱",sessions:5,color:"#B06B5E"},{id:"painting",name:"Painting",type:"Art & Design",emoji:"🖌️",sessions:4,color:"#D9927A"},{id:"marketing",name:"Marketing",type:"Business",emoji:"📣",sessions:5,color:"#6B8FAD"},{id:"freelance",name:"Freelancing",type:"Business",emoji:"💼",sessions:4,color:"#537A96"},{id:"finance",name:"Finance",type:"Business",emoji:"💰",sessions:3,color:"#4A6A80"},{id:"meditation",name:"Meditation",type:"Wellness",emoji:"🧘‍♀️",sessions:5,color:"#BCA9D4"},{id:"mindfulness",name:"Mindfulness",type:"Wellness",emoji:"🌿",sessions:4,color:"#A08CC0"},{id:"breathwork",name:"Breathwork",type:"Wellness",emoji:"🌬️",sessions:3,color:"#9182B0"}],l6=["fitness","music","cooking","art","business","wellness"];function r6(){const a=vt(),{categories:n}=_i(),[s,l]=N.useState(""),[o,d]=N.useState("All"),h=["All",...(n||[]).map(_=>_.name)],p=(n||[]).filter(_=>!l6.includes(_.id)).map(_=>({id:_.id,name:_.name,type:_.name,emoji:_.emoji,sessions:3,color:"#8BA888"})),y=[...s6,...p].filter(_=>{const x=_.name.toLowerCase().includes(s.toLowerCase()),b=o==="All"||_.type===o;return x&&b});return f.jsxs("div",{className:"page explore-page",children:[f.jsx("div",{className:"page-header",children:f.jsx("h1",{children:"Explore"})}),f.jsxs("div",{className:"page-content",children:[f.jsxs("div",{className:"search-bar glass-card",children:[f.jsx(MS,{size:18,color:"var(--text-tertiary)"}),f.jsx("input",{type:"text",placeholder:"Search creators, topics...",value:s,onChange:_=>l(_.target.value)})]}),f.jsx("div",{className:"filter-chips h-scroll",children:h.map(_=>f.jsx("button",{className:`chip ${o===_?"chip-active":""}`,onClick:()=>d(_),children:_},_))}),f.jsx("div",{className:"explore-grid",children:y.map(_=>f.jsxs("div",{className:"explore-card glass-card",onClick:()=>a(`/category/${_.type?_.type.toLowerCase().replace(/[^a-z]/g,"-"):"fitness"}`),children:[f.jsx("div",{className:"explore-card-emoji",style:{background:`${_.color}20`},children:f.jsx("span",{children:_.emoji})}),f.jsxs("div",{className:"explore-card-info",children:[f.jsx("h3",{children:_.name}),f.jsxs("p",{children:[_.sessions," sessions · ",_.type]})]}),f.jsx(yi,{size:16,color:"var(--text-tertiary)"})]},_.id))})]}),f.jsx("style",{children:`
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
      `})]})}const ny={fitness:{name:"Fitness",emoji:"💪",tagline:"Train with top fitness creators",gradient:"linear-gradient(135deg, #A8C4A5 0%, #8BA888 100%)",instructors:[{id:1,name:"Ankit Verma",specialty:"HIIT & Strength",rating:4.9,avatar:"💪",nextLive:"Today, 6:00 PM"},{id:2,name:"Neha Gupta",specialty:"Yoga & Pilates",rating:4.8,avatar:"🧘‍♀️",nextLive:"Tomorrow, 7:00 AM"}],upcomingSessions:[{id:1,title:"HIIT Burn Challenge",time:"Today, 6:00 PM",free:!0,viewers:0},{id:2,title:"Full Body Strength",time:"Wed, 7:00 AM",free:!1,viewers:0},{id:3,title:"Morning Yoga Flow",time:"Thu, 6:00 AM",free:!0,viewers:0}]},music:{name:"Music",emoji:"🎵",tagline:"Learn instruments, production & voice",gradient:"linear-gradient(135deg, #9B8EC4 0%, #7B6FA4 100%)",instructors:[{id:1,name:"Rohan Mehta",specialty:"Guitar & Songwriting",rating:4.9,avatar:"🎸",nextLive:"Today, 8:00 PM"},{id:2,name:"Priya Sen",specialty:"Vocals & Classical",rating:4.8,avatar:"🎤",nextLive:"Fri, 7:00 PM"}],upcomingSessions:[{id:1,title:"Guitar for Beginners",time:"Today, 8:00 PM",free:!0,viewers:0},{id:2,title:"Music Production 101",time:"Fri, 6:00 PM",free:!1,viewers:0},{id:3,title:"Vocal Warm-ups",time:"Sat, 10:00 AM",free:!0,viewers:0}]},cooking:{name:"Cooking",emoji:"🍳",tagline:"Cook with chefs from around the world",gradient:"linear-gradient(135deg, #D9A87C 0%, #C68B59 100%)",instructors:[{id:1,name:"Chef Ananya",specialty:"Healthy & Quick",rating:4.9,avatar:"🍳",nextLive:"Tomorrow, 12:00 PM"},{id:2,name:"Chef Ravi",specialty:"Indian Cuisine",rating:4.7,avatar:"🍛",nextLive:"Sat, 5:00 PM"}],upcomingSessions:[{id:1,title:"5-Min Healthy Meals",time:"Tomorrow, 12:00 PM",free:!0,viewers:0},{id:2,title:"Baking Basics",time:"Sat, 3:00 PM",free:!1,viewers:0},{id:3,title:"Indian Street Food",time:"Sun, 4:00 PM",free:!0,viewers:0}]},art:{name:"Art & Design",emoji:"🎨",tagline:"Express yourself through art & design",gradient:"linear-gradient(135deg, #C4857A 0%, #B06B5E 100%)",instructors:[{id:1,name:"Sanya Kapoor",specialty:"Illustration & Sketching",rating:4.8,avatar:"✏️",nextLive:"Wed, 4:00 PM"},{id:2,name:"Aman Singh",specialty:"UI/UX Design",rating:4.9,avatar:"📱",nextLive:"Thu, 6:00 PM"}],upcomingSessions:[{id:1,title:"Sketch Basics",time:"Wed, 4:00 PM",free:!0,viewers:0},{id:2,title:"Figma Masterclass",time:"Thu, 6:00 PM",free:!1,viewers:0},{id:3,title:"Watercolor Painting",time:"Sat, 11:00 AM",free:!0,viewers:0}]},business:{name:"Business",emoji:"📈",tagline:"Grow your career & side hustle",gradient:"linear-gradient(135deg, #6B8FAD 0%, #537A96 100%)",instructors:[{id:1,name:"Vikram Shah",specialty:"Marketing & Growth",rating:4.9,avatar:"📣",nextLive:"Today, 7:00 PM"},{id:2,name:"Pooja Nair",specialty:"Freelancing & Finance",rating:4.7,avatar:"💼",nextLive:"Fri, 8:00 PM"}],upcomingSessions:[{id:1,title:"Social Media Marketing",time:"Today, 7:00 PM",free:!0,viewers:0},{id:2,title:"Start Freelancing",time:"Fri, 8:00 PM",free:!1,viewers:0},{id:3,title:"Personal Finance 101",time:"Sun, 6:00 PM",free:!0,viewers:0}]},wellness:{name:"Wellness",emoji:"🧘",tagline:"Mind, body & soul practices",gradient:"linear-gradient(135deg, #BCA9D4 0%, #A08CC0 100%)",instructors:[{id:1,name:"Kavya Nair",specialty:"Meditation & Breathwork",rating:4.9,avatar:"🧘‍♀️",nextLive:"Tomorrow, 7:00 AM"},{id:2,name:"Dr. Arjun",specialty:"Mindfulness Coach",rating:4.8,avatar:"🌿",nextLive:"Wed, 8:00 PM"}],upcomingSessions:[{id:1,title:"Morning Meditation",time:"Tomorrow, 7:00 AM",free:!0,viewers:0},{id:2,title:"Breathwork Essentials",time:"Wed, 8:00 PM",free:!1,viewers:0},{id:3,title:"Stress Relief Session",time:"Fri, 9:00 PM",free:!0,viewers:0}]}};function o6(){const a=vt(),{id:n}=Ub(),{checkOnlineStatus:s}=useAuth(),l=ny[n]||ny.fitness;return f.jsxs("div",{className:"page category-page",children:[f.jsxs("div",{className:"category-hero",style:{background:l.gradient},children:[f.jsx("button",{className:"back-btn",onClick:()=>a(-1),children:f.jsx(Ba,{size:24,color:"white"})}),f.jsxs("div",{className:"hero-content",children:[f.jsx("span",{className:"hero-emoji",children:l.emoji}),f.jsx("h1",{children:l.name}),f.jsx("p",{children:l.tagline})]})]}),f.jsxs("div",{className:"page-content",style:{marginTop:-20,position:"relative",zIndex:1},children:[f.jsxs("div",{className:"intro-video glass-card",onClick:()=>a("/video-player"),children:[f.jsx("div",{className:"video-play-overlay",children:f.jsx(no,{size:28,fill:"white",color:"white"})}),f.jsx("p",{className:"video-label",children:"Watch Intro"})]}),f.jsxs("section",{className:"home-section",children:[f.jsx("div",{className:"section-header",children:f.jsx("h2",{children:"Top Creators"})}),l.instructors.map(o=>{const d=s?s(o.name):!1;return f.jsxs("div",{className:"instructor-detail-card glass-card",children:[f.jsxs("div",{className:"inst-avatar",style:{position:"relative"},children:[o.avatar,d&&f.jsx("div",{className:"online-badge-dot"})]}),f.jsxs("div",{className:"inst-info",children:[f.jsxs("div",{className:"inst-header-row",children:[f.jsx("h3",{children:o.name}),d&&f.jsx("span",{className:"online-tag",children:"Online"})]}),f.jsx("p",{className:"inst-specialty",children:o.specialty}),f.jsxs("div",{className:"inst-meta",children:[f.jsxs("span",{children:[f.jsx(Eo,{size:12,fill:"#D4A853",color:"#D4A853"})," ",o.rating]}),f.jsxs("span",{children:[f.jsx(Vi,{size:12})," ",o.nextLive]})]})]})]},o.id)})]}),f.jsxs("section",{className:"home-section",children:[f.jsx("div",{className:"section-header",children:f.jsx("h2",{children:"Upcoming Sessions"})}),l.upcomingSessions.map(o=>f.jsxs("div",{className:"upcoming-card glass-card",onClick:()=>a("/schedule"),children:[f.jsxs("div",{className:"upcoming-info",children:[f.jsx("h4",{children:o.title}),f.jsxs("p",{children:[f.jsx(Vi,{size:12})," ",o.time]})]}),f.jsx("span",{className:`badge ${o.free?"badge-free":"badge-paid"}`,children:o.free?"FREE":"$5"})]},o.id))]})]}),f.jsx("style",{children:`
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
      `})]})}function c6(){const a=vt(),[n,s]=N.useState(!1);return f.jsxs("div",{className:"video-player-page",children:[f.jsxs("div",{className:"vp-video-area",children:[f.jsx("video",{src:"https://www.w3schools.com/html/mov_bbb.mp4",className:"vp-video",playsInline:!0,onClick:()=>s(!n)}),f.jsxs("div",{className:"vp-overlay",children:[f.jsx("button",{className:"vp-back",onClick:()=>a(-1),children:f.jsx(Ba,{size:22,color:"white"})}),f.jsxs("div",{className:"vp-center-controls",children:[f.jsx("button",{className:"vp-ctrl-btn",children:f.jsx(IS,{size:24,color:"white"})}),f.jsx("button",{className:"vp-play-btn",onClick:()=>s(!n),children:n?f.jsx(ES,{size:30,fill:"white",color:"white"}):f.jsx(no,{size:30,fill:"white",color:"white"})}),f.jsx("button",{className:"vp-ctrl-btn",children:f.jsx(qS,{size:24,color:"white"})})]}),f.jsxs("div",{className:"vp-bottom-bar",children:[f.jsx("div",{className:"vp-progress",children:f.jsx("div",{className:"vp-progress-fill",style:{width:"35%"}})}),f.jsxs("div",{className:"vp-time-row",children:[f.jsx("span",{children:"2:14"}),f.jsxs("div",{className:"vp-right-ctrls",children:[f.jsx(WS,{size:18,color:"white"}),f.jsx(jy,{size:18,color:"white"})]}),f.jsx("span",{children:"6:30"})]})]})]})]}),f.jsxs("div",{className:"vp-info",children:[f.jsx("h2",{children:"Introduction to Vinyasa"}),f.jsx("p",{className:"vp-instructor",children:"by Ankit Verma · Fitness"}),f.jsx("p",{className:"vp-desc",children:"Get started with this beginner-friendly session. Your creator will guide you through fundamental poses, breathing techniques, and how to connect movement with breath."}),f.jsxs("button",{className:"btn-primary",style:{width:"100%",marginTop:20},onClick:()=>a("/live-session"),children:[f.jsx(no,{size:18,fill:"white"})," Join Live Session"]})]}),f.jsx("style",{children:`
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
      `})]})}const u6=[{id:1,user:"Ananya R.",msg:"Namaste everyone! 🙏",time:"2m ago"},{id:2,user:"Priya S.",msg:"Let's begin with some deep breaths",time:"1m ago",isInstructor:!0},{id:3,user:"Kavita M.",msg:"So excited for today's session!",time:"1m ago"},{id:4,user:"Arjun D.",msg:"First time here, loving the energy ❤️",time:"45s ago"},{id:5,user:"Priya S.",msg:"Welcome Arjun! Let's flow together 🧘‍♀️",time:"30s ago",isInstructor:!0}],d6=[{emoji:"❤️"},{emoji:"🔥"},{emoji:"🙏"},{emoji:"👏"}];function f6(){const a=vt(),s=rn().state||{},l=s.tutorName||"Priya Sharma",o=s.title||"Live Session",d=s.category||"Wellness",[h,p]=N.useState(u6),[g,y]=N.useState(""),[_,x]=N.useState([]),[b,R]=N.useState(s.viewers||142),[z,U]=N.useState(0),[H,V]=N.useState(!0),[G,I]=N.useState(!1),X=N.useRef(null),K=N.useRef(null),ee=N.useRef(null);N.useEffect(()=>{const ae=s.id;if(!ae)return;let he,ke;return he=x1(ae,async Pe=>{if(Pe.offer&&!ee.current){const P=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"}]});ee.current=P,P.ontrack=M=>{console.log("[WebRTC] Received tutor stream!"),K.current&&(K.current.srcObject=M.streams[0],I(!0))},P.onicecandidate=M=>{M.candidate&&v1(ae,"viewer",M.candidate).catch(()=>{})},await P.setRemoteDescription(new RTCSessionDescription(Pe.offer));for(const M of Pe.tutorCandidates)await P.addIceCandidate(new RTCIceCandidate(M)).catch(()=>{});ke=_1(ae,"tutor",async M=>{try{await P.addIceCandidate(new RTCIceCandidate(M))}catch{}});const pe=await P.createAnswer();await P.setLocalDescription(pe),await i6(ae,P.localDescription),console.log("[WebRTC] Answer sent via Firebase")}}),()=>{he&&he(),ke&&ke(),ee.current&&(ee.current.close(),ee.current=null)}},[s.id]),N.useEffect(()=>{const ae=setInterval(()=>U(he=>he+1),1e3);return()=>clearInterval(ae)},[]),N.useEffect(()=>{const ae=setInterval(()=>{R(he=>Math.max(1,he+Math.floor(Math.random()*5)-2))},5e3);return()=>clearInterval(ae)},[]),N.useEffect(()=>{const ae=["Aarav",l,"Rahul","Sneha","Vikram","Meera","Riya"],he=["Amazing! 🔥","Love this!","So helpful!","Namaste 🙏","❤️","Great energy!","🙌","Wow!"],ke=setInterval(()=>{const Pe=Math.random()>.7;p(P=>[...P,{id:Date.now(),user:Pe?l:ae[Math.floor(Math.random()*ae.length)],msg:he[Math.floor(Math.random()*he.length)],time:"now",isInstructor:Pe}])},4e3);return()=>clearInterval(ke)},[]),N.useEffect(()=>{X.current&&(X.current.scrollTop=X.current.scrollHeight)},[h]);const F=ae=>{const he=Math.floor(ae/60).toString().padStart(2,"0"),ke=(ae%60).toString().padStart(2,"0");return`${he}:${ke}`},Ce=ae=>{const he=Date.now()+Math.random(),ke=20+Math.random()*60;x(Pe=>[...Pe,{id:he,emoji:ae,left:ke}]),setTimeout(()=>{x(Pe=>Pe.filter(P=>P.id!==he))},2e3)},J=()=>{g.trim()&&(p(ae=>[...ae,{id:Date.now(),user:"You",msg:g,time:"now"}]),y(""))};return f.jsxs("div",{className:"live-session-page",children:[f.jsxs("div",{className:"live-video-area",children:[f.jsx("video",{ref:K,autoPlay:!0,playsInline:!0,muted:!1,className:"live-video-element",style:{display:G?"block":"none"}}),!G&&f.jsxs("div",{className:"tutor-stream-visual",children:[f.jsx("div",{className:"stream-orb orb-1"}),f.jsx("div",{className:"stream-orb orb-2"}),f.jsx("div",{className:"stream-orb orb-3"}),f.jsxs("div",{className:"stream-center",children:[f.jsx("div",{className:"stream-avatar",children:"🧘‍♀️"}),f.jsx("h2",{children:l}),f.jsx("p",{children:"Connecting to stream..."}),f.jsxs("div",{className:"connecting-dots",children:[f.jsx("span",{}),f.jsx("span",{}),f.jsx("span",{})]})]})]}),f.jsx("div",{className:"live-gradient-top"}),f.jsx("div",{className:"live-gradient-bottom"}),f.jsxs("div",{className:"live-topbar",children:[f.jsx("button",{className:"live-btn-back",onClick:()=>a(-1),children:f.jsx(Ba,{size:20,color:"white"})}),f.jsxs("div",{className:"live-pills",children:[f.jsxs("div",{className:"pill-live",children:[f.jsx("span",{className:"dot-anim"})," LIVE"]}),f.jsxs("div",{className:"pill-info",children:[f.jsx(Ka,{size:13})," ",b]}),f.jsx("div",{className:"pill-info",children:F(z)})]}),f.jsx("button",{className:"live-btn-back",onClick:()=>V(!H),children:H?f.jsx(SS,{size:18,color:"white"}):f.jsx(jy,{size:18,color:"white"})})]}),f.jsxs("div",{className:"live-instructor",children:[f.jsx("div",{className:"live-inst-av",children:"🧘‍♀️"}),f.jsxs("div",{className:"live-inst-text",children:[f.jsx("h4",{children:l}),f.jsxs("p",{children:[o," · ",d]})]}),f.jsx("button",{className:"follow-pill",children:"Follow"})]}),_.map(ae=>f.jsx("div",{className:"float-emoji",style:{left:`${ae.left}%`},children:ae.emoji},ae.id))]}),f.jsxs("div",{className:`live-bottom ${H?"":"collapsed"}`,children:[H&&f.jsx("div",{className:"live-chat-list",ref:X,children:h.slice(-20).map(ae=>f.jsxs("div",{className:`live-msg ${ae.isInstructor?"instructor":""}`,children:[f.jsx("span",{className:"live-msg-user",children:ae.user}),f.jsx("span",{className:"live-msg-text",children:ae.msg})]},ae.id))}),f.jsx("div",{className:"live-reactions",children:d6.map((ae,he)=>f.jsx("button",{className:"reaction-pill",onClick:()=>Ce(ae.emoji),children:ae.emoji},he))}),f.jsxs("div",{className:"live-input-bar",children:[f.jsx("input",{type:"text",placeholder:"Say something...",value:g,onChange:ae=>y(ae.target.value),onKeyDown:ae=>ae.key==="Enter"&&J()}),f.jsx("button",{className:"send-pill",onClick:J,children:f.jsx(zS,{size:18,color:"white"})})]})]}),f.jsx("style",{children:`
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
      `})]})}const Sd=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],h6=[17,18,19,20,21,22,23],Cd=[1,4],p6={1:[{id:1,title:"HIIT Burn Challenge",instructor:"Ankit Verma",time:"7:00 AM",duration:"45 min",category:"Fitness",free:!0},{id:2,title:"Guitar for Beginners",instructor:"Rohan Mehta",time:"5:00 PM",duration:"60 min",category:"Music",free:!1},{id:3,title:"5-Min Healthy Meals",instructor:"Chef Ananya",time:"8:00 PM",duration:"50 min",category:"Cooking",free:!1}],4:[{id:4,title:"Morning Meditation",instructor:"Kavya Nair",time:"6:30 AM",duration:"30 min",category:"Wellness",free:!0},{id:5,title:"Social Media Marketing",instructor:"Vikram Shah",time:"4:00 PM",duration:"50 min",category:"Business",free:!1},{id:6,title:"Sketch & Illustrate",instructor:"Sanya Kapoor",time:"7:00 PM",duration:"45 min",category:"Art",free:!1}]};function m6(){const[a,n]=N.useState(1),[s,l]=N.useState({}),o=vt(),d=p6[a]||[],h=Cd.includes(a),p=g=>{l(y=>({...y,[g]:!y[g]}))};return f.jsxs("div",{className:"page schedule-page",children:[f.jsxs("div",{className:"page-header",children:[f.jsx("h1",{children:"Live Schedule"}),f.jsx("p",{className:"text-secondary",children:"Live sessions every Tuesday & Friday"})]}),f.jsxs("div",{className:"page-content",children:[f.jsxs("div",{className:"week-calendar glass-card",children:[f.jsxs("div",{className:"week-header",children:[f.jsx(Co,{size:16,color:"var(--accent-sage)"}),f.jsx("span",{children:"This Week"})]}),f.jsx("div",{className:"week-days",children:Sd.map((g,y)=>f.jsxs("button",{className:`day-btn ${a===y?"selected":""} ${Cd.includes(y)?"has-live":""}`,onClick:()=>n(y),children:[f.jsx("span",{className:"day-name",children:g}),f.jsx("span",{className:"day-date",children:h6[y]}),Cd.includes(y)&&f.jsx("span",{className:"day-live-dot"})]},y))})]}),h?f.jsxs("div",{className:"schedule-sessions",children:[f.jsxs("div",{className:"schedule-section-title",children:[f.jsx(My,{size:16,color:"var(--accent-sage)"}),f.jsxs("span",{children:[Sd[a],"'s Live Sessions"]})]}),d.map((g,y)=>f.jsxs("div",{className:"schedule-card glass-card animate-fade-in-up",style:{animationDelay:`${y*.1}s`},children:[f.jsx("div",{className:"sched-left",children:f.jsxs("div",{className:"sched-time-block",children:[f.jsx("span",{className:"sched-time",children:g.time}),f.jsx("span",{className:"sched-duration",children:g.duration})]})}),f.jsxs("div",{className:"sched-info",children:[f.jsx("h3",{children:g.title}),f.jsxs("p",{children:[g.instructor," · ",g.category]})]}),f.jsxs("div",{className:"sched-right",children:[f.jsx("span",{className:`badge ${g.free?"badge-free":"badge-paid"}`,children:g.free?"FREE":"$5"}),f.jsx("button",{className:`reminder-btn ${s[g.id]?"active":""}`,onClick:()=>p(g.id),children:s[g.id]?f.jsx(Ny,{size:16,fill:"var(--accent-sage)"}):f.jsx(G2,{size:16})})]})]},g.id)),f.jsxs("div",{className:"schedule-cta glass-card",onClick:()=>o("/pricing"),children:[f.jsxs("div",{children:[f.jsx("h3",{children:"Unlock All Sessions"}),f.jsx("p",{children:"Subscribe for $49/month"})]}),f.jsx(yi,{size:20,color:"var(--accent-sage)"})]})]}):f.jsxs("div",{className:"no-live-day",children:[f.jsx("div",{className:"no-live-icon",children:"🧘"}),f.jsx("h3",{children:"Rest Day"}),f.jsxs("p",{children:["No live sessions on ",Sd[a],". Live sessions are every ",f.jsx("strong",{children:"Tuesday"})," and ",f.jsx("strong",{children:"Friday"}),"."]}),f.jsx("p",{className:"no-live-hint",children:"Use today for personal practice!"})]})]}),f.jsx("style",{children:`
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
      `})]})}const g6=[{id:"free",name:"Free Trial",price:"$0",period:"First session",description:"Try your first live session absolutely free",icon:Eo,color:"#8BA888",features:["1 free live session","Access to intro videos","Browse all categories","Chat during live session"],buttonText:"Start Free",popular:!1},{id:"session",name:"Per Session",price:"$5",period:"per live session",description:"Pay as you go — attend sessions that interest you",icon:Oy,color:"#C68B59",features:["Access any single live session","Full live interaction (chat, reactions)","Session replay for 48 hours","All intro videos included"],buttonText:"Buy Session",popular:!1},{id:"monthly",name:"Monthly",price:"$49",period:"/month",description:"Unlimited access to all live sessions",icon:to,color:"#D4A853",features:["Unlimited live sessions","All creator categories","Priority chat with instructors","Full replay library access","Exclusive members-only sessions","Cancel anytime"],buttonText:"Subscribe Now",popular:!0}];function y6(){const[a,n]=N.useState(null),[s,l]=N.useState(!1),o=vt(),d=g=>{if(n(g),g.id==="free"){o("/live-session");return}h(g)},h=g=>{const y=document.createElement("script");y.src="https://checkout.razorpay.com/v1/checkout.js",y.onload=()=>p(g),y.onerror=()=>{l(!0)},document.body.appendChild(y)},p=g=>{const _={key:"rzp_test_PLACEHOLDER",amount:(g.id==="session"?500:4900)*100,currency:"INR",name:"Revoshalaa",description:`${g.name} — ${g.description}`,image:"",handler:function(x){l(!0)},prefill:{name:"",email:"",contact:""},theme:{color:"#8BA888"}};try{new window.Razorpay(_).open()}catch{l(!0)}};return f.jsxs("div",{className:"page pricing-page",children:[f.jsxs("div",{className:"page-header",children:[f.jsx("h1",{children:"Choose Your Path"}),f.jsx("p",{className:"text-secondary",children:"Start learning from the best."})]}),f.jsxs("div",{className:"page-content",children:[g6.map((g,y)=>{const _=g.icon;return f.jsxs("div",{className:`pricing-card glass-card animate-fade-in-up ${g.popular?"popular":""}`,style:{animationDelay:`${y*.12}s`},children:[g.popular&&f.jsxs("div",{className:"popular-badge",children:[f.jsx(to,{size:12})," BEST VALUE"]}),f.jsxs("div",{className:"pricing-card-header",children:[f.jsx("div",{className:"pricing-icon",style:{background:`${g.color}18`},children:f.jsx(_,{size:24,color:g.color})}),f.jsxs("div",{children:[f.jsx("h3",{children:g.name}),f.jsx("p",{className:"pricing-desc",children:g.description})]})]}),f.jsxs("div",{className:"pricing-price",children:[f.jsx("span",{className:"price-amount",children:g.price}),f.jsx("span",{className:"price-period",children:g.period})]}),f.jsx("div",{className:"pricing-features",children:g.features.map((x,b)=>f.jsxs("div",{className:"pricing-feature",children:[f.jsx(tl,{size:16,color:g.color}),f.jsx("span",{children:x})]},b))}),f.jsxs("button",{className:g.popular?"btn-gold":"btn-primary",style:{width:"100%"},onClick:()=>d(g),children:[g.buttonText," ",f.jsx(Td,{size:16})]})]},g.id)}),f.jsxs("div",{className:"trust-section",children:[f.jsxs("div",{className:"trust-item",children:[f.jsx(zy,{size:18,color:"var(--accent-sage)"}),f.jsx("span",{children:"Secure payments via Razorpay"})]}),f.jsxs("div",{className:"trust-item",children:[f.jsx(Eo,{size:18,color:"var(--accent-gold)"}),f.jsx("span",{children:"Cancel subscription anytime"})]})]})]}),s&&f.jsx("div",{className:"modal-overlay",onClick:()=>l(!1),children:f.jsx("div",{className:"modal-content",onClick:g=>g.stopPropagation(),children:f.jsxs("div",{className:"success-modal",children:[f.jsx("div",{className:"success-check",children:f.jsx(tl,{size:36,color:"white"})}),f.jsx("h2",{children:"Payment Successful!"}),f.jsxs("p",{children:["You now have access to ",a?.name," plan."]}),f.jsx("p",{className:"success-detail",children:a?.id==="session"?"Your session pass is now active.":"Your monthly subscription is active."}),f.jsxs("button",{className:"btn-primary",style:{width:"100%",marginTop:20},onClick:()=>{l(!1),o("/schedule")},children:["Start Learning ",f.jsx(Td,{size:16})]})]})})}),f.jsx("style",{children:`
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
      `})]})}function v6(){const a=vt(),{user:n,logout:s}=_i(),[l,o]=N.useState(!0),d=()=>{s(),a("/login")},h=[{icon:to,label:"My Subscription",desc:"Monthly — Active",action:()=>a("/pricing"),color:"#D4A853"},{icon:Co,label:"My Sessions",desc:"12 sessions attended",action:()=>a("/schedule"),color:"#8BA888"},{icon:wy,label:"Payment History",desc:"View transactions",action:()=>{},color:"#C68B59"},{icon:Eo,label:"Rate Instructors",desc:"Share your feedback",action:()=>{},color:"#9B8EC4"}];return f.jsxs("div",{className:"page profile-page",children:[f.jsxs("div",{className:"page-header",style:{textAlign:"center"},children:[f.jsx("div",{className:"profile-avatar",children:f.jsx(No,{size:36,color:"var(--accent-sage)"})}),f.jsx("h1",{style:{fontSize:22,marginTop:12},children:n?.name||"Guest"}),f.jsx("p",{className:"text-secondary",style:{fontSize:13},children:"Member since Feb 2026"})]}),f.jsxs("div",{className:"page-content",children:[f.jsxs("div",{className:"subscription-card glass-card",children:[f.jsxs("div",{className:"sub-card-left",children:[f.jsx(to,{size:22,color:"#D4A853"}),f.jsxs("div",{children:[f.jsx("h3",{children:"Monthly Plan"}),f.jsx("p",{children:"Renews Mar 18, 2026"})]})]}),f.jsx("span",{className:"badge badge-free",style:{background:"rgba(212,168,83,0.15)",color:"#D4A853"},children:"Active"})]}),f.jsxs("div",{className:"profile-stats",children:[f.jsxs("div",{className:"stat-item glass-card",children:[f.jsx("span",{className:"stat-value",children:"12"}),f.jsx("span",{className:"stat-label",children:"Sessions"})]}),f.jsxs("div",{className:"stat-item glass-card",children:[f.jsx("span",{className:"stat-value",children:"8h"}),f.jsx("span",{className:"stat-label",children:"Practice"})]}),f.jsxs("div",{className:"stat-item glass-card",children:[f.jsx("span",{className:"stat-value",children:"5"}),f.jsx("span",{className:"stat-label",children:"Streak 🔥"})]})]}),f.jsx("div",{className:"profile-menu",children:h.map((p,g)=>{const y=p.icon;return f.jsxs("div",{className:"profile-menu-item glass-card",onClick:p.action,children:[f.jsx("div",{className:"menu-icon",style:{background:`${p.color}15`},children:f.jsx(y,{size:20,color:p.color})}),f.jsxs("div",{className:"menu-info",children:[f.jsx("h4",{children:p.label}),f.jsx("p",{children:p.desc})]}),f.jsx(yi,{size:18,color:"var(--text-tertiary)"})]},g)})}),f.jsxs("div",{className:"profile-menu-item glass-card",style:{marginTop:16},children:[f.jsx("div",{className:"menu-icon",style:{background:"rgba(139,168,136,0.1)"},children:f.jsx(Ny,{size:20,color:"var(--accent-sage)"})}),f.jsxs("div",{className:"menu-info",style:{flex:1},children:[f.jsx("h4",{children:"Notifications"}),f.jsx("p",{children:"Live session reminders"})]}),f.jsxs("label",{className:"toggle-switch",children:[f.jsx("input",{type:"checkbox",checked:l,onChange:()=>o(!l)}),f.jsx("span",{className:"toggle-slider"})]})]}),f.jsxs("div",{className:"profile-footer",children:[f.jsxs("button",{className:"btn-secondary",style:{gap:6},children:[f.jsx(Dy,{size:16})," Settings"]}),f.jsxs("button",{className:"btn-secondary",style:{gap:6,color:"#C4857A"},onClick:d,children:[f.jsx(Ty,{size:16})," Sign Out"]})]})]}),f.jsx("style",{children:`
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
      `})]})}function x6(){const a=vt(),{login:n}=_i(),[s,l]=N.useState({identifier:"",password:"",otp:""}),[o,d]=N.useState("email"),[h,p]=N.useState(1),[g,y]=N.useState(!0),[_,x]=N.useState(!1),b=()=>{x(!0),setTimeout(()=>{x(!1),p(2),alert(`OTP sent to ${s.identifier}: 1234`)},1500)},R=z=>{z.preventDefault(),x(!0),setTimeout(()=>{n("customer",{identifier:s.identifier||"guest"}),x(!1),a("/home")},1500)};return f.jsxs("div",{className:"page login-page",children:[f.jsxs("div",{className:"page-content",children:[f.jsxs("div",{className:"login-header",children:[f.jsx("div",{className:"login-logo animate-fade-in-up",children:f.jsxs("svg",{viewBox:"0 0 80 80",width:"60",height:"60",fill:"none",children:[f.jsx("path",{d:"M40 8C40 8 25 25 25 40C25 55 40 65 40 65C40 65 55 55 55 40C55 25 40 8 40 8Z",fill:"white",stroke:"#8BA888",strokeWidth:"1.5"}),f.jsx("path",{d:"M40 15C40 15 18 30 15 45C12 60 40 70 40 70C40 70 68 60 65 45C62 30 40 15 40 15Z",fill:"white",stroke:"#8BA888",strokeWidth:"1"}),f.jsx("circle",{cx:"40",cy:"42",r:"4",fill:"#8BA888"})]})}),f.jsx("h1",{className:"animate-fade-in-up",style:{animationDelay:"0.1s"},children:g?"Welcome Back":"Join Revoshalaa"}),f.jsx("p",{className:"subtitle animate-fade-in-up",style:{animationDelay:"0.2s"},children:"Your Creator Store"})]}),f.jsxs("div",{className:"login-form-container glass-card animate-fade-in-up",style:{animationDelay:"0.3s"},children:[f.jsxs("div",{className:"login-method-toggle",children:[f.jsx("button",{className:o==="email"?"active":"",onClick:()=>{d("email"),p(1)},children:"Email"}),f.jsx("button",{className:o==="mobile"?"active":"",onClick:()=>{d("mobile"),p(1)},children:"Mobile"})]}),f.jsxs("form",{onSubmit:h===1&&o==="mobile"?z=>{z.preventDefault(),b()}:R,children:[h===1&&f.jsxs("div",{className:"input-group",children:[o==="email"?f.jsx(Ay,{size:18,className:"input-icon"}):f.jsx(Ry,{size:18,className:"input-icon"}),f.jsx("input",{type:o==="email"?"email":"tel",placeholder:o==="email"?"Email Address":"Mobile Number",value:s.identifier,onChange:z=>l({...s,identifier:z.target.value}),required:!0})]}),h===2&&f.jsxs("div",{className:"input-group animate-fade-in",children:[o==="email"?f.jsx(pS,{size:18,className:"input-icon"}):f.jsx(Jd,{size:18,className:"input-icon"}),f.jsx("input",{type:o==="email"?"password":"text",placeholder:o==="email"?"Password":"Enter OTP",value:o==="email"?s.password:s.otp,onChange:z=>l({...s,[o==="email"?"password":"otp"]:z.target.value}),required:!0})]}),f.jsx("button",{type:"submit",className:"btn-primary w-full",disabled:_,children:_?"Processing...":f.jsxs(f.Fragment,{children:[h===1&&o==="mobile"?"Send OTP":g?"Login":"Create Account",f.jsx(Td,{size:18})]})})]}),o==="email"&&f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"divider",children:f.jsx("span",{children:"or continue with"})}),f.jsxs("div",{className:"social-buttons",children:[f.jsx("button",{className:"social-btn",onClick:()=>{const z=prompt("Enter your Google email:");z&&(n("customer",{identifier:z}),a("/home"))},children:"Google"}),f.jsx("button",{className:"social-btn",onClick:()=>{const z=prompt("Enter your Apple ID email:");z&&(n("customer",{identifier:z}),a("/home"))},children:"Apple"})]})]})]}),f.jsxs("div",{className:"login-footer animate-fade-in-up",style:{animationDelay:"0.4s"},children:[f.jsxs("p",{onClick:()=>y(!g),children:[g?"New here? ":"Already a member? ",f.jsx("span",{className:"link-text",children:g?"Create Account":"Login"})]}),f.jsxs("div",{className:"tutor-link",onClick:()=>a("/login/tutor"),children:["Are you a tutor? ",f.jsx("span",{className:"link-text",children:"Login here"})]})]})]}),f.jsx("style",{children:`
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
      `})]})}function _6(){const a=vt(),{login:n,categories:s,addCategory:l}=_i(),[o,d]=N.useState("credentials"),[h,p]=N.useState("email"),[g,y]=N.useState(!1),[_,x]=N.useState({firstName:"",lastName:"",identifier:"",password:"",otp:""}),[b,R]=N.useState(""),[z,U]=N.useState(""),[H,V]=N.useState(!1),[G,I]=N.useState(""),X=J=>{J.preventDefault(),_.firstName.trim()&&(h==="mobile"?(y(!0),setTimeout(()=>{y(!1),d("otp"),alert(`OTP sent to ${_.identifier}: 5678`)},1200)):d("category"))},K=J=>{J.preventDefault(),d("category")},ee=()=>{if(!z.trim())return;const J=l(z.trim());R(J.id),U(""),V(!1)},F=()=>{b&&(y(!0),setTimeout(()=>{n("tutor",{firstName:_.firstName,lastName:_.lastName,identifier:_.identifier,category:b,specialty:G}),y(!1),a("/tutor/dashboard")},1e3))},Ce=s.find(J=>J.id===b)?.name||"";return f.jsxs("div",{className:"page tutor-login-page",children:[f.jsxs("div",{className:"page-content",children:[f.jsxs("div",{className:"tutor-header",children:[f.jsx("div",{className:"tutor-icon animate-scale-in",children:f.jsx(Fi,{size:32,color:"white"})}),f.jsx("h1",{className:"animate-fade-in-up",style:{animationDelay:"0.1s"},children:o==="credentials"||o==="otp"?"Tutor Access":o==="category"?"Choose Your Category":"Your Specialty"}),f.jsx("p",{className:"subtitle animate-fade-in-up",style:{animationDelay:"0.2s"},children:o==="credentials"||o==="otp"?"Create your profile & start teaching":o==="category"?"What will you teach on Revoshalaa?":`Tell us more about your ${Ce} expertise`}),f.jsxs("div",{className:"progress-dots",children:[f.jsx("span",{className:`dot ${["credentials","otp","category","specialty"].includes(o)?"active":""}`}),f.jsx("span",{className:`dot ${["category","specialty"].includes(o)?"active":""}`}),f.jsx("span",{className:`dot ${o==="specialty"?"active":""}`})]})]}),o==="credentials"&&f.jsxs("div",{className:"login-form-container glass-card animate-fade-in-up",style:{animationDelay:"0.3s"},children:[f.jsxs("div",{className:"login-method-toggle",children:[f.jsx("button",{className:h==="email"?"active":"",onClick:()=>p("email"),children:"Email"}),f.jsx("button",{className:h==="mobile"?"active":"",onClick:()=>p("mobile"),children:"Mobile"})]}),f.jsxs("form",{onSubmit:X,children:[f.jsxs("div",{className:"name-row",children:[f.jsxs("div",{className:"input-group",children:[f.jsx(No,{size:18,className:"input-icon"}),f.jsx("input",{type:"text",placeholder:"First Name",value:_.firstName,onChange:J=>x({..._,firstName:J.target.value}),required:!0})]}),f.jsx("div",{className:"input-group",children:f.jsx("input",{type:"text",placeholder:"Last Name",value:_.lastName,onChange:J=>x({..._,lastName:J.target.value}),style:{paddingLeft:16}})})]}),f.jsxs("div",{className:"input-group",children:[h==="email"?f.jsx(Ay,{size:18,className:"input-icon"}):f.jsx(Ry,{size:18,className:"input-icon"}),f.jsx("input",{type:h==="email"?"email":"tel",placeholder:h==="email"?"Email Address":"Mobile Number",value:_.identifier,onChange:J=>x({..._,identifier:J.target.value}),required:!0})]}),f.jsx("button",{type:"submit",className:"btn-gold w-full",disabled:g,children:g?"Sending OTP...":f.jsxs(f.Fragment,{children:["Continue ",f.jsx(yi,{size:18})]})})]})]}),o==="otp"&&f.jsxs("div",{className:"login-form-container glass-card animate-fade-in",children:[f.jsxs("form",{onSubmit:K,children:[f.jsxs("div",{className:"input-group",children:[f.jsx(Jd,{size:18,className:"input-icon"}),f.jsx("input",{type:"text",placeholder:"Enter OTP",value:_.otp,onChange:J=>x({..._,otp:J.target.value}),required:!0})]}),f.jsxs("button",{type:"submit",className:"btn-gold w-full",children:["Verify ",f.jsx(tl,{size:18})]})]}),f.jsxs("button",{className:"back-step",onClick:()=>d("credentials"),children:[f.jsx(Ba,{size:14})," Back"]})]}),o==="category"&&f.jsxs("div",{className:"category-phase animate-fade-in",children:[f.jsxs("div",{className:"category-grid",children:[s.map(J=>f.jsxs("div",{className:`cat-option ${b===J.id?"selected":""}`,onClick:()=>R(J.id),children:[f.jsx("span",{className:"cat-emoji-big",children:J.emoji}),f.jsx("span",{className:"cat-label",children:J.name}),b===J.id&&f.jsx(tl,{size:16,className:"cat-check"})]},J.id)),H?f.jsxs("div",{className:"cat-option add-new-input",children:[f.jsx("input",{type:"text",placeholder:"Category name",value:z,onChange:J=>U(J.target.value),onKeyDown:J=>J.key==="Enter"&&ee(),autoFocus:!0}),f.jsx("button",{className:"add-btn",onClick:ee,children:f.jsx(tl,{size:16})})]}):f.jsxs("div",{className:"cat-option add-new",onClick:()=>V(!0),children:[f.jsx(AS,{size:24,color:"#8BA888"}),f.jsx("span",{className:"cat-label",children:"Add New"})]})]}),b&&f.jsxs("button",{className:"btn-gold w-full",style:{marginTop:20},onClick:()=>d("specialty"),children:["Continue ",f.jsx(yi,{size:18})]}),f.jsxs("button",{className:"back-step",onClick:()=>d("credentials"),children:[f.jsx(Ba,{size:14})," Back to login"]})]}),o==="specialty"&&f.jsxs("div",{className:"specialty-phase animate-fade-in",children:[f.jsxs("div",{className:"login-form-container glass-card",children:[f.jsxs("div",{className:"selected-cat-badge",children:[f.jsx("span",{children:s.find(J=>J.id===b)?.emoji}),f.jsx("span",{children:Ce})]}),f.jsxs("p",{className:"specialty-prompt",children:["What's your specialty within ",Ce,"?"]}),f.jsxs("p",{className:"specialty-hint",children:[b==="fitness"&&"e.g. HIIT, Yoga, Strength Training, Calisthenics...",b==="music"&&"e.g. Guitar, Piano, Vocals, Music Production...",b==="cooking"&&"e.g. Indian Cuisine, Baking, Healthy Meals...",b==="art"&&"e.g. Illustration, UI/UX, Watercolor, Digital Art...",b==="business"&&"e.g. Marketing, Freelancing, Finance, Startups...",b==="wellness"&&"e.g. Meditation, Breathwork, Mindfulness, Reiki...",!["fitness","music","cooking","art","business","wellness"].includes(b)&&"Describe what you teach in detail"]}),f.jsx("div",{className:"input-group",children:f.jsx("input",{type:"text",placeholder:"Your specialty (e.g. Power Yoga & HIIT)",value:G,onChange:J=>I(J.target.value),style:{paddingLeft:16}})}),f.jsx("button",{className:"btn-gold w-full",disabled:g,onClick:F,children:g?"Setting up...":f.jsxs(f.Fragment,{children:["Start Teaching ",f.jsx(uS,{size:18})]})})]}),f.jsxs("button",{className:"back-step",onClick:()=>d("category"),children:[f.jsx(Ba,{size:14})," Change category"]})]}),o==="credentials"&&f.jsx("div",{className:"tutor-footer animate-fade-in-up",style:{animationDelay:"0.4s"},children:f.jsx("div",{className:"back-link",onClick:()=>a("/login"),children:"Back to Role Selection"})})]}),f.jsx("style",{children:`
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
      `})]})}function b6(){const a=vt();return f.jsxs("div",{className:"page role-page",children:[f.jsxs("div",{className:"role-content",children:[f.jsx("div",{className:"role-logo animate-fade-in-up",children:f.jsxs("svg",{viewBox:"0 0 80 80",width:"70",height:"70",fill:"none",children:[f.jsx("path",{d:"M40 8C40 8 25 25 25 40C25 55 40 65 40 65C40 65 55 55 55 40C55 25 40 8 40 8Z",fill:"white",stroke:"#8BA888",strokeWidth:"1.5"}),f.jsx("path",{d:"M40 15C40 15 18 30 15 45C12 60 40 70 40 70C40 70 68 60 65 45C62 30 40 15 40 15Z",fill:"white",stroke:"#8BA888",strokeWidth:"1"}),f.jsx("path",{d:"M40 20C40 20 30 35 30 45C30 55 40 60 40 60C40 60 50 55 50 45C50 35 40 20 40 20Z",fill:"rgba(139,168,136,0.4)",stroke:"#8BA888",strokeWidth:"1"}),f.jsx("circle",{cx:"40",cy:"42",r:"4",fill:"#8BA888"})]})}),f.jsx("h1",{className:"role-title animate-fade-in-up",style:{animationDelay:"0.1s"},children:"Revoshalaa"}),f.jsx("p",{className:"role-subtitle animate-fade-in-up",style:{animationDelay:"0.2s"},children:"Your Creator Store"}),f.jsx("h2",{className:"role-question animate-fade-in-up",style:{animationDelay:"0.3s"},children:"How would you like to join?"}),f.jsxs("div",{className:"role-cards animate-fade-in-up",style:{animationDelay:"0.4s"},children:[f.jsxs("div",{className:"role-card member-card",onClick:()=>a("/login/customer"),children:[f.jsx("div",{className:"role-card-icon",children:f.jsx(Ka,{size:28,color:"var(--accent-sage)"})}),f.jsx("h3",{children:"I'm a Member"}),f.jsx("p",{children:"Join live sessions, courses & communities from top creators"})]}),f.jsxs("div",{className:"role-card tutor-card",onClick:()=>a("/login/tutor"),children:[f.jsx("div",{className:"role-card-icon tutor-icon-bg",children:f.jsx(Fi,{size:28,color:"#D4A853"})}),f.jsx("h3",{children:"I'm a Tutor"}),f.jsx("p",{children:"Go live, teach your class, and grow your community"})]})]})]}),f.jsx("style",{children:`
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
      `})]})}function S6(){const a=vt(),{user:n,categories:s,startLiveSession:l,endLiveSession:o}=_i(),[d,h]=N.useState(!1),[p,g]=N.useState({title:"",description:"",category:n?.category||"fitness",duration:"45",pricing:"free",price:"",tags:""}),[y,_]=N.useState(!0),[x,b]=N.useState(!0),[R,z]=N.useState(0),[U,H]=N.useState([]),[V,G]=N.useState(null),[I,X]=N.useState(0),K=N.useRef(null),ee=N.useRef(null),F=N.useRef(null);N.useRef(null),N.useEffect(()=>{n?.category&&g(P=>({...P,category:n.category}))},[n]),N.useEffect(()=>{async function P(){try{const pe=await navigator.mediaDevices.getUserMedia({video:!0,audio:!0});ee.current=pe,K.current&&(K.current.srcObject=pe)}catch(pe){console.error("Error accessing camera:",pe)}}return x&&P(),()=>{K.current?.srcObject&&K.current.srcObject.getTracks().forEach(pe=>pe.stop())}},[x]),N.useEffect(()=>{if(!d||!V||!ee.current)return;let P,pe;async function M(){const q=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"}]});F.current=q,ee.current.getTracks().forEach(me=>{q.addTrack(me,ee.current)}),q.onicecandidate=me=>{me.candidate&&v1(V,"tutor",me.candidate).catch(()=>{})};const ne=await q.createOffer();await q.setLocalDescription(ne),await n6(V,q.localDescription),console.log("[WebRTC] Offer sent via Firebase");let Ee=!1;P=x1(V,async me=>{if(me.answer&&!Ee){Ee=!0;try{await q.setRemoteDescription(new RTCSessionDescription(me.answer)),console.log("[WebRTC] Answer received from Firebase")}catch(E){console.error("[WebRTC] Error setting answer:",E)}}}),pe=_1(V,"viewer",async me=>{try{await q.addIceCandidate(new RTCIceCandidate(me))}catch{}})}return M(),()=>{P&&P(),pe&&pe(),F.current&&(F.current.close(),F.current=null)}},[d,V]),N.useEffect(()=>{let P,pe,M;return d&&(P=setInterval(()=>{z(q=>q+Math.floor(Math.random()*3))},3e3),pe=setInterval(()=>{const q=["Amazing session! 🔥","Love the energy!","So helpful, thanks!","Hello from Mumbai!","❤️","Great tips!","🙌"],ne=["Aarav","Priya","Rahul","Sneha","Vikram","Meera"];H(Ee=>[...Ee,{user:ne[Math.floor(Math.random()*ne.length)],text:q[Math.floor(Math.random()*q.length)]}])},4e3),M=setInterval(()=>{X(q=>q+1)},1e3)),()=>{clearInterval(P),clearInterval(pe),clearInterval(M)}},[d]);const Ce=P=>{const pe=Math.floor(P/60),M=P%60;return`${pe.toString().padStart(2,"0")}:${M.toString().padStart(2,"0")}`},J=async()=>{if(!p.title)return alert("Please enter a session title");const P=l(p);G(P.id),h(!0),X(0);try{await J4({id:P.id,title:p.title,tutorName:n?.name||"Creator",tutorId:n?.id,category:s?.find(pe=>pe.id===p.category)?.name||p.category,viewers:0})}catch(pe){console.error("Failed to publish session:",pe)}},ae=async()=>{if(confirm("Are you sure you want to end the live session?")){F.current&&(F.current.close(),F.current=null),o(V),h(!1);try{await e6(V)}catch(P){console.error("Failed to remove session:",P)}a("/tutor/dashboard")}},he=(P,pe)=>{g(M=>({...M,[P]:pe}))},ke=s?.find(P=>P.id===p.category)?.name||p.category,Pe=s?.find(P=>P.id===p.category)?.emoji||"📌";return!n||n.type!=="tutor"?f.jsxs("div",{className:"unauthorized",children:[f.jsx("div",{className:"unauth-icon",children:"🎓"}),f.jsx("h2",{children:"Tutor Access Only"}),f.jsx("p",{children:"You need a tutor account to go live."}),f.jsx("button",{className:"btn-sage",onClick:()=>a("/login/tutor"),children:"Login as Tutor"})]}):f.jsxs("div",{className:"broadcast-page",children:[f.jsx("video",{ref:K,autoPlay:!0,playsInline:!0,muted:!0,className:"camera-feed"}),f.jsxs("div",{className:"broadcast-top",children:[d?f.jsxs("div",{className:"live-badge-row",children:[f.jsx("div",{className:"live-badge pulse-live",children:"🔴 LIVE"}),f.jsx("div",{className:"live-timer",children:Ce(I)})]}):f.jsx("div",{className:"preview-badge",children:"📹 PREVIEW"}),f.jsxs("div",{className:"top-actions",children:[d&&f.jsxs("div",{className:"viewer-count",children:[f.jsx(Ka,{size:14})," ",R]}),f.jsx("button",{className:"icon-btn",onClick:()=>a("/home"),children:f.jsx(eC,{size:22,color:"white"})})]})]}),!d&&f.jsxs("div",{className:"pre-live-panel",children:[f.jsxs("div",{className:"tutor-profile-card",children:[f.jsx("div",{className:"tp-avatar",children:n.avatar||"🎓"}),f.jsxs("div",{className:"tp-info",children:[f.jsx("h3",{children:n.name}),f.jsxs("p",{children:[n.specialty?`${n.specialty}`:ke," Creator"]})]}),f.jsx("div",{className:"tp-badge",children:Pe})]}),f.jsxs("div",{className:"form-section",children:[f.jsxs("label",{className:"form-label",children:[f.jsx(lS,{size:14})," Session Title *"]}),f.jsx("input",{type:"text",placeholder:"e.g. Morning Power Flow, Guitar Basics",value:p.title,onChange:P=>he("title",P.target.value),className:"form-input"})]}),f.jsxs("div",{className:"form-section",children:[f.jsxs("label",{className:"form-label",children:[f.jsx(Jd,{size:14})," Description"]}),f.jsx("textarea",{placeholder:"What will you cover in this session?",value:p.description,onChange:P=>he("description",P.target.value),className:"form-textarea",rows:2})]}),f.jsxs("div",{className:"form-row",children:[f.jsxs("div",{className:"form-section flex-1",children:[f.jsxs("label",{className:"form-label",children:[f.jsx(s0,{size:14})," Category"]}),f.jsx("select",{value:p.category,onChange:P=>he("category",P.target.value),className:"form-select",children:(s||[]).map(P=>f.jsxs("option",{value:P.id,children:[P.emoji," ",P.name]},P.id))})]}),f.jsxs("div",{className:"form-section flex-1",children:[f.jsxs("label",{className:"form-label",children:[f.jsx(Vi,{size:14})," Duration"]}),f.jsxs("select",{value:p.duration,onChange:P=>he("duration",P.target.value),className:"form-select",children:[f.jsx("option",{value:"15",children:"15 min"}),f.jsx("option",{value:"30",children:"30 min"}),f.jsx("option",{value:"45",children:"45 min"}),f.jsx("option",{value:"60",children:"60 min"}),f.jsx("option",{value:"90",children:"90 min"})]})]})]}),f.jsxs("div",{className:"form-section",children:[f.jsxs("label",{className:"form-label",children:[f.jsx(aS,{size:14})," Pricing"]}),f.jsxs("div",{className:"pricing-toggle",children:[f.jsx("button",{className:`pt-btn ${p.pricing==="free"?"active":""}`,onClick:()=>he("pricing","free"),children:"🆓 Free"}),f.jsx("button",{className:`pt-btn ${p.pricing==="paid"?"active":""}`,onClick:()=>he("pricing","paid"),children:"💰 Paid"})]}),p.pricing==="paid"&&f.jsx("input",{type:"number",placeholder:"Price (₹)",value:p.price,onChange:P=>he("price",P.target.value),className:"form-input price-input"})]}),f.jsxs("div",{className:"form-section",children:[f.jsxs("label",{className:"form-label",children:[f.jsx(s0,{size:14})," Tags"]}),f.jsx("input",{type:"text",placeholder:"e.g. beginner, cardio, guitar (comma separated)",value:p.tags,onChange:P=>he("tags",P.target.value),className:"form-input"})]}),f.jsxs("div",{className:"media-controls",children:[f.jsxs("button",{className:`media-btn ${y?"on":"off"}`,onClick:()=>_(!y),children:[y?f.jsx(a0,{size:20}):f.jsx(i0,{size:20}),f.jsx("span",{children:y?"Mic On":"Mic Off"})]}),f.jsxs("button",{className:`media-btn ${x?"on":"off"}`,onClick:()=>b(!x),children:[x?f.jsx(K2,{size:20}):f.jsx(X2,{size:20}),f.jsx("span",{children:x?"Camera On":"Camera Off"})]})]}),f.jsxs("button",{className:"go-live-btn",onClick:J,children:[f.jsx("div",{className:"ring-pulse"}),f.jsx(Fi,{size:20})," GO LIVE"]})]}),d&&f.jsxs("div",{className:"live-overlay",children:[f.jsxs("div",{className:"live-session-info",children:[f.jsx("h3",{children:p.title}),f.jsxs("p",{children:[Pe," ",ke," · ",p.duration," min · ",p.pricing==="free"?"FREE":`₹${p.price}`]})]}),f.jsx("div",{className:"live-chat-area",children:U.map((P,pe)=>f.jsxs("div",{className:"chat-msg animate-fade-in-up",children:[f.jsx("span",{className:"chat-user",children:P.user})," ",P.text]},pe))}),f.jsxs("div",{className:"live-bottom-bar",children:[f.jsx("input",{type:"text",placeholder:"Reply to chat...",className:"tutor-chat-input"}),f.jsxs("div",{className:"live-actions",children:[f.jsx("button",{className:"action-btn",onClick:()=>_(!y),children:y?f.jsx(a0,{size:18}):f.jsx(i0,{size:18})}),f.jsx("button",{className:"action-btn",children:f.jsx(LS,{size:18})}),f.jsx("button",{className:"end-btn",onClick:ae,children:"END"})]})]})]}),f.jsx("style",{children:`
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
      `})]})}function C6(){const a=vt(),{user:n,liveSessions:s}=_i(),l=s.filter(p=>p.tutorId===n?.id),o=l.reduce((p,g)=>p+(g.viewers||0),0),d=[{label:"Total Sessions",value:l.length,icon:Fi,color:"#8BA888"},{label:"Live Viewers",value:o,icon:Ka,color:"#D4A853"},{label:"Hours Live",value:Math.floor(Math.random()*50+10),icon:Vi,color:"#9B8EC4"},{label:"Followers",value:Math.floor(Math.random()*200+50),icon:XS,color:"#C4857A"}],h=[{id:1,title:"Morning Power Flow",viewers:45,duration:"45 min",date:"Today"},{id:2,title:"Evening Stretch",viewers:32,duration:"30 min",date:"Yesterday"},{id:3,title:"HIIT Challenge",viewers:67,duration:"60 min",date:"2 days ago"}];return f.jsxs("div",{className:"tutor-dash",children:[f.jsxs("div",{className:"td-header",children:[f.jsxs("div",{className:"td-greeting",children:[f.jsx("p",{className:"td-hello",children:"Welcome back"}),f.jsxs("h1",{children:[n?.name||"Creator"," 🎓"]})]}),f.jsx("div",{className:"td-avatar",children:n?.avatar||"🎓"})]}),f.jsxs("div",{className:"td-content",children:[f.jsxs("button",{className:"td-go-live-btn",onClick:()=>a("/tutor-broadcast"),children:[f.jsx("div",{className:"td-live-pulse"}),f.jsx(Oy,{size:20}),f.jsx("span",{children:"Go Live Now"}),f.jsx(yi,{size:18})]}),f.jsx("div",{className:"td-stats-grid",children:d.map((p,g)=>f.jsxs("div",{className:"td-stat-card",children:[f.jsx("div",{className:"td-stat-icon",style:{background:`${p.color}15`,color:p.color},children:f.jsx(p.icon,{size:18})}),f.jsx("div",{className:"td-stat-value",children:p.value}),f.jsx("div",{className:"td-stat-label",children:p.label})]},g))}),l.length>0&&f.jsxs("section",{className:"td-section",children:[f.jsx("h2",{children:"🔴 Your Active Sessions"}),l.map(p=>f.jsxs("div",{className:"td-session-card active-session",children:[f.jsxs("div",{className:"td-session-info",children:[f.jsx("h3",{children:p.title}),f.jsxs("p",{children:[p.category," · ",p.viewers," viewers"]})]}),f.jsx("span",{className:"td-live-tag",children:"LIVE"})]},p.id))]}),f.jsxs("section",{className:"td-section",children:[f.jsxs("div",{className:"td-section-header",children:[f.jsx("h2",{children:"Recent Sessions"}),f.jsx("button",{className:"td-see-all",children:"See All"})]}),h.map(p=>f.jsxs("div",{className:"td-session-card",children:[f.jsxs("div",{className:"td-session-left",children:[f.jsx("div",{className:"td-session-icon",children:f.jsx(Fi,{size:16})}),f.jsxs("div",{className:"td-session-info",children:[f.jsx("h3",{children:p.title}),f.jsxs("p",{children:[p.date," · ",p.duration," · ",p.viewers," viewers"]})]})]}),f.jsx(yi,{size:16,color:"rgba(255,255,255,0.3)"})]},p.id))]}),f.jsxs("section",{className:"td-section",children:[f.jsx("div",{className:"td-section-header",children:f.jsx("h2",{children:"Upcoming"})}),f.jsxs("div",{className:"td-empty-state",children:[f.jsx(Co,{size:32,color:"rgba(255,255,255,0.2)"}),f.jsx("p",{children:"No upcoming sessions scheduled"}),f.jsx("button",{className:"td-schedule-btn",onClick:()=>a("/tutor-broadcast"),children:"Schedule a Session"})]})]})]}),f.jsx("style",{children:`
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
      `})]})}function E6(){const a=vt(),{user:n,logout:s}=_i(),l=()=>{s(),a("/login")},o=[{icon:Fi,label:"My Sessions",desc:"View all past broadcasts",action:()=>{}},{icon:Ka,label:"My Followers",desc:"Manage your audience",action:()=>{}},{icon:q2,label:"Achievements",desc:"Badges & milestones",action:()=>{}},{icon:Dy,label:"Settings",desc:"Account preferences",action:()=>{}},{icon:zy,label:"Privacy",desc:"Manage visibility",action:()=>{}}];return f.jsxs("div",{className:"tutor-profile-page",children:[f.jsxs("div",{className:"tp-header",children:[f.jsx("div",{className:"tp-avatar-large",children:n?.avatar||"🎓"}),f.jsx("h1",{children:n?.name||"Creator"}),f.jsxs("p",{className:"tp-specialty",children:[n?.specialty||"Creator"," · ",n?.category||"General"]}),f.jsxs("div",{className:"tp-badges",children:[f.jsx("span",{className:"tp-badge-item",children:"🎓 Tutor"}),f.jsx("span",{className:"tp-badge-item",children:"⭐ Verified"})]})]}),f.jsxs("div",{className:"tp-stats-row",children:[f.jsxs("div",{className:"tp-stat",children:[f.jsx("span",{className:"tp-stat-val",children:Math.floor(Math.random()*50+10)}),f.jsx("span",{className:"tp-stat-lbl",children:"Sessions"})]}),f.jsx("div",{className:"tp-divider"}),f.jsxs("div",{className:"tp-stat",children:[f.jsx("span",{className:"tp-stat-val",children:Math.floor(Math.random()*200+50)}),f.jsx("span",{className:"tp-stat-lbl",children:"Followers"})]}),f.jsx("div",{className:"tp-divider"}),f.jsxs("div",{className:"tp-stat",children:[f.jsx("span",{className:"tp-stat-val",children:(Math.random()*2+3).toFixed(1)}),f.jsx("span",{className:"tp-stat-lbl",children:"Rating"})]})]}),f.jsx("div",{className:"tp-menu",children:o.map((d,h)=>f.jsxs("button",{className:"tp-menu-item",onClick:d.action,children:[f.jsx("div",{className:"tp-menu-icon",children:f.jsx(d.icon,{size:18})}),f.jsxs("div",{className:"tp-menu-text",children:[f.jsx("span",{className:"tp-menu-label",children:d.label}),f.jsx("span",{className:"tp-menu-desc",children:d.desc})]}),f.jsx(yi,{size:16,color:"rgba(255,255,255,0.2)"})]},h))}),f.jsxs("button",{className:"tp-logout-btn",onClick:l,children:[f.jsx(Ty,{size:18}),"Sign Out"]}),f.jsx("style",{children:`
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
      `})]})}const N6=[{path:"/home",label:"Home",icon:oS},{path:"/explore",label:"Explore",icon:eS},{path:"/schedule",label:"Live",icon:My},{path:"/pricing",label:"Pricing",icon:wy},{path:"/profile",label:"Profile",icon:No}];function w6(){const a=rn();return f.jsxs("nav",{className:"bottom-nav",children:[N6.map(n=>{const s=a.pathname===n.path||n.path==="/explore"&&a.pathname.startsWith("/category"),l=n.icon;return f.jsxs(Wd,{to:n.path,className:`bottom-nav-item ${s?"active":""}`,children:[f.jsxs("div",{className:"nav-icon-wrap",children:[n.path==="/schedule"&&f.jsx("span",{className:"live-dot"}),f.jsx(l,{size:22,strokeWidth:s?2.2:1.8})]}),f.jsx("span",{className:"nav-label",children:n.label})]},n.path)}),f.jsx("style",{children:`
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
      `})]})}const T6=[{path:"/tutor/dashboard",label:"Dashboard",icon:fS},{path:"/tutor-broadcast",label:"Go Live",icon:Fi},{path:"/tutor/profile",label:"Profile",icon:No}];function A6(){const a=rn();return f.jsxs("nav",{className:"tutor-bottom-nav",children:[T6.map(n=>{const s=a.pathname===n.path,l=n.icon;return f.jsxs(Wd,{to:n.path,className:`tutor-nav-item ${s?"active":""}`,children:[f.jsxs("div",{className:"tutor-nav-icon-wrap",children:[n.path==="/tutor-broadcast"&&f.jsx("span",{className:"go-live-ring"}),f.jsx(l,{size:22,strokeWidth:s?2.2:1.8})]}),f.jsx("span",{className:"tutor-nav-label",children:n.label})]},n.path)}),f.jsx("style",{children:`
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
            `})]})}function j6(){const a=rn(),n=["/","/login","/login/customer","/login/tutor","/tutor-broadcast","/live-session","/video-player"].includes(a.pathname),s=a.pathname.startsWith("/tutor/");return f.jsxs(f.Fragment,{children:[f.jsxs(Jb,{children:[f.jsx(gt,{path:"/",element:f.jsx(D2,{})}),f.jsx(gt,{path:"/login",element:f.jsx(b6,{})}),f.jsx(gt,{path:"/login/customer",element:f.jsx(x6,{})}),f.jsx(gt,{path:"/login/tutor",element:f.jsx(_6,{})}),f.jsx(gt,{path:"/home",element:f.jsx(a6,{})}),f.jsx(gt,{path:"/explore",element:f.jsx(r6,{})}),f.jsx(gt,{path:"/category/:id",element:f.jsx(o6,{})}),f.jsx(gt,{path:"/video-player",element:f.jsx(c6,{})}),f.jsx(gt,{path:"/live-session",element:f.jsx(f6,{})}),f.jsx(gt,{path:"/schedule",element:f.jsx(m6,{})}),f.jsx(gt,{path:"/pricing",element:f.jsx(y6,{})}),f.jsx(gt,{path:"/profile",element:f.jsx(v6,{})}),f.jsx(gt,{path:"/tutor/dashboard",element:f.jsx(C6,{})}),f.jsx(gt,{path:"/tutor/profile",element:f.jsx(E6,{})}),f.jsx(gt,{path:"/tutor-broadcast",element:f.jsx(S6,{})})]}),!n&&s&&f.jsx(A6,{}),!n&&!s&&f.jsx(w6,{})]})}function R6(){return f.jsx(C2,{children:f.jsx(nC,{children:f.jsx(j6,{})})})}const M6=N.createContext(null),Ed={didCatch:!1,error:null};class D6 extends N.Component{constructor(n){super(n),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=Ed}static getDerivedStateFromError(n){return{didCatch:!0,error:n}}resetErrorBoundary(...n){const{error:s}=this.state;s!==null&&(this.props.onReset?.({args:n,reason:"imperative-api"}),this.setState(Ed))}componentDidCatch(n,s){this.props.onError?.(n,s)}componentDidUpdate(n,s){const{didCatch:l}=this.state,{resetKeys:o}=this.props;l&&s.error!==null&&z6(n.resetKeys,o)&&(this.props.onReset?.({next:o,prev:n.resetKeys,reason:"keys"}),this.setState(Ed))}render(){const{children:n,fallbackRender:s,FallbackComponent:l,fallback:o}=this.props,{didCatch:d,error:h}=this.state;let p=n;if(d){const g={error:h,resetErrorBoundary:this.resetErrorBoundary};if(typeof s=="function")p=s(g);else if(l)p=N.createElement(l,g);else if(o!==void 0)p=o;else throw h}return N.createElement(M6.Provider,{value:{didCatch:d,error:h,resetErrorBoundary:this.resetErrorBoundary}},p)}}function z6(a=[],n=[]){return a.length!==n.length||a.some((s,l)=>!Object.is(s,n[l]))}function O6({error:a,resetErrorBoundary:n}){return f.jsxs("div",{role:"alert",style:{padding:"20px",color:"red"},children:[f.jsx("h2",{children:"Something went wrong:"}),f.jsx("pre",{children:a.message}),f.jsx("button",{onClick:n,children:"Try again"}),f.jsx("button",{onClick:()=>{localStorage.clear(),window.location.reload()},children:"Clear Data & Reload"})]})}tb.createRoot(document.getElementById("root")).render(f.jsx(X_.StrictMode,{children:f.jsx(D6,{FallbackComponent:O6,children:f.jsx(R6,{})})}));
