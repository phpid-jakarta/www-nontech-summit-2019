(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{183:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return l});var o=[{name:"Biznet Gio",logo:"/images/sponsor/Biznet_GioCloud_Logo.png",link:"https://www.biznetgio.com/"},{name:"Biznet Networks",logo:"/images/sponsor/Biznet_Logo.png",link:"http://www.biznetnetworks.com/id/"}],l=[{name:"Algo Studio",logo:"/images/sponsor/algo_studio2.png",link:"http://algostudio.net/"},{name:"Entliven",logo:"/images/sponsor/entliven.png",link:"https://entliven.com/"},{name:"PT. Global Anugerah Indonesia",logo:"/images/sponsor/gai.jpg",link:"http://pt-gai.com/"},{name:"Geek Hunter",logo:"/images/sponsor/geekhunter.png",link:"https://geekhunter.co/"}]},184:function(t,e,n){"use strict";var o={name:"BaseImageList",props:{items:{type:Array,default:function(){return[]}},listType:{type:String,default:"sponsor"},listTitle:{type:String,default:"SPONSOR"},listSubTitle:{type:String,default:""},showButton:{type:Boolean,default:!0}}},l=n(2),component=Object(l.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section",class:t.listType,attrs:{id:t.listType}},[n("h2",{staticClass:"title has-text-centered title-section caption-text"},[t._v("\n    "+t._s(t.listTitle)+"\n  ")]),t._v(" "),""!==t.listSubTitle?n("h3",{staticClass:"title has-text-centered title-section caption-text"},[t._v("\n    "+t._s(t.listSubTitle)+"\n  ")]):t._e(),t._v(" "),n("div",{staticClass:"has-text-centered"},[n("div",{staticClass:"level"},t._l(t.items,function(e,o){return n("div",{key:t.listType+o,staticClass:"level-item"},[n("a",{attrs:{href:e.link+"?utm_source=www-smesummit-id?utm_medium=banner",title:e.name,target:"_blank",rel:"noopener"}},[n("img",{directives:[{name:"lazyload",rawName:"v-lazyload"}],staticClass:"sponsors_item",attrs:{src:"/images/placeholder.png","data-src":e.logo,"data-err":"/images/placeholder.png",alt:e.name}})])])}),0)]),t._v(" "),t.showButton?n("div",{staticClass:"level btn-call"},[n("div",{staticClass:"level-item"},[n("nuxt-link",{staticClass:"button is-outlined is-large is-info caption-text",attrs:{to:"/sponsor"}},[t._v("\n        Become Sponsor\n      ")])],1)]):t._e()])},[],!1,null,"260ba38b",null);e.a=component.exports},211:function(t,e,n){"use strict";n.r(e);var o=n(184),l=n(183),r={name:"AcceptedSponsor",layout:"no-hero",head:function(){return{title:"Awesome Sponsors in SME Summit 2019"}},components:{BaseImageList:o.a},data:function(){return{sponsors:l.a,silver_sponsor:l.b}}},c=n(2),component=Object(c.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("section",{staticClass:"section"},[e("BaseImageList",{attrs:{items:this.sponsors,"list-sub-title":"MAIN SPONSOR","show-button":!1}}),this._v(" "),e("BaseImageList",{attrs:{items:this.silver_sponsor,"list-title":"","list-sub-title":"SILVER SPONSOR"}})],1)])},[],!1,null,"7aecd089",null);e.default=component.exports}}]);