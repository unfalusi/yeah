webpackJsonp([1],{JDdd:function(e,t){},MQag:function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("7+uW"),a=r("mtWM"),o=r.n(a),s={mounted:function(){var e=this;setTimeout(function(){o.a.get("https://randomuser.me/api/").then(function(t){e.persona=t.data.results[0]})},2e3)},data:function(){return{persona:null,localizaciones:[]}},computed:{datosPersona:function(){return{nombre:this.persona.name.first,foto:this.persona.picture.large,correoe:this.persona.email}}},methods:{volverHello:function(){this.$router.push("/HelloWorld")}},firestore:function(){return{localizaciones:j.collection("localizaciones").orderBy("creado")}}},i={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._l(e.localizaciones,function(t,n){return r("article",{key:n},[r("h1",[e._v(" punto: "+e._s(t.nombre)+" ")])])}),e._v(" "),r("button",{on:{click:e.volverHello}},[e._v("Ir a hello")]),e._v(" "),e.persona?[r("h1",{domProps:{textContent:e._s(e.datosPersona.nombre)}}),e._v(" "),r("h2",{domProps:{textContent:e._s(e.datosPersona.correoe)}}),e._v(" "),r("img",{attrs:{src:e.datosPersona.foto}})]:e._t("default",[e._v("Cargando...")]),e._v(" "),r("router-view")],2)},staticRenderFns:[]};var l=r("VU/8")(s,i,!1,function(e){r("MQag")},null,null).exports,u={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.mensaje))]),e._v(" "),r("h2",[e._v("Links esenciales")]),e._v(" "),e._m(0),e._v(" "),r("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("\n        Core Docs\n      ")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("\n        Forum\n      ")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[e._v("\n        Community Chat\n      ")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("\n        Twitter\n      ")])]),e._v(" "),r("br"),e._v(" "),r("li",[r("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("\n        Docs for This Template\n      ")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var c=r("VU/8")({name:"HelloWorld",data:function(){return{mensaje:"Vente paca"}}},u,!1,function(e){r("JDdd")},"data-v-570bd19e",null).exports,v={components:{persona:l,HelloWorld:c}},h={render:function(){var e=this.$createElement,t=this._self._c||e;return t("section",[t("h1",[this._v("Empezar")]),this._v(" "),t("router-link",{attrs:{to:{name:"HelloWorld"}}},[this._v("Primero")]),this._v(" "),t("router-link",{attrs:{to:"/Persona"}},[this._v("Segundo")]),this._v(" "),t("hr"),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var _=r("VU/8")(v,h,!1,function(e){r("keYF")},null,null).exports,p=r("/ocq"),m={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h2",[this._v("Muelte gorda")]),this._v(" "),t("h3",[this._v(" La info es : "+this._s(this.infopasada)+" ")])])},staticRenderFns:[]},d=r("VU/8")({props:["infopasada"]},m,!1,null,null,null).exports;n.a.use(p.a);var f=new p.a({routes:[{path:"/HelloWorld",name:"HelloWorld",component:c},{path:"/Persona",name:"Persona",component:l,children:[{path:"Muelte",component:d,props:{infopasada:!0}}]}]}),g=r("0ucT"),b=r("kxiW"),k=r.n(b);r("881v");r.d(t,"db",function(){return j}),n.a.config.productionTip=!1,n.a.use(g.a);k.a.initializeApp({apiKey:"AIzaSyBoczTglheLBGd-q10K8PMN9gC5fJvwisQ",authDomain:"quimera-metric.firebaseapp.com",databaseURL:"https://quimera-metric.firebaseio.com",projectId:"quimera-metric",storageBucket:"quimera-metric.appspot.com",messagingSenderId:"1001339403171"});var j=k.a.firestore();j.settings({timestampsInSnapshots:!0}),new n.a({el:"#app",router:f,components:{App:_},template:"<App/>"})},keYF:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.b078d16dd76c2df6c8d7.js.map