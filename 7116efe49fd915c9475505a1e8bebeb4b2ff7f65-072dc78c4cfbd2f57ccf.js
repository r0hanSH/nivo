(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[7050],{2841:function(n,t,e){"use strict";var r=e(10361),u=e(52070),i=(0,r.Z)((function(n){return n.setHours(0,0,0,0)}),(function(n,t){return n.setDate(n.getDate()+t)}),(function(n,t){return(t-n-(t.getTimezoneOffset()-n.getTimezoneOffset())*u.yB)/u.UD}),(function(n){return n.getDate()-1}));t.Z=i;i.range},52070:function(n,t,e){"use strict";e.d(t,{Ym:function(){return r},yB:function(){return u},Y2:function(){return i},UD:function(){return o},iM:function(){return a},jz:function(){return c},qz:function(){return f}});var r=1e3,u=60*r,i=60*u,o=24*i,a=7*o,c=30*o,f=365*o},62636:function(n,t,e){"use strict";var r=e(10361),u=e(52070),i=(0,r.Z)((function(n){n.setTime(n-n.getMilliseconds()-n.getSeconds()*u.Ym-n.getMinutes()*u.yB)}),(function(n,t){n.setTime(+n+t*u.Y2)}),(function(n,t){return(t-n)/u.Y2}),(function(n){return n.getHours()}));t.Z=i;i.range},10361:function(n,t,e){"use strict";e.d(t,{Z:function(){return i}});var r=new Date,u=new Date;function i(n,t,e,o){function a(t){return n(t=0===arguments.length?new Date:new Date(+t)),t}return a.floor=function(t){return n(t=new Date(+t)),t},a.ceil=function(e){return n(e=new Date(e-1)),t(e,1),n(e),e},a.round=function(n){var t=a(n),e=a.ceil(n);return n-t<e-n?t:e},a.offset=function(n,e){return t(n=new Date(+n),null==e?1:Math.floor(e)),n},a.range=function(e,r,u){var i,o=[];if(e=a.ceil(e),u=null==u?1:Math.floor(u),!(e<r&&u>0))return o;do{o.push(i=new Date(+e)),t(e,u),n(e)}while(i<e&&e<r);return o},a.filter=function(e){return i((function(t){if(t>=t)for(;n(t),!e(t);)t.setTime(t-1)}),(function(n,r){if(n>=n)if(r<0)for(;++r<=0;)for(;t(n,-1),!e(n););else for(;--r>=0;)for(;t(n,1),!e(n););}))},e&&(a.count=function(t,i){return r.setTime(+t),u.setTime(+i),n(r),n(u),Math.floor(e(r,u))},a.every=function(n){return n=Math.floor(n),isFinite(n)&&n>0?n>1?a.filter(o?function(t){return o(t)%n==0}:function(t){return a.count(0,t)%n==0}):a:null}),a}},38969:function(n,t,e){"use strict";var r=e(10361),u=e(52070),i=(0,r.Z)((function(n){n.setTime(n-n.getMilliseconds()-n.getSeconds()*u.Ym)}),(function(n,t){n.setTime(+n+t*u.yB)}),(function(n,t){return(t-n)/u.yB}),(function(n){return n.getMinutes()}));t.Z=i;i.range},25847:function(n,t,e){"use strict";var r=(0,e(10361).Z)((function(n){n.setDate(1),n.setHours(0,0,0,0)}),(function(n,t){n.setMonth(n.getMonth()+t)}),(function(n,t){return t.getMonth()-n.getMonth()+12*(t.getFullYear()-n.getFullYear())}),(function(n){return n.getMonth()}));t.Z=r;r.range},16021:function(n,t,e){"use strict";var r=e(10361),u=e(52070),i=(0,r.Z)((function(n){n.setTime(n-n.getMilliseconds())}),(function(n,t){n.setTime(+n+t*u.Ym)}),(function(n,t){return(t-n)/u.Ym}),(function(n){return n.getUTCSeconds()}));t.Z=i;i.range},81312:function(n,t,e){"use strict";e.d(t,{_g:function(){return b},jK:function(){return k},jo:function(){return F},WG:function(){return D}});var r=e(11026),u=e(57670),i=e(73716),o=e(52070),a=e(10361),c=(0,a.Z)((function(){}),(function(n,t){n.setTime(+n+t)}),(function(n,t){return t-n}));c.every=function(n){return n=Math.floor(n),isFinite(n)&&n>0?n>1?(0,a.Z)((function(t){t.setTime(Math.floor(t/n)*n)}),(function(t,e){t.setTime(+t+e*n)}),(function(t,e){return(e-t)/n})):c:null};var f=c,s=(c.range,e(16021)),l=e(38969),g=e(62636),d=e(2841),v=e(59158),h=e(25847),m=e(57240),M=e(65531),T=e(35369),y=e(59758),p=e(12867),Z=e(93103);function U(n,t,e,a,c,l){var g=[[s.Z,1,o.Ym],[s.Z,5,5*o.Ym],[s.Z,15,15*o.Ym],[s.Z,30,30*o.Ym],[l,1,o.yB],[l,5,5*o.yB],[l,15,15*o.yB],[l,30,30*o.yB],[c,1,o.Y2],[c,3,3*o.Y2],[c,6,6*o.Y2],[c,12,12*o.Y2],[a,1,o.UD],[a,2,2*o.UD],[e,1,o.iM],[t,1,o.jz],[t,3,3*o.jz],[n,1,o.qz]];function d(t,e,a){var c=Math.abs(e-t)/a,s=(0,u.Z)((function(n){return(0,r.Z)(n,3)[2]})).right(g,c);if(s===g.length)return n.every((0,i.ly)(t/o.qz,e/o.qz,a));if(0===s)return f.every(Math.max((0,i.ly)(t,e,a),1));var l=(0,r.Z)(g[c/g[s-1][2]<g[s][2]/c?s-1:s],2),d=l[0],v=l[1];return d.every(v)}return[function(n,t,e){var r=t<n;if(r){var u=[t,n];n=u[0],t=u[1]}var i=e&&"function"==typeof e.range?e:d(n,t,e),o=i?i.range(n,+t+1):[];return r?o.reverse():o},d]}var C=U(e(31386).Z,Z.Z,p.Ox,y.Z,T.Z,M.Z),Y=(0,r.Z)(C,2),D=Y[0],F=Y[1],x=U(m.Z,h.Z,v.OM,d.Z,g.Z,l.Z),w=(0,r.Z)(x,2),k=w[0],b=w[1]},59758:function(n,t,e){"use strict";var r=e(10361),u=e(52070),i=(0,r.Z)((function(n){n.setUTCHours(0,0,0,0)}),(function(n,t){n.setUTCDate(n.getUTCDate()+t)}),(function(n,t){return(t-n)/u.UD}),(function(n){return n.getUTCDate()-1}));t.Z=i;i.range},35369:function(n,t,e){"use strict";var r=e(10361),u=e(52070),i=(0,r.Z)((function(n){n.setUTCMinutes(0,0,0)}),(function(n,t){n.setTime(+n+t*u.Y2)}),(function(n,t){return(t-n)/u.Y2}),(function(n){return n.getUTCHours()}));t.Z=i;i.range},65531:function(n,t,e){"use strict";var r=e(10361),u=e(52070),i=(0,r.Z)((function(n){n.setUTCSeconds(0,0)}),(function(n,t){n.setTime(+n+t*u.yB)}),(function(n,t){return(t-n)/u.yB}),(function(n){return n.getUTCMinutes()}));t.Z=i;i.range},93103:function(n,t,e){"use strict";var r=(0,e(10361).Z)((function(n){n.setUTCDate(1),n.setUTCHours(0,0,0,0)}),(function(n,t){n.setUTCMonth(n.getUTCMonth()+t)}),(function(n,t){return t.getUTCMonth()-n.getUTCMonth()+12*(t.getUTCFullYear()-n.getUTCFullYear())}),(function(n){return n.getUTCMonth()}));t.Z=r;r.range},12867:function(n,t,e){"use strict";e.d(t,{Ox:function(){return o}});var r=e(10361),u=e(52070);function i(n){return(0,r.Z)((function(t){t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-n)%7),t.setUTCHours(0,0,0,0)}),(function(n,t){n.setUTCDate(n.getUTCDate()+7*t)}),(function(n,t){return(t-n)/u.iM}))}var o=i(0),a=i(1),c=i(2),f=i(3),s=i(4),l=i(5),g=i(6);o.range,a.range,c.range,f.range,s.range,l.range,g.range},31386:function(n,t,e){"use strict";var r=e(10361),u=(0,r.Z)((function(n){n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)}),(function(n,t){n.setUTCFullYear(n.getUTCFullYear()+t)}),(function(n,t){return t.getUTCFullYear()-n.getUTCFullYear()}),(function(n){return n.getUTCFullYear()}));u.every=function(n){return isFinite(n=Math.floor(n))&&n>0?(0,r.Z)((function(t){t.setUTCFullYear(Math.floor(t.getUTCFullYear()/n)*n),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)}),(function(t,e){t.setUTCFullYear(t.getUTCFullYear()+e*n)})):null},t.Z=u;u.range},59158:function(n,t,e){"use strict";e.d(t,{OM:function(){return o}});var r=e(10361),u=e(52070);function i(n){return(0,r.Z)((function(t){t.setDate(t.getDate()-(t.getDay()+7-n)%7),t.setHours(0,0,0,0)}),(function(n,t){n.setDate(n.getDate()+7*t)}),(function(n,t){return(t-n-(t.getTimezoneOffset()-n.getTimezoneOffset())*u.yB)/u.iM}))}var o=i(0),a=i(1),c=i(2),f=i(3),s=i(4),l=i(5),g=i(6);o.range,a.range,c.range,f.range,s.range,l.range,g.range},57240:function(n,t,e){"use strict";var r=e(10361),u=(0,r.Z)((function(n){n.setMonth(0,1),n.setHours(0,0,0,0)}),(function(n,t){n.setFullYear(n.getFullYear()+t)}),(function(n,t){return t.getFullYear()-n.getFullYear()}),(function(n){return n.getFullYear()}));u.every=function(n){return isFinite(n=Math.floor(n))&&n>0?(0,r.Z)((function(t){t.setFullYear(Math.floor(t.getFullYear()/n)*n),t.setMonth(0,1),t.setHours(0,0,0,0)}),(function(t,e){t.setFullYear(t.getFullYear()+e*n)})):null},t.Z=u;u.range},46448:function(n,t,e){"use strict";e.d(t,{Z:function(){return a},x:function(){return f}});var r=e(11026);function u(n,t,e){n=+n,t=+t,e=(u=arguments.length)<2?(t=n,n=0,1):u<3?1:+e;for(var r=-1,u=0|Math.max(0,Math.ceil((t-n)/e)),i=new Array(u);++r<u;)i[r]=n+r*e;return i}var i=e(34591),o=e(19183);function a(){var n,t,e=(0,o.Z)().unknown(void 0),c=e.domain,f=e.range,s=0,l=1,g=!1,d=0,v=0,h=.5;function m(){var e=c().length,r=l<s,i=r?l:s,o=r?s:l;n=(o-i)/Math.max(1,e-d+2*v),g&&(n=Math.floor(n)),i+=(o-i-n*(e-d))*h,t=n*(1-d),g&&(i=Math.round(i),t=Math.round(t));var a=u(e).map((function(t){return i+n*t}));return f(r?a.reverse():a)}return delete e.unknown,e.domain=function(n){return arguments.length?(c(n),m()):c()},e.range=function(n){var t,e;return arguments.length?(t=n,e=(0,r.Z)(t,2),s=e[0],l=e[1],s=+s,l=+l,m()):[s,l]},e.rangeRound=function(n){var t,e;return t=n,e=(0,r.Z)(t,2),s=e[0],l=e[1],s=+s,l=+l,g=!0,m()},e.bandwidth=function(){return t},e.step=function(){return n},e.round=function(n){return arguments.length?(g=!!n,m()):g},e.padding=function(n){return arguments.length?(d=Math.min(1,v=+n),m()):d},e.paddingInner=function(n){return arguments.length?(d=Math.min(1,n),m()):d},e.paddingOuter=function(n){return arguments.length?(v=+n,m()):v},e.align=function(n){return arguments.length?(h=Math.max(0,Math.min(1,n)),m()):h},e.copy=function(){return a(c(),[s,l]).round(g).paddingInner(d).paddingOuter(v).align(h)},i.o.apply(m(),arguments)}function c(n){var t=n.copy;return n.padding=n.paddingOuter,delete n.paddingInner,delete n.paddingOuter,n.copy=function(){return c(t())},n}function f(){return c(a.apply(null,arguments).paddingInner(1))}},4387:function(n,t,e){"use strict";function r(n,t){var e,r=0,u=(n=n.slice()).length-1,i=n[r],o=n[u];return o<i&&(e=r,r=u,u=e,e=i,i=o,o=e),n[r]=t.floor(i),n[u]=t.ceil(o),n}e.d(t,{Z:function(){return r}})},73631:function(n,t,e){"use strict";e.d(t,{Y:function(){return M},Z:function(){return T}});var r=e(81312),u=e(57240),i=e(25847),o=e(59158),a=e(2841),c=e(62636),f=e(38969),s=e(16021),l=e(6164),g=e(35096),d=e(34591),v=e(4387);function h(n){return new Date(n)}function m(n){return n instanceof Date?+n:+new Date(+n)}function M(n,t,e,r,u,i,o,a,c,f){var s=(0,g.ZP)(),l=s.invert,d=s.domain,T=f(".%L"),y=f(":%S"),p=f("%I:%M"),Z=f("%I %p"),U=f("%a %d"),C=f("%b %d"),Y=f("%B"),D=f("%Y");function F(n){return(c(n)<n?T:a(n)<n?y:o(n)<n?p:i(n)<n?Z:r(n)<n?u(n)<n?U:C:e(n)<n?Y:D)(n)}return s.invert=function(n){return new Date(l(n))},s.domain=function(n){return arguments.length?d(Array.from(n,m)):d().map(h)},s.ticks=function(t){var e=d();return n(e[0],e[e.length-1],null==t?10:t)},s.tickFormat=function(n,t){return null==t?F:f(t)},s.nice=function(n){var e=d();return n&&"function"==typeof n.range||(n=t(e[0],e[e.length-1],null==n?10:n)),n?d((0,v.Z)(e,n)):s},s.copy=function(){return(0,g.JG)(s,M(n,t,e,r,u,i,o,a,c,f))},s}function T(){return d.o.apply(M(r.jK,r._g,u.Z,i.Z,o.OM,a.Z,c.Z,f.Z,s.Z,l.i$).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}},15050:function(n,t,e){"use strict";e.d(t,{Ym:function(){return r},yB:function(){return u},Y2:function(){return i},UD:function(){return o},iM:function(){return a}});var r=1e3,u=6e4,i=36e5,o=864e5,a=6048e5},61904:function(n,t,e){"use strict";e.d(t,{Z:function(){return i}});var r=new Date,u=new Date;function i(n,t,e,o){function a(t){return n(t=0===arguments.length?new Date:new Date(+t)),t}return a.floor=function(t){return n(t=new Date(+t)),t},a.ceil=function(e){return n(e=new Date(e-1)),t(e,1),n(e),e},a.round=function(n){var t=a(n),e=a.ceil(n);return n-t<e-n?t:e},a.offset=function(n,e){return t(n=new Date(+n),null==e?1:Math.floor(e)),n},a.range=function(e,r,u){var i,o=[];if(e=a.ceil(e),u=null==u?1:Math.floor(u),!(e<r&&u>0))return o;do{o.push(i=new Date(+e)),t(e,u),n(e)}while(i<e&&e<r);return o},a.filter=function(e){return i((function(t){if(t>=t)for(;n(t),!e(t);)t.setTime(t-1)}),(function(n,r){if(n>=n)if(r<0)for(;++r<=0;)for(;t(n,-1),!e(n););else for(;--r>=0;)for(;t(n,1),!e(n););}))},e&&(a.count=function(t,i){return r.setTime(+t),u.setTime(+i),n(r),n(u),Math.floor(e(r,u))},a.every=function(n){return n=Math.floor(n),isFinite(n)&&n>0?n>1?a.filter(o?function(t){return o(t)%n==0}:function(t){return a.count(0,t)%n==0}):a:null}),a}},51240:function(n,t,e){"use strict";e.d(t,{e:function(){return u}});var r=(0,e(61904).Z)((function(n){n.setDate(1),n.setHours(0,0,0,0)}),(function(n,t){n.setMonth(n.getMonth()+t)}),(function(n,t){return t.getMonth()-n.getMonth()+12*(t.getFullYear()-n.getFullYear())}),(function(n){return n.getMonth()}));t.Z=r;var u=r.range},1274:function(n,t,e){"use strict";e.d(t,{OM:function(){return o},wA:function(){return a},sy:function(){return c},zg:function(){return f},bL:function(){return s},mC:function(){return l},EY:function(){return g},vm:function(){return d}});var r=e(61904),u=e(15050);function i(n){return(0,r.Z)((function(t){t.setDate(t.getDate()-(t.getDay()+7-n)%7),t.setHours(0,0,0,0)}),(function(n,t){n.setDate(n.getDate()+7*t)}),(function(n,t){return(t-n-(t.getTimezoneOffset()-n.getTimezoneOffset())*u.yB)/u.iM}))}var o=i(0),a=i(1),c=i(2),f=i(3),s=i(4),l=i(5),g=i(6),d=o.range;a.range,c.range,f.range,s.range,l.range,g.range},60755:function(n,t,e){"use strict";var r=e(61904),u=(0,r.Z)((function(n){n.setMonth(0,1),n.setHours(0,0,0,0)}),(function(n,t){n.setFullYear(n.getFullYear()+t)}),(function(n,t){return t.getFullYear()-n.getFullYear()}),(function(n){return n.getFullYear()}));u.every=function(n){return isFinite(n=Math.floor(n))&&n>0?(0,r.Z)((function(t){t.setFullYear(Math.floor(t.getFullYear()/n)*n),t.setMonth(0,1),t.setHours(0,0,0,0)}),(function(t,e){t.setFullYear(t.getFullYear()+e*n)})):null},t.Z=u;u.range},770:function(n,t,e){"use strict";e.d(t,{NB:function(){return Dn},__:function(){return Cn},eW:function(){return Yn},Gv:function(){return In},ZN:function(){return Hn},Gi:function(){return Sn},KD:function(){return Zn},_S:function(){return Un},OO:function(){return En},xX:function(){return qn}});var r=e(83766),u=e.n(r),i=e(31091),o=e.n(i),a=e(95099),c=e.n(a),f=e(31159),s=e.n(f),l=e(96560),g=e.n(l),d=e(6164),v=e(81312),h=e(31386),m=e(93103),M=e(12867),T=e(59758),y=e(35369),p=e(65531),Z=e(16021),U=e(73631),C=e(34591);var Y=e(73716),D=e(78521),F=e(4387),x=e(35096);function w(n){return Math.log(n)}function k(n){return Math.exp(n)}function b(n){return-Math.log(-n)}function H(n){return-Math.exp(-n)}function O(n){return isFinite(n)?+("1e"+n):n<0?0:n}function S(n){return function(t){return-n(-t)}}function B(n){var t,e,r=n(w,k),u=r.domain,i=10;function o(){return t=function(n){return n===Math.E?Math.log:10===n&&Math.log10||2===n&&Math.log2||(n=Math.log(n),function(t){return Math.log(t)/n})}(i),e=function(n){return 10===n?O:n===Math.E?Math.exp:function(t){return Math.pow(n,t)}}(i),u()[0]<0?(t=S(t),e=S(e),n(b,H)):n(w,k),r}return r.base=function(n){return arguments.length?(i=+n,o()):i},r.domain=function(n){return arguments.length?(u(n),o()):u()},r.ticks=function(n){var r,o=u(),a=o[0],c=o[o.length-1];(r=c<a)&&(g=a,a=c,c=g);var f,s,l,g=t(a),d=t(c),v=null==n?10:+n,h=[];if(!(i%1)&&d-g<v){if(g=Math.floor(g),d=Math.ceil(d),a>0){for(;g<=d;++g)for(s=1,f=e(g);s<i;++s)if(!((l=f*s)<a)){if(l>c)break;h.push(l)}}else for(;g<=d;++g)for(s=i-1,f=e(g);s>=1;--s)if(!((l=f*s)<a)){if(l>c)break;h.push(l)}2*h.length<v&&(h=(0,Y.ZP)(a,c,v))}else h=(0,Y.ZP)(g,d,Math.min(d-g,v)).map(e);return r?h.reverse():h},r.tickFormat=function(n,u){if(null==u&&(u=10===i?".0e":","),"function"!=typeof u&&(u=(0,D.WU)(u)),n===1/0)return u;null==n&&(n=10);var o=Math.max(1,i*n/r.ticks().length);return function(n){var r=n/e(Math.round(t(n)));return r*i<i-.5&&(r*=i),r<=o?u(n):""}},r.nice=function(){return u((0,F.Z)(u(),{floor:function(n){return e(Math.floor(t(n)))},ceil:function(n){return e(Math.ceil(t(n)))}}))},r}function E(){var n=B((0,x.l4)()).domain([1,10]);return n.copy=function(){return(0,x.JG)(n,E()).base(n.base())},C.o.apply(n,arguments),n}var z=e(9841);function j(n){return function(t){return Math.sign(t)*Math.log1p(Math.abs(t/n))}}function G(n){return function(t){return Math.sign(t)*Math.expm1(Math.abs(t))*n}}function I(n){var t=1,e=n(j(t),G(t));return e.constant=function(e){return arguments.length?n(j(t=+e),G(t)):t},(0,z.Q)(e)}function _(){var n=I((0,x.l4)());return n.copy=function(){return(0,x.JG)(n,_()).constant(n.constant())},C.o.apply(n,arguments)}var A=e(46448),R=e(61904),q=(0,R.Z)((function(){}),(function(n,t){n.setTime(+n+t)}),(function(n,t){return t-n}));q.every=function(n){return n=Math.floor(n),isFinite(n)&&n>0?n>1?(0,R.Z)((function(t){t.setTime(Math.floor(t/n)*n)}),(function(t,e){t.setTime(+t+e*n)}),(function(t,e){return(e-t)/n})):q:null};var N=q,P=(q.range,e(15050)),W=(0,R.Z)((function(n){n.setTime(n-n.getMilliseconds())}),(function(n,t){n.setTime(+n+t*P.Ym)}),(function(n,t){return(t-n)/P.Ym}),(function(n){return n.getUTCSeconds()})),J=W,K=(W.range,(0,R.Z)((function(n){n.setTime(n-n.getMilliseconds()-n.getSeconds()*P.Ym)}),(function(n,t){n.setTime(+n+t*P.yB)}),(function(n,t){return(t-n)/P.yB}),(function(n){return n.getMinutes()}))),L=K,V=(K.range,(0,R.Z)((function(n){n.setUTCSeconds(0,0)}),(function(n,t){n.setTime(+n+t*P.yB)}),(function(n,t){return(t-n)/P.yB}),(function(n){return n.getUTCMinutes()}))),$=V,Q=(V.range,(0,R.Z)((function(n){n.setTime(n-n.getMilliseconds()-n.getSeconds()*P.Ym-n.getMinutes()*P.yB)}),(function(n,t){n.setTime(+n+t*P.Y2)}),(function(n,t){return(t-n)/P.Y2}),(function(n){return n.getHours()}))),X=Q,nn=(Q.range,(0,R.Z)((function(n){n.setUTCMinutes(0,0,0)}),(function(n,t){n.setTime(+n+t*P.Y2)}),(function(n,t){return(t-n)/P.Y2}),(function(n){return n.getUTCHours()}))),tn=nn;nn.range;function en(n){return(0,R.Z)((function(t){t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-n)%7),t.setUTCHours(0,0,0,0)}),(function(n,t){n.setUTCDate(n.getUTCDate()+7*t)}),(function(n,t){return(t-n)/P.iM}))}var rn=en(0),un=en(1),on=en(2),an=en(3),cn=en(4),fn=en(5),sn=en(6),ln=(rn.range,un.range,on.range,an.range,cn.range,fn.range,sn.range,(0,R.Z)((function(n){n.setUTCDate(1),n.setUTCHours(0,0,0,0)}),(function(n,t){n.setUTCMonth(n.getUTCMonth()+t)}),(function(n,t){return t.getUTCMonth()-n.getUTCMonth()+12*(t.getUTCFullYear()-n.getUTCFullYear())}),(function(n){return n.getUTCMonth()}))),gn=ln,dn=(ln.range,(0,R.Z)((function(n){n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)}),(function(n,t){n.setUTCFullYear(n.getUTCFullYear()+t)}),(function(n,t){return t.getUTCFullYear()-n.getUTCFullYear()}),(function(n){return n.getUTCFullYear()})));dn.every=function(n){return isFinite(n=Math.floor(n))&&n>0?(0,R.Z)((function(t){t.setUTCFullYear(Math.floor(t.getUTCFullYear()/n)*n),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)}),(function(t,e){t.setUTCFullYear(t.getUTCFullYear()+e*n)})):null};var vn=dn,hn=(dn.range,e(1274)),mn=e(51240),Mn=e(60755);function Tn(){return Tn=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},Tn.apply(this,arguments)}var yn=[function(n){return n.setMilliseconds(0)},function(n){return n.setSeconds(0)},function(n){return n.setMinutes(0)},function(n){return n.setHours(0)},function(n){return n.setDate(1)},function(n){return n.setMonth(0)}],pn={millisecond:[],second:yn.slice(0,1),minute:yn.slice(0,2),hour:yn.slice(0,3),day:yn.slice(0,4),month:yn.slice(0,5),year:yn.slice(0,6)},Zn=function(n){var t=n.format,e=void 0===t?"native":t,r=n.precision,u=void 0===r?"millisecond":r,i=n.useUTC,o=void 0===i||i,a=function(n){return function(t){return pn[n].forEach((function(n){n(t)})),t}}(u);return function(n){if(void 0===n)return n;if("native"===e||n instanceof Date)return a(n);var t=o?(0,d.wp)(e):(0,d.Z1)(e);return a(t(n))}},Un=function(n,t,e,r){var u,i,o,a,c=n.min,f=void 0===c?0:c,s=n.max,l=void 0===s?"auto":s,g=n.stacked,d=void 0!==g&&g,v=n.reverse,h=void 0!==v&&v,m=n.clamp,M=void 0!==m&&m,T=n.nice,y=void 0!==T&&T;u="auto"===f?!0===d?null!=(i=t.minStacked)?i:0:t.min:f,o="auto"===l?!0===d?null!=(a=t.maxStacked)?a:0:t.max:l;var p=(0,z.Z)().rangeRound("x"===r?[0,e]:[e,0]).domain(h?[o,u]:[u,o]).clamp(M);return!0===y?p.nice():"number"==typeof y&&p.nice(y),Cn(p,d)},Cn=function(n,t){void 0===t&&(t=!1);var e=n;return e.type="linear",e.stacked=t,e},Yn=function(n){var t=n;return t.type="point",t},Dn=function(n){var t=n;return t.type="band",t},Fn=function(n,t,e){var r,u,i=n.format,o=void 0===i?"native":i,a=n.precision,c=void 0===a?"millisecond":a,f=n.min,s=void 0===f?"auto":f,l=n.max,g=void 0===l?"auto":l,Y=n.useUTC,D=void 0===Y||Y,F=n.nice,x=void 0!==F&&F,w=Zn({format:o,precision:c,useUTC:D});r="auto"===s?w(t.min):"native"!==o?w(s):s,u="auto"===g?w(t.max):"native"!==o?w(g):g;var k=D?function(){return C.o.apply((0,U.Y)(v.WG,v.jo,h.Z,m.Z,M.Ox,T.Z,y.Z,p.Z,Z.Z,d.g0).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}():(0,U.Z)();k.range([0,e]),r&&u&&k.domain([r,u]),!0===x?k.nice():"object"!=typeof x&&"number"!=typeof x||k.nice(x);var b=k;return b.type="time",b.useUTC=D,b},xn=function(n,t,e,r){var u,i=n.base,o=void 0===i?10:i,a=n.min,c=void 0===a?"auto":a,f=n.max,s=void 0===f?"auto":f;if(t.all.some((function(n){return 0===n})))throw new Error("a log scale domain must not include or cross zero");var l,g,d=!1;if(t.all.filter((function(n){return null!=n})).forEach((function(n){d||(void 0===u?u=Math.sign(n):Math.sign(n)!==u&&(d=!0))})),d)throw new Error("a log scale domain must be strictly-positive or strictly-negative");l="auto"===c?t.min:c,g="auto"===s?t.max:s;var v=E().domain([l,g]).rangeRound("x"===r?[0,e]:[e,0]).base(o).nice();return v.type="log",v},wn=function(n,t,e,r){var u,i,o=n.constant,a=void 0===o?1:o,c=n.min,f=void 0===c?"auto":c,s=n.max,l=void 0===s?"auto":s,g=n.reverse,d=void 0!==g&&g;u="auto"===f?t.min:f,i="auto"===l?t.max:l;var v=_().constant(a).rangeRound("x"===r?[0,e]:[e,0]).nice();!0===d?v.domain([i,u]):v.domain([u,i]);var h=v;return h.type="symlog",h},kn=function(n,t){return n===t},bn=function(n,t){return n.getTime()===t.getTime()};function Hn(n,t,e,r){switch(n.type){case"linear":return Un(n,t,e,r);case"point":return function(n,t,e){var r=(0,A.x)().range([0,e]).domain(t.all);return r.type="point",r}(0,t,e);case"band":return function(n,t,e,r){var u=n.round,i=void 0===u||u,o=(0,A.Z)().range("x"===r?[0,e]:[e,0]).domain(t.all).round(i);return Dn(o)}(n,t,e,r);case"time":return Fn(n,t,e);case"log":return xn(n,t,e,r);case"symlog":return wn(n,t,e,r);default:throw new Error("invalid scale spec")}}var On=function(n,t,e){var r;if("stacked"in e&&e.stacked){var u=n.data["x"===t?"xStacked":"yStacked"];return null==u?null:e(u)}return null!=(r=e(n.data[t]))?r:null},Sn=function(n,t,e,r,u){var i=n.map((function(n){return function(n){return Tn({},n,{data:n.data.map((function(n){return{data:Tn({},n)}}))})}(n)})),o=Bn(i,t,e);"stacked"in t&&!0===t.stacked&&jn(o,i),"stacked"in e&&!0===e.stacked&&Gn(o,i);var a=Hn(t,o.x,r,"x"),c=Hn(e,o.y,u,"y"),f=i.map((function(n){return Tn({},n,{data:n.data.map((function(n){return Tn({},n,{position:{x:On(n,"x",a),y:On(n,"y",c)}})}))})}));return Tn({},o,{series:f,xScale:a,yScale:c})},Bn=function(n,t,e){return{x:En(n,"x",t),y:En(n,"y",e)}},En=function(n,t,e,r){var i=void 0===r?{}:r,a=i.getValue,f=void 0===a?function(n){return n.data[t]}:a,l=i.setValue,g=void 0===l?function(n,e){n.data[t]=e}:l;if("linear"===e.type)n.forEach((function(n){n.data.forEach((function(n){var t=f(n);t&&g(n,parseFloat(String(t)))}))}));else if("time"===e.type&&"native"!==e.format){var d=Zn(e);n.forEach((function(n){n.data.forEach((function(n){var t=f(n);t&&g(n,d(t))}))}))}var v=[];switch(n.forEach((function(n){n.data.forEach((function(n){v.push(f(n))}))})),e.type){case"linear":var h=c()(u()(v).filter((function(n){return null!==n})),(function(n){return n}));return{all:h,min:Math.min.apply(Math,h),max:Math.max.apply(Math,h)};case"time":var m=o()(v,(function(n){return n.getTime()})).slice(0).sort((function(n,t){return t.getTime()-n.getTime()})).reverse();return{all:m,min:m[0],max:s()(m)};default:var M=u()(v);return{all:M,min:M[0],max:s()(M)}}},zn=function(n,t,e){var r=function(n){return"x"===n?"y":"x"}(n),u=[];t[r].all.forEach((function(t){var i=g()(t)?bn:kn,o=[];e.forEach((function(e){var a=e.data.find((function(n){return i(n.data[r],t)})),c=null,f=null;if(void 0!==a){if(null!==(c=a.data[n])){var l=s()(o);void 0===l?f=c:null!==l&&(f=l+c)}a.data["x"===n?"xStacked":"yStacked"]=f}o.push(f),null!==f&&u.push(f)}))})),t[n].minStacked=Math.min.apply(Math,u),t[n].maxStacked=Math.max.apply(Math,u)},jn=function(n,t){return zn("x",n,t)},Gn=function(n,t){return zn("y",n,t)},In=function(n){var t=n.bandwidth();if(0===t)return n;var e=t/2;return n.round()&&(e=Math.round(e)),function(t){var r;return(null!=(r=n(t))?r:0)+e}},_n={millisecond:[N,N],second:[J,J],minute:[L,$],hour:[X,tn],day:[(0,R.Z)((function(n){return n.setHours(0,0,0,0)}),(function(n,t){return n.setDate(n.getDate()+t)}),(function(n,t){return(t.getTime()-n.getTime())/864e5}),(function(n){return Math.floor(n.getTime()/864e5)})),(0,R.Z)((function(n){return n.setUTCHours(0,0,0,0)}),(function(n,t){return n.setUTCDate(n.getUTCDate()+t)}),(function(n,t){return(t.getTime()-n.getTime())/864e5}),(function(n){return Math.floor(n.getTime()/864e5)}))],week:[hn.OM,rn],sunday:[hn.OM,rn],monday:[hn.wA,un],tuesday:[hn.sy,on],wednesday:[hn.zg,an],thursday:[hn.bL,cn],friday:[hn.mC,fn],saturday:[hn.EY,sn],month:[mn.Z,gn],year:[Mn.Z,vn]},An=Object.keys(_n),Rn=new RegExp("^every\\s*(\\d+)?\\s*("+An.join("|")+")s?$","i"),qn=function(n,t){if(Array.isArray(t))return t;if("string"==typeof t&&"useUTC"in n){var e=t.match(Rn);if(e){var r=e[1],u=e[2],i=_n[u][n.useUTC?1:0];if("day"===u){var o,a,c=n.domain(),f=c[0],s=c[1],l=new Date(s);return l.setDate(l.getDate()+1),null!=(o=null==(a=i.every(Number(null!=r?r:1)))?void 0:a.range(f,l))?o:[]}if(void 0===r)return n.ticks(i);var g=i.every(Number(r));if(g)return n.ticks(g)}throw new Error("Invalid tickValues: "+t)}if("ticks"in n){if(void 0===t)return n.ticks();if("number"==typeof(d=t)&&isFinite(d)&&Math.floor(d)===d)return n.ticks(t)}var d;return n.domain()}},72123:function(n,t,e){var r=e(99736),u=e(92360);n.exports=function(n){return u(n)&&"[object Date]"==r(n)}},96560:function(n,t,e){var r=e(72123),u=e(39334),i=e(18125),o=i&&i.isDate,a=o?u(o):r;n.exports=a},31091:function(n,t,e){var r=e(89278),u=e(92198);n.exports=function(n,t){return n&&n.length?u(n,r(t,2)):[]}}}]);
//# sourceMappingURL=7116efe49fd915c9475505a1e8bebeb4b2ff7f65-072dc78c4cfbd2f57ccf.js.map