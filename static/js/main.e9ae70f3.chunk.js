(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{133:function(e,t){},134:function(e,t){},135:function(e,t){},136:function(e,t){},137:function(e,t){},153:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(17),s=n.n(i),r=(n(98),n(10)),l=n(208),j=n(209),o=n(155),d=n(199),b=n(84),h=n(211),u=n(210),O=n(14),x=n(24),p=(n(99),n(189)),m=n(195),f=n(196),g=n(197),v=n(215),y=n(3),w=Object(p.a)({chipStyle:{margin:"3px"},container:{display:"flex",width:"80%",flexWrap:"wrap",justifyContent:"center"}});var N=function(e){var t=e.data,n=w();return 0===t.length?Object(y.jsx)("h2",{children:"Cannot Render Skills"}):Object(y.jsx)("div",{className:n.container,children:t.map((function(e){return Object(y.jsx)(v.a,{className:n.chipStyle,label:e},e)}))})},C=n(193),E=n(154),S=n(194);var T=function(e){var t=e.data;return 0===t.length?Object(y.jsx)("h2",{children:"Cannot Render List"}):Object(y.jsx)("div",{children:Object(y.jsx)(C.a,{dense:!0,children:t.map((function(e){return Object(y.jsxs)(E.a,{children:[Object(y.jsx)(S.a,{}),Object(y.jsx)("span",{dangerouslySetInnerHTML:{__html:e}})]},e)}))})})},k=Object(p.a)({card:{width:"80%"},media:{height:"600px",flexGrow:1},container:{display:"flex",alignItems:"center",margin:"50px",marginTop:"100px",flexDirection:"column"}});var I=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)([]),s=Object(r.a)(i,2),l=s[0],j=s[1],o=k();return Object(c.useEffect)((function(){fetch("data/about.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){a(e);var t=e.filter((function(e){return"skills"===e.type}));j(t[0].data)})).catch((function(e){a([{type:"header",data:"Something went wrong"}])}))}),[]),Object(y.jsxs)("div",{className:o.container,children:[Object(y.jsxs)(m.a,{className:o.card,children:[Object(y.jsx)(f.a,{className:o.media,image:"images/het.jpg",title:"Het Jagani"}),Object(y.jsx)(g.a,{children:n.map((function(e,t){switch(e.type){case"header":return Object(y.jsx)("h1",{children:e.data},t);case"list":return Object(y.jsx)(T,{data:e.data},t);default:return""}}))})]}),Object(y.jsx)("h1",{children:"Skills & Technologies"}),Object(y.jsx)(N,{data:l})]})},A=n(200),L=n(201),M=n(202),R=n(26),_=n(85),D=n(198),W=n(212),B={name:"",email:"",subject:"",description:""},P=function(e,t){switch(t.type){case"SET_NAME":return Object(R.a)(Object(R.a)({},e),{},{name:t.value});case"SET_EMAIL":return Object(R.a)(Object(R.a)({},e),{},{email:t.value});case"SET_SUBJECT":return Object(R.a)(Object(R.a)({},e),{},{subject:t.value});case"SET_DESCRIPTION":return Object(R.a)(Object(R.a)({},e),{},{description:t.value});default:return e}};var z=function(){var e=Object(c.useState)(window.innerWidth),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),s=Object(r.a)(i,2),l=s[0],j=s[1],b=Object(_.a)("mjvargqp"),h=Object(r.a)(b,2),u=h[0],O=h[1],x=Object(p.a)({container:{display:"flex",justifyContent:"center",alignItems:"center",margin:"50px"},input:{margin:"10px",width:n/4}})(),m=Object(c.useReducer)(P,B),f=Object(r.a)(m,2),g=f[0],v=f[1];return Object(c.useEffect)((function(){var e=function(){a(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),u.succeeded?Object(y.jsxs)(o.a,{className:x.container,variant:"h2",children:["Thanks for contacting. ",Object(y.jsx)("br",{})," I'll get back to you soon."]}):Object(y.jsx)("div",{children:Object(y.jsxs)(D.a,{className:x.container,onSubmit:O,children:[""!==l&&Object(y.jsx)(o.a,{color:"error",children:l}),Object(y.jsx)(W.a,{className:x.input,required:!0,variant:"outlined",label:"Name",name:"name",value:g.name,onChange:function(e){return v({type:"SET_NAME",value:e.target.value})}}),Object(y.jsx)(W.a,{className:x.input,required:!0,variant:"outlined",label:"Email Address",name:"email",value:g.email,onChange:function(e){return v({type:"SET_EMAIL",value:e.target.value})}}),Object(y.jsx)(W.a,{className:x.input,required:!0,variant:"outlined",label:"Subject",name:"subject",value:g.subject,onChange:function(e){return v({type:"SET_SUBJECT",value:e.target.value})}}),Object(y.jsx)(W.a,{className:x.input,variant:"outlined",label:"Description",name:"description",multiline:!0,minRows:4,value:g.description,onChange:function(e){return v({type:"SET_DESCRIPTION",value:e.target.value})}}),Object(y.jsx)(d.a,{style:{width:"50%"},type:"submit",variant:"contained",color:"primary",onClick:function(){""!==g.name&&""!==g.email&&""!==g.subject||j("Please fill required fields."),O({name:g.name,email:g.email,subject:g.subject,description:g.description})},disabled:u.submitting,children:"SUBMIT"})]})})};var J=function(){var e=Object(p.a)({container:{display:"flex",margin:"20px",marginTop:"100px",justifyContent:"space-around",flexWrap:1},section:{display:"flex",justifyContent:"flex-start",alignItems:"center",flexDirection:"column"},social:{display:"flex",alignItems:"center"},spans:{margin:"15px"},icons:{fontSize:"50px"}})();return Object(y.jsxs)("div",{className:e.container,children:[Object(y.jsxs)("div",{className:e.section,children:[Object(y.jsx)(o.a,{variant:"h3",children:"Contact Me"}),Object(y.jsx)(z,{})]}),Object(y.jsxs)("div",{className:e.section,children:[Object(y.jsx)(o.a,{variant:"h3",style:{marginBottom:"50px"},children:"Social Media"}),Object(y.jsxs)("div",{className:e.social,children:[Object(y.jsx)("span",{className:e.spans,children:Object(y.jsx)(A.a,{className:e.icons})}),Object(y.jsx)("span",{className:e.spans,children:Object(y.jsx)("a",{href:"https://github.com/hetjagani",children:Object(y.jsx)(o.a,{variant:"body1",style:{fontWeight:"bold"},children:"Github"})})})]}),Object(y.jsxs)("div",{className:e.social,children:[Object(y.jsx)("span",{className:e.spans,children:Object(y.jsx)(L.a,{color:"primary",className:e.icons})}),Object(y.jsx)("span",{className:e.spans,children:Object(y.jsx)("a",{href:"https://twitter.com/jagani_het",children:Object(y.jsx)(o.a,{variant:"body1",style:{fontWeight:"bold"},children:"Twitter"})})})]}),Object(y.jsxs)("div",{className:e.social,children:[Object(y.jsx)("span",{className:e.spans,children:Object(y.jsx)(M.a,{color:"primary",className:e.icons})}),Object(y.jsx)("span",{className:e.spans,children:Object(y.jsx)("a",{href:"https://www.linkedin.com/in/het-jagani-225705142",children:Object(y.jsx)(o.a,{variant:"body1",style:{fontWeight:"bold"},children:"LinkedIN"})})})]}),Object(y.jsxs)("div",{className:e.social,children:[Object(y.jsx)("span",{className:e.spans,children:Object(y.jsx)("span",{class:"iconify","data-icon":"mdi:stack-overflow",style:{color:"orange",height:"50px",width:"50px"}})}),Object(y.jsx)("span",{className:e.spans,children:Object(y.jsx)("a",{href:"https://stackoverflow.com/users/7833624/het-jagani",children:Object(y.jsx)(o.a,{variant:"body1",style:{fontWeight:"bold"},children:"Stack Overflow"})})})]})]})]})},G=Object(p.a)({card:{width:"80%",margin:"20px"},media:{height:"300px",flexGrow:1}});var U=function(e){var t=e.data,n=G();return void 0===t?Object(y.jsx)("div",{children:"Something went wrong..."}):Object(y.jsx)(a.a.Fragment,{children:Object(y.jsxs)(m.a,{className:n.card,children:[Object(y.jsx)(f.a,{className:n.media,image:t.image,title:t.company}),Object(y.jsxs)(g.a,{children:[Object(y.jsx)("h1",{children:t.company}),Object(y.jsx)("b",{children:"Position: "}),t.position," ",Object(y.jsx)("br",{}),Object(y.jsx)("b",{children:"Duration: "}),t.duration," ",Object(y.jsx)("br",{}),Object(y.jsx)("b",{children:"Description: "}),Object(y.jsx)("span",{dangerouslySetInnerHTML:{__html:t.description}})]})]})})},F=Object(p.a)({card:{width:"80%"},media:{height:"600px",flexGrow:1},container:{display:"flex",alignItems:"center",margin:"50px",marginTop:"100px",flexDirection:"column"}});var q=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],i=F();return Object(c.useEffect)((function(){fetch("data/experience.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e),a(e)})).catch((function(e){a(["Something went wrong"])}))}),[]),Object(y.jsx)("div",{className:i.container,children:n.map((function(e){return Object(y.jsx)(U,{data:e},e.duration)}))})},H=n(207),X=n(4),K=n(7),Q=n(206),V=n(214),Y=n(203),Z=n(204),$=n(205),ee=["children","classes","onClose"],te=Object(p.a)((function(e){return{card:{width:"32%",margin:"10px",xs:"4"},media:{height:"300px",flexGrow:1},grid:{width:"85%"},root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}));var ne=function(e){var t=e.id,n=e.data,c=te(),i=a.a.useState(!1),s=Object(r.a)(i,2),l=s[0],j=s[1],b=function(){j(!1)},h=Object(K.a)(te)((function(e){var t=e.children,n=e.classes,c=(e.onClose,Object(X.a)(e,ee));return Object(y.jsx)(Y.a,Object(R.a)(Object(R.a)({disableTypography:!0,className:n.root},c),{},{children:Object(y.jsx)(o.a,{variant:"h4",children:t})}))})),u=Object(K.a)((function(e){return{root:{padding:e.spacing(2)}}}))(Z.a),O=Object(K.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))($.a);return Object(y.jsx)(a.a.Fragment,{children:Object(y.jsxs)(m.a,{className:c.card,children:[Object(y.jsx)(f.a,{className:c.media,image:n.image,title:n.title}),Object(y.jsx)(g.a,{children:Object(y.jsx)("strong",{children:n.title})}),Object(y.jsx)(Q.a,{children:Object(y.jsx)(d.a,{color:"primary",onClick:function(){j(!0)},children:"MORE DETAILS"})}),Object(y.jsxs)(V.a,{onClose:b,"aria-labelledby":"customized-dialog-title",open:l,maxWidth:"lg",children:[Object(y.jsx)(h,{id:"customized-dialog-title",onClose:b,children:n.title}),Object(y.jsx)(u,{dividers:!0,children:Object(y.jsx)("div",{dangerouslySetInnerHTML:{__html:n.description}})}),Object(y.jsx)(O,{children:Object(y.jsx)(d.a,{onClick:b,color:"primary",children:"Close"})})]},t)]},t)})},ce=Object(p.a)((function(e){return{container:{display:"flex",margin:"20px",marginTop:"100px",justifyContent:"center"},grid:{width:"85%"}}}));var ae=function(){var e=ce(),t=Object(c.useState)({}),n=Object(r.a)(t,2),a=n[0],i=n[1];return Object(c.useEffect)((function(){fetch("data/projects.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(Object.keys(e)),i(e)})).catch((function(e){i([{type:"header",data:"Something went wrong"}])}))}),[]),Object(y.jsx)("div",{className:e.container,children:Object(y.jsx)(H.a,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center",className:e.grid,children:Object.keys(a).map((function(e){return Object(y.jsx)(ne,{data:a[e],id:e},e)}))})})},ie=n(57);n(138);ie.c.GlobalWorkerOptions.workerSrc="pdf.worker.js";var se=Object(p.a)({container:{display:"flex",justifyContent:"center",alignItems:"center",margin:"50px",marginTop:"100px",flexDirection:"column"},link:{color:"white",textDecoration:"none"}});var re=function(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),n=t[0],a=t[1],i=se();return Object(c.useEffect)((function(){var e=function(){a(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),Object(y.jsxs)("div",{className:i.container,children:[Object(y.jsx)(ie.a,{file:"documents/Resume.pdf",children:Object(y.jsx)(ie.b,{width:n>1200?n/3:n/1.2,pageNumber:1})}),Object(y.jsx)(d.a,{variant:"contained",color:"primary",children:Object(y.jsx)("a",{className:i.link,href:"documents/Resume.pdf",children:"DOWNLOAD"})})]})};var le=function(){var e=Object(c.useState)(window.innerWidth),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(null),s=Object(r.a)(i,2),p=s[0],m=s[1];Object(c.useEffect)((function(){var e=function(){a(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);var f=function(){m(null)};return Object(y.jsx)("div",{className:"App",children:Object(y.jsxs)(x.a,{children:[Object(y.jsx)(l.a,{position:"fixed",style:{width:n},children:Object(y.jsxs)(j.a,{style:{display:"flex",justifyContent:"space-between"},children:[Object(y.jsx)("div",{children:Object(y.jsx)(o.a,{variant:"h5",children:Object(y.jsx)(x.b,{class:"btn-link",to:"/",children:"HET JAGANI"})})}),n>1e3?Object(y.jsxs)("div",{children:[Object(y.jsx)(d.a,{color:"inherit",children:Object(y.jsx)(x.b,{class:"btn-link",to:"/about",children:"ABOUT"})}),Object(y.jsx)(d.a,{color:"inherit",children:Object(y.jsx)(x.b,{class:"btn-link",to:"/projects",color:"inherit",children:"PROJECTS"})}),Object(y.jsx)(d.a,{color:"inherit",children:Object(y.jsx)(x.b,{class:"btn-link",to:"/experience",children:"EXPERIENCE"})}),Object(y.jsx)(d.a,{color:"inherit",children:Object(y.jsx)(x.b,{class:"btn-link",to:"/contact",children:"CONTACT"})}),Object(y.jsx)(d.a,{color:"inherit",children:Object(y.jsx)(x.b,{class:"btn-link",to:"/resume",children:"RESUME"})})]}):Object(y.jsxs)("div",{children:[Object(y.jsx)(d.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){m(e.currentTarget)},children:Object(y.jsx)(u.a,{})}),Object(y.jsxs)(b.a,{id:"simple-menu",anchorEl:p,keepMounted:!0,open:Boolean(p),onClose:f,children:[Object(y.jsx)(h.a,{onClick:f,children:Object(y.jsx)(x.b,{class:"menu-link",to:"/about",children:"ABOUT"})}),Object(y.jsx)(h.a,{onClick:f,children:Object(y.jsx)(x.b,{class:"menu-link",to:"/projects",children:"PROJECTS"})}),Object(y.jsx)(h.a,{onClick:f,children:Object(y.jsx)(x.b,{class:"menu-link",to:"/experience",children:"EXPERIENCE"})}),Object(y.jsx)(h.a,{onClick:f,children:Object(y.jsx)(x.b,{class:"menu-link",to:"/contact",children:"CONTACT"})}),Object(y.jsx)(h.a,{onClick:f,children:Object(y.jsx)(x.b,{class:"menu-link",to:"/resume",children:"RESUME"})})]})]})]})}),Object(y.jsxs)(O.c,{children:[Object(y.jsx)(O.a,{exact:!0,path:"/",children:Object(y.jsx)(I,{})}),Object(y.jsx)(O.a,{path:"/about",children:Object(y.jsx)(I,{})}),Object(y.jsx)(O.a,{path:"/projects",children:Object(y.jsx)(ae,{})}),Object(y.jsx)(O.a,{path:"/experience",children:Object(y.jsx)(q,{})}),Object(y.jsx)(O.a,{path:"/contact",children:Object(y.jsx)(J,{})}),Object(y.jsx)(O.a,{path:"/resume",children:Object(y.jsx)(re,{})})]})]})})},je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,217)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(le,{})}),document.getElementById("root")),je()},74:function(e,t){},98:function(e,t,n){},99:function(e,t,n){}},[[153,1,2]]]);
//# sourceMappingURL=main.e9ae70f3.chunk.js.map