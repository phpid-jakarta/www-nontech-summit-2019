(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{179:function(t,a,e){"use strict";a.a={data:function(){return{error:"",loadingToken:!1,loadingSubmit:!1,isHaveError:!1}},computed:{_token:function(){return this.$store.state.token},_captchaImage:function(){return this.$store.state.captcha}},mounted:function(){this.requestToken()},methods:{getErrorMinMax:function(t,a){return"This field should be at least ".concat(t," character and maximum ").concat(a," character")},requestToken:function(){var t=this;this.loadingToken=!0,this.$store.dispatch("fetchNewToken",{url:this.url_api,success:function(){setTimeout(function(){t.loadingToken=!1},1e3)}})},refreshCaptcha:function(){this.requestToken()},onSuccessSubmit:function(t){var a=this;"register_success"===t.data.data.message?(this.$store.dispatch("showNotification",{title:"Thank You",message:"The data was successfully saved in our server."}),setTimeout(function(){a.$router.push("/")},1e3)):(this.requestToken(),this.formData.captcha="",this.isHaveError=!0),setTimeout(function(){a.loadingSubmit=!1},1e3)},onErrorSubmit:function(t){this.requestToken(),this.formData.captcha="",this.error=t,this.isHaveError=!0,this.loadingSubmit=!1}}}},180:function(t,a,e){"use strict";var i=function(t){return null!=t},s=function(t){return!(!i(t)||""===t.trim())};e.d(a,"b",function(){return o}),e.d(a,"c",function(){return r}),e.d(a,"a",function(){return n});var o=function(t){return s(t)},r=function(t,a,e){return s(e)&&e.length>t&&e.length<a},n=function(t){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())}},193:function(t,a,e){"use strict";var i={normal:[{text:"Early Bird",price:"Rp 500.000,-"},{text:"Promo",price:"Rp 750.000,-"},{text:"Normal",price:"Rp 1.000.000,-"}],bundle:[{text:"Early Bird",price:"Rp 1.500.000,-"},{text:"Normal",price:"Rp 3.500.000,-"}]},s={name:"TicketSection",data:function(){return{prices:i}}},o=e(2),r=Object(o.a)(s,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h2",{staticClass:"title has-text-centered title-section caption-text"},[t._v("\n    TICKETS FOR 1 ATTENDANT\n  ")]),t._v(" "),e("div",{staticClass:"level"},t._l(t.prices.normal,function(a,i){return e("div",{key:"price-normal"+i,staticClass:"level-item",staticStyle:{"margin-right":"1em","margin-bottom":"1em","text-align":"center"}},[e("article",{staticClass:"message is-info",staticStyle:{width:"100%"}},[e("div",{staticClass:"message-header",staticStyle:{"justify-content":"center"}},[t._v("\n          "+t._s(a.text)+"\n        ")]),t._v(" "),e("div",{staticClass:"message-body",staticStyle:{"font-size":"2rem"}},[e("div",[t._v(t._s(a.price))])])])])})),t._v(" "),e("br"),e("br"),e("br"),t._v(" "),e("h2",{staticClass:"title has-text-centered title-section caption-text"},[t._v("\n    TICKETS BUNDLING FOR 4 ATTENDANT\n  ")]),t._v(" "),e("div",{staticClass:"level"},t._l(t.prices.bundle,function(a,i){return e("div",{key:"price-normal"+i,staticClass:"level-item",staticStyle:{"margin-right":"1em","margin-bottom":"1em","text-align":"center"}},[e("article",{staticClass:"message is-info",staticStyle:{width:"100%"}},[e("div",{staticClass:"message-header",staticStyle:{"justify-content":"center"}},[t._v("\n          "+t._s(a.text)+"\n        ")]),t._v(" "),e("div",{staticClass:"message-body",staticStyle:{"font-size":"2rem"}},[e("div",[t._v(t._s(a.price))])])])])}))])},[],!1,null,null,null);a.a=r.exports},213:function(t,a,e){"use strict";e.r(a);e(48),e(31);var i=e(32),s=e.n(i),o=e(193),r=e(10),n=e(180),l=e(179),c={name:"RegisterParticipants",layout:"no-hero",head:function(){return{title:"Register for Participants | SME Summit 2019"}},components:{TicketSection:o.a},mixins:[l.a],data:function(){return{url_api:"".concat(r.a.REGISTER_PARTICIPANT),formData:{name:"",company_name:"",position:"",company_sector:"",coached_sector:"",email:"",phone:"",problem_desc:"",captcha:""},isValidFormName:!0,isValidFormCompanyName:!0,isValidFormPosition:!0,isValidFormCompanySector:!0,isValidFormEmail:!0,isValidFormPhone:!0,isValidFormProblemDesc:!0,isValidFormCaptcha:!0,isValidForm:!1,positionList:[],companySectorList:[],coacherSectorList:[]}},created:function(){this.fetchStaticData()},methods:{fetchStaticData:function(){var t=this;s()({url:"/coacher_sector.json",method:"get"}).then(function(a){t.coacherSectorList=a.data.data}),s()({url:"/company_sector.json",method:"get"}).then(function(a){t.companySectorList=a.data.data}),s()({url:"/position.json",method:"get"}).then(function(a){t.positionList=a.data.data})},checkFormValidation:function(){return this.isValidFormName=Object(n.c)(3,255,this.formData.name),this.isValidFormCompanyName=Object(n.c)(3,255,this.formData.company_name),this.isValidFormPosition=Object(n.c)(3,255,this.formData.position),this.isValidFormCompanySector=Object(n.c)(3,255,this.formData.company_sector),this.isValidFormEmail=Object(n.c)(3,255,this.formData.email)&&Object(n.a)(this.formData.email),this.isValidFormPhone=Object(n.c)(3,255,this.formData.phone),this.isValidFormProblemDesc=Object(n.c)(20,1024,this.formData.problem_desc),this.isValidFormCaptcha=Object(n.c)(5,10,this.formData.captcha),!!(this.isValidFormName&&this.isValidFormCompanyName&&this.isValidFormPosition&&this.isValidFormCompanySector&&this.isValidFormEmail&&this.isValidFormPhone&&this.isValidFormProblemDesc&&this.isValidFormCaptcha)},doSubmit:function(){if(this.error="",this.isHaveError=!1,this.checkFormValidation()){this.loadingSubmit=!0;var t=Object.assign({},this.formData);this.$store.dispatch("postRegisterParticipant",{token:this._token,data:t,success:this.onSuccessSubmit,failed:this.onErrorSubmit})}else this.isHaveError=!0}}},m=e(2),d=Object(m.a)(c,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("section",{staticClass:"section reg-attendants",attrs:{id:"reg-attendants"}},[e("h2",{staticClass:"title has-text-centered title-section caption-text"},[t._v("\n      REGISTER FOR ATTENDANTS\n    ")]),t._v(" "),e("form",{staticClass:"form"},[e("input",{staticClass:"hidden",domProps:{value:t._token}}),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("\n          Name\n        ")]),t._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.name,expression:"formData.name"}],staticClass:"input",class:{"is-danger":!t.isValidFormName},attrs:{type:"text",placeholder:"Your Name",required:""},domProps:{value:t.formData.name},on:{input:function(a){a.target.composing||t.$set(t.formData,"name",a.target.value)}}})]),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!t.isValidFormName,expression:"!isValidFormName"}],staticClass:"help is-danger"},[t._v("\n          "+t._s(t.getErrorMinMax(4,255))+"\n        ")])]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("\n          Company Name\n        ")]),t._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.company_name,expression:"formData.company_name"}],staticClass:"input",class:{"is-danger":!t.isValidFormCompanyName},attrs:{type:"text",placeholder:"Your Company Name",required:""},domProps:{value:t.formData.company_name},on:{input:function(a){a.target.composing||t.$set(t.formData,"company_name",a.target.value)}}})]),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!t.isValidFormCompanyName,expression:"!isValidFormCompanyName"}],staticClass:"help is-danger"},[t._v("\n          "+t._s(t.getErrorMinMax(4,255))+"\n        ")])]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("\n          Company Sector\n        ")]),t._v(" "),e("div",{staticClass:"control"},[e("div",{staticClass:"select"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.formData.company_sector,expression:"formData.company_sector"}],attrs:{required:""},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.formData,"company_sector",a.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"",disabled:""}},[t._v("\n                Select available company sector\n              ")]),t._v(" "),t._l(t.companySectorList,function(a){return e("option",{key:a},[t._v("\n                "+t._s(a)+"\n              ")])})],2)])]),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!t.isValidFormCompanySector,expression:"!isValidFormCompanySector"}],staticClass:"help is-danger"},[t._v("\n          "+t._s(t.getErrorMinMax(4,255))+"\n        ")])]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("\n          Your Role/Position\n        ")]),t._v(" "),e("div",{staticClass:"control"},[e("div",{staticClass:"select"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.formData.position,expression:"formData.position"}],attrs:{required:""},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.formData,"position",a.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"",disabled:""}},[t._v("\n                Select available position\n              ")]),t._v(" "),t._l(t.positionList,function(a){return e("option",{key:a},[t._v("\n                "+t._s(a)+"\n              ")])})],2)])]),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!t.isValidFormPosition,expression:"!isValidFormPosition"}],staticClass:"help is-danger"},[t._v("\n          "+t._s(t.getErrorMinMax(4,255))+"\n        ")])]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("\n          Email\n        ")]),t._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.email,expression:"formData.email"}],staticClass:"input",class:{"is-danger":!t.isValidFormEmail},attrs:{type:"email",placeholder:"Ex: example@mail.com",required:""},domProps:{value:t.formData.email},on:{input:function(a){a.target.composing||t.$set(t.formData,"email",a.target.value)}}})]),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!t.isValidFormEmail,expression:"!isValidFormEmail"}],staticClass:"help is-danger"},[t._v("\n          Your email is not valid. "),e("br"),t._v(" "+t._s(t.getErrorMinMax(4,255))+"\n        ")])]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("\n          Phone/WA/Telegram\n        ")]),t._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.phone,expression:"formData.phone"}],staticClass:"input",class:{"is-danger":!t.isValidFormPhone},attrs:{type:"text",placeholder:"Ex: 0812-123-456-789-00 or @your.telegram",required:""},domProps:{value:t.formData.phone},on:{input:function(a){a.target.composing||t.$set(t.formData,"phone",a.target.value)}}})]),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!t.isValidFormPhone,expression:"!isValidFormPhone"}],staticClass:"help is-danger"},[t._v("\n          "+t._s(t.getErrorMinMax(4,255))+"\n        ")])]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("\n          Which Sector Do You Want To Get Coached?\n        ")]),t._v(" "),e("div",{staticClass:"control"},[e("div",{staticClass:"select"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.formData.coached_sector,expression:"formData.coached_sector"}],on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.formData,"coached_sector",a.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"",disabled:""}},[t._v("\n                Select available coacher clinic\n              ")]),t._v(" "),t._l(t.coacherSectorList,function(a){return e("option",{key:a},[t._v("\n                "+t._s(a)+"\n              ")])})],2)])])]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("\n          Your Current Problem/Case\n        ")]),t._v(" "),e("div",{staticClass:"control"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.problem_desc,expression:"formData.problem_desc"}],staticClass:"textarea",class:{"is-danger":!t.isValidFormProblemDesc},attrs:{placeholder:"Ex: we already implemented IT in our company but still confused about its data analysis",required:""},domProps:{value:t.formData.problem_desc},on:{input:function(a){a.target.composing||t.$set(t.formData,"problem_desc",a.target.value)}}})]),e("p",{directives:[{name:"show",rawName:"v-show",value:!t.isValidFormProblemDesc,expression:"!isValidFormProblemDesc"}],staticClass:"help is-danger"},[t._v("\n          "+t._s(t.getErrorMinMax(20,1024))+"\n        ")])]),t._v(" "),e("div",{staticClass:"field"},[e("div",[t._captchaImage&&""!==t._captchaImage?e("img",{staticStyle:{width:"250px"},attrs:{src:t._captchaImage,alt:"_captcha"}}):t._e()]),t._v(" "),e("div",[e("div",{staticClass:"button is-link",class:{"is-loading":t.loadingToken},attrs:{disabled:t.loadingToken},on:{click:t.refreshCaptcha}},[t._v("\n            Refresh Captcha\n          ")])])]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("\n          Input Captcha\n        ")]),t._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.captcha,expression:"formData.captcha"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.formData.captcha},on:{input:function(a){a.target.composing||t.$set(t.formData,"captcha",a.target.value)}}})]),e("p",{directives:[{name:"show",rawName:"v-show",value:!t.isValidFormCaptcha,expression:"!isValidFormCaptcha"}],staticClass:"help is-danger"},[t._v("\n          "+t._s(t.getErrorMinMax(6,10))+"\n        ")])]),t._v(" "),e("div",{staticClass:"field is-grouped"},[e("div",{staticClass:"control"},[e("div",{staticClass:"button is-link",class:{"is-loading":t.loadingSubmit},attrs:{disabled:t.loadingSubmit},on:{click:t.doSubmit}},[t._v("\n            Submit\n          ")])]),t._v(" "),t._m(0)])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isHaveError,expression:"isHaveError"}],staticClass:"notification is-danger",staticStyle:{"margin-top":"1em"}},[e("span",[t._v("Please fill all required fields before submitting data.")]),t._v(" "),e("br"),t._v(" "),e("span",[t._v(t._s(t.error))])]),t._v(" "),e("br"),e("br"),e("br"),t._v(" "),e("TicketSection"),t._v(" "),e("br"),e("br"),e("br")],1)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"control"},[a("a",{staticClass:"button is-text",attrs:{href:"/"}},[this._v("\n            Cancel\n          ")])])}],!1,null,"60b851eb",null);a.default=d.exports}}]);