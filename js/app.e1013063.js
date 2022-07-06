(function(){"use strict";var t={703:function(t,e,s){var n=s(963),o=s(252);const i={id:"app"};function a(t,e){const s=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(s)])}var r=s(744);const d={},c=(0,r.Z)(d,[["render",a]]);var u=c,l=s(119),p=s(577);const f={class:"home"},h=(0,o._)("h1",{class:"title"},"ToDo App",-1),v=(0,o._)("hr",null,null,-1),m={class:"columns"},b={class:"column is-3 is-offset-2"},k=(0,o._)("h2",{class:"subtitle"},"Add task",-1),_={class:"field"},g=(0,o._)("label",{class:"label"},"Description",-1),w={class:"control"},y={class:"field"},T=(0,o.Uk)("Status"),D={class:"control"},O={class:"select"},j=(0,o._)("option",{value:"todo"},"To Do",-1),C=(0,o._)("option",{value:"done"},"Done",-1),S=[j,C],P=(0,o._)("div",{class:"field"},[(0,o._)("div",{class:"control"},[(0,o._)("button",{class:"button is-link"},"Submit")])],-1),x={class:"column is-3 is-offset-2"},A={class:"box"},U=(0,o._)("h2",{class:"subtitle"},"Update task",-1),E={class:"field"},M=(0,o.Uk)("Task"),V={class:"control"},H={class:"select"},N=["value"],z={class:"field"},K=(0,o._)("label",{class:"label"},"New Description",-1),W={class:"control"},Y={class:"field"},F={class:"buttons"},L={class:"columns"},Z={class:"column is-6"},q=(0,o._)("h2",{class:"subtitle"},"To Do",-1),B={class:"todo"},G={class:"card-content"},I={class:"card-footer"},J=["onClick"],Q={class:"column is-6"},R=(0,o._)("h2",{class:"subtitle"},"Done",-1),X={class:"done"},$={class:"card-content"},tt={class:"card-footer"},et=["onClick"];function st(t,e,s,i,a,r){const d=(0,o.up)("lable");return(0,o.wg)(),(0,o.iD)("div",f,[h,v,(0,o._)("div",m,[(0,o._)("div",b,[(0,o._)("form",{class:"box",onSubmit:e[2]||(e[2]=(0,n.iM)(((...t)=>r.addTask&&r.addTask(...t)),["prevent"]))},[k,(0,o._)("div",_,[g,(0,o._)("div",w,[(0,o.wy)((0,o._)("input",{class:"input",type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>a.description1=t)},null,512),[[n.nr,a.description1]])])]),(0,o._)("div",y,[(0,o.Wm)(d,{class:"lable"},{default:(0,o.w5)((()=>[T])),_:1}),(0,o._)("div",D,[(0,o._)("div",O,[(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":e[1]||(e[1]=t=>a.status1=t)},S,512),[[n.bM,a.status1]])])])]),P],32)]),(0,o._)("div",x,[(0,o._)("form",A,[U,(0,o._)("div",E,[(0,o.Wm)(d,{class:"lable"},{default:(0,o.w5)((()=>[M])),_:1}),(0,o._)("div",V,[(0,o._)("div",H,[(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":e[3]||(e[3]=e=>t.id=e)},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.atasks,(t=>((0,o.wg)(),(0,o.iD)("option",{key:t.id,value:t.id},(0,p.zw)(t.description),9,N)))),128))],512),[[n.bM,t.id]])])])]),(0,o._)("div",z,[K,(0,o._)("div",W,[(0,o.wy)((0,o._)("input",{class:"input",type:"text","onUpdate:modelValue":e[4]||(e[4]=t=>a.description=t)},null,512),[[n.nr,a.description]])])]),(0,o._)("div",Y,[(0,o._)("div",F,[(0,o._)("button",{class:"button is-link",onClick:e[5]||(e[5]=t=>r.updateTask())},"Update"),(0,o._)("button",{class:"button is-danger",onClick:e[6]||(e[6]=e=>r.deleteTask(t.id))},"Delate")])])])])]),(0,o._)("div",L,[(0,o._)("div",Z,[q,(0,o._)("div",B,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.todotasks,(t=>((0,o.wg)(),(0,o.iD)("div",{class:"card",key:t.id},[(0,o._)("div",G,(0,p.zw)(t.description),1),(0,o._)("footer",I,[(0,o._)("a",{class:"card-footer-item",onClick:e=>r.setStatus(t.id,"done")},"Done",8,J)])])))),128))])]),(0,o._)("div",Q,[R,(0,o._)("div",X,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.donetasks,(t=>((0,o.wg)(),(0,o.iD)("div",{class:"card",key:t.id},[(0,o._)("div",$,(0,p.zw)(t.description),1),(0,o._)("footer",tt,[(0,o._)("a",{class:"card-footer-item",onClick:e=>r.setStatus(t.id,"todo")},"To Do",8,et)])])))),128))])])])])}var nt=s(669),ot=s.n(nt),it={name:"HomeView",data(){return{tasks:[],description:"",description1:"",status1:"todo"}},mounted(){this.getTasks()},methods:{getTasks(){ot()({method:"get",url:"http://127.0.0.1:8000/tasks/",auth:{username:"admin",password:"adminadmin"}}).then((t=>this.tasks=t.data))},addTask(){this.description1&&ot()({method:"post",url:"http://127.0.0.1:8000/tasks/",data:{description:this.description1,status:this.status1},auth:{username:"admin",password:"adminadmin"}}).then((t=>{let e={id:t.data.id,description:this.description1,status:this.status1};this.tasks.push(e),this.description1="",this.status1="todo"})).catch((t=>{console.log(t)}))},updateTask(){this.id&&ot()({method:"put",url:"http://127.0.0.1:8000/tasks/"+this.id+"/",headers:{"Content-Type":"application/json"},data:{status:"todo",description:this.description},auth:{username:"admin",password:"adminadmin"}}).then((()=>{this.description="",this.id=""}))},deleteTask(t){ot()["delete"]("http://127.0.0.1:8000/tasks/"+t+"/")},setStatus(t,e){const s=this.tasks.filter((e=>e.id===t))[0],n=s.description;ot()({method:"put",url:"http://127.0.0.1:8000/tasks/"+t+"/",headers:{"Content-Type":"application/json"},data:{status:e,description:n},auth:{username:"admin",password:"adminadmin"}}).then((()=>{s.status=e}))}},computed:{todotasks:function(){return this.tasks.filter((t=>"todo"===t.status))},donetasks:function(){return this.tasks.filter((t=>"done"===t.status))},atasks:function(){return this.tasks.filter((t=>t))}}};const at=(0,r.Z)(it,[["render",st]]);var rt=at;const dt=[{path:"/",name:"home",component:rt},{path:"/about",name:"about",component:()=>s.e(443).then(s.bind(s,381))}],ct=(0,l.p7)({history:(0,l.PO)("/ToDoApp-Page/"),routes:dt});var ut=ct;(0,n.ri)(u).use(ut).mount("#app")}},e={};function s(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(e,n,o,i){if(!n){var a=1/0;for(u=0;u<t.length;u++){n=t[u][0],o=t[u][1],i=t[u][2];for(var r=!0,d=0;d<n.length;d++)(!1&i||a>=i)&&Object.keys(s.O).every((function(t){return s.O[t](n[d])}))?n.splice(d--,1):(r=!1,i<a&&(a=i));if(r){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[n,o,i]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){s.f={},s.e=function(t){return Promise.all(Object.keys(s.f).reduce((function(e,n){return s.f[n](t,e),e}),[]))}}(),function(){s.u=function(t){return"js/about.d5e488ed.js"}}(),function(){s.miniCssF=function(t){}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="todoapp:";s.l=function(n,o,i,a){if(t[n])t[n].push(o);else{var r,d;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var l=c[u];if(l.getAttribute("src")==n||l.getAttribute("data-webpack")==e+i){r=l;break}}r||(d=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,s.nc&&r.setAttribute("nonce",s.nc),r.setAttribute("data-webpack",e+i),r.src=n),t[n]=[o];var p=function(e,s){r.onerror=r.onload=null,clearTimeout(f);var o=t[n];if(delete t[n],r.parentNode&&r.parentNode.removeChild(r),o&&o.forEach((function(t){return t(s)})),e)return e(s)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=p.bind(null,r.onerror),r.onload=p.bind(null,r.onload),d&&document.head.appendChild(r)}}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/ToDoApp-Page/"}(),function(){var t={143:0};s.f.j=function(e,n){var o=s.o(t,e)?t[e]:void 0;if(0!==o)if(o)n.push(o[2]);else{var i=new Promise((function(s,n){o=t[e]=[s,n]}));n.push(o[2]=i);var a=s.p+s.u(e),r=new Error,d=function(n){if(s.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;r.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",r.name="ChunkLoadError",r.type=i,r.request=a,o[1](r)}};s.l(a,d,"chunk-"+e,e)}},s.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,i,a=n[0],r=n[1],d=n[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(o in r)s.o(r,o)&&(s.m[o]=r[o]);if(d)var u=d(s)}for(e&&e(n);c<a.length;c++)i=a[c],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(u)},n=self["webpackChunktodoapp"]=self["webpackChunktodoapp"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(703)}));n=s.O(n)})();
//# sourceMappingURL=app.e1013063.js.map