webpackJsonp([2],{"1kS7":function(e,t){t.f=Object.getOwnPropertySymbols},Dd8w:function(e,t,r){"use strict";t.__esModule=!0;var s,o=r("woOf"),n=(s=o)&&s.__esModule?s:{default:s};t.default=n.default||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e}},Luci:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("Dd8w"),o=r.n(s),n=r("NYxO"),i=r("p+Ws"),a={isMobile:/^1[3456789]\d{9}$/,isPassword:/^.{4,16}$/},l={name:"login",data:function(){return{valid:!0,showPassword:!1,mobile:"",mobileRules:[function(e){return!!e||"必须填写手机号"},function(e){return a.isMobile.test(e)||"不是合法的手机号"}],password:"",passwordRules:[function(e){return!!e||"必须填写密码"},function(e){return a.isPassword.test(e)||"密码长度应为4-16位"}]}},components:{},methods:o()({},Object(n.b)(["setUserInfo","setUserToken"]),{submit:function(){var e=this;if(this.$refs.form.validate()){var t={mobile:this.mobile,password:this.password};Object(i.d)(t).then(function(t){e.setUserInfo(t.data.user),e.setUserToken(t.data.token),0===t.code&&(e.$route.query.redirect&&!e.$route.query.redirect.startsWith("/login")?e.$router.push({path:e.$route.query.redirect}):e.$router.push({path:"home/index"}))})}}}),computed:o()({},Object(n.c)(["title"])),created:function(){this.setUserInfo({}),this.setUserToken(null),sessionStorage.clear()}},c={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{id:"inspire"}},[r("v-content",[r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[r("v-card",[r("v-toolbar",{attrs:{dark:"",color:"primary"}},[r("v-toolbar-title",[e._v(e._s(e.title))])],1),e._v(" "),r("v-card-text",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-text-field",{attrs:{"prepend-icon":"phone",label:"手机号",rules:e.mobileRules,required:""},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}}),e._v(" "),r("v-text-field",{attrs:{"prepend-icon":"lock",label:"密码",type:"password",rules:e.passwordRules,required:"","append-icon":e.showPassword?"visibility_off":"visibility",type:e.showPassword?"text":"password"},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"primary"},on:{click:e.submit}},[e._v("登录")])],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},u=r("VU/8")(l,c,!1,null,null,null);t.default=u.exports},NpIQ:function(e,t){t.f={}.propertyIsEnumerable},R4wc:function(e,t,r){var s=r("kM2E");s(s.S+s.F,"Object",{assign:r("To3L")})},To3L:function(e,t,r){"use strict";var s=r("lktj"),o=r("1kS7"),n=r("NpIQ"),i=r("sB3e"),a=r("MU5D"),l=Object.assign;e.exports=!l||r("S82l")(function(){var e={},t={},r=Symbol(),s="abcdefghijklmnopqrst";return e[r]=7,s.split("").forEach(function(e){t[e]=e}),7!=l({},e)[r]||Object.keys(l({},t)).join("")!=s})?function(e,t){for(var r=i(e),l=arguments.length,c=1,u=o.f,d=n.f;l>c;)for(var f,p=a(arguments[c++]),v=u?s(p).concat(u(p)):s(p),b=v.length,w=0;b>w;)d.call(p,f=v[w++])&&(r[f]=p[f]);return r}:l},V3tA:function(e,t,r){r("R4wc"),e.exports=r("FeBl").Object.assign},woOf:function(e,t,r){e.exports={default:r("V3tA"),__esModule:!0}}});
//# sourceMappingURL=2.3d46c01a61fe298820f3.js.map