(this.webpackJsonpnew324=this.webpackJsonpnew324||[]).push([[0],{179:function(e,t,s){},182:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),i=s(26),n=s.n(i),r=s(14),l=s(27),o=s(21),j=s(17),b=s(18),d=s(20),m=s(19),h=s(183),u=s(184),x=s(185),O=s(186),p=s(187),f=s(188),v=s(2),g=function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(e){var c;return Object(j.a)(this,s),(c=t.call(this,e)).toggleNav=function(){c.setState({isNavOpen:!c.state.isNavOpen})},c.state={isNavOpen:!1},c}return Object(b.a)(s,[{key:"render",value:function(){return Object(v.jsx)(h.a,{dark:!0,sticky:"top",expand:"md",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(u.a,{href:"/home",children:"The City Museum"}),Object(v.jsx)(x.a,{onClick:this.toggleNav}),Object(v.jsx)(O.a,{isOpen:this.state.isNavOpen,navbar:!0,children:Object(v.jsxs)(p.a,{navbar:!0,"align-items":"true",children:[Object(v.jsx)(f.a,{children:Object(v.jsxs)(o.c,{className:"nav-link",to:"/home",children:[Object(v.jsx)("i",{className:"fa fa-home fa-lg"})," Home"]})}),Object(v.jsx)(f.a,{children:Object(v.jsxs)(o.c,{className:"nav-link",to:"/visit",children:[Object(v.jsx)("i",{className:"fa fa-users fa-lg"})," Visit"]})}),Object(v.jsx)(f.a,{children:Object(v.jsxs)(o.c,{className:"nav-link",to:"/events",children:[Object(v.jsx)("i",{className:"fa fa-calendar"})," Events"]})}),Object(v.jsx)(f.a,{children:Object(v.jsxs)(o.c,{className:"nav-link",to:"/members",children:[Object(v.jsx)("i",{className:"fa fa-heart"})," Comments"]})})]})})]})})}}]),s}(c.Component),N=Object(r.connect)((function(e){return{exhibit:e.selectedExhibit}}))((function(e){var t=e.exhibit;return t?Object(v.jsxs)("div",{className:"col-md-7",children:[Object(v.jsx)("img",{className:"photo",src:t.source}),Object(v.jsxs)("p",{children:["Title: ",t.title,Object(v.jsx)("br",{}),"Artist: ",t.artist]})]}):Object(v.jsx)("div",{className:"col-md-7 text-center",children:"All Images From Unsplash"})})),y=[{id:1,title:"Photo 1 from Unsplash",artist:"Content Pixie",source:"https://res.cloudinary.com/dpmxxbau5/image/upload/v1618087566/1_n9cian.jpg"},{id:2,title:"Photo 2 from Unsplash",artist:"Dan Farrell",source:"https://res.cloudinary.com/dpmxxbau5/image/upload/v1618087588/2_dj0giz.jpg"},{id:3,title:"Photo 3 from Unsplash",artist:"Steve Johnson",source:"https://res.cloudinary.com/dpmxxbau5/image/upload/v1618087614/3_grfnf8.jpg"}],w=s(189),k=s(190),C=s(191),S=function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(e){var c;return Object(j.a)(this,s),(c=t.call(this,e)).state={exhibits:y},c}return Object(b.a)(s,[{key:"render",value:function(){var e=this,t=this.state.exhibits.map((function(t){return Object(v.jsxs)(w.a,{className:"list-group-item d-flex justify-content-between align-items-center",children:[t.title,Object(v.jsx)(k.a,{color:"info",onClick:function(){return e.props.selectedExhibit(t)},children:"info"})]},t.id)}));return Object(v.jsx)("div",{className:"col-md-5",children:Object(v.jsx)(C.a,{children:t})})}}]),s}(a.a.Component),M={selectedExhibit:function(e){return function(e){return{type:"EXHIBIT_SELECTED",payload:e}}(e)}},A=Object(r.connect)(null,M)(S),E=s(192),D=s(193),T=s(194),F=s(195),I=s(196),J=function(){return Object(v.jsxs)(a.a.Fragment,{children:[Object(v.jsx)("div",{className:"col-md-5",children:Object(v.jsx)(E.a,{children:Object(v.jsx)(D.a,{top:!0,width:"100%",className:"",src:"https://res.cloudinary.com/dpmxxbau5/image/upload/v1618087466/museum_x3gwhd.jpg"})})}),Object(v.jsx)("div",{className:"col-md-7",children:Object(v.jsx)(E.a,{children:Object(v.jsxs)(T.a,{children:[Object(v.jsx)(F.a,{children:"The City Museum"}),Object(v.jsx)(I.a,{children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'})]})})})]})},L=function(){return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("div",{className:"row mt-3 mb-3",children:Object(v.jsx)(J,{})}),Object(v.jsx)("hr",{}),Object(v.jsxs)("div",{className:"row mt-3 mb-5",children:[Object(v.jsx)(A,{}),Object(v.jsx)(N,{})]})]})};var P=function(){return Object(v.jsx)("footer",{className:"site-footer",children:Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsxs)("div",{className:"col-sm-4 offset-md-1 mt-1",children:[Object(v.jsx)("h5",{children:"Links"}),Object(v.jsxs)("ul",{className:"list-unstyled",children:[Object(v.jsx)("li",{children:Object(v.jsxs)(o.b,{className:"nav-link",to:"/visit",children:[Object(v.jsx)("i",{className:"fa fa-users fa-sm"})," Visit"]})}),Object(v.jsx)("li",{children:Object(v.jsxs)(o.b,{className:"nav-link",to:"/events",children:[Object(v.jsx)("i",{className:"fa fa-calendar fa-sm"})," Events"]})}),Object(v.jsx)("li",{children:Object(v.jsxs)(o.b,{className:"nav-link",to:"/members",children:[Object(v.jsx)("i",{className:"fa fa-heart fa-sm"})," Comments"]})})]})]}),Object(v.jsxs)("div",{className:"col-4 col-sm-3 mt-1",children:[Object(v.jsx)("h5",{children:"Social"}),Object(v.jsx)("a",{className:"btn btn-social-icon btn-instagram",href:"http://instagram.com/",children:Object(v.jsx)("i",{className:"fa fa-instagram"})})," ",Object(v.jsx)("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/",children:Object(v.jsx)("i",{className:"fa fa-facebook"})})," ",Object(v.jsx)("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/",children:Object(v.jsx)("i",{className:"fa fa-twitter"})})," ",Object(v.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/",children:Object(v.jsx)("i",{className:"fa fa-youtube"})})]}),Object(v.jsxs)("div",{className:"col-sm-4 mt-1",children:[Object(v.jsxs)("a",{role:"button",className:"btn btn-link footer-link",href:"tel:+12065551234",children:[Object(v.jsx)("i",{className:"fa fa-phone"})," 1-206-555-1234"]}),Object(v.jsx)("br",{}),Object(v.jsxs)("a",{role:"button",className:"btn btn-link footer-link",href:"mailto:notreal@notreal.co",children:[Object(v.jsx)("i",{className:"fa fa-envelope-o"})," reservations@citymuseum.org"]})]})]})})})},_=s(197),q=[{id:0,title:"April 2",subtitle:"Dancing at the museum",img:"public/photos/dancing.jpg",text:"Join us for a night of bachata dancing under the stars!"},{id:1,title:"April 6",subtitle:"Youth Art",img:"photos/childArt.jpg",text:"Art classes for children and teens. Fun for all!"},{id:2,title:"April 10",subtitle:"Game Night",img:"photos/gameNight.jpg",text:"Your favorite board games with an artistic twist!"},{id:3,title:"April 14",subtitle:"Art Lecture",img:"photos/lecture.jpg",text:"Learn the history behind famous and obsure artworks."},{id:4,title:"April 19",subtitle:"Sip & Draw",img:"photos/wine.jpg",text:"Professionally led art classes with a sommelier!"},{id:5,title:"April 24",subtitle:"Local Art",img:"photos/local.jpg",text:"Enjoy art made right here by local artists. Your friends and neighbors."}],z=function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(e){var c;return Object(j.a)(this,s),(c=t.call(this,e)).state={events:q},c}return Object(b.a)(s,[{key:"render",value:function(){console.log(this.state.events);var e=this.state.events.map((function(e){return Object(v.jsx)("div",{className:"col-sm-4 my-1",children:Object(v.jsxs)(E.a,{children:[Object(v.jsxs)(T.a,{children:[Object(v.jsx)(F.a,{tag:"h5",children:e.title}),Object(v.jsx)(_.a,{tag:"h6",className:"mb-2 text-muted",children:e.subtitle})]}),Object(v.jsx)("img",{width:"100%",src:e.img,ald:"something"}),Object(v.jsx)(T.a,{children:Object(v.jsx)(I.a,{children:e.text})})]})},e.id)}));return Object(v.jsx)("div",{className:"container mb-5 mt-2",children:Object(v.jsx)("div",{className:"row",children:e})})}}]),s}(a.a.Component),Y=s(78),H=s(108),U=s(77);function V(){var e=Object(c.useState)({latitude:20.963979324261572,longitude:-89.58623678381008,width:"40vw",height:"50vh",zoom:10}),t=Object(H.a)(e,2),s=t[0],a=t[1];return Object(v.jsx)("div",{className:"col float-left mt-3 mb-5",children:Object(v.jsx)(U.b,Object(Y.a)(Object(Y.a)({},s),{},{mapboxApiAccessToken:"pk.eyJ1Ijoic2xpbWJpZ2d5IiwiYSI6ImNrbXFvcjd2azAwMDgybm50eXJocWR4cWsifQ.VzNz24swKwxCgnHWDoZGsw",mapStyle:"mapbox://styles/slimbiggy/ckmqoy7hp1bc217msoa7vcvso",onViewportChange:function(e){a(e)},children:Object(v.jsxs)(U.a,{latitude:20.9655141555656,longitude:-89.61908340213543,children:[Object(v.jsx)("i",{class:"fa fa-building","aria-hidden":"true"}),Object(v.jsx)("h4",{children:"The City Museum"})]})}))})}var W=function(){return Object(v.jsx)("div",{className:"col-sm-6 mt-3 mb-5 mr-3",children:Object(v.jsx)(E.a,{children:Object(v.jsxs)(T.a,{children:[Object(v.jsx)(F.a,{children:"Hours Of Operation"}),Object(v.jsxs)(I.a,{children:["Monday - Friday 9:00 a.m. thru 5:00 p.m. ",Object(v.jsx)("br",{}),"Satruday        9:00 a.m. thru 8:00 p.m. ",Object(v.jsx)("br",{}),"Sunday          10:00 a.m. thru 4:00 p.m. ",Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),"Calle 56 529A, Centro, 97000 M\xe9rida, Yuc., Mexico"]})]})})})},X=function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(b.a)(s,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"container-fluid mb-5 mt-4",children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)(V,{}),Object(v.jsx)(W,{})]})})}}]),s}(a.a.Component),G=s(57),B=s(201),R=s(198),Z=s(199),K=s(200),Q=s(61),$=function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(e){var c;return Object(j.a)(this,s),(c=t.call(this,e)).toggleModal=function(){c.setState({isModalOpen:!c.state.isModalOpen})},c.state={isModalOpen:!1},c.handleSubmit=c.handleSubmit.bind(Object(G.a)(c)),c}return Object(b.a)(s,[{key:"handleSubmit",value:function(e){this.toggleModal(),console.log(e.text,e.author),this.props.addComment(e.text,e.author)}},{key:"render",value:function(){var e=this;return Object(v.jsxs)("div",{children:[Object(v.jsxs)(k.a,{outline:!0,onClick:this.toggleModal,children:[Object(v.jsx)("i",{className:"fa fa-pencil fa-lg"})," Submit Comment"]}),Object(v.jsxs)(B.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(v.jsx)(R.a,{toggle:this.toggleModal,children:"Submit Comment"}),Object(v.jsx)(Z.a,{children:Object(v.jsxs)(Q.LocalForm,{onSubmit:function(t){return e.handleSubmit(t)},children:[Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)(K.a,{htmlFor:"text",md:2,children:"text"}),Object(v.jsx)(Q.Control.text,{model:".text",id:"text",name:"text",placeholder:"text",className:"form-control"})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)(K.a,{htmlFor:"author",md:2,children:"Your Name"}),Object(v.jsx)(Q.Control.text,{model:".author",id:"author",name:"author",placeholder:"author",className:"form-control"})]}),Object(v.jsx)(k.a,{type:"submit",color:"primary",children:"Send Feedback"})]})})]})]})}}]),s}(a.a.Component),ee={addComment:function(e,t){return function(e,t){return{type:"ADD_COMMENT",payload:{text:e,author:t}}}(e,t)}},te=Object(r.connect)(null,ee)($),se=function(e){Object(d.a)(s,e);var t=Object(m.a)(s);function s(e){var c;return Object(j.a)(this,s),(c=t.call(this,e)).state={},c}return Object(b.a)(s,[{key:"render",value:function(){var e=this.props.comments.map((function(e){return Object(v.jsx)("div",{className:e.length,children:Object(v.jsxs)("p",{children:[e.text,Object(v.jsx)("br",{}),"-- ",e.author]})})}));return Object(v.jsx)("div",{className:"container mb-5 mt-4",children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsxs)("div",{className:"col-md-5 m-1",children:[e,Object(v.jsx)(te,{})]}),Object(v.jsx)("div",{className:"col-md-5",children:Object(v.jsx)(E.a,{children:Object(v.jsx)(D.a,{top:!0,width:"100%",className:"",src:"photos/insideMuseum.jpg"})})})]})})}}]),s}(a.a.Component),ce=Object(r.connect)((function(e){return{comments:e.comments}}),null)(se),ae=s(11),ie=(s(105),s(179),Object(ae.g)(Object(r.connect)(null,null)((function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(g,{}),Object(v.jsxs)(ae.d,{children:[Object(v.jsx)(ae.b,{path:"/home",component:L}),Object(v.jsx)(ae.b,{path:"/visit",component:X}),Object(v.jsx)(ae.b,{path:"/events",component:z}),Object(v.jsx)(ae.b,{path:"/members",component:ce}),Object(v.jsx)(ae.a,{to:"/home"})]}),Object(v.jsx)(P,{})]})})))),ne=[{text:"Such a wonderful museum!",author:"Jenean Grampopulous"},{text:"Parking was a breeze!",author:"Paul Newman"}],re=Object(l.combineReducers)({selectedExhibit:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return"EXHIBIT_SELECTED"===t.type?t.payload:e},comments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COMMENT":var s=t.payload;return console.log(t.payload),e.concat(s);default:return e}}});s(180),s(181);n.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(r.Provider,{store:Object(l.createStore)(re),children:Object(v.jsx)(o.a,{children:Object(v.jsx)(ie,{})})})}),document.querySelector("#root"))}},[[182,1,2]]]);
//# sourceMappingURL=main.7a679054.chunk.js.map