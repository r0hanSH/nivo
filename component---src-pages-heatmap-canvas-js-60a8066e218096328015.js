(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[6981],{18957:function(n,e,t){"use strict";t.d(e,{a:function(){return a}});var r=t(61904),o=t(15050),i=(0,r.Z)((function(n){n.setHours(0,0,0,0)}),(function(n,e){n.setDate(n.getDate()+e)}),(function(n,e){return(e-n-(e.getTimezoneOffset()-n.getTimezoneOffset())*o.yB)/o.UD}),(function(n){return n.getDate()-1}));e.Z=i;var a=i.range},38681:function(n,e,t){"use strict";t.d(e,{j2:function(){return h},wQ:function(){return m},aw:function(){return I},x$:function(){return D},ak:function(){return P},UE:function(){return w},$j:function(){return g},BO:function(){return y},Tz:function(){return E},O$:function(){return b},B7:function(){return N},gq:function(){return x},zn:function(){return F},FQ:function(){return G}});var r=t(4215),o=t.n(r),i=t(91311),a=t.n(i),u=t(19193),c=t.n(u),d=t(18957),l=t(6164),s=function(){return"hsl("+Math.round(360*Math.random())+", 70%, 50%)"},f=["AD","AE","AF","AG","AI","AL","AM","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BQ","BR","BS","BT","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CU","CV","CW","CX","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","EH","ER","ES","ET","FI","FJ","FK","FM","FO","FR","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SV","SX","SY","SZ","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","YE","YT","ZA","ZM","ZW"],p=["John","Raoul","Jane","Marcel","Ibrahim","Junko","Lyu","André","Maki","Véronique","Thibeau","Josiane","Raphaël","Mathéo","Margot","Hugo","Christian","Louis","Ella","Alton","Jimmy","Guillaume","Sébastien","Alfred","Bon","Solange","Kendrick","Jared","Satoko","Tomoko","Line","Delphine","Leonard","Alphonse","Lisa","Bart","Benjamin","Homer","Jack"],v=["php","make","javascript","go","erlang","elixir","lisp","haskell","python","ruby","hack","scala","java","rust","c","css","sass","stylus"],h=(Object.freeze({__proto__:null,countryCodes:f,names:p,programmingLanguages:v}),function(n,e,t){var r=void 0===t?{}:t,i=r.title,u=r.subtitle,c=r.rangeCount,d=void 0===c?5:c,l=r.measureCount,s=void 0===l?1:l,f=r.markerCount,p=void 0===f?1:f,v=r.float,h=void 0!==v&&v;return{id:n,title:i,subtitle:u,ranges:o()(d-1).reduce((function(n){var t=e-n[0];return[a()(t,h)].concat(n)}),[e]),measures:o()(s).reduce((function(n){return 0===n.length?[a()(e,h)]:[a()(n[0],h)].concat(n)}),[]),markers:o()(p).map((function(){return.6*e+a()(.4*e)}))}}),m=function(n){var e=void 0===n?{}:n,t=e.keys,r=void 0===t?p:t,i=e.size,u=void 0===i?7:i,c=e.minValue,d=void 0===c?0:c,l=e.maxValue,s=void 0===l?2e3:l,f=Math.min(r.length,u),v=r.slice(0,f);return{matrix:o()(f).map((function(){return o()(f).map((function(){return Math.random()<.66?a()(d,s/4):a()(d,s)}))})),keys:v}},g=function(n){var e=void 0===n?{}:n,t=e.rootNodeRadius,r=void 0===t?12:t,o=e.minMidNodes,i=void 0===o?6:o,u=e.maxMidNodes,c=void 0===u?16:u,d=e.midNodeRadius,l=void 0===d?8:d,s=e.minLeaves,f=void 0===s?4:s,p=e.maxLeaves,v=void 0===p?16:p,h=e.leafRadius,m=void 0===h?4:h,g={id:"0",radius:r,depth:0,color:"rgb(244, 117, 96)"},M=Array.from({length:a()(i,c)},(function(n,e){return{id:""+(e+1),radius:l,depth:1,color:"rgb(97, 205, 187)"}})),y=[],k=[];return M.forEach((function(n){y.push({source:"0",target:n.id,distance:50}),M.forEach((function(e){Math.random()<.04&&y.push({source:n.id,target:e.id,distance:70})})),Array.from({length:a()(f,v)},(function(e,t){return k.push({id:n.id+"."+t,radius:m,depth:2,color:"rgb(232, 193, 160)"}),y.push({source:n.id,target:n.id+"."+t,distance:30}),null}))})),M.push(g),{nodes:M=M.concat(k),links:y}};function M(){return M=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},M.apply(this,arguments)}var y=function(n){var e=void 0===n?{}:n,t=e.size,r=void 0===t?26:t,i=e.keys,u=void 0===i?[{key:"temp",random:[-10,40]},{key:"cost",random:[200,4e5]},{key:"color",shuffle:["red","yellow","green"]},{key:"target",shuffle:["A","B","C","D","E"]},{key:"volume",random:[.2,7.6]}]:i;return o()(r).map((function(){return u.reduce((function(n,e){var t,r;return void 0!==e.random?r=a().apply(void 0,e.random):void 0!==e.shuffle&&(r=c()(e.shuffle)[0]),M({},n,((t={})[e.key]=r,t))}),{})}))},k=p.map((function(n){return{id:n}})),C=function n(e,t,r){var o=t.filter((function(n){return n.source===e})).map((function(n){var t=n.target;if(t===e)throw new Error("[sankey] a node cannot be linked on itself:\n  link: "+e+" —> "+e);if(null!=r&&r.includes(t))throw new Error("[sankey] found cyclic dependency:\n  link: "+r.join(" —> ")+" —> "+t);return t}));return o.reduce((function(o,i){return o.concat(n(i,t,r?[].concat(r,[i]):[e,i]))}),o)},S=function(n){return n.reduce((function(e,t){return e[t.source]||(e[t.source]=C(t.source,n)),e}),{})},b=function(n){var e=void 0===n?{}:n,t=e.nodeCount,r=e.maxIterations,i=void 0===r?3:r,u=k.slice(0,t).map((function(n){return Object.assign({},n,{nodeColor:s()})})),d=[];return c()(u).forEach((function(n){var e=n.id;o()(a()(1,i)).forEach((function(){var n=S(d),t=c()(u.filter((function(n){return n.id!==e})).map((function(n){return n.id})))[0];n[t]&&n[t].includes(e)||n[e]&&n[e].includes(t)||d.push({source:e,target:t,value:a()(5,200)})}))})),{nodes:u,links:d}},B=function(){return a()(0,500)},A=function(){return a()(4,20)},T=function(){return a()(3,17)},x=function(n,e){var t=e.min,r=void 0===t?60:t,i=e.max,u=void 0===i?100:i,c=e.categoryCount,d=void 0===c?0:c;return{groups:n,data:n.reduce((function(n,e,t){return[].concat(n,o()(a()(r,u)).map((function(){return B()})).map((function(n,r){var i={id:t+"."+r,group:e,price:n,volume:A()};return d>0&&(i.categories=o()(d).map(T)),i})))}),[])}},G=function(n){return{groups:n.groups,data:n.data.map((function(e){var t=M({},e,{group:c()(n.groups)[0],price:B(),volume:A()});return void 0!==e.categories&&(t.categories=o()(3).map(T)),t}))}},O=s,E=function(n,e){void 0===n&&(n=!0),void 0===e&&(e=-1);var t=v;return n&&(t=c()(t)),e<1&&(e=1+Math.round(Math.random()*(v.length-1))),t.slice(0,e).map((function(n){return{label:n,value:Math.round(600*Math.random()),color:O()}}))},R=function(n){var e=[];return function(){var t;do{t=n.apply(void 0,arguments)}while(e.includes(t));return e.push(t),t}},L=function(){return c()(f)[0]},P=function(n){void 0===n&&(n=16);var e=["whisky","rhum","gin","vodka","cognac"],t=R(L),r=e.map((function(n){return{id:n,color:O(),data:[]}}));return o()(n).forEach((function(){var n=t();e.forEach((function(e){var t;null==(t=r.find((function(n){return n.id===e})))||t.data.push({color:O(),x:n,y:a()(0,60)})}))})),r},N=function(n,e){return n.map((function(n){return{id:n,color:O(),data:e.map((function(n){return{x:n,y:Math.round(300*Math.random())}}))}}))},D=function(n,e,t){void 0===t&&(t=.9);var r=function(n,e){var t=(0,d.a)(n,e),r=(0,l.i$)("%Y-%m-%d");return t.map((function(n){return{value:Math.round(400*Math.random()),day:r(n)}}))}(n,e),o=Math.round(r.length*(.4*t))+Math.round(Math.random()*(r.length*(.6*t)));return c()(r).slice(0,o)},I=function(n,e){var t=void 0===e?{}:e,r=t.size,o=void 0===r?12:r,i=t.min,u=void 0===i?0:i,c=t.max,d=void 0===c?200:c,l=t.withColors,s=void 0===l||l;return f.slice(0,o).map((function(e){var t={country:e};return n.forEach((function(n){t[n]=a()(u,d),!0===s&&(t[n+"Color"]=O())})),t}))},K=[["viz",[["stack",[["cchart"],["xAxis"],["yAxis"],["layers"]]],["ppie",[["chart",[["pie",[["outline"],["slices"],["bbox"]]],["donut"],["gauge"]]],["legends"]]]]],["colors",[["rgb"],["hsl"]]],["utils",[["randomize"],["resetClock"],["noop"],["tick"],["forceGC"],["stackTrace"],["dbg"]]],["generators",[["address"],["city"],["animal"],["movie"],["user"]]],["set",[["clone"],["intersect"],["merge"],["reverse"],["toArray"],["toObject"],["fromCSV"],["slice"],["append"],["prepend"],["shuffle"],["pick"],["plouc"]]],["text",[["trim"],["slugify"],["snakeCase"],["camelCase"],["repeat"],["padLeft"],["padRight"],["sanitize"],["ploucify"]]],["misc",[["greetings",[["hey"],["HOWDY"],["aloha"],["AHOY"]]],["other"],["path",[["pathA"],["pathB",[["pathB1"],["pathB2"],["pathB3"],["pathB4"]]],["pathC",[["pathC1"],["pathC2"],["pathC3"],["pathC4"],["pathC5"],["pathC6"],["pathC7"],["pathC8"],["pathC9"]]]]]]]],w=function n(e,t,r){var i;void 0===e&&(e="nivo"),void 0===r&&(r=K),(t=t||r.length)>r.length&&(t=r.length);var a={name:e,color:O()};return(null==(i=r)?void 0:i.length)>0?a.children=o()(t).map((function(e,t){var o,i=r[t];return n(i[0],null,null!=(o=i[1])?o:[])})):a.loc=Math.round(2e5*Math.random()),a},H=["chardonay","carmenere","syrah"],V=["fruity","bitter","heavy","strong","sunny"],F=function(n){var e=void 0===n?{}:n,t=e.randMin,r=void 0===t?20:t,o=e.randMax,i=void 0===o?120:o;return{data:V.map((function(n){var e={taste:n};return H.forEach((function(n){e[n]=a()(r,i)})),e})),keys:H}}},5986:function(n,e,t){"use strict";t.r(e);t(27378);var r=t(64548),o=t(28338),i=t.n(o),a=t(22543),u=t(29926),c=t(57074),d=t(32204),l=t(14691),s=t(25414),f=t(24246);function p(){return p=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},p.apply(this,arguments)}var v={indexBy:"country",margin:{top:100,right:60,bottom:100,left:60},pixelRatio:"undefined"!=typeof window&&window.devicePixelRatio?window.devicePixelRatio:1,minValue:"auto",maxValue:"auto",forceSquare:!1,sizeVariation:0,padding:0,colors:"BrBG",axisTop:{enable:!0,orient:"top",tickSize:5,tickPadding:5,tickRotation:-90,legend:"",legendOffset:36},axisRight:{enable:!0,orient:"right",tickSize:5,tickPadding:5,tickRotation:0,legend:"country",legendPosition:"middle",legendOffset:40},axisBottom:{enable:!0,orient:"bottom",tickSize:5,tickPadding:5,tickRotation:-90,legend:"",legendPosition:"middle",legendOffset:36},axisLeft:{enable:!0,orient:"left",tickSize:5,tickPadding:5,tickRotation:0,legend:"country",legendPosition:"middle",legendOffset:-40},enableGridX:!1,enableGridY:!0,cellShape:"rect",cellOpacity:1,cellBorderWidth:0,cellBorderColor:{from:"color",modifiers:[["darker",.4]]},enableLabels:!1,labelTextColor:{from:"color",modifiers:[["darker",1.4]]},animate:!0,motionStiffness:120,motionDamping:9,isInteractive:!0,hoverTarget:"rowColumn",cellHoverOpacity:1,cellHoverOthersOpacity:.5};e.default=function(){var n=(0,s.useStaticQuery)("1772871452").image.childImageSharp.gatsbyImageData;return(0,f.jsx)(a.T,{name:"HeatMapCanvas",meta:u.M2,icon:"heatmap",flavors:u.Kk,currentFlavor:"canvas",properties:d.X,initialProperties:v,propertiesMapper:c.Z,codePropertiesMapper:function(n,e){return p({keys:e.keys},n,{cellShape:i()(n.cellShape)?"Custom(props) => (…)":n.cellShape})},generateData:l.g,getDataSize:function(n){return n.data.length*n.keys.length},getTabData:function(n){return n.data},image:n,children:function(n,e,t,o){return(0,f.jsx)(r.Tu,p({data:e.data,keys:e.keys},n,{theme:t,onClick:function(n){o({type:"click",label:"[cell] "+n.yKey+"."+n.xKey+": "+n.value,color:n.color,data:n})}}))}})}},91573:function(n,e,t){var r=t(37561),o=t(74305);n.exports=function(n){return o(r(n))}},76418:function(n){var e=Math.floor,t=Math.random;n.exports=function(n,r){return n+e(t()*(r-n+1))}},16326:function(n,e,t){var r=t(74305),o=t(58185);n.exports=function(n){return r(o(n))}},42231:function(n,e,t){var r=t(66070);n.exports=function(n,e){return r(e,(function(e){return n[e]}))}},74305:function(n,e,t){var r=t(76418);n.exports=function(n,e){var t=-1,o=n.length,i=o-1;for(e=void 0===e?o:e;++t<e;){var a=r(t,i),u=n[a];n[a]=n[t],n[t]=u}return n.length=e,n}},91311:function(n,e,t){var r=t(76418),o=t(57535),i=t(94919),a=parseFloat,u=Math.min,c=Math.random;n.exports=function(n,e,t){if(t&&"boolean"!=typeof t&&o(n,e,t)&&(e=t=void 0),void 0===t&&("boolean"==typeof e?(t=e,e=void 0):"boolean"==typeof n&&(t=n,n=void 0)),void 0===n&&void 0===e?(n=0,e=1):(n=i(n),void 0===e?(e=n,n=0):e=i(e)),n>e){var d=n;n=e,e=d}if(t||n%1||e%1){var l=c();return u(n+l*(e-n+a("1e-"+((l+"").length-1))),e)}return r(n,e)}},19193:function(n,e,t){var r=t(91573),o=t(16326),i=t(19785);n.exports=function(n){return(i(n)?r:o)(n)}},58185:function(n,e,t){var r=t(42231),o=t(50098);n.exports=function(n){return null==n?[]:r(n,o(n))}}}]);
//# sourceMappingURL=component---src-pages-heatmap-canvas-js-60a8066e218096328015.js.map