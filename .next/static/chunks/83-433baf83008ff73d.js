"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[83],{7637:function(e,t,i){i.d(t,{XS:function(){return f}});class s{constructor(e,t,i,r,n="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),s.nextNameID=s.nextNameID||0,this.$name.id=`lil-gui-name-${++s.nextNameID}`,this.$widget=document.createElement(n),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),void 0!==this._onChange&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),void 0!==this._onFinishChange&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled||(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e)),this}options(e){let t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}listen(e=!0){return this._listening=e,void 0!==this._listenCallbackID&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback),this.updateDisplay()}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class r extends s{constructor(e,t,i){super(e,t,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function n(e){let t,i;return(t=e.match(/(#|0x)?([a-f0-9]{6})/i))?i=t[2]:(t=e.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?i=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=e.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(i=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),!!i&&"#"+i}let a={isPrimitive:!0,match:e=>"number"==typeof e,fromHexString:e=>parseInt(e.substring(1),16),toHexString:e=>"#"+e.toString(16).padStart(6,0)},o={isPrimitive:!1,match:Array.isArray,fromHexString(e,t,i=1){let s=a.fromHexString(e);t[0]=(s>>16&255)/255*i,t[1]=(s>>8&255)/255*i,t[2]=(255&s)/255*i},toHexString([e,t,i],s=1){let r=e*(s=255/s)<<16^t*s<<8^i*s<<0;return a.toHexString(r)}},l=[{isPrimitive:!0,match:e=>"string"==typeof e,fromHexString:n,toHexString:n},a,o,{isPrimitive:!1,match:e=>Object(e)===e,fromHexString(e,t,i=1){let s=a.fromHexString(e);t.r=(s>>16&255)/255*i,t.g=(s>>8&255)/255*i,t.b=(255&s)/255*i},toHexString({r:e,g:t,b:i},s=1){let r=e*(s=255/s)<<16^t*s<<8^i*s<<0;return a.toHexString(r)}}];class h extends s{constructor(e,t,i,s){var r;super(e,t,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(r=this.initialValue,l.find(e=>e.match(r))),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{let e=n(this.$text.value);e&&this._setValueFromHexString(e)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){let t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class u extends s{constructor(e,t,i){super(e,t,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",e=>{e.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{}),this.$disable=this.$button}}class c extends s{constructor(e,t,i,s,r,n){super(e,t,i,"number"),this._initInput(),this.min(s),this.max(r);let a=void 0!==n;this.step(a?n:this._getImplicitStep(),a),this.updateDisplay()}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){let e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=100*t+"%"}return this._inputFocused||(this.$input.value=e),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;let e=e=>{let t=parseFloat(this.$input.value);isNaN(t)||(this._snapClampSetValue(t+e),this.$input.value=this.getValue())},t=!1,i,s,r,n,a,o=e=>{if(t){let r=e.clientX-i;Math.abs(e.clientY-s)>5?(e.preventDefault(),this.$input.blur(),t=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(r)>5&&l()}if(!t){let t=e.clientY-r;a-=t*this._step*this._arrowKeyMultiplier(e),n+a>this._max?a=this._max-n:n+a<this._min&&(a=this._min-n),this._snapClampSetValue(n+a)}r=e.clientY},l=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",l)};this.$input.addEventListener("input",()=>{let e=parseFloat(this.$input.value);isNaN(e)||this.setValue(this._clamp(e))}),this.$input.addEventListener("keydown",t=>{"Enter"===t.code&&this.$input.blur(),"ArrowUp"===t.code&&(t.preventDefault(),e(this._step*this._arrowKeyMultiplier(t))),"ArrowDown"===t.code&&(t.preventDefault(),e(-(this._step*this._arrowKeyMultiplier(t)*1)))}),this.$input.addEventListener("wheel",t=>{this._inputFocused&&(t.preventDefault(),e(this._step*this._normalizeMouseWheel(t)))}),this.$input.addEventListener("mousedown",e=>{i=e.clientX,s=r=e.clientY,t=!0,n=this.getValue(),a=0,window.addEventListener("mousemove",o),window.addEventListener("mouseup",l)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){let e;this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");let t=(e,t,i,s,r)=>(e-t)/(i-t)*(r-s)+s,i=e=>{let i=this.$slider.getBoundingClientRect(),s=t(e,i.left,i.right,this._min,this._max);this._snapClampSetValue(s)},s=e=>{i(e.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)},n=!1,a,o,l=e=>{e.preventDefault(),this._setDraggingStyle(!0),i(e.touches[0].clientX),n=!1},h=e=>{n?Math.abs(e.touches[0].clientX-a)>Math.abs(e.touches[0].clientY-o)?l(e):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",u)):(e.preventDefault(),i(e.touches[0].clientX))},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",u)},c=this._callOnFinishChange.bind(this);this.$slider.addEventListener("mousedown",e=>{this._setDraggingStyle(!0),i(e.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)}),this.$slider.addEventListener("touchstart",e=>{e.touches.length>1||(this._hasScrollBar?(a=e.touches[0].clientX,o=e.touches[0].clientY,n=!0):l(e),window.addEventListener("touchmove",h),window.addEventListener("touchend",u))}),this.$slider.addEventListener("wheel",t=>{if(Math.abs(t.deltaX)<Math.abs(t.deltaY)&&this._hasScrollBar)return;t.preventDefault();let i=this._normalizeMouseWheel(t)*this._step;this._snapClampSetValue(this.getValue()+i),this.$input.value=this.getValue(),clearTimeout(e),e=setTimeout(c,400)})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120*(this._stepExplicit?1:10)),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){return parseFloat((Math.round(e/this._step)*this._step).toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){let e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return void 0!==this._min}get _hasMax(){return void 0!==this._max}}class d extends s{constructor(e,t,i,s){super(e,t,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(s)?s:Object.values(s),this._names=Array.isArray(s)?s:Object.keys(s),this._names.forEach(e=>{let t=document.createElement("option");t.innerHTML=e,this.$select.appendChild(t)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){let e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=-1===t?e:this._names[t],this}}class p extends s{constructor(e,t,i){super(e,t,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",e=>{"Enter"===e.code&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let m=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`,g=!1;class f{constructor({parent:e,autoPlace:t=void 0===e,container:i,width:s,title:r="Controls",injectStyles:n=!0,touchStyles:a=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",e=>{("Enter"===e.code||"Space"===e.code)&&(e.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),a&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!g&&n&&(function(e){let t=document.createElement("style");t.innerHTML=e;let i=document.querySelector("head link[rel=stylesheet], head style");i?document.head.insertBefore(t,i):document.head.appendChild(t)}(m),g=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this.domElement.addEventListener("keydown",e=>e.stopPropagation()),this.domElement.addEventListener("keyup",e=>e.stopPropagation())}add(e,t,i,s,n){if(Object(i)===i)return new d(this,e,t,i);let a=e[t];switch(typeof a){case"number":return new c(this,e,t,i,s,n);case"boolean":return new r(this,e,t);case"string":return new p(this,e,t);case"function":return new u(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,i=1){return new h(this,e,t,i)}addFolder(e){return new f({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(t=>{!(t instanceof u)&&t._name in e.controllers&&t.load(e.controllers[t._name])}),t&&e.folders&&this.folders.forEach(t=>{t._title in e.folders&&t.load(e.folders[t._title])}),this}save(e=!0){let t={controllers:{},folders:{}};return this.controllers.forEach(e=>{if(!(e instanceof u)){if(e._name in t.controllers)throw Error(`Cannot save GUI with duplicate property "${e._name}"`);t.controllers[e._name]=e.save()}}),e&&this.folders.forEach(e=>{if(e._title in t.folders)throw Error(`Cannot save GUI with duplicate folder "${e._title}"`);t.folders[e._title]=e.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{let t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");let i=e=>{e.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);let s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(e=>e.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),void 0!==this._onChange&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),void 0!==this._onFinishChange&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}},9365:function(e,t,i){i(2212)},1217:function(e,t,i){i.d(t,{E:function(){return r}});var s=i(2212);class r extends s.aNw{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new h(e)}),this.register(function(e){return new g(e)}),this.register(function(e){return new f(e)}),this.register(function(e){return new u(e)}),this.register(function(e){return new c(e)}),this.register(function(e){return new d(e)}),this.register(function(e){return new p(e)}),this.register(function(e){return new m(e)}),this.register(function(e){return new o(e)}),this.register(function(e){return new v(e)})}load(e,t,i,r){let n;let a=this;n=""!==this.resourcePath?this.resourcePath:""!==this.path?this.path:s.Zp0.extractUrlBase(e),this.manager.itemStart(e);let o=function(t){r?r(t):console.error(t),a.manager.itemError(e),a.manager.itemEnd(e)},l=new s.hH6(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(i){try{a.parse(i,n,function(i){t(i),a.manager.itemEnd(e)},o)}catch(e){o(e)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return -1===this.pluginCallbacks.indexOf(e)&&this.pluginCallbacks.push(e),this}unregister(e){return -1!==this.pluginCallbacks.indexOf(e)&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let n;let o={},h={};if("string"==typeof e)n=e;else if(s.Zp0.decodeText(new Uint8Array(e,0,4))===x){try{o[a.KHR_BINARY_GLTF]=new A(e)}catch(e){r&&r(e);return}n=o[a.KHR_BINARY_GLTF].content}else n=s.Zp0.decodeText(new Uint8Array(e));let u=JSON.parse(n);if(void 0===u.asset||u.asset.version[0]<2){r&&r(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new V(u,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let e=0;e<this.pluginCallbacks.length;e++){let t=this.pluginCallbacks[e](c);h[t.name]=t,o[t.name]=!0}if(u.extensionsUsed)for(let e=0;e<u.extensionsUsed.length;++e){let t=u.extensionsUsed[e],i=u.extensionsRequired||[];switch(t){case a.KHR_MATERIALS_UNLIT:o[t]=new l;break;case a.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:o[t]=new y;break;case a.KHR_DRACO_MESH_COMPRESSION:o[t]=new w(u,this.dracoLoader);break;case a.KHR_TEXTURE_TRANSFORM:o[t]=new _;break;case a.KHR_MESH_QUANTIZATION:o[t]=new E;break;default:i.indexOf(t)>=0&&void 0===h[t]&&console.warn('THREE.GLTFLoader: Unknown extension "'+t+'".')}}c.setExtensions(o),c.setPlugins(h),c.parse(i,r)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function n(){let e={};return{get:function(t){return e[t]},add:function(t,i){e[t]=i},remove:function(t){delete e[t]},removeAll:function(){e={}}}}let a={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class o{constructor(e){this.parser=e,this.name=a.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let s=t[i];s.extensions&&s.extensions[this.name]&&void 0!==s.extensions[this.name].light&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t;let i=this.parser,r="light:"+e,n=i.cache.get(r);if(n)return n;let a=i.json,o=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e],l=new s.Ilk(16777215);void 0!==o.color&&l.fromArray(o.color);let h=void 0!==o.range?o.range:0;switch(o.type){case"directional":(t=new s.Ox3(l)).target.position.set(0,0,-1),t.add(t.target);break;case"point":(t=new s.cek(l)).distance=h;break;case"spot":(t=new s.PMe(l)).distance=h,o.spot=o.spot||{},o.spot.innerConeAngle=void 0!==o.spot.innerConeAngle?o.spot.innerConeAngle:0,o.spot.outerConeAngle=void 0!==o.spot.outerConeAngle?o.spot.outerConeAngle:Math.PI/4,t.angle=o.spot.outerConeAngle,t.penumbra=1-o.spot.innerConeAngle/o.spot.outerConeAngle,t.target.position.set(0,0,-1),t.add(t.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+o.type)}return t.position.set(0,0,0),t.decay=2,void 0!==o.intensity&&(t.intensity=o.intensity),t.name=i.createUniqueName(o.name||"light_"+e),n=Promise.resolve(t),i.cache.add(r,n),n}createNodeAttachment(e){let t=this,i=this.parser,s=i.json.nodes[e],r=(s.extensions&&s.extensions[this.name]||{}).light;return void 0===r?null:this._loadLight(r).then(function(e){return i._getNodeRef(t.cache,r,e)})}}class l{constructor(){this.name=a.KHR_MATERIALS_UNLIT}getMaterialType(){return s.vBJ}extendParams(e,t,i){let r=[];e.color=new s.Ilk(1,1,1),e.opacity=1;let n=t.pbrMetallicRoughness;if(n){if(Array.isArray(n.baseColorFactor)){let t=n.baseColorFactor;e.color.fromArray(t),e.opacity=t[3]}void 0!==n.baseColorTexture&&r.push(i.assignTexture(e,"map",n.baseColorTexture))}return Promise.all(r)}}class h{constructor(e){this.parser=e,this.name=a.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?s.EJi:null}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let n=[],a=r.extensions[this.name];if(void 0!==a.clearcoatFactor&&(t.clearcoat=a.clearcoatFactor),void 0!==a.clearcoatTexture&&n.push(i.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),void 0!==a.clearcoatRoughnessFactor&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),void 0!==a.clearcoatRoughnessTexture&&n.push(i.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),void 0!==a.clearcoatNormalTexture&&(n.push(i.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),void 0!==a.clearcoatNormalTexture.scale)){let e=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new s.FM8(e,e)}return Promise.all(n)}}class u{constructor(e){this.parser=e,this.name=a.KHR_MATERIALS_SHEEN}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?s.EJi:null}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let n=[];t.sheenColor=new s.Ilk(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=r.extensions[this.name];return void 0!==a.sheenColorFactor&&t.sheenColor.fromArray(a.sheenColorFactor),void 0!==a.sheenRoughnessFactor&&(t.sheenRoughness=a.sheenRoughnessFactor),void 0!==a.sheenColorTexture&&n.push(i.assignTexture(t,"sheenColorMap",a.sheenColorTexture)),void 0!==a.sheenRoughnessTexture&&n.push(i.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(n)}}class c{constructor(e){this.parser=e,this.name=a.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?s.EJi:null}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],n=s.extensions[this.name];return void 0!==n.transmissionFactor&&(t.transmission=n.transmissionFactor),void 0!==n.transmissionTexture&&r.push(i.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(r)}}class d{constructor(e){this.parser=e,this.name=a.KHR_MATERIALS_VOLUME}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?s.EJi:null}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let n=[],a=r.extensions[this.name];t.thickness=void 0!==a.thicknessFactor?a.thicknessFactor:0,void 0!==a.thicknessTexture&&n.push(i.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new s.Ilk(o[0],o[1],o[2]),Promise.all(n)}}class p{constructor(e){this.parser=e,this.name=a.KHR_MATERIALS_IOR}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?s.EJi:null}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.ior=void 0!==s.ior?s.ior:1.5,Promise.resolve()}}class m{constructor(e){this.parser=e,this.name=a.KHR_MATERIALS_SPECULAR}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?s.EJi:null}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let n=[],a=r.extensions[this.name];t.specularIntensity=void 0!==a.specularFactor?a.specularFactor:1,void 0!==a.specularTexture&&n.push(i.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new s.Ilk(o[0],o[1],o[2]),void 0!==a.specularColorTexture&&n.push(i.assignTexture(t,"specularColorMap",a.specularColorTexture).then(function(e){e.encoding=s.knz})),Promise.all(n)}}class g{constructor(e){this.parser=e,this.name=a.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],n=i.images[r.source],a=t.options.ktx2Loader;if(!a){if(!(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0))return null;throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures")}return t.loadTextureImage(e,n,a)}}class f{constructor(e){this.parser=e,this.name=a.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let n=r.extensions[t],a=s.images[n.source],o=i.textureLoader;if(a.uri){let e=i.options.manager.getHandler(a.uri);null!==e&&(o=e)}return this.detectSupport().then(function(r){if(r)return i.loadTextureImage(e,a,o);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(1===t.height)}})),this.isSupported}}class v{constructor(e){this.name=a.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(!i.extensions||!i.extensions[this.name])return null;{let e=i.extensions[this.name],s=this.parser.getDependency("buffer",e.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(!(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0))return null;throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files")}return Promise.all([s,r.ready]).then(function(t){let i=e.byteOffset||0,s=e.byteLength||0,n=e.count,a=e.byteStride,o=new ArrayBuffer(n*a),l=new Uint8Array(t[0],i,s);return r.decodeGltfBuffer(new Uint8Array(o),n,a,l,e.mode,e.filter),o})}}}let x="glTF",b={JSON:1313821514,BIN:5130562};class A{constructor(e){this.name=a.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,12);if(this.header={magic:s.Zp0.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==x)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-12,r=new DataView(e,12),n=0;for(;n<i;){let t=r.getUint32(n,!0);n+=4;let i=r.getUint32(n,!0);if(n+=4,i===b.JSON){let i=new Uint8Array(e,12+n,t);this.content=s.Zp0.decodeText(i)}else if(i===b.BIN){let i=12+n;this.body=e.slice(i,i+t)}n+=t}if(null===this.content)throw Error("THREE.GLTFLoader: JSON content not found.")}}class w{constructor(e,t){if(!t)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=a.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,n=e.extensions[this.name].attributes,a={},o={},l={};for(let e in n)a[F[e]||e.toLowerCase()]=n[e];for(let t in e.attributes){let s=F[t]||t.toLowerCase();if(void 0!==n[t]){let r=i.accessors[e.attributes[t]],n=L[r.componentType];l[s]=n,o[s]=!0===r.normalized}}return t.getDependency("bufferView",r).then(function(e){return new Promise(function(t){s.decodeDracoFile(e,function(e){for(let t in e.attributes){let i=e.attributes[t],s=o[t];void 0!==s&&(i.normalized=s)}t(e)},a,l)})})}}class _{constructor(){this.name=a.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return void 0!==t.texCoord&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),void 0===t.offset&&void 0===t.rotation&&void 0===t.scale||(e=e.clone(),void 0!==t.offset&&e.offset.fromArray(t.offset),void 0!==t.rotation&&(e.rotation=t.rotation),void 0!==t.scale&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class T extends s.Wid{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;let t={specular:{value:new s.Ilk().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=t,this.onBeforeCompile=function(e){for(let i in t)e.uniforms[i]=t[i];e.fragmentShader=e.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>","#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif").replace("#include <metalnessmap_pars_fragment>","#ifdef USE_GLOSSINESSMAP\n	uniform sampler2D glossinessMap;\n#endif").replace("#include <roughnessmap_fragment>","vec3 specularFactor = specular;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vUv );\n	texelSpecular = sRGBToLinear( texelSpecular );\n	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture\n	specularFactor *= texelSpecular.rgb;\n#endif").replace("#include <metalnessmap_fragment>","float glossinessFactor = glossiness;\n#ifdef USE_GLOSSINESSMAP\n	vec4 texelGlossiness = texture2D( glossinessMap, vUv );\n	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture\n	glossinessFactor *= texelGlossiness.a;\n#endif").replace("#include <lights_physical_fragment>","PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.\nmaterial.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\nmaterial.specularColor = specularFactor;")},Object.defineProperties(this,{specular:{get:function(){return t.specular.value},set:function(e){t.specular.value=e}},specularMap:{get:function(){return t.specularMap.value},set:function(e){t.specularMap.value=e,e?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return t.glossiness.value},set:function(e){t.glossiness.value=e}},glossinessMap:{get:function(){return t.glossinessMap.value},set:function(e){t.glossinessMap.value=e,e?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class y{constructor(){this.name=a.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity","refractionRatio"]}getMaterialType(){return T}extendParams(e,t,i){let r=t.extensions[this.name];e.color=new s.Ilk(1,1,1),e.opacity=1;let n=[];if(Array.isArray(r.diffuseFactor)){let t=r.diffuseFactor;e.color.fromArray(t),e.opacity=t[3]}if(void 0!==r.diffuseTexture&&n.push(i.assignTexture(e,"map",r.diffuseTexture)),e.emissive=new s.Ilk(0,0,0),e.glossiness=void 0!==r.glossinessFactor?r.glossinessFactor:1,e.specular=new s.Ilk(1,1,1),Array.isArray(r.specularFactor)&&e.specular.fromArray(r.specularFactor),void 0!==r.specularGlossinessTexture){let t=r.specularGlossinessTexture;n.push(i.assignTexture(e,"glossinessMap",t)),n.push(i.assignTexture(e,"specularMap",t))}return Promise.all(n)}createMaterial(e){let t=new T(e);return t.fog=!0,t.color=e.color,t.map=void 0===e.map?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=void 0===e.aoMap?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=1,t.emissiveMap=void 0===e.emissiveMap?null:e.emissiveMap,t.bumpMap=void 0===e.bumpMap?null:e.bumpMap,t.bumpScale=1,t.normalMap=void 0===e.normalMap?null:e.normalMap,t.normalMapType=s.IOt,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=void 0===e.specularMap?null:e.specularMap,t.specular=e.specular,t.glossinessMap=void 0===e.glossinessMap?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=void 0===e.envMap?null:e.envMap,t.envMapIntensity=1,t.refractionRatio=.98,t}}class E{constructor(){this.name=a.KHR_MESH_QUANTIZATION}}class S extends s._C8{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let e=0;e!==s;e++)t[e]=i[r+e];return t}}S.prototype.beforeStart_=S.prototype.copySampleValue_,S.prototype.afterEnd_=S.prototype.copySampleValue_,S.prototype.interpolate_=function(e,t,i,s){let r=this.resultBuffer,n=this.sampleValues,a=this.valueSize,o=2*a,l=3*a,h=s-t,u=(i-t)/h,c=u*u,d=c*u,p=e*l,m=p-l,g=-2*d+3*c,f=d-c,v=1-g,x=f-c+u;for(let e=0;e!==a;e++){let t=n[m+e+a],i=n[m+e+o]*h,s=n[p+e+a],l=n[p+e]*h;r[e]=v*t+x*i+g*s+f*l}return r};let M=new s._fP;class R extends S{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return M.fromArray(r).normalize().toArray(r),r}}let C={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},L={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},I={9728:s.TyD,9729:s.wem,9984:s.YLQ,9985:s.qyh,9986:s.aH4,9987:s.D1R},P={33071:s.uWy,33648:s.OoA,10497:s.rpg},k={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},F={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},D={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},U={CUBICSPLINE:void 0,LINEAR:s.NMF,STEP:s.Syv},H={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function O(e,t,i){for(let s in i.extensions)void 0===e[s]&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[s]=i.extensions[s])}function N(e,t){void 0!==t.extras&&("object"==typeof t.extras?Object.assign(e.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function $(e){let t="",i=Object.keys(e).sort();for(let s=0,r=i.length;s<r;s++)t+=i[s]+":"+e[i[s]]+";";return t}function B(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}class V{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new n,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.textureCache={},this.nodeNamesUsed={},"undefined"!=typeof createImageBitmap&&!1===/Firefox|Safari/.test(navigator.userAgent)?this.textureLoader=new s.QRU(this.options.manager):this.textureLoader=new s.dpR(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new s.hH6(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),"use-credentials"===this.options.crossOrigin&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(t){let n={scene:t[0][s.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:s.asset,parser:i,userData:{}};O(r,n,s),N(n,s),Promise.all(i._invokeAll(function(e){return e.afterRoot&&e.afterRoot(n)})).then(function(){e(n)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let s=t[i].joints;for(let t=0,i=s.length;t<i;t++)e[s[t]].isBone=!0}for(let t=0,s=e.length;t<s;t++){let s=e[t];void 0!==s.mesh&&(this._addNodeRef(this.meshCache,s.mesh),void 0!==s.skin&&(i[s.mesh].isSkinnedMesh=!0)),void 0!==s.camera&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){void 0!==t&&(void 0===e.refs[t]&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(e,t)=>{let i=this.associations.get(e);for(let[s,n]of(null!=i&&this.associations.set(t,i),e.children.entries()))r(n,t.children[s])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this.loadNode(t);break;case"mesh":s=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this.loadAnimation(t);break;case"camera":s=this.loadCamera(t);break;default:throw Error("Unknown type: "+e)}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this;t=Promise.all((this.json[e+("mesh"===e?"es":"s")]||[]).map(function(t,s){return i.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&"arraybuffer"!==t.type)throw Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(void 0===t.uri&&0===e)return Promise.resolve(this.extensions[a.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(e,n){i.load(s.Zp0.resolveURL(t.uri,r.path),e,void 0,function(){n(Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(e){let i=t.byteLength||0,s=t.byteOffset||0;return e.slice(s,s+i)})}loadAccessor(e){let t=this,i=this.json,r=this.json.accessors[e];if(void 0===r.bufferView&&void 0===r.sparse)return Promise.resolve(null);let n=[];return void 0!==r.bufferView?n.push(this.getDependency("bufferView",r.bufferView)):n.push(null),void 0!==r.sparse&&(n.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),n.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(n).then(function(e){let n,a;let o=e[0],l=k[r.type],h=L[r.componentType],u=h.BYTES_PER_ELEMENT,c=u*l,d=r.byteOffset||0,p=void 0!==r.bufferView?i.bufferViews[r.bufferView].byteStride:void 0,m=!0===r.normalized;if(p&&p!==c){let e=Math.floor(d/p),i="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+e+":"+r.count,c=t.cache.get(i);c||(n=new h(o,e*p,r.count*p/u),c=new s.vpT(n,p/u),t.cache.add(i,c)),a=new s.kB5(c,l,d%p/u,m)}else n=null===o?new h(r.count*l):new h(o,d,r.count*l),a=new s.TlE(n,l,m);if(void 0!==r.sparse){let t=k.SCALAR,i=L[r.sparse.indices.componentType],n=r.sparse.indices.byteOffset||0,u=r.sparse.values.byteOffset||0,c=new i(e[1],n,r.sparse.count*t),d=new h(e[2],u,r.sparse.count*l);null!==o&&(a=new s.TlE(a.array.slice(),a.itemSize,a.normalized));for(let e=0,t=c.length;e<t;e++){let t=c[e];if(a.setX(t,d[e*l]),l>=2&&a.setY(t,d[e*l+1]),l>=3&&a.setZ(t,d[e*l+2]),l>=4&&a.setW(t,d[e*l+3]),l>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return a})}loadTexture(e){let t=this.json,i=this.options,s=t.textures[e],r=t.images[s.source],n=this.textureLoader;if(r.uri){let e=i.manager.getHandler(r.uri);null!==e&&(n=e)}return this.loadTextureImage(e,r,n)}loadTextureImage(e,t,i){let r=this,n=this.json,a=this.options,o=n.textures[e],l=(t.uri||t.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let h=self.URL||self.webkitURL,u=t.uri||"",c=!1;if(void 0!==t.bufferView)u=r.getDependency("bufferView",t.bufferView).then(function(e){c=!0;let i=new Blob([e],{type:t.mimeType});return u=h.createObjectURL(i)});else if(void 0===t.uri)throw Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let d=Promise.resolve(u).then(function(e){return new Promise(function(t,r){let n=t;!0===i.isImageBitmapLoader&&(n=function(e){let i=new s.xEZ(e);i.needsUpdate=!0,t(i)}),i.load(s.Zp0.resolveURL(e,a.path),n,void 0,r)})}).then(function(t){!0===c&&h.revokeObjectURL(u),t.flipY=!1,o.name&&(t.name=o.name);let i=(n.samplers||{})[o.sampler]||{};return t.magFilter=I[i.magFilter]||s.wem,t.minFilter=I[i.minFilter]||s.D1R,t.wrapS=P[i.wrapS]||s.rpg,t.wrapT=P[i.wrapT]||s.rpg,r.associations.set(t,{textures:e}),t}).catch(function(){return console.error("THREE.GLTFLoader: Couldn't load texture",u),null});return this.textureCache[l]=d,d}assignTexture(e,t,i){let s=this;return this.getDependency("texture",i.index).then(function(r){if(void 0===i.texCoord||0==i.texCoord||"aoMap"===t&&1==i.texCoord||console.warn("THREE.GLTFLoader: Custom UV set "+i.texCoord+" for texture "+t+" not yet supported."),s.extensions[a.KHR_TEXTURE_TRANSFORM]){let e=void 0!==i.extensions?i.extensions[a.KHR_TEXTURE_TRANSFORM]:void 0;if(e){let t=s.associations.get(r);r=s.extensions[a.KHR_TEXTURE_TRANSFORM].extendTexture(r,e),s.associations.set(r,t)}}return e[t]=r,r})}assignFinalMaterial(e){let t=e.geometry,i=e.material,r=void 0===t.attributes.tangent,n=void 0!==t.attributes.color,a=void 0===t.attributes.normal;if(e.isPoints){let e="PointsMaterial:"+i.uuid,t=this.cache.get(e);t||(t=new s.UY4,s.F5T.prototype.copy.call(t,i),t.color.copy(i.color),t.map=i.map,t.sizeAttenuation=!1,this.cache.add(e,t)),i=t}else if(e.isLine){let e="LineBasicMaterial:"+i.uuid,t=this.cache.get(e);t||(t=new s.nls,s.F5T.prototype.copy.call(t,i),t.color.copy(i.color),this.cache.add(e,t)),i=t}if(r||n||a){let e="ClonedMaterial:"+i.uuid+":";i.isGLTFSpecularGlossinessMaterial&&(e+="specular-glossiness:"),r&&(e+="derivative-tangents:"),n&&(e+="vertex-colors:"),a&&(e+="flat-shading:");let t=this.cache.get(e);t||(t=i.clone(),n&&(t.vertexColors=!0),a&&(t.flatShading=!0),r&&(t.normalScale&&(t.normalScale.y*=-1),t.clearcoatNormalScale&&(t.clearcoatNormalScale.y*=-1)),this.cache.add(e,t),this.associations.set(t,this.associations.get(i))),i=t}i.aoMap&&void 0===t.attributes.uv2&&void 0!==t.attributes.uv&&t.setAttribute("uv2",t.attributes.uv),e.material=i}getMaterialType(){return s.Wid}loadMaterial(e){let t;let i=this,r=this.json,n=this.extensions,o=r.materials[e],l={},h=o.extensions||{},u=[];if(h[a.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){let e=n[a.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];t=e.getMaterialType(),u.push(e.extendParams(l,o,i))}else if(h[a.KHR_MATERIALS_UNLIT]){let e=n[a.KHR_MATERIALS_UNLIT];t=e.getMaterialType(),u.push(e.extendParams(l,o,i))}else{let r=o.pbrMetallicRoughness||{};if(l.color=new s.Ilk(1,1,1),l.opacity=1,Array.isArray(r.baseColorFactor)){let e=r.baseColorFactor;l.color.fromArray(e),l.opacity=e[3]}void 0!==r.baseColorTexture&&u.push(i.assignTexture(l,"map",r.baseColorTexture)),l.metalness=void 0!==r.metallicFactor?r.metallicFactor:1,l.roughness=void 0!==r.roughnessFactor?r.roughnessFactor:1,void 0!==r.metallicRoughnessTexture&&(u.push(i.assignTexture(l,"metalnessMap",r.metallicRoughnessTexture)),u.push(i.assignTexture(l,"roughnessMap",r.metallicRoughnessTexture))),t=this._invokeOne(function(t){return t.getMaterialType&&t.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,l)})))}!0===o.doubleSided&&(l.side=s.ehD);let c=o.alphaMode||H.OPAQUE;if(c===H.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.format=s.UCm,l.transparent=!1,c===H.MASK&&(l.alphaTest=void 0!==o.alphaCutoff?o.alphaCutoff:.5)),void 0!==o.normalTexture&&t!==s.vBJ&&(u.push(i.assignTexture(l,"normalMap",o.normalTexture)),l.normalScale=new s.FM8(1,1),void 0!==o.normalTexture.scale)){let e=o.normalTexture.scale;l.normalScale.set(e,e)}return void 0!==o.occlusionTexture&&t!==s.vBJ&&(u.push(i.assignTexture(l,"aoMap",o.occlusionTexture)),void 0!==o.occlusionTexture.strength&&(l.aoMapIntensity=o.occlusionTexture.strength)),void 0!==o.emissiveFactor&&t!==s.vBJ&&(l.emissive=new s.Ilk().fromArray(o.emissiveFactor)),void 0!==o.emissiveTexture&&t!==s.vBJ&&u.push(i.assignTexture(l,"emissiveMap",o.emissiveTexture)),Promise.all(u).then(function(){let r;return r=t===T?n[a.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(l):new t(l),o.name&&(r.name=o.name),r.map&&(r.map.encoding=s.knz),r.emissiveMap&&(r.emissiveMap.encoding=s.knz),N(r,o),i.associations.set(r,{materials:e}),o.extensions&&O(n,r,o),r})}createUniqueName(e){let t=s.iUV.sanitizeNodeName(e||""),i=t;for(let e=1;this.nodeNamesUsed[i];++e)i=t+"_"+e;return this.nodeNamesUsed[i]=!0,i}loadGeometries(e){let t=this,i=this.extensions,r=this.primitiveCache,n=[];for(let o=0,l=e.length;o<l;o++){let l=e[o],h=function(e){let t=e.extensions&&e.extensions[a.KHR_DRACO_MESH_COMPRESSION];return t?"draco:"+t.bufferView+":"+t.indices+":"+$(t.attributes):e.indices+":"+$(e.attributes)+":"+e.mode}(l),u=r[h];if(u)n.push(u.promise);else{let e;e=l.extensions&&l.extensions[a.KHR_DRACO_MESH_COMPRESSION]?function(e){return i[a.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(i){return z(i,e,t)})}(l):z(new s.u9r,l,t),r[h]={primitive:l,promise:e},n.push(e)}}return Promise.all(n)}loadMesh(e){let t=this,i=this.json,r=this.extensions,n=i.meshes[e],a=n.primitives,o=[];for(let e=0,t=a.length;e<t;e++){var l;let t=void 0===a[e].material?(void 0===(l=this.cache).DefaultMaterial&&(l.DefaultMaterial=new s.Wid({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:s.Wl3})),l.DefaultMaterial):this.getDependency("material",a[e].material);o.push(t)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(i){let o=i.slice(0,i.length-1),l=i[i.length-1],h=[];for(let i=0,u=l.length;i<u;i++){let u;let c=l[i],d=a[i],p=o[i];if(d.mode===C.TRIANGLES||d.mode===C.TRIANGLE_STRIP||d.mode===C.TRIANGLE_FAN||void 0===d.mode)!0!==(u=!0===n.isSkinnedMesh?new s.TUv(c,p):new s.Kj0(c,p)).isSkinnedMesh||u.geometry.attributes.skinWeight.normalized||u.normalizeSkinWeights(),d.mode===C.TRIANGLE_STRIP?u.geometry=G(u.geometry,s.UlW):d.mode===C.TRIANGLE_FAN&&(u.geometry=G(u.geometry,s.z$h));else if(d.mode===C.LINES)u=new s.ejS(c,p);else if(d.mode===C.LINE_STRIP)u=new s.x12(c,p);else if(d.mode===C.LINE_LOOP)u=new s.blk(c,p);else if(d.mode===C.POINTS)u=new s.woe(c,p);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+d.mode);Object.keys(u.geometry.morphAttributes).length>0&&function(e,t){if(e.updateMorphTargets(),void 0!==t.weights)for(let i=0,s=t.weights.length;i<s;i++)e.morphTargetInfluences[i]=t.weights[i];if(t.extras&&Array.isArray(t.extras.targetNames)){let i=t.extras.targetNames;if(e.morphTargetInfluences.length===i.length){e.morphTargetDictionary={};for(let t=0,s=i.length;t<s;t++)e.morphTargetDictionary[i[t]]=t}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}(u,n),u.name=t.createUniqueName(n.name||"mesh_"+e),N(u,n),d.extensions&&O(r,u,d),t.assignFinalMaterial(u),h.push(u)}for(let i=0,s=h.length;i<s;i++)t.associations.set(h[i],{meshes:e,primitives:i});if(1===h.length)return h[0];let u=new s.ZAu;t.associations.set(u,{meshes:e});for(let e=0,t=h.length;e<t;e++)u.add(h[e]);return u})}loadCamera(e){let t;let i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return"perspective"===i.type?t=new s.cPb(s.M8C.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):"orthographic"===i.type&&(t=new s.iKG(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),N(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i={joints:t.joints};return void 0===t.inverseBindMatrices?Promise.resolve(i):this.getDependency("accessor",t.inverseBindMatrices).then(function(e){return i.inverseBindMatrices=e,i})}loadAnimation(e){let t=this.json.animations[e],i=[],r=[],n=[],a=[],o=[];for(let e=0,s=t.channels.length;e<s;e++){let s=t.channels[e],l=t.samplers[s.sampler],h=s.target,u=void 0!==h.node?h.node:h.id,c=void 0!==t.parameters?t.parameters[l.input]:l.input,d=void 0!==t.parameters?t.parameters[l.output]:l.output;i.push(this.getDependency("node",u)),r.push(this.getDependency("accessor",c)),n.push(this.getDependency("accessor",d)),a.push(l),o.push(h)}return Promise.all([Promise.all(i),Promise.all(r),Promise.all(n),Promise.all(a),Promise.all(o)]).then(function(i){let r=i[0],n=i[1],a=i[2],o=i[3],l=i[4],h=[];for(let e=0,t=r.length;e<t;e++){let t;let i=r[e],u=n[e],c=a[e],d=o[e],p=l[e];if(void 0===i)continue;switch(i.updateMatrix(),i.matrixAutoUpdate=!0,D[p.path]){case D.weights:t=s.dUE;break;case D.rotation:t=s.iLg;break;case D.position:case D.scale:default:t=s.yC1}let m=i.name?i.name:i.uuid,g=void 0!==d.interpolation?U[d.interpolation]:s.NMF,f=[];D[p.path]===D.weights?i.traverse(function(e){e.morphTargetInfluences&&f.push(e.name?e.name:e.uuid)}):f.push(m);let v=c.array;if(c.normalized){let e=B(v.constructor),t=new Float32Array(v.length);for(let i=0,s=v.length;i<s;i++)t[i]=v[i]*e;v=t}for(let e=0,i=f.length;e<i;e++){let i=new t(f[e]+"."+D[p.path],u.array,v,g);"CUBICSPLINE"===d.interpolation&&(i.createInterpolant=function(e){return new(this instanceof s.iLg?R:S)(this.times,this.values,this.getValueSize()/3,e)},i.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),h.push(i)}}let u=t.name?t.name:"animation_"+e;return new s.m7l(u,void 0,h)})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return void 0===s.mesh?null:i.getDependency("mesh",s.mesh).then(function(e){let t=i._getNodeRef(i.meshCache,s.mesh,e);return void 0!==s.weights&&t.traverse(function(e){if(e.isMesh)for(let t=0,i=s.weights.length;t<i;t++)e.morphTargetInfluences[t]=s.weights[t]}),t})}loadNode(e){let t=this.json,i=this.extensions,r=this,n=t.nodes[e],a=n.name?r.createUniqueName(n.name):"";return(function(){let t=[],i=r._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(e)});return i&&t.push(i),void 0!==n.camera&&t.push(r.getDependency("camera",n.camera).then(function(e){return r._getNodeRef(r.cameraCache,n.camera,e)})),r._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)}).forEach(function(e){t.push(e)}),Promise.all(t)})().then(function(t){let o;if((o=!0===n.isBone?new s.N$j:t.length>1?new s.ZAu:1===t.length?t[0]:new s.Tme)!==t[0])for(let e=0,i=t.length;e<i;e++)o.add(t[e]);if(n.name&&(o.userData.name=n.name,o.name=a),N(o,n),n.extensions&&O(i,o,n),void 0!==n.matrix){let e=new s.yGw;e.fromArray(n.matrix),o.applyMatrix4(e)}else void 0!==n.translation&&o.position.fromArray(n.translation),void 0!==n.rotation&&o.quaternion.fromArray(n.rotation),void 0!==n.scale&&o.scale.fromArray(n.scale);return r.associations.has(o)||r.associations.set(o,{}),r.associations.get(o).nodes=e,o})}loadScene(e){let t=this.json,i=this.extensions,r=this.json.scenes[e],n=this,a=new s.ZAu;r.name&&(a.name=n.createUniqueName(r.name)),N(a,r),r.extensions&&O(i,a,r);let o=r.nodes||[],l=[];for(let e=0,i=o.length;e<i;e++)l.push(function e(t,i,r,n){let a=r.nodes[t];return n.getDependency("node",t).then(function(e){let t;return void 0===a.skin?e:n.getDependency("skin",a.skin).then(function(e){t=e;let i=[];for(let e=0,s=t.joints.length;e<s;e++)i.push(n.getDependency("node",t.joints[e]));return Promise.all(i)}).then(function(i){return e.traverse(function(e){if(!e.isMesh)return;let r=[],n=[];for(let e=0,a=i.length;e<a;e++){let a=i[e];if(a){r.push(a);let i=new s.yGw;void 0!==t.inverseBindMatrices&&i.fromArray(t.inverseBindMatrices.array,16*e),n.push(i)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[e])}e.bind(new s.OdW(r,n),e.matrixWorld)}),e})}).then(function(t){i.add(t);let s=[];if(a.children){let i=a.children;for(let a=0,o=i.length;a<o;a++){let o=i[a];s.push(e(o,t,r,n))}}return Promise.all(s)})}(o[e],a,t,n));return Promise.all(l).then(function(){return n.associations=(e=>{let t=new Map;for(let[e,i]of n.associations)(e instanceof s.F5T||e instanceof s.xEZ)&&t.set(e,i);return e.traverse(e=>{let i=n.associations.get(e);null!=i&&t.set(e,i)}),t})(a),a})}}function z(e,t,i){let r=t.attributes,n=[];for(let t in r){let s=F[t]||t.toLowerCase();s in e.attributes||n.push(function(t,s){return i.getDependency("accessor",t).then(function(t){e.setAttribute(s,t)})}(r[t],s))}if(void 0!==t.indices&&!e.index){let s=i.getDependency("accessor",t.indices).then(function(t){e.setIndex(t)});n.push(s)}return N(e,t),!function(e,t,i){let r=t.attributes,n=new s.ZzF;if(void 0===r.POSITION)return;{let e=i.json.accessors[r.POSITION],t=e.min,a=e.max;if(void 0!==t&&void 0!==a){if(n.set(new s.Pa4(t[0],t[1],t[2]),new s.Pa4(a[0],a[1],a[2])),e.normalized){let t=B(L[e.componentType]);n.min.multiplyScalar(t),n.max.multiplyScalar(t)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}let a=t.targets;if(void 0!==a){let e=new s.Pa4,t=new s.Pa4;for(let s=0,r=a.length;s<r;s++){let r=a[s];if(void 0!==r.POSITION){let s=i.json.accessors[r.POSITION],n=s.min,a=s.max;if(void 0!==n&&void 0!==a){if(t.setX(Math.max(Math.abs(n[0]),Math.abs(a[0]))),t.setY(Math.max(Math.abs(n[1]),Math.abs(a[1]))),t.setZ(Math.max(Math.abs(n[2]),Math.abs(a[2]))),s.normalized){let e=B(L[s.componentType]);t.multiplyScalar(e)}e.max(t)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(e)}e.boundingBox=n;let o=new s.aLr;n.getCenter(o.center),o.radius=n.min.distanceTo(n.max)/2,e.boundingSphere=o}(e,t,i),Promise.all(n).then(function(){return void 0!==t.targets?function(e,t,i){let s=!1,r=!1;for(let e=0,i=t.length;e<i;e++){let i=t[e];if(void 0!==i.POSITION&&(s=!0),void 0!==i.NORMAL&&(r=!0),s&&r)break}if(!s&&!r)return Promise.resolve(e);let n=[],a=[];for(let o=0,l=t.length;o<l;o++){let l=t[o];if(s){let t=void 0!==l.POSITION?i.getDependency("accessor",l.POSITION):e.attributes.position;n.push(t)}if(r){let t=void 0!==l.NORMAL?i.getDependency("accessor",l.NORMAL):e.attributes.normal;a.push(t)}}return Promise.all([Promise.all(n),Promise.all(a)]).then(function(t){let i=t[0],n=t[1];return s&&(e.morphAttributes.position=i),r&&(e.morphAttributes.normal=n),e.morphTargetsRelative=!0,e})}(e,t.targets,i):e})}function G(e,t){let i=e.getIndex();if(null===i){let t=[],s=e.getAttribute("position");if(void 0===s)return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e;for(let e=0;e<s.count;e++)t.push(e);e.setIndex(t),i=e.getIndex()}let r=i.count-2,n=[];if(t===s.z$h)for(let e=1;e<=r;e++)n.push(i.getX(0)),n.push(i.getX(e)),n.push(i.getX(e+1));else for(let e=0;e<r;e++)e%2==0?(n.push(i.getX(e)),n.push(i.getX(e+1)),n.push(i.getX(e+2))):(n.push(i.getX(e+2)),n.push(i.getX(e+1)),n.push(i.getX(e)));n.length/3!==r&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let a=e.clone();return a.setIndex(n),a}},8606:function(e,t,i){i.d(t,{xC:function(){return h}});var s=i(2212),r=i(1154),n=i(7531),a=i(8304);class o extends a.w{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s,r;let n=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0),this.inverse?(s=0,r=1):(s=1,r=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),a.buffers.stencil.setFunc(n.ALWAYS,s,4294967295),a.buffers.stencil.setClear(r),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(n.EQUAL,1,4294967295),a.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),a.buffers.stencil.setLocked(!0)}}class l extends a.w{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class h{constructor(e,t){if(this.renderer=e,void 0===t){let i={minFilter:s.wem,magFilter:s.wem,format:s.wk1},r=e.getSize(new s.FM8);this._pixelRatio=e.getPixelRatio(),this._width=r.width,this._height=r.height,(t=new s.dd2(this._width*this._pixelRatio,this._height*this._pixelRatio,i)).texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],void 0===r.C&&console.error("THREE.EffectComposer relies on CopyShader"),void 0===n.T&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new n.T(r.C),this.clock=new s.SUY}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);-1!==t&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){void 0===e&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let t=0,s=this.passes.length;t<s;t++){let s=this.passes[t];if(!1!==s.enabled){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){let t=this.renderer.getContext(),i=this.renderer.state.buffers.stencil;i.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),i.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}void 0!==o&&(s instanceof o?i=!0:s instanceof l&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(void 0===e){let t=this.renderer.getSize(new s.FM8);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,(e=this.renderTarget1.clone()).setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new s.iKG(-1,1,1,-1,0,1);let u=new s.u9r;u.setAttribute("position",new s.a$l([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new s.a$l([0,2,0,0,2,0],2))},8304:function(e,t,i){i.d(t,{T:function(){return o},w:function(){return r}});var s=i(2212);class r{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}let n=new s.iKG(-1,1,1,-1,0,1),a=new s.u9r;a.setAttribute("position",new s.a$l([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new s.a$l([0,2,0,0,2,0],2));class o{constructor(e){this._mesh=new s.Kj0(a,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,n)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}},4458:function(e,t,i){i.d(t,{C:function(){return n}});var s=i(2212),r=i(8304);class n extends r.w{constructor(e,t,i,r,n){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=void 0!==n?n:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new s.Ilk}render(e,t,i){let s,r;let n=e.autoClear;e.autoClear=!1,void 0!==this.overrideMaterial&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),void 0!==this.overrideMaterial&&(this.scene.overrideMaterial=r),e.autoClear=n}}},7531:function(e,t,i){i.d(t,{T:function(){return n}});var s=i(2212),r=i(8304);class n extends r.w{constructor(e,t){super(),this.textureID=void 0!==t?t:"tDiffuse",e instanceof s.jyz?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=s.rDY.clone(e.uniforms),this.material=new s.jyz({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new r.T(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)),this.fsQuad.render(e)}}},6591:function(e,t,i){i.d(t,{m:function(){return o}});var s=i(2212),r=i(8304),n=i(1154);let a={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new s.Ilk(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class o extends r.w{constructor(e,t,i,o){super(),this.strength=void 0!==t?t:1,this.radius=i,this.threshold=o,this.resolution=void 0!==e?new s.FM8(e.x,e.y):new s.FM8(256,256),this.clearColor=new s.Ilk(0,0,0);let l={minFilter:s.wem,magFilter:s.wem,format:s.wk1};this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let h=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new s.dd2(h,u,l),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new s.dd2(h,u,l);t.texture.name="UnrealBloomPass.h"+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let i=new s.dd2(h,u,l);i.texture.name="UnrealBloomPass.v"+e,i.texture.generateMipmaps=!1,this.renderTargetsVertical.push(i),h=Math.round(h/2),u=Math.round(u/2)}void 0===a&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader"),this.highPassUniforms=s.rDY.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new s.jyz({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,defines:{}}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];h=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[e])),this.separableBlurMaterials[e].uniforms.texSize.value=new s.FM8(h,u),h=Math.round(h/2),u=Math.round(u/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0,this.compositeMaterial.uniforms.bloomFactors.value=[1,.8,.6,.4,.2],this.bloomTintColors=[new s.Pa4(1,1,1),new s.Pa4(1,1,1),new s.Pa4(1,1,1),new s.Pa4(1,1,1),new s.Pa4(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,void 0===n.C&&console.error("THREE.UnrealBloomPass relies on CopyShader");let d=n.C;this.copyUniforms=s.rDY.clone(d.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new s.jyz({uniforms:this.copyUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,blending:s.WMw,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new s.Ilk,this.oldClearAlpha=1,this.basic=new s.vBJ,this.fsQuad=new r.T(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(i,r),this.renderTargetsVertical[e].setSize(i,r),this.separableBlurMaterials[e].uniforms.texSize.value=new s.FM8(i,r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let n=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let t=0;t<this.nMips;t++)this.fsQuad.material=this.separableBlurMaterials[t],this.separableBlurMaterials[t].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[t].uniforms.direction.value=o.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[t]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[t].uniforms.colorTexture.value=this.renderTargetsHorizontal[t].texture,this.separableBlurMaterials[t].uniforms.direction.value=o.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[t]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[t];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?e.setRenderTarget(null):e.setRenderTarget(i),this.fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=n}getSeperableBlurMaterial(e){return new s.jyz({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new s.FM8(.5,.5)},direction:{value:new s.FM8(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new s.jyz({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},dirtTexture:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform sampler2D dirtTexture;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}o.BlurDirectionX=new s.FM8(1,0),o.BlurDirectionY=new s.FM8(0,1)},1154:function(e,t,i){i.d(t,{C:function(){return s}});var s={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;

		}`}},2448:function(e,t,i){i.d(t,{Y:function(){return s}});let s={uniforms:{tDiffuse:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 tex = texture2D( tDiffuse, vUv );

			gl_FragColor = LinearTosRGB( tex );

		}`}},7399:function(e,t,i){i.d(t,{u:function(){return s}});let s={uniforms:{tDiffuse:{value:null},amount:{value:.005},angle:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float amount;
		uniform float angle;

		varying vec2 vUv;

		void main() {

			vec2 offset = amount * vec2( cos(angle), sin(angle));
			vec4 cr = texture2D(tDiffuse, vUv + offset);
			vec4 cga = texture2D(tDiffuse, vUv);
			vec4 cb = texture2D(tDiffuse, vUv - offset);
			gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);

		}`}}}]);