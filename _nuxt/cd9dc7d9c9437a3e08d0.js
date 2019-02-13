(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{178:function(t,e,o){"use strict";e.a={data:function(){return{error:"",loadingToken:!1,loadingSubmit:!1,isHaveError:!1}},computed:{_token:function(){return this.$store.state.token},_captchaImage:function(){return this.$store.state.captcha}},mounted:function(){this.requestToken()},methods:{getErrorMinMax:function(t,e){return"This field should be at least ".concat(t," character and maximum ").concat(e," character")},requestToken:function(){var t=this;this.loadingToken=!0,this.$store.dispatch("fetchNewToken",{url:this.url_api,success:function(){setTimeout(function(){t.loadingToken=!1},1e3)}})},refreshCaptcha:function(){this.requestToken()},onSuccessSubmit:function(t){var e=this;"register_success"===t.data.data.message?(this.$store.dispatch("showNotification",{title:"Thank You",message:"The data was successfully saved in our server."}),setTimeout(function(){e.$router.push("/")},1e3)):(this.requestToken(),this.formData.captcha="",this.isHaveError=!0),setTimeout(function(){e.loadingSubmit=!1},1e3)},onErrorSubmit:function(t){this.requestToken(),this.formData.captcha="",this.error=t,this.isHaveError=!0,this.loadingSubmit=!1}}}},179:function(t,e,o){"use strict";var n=function(t){return null!=t},r=function(t){return!(!n(t)||""===t.trim())};o.d(e,"b",function(){return l}),o.d(e,"c",function(){return c}),o.d(e,"a",function(){return m});var l=function(t){return r(t)},c=function(t,e,o){return r(o)&&o.length>t&&o.length<e},m=function(t){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())}},218:function(t,e,o){"use strict";o.r(e);o(50),o(51);var n=o(6),r=o(179),l={name:"RegisterCoacher",layout:"no-hero",head:function(){return{title:"Register for Volunteer | SME Summit 2019"}},mixins:[o(178).a],data:function(){return{url_api:"".concat(n.a.REGISTER_VOLUNTEER),formData:{name:"",email:"",phone:"",fb_link:"",ig_link:"",why_you_apply_desc:"",captcha:""},isValidFormName:!0,isValidFormEmail:!0,isValidFormPhone:!0,isValidFormWhyApply:!0,isValidFormCaptcha:!0,isValidForm:!1}},methods:{checkFormValidation:function(){return this.isValidFormName=Object(r.c)(3,255,this.formData.name),this.isValidFormEmail=Object(r.c)(3,255,this.formData.email)&&Object(r.a)(this.formData.email),this.isValidFormPhone=Object(r.c)(3,255,this.formData.phone),this.isValidFormWhyApply=Object(r.c)(3,255,this.formData.why_you_apply_desc),this.isValidFormCaptcha=Object(r.c)(5,10,this.formData.captcha),!!(this.isValidFormName&&this.isValidFormEmail&&this.isValidFormPhone&&this.isValidFormWhyApply&&this.isValidFormCaptcha)},doSubmit:function(){if(this.error="",this.isHaveError=!1,this.checkFormValidation()){this.loadingSubmit=!0;var t=Object.assign({},this.formData);this.$store.dispatch("postRegisterVolunteer",{token:this._token,data:t,success:this.onSuccessSubmit,failed:this.onErrorSubmit})}else this.isHaveError=!0}}},c=o(2),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("section",{staticClass:"section reg-volunteer",attrs:{id:"reg-volunteer"}},[o("h2",{staticClass:"title has-text-centered title-section caption-text"},[t._v("\n      REGISTER FOR VOLUNTEERS\n    ")]),t._v(" "),o("form",{staticClass:"form"},[o("div",{staticClass:"field"},[o("label",{staticClass:"label"},[t._v("\n          Name\n        ")]),t._v(" "),o("div",{staticClass:"control"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.name,expression:"formData.name"}],staticClass:"input",class:{"is-danger":!t.isValidFormName},attrs:{type:"text",placeholder:"Your Name"},domProps:{value:t.formData.name},on:{input:function(e){e.target.composing||t.$set(t.formData,"name",e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"field"},[o("label",{staticClass:"label"},[t._v("\n          Email\n        ")]),t._v(" "),o("div",{staticClass:"control"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.email,expression:"formData.email"}],staticClass:"input",class:{"is-danger":!t.isValidFormEmail},attrs:{type:"email",placeholder:"Ex: example@mail.com"},domProps:{value:t.formData.email},on:{input:function(e){e.target.composing||t.$set(t.formData,"email",e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"field"},[o("label",{staticClass:"label"},[t._v("\n          Phone/WA/Telegram\n        ")]),t._v(" "),o("div",{staticClass:"control"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.phone,expression:"formData.phone"}],staticClass:"input",class:{"is-danger":!t.isValidFormPhone},attrs:{type:"text",placeholder:"Ex: 0812-123-456-789-00, @your.telegram"},domProps:{value:t.formData.phone},on:{input:function(e){e.target.composing||t.$set(t.formData,"phone",e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"field"},[o("label",{staticClass:"label"},[t._v("\n          Facebook Link\n        ")]),t._v(" "),o("div",{staticClass:"control"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.fb_link,expression:"formData.fb_link"}],staticClass:"input",attrs:{type:"text",placeholder:"Ex: https://www.facebook.com/mazipanneh"},domProps:{value:t.formData.fb_link},on:{input:function(e){e.target.composing||t.$set(t.formData,"fb_link",e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"field"},[o("label",{staticClass:"label"},[t._v("\n          Instagram Link\n        ")]),t._v(" "),o("div",{staticClass:"control"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.ig_link,expression:"formData.ig_link"}],staticClass:"input",attrs:{type:"text",placeholder:"Ex: https://www.instagram.com/maz_ipan/"},domProps:{value:t.formData.ig_link},on:{input:function(e){e.target.composing||t.$set(t.formData,"ig_link",e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"field"},[o("label",{staticClass:"label"},[t._v("\n          City/District\n        ")]),t._v(" "),o("div",{staticClass:"control"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.city,expression:"formData.city"}],staticClass:"input",attrs:{type:"text",placeholder:"Ex: DKI Jakarta"},domProps:{value:t.formData.city},on:{input:function(e){e.target.composing||t.$set(t.formData,"city",e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"field"},[o("label",{staticClass:"label"},[t._v("\n          Tell Us why you interest to help\n        ")]),t._v(" "),o("div",{staticClass:"control"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.why_you_apply_desc,expression:"formData.why_you_apply_desc"}],staticClass:"textarea",class:{"is-danger":!t.isValidFormWhyApply},attrs:{placeholder:"Ex: I always like to helping community in organizing an event"},domProps:{value:t.formData.why_you_apply_desc},on:{input:function(e){e.target.composing||t.$set(t.formData,"why_you_apply_desc",e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"field"},[o("div",[t._captchaImage&&""!==t._captchaImage?o("img",{staticStyle:{width:"250px"},attrs:{src:t._captchaImage,alt:"_captcha"}}):t._e()]),t._v(" "),o("div",[o("div",{staticClass:"button is-link",class:{"is-loading":t.loadingToken},attrs:{disabled:t.loadingToken},on:{click:t.refreshCaptcha}},[t._v("\n            Refresh Captcha\n          ")])])]),t._v(" "),o("div",{staticClass:"field"},[o("label",{staticClass:"label"},[t._v("\n          Input Captcha\n        ")]),t._v(" "),o("div",{staticClass:"control"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.captcha,expression:"formData.captcha"}],staticClass:"input",class:{"is-danger":!t.isValidFormCaptcha},attrs:{type:"text"},domProps:{value:t.formData.captcha},on:{input:function(e){e.target.composing||t.$set(t.formData,"captcha",e.target.value)}}})]),t._v(" "),o("p",{directives:[{name:"show",rawName:"v-show",value:!t.isValidFormCaptcha,expression:"!isValidFormCaptcha"}],staticClass:"help is-danger"},[t._v("\n          "+t._s(t.getErrorMinMax(6,10))+"\n        ")])]),t._v(" "),o("div",{staticClass:"field is-grouped"},[o("div",{staticClass:"control"},[o("div",{staticClass:"button is-link",class:{"is-loading":t.loadingSubmit},attrs:{disabled:t.loadingSubmit},on:{click:t.doSubmit}},[t._v("\n            Submit\n          ")])]),t._v(" "),t._m(0)])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.isHaveError,expression:"isHaveError"}],staticClass:"notification is-danger",staticStyle:{"margin-top":"1em"}},[o("span",[t._v("Please fill all required fields before submitting data.")]),t._v(" "),o("br"),t._v(" "),o("span",[t._v(t._s(t.error))])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"control"},[e("a",{staticClass:"button is-text",attrs:{href:"/"}},[this._v("\n            Cancel\n          ")])])}],!1,null,"5a9c41b6",null);e.default=component.exports}}]);