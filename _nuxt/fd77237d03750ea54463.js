(window.webpackJsonp=window.webpackJsonp||[]).push([[11,9],{185:function(t,a,e){"use strict";e.r(a),a.default={data:function(){return{error:"",loadingToken:!1,loadingSubmit:!1,isHaveError:!1}},computed:{_token:function(){return this.$store.state.token},_captchaImage:function(){return this.$store.state.captcha}},mounted:function(){this.requestToken()},methods:{getErrorMinMax:function(t,a){return"This field should be at least ".concat(t," character and maximum ").concat(a," character")},requestToken:function(){var t=this;this.loadingToken=!0,this.$store.dispatch("fetchNewToken",{url:this.url_api,success:function(){setTimeout(function(){t.loadingToken=!1},1e3)}})},refreshCaptcha:function(){this.requestToken()},onSuccessSubmit:function(t){var a=this;"register_success"===t.data.data.message?(this.$store.dispatch("showNotification",{title:"Thank You",message:"The data was successfully saved in our server."}),setTimeout(function(){a.$router.push("/")},1e3)):(this.requestToken(),this.formData.captcha="",this.isHaveError=!0),setTimeout(function(){a.loadingSubmit=!1},1e3)},onErrorSubmit:function(t){this.requestToken(),this.formData.captcha="",this.error=t,this.isHaveError=!0,this.loadingSubmit=!1}}}},186:function(t,a,e){"use strict";var i=function(t){return null!=t},s=function(t){return!(!i(t)||""===t.trim())};e.d(a,"b",function(){return o}),e.d(a,"a",function(){return r});var o=function(t,a,e){return s(e)&&e.length>t&&e.length<a},r=function(t){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())}},188:function(t,a,e){var i=e(202);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e(14).default)("657df9d3",i,!0,{})},201:function(t,a,e){"use strict";var i=e(188);e.n(i).a},202:function(t,a,e){(t.exports=e(13)(!1)).push([t.i,"",""])},203:function(t,a,e){"use strict";e.d(a,"a",function(){return i});var i=[{name:"Ken Ratri Iswari",title:"Founder & CEO Geekhunter",sector:"Human Asset Sector",fb:"https://www.facebook.com/kenratriiswari",tw:"https://twitter.com/kenratriiswari",in:"https://www.linkedin.com/in/kenratriiswari/",insta:"https://www.instagram.com/kenratriiswari/",photo:{jpeg:"/images/speaker/ken-ratri-iswari.jpeg",webp:"/images/speaker/ken-ratri-iswari.webp"}},{name:"Dondy Bappedyanto",title:"CEO Biznet Gio",sector:"Technology Sector",fb:"",tw:"https://twitter.com/dondyb",in:"https://www.linkedin.com/in/dondyb/",insta:"https://www.instagram.com/dondyb/",photo:{jpeg:"/images/speaker/dondy-bappedyanto.jpeg",webp:"/images/speaker/dondy-bappedyanto.webp"}},{name:"Rendy Maulana",title:"CEO Qwords",sector:"Regulation Sector",fb:"https://www.facebook.com/rendy.maulana",tw:"",in:"https://www.linkedin.com/in/rendy/",insta:"https://www.instagram.com/rendy/",photo:{jpeg:"/images/speaker/rendy-maulana.jpeg",webp:"/images/speaker/rendy-maulana.webp"}},{name:"Yopie Suryadi",title:"Founder, Chief MTarget.co",sector:"Digital Marketing",fb:"",tw:"https://twitter.com/yopiesuryadi",in:"https://www.linkedin.com/in/yopiesuryadi",insta:"https://www.instagram.com/yopiesuryadi",photo:{jpeg:"/images/speaker/yopie-suryadi.jpg",webp:"/images/speaker/yopie-suryadi.webp"}},{name:"Melvin Mumpuni CFP",title:"Founder Finansialku.com",sector:"Financial Sector",fb:"",tw:"https://twitter.com/melvinmumpuni",in:"https://www.linkedin.com/in/melvinmumpuni",insta:"",photo:{jpeg:"/images/speaker/melvin-mumpuni.jpg",webp:"/images/speaker/melvin-mumpuni.webp"}},{name:"Joy Gabriel",title:"Data Analytics Telkom Indonesia",sector:"Technology Sector",fb:"https://www.facebook.com/joygeneroso",tw:"",in:"https://www.linkedin.com/in/joygabriel",insta:"",photo:{jpeg:"/images/speaker/joy-gabriel.jpeg",webp:"/images/speaker/joy-gabriel.webp"}}]},204:function(t,a,e){var i=e(231);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e(14).default)("0893498e",i,!0,{})},211:function(t,a,e){"use strict";var i={name:"SpeakerList",props:{items:{type:Array,default:function(){return[]}},showButton:{type:Boolean,default:!0}}},s=(e(201),e(3)),o=Object(s.a)(i,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"section speakers",attrs:{id:"speakers"}},[e("h2",{staticClass:"title has-text-centered title-section caption-text"},[t._v("\n    SPEAKERS\n  ")]),t._v(" "),e("div",{staticClass:"level"},t._l(t.items,function(a,i){return e("div",{key:"speaker-"+i,staticClass:"level-item"},[e("div",{staticClass:"speaker__item"},[e("figure",{staticClass:"image is-200x200"},[e("picture",[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.photo.jpeg,expression:"speaker.photo.jpeg"}],staticClass:"is-rounded",attrs:{src:"/images/person.png",alt:a.name}})])]),t._v(" "),e("div",{staticClass:"speaker__name"},[e("h2",[t._v(t._s(a.name))]),t._v(" "),e("h3",[t._v(t._s(a.title))]),t._v(" "),e("h5",[t._v(t._s(a.sector))])]),t._v(" "),e("div",{staticClass:"speaker__social"},[a.in?e("a",{attrs:{href:a.in,title:a.name+" Linkedin",target:"_blank",rel:"noopener"}},[e("svg",{staticClass:"icon__in",attrs:{width:"2em",height:"2em",viewBox:"0 0 512 512"}},[e("path",{attrs:{d:"M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z"}})])]):t._e(),t._v(" "),a.fb?e("a",{attrs:{href:a.fb,title:a.name+" Facebook",target:"_blank",rel:"noopener"}},[e("svg",{staticClass:"icon__fb",attrs:{width:"2em",height:"2em",viewBox:"0 0 512 512"}},[e("path",{attrs:{d:"M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z"}})])]):t._e(),t._v(" "),a.tw?e("a",{attrs:{href:a.tw,title:a.name+" Twitter",target:"_blank",rel:"noopener"}},[e("svg",{staticClass:"icon__tw",attrs:{width:"2em",height:"2em",viewBox:"0 0 512 512"}},[e("path",{attrs:{d:"M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z"}})])]):t._e(),t._v(" "),a.insta?e("a",{attrs:{href:a.insta,title:a.name+" Instagram",target:"_blank",rel:"noopener"}},[e("svg",{staticClass:"icon__instagram",attrs:{width:"2em",height:"2em",viewBox:"0 0 512 512"}},[e("path",{attrs:{d:"M336 96c21.2 0 41.3 8.4 56.5 23.5S416 154.8 416 176v160c0 21.2-8.4 41.3-23.5 56.5S357.2 416 336 416H176c-21.2 0-41.3-8.4-56.5-23.5S96 357.2 96 336V176c0-21.2 8.4-41.3 23.5-56.5S154.8 96 176 96h160m0-32H176c-61.6 0-112 50.4-112 112v160c0 61.6 50.4 112 112 112h160c61.6 0 112-50.4 112-112V176c0-61.6-50.4-112-112-112z"}}),t._v(" "),e("path",{attrs:{d:"M360 176c-13.3 0-24-10.7-24-24s10.7-24 24-24c13.2 0 24 10.7 24 24s-10.8 24-24 24zm-104 16c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64m0-32c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96z"}})])]):t._e()])])])})),t._v(" "),t.showButton?e("div",{staticClass:"level btn-call"},[e("div",{staticClass:"level-item"},[e("nuxt-link",{staticClass:"button is-outlined is-large is-info caption-text",attrs:{to:"/speaker"}},[t._v("\n        Become Speaker\n      ")])],1)]):t._e()])},[],!1,null,"064f32d0",null);o.options.__file="SpeakerList.vue";a.a=o.exports},230:function(t,a,e){"use strict";var i=e(204);e.n(i).a},231:function(t,a,e){(t.exports=e(13)(!1)).push([t.i,"",""])},245:function(t,a,e){"use strict";e.r(a);e(50),e(31);var i=e(211),s=e(203),o=e(15),r=e(51),n=e(186),l=e(185),c={name:"RegisterSpeakers",head:function(){return{title:"Register for Speaker | SME Summit 2019"}},components:{SpeakerList:i.a},mixins:[l.default],data:function(){return{url_api:"".concat(o.b.REGISTER_SPEAKER),formData:{name:"",company_name:"",position:"",sector:"",photo:"",last_education:"",experience:"",email:"",phone:"",topic:"",captcha:""},isValidFormName:!0,isValidFormCompanyName:!0,isValidFormPosition:!0,isValidFormCompanySector:!0,isValidFormPhoto:!0,isValidFormLatestEducation:!0,isValidFormExperience:!0,isValidFormEmail:!0,isValidFormPhone:!0,isValidFormTopic:!0,isValidFormCaptcha:!0,isValidForm:!1,ARGA:r.a,speakers:s.a}},methods:{checkFormValidation:function(){return this.isValidFormName=Object(n.b)(3,255,this.formData.name),this.isValidFormCompanyName=Object(n.b)(3,255,this.formData.company_name),this.isValidFormPosition=Object(n.b)(3,255,this.formData.position),this.isValidFormCompanySector=Object(n.b)(3,255,this.formData.sector),this.isValidFormPhoto=Object(n.b)(3,255,this.formData.photo),this.isValidFormLatestEducation=Object(n.b)(3,255,this.formData.last_education),this.isValidFormExperience=Object(n.b)(20,1024,this.formData.experience),this.isValidFormEmail=Object(n.b)(3,255,this.formData.email)&&Object(n.a)(this.formData.email),this.isValidFormPhone=Object(n.b)(3,255,this.formData.phone),this.isValidFormTopic=Object(n.b)(3,255,this.formData.topic),this.isValidFormCaptcha=Object(n.b)(5,10,this.formData.captcha),!!(this.isValidFormName&&this.isValidFormCompanyName&&this.isValidFormPosition&&this.isValidFormCompanySector&&this.isValidFormPhoto&&this.isValidFormLatestEducation&&this.isValidFormExperience&&this.isValidFormEmail&&this.isValidFormPhone&&this.isValidFormTopic&&this.isValidFormCaptcha)},doSubmit:function(){if(this.checkFormValidation()){this.error="",this.loadingSubmit=!0,this.isHaveError=!1;var t=Object.assign({},this.formData);this.$store.dispatch("postRegisterSpeaker",{token:this._token,data:t,success:this.onSuccessSubmit,failed:this.onErrorSubmit})}else this.isHaveError=!0}}},m=(e(230),e(3)),p=Object(m.a)(c,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("section",{staticClass:"section reg-speakers",attrs:{id:"reg-speakers"}},[e("SpeakerList",{attrs:{items:t.speakers,"show-button":!1}}),t._v(" "),e("h2",{staticClass:"title has-text-centered title-section caption-text"},[t._v("\n      REGISTER FOR SPEAKERS\n    ")]),t._v(" "),e("form",{staticClass:"form"},[e("input",{staticClass:"hidden",domProps:{value:t._token}}),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("\n          Name\n        ")]),t._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.name,expression:"formData.name"}],staticClass:"input",class:{"is-danger":!t.isValidFormName},attrs:{type:"text",placeholder:"Your Name",required:""},domProps:{value:t.formData.name},on:{input:function(a){a.target.composing||t.$set(t.formData,"name",a.target.value)}}})]),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!t.isValidFormName,expression:"!isValidFormName"}],staticClass:"help is-danger"},[t._v("\n          "+t._s(t.getErrorMinMax(4,255))+"\n        ")])]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("\n          Company Name\n        ")]),t._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.company_name,expression:"formData.company_name"}],staticClass:"input",class:{"is-danger":!t.isValidFormCompanyName},attrs:{type:"text",placeholder:"Your Company Name",required:""},domProps:{value:t.formData.company_name},on:{input:function(a){a.target.composing||t.$set(t.formData,"company_name",a.target.value)}}})]),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!t.isValidFormCompanyName,expression:"!isValidFormCompanyName"}],staticClass:"help is-danger"},[t._v("\n          "+t._s(t.getErrorMinMax(4,255))+"\n        ")])]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("\n          Company Sector\n        ")]),t._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.sector,expression:"formData.sector"}],staticClass:"input",class:{"is-danger":!t.isValidFormCompanySector},attrs:{type:"text",placeholder:"Your Company Sector",required:""},domProps:{value:t.formData.sector},on:{input:function(a){a.target.composing||t.$set(t.formData,"sector",a.target.value)}}})]),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!t.isValidFormCompanySector,expression:"!isValidFormCompanySector"}],staticClass:"help is-danger"},[t._v("\n          "+t._s(t.getErrorMinMax(4,255))+"\n        ")])]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("\n          Your Role/Position\n        ")]),t._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.position,expression:"formData.position"}],staticClass:"input",class:{"is-danger":!t.isValidFormPosition},attrs:{type:"text",placeholder:"Ex: IT, Owner, etc",required:""},domProps:{value:t.formData.position},on:{input:function(a){a.target.composing||t.$set(t.formData,"position",a.target.value)}}})]),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!t.isValidFormPosition,expression:"!isValidFormPosition"}],staticClass:"help is-danger"},[t._v("\n          "+t._s(t.getErrorMinMax(4,255))+"\n        ")])]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("\n          Email\n        ")]),t._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.email,expression:"formData.email"}],staticClass:"input",class:{"is-danger":!t.isValidFormEmail},attrs:{type:"email",placeholder:"Ex: example@mail.com",required:""},domProps:{value:t.formData.email},on:{input:function(a){a.target.composing||t.$set(t.formData,"email",a.target.value)}}})]),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!t.isValidFormEmail,expression:"!isValidFormEmail"}],staticClass:"help is-danger"},[t._v("\n          Your email is not valid. "),e("br"),t._v(" "+t._s(t.getErrorMinMax(4,255))+"\n        ")])]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("\n          Phone/WA/Telegram\n        ")]),t._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.phone,expression:"formData.phone"}],staticClass:"input",class:{"is-danger":!t.isValidFormPhone},attrs:{type:"text",placeholder:"Ex: 0812-123-456-789-00 or @your.telegram",required:""},domProps:{value:t.formData.phone},on:{input:function(a){a.target.composing||t.$set(t.formData,"phone",a.target.value)}}})]),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!t.isValidFormPhone,expression:"!isValidFormPhone"}],staticClass:"help is-danger"},[t._v("\n          "+t._s(t.getErrorMinMax(4,255))+"\n        ")])]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("\n          Public Photo Url\n        ")]),t._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.photo,expression:"formData.photo"}],staticClass:"input",class:{"is-danger":!t.isValidFormPhoto},attrs:{type:"text",placeholder:"Ex: https://avatars2.githubusercontent.com/u/7221389?s=460&v=4",required:""},domProps:{value:t.formData.photo},on:{input:function(a){a.target.composing||t.$set(t.formData,"photo",a.target.value)}}})]),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!t.isValidFormPhoto,expression:"!isValidFormPhoto"}],staticClass:"help is-danger"},[t._v("\n          "+t._s(t.getErrorMinMax(4,255))+"\n        ")])]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("\n          Latest Education\n        ")]),t._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.last_education,expression:"formData.last_education"}],staticClass:"input",class:{"is-danger":!t.isValidFormLatestEducation},attrs:{type:"text",placeholder:"Ex: MBA - Some Institute of Technology",required:""},domProps:{value:t.formData.last_education},on:{input:function(a){a.target.composing||t.$set(t.formData,"last_education",a.target.value)}}})]),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!t.isValidFormLatestEducation,expression:"!isValidFormLatestEducation"}],staticClass:"help is-danger"},[t._v("\n          "+t._s(t.getErrorMinMax(4,255))+"\n        ")])]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("\n          Experience\n        ")]),t._v(" "),e("div",{staticClass:"control"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.experience,expression:"formData.experience"}],staticClass:"textarea",class:{"is-danger":!t.isValidFormExperience},attrs:{placeholder:"Tell us your awesome experience.",required:""},domProps:{value:t.formData.experience},on:{input:function(a){a.target.composing||t.$set(t.formData,"experience",a.target.value)}}})]),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!t.isValidFormExperience,expression:"!isValidFormExperience"}],staticClass:"help is-danger"},[t._v("\n          "+t._s(t.getErrorMinMax(20,1024))+"\n        ")])]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("\n          Your Topic\n        ")]),t._v(" "),e("div",{staticClass:"control"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.topic,expression:"formData.topic"}],staticClass:"textarea",class:{"is-danger":!t.isValidFormTopic},attrs:{placeholder:"Describe your topic",required:""},domProps:{value:t.formData.topic},on:{input:function(a){a.target.composing||t.$set(t.formData,"topic",a.target.value)}}})]),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!t.isValidFormTopic,expression:"!isValidFormTopic"}],staticClass:"help is-danger"},[t._v("\n          "+t._s(t.getErrorMinMax(10,1024))+"\n        ")])]),t._v(" "),e("div",{staticClass:"field"},[e("div",[t._captchaImage&&""!==t._captchaImage?e("img",{staticStyle:{width:"250px"},attrs:{src:t._captchaImage,alt:"_captcha"}}):t._e()]),t._v(" "),e("div",[e("div",{staticClass:"button is-link",class:{"is-loading":t.loadingToken},attrs:{disabled:t.loadingToken},on:{click:t.refreshCaptcha}},[t._v("\n            Refresh Captcha\n          ")])])]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("\n          Input Captcha\n        ")]),t._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.captcha,expression:"formData.captcha"}],staticClass:"input",class:{"is-danger":!t.isValidFormCaptcha},attrs:{type:"text"},domProps:{value:t.formData.captcha},on:{input:function(a){a.target.composing||t.$set(t.formData,"captcha",a.target.value)}}})]),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!t.isValidFormTopic,expression:"!isValidFormTopic"}],staticClass:"help is-danger"},[t._v("\n          "+t._s(t.getErrorMinMax(6,10))+"\n        ")])]),t._v(" "),e("div",{staticClass:"field is-grouped"},[e("div",{staticClass:"control"},[e("div",{staticClass:"button is-link",class:{"is-loading":t.loadingSubmit},attrs:{disabled:t.loadingSubmit},on:{click:t.doSubmit}},[t._v("\n            Submit\n          ")])]),t._v(" "),t._m(0)])]),t._v(" "),e("div",{staticClass:"notification is-info",staticStyle:{"margin-top":"1em"}},[e("span",[t._v("More information about speaker, you can contact our PIC")]),t._v(" "),e("br"),t._v(" "),e("span",[t._v("Name: "+t._s(t.ARGA.name))]),t._v(" "),e("br"),t._v(" "),e("span",[t._v("Phone: "+t._s(t.ARGA.phone))])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isHaveError,expression:"isHaveError"}],staticClass:"notification is-danger",staticStyle:{"margin-top":"1em"}},[e("span",[t._v("Please fill all required fields before submitting data.")]),t._v(" "),e("br"),t._v(" "),e("span",[t._v(t._s(t.error))])])],1)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"control"},[a("a",{staticClass:"button is-text",attrs:{href:"/"}},[this._v("\n            Cancel\n          ")])])}],!1,null,"6342bb17",null);p.options.__file="speaker.vue";a.default=p.exports}}]);