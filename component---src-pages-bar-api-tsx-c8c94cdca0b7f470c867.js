"use strict";(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[7440],{3583:function(e,a,t){function r(e){return function(){return e}}t.d(a,{Z:function(){return r}})},12592:function(e,a,t){t.d(a,{i:function(){return o},g:function(){return n}});var r=t(38681),i=["hot dog","burger","sandwich","kebab","fries","donut","junk","sushi","ramen","curry","udon","bagel","yakitori","takoyaki","tacos","miso soup","tortilla","tapas","chipirones","gazpacho","soba","bavette","steak","pizza","spaghetti","ravioli","salad","pad thai","bun","waffle","crepe","churros","paella","empanadas","bruschetta","onion soup","cassoulet","bouillabaisse","unagi","tempura","tonkatsu","shabu-shabu","twinkies","jerky","fajitas","jambalaya","meatloaf","mac n' cheese","baked beans","popcorn","buffalo wings","BBQ ribs","apple pie","nachos","risotto","tiramisu"],o=function(){return{data:(0,r.aw)(i.slice(0,6),{size:7,max:200}),keys:i.slice(0,6)}},n=function(){return{data:(0,r.aw)(i,{size:21,max:200}),keys:i}}},53038:function(e,a,t){t(27378);var r=t(91542),i=t(62370),o=t(24246),n=["color"];var l=r.default.div.withConfig({displayName:"mapper__TooltipWrapper",componentId:"sc-1yi9ctv-0"})(["display:grid;grid-template-columns:1fr 1fr;grid-column-gap:12px;background:#333;padding:12px 16px;font-size:12px;border-radius:2px;"]),s=r.default.span.withConfig({displayName:"mapper__TooltipKey",componentId:"sc-1yi9ctv-1"})(["font-weight:600;"]),d=r.default.span.withConfig({displayName:"mapper__TooltipValue",componentId:"sc-1yi9ctv-2"})([""]),u=function(e){var a=e.color,t=function(e,a){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);return(0,o.jsxs)(l,{style:{color:a},children:[(0,o.jsx)(s,{children:"id"}),(0,o.jsx)(d,{children:t.id}),(0,o.jsx)(s,{children:"value"}),(0,o.jsx)(d,{children:t.value}),(0,o.jsx)(s,{children:"formattedValue"}),(0,o.jsx)(d,{children:t.formattedValue}),(0,o.jsx)(s,{children:"index"}),(0,o.jsx)(d,{children:t.index}),(0,o.jsx)(s,{children:"indexValue"}),(0,o.jsx)(d,{children:t.indexValue}),(0,o.jsx)(s,{children:"color"}),(0,o.jsx)(d,{children:a})]})};a.Z=(0,i.h8)({valueFormat:i.Ld,axisTop:(0,i.h6)("top"),axisRight:(0,i.h6)("right"),axisBottom:(0,i.h6)("bottom"),axisLeft:(0,i.h6)("left"),tooltip:function(e,a){if(a["custom tooltip example"])return u}},{exclude:["enable axisTop","enable axisRight","enable axisBottom","enable axisLeft","custom tooltip example"]})},10016:function(e,a,t){t.d(a,{X:function(){return s}});var r=t(74186),i=t(80169),o=t(18907),n=["svg","canvas","api"],l=[{key:"data",group:"Base",help:"Chart data.",type:"object[]",required:!0,flavors:n},{key:"indexBy",group:"Base",help:"Key to use to index the data.",description:"\n            Key to use to index the data,\n            this key must exist in each data item.\n\n            You can also provide a function which will\n            receive the data item and must return the desired index.\n        ",type:"string | (datum: RawDatum): string | number",flavors:n,required:!1,defaultValue:r.XB.indexBy},{key:"keys",group:"Base",help:"Keys to use to determine each serie.",type:"string[]",flavors:n,required:!1,defaultValue:r.XB.keys},{key:"groupMode",group:"Base",help:"How to group bars.",type:"'grouped' | 'stacked'",flavors:n,required:!1,defaultValue:r.XB.groupMode,control:{type:"radio",choices:[{label:"stacked",value:"stacked"},{label:"grouped",value:"grouped"}]}},{key:"layout",group:"Base",help:"How to display bars.",type:"'horizontal' | 'vertical'",flavors:n,required:!1,defaultValue:r.XB.layout,control:{type:"radio",choices:[{label:"horizontal",value:"horizontal"},{label:"vertical",value:"vertical"}]}},{key:"valueScale",group:"Base",type:"object",help:"value scale configuration.",defaultValue:r.XB.valueScale,flavors:n,required:!1,control:{type:"object",props:[{key:"type",help:"Scale type.",type:"string",required:!0,flavors:n,control:{type:"choices",disabled:!0,choices:["linear","symlog"].map((function(e){return{label:e,value:e}}))}}]}},{key:"indexScale",group:"Base",type:"object",help:"index scale configuration.",defaultValue:r.XB.indexScale,flavors:n,required:!1,control:{type:"object",props:[{key:"type",help:"Scale type.",type:"string",required:!0,flavors:["svg","canvas","api"],control:{type:"choices",disabled:!0,choices:["band"].map((function(e){return{label:e,value:e}}))}},{key:"round",required:!0,flavors:["svg","canvas","api"],help:"Toggle index scale (for bar width) rounding.",type:"boolean",control:{type:"switch"}}]}},{key:"reverse",group:"Base",help:"Reverse bars, starts on top instead of bottom for vertical layout and right instead of left for horizontal one.",type:"boolean",required:!1,flavors:n,defaultValue:r.XB.reverse,control:{type:"switch"}},{key:"minValue",group:"Base",help:"Minimum value.",description:"\n            Minimum value, if 'auto',\n            will use min value from the provided data.\n        ",required:!1,flavors:n,defaultValue:r.XB.minValue,type:"number | 'auto'",control:{type:"switchableRange",disabledValue:"auto",defaultValue:-1e3,min:-1e3,max:0}},{key:"maxValue",group:"Base",help:"Maximum value.",description:"\n            Maximum value, if 'auto',\n            will use max value from the provided data.\n        ",required:!1,flavors:n,defaultValue:r.XB.maxValue,type:"number | 'auto'",control:{type:"switchableRange",disabledValue:"auto",defaultValue:1e3,min:0,max:1e3}},{key:"valueFormat",group:"Base",help:"Optional formatter for values.",description:"\n            The formatted value can then be used for labels & tooltips.\n\n            Under the hood, nivo uses [d3-format](https://github.com/d3/d3-format),\n            please have a look at it for available formats, you can also pass a function\n            which will receive the raw value and should return the formatted one.\n        ",required:!1,flavors:n,type:"string | (value: number) => string | number",control:{type:"valueFormat"}},{key:"padding",help:"Padding between each bar (ratio).",type:"number",required:!1,flavors:n,defaultValue:r.XB.padding,group:"Base",control:{type:"range",min:0,max:.9,step:.05}},{key:"innerPadding",help:"Padding between grouped/stacked bars.",type:"number",required:!1,flavors:n,defaultValue:r.XB.innerPadding,group:"Base",control:{type:"range",unit:"px",min:0,max:10}}].concat((0,o.nk)(n),[(0,i.JR)(n),(0,o.at)({flavors:n,defaultValue:r.XB.colors}),{key:"colorBy",type:"'id' | 'indexValue'",help:"Property used to determine node color.",description:"\n            Property to use to determine node color.\n        ",flavors:n,required:!1,defaultValue:r.XB.colorBy,group:"Style",control:{type:"choices",choices:[{label:"id",value:"id"},{label:"indexValue",value:"indexValue"}]}},{key:"borderRadius",help:"Rectangle border radius.",type:"number",flavors:["svg","canvas","api"],required:!1,defaultValue:r.XB.borderRadius,group:"Style",control:{type:"range",unit:"px",min:0,max:36}},{key:"borderWidth",help:"Width of bar border.",type:"number",flavors:["svg","canvas","api"],required:!1,defaultValue:r.XB.borderWidth,group:"Style",control:{type:"lineWidth"}},{key:"borderColor",help:"Method to compute border color.",description:"\n            how to compute border color,\n            [see dedicated documentation](self:/guides/colors).\n        ",type:"string | object | Function",flavors:["svg","canvas","api"],required:!1,defaultValue:r.XB.borderColor,group:"Style",control:{type:"inheritedColor"}}],(0,i.uE)("Style",["svg"]),[{key:"layers",flavors:["svg","canvas"],help:"Defines the order of layers.",description:"\n            Defines the order of layers, available layers are:\n            `grid`, `axes`, `bars`, `markers`, `legends`,\n            `annotations`. The `markers` layer is not available\n            in the canvas flavor.\n\n            You can also use this to insert extra layers to the chart,\n            this extra layer must be a function which will receive\n            the chart computed data and must return a valid SVG\n            element.\n        ",type:"Array<string | Function>",required:!1,defaultValue:r.XB.layers,group:"Customization"},{key:"enableLabel",help:"Enable/disable labels.",type:"boolean",flavors:["svg","canvas","api"],required:!1,defaultValue:r.XB.enableLabel,group:"Labels",control:{type:"switch"}},{key:"label",group:"Labels",help:"Define how bar labels are computed.",description:"\n            Define how bar labels are computed.\n\n            By default it will use the bar's value.\n            It accepts a string which will be used to access\n            a specific bar data property, such as\n            `'value'` or `'id'`.\n\n            You can also use a funtion if you want to\n            add more logic, this function will receive\n            the current bar's data and must return\n            the computed label which, depending on the context,\n            should return a string or an svg element (Bar) or\n            a string (BarCanvas). For example let's say you want\n            to use a label with both the id and the value,\n            you can achieve this with:\n            ```\n            label={d => `${d.id}: ${d.value}`}\n            ```\n        ",type:"string | Function",flavors:["svg","canvas","api"],required:!1,defaultValue:r.XB.label},{key:"labelSkipWidth",help:"Skip label if bar width is lower than provided value, ignored if 0.",type:"number",flavors:["svg","canvas","api"],required:!1,defaultValue:r.XB.labelSkipWidth,group:"Labels",control:{type:"range",unit:"px",min:0,max:36}},{key:"labelSkipHeight",help:"Skip label if bar height is lower than provided value, ignored if 0.",type:"number",flavors:["svg","canvas","api"],required:!1,defaultValue:r.XB.labelSkipHeight,group:"Labels",control:{type:"range",unit:"px",min:0,max:36}},{key:"labelTextColor",help:"Defines how to compute label text color.",type:"string | object | Function",flavors:["svg","canvas","api"],required:!1,defaultValue:r.XB.labelTextColor,control:{type:"inheritedColor"},group:"Labels"}],(0,o.yW)({flavors:n,xDefault:r.XB.enableGridX,yDefault:r.XB.enableGridY,values:!0}),(0,o.Do)({flavors:n}),[(0,o.y1)({flavors:["svg","canvas"],defaultValue:r.XB.isInteractive}),{key:"tooltip",flavors:["svg","canvas"],group:"Interactivity",type:"Function",required:!1,help:"Tooltip custom component",description:"\n            A function allowing complete tooltip customisation,\n            it must return a valid HTML element and will receive\n            the following data:\n            ```\n            {\n                bar: {\n                    id:             string | number,\n                    value:          number,\n                    formattedValue: string,\n                    index:          number,\n                    indexValue:     string | number,\n                    // datum associated to the current index (raw data)\n                    data:           object\n                },\n                color: string,\n                label: string\n            }\n            ```\n            You can also customize the style of the tooltip\n            using the `theme.tooltip` object.\n        "},{key:"custom tooltip example",flavors:["svg","canvas"],group:"Interactivity",help:"Showcase custom tooltip component.",type:"boolean",required:!1,control:{type:"switch"}},{key:"onClick",flavors:["svg","canvas"],group:"Interactivity",type:"Function",required:!1,help:"onClick handler",description:"\n            onClick handler, will receive node data as first argument\n            & event as second one. The node data has the following shape:\n\n            ```\n            {\n                id:             string | number,\n                value:          number,\n                formattedValue: string,\n                index:          number,\n                indexValue:     string | number,\n                color:          string,\n                // datum associated to the current index (raw data)\n                data:           object\n            }\n            ```\n        "},{key:"legends",flavors:["svg","canvas"],type:"object[]",help:"Optional chart's legends.",group:"Legends",required:!1,control:{type:"array",props:(0,i.y0)(["svg"]),shouldCreate:!0,addLabel:"add legend",shouldRemove:!0,getItemTitle:function(e,a){return"legend["+e+"]: "+a.anchor+", "+a.direction},svgDefaultProps:{dataFrom:"keys",anchor:"top-left",direction:"column",justify:!1,translateX:0,translateY:0,itemWidth:100,itemHeight:20,itemsSpacing:0,symbolSize:20,itemDirection:"left-to-right",onClick:function(e){console.log(JSON.stringify(e,null,"    "))}}}}],(0,i.$j)(["svg"],r.XB,"react-spring"),[{key:"isFocusable",flavors:["svg"],required:!1,group:"Accessibility",help:"Make the root SVG element and each bar item focusable, for keyboard navigation.",description:"\n            If enabled, focusing will also reveal the tooltip if `isInteractive` is `true`,\n            when a bar gains focus and hide it on blur.\n            \n            Also note that if this option is enabled, focusing a bar will reposition the tooltip\n            at a fixed location.\n        ",type:"boolean",control:{type:"switch"}},{key:"ariaLabel",flavors:["svg"],required:!1,group:"Accessibility",help:"Main element [aria-label](https://www.w3.org/TR/wai-aria/#aria-label).",type:"string"},{key:"ariaLabelledBy",flavors:["svg"],required:!1,group:"Accessibility",help:"Main element [aria-labelledby](https://www.w3.org/TR/wai-aria/#aria-labelledby).",type:"string"},{key:"ariaDescribedBy",flavors:["svg"],required:!1,group:"Accessibility",help:"Main element [aria-describedby](https://www.w3.org/TR/wai-aria/#aria-describedby).",type:"string"},{key:"barAriaLabel",flavors:["svg"],required:!1,group:"Accessibility",help:"[aria-label](https://www.w3.org/TR/wai-aria/#aria-label) for bar items.",type:"(data) => string"},{key:"barAriaLabelledBy",flavors:["svg"],required:!1,group:"Accessibility",help:"[aria-labelledby](https://www.w3.org/TR/wai-aria/#aria-labelledby) for bar items.",type:"(data) => string"},{key:"barAriaDescribedBy",flavors:["svg"],required:!1,group:"Accessibility",help:"[aria-describedby](https://www.w3.org/TR/wai-aria/#aria-describedby) for bar items.",type:"(data) => string"}]),s=(0,i.R2)(l)},96227:function(e,a,t){t.r(a);t(27378);var r=t(95546),i=t(40309),o=t(10016),n=t(8029),l=t(53038),s=t(12592),d=t(25414),u=t(24246),c=(0,s.i)(),p=c.data,h=c.keys;a.default=function(){var e=(0,d.useStaticQuery)("2064855481").image.childImageSharp.gatsbyImageData;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r.p,{title:"Bar HTTP API",image:e,keywords:[].concat(n.$Q.tags,["HTTP API"])}),(0,u.jsx)(i.S,{componentName:"Bar",chartClass:"bar",apiPath:"/charts/bar",flavors:n.Kk,dataProperty:"data",controlGroups:o.X,propsMapper:l.Z,defaultProps:{width:1200,height:500,margin:{top:40,right:50,bottom:40,left:50},data:JSON.stringify(p,null,"  "),keys:h,indexBy:"country",colors:{scheme:"nivo"},colorBy:"id",borderRadius:0,borderWidth:0,borderColor:{from:"color",modifiers:[["darker",1.6]]},padding:.2,innerPadding:0,minValue:"auto",maxValue:"auto",groupMode:"stacked",layout:"vertical",reverse:!1,valueScale:{type:"linear"},indexScale:{type:"band",round:!0},valueFormat:{format:"",enabled:!1},axisTop:{enable:!1,tickSize:5,tickPadding:5,tickRotation:0,legend:"",legendOffset:36},axisRight:{enable:!1,tickSize:5,tickPadding:5,tickRotation:0,legend:"",legendOffset:0},axisBottom:{enable:!0,tickSize:5,tickPadding:5,tickRotation:0,legend:"country",legendPosition:"middle",legendOffset:36},axisLeft:{enable:!0,tickSize:5,tickPadding:5,tickRotation:0,legend:"food",legendPosition:"middle",legendOffset:-40},enableGridX:!1,enableGridY:!0,enableLabel:!0,labelSkipWidth:12,labelSkipHeight:12,labelTextColor:{from:"color",modifiers:[["darker",1.6]]}}})]})}}}]);
//# sourceMappingURL=component---src-pages-bar-api-tsx-c8c94cdca0b7f470c867.js.map