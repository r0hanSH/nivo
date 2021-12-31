"use strict";(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[3583],{41584:function(t,e){var n=Math.PI,o=2*n,i=1e-6,r=o-i;function a(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function s(){return new a}a.prototype=s.prototype={constructor:a,moveTo:function(t,e){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+e)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,e){this._+="L"+(this._x1=+t)+","+(this._y1=+e)},quadraticCurveTo:function(t,e,n,o){this._+="Q"+ +t+","+ +e+","+(this._x1=+n)+","+(this._y1=+o)},bezierCurveTo:function(t,e,n,o,i,r){this._+="C"+ +t+","+ +e+","+ +n+","+ +o+","+(this._x1=+i)+","+(this._y1=+r)},arcTo:function(t,e,o,r,a){t=+t,e=+e,o=+o,r=+r,a=+a;var s=this._x1,l=this._y1,c=o-t,u=r-e,p=s-t,d=l-e,h=p*p+d*d;if(a<0)throw new Error("negative radius: "+a);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=e);else if(h>i)if(Math.abs(d*c-u*p)>i&&a){var y=o-s,m=r-l,g=c*c+u*u,f=y*y+m*m,x=Math.sqrt(g),k=Math.sqrt(h),b=a*Math.tan((n-Math.acos((g+h-f)/(2*x*k)))/2),v=b/k,_=b/x;Math.abs(v-1)>i&&(this._+="L"+(t+v*p)+","+(e+v*d)),this._+="A"+a+","+a+",0,0,"+ +(d*y>p*m)+","+(this._x1=t+_*c)+","+(this._y1=e+_*u)}else this._+="L"+(this._x1=t)+","+(this._y1=e);else;},arc:function(t,e,a,s,l,c){t=+t,e=+e,c=!!c;var u=(a=+a)*Math.cos(s),p=a*Math.sin(s),d=t+u,h=e+p,y=1^c,m=c?s-l:l-s;if(a<0)throw new Error("negative radius: "+a);null===this._x1?this._+="M"+d+","+h:(Math.abs(this._x1-d)>i||Math.abs(this._y1-h)>i)&&(this._+="L"+d+","+h),a&&(m<0&&(m=m%o+o),m>r?this._+="A"+a+","+a+",0,1,"+y+","+(t-u)+","+(e-p)+"A"+a+","+a+",0,1,"+y+","+(this._x1=d)+","+(this._y1=h):m>i&&(this._+="A"+a+","+a+",0,"+ +(m>=n)+","+y+","+(this._x1=t+a*Math.cos(l))+","+(this._y1=e+a*Math.sin(l))))},rect:function(t,e,n,o){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+e)+"h"+ +n+"v"+ +o+"h"+-n+"Z"},toString:function(){return this._}},e.Z=s},3583:function(t,e,n){function o(t){return function(){return t}}n.d(e,{Z:function(){return o}})},18091:function(t,e,n){n.d(e,{Z:function(){return s}});var o=n(41584),i=n(3583),r=n(30964),a=n(92519);function s(){var t=a.x,e=a.y,n=(0,i.Z)(!0),s=null,l=r.Z,c=null;function u(i){var r,a,u,p=i.length,d=!1;for(null==s&&(c=l(u=(0,o.Z)())),r=0;r<=p;++r)!(r<p&&n(a=i[r],r,i))===d&&((d=!d)?c.lineStart():c.lineEnd()),d&&c.point(+t(a,r,i),+e(a,r,i));if(u)return c=null,u+""||null}return u.x=function(e){return arguments.length?(t="function"==typeof e?e:(0,i.Z)(+e),u):t},u.y=function(t){return arguments.length?(e="function"==typeof t?t:(0,i.Z)(+t),u):e},u.defined=function(t){return arguments.length?(n="function"==typeof t?t:(0,i.Z)(!!t),u):n},u.curve=function(t){return arguments.length?(l=t,null!=s&&(c=l(s)),u):l},u.context=function(t){return arguments.length?(null==t?s=c=null:c=l(s=t),u):s},u}},92519:function(t,e,n){function o(t){return t[0]}function i(t){return t[1]}n.d(e,{x:function(){return o},y:function(){return i}})},79892:function(t,e,n){n.d(e,{y:function(){return d}});var o,i,r,a,s=n(27378),l=n(91542),c=n(51302),u=n(24246);function p(t,e){return e||(e=t.slice(0)),t.raw=e,t}var d=(0,s.memo)((function(t){var e=t.chartClass,n=t.tags,o=void 0===n?[]:n;return(0,u.jsxs)(h,{children:[(0,u.jsx)(y,{children:e}),(0,u.jsx)(m,{children:o.map((function(t){return(0,u.jsx)(g,{children:t},t)}))})]})})),h=l.default.div.withConfig({displayName:"ComponentHeader__Container",componentId:"sc-1rpxg3w-0"})(["flex-direction:column;color:#fff;margin-bottom:10px;display:flex;align-items:flex-start;justify-content:flex-end;position:relative;height:130px;padding:0 30px;"," "," "," ",""],c.Z.desktopLarge(o||(o=p(["\n        & {\n            padding: 0 40px;\n        }\n    "]))),c.Z.desktop(i||(i=p(["\n        & {\n            padding: 0 30px;\n        }\n    "]))),c.Z.tablet(r||(r=p(["\n        & {\n            padding: 0 20px;\n        }\n    "]))),c.Z.mobile(a||(a=p(["\n        & {\n            padding: 0 20px;\n        }\n    "])))),y=l.default.h1.withConfig({displayName:"ComponentHeader__Title",componentId:"sc-1rpxg3w-1"})(["margin:0 0 10px;padding:0;"]),m=l.default.div.withConfig({displayName:"ComponentHeader__Tags",componentId:"sc-1rpxg3w-2"})([""]),g=l.default.span.withConfig({displayName:"ComponentHeader__Tag",componentId:"sc-1rpxg3w-3"})(["display:inline-block;background:",";color:",";font-size:0.8rem;font-weight:500;padding:3px 11px;border-radius:2px;margin-right:7px;margin-bottom:7px;"],(function(t){return t.theme.colors.background}),(function(t){return t.theme.colors.accent}))},67231:function(t,e,n){n.d(e,{L:function(){return l}});var o,i,r=n(91542),a=n(51302);function s(t,e){return e||(e=t.slice(0)),t.raw=e,t}var l=r.default.div.withConfig({displayName:"ComponentPage",componentId:"sc-1sxfy2v-0"})(["margin-right:55%;&:after{content:' ';position:fixed;top:","px;box-shadow:",";right:0;bottom:0;--innerWidth:calc(100% - ","px);width:calc(var(--innerWidth) * 0.55);background:rgba(0,0,0,0);}"," ",""],(function(t){return t.theme.dimensions.headerHeight}),(function(t){return t.theme.topCardShadow}),(function(t){return t.theme.dimensions.miniNavWidth}),a.Z.tablet(o||(o=s(["\n        & {\n            margin-right: 55%;\n            &:after {\n                width: 55%;\n            }\n        }\n    "]))),a.Z.mobile(i||(i=s(["\n        & {\n            margin: 0;\n            &:after {\n                display: none;\n            }\n        }\n    "]))))},53806:function(t,e,n){n.d(e,{_:function(){return u}});n(27378);var o,i,r=n(91542),a=n(51302),s=n(45874),l=n(24246);function c(t,e){return e||(e=t.slice(0)),t.raw=e,t}function u(t){var e=t.flavors,n=t.currentFlavor,o=t.settings,i=t.onChange,r=t.groups;return(0,l.jsx)(p,{children:r.map((function(t){return(0,l.jsxs)(d,{children:[(0,l.jsx)(h,{children:t.name}),(0,l.jsx)(s.e,{name:t.name,flavors:e,currentFlavor:n,controls:t.properties,settings:o,onChange:i})]},t.name)}))})}var p=r.default.div.withConfig({displayName:"ComponentSettings__Container",componentId:"sc-1wqn9w9-0"})(["background:",";color:",";"],(function(t){return t.theme.colors.cardBackground}),(function(t){return t.theme.colors.text})),d=r.default.div.withConfig({displayName:"ComponentSettings__Group",componentId:"sc-1wqn9w9-1"})(["&:first-child{border-top-width:0;}"]),h=r.default.div.withConfig({displayName:"ComponentSettings__Title",componentId:"sc-1wqn9w9-2"})(["padding:16px 30px;font-weight:700;text-transform:uppercase;font-size:13px;line-height:1em;color:white;background:",";background-image:linear-gradient( -90deg,",","," );background-size:200% 100%;background-repeat:no-repeat;background-position:top left;"," ",""],(function(t){return t.theme.colors.accent}),(function(t){return t.theme.colors.gradientColor0}),(function(t){return t.theme.colors.gradientColor1}),a.Z.tablet(o||(o=c(["\n        & {\n            padding: 16px 20px 16px 30px;\n        }\n    "]))),a.Z.mobile(i||(i=c(["\n        & {\n            padding: 16px 20px 16px 30px;\n        }\n    "]))))},91473:function(t,e,n){n.r(e);var o,i,r,a,s,l,c,u=n(27378),p=n(91542),d=n(45434),h=n(74186),y=n(4014),m=n(24632),g=n(95546),f=n(67231),x=n(79892),k=n(17621),b=n(53806),v=n(51302),_=n(24246);function C(t,e){return e||(e=t.slice(0)),t.raw=e,t}var w={background:"#ffffff",textColor:d.uH.textColor,fontSize:d.uH.fontSize,axis:{domain:{line:{stroke:"#777777",strokeWidth:d.uH.axis.domain.line.strokeWidth}},ticks:{line:{stroke:d.uH.axis.ticks.line.stroke,strokeWidth:d.uH.axis.ticks.line.strokeWidth}}},grid:{line:{stroke:d.uH.grid.line.stroke,strokeWidth:d.uH.grid.line.strokeWidth}},annotations:{text:{fontSize:d.uH.annotations.text.fontSize,outlineWidth:d.uH.annotations.text.outlineWidth,outlineColor:d.uH.annotations.text.outlineColor,outlineOpacity:d.uH.annotations.text.outlineOpacity},link:{stroke:d.uH.annotations.link.stroke,strokeWidth:d.uH.annotations.link.strokeWidth,outlineWidth:d.uH.annotations.link.outlineWidth,outlineColor:d.uH.annotations.link.outlineColor,outlineOpacity:d.uH.annotations.link.outlineOpacity},outline:{stroke:d.uH.annotations.outline.stroke,strokeWidth:d.uH.annotations.outline.strokeWidth,outlineWidth:d.uH.annotations.outline.outlineWidth,outlineColor:d.uH.annotations.outline.outlineColor,outlineOpacity:d.uH.annotations.outline.outlineOpacity},symbol:{fill:d.uH.annotations.symbol.fill,outlineWidth:d.uH.annotations.symbol.outlineWidth,outlineColor:d.uH.annotations.symbol.outlineColor,outlineOpacity:d.uH.annotations.symbol.outlineOpacity}}},j=[{name:"Base",properties:[{group:"Theme",key:"background",name:"background",type:"string",help:"main background color.",control:{type:"colorPicker"}},{group:"Theme",key:"textColor",name:"textColor",type:"string",help:"main text color.",control:{type:"colorPicker"}},{group:"Theme",key:"fontSize",name:"fontSize",type:"number",help:"main font size.",control:{type:"range",unit:"px",min:6,max:36}}]},{name:"Axes & Grid",properties:[{group:"Theme",key:"axis",name:"axis",type:"object",control:{type:"object",isOpenedByDefault:!0,props:[{key:"ticks",type:"object",control:{type:"object",props:[{key:"line",type:"object",control:{type:"object",props:[{key:"strokeWidth",type:"number",control:{type:"lineWidth"}},{key:"stroke",type:"string",control:{type:"colorPicker"}}]}}]}},{key:"domain",type:"object",control:{type:"object",props:[{key:"line",type:"object",control:{type:"object",props:[{key:"strokeWidth",type:"number",control:{type:"lineWidth"}},{key:"stroke",type:"string",control:{type:"colorPicker"}}]}}]}}]}},{group:"Theme",key:"grid",name:"grid",type:"object",control:{type:"object",isOpenedByDefault:!0,props:[{key:"line",type:"object",control:{type:"object",props:[{key:"stroke",type:"string",control:{type:"colorPicker"}},{key:"strokeWidth",type:"number",control:{type:"lineWidth"}}]}}]}}]},{name:"Annotations",properties:[{group:"Theme",key:"annotations",name:"annotations",type:"object",control:{type:"object",isOpenedByDefault:!0,props:[{key:"text",type:"object",control:{type:"object",props:[{key:"fontSize",type:"number",control:{type:"range",unit:"px",min:6,max:36}},{key:"outlineWidth",type:"number",control:{type:"lineWidth"}},{key:"outlineColor",type:"string",control:{type:"colorPicker"}},{key:"outlineOpacity",type:"number",control:{type:"opacity"}}]}},{key:"link",type:"object",control:{type:"object",props:[{key:"stroke",type:"string",control:{type:"colorPicker"}},{key:"strokeWidth",type:"number",control:{type:"lineWidth"}},{key:"outlineWidth",type:"number",control:{type:"lineWidth"}},{key:"outlineColor",type:"string",control:{type:"colorPicker"}},{key:"outlineOpacity",type:"number",control:{type:"opacity"}}]}},{key:"outline",type:"object",control:{type:"object",props:[{key:"stroke",type:"string",control:{type:"colorPicker"}},{key:"strokeWidth",type:"number",control:{type:"lineWidth"}},{key:"outlineWidth",type:"number",control:{type:"lineWidth"}},{key:"outlineColor",type:"string",control:{type:"colorPicker"}},{key:"outlineOpacity",type:"number",control:{type:"opacity"}}]}},{key:"symbol",type:"object",control:{type:"object",props:[{key:"fill",type:"string",control:{type:"colorPicker"}},{key:"outlineWidth",type:"number",control:{type:"lineWidth"}},{key:"outlineColor",type:"string",control:{type:"colorPicker"}},{key:"outlineOpacity",type:"number",control:{type:"opacity"}}]}}]}}]}];e.default=function(){var t=(0,u.useState)(w),e=t[0],n=t[1],o=(0,u.useState)("demo"),i=o[0],r=o[1];return(0,_.jsx)(m.Z,{children:(0,_.jsxs)(f.L,{children:[(0,_.jsx)(g.p,{title:"Theming Guide"}),(0,_.jsx)(x.y,{chartClass:"Theming"}),(0,_.jsx)(W,{children:(0,_.jsx)(k.U,{source:"\n**nivo** supports theming via the `theme` property, this property\nmust contain an object which defines various styles to be applied to your\ncharts. If you don't provide a theme, the default theme will be used. When\nyou provide a theme, you don't have to provide all properties as it will get\nmerged with the default theme.\n\nThere are a few things to notice while theming your components. Values for\nfont-size, borders… are **unitless** as nivo supports several\nimplementations (SVG, HTML, Canvas), however you can pass extra CSS\nattributes when using a specific implementation, for example, you might add\na stroke-dasharray to the grid lines when using the SVG implementation of\nthe Bar component, however it will have no effect on BarCanvas as it doesn't\nsupport it. The theme only drives the base style of the charts, for things\nsuch as symbol colors, patterns, legends, you'll have to use the dedicated\nproperties.\n"})}),(0,_.jsxs)(P,{children:[(0,_.jsxs)(H,{children:[(0,_.jsx)(Z,{isCurrent:"demo"===i,onClick:function(){return r("demo")},children:"demo"}),(0,_.jsx)(Z,{isCurrent:"code"===i,onClick:function(){return r("code")},children:"theme object"})]}),"demo"===i&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("div",{children:(0,_.jsx)(h.jM,{margin:{top:40,right:60,bottom:50,left:60},data:[{id:"A",value:12},{id:"B",value:17},{id:"C",value:9},{id:"D",value:15},{id:"E",value:23}],theme:e,colorBy:"indexValue",animate:!1,axisBottom:{legend:"X axis legend",legendPosition:"middle",legendOffset:40},axisLeft:{legend:"Y axis",legendPosition:"middle",legendOffset:-40}})}),(0,_.jsx)("div",{children:(0,_.jsx)(y.fH,{margin:{top:40,right:60,bottom:50,left:60},data:[{id:"default",data:[{x:"A",y:12},{x:"B",y:17},{x:"C",y:9},{x:"D",y:15},{x:"E",y:23}]}],enablePoints:!0,enablePointLabel:!0,pointSize:10,theme:e,animate:!1,axisBottom:{legend:"X axis legend",legendPosition:"middle",legendOffset:40},axisLeft:{legend:"Y axis legend",legendPosition:"middle",legendOffset:-40}})})]}),"code"===i&&(0,_.jsxs)(S,{children:["// You can pass this object to the `theme` property\n",JSON.stringify(e,null,"    ")]})]}),(0,_.jsx)(b._,{settings:e,onChange:n,groups:j,flavors:[],currentFlavor:"svg"})]})})};var W=p.default.div.withConfig({displayName:"theming__Description",componentId:"sc-175rs79-0"})(["margin:30px 0 50px;"," "," "," "," code{display:inline-block;background:",";border-radius:2px;font-size:0.9em;padding:5px 7px;line-height:1em;}"],v.Z.desktopLarge(o||(o=C(["\n        & {\n            padding: 0 40px;\n        }\n    "]))),v.Z.desktop(i||(i=C(["\n        & {\n            padding: 0 30px;\n        }\n    "]))),v.Z.tablet(r||(r=C(["\n        & {\n            padding: 0 20px;\n        }\n    "]))),v.Z.mobile(a||(a=C(["\n        & {\n            padding: 0 20px;\n            margin-bottom: 30px;\n        }\n    "]))),(function(t){return t.theme.colors.cardBackground})),H=p.default.nav.withConfig({displayName:"theming__Nav",componentId:"sc-175rs79-1"})(["height:46px;background:",";font-size:15px;position:relative;display:flex;",""],(function(t){return t.theme.colors.background}),v.Z.mobile(s||(s=C(["\n        & {\n            display: grid;\n            grid-template-columns: repeat(2, 1fr);\n        }\n    "])))),Z=p.default.span.withConfig({displayName:"theming__NavItem",componentId:"sc-175rs79-2"})(["cursor:pointer;height:46px;display:flex;padding:0 24px;justify-content:center;align-items:center;background:",";color:",";&:hover{color:",";}"],(function(t){var e=t.isCurrent,n=t.theme;return e?n.colors.cardBackground:"transparent"}),(function(t){var e=t.isCurrent,n=t.theme;return e?n.colors.text:"#aaa"}),(function(t){return t.theme.colors.text})),P=p.default.div.withConfig({displayName:"theming__Charts",componentId:"sc-175rs79-3"})(["position:fixed;top:","px;right:0;width:60%;--innerWidth:calc(100% - ","px);width:calc(var(--innerWidth) * 0.55);--innerHeight:calc(100% - ","px);height:var(--innerHeight);z-index:10;overflow:hidden;background:",";display:flex;flex-direction:column;& > div:nth-child(2),& > div:nth-child(3){height:calc(var(--innerHeight) / 2);}"," ",""],(function(t){return t.theme.dimensions.headerHeight}),(function(t){return t.theme.dimensions.miniNavWidth}),(function(t){return t.theme.dimensions.headerHeight}),(function(t){return t.theme.colors.cardBackground}),v.Z.tablet(l||(l=C(["\n        & {\n            top: ","px;\n            right: 0;\n            width: 55%;\n            height: calc(100% - ","px);\n        }\n    "])),(function(t){return t.theme.dimensions.headerHeight}),(function(t){return t.theme.dimensions.headerHeight})),v.Z.mobile(c||(c=C(["\n        & {\n            position: relative;\n            top: auto;\n            right: auto;\n            width: auto;\n            height: 520px;\n            z-index: 0;\n            border-top: 1px solid ",";\n        }\n    "])),(function(t){return t.theme.colors.border}))),S=p.default.pre.withConfig({displayName:"theming__Code",componentId:"sc-175rs79-4"})(["height:calc(100% - 46px);margin:0;background-color:",";color:",";font-size:0.8rem;line-height:1.7;padding:12px 20px;overflow-y:auto;"],(function(t){return t.theme.highlight.plain.backgroundColor}),(function(t){return t.theme.highlight.plain.color}))}}]);
//# sourceMappingURL=component---src-pages-guides-theming-tsx-f4bbef47b53395a62829.js.map