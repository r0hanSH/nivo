(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[2770],{18957:function(n,r,t){"use strict";t.d(r,{a:function(){return i}});var e=t(61904),o=t(15050),a=(0,e.Z)((function(n){n.setHours(0,0,0,0)}),(function(n,r){n.setDate(n.getDate()+r)}),(function(n,r){return(r-n-(r.getTimezoneOffset()-n.getTimezoneOffset())*o.yB)/o.UD}),(function(n){return n.getDate()-1}));r.Z=a;var i=a.range},38681:function(n,r,t){"use strict";t.d(r,{j2:function(){return v},wQ:function(){return m},aw:function(){return I},x$:function(){return R},ak:function(){return N},UE:function(){return H},$j:function(){return g},BO:function(){return y},Tz:function(){return x},O$:function(){return B},B7:function(){return P},gq:function(){return T},zn:function(){return F},FQ:function(){return G}});var e=t(4215),o=t.n(e),a=t(91311),i=t.n(a),u=t(19193),c=t.n(u),d=t(18957),f=t(6164),s=function(){return"hsl("+Math.round(360*Math.random())+", 70%, 50%)"},l=["AD","AE","AF","AG","AI","AL","AM","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BQ","BR","BS","BT","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CU","CV","CW","CX","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","EH","ER","ES","ET","FI","FJ","FK","FM","FO","FR","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SV","SX","SY","SZ","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","YE","YT","ZA","ZM","ZW"],p=["John","Raoul","Jane","Marcel","Ibrahim","Junko","Lyu","André","Maki","Véronique","Thibeau","Josiane","Raphaël","Mathéo","Margot","Hugo","Christian","Louis","Ella","Alton","Jimmy","Guillaume","Sébastien","Alfred","Bon","Solange","Kendrick","Jared","Satoko","Tomoko","Line","Delphine","Leonard","Alphonse","Lisa","Bart","Benjamin","Homer","Jack"],h=["php","make","javascript","go","erlang","elixir","lisp","haskell","python","ruby","hack","scala","java","rust","c","css","sass","stylus"],v=(Object.freeze({__proto__:null,countryCodes:l,names:p,programmingLanguages:h}),function(n,r,t){var e=void 0===t?{}:t,a=e.title,u=e.subtitle,c=e.rangeCount,d=void 0===c?5:c,f=e.measureCount,s=void 0===f?1:f,l=e.markerCount,p=void 0===l?1:l,h=e.float,v=void 0!==h&&h;return{id:n,title:a,subtitle:u,ranges:o()(d-1).reduce((function(n){var t=r-n[0];return[i()(t,v)].concat(n)}),[r]),measures:o()(s).reduce((function(n){return 0===n.length?[i()(r,v)]:[i()(n[0],v)].concat(n)}),[]),markers:o()(p).map((function(){return.6*r+i()(.4*r)}))}}),m=function(n){var r=void 0===n?{}:n,t=r.keys,e=void 0===t?p:t,a=r.size,u=void 0===a?7:a,c=r.minValue,d=void 0===c?0:c,f=r.maxValue,s=void 0===f?2e3:f,l=Math.min(e.length,u),h=e.slice(0,l);return{matrix:o()(l).map((function(){return o()(l).map((function(){return Math.random()<.66?i()(d,s/4):i()(d,s)}))})),keys:h}},g=function(n){var r=void 0===n?{}:n,t=r.rootNodeRadius,e=void 0===t?12:t,o=r.minMidNodes,a=void 0===o?6:o,u=r.maxMidNodes,c=void 0===u?16:u,d=r.midNodeRadius,f=void 0===d?8:d,s=r.minLeaves,l=void 0===s?4:s,p=r.maxLeaves,h=void 0===p?16:p,v=r.leafRadius,m=void 0===v?4:v,g={id:"0",radius:e,depth:0,color:"rgb(244, 117, 96)"},M=Array.from({length:i()(a,c)},(function(n,r){return{id:""+(r+1),radius:f,depth:1,color:"rgb(97, 205, 187)"}})),y=[],C=[];return M.forEach((function(n){y.push({source:"0",target:n.id,distance:50}),M.forEach((function(r){Math.random()<.04&&y.push({source:n.id,target:r.id,distance:70})})),Array.from({length:i()(l,h)},(function(r,t){return C.push({id:n.id+"."+t,radius:m,depth:2,color:"rgb(232, 193, 160)"}),y.push({source:n.id,target:n.id+"."+t,distance:30}),null}))})),M.push(g),{nodes:M=M.concat(C),links:y}};function M(){return M=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])}return n},M.apply(this,arguments)}var y=function(n){var r=void 0===n?{}:n,t=r.size,e=void 0===t?26:t,a=r.keys,u=void 0===a?[{key:"temp",random:[-10,40]},{key:"cost",random:[200,4e5]},{key:"color",shuffle:["red","yellow","green"]},{key:"target",shuffle:["A","B","C","D","E"]},{key:"volume",random:[.2,7.6]}]:a;return o()(e).map((function(){return u.reduce((function(n,r){var t,e;return void 0!==r.random?e=i().apply(void 0,r.random):void 0!==r.shuffle&&(e=c()(r.shuffle)[0]),M({},n,((t={})[r.key]=e,t))}),{})}))},C=p.map((function(n){return{id:n}})),k=function n(r,t,e){var o=t.filter((function(n){return n.source===r})).map((function(n){var t=n.target;if(t===r)throw new Error("[sankey] a node cannot be linked on itself:\n  link: "+r+" —> "+r);if(null!=e&&e.includes(t))throw new Error("[sankey] found cyclic dependency:\n  link: "+e.join(" —> ")+" —> "+t);return t}));return o.reduce((function(o,a){return o.concat(n(a,t,e?[].concat(e,[a]):[r,a]))}),o)},S=function(n){return n.reduce((function(r,t){return r[t.source]||(r[t.source]=k(t.source,n)),r}),{})},B=function(n){var r=void 0===n?{}:n,t=r.nodeCount,e=r.maxIterations,a=void 0===e?3:e,u=C.slice(0,t).map((function(n){return Object.assign({},n,{nodeColor:s()})})),d=[];return c()(u).forEach((function(n){var r=n.id;o()(i()(1,a)).forEach((function(){var n=S(d),t=c()(u.filter((function(n){return n.id!==r})).map((function(n){return n.id})))[0];n[t]&&n[t].includes(r)||n[r]&&n[r].includes(t)||d.push({source:r,target:t,value:i()(5,200)})}))})),{nodes:u,links:d}},A=function(){return i()(0,500)},b=function(){return i()(4,20)},E=function(){return i()(3,17)},T=function(n,r){var t=r.min,e=void 0===t?60:t,a=r.max,u=void 0===a?100:a,c=r.categoryCount,d=void 0===c?0:c;return{groups:n,data:n.reduce((function(n,r,t){return[].concat(n,o()(i()(e,u)).map((function(){return A()})).map((function(n,e){var a={id:t+"."+e,group:r,price:n,volume:b()};return d>0&&(a.categories=o()(d).map(E)),a})))}),[])}},G=function(n){return{groups:n.groups,data:n.data.map((function(r){var t=M({},r,{group:c()(n.groups)[0],price:A(),volume:b()});return void 0!==r.categories&&(t.categories=o()(3).map(E)),t}))}},L=s,x=function(n,r){void 0===n&&(n=!0),void 0===r&&(r=-1);var t=h;return n&&(t=c()(t)),r<1&&(r=1+Math.round(Math.random()*(h.length-1))),t.slice(0,r).map((function(n){return{label:n,value:Math.round(600*Math.random()),color:L()}}))},O=function(n){var r=[];return function(){var t;do{t=n.apply(void 0,arguments)}while(r.includes(t));return r.push(t),t}},D=function(){return c()(l)[0]},N=function(n){void 0===n&&(n=16);var r=["whisky","rhum","gin","vodka","cognac"],t=O(D),e=r.map((function(n){return{id:n,color:L(),data:[]}}));return o()(n).forEach((function(){var n=t();r.forEach((function(r){var t;null==(t=e.find((function(n){return n.id===r})))||t.data.push({color:L(),x:n,y:i()(0,60)})}))})),e},P=function(n,r){return n.map((function(n){return{id:n,color:L(),data:r.map((function(n){return{x:n,y:Math.round(300*Math.random())}}))}}))},R=function(n,r,t){void 0===t&&(t=.9);var e=function(n,r){var t=(0,d.a)(n,r),e=(0,f.i$)("%Y-%m-%d");return t.map((function(n){return{value:Math.round(400*Math.random()),day:e(n)}}))}(n,r),o=Math.round(e.length*(.4*t))+Math.round(Math.random()*(e.length*(.6*t)));return c()(e).slice(0,o)},I=function(n,r){var t=void 0===r?{}:r,e=t.size,o=void 0===e?12:e,a=t.min,u=void 0===a?0:a,c=t.max,d=void 0===c?200:c,f=t.withColors,s=void 0===f||f;return l.slice(0,o).map((function(r){var t={country:r};return n.forEach((function(n){t[n]=i()(u,d),!0===s&&(t[n+"Color"]=L())})),t}))},K=[["viz",[["stack",[["cchart"],["xAxis"],["yAxis"],["layers"]]],["ppie",[["chart",[["pie",[["outline"],["slices"],["bbox"]]],["donut"],["gauge"]]],["legends"]]]]],["colors",[["rgb"],["hsl"]]],["utils",[["randomize"],["resetClock"],["noop"],["tick"],["forceGC"],["stackTrace"],["dbg"]]],["generators",[["address"],["city"],["animal"],["movie"],["user"]]],["set",[["clone"],["intersect"],["merge"],["reverse"],["toArray"],["toObject"],["fromCSV"],["slice"],["append"],["prepend"],["shuffle"],["pick"],["plouc"]]],["text",[["trim"],["slugify"],["snakeCase"],["camelCase"],["repeat"],["padLeft"],["padRight"],["sanitize"],["ploucify"]]],["misc",[["greetings",[["hey"],["HOWDY"],["aloha"],["AHOY"]]],["other"],["path",[["pathA"],["pathB",[["pathB1"],["pathB2"],["pathB3"],["pathB4"]]],["pathC",[["pathC1"],["pathC2"],["pathC3"],["pathC4"],["pathC5"],["pathC6"],["pathC7"],["pathC8"],["pathC9"]]]]]]]],H=function n(r,t,e){var a;void 0===r&&(r="nivo"),void 0===e&&(e=K),(t=t||e.length)>e.length&&(t=e.length);var i={name:r,color:L()};return(null==(a=e)?void 0:a.length)>0?i.children=o()(t).map((function(r,t){var o,a=e[t];return n(a[0],null,null!=(o=a[1])?o:[])})):i.loc=Math.round(2e5*Math.random()),i},w=["chardonay","carmenere","syrah"],V=["fruity","bitter","heavy","strong","sunny"],F=function(n){var r=void 0===n?{}:n,t=r.randMin,e=void 0===t?20:t,o=r.randMax,a=void 0===o?120:o;return{data:V.map((function(n){var r={taste:n};return w.forEach((function(n){r[n]=i()(e,a)})),r})),keys:w}}},34787:function(n,r,t){"use strict";t.r(r);t(27378);var e=t(92345),o=t(38681),a=t(22543),i=t(79858),u=t(99009),c=t(45718),d=t(25414),f=t(24246);function s(){return s=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])}return n},s.apply(this,arguments)}var l=function(n){},p=new Date(2015,3,1),h=new Date(2018,7,12),v=function(){return(0,o.x$)(p,h)},m={from:"2015-03-01",to:"2016-07-12",align:"center",emptyColor:"#eeeeee",colors:["#61cdbb","#97e3d5","#e8c1a0","#f47560"],minValue:0,maxValue:"auto",margin:{top:40,right:40,bottom:40,left:40},direction:"horizontal",yearSpacing:40,yearLegendPosition:"before",yearLegendOffset:10,monthSpacing:0,monthBorderWidth:2,monthBorderColor:"#ffffff",monthLegendPosition:"before",monthLegendOffset:10,daySpacing:0,dayBorderWidth:2,dayBorderColor:"#ffffff",isInteractive:!0,"custom tooltip example":!1,tooltip:null,legends:[{anchor:"bottom-right",direction:"row",translateY:36,itemCount:4,itemWidth:42,itemHeight:36,itemsSpacing:14,itemDirection:"right-to-left"}]};r.default=function(){var n=(0,d.useStaticQuery)("388247675").image.childImageSharp.gatsbyImageData;return(0,f.jsx)(a.T,{name:"Calendar",meta:i.f,icon:"calendar",flavors:i.Kk,currentFlavor:"svg",properties:c.X,initialProperties:m,defaultProperties:e.K0,propertiesMapper:u.Z,codePropertiesMapper:function(n){return s({},n,{tooltip:n.tooltip?l:void 0})},generateData:v,image:n,children:function(n,r,t,o){return(0,f.jsx)(e.DQ,s({data:r},n,{theme:t,onClick:function(n){o({type:"click",label:"[day] "+n.day+": "+n.value,color:n.color,data:n})}}))}})}},91573:function(n,r,t){var e=t(37561),o=t(74305);n.exports=function(n){return o(e(n))}},76418:function(n){var r=Math.floor,t=Math.random;n.exports=function(n,e){return n+r(t()*(e-n+1))}},16326:function(n,r,t){var e=t(74305),o=t(58185);n.exports=function(n){return e(o(n))}},42231:function(n,r,t){var e=t(66070);n.exports=function(n,r){return e(r,(function(r){return n[r]}))}},74305:function(n,r,t){var e=t(76418);n.exports=function(n,r){var t=-1,o=n.length,a=o-1;for(r=void 0===r?o:r;++t<r;){var i=e(t,a),u=n[i];n[i]=n[t],n[t]=u}return n.length=r,n}},91311:function(n,r,t){var e=t(76418),o=t(57535),a=t(94919),i=parseFloat,u=Math.min,c=Math.random;n.exports=function(n,r,t){if(t&&"boolean"!=typeof t&&o(n,r,t)&&(r=t=void 0),void 0===t&&("boolean"==typeof r?(t=r,r=void 0):"boolean"==typeof n&&(t=n,n=void 0)),void 0===n&&void 0===r?(n=0,r=1):(n=a(n),void 0===r?(r=n,n=0):r=a(r)),n>r){var d=n;n=r,r=d}if(t||n%1||r%1){var f=c();return u(n+f*(r-n+i("1e-"+((f+"").length-1))),r)}return e(n,r)}},19193:function(n,r,t){var e=t(91573),o=t(16326),a=t(19785);n.exports=function(n){return(a(n)?e:o)(n)}},58185:function(n,r,t){var e=t(42231),o=t(50098);n.exports=function(n){return null==n?[]:e(n,o(n))}}}]);
//# sourceMappingURL=component---src-pages-calendar-index-js-0838ff5a77357f5cdd67.js.map