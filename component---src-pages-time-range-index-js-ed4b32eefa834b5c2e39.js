(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[7005],{18957:function(e,t,n){"use strict";n.d(t,{a:function(){return a}});var r=n(61904),o=n(15050),i=(0,r.Z)((function(e){e.setHours(0,0,0,0)}),(function(e,t){e.setDate(e.getDate()+t)}),(function(e,t){return(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*o.yB)/o.UD}),(function(e){return e.getDate()-1}));t.Z=i;var a=i.range},15050:function(e,t,n){"use strict";n.d(t,{Ym:function(){return r},yB:function(){return o},Y2:function(){return i},UD:function(){return a},iM:function(){return u}});var r=1e3,o=6e4,i=36e5,a=864e5,u=6048e5},61904:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=new Date,o=new Date;function i(e,t,n,a){function u(t){return e(t=0===arguments.length?new Date:new Date(+t)),t}return u.floor=function(t){return e(t=new Date(+t)),t},u.ceil=function(n){return e(n=new Date(n-1)),t(n,1),e(n),n},u.round=function(e){var t=u(e),n=u.ceil(e);return e-t<n-e?t:n},u.offset=function(e,n){return t(e=new Date(+e),null==n?1:Math.floor(n)),e},u.range=function(n,r,o){var i,a=[];if(n=u.ceil(n),o=null==o?1:Math.floor(o),!(n<r&&o>0))return a;do{a.push(i=new Date(+n)),t(n,o),e(n)}while(i<n&&n<r);return a},u.filter=function(n){return i((function(t){if(t>=t)for(;e(t),!n(t);)t.setTime(t-1)}),(function(e,r){if(e>=e)if(r<0)for(;++r<=0;)for(;t(e,-1),!n(e););else for(;--r>=0;)for(;t(e,1),!n(e););}))},n&&(u.count=function(t,i){return r.setTime(+t),o.setTime(+i),e(r),e(o),Math.floor(n(r,o))},u.every=function(e){return e=Math.floor(e),isFinite(e)&&e>0?e>1?u.filter(a?function(t){return a(t)%e==0}:function(t){return u.count(0,t)%e==0}):u:null}),u}},51240:function(e,t,n){"use strict";n.d(t,{e:function(){return o}});var r=(0,n(61904).Z)((function(e){e.setDate(1),e.setHours(0,0,0,0)}),(function(e,t){e.setMonth(e.getMonth()+t)}),(function(e,t){return t.getMonth()-e.getMonth()+12*(t.getFullYear()-e.getFullYear())}),(function(e){return e.getMonth()}));t.Z=r;var o=r.range},1274:function(e,t,n){"use strict";n.d(t,{OM:function(){return a},wA:function(){return u},sy:function(){return l},zg:function(){return c},bL:function(){return s},mC:function(){return d},EY:function(){return f},vm:function(){return h}});var r=n(61904),o=n(15050);function i(e){return(0,r.Z)((function(t){t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)}),(function(e,t){e.setDate(e.getDate()+7*t)}),(function(e,t){return(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*o.yB)/o.iM}))}var a=i(0),u=i(1),l=i(2),c=i(3),s=i(4),d=i(5),f=i(6),h=a.range;u.range,l.range,c.range,s.range,d.range,f.range},60755:function(e,t,n){"use strict";var r=n(61904),o=(0,r.Z)((function(e){e.setMonth(0,1),e.setHours(0,0,0,0)}),(function(e,t){e.setFullYear(e.getFullYear()+t)}),(function(e,t){return t.getFullYear()-e.getFullYear()}),(function(e){return e.getFullYear()}));o.every=function(e){return isFinite(e=Math.floor(e))&&e>0?(0,r.Z)((function(t){t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)}),(function(t,n){t.setFullYear(t.getFullYear()+n*e)})):null},t.Z=o;o.range},62370:function(e,t,n){"use strict";n.d(t,{h8:function(){return l},h6:function(){return c},Ld:function(){return s}});var r=n(48159),o=n.n(r),i=n(76744),a=n.n(i);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}var l=function(e,t){var n=(void 0===t?{}:t).exclude,r=void 0===n?[]:n;return function(t,n){void 0===n&&(n={});var i={};return Object.keys(t).forEach((function(r){e[r]&&(i[r]=e[r](t[r],t,n))})),u({},o()(t,r),i)}},c=function(e){return function(t,n){return n["axis"+a()(e)].enable?o()(t,["enable"]):null}},s=function(e){var t=e.format;return e.enabled?t:void 0}},38681:function(e,t,n){"use strict";n.d(t,{j2:function(){return m},wQ:function(){return g},aw:function(){return Y},x$:function(){return P},ak:function(){return W},UE:function(){return R},$j:function(){return y},BO:function(){return b},Tz:function(){return L},O$:function(){return C},B7:function(){return E},gq:function(){return T},zn:function(){return q},FQ:function(){return j}});var r=n(4215),o=n.n(r),i=n(91311),a=n.n(i),u=n(19193),l=n.n(u),c=n(18957),s=n(6164),d=function(){return"hsl("+Math.round(360*Math.random())+", 70%, 50%)"},f=["AD","AE","AF","AG","AI","AL","AM","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BQ","BR","BS","BT","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CU","CV","CW","CX","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","EH","ER","ES","ET","FI","FJ","FK","FM","FO","FR","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SV","SX","SY","SZ","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","YE","YT","ZA","ZM","ZW"],h=["John","Raoul","Jane","Marcel","Ibrahim","Junko","Lyu","André","Maki","Véronique","Thibeau","Josiane","Raphaël","Mathéo","Margot","Hugo","Christian","Louis","Ella","Alton","Jimmy","Guillaume","Sébastien","Alfred","Bon","Solange","Kendrick","Jared","Satoko","Tomoko","Line","Delphine","Leonard","Alphonse","Lisa","Bart","Benjamin","Homer","Jack"],p=["php","make","javascript","go","erlang","elixir","lisp","haskell","python","ruby","hack","scala","java","rust","c","css","sass","stylus"],m=(Object.freeze({__proto__:null,countryCodes:f,names:h,programmingLanguages:p}),function(e,t,n){var r=void 0===n?{}:n,i=r.title,u=r.subtitle,l=r.rangeCount,c=void 0===l?5:l,s=r.measureCount,d=void 0===s?1:s,f=r.markerCount,h=void 0===f?1:f,p=r.float,m=void 0!==p&&p;return{id:e,title:i,subtitle:u,ranges:o()(c-1).reduce((function(e){var n=t-e[0];return[a()(n,m)].concat(e)}),[t]),measures:o()(d).reduce((function(e){return 0===e.length?[a()(t,m)]:[a()(e[0],m)].concat(e)}),[]),markers:o()(h).map((function(){return.6*t+a()(.4*t)}))}}),g=function(e){var t=void 0===e?{}:e,n=t.keys,r=void 0===n?h:n,i=t.size,u=void 0===i?7:i,l=t.minValue,c=void 0===l?0:l,s=t.maxValue,d=void 0===s?2e3:s,f=Math.min(r.length,u),p=r.slice(0,f);return{matrix:o()(f).map((function(){return o()(f).map((function(){return Math.random()<.66?a()(c,d/4):a()(c,d)}))})),keys:p}},y=function(e){var t=void 0===e?{}:e,n=t.rootNodeRadius,r=void 0===n?12:n,o=t.minMidNodes,i=void 0===o?6:o,u=t.maxMidNodes,l=void 0===u?16:u,c=t.midNodeRadius,s=void 0===c?8:c,d=t.minLeaves,f=void 0===d?4:d,h=t.maxLeaves,p=void 0===h?16:h,m=t.leafRadius,g=void 0===m?4:m,y={id:"0",radius:r,depth:0,color:"rgb(244, 117, 96)"},v=Array.from({length:a()(i,l)},(function(e,t){return{id:""+(t+1),radius:s,depth:1,color:"rgb(97, 205, 187)"}})),b=[],k=[];return v.forEach((function(e){b.push({source:"0",target:e.id,distance:50}),v.forEach((function(t){Math.random()<.04&&b.push({source:e.id,target:t.id,distance:70})})),Array.from({length:a()(f,p)},(function(t,n){return k.push({id:e.id+"."+n,radius:g,depth:2,color:"rgb(232, 193, 160)"}),b.push({source:e.id,target:e.id+"."+n,distance:30}),null}))})),v.push(y),{nodes:v=v.concat(k),links:b}};function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}var b=function(e){var t=void 0===e?{}:e,n=t.size,r=void 0===n?26:n,i=t.keys,u=void 0===i?[{key:"temp",random:[-10,40]},{key:"cost",random:[200,4e5]},{key:"color",shuffle:["red","yellow","green"]},{key:"target",shuffle:["A","B","C","D","E"]},{key:"volume",random:[.2,7.6]}]:i;return o()(r).map((function(){return u.reduce((function(e,t){var n,r;return void 0!==t.random?r=a().apply(void 0,t.random):void 0!==t.shuffle&&(r=l()(t.shuffle)[0]),v({},e,((n={})[t.key]=r,n))}),{})}))},k=h.map((function(e){return{id:e}})),x=function e(t,n,r){var o=n.filter((function(e){return e.source===t})).map((function(e){var n=e.target;if(n===t)throw new Error("[sankey] a node cannot be linked on itself:\n  link: "+t+" —> "+t);if(null!=r&&r.includes(n))throw new Error("[sankey] found cyclic dependency:\n  link: "+r.join(" —> ")+" —> "+n);return n}));return o.reduce((function(o,i){return o.concat(e(i,n,r?[].concat(r,[i]):[t,i]))}),o)},M=function(e){return e.reduce((function(t,n){return t[n.source]||(t[n.source]=x(n.source,e)),t}),{})},C=function(e){var t=void 0===e?{}:e,n=t.nodeCount,r=t.maxIterations,i=void 0===r?3:r,u=k.slice(0,n).map((function(e){return Object.assign({},e,{nodeColor:d()})})),c=[];return l()(u).forEach((function(e){var t=e.id;o()(a()(1,i)).forEach((function(){var e=M(c),n=l()(u.filter((function(e){return e.id!==t})).map((function(e){return e.id})))[0];e[n]&&e[n].includes(t)||e[t]&&e[t].includes(n)||c.push({source:t,target:n,value:a()(5,200)})}))})),{nodes:u,links:c}},S=function(){return a()(0,500)},w=function(){return a()(4,20)},B=function(){return a()(3,17)},T=function(e,t){var n=t.min,r=void 0===n?60:n,i=t.max,u=void 0===i?100:i,l=t.categoryCount,c=void 0===l?0:l;return{groups:e,data:e.reduce((function(e,t,n){return[].concat(e,o()(a()(r,u)).map((function(){return S()})).map((function(e,r){var i={id:n+"."+r,group:t,price:e,volume:w()};return c>0&&(i.categories=o()(c).map(B)),i})))}),[])}},j=function(e){return{groups:e.groups,data:e.data.map((function(t){var n=v({},t,{group:l()(e.groups)[0],price:S(),volume:w()});return void 0!==t.categories&&(n.categories=o()(3).map(B)),n}))}},O=d,L=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=-1);var n=p;return e&&(n=l()(n)),t<1&&(t=1+Math.round(Math.random()*(p.length-1))),n.slice(0,t).map((function(e){return{label:e,value:Math.round(600*Math.random()),color:O()}}))},D=function(e){var t=[];return function(){var n;do{n=e.apply(void 0,arguments)}while(t.includes(n));return t.push(n),n}},A=function(){return l()(f)[0]},W=function(e){void 0===e&&(e=16);var t=["whisky","rhum","gin","vodka","cognac"],n=D(A),r=t.map((function(e){return{id:e,color:O(),data:[]}}));return o()(e).forEach((function(){var e=n();t.forEach((function(t){var n;null==(n=r.find((function(e){return e.id===t})))||n.data.push({color:O(),x:e,y:a()(0,60)})}))})),r},E=function(e,t){return e.map((function(e){return{id:e,color:O(),data:t.map((function(e){return{x:e,y:Math.round(300*Math.random())}}))}}))},P=function(e,t,n){void 0===n&&(n=.9);var r=function(e,t){var n=(0,c.a)(e,t),r=(0,s.i$)("%Y-%m-%d");return n.map((function(e){return{value:Math.round(400*Math.random()),day:r(e)}}))}(e,t),o=Math.round(r.length*(.4*n))+Math.round(Math.random()*(r.length*(.6*n)));return l()(r).slice(0,o)},Y=function(e,t){var n=void 0===t?{}:t,r=n.size,o=void 0===r?12:r,i=n.min,u=void 0===i?0:i,l=n.max,c=void 0===l?200:l,s=n.withColors,d=void 0===s||s;return f.slice(0,o).map((function(t){var n={country:t};return e.forEach((function(e){n[e]=a()(u,c),!0===d&&(n[e+"Color"]=O())})),n}))},V=[["viz",[["stack",[["cchart"],["xAxis"],["yAxis"],["layers"]]],["ppie",[["chart",[["pie",[["outline"],["slices"],["bbox"]]],["donut"],["gauge"]]],["legends"]]]]],["colors",[["rgb"],["hsl"]]],["utils",[["randomize"],["resetClock"],["noop"],["tick"],["forceGC"],["stackTrace"],["dbg"]]],["generators",[["address"],["city"],["animal"],["movie"],["user"]]],["set",[["clone"],["intersect"],["merge"],["reverse"],["toArray"],["toObject"],["fromCSV"],["slice"],["append"],["prepend"],["shuffle"],["pick"],["plouc"]]],["text",[["trim"],["slugify"],["snakeCase"],["camelCase"],["repeat"],["padLeft"],["padRight"],["sanitize"],["ploucify"]]],["misc",[["greetings",[["hey"],["HOWDY"],["aloha"],["AHOY"]]],["other"],["path",[["pathA"],["pathB",[["pathB1"],["pathB2"],["pathB3"],["pathB4"]]],["pathC",[["pathC1"],["pathC2"],["pathC3"],["pathC4"],["pathC5"],["pathC6"],["pathC7"],["pathC8"],["pathC9"]]]]]]]],R=function e(t,n,r){var i;void 0===t&&(t="nivo"),void 0===r&&(r=V),(n=n||r.length)>r.length&&(n=r.length);var a={name:t,color:O()};return(null==(i=r)?void 0:i.length)>0?a.children=o()(n).map((function(t,n){var o,i=r[n];return e(i[0],null,null!=(o=i[1])?o:[])})):a.loc=Math.round(2e5*Math.random()),a},H=["chardonay","carmenere","syrah"],z=["fruity","bitter","heavy","strong","sunny"],q=function(e){var t=void 0===e?{}:e,n=t.randMin,r=void 0===n?20:n,o=t.randMax,i=void 0===o?120:o;return{data:z.map((function(e){var t={taste:e};return H.forEach((function(e){t[e]=a()(r,i)})),t})),keys:H}}},47425:function(e,t,n){"use strict";n.d(t,{$6:function(){return g},iQ:function(){return k},Ae:function(){return p},as:function(){return v},_i:function(){return b}});var r=n(24246),o=n(27378),i=n(45434),a=n(23615),u=n.n(a);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}var c={top:0,right:0,bottom:0,left:0},s=function(e){var t,n=e.direction,r=e.itemsSpacing,o=e.padding,i=e.itemCount,a=e.itemWidth,u=e.itemHeight;if("number"!=typeof o&&("object"!=typeof(t=o)||Array.isArray(t)||null===t))throw new Error("Invalid property padding, must be one of: number, object");var s="number"==typeof o?{top:o,right:o,bottom:o,left:o}:l({},c,o),d=s.left+s.right,f=s.top+s.bottom,h=a+d,p=u+f,m=(i-1)*r;return"row"===n?h=a*i+m+d:"column"===n&&(p=u*i+m+f),{width:h,height:p,padding:s}},d=function(e){var t=e.anchor,n=e.translateX,r=e.translateY,o=e.containerWidth,i=e.containerHeight,a=e.width,u=e.height,l=n,c=r;switch(t){case"top":l+=(o-a)/2;break;case"top-right":l+=o-a;break;case"right":l+=o-a,c+=(i-u)/2;break;case"bottom-right":l+=o-a,c+=i-u;break;case"bottom":l+=(o-a)/2,c+=i-u;break;case"bottom-left":c+=i-u;break;case"left":c+=(i-u)/2;break;case"center":l+=(o-a)/2,c+=(i-u)/2}return{x:l,y:c}},f=function(e){var t,n,r,o,i,a,u=e.direction,l=e.justify,c=e.symbolSize,s=e.symbolSpacing,d=e.width,f=e.height;switch(u){case"left-to-right":t=0,n=(f-c)/2,o=f/2,a="central",!0===l?(r=d,i="end"):(r=c+s,i="start");break;case"right-to-left":t=d-c,n=(f-c)/2,o=f/2,a="central",!0===l?(r=0,i="start"):(r=d-c-s,i="end");break;case"top-to-bottom":t=(d-c)/2,n=0,r=d/2,i="middle",!0===l?(o=f,a="alphabetic"):(o=c+s,a="text-before-edge");break;case"bottom-to-top":t=(d-c)/2,n=f-c,r=d/2,i="middle",!0===l?(o=0,a="text-before-edge"):(o=f-c-s,a="alphabetic")}return{symbolX:t,symbolY:n,labelX:r,labelY:o,labelAnchor:i,labelAlignment:a}},h={circle:function(e){var t=e.x,n=e.y,o=e.size,i=e.fill,a=e.opacity,u=void 0===a?1:a,l=e.borderWidth,c=void 0===l?0:l,s=e.borderColor;return(0,r.jsx)("circle",{r:o/2,cx:t+o/2,cy:n+o/2,fill:i,opacity:u,strokeWidth:c,stroke:void 0===s?"transparent":s,style:{pointerEvents:"none"}})},diamond:function(e){var t=e.x,n=e.y,o=e.size,i=e.fill,a=e.opacity,u=void 0===a?1:a,l=e.borderWidth,c=void 0===l?0:l,s=e.borderColor;return(0,r.jsx)("g",{transform:"translate("+t+","+n+")",children:(0,r.jsx)("path",{d:"\n                    M"+o/2+" 0\n                    L"+.8*o+" "+o/2+"\n                    L"+o/2+" "+o+"\n                    L"+.2*o+" "+o/2+"\n                    L"+o/2+" 0\n                ",fill:i,opacity:u,strokeWidth:c,stroke:void 0===s?"transparent":s,style:{pointerEvents:"none"}})})},square:function(e){var t=e.x,n=e.y,o=e.size,i=e.fill,a=e.opacity,u=void 0===a?1:a,l=e.borderWidth,c=void 0===l?0:l,s=e.borderColor;return(0,r.jsx)("rect",{x:t,y:n,fill:i,opacity:u,strokeWidth:c,stroke:void 0===s?"transparent":s,width:o,height:o,style:{pointerEvents:"none"}})},triangle:function(e){var t=e.x,n=e.y,o=e.size,i=e.fill,a=e.opacity,u=void 0===a?1:a,l=e.borderWidth,c=void 0===l?0:l,s=e.borderColor;return(0,r.jsx)("g",{transform:"translate("+t+","+n+")",children:(0,r.jsx)("path",{d:"\n                M"+o/2+" 0\n                L"+o+" "+o+"\n                L0 "+o+"\n                L"+o/2+" 0\n            ",fill:i,opacity:u,strokeWidth:c,stroke:void 0===s?"transparent":s,style:{pointerEvents:"none"}})})}},p=function(e){var t,n,a,u,c,s,d,p,m,g,y,v=e.x,b=e.y,k=e.width,x=e.height,M=e.data,C=e.direction,S=void 0===C?"left-to-right":C,w=e.justify,B=void 0!==w&&w,T=e.textColor,j=e.background,O=void 0===j?"transparent":j,L=e.opacity,D=void 0===L?1:L,A=e.symbolShape,W=void 0===A?"square":A,E=e.symbolSize,P=void 0===E?16:E,Y=e.symbolSpacing,V=void 0===Y?8:Y,R=e.symbolBorderWidth,H=void 0===R?0:R,z=e.symbolBorderColor,q=void 0===z?"transparent":z,F=e.onClick,I=e.onMouseEnter,G=e.onMouseLeave,N=e.toggleSerie,K=e.effects,Z=(0,o.useState)({}),J=Z[0],U=Z[1],X=(0,i.Fg)(),_=(0,o.useCallback)((function(e){if(K){var t=K.filter((function(e){return"hover"===e.on})).reduce((function(e,t){return l({},e,t.style)}),{});U(t)}null==I||I(M,e)}),[I,M,K]),Q=(0,o.useCallback)((function(e){if(K){var t=K.filter((function(e){return"hover"!==e.on})).reduce((function(e,t){return l({},e,t.style)}),{});U(t)}null==G||G(M,e)}),[G,M,K]),$=f({direction:S,justify:B,symbolSize:null!=(t=J.symbolSize)?t:P,symbolSpacing:V,width:k,height:x}),ee=$.symbolX,te=$.symbolY,ne=$.labelX,re=$.labelY,oe=$.labelAnchor,ie=$.labelAlignment,ae=[F,I,G,N].some((function(e){return void 0!==e})),ue="function"==typeof W?W:h[W];return(0,r.jsxs)("g",{transform:"translate("+v+","+b+")",style:{opacity:null!=(n=J.itemOpacity)?n:D},children:[(0,r.jsx)("rect",{width:k,height:x,fill:null!=(a=J.itemBackground)?a:O,style:{cursor:ae?"pointer":"auto"},onClick:function(e){null==F||F(M,e),null==N||N(M.id)},onMouseEnter:_,onMouseLeave:Q}),o.createElement(ue,l({id:M.id,x:ee,y:te,size:null!=(u=J.symbolSize)?u:P,fill:null!=(c=null!=(s=M.fill)?s:M.color)?c:"black",borderWidth:null!=(d=J.symbolBorderWidth)?d:H,borderColor:null!=(p=J.symbolBorderColor)?p:q},M.hidden?X.legends.hidden.symbol:void 0)),(0,r.jsx)("text",{textAnchor:oe,style:l({},X.legends.text,{fill:null!=(m=null!=(g=null!=(y=J.itemTextColor)?y:T)?g:X.legends.text.fill)?m:"black",dominantBaseline:ie,pointerEvents:"none",userSelect:"none"},M.hidden?X.legends.hidden.text:void 0),x:ne,y:re,children:M.label})]})},m=function(e){var t=e.data,n=e.x,o=e.y,i=e.direction,a=e.padding,u=void 0===a?0:a,l=e.justify,c=e.effects,d=e.itemWidth,f=e.itemHeight,h=e.itemDirection,m=void 0===h?"left-to-right":h,g=e.itemsSpacing,y=void 0===g?0:g,v=e.itemTextColor,b=e.itemBackground,k=void 0===b?"transparent":b,x=e.itemOpacity,M=void 0===x?1:x,C=e.symbolShape,S=e.symbolSize,w=e.symbolSpacing,B=e.symbolBorderWidth,T=e.symbolBorderColor,j=e.onClick,O=e.onMouseEnter,L=e.onMouseLeave,D=e.toggleSerie,A=s({itemCount:t.length,itemWidth:d,itemHeight:f,itemsSpacing:y,direction:i,padding:u}).padding,W="row"===i?d+y:0,E="column"===i?f+y:0;return(0,r.jsx)("g",{transform:"translate("+n+","+o+")",children:t.map((function(e,t){return(0,r.jsx)(p,{data:e,x:t*W+A.left,y:t*E+A.top,width:d,height:f,direction:m,justify:l,effects:c,textColor:v,background:k,opacity:M,symbolShape:C,symbolSize:S,symbolSpacing:w,symbolBorderWidth:B,symbolBorderColor:T,onClick:j,onMouseEnter:O,onMouseLeave:L,toggleSerie:D},t)}))})},g=function(e){var t=e.data,n=e.containerWidth,o=e.containerHeight,i=e.translateX,a=void 0===i?0:i,u=e.translateY,l=void 0===u?0:u,c=e.anchor,f=e.direction,h=e.padding,p=void 0===h?0:h,g=e.justify,y=e.itemsSpacing,v=void 0===y?0:y,b=e.itemWidth,k=e.itemHeight,x=e.itemDirection,M=e.itemTextColor,C=e.itemBackground,S=e.itemOpacity,w=e.symbolShape,B=e.symbolSize,T=e.symbolSpacing,j=e.symbolBorderWidth,O=e.symbolBorderColor,L=e.onClick,D=e.onMouseEnter,A=e.onMouseLeave,W=e.toggleSerie,E=e.effects,P=s({itemCount:t.length,itemsSpacing:v,itemWidth:b,itemHeight:k,direction:f,padding:p}),Y=P.width,V=P.height,R=d({anchor:c,translateX:a,translateY:l,containerWidth:n,containerHeight:o,width:Y,height:V}),H=R.x,z=R.y;return(0,r.jsx)(m,{data:t,x:H,y:z,direction:f,padding:p,justify:g,effects:E,itemsSpacing:v,itemWidth:b,itemHeight:k,itemDirection:x,itemTextColor:M,itemBackground:C,itemOpacity:S,symbolShape:w,symbolSize:B,symbolSpacing:T,symbolBorderWidth:j,symbolBorderColor:O,onClick:L,onMouseEnter:D,onMouseLeave:A,toggleSerie:"boolean"==typeof W?void 0:W})},y={start:"left",middle:"center",end:"right"},v=function(e,t){var n=t.data,r=t.containerWidth,o=t.containerHeight,i=t.translateX,a=void 0===i?0:i,u=t.translateY,l=void 0===u?0:u,c=t.anchor,h=t.direction,p=t.padding,m=void 0===p?0:p,g=t.justify,v=void 0!==g&&g,b=t.itemsSpacing,k=void 0===b?0:b,x=t.itemWidth,M=t.itemHeight,C=t.itemDirection,S=void 0===C?"left-to-right":C,w=t.itemTextColor,B=t.symbolSize,T=void 0===B?16:B,j=t.symbolSpacing,O=void 0===j?8:j,L=t.theme,D=s({itemCount:n.length,itemWidth:x,itemHeight:M,itemsSpacing:k,direction:h,padding:m}),A=D.width,W=D.height,E=D.padding,P=d({anchor:c,translateX:a,translateY:l,containerWidth:r,containerHeight:o,width:A,height:W}),Y=P.x,V=P.y,R="row"===h?x+k:0,H="column"===h?M+k:0;e.save(),e.translate(Y,V),e.font=L.legends.text.fontSize+"px "+(L.legends.text.fontFamily||"sans-serif"),n.forEach((function(t,n){var r,o,i=n*R+E.left,a=n*H+E.top,u=f({direction:S,justify:v,symbolSize:T,symbolSpacing:O,width:x,height:M}),l=u.symbolX,c=u.symbolY,s=u.labelX,d=u.labelY,h=u.labelAnchor,p=u.labelAlignment;e.fillStyle=null!=(r=t.color)?r:"black",e.fillRect(i+l,a+c,T,T),e.textAlign=y[h],"central"===p&&(e.textBaseline="middle"),e.fillStyle=null!=(o=null!=w?w:L.legends.text.fill)?o:"black",e.fillText(String(t.label),i+s,a+d)})),e.restore()},b=function(e){var t=e.scale,n=e.domain,r=e.reverse,i=void 0!==r&&r,a=e.valueFormat,u=void 0===a?function(e){return e}:a,l=e.separator,c=void 0===l?" - ":l;return(0,o.useMemo)((function(){var e=(null!=n?n:t.range()).map((function(e,n){var r=t.invertExtent(e),o=r[0],i=r[1];return{id:e,index:n,extent:[o,i],label:""+u(o)+c+u(i),value:t(o),color:e}}));return!0===i&&e.reverse(),e}),[n,t,i])},k={data:u().arrayOf(u().object),anchor:u().oneOf(["top","top-right","right","bottom-right","bottom","bottom-left","left","top-left","center"]).isRequired,translateX:u().number,translateY:u().number,direction:u().oneOf(["row","column"]).isRequired,itemsSpacing:u().number,itemWidth:u().number.isRequired,itemHeight:u().number.isRequired,itemDirection:u().oneOf(["left-to-right","right-to-left","top-to-bottom","bottom-to-top"]),itemTextColor:u().string,itemBackground:u().string,itemOpacity:u().number,symbolShape:u().oneOfType([u().oneOf(["circle","diamond","square","triangle"]),u().func]),symbolSize:u().number,symbolSpacing:u().number,symbolBorderWidth:u().number,symbolBorderColor:u().string,onClick:u().func,onMouseEnter:u().func,onMouseLeave:u().func,effects:u().arrayOf(u().shape({on:u().oneOfType([u().oneOf(["hover"])]).isRequired,style:u().shape({itemTextColor:u().string,itemBackground:u().string,itemOpacity:u().number,symbolSize:u().number,symbolBorderWidth:u().number,symbolBorderColor:u().string}).isRequired}))}},69148:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});n(27378);var r=n(92345),o=n(38681),i=n(22543),a=n(46361),u=n(91542),l=n(62370),c=n(24246),s=u.default.div.withConfig({displayName:"mapper__TooltipWrapper",componentId:"sc-4yhhf1-0"})(["display:grid;background:#333;padding:10px;border-radius:4px;grid-template-columns:100px 1fr;grid-column-gap:12px;"]),d=u.default.span.withConfig({displayName:"mapper__TooltipKey",componentId:"sc-4yhhf1-1"})(["font-weight:600;"]),f=function(e){return(0,c.jsxs)(s,{style:{color:e.color},children:[(0,c.jsx)(d,{children:"day"}),(0,c.jsx)("span",{children:e.day}),(0,c.jsx)(d,{children:"value"}),(0,c.jsx)("span",{children:e.value}),(0,c.jsx)(d,{children:"coordinates.x"}),(0,c.jsx)("span",{children:e.coordinates.x}),(0,c.jsx)(d,{children:"coordinates.y"}),(0,c.jsx)("span",{children:e.coordinates.y}),(0,c.jsx)(d,{children:"height"}),(0,c.jsx)("span",{children:e.height}),(0,c.jsx)(d,{children:"width"}),(0,c.jsx)("span",{children:e.width})]})},h=(0,l.h8)({tooltip:function(e,t){if(t["custom tooltip example"])return f}},{exclude:["custom tooltip example"]}),p=n(80169),m=n(3759),g=["svg"],y=[{key:"data",group:"Base",help:"Chart data.",flavors:g,description:"\n            Chart data, which must conform to this structure:\n            ```\n            Array<{\n                day:   string, // format must be YYYY-MM-DD\n                value: number\n            }>\n            ```\n            You can also add arbitrary data to this structure\n            to be used in tooltips or event handlers.\n        ",type:"object[]",required:!0},{key:"from",group:"Base",flavors:g,help:"start date",type:"string | Date",required:!1},{key:"to",group:"Base",help:"end date",flavors:g,type:"string | Date",required:!1}].concat((0,m.nk)(g),[{key:"direction",help:"defines calendar layout direction.",flavors:g,type:"string",required:!1,defaultValue:r.PT.direction,group:"Base",control:{type:"radio",choices:[{label:"horizontal",value:"horizontal"},{label:"vertical",value:"vertical"}]}},{key:"align",help:"defines how calendar should be aligned inside chart container.",flavors:g,type:"string",required:!1,defaultValue:r.PT.align,group:"Base",control:{type:"boxAnchor"}},{key:"minValue",help:"Minimum value.",flavors:g,description:"\n            Minimum value. If 'auto', will pick the lowest value\n            in the provided data set.\n            Should be overriden if your data set does not contain\n            desired lower bound value.\n        ",required:!1,defaultValue:r.PT.minValue,type:"number | 'auto'",group:"Base",control:{type:"switchableRange",disabledValue:"auto",defaultValue:0,min:-300,max:300}},{key:"maxValue",help:"Maximum value.",flavors:g,description:"\n            Maximum value. If 'auto', will pick the highest value\n            in the provided data set.\n            Should be overriden if your data set does not contain\n            desired higher bound value.\n        ",required:!1,defaultValue:r.PT.maxValue,type:"number | 'auto'",group:"Base",control:{type:"switchableRange",disabledValue:"auto",defaultValue:100,min:0,max:600}},(0,p.JR)(["svg"]),{key:"colors",group:"Style",flavors:g,help:"Cell colors.",description:"\n            An array of colors to be used in conjunction with\n            `domain` to compute days' color.\n            It applies to days having a value defined, otherwise,\n            `emptyColor` will be used.\n        ",type:"string[]",required:!1,defaultValue:r.PT.colors},{key:"emptyColor",help:"color to use to fill days without available value.",flavors:g,type:"string",required:!1,defaultValue:r.PT.emptyColor,control:{type:"colorPicker"},group:"Style"},{key:"monthLegend",help:"can be used to customize months label, returns abbreviated month name (english) by default. This can be used to use a different language",flavors:g,type:"(year: number, month: number, date: Date) => string | number",required:!1,group:"Months"},{key:"monthLegendPosition",help:"defines month legends position.",flavors:g,type:"'before' | 'after'",required:!1,defaultValue:r.PT.monthLegendPosition,group:"Months",control:{type:"radio",choices:[{label:"before",value:"before"},{label:"after",value:"after"}]}},{key:"monthLegendOffset",help:"define offset from month edge to its label.",flavors:g,type:"number",required:!1,defaultValue:r.PT.monthLegendOffset,group:"Months",control:{type:"range",unit:"px",min:0,max:36}},{key:"weekdayLegendOffset",help:"define offset from weekday edge to its label.",flavors:g,type:"number",required:!1,defaultValue:r.PT.weekdayLegendOffset,group:"Weekday",control:{type:"range",unit:"px",min:0,max:100}},{key:"weekdayTicks",help:"define weekday tickmarks to show",flavors:g,type:"(0 | 1 | 2 | 3 | 4 | 5 | 6)[]",required:!1,defaultValue:[1,3,5],group:"Weekday",description:"\n            Array of weekday tickmarks to display:\n\n            0 = Sunday\n\n            1 = Monday\n\n            2 = Tuesday\n\n            3 = Wednesday\n\n            4 = Thursday\n\n            5 = Friday\n\n            6 = Saturday\n\n        "},{key:"square",help:"force day cell into square shape",flavors:g,type:"boolean",required:!1,defaultValue:r.PT.square,control:{type:"switch"},group:"Days"},{key:"dayRadius",help:"define border radius of each day cell.",flavors:g,type:"number",required:!1,defaultValue:r.PT.dayRadius,group:"Days",control:{type:"range",unit:"px",min:0,max:20}},{key:"daySpacing",help:"define spacing between each day cell.",flavors:g,type:"number",required:!1,defaultValue:r.PT.daySpacing,group:"Days",control:{type:"range",unit:"px",min:0,max:20}},{key:"dayBorderWidth",help:"width of days border.",flavors:g,type:"number",required:!1,defaultValue:r.PT.dayBorderWidth,control:{type:"lineWidth"},group:"Days"},{key:"dayBorderColor",help:"color to use for days border.",flavors:g,type:"string",required:!1,defaultValue:r.PT.dayBorderColor,control:{type:"colorPicker"},group:"Days"},(0,m.y1)({flavors:["svg"],defaultValue:r.PT.isInteractive}),{key:"onClick",group:"Interactivity",flavors:g,help:"onClick handler, it receives clicked day data and mouse event.",type:"(day, event) => void",required:!1},{key:"tooltip",group:"Interactivity",flavors:g,type:"Function",required:!1,help:"Custom tooltip component.",description:"\n            A function allowing complete tooltip customisation, it must return a valid HTML\n            element and will receive the following data:\n            ```\n            {\n                day:     string,\n                date:    {Date},\n                value:   number,\n                color:   string,\n                coordinates: {\n                    x: number,\n                    y: number,\n                },\n                height:  number\n                width:   number\n            }\n            ```\n            You can also customize the tooltip style\n            using the `theme.tooltip` object.\n        "},{key:"custom tooltip example",help:"Showcase custom tooltip.",flavors:g,type:"boolean",required:!1,control:{type:"switch"},group:"Interactivity"},{key:"legends",flavors:["svg"],type:"LegendProps[]",help:"Optional chart's legends.",group:"Legends",required:!1,control:{type:"array",props:(0,p.y0)(["svg"]),shouldCreate:!0,addLabel:"add legend",shouldRemove:!0,getItemTitle:function(e,t){return"legend["+e+"]: "+t.anchor+", "+t.direction},defaults:{anchor:"bottom-right",direction:"row",justify:!1,itemCount:4,itemWidth:42,itemHeight:36,itemsSpacing:14,itemDirection:"right-to-left",translateX:-85,translateY:-240,symbolSize:20,onClick:function(e){console.log(JSON.stringify(e,null,"    "))}}}}]),v=(0,p.R2)(y);function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}var k=function(e){},x=new Date(2018,3,1),M=new Date(2018,7,12),C=function(){return(0,o.x$)(x,M)},S={from:"2018-04-01",to:"2018-08-12",align:"center",emptyColor:"#eeeeee",colors:["#61cdbb","#97e3d5","#e8c1a0","#f47560"],minValue:0,maxValue:"auto",margin:{top:40,right:40,bottom:100,left:40},direction:"horizontal",monthLegendPosition:"before",monthLegendOffset:10,weekdayLegendOffset:75,square:!0,dayRadius:0,daySpacing:0,dayBorderWidth:2,dayBorderColor:"#ffffff",isInteractive:!0,"custom tooltip example":!1,tooltip:null,legends:[{anchor:"bottom-right",direction:"row",justify:!1,itemCount:4,itemWidth:42,itemHeight:36,itemsSpacing:14,itemDirection:"right-to-left",translateX:-60,translateY:-60,symbolSize:20}]},w=function(){return(0,c.jsx)(i.T,{name:"TimeRange",meta:a.t,icon:"time-range",flavors:a.K,currentFlavor:"svg",properties:v,initialProperties:S,defaultProperties:r.PT,propertiesMapper:h,codePropertiesMapper:function(e){return b({},e,{tooltip:e.tooltip?k:void 0})},generateData:C,children:function(e,t,n,o){return(0,c.jsx)(r.It,b({data:t},e,{theme:n,onClick:function(e){o({type:"click",label:"[day] "+e.day+": "+e.value,color:e.color,data:e})}}))}})}},91573:function(e,t,n){var r=n(37561),o=n(74305);e.exports=function(e){return o(r(e))}},72123:function(e,t,n){var r=n(99736),o=n(92360);e.exports=function(e){return o(e)&&"[object Date]"==r(e)}},76418:function(e){var t=Math.floor,n=Math.random;e.exports=function(e,r){return e+t(n()*(r-e+1))}},16326:function(e,t,n){var r=n(74305),o=n(58185);e.exports=function(e){return r(o(e))}},42231:function(e,t,n){var r=n(66070);e.exports=function(e,t){return r(t,(function(t){return e[t]}))}},74305:function(e,t,n){var r=n(76418);e.exports=function(e,t){var n=-1,o=e.length,i=o-1;for(t=void 0===t?o:t;++n<t;){var a=r(n,i),u=e[a];e[a]=e[n],e[n]=u}return e.length=t,e}},96560:function(e,t,n){var r=n(72123),o=n(39334),i=n(18125),a=i&&i.isDate,u=a?o(a):r;e.exports=u},91311:function(e,t,n){var r=n(76418),o=n(57535),i=n(94919),a=parseFloat,u=Math.min,l=Math.random;e.exports=function(e,t,n){if(n&&"boolean"!=typeof n&&o(e,t,n)&&(t=n=void 0),void 0===n&&("boolean"==typeof t?(n=t,t=void 0):"boolean"==typeof e&&(n=e,e=void 0)),void 0===e&&void 0===t?(e=0,t=1):(e=i(e),void 0===t?(t=e,e=0):t=i(t)),e>t){var c=e;e=t,t=c}if(n||e%1||t%1){var s=l();return u(e+s*(t-e+a("1e-"+((s+"").length-1))),t)}return r(e,t)}},19193:function(e,t,n){var r=n(91573),o=n(16326),i=n(19785);e.exports=function(e){return(i(e)?r:o)(e)}},58185:function(e,t,n){var r=n(42231),o=n(50098);e.exports=function(e){return null==e?[]:r(e,o(e))}}}]);
//# sourceMappingURL=component---src-pages-time-range-index-js-ed4b32eefa834b5c2e39.js.map