(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],{13:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var c=t(1),a=t(8),s=t.n(a),r=t(7),o=t(2),l=(t(13),t(6)),i={get:function(e,n){var t=localStorage.getItem(e);return null===t?n:JSON.parse(t)},set:function(e,n){var t=JSON.stringify(n);localStorage.setItem(e,t)},remove:function(e){localStorage.removeItem(e)},clear:function(){localStorage.clear()}},u=t(0);var b=function(){var e=Object(c.useState)(i.get("clubsList",l)),n=Object(o.a)(e,2),t=n[0],a=n[1],s=Object(c.useState)(""),b=Object(o.a)(s,2),d=b[0],j=b[1],O=Object(c.useState)(!1),m=Object(o.a)(O,2),h=m[0],p=m[1],f=Object(c.useState)(!1),k=Object(o.a)(f,2),x=k[0],v=k[1],N=Object(c.useState)("OpenAllDays"),g=Object(o.a)(N,2),W=g[0],y=g[1];Object(c.useEffect)((function(){i.set("clubsList",t)}),[t]);var _=function(e){var n=e.target.id,c=t.findIndex((function(e){return n===e.id}));t.splice(c,1),a(Object(r.a)(t))};return Object(u.jsxs)("div",{children:[Object(u.jsxs)("header",{className:"header",children:[Object(u.jsx)("h1",{className:"header__title",children:"Mis clubs"}),Object(u.jsx)("form",{action:"",className:"header__form",children:Object(u.jsxs)("select",{className:"header__form--select",value:W,onChange:function(e){y(e.currentTarget.value)},children:[Object(u.jsx)("option",{value:"openAllDays",children:"Abierto todos los d\xedas"}),Object(u.jsx)("option",{value:"openOnWeekDays",children:"Abierto entre semana"}),Object(u.jsx)("option",{value:"openOnWeekend",children:"Abierto los fines de semana"})]})}),Object(u.jsx)("button",{className:"resetBtn",onClick:function(){a(l)},children:"Valores iniciales"})]}),Object(u.jsxs)("main",{className:"main",children:[Object(u.jsx)("section",{className:"container",children:Object(u.jsx)("ul",{className:"clubsList",children:t.filter((function(e){return"openOnWeekDays"===W?!0===e.openOnWeekdays:"openOnWeekend"!==W||!0===e.openOnWeekend})).map((function(e,n){return Object(u.jsxs)("li",{id:n,className:"clubsList__item",children:[Object(u.jsx)("button",{className:"clubsList__button",onClick:_,children:Object(u.jsx)("i",{className:"fas fa-times-circle clubsList__icon"})}),Object(u.jsx)("h2",{children:"#".concat(n+1,": ").concat(e.name)}),Object(u.jsx)("p",{children:"Abierto entre semana: ".concat(e.openOnWeekdays?"S\xed":"No")}),Object(u.jsx)("p",{children:"Abierto el fin de semana: ".concat(e.openOnWeekend?"S\xed":"No")})]},n)}))})}),Object(u.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault()},children:[Object(u.jsx)("h2",{className:"form__title",children:"A\xf1adir un nuevo club"}),Object(u.jsxs)("label",{htmlFor:"name",children:["Nombre del club",Object(u.jsx)("input",{className:"inputName",type:"text",name:"name",id:"name",onChange:function(e){j(e.currentTarget.value)},value:d})]}),Object(u.jsxs)("label",{htmlFor:"week",children:["\xbfAbre entre semana?",Object(u.jsx)("input",{type:"checkbox",name:"week",id:"week",onChange:function(e){p(e.currentTarget.checked)},checked:h})]}),Object(u.jsxs)("label",{htmlFor:"weekend",children:["\xbfAbre los fines de semana?",Object(u.jsx)("input",{type:"checkbox",name:"weekend",id:"weekend",onChange:function(e){v(e.currentTarget.checked)},checked:x})]}),Object(u.jsx)("input",{onClick:function(e){e.preventDefault();var n={name:d,openOnWeekdays:h,openOnWeekend:x};a([].concat(Object(r.a)(t),[n])),j(""),p(!1),v(!1)},type:"submit",value:"A\xf1adir un nuevo club",className:"form__btn"})]})]})]})};s.a.render(Object(u.jsx)(b,{}),document.getElementById("root"))},6:function(e){e.exports=JSON.parse('[{"name":"Book club","openOnWeekdays":true,"openOnWeekend":true},{"name":"Chess club","openOnWeekdays":false,"openOnWeekend":true},{"name":"Escape room club","openOnWeekdays":false,"openOnWeekend":true},{"name":"Debate club","openOnWeekdays":true,"openOnWeekend":false}]')}},[[15,1,2]]]);
//# sourceMappingURL=main.310aa4c3.chunk.js.map