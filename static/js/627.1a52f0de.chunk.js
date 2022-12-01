"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[627],{627:function(n,e,t){t.r(e),t.d(e,{default:function(){return L}});var r,i=t(885),l=t(639),o=t(115),a=t(712),u=t(791),d=t(731),f=t(168),s=t(444),c=["title","titleId"];function p(){return p=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},p.apply(this,arguments)}function h(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},l=Object.keys(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function x(n,e){var t=n.title,i=n.titleId,l=h(n,c);return u.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",ref:e,"aria-labelledby":i},l),t?u.createElement("title",{id:i},t):null,r||(r=u.createElement("path",{d:"M 19 3 C 13.488281 3 9 7.488281 9 13 C 9 15.394531 9.839844 17.589844 11.25 19.3125 L 3.28125 27.28125 L 4.71875 28.71875 L 12.6875 20.75 C 14.410156 22.160156 16.605469 23 19 23 C 24.511719 23 29 18.511719 29 13 C 29 7.488281 24.511719 3 19 3 Z M 19 5 C 23.429688 5 27 8.570313 27 13 C 27 17.429688 23.429688 21 19 21 C 14.570313 21 11 17.429688 11 13 C 11 8.570313 14.570313 5 19 5 Z"})))}var g,v,y,w,Z,b,m,j=u.forwardRef(x),C=(t.p,s.ZP.header(g||(g=(0,f.Z)(["\n  display: flex;\n  background-color: #2194f2;\n  padding: 16px 40px;\n  width: 100%;\n"])))),O=s.ZP.form(v||(v=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),P=s.ZP.button(y||(y=(0,f.Z)(["\n  display: inline-flex;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  align-items: center;\n  justify-content: center;\n  opacity: 0.6;\n\n  :hover {\n    opacity: 1;\n  }\n"]))),k=(0,s.ZP)(j)(w||(w=(0,f.Z)(["\n  width: 26px;\n  height: 28px;\n  fill: var(--text);\n"]))),_=s.ZP.input(Z||(Z=(0,f.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),S=t(184),E=function(){var n=(0,d.lr)(),e=(0,i.Z)(n,2),t=e[0],r=e[1],l=t.get("query"),o=(0,u.useState)(null!==l&&void 0!==l?l:""),a=(0,i.Z)(o,2),f=a[0],s=a[1];return(0,S.jsx)(C,{children:(0,S.jsxs)(O,{onSubmit:function(n){n.preventDefault(),r(""!==f?{query:f}:{})},children:[(0,S.jsx)(P,{type:"submit",children:(0,S.jsx)(k,{})}),(0,S.jsx)(_,{type:"text",name:"query",value:f,autocomplete:"off",autoFocus:!0,placeholder:"Search films",onChange:function(n){s(n.target.value)}})]})})},q=t(901),N=t(390),F=s.ZP.div(b||(b=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  max-width: 1340px;\n  width: 100%;\n  margin: 0 auto;\n"]))),I=s.ZP.div(m||(m=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  gap: 26px;\n  padding: 20px 40px;\n"]))),L=function(){var n,e=(0,u.useState)([]),t=(0,i.Z)(e,2),r=t[0],f=t[1],s=(0,u.useState)(!1),c=(0,i.Z)(s,2),p=c[0],h=c[1],x=(0,u.useState)(""),g=(0,i.Z)(x,2),v=g[0],y=g[1],w=(0,d.lr)(),Z=null!==(n=(0,i.Z)(w,1)[0].get("query"))&&void 0!==n?n:"",b=(0,u.useCallback)((function(n){(0,N.Ph)(n).then((function(n){0===n.results.length&&y("Nothing found"),f(n.results),h(!1)})).catch((function(n){return y(n.message)})).finally(h(!1))}),[]),m=(0,q.i)(b),j=(0,i.Z)(m,3),C=j[0],O=j[1],P=j[2];return(0,u.useEffect)((function(){""!==Z&&(h(!0),C(Z))}),[C,Z]),O||p?(0,S.jsx)(l.a,{}):P?(0,S.jsx)(a.NotFound,{text:"An error occturred, please try again"}):0===(null===r||void 0===r?void 0:r.length)&&v?(0,S.jsx)(a.NotFound,{text:"Nothing found"}):(0,S.jsxs)(F,{children:[(0,S.jsx)(E,{}),(0,S.jsx)(I,{children:null===r||void 0===r?void 0:r.map((function(n){var e=n.title,t=n.id,r=n.poster_path;return(0,S.jsx)(o.Z,{title:e,id:t,url:r},t)}))})]})}}}]);
//# sourceMappingURL=627.1a52f0de.chunk.js.map