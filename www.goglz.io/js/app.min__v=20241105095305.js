(()=>{"use strict";const t={};function e(){if(location.hash)return location.hash.replace("#","")}let o=!0,a=(t=500)=>{if(o){const e=document.querySelectorAll("[data-lp]");setTimeout((()=>{e.forEach((t=>{t.style.paddingRight=""})),document.body.style.paddingRight="",document.documentElement.classList.remove("lock")}),t),o=!1,setTimeout((function(){o=!0}),t)}},s=(t=500)=>{if(o){const e=document.querySelectorAll("[data-lp]"),a=window.innerWidth-document.body.offsetWidth+"px";e.forEach((t=>{t.style.paddingRight=a})),document.body.style.paddingRight=a,document.documentElement.classList.add("lock"),o=!1,setTimeout((function(){o=!0}),t)}};function c(){a(),document.documentElement.classList.remove("menu-open")}function n(t){setTimeout((()=>{window.FLS&&console.log(t)}),0)}function i(t){return t.filter((function(t,e,o){return o.indexOf(t)===e}))}t.watcher=new class{constructor(t){this.config=Object.assign({logging:!0},t),this.observer,!document.documentElement.classList.contains("watcher")&&this.scrollWatcherRun()}scrollWatcherUpdate(){this.scrollWatcherRun()}scrollWatcherRun(){document.documentElement.classList.add("watcher"),this.scrollWatcherConstructor(document.querySelectorAll("[data-watch]"))}scrollWatcherConstructor(t){if(t.length){this.scrollWatcherLogging(`Прокинувся, стежу за об'єктами (${t.length})...`),i(Array.from(t).map((function(t){if("navigator"===t.dataset.watch&&!t.dataset.watchThreshold){let e;t.clientHeight>2?(e=window.innerHeight/2/(t.clientHeight-1),e>1&&(e=1)):e=1,t.setAttribute("data-watch-threshold",e.toFixed(2))}return`${t.dataset.watchRoot?t.dataset.watchRoot:null}|${t.dataset.watchMargin?t.dataset.watchMargin:"0px"}|${t.dataset.watchThreshold?t.dataset.watchThreshold:0}`}))).forEach((e=>{let o=e.split("|"),a={root:o[0],margin:o[1],threshold:o[2]},s=Array.from(t).filter((function(t){let e=t.dataset.watchRoot?t.dataset.watchRoot:null,o=t.dataset.watchMargin?t.dataset.watchMargin:"0px",s=t.dataset.watchThreshold?t.dataset.watchThreshold:0;if(String(e)===a.root&&String(o)===a.margin&&String(s)===a.threshold)return t})),c=this.getScrollWatcherConfig(a);this.scrollWatcherInit(s,c)}))}else this.scrollWatcherLogging("Сплю, немає об'єктів для стеження. ZzzZZzz")}getScrollWatcherConfig(t){let e={};if(document.querySelector(t.root)?e.root=document.querySelector(t.root):"null"!==t.root&&this.scrollWatcherLogging(`Эмм... батьківського об'єкта ${t.root} немає на сторінці`),e.rootMargin=t.margin,!(t.margin.indexOf("px")<0&&t.margin.indexOf("%")<0)){if("prx"===t.threshold){t.threshold=[];for(let e=0;e<=1;e+=.005)t.threshold.push(e)}else t.threshold=t.threshold.split(",");return e.threshold=t.threshold,e}this.scrollWatcherLogging("йой, налаштування data-watch-margin потрібно задавати в PX або %")}scrollWatcherCreate(t){console.log(t),this.observer=new IntersectionObserver(((t,e)=>{t.forEach((t=>{this.scrollWatcherCallback(t,e)}))}),t)}scrollWatcherInit(t,e){this.scrollWatcherCreate(e),t.forEach((t=>this.observer.observe(t)))}scrollWatcherIntersecting(t,e){t.isIntersecting?(!e.classList.contains("_watcher-view")&&e.classList.add("_watcher-view"),this.scrollWatcherLogging(`Я бачу ${e.classList}, додав клас _watcher-view`)):(e.classList.contains("_watcher-view")&&e.classList.remove("_watcher-view"),this.scrollWatcherLogging(`Я не бачу ${e.classList}, прибрав клас _watcher-view`))}scrollWatcherOff(t,e){e.unobserve(t),this.scrollWatcherLogging(`Я перестав стежити за ${t.classList}`)}scrollWatcherLogging(t){this.config.logging&&n(`[Спостерігач]: ${t}`)}scrollWatcherCallback(t,e){const o=t.target;this.scrollWatcherIntersecting(t,o),o.hasAttribute("data-watch-once")&&t.isIntersecting&&this.scrollWatcherOff(o,e),document.dispatchEvent(new CustomEvent("watcherCallback",{detail:{entry:t}}))}}({});let r=(t,e=!1,o=500,a=0)=>{const s=document.querySelector(t);if(s){let i="",r=0;if(e){i="header.header";const t=document.querySelector(i);t.classList.contains("_header-scroll")?r=t.offsetHeight:(t.style.cssText="transition-duration: 0s;",t.classList.add("_header-scroll"),r=t.offsetHeight,t.classList.remove("_header-scroll"),setTimeout((()=>{t.style.cssText=""}),0))}let l={speedAsDuration:!0,speed:o,header:i,offset:a,easing:"easeOutQuad"};if(document.documentElement.classList.contains("menu-open")&&c(),"undefined"!=typeof SmoothScroll)(new SmoothScroll).animateScroll(s,"",l);else{let t=s.getBoundingClientRect().top+scrollY;t=r?t-r:t,t=a?t-a:t,window.scrollTo({top:t,behavior:"smooth"})}n(`[gotoBlock]: Юхуу...їдемо до ${t}`)}else n(`[gotoBlock]: Йой... Такого блоку немає на сторінці: ${t}`)},l=!1;setTimeout((()=>{if(l){let t=new Event("windowScroll");window.addEventListener("scroll",(function(e){document.dispatchEvent(t)}))}}),0);async function d(){try{const t="0x7ce48865ee2f1c96bfb978dc33eadd7f5f82c469";await navigator.clipboard.writeText(t),alert("Address copied successfully")}catch(t){console.error(t.message)}}new class{constructor(t){this.type=t}init(){this.оbjects=[],this.daClassname="_dynamic_adapt_",this.nodes=[...document.querySelectorAll("[data-da]")],this.nodes.forEach((t=>{const e=t.dataset.da.trim().split(","),o={};o.element=t,o.parent=t.parentNode,o.destination=document.querySelector(`${e[0].trim()}`),o.breakpoint=e[1]?e[1].trim():"767.98",o.place=e[2]?e[2].trim():"last",o.index=this.indexInParent(o.parent,o.element),this.оbjects.push(o)})),this.arraySort(this.оbjects),this.mediaQueries=this.оbjects.map((({breakpoint:t})=>`(${this.type}-width: ${t/16}em),${t}`)).filter(((t,e,o)=>o.indexOf(t)===e)),this.mediaQueries.forEach((t=>{const e=t.split(","),o=window.matchMedia(e[0]),a=e[1],s=this.оbjects.filter((({breakpoint:t})=>t===a));o.addEventListener("change",(()=>{this.mediaHandler(o,s)})),this.mediaHandler(o,s)}))}mediaHandler(t,e){t.matches?e.forEach((t=>{this.moveTo(t.place,t.element,t.destination)})):e.forEach((({parent:t,element:e,index:o})=>{e.classList.contains(this.daClassname)&&this.moveBack(t,e,o)}))}moveTo(t,e,o){e.classList.add(this.daClassname),"last"===t||t>=o.children.length?o.append(e):"first"!==t?o.children[t].before(e):o.prepend(e)}moveBack(t,e,o){e.classList.remove(this.daClassname),void 0!==t.children[o]?t.children[o].before(e):t.append(e)}indexInParent(t,e){return[...t.children].indexOf(e)}arraySort(t){"min"===this.type?t.sort(((t,e)=>t.breakpoint===e.breakpoint?t.place===e.place?0:"first"===t.place||"last"===e.place?-1:"last"===t.place||"first"===e.place?1:0:t.breakpoint-e.breakpoint)):t.sort(((t,e)=>t.breakpoint===e.breakpoint?t.place===e.place?0:"first"===t.place||"last"===e.place?1:"last"===t.place||"first"===e.place?-1:0:e.breakpoint-t.breakpoint))}}("max").init();document.querySelectorAll(".copy-ca-btn").forEach((t=>{t.onclick=d})),window.FLS=!1,document.documentElement.classList.contains("loading")||window.addEventListener("load",(function(){setTimeout((function(){document.documentElement.classList.add("loaded")}),0)})),document.querySelector(".icon-menu")&&document.addEventListener("click",(function(t){o&&t.target.closest(".icon-menu")&&(((t=500)=>{document.documentElement.classList.contains("lock")?a(t):s(t)})(),document.documentElement.classList.toggle("menu-open"))})),function(){function o(e){if("click"===e.type){const o=e.target;if(o.closest("[data-goto]")){const a=o.closest("[data-goto]"),s=a.dataset.goto?a.dataset.goto:"",n=!!a.hasAttribute("data-goto-header"),i=a.dataset.gotoSpeed?a.dataset.gotoSpeed:500,l=a.dataset.gotoTop?parseInt(a.dataset.gotoTop):0;if(t.fullpage){const e=document.querySelector(`${s}`).closest("[data-fp-section]"),o=e?+e.dataset.fpId:null;null!==o&&(t.fullpage.switchingSection(o),document.documentElement.classList.contains("menu-open")&&c())}else r(s,n,i,l);e.preventDefault()}}else if("watcherCallback"===e.type&&e.detail){const t=e.detail.entry,o=t.target;if("navigator"===o.dataset.watch){document.querySelector("[data-goto]._navigator-active");let e;if(o.id&&document.querySelector(`[data-goto="#${o.id}"]`))e=document.querySelector(`[data-goto="#${o.id}"]`);else if(o.classList.length)for(let t=0;t<o.classList.length;t++){const a=o.classList[t];if(document.querySelector(`[data-goto=".${a}"]`)){e=document.querySelector(`[data-goto=".${a}"]`);break}}t.isIntersecting?e&&e.classList.add("_navigator-active"):e&&e.classList.remove("_navigator-active")}}}if(document.addEventListener("click",o),document.addEventListener("watcherCallback",o),e()){let t;document.querySelector(`#${e()}`)?t=`#${e()}`:document.querySelector(`.${e()}`)&&(t=`.${e()}`),t&&r(t,!0,500,20)}}()})();