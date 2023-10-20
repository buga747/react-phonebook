"use strict";(self.webpackChunkreact_phonebook=self.webpackChunkreact_phonebook||[]).push([[933],{3309:function(n,e,t){t.d(e,{Dr:function(){return x},II:function(){return p},__:function(){return l},l0:function(){return d},zx:function(){return m}});var o,r,i,a,c,s=t(168),u=t(7691),d=u.ZP.form(o||(o=(0,s.Z)(["\n  background-color: ",";\n  color: ",";\n  padding: 10px;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  justify-content: center;\n  margin: 0 auto;\n  box-shadow: 0px 0px 19px 0px rgba(69, 162, 158, 1);\n  border-radius: 10px;\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n    align-items: flex-end;\n  }\n"])),(function(n){return n.theme.colors.backgroundColors}),(function(n){return n.theme.colors.colorText})),l=u.ZP.label(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),x=u.ZP.span(i||(i=(0,s.Z)(["\n  margin-bottom: 2px;\n  font-weight: 600;\n"]))),p=u.ZP.input(a||(a=(0,s.Z)(["\n  color: ",";\n  border: 1px solid ",";\n  padding: 8px;\n  padding-left: 16px;\n  border-radius: 8px;\n\n  &:active,\n  &:focus {\n    outline: transparent;\n  }\n"])),(function(n){return n.theme.colors.btn\u0421olorText}),(function(n){return n.theme.colors.white})),m=u.ZP.button(c||(c=(0,s.Z)(["\n  display: block;\n  min-width: 130px;\n  height: 35px;\n  color: ",";\n  background-color: ",";\n  border-radius: 20px;\n  padding: 7px 10px;\n  border: 0;\n  font-size: 18px;\n  transition: box-shadow 250ms ease, transform 250ms ease;\n  cursor: pointer;\n  &:hover {\n    transform: scale(1.05);\n    box-shadow: ",";\n  }\n"])),(function(n){return n.theme.colors.btn\u0421olorText}),(function(n){return n.theme.colors.colorElement}),(function(n){return n.theme.boxShadow}))},1076:function(n,e,t){t.d(e,{k:function(){return s}});var o=t(1413),r=t(2007),i=t.n(r),a=t(3309),c=t(184),s=function(n){return(0,c.jsx)(a.II,(0,o.Z)({},n))};s.protoType={props:i().object.isRequired}},3933:function(n,e,t){t.r(e),t.d(e,{default:function(){return Tn}});var o,r,i,a,c,s,u,d,l,x,p,m,h,f,b,g,w,Z,v,j,k,y,P,C,z=t(2791),E=t(168),I=t(7691),T=I.ZP.div(o||(o=(0,E.Z)(["\n  padding: 20px 20px;\n"]))),S=I.ZP.div(r||(r=(0,E.Z)(["\n  margin-top: 12px;\n  box-shadow: 0px 0px 19px 0px rgba(69, 162, 158, 1);\n  padding: 10px;\n  border-radius: 10px;\n  text-align: center;\n"]))),_=t(4942),D=t(1413),L=t(9439),q=t(948),A=t(3309),F=t(1076),N=t(5206),H=t(9434),B=t(6916),K=function(n){return n.contacts.isLoading},U=function(n){return n.contacts.error},G=(0,B.P1)([function(n){return n.contacts.items},function(n){return n.filter}],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),R=t(3634),Y=t(184),J=function(n){var e=n.text,t=(0,H.I0)(),o=(0,H.v9)(G),r=(0,z.useState)({name:"",number:""}),i=(0,L.Z)(r,2),a=i[0],c=i[1],s=function(n){c((function(e){return(0,D.Z)((0,D.Z)({},e),{},(0,_.Z)({},n.target.name,n.target.value))}))};return(0,Y.jsxs)(A.l0,{onSubmit:function(n){n.preventDefault();var e=n.currentTarget.name.value.trim(),r=n.currentTarget.number.value.trim();e&&(r&&(o.some((function(n){return n.name===e}))?N.Am.error("".concat(e," is already in the list")):o.some((function(n){return n.number===r}))?N.Am.error("".concat(r," is already in the list")):(t((0,R.uK)(a)),N.Am.success("Contact added. \u2705"),c({name:"",number:""}))))},children:[(0,Y.jsxs)(A.__,{children:[(0,Y.jsx)(A.Dr,{children:"Name"}),(0,Y.jsx)(F.k,{onChange:s,type:"text",name:"name",title:"Contact name",value:a.name,required:!0})]}),(0,Y.jsxs)(A.__,{children:[(0,Y.jsx)(A.Dr,{children:"Number"}),(0,Y.jsx)(q.HH,{customInput:A.II,value:a.number,format:"+38 (###)-###-##-##",allowEmptyFormatting:!0,mask:"_",onChange:s,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,Y.jsx)(A.zx,{type:"submit",children:e})]})},M=I.ZP.div(i||(i=(0,E.Z)(["\n  background-color: ",";\n  color: ",";\n  padding: 10px 20px;\n  display: inline-block;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  text-align: center;\n"])),(function(n){return n.theme.colors.backgroundColors}),(function(n){return n.theme.colors.colorText})),O=I.ZP.span(a||(a=(0,E.Z)(["\n  display: block;\n  font-size: 20px;\n  margin-bottom: 10px;\n\n  @media (min-width: 768px) {\n    margin-right: 10px;\n  }\n"]))),Q=I.ZP.input(c||(c=(0,E.Z)(["\n  color: ",";\n  border: 1px solid ",";\n  padding: 8px;\n  padding-left: 16px;\n  border-radius: 8px;\n\n  &:active,\n  &:focus {\n    outline: transparent;\n  }\n"])),(function(n){return n.theme.colors.btn\u0421olorText}),(function(n){return n.theme.colors.white})),V=t(1273),W=function(){var n=(0,H.v9)((function(n){return n.filter})),e=(0,H.I0)();return(0,Y.jsx)(M,{children:(0,Y.jsxs)("label",{children:[(0,Y.jsx)(O,{children:"Find contacts by name:"}),(0,Y.jsx)(Q,{type:"text",value:n,onChange:function(n){e((0,V.x)(n.target.value))}})]})})},X=t(4816),$=I.ZP.div(s||(s=(0,E.Z)(["\n  position: relative;\n  margin-top: 12px;\n  box-shadow: 0px 0px 19px 0px rgba(69, 162, 158, 1);\n  padding: 10px;\n  border-radius: 10px;\n  min-height: 300px;\n"]))),nn=I.ZP.ul(u||(u=(0,E.Z)(["\n  position: relative;\n  gap: 10px;\n  border-radius: 10px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]))),en=I.ZP.p(d||(d=(0,E.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: ",";\n  font-size: 40px;\n  text-align: center;\n  background-color: ",";\n  padding: 20px 30px;\n  border-radius: 10px;\n  box-shadow: ",";\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.backgroundColors}),(function(n){return n.theme.sectionShadow})),tn=t(9126),on=I.ZP.li(l||(l=(0,E.Z)(["\n  color: ",";\n  background-color: ",";\n  font-weight: 700;\n  font-style: italic;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  padding: 10px 10px;\n  border-radius: 10px;\n  transition: box-shadow 250ms ease, transform 250ms ease;\n  width: 260px;\n\n  padding: 5px;\n  &:hover {\n    transform: scale(1.05);\n    box-shadow: ",";\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.backgroundColors}),(function(n){return n.theme.sectionShadow})),rn=I.ZP.div(x||(x=(0,E.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n"]))),an=I.ZP.div(p||(p=(0,E.Z)(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n"]))),cn=I.ZP.div(m||(m=(0,E.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-left: auto;\n"]))),sn=I.ZP.span(h||(h=(0,E.Z)(["\n  font-weight: 500;\n"]))),un=I.ZP.button(f||(f=(0,E.Z)(["\n  color: ",";\n  background-color: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n  padding: 3px 3px;\n  border: 0;\n  transition: box-shadow 250ms ease, transform 250ms ease;\n  cursor: pointer;\n\n  &:hover {\n    transform: scale(1.1);\n    box-shadow: ",";\n  }\n"])),(function(n){return n.theme.colors.btn\u0421olorText}),(function(n){return n.theme.colors.colorElement}),(function(n){return n.theme.sectionShadow})),dn=t(4217),ln=t(4164),xn=t(5541),pn=I.ZP.form(b||(b=(0,E.Z)(["\n  background-color: ",";\n  color: ",";\n  max-width: 360px;\n  padding: 10px;\n  border-radius: 10px;\n  display: flex;\n  align-items: flex-end;\n  flex-direction: column;\n  box-shadow: 0px 0px 19px 0px rgba(69, 162, 158, 1);\n  border-radius: 10px;\n\n  @media (min-width: 400px) {\n    width: 300px;\n  }\n"])),(function(n){return n.theme.colors.backgroundColors}),(function(n){return n.theme.colors.colorText})),mn=I.ZP.label(g||(g=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n  width: 100%;\n"]))),hn=I.ZP.span(w||(w=(0,E.Z)(["\n  margin-bottom: 3px;\n"]))),fn=I.ZP.input(Z||(Z=(0,E.Z)(["\n  color: ",";\n  border: 1px solid ",";\n  padding: 8px;\n  padding-left: 16px;\n  border-radius: 8px;\n\n  &:active,\n  &:focus {\n    outline: transparent;\n  }\n"])),(function(n){return n.theme.colors.btn\u0421olorText}),(function(n){return n.theme.colors.white})),bn=I.ZP.button(v||(v=(0,E.Z)(["\n  display: block;\n  min-width: 130px;\n  height: 35px;\n  margin-left: auto;\n  margin-right: auto;\n  cursor: pointer;\n  background-color: ",";\n  border-radius: 20px;\n  padding: 7px 10px;\n  border: 0;\n  font-size: 18px;\n  transition: box-shadow 250ms ease, transform 250ms ease;\n  &:hover {\n    transform: scale(1.1);\n    box-shadow: ",";\n  }\n"])),(function(n){return n.theme.colors.colorElement}),(function(n){return n.theme.sectionShadow})),gn=(I.ZP.form(j||(j=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 auto;\n  max-width: 400px;\n"]))),(0,I.ZP)(xn.Z)(k||(k=(0,E.Z)(["\n  && {\n    margin-bottom: 20px;\n    width: 100%;\n  }\n"]))),function(n){var e=n.modalClose,t=n.contact,o=(0,H.I0)(),r=(0,z.useState)(t),i=(0,L.Z)(r,2),a=i[0],c=i[1],s=function(n){console.log(a),c((function(e){return(0,D.Z)((0,D.Z)({},e),{},(0,_.Z)({},n.target.name,n.target.value))}))};return(0,Y.jsxs)(pn,{onSubmit:function(n){n.preventDefault(),o((0,R.o1)(a)),e()},children:[(0,Y.jsxs)(mn,{children:[(0,Y.jsx)(hn,{children:"Name"}),(0,Y.jsx)(F.k,{value:a.name,onChange:s,type:"text",name:"name",required:!0,title:"Enter contact name"})]}),(0,Y.jsxs)(mn,{children:[(0,Y.jsx)(hn,{children:"Number"}),(0,Y.jsx)(q.HH,{customInput:fn,format:"+38 (###)-###-##-##",allowEmptyFormatting:!0,mask:"_",value:a.number,onChange:s,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,Y.jsx)(bn,{type:"submit",children:"Save"})]})}),wn=I.ZP.div(y||(y=(0,E.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),Zn=I.ZP.div(P||(P=(0,E.Z)(["\n  position: relative;\n  background-color: white;\n  padding: 20px 15px;\n  max-width: 700px;\n  max-height: 300px;\n  background-color: ",";\n  border-radius: 10px;\n  box-shadow: ",";\n"])),(function(n){return n.theme.colors.backgroundColors}),(function(n){return n.theme.sectionShadow})),vn=I.ZP.button(C||(C=(0,E.Z)(["\n  cursor: pointer;\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: ",";\n  border: 1px solid ",";\n  color: black;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    border 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &::before {\n    content: '';\n    position: absolute;\n    background-color: black;\n    left: 50%;\n    top: 50%;\n    width: 13px;\n    height: 2px;\n    transform: translate(-50%, -50%) rotate(-45deg);\n    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  &::after {\n    content: '';\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    background-color: black;\n\n    width: 13px;\n    height: 2px;\n    transform: translate(-50%, -50%) rotate(45deg);\n    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  &:hover,\n  &:focus {\n    border: 1px solid ",";\n    box-shadow: ",";\n\n    transform: scale(1.2);\n    &::after,\n    &::before {\n      background-color: black;\n    }\n  }\n"])),(function(n){return n.theme.colors.colorElement}),(function(n){return n.theme.colors.colorElement}),(function(n){return n.theme.colors.backgroundColors}),(function(n){return n.theme.sectionShadow})),jn=function(n){var e=n.onClose,t=n.contact,o=function(n){"Escape"===n.code&&e()};return(0,z.useEffect)((function(){return window.addEventListener("keydown",o),function(){window.removeEventListener("keydown",o)}})),(0,ln.createPortal)((0,Y.jsx)(wn,{onClick:function(n){n.target===n.currentTarget&&e()},children:(0,Y.jsxs)(Zn,{children:[(0,Y.jsx)(vn,{title:"Close modal",onClick:e}),(0,Y.jsx)(gn,{text:"Update contact",modalClose:e,contact:t})]})}),document.getElementById("modal-root"))};function kn(n){var e=n.contact,t=(0,z.useState)(!1),o=(0,L.Z)(t,2),r=o[0],i=o[1],a=(0,H.I0)(),c=(0,H.v9)(dn.xU);return(0,Y.jsxs)(on,{children:[(0,Y.jsxs)(rn,{children:[(0,Y.jsx)(tn._Tb,{}),(0,Y.jsxs)(sn,{children:[e.name," "]})]}),(0,Y.jsxs)(an,{children:[(0,Y.jsx)(sn,{children:e.number}),(0,Y.jsxs)(cn,{children:[(0,Y.jsx)(un,{type:"button",disabled:c,onClick:function(){return e.id,void i(!0)},title:"Change contact",children:(0,Y.jsx)(tn.bBN,{})}),(0,Y.jsx)(un,{type:"button",disabled:c,onClick:function(){return n=e.id,a((0,R.GK)(n)),void N.Am.info("Contact deleted. \u2705 ");var n},title:"Delete contact",children:(0,Y.jsx)(tn.yvY,{})})]})]}),r&&(0,Y.jsx)(jn,{onClose:function(){i((function(n){return!n}))},contact:e})]})}var yn,Pn=function(){var n=(0,H.v9)(G),e=(0,H.I0)();(0,z.useEffect)((function(){e((0,R.yF)())}),[e]);var t=(0,H.v9)(K),o=(0,H.v9)(U);return(0,Y.jsx)($,{children:(0,Y.jsxs)(nn,{children:[t&&(0,Y.jsx)(X.g,{visible:t}),o&&(0,Y.jsx)(en,{children:o}),n.map((function(n){return(0,Y.jsx)(kn,{contact:n},n.id)}))]})})},Cn=I.ZP.h2(yn||(yn=(0,E.Z)(["\n  color: ",";\n  margin-bottom: 10px;\n  margin-top: 0;\n  text-align: center;\n  font-size: 34px;\n"])),(function(n){return n.theme.colors.colorText})),zn=function(n){var e=n.title;return(0,Y.jsx)(Cn,{children:e})},En=function(){return(0,Y.jsxs)(T,{children:[(0,Y.jsx)(zn,{title:"Phonebook"}),(0,Y.jsx)(J,{text:"Add contact"}),(0,Y.jsxs)(S,{children:[(0,Y.jsx)(zn,{title:"Contacts"}),(0,Y.jsx)(W,{})]}),(0,Y.jsx)(Pn,{})]})},In=t(3982),Tn=function(){var n=(0,In.a)().isLoading;return(0,Y.jsxs)(Y.Fragment,{children:[n&&(0,Y.jsx)(X.x,{}),(0,Y.jsx)(En,{})]})}}}]);
//# sourceMappingURL=933.fa8d210e.chunk.js.map