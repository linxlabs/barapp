import{m as H,u as te,a as w,V as z,b as ae,c as ne,j as U,d as le}from"./VLabel.DRgjt2KH.js";import{L as y,M as p,N as M,r as R,c as _,O as P,P as k,H as A,o as T,z as c,Q as ce,R as W,S as D,T as X,U as oe,V as Y,W as q,X as x,Y as re,Z as L,$ as J,a0 as Q,a1 as ie,a2 as de,a3 as se,a4 as fe,a5 as F,a6 as ue,a7 as he,a8 as be,_ as ge,v as ve,A as me,t as ke,B as we}from"./entry.JtiXHiVV.js";import{V as G}from"./VSlider.BUwxiBqq.js";import{m as ye,V as I}from"./VSheet.DGPLERaM.js";const pe=y({color:{type:Object},disabled:Boolean,dotSize:{type:[Number,String],default:10},height:{type:[Number,String],default:150},width:{type:[Number,String],default:300},...H()},"VColorPickerCanvas"),Ce=p({name:"VColorPickerCanvas",props:pe(),emits:{"update:color":e=>!0,"update:position":e=>!0},setup(e,t){let{emit:a}=t;const r=M(!1),s=R(),l=M(parseFloat(e.width)),n=M(parseFloat(e.height)),i=R({x:0,y:0}),h=_({get:()=>i.value,set(o){var u,g;if(!s.value)return;const{x:d,y:f}=o;i.value=o,a("update:color",{h:((u=e.color)==null?void 0:u.h)??0,s:P(d,0,l.value)/l.value,v:1-P(f,0,n.value)/n.value,a:((g=e.color)==null?void 0:g.a)??1})}}),E=_(()=>{const{x:o,y:d}=h.value,f=parseInt(e.dotSize,10)/2;return{width:k(e.dotSize),height:k(e.dotSize),transform:`translate(${k(o-f)}, ${k(d-f)})`}}),{resizeRef:C}=te(o=>{var u;if(!((u=C.value)!=null&&u.offsetParent))return;const{width:d,height:f}=o[0].contentRect;l.value=d,n.value=f});function N(o,d,f){const{left:u,top:g,width:K,height:ee}=f;h.value={x:P(o-u,0,K),y:P(d-g,0,ee)}}function S(o){o.type==="mousedown"&&o.preventDefault(),!e.disabled&&(b(o),window.addEventListener("mousemove",b),window.addEventListener("mouseup",V),window.addEventListener("touchmove",b),window.addEventListener("touchend",V))}function b(o){if(e.disabled||!s.value)return;r.value=!0;const d=ce(o);N(d.clientX,d.clientY,s.value.getBoundingClientRect())}function V(){window.removeEventListener("mousemove",b),window.removeEventListener("mouseup",V),window.removeEventListener("touchmove",b),window.removeEventListener("touchend",V)}function B(){var g;if(!s.value)return;const o=s.value,d=o.getContext("2d");if(!d)return;const f=d.createLinearGradient(0,0,o.width,0);f.addColorStop(0,"hsla(0, 0%, 100%, 1)"),f.addColorStop(1,`hsla(${((g=e.color)==null?void 0:g.h)??0}, 100%, 50%, 1)`),d.fillStyle=f,d.fillRect(0,0,o.width,o.height);const u=d.createLinearGradient(0,0,0,o.height);u.addColorStop(0,"hsla(0, 0%, 0%, 0)"),u.addColorStop(1,"hsla(0, 0%, 0%, 1)"),d.fillStyle=u,d.fillRect(0,0,o.width,o.height)}return A(()=>{var o;return(o=e.color)==null?void 0:o.h},B,{immediate:!0}),A(()=>[l.value,n.value],(o,d)=>{B(),i.value={x:h.value.x*o[0]/d[0],y:h.value.y*o[1]/d[1]}},{flush:"post"}),A(()=>e.color,()=>{if(r.value){r.value=!1;return}i.value=e.color?{x:e.color.s*l.value,y:(1-e.color.v)*n.value}:{x:0,y:0}},{deep:!0,immediate:!0}),T(()=>B()),w(()=>c("div",{ref:C,class:["v-color-picker-canvas",e.class],style:e.style,onMousedown:S,onTouchstartPassive:S},[c("canvas",{ref:s,width:l.value,height:n.value},null),e.color&&c("div",{class:["v-color-picker-canvas__dot",{"v-color-picker-canvas__dot--disabled":e.disabled}],style:E.value},null)])),{}}});function Se(e,t){if(t){const{a,...r}=e;return r}return e}function Ve(e,t){if(t==null||typeof t=="string"){const a=Y(e);return e.a===1?a.slice(0,7):a}if(typeof t=="object"){let a;return x(t,["r","g","b"])?a=W(e):x(t,["h","s","l"])?a=X(e):x(t,["h","s","v"])&&(a=e),Se(a,!x(t,["a"])&&e.a===1)}return e}const m={h:0,s:0,v:0,a:1},O={inputProps:{type:"number",min:0},inputs:[{label:"R",max:255,step:1,getValue:e=>Math.round(e.r),getColor:(e,t)=>({...e,r:Number(t)})},{label:"G",max:255,step:1,getValue:e=>Math.round(e.g),getColor:(e,t)=>({...e,g:Number(t)})},{label:"B",max:255,step:1,getValue:e=>Math.round(e.b),getColor:(e,t)=>({...e,b:Number(t)})},{label:"A",max:1,step:.01,getValue:e=>{let{a:t}=e;return t!=null?Math.round(t*100)/100:1},getColor:(e,t)=>({...e,a:Number(t)})}],to:W,from:D};var $;const Pe={...O,inputs:($=O.inputs)==null?void 0:$.slice(0,3)},j={inputProps:{type:"number",min:0},inputs:[{label:"H",max:360,step:1,getValue:e=>Math.round(e.h),getColor:(e,t)=>({...e,h:Number(t)})},{label:"S",max:1,step:.01,getValue:e=>Math.round(e.s*100)/100,getColor:(e,t)=>({...e,s:Number(t)})},{label:"L",max:1,step:.01,getValue:e=>Math.round(e.l*100)/100,getColor:(e,t)=>({...e,l:Number(t)})},{label:"A",max:1,step:.01,getValue:e=>{let{a:t}=e;return t!=null?Math.round(t*100)/100:1},getColor:(e,t)=>({...e,a:Number(t)})}],to:X,from:oe},xe={...j,inputs:j.inputs.slice(0,3)},Z={inputProps:{type:"text"},inputs:[{label:"HEXA",getValue:e=>e,getColor:(e,t)=>t}],to:Y,from:q},_e={...Z,inputs:[{label:"HEX",getValue:e=>e.slice(0,7),getColor:(e,t)=>t}]},v={rgb:Pe,rgba:O,hsl:xe,hsla:j,hex:_e,hexa:Z},He=e=>{let{label:t,...a}=e;return c("div",{class:"v-color-picker-edit__input"},[c("input",a,null),c("span",null,[t])])},Ee=y({color:Object,disabled:Boolean,mode:{type:String,default:"rgba",validator:e=>Object.keys(v).includes(e)},modes:{type:Array,default:()=>Object.keys(v),validator:e=>Array.isArray(e)&&e.every(t=>Object.keys(v).includes(t))},...H()},"VColorPickerEdit"),Ne=p({name:"VColorPickerEdit",props:Ee(),emits:{"update:color":e=>!0,"update:mode":e=>!0},setup(e,t){let{emit:a}=t;const r=_(()=>e.modes.map(l=>({...v[l],name:l}))),s=_(()=>{var i;const l=r.value.find(h=>h.name===e.mode);if(!l)return[];const n=e.color?l.to(e.color):null;return(i=l.inputs)==null?void 0:i.map(h=>{let{getValue:E,getColor:C,...N}=h;return{...l.inputProps,...N,disabled:e.disabled,value:n&&E(n),onChange:S=>{const b=S.target;b&&a("update:color",l.from(C(n??l.to(m),b.value)))}}})});return w(()=>{var l;return c("div",{class:["v-color-picker-edit",e.class],style:e.style},[(l=s.value)==null?void 0:l.map(n=>c(He,n,null)),r.value.length>1&&c(z,{icon:"$unfold",size:"x-small",variant:"plain",onClick:()=>{const n=r.value.findIndex(i=>i.name===e.mode);a("update:mode",r.value[(n+1)%r.value.length].name)}},null)])}),{}}}),Be=y({color:{type:Object},disabled:Boolean,hideAlpha:Boolean,...H()},"VColorPickerPreview"),Me=p({name:"VColorPickerPreview",props:Be(),emits:{"update:color":e=>!0},setup(e,t){let{emit:a}=t;const r=new AbortController;re(()=>r.abort());async function s(){if(!L)return;const l=new window.EyeDropper;try{const n=await l.open({signal:r.signal}),i=q(n.sRGBHex);a("update:color",{...e.color??m,...i})}catch{}}return w(()=>{var l,n;return c("div",{class:["v-color-picker-preview",{"v-color-picker-preview--hide-alpha":e.hideAlpha},e.class],style:e.style},[L&&c("div",{class:"v-color-picker-preview__eye-dropper",key:"eyeDropper"},[c(z,{onClick:s,icon:"$eyeDropper",variant:"plain",density:"comfortable"},null)]),c("div",{class:"v-color-picker-preview__dot"},[c("div",{style:{background:J(e.color??m)}},null)]),c("div",{class:"v-color-picker-preview__sliders"},[c(G,{class:"v-color-picker-preview__track v-color-picker-preview__hue",modelValue:(l=e.color)==null?void 0:l.h,"onUpdate:modelValue":i=>a("update:color",{...e.color??m,h:i}),step:0,min:0,max:360,disabled:e.disabled,thumbSize:14,trackSize:8,trackFillColor:"white",hideDetails:!0},null),!e.hideAlpha&&c(G,{class:"v-color-picker-preview__track v-color-picker-preview__alpha",modelValue:((n=e.color)==null?void 0:n.a)??1,"onUpdate:modelValue":i=>a("update:color",{...e.color??m,a:i}),step:1/256,min:0,max:1,disabled:e.disabled,thumbSize:14,trackSize:8,trackFillColor:"white",hideDetails:!0},null)])])}),{}}}),Ae={base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"},Re={base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"},Oe={base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"},je={base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"},ze={base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"},De={base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"},Ue={base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"},Le={base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"},Fe={base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"},Ge={base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"},Ie={base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"},$e={base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"},Te={base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"},We={base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"},Xe={base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"},Ye={base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"},qe={base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},Je={base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"},Qe={base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},Ze={black:"#000000",white:"#ffffff",transparent:"#ffffff00"},Ke={red:Ae,pink:Re,purple:Oe,deepPurple:je,indigo:ze,blue:De,lightBlue:Ue,cyan:Le,teal:Fe,green:Ge,lightGreen:Ie,lime:$e,yellow:Te,amber:We,orange:Xe,deepOrange:Ye,brown:qe,blueGrey:Je,grey:Qe,shades:Ze},et=y({swatches:{type:Array,default:()=>tt(Ke)},disabled:Boolean,color:Object,maxHeight:[Number,String],...H()},"VColorPickerSwatches");function tt(e){return Object.keys(e).map(t=>{const a=e[t];return a.base?[a.base,a.darken4,a.darken3,a.darken2,a.darken1,a.lighten1,a.lighten2,a.lighten3,a.lighten4,a.lighten5]:[a.black,a.white,a.transparent]})}const at=p({name:"VColorPickerSwatches",props:et(),emits:{"update:color":e=>!0},setup(e,t){let{emit:a}=t;return w(()=>c("div",{class:["v-color-picker-swatches",e.class],style:[{maxHeight:k(e.maxHeight)},e.style]},[c("div",null,[e.swatches.map(r=>c("div",{class:"v-color-picker-swatches__swatch"},[r.map(s=>{const l=Q(s),n=D(l),i=se(l);return c("div",{class:"v-color-picker-swatches__color",onClick:()=>n&&a("update:color",n)},[c("div",{style:{background:i}},[e.color&&ie(e.color,n)?c(ae,{size:"x-small",icon:"$success",color:de(s,"#FFFFFF")>2?"white":"black"},null):void 0])])})]))])])),{}}}),nt=y({canvasHeight:{type:[String,Number],default:150},disabled:Boolean,dotSize:{type:[Number,String],default:10},hideCanvas:Boolean,hideSliders:Boolean,hideInputs:Boolean,mode:{type:String,default:"rgba",validator:e=>Object.keys(v).includes(e)},modes:{type:Array,default:()=>Object.keys(v),validator:e=>Array.isArray(e)&&e.every(t=>Object.keys(v).includes(t))},showSwatches:Boolean,swatches:Array,swatchesMaxHeight:{type:[Number,String],default:150},modelValue:{type:[Object,String]},...fe(ye({width:300}),["height","location","minHeight","maxHeight","minWidth","maxWidth"])},"VColorPicker"),lt=p({name:"VColorPicker",props:nt(),emits:{"update:modelValue":e=>!0,"update:mode":e=>!0},setup(e){const t=F(e,"mode"),a=R(null),r=F(e,"modelValue",void 0,n=>{if(n==null||n==="")return null;let i;try{i=D(Q(n))}catch{return null}return a.value&&(i={...i,h:a.value.h},a.value=null),i},n=>n?Ve(n,e.modelValue):null),{rtlClasses:s}=ue(),l=n=>{r.value=n,a.value=n};return T(()=>{e.modes.includes(t.value)||(t.value=e.modes[0])}),he({VSlider:{color:void 0,trackColor:void 0,trackFillColor:void 0}}),w(()=>{const n=I.filterProps(e);return c(I,be({rounded:e.rounded,elevation:e.elevation,theme:e.theme,class:["v-color-picker",s.value,e.class],style:[{"--v-color-picker-color-hsv":J({...r.value??m,a:1})},e.style]},n,{maxWidth:e.width}),{default:()=>[!e.hideCanvas&&c(Ce,{key:"canvas",color:r.value,"onUpdate:color":l,disabled:e.disabled,dotSize:e.dotSize,width:e.width,height:e.canvasHeight},null),(!e.hideSliders||!e.hideInputs)&&c("div",{key:"controls",class:"v-color-picker__controls"},[!e.hideSliders&&c(Me,{key:"preview",color:r.value,"onUpdate:color":l,hideAlpha:!t.value.endsWith("a"),disabled:e.disabled},null),!e.hideInputs&&c(Ne,{key:"edit",modes:e.modes,mode:t.value,"onUpdate:mode":i=>t.value=i,color:r.value,"onUpdate:color":l,disabled:e.disabled},null)]),e.showSwatches&&c(at,{key:"swatches",color:r.value,"onUpdate:color":l,maxHeight:e.swatchesMaxHeight,swatches:e.swatches,disabled:e.disabled},null)]})}),{}}}),ct={data(){return{color:{r:0,g:0,b:0},store:ne(),run:!1}},mounted(){this.receiveSettings()},methods:{onChange(){this.store.btStat&&(this.run||(this.run=!0,console.log(this.color),this.$espconfig.writeEffect(U(this.store.apName,this.color)),this.run=!1))},onSave(e){console.log("Save"),this.$espconfig.writeEffect(U(this.store.apName,{savecolor:""}))},async receiveSettings(){if(this.$espconfig.effectUuid){const e=new TextDecoder("windows-1252");let t=await this.$espconfig.readEffect();if(t=le(this.store.apName,t),t=e.decode(t),console.log(t),t)return t=JSON.parse(t),this.color.r=t.red,this.color.g=t.green,this.color.b=t.blue,t;this.dropdownMessage="-- SSID from ESP32 --"}}}};function ot(e,t,a,r,s,l){return ke(),ve("div",null,[c(lt,{modes:["rgb"],disabled:!s.store.btStat,modelValue:s.color,"onUpdate:modelValue":[t[0]||(t[0]=n=>s.color=n),l.onChange]},null,8,["disabled","modelValue","onUpdate:modelValue"]),c(z,{onClick:l.onSave,disabled:!s.store.btStat},{default:me(()=>[we("Save")]),_:1},8,["onClick","disabled"])])}const ft=ge(ct,[["render",ot]]);export{ft as default};
