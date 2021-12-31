"use strict";(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[1343],{6522:function(e,t,o){o.d(t,{Z:function(){return m}});o(27378);var i=o(62370),r=o(91542),n=o(24246),l=r.default.div.withConfig({displayName:"CustomTooltip__TooltipWrapper",componentId:"sc-1lm8wm-0"})(["display:grid;grid-template-columns:1fr 1fr;grid-column-gap:12px;"]),a=r.default.span.withConfig({displayName:"CustomTooltip__TooltipKey",componentId:"sc-1lm8wm-1"})(["font-weight:600;"]),s=r.default.span.withConfig({displayName:"CustomTooltip__TooltipValue",componentId:"sc-1lm8wm-2"})([""]),c=function(e){return(0,n.jsxs)(l,{style:{color:e.color},children:[(0,n.jsx)(a,{children:"label"}),(0,n.jsx)(s,{children:e.label}),(0,n.jsx)(a,{children:"id"}),(0,n.jsx)(s,{children:e.id}),(0,n.jsx)(a,{children:"value"}),(0,n.jsx)(s,{children:e.value}),(0,n.jsx)(a,{children:"position"}),(0,n.jsx)(s,{children:e.position}),(0,n.jsx)(a,{children:"groupIndex"}),(0,n.jsx)(s,{children:e.groupIndex}),(0,n.jsx)(a,{children:"row"}),(0,n.jsx)(s,{children:e.row}),(0,n.jsx)(a,{children:"column"}),(0,n.jsx)(s,{children:e.column}),(0,n.jsx)(a,{children:"color"}),(0,n.jsx)(s,{children:e.color})]})},d=function(e){var t=e.position,o=e.size,i=e.x,r=e.y,l=e.color,a=e.fill,s=e.opacity,c=e.borderWidth,d=e.borderColor,u=e.data,m=e.onHover,p=e.onLeave,h=e.onClick;return(0,n.jsx)("circle",{r:o/2,cx:i+o/2,cy:r+o/2,fill:a||l,strokeWidth:c,stroke:d,opacity:s,onMouseEnter:m,onMouseMove:m,onMouseLeave:p,onClick:function(e){h({position:t,color:l,x:i,y:r,data:u},e)}})},u=function(e){var t=e.position,o=e.size,i=e.x,r=e.y,l=e.color,a=e.opacity,s=e.borderWidth,c=e.borderColor,d=e.data,u=e.onHover,m=e.onLeave,p=e.onClick;return(0,n.jsx)("div",{style:{borderRadius:o/2+"px 0 "+o/2+"px 0",position:"absolute",top:r,left:i,width:o,height:o,background:l,opacity:a,boxSizing:"content-box",borderStyle:"solid",borderWidth:s+"px",borderColor:c},onMouseEnter:u,onMouseMove:u,onMouseLeave:m,onClick:function(e){p({position:t,color:l,x:i,y:r,data:d},e)}})},m=(0,i.h8)({cellComponent:function(e,t,o){if("Custom(props) => (…)"===e)return"Waffle"===o.component?d:u},tooltip:function(e,t){return t["custom tooltip example"]?c:null}},{exclude:["custom tooltip example"]})},25592:function(e,t,o){o.d(t,{X:function(){return c}});var i=o(9971),r=o(80169),n=o(18907),l=["svg","html","canvas"],a=i.e8,s=[{key:"total",group:"Base",type:"number",required:!0,help:"Max value.",description:"Max value, ratio will be computed against this value for each datum.",flavors:l},{key:"data",group:"Base",help:"Chart data.",description:"\n            Chart data, which must conform to this structure:\n            ```\n            Array<{\n                id:    string | number\n                value: number\n                label: string | number\n            }>\n            ```\n        ",type:"object[]",required:!0,flavors:l},{key:"rows",group:"Base",type:"number",help:"Number of rows.",required:!0,flavors:l,control:{type:"range",min:1,max:100}},{key:"columns",group:"Base",type:"number",help:"Number of columns.",required:!0,flavors:l,control:{type:"range",min:1,max:100}},{key:"fillDirection",group:"Base",type:"string",required:!1,help:"How to fill the waffle.",flavors:l,defaultValue:a.fillDirection,control:{type:"choices",choices:[{label:"top",value:"top"},{label:"right",value:"right"},{label:"bottom",value:"bottom"},{label:"left",value:"left"}]}},{key:"padding",group:"Base",type:"number",help:"Padding between each cell.",required:!0,flavors:l,control:{type:"range",unit:"px",min:0,max:10}}].concat((0,n.nk)(l),[(0,r.JR)(["svg","html","canvas"]),{key:"cellComponent",flavors:["svg","html"],help:"Override default cell component.",type:"Function",required:!1,group:"Style",control:{type:"choices",choices:["default","Custom(props) => (…)"].map((function(e){return{label:e,value:e}}))}},(0,n.at)({flavors:l,defaultValue:a.colors}),{key:"emptyColor",group:"Style",help:"Defines empty cells color.",type:"string",required:!1,defaultValue:a.emptyColor,flavors:l,control:{type:"colorPicker"}},{key:"emptyOpacity",group:"Style",help:"Empty cells opacity.",required:!1,defaultValue:a.emptyOpacity,type:"number",flavors:l,control:{type:"opacity"}},{key:"borderWidth",group:"Style",type:"number",required:!1,help:"Control cell border width.",defaultValue:a.borderWidth,flavors:l,control:{type:"lineWidth"}},{key:"borderColor",group:"Style",type:"string | object | Function",required:!1,help:"Method to compute cell border color.",defaultValue:a.borderColor,flavors:["svg","html","canvas"],control:{type:"inheritedColor"}}],(0,r.uE)("Style",["svg"]),[(0,n.y1)({flavors:["svg","html","canvas"],defaultValue:a.isInteractive}),{key:"onClick",group:"Interactivity",type:"Function",required:!1,help:"onClick handler, it receives clicked node data and style plus mouse event.",flavors:["svg","html","canvas"]},{key:"tooltip",group:"Interactivity",type:"Function",required:!1,help:"Custom tooltip component",flavors:l,description:"\n            A function allowing complete tooltip customisation,\n            it must return a valid HTML element and will\n            receive the following data:\n            ```\n            {\n                id:         {string|number},\n                value:      number,\n                label:      {string|number},\n                color:      string,\n                position:   number,\n                row:        number,\n                column:     number,\n                groupIndex: number,\n                startAt:    number,\n                endAt:      number,\n            }\n            ```\n            You can customize the tooltip style\n            using the `theme.tooltip` object.\n        "},{key:"custom tooltip example",group:"Interactivity",type:"boolean",required:!1,control:{type:"switch"},help:"Showcase custom tooltip.",flavors:l},{key:"legends",group:"Legends",type:"object[]",required:!1,help:"Optional chart's legends.",flavors:["svg","canvas"],control:{type:"array",props:(0,r.y0)(["svg","canvas"]),shouldCreate:!0,addLabel:"add legend",shouldRemove:!0,defaults:{anchor:"left",direction:"column",justify:!1,translateX:-100,translateY:0,itemWidth:100,itemHeight:20,itemsSpacing:4,symbolSize:20,itemDirection:"left-to-right",itemTextColor:"#777",onClick:function(e){console.log(JSON.stringify(e,null,"    "))},effects:[{on:"hover",style:{itemTextColor:"#000",itemBackground:"#f7fafb"}}]}}}],(0,r.$j)(["svg","html"],a)),c=(0,r.R2)(s)},47425:function(e,t,o){o.d(t,{$6:function(){return y},iQ:function(){return x},Ae:function(){return h},as:function(){return g},_i:function(){return v}});var i=o(24246),r=o(27378),n=o(45434),l=o(23615),a=o.n(l);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},s.apply(this,arguments)}var c={top:0,right:0,bottom:0,left:0},d=function(e){var t,o=e.direction,i=e.itemsSpacing,r=e.padding,n=e.itemCount,l=e.itemWidth,a=e.itemHeight;if("number"!=typeof r&&("object"!=typeof(t=r)||Array.isArray(t)||null===t))throw new Error("Invalid property padding, must be one of: number, object");var d="number"==typeof r?{top:r,right:r,bottom:r,left:r}:s({},c,r),u=d.left+d.right,m=d.top+d.bottom,p=l+u,h=a+m,f=(n-1)*i;return"row"===o?p=l*n+f+u:"column"===o&&(h=a*n+f+m),{width:p,height:h,padding:d}},u=function(e){var t=e.anchor,o=e.translateX,i=e.translateY,r=e.containerWidth,n=e.containerHeight,l=e.width,a=e.height,s=o,c=i;switch(t){case"top":s+=(r-l)/2;break;case"top-right":s+=r-l;break;case"right":s+=r-l,c+=(n-a)/2;break;case"bottom-right":s+=r-l,c+=n-a;break;case"bottom":s+=(r-l)/2,c+=n-a;break;case"bottom-left":c+=n-a;break;case"left":c+=(n-a)/2;break;case"center":s+=(r-l)/2,c+=(n-a)/2}return{x:s,y:c}},m=function(e){var t,o,i,r,n,l,a=e.direction,s=e.justify,c=e.symbolSize,d=e.symbolSpacing,u=e.width,m=e.height;switch(a){case"left-to-right":t=0,o=(m-c)/2,r=m/2,l="central",!0===s?(i=u,n="end"):(i=c+d,n="start");break;case"right-to-left":t=u-c,o=(m-c)/2,r=m/2,l="central",!0===s?(i=0,n="start"):(i=u-c-d,n="end");break;case"top-to-bottom":t=(u-c)/2,o=0,i=u/2,n="middle",!0===s?(r=m,l="alphabetic"):(r=c+d,l="text-before-edge");break;case"bottom-to-top":t=(u-c)/2,o=m-c,i=u/2,n="middle",!0===s?(r=0,l="text-before-edge"):(r=m-c-d,l="alphabetic")}return{symbolX:t,symbolY:o,labelX:i,labelY:r,labelAnchor:n,labelAlignment:l}},p={circle:function(e){var t=e.x,o=e.y,r=e.size,n=e.fill,l=e.opacity,a=void 0===l?1:l,s=e.borderWidth,c=void 0===s?0:s,d=e.borderColor;return(0,i.jsx)("circle",{r:r/2,cx:t+r/2,cy:o+r/2,fill:n,opacity:a,strokeWidth:c,stroke:void 0===d?"transparent":d,style:{pointerEvents:"none"}})},diamond:function(e){var t=e.x,o=e.y,r=e.size,n=e.fill,l=e.opacity,a=void 0===l?1:l,s=e.borderWidth,c=void 0===s?0:s,d=e.borderColor;return(0,i.jsx)("g",{transform:"translate("+t+","+o+")",children:(0,i.jsx)("path",{d:"\n                    M"+r/2+" 0\n                    L"+.8*r+" "+r/2+"\n                    L"+r/2+" "+r+"\n                    L"+.2*r+" "+r/2+"\n                    L"+r/2+" 0\n                ",fill:n,opacity:a,strokeWidth:c,stroke:void 0===d?"transparent":d,style:{pointerEvents:"none"}})})},square:function(e){var t=e.x,o=e.y,r=e.size,n=e.fill,l=e.opacity,a=void 0===l?1:l,s=e.borderWidth,c=void 0===s?0:s,d=e.borderColor;return(0,i.jsx)("rect",{x:t,y:o,fill:n,opacity:a,strokeWidth:c,stroke:void 0===d?"transparent":d,width:r,height:r,style:{pointerEvents:"none"}})},triangle:function(e){var t=e.x,o=e.y,r=e.size,n=e.fill,l=e.opacity,a=void 0===l?1:l,s=e.borderWidth,c=void 0===s?0:s,d=e.borderColor;return(0,i.jsx)("g",{transform:"translate("+t+","+o+")",children:(0,i.jsx)("path",{d:"\n                M"+r/2+" 0\n                L"+r+" "+r+"\n                L0 "+r+"\n                L"+r/2+" 0\n            ",fill:n,opacity:a,strokeWidth:c,stroke:void 0===d?"transparent":d,style:{pointerEvents:"none"}})})}},h=function(e){var t,o,l,a,c,d,u,h,f,y,b,g=e.x,v=e.y,x=e.width,C=e.height,k=e.data,S=e.direction,j=void 0===S?"left-to-right":S,w=e.justify,W=void 0!==w&&w,M=e.textColor,B=e.background,O=void 0===B?"transparent":B,q=e.opacity,z=void 0===q?1:q,L=e.symbolShape,T=void 0===L?"square":L,E=e.symbolSize,H=void 0===E?16:E,A=e.symbolSpacing,X=void 0===A?8:A,I=e.symbolBorderWidth,Y=void 0===I?0:I,D=e.symbolBorderColor,R=void 0===D?"transparent":D,F=e.onClick,_=e.onMouseEnter,V=e.onMouseLeave,N=e.toggleSerie,P=e.effects,J=(0,r.useState)({}),K=J[0],Q=J[1],Z=(0,n.Fg)(),$=(0,r.useCallback)((function(e){if(P){var t=P.filter((function(e){return"hover"===e.on})).reduce((function(e,t){return s({},e,t.style)}),{});Q(t)}null==_||_(k,e)}),[_,k,P]),G=(0,r.useCallback)((function(e){if(P){var t=P.filter((function(e){return"hover"!==e.on})).reduce((function(e,t){return s({},e,t.style)}),{});Q(t)}null==V||V(k,e)}),[V,k,P]),U=m({direction:j,justify:W,symbolSize:null!=(t=K.symbolSize)?t:H,symbolSpacing:X,width:x,height:C}),ee=U.symbolX,te=U.symbolY,oe=U.labelX,ie=U.labelY,re=U.labelAnchor,ne=U.labelAlignment,le=[F,_,V,N].some((function(e){return void 0!==e})),ae="function"==typeof T?T:p[T];return(0,i.jsxs)("g",{transform:"translate("+g+","+v+")",style:{opacity:null!=(o=K.itemOpacity)?o:z},children:[(0,i.jsx)("rect",{width:x,height:C,fill:null!=(l=K.itemBackground)?l:O,style:{cursor:le?"pointer":"auto"},onClick:function(e){null==F||F(k,e),null==N||N(k.id)},onMouseEnter:$,onMouseLeave:G}),r.createElement(ae,s({id:k.id,x:ee,y:te,size:null!=(a=K.symbolSize)?a:H,fill:null!=(c=null!=(d=k.fill)?d:k.color)?c:"black",borderWidth:null!=(u=K.symbolBorderWidth)?u:Y,borderColor:null!=(h=K.symbolBorderColor)?h:R},k.hidden?Z.legends.hidden.symbol:void 0)),(0,i.jsx)("text",{textAnchor:re,style:s({},Z.legends.text,{fill:null!=(f=null!=(y=null!=(b=K.itemTextColor)?b:M)?y:Z.legends.text.fill)?f:"black",dominantBaseline:ne,pointerEvents:"none",userSelect:"none"},k.hidden?Z.legends.hidden.text:void 0),x:oe,y:ie,children:k.label})]})},f=function(e){var t=e.data,o=e.x,r=e.y,n=e.direction,l=e.padding,a=void 0===l?0:l,s=e.justify,c=e.effects,u=e.itemWidth,m=e.itemHeight,p=e.itemDirection,f=void 0===p?"left-to-right":p,y=e.itemsSpacing,b=void 0===y?0:y,g=e.itemTextColor,v=e.itemBackground,x=void 0===v?"transparent":v,C=e.itemOpacity,k=void 0===C?1:C,S=e.symbolShape,j=e.symbolSize,w=e.symbolSpacing,W=e.symbolBorderWidth,M=e.symbolBorderColor,B=e.onClick,O=e.onMouseEnter,q=e.onMouseLeave,z=e.toggleSerie,L=d({itemCount:t.length,itemWidth:u,itemHeight:m,itemsSpacing:b,direction:n,padding:a}).padding,T="row"===n?u+b:0,E="column"===n?m+b:0;return(0,i.jsx)("g",{transform:"translate("+o+","+r+")",children:t.map((function(e,t){return(0,i.jsx)(h,{data:e,x:t*T+L.left,y:t*E+L.top,width:u,height:m,direction:f,justify:s,effects:c,textColor:g,background:x,opacity:k,symbolShape:S,symbolSize:j,symbolSpacing:w,symbolBorderWidth:W,symbolBorderColor:M,onClick:B,onMouseEnter:O,onMouseLeave:q,toggleSerie:z},t)}))})},y=function(e){var t=e.data,o=e.containerWidth,r=e.containerHeight,n=e.translateX,l=void 0===n?0:n,a=e.translateY,s=void 0===a?0:a,c=e.anchor,m=e.direction,p=e.padding,h=void 0===p?0:p,y=e.justify,b=e.itemsSpacing,g=void 0===b?0:b,v=e.itemWidth,x=e.itemHeight,C=e.itemDirection,k=e.itemTextColor,S=e.itemBackground,j=e.itemOpacity,w=e.symbolShape,W=e.symbolSize,M=e.symbolSpacing,B=e.symbolBorderWidth,O=e.symbolBorderColor,q=e.onClick,z=e.onMouseEnter,L=e.onMouseLeave,T=e.toggleSerie,E=e.effects,H=d({itemCount:t.length,itemsSpacing:g,itemWidth:v,itemHeight:x,direction:m,padding:h}),A=H.width,X=H.height,I=u({anchor:c,translateX:l,translateY:s,containerWidth:o,containerHeight:r,width:A,height:X}),Y=I.x,D=I.y;return(0,i.jsx)(f,{data:t,x:Y,y:D,direction:m,padding:h,justify:y,effects:E,itemsSpacing:g,itemWidth:v,itemHeight:x,itemDirection:C,itemTextColor:k,itemBackground:S,itemOpacity:j,symbolShape:w,symbolSize:W,symbolSpacing:M,symbolBorderWidth:B,symbolBorderColor:O,onClick:q,onMouseEnter:z,onMouseLeave:L,toggleSerie:"boolean"==typeof T?void 0:T})},b={start:"left",middle:"center",end:"right"},g=function(e,t){var o=t.data,i=t.containerWidth,r=t.containerHeight,n=t.translateX,l=void 0===n?0:n,a=t.translateY,s=void 0===a?0:a,c=t.anchor,p=t.direction,h=t.padding,f=void 0===h?0:h,y=t.justify,g=void 0!==y&&y,v=t.itemsSpacing,x=void 0===v?0:v,C=t.itemWidth,k=t.itemHeight,S=t.itemDirection,j=void 0===S?"left-to-right":S,w=t.itemTextColor,W=t.symbolSize,M=void 0===W?16:W,B=t.symbolSpacing,O=void 0===B?8:B,q=t.theme,z=d({itemCount:o.length,itemWidth:C,itemHeight:k,itemsSpacing:x,direction:p,padding:f}),L=z.width,T=z.height,E=z.padding,H=u({anchor:c,translateX:l,translateY:s,containerWidth:i,containerHeight:r,width:L,height:T}),A=H.x,X=H.y,I="row"===p?C+x:0,Y="column"===p?k+x:0;e.save(),e.translate(A,X),e.font=q.legends.text.fontSize+"px "+(q.legends.text.fontFamily||"sans-serif"),o.forEach((function(t,o){var i,r,n=o*I+E.left,l=o*Y+E.top,a=m({direction:j,justify:g,symbolSize:M,symbolSpacing:O,width:C,height:k}),s=a.symbolX,c=a.symbolY,d=a.labelX,u=a.labelY,p=a.labelAnchor,h=a.labelAlignment;e.fillStyle=null!=(i=t.color)?i:"black",e.fillRect(n+s,l+c,M,M),e.textAlign=b[p],"central"===h&&(e.textBaseline="middle"),e.fillStyle=null!=(r=null!=w?w:q.legends.text.fill)?r:"black",e.fillText(String(t.label),n+d,l+u)})),e.restore()},v=function(e){var t=e.scale,o=e.domain,i=e.reverse,n=void 0!==i&&i,l=e.valueFormat,a=void 0===l?function(e){return e}:l,s=e.separator,c=void 0===s?" - ":s;return(0,r.useMemo)((function(){var e=(null!=o?o:t.range()).map((function(e,o){var i=t.invertExtent(e),r=i[0],n=i[1];return{id:e,index:o,extent:[r,n],label:""+a(r)+c+a(n),value:t(r),color:e}}));return!0===n&&e.reverse(),e}),[o,t,n])},x={data:a().arrayOf(a().object),anchor:a().oneOf(["top","top-right","right","bottom-right","bottom","bottom-left","left","top-left","center"]).isRequired,translateX:a().number,translateY:a().number,direction:a().oneOf(["row","column"]).isRequired,itemsSpacing:a().number,itemWidth:a().number.isRequired,itemHeight:a().number.isRequired,itemDirection:a().oneOf(["left-to-right","right-to-left","top-to-bottom","bottom-to-top"]),itemTextColor:a().string,itemBackground:a().string,itemOpacity:a().number,symbolShape:a().oneOfType([a().oneOf(["circle","diamond","square","triangle"]),a().func]),symbolSize:a().number,symbolSpacing:a().number,symbolBorderWidth:a().number,symbolBorderColor:a().string,onClick:a().func,onMouseEnter:a().func,onMouseLeave:a().func,effects:a().arrayOf(a().shape({on:a().oneOfType([a().oneOf(["hover"])]).isRequired,style:a().shape({itemTextColor:a().string,itemBackground:a().string,itemOpacity:a().number,symbolSize:a().number,symbolBorderWidth:a().number,symbolBorderColor:a().string}).isRequired}))}},70079:function(e,t,o){o.r(t);o(27378);var i=o(9971),r=o(22543),n=o(59306),l=o(25592),a=o(6522),s=o(25414),c=o(24246);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},d.apply(this,arguments)}var u=function(){return[{id:"men",label:"men",value:33*Math.random(),color:"#468df3"},{id:"women",label:"women",value:33*Math.random(),color:"#ba72ff"},{id:"children",label:"children",value:33*Math.random(),color:"#a1cfff"}]},m={total:100,rows:18,columns:14,fillDirection:"bottom",padding:1,margin:{top:10,right:10,bottom:10,left:10},cellComponent:"default",emptyColor:"#cccccc",emptyOpacity:1,colors:{scheme:"set2"},borderWidth:0,borderColor:{from:"color",gamma:[["darker",.3]]},animate:!0,motionStiffness:90,motionDamping:11,isInteractive:!0,"custom tooltip example":!1,tooltip:null};t.default=function(){var e=(0,s.useStaticQuery)("3027284835").image.childImageSharp.gatsbyImageData;return(0,c.jsx)(r.T,{name:"WaffleHtml",meta:n.N9,icon:"waffle",flavors:n.Kk,currentFlavor:"html",properties:l.X,propertiesMapper:a.Z,initialProperties:m,defaultProperties:i.e8,codePropertiesMapper:function(e){return d({},e,{cellComponent:e.cellComponent?"CustomCell(props) => (…)":void 0,tooltip:e.tooltip?"CustomTooltip(props) => (…)":void 0})},generateData:u,image:e,children:function(e,t,o,r){return(0,c.jsx)(i.Fd,d({data:t},e,{theme:o,onClick:function(e){var t;t=void 0!==e.data.value?e.data.label+": "+e.data.value+" (position: "+e.position+")":"empty at position: "+e.position,r({type:"click",label:"[cell] "+t,color:e.color,data:e})}}))}})}}}]);
//# sourceMappingURL=component---src-pages-waffle-html-js-88e33313b65fb9d5254d.js.map