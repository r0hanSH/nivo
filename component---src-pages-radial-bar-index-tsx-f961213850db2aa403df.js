"use strict";(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[295],{35567:function(e,t,r){r.r(t),r.d(t,{default:function(){return A}});r(27378);var n=r(73855),i=r(22543),a=r(13195),o=r(48159),l=r.n(o),s=r(62370),d=function(e){return function(t,r){return r[e].enable?l()(t,["enable"]):null}},u=(0,s.h8)({valueFormat:s.Ld,radialAxisStart:d("radialAxisStart"),radialAxisEnd:d("radialAxisEnd"),circularAxisInner:d("circularAxisInner"),circularAxisOuter:d("circularAxisOuter")}),c=r(30042),g=r(80169),p=r(18907),f=["svg"],m=[{key:"data",group:"Base",type:"object[]",required:!0,help:"Chart data.",description:"\n            Here is what the data for a single chart with 2 bars would look like:\n            \n            ```\n            [\n                {\n                    id: 'Fruits',\n                    data: [{ x: 'Apples', y: 32 }]\n                },\n                {\n                    id: 'Vegetables',\n                    data: [{ x: 'Eggplants', y: 27 }]\n                }\n            ]\n            ```\n            \n            You can add several metrics per group:\n            \n            ```\n            [\n                {\n                    id: 'Fruits',\n                    data: [\n                        { x: 'Apples', y: 32 },\n                        { x: 'Mangoes', y: 15 }\n                    ]\n                },\n                {\n                    id: 'Vegetables',\n                    data: [\n                        { x: 'Eggplants', y: 27 },\n                        { x: 'Avocados', y: 34 }\n                    ]\n                }\n            ]\n            ```\n            \n            When a bar is computed, the `id` is going to be added\n            as the `groupId`, `x` as the `category` and `y`\n            as the value, for example the first bar for the number of Apples\n            in the Fruits group would be:\n            \n            ```\n            {\n                groupId: 'Fruits',\n                category: 'Apples',\n                value: 32\n            }\n            ```\n            \n            You might read those values when adding an `onClick` handler\n            for example, or when customizing the tooltip.\n        ",flavors:f},{key:"maxValue",group:"Base",type:"'auto' | number",required:!1,help:"If 'auto', the max value is derived from the data, otherwise use a static value.",flavors:f,defaultValue:n.XB.maxValue},{key:"valueFormat",group:"Base",type:"string | (value: number) => string",required:!1,help:"Optional formatter for values (`y`).",description:"\n            The formatted value can then be used for labels & tooltips.\n\n            Under the hood, nivo uses [d3-format](https://github.com/d3/d3-format),\n            please have a look at it for available formats, you can also pass a function\n            which will receive the raw value and should return the formatted one.\n        ",flavors:f,control:{type:"valueFormat"}}].concat((0,p.nk)(f),[{key:"startAngle",group:"Base",type:"number",required:!1,help:"Start angle (in degrees).",flavors:f,defaultValue:n.XB.startAngle,control:{type:"angle",min:-360,max:360,step:5}},{key:"endAngle",group:"Base",type:"number",required:!1,help:"End angle (in degrees).",flavors:f,defaultValue:n.XB.endAngle,control:{type:"angle",min:-360,max:360,step:5}},{key:"innerRadius",group:"Base",help:"Donut if greater than 0. Value should be between 0~1 as it's a ratio from outer radius.",type:"number",required:!1,flavors:f,defaultValue:n.XB.innerRadius,control:{type:"range",min:0,max:.95,step:.05}},{key:"padding",group:"Base",type:"number",required:!1,help:"Padding between each ring (ratio).",flavors:f,defaultValue:n.XB.padding,control:{type:"range",min:0,max:.9,step:.05}},{key:"padAngle",group:"Base",type:"number",required:!1,help:"Padding between each bar.",flavors:f,defaultValue:n.XB.padAngle,control:{type:"range",unit:"°",min:0,max:45,step:1}},{key:"cornerRadius",group:"Base",type:"number",required:!1,help:"Rounded corners.",flavors:f,defaultValue:n.XB.cornerRadius,control:{type:"range",unit:"px",min:0,max:45,step:1}},(0,g.JR)(["svg"]),(0,p.at)({flavors:f,defaultValue:n.XB.colors}),{key:"borderWidth",group:"Style",type:"number",required:!1,help:"Bars border width.",flavors:f,defaultValue:n.XB.borderWidth,control:{type:"lineWidth"}},{key:"borderColor",group:"Style",type:"InheritedColorConfig<ComputedBar>",required:!1,help:"Method to compute border color.",description:"\n            how to compute border color,\n            [see dedicated documentation](self:/guides/colors).\n        ",flavors:f,defaultValue:n.XB.borderColor,control:{type:"inheritedColor"}},{key:"enableTracks",group:"Tracks",type:"boolean",required:!1,help:"Enable/disable tracks.",flavors:f,defaultValue:n.XB.enableTracks,control:{type:"switch"}},{key:"tracksColor",group:"Tracks",type:"string",required:!1,help:"Define tracks color.",flavors:f,defaultValue:n.XB.tracksColor,control:{type:"colorPicker"}},{key:"enableRadialGrid",group:"Grid & Axes",type:"boolean",required:!1,help:"Enable radial grid (rays)",flavors:f,defaultValue:n.XB.enableRadialGrid,control:{type:"switch"}},{key:"enableCircularGrid",group:"Grid & Axes",type:"boolean",required:!1,help:"Enable circular grid (rings)",flavors:f,defaultValue:n.XB.enableCircularGrid,control:{type:"switch"}},(0,g.WZ)({key:"radialAxisStart",flavors:f,tickComponent:"RadialAxisTickComponent"}),(0,g.WZ)({key:"radialAxisEnd",flavors:f,tickComponent:"RadialAxisTickComponent"}),(0,g.WZ)({key:"circularAxisInner",flavors:f,tickComponent:"CircularAxisTickComponent"}),(0,g.WZ)({key:"circularAxisOuter",flavors:f,tickComponent:"CircularAxisTickComponent"}),{key:"enableLabels",group:"Labels",type:"boolean",required:!1,help:"Enable/disable labels.",flavors:f,defaultValue:n.XB.enableLabels,control:{type:"switch"}},{key:"label",group:"Labels",type:"string | (bar: ComputedBar) => string",required:!1,help:"Defines how to get label text, can be a string (used to access current bar property) or a function which will receive the actual bar data.",flavors:f,defaultValue:n.XB.label,control:{type:"choices",choices:["category","groupId","value","formattedValue"].map((function(e){return{label:e,value:e}}))}},{key:"labelsSkipAngle",group:"Labels",type:"number",required:!1,help:"Skip label if corresponding arc's angle is lower than provided value.",flavors:f,defaultValue:n.XB.labelsSkipAngle,control:{type:"range",unit:"°",min:0,max:45,step:1}},{key:"labelsRadiusOffset",group:"Labels",type:"number",required:!1,help:"\n            Define the radius to use to determine the label position, starting from inner radius,\n            this is expressed as a ratio. Centered at 0.5 by default.\n        ",flavors:f,defaultValue:n.XB.labelsRadiusOffset,control:{type:"range",min:0,max:2,step:.05}},{key:"labelsTextColor",group:"Labels",help:"Defines how to compute label text color.",type:"string | object | Function",required:!1,flavors:f,defaultValue:n.XB.labelsTextColor,control:{type:"inheritedColor"}},{key:"layers",group:"Customization",type:"(RadialBarLayerId | RadialBarCustomLayer)[]",required:!1,help:"Defines the order of layers and add custom layers.",description:"\n            You can also use this to insert extra layers\n            to the chart, the extra layer should be a component.\n            \n            The component will receive properties as defined in\n            the `RadialBarCustomLayerProps` interface\n            and must return a valid SVG element.\n        ",flavors:f,defaultValue:n.XB.layers},(0,p.y1)({flavors:f,defaultValue:n.XB.isInteractive}),{key:"tooltip",group:"Interactivity",type:"RadialBarTooltipComponent",required:!1,help:"Override default tooltip.",flavors:f},{key:"onClick",group:"Interactivity",type:"(bar: ComputedBar, event: MouseEvent) => void",required:!1,help:"onClick handler.",flavors:f},{key:"onMouseEnter",group:"Interactivity",type:"(bar: ComputedBar, event: MouseEvent) => void",required:!1,help:"onMouseEnter handler.",flavors:f},{key:"onMouseMove",group:"Interactivity",type:"(bar: ComputedBar, event: MouseEvent) => void",required:!1,help:"onMouseMove handler.",flavors:f},{key:"onMouseLeave",group:"Interactivity",type:"(bar: ComputedBar, event: MouseEvent) => void",required:!1,help:"onMouseLeave handler.",flavors:f},{key:"legends",group:"Legends",type:"LegendProps[]",required:!1,help:"Optional chart's legends.",flavors:f,control:{type:"array",props:(0,g.y0)(["svg"]),shouldCreate:!0,addLabel:"add legend",shouldRemove:!0,getItemTitle:function(e,t){return"legend["+e+"]: "+t.anchor+", "+t.direction},defaults:{dataFrom:"keys",anchor:"top-left",direction:"column",justify:!1,translateX:0,translateY:0,itemWidth:100,itemHeight:20,itemsSpacing:0,symbolSize:20,itemDirection:"left-to-right",onClick:function(e){console.log(JSON.stringify(e,null,"    "))}}}},{key:"role",group:"Accessibility",type:"string",required:!1,help:"Main element role attribute.",flavors:f},{key:"ariaLabel",group:"Accessibility",type:"string",required:!1,help:"Main element [aria-label](https://www.w3.org/TR/wai-aria/#aria-label).",flavors:f},{key:"ariaLabelledBy",group:"Accessibility",type:"string",required:!1,help:"Main element [aria-labelledby](https://www.w3.org/TR/wai-aria/#aria-labelledby).",flavors:f},{key:"ariaDescribedBy",group:"Accessibility",type:"string",required:!1,help:"Main element [aria-describedby](https://www.w3.org/TR/wai-aria/#aria-describedby).",flavors:f}],(0,g.$j)(f,n.XB,"react-spring"),[{key:"transitionMode",flavors:f,help:"Define how transitions behave.",type:"string",required:!1,defaultValue:n.XB.transitionMode,group:"Motion",control:{type:"choices",choices:c.UV.map((function(e){return{label:e,value:e}}))}}]),h=(0,g.R2)(m),b=r(25414),y=r(24246);function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},v.apply(this,arguments)}var x={valueFormat:{format:">-.2f",enabled:!0},startAngle:n.XB.startAngle,endAngle:n.XB.endAngle,innerRadius:n.XB.innerRadius,padding:.4,padAngle:n.XB.padAngle,cornerRadius:2,margin:{top:40,right:120,bottom:40,left:40},colors:n.XB.colors,borderWidth:n.XB.borderWidth,borderColor:n.XB.borderColor,enableTracks:n.XB.enableTracks,tracksColor:n.XB.tracksColor,enableRadialGrid:n.XB.enableRadialGrid,enableCircularGrid:n.XB.enableCircularGrid,radialAxisStart:{enable:!0,tickSize:5,tickPadding:5,tickRotation:0},radialAxisEnd:{enable:!1,tickSize:5,tickPadding:5,tickRotation:0},circularAxisInner:{enable:!1,tickSize:5,tickPadding:12,tickRotation:0},circularAxisOuter:{enable:!0,tickSize:5,tickPadding:12,tickRotation:0},enableLabels:n.XB.enableLabels,label:n.XB.label,labelsSkipAngle:n.XB.labelsSkipAngle,labelsRadiusOffset:n.XB.labelsRadiusOffset,labelsTextColor:n.XB.labelsTextColor,animate:!0,motionConfig:"gentle",transitionMode:n.XB.transitionMode,isInteractive:n.XB.isInteractive,legends:[{anchor:"right",direction:"column",justify:!1,translateX:80,translateY:0,itemsSpacing:6,itemDirection:"left-to-right",itemWidth:100,itemHeight:18,itemTextColor:"#999",symbolSize:18,symbolShape:"square",onClick:function(e){alert(JSON.stringify(e,null,"    "))},effects:[{on:"hover",style:{itemTextColor:"#000"}}]}]},k=function(){var e=["Supermarket","Combini","Online"];Math.random()>.5&&e.push("Marché");var t=["Vegetables","Fruits","Meat"];return Math.random()<.5&&t.push("Fish"),e.map((function(e){return{id:e,data:t.map((function(e){return{x:e,y:Math.round(300*Math.random())}}))}}))},A=function(){var e=(0,b.useStaticQuery)("1878616227").image.childImageSharp.gatsbyImageData;return(0,y.jsx)(i.T,{name:"RadialBar",meta:a.G,icon:"radial-bar",flavors:a.K,currentFlavor:"svg",properties:h,initialProperties:x,defaultProperties:n.XB,propertiesMapper:u,generateData:k,image:e,children:function(e,t,r,i){return(0,y.jsx)(n.W_,v({data:t},e,{theme:r,onClick:function(e){i({type:"click",label:e.category+" - "+e.groupId+": "+e.value,color:e.color,data:e})}}))}})}},47425:function(e,t,r){r.d(t,{$6:function(){return h},iQ:function(){return x},Ae:function(){return f},as:function(){return y},_i:function(){return v}});var n=r(24246),i=r(27378),a=r(45434),o=r(23615),l=r.n(o);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}var d={top:0,right:0,bottom:0,left:0},u=function(e){var t,r=e.direction,n=e.itemsSpacing,i=e.padding,a=e.itemCount,o=e.itemWidth,l=e.itemHeight;if("number"!=typeof i&&("object"!=typeof(t=i)||Array.isArray(t)||null===t))throw new Error("Invalid property padding, must be one of: number, object");var u="number"==typeof i?{top:i,right:i,bottom:i,left:i}:s({},d,i),c=u.left+u.right,g=u.top+u.bottom,p=o+c,f=l+g,m=(a-1)*n;return"row"===r?p=o*a+m+c:"column"===r&&(f=l*a+m+g),{width:p,height:f,padding:u}},c=function(e){var t=e.anchor,r=e.translateX,n=e.translateY,i=e.containerWidth,a=e.containerHeight,o=e.width,l=e.height,s=r,d=n;switch(t){case"top":s+=(i-o)/2;break;case"top-right":s+=i-o;break;case"right":s+=i-o,d+=(a-l)/2;break;case"bottom-right":s+=i-o,d+=a-l;break;case"bottom":s+=(i-o)/2,d+=a-l;break;case"bottom-left":d+=a-l;break;case"left":d+=(a-l)/2;break;case"center":s+=(i-o)/2,d+=(a-l)/2}return{x:s,y:d}},g=function(e){var t,r,n,i,a,o,l=e.direction,s=e.justify,d=e.symbolSize,u=e.symbolSpacing,c=e.width,g=e.height;switch(l){case"left-to-right":t=0,r=(g-d)/2,i=g/2,o="central",!0===s?(n=c,a="end"):(n=d+u,a="start");break;case"right-to-left":t=c-d,r=(g-d)/2,i=g/2,o="central",!0===s?(n=0,a="start"):(n=c-d-u,a="end");break;case"top-to-bottom":t=(c-d)/2,r=0,n=c/2,a="middle",!0===s?(i=g,o="alphabetic"):(i=d+u,o="text-before-edge");break;case"bottom-to-top":t=(c-d)/2,r=g-d,n=c/2,a="middle",!0===s?(i=0,o="text-before-edge"):(i=g-d-u,o="alphabetic")}return{symbolX:t,symbolY:r,labelX:n,labelY:i,labelAnchor:a,labelAlignment:o}},p={circle:function(e){var t=e.x,r=e.y,i=e.size,a=e.fill,o=e.opacity,l=void 0===o?1:o,s=e.borderWidth,d=void 0===s?0:s,u=e.borderColor;return(0,n.jsx)("circle",{r:i/2,cx:t+i/2,cy:r+i/2,fill:a,opacity:l,strokeWidth:d,stroke:void 0===u?"transparent":u,style:{pointerEvents:"none"}})},diamond:function(e){var t=e.x,r=e.y,i=e.size,a=e.fill,o=e.opacity,l=void 0===o?1:o,s=e.borderWidth,d=void 0===s?0:s,u=e.borderColor;return(0,n.jsx)("g",{transform:"translate("+t+","+r+")",children:(0,n.jsx)("path",{d:"\n                    M"+i/2+" 0\n                    L"+.8*i+" "+i/2+"\n                    L"+i/2+" "+i+"\n                    L"+.2*i+" "+i/2+"\n                    L"+i/2+" 0\n                ",fill:a,opacity:l,strokeWidth:d,stroke:void 0===u?"transparent":u,style:{pointerEvents:"none"}})})},square:function(e){var t=e.x,r=e.y,i=e.size,a=e.fill,o=e.opacity,l=void 0===o?1:o,s=e.borderWidth,d=void 0===s?0:s,u=e.borderColor;return(0,n.jsx)("rect",{x:t,y:r,fill:a,opacity:l,strokeWidth:d,stroke:void 0===u?"transparent":u,width:i,height:i,style:{pointerEvents:"none"}})},triangle:function(e){var t=e.x,r=e.y,i=e.size,a=e.fill,o=e.opacity,l=void 0===o?1:o,s=e.borderWidth,d=void 0===s?0:s,u=e.borderColor;return(0,n.jsx)("g",{transform:"translate("+t+","+r+")",children:(0,n.jsx)("path",{d:"\n                M"+i/2+" 0\n                L"+i+" "+i+"\n                L0 "+i+"\n                L"+i/2+" 0\n            ",fill:a,opacity:l,strokeWidth:d,stroke:void 0===u?"transparent":u,style:{pointerEvents:"none"}})})}},f=function(e){var t,r,o,l,d,u,c,f,m,h,b,y=e.x,v=e.y,x=e.width,k=e.height,A=e.data,C=e.direction,B=void 0===C?"left-to-right":C,M=e.justify,S=void 0!==M&&M,w=e.textColor,R=e.background,j=void 0===R?"transparent":R,X=e.opacity,W=void 0===X?1:X,O=e.symbolShape,q=void 0===O?"square":O,E=e.symbolSize,L=void 0===E?16:E,T=e.symbolSpacing,V=void 0===T?8:T,I=e.symbolBorderWidth,G=void 0===I?0:I,z=e.symbolBorderColor,F=void 0===z?"transparent":z,H=e.onClick,D=e.onMouseEnter,P=e.onMouseLeave,Y=e.toggleSerie,_=e.effects,Z=(0,i.useState)({}),J=Z[0],N=Z[1],U=(0,a.Fg)(),$=(0,i.useCallback)((function(e){if(_){var t=_.filter((function(e){return"hover"===e.on})).reduce((function(e,t){return s({},e,t.style)}),{});N(t)}null==D||D(A,e)}),[D,A,_]),Q=(0,i.useCallback)((function(e){if(_){var t=_.filter((function(e){return"hover"!==e.on})).reduce((function(e,t){return s({},e,t.style)}),{});N(t)}null==P||P(A,e)}),[P,A,_]),K=g({direction:B,justify:S,symbolSize:null!=(t=J.symbolSize)?t:L,symbolSpacing:V,width:x,height:k}),ee=K.symbolX,te=K.symbolY,re=K.labelX,ne=K.labelY,ie=K.labelAnchor,ae=K.labelAlignment,oe=[H,D,P,Y].some((function(e){return void 0!==e})),le="function"==typeof q?q:p[q];return(0,n.jsxs)("g",{transform:"translate("+y+","+v+")",style:{opacity:null!=(r=J.itemOpacity)?r:W},children:[(0,n.jsx)("rect",{width:x,height:k,fill:null!=(o=J.itemBackground)?o:j,style:{cursor:oe?"pointer":"auto"},onClick:function(e){null==H||H(A,e),null==Y||Y(A.id)},onMouseEnter:$,onMouseLeave:Q}),i.createElement(le,s({id:A.id,x:ee,y:te,size:null!=(l=J.symbolSize)?l:L,fill:null!=(d=null!=(u=A.fill)?u:A.color)?d:"black",borderWidth:null!=(c=J.symbolBorderWidth)?c:G,borderColor:null!=(f=J.symbolBorderColor)?f:F},A.hidden?U.legends.hidden.symbol:void 0)),(0,n.jsx)("text",{textAnchor:ie,style:s({},U.legends.text,{fill:null!=(m=null!=(h=null!=(b=J.itemTextColor)?b:w)?h:U.legends.text.fill)?m:"black",dominantBaseline:ae,pointerEvents:"none",userSelect:"none"},A.hidden?U.legends.hidden.text:void 0),x:re,y:ne,children:A.label})]})},m=function(e){var t=e.data,r=e.x,i=e.y,a=e.direction,o=e.padding,l=void 0===o?0:o,s=e.justify,d=e.effects,c=e.itemWidth,g=e.itemHeight,p=e.itemDirection,m=void 0===p?"left-to-right":p,h=e.itemsSpacing,b=void 0===h?0:h,y=e.itemTextColor,v=e.itemBackground,x=void 0===v?"transparent":v,k=e.itemOpacity,A=void 0===k?1:k,C=e.symbolShape,B=e.symbolSize,M=e.symbolSpacing,S=e.symbolBorderWidth,w=e.symbolBorderColor,R=e.onClick,j=e.onMouseEnter,X=e.onMouseLeave,W=e.toggleSerie,O=u({itemCount:t.length,itemWidth:c,itemHeight:g,itemsSpacing:b,direction:a,padding:l}).padding,q="row"===a?c+b:0,E="column"===a?g+b:0;return(0,n.jsx)("g",{transform:"translate("+r+","+i+")",children:t.map((function(e,t){return(0,n.jsx)(f,{data:e,x:t*q+O.left,y:t*E+O.top,width:c,height:g,direction:m,justify:s,effects:d,textColor:y,background:x,opacity:A,symbolShape:C,symbolSize:B,symbolSpacing:M,symbolBorderWidth:S,symbolBorderColor:w,onClick:R,onMouseEnter:j,onMouseLeave:X,toggleSerie:W},t)}))})},h=function(e){var t=e.data,r=e.containerWidth,i=e.containerHeight,a=e.translateX,o=void 0===a?0:a,l=e.translateY,s=void 0===l?0:l,d=e.anchor,g=e.direction,p=e.padding,f=void 0===p?0:p,h=e.justify,b=e.itemsSpacing,y=void 0===b?0:b,v=e.itemWidth,x=e.itemHeight,k=e.itemDirection,A=e.itemTextColor,C=e.itemBackground,B=e.itemOpacity,M=e.symbolShape,S=e.symbolSize,w=e.symbolSpacing,R=e.symbolBorderWidth,j=e.symbolBorderColor,X=e.onClick,W=e.onMouseEnter,O=e.onMouseLeave,q=e.toggleSerie,E=e.effects,L=u({itemCount:t.length,itemsSpacing:y,itemWidth:v,itemHeight:x,direction:g,padding:f}),T=L.width,V=L.height,I=c({anchor:d,translateX:o,translateY:s,containerWidth:r,containerHeight:i,width:T,height:V}),G=I.x,z=I.y;return(0,n.jsx)(m,{data:t,x:G,y:z,direction:g,padding:f,justify:h,effects:E,itemsSpacing:y,itemWidth:v,itemHeight:x,itemDirection:k,itemTextColor:A,itemBackground:C,itemOpacity:B,symbolShape:M,symbolSize:S,symbolSpacing:w,symbolBorderWidth:R,symbolBorderColor:j,onClick:X,onMouseEnter:W,onMouseLeave:O,toggleSerie:"boolean"==typeof q?void 0:q})},b={start:"left",middle:"center",end:"right"},y=function(e,t){var r=t.data,n=t.containerWidth,i=t.containerHeight,a=t.translateX,o=void 0===a?0:a,l=t.translateY,s=void 0===l?0:l,d=t.anchor,p=t.direction,f=t.padding,m=void 0===f?0:f,h=t.justify,y=void 0!==h&&h,v=t.itemsSpacing,x=void 0===v?0:v,k=t.itemWidth,A=t.itemHeight,C=t.itemDirection,B=void 0===C?"left-to-right":C,M=t.itemTextColor,S=t.symbolSize,w=void 0===S?16:S,R=t.symbolSpacing,j=void 0===R?8:R,X=t.theme,W=u({itemCount:r.length,itemWidth:k,itemHeight:A,itemsSpacing:x,direction:p,padding:m}),O=W.width,q=W.height,E=W.padding,L=c({anchor:d,translateX:o,translateY:s,containerWidth:n,containerHeight:i,width:O,height:q}),T=L.x,V=L.y,I="row"===p?k+x:0,G="column"===p?A+x:0;e.save(),e.translate(T,V),e.font=X.legends.text.fontSize+"px "+(X.legends.text.fontFamily||"sans-serif"),r.forEach((function(t,r){var n,i,a=r*I+E.left,o=r*G+E.top,l=g({direction:B,justify:y,symbolSize:w,symbolSpacing:j,width:k,height:A}),s=l.symbolX,d=l.symbolY,u=l.labelX,c=l.labelY,p=l.labelAnchor,f=l.labelAlignment;e.fillStyle=null!=(n=t.color)?n:"black",e.fillRect(a+s,o+d,w,w),e.textAlign=b[p],"central"===f&&(e.textBaseline="middle"),e.fillStyle=null!=(i=null!=M?M:X.legends.text.fill)?i:"black",e.fillText(String(t.label),a+u,o+c)})),e.restore()},v=function(e){var t=e.scale,r=e.domain,n=e.reverse,a=void 0!==n&&n,o=e.valueFormat,l=void 0===o?function(e){return e}:o,s=e.separator,d=void 0===s?" - ":s;return(0,i.useMemo)((function(){var e=(null!=r?r:t.range()).map((function(e,r){var n=t.invertExtent(e),i=n[0],a=n[1];return{id:e,index:r,extent:[i,a],label:""+l(i)+d+l(a),value:t(i),color:e}}));return!0===a&&e.reverse(),e}),[r,t,a])},x={data:l().arrayOf(l().object),anchor:l().oneOf(["top","top-right","right","bottom-right","bottom","bottom-left","left","top-left","center"]).isRequired,translateX:l().number,translateY:l().number,direction:l().oneOf(["row","column"]).isRequired,itemsSpacing:l().number,itemWidth:l().number.isRequired,itemHeight:l().number.isRequired,itemDirection:l().oneOf(["left-to-right","right-to-left","top-to-bottom","bottom-to-top"]),itemTextColor:l().string,itemBackground:l().string,itemOpacity:l().number,symbolShape:l().oneOfType([l().oneOf(["circle","diamond","square","triangle"]),l().func]),symbolSize:l().number,symbolSpacing:l().number,symbolBorderWidth:l().number,symbolBorderColor:l().string,onClick:l().func,onMouseEnter:l().func,onMouseLeave:l().func,effects:l().arrayOf(l().shape({on:l().oneOfType([l().oneOf(["hover"])]).isRequired,style:l().shape({itemTextColor:l().string,itemBackground:l().string,itemOpacity:l().number,symbolSize:l().number,symbolBorderWidth:l().number,symbolBorderColor:l().string}).isRequired}))}},73855:function(e,t,r){r.d(t,{Gm:function(){return O},W_:function(){return q},XB:function(){return w}});var n=r(89193),i=r(24246),a=r(27378),o=r(45434),l=r(30042),s=r(47425),d=r(58493),u=r(770);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}var g=function(e){var t=e.label,r=e.animated,n=(0,o.Fg)();return(0,i.jsxs)(d.q.g,{opacity:r.opacity,children:[(0,i.jsx)(d.q.line,{x1:r.x1,y1:r.y1,x2:r.x2,y2:r.y2,style:n.axis.ticks.line}),(0,i.jsx)(d.q.text,{dx:r.textX,dy:r.textY,dominantBaseline:"central",style:n.axis.ticks.text,textAnchor:"middle",children:t})]})},p=function(e,t,r){var n=(0,o.re)((0,o.Ht)(e),t),i=(0,o.re)((0,o.Ht)(e),r);return{x1:n.x,y1:n.y,x2:i.x,y2:i.y}},f=function(e,t){var r=(0,o.re)((0,o.Ht)(e),t);return{textX:r.x,textY:r.y}},m=function(e){var t=e.type,r=e.center,n=void 0===r?[0,0]:r,s=e.radius,m=e.startAngle,h=e.endAngle,b=e.scale,y=e.tickSize,v=void 0===y?5:y,x=e.tickPadding,k=void 0===x?12:x,A=e.tickComponent,C=void 0===A?g:A,B=m-90,M=h-90,S=(0,o.Fg)(),w=(0,o.tf)(),R=w.animate,j=w.config,X=(0,d.useSpring)({radius:s,startAngle:B,endAngle:M,opacity:1,immediate:!R,config:j}),W=(0,a.useMemo)((function(){return(0,u.xX)(b).map((function(e,t){return{key:t,label:e,angle:b(e)-90}}))}),[b]),O="inner"===t?s-v:s+v,q="inner"===t?O-k:O+k,E=(0,d.useTransition)(W,{keys:function(e){return e.key},initial:function(e){return c({},p(e.angle,s,O),f(e.angle,q),{opacity:1})},from:function(e){return c({},p(e.angle,s,O),f(e.angle,q),{opacity:0})},enter:function(e){return c({},p(e.angle,s,O),f(e.angle,q),{opacity:1})},update:function(e){return c({},p(e.angle,s,O),f(e.angle,q),{opacity:1})},leave:function(e){return c({},p(e.angle,s,O),f(e.angle,q),{opacity:0})},immediate:!R,config:j});return(0,i.jsxs)("g",{transform:"translate("+n[0]+", "+n[1]+")",children:[(0,i.jsx)(l.Ju,c({animated:X},S.axis.domain.line,{fill:"none"})),E((function(e,t){return(0,a.createElement)(C,{key:t.key,label:t.label,animated:e})}))]})},h=function(e){var t=e.scale,r=e.innerRadius,n=e.outerRadius,l=(0,o.Fg)(),s=(0,a.useMemo)((function(){return(0,u.xX)(t).map((function(e,r){return{id:r,angle:t(e)-90}}))}),[t]),g=(0,o.tf)(),p=g.animate,f=g.config,m=(0,d.useTransition)(s,{keys:function(e){return e.id},initial:function(e){return{angle:e.angle,opacity:1}},from:function(e){return{angle:e.angle,opacity:0}},enter:function(e){return{angle:e.angle,opacity:1}},update:function(e){return{angle:e.angle,opacity:1}},leave:function(e){return{angle:e.angle,opacity:0}},config:f,immediate:!p});return(0,i.jsx)(i.Fragment,{children:m((function(e,t){return(0,i.jsx)(d.q.g,{transform:e.angle.to((function(e){return"rotate("+e+")"})),opacity:e.opacity,children:(0,i.jsx)("line",c({x1:r,x2:n},l.grid.line))},t.id)}))})},b=function(e){var t=e.scale,r=e.startAngle,n=e.endAngle,s=(0,o.Fg)(),g=r-90,p=n-90,f=(0,a.useMemo)((function(){return(0,u.xX)(t).map((function(e,r){var n=t(e);return"bandwidth"in t&&(n+=t.bandwidth()/2),{id:r,radius:n}}))}),[t]),m=(0,o.tf)(),h=m.animate,b=m.config,y=(0,d.useTransition)(f,{keys:function(e){return e.id},initial:function(e){return{radius:e.radius,startAngle:g,endAngle:p,opacity:1}},from:function(e){return{radius:e.radius,startAngle:g,endAngle:p,opacity:0}},enter:function(e){return{radius:e.radius,startAngle:g,endAngle:p,opacity:1}},update:function(e){return{radius:e.radius,startAngle:g,endAngle:p,opacity:1}},leave:function(e){return{radius:e.radius,startAngle:g,endAngle:p,opacity:0}},config:b,immediate:!h});return(0,i.jsx)(i.Fragment,{children:y((function(e,t){return(0,i.jsx)(l.Ju,c({animated:e},s.grid.line,{strokeOpacity:e.opacity,fill:"none"}),t.id)}))})},y=function(e){var t=e.center,r=e.enableRadialGrid,n=e.enableCircularGrid,a=e.angleScale,o=e.radiusScale,l=e.startAngle,s=e.endAngle,d=Math.min.apply(Math,o.range()),u=Math.max.apply(Math,o.range());return(0,i.jsxs)("g",{transform:"translate("+t[0]+","+t[1]+")",children:[r&&(0,i.jsx)(h,{scale:a,innerRadius:d,outerRadius:u}),n&&(0,i.jsx)(b,{scale:o,startAngle:l,endAngle:s})]})},v=function(e){var t=e.label,r=e.textAnchor,n=e.animated,a=(0,o.Fg)();return(0,i.jsxs)(d.q.g,{opacity:n.opacity,transform:(0,d.to)([n.y,n.rotation],(function(e,t){return"translate("+e+", 0) rotate("+t+")"})),children:[(0,i.jsx)(d.q.line,{x2:n.length,style:a.axis.ticks.line}),(0,i.jsx)(d.q.text,{dx:n.textX,textAnchor:r,dominantBaseline:"central",style:a.axis.ticks.text,children:t})]})},x=function(e){var t,r,n,l,s=e.type,c=e.center,g=e.angle,p=e.scale,f=e.tickSize,m=void 0===f?5:f,h=e.tickPadding,b=void 0===h?5:h,y=e.tickRotation,x=void 0===y?0:y,k=e.tickComponent,A=void 0===k?v:k,C=(0,o.LW)(g);"start"===s?(l=90+x,C<=90?(n=(r=-m)-b,t="end"):C<270?(n=(r=m)+b,t="start",l-=180):(n=(r=-m)-b,t="end")):(l=90+x,C<90?(n=(r=m)+b,t="start"):C<270?(n=(r=-m)-b,t="end",l-=180):(n=(r=m)+b,t="start"));var B=(0,a.useMemo)((function(){return(0,u.xX)(p).map((function(e,t){var r=p(e);return"bandwidth"in p&&(r+=p.bandwidth()/2),{key:t,label:e,position:r}}))}),[p]),M=(0,o.tf)(),S=M.animate,w=M.config,R=(0,d.useSpring)({rotation:g-90,immediate:!S,config:w}),j=(0,d.useTransition)(B,{keys:function(e){return e.key},initial:function(e){return{y:e.position,textX:n,rotation:l,length:r,opacity:1}},from:function(e){return{y:e.position,textX:n,rotation:l,length:r,opacity:0}},enter:function(e){return{y:e.position,textX:n,rotation:l,length:r,opacity:1}},update:function(e){return{y:e.position,textX:n,rotation:l,length:r,opacity:1}},leave:function(e){return{y:e.position,textX:n,rotation:l,length:r,opacity:0}},immediate:!S,config:w});return(0,i.jsx)("g",{transform:"translate("+c[0]+", "+c[1]+")",children:(0,i.jsx)(d.q.g,{transform:R.rotation.to((function(e){return"rotate("+e+")"})),children:j((function(e,i){return(0,a.createElement)(A,{key:i.key,label:i.label,y:i.position,textX:n,rotation:l,length:r,textAnchor:t,animated:e})}))})})},k=r(9841),A=r(46448),C=r(29140),B=r(79234);function M(){return M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},M.apply(this,arguments)}var S={maxValue:"auto",layers:["grid","tracks","bars","labels","legends"],startAngle:0,endAngle:270,innerRadius:.3,padding:.2,padAngle:0,cornerRadius:0,enableTracks:!0,tracksColor:"rgba(0, 0, 0, .15)",enableRadialGrid:!0,enableCircularGrid:!0,radialAxisStart:{},radialAxisEnd:null,circularAxisInner:null,circularAxisOuter:{},colors:{scheme:"nivo"},borderWidth:0,borderColor:{from:"color",modifiers:[["darker",1]]},enableLabels:!1,label:"formattedValue",labelsSkipAngle:10,labelsRadiusOffset:.5,labelsTextColor:{theme:"labels.text.fill"},isInteractive:!0,tooltip:function(e){var t=e.bar;return(0,i.jsx)(n._5,{enableChip:!0,id:(0,i.jsxs)("span",{children:[t.category," - ",t.groupId]}),value:t.formattedValue,color:t.color})},legends:[],animate:!0,motionConfig:"gentle",transitionMode:"centerRadius",renderWrapper:!0},w=M({},S),R=function(e){var t=e.center,r=e.bars,o=e.borderWidth,s=e.borderColor,d=e.arcGenerator,u=e.isInteractive,c=e.tooltip,g=e.onClick,p=e.onMouseEnter,f=e.onMouseMove,m=e.onMouseLeave,h=e.transitionMode,b=(0,n.lL)(),y=b.showTooltipFromEvent,v=b.hideTooltip,x=(0,a.useCallback)((function(e,t){null==g||g(e,t)}),[g]),k=(0,a.useCallback)((function(e,t){y((0,a.createElement)(c,{bar:e}),t),null==p||p(e,t)}),[y,c,p]),A=(0,a.useCallback)((function(e,t){y((0,a.createElement)(c,{bar:e}),t),null==f||f(e,t)}),[y,c,f]),C=(0,a.useCallback)((function(e,t){v(),null==m||m(e,t)}),[v,m]);return(0,i.jsx)(l.Bs,{center:t,data:r,arcGenerator:d,borderWidth:o,borderColor:s,transitionMode:h,onClick:u?x:void 0,onMouseEnter:u?k:void 0,onMouseMove:u?A:void 0,onMouseLeave:u?C:void 0})},j=function(e){var t=e.center,r=e.tracks,n=e.arcGenerator,a=e.transitionMode;return(0,i.jsx)(l.Bs,{center:t,data:r,arcGenerator:n,borderWidth:0,borderColor:"none",transitionMode:a})},X=["isInteractive","animate","motionConfig","theme","renderWrapper"],W=function(e){var t=e.data,r=e.maxValue,n=void 0===r?w.maxValue:r,d=e.valueFormat,c=e.startAngle,g=void 0===c?w.startAngle:c,p=e.endAngle,f=void 0===p?w.endAngle:p,h=e.innerRadius,b=void 0===h?w.innerRadius:h,v=e.padding,X=void 0===v?w.padding:v,W=e.padAngle,O=void 0===W?w.padAngle:W,q=e.cornerRadius,E=void 0===q?w.cornerRadius:q,L=e.width,T=e.height,V=e.margin,I=e.layers,G=void 0===I?w.layers:I,z=e.enableTracks,F=void 0===z?w.enableTracks:z,H=e.tracksColor,D=void 0===H?w.tracksColor:H,P=e.enableRadialGrid,Y=void 0===P?w.enableRadialGrid:P,_=e.enableCircularGrid,Z=void 0===_?w.enableCircularGrid:_,J=e.radialAxisStart,N=void 0===J?w.radialAxisStart:J,U=e.radialAxisEnd,$=void 0===U?w.radialAxisEnd:U,Q=e.circularAxisInner,K=void 0===Q?w.circularAxisInner:Q,ee=e.circularAxisOuter,te=void 0===ee?w.circularAxisOuter:ee,re=e.colors,ne=void 0===re?w.colors:re,ie=e.borderWidth,ae=void 0===ie?w.borderWidth:ie,oe=e.borderColor,le=void 0===oe?w.borderColor:oe,se=e.enableLabels,de=void 0===se?w.enableLabels:se,ue=e.label,ce=void 0===ue?w.label:ue,ge=e.labelsSkipAngle,pe=void 0===ge?w.labelsSkipAngle:ge,fe=e.labelsRadiusOffset,me=void 0===fe?w.labelsRadiusOffset:fe,he=e.labelsTextColor,be=void 0===he?w.labelsTextColor:he,ye=e.isInteractive,ve=void 0===ye?w.isInteractive:ye,xe=e.tooltip,ke=void 0===xe?w.tooltip:xe,Ae=e.onClick,Ce=e.onMouseEnter,Be=e.onMouseMove,Me=e.onMouseLeave,Se=e.transitionMode,we=void 0===Se?w.transitionMode:Se,Re=e.legends,je=void 0===Re?w.legends:Re,Xe=e.role,We=e.ariaLabel,Oe=e.ariaLabelledBy,qe=e.ariaDescribedBy,Ee=(0,o.Bs)(L,T,V),Le=Ee.margin,Te=Ee.innerWidth,Ve=Ee.innerHeight,Ie=Ee.outerWidth,Ge=Ee.outerHeight,ze=(0,o.zm)(g,f),Fe=ze[0],He=ze[1],De=function(e){var t=e.data,r=e.maxValue,n=void 0===r?w.maxValue:r,i=e.valueFormat,l=e.startAngle,s=void 0===l?S.startAngle:l,d=e.endAngle,c=void 0===d?S.endAngle:d,g=e.innerRadiusRatio,p=void 0===g?S.innerRadius:g,f=e.padding,m=void 0===f?S.padding:f,h=e.padAngle,b=void 0===h?S.padAngle:h,y=e.cornerRadius,v=void 0===y?S.cornerRadius:y,x=e.width,M=e.height,R=e.colors,j=void 0===R?S.colors:R,X=e.tracksColor,W=void 0===X?S.tracksColor:X,O=(0,a.useMemo)((function(){return[x/2,M/2]}),[x,M]),q=Math.min.apply(Math,O),E=q*Math.min(p,1),L=(0,B.U)(j,"category"),T=(0,a.useMemo)((function(){var e={serieIds:[],categories:[],groups:[],maxValue:0};return t.forEach((function(t){e.serieIds.push(t.id);var r=0;t.data.forEach((function(t){e.categories.includes(t.x)||e.categories.push(t.x),r+=t.y})),e.groups.push({id:t.id,total:r,data:t.data})})),e.maxValue="auto"===n?Math.max.apply(Math,e.groups.map((function(e){return e.total}))):n,e}),[t,n]),V=T.serieIds,I=T.categories,G=T.groups,z=T.maxValue,F=(0,a.useMemo)((function(){return(0,u.__)((0,k.Z)().domain([0,z]).range([s,c]))}),[z,s,c]),H=(0,a.useMemo)((function(){return(0,u.NB)((0,A.Z)().domain(V).range([E,q]).padding(m))}),[V,q,E,m]),D=(0,a.useMemo)((function(){return(0,C.Z)().startAngle((function(e){return e.startAngle})).endAngle((function(e){return e.endAngle})).innerRadius((function(e){return e.innerRadius})).outerRadius((function(e){return e.outerRadius})).cornerRadius(v).padAngle((0,o.Ht)(b))}),[v,b]),P=(0,o.O_)(i),Y=(0,a.useMemo)((function(){var e=[];return G.forEach((function(t){var r=0,n=H(t.id),i=n+H.bandwidth();t.data.forEach((function(a){var l=r+a.y,s={id:t.id+"."+a.x,data:a,groupId:t.id,category:a.x,value:a.y,formattedValue:P(a.y),color:"",stackedValue:l,arc:{startAngle:(0,o.Ht)(F(r)),endAngle:(0,o.Ht)(F(l)),innerRadius:n,outerRadius:i}};s.color=L(s),r+=a.y,e.push(s)}))})),e}),[G,H,F,L,P]),_=(0,o.Ht)(s),Z=(0,o.Ht)(c),J=(0,a.useMemo)((function(){return(0,u.xX)(H).map((function(e){var t=H(e);return{id:e,color:W,arc:{startAngle:_,endAngle:Z,innerRadius:t,outerRadius:t+H.bandwidth()}}}))}),[H,_,Z,W]),N=(0,a.useMemo)((function(){return I.map((function(e){var t=Y.find((function(t){return t.category===e})),r=t?t.color:void 0;return{id:e,label:e,color:r}}))}),[I,Y]),U=(0,a.useMemo)((function(){return{center:O,outerRadius:q,innerRadius:E,bars:Y,arcGenerator:D,radiusScale:H,valueScale:F}}),[O,q,E,Y,D,H,F]);return{center:O,outerRadius:q,innerRadius:E,bars:Y,arcGenerator:D,radiusScale:H,valueScale:F,tracks:J,legendData:N,customLayerProps:U}}({data:t,maxValue:n,valueFormat:d,startAngle:Fe,endAngle:He,innerRadiusRatio:b,padding:X,padAngle:O,cornerRadius:E,width:Te,height:Ve,colors:ne,tracksColor:D}),Pe=De.center,Ye=De.innerRadius,_e=De.outerRadius,Ze=De.bars,Je=De.arcGenerator,Ne=De.radiusScale,Ue=De.valueScale,$e=De.tracks,Qe=De.legendData,Ke=De.customLayerProps,et={grid:null,tracks:null,bars:null,labels:null,legends:null};return G.includes("grid")&&(et.grid=(0,i.jsxs)(a.Fragment,{children:[(0,i.jsx)(y,{center:Pe,enableRadialGrid:Y,enableCircularGrid:Z,angleScale:Ue,radiusScale:Ne,startAngle:Fe,endAngle:He}),N&&(0,i.jsx)(x,M({type:"start",center:Pe,angle:Math.min(Fe,He),scale:Ne},N)),$&&(0,i.jsx)(x,M({type:"end",center:Pe,angle:Math.max(Fe,He),scale:Ne},$)),K&&(0,i.jsx)(m,M({type:"inner",center:Pe,radius:Ye,startAngle:Fe,endAngle:He,scale:Ue},K)),te&&(0,i.jsx)(m,M({type:"outer",center:Pe,radius:_e,startAngle:Fe,endAngle:He,scale:Ue},te))]},"grid")),G.includes("tracks")&&F&&(et.tracks=(0,i.jsx)(j,{center:Pe,tracks:$e,arcGenerator:Je,transitionMode:we},"tracks")),G.includes("bars")&&(et.bars=(0,i.jsx)(R,{center:Pe,bars:Ze,borderWidth:ae,borderColor:le,arcGenerator:Je,isInteractive:ve,tooltip:ke,onClick:Ae,onMouseEnter:Ce,onMouseMove:Be,onMouseLeave:Me,transitionMode:we},"bars")),G.includes("labels")&&de&&(et.labels=(0,i.jsx)(l.Xr,{center:Pe,data:Ze,label:ce,radiusOffset:me,skipAngle:pe,textColor:be,transitionMode:we},"labels")),G.includes("legends")&&je.length>0&&(et.legends=(0,i.jsx)(a.Fragment,{children:je.map((function(e,t){return(0,i.jsx)(s.$6,M({},e,{containerWidth:Te,containerHeight:Ve,data:Qe}),t)}))},"legends")),(0,i.jsx)(o.tM,{width:Ie,height:Ge,margin:Le,role:Xe,ariaLabel:We,ariaLabelledBy:Oe,ariaDescribedBy:qe,children:G.map((function(e,t){var r;return"function"==typeof e?(0,i.jsx)(a.Fragment,{children:(0,a.createElement)(e,Ke)},t):null!=(r=null==et?void 0:et[e])?r:null}))})},O=function(e){var t=e.isInteractive,r=void 0===t?w.isInteractive:t,n=e.animate,a=void 0===n?w.animate:n,l=e.motionConfig,s=void 0===l?w.motionConfig:l,d=e.theme,u=e.renderWrapper,c=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,X);return(0,i.jsx)(o.W2,{animate:a,isInteractive:r,motionConfig:s,renderWrapper:u,theme:d,children:(0,i.jsx)(W,M({isInteractive:r},c))})},q=function(e){return(0,i.jsx)(o.d,{children:function(t){var r=t.width,n=t.height;return(0,i.jsx)(O,M({width:r,height:n},e))}})}}}]);
//# sourceMappingURL=component---src-pages-radial-bar-index-tsx-f961213850db2aa403df.js.map