(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,n){e.exports=n(77)},32:function(e,t,n){},33:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),o=n.n(c),u=(n(32),n(22)),l=n(23),i=n(25),s=n(24),m=n(26),f=(n(33),n(1)),d=n(2),p=function(e){var t=Object(a.useRef)(e);return function(){return t.current++}},b=function(e){var t=p(e+1),n=Object(a.useState)(Array(e).fill(0).map(function(e,t){return t+1})),r=Object(f.a)(n,2),c=r[0],o=r[1];return[c,function(){return o(c.concat(t()))},function(e){var t=c.slice(0),n=t.indexOf(e);-1!==n&&t.splice(n,1),o(t)}]},E=n(3),v=n.n(E),h=n(5),O=n.n(h),y=n(4),j=n.n(y),g=function(e){return{type:"INITIALIZE",payload:e}},A=function(e,t){return{type:"CHANGE_VALUE",payload:{path:e,value:t}}},F=function(e,t,n){return{type:"CHANGE_METADATA",payload:{path:e,name:t,value:n}}},R={formValues:{},errors:{},metas:{}},S=function(e,t){var n=t.type,a=t.payload,r=null,c=[];switch(n){case"INITIALIZE":return r=v()(e,"formValues",a),Object(d.a)({},e,r);case"CHANGE_VALUE":return r=v()(e,"formValues.".concat(a.path),a.value),Object(d.a)({},e,r);case"CHANGE_METADATA":return r=v()(e,"metas.".concat(a.path,".").concat(a.name),a.value),Object(d.a)({},e,r);case"RESET_FORM":return Object(d.a)({},e,{formValues:a,errors:{},metas:{}});case"ASSIGN_ERROR":return r=v()(e,"errors.".concat(a.path),a.value),Object(d.a)({},e,r);case"REMOVE_ITEM":return c=O()(e,"formValues.".concat(a.path),[]).filter(function(e,t){return t!==a.index}),r=v()(e,"formValues.".concat(a.path),c),Object(d.a)({},e,r);default:return e}},T=function(e,t,n){var a=function(e){return O()(t,"formValues.".concat(e),"")},r=function(n){var a=e(t.formValues);return O()(a,"".concat(n),null)},c=function(e,n){return O()(t.metas,"".concat(e,".").concat(n),!1)};return[function(t){var o=function(){if(n(F(t,"isTouched",!0)),!j.a.empty(e)){var a=r(t);if(!j.a.empty(a))return n(function(e,t){return{type:"ASSIGN_ERROR",payload:{path:e,value:t}}}(t,a)),!1}return!0};return{bind:{value:a(t),onChange:function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];o(),n(A(t,a?e:e.target.value))},onBlur:function(){o(),n(F(t,"isFocus",!1))},onFocus:function(){n(F(t,"isFocus",!0))}},error:r(t),isFocus:c(t,"isFocus"),isTouched:c(t,"isTouched"),validate:o,changeValue:function(e){n(A(t,e))}}},a]},V=function(e,t,n){var r=Object(a.useReducer)(S,R),c=Object(f.a)(r,2),o=c[0],u=c[1],l=T(t,o,u),i=Object(f.a)(l,1)[0],s=function(e,t,n){var a=T(e,t,n),r=Object(f.a)(a,1)[0],c=b(0),o=Object(f.a)(c,3),u=o[0],l=o[1],i=o[2];return[function(e){var t=r(e);return t.keys=u,t.add=l,t.remove=function(e,t,a){n(function(e,t){return{type:"REMOVE_ITEM",payload:{path:e,index:t}}}(e,t)),i(a)},Object(d.a)({},t)}]}(t,o,u),m=Object(f.a)(s,1)[0],p=function(){};return Object(a.useEffect)(function(){!function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;u(g(t||e))}()},[]),{state:o,reset:function(){u(function(e){return{type:"RESET_FORM",payload:e}}(e))},getField:i,getFieldArray:m,onSubmit:function(e){e.preventDefault(),n(o.formValues)},validate:p}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={};j.a.empty(e.clubName)&&(t.clubName="The club is required");var n=[];return e.members&&e.members.map(function(e,t){var a={};e.name||(a.name="The name is required",n[t]=a),e.phone||(a.phone="The phone is required",n[t]=a)}),n.length&&(t.members=n),t},w=function(e){var t=e.error;return r.a.createElement("small",{style:{fontSize:11,color:"red"}},t)},I=function(e){var t=e.bind,n=e.isTouched,a=e.error,c=e.placeholder;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("input",Object.assign({},t,{placeholder:c}))),r.a.createElement(w,{error:a&&n&&a}))},k=function(e){var t=e.keys,n=e.getField,a=e.remove,c=e.add;return r.a.createElement("div",null,t.map(function(e,t){return r.a.createElement("div",{key:e},r.a.createElement("small",{styles:{fontSize:13}},"Member #",t+1)," ",r.a.createElement("br",null),r.a.createElement("button",{type:"button",onClick:function(){return a("members",t,e)}}," REMOVE "),r.a.createElement(I,Object.assign({placeholder:"Name"},n("members[".concat(t,"].name")))),r.a.createElement(I,Object.assign({placeholder:"Phone"},n("members[".concat(t,"].phone")))))}),r.a.createElement("button",{type:"button",onClick:c}," ADD MEMBER "))},M={Form:function(){var e=V({clubName:"",members:[]},N,function(e){console.log("handleSuccess",e)}),t=e.state,n=e.getField,a=e.getFieldArray,c=e.onSubmit,o=n("clubName"),u=a("members");return r.a.createElement("form",{onSubmit:c},r.a.createElement(I,Object.assign({placeholder:"Club name"},o)),r.a.createElement(k,Object.assign({getField:n},u)),r.a.createElement("div",null,r.a.createElement("button",null," SAVE ")),r.a.createElement("div",null,r.a.createElement("small",null,"Results"),r.a.createElement("div",{style:{backgroundColor:"#DDD",fontSize:14}},r.a.createElement("pre",null,JSON.stringify(t.formValues,null,2)))))}},C=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,' Form with hook "useStatefulForm" '),r.a.createElement("header",{className:"App-header"},r.a.createElement(M.Form,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.534bbffb.chunk.js.map