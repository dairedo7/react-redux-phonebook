(this["webpackJsonpreact-redux-phonebook"]=this["webpackJsonpreact-redux-phonebook"]||[]).push([[0],{12:function(e,t,n){e.exports={contact__item:"ContactItem_contact__item__1zKL-",contact__text:"ContactItem_contact__text__3MtWr",delete__btn:"ContactItem_delete__btn__2EDGc"}},15:function(e,t,n){e.exports={filter__field:"Filter_filter__field__FWY-Z"}},17:function(e,t,n){},20:function(e,t,n){e.exports={list:"ContactList_list__2T7aG"}},33:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(9),o=n.n(r),s=n(4),i=n(19),l=(n(17),n(22)),b=n(5),u=n(16),d=n(7),m=n.n(d),j=n(1);var _=function(e){var t=e.changeContactsState,n=Object(a.useState)(""),c=Object(u.a)(n,2),r=c[0],o=c[1],s=Object(a.useState)(""),i=Object(u.a)(s,2),l=i[0],d=i[1],_=function(e){var t=e.target,n=t.name,a=t.value;"name"===n&&o(a),"number"===n&&d(a),console.log(Object(b.a)({},n,a))};return Object(j.jsxs)("form",{className:m.a.form,onSubmit:function(e){e.preventDefault(),t({name:r,number:l}),o(""),d("")},action:"#",children:[Object(j.jsx)("label",{className:m.a.label,htmlFor:"name",children:"Name:"}),Object(j.jsx)("input",{className:m.a.form__field,type:"text",id:"name",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Enter your name",value:r,onChange:_,required:!0}),Object(j.jsx)("label",{className:m.a.label,htmlFor:"number",children:"Number:"}),Object(j.jsx)("input",{className:m.a.form__field,type:"tel",id:"number",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"Enter your number",value:l,onChange:_,required:!0}),Object(j.jsx)("button",{className:m.a.submit__btn,type:"submit",children:"Add contact"})]})},f=n(12),h=n.n(f);function O(e){var t=e.contact,n=e.deleteContact,a=t.name,c=t.number,r=t.id;return Object(j.jsxs)("li",{className:h.a.contact__item,children:[Object(j.jsxs)("span",{className:h.a.contact__text,children:[a,": ",c]}),Object(j.jsx)("button",{className:h.a.delete__btn,onClick:function(){return n(r)},children:"Delete"})]},r)}var p=n(20),x=n.n(p),C=n(3),v=Object(C.b)("contacts/add"),g=Object(C.b)("contacts/delete"),N=function(e){return e.contacts.filter},F=function(e){return e.contacts.items},y=function(e){var t=F(e),n=N(e);return t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))};function k(){var e=Object(s.c)(y),t=Object(s.b)(),n=function(e){return t(g(e))};return Object(j.jsx)("ul",{className:x.a.list,children:e.map((function(e){return Object(j.jsx)(O,{contact:e,deleteContact:n},e.name)}))})}var w=n(15),L=n.n(w),S=Object(C.b)("contacts/updateFilter");function A(){var e=Object(s.c)(N),t=Object(s.b)();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{className:L.a.filter__title,children:"Find contacts by name"}),Object(j.jsx)("input",{className:L.a.filter__field,type:"text",name:"name",value:e,placeholder:"Enter the name...",onChange:function(e){var n=e.target.value;return t(S(n))}})]})}function z(){var e=Object(s.c)(F),t=Object(s.b)();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"code__title",children:Object(j.jsx)("a",{className:"code__link",href:"https://github.com/dairedo7/react-assignment-phonebook",children:"Project's original code"})}),Object(j.jsxs)("div",{className:"phonebook__container",children:[Object(j.jsx)("h1",{className:"phonebook__title",children:"Phonebook"}),Object(j.jsx)(_,{changeContactsState:function(n){var a=n.name,c=n.number;if(e.find((function(e){return e.name.toLowerCase()===a.toLowerCase()})))return alert("".concat(a," is already in contacts list!"));t(v({id:Object(l.a)(),name:a,number:c}))}}),Object(j.jsx)("h2",{className:"contacts__title",children:"Contacts"}),Object(j.jsx)(A,{}),Object(j.jsx)(k,{})]})]})}var E,I=n(11),P=n(2),Z=n(6),D=n(21),T=n.n(D),B=Object(C.c)([],(E={},Object(b.a)(E,v,(function(e,t){var n=t.payload;return[].concat(Object(I.a)(e),[n])})),Object(b.a)(E,g,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),E)),J=Object(C.c)("",Object(b.a)({},S,(function(e,t){return t.payload}))),M={key:"contacts",storage:T.a,whitelist:["items"]},q=Object(I.a)(Object(C.d)({serializableCheck:{ignoredActions:[Z.a,Z.f,Z.b,Z.c,Z.d,Z.e]}})),G=Object(P.b)({items:B,filter:J}),W=Object(C.a)({reducer:{contacts:Object(Z.g)(M,G)},middleware:q,devTools:!1}),K=Object(Z.h)(W),X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(s.a,{store:W,children:Object(j.jsx)(i.a,{loading:null,persistor:K,children:Object(j.jsx)(z,{})})})}),document.getElementById("root")),X()},7:function(e,t,n){e.exports={form:"ContactForm_form__1fuOn",submit__btn:"ContactForm_submit__btn__5jZrS",label:"ContactForm_label__378f8",form__field:"ContactForm_form__field__X0wix"}}},[[33,1,2]]]);
//# sourceMappingURL=main.bf2c993c.chunk.js.map