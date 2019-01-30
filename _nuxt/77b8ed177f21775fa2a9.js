(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{180:function(a,t,e){"use strict";t.a={data:function(){return{error:"",loadingToken:!1,loadingSubmit:!1,isHaveError:!1}},computed:{_token:function(){return this.$store.state.token},_captchaImage:function(){return this.$store.state.captcha}},mounted:function(){this.requestToken()},methods:{getErrorMinMax:function(a,t){return"This field should be at least ".concat(a," character and maximum ").concat(t," character")},requestToken:function(){var a=this;this.loadingToken=!0,this.$store.dispatch("fetchNewToken",{url:this.url_api,success:function(){setTimeout(function(){a.loadingToken=!1},1e3)}})},refreshCaptcha:function(){this.requestToken()},onSuccessSubmit:function(a){var t=this;"register_success"===a.data.data.message?(this.$store.dispatch("showNotification",{title:"Thank You",message:"The data was successfully saved in our server."}),setTimeout(function(){t.$router.push("/")},1e3)):(this.requestToken(),this.formData.captcha="",this.isHaveError=!0),setTimeout(function(){t.loadingSubmit=!1},1e3)},onErrorSubmit:function(a){this.requestToken(),this.formData.captcha="",this.error=a,this.isHaveError=!0,this.loadingSubmit=!1}}}},181:function(a,t,e){"use strict";var s=function(a){return null!=a},i=function(a){return!(!s(a)||""===a.trim())};e.d(t,"b",function(){return n}),e.d(t,"a",function(){return r});var n=function(a,t,e){return i(e)&&e.length>a&&e.length<t},r=function(a){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(a).toLowerCase())}},214:function(a,t,e){"use strict";e.r(t);e(48);var s=e(10),i=e(181),n={name:"PaymentConfirmation",layout:"no-hero",head:function(){return{title:"Payment Confirmation | SME Summit 2019"}},mixins:[e(180).a],data:function(){return{url_api:"".concat(s.a.PAYMENT_CONFIRMATION),paymentTypes:["participant","sponsor","coacher"],formData:{email_user_id:"",phone:"",total_payment:"",payment_type:"participant",date_transfer:"",no_ref:"",bank_name:"",bank_username:"",screenshoot:"",status:"pending",captcha:""},isValidFormEmail:!0,isValidFormPhone:!0,isValidTotalPayment:!0,isValidPaymentType:!0,isValidDateTransfer:!0,isValidNoReference:!0,isValidBankName:!0,isValidBankUsername:!0,isValidScreenshoot:!0,isValidFormCaptcha:!0,isValidForm:!1}},methods:{checkFormValidation:function(){return this.isValidFormEmail=Object(i.b)(3,255,this.formData.email_user_id)&&Object(i.a)(this.formData.email_user_id),this.isValidFormPhone=Object(i.b)(3,255,this.formData.phone),this.isValidTotalPayment=Object(i.b)(3,255,this.formData.total_payment),this.isValidPaymentType=Object(i.b)(3,255,this.formData.payment_type),this.isValidDateTransfer=Object(i.b)(3,255,this.formData.date_transfer),this.isValidNoReference=Object(i.b)(3,255,this.formData.no_ref),this.isValidBankName=Object(i.b)(3,255,this.formData.bank_name),this.isValidBankUsername=Object(i.b)(3,255,this.formData.bank_username),this.isValidScreenshoot=Object(i.b)(3,255,this.formData.screenshoot),this.isValidFormCaptcha=Object(i.b)(5,10,this.formData.captcha),!!(this.isValidFormEmail&&this.isValidFormPhone&&this.isValidTotalPayment&&this.isValidPaymentType&&this.isValidDateTransfer&&this.isValidNoReference&&this.isValidBankName&&this.isValidBankUsername&&this.isValidScreenshoot&&this.isValidFormCaptcha)},handleFileUpload:function(){var a=this,t=this.$refs.screenshoot.files[0],e=new FileReader;e.readAsDataURL(t),e.onload=function(){a.formData.screenshoot=e.result},e.onerror=function(){a.formData.screenshoot=""}},doSubmit:function(){if(this.checkFormValidation()){this.error="",this.loadingSubmit=!0,this.isHaveError=!1;var a=Object.assign({},this.formData);this.$store.dispatch("postPaymentConfirmation",{token:this._token,data:a,success:this.onSuccessSubmit,failed:this.onErrorSubmit})}else this.isHaveError=!0}}},r=e(2),o=Object(r.a)(n,function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"container"},[e("section",{staticClass:"section payment-confirmation",attrs:{id:"payment-confirmation"}},[e("h2",{staticClass:"title has-text-centered title-section caption-text"},[a._v("\n      PAYMENT CONFIRMATION\n    ")]),a._v(" "),e("form",{staticClass:"form"},[e("input",{staticClass:"hidden",domProps:{value:a._token}}),a._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[a._v("\n          Email\n        ")]),a._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.email_user_id,expression:"formData.email_user_id"}],staticClass:"input",class:{"is-danger":!a.isValidFormEmail},attrs:{type:"email",placeholder:"Ex: example@mail.com",required:""},domProps:{value:a.formData.email_user_id},on:{input:function(t){t.target.composing||a.$set(a.formData,"email_user_id",t.target.value)}}})]),a._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!a.isValidFormEmail,expression:"!isValidFormEmail"}],staticClass:"help is-danger"},[a._v("\n          Your email is not valid. "),e("br"),a._v(" "+a._s(a.getErrorMinMax(4,255))+"\n        ")])]),a._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[a._v("\n          Phone/WA/Telegram\n        ")]),a._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.phone,expression:"formData.phone"}],staticClass:"input",class:{"is-danger":!a.isValidFormPhone},attrs:{type:"text",placeholder:"Ex: 0812-123-456-789-00 or @your.telegram",required:""},domProps:{value:a.formData.phone},on:{input:function(t){t.target.composing||a.$set(a.formData,"phone",t.target.value)}}})]),a._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!a.isValidFormPhone,expression:"!isValidFormPhone"}],staticClass:"help is-danger"},[a._v("\n          "+a._s(a.getErrorMinMax(4,255))+"\n        ")])]),a._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[a._v("\n          Payment For\n        ")]),a._v(" "),e("div",{staticClass:"control"},[e("div",{staticClass:"select"},[e("select",{directives:[{name:"model",rawName:"v-model",value:a.formData.payment_type,expression:"formData.payment_type"}],attrs:{required:""},on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,function(a){return a.selected}).map(function(a){return"_value"in a?a._value:a.value});a.$set(a.formData,"payment_type",t.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"",disabled:""}},[a._v("\n                Payment Type\n              ")]),a._v(" "),a._l(a.paymentTypes,function(t){return e("option",{key:t},[a._v("\n                "+a._s(t)+"\n              ")])})],2)])]),a._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!a.isValidPaymentType,expression:"!isValidPaymentType"}],staticClass:"help is-danger"},[a._v("\n          "+a._s(a.getErrorMinMax(4,255))+"\n        ")])]),a._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[a._v("\n          Total Payment\n        ")]),a._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.total_payment,expression:"formData.total_payment"}],staticClass:"input",class:{"is-danger":!a.isValidTotalPayment},attrs:{type:"text",placeholder:"Ex: 500000",required:""},domProps:{value:a.formData.total_payment},on:{input:function(t){t.target.composing||a.$set(a.formData,"total_payment",t.target.value)}}})]),a._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!a.isValidTotalPayment,expression:"!isValidTotalPayment"}],staticClass:"help is-danger"},[a._v("\n          "+a._s(a.getErrorMinMax(1,20))+"\n        ")])]),a._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[a._v("\n          Bank Name\n        ")]),a._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.bank_name,expression:"formData.bank_name"}],staticClass:"input",class:{"is-danger":!a.isValidBankName},attrs:{type:"text",placeholder:"Ex: BCA, BRI, MANDIRI, etc",required:""},domProps:{value:a.formData.bank_name},on:{input:function(t){t.target.composing||a.$set(a.formData,"bank_name",t.target.value)}}})]),a._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!a.isValidBankName,expression:"!isValidBankName"}],staticClass:"help is-danger"},[a._v("\n          "+a._s(a.getErrorMinMax(1,255))+"\n        ")])]),a._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[a._v("\n          Bank Account Name\n        ")]),a._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.bank_username,expression:"formData.bank_username"}],staticClass:"input",class:{"is-danger":!a.isValidBankUsername},attrs:{type:"text",placeholder:"Ex: Irfan Maulana",required:""},domProps:{value:a.formData.bank_username},on:{input:function(t){t.target.composing||a.$set(a.formData,"bank_username",t.target.value)}}})]),a._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!a.isValidBankUsername,expression:"!isValidBankUsername"}],staticClass:"help is-danger"},[a._v("\n          "+a._s(a.getErrorMinMax(4,255))+"\n        ")])]),a._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[a._v("\n          Date Transfer\n        ")]),a._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.date_transfer,expression:"formData.date_transfer"}],staticClass:"input",class:{"is-danger":!a.isValidDateTransfer},attrs:{type:"date",placeholder:"Ex: 2019-02-19",required:""},domProps:{value:a.formData.date_transfer},on:{input:function(t){t.target.composing||a.$set(a.formData,"date_transfer",t.target.value)}}})]),a._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!a.isValidDateTransfer,expression:"!isValidDateTransfer"}],staticClass:"help is-danger"},[a._v("\n          "+a._s(a.getErrorMinMax(4,255))+"\n        ")])]),a._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[a._v("\n          Reference No\n        ")]),a._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.no_ref,expression:"formData.no_ref"}],staticClass:"input",class:{"is-danger":!a.isValidNoReference},attrs:{type:"text",placeholder:"Ex: QWERTY-QWERTY-QWERTY-QWERTY-QWERTY",required:""},domProps:{value:a.formData.no_ref},on:{input:function(t){t.target.composing||a.$set(a.formData,"no_ref",t.target.value)}}})]),a._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!a.isValidNoReference,expression:"!isValidNoReference"}],staticClass:"help is-danger"},[a._v("\n          "+a._s(a.getErrorMinMax(4,255))+"\n        ")])]),a._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[a._v("\n          Screenshoot Receipt\n        ")]),a._v(" "),e("div",{staticClass:"control"},[e("input",{ref:"screenshoot",staticClass:"input",class:{"is-danger":!a.isValidScreenshoot},attrs:{id:"screenshoot",type:"file",placeholder:"Select your screenshoot file",required:""},on:{change:function(t){a.handleFileUpload()}}})]),a._v(" "),a.isValidScreenshoot&&""!==a.formData.screenshoot?e("div",{staticClass:"preview"},[e("label",{staticClass:"label"},[a._v("\n            Preview Screenshoot\n          ")]),a._v(" "),e("img",{staticStyle:{width:"300px"},attrs:{src:a.formData.screenshoot}})]):a._e(),a._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!a.isValidScreenshoot,expression:"!isValidScreenshoot"}],staticClass:"help is-danger"},[a._v("\n          "+a._s(a.getErrorMinMax(4,255))+"\n        ")])]),a._v(" "),e("div",{staticClass:"field"},[e("div",[a._captchaImage&&""!==a._captchaImage?e("img",{staticStyle:{width:"250px"},attrs:{src:a._captchaImage,alt:"_captcha"}}):a._e()]),a._v(" "),e("div",[e("div",{staticClass:"button is-link",class:{"is-loading":a.loadingToken},attrs:{disabled:a.loadingToken},on:{click:a.refreshCaptcha}},[a._v("\n            Refresh Captcha\n          ")])])]),a._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[a._v("\n          Input Captcha\n        ")]),a._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.captcha,expression:"formData.captcha"}],staticClass:"input",attrs:{type:"text"},domProps:{value:a.formData.captcha},on:{input:function(t){t.target.composing||a.$set(a.formData,"captcha",t.target.value)}}})]),e("p",{directives:[{name:"show",rawName:"v-show",value:!a.isValidFormCaptcha,expression:"!isValidFormCaptcha"}],staticClass:"help is-danger"},[a._v("\n          "+a._s(a.getErrorMinMax(6,10))+"\n        ")])]),a._v(" "),e("div",{staticClass:"field is-grouped"},[e("div",{staticClass:"control"},[e("div",{staticClass:"button is-link",class:{"is-loading":a.loadingSubmit},attrs:{disabled:a.loadingSubmit},on:{click:a.doSubmit}},[a._v("\n            Submit\n          ")])]),a._v(" "),a._m(0)])]),a._v(" "),a._m(1),a._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:a.isHaveError,expression:"isHaveError"}],staticClass:"notification is-danger",staticStyle:{"margin-top":"1em"}},[e("span",[a._v("Please fill all required fields before submitting data.")]),a._v(" "),e("br"),a._v(" "),e("span",[a._v(a._s(a.error))])])])])},[function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"control"},[t("a",{staticClass:"button is-text",attrs:{href:"/"}},[this._v("\n            Cancel\n          ")])])},function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"notification is-info",staticStyle:{"margin-top":"1em"}},[t("span",[this._v("After you submit payment confirmation, our admin will check the data as soon as possible.")]),this._v(" "),t("br"),this._v("\n      Please be patient, we will inform you via email after your submission already checked and approved by our admin.\n    ")])}],!1,null,"8e7b1536",null);t.default=o.exports}}]);