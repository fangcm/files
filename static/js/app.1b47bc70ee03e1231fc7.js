webpackJsonp([6],{"7zck":function(e,n){},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("7+uW"),u={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]},i=t("VU/8")({name:"app"},u,!1,null,null,null).exports,r=t("YtJ0"),a=t("YaEn"),s=t("v5o6"),l=t.n(s),m=t("3EgV"),c=t.n(m),d=(t("7zck"),t("bqTm")),f=t.n(d);"addEventListener"in document&&document.addEventListener("DOMContentLoaded",function(){l.a.attach(document.body)},!1),o.default.use(c.a),o.default.use(f.a),o.default.config.productionTip=!1,new o.default({el:"#app",router:a.a,store:r.a,components:{App:i},template:"<App/>"})},YaEn:function(e,n,t){"use strict";var o=t("7+uW"),u=t("/ocq"),i=t("YtJ0"),r=function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"Luci"))};o.default.use(u.a);var a=[{path:"/home",name:"Home",meta:{requireAuth:!0},component:function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"vkyI"))},children:[{path:"index",component:function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"2NXm"))},name:"Index",meta:{title:"首页"}},{path:"adminUser",component:function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"i5CC"))},name:"AdminUser",meta:{title:"用户管理"}},{path:"adminRole",component:function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"oSwm"))},name:"AdminRole",meta:{title:"角色管理"}},{path:"adminMenu",component:function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"mzwe"))},name:"AdminMenu",meta:{title:"菜单管理"}}]},{path:"*",component:function(){s.push({path:"/login"})}},{path:"/",component:r},{path:"/login",name:"Login",component:r}],s=new u.a({mode:"history",routes:a});s.beforeEach(function(e,n,t){e.matched.some(function(e){return e.meta.requireAuth})?i.a.state.user.userToken?t():t({path:"login",query:{redirect:e.fullPath}}):t()}),n.a=s},YtJ0:function(e,n,t){"use strict";var o,u=t("7+uW"),i=t("NYxO"),r=t("bOdI"),a=t.n(r),s={state:{title:"业务演示"},getters:{title:function(e){return e.title}},mutations:a()({},"APP_TITLE",function(e,n){e.title=n}),actions:{setTitle:function(e,n){(0,e.commit)("APP_TITLE",n)}}},l={state:{userInfo:sessionStorage.getItem("userInfo")||{},userToken:sessionStorage.getItem("userToken")||null},getters:{userToken:function(e){return e.userToken}},mutations:(o={},a()(o,"USER_INFO",function(e,n){e.userInfo=n}),a()(o,"USER_TOKEN",function(e,n){e.userToken=n}),a()(o,"USER_LOGIN_OUT",function(e){e.userToken=null,e.userInfo=[]}),o),actions:{setUserInfo:function(e,n){var t=e.commit;sessionStorage.setItem("userInfo",n),t("USER_INFO",n)},setUserToken:function(e,n){var t=e.commit;sessionStorage.setItem("userToken",n),t("USER_TOKEN",n)},loginOut:function(e){var n=e.commit;sessionStorage.setItem("userToken",null),n("USER_LOGIN_OUT")}}};u.default.use(i.a);n.a=new i.a.Store({modules:{show:s,user:l}})}},["NHnr"]);
//# sourceMappingURL=app.1b47bc70ee03e1231fc7.js.map