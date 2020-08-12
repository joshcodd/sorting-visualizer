(this["webpackJsonpsorting-app"]=this["webpackJsonpsorting-app"]||[]).push([[0],[,,,,,,,function(e,t,n){},,,function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(8),o=n.n(c),s=n(5),u=n.n(s),i=n(9),l=n(1);n(16);var h=function(e){var t=e.currentAlgorithm;return a.a.createElement("button",{className:(t===e.text?"btn btn-active ":"btn ")+e.className,onClick:function(n){""===t&&e.action(n.target.value)},value:e.text},e.text)};var m=function(e){var t=e.value;return a.a.createElement("div",{className:"sliderContainer"},a.a.createElement("input",{type:"range",min:"5",max:"100",className:"slider",id:"myRange",onChange:""===e.currentAlgorithm?function(t){e.onChange(t.target.value)}:null,onMouseUp:""===e.currentAlgorithm?function(t){e.onMouseUp(t.target.value)}:null,value:t}))};var g=function(e){var t=Object(r.useState)(!1),n=Object(l.a)(t,2),c=n[0],o=n[1];return a.a.createElement("div",{className:"dropdown"},a.a.createElement(h,{className:(c?"btn btn-active ":"btn ")+e.className,text:e.text,action:function(){var e="";!0===c?e=!1:!1===c&&(e=!0),console.log(e),o(e)},currentAlgorithm:""}),a.a.createElement("ul",{style:c?{background:"visible"}:{display:"none"}},a.a.createElement("li",null,a.a.createElement("div",{className:"triangle"}),a.a.createElement(m,{value:e.sliderValue,currentAlgorithm:e.currentAlgorithm,onChange:e.handleSliderChange,onMouseUp:e.handleSliderOnMouseUp}),a.a.createElement("div",{className:"sliderOutput"},e.sliderValue))))};var b=function(e){var t=Object(r.useState)(50),n=Object(l.a)(t,2),c=n[0],o=n[1];function s(t){e.onSortButtonPress(t)}function u(){e.onReset(c)}return a.a.createElement("div",{className:"sidebar"},a.a.createElement("h1",null," Sorting Visualiser "),a.a.createElement("label",null,"ALGORITHMS"),a.a.createElement(h,{text:"Insertion",action:s,currentAlgorithm:e.currentAlgorithm}),a.a.createElement(h,{text:"Bubble",action:s,currentAlgorithm:e.currentAlgorithm}),a.a.createElement(h,{text:"Quick",action:s,currentAlgorithm:e.currentAlgorithm}),a.a.createElement(h,{text:"Merge",action:s,currentAlgorithm:e.currentAlgorithm,className:"btn-last"}),a.a.createElement("label",null,"COLLECTION"),a.a.createElement(h,{text:"Reset",action:u,currentAlgorithm:e.currentAlgorithm}),a.a.createElement(g,{text:"Size",action:u,handleSliderChange:function(e){o(e)},handleSliderOnMouseUp:function(t){e.onReset(t)},currentAlgorithm:e.currentAlgorithm,sliderValue:c}))};n(7),n(17);var f=function(e){var t={marginLeft:e.margin,width:e.width,height:e.height};return a.a.createElement("div",{className:"bar-trans",style:t})};var d=function(e){var t=e.bars.length,n=200/t,c=Object(r.useRef)(),o=Object(r.useState)({width:0,height:0}),s=Object(l.a)(o,2),u=s[0],i=s[1];return Object(r.useLayoutEffect)((function(){c.current&&i({width:c.current.offsetWidth,height:c.current.offsetHeight})}),[]),a.a.createElement("div",{ref:c,className:"container"},e.bars.map((function(e,r){return a.a.createElement(f,{key:r,height:e,width:(u.width-200)/t,margin:n})})))},v=n(2),p=[];function k(e){p.length=0;var t=Object(v.a)(e);return function e(t,n,r){if(n<r){var a=function(e,t,n){for(var r=n,a=t-1,c=t;c<n;c++)e[c]<e[r]&&(a++,p.push([r,c,e[a]]),p.push([r,a,e[c]]),E(e,a,c));return p.push([r,a+1,e[r]]),p.push([r,r,e[a+1]]),E(e,a+1,n),r=a+1}(t,n,r),c=a+1;e(t,n,a-1),e(t,c,r)}}(t,0,t.length-1),{timeLine:p,bars:t}}function E(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}var x=[];function y(e){x.length=0;for(var t=Object(v.a)(e),n=0;n<t.length;n++)for(var r=0;r<t.length;r++)t[r]>=t[r+1]&&(x.push([r,r+1,t[r],t[r+1]]),O(t,r,r+1));return{timeLine:x,bars:t}}function O(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}var j=[];function N(e){j.length=0;var t=Object(v.a)(e);return function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.length-1;if(n<r){var a=Math.floor((n+r)/2);e(t,n,a),e(t,a+1,r),A(t,n,r)}}(t),{timeLine:j,bars:t}}function A(e,t,n){for(var r=[],a=t,c=t,o=Math.floor((t+n)/2),s=o+1;a<=o&&s<=n;)e[a]<=e[s]?(j.push([c,a,e[a]]),r[c++]=e[a++]):(j.push([c,s,e[s]]),r[c++]=e[s++]);for(;a<=o;)j.push([c,a,e[a]]),r[c++]=e[a++];for(;s<=n;)j.push([c,s,e[s]]),r[c++]=e[s++];for(var u=t;u<c;u++)e[u]=r[u]}var w=[];function C(e){w.length=0;for(var t=Object(v.a)(e),n=1;n<t.length;n++){for(var r=t[n],a=n-1;a>=0&&t[a]>r;)t[a+1]=t[a],w.push([a+1,t[a]]),a-=1;t[a+1]=r,w.push([a+1,r])}return{timeLine:w,bars:t}}var S=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(""),s=Object(l.a)(o,2),h=s[0],m=s[1];function g(e){for(var t=document.getElementsByClassName("bar-trans"),n=0;n<t.length;n++)t[n].style.background="";for(var r=[],a=0;a<e;a++){var o=Math.floor(700*Math.random());r.push(o)}c(r)}function f(e){return new Promise((function(t){return setTimeout(t,e)}))}function v(){return(v=Object(i.a)(u.a.mark((function e(t){var r,a,o,s,i,h,g,b,d,v,p,E,x,O,j,A,w,S,L,B,M,R,I,T,U,V,P,W,H,J,Q,z,G,$,q,D,F,K;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=document.getElementsByClassName("bar-trans");r.length>0;)r[0].className="bar";m(t),a=[],o=[],s=document.getElementsByClassName("bar"),e.t0=t,e.next="Merge"===e.t0?9:"Bubble"===e.t0?28:"Quick"===e.t0?48:"Insertion"===e.t0?67:83;break;case 9:i=N(n),a=i.timeLine,o=i.bars,h=0;case 13:if(!(h<a.length)){e.next=27;break}return g=Object(l.a)(a[h],3),b=g[0],d=g[1],v=g[2],p=s[b].style,E=s[d].style,p.height="".concat(v,"px"),p.background="red",E.background="red",e.next=22,f(10);case 22:p.background="",E.background="";case 24:h++,e.next=13;break;case 27:return e.abrupt("break",85);case 28:x=y(n),a=x.timeLine,o=x.bars,O=0;case 32:if(!(O<a.length)){e.next=47;break}return j=Object(l.a)(a[O],4),A=j[0],w=j[1],S=j[2],L=j[3],B=s[A].style,M=s[w].style,B.height="".concat(L,"px"),M.height="".concat(S,"px"),B.background="red",M.background="red",e.next=42,f(10);case 42:B.background="",M.background="";case 44:O++,e.next=32;break;case 47:return e.abrupt("break",85);case 48:R=k(n),a=R.timeLine,o=R.bars,I=0;case 52:if(!(I<a.length)){e.next=66;break}return T=Object(l.a)(a[I],3),U=T[0],V=T[1],P=T[2],W=s[V].style,H=s[U].style,W.height="".concat(P,"px"),W.background="red",H.background="yellow",e.next=61,f(10);case 61:W.background="",H.background="";case 63:I++,e.next=52;break;case 66:return e.abrupt("break",85);case 67:J=C(n),a=J.timeLine,o=J.bars,Q=0;case 71:if(!(Q<a.length)){e.next=82;break}return z=Object(l.a)(a[Q],2),G=z[0],$=z[1],(q=s[G].style).height="".concat($,"px"),q.background="red",e.next=78,f(10);case 78:q.background="";case 79:Q++,e.next=71;break;case 82:return e.abrupt("break",85);case 83:return alert("There has been an error please refresh"),e.abrupt("break",85);case 85:D=document.getElementsByClassName("bar"),F=0;case 87:if(!(F<D.length)){e.next=95;break}return e.next=90,f(10);case 90:D[F].style.opacity="0.7",D[F].style.background="#ff2e63";case 92:F++,e.next=87;break;case 95:for(K=document.getElementsByClassName("bar");K.length>0;)s[0].className="bar-trans";m(""),c(o);case 99:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){g(50)}),[]),Object(r.useEffect)((function(){for(var e=document.getElementsByClassName("bar-trans"),t=function(t){e[t].style.height="250px",setTimeout((function(){e[t].style.height=n[t]+"px"}),.1)},r=0;r<e.length;r++)t(r)}),[n]),a.a.createElement("div",null,a.a.createElement(b,{onReset:g,onSortButtonPress:function(e){return v.apply(this,arguments)},currentAlgorithm:h}),a.a.createElement(d,{bars:n}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(18);o.a.render(a.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.1d63c19e.chunk.js.map