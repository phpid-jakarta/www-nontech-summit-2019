(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{186:function(t,e,n){var s=n(194);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,n(14).default)("1a2bd714",s,!0,{})},193:function(t,e,n){"use strict";var s=n(186);n.n(s).a},194:function(t,e,n){(t.exports=n(13)(!1)).push([t.i,"\n.benefit .level[data-v-336f8042] {\n  align-items: flex-start;\n}\n.benefit .level-item[data-v-336f8042] {\n  display: block;\n  max-width: 200px;\n  padding: 1em .5em;\n}\n.benefit .level-item img[data-v-336f8042] {\n    width: 200px;\n}\n.item__text h4[data-v-336f8042] {\n  font-size: 1.5rem;\n  color: #2779d6;\n  font-family: 'PT Sans Caption', sans-serif;\n  text-transform: uppercase;\n}\n.item__text p[data-v-336f8042] {\n  color: #827f7f;\n}\n",""])},195:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var s=[{logo:"/images/benefit/idea.svg",title:"New Insight",text:"Get new insights from our 7 awesome speakers who will speak in various topics, like Digital Marketing, Fintech Integration, Talent Management, Incentive Regulations from Government, and many more."},{logo:"/images/benefit/coaching.svg",title:"One-on-One Coaching",text:"You can get One-on-One coaching and consultation with our best experts and consultants in 15 different topic that you can choose."},{logo:"/images/benefit/location.svg",title:"Strategic Venue",text:"Strategic location in the center of Jakarta and many hotel facilities available around it."},{logo:"/images/benefit/networking.svg",title:"Networking",text:"Build your business networks with consultants, speakers and other participants in this events."}]},200:function(t,e,n){var s=n(226);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,n(14).default)("c8622042",s,!0,{})},201:function(t,e,n){var s=n(228);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,n(14).default)("326b7ec2",s,!0,{})},202:function(t,e,n){var s=n(230);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,n(14).default)("6759f5ab",s,!0,{})},203:function(t,e,n){"use strict";var s={name:"BenefitList",props:{items:{type:Array,default:function(){return[]}}}},a=(n(193),n(3)),i=Object(a.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section benefit",attrs:{id:"benefit"}},[n("h2",{staticClass:"title has-text-centered title-section caption-text"},[t._v("\n    WHY YOU SHOULD ATTEND THIS SUMMIT?\n  ")]),t._v(" "),n("div",{staticClass:"has-text-centered"},[n("div",{staticClass:"level"},t._l(t.items,function(e,s){return n("div",{key:"benefits-"+s,staticClass:"level-item"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.logo,expression:"benefit.logo"}],attrs:{src:"/images/placeholder.png",alt:"Idea"}}),t._v(" "),n("div",{staticClass:"item__text"},[n("h4",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.text))])])])}))])])},[],!1,null,"336f8042",null);i.options.__file="BenefitList.vue";e.a=i.exports},225:function(t,e,n){"use strict";var s=n(200);n.n(s).a},226:function(t,e,n){(t.exports=n(13)(!1)).push([t.i,"",""])},227:function(t,e,n){"use strict";var s=n(201);n.n(s).a},228:function(t,e,n){(t.exports=n(13)(!1)).push([t.i,"",""])},229:function(t,e,n){"use strict";var s=n(202);n.n(s).a},230:function(t,e,n){(t.exports=n(13)(!1)).push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},231:function(t,e,n){"use strict";n.r(e);var s=n(224),a=n.n(s),i={name:"BaseImageList",props:{items:{type:Array,default:function(){return[]}},listType:{type:String,default:"sponsor"},listTitle:{type:String,default:"SPONSOR"},showButton:{type:Boolean,default:!0}}},o=(n(225),n(3)),r=Object(o.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section",class:t.listType,attrs:{id:t.listType}},[n("h2",{staticClass:"title has-text-centered title-section caption-text"},[t._v("\n    "+t._s(t.listTitle)+"\n  ")]),t._v(" "),n("div",{staticClass:"has-text-centered"},[n("div",{staticClass:"level"},t._l(t.items,function(e,s){return n("div",{key:t.listType+s,staticClass:"level-item"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.logo,expression:"item.logo"}],staticClass:"sponsors_item",attrs:{alt:e.name,src:"/images/placeholder.png"}})])}))]),t._v(" "),t.showButton?n("div",{staticClass:"level btn-call"},[n("div",{staticClass:"level-item"},[n("nuxt-link",{staticClass:"button is-outlined is-large is-info caption-text",attrs:{to:"/sponsor"}},[t._v("\n        Become Sponsor\n      ")])],1)]):t._e()])},[],!1,null,"50ece18b",null);r.options.__file="BaseImageList.vue";var l=r.exports,c=n(203),p={name:"SpeakerList",props:{items:{type:Array,default:function(){return[]}}}},m=(n(227),Object(o.a)(p,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section speakers",attrs:{id:"speakers"}},[n("h2",{staticClass:"title has-text-centered title-section caption-text"},[t._v("\n    SPEAKERS\n  ")]),t._v(" "),n("div",{staticClass:"level"},t._l(t.items,function(e,s){return n("div",{key:"speaker-"+s,staticClass:"level-item"},[n("div",{staticClass:"speaker__item"},[n("figure",{staticClass:"image is-200x200"},[n("picture",[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.photo.jpeg,expression:"speaker.photo.jpeg"}],staticClass:"is-rounded",attrs:{src:"/images/person.png",alt:e.name}})])]),t._v(" "),n("div",{staticClass:"speaker__name"},[n("h2",[t._v(t._s(e.name))]),t._v(" "),n("h3",[t._v(t._s(e.title))]),t._v(" "),n("h5",[t._v(t._s(e.sector))])]),t._v(" "),n("div",{staticClass:"speaker__social"},[e.in?n("a",{attrs:{href:e.in,title:e.name+" Linkedin",target:"_blank",rel:"noopener"}},[n("svg",{staticClass:"icon__in",attrs:{width:"2em",height:"2em",viewBox:"0 0 512 512"}},[n("path",{attrs:{d:"M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z"}})])]):t._e(),t._v(" "),e.fb?n("a",{attrs:{href:e.fb,title:e.name+" Facebook",target:"_blank",rel:"noopener"}},[n("svg",{staticClass:"icon__fb",attrs:{width:"2em",height:"2em",viewBox:"0 0 512 512"}},[n("path",{attrs:{d:"M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z"}})])]):t._e(),t._v(" "),e.tw?n("a",{attrs:{href:e.tw,title:e.name+" Twitter",target:"_blank",rel:"noopener"}},[n("svg",{staticClass:"icon__tw",attrs:{width:"2em",height:"2em",viewBox:"0 0 512 512"}},[n("path",{attrs:{d:"M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z"}})])]):t._e(),t._v(" "),e.insta?n("a",{attrs:{href:e.insta,title:e.name+" Instagram",target:"_blank",rel:"noopener"}},[n("svg",{staticClass:"icon__instagram",attrs:{width:"2em",height:"2em",viewBox:"0 0 512 512"}},[n("path",{attrs:{d:"M336 96c21.2 0 41.3 8.4 56.5 23.5S416 154.8 416 176v160c0 21.2-8.4 41.3-23.5 56.5S357.2 416 336 416H176c-21.2 0-41.3-8.4-56.5-23.5S96 357.2 96 336V176c0-21.2 8.4-41.3 23.5-56.5S154.8 96 176 96h160m0-32H176c-61.6 0-112 50.4-112 112v160c0 61.6 50.4 112 112 112h160c61.6 0 112-50.4 112-112V176c0-61.6-50.4-112-112-112z"}}),t._v(" "),n("path",{attrs:{d:"M360 176c-13.3 0-24-10.7-24-24s10.7-24 24-24c13.2 0 24 10.7 24 24s-10.8 24-24 24zm-104 16c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64m0-32c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96z"}})])]):t._e()])])])})),t._v(" "),n("div",{staticClass:"level btn-call"},[n("div",{staticClass:"level-item"},[n("nuxt-link",{staticClass:"button is-outlined is-large is-info caption-text",attrs:{to:"/speaker"}},[t._v("\n        Become Speaker\n      ")])],1)])])},[],!1,null,"4658983a",null));m.options.__file="SpeakerList.vue";var v=m.exports,u={name:"VolunteerSection"},h=Object(o.a)(u,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section volunteers",attrs:{id:"volunteers"}},[e("h2",{staticClass:"title has-text-centered title-section caption-text"},[this._v("\n    CALL FOR VOLUNTEERS\n  ")]),this._v(" "),e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/images/banner/volunteer.jpg",expression:"'/images/banner/volunteer.jpg'"}],staticClass:"volunteer_banner",attrs:{src:"/images/placeholder.png",alt:"Volunteer"}}),this._v(" "),e("div",{staticClass:"level btn-call"},[e("div",{staticClass:"level-item"},[e("nuxt-link",{staticClass:"button is-outlined is-large is-info caption-text",attrs:{to:"/volunteer"}},[this._v("\n        Become Volunteer\n      ")])],1)])])},[],!1,null,null,null);h.options.__file="VolunteerSection.vue";var d=h.exports,g={name:"LocationSection"},_=Object(o.a)(g,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section location",attrs:{id:"location"}},[e("h2",{staticClass:"title has-text-centered title-section caption-text"},[this._v("\n    LOCATION\n  ")]),this._v(" "),e("article",{staticClass:"level"},[e("figure",{staticClass:"level-item"},[e("picture",[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/images/venue/ayana_ballroom_3_300px.jpeg",expression:"'/images/venue/ayana_ballroom_3_300px.jpeg'"}],attrs:{src:"/images/placeholder.png",alt:"Ballroom Ayana Hotel Midplaza, Jakarta",height:"300"}})])]),this._v(" "),this._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"level-item"},[e("div",{staticClass:"content"},[e("p",{staticClass:"is-size-4"},[this._v("\n          Ballroom Ayana Hotel Midplaza, Jakarta\n        ")]),this._v(" "),e("p",[this._v("\n          Jl. Jenderal Sudirman Kav. 10-11 Jakarta Pusat, Jakarta 10220,\n          Indonesia\n        ")]),this._v(" "),e("p",[e("a",{attrs:{href:"https://goo.gl/maps/L9HS9Dn2oWx",target:"_blank",rel:"noopener"}},[this._v("\n            See in Google Maps\n          ")])])])])}],!1,null,null,null);_.options.__file="LocationSection.vue";var f=_.exports,w=n(15),b=[{name:"Ken Ratri Iswari",title:"Founder & CEO Geekhunter",sector:"Human Asset Sector",fb:"https://www.facebook.com/kenratriiswari",tw:"https://twitter.com/kenratriiswari",in:"https://www.linkedin.com/in/kenratriiswari/",insta:"https://www.instagram.com/kenratriiswari/",photo:{jpeg:"/images/speaker/ken-ratri-iswari.jpeg",webp:"/images/speaker/ken-ratri-iswari.webp"}},{name:"Dondy Bappedyanto",title:"CEO at Biznet Gio",sector:"Technology Sector",fb:"",tw:"https://twitter.com/dondyb",in:"https://www.linkedin.com/in/dondyb/",insta:"https://www.instagram.com/dondyb/",photo:{jpeg:"/images/speaker/dondy-bappedyanto.jpeg"}},{name:"Rendy Maulana",title:"CEO of Qwords",sector:"Regulation Sector",fb:"https://www.facebook.com/rendy.maulana",tw:"",in:"https://www.linkedin.com/in/rendy/",insta:"https://www.instagram.com/rendy/",photo:{jpeg:"/images/speaker/rendy-maulana.jpeg"}},{name:"Speaker",title:"Awesome Company",sector:"Financial Sector",fb:"https://www.facebook.com/",tw:"https://twitter.com/",in:"https://www.linkedin.com/in/",insta:"https://www.instagram.com/",photo:{jpeg:"/images/person.png"}},{name:"Speaker",title:"Awesome Company",sector:"Marketing Sector",fb:"https://www.facebook.com/",tw:"https://twitter.com/",in:"https://www.linkedin.com/in/",insta:"https://www.instagram.com/",photo:{jpeg:"/images/person.png"}},{name:"Speaker",title:"Awesome Company",sector:"Other Sector",fb:"https://www.facebook.com/",tw:"https://twitter.com/",in:"https://www.linkedin.com/in/",insta:"https://www.instagram.com/",photo:{jpeg:"/images/person.png"}}],C=[{name:"Biznet Gio",logo:"/images/sponsor/biznet-gio-logo.svg"},{name:"Biznet Networks",logo:"/images/sponsor/biznet-network-logo.png"}],k=[{name:"Codepolitan",logo:"/images/media-partner/codepolitan_logo.png"}],x=["CEO of Small and Medium Enterprise","IT Manager or equal of Non-Tech Company","Professional Freelancer","Academic/Lecture"],y=n(195),S={name:"IndexPage",components:{BaseImageList:l,BenefitList:c.a,SpeakerList:v,VolunteerSection:d,LocationSection:f},data:function(){return{aboutTitle:w.a,speakers:b,sponsors:C,partners:k,benefits:y.a}},mounted:function(){var t={strings:x,typeSpeed:40,backSpeed:40,backDelay:1e3,loop:!0,loopCount:1/0,showCursor:!1};new a.a(".typed-container",t)}},z=(n(229),Object(o.a)(S,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("section",{staticClass:"section about",attrs:{id:"about"}},[n("h2",{staticClass:"title has-text-centered title-section caption-text"},[t._v("\n      ABOUT SME SUMMIT 2019\n    ")]),t._v(" "),n("div",{staticClass:"has-text-centered"},[n("p",[t._v("\n        "+t._s(t.aboutTitle)+"\n      ")])])]),t._v(" "),n("BenefitList",{attrs:{items:t.benefits}}),t._v(" "),t._m(0),t._v(" "),n("SpeakerList",{attrs:{items:t.speakers}}),t._v(" "),n("BaseImageList",{attrs:{items:t.sponsors}}),t._v(" "),n("BaseImageList",{attrs:{items:t.partners,"list-type":"media-partner","list-title":"MEDIA PARTNER","show-button":!1}}),t._v(" "),n("VolunteerSection"),t._v(" "),n("LocationSection")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"register gradient-section clearfix",attrs:{id:"register"}},[e("h2",{staticClass:"title has-text-centered title-section caption-text"},[this._v("\n      ARE YOU THIS PERSON ?\n    ")]),this._v(" "),e("h2",{staticClass:"is-size-3 has-text-centered has-text-white"},[e("span",[this._v(" ")]),e("span",{staticClass:"typed-container"})]),this._v(" "),e("div",{staticClass:"level btn-call"},[e("div",{staticClass:"level-item"},[e("a",{staticClass:"button is-large is-danger caption-text",attrs:{href:"/register"}},[this._v("\n          Register Here\n        ")])])])])}],!1,null,null,null));z.options.__file="index.vue";e.default=z.exports}}]);