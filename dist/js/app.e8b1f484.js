(function(e){function t(t){for(var r,a,l=t[0],u=t[1],s=t[2],b=0,p=[];b<l.length;b++)a=l[b],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&p.push(c[a][0]),c[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);i&&i(t);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==c[u]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var i=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0986":function(e,t,n){},"16e2":function(e,t,n){},"1df7":function(e,t,n){e.exports=n.p+"img/xiaomi_phones_a3-global_1x.df9d4762.png"},3148:function(e,t,n){"use strict";n("16e2")},"4d50":function(e,t,n){"use strict";n("0986")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={class:"container-fluid"},o={class:"row justify-content-center"},a={class:"col-md-10 col-lg-7"};function l(e,t,n,l,u,s){var i=Object(r["y"])("my-header"),b=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["f"])(r["a"],null,[Object(r["i"])(i),Object(r["g"])("div",c,[Object(r["g"])("div",o,[Object(r["g"])("div",a,[Object(r["i"])(b)])])])],64)}var u=function(e){return Object(r["u"])("data-v-f91a2b72"),e=e(),Object(r["s"])(),e},s={class:"navbar navbar-expand-lg navbar-light bg-light"},i={class:"container-fluid"},b=Object(r["h"])("Smarphone References"),p=u((function(){return Object(r["g"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(r["g"])("span",{class:"navbar-toggler-icon"})],-1)})),O={class:"collapse navbar-collapse",id:"navbarNav"},j={class:"navbar-nav ms-auto"},d={class:"nav-item"},f=Object(r["h"])("Phones"),g={key:0,class:"nav-item"},h=Object(r["h"])("My Account"),m={key:1,class:"nav-item"},v=u((function(){return Object(r["g"])("button",{class:"btn btn-warning"},"Login",-1)})),y={key:2,class:"nav-item"},P=u((function(){return Object(r["g"])("button",{class:"btn btn-outline-warning text-dark"}," Sign Up ",-1)})),S={key:3,class:"nav-item"};function k(e,t,n,c,o,a){var l=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("nav",s,[Object(r["g"])("div",i,[Object(r["i"])(l,{class:"navbar-brand",to:"/"},{default:Object(r["E"])((function(){return[b]})),_:1}),p,Object(r["g"])("div",O,[Object(r["g"])("ul",j,[Object(r["g"])("li",d,[Object(r["i"])(l,{class:"nav-link active","aria-current":"page",to:"/phones"},{default:Object(r["E"])((function(){return[f]})),_:1})]),a.auth?(Object(r["r"])(),Object(r["f"])("li",g,[Object(r["i"])(l,{class:"nav-link active","aria-current":"page",to:"/account"},{default:Object(r["E"])((function(){return[h]})),_:1})])):Object(r["e"])("",!0),a.auth?Object(r["e"])("",!0):(Object(r["r"])(),Object(r["f"])("li",m,[Object(r["i"])(l,{class:"nav-link active","aria-current":"page",to:"/login"},{default:Object(r["E"])((function(){return[v]})),_:1})])),a.auth?Object(r["e"])("",!0):(Object(r["r"])(),Object(r["f"])("li",y,[Object(r["i"])(l,{class:"nav-link active","aria-current":"page",to:"/signup"},{default:Object(r["E"])((function(){return[P]})),_:1})])),a.auth?(Object(r["r"])(),Object(r["f"])("li",S,[Object(r["g"])("button",{class:"btn btn-warning",onClick:t[0]||(t[0]=function(){return a.onLogout&&a.onLogout.apply(a,arguments)})},"Logout")])):Object(r["e"])("",!0)])])])])}var w={computed:{auth:function(){return this.$store.state.token}},methods:{onLogout:function(){this.$store.dispatch("logout")}}},A=(n("4d50"),n("6b0d")),x=n.n(A);const E=x()(w,[["render",k],["__scopeId","data-v-f91a2b72"]]);var F=E,C={name:"App",components:{"my-header":F},created:function(){this.$store.dispatch("getPhones")}};n("3148");const _=x()(C,[["render",l]]);var $=_,U=n("bc3a"),z=n.n(U),L=n("6c02"),M=n("1df7"),q=n.n(M),I=Object(r["g"])("div",{class:"text-center"},[Object(r["g"])("h1",null,"Welcome!"),Object(r["g"])("h5",null," Here you can add in your preference for a phone and keep track of it. "),Object(r["g"])("img",{src:q.a,alt:"phone-picture",style:{width:"auto"}}),Object(r["g"])("h6",null,[Object(r["h"])(" If you would like to log in, "),Object(r["g"])("a",{href:"/login"}," click here"),Object(r["h"])(". If you don't have an account yet, "),Object(r["g"])("a",{href:"/signup"},"click here"),Object(r["h"])(". ")])],-1),V=[I];function T(e,t,n,c,o,a){return Object(r["r"])(),Object(r["f"])("div",null,V)}var K={};const N=x()(K,[["render",T]]);var B=N,D=Object(r["g"])("h1",null,"Login",-1),G={key:0,class:"alert alert-success"},J={class:"mb-3"},R=Object(r["g"])("label",{for:"email-input",class:"form-label"},"Email",-1),H={class:"mb-3"},W=Object(r["g"])("label",{for:"password-input",class:"form-label"},"Password",-1),Y=Object(r["g"])("button",{type:"submit",class:"btn btn-primary"},"Submit",-1),Q={key:0,class:"form-text text-danger"},X={key:1,class:"form-text text-danger"};function Z(e,t,n,c,o,a){return Object(r["r"])(),Object(r["f"])("div",null,[D,this.$route.query.signupsuccess?(Object(r["r"])(),Object(r["f"])("div",G," Thanks for signing up, please log in now. ")):Object(r["e"])("",!0),Object(r["g"])("form",{onSubmit:t[2]||(t[2]=Object(r["G"])((function(){return a.onSubmit&&a.onSubmit.apply(a,arguments)}),["prevent"]))},[Object(r["g"])("div",J,[R,Object(r["F"])(Object(r["g"])("input",{type:"email",class:"form-control",id:"email-input",required:"",placeholder:"Enter email","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.email=e})},null,512),[[r["C"],o.email]])]),Object(r["g"])("div",H,[W,Object(r["F"])(Object(r["g"])("input",{type:"password",class:"form-control",id:"password-input",placeholder:"Password",required:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.password=e})},null,512),[[r["C"],o.password]])]),Y,o.credentialsError?(Object(r["r"])(),Object(r["f"])("p",Q," Invalid credentials ")):Object(r["e"])("",!0),o.loginError?(Object(r["r"])(),Object(r["f"])("p",X," Could not log you in, please try again later. ")):Object(r["e"])("",!0)],32)])}n("ac1f"),n("5319");var ee={data:function(){return{email:"",password:"",loginError:!1,credentialsError:!1}},methods:{onSubmit:function(){var e=this,t={email:this.email,password:this.password};z.a.post("contact/login",t).then((function(t){e.$store.commit("storeTokenInApp",t.data.token),e.$store.commit("storeUserInApp",t.data.user),e.$router.replace("/account")})).catch((function(t){401==t.response.status?e.credentialsError=!0:e.loginError=!0}))}}};const te=x()(ee,[["render",Z]]);var ne=te,re={class:"card"},ce={class:"card-body"},oe=Object(r["g"])("h2",{class:"text-primary"},"Phone Preference Details",-1),ae=Object(r["g"])("br",null,null,-1),le=Object(r["h"])(" Color: "),ue=Object(r["g"])("br",null,null,-1),se=Object(r["h"])(" Storage: "),ie=Object(r["g"])("br",null,null,-1),be=Object(r["h"])(" Screen Size: "),pe=Object(r["g"])("br",null,null,-1),Oe=Object(r["h"])(" Price: "),je=Object(r["g"])("br",null,null,-1),de=Object(r["g"])("br",null,null,-1),fe=Object(r["g"])("button",{class:"btn btn-success"},"Add a Preference",-1),ge=Object(r["g"])("button",{class:"btn btn-outline-success"}," Sign In to Add a Preference ",-1),he=Object(r["g"])("br",null,null,-1),me=Object(r["g"])("br",null,null,-1);function ve(e,t,n,c,o,a){var l=Object(r["y"])("router-link"),u=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["f"])("div",null,[Object(r["g"])("div",re,[Object(r["g"])("div",ce,[oe,ae,Object(r["g"])("p",null,[le,ue,Object(r["g"])("strong",null,Object(r["A"])(a.phone.Color),1)]),Object(r["g"])("p",null,[se,ie,Object(r["g"])("strong",null,Object(r["A"])(a.phone.Storage)+" GB",1)]),Object(r["g"])("p",null,[be,pe,Object(r["g"])("strong",null,Object(r["A"])(a.phone.ScreenSize)+" inches",1)]),Object(r["g"])("p",null,[Oe,je,Object(r["g"])("strong",null,Object(r["A"])(a.formattedPrice),1)])])]),de,a.auth?(Object(r["r"])(),Object(r["d"])(l,{key:0,to:"/phones/".concat(this.$route.params.pk,"/preference")},{default:Object(r["E"])((function(){return[fe]})),_:1},8,["to"])):(Object(r["r"])(),Object(r["d"])(l,{key:1,to:"/login"},{default:Object(r["E"])((function(){return[ge]})),_:1})),he,me,Object(r["i"])(u)])}n("7db0"),n("d3b7");var ye={computed:{phone:function(){var e=this,t=this.$store.state.phones,n=t.find((function(t){return t.ProductTypePK[0]==e.$route.params.pk}));return n},formattedPrice:function(){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(this.phone.Price)},auth:function(){return this.$store.state.token}}};const Pe=x()(ye,[["render",ve]]);var Se=Pe,ke=Object(r["g"])("h1",null,"Phones",-1),we=Object(r["g"])("hr",null,null,-1),Ae={class:"table"},xe=Object(r["g"])("thead",null,[Object(r["g"])("tr",null,[Object(r["g"])("th",null,"Color"),Object(r["g"])("th",null,"Storage"),Object(r["g"])("th",null,"Screen Size"),Object(r["g"])("th")])],-1),Ee=Object(r["g"])("button",{class:"btn btn-primary"},"Details",-1);function Fe(e,t,n,c,o,a){var l=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("div",null,[ke,we,Object(r["g"])("table",Ae,[xe,Object(r["g"])("tbody",null,[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(a.thePhones,(function(e){return Object(r["r"])(),Object(r["f"])("tr",{key:e.ProductPK},[Object(r["g"])("th",null,Object(r["A"])(e.Color),1),Object(r["g"])("th",null,Object(r["A"])(e.Storage),1),Object(r["g"])("th",null,Object(r["A"])(e.ScreenSize),1),Object(r["g"])("th",null,[Object(r["i"])(l,{to:"/phones/".concat(e.ProductTypePK[0])},{default:Object(r["E"])((function(){return[Ee]})),_:2},1032,["to"])])])})),128))])])])}var Ce={computed:{thePhones:function(){return this.$store.state.phones}}};const _e=x()(Ce,[["render",Fe]]);var $e=_e,Ue=Object(r["g"])("h1",null,"Not Found",-1),ze=Object(r["g"])("h4",null,"Sorry, this page can't be found.",-1),Le=[Ue,ze];function Me(e,t,n,c,o,a){return Object(r["r"])(),Object(r["f"])("div",null,Le)}var qe={};const Ie=x()(qe,[["render",Me]]);var Ve=Ie,Te={class:"card-body"},Ke=Object(r["g"])("h4",null,"Add Your Preference",-1),Ne={class:"mb-3"},Be=Object(r["g"])("label",{for:"rating-input",class:"form-label"},"Color",-1),De={class:"mb-3"},Ge=Object(r["g"])("label",{for:"summary-input",class:"form-label"},"Storage",-1),Je={class:"mb-3"},Re=Object(r["g"])("label",{for:"summary-input",class:"form-label"},"Screen Size",-1),He=Object(r["g"])("button",{type:"submit",class:"btn btn-primary"},"Submit Preference",-1),We={key:0,class:"form-text text-danger"};function Ye(e,t,n,c,o,a){return Object(r["r"])(),Object(r["f"])("div",null,[Object(r["g"])("div",Te,[Ke,Object(r["g"])("form",{id:"review-form",onSubmit:t[4]||(t[4]=Object(r["G"])((function(){return a.submitPreference&&a.submitPreference.apply(a,arguments)}),["prevent"]))},[Object(r["g"])("div",Ne,[Be,Object(r["F"])(Object(r["g"])("input",{type:"text",class:"form-control",id:"rating-input",required:"","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.color=e})},null,512),[[r["C"],o.color]])]),Object(r["g"])("div",De,[Ge,Object(r["F"])(Object(r["g"])("input",{type:"number",row:"3",class:"form-control",id:"summary-input",required:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.storage=e})},null,512),[[r["C"],o.storage]])]),Object(r["g"])("div",Je,[Re,Object(r["F"])(Object(r["g"])("input",{type:"number",step:"0.01",row:"3",class:"form-control",id:"summary-input",required:"","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.screenSize=e})},null,512),[[r["C"],o.screenSize]])]),He,Object(r["g"])("button",{onClick:t[3]||(t[3]=function(){return a.cancelPreference&&a.cancelPreference.apply(a,arguments)}),type:"clear",class:"btn btn-outline-danger"}," Cancel "),o.errorMessage?(Object(r["r"])(),Object(r["f"])("p",We,Object(r["A"])(o.errorMessage),1)):Object(r["e"])("",!0)],32)])])}n("a9e3");var Qe={data:function(){return{color:"",storage:null,screenSize:null,errorMessage:null}},methods:{submitPreference:function(){var e=this,t={color:this.color,storage:this.storage,screenSize:this.screenSize,productFK:Number(this.$route.params.pk)};console.log(t),z.a.post("/contactpref",t,{headers:{Authorization:"Bearer ".concat(this.$store.state.token)}}).then((function(){e.$router.replace("/account")})).catch((function(){e.errorMessage="Unable to create a review, please try again later."}))},cancelPreference:function(){this.$router.go(-1)}}};n("7172");const Xe=x()(Qe,[["render",Ye]]);var Ze=Xe,et=Object(r["g"])("h1",null,"Signup",-1),tt={class:"mb-3"},nt=Object(r["g"])("label",{for:"fname-input",class:"form-label"},"First name",-1),rt={class:"mb-3"},ct=Object(r["g"])("label",{for:"lname-input",class:"form-label"},"Last name",-1),ot={class:"mb-3"},at=Object(r["g"])("label",{for:"email-input",class:"form-label"},"Email",-1),lt={key:0,class:"text-danger"},ut={class:"mb-3"},st=Object(r["g"])("label",{for:"password-input",class:"form-label"},"Password",-1),it=Object(r["g"])("button",{type:"submit",class:"btn btn-primary"},"Submit",-1),bt={id:"error-signup",class:"text-danger"};function pt(e,t,n,c,o,a){return Object(r["r"])(),Object(r["f"])("div",null,[et,Object(r["g"])("form",{onSubmit:t[4]||(t[4]=Object(r["G"])((function(){return a.onSubmit&&a.onSubmit.apply(a,arguments)}),["prevent"]))},[Object(r["g"])("div",tt,[nt,Object(r["F"])(Object(r["g"])("input",{type:"text",class:"form-control",id:"fname-input",required:"",placeholder:"First name","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.nameFirst=e})},null,512),[[r["C"],o.nameFirst]])]),Object(r["g"])("div",rt,[ct,Object(r["F"])(Object(r["g"])("input",{type:"text",class:"form-control",id:"lname-input",required:"",placeholder:"Last name","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.nameLast=e})},null,512),[[r["C"],o.nameLast]])]),Object(r["g"])("div",ot,[at,Object(r["F"])(Object(r["g"])("input",{type:"email",class:"form-control",id:"email-input",required:"",placeholder:"Enter email","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.email=e})},null,512),[[r["C"],o.email]]),o.dupeEmail?(Object(r["r"])(),Object(r["f"])("small",lt,"Please choose a different email")):Object(r["e"])("",!0)]),Object(r["g"])("div",ut,[st,Object(r["F"])(Object(r["g"])("input",{type:"password",class:"form-control",id:"password-input",placeholder:"Password",required:"","onUpdate:modelValue":t[3]||(t[3]=function(e){return o.password=e})},null,512),[[r["C"],o.password]])]),it,Object(r["g"])("p",bt,Object(r["A"])(o.errorMessage),1)],32)])}var Ot={data:function(){return{nameFirst:"",nameLast:"",email:"",password:"",errorMessage:"",dupeEmail:!1}},methods:{onSubmit:function(){var e=this,t={nameFirst:this.nameFirst,nameLast:this.nameLast,email:this.email,password:this.password};z.a.post("/contact",t).then((function(t){console.log(t),e.$router.replace("/login?signupsuccess=true")})).catch((function(t){409===t.response.status?e.dupeEmail=!0:e.errorMessage="Cannot sign you up, please try again later."}))}}};const jt=x()(Ot,[["render",pt]]);var dt=jt,ft=Object(r["g"])("h1",null,"Account",-1),gt=Object(r["g"])("hr",null,null,-1),ht=Object(r["g"])("p",{"vi-if":"accountError",class:"text-danger"}," Cannot get your account information, please try again later. ",-1),mt={key:0,class:"table"},vt=Object(r["g"])("thead",null,[Object(r["g"])("th",null,"Phone"),Object(r["g"])("th",null,"Color"),Object(r["g"])("th",null,"Storage Size"),Object(r["g"])("th",null,"Screen Size")],-1);function yt(e,t,n,c,o,a){var l=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("div",null,[ft,gt,Object(r["g"])("h3",null,Object(r["A"])(a.nameFirst)+"'s Phone Preferences",1),ht,e.preferencesByUser?(Object(r["r"])(),Object(r["f"])("table",mt,[vt,Object(r["g"])("tbody",null,[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(o.contactPreference,(function(e){return Object(r["r"])(),Object(r["f"])("tr",{key:e.ContactPreferencesPK},[Object(r["g"])("th",null,[Object(r["i"])(l,{to:"/product/".concat(e.ProductFK)},{default:Object(r["E"])((function(){return[Object(r["h"])(Object(r["A"])(e.ProductFK),1)]})),_:2},1032,["to"])]),Object(r["g"])("th",null,Object(r["A"])(e.Color),1),Object(r["g"])("th",null,Object(r["A"])(e.Storage),1),Object(r["g"])("th",null,Object(r["A"])(e.ScreenSize),1)])})),128))])])):Object(r["e"])("",!0)])}var Pt={data:function(){return{contactPreference:null,accountError:!1}},computed:{nameFirst:function(){return this.$store.state.user.NameFirst}},created:function(){var e=this;z.a.get("/contactpref/me",{headers:{Authorization:"Bearer ".concat(this.$store.state.token)}}).then((function(t){e.preferencesByUser=t.data})).catch((function(){e.accountError=!0,console.log("error")}))}};const St=x()(Pt,[["render",yt]]);var kt=St,wt=n("5502"),At=Object(wt["a"])({state:{token:null,user:null,phones:[]},mutations:{storeTokenInApp:function(e,t){e.token=t},storeUserInApp:function(e,t){e.user=t},storePhones:function(e,t){e.phones=t},clearAuthData:function(e){e.token=null,e.user=null}},actions:{getPhones:function(e){var t=e.commit;z.a.get("/product").then((function(e){console.log(e),t("storePhones",e.data)}))},logout:function(e){var t=e.commit,n=e.state;z.a.post("/contact/logout",null,{headers:{Authorization:"Bearer ".concat(n.token)}}).then((function(){t("clearAuthData"),Et.replace("/")})).catch((function(){console.log()}))}}}),xt=Object(L["a"])({history:Object(L["b"])(),routes:[{path:"/",component:B},{path:"/account",component:kt,beforeEnter:function(e,t,n){At.state.token?n():n("/login")}},{path:"/login",component:ne},{path:"/phones",component:$e},{path:"/phones/:pk",component:Se,children:[{path:"preference",component:Ze}]},{path:"/signup",component:dt},{path:"/:invalidroute(.*)",component:Ve}]}),Et=xt;z.a.defaults.baseURL="https://cis410-fa21-younis-api.azurewebsites.net";var Ft=Object(r["c"])($);Ft.use(Et),Ft.use(At),Ft.mount("#app")},7172:function(e,t,n){"use strict";n("daa4")},daa4:function(e,t,n){}});
//# sourceMappingURL=app.e8b1f484.js.map