import{L as Y,c as s,a6 as J,al as z,N as le,r as H,am as he,an as ae,O as ie,ao as ke,a9 as Q,ap as oe,P as O,z as r,af as se,aq as ye,ag as pe,ar as Se,a5 as ge,ac as we,a8 as Ve}from"./entry.y8-opber.js";import{x as Ce,y as _e,m as ue,R as xe,z as Te,A as Fe,a as Z,p as Pe,B as ze,C as ne,D as Re,i as Ee,l as Le,n as re,E as Me}from"./VSheet.DvNDkNhk.js";const Ye=window.setInterval,ee=Symbol.for("vuetify:v-slider");function Ne(e,t,a){const o=a==="vertical",u=t.getBoundingClientRect(),k="touches"in e?e.touches[0]:e;return o?k.clientY-(u.top+u.height/2):k.clientX-(u.left+u.width/2)}function Be(e,t){return"touches"in e&&e.touches.length?e.touches[0][t]:"changedTouches"in e&&e.changedTouches.length?e.changedTouches[0][t]:e[t]}const De=Y({disabled:{type:Boolean,default:null},error:Boolean,readonly:{type:Boolean,default:null},max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:0},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:e=>typeof e=="boolean"||e==="always"},thumbSize:{type:[Number,String],default:20},showTicks:{type:[Boolean,String],default:!1,validator:e=>typeof e=="boolean"||e==="always"},ticks:{type:[Array,Object]},tickSize:{type:[Number,String],default:2},color:String,trackColor:String,trackFillColor:String,trackSize:{type:[Number,String],default:4},direction:{type:String,default:"horizontal",validator:e=>["vertical","horizontal"].includes(e)},reverse:Boolean,...Ce(),..._e({elevation:2}),ripple:{type:Boolean,default:!0}},"Slider"),Ie=e=>{const t=s(()=>parseFloat(e.min)),a=s(()=>parseFloat(e.max)),o=s(()=>+e.step>0?parseFloat(e.step):0),u=s(()=>Math.max(ae(o.value),ae(t.value)));function k(y){if(y=parseFloat(y),o.value<=0)return y;const v=ie(y,t.value,a.value),p=t.value%o.value,_=Math.round((v-p)/o.value)*o.value+p;return parseFloat(Math.min(_,a.value).toFixed(u.value))}return{min:t,max:a,step:o,decimals:u,roundValue:k}},Oe=e=>{let{props:t,steps:a,onSliderStart:o,onSliderMove:u,onSliderEnd:k,getActiveThumb:y}=e;const{isRtl:v}=J(),p=z(t,"reverse"),_=s(()=>t.direction==="vertical"),x=s(()=>_.value!==p.value),{min:b,max:g,step:T,decimals:M,roundValue:R}=a,D=s(()=>parseInt(t.thumbSize,10)),N=s(()=>parseInt(t.tickSize,10)),E=s(()=>parseInt(t.trackSize,10)),F=s(()=>(g.value-b.value)/T.value),I=z(t,"disabled"),P=s(()=>t.error||t.disabled?void 0:t.thumbColor??t.color),i=s(()=>t.error||t.disabled?void 0:t.trackColor??t.color),w=s(()=>t.error||t.disabled?void 0:t.trackFillColor??t.color),m=le(!1),f=le(0),V=H(),C=H();function n(l){var te;const c=t.direction==="vertical",de=c?"top":"left",ce=c?"height":"width",ve=c?"clientY":"clientX",{[de]:me,[ce]:fe}=(te=V.value)==null?void 0:te.$el.getBoundingClientRect(),be=Be(l,ve);let G=Math.min(Math.max((be-me-f.value)/fe,0),1)||0;return(c?x.value:x.value!==v.value)&&(G=1-G),R(b.value+G*(g.value-b.value))}const L=l=>{k({value:n(l)}),m.value=!1,f.value=0},B=l=>{C.value=y(l),C.value&&(C.value.focus(),m.value=!0,C.value.contains(l.target)?f.value=Ne(l,C.value,t.direction):(f.value=0,u({value:n(l)})),o({value:n(l)}))},S={passive:!0,capture:!0};function q(l){u({value:n(l)})}function j(l){l.stopPropagation(),l.preventDefault(),L(l),window.removeEventListener("mousemove",q,S),window.removeEventListener("mouseup",j)}function $(l){var c;L(l),window.removeEventListener("touchmove",q,S),(c=l.target)==null||c.removeEventListener("touchend",$)}function W(l){var c;B(l),window.addEventListener("touchmove",q,S),(c=l.target)==null||c.addEventListener("touchend",$,{passive:!1})}function h(l){l.preventDefault(),B(l),window.addEventListener("mousemove",q,S),window.addEventListener("mouseup",j,{passive:!1})}const d=l=>{const c=(l-b.value)/(g.value-b.value)*100;return ie(isNaN(c)?0:c,0,100)},A=z(t,"showTicks"),K=s(()=>A.value?t.ticks?Array.isArray(t.ticks)?t.ticks.map(l=>({value:l,position:d(l),label:l.toString()})):Object.keys(t.ticks).map(l=>({value:parseFloat(l),position:d(parseFloat(l)),label:t.ticks[l]})):F.value!==1/0?ke(F.value+1).map(l=>{const c=b.value+l*T.value;return{value:c,position:d(c)}}):[]:[]),U=s(()=>K.value.some(l=>{let{label:c}=l;return!!c})),X={activeThumbRef:C,color:z(t,"color"),decimals:M,disabled:I,direction:z(t,"direction"),elevation:z(t,"elevation"),hasLabels:U,isReversed:p,indexFromEnd:x,min:b,max:g,mousePressed:m,numTicks:F,onSliderMousedown:h,onSliderTouchstart:W,parsedTicks:K,parseMouseMove:n,position:d,readonly:z(t,"readonly"),rounded:z(t,"rounded"),roundValue:R,showTicks:A,startOffset:f,step:T,thumbSize:D,thumbColor:P,thumbLabel:z(t,"thumbLabel"),ticks:z(t,"ticks"),tickSize:N,trackColor:i,trackContainerRef:V,trackFillColor:w,trackSize:E,vertical:_};return he(ee,X),X},qe=Y({focused:Boolean,max:{type:Number,required:!0},min:{type:Number,required:!0},modelValue:{type:Number,required:!0},position:{type:Number,required:!0},ripple:{type:[Boolean,Object],default:!0},...ue()},"VSliderThumb"),Ae=Q()({name:"VSliderThumb",directives:{Ripple:xe},props:qe(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a,emit:o}=t;const u=oe(ee),{isRtl:k,rtlClasses:y}=J();if(!u)throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");const{thumbColor:v,step:p,disabled:_,thumbSize:x,thumbLabel:b,direction:g,isReversed:T,vertical:M,readonly:R,elevation:D,mousePressed:N,decimals:E,indexFromEnd:F}=u,I=s(()=>_.value?void 0:D.value),{elevationClasses:P}=Te(I),{textColorClasses:i,textColorStyles:w}=Fe(v),{pageup:m,pagedown:f,end:V,home:C,left:n,right:L,down:B,up:S}=Se,q=[m,f,V,C,n,L,B,S],j=s(()=>p.value?[1,2,3]:[1,5,10]);function $(h,d){if(!q.includes(h.key))return;h.preventDefault();const A=p.value||.1,K=(e.max-e.min)/A;if([n,L,B,S].includes(h.key)){const X=(M.value?[k.value?n:L,T.value?B:S]:F.value!==k.value?[n,S]:[L,S]).includes(h.key)?1:-1,l=h.shiftKey?2:h.ctrlKey?1:0;d=d+X*A*j.value[l]}else if(h.key===C)d=e.min;else if(h.key===V)d=e.max;else{const U=h.key===f?1:-1;d=d-U*A*(K>100?K/10:10)}return Math.max(e.min,Math.min(e.max,d))}function W(h){const d=$(h,e.modelValue);d!=null&&o("update:modelValue",d)}return Z(()=>{const h=O(F.value?100-e.position:e.position,"%");return r("div",{class:["v-slider-thumb",{"v-slider-thumb--focused":e.focused,"v-slider-thumb--pressed":e.focused&&N.value},e.class,y.value],style:[{"--v-slider-thumb-position":h,"--v-slider-thumb-size":O(x.value)},e.style],role:"slider",tabindex:_.value?-1:0,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.modelValue,"aria-readonly":!!R.value,"aria-orientation":g.value,onKeydown:R.value?void 0:W},[r("div",{class:["v-slider-thumb__surface",i.value,P.value],style:{...w.value}},null),se(r("div",{class:["v-slider-thumb__ripple",i.value],style:w.value},null),[[ye("ripple"),e.ripple,null,{circle:!0,center:!0}]]),r(Pe,{origin:"bottom center"},{default:()=>{var d;return[se(r("div",{class:"v-slider-thumb__label-container"},[r("div",{class:["v-slider-thumb__label"]},[r("div",null,[((d=a["thumb-label"])==null?void 0:d.call(a,{modelValue:e.modelValue}))??e.modelValue.toFixed(p.value?E.value:1)])])]),[[pe,b.value&&e.focused||b.value==="always"]])]}})])}),{}}}),Ke=Y({start:{type:Number,required:!0},stop:{type:Number,required:!0},...ue()},"VSliderTrack"),je=Q()({name:"VSliderTrack",props:Ke(),emits:{},setup(e,t){let{slots:a}=t;const o=oe(ee);if(!o)throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");const{color:u,parsedTicks:k,rounded:y,showTicks:v,tickSize:p,trackColor:_,trackFillColor:x,trackSize:b,vertical:g,min:T,max:M,indexFromEnd:R}=o,{roundedClasses:D}=ze(y),{backgroundColorClasses:N,backgroundColorStyles:E}=ne(x),{backgroundColorClasses:F,backgroundColorStyles:I}=ne(_),P=s(()=>`inset-${g.value?"block":"inline"}-${R.value?"end":"start"}`),i=s(()=>g.value?"height":"width"),w=s(()=>({[P.value]:"0%",[i.value]:"100%"})),m=s(()=>e.stop-e.start),f=s(()=>({[P.value]:O(e.start,"%"),[i.value]:O(m.value,"%")})),V=s(()=>v.value?(g.value?k.value.slice().reverse():k.value).map((n,L)=>{var S;const B=n.value!==T.value&&n.value!==M.value?O(n.position,"%"):void 0;return r("div",{key:n.value,class:["v-slider-track__tick",{"v-slider-track__tick--filled":n.position>=e.start&&n.position<=e.stop,"v-slider-track__tick--first":n.value===T.value,"v-slider-track__tick--last":n.value===M.value}],style:{[P.value]:B}},[(n.label||a["tick-label"])&&r("div",{class:"v-slider-track__tick-label"},[((S=a["tick-label"])==null?void 0:S.call(a,{tick:n,index:L}))??n.label])])}):[]);return Z(()=>r("div",{class:["v-slider-track",D.value,e.class],style:[{"--v-slider-track-size":O(b.value),"--v-slider-tick-size":O(p.value)},e.style]},[r("div",{class:["v-slider-track__background",F.value,{"v-slider-track__background--opacity":!!u.value||!x.value}],style:{...w.value,...I.value}},null),r("div",{class:["v-slider-track__fill",N.value],style:{...f.value,...E.value}},null),v.value&&r("div",{class:["v-slider-track__ticks",{"v-slider-track__ticks--always-show":v.value==="always"}]},[V.value])])),{}}}),$e=Y({...Re(),...De(),...Ee(),modelValue:{type:[Number,String],default:0}},"VSlider"),We=Q()({name:"VSlider",props:$e(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,start:e=>!0,end:e=>!0},setup(e,t){let{slots:a,emit:o}=t;const u=H(),{rtlClasses:k}=J(),y=Ie(e),v=ge(e,"modelValue",void 0,i=>y.roundValue(i??y.min.value)),{min:p,max:_,mousePressed:x,roundValue:b,onSliderMousedown:g,onSliderTouchstart:T,trackContainerRef:M,position:R,hasLabels:D,readonly:N}=Oe({props:e,steps:y,onSliderStart:()=>{o("start",v.value)},onSliderEnd:i=>{let{value:w}=i;const m=b(w);v.value=m,o("end",m)},onSliderMove:i=>{let{value:w}=i;return v.value=b(w)},getActiveThumb:()=>{var i;return(i=u.value)==null?void 0:i.$el}}),{isFocused:E,focus:F,blur:I}=Le(e),P=s(()=>R(v.value));return Z(()=>{const i=re.filterProps(e),w=!!(e.label||a.label||a.prepend);return r(re,Ve({class:["v-slider",{"v-slider--has-labels":!!a["tick-label"]||D.value,"v-slider--focused":E.value,"v-slider--pressed":x.value,"v-slider--disabled":e.disabled},k.value,e.class],style:e.style},i,{focused:E.value}),{...a,prepend:w?m=>{var f,V;return r(we,null,[((f=a.label)==null?void 0:f.call(a,m))??(e.label?r(Me,{id:m.id.value,class:"v-slider__label",text:e.label},null):void 0),(V=a.prepend)==null?void 0:V.call(a,m)])}:void 0,default:m=>{let{id:f,messagesId:V}=m;return r("div",{class:"v-slider__container",onMousedown:N.value?void 0:g,onTouchstartPassive:N.value?void 0:T},[r("input",{id:f.value,name:e.name||f.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:v.value},null),r(je,{ref:M,start:0,stop:P.value},{"tick-label":a["tick-label"]}),r(Ae,{ref:u,"aria-describedby":V.value,focused:E.value,min:p.value,max:_.value,modelValue:v.value,"onUpdate:modelValue":C=>v.value=C,position:P.value,elevation:e.elevation,onFocus:F,onBlur:I,ripple:e.ripple},{"thumb-label":a["thumb-label"]})])}})}),{}}});export{We as V,Ye as s};
