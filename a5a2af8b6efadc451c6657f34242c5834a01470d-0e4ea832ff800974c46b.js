(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[9666],{54358:function(e,t,n){"use strict";n.d(t,{q6:function(){return j},dS:function(){return B},O2:function(){return k},zs:function(){return S}});var i=n(27378),a=n(48159),o=n.n(a),r=n(78581),l=n.n(r),d=n(69238),u=n.n(d),s=n(45434),c=n(58493),h=n(24246);function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},f.apply(this,arguments)}var g=4,b=120,v=8,x=function(e){return"circle"===e.type},m=function(e){return"dot"===e.type},y=function(e){return"rect"===e.type},p=function(e){var t,n,i=e.x,a=e.y,o=e.noteX,r=e.noteY,d=e.noteWidth,u=void 0===d?b:d,c=e.noteTextOffset,h=void 0===c?v:c;if(l()(o))t=i+o;else{if(void 0===o.abs)throw new Error("noteX should be either a number or an object containing an 'abs' property");t=o.abs}if(l()(r))n=a+r;else{if(void 0===r.abs)throw new Error("noteY should be either a number or an object containing an 'abs' property");n=r.abs}var f=i,g=a,m=function(e,t,n,i){var a=Math.atan2(i-t,n-e);return(0,s.bt)((0,s.vi)(a))}(i,a,t,n);if(x(e)){var p=(0,s.re)((0,s.Ht)(m),e.size/2);f+=p.x,g+=p.y}if(y(e)){var k=Math.round((m+90)/45)%8;0===k&&(g-=e.height/2),1===k&&(f+=e.width/2,g-=e.height/2),2===k&&(f+=e.width/2),3===k&&(f+=e.width/2,g+=e.height/2),4===k&&(g+=e.height/2),5===k&&(f-=e.width/2,g+=e.height/2),6===k&&(f-=e.width/2),7===k&&(f-=e.width/2,g-=e.height/2)}var S=t,w=t;return(m+90)%360>180?(S-=u,w-=u):w+=u,{points:[[f,g],[t,n],[w,n]],text:[S,n-h],angle:m+90}},k=function(e){var t=e.data,n=e.annotations,a=e.getPosition,r=e.getDimensions;return(0,i.useMemo)((function(){return function(e){var t=e.data,n=e.annotations,i=e.getPosition,a=e.getDimensions;return n.reduce((function(e,n){var r=n.offset||0;return[].concat(e,u()(t,n.match).map((function(e){var t=i(e),l=a(e);return(x(n)||y(n))&&(l.size=l.size+2*r,l.width=l.width+2*r,l.height=l.height+2*r),f({},o()(n,["match","offset"]),t,l,{size:n.size||l.size,datum:e})})))}),[])}({data:t,annotations:n,getPosition:a,getDimensions:r})}),[t,n,a,r])},S=function(e){var t=e.annotations;return(0,i.useMemo)((function(){return t.map((function(e){return f({},e,{computed:p(f({},e))})}))}),[t])},w=function(e){var t=e.datum,n=e.x,a=e.y,r=e.note,l=(0,s.Fg)(),d=(0,s.tf)(),u=d.animate,g=d.config,b=(0,c.useSpring)({x:n,y:a,config:g,immediate:!u});return"function"==typeof r?(0,i.createElement)(r,{x:n,y:a,datum:t}):(0,h.jsxs)(h.Fragment,{children:[l.annotations.text.outlineWidth>0&&(0,h.jsx)(c.q.text,{x:b.x,y:b.y,style:f({},l.annotations.text,{strokeLinejoin:"round",strokeWidth:2*l.annotations.text.outlineWidth,stroke:l.annotations.text.outlineColor}),children:r}),(0,h.jsx)(c.q.text,{x:b.x,y:b.y,style:o()(l.annotations.text,["outlineWidth","outlineColor"]),children:r})]})},W=function(e){var t=e.points,n=e.isOutline,a=void 0!==n&&n,o=(0,s.Fg)(),r=(0,i.useMemo)((function(){var e=t[0];return t.slice(1).reduce((function(e,t){return e+" L"+t[0]+","+t[1]}),"M"+e[0]+","+e[1])}),[t]),l=(0,s.NS)(r);if(a&&o.annotations.link.outlineWidth<=0)return null;var d=f({},o.annotations.link);return a&&(d.strokeLinecap="square",d.strokeWidth=o.annotations.link.strokeWidth+2*o.annotations.link.outlineWidth,d.stroke=o.annotations.link.outlineColor,d.opacity=o.annotations.link.outlineOpacity),(0,h.jsx)(c.q.path,{fill:"none",d:l,style:d})},C=function(e){var t=e.x,n=e.y,i=e.size,a=(0,s.Fg)(),o=(0,s.tf)(),r=o.animate,l=o.config,d=(0,c.useSpring)({x:t,y:n,radius:i/2,config:l,immediate:!r});return(0,h.jsxs)(h.Fragment,{children:[a.annotations.outline.outlineWidth>0&&(0,h.jsx)(c.q.circle,{cx:d.x,cy:d.y,r:d.radius,style:f({},a.annotations.outline,{fill:"none",strokeWidth:a.annotations.outline.strokeWidth+2*a.annotations.outline.outlineWidth,stroke:a.annotations.outline.outlineColor,opacity:a.annotations.outline.outlineOpacity})}),(0,h.jsx)(c.q.circle,{cx:d.x,cy:d.y,r:d.radius,style:a.annotations.outline})]})},L=function(e){var t=e.x,n=e.y,i=e.size,a=void 0===i?g:i,o=(0,s.Fg)(),r=(0,s.tf)(),l=r.animate,d=r.config,u=(0,c.useSpring)({x:t,y:n,radius:a/2,config:d,immediate:!l});return(0,h.jsxs)(h.Fragment,{children:[o.annotations.outline.outlineWidth>0&&(0,h.jsx)(c.q.circle,{cx:u.x,cy:u.y,r:u.radius,style:f({},o.annotations.outline,{fill:"none",strokeWidth:2*o.annotations.outline.outlineWidth,stroke:o.annotations.outline.outlineColor,opacity:o.annotations.outline.outlineOpacity})}),(0,h.jsx)(c.q.circle,{cx:u.x,cy:u.y,r:u.radius,style:o.annotations.symbol})]})},M=function(e){var t=e.x,n=e.y,i=e.width,a=e.height,o=e.borderRadius,r=void 0===o?6:o,l=(0,s.Fg)(),d=(0,s.tf)(),u=d.animate,g=d.config,b=(0,c.useSpring)({x:t-i/2,y:n-a/2,width:i,height:a,config:g,immediate:!u});return(0,h.jsxs)(h.Fragment,{children:[l.annotations.outline.outlineWidth>0&&(0,h.jsx)(c.q.rect,{x:b.x,y:b.y,rx:r,ry:r,width:b.width,height:b.height,style:f({},l.annotations.outline,{fill:"none",strokeWidth:l.annotations.outline.strokeWidth+2*l.annotations.outline.outlineWidth,stroke:l.annotations.outline.outlineColor,opacity:l.annotations.outline.outlineOpacity})}),(0,h.jsx)(c.q.rect,{x:b.x,y:b.y,rx:r,ry:r,width:b.width,height:b.height,style:l.annotations.outline})]})},j=function(e){var t=e.datum,n=e.x,a=e.y,o=e.note,r=function(e){return(0,i.useMemo)((function(){return p(e)}),[e])}(e);if(!function(e){var t=typeof e;return(0,i.isValidElement)(e)||"string"===t||"function"===t||"object"===t}(o))throw new Error("note should be a valid react element");return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(W,{points:r.points,isOutline:!0}),x(e)&&(0,h.jsx)(C,{x:n,y:a,size:e.size}),m(e)&&(0,h.jsx)(L,{x:n,y:a,size:e.size}),y(e)&&(0,h.jsx)(M,{x:n,y:a,width:e.width,height:e.height,borderRadius:e.borderRadius}),(0,h.jsx)(W,{points:r.points}),(0,h.jsx)(w,{datum:t,x:r.text[0],y:r.text[1],note:o})]})},V=function(e,t){t.forEach((function(t,n){var i=t[0],a=t[1];0===n?e.moveTo(i,a):e.lineTo(i,a)}))},B=function(e,t){var n=t.annotations,i=t.theme;0!==n.length&&(e.save(),n.forEach((function(t){if(!function(e){var t=typeof e;return"string"===t||"function"===t}(t.note))throw new Error("note is invalid for canvas implementation");i.annotations.link.outlineWidth>0&&(e.lineCap="square",e.strokeStyle=i.annotations.link.outlineColor,e.lineWidth=i.annotations.link.strokeWidth+2*i.annotations.link.outlineWidth,e.beginPath(),V(e,t.computed.points),e.stroke(),e.lineCap="butt"),x(t)&&i.annotations.outline.outlineWidth>0&&(e.strokeStyle=i.annotations.outline.outlineColor,e.lineWidth=i.annotations.outline.strokeWidth+2*i.annotations.outline.outlineWidth,e.beginPath(),e.arc(t.x,t.y,t.size/2,0,2*Math.PI),e.stroke()),m(t)&&i.annotations.symbol.outlineWidth>0&&(e.strokeStyle=i.annotations.symbol.outlineColor,e.lineWidth=2*i.annotations.symbol.outlineWidth,e.beginPath(),e.arc(t.x,t.y,t.size/2,0,2*Math.PI),e.stroke()),y(t)&&i.annotations.outline.outlineWidth>0&&(e.strokeStyle=i.annotations.outline.outlineColor,e.lineWidth=i.annotations.outline.strokeWidth+2*i.annotations.outline.outlineWidth,e.beginPath(),e.rect(t.x-t.width/2,t.y-t.height/2,t.width,t.height),e.stroke()),e.strokeStyle=i.annotations.link.stroke,e.lineWidth=i.annotations.link.strokeWidth,e.beginPath(),V(e,t.computed.points),e.stroke(),x(t)&&(e.strokeStyle=i.annotations.outline.stroke,e.lineWidth=i.annotations.outline.strokeWidth,e.beginPath(),e.arc(t.x,t.y,t.size/2,0,2*Math.PI),e.stroke()),m(t)&&(e.fillStyle=i.annotations.symbol.fill,e.beginPath(),e.arc(t.x,t.y,t.size/2,0,2*Math.PI),e.fill()),y(t)&&(e.strokeStyle=i.annotations.outline.stroke,e.lineWidth=i.annotations.outline.strokeWidth,e.beginPath(),e.rect(t.x-t.width/2,t.y-t.height/2,t.width,t.height),e.stroke()),"function"==typeof t.note?t.note(e,{datum:t.datum,x:t.computed.text[0],y:t.computed.text[1],theme:i}):(e.font=i.annotations.text.fontSize+"px "+i.annotations.text.fontFamily,e.fillStyle=i.annotations.text.fill,e.strokeStyle=i.annotations.text.outlineColor,e.lineWidth=2*i.annotations.text.outlineWidth,i.annotations.text.outlineWidth>0&&(e.lineJoin="round",e.strokeText(t.note,t.computed.text[0],t.computed.text[1]),e.lineJoin="miter"),e.fillText(t.note,t.computed.text[0],t.computed.text[1]))})),e.restore())}},74186:function(e,t,n){"use strict";n.d(t,{$Q:function(){return _},jM:function(){return Q},dc:function(){return ee},XB:function(){return C}});var i=n(44365),a=n(54358),o=n(24246),r=n(47425),l=n(45434),d=n(27378),u=n(58493),s=n(89193),c=n(79234),h=n(770),f=n(26681),g=n(97197),b=n(31091),v=n.n(b);function x(){return x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},x.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}var y,p=function(e){var t=e.bars,n=e.annotations,i=(0,a.O2)({data:t,annotations:n,getPosition:function(e){return{x:e.x+e.width/2,y:e.y+e.height/2}},getDimensions:function(e){var t=e.height,n=e.width;return{width:n,height:t,size:Math.max(n,t)}}});return(0,o.jsx)(o.Fragment,{children:i.map((function(e,t){return(0,o.jsx)(a.q6,x({},e),t)}))})},k=function(e){var t=e.width,n=e.height,i=e.legends,a=e.toggleSerie;return(0,o.jsx)(o.Fragment,{children:i.map((function(e,i){var l,d=e[0],u=e[1];return(0,o.jsx)(r.$6,x({},d,{containerWidth:t,containerHeight:n,data:null!=(l=d.data)?l:u,toggleSerie:d.toggleSerie&&"keys"===d.dataFrom?a:void 0}),i)}))})},S=["data"],w=["color","label"],W={indexBy:"id",keys:["value"],groupMode:"stacked",layout:"vertical",reverse:!1,minValue:"auto",maxValue:"auto",valueScale:{type:"linear"},indexScale:{type:"band",round:!0},padding:.1,innerPadding:0,axisBottom:{},axisLeft:{},enableGridX:!1,enableGridY:!0,enableLabel:!0,label:"formattedValue",labelSkipWidth:0,labelSkipHeight:0,labelTextColor:{from:"theme",theme:"labels.text.fill"},colorBy:"id",colors:{scheme:"nivo"},borderRadius:0,borderWidth:0,borderColor:{from:"color"},isInteractive:!0,tooltip:function(e){var t=e.color,n=e.label,i=m(e,w);return(0,o.jsx)(s._5,{id:n,value:i.formattedValue,enableChip:!0,color:t})},tooltipLabel:function(e){return e.id+" - "+e.indexValue},legends:[],initialHiddenIds:[],annotations:[],markers:[]},C=x({},W,{layers:["grid","axes","bars","markers","legends","annotations"],barComponent:function(e){var t,n=e.bar,i=n.data,a=m(n,S),r=e.style,c=r.borderColor,h=r.color,f=r.height,g=r.labelColor,b=r.labelOpacity,v=r.labelX,y=r.labelY,p=r.transform,k=r.width,w=e.borderRadius,W=e.borderWidth,C=e.label,L=e.shouldRenderLabel,M=e.isInteractive,j=e.onClick,V=e.onMouseEnter,B=e.onMouseLeave,P=e.tooltip,T=e.isFocusable,I=e.ariaLabel,F=e.ariaLabelledBy,R=e.ariaDescribedBy,E=(0,l.Fg)(),O=(0,s.lL)(),z=O.showTooltipFromEvent,H=O.showTooltipAt,X=O.hideTooltip,q=(0,d.useMemo)((function(){return function(){return(0,d.createElement)(P,x({},a,i))}}),[P,a,i]),Y=(0,d.useCallback)((function(e){null==j||j(x({color:a.color},i),e)}),[a,i,j]),D=(0,d.useCallback)((function(e){return z(q(),e)}),[z,q]),A=(0,d.useCallback)((function(e){null==V||V(i,e),z(q(),e)}),[i,V,z,q]),G=(0,d.useCallback)((function(e){null==B||B(i,e),X()}),[i,X,B]),N=(0,d.useCallback)((function(){H(q(),[a.absX+a.width/2,a.absY])}),[H,q,a]),Z=(0,d.useCallback)((function(){X()}),[X]);return(0,o.jsxs)(u.q.g,{transform:p,children:[(0,o.jsx)(u.q.rect,{width:(0,u.to)(k,(function(e){return Math.max(e,0)})),height:(0,u.to)(f,(function(e){return Math.max(e,0)})),rx:w,ry:w,fill:null!=(t=i.fill)?t:h,strokeWidth:W,stroke:c,focusable:T,tabIndex:T?0:void 0,"aria-label":I?I(i):void 0,"aria-labelledby":F?F(i):void 0,"aria-describedby":R?R(i):void 0,onMouseEnter:M?A:void 0,onMouseMove:M?D:void 0,onMouseLeave:M?G:void 0,onClick:M?Y:void 0,onFocus:M&&T?N:void 0,onBlur:M&&T?Z:void 0}),L&&(0,o.jsx)(u.q.text,{x:v,y:y,textAnchor:"middle",dominantBaseline:"central",fillOpacity:b,style:x({},E.labels.text,{pointerEvents:"none",fill:g}),children:C})]})},defs:[],fill:[],animate:!0,motionConfig:"default",role:"img",isFocusable:!1}),L=x({},W,{layers:["grid","axes","bars","legends","annotations"],pixelRatio:"undefined"!=typeof window&&null!=(y=window.devicePixelRatio)?y:1}),M=function(e,t,n,i,a,o){return(0,h.ZN)(i,{all:e.map(t),min:0,max:0},a,o).padding(n)},j=function(e,t){return e.map((function(e){return x({},t.reduce((function(e,t){return e[t]=null,e}),{}),e)}))},V=function(e){return Object.keys(e).reduce((function(t,n){return e[n]&&(t[n]=e[n]),t}),{})},B=function(e){return[e,Number(e)]},P=["layout","minValue","maxValue","reverse","width","height","padding","innerPadding","valueScale","indexScale","hiddenIds"],T=function(e,t){return e>t},I=function(e,t){return e<t},F=function(e,t){return Array.from(" ".repeat(t-e),(function(t,n){return e+n}))},R=function(e){return T(e,0)?0:e},E=function(e,t,n,i){var a=e.data,o=e.formatValue,r=e.getColor,l=e.getIndex,d=e.getTooltipLabel,u=e.innerPadding,s=void 0===u?0:u,c=e.keys,h=e.xScale,f=e.yScale,g=e.margin,b=n?I:T,v=a.map(V),x=[];return c.forEach((function(e,n){return F(0,h.domain().length).forEach((function(u){var c,m,y,p=B(a[u][e]),k=p[0],S=p[1],w=l(a[u]),W=(null!=(c=h(w))?c:0)+t*n+s*n,C=b(m=S,0)?null!=(y=f(m))?y:0:i,L=function(e,t){var n;return b(e,0)?i-t:(null!=(n=f(e))?n:0)-i}(S,C),M={id:e,value:null===k?k:S,formattedValue:o(S),hidden:!1,index:u,indexValue:w,data:v[u]};x.push({key:e+"."+M.indexValue,index:x.length,data:M,x:W,y:C,absX:g.left+W,absY:g.top+C,width:t,height:L,color:r(M),label:d(M)})}))})),x},O=function(e,t,n,i){var a=e.data,o=e.formatValue,r=e.getIndex,l=e.getColor,d=e.getTooltipLabel,u=e.keys,s=e.innerPadding,c=void 0===s?0:s,h=e.xScale,f=e.yScale,g=e.margin,b=n?I:T,v=a.map(V),x=[];return u.forEach((function(e,n){return F(0,f.domain().length).forEach((function(u){var s,m,y,p=B(a[u][e]),k=p[0],S=p[1],w=r(a[u]),W=b(m=S,0)?i:null!=(y=h(m))?y:0,C=(null!=(s=f(w))?s:0)+t*n+c*n,L=function(e,t){var n;return b(e,0)?(null!=(n=h(e))?n:0)-i:i-t}(S,W),M={id:e,value:null===k?k:S,formattedValue:o(S),hidden:!1,index:u,indexValue:w,data:v[u]};x.push({key:e+"."+M.indexValue,index:x.length,data:M,x:W,y:C,absX:g.left+W,absY:g.top+C,width:L,height:t,color:l(M),label:d(M)})}))})),x},z=function(e){var t,n,i=e.layout,a=e.minValue,o=e.maxValue,r=e.reverse,l=e.width,d=e.height,u=e.padding,s=void 0===u?0:u,c=e.innerPadding,f=void 0===c?0:c,g=e.valueScale,b=e.indexScale,v=e.hiddenIds,y=void 0===v?[]:v,p=m(e,P),k=p.keys.filter((function(e){return!y.includes(e)})),S=j(p.data,k),w="vertical"===i?["y","x",l]:["x","y",d],W=w[0],C=w[1],L=w[2],V=M(S,p.getIndex,s,b,L,C),B=x({max:o,min:a,reverse:r},g),T="auto"===B.min?R:function(e){return e},I=S.reduce((function(e,t){return[].concat(e,k.map((function(e){return t[e]})))}),[]).filter(Boolean),F=T(Math.min.apply(Math,I)),z=(n=Math.max.apply(Math,I),isFinite(n)?n:0),H=(0,h.ZN)(B,{all:I,min:F,max:z},"x"===W?l:d,W),X="vertical"===i?[V,H]:[H,V],q=X[0],Y=X[1],D=(V.bandwidth()-f*(k.length-1))/k.length,A=[x({},p,{data:S,keys:k,innerPadding:f,xScale:q,yScale:Y}),D,B.reverse,null!=(t=H(0))?t:0];return{xScale:q,yScale:Y,bars:D>0?"vertical"===i?E.apply(void 0,A):O.apply(void 0,A):[]}},H=["data","layout","minValue","maxValue","reverse","width","height","padding","valueScale","indexScale","hiddenIds"],X=function e(t){var n;return t.some(Array.isArray)?e((n=[]).concat.apply(n,t)):t},q=function(e,t,n){var i=e.formatValue,a=e.getColor,o=e.getIndex,r=e.getTooltipLabel,l=e.innerPadding,d=e.stackedData,u=e.xScale,s=e.yScale,c=e.margin,h=[];return d.forEach((function(e){return u.domain().forEach((function(d,f){var g,b,v=e[f],x=null!=(g=u(o(v.data)))?g:0,m=(null!=(b=function(e){return s(e[n?0:1])}(v))?b:0)+.5*l,y=function(e,t){var i;return(null!=(i=s(e[n?1:0]))?i:0)-t}(v,m)-l,p=B(v.data[e.key]),k=p[0],S=p[1],w={id:e.key,value:null===k?k:S,formattedValue:i(S),hidden:!1,index:f,indexValue:d,data:V(v.data)};h.push({key:e.key+"."+d,index:h.length,data:w,x:x,y:m,absX:c.left+x,absY:c.top+m,width:t,height:y,color:a(w),label:r(w)})}))})),h},Y=function(e,t,n){var i=e.formatValue,a=e.getColor,o=e.getIndex,r=e.getTooltipLabel,l=e.innerPadding,d=e.stackedData,u=e.xScale,s=e.yScale,c=e.margin,h=[];return d.forEach((function(e){return s.domain().forEach((function(d,f){var g,b,v=e[f],x=null!=(g=s(o(v.data)))?g:0,m=(null!=(b=function(e){return u(e[n?1:0])}(v))?b:0)+.5*l,y=function(e,t){var i;return(null!=(i=u(e[n?0:1]))?i:0)-t}(v,m)-l,p=B(v.data[e.key]),k=p[0],S=p[1],w={id:e.key,value:null===k?k:S,formattedValue:i(S),hidden:!1,index:f,indexValue:d,data:V(v.data)};h.push({key:e.key+"."+d,index:h.length,data:w,x:m,y:x,absX:c.left+m,absY:c.top+x,width:y,height:t,color:a(w),label:r(w)})}))})),h},D=function(e){var t,n=e.data,i=e.layout,a=e.minValue,o=e.maxValue,r=e.reverse,l=e.width,d=e.height,u=e.padding,s=void 0===u?0:u,c=e.valueScale,b=e.indexScale,v=e.hiddenIds,y=void 0===v?[]:v,p=m(e,H),k=p.keys.filter((function(e){return!y.includes(e)})),S=(0,f.Z)().keys(k).offset(g.Z)(j(n,k)),w="vertical"===i?["y","x",l]:["x","y",d],W=w[0],C=w[1],L=w[2],V=M(n,p.getIndex,s,b,L,C),B=x({max:o,min:a,reverse:r},c),P=(t=X(S),"log"===c.type?t.filter((function(e){return 0!==e})):t),T=Math.min.apply(Math,P),I=Math.max.apply(Math,P),F=(0,h.ZN)(B,{all:P,min:T,max:I},"x"===W?l:d,W),R="vertical"===i?[V,F]:[F,V],E=R[0],O=R[1],z=p.innerPadding>0?p.innerPadding:0,D=V.bandwidth(),A=[x({},p,{innerPadding:z,stackedData:S,xScale:E,yScale:O}),D,B.reverse];return{xScale:E,yScale:O,bars:D>0?"vertical"===i?q.apply(void 0,A):Y.apply(void 0,A):[]}},A=function(e){var t=e.bars,n=e.direction,i=e.from,a=e.groupMode,o=e.layout,r=e.legendLabel,d=e.reverse,u=(0,l.Xc)(null!=r?r:"indexes"===i?"indexValue":"id");return"indexes"===i?function(e,t,n){var i=v()(e.map((function(e){var t,i;return{id:null!=(t=e.data.indexValue)?t:"",label:n(e.data),hidden:e.data.hidden,color:null!=(i=e.color)?i:"#000"}})),(function(e){return e.id}));return"horizontal"===t&&i.reverse(),i}(t,o,u):function(e,t,n,i,a,o){var r=v()(e.map((function(e){var t;return{id:e.data.id,label:o(e.data),hidden:e.data.hidden,color:null!=(t=e.color)?t:"#000"}})),(function(e){return e.id}));return("vertical"===t&&"stacked"===i&&"column"===n&&!0!==a||"horizontal"===t&&"stacked"===i&&!0===a)&&r.reverse(),r}(t,o,n,a,d,u)},G=function(e){var t=e.indexBy,n=void 0===t?W.indexBy:t,i=e.keys,a=void 0===i?W.keys:i,o=e.label,r=void 0===o?W.label:o,u=e.tooltipLabel,s=void 0===u?W.tooltipLabel:u,h=e.valueFormat,f=e.colors,g=void 0===f?W.colors:f,b=e.colorBy,v=void 0===b?W.colorBy:b,m=e.borderColor,y=void 0===m?W.borderColor:m,p=e.labelTextColor,k=void 0===p?W.labelTextColor:p,S=e.groupMode,w=void 0===S?W.groupMode:S,C=e.layout,L=void 0===C?W.layout:C,M=e.reverse,j=void 0===M?W.reverse:M,V=e.data,B=e.minValue,P=void 0===B?W.minValue:B,T=e.maxValue,I=void 0===T?W.maxValue:T,F=e.margin,R=e.width,E=e.height,O=e.padding,H=void 0===O?W.padding:O,X=e.innerPadding,q=void 0===X?W.innerPadding:X,Y=e.valueScale,G=void 0===Y?W.valueScale:Y,N=e.indexScale,Z=void 0===N?W.indexScale:N,_=e.initialHiddenIds,J=void 0===_?W.initialHiddenIds:_,K=e.enableLabel,U=void 0===K?W.enableLabel:K,$=e.labelSkipWidth,Q=void 0===$?W.labelSkipWidth:$,ee=e.labelSkipHeight,te=void 0===ee?W.labelSkipHeight:ee,ne=e.legends,ie=void 0===ne?W.legends:ne,ae=e.legendLabel,oe=(0,d.useState)(null!=J?J:[]),re=oe[0],le=oe[1],de=(0,d.useCallback)((function(e){le((function(t){return t.indexOf(e)>-1?t.filter((function(t){return t!==e})):[].concat(t,[e])}))}),[]),ue=(0,l.LR)(n),se=(0,l.LR)(r),ce=(0,l.LR)(s),he=(0,l.O_)(h),fe=(0,l.Fg)(),ge=(0,c.U)(g,v),be=(0,c.Bf)(y,fe),ve=(0,c.Bf)(k,fe),xe=("grouped"===w?z:D)({layout:L,reverse:j,data:V,getIndex:ue,keys:a,minValue:P,maxValue:I,width:R,height:E,getColor:ge,padding:H,innerPadding:q,valueScale:G,indexScale:Z,hiddenIds:re,formatValue:he,getTooltipLabel:ce,margin:F}),me=xe.bars,ye=xe.xScale,pe=xe.yScale,ke=(0,d.useMemo)((function(){return me.filter((function(e){return null!==e.data.value})).map((function(e,t){return x({},e,{index:t})}))}),[me]),Se=(0,d.useCallback)((function(e){var t=e.width,n=e.height;return!(!U||Q>0&&t<Q||te>0&&n<te)}),[U,Q,te]),we=(0,d.useMemo)((function(){return a.map((function(e){var t=me.find((function(t){return t.data.id===e}));return x({},t,{data:x({id:e},null==t?void 0:t.data,{hidden:re.includes(e)})})}))}),[re,a,me]),We=(0,d.useMemo)((function(){return ie.map((function(e){return[e,A({bars:"keys"===e.dataFrom?we:me,direction:e.direction,from:e.dataFrom,groupMode:w,layout:L,legendLabel:ae,reverse:j})]}))}),[ie,we,me,w,L,ae,j]);return{bars:me,barsWithValue:ke,xScale:ye,yScale:pe,getIndex:ue,getLabel:se,getTooltipLabel:ce,formatValue:he,getColor:ge,getBorderColor:be,getLabelColor:ve,shouldRenderBarLabel:Se,hiddenIds:re,toggleSerie:de,legendsWithData:We}},N=["isInteractive","animate","motionConfig","theme","renderWrapper"],Z=function(e){var t=e.data,n=e.indexBy,a=e.keys,r=e.margin,s=e.width,c=e.height,h=e.groupMode,f=e.layout,g=e.reverse,b=e.minValue,v=e.maxValue,m=e.valueScale,y=e.indexScale,S=e.padding,w=e.innerPadding,W=e.axisTop,L=e.axisRight,M=e.axisBottom,j=void 0===M?C.axisBottom:M,V=e.axisLeft,B=void 0===V?C.axisLeft:V,P=e.enableGridX,T=void 0===P?C.enableGridX:P,I=e.enableGridY,F=void 0===I?C.enableGridY:I,R=e.gridXValues,E=e.gridYValues,O=e.layers,z=void 0===O?C.layers:O,H=e.barComponent,X=void 0===H?C.barComponent:H,q=e.enableLabel,Y=e.label,D=e.labelSkipWidth,A=e.labelSkipHeight,N=e.labelTextColor,Z=e.markers,_=void 0===Z?C.markers:Z,J=e.colorBy,K=e.colors,U=e.defs,$=void 0===U?C.defs:U,Q=e.fill,ee=void 0===Q?C.fill:Q,te=e.borderRadius,ne=void 0===te?C.borderRadius:te,ie=e.borderWidth,ae=void 0===ie?C.borderWidth:ie,oe=e.borderColor,re=e.annotations,le=void 0===re?C.annotations:re,de=e.legendLabel,ue=e.tooltipLabel,se=e.valueFormat,ce=e.isInteractive,he=void 0===ce?C.isInteractive:ce,fe=e.tooltip,ge=void 0===fe?C.tooltip:fe,be=e.onClick,ve=e.onMouseEnter,xe=e.onMouseLeave,me=e.legends,ye=e.role,pe=void 0===ye?C.role:ye,ke=e.ariaLabel,Se=e.ariaLabelledBy,we=e.ariaDescribedBy,We=e.isFocusable,Ce=void 0===We?C.isFocusable:We,Le=e.barAriaLabel,Me=e.barAriaLabelledBy,je=e.barAriaDescribedBy,Ve=e.initialHiddenIds,Be=(0,l.tf)(),Pe=Be.animate,Te=Be.config,Ie=(0,l.Bs)(s,c,r),Fe=Ie.outerWidth,Re=Ie.outerHeight,Ee=Ie.margin,Oe=Ie.innerWidth,ze=Ie.innerHeight,He=G({indexBy:n,label:Y,tooltipLabel:ue,valueFormat:se,colors:K,colorBy:J,borderColor:oe,labelTextColor:N,groupMode:h,layout:f,reverse:g,data:t,keys:a,minValue:b,maxValue:v,margin:Ee,width:Oe,height:ze,padding:S,innerPadding:w,valueScale:m,indexScale:y,enableLabel:q,labelSkipWidth:D,labelSkipHeight:A,legends:me,legendLabel:de,initialHiddenIds:Ve}),Xe=He.bars,qe=He.barsWithValue,Ye=He.xScale,De=He.yScale,Ae=He.getLabel,Ge=He.getTooltipLabel,Ne=He.getBorderColor,Ze=He.getLabelColor,_e=He.shouldRenderBarLabel,Je=He.toggleSerie,Ke=He.legendsWithData,Ue=(0,u.useTransition)(qe,{keys:function(e){return e.key},from:function(e){return x({borderColor:Ne(e),color:e.color,height:0,labelColor:Ze(e),labelOpacity:0,labelX:e.width/2,labelY:e.height/2,transform:"translate("+e.x+", "+(e.y+e.height)+")",width:e.width},"vertical"===f?{}:{height:e.height,transform:"translate("+e.x+", "+e.y+")",width:0})},enter:function(e){return{borderColor:Ne(e),color:e.color,height:e.height,labelColor:Ze(e),labelOpacity:1,labelX:e.width/2,labelY:e.height/2,transform:"translate("+e.x+", "+e.y+")",width:e.width}},update:function(e){return{borderColor:Ne(e),color:e.color,height:e.height,labelColor:Ze(e),labelOpacity:1,labelX:e.width/2,labelY:e.height/2,transform:"translate("+e.x+", "+e.y+")",width:e.width}},leave:function(e){return x({borderColor:Ne(e),color:e.color,height:0,labelColor:Ze(e),labelOpacity:0,labelX:e.width/2,labelY:0,transform:"translate("+e.x+", "+(e.y+e.height)+")",width:e.width},"vertical"===f?{}:{labelX:0,labelY:e.height/2,height:e.height,transform:"translate("+e.x+", "+e.y+")",width:0})},config:Te,immediate:!Pe}),$e=(0,d.useMemo)((function(){return{borderRadius:ne,borderWidth:ae,enableLabel:q,isInteractive:he,labelSkipWidth:D,labelSkipHeight:A,onClick:be,onMouseEnter:ve,onMouseLeave:xe,getTooltipLabel:Ge,tooltip:ge,isFocusable:Ce,ariaLabel:Le,ariaLabelledBy:Me,ariaDescribedBy:je}}),[ne,ae,q,Ge,he,A,D,be,ve,xe,ge,Ce,Le,Me,je]),Qe=(0,l.yU)($,Xe,ee,{dataKey:"data",targetKey:"data.fill"}),et={annotations:null,axes:null,bars:null,grid:null,legends:null,markers:null};z.includes("annotations")&&(et.annotations=(0,o.jsx)(p,{bars:Xe,annotations:le},"annotations")),z.includes("axes")&&(et.axes=(0,o.jsx)(i.dk,{xScale:Ye,yScale:De,width:Oe,height:ze,top:W,right:L,bottom:j,left:B},"axes")),z.includes("bars")&&(et.bars=(0,o.jsx)(d.Fragment,{children:Ue((function(e,t){return(0,d.createElement)(X,x({},$e,{bar:t,style:e,shouldRenderLabel:_e(t),label:Ae(t.data)}))}))},"bars")),z.includes("grid")&&(et.grid=(0,o.jsx)(i.rj,{width:Oe,height:ze,xScale:T?Ye:null,yScale:F?De:null,xValues:R,yValues:E},"grid")),z.includes("legends")&&(et.legends=(0,o.jsx)(k,{width:Oe,height:ze,legends:Ke,toggleSerie:Je},"legends")),z.includes("markers")&&(et.markers=(0,o.jsx)(l.TL,{markers:_,width:Oe,height:ze,xScale:Ye,yScale:De},"markers"));var tt=(0,d.useMemo)((function(){return x({},$e,{margin:Ee,innerWidth:Oe,innerHeight:ze,width:s,height:c,bars:Xe,xScale:Ye,yScale:De})}),[$e,Ee,Oe,ze,s,c,Xe,Ye,De]);return(0,o.jsx)(l.tM,{width:Fe,height:Re,margin:Ee,defs:Qe,role:pe,ariaLabel:ke,ariaLabelledBy:Se,ariaDescribedBy:we,isFocusable:Ce,children:z.map((function(e,t){var n;return"function"==typeof e?(0,o.jsx)(d.Fragment,{children:(0,d.createElement)(e,tt)},t):null!=(n=null==et?void 0:et[e])?n:null}))})},_=function(e){var t=e.isInteractive,n=void 0===t?C.isInteractive:t,i=e.animate,a=void 0===i?C.animate:i,r=e.motionConfig,d=void 0===r?C.motionConfig:r,u=e.theme,s=e.renderWrapper,c=m(e,N);return(0,o.jsx)(l.W2,{animate:a,isInteractive:n,motionConfig:d,renderWrapper:s,theme:u,children:(0,o.jsx)(Z,x({isInteractive:n},c))})},J=["isInteractive","renderWrapper","theme"],K=function(e,t,n,i){return e.find((function(e){return(0,l.zn)(e.x+t.left,e.y+t.top,e.width,e.height,n,i)}))},U=function(e){var t=e.data,n=e.indexBy,u=e.keys,c=e.margin,h=e.width,f=e.height,g=e.groupMode,b=e.layout,v=e.reverse,m=e.minValue,y=e.maxValue,p=e.valueScale,k=e.indexScale,S=e.padding,w=e.innerPadding,W=e.axisTop,C=e.axisRight,M=e.axisBottom,j=void 0===M?L.axisBottom:M,V=e.axisLeft,B=void 0===V?L.axisLeft:V,P=e.enableGridX,T=void 0===P?L.enableGridX:P,I=e.enableGridY,F=void 0===I?L.enableGridY:I,R=e.gridXValues,E=e.gridYValues,O=e.layers,z=void 0===O?L.layers:O,H=e.renderBar,X=void 0===H?function(e,t){var n=t.bar,i=n.color,a=n.height,o=n.width,r=n.x,l=n.y,d=t.borderColor,u=t.borderRadius,s=t.borderWidth,c=t.label,h=t.labelColor,f=t.shouldRenderLabel;if(e.fillStyle=i,s>0&&(e.strokeStyle=d,e.lineWidth=s),e.beginPath(),u>0){var g=Math.min(u,a);e.moveTo(r+g,l),e.lineTo(r+o-g,l),e.quadraticCurveTo(r+o,l,r+o,l+g),e.lineTo(r+o,l+a-g),e.quadraticCurveTo(r+o,l+a,r+o-g,l+a),e.lineTo(r+g,l+a),e.quadraticCurveTo(r,l+a,r,l+a-g),e.lineTo(r,l+g),e.quadraticCurveTo(r,l,r+g,l),e.closePath()}else e.rect(r,l,o,a);e.fill(),s>0&&e.stroke(),f&&(e.textBaseline="middle",e.textAlign="center",e.fillStyle=h,e.fillText(c,r+o/2,l+a/2))}:H,q=e.enableLabel,Y=e.label,D=e.labelSkipWidth,A=e.labelSkipHeight,N=e.labelTextColor,Z=e.colorBy,_=e.colors,J=e.borderRadius,U=void 0===J?L.borderRadius:J,$=e.borderWidth,Q=void 0===$?L.borderWidth:$,ee=e.borderColor,te=e.annotations,ne=void 0===te?L.annotations:te,ie=e.legendLabel,ae=e.tooltipLabel,oe=e.valueFormat,re=e.isInteractive,le=void 0===re?L.isInteractive:re,de=e.tooltip,ue=void 0===de?L.tooltip:de,se=e.onClick,ce=e.onMouseEnter,he=e.onMouseLeave,fe=e.legends,ge=e.pixelRatio,be=void 0===ge?L.pixelRatio:ge,ve=e.canvasRef,xe=(0,d.useRef)(null),me=(0,l.Fg)(),ye=(0,l.Bs)(h,f,c),pe=ye.margin,ke=ye.innerWidth,Se=ye.innerHeight,we=ye.outerWidth,We=ye.outerHeight,Ce=G({indexBy:n,label:Y,tooltipLabel:ae,valueFormat:oe,colors:_,colorBy:Z,borderColor:ee,labelTextColor:N,groupMode:g,layout:b,reverse:v,data:t,keys:u,minValue:m,maxValue:y,margin:pe,width:ke,height:Se,padding:S,innerPadding:w,valueScale:p,indexScale:k,enableLabel:q,labelSkipWidth:D,labelSkipHeight:A,legends:fe,legendLabel:ie}),Le=Ce.bars,Me=Ce.barsWithValue,je=Ce.xScale,Ve=Ce.yScale,Be=Ce.getLabel,Pe=Ce.getTooltipLabel,Te=Ce.getBorderColor,Ie=Ce.getLabelColor,Fe=Ce.shouldRenderBarLabel,Re=Ce.legendsWithData,Ee=(0,s.lL)(),Oe=Ee.showTooltipFromEvent,ze=Ee.hideTooltip,He=(0,a.zs)({annotations:(0,a.O2)({data:Le,annotations:ne,getPosition:function(e){return{x:e.x,y:e.y}},getDimensions:function(e){var t=e.width,n=e.height;return{width:t,height:n,size:Math.max(t,n)}}})}),Xe=(0,d.useMemo)((function(){return{borderRadius:U,borderWidth:Q,enableLabel:q,isInteractive:le,labelSkipWidth:D,labelSkipHeight:A,onClick:se,onMouseEnter:ce,onMouseLeave:he,getTooltipLabel:Pe,tooltip:ue,margin:pe,innerWidth:ke,innerHeight:Se,width:h,height:f,bars:Le,xScale:je,yScale:Ve}}),[U,Q,q,Pe,f,Se,ke,le,A,D,pe,se,ce,he,Le,je,Ve,ue,h]);(0,d.useEffect)((function(){var e,t=null==(e=xe.current)?void 0:e.getContext("2d");xe.current&&t&&(xe.current.width=we*be,xe.current.height=We*be,t.scale(be,be),t.fillStyle=me.background,t.fillRect(0,0,we,We),t.translate(pe.left,pe.top),z.forEach((function(e){"grid"===e?"number"==typeof me.grid.line.strokeWidth&&me.grid.line.strokeWidth>0&&(t.lineWidth=me.grid.line.strokeWidth,t.strokeStyle=me.grid.line.stroke,T&&(0,i.FA)(t,{width:h,height:f,scale:je,axis:"x",values:R}),F&&(0,i.FA)(t,{width:h,height:f,scale:Ve,axis:"y",values:E})):"axes"===e?(0,i.DZ)(t,{xScale:je,yScale:Ve,width:ke,height:Se,top:W,right:C,bottom:j,left:B,theme:me}):"bars"===e?Me.forEach((function(e){X(t,{bar:e,borderColor:Te(e),borderRadius:U,borderWidth:Q,label:Be(e.data),labelColor:Ie(e),shouldRenderLabel:Fe(e)})})):"legends"===e?Re.forEach((function(e){var n=e[0],i=e[1];(0,r.as)(t,x({},n,{data:i,containerWidth:ke,containerHeight:Se,theme:me}))})):"annotations"===e?(0,a.dS)(t,{annotations:He,theme:me}):"function"==typeof e&&e(t,Xe)})),t.save())}),[j,B,C,W,Me,U,Q,He,T,F,Te,Be,Ie,R,E,g,f,Se,ke,Xe,z,b,Re,pe.left,pe.top,We,we,be,X,je,Ve,v,Fe,me,h]);var qe=(0,d.useCallback)((function(e){if(Le&&xe.current){var t=(0,l.P6)(xe.current,e),n=t[0],i=t[1],a=K(Le,pe,n,i);void 0!==a?(Oe((0,d.createElement)(ue,x({},a.data,{color:a.color,label:a.label,value:Number(a.data.value)})),e),"mouseenter"===e.type&&(null==ce||ce(a.data,e))):ze()}}),[ze,pe,ce,Le,Oe,ue]),Ye=(0,d.useCallback)((function(e){if(Le&&xe.current){ze();var t=(0,l.P6)(xe.current,e),n=t[0],i=t[1],a=K(Le,pe,n,i);a&&(null==he||he(a.data,e))}}),[ze,pe,he,Le]),De=(0,d.useCallback)((function(e){if(Le&&xe.current){var t=(0,l.P6)(xe.current,e),n=t[0],i=t[1],a=K(Le,pe,n,i);void 0!==a&&(null==se||se(x({},a.data,{color:a.color}),e))}}),[pe,se,Le]);return(0,o.jsx)("canvas",{ref:function(e){xe.current=e,ve&&"current"in ve&&(ve.current=e)},width:we*be,height:We*be,style:{width:we,height:We,cursor:le?"auto":"normal"},onMouseEnter:le?qe:void 0,onMouseMove:le?qe:void 0,onMouseLeave:le?Ye:void 0,onClick:le?De:void 0})},$=(0,d.forwardRef)((function(e,t){var n=e.isInteractive,i=e.renderWrapper,a=e.theme,r=m(e,J);return(0,o.jsx)(l.W2,{isInteractive:n,renderWrapper:i,theme:a,animate:!1,children:(0,o.jsx)(U,x({},r,{canvasRef:t}))})})),Q=function(e){return(0,o.jsx)(l.d,{children:function(t){var n=t.width,i=t.height;return(0,o.jsx)(_,x({width:n,height:i},e))}})},ee=(0,d.forwardRef)((function(e,t){return(0,o.jsx)(l.d,{children:function(n){var i=n.width,a=n.height;return(0,o.jsx)($,x({width:i,height:a},e,{ref:t}))}})}))},98129:function(e,t,n){var i=n(52033);e.exports=function(e,t){var n=[];return i(e,(function(e,i,a){t(e,i,a)&&n.push(e)})),n}},69238:function(e,t,n){var i=n(10263),a=n(98129),o=n(89278),r=n(19785);e.exports=function(e,t){return(r(e)?i:a)(e,o(t,3))}}}]);
//# sourceMappingURL=a5a2af8b6efadc451c6657f34242c5834a01470d-0e4ea832ff800974c46b.js.map