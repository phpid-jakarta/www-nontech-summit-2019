(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{190:function(t,e,i){var n=i(207);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i(14).default)("2ec1fd33",n,!0,{})},206:function(t,e,i){"use strict";var n=i(190);i.n(n).a},207:function(t,e,i){(t.exports=i(13)(!1)).push([t.i,"",""])},219:function(t,e,i){"use strict";i.r(e);var n=i(32),s=i.n(n),a={name:"OrganizerPage",data:function(){return{organizerList:[]}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;s()({url:"/organizers.json",method:"get"}).then(function(e){t.organizerList=e.data.data})}}},o=(i(206),i(3)),r=Object(o.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("section",{staticClass:"section organizer",attrs:{id:"organizer"}},[i("h2",{staticClass:"title has-text-centered title-section caption-text"},[t._v("\n      ORGANIZERS\n    ")]),t._v(" "),i("table",{staticClass:"table"},[t._m(0),t._v(" "),i("tbody",t._l(t.organizerList,function(e,n){return i("tr",{key:n},[i("td",[t._v(t._s(n+1))]),t._v(" "),i("td",[t._v(t._s(e.position))]),t._v(" "),i("td",[t._v(t._s(e.name))]),t._v(" "),i("td",[t._v(t._s(e.email))])])}))]),t._v(" "),i("div")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("No")]),this._v(" "),e("th",[this._v("Position")]),this._v(" "),e("th",[this._v("Name")]),this._v(" "),e("th",[this._v("Email")])])])}],!1,null,"1739eb75",null);r.options.__file="organizer.vue";e.default=r.exports}}]);