(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{190:function(t,e,n){var content=n(199);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("8dec5d84",content,!0,{sourceMap:!1})},191:function(t,e,n){var content=n(201);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("899890be",content,!0,{sourceMap:!1})},198:function(t,e,n){"use strict";var o=n(190);n.n(o).a},199:function(t,e,n){(t.exports=n(20)(!1)).push([t.i,"h3.subtitle[data-v-025a6506] {\n  padding-top: 2em;\n}\n",""])},200:function(t,e,n){"use strict";var o=n(191);n.n(o).a},201:function(t,e,n){(t.exports=n(20)(!1)).push([t.i,".message-body a {\n  color: #209cee !important;\n}\n.faq /deep/ ul li {\n  list-style-type: disc;\n  margin-left: 1em;\n}\n",""])},214:function(t,e,n){"use strict";n.r(e);var o=n(31),c=n.n(o),r={name:"FaqPage",head:function(){return{title:"Frequently Asked Question | SME Summit 2019"}},data:function(){return{faqList:{general:[],attendants:[],coaching:[],sponsor:[],speaker:[],volunteer:[]}}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;c()({url:"/faq.json",method:"get"}).then(function(e){t.faqList=e.data.data})}}},l=(n(198),n(200),n(2)),component=Object(l.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("section",{staticClass:"section faq",attrs:{id:"faq"}},[n("h2",{staticClass:"title has-text-centered title-section caption-text"},[t._v("\n      FREQUENTLY ASKED QUESTIONS (FAQ)\n    ")]),t._v(" "),n("h3",{staticClass:"subtitle title-section caption-text",attrs:{id:"faq-general"}},[t._v("\n      GENERAL\n    ")]),t._v(" "),t._l(t.faqList.general,function(e,o){return n("article",{key:"faq-general"+o,staticClass:"message is-info"},[n("div",{staticClass:"message-header"},[n("p",[t._v(t._s(e.question))])]),t._v(" "),n("div",{staticClass:"message-body"},[n("div",{domProps:{innerHTML:t._s(e.answer)}})])])}),t._v(" "),n("h3",{staticClass:"subtitle title-section caption-text",attrs:{id:"faq-attendant"}},[t._v("\n      ATTENDANT\n    ")]),t._v(" "),t._l(t.faqList.attendants,function(e,o){return n("article",{key:"faq-attendant"+o,staticClass:"message is-info"},[n("div",{staticClass:"message-header"},[n("p",[t._v(t._s(e.question))])]),t._v(" "),n("div",{staticClass:"message-body"},[n("div",{domProps:{innerHTML:t._s(e.answer)}})])])}),t._v(" "),n("h3",{staticClass:"subtitle title-section caption-text",attrs:{id:"faq-coaching-clinic"}},[t._v("\n      COACHING CLINIC\n    ")]),t._v(" "),t._l(t.faqList.coaching,function(e,o){return n("article",{key:"faq-coaching"+o,staticClass:"message is-info"},[n("div",{staticClass:"message-header"},[n("p",[t._v(t._s(e.question))])]),t._v(" "),n("div",{staticClass:"message-body"},[n("div",{domProps:{innerHTML:t._s(e.answer)}})])])}),t._v(" "),n("h3",{staticClass:"subtitle title-section caption-text",attrs:{id:"faq-sponsor"}},[t._v("\n      SPONSOR\n    ")]),t._v(" "),t._l(t.faqList.sponsor,function(e,o){return n("article",{key:"faq-sponsor"+o,staticClass:"message is-info"},[n("div",{staticClass:"message-header"},[n("p",[t._v(t._s(e.question))])]),t._v(" "),n("div",{staticClass:"message-body"},[n("div",{domProps:{innerHTML:t._s(e.answer)}})])])}),t._v(" "),n("h3",{staticClass:"subtitle title-section caption-text",attrs:{id:"faq-speaker"}},[t._v("\n      SPEAKER\n    ")]),t._v(" "),t._l(t.faqList.speaker,function(e,o){return n("article",{key:"faq-speaker"+o,staticClass:"message is-info"},[n("div",{staticClass:"message-header"},[n("p",[t._v(t._s(e.question))])]),t._v(" "),n("div",{staticClass:"message-body"},[n("div",{domProps:{innerHTML:t._s(e.answer)}})])])}),t._v(" "),n("h3",{staticClass:"subtitle title-section caption-text",attrs:{id:"faq-volunteer"}},[t._v("\n      VOLUNTEER\n    ")]),t._v(" "),t._l(t.faqList.volunteer,function(e,o){return n("article",{key:"faq-volunteer"+o,staticClass:"message is-info"},[n("div",{staticClass:"message-header"},[n("p",[t._v(t._s(e.question))])]),t._v(" "),n("div",{staticClass:"message-body"},[n("div",{domProps:{innerHTML:t._s(e.answer)}})])])})],2)])},[],!1,null,"025a6506",null);e.default=component.exports}}]);