"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[937],{937:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var a=n(434),r=n(791),s=n(501),c=n(916),i=function(e){return e.contacts.items},u=function(e){return e.filter.query},o=function(e){return e.contacts.isLoading},l=function(e){return e.contacts.error},m=((0,c.P1)([i,u],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),n(439)),d={form:"ContactForm_form__dhl+T",input:"ContactForm_input__Bl93P",button:"ContactForm_button__eSwX9"},f=n(686),h=n.n(f),b=n(184);function _(){var e=(0,r.useState)(""),t=(0,m.Z)(e,2),n=t[0],c=t[1],u=(0,r.useState)(""),o=(0,m.Z)(u,2),l=o[0],f=o[1],_=(0,a.I0)(),p=(0,a.v9)(i);function v(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":c(a);break;case"number":f(a)}}var x=function(){c(""),f("")};return(0,b.jsxs)("form",{onSubmit:function(e){var t,a;e.preventDefault(),a=n,p.find((function(e){return e.name===a}))||(t=l,p.find((function(e){return e.number===t})))?h().Notify.failure("This contact is already in List"):(_((0,s.uK)({name:n,number:l})),x())},className:d.form,children:[(0,b.jsxs)("label",{className:d.label,children:["Name",(0,b.jsx)("input",{className:d.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:v,value:n})]}),(0,b.jsxs)("label",{className:d.label,children:["Number",(0,b.jsx)("input",{className:d.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:v,value:l})]}),(0,b.jsx)("button",{className:d.button,type:"submit",children:"ADD CONTACTS"})]})}var p="Filters_input__LL0Bh",v="Filters_label__8TKrw",x=n(21);function j(){var e=(0,a.I0)(),t=(0,a.v9)(u);return(0,b.jsxs)("label",{className:v,children:["Find contacts by name",(0,b.jsx)("input",{type:"text",name:"filter",onChange:function(t){e((0,x.zz)(t.currentTarget.value))},className:p,value:t})]})}var C=n(683),N="ContactsListItem_button__xdJ8H",w=function(e){var t=e.name,n=e.number,r=e.id,c=(0,a.I0)();return(0,b.jsxs)("li",{className:"contacts__item",children:[t,":",n,(0,b.jsx)("button",{type:"button",onClick:function(){return c((0,s.GK)(r))},className:N,children:"Delete"})]})},y={contacts__box:"ContactsList_contacts__box__NJ6IL"};function L(){var e=(0,a.v9)(i),t=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}(e,(0,a.v9)(u));return(0,b.jsx)("ul",{className:y.list,children:e&&t.map((function(e){return(0,b.jsx)(w,(0,C.Z)({},e),e.id)}))})}function k(){var e=(0,a.I0)(),t=(0,a.v9)(o),n=(0,a.v9)(l);return(0,r.useEffect)((function(){e((0,s.yF)())}),[e]),(0,b.jsxs)("div",{children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h1",{children:"Phonebook"}),(0,b.jsx)(_,{})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h2",{children:"Contacts"}),(0,b.jsx)(j,{}),t&&!n,(0,b.jsx)(L,{})]})]})}}}]);
//# sourceMappingURL=937.4ae38784.chunk.js.map