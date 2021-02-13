(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],{146:function(e,t,a){},151:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a(10),n=a.n(s),c=a(12),o=a(36),i=a(39),l=(a(146),a(194)),u=a(199),d=a(200),m=a(153),j=a(195),b=a(92),p=a.n(b),h=a(88),g=a.n(h),x=a(4),O=function(e){var t=e.chatId,a=e.creds,s=Object(r.useState)(""),n=Object(o.a)(s,2),c=n[0],l=n[1],u=function(e){e.preventDefault();var r=c.trim();r.length>0&&Object(i.i)(a,t,{text:r}),l("")};return Object(x.jsxs)("form",{className:"message-form",onSubmit:u,children:[Object(x.jsx)("input",{className:"message-input",type:"text",placeholder:"Type a Message...",value:c,onChange:function(a){l(a.target.value),Object(i.f)(e,t)},onSubmit:u}),Object(x.jsx)("label",{htmlFor:"upload-button",children:Object(x.jsx)("span",{className:"image-button",children:Object(x.jsx)(g.a,{className:"picture-icon"})})}),Object(x.jsx)("input",{type:"file",id:"upload-button",multiple:!1,style:{display:"none"},onChange:function(e){Object(i.i)(a,t,{files:e.target.files,text:""})}}),Object(x.jsx)("button",{type:"submit",className:"send-button",children:Object(x.jsx)(p.a,{className:"send-icon"})})]})},f=function(e){var t,a,r=e.message,s=e.lastMessage,n=e.time,c=!s||r.sender.userName!==s.sender.userName;return Object(x.jsxs)("div",{className:"message-row",children:[c&&Object(x.jsx)("div",{className:"message-avatar",style:{backgroundImage:"url(".concat(null===r||void 0===r||null===(t=r.sender)||void 0===t?void 0:t.avatar,")")}}),(null===r||void 0===r||null===(a=r.attachments)||void 0===a?void 0:a.length)>0?Object(x.jsxs)("div",{style:{position:"relative",marginLeft:c?"4px":"48px"},children:[Object(x.jsx)("img",{src:r.attachments[0].file,alt:"message-attachment",className:"message-image"}),Object(x.jsx)("small",{style:{position:"absolute",bottom:"8px",right:"16px",color:"white",marginRight:"10px",fontSize:"0.7rem"},children:n})]}):Object(x.jsxs)("div",{className:"message",style:{float:"left",backgroundColor:"#CABCDC",marginLeft:c?"4px":"48px"},children:[r.text,Object(x.jsx)("sub",{style:{paddingLeft:"8px",fontSize:"0.7rem"},children:n})]})]})},v=function(e){var t,a=e.message,r=e.time;return(null===a||void 0===a||null===(t=a.attachments)||void 0===t?void 0:t.length)>0?Object(x.jsxs)("div",{style:{position:"relative",float:"right"},children:[Object(x.jsx)("img",{src:a.attachments[0].file,alt:"message-attachment",className:"message-image"}),Object(x.jsx)("small",{style:{position:"absolute",bottom:"8px",right:"16px",color:"white",marginRight:"10px",fontSize:"0.7rem"},children:r})]}):Object(x.jsxs)("div",{className:"message",style:{float:"right",marginRight:"18px",color:"#fff",backgroundColor:"#3a2b50"},children:[a.text,Object(x.jsx)("sub",{style:{paddingLeft:"8px",fontSize:"0.7rem"},children:r})]})},N=function(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()},w=Object(l.a)((function(e){return{root:{backgroundColor:"rgb(162, 158, 200)"},backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff",display:"flex",flexDirection:"column"}}})),y=function(e){console.log(e);var t=e.messages,a=e.chats,s=e.userName,n=e.activeChat,o=a&&a[n],i=w(),l=Object(r.useCallback)((function(e,t){return Object(x.jsx)("div",{className:"read-receipts",style:{marginRight:t?"18px":"0px",marginLeft:t?"0px":"68px",marginTop:"5px",marginBottom:"5px"},children:o.people.map((function(a,r){var n;return a.person.username!==e.sender.username&&a.last_read===e.id&&s!==a.person.username&&Object(x.jsx)("div",{className:"read-receipt",style:{float:t?"right":"left",backgroundImage:"url(".concat(null===a||void 0===a||null===(n=a.person)||void 0===n?void 0:n.avatar,")")}},"read_".concat(r))}))})}),[null===o||void 0===o?void 0:o.people,s]),b=Object(r.useCallback)((function(){var e=Object.keys(t);return e.map((function(a,r){var n=t[a],c=0===r?null:e[r-1],o=t[c],d=n.sender.username===s,m=new Date(n.created),j=!N(new Date(null===o||void 0===o?void 0:o.created),m);return Object(x.jsxs)("div",{style:{width:"100%"},children:[Object(x.jsxs)("div",{className:"message-block",children:[(null===c||j)&&Object(x.jsx)("div",{className:"date-block",children:Object(x.jsx)(u.a,{className:i.root,label:"".concat(m.getDate()," ").concat(m.toLocaleString("default",{month:"long"})," ").concat(m.getFullYear())})}),d?Object(x.jsx)(v,{message:n,time:"".concat(m.toTimeString().substring(0,5))}):Object(x.jsx)(f,{message:n,lastMessage:o,time:"".concat(m.toTimeString().substring(0,5))})]}),l(n,d)]},"msg_".concat(r))}))}),[t,s,l,i.root]);return o?Object(x.jsxs)("div",{className:"chat-feed",children:[Object(x.jsxs)("div",{className:"chat-title-container",children:[Object(x.jsx)("div",{className:"chat-title",children:o.title}),Object(x.jsx)("div",{className:"chat-subtitle",children:o.people.map((function(e){return" ".concat(e.person.username)}))})]}),b(),Object(x.jsx)("div",{style:{height:"100px"}}),Object(x.jsxs)("div",{className:"message-form-container",children:[" ",Object(x.jsx)(O,Object(c.a)(Object(c.a)({},e),{},{chatId:n}))]})]}):Object(x.jsxs)(d.a,{className:i.backdrop,open:!0,children:[Object(x.jsx)(m.a,{variant:"h4",gutterBottom:!0,children:"Loading..."}),Object(x.jsx)(j.a,{color:"inherit"})]})},S=a(64),C=a.n(S),k=a(93),I=a(54),D=a(198),E=a(197),P=a(196),M=a(94),L=a.n(M),T=a(95),z=a.n(T),B=a(14),F=a.n(B),U=Object(l.a)((function(e){return{root:{"& .MuiTextField-root":{margin:"0 auto",width:"90%",marginBottom:"25px"},"& .MuiInputBase-root":{backgroundColor:"rgb(255,255,255)"}}}})),q=function(e){var t=e.setUserDetails,a=U(),s=Object(r.useState)({userName:"",password:"",showPassword:!1,passwordError:"",userNameError:"",formSubmissionError:!1}),n=Object(o.a)(s,2),i=n[0],l=n[1],u=i.userName,d=i.password,m=i.showPassword,j=i.passwordError,b=i.userNameError,p=i.formSubmissionError,h=function(e){var t=e.target,a=t.name,r=t.value;"password"===a?""===r?l((function(e){return Object(c.a)(Object(c.a)({},e),{},{passwordError:"Password is required."})})):r.length<6||r.length>15?l((function(e){return Object(c.a)(Object(c.a)({},e),{},{passwordError:"Password has to be between 6-15 characters."})})):""!==j&&l((function(e){return Object(c.a)(Object(c.a)({},e),{},{passwordError:""})})):""===r?l((function(e){return Object(c.a)(Object(c.a)({},e),{},{userNameError:"UserName is required."})})):""!==b&&l((function(e){return Object(c.a)(Object(c.a)({},e),{},{userNameError:""})})),l((function(e){return Object(c.a)(Object(c.a)({},e),{},Object(I.a)({},a,r))}))},g=function(){var e=Object(k.a)(C.a.mark((function e(a){var r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),r={"Project-ID":"eae2c927-8f1e-4c3e-b40d-233f1ddbf881","User-Name":u,"User-Secret":d},e.prev=2,e.next=5,F.a.get("https://api.chatengine.io/chats",{headers:r});case 5:localStorage.setItem("userName",u),localStorage.setItem("password",d),t({userName:u,password:d}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),l((function(e){return Object(c.a)(Object(c.a)({},e),{},{formSubmissionError:!0})}));case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"wrapper",children:Object(x.jsxs)("div",{className:"form",children:[Object(x.jsx)("h1",{className:"title",children:"Chat Application"}),Object(x.jsxs)("form",{onSubmit:g,className:a.root,children:[Object(x.jsx)(D.a,{type:"text",name:"userName",error:!!b,value:u,onChange:h,variant:"outlined",required:!0,label:"UserName",helperText:b,placeholder:"john34"}),Object(x.jsx)(D.a,{type:m?"text":"password",required:!0,value:d,error:!!j,name:"password",label:"Password",helperText:j,variant:"outlined",onChange:h,placeholder:"",InputProps:{endAdornment:Object(x.jsx)(P.a,{position:"end",children:Object(x.jsx)(E.a,{"aria-label":"toggle password visibility",onClick:function(){l((function(e){return Object(c.a)(Object(c.a)({},e),{},{showPassword:!m})}))},onMouseDown:function(e){return e.preventDefault()},children:i.showPassword?Object(x.jsx)(L.a,{}):Object(x.jsx)(z.a,{})})})}}),Object(x.jsx)("button",{className:"button",type:"submit",disabled:!!j||!!b,children:Object(x.jsx)("span",{children:"Start Chatting"})}),p&&Object(x.jsx)("h2",{className:"error",children:"Oops, Wrong Credentials!"})]})]})})},R=function(){var e=Object(r.useState)({userName:localStorage.getItem("userName"),password:localStorage.getItem("password")}),t=Object(o.a)(e,2),a=t[0],s=t[1];return localStorage.getItem("userName")?Object(x.jsx)(i.a,{projectID:"eae2c927-8f1e-4c3e-b40d-233f1ddbf881",userName:a.userName,userSecret:a.password,height:"100vh",renderChatFeed:function(e){return Object(x.jsx)(y,Object(c.a)({},e))}}):Object(x.jsx)(q,{setUserDetails:s})};n.a.render(Object(x.jsx)(R,{}),document.getElementById("root"))}},[[151,1,2]]]);
//# sourceMappingURL=main.29f51ee2.chunk.js.map