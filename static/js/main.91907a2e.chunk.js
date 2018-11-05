(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(73),l=a.n(o),i=a(37),c=a(5),s=a(109),m=(a(89),a(66)),u=a.n(m),d=a(76),p=a(27),v=a(28),f=a(39),E=a(29),h=a(41),b=a(108),y=a(107),g=a(30),N=function(e){var t=e.type,a=e.placeholder,n=Object(g.a)({},e.input),o=e.meta,l=o.error,i=o.touched;o.active;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:t,className:"form-control",placeholder:a},n)),r.a.createElement("div",{className:"red-text"},i&&l))},k=function(e){var t=e.children,a=e.meta,n=a.error,o=a.touched,l=(a.active,Object(g.a)({},e.input));return r.a.createElement(r.a.Fragment,null,r.a.createElement("select",Object.assign({className:"form-control",id:"city_field"},l),t),r.a.createElement("div",{className:"red-text"},o&&n))},w=function(e){var t={};return e.city||(t.city="Required"),e.address?/^[a-zA-Z0-9- ]+[0-9]+$/.test(e.address)||(t.address="Please enter a valid address"):t.address="Please enter the address",e.postCode&&/^[0-9]{5}$/.test(e.postCode)||(t.postCode="Please enter a valid post code"),e.area?/^[0-9]+(\.[0-9]+)?$/.test(e.area)||(t.area="Please enter valid area size (numbers only)"):t.area="Please enter the living area size",e.constructionYear?/^[0-9]+$/.test(e.constructionYear)||(t.constructionYear="Please enter valid construction year (numbers only)"):t.constructionYear="Please enter the construction year",e.maintainCost?/^[0-9]+$/.test(e.maintainCost)||(t.maintainCost="Please enter valid maintainence cost (numbers only)"):t.maintainCost="Please enter the maintainence cost",t},S=Object(y.a)({validate:w,form:"evaluate",initialValues:{city:"helsinki",ownership:"own",elevator:"no",bacony:"no",pipeRenovate:"no",facadeRenovate:"no"},destroyOnUnmount:!1})(function(e){var t=e.handleSubmit,a=e.invalid;return r.a.createElement("form",{id:"form1",onSubmit:t},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"City",r.a.createElement("sup",null,"*")),r.a.createElement("div",{style:{display:"block",position:"relative",boxSizing:"border-box"}},r.a.createElement(b.a,{name:"city",component:k},r.a.createElement("option",{value:"helsinki"}," Helsinki"),r.a.createElement("option",{value:"espoo"}," Espoo"),r.a.createElement("option",{value:"vantaa"}," Vantaa"),r.a.createElement("option",{value:"kaunianen"}," Kauniainen"),r.a.createElement("option",{value:"tampere"}," Tampere"),r.a.createElement("option",{value:"turku"}," Turku"),r.a.createElement("option",{value:"kaarina"}," Kaarina"),r.a.createElement("option",{value:"raisio"}," Raisio"),r.a.createElement("option",{value:"tallinn"}," Tallinn")))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"address"},"Address",r.a.createElement("sup",null,"*")),r.a.createElement(b.a,{name:"address",component:N,type:"text",placeholder:"Ajurinkatu 4"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"postCode"},"Post Code",r.a.createElement("sup",null,"*")),r.a.createElement(b.a,{name:"postCode",component:N,type:"text",placeholder:"00420"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"url"},"If you have listed your apartment in a portal, please paste the URL here"),r.a.createElement(b.a,{name:"url",component:N,type:"text"})),r.a.createElement("div",{className:"button-container"},r.a.createElement("button",{type:"submit",className:"valuation-button",disabled:a},"Next"),r.a.createElement("div",{className:"small-message-warning"},"By continuing you accept the general terms of use of Kodit.io and confirm that you have read the privacy policy. In addition you give permission for Kodit.io or their representive to contact you by email, phone or text message, via the contact information you provide, for marketing purposes.")))}),x=function(e){var t=e.type,a=e.label,n=Object(g.a)({},e.input);return r.a.createElement("label",{className:"radio-btn ".concat(n.checked?"radio-active":"")},a,r.a.createElement("input",Object.assign({type:t},n)))},C=Object(y.a)({validate:w,form:"evaluate",destroyOnUnmount:!1})(function(e){var t=e.handleSubmit,a=e.invalid;return r.a.createElement("form",{id:"form1",onSubmit:t},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Floor",r.a.createElement("sup",null,"*")),r.a.createElement("div",{style:{display:"block",position:"relative",boxSizing:"border-box"}},r.a.createElement(b.a,{name:"floor",component:k},r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5"),r.a.createElement("option",{value:"6"},"6"),r.a.createElement("option",{value:"7"},"7"),r.a.createElement("option",{value:"8"},"8"),r.a.createElement("option",{value:"9"},"9+")))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Total floors",r.a.createElement("sup",null,"*")),r.a.createElement("div",{style:{display:"block",position:"relative",boxSizing:"border-box"}},r.a.createElement(b.a,{name:"totalFloors",component:k},r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5"),r.a.createElement("option",{value:"6"},"6"),r.a.createElement("option",{value:"7"},"7"),r.a.createElement("option",{value:"8"},"8"),r.a.createElement("option",{value:"9"},"9+"))))),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"area"},"Living area size",r.a.createElement("sup",null,"*")),r.a.createElement(b.a,{name:"area",component:N,type:"text",placeholder:"71.5"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Number of rooms",r.a.createElement("sup",null,"*")),r.a.createElement("div",{style:{display:"block",position:"relative",boxSizing:"border-box"}},r.a.createElement(b.a,{name:"rooms",component:k},r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5"),r.a.createElement("option",{value:"6"},"6"),r.a.createElement("option",{value:"7"},"7"),r.a.createElement("option",{value:"8"},"8"),r.a.createElement("option",{value:"9"},"9+"))))),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"constructionYear"},"Construction year",r.a.createElement("sup",null,"*")),r.a.createElement(b.a,{name:"constructionYear",component:N,type:"text",placeholder:"1978"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"maintainCost"},"Maintenance cost (\u20ac/mk)",r.a.createElement("sup",null,"*")),r.a.createElement(b.a,{name:"maintainCost",component:N,type:"text",placeholder:"300"}))),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"radio-group-label"},"Land ownership"),r.a.createElement("div",{className:"form-group radio-btn-group"},r.a.createElement(b.a,{name:"ownership",component:x,type:"radio",value:"own",label:"Own",checked:!0}),r.a.createElement(b.a,{name:"ownership",component:x,type:"radio",value:"rented",label:"Rented"}))),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"radio-group-label"},"Is there an elevator in the building"),r.a.createElement("div",{className:"form-group radio-btn-group"},r.a.createElement(b.a,{name:"elevator",component:x,type:"radio",value:"yes",label:"Yes"}),r.a.createElement(b.a,{name:"elevator",component:x,type:"radio",value:"no",label:"No"}))),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"radio-group-label"},"Is there an bacony in the apartment"),r.a.createElement("div",{className:"form-group radio-btn-group"},r.a.createElement(b.a,{name:"bacony",component:x,type:"radio",value:"yes",label:"Yes"}),r.a.createElement(b.a,{name:"bacony",component:x,type:"radio",value:"no",label:"No"}))),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"radio-group-label"},"Is there pipe renovation planned within 5 years"),r.a.createElement("div",{className:"form-group radio-btn-group"},r.a.createElement(b.a,{name:"pipeRenovate",component:x,type:"radio",value:"yes",label:"Yes"}),r.a.createElement(b.a,{name:"pipeRenovate",component:x,type:"radio",value:"no",label:"No"}))),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"radio-group-label"},"Is there facade renovation planned within 10 years"),r.a.createElement("div",{className:"form-group radio-btn-group"},r.a.createElement(b.a,{name:"facadeRenovate",component:x,type:"radio",value:"yes",label:"Yes"}),r.a.createElement(b.a,{name:"facadeRenovate",component:x,type:"radio",value:"no",label:"No"}))),r.a.createElement("div",{className:"button-container"},r.a.createElement("button",{type:"submit",className:"valuation-button",disabled:a},"Get price valuation"),r.a.createElement("div",{className:"small-message-warning"},"By continuing you accept the general terms of use of Kodit.io and confirm that you have read the privacy policy. In addition you give permission for Kodit.io or their representive to contact you by email, phone or text message, via the contact information you provide, for marketing purposes.")))}),O=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={page:1},a.nextPage=function(){a.setState({page:a.state.page+1})},a}return Object(h.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.state.page;return r.a.createElement("div",{className:"form-container"},r.a.createElement("p",{className:"form-header"},"Get Kodit.io price valuation and request an offer"),r.a.createElement("p",{className:"form-header-comment"},"* mandatory fields to be filled"),1===e&&r.a.createElement(S,{onSubmit:this.nextPage}),2===e&&r.a.createElement(C,{onSubmit:this.props.handleSubmit}))}}]),t}(n.Component),j=(a(93),a(80)),z=a(58),R=[{title:"Year",color:"#4BCCD5"},{title:"Area (m\xb2)",color:"#353D99"},{title:"Price per m\xb2",color:"#369298"}],_={fontSize:"15px",textAnchor:"middle"};function P(e,t){var a=new Map;return e.forEach(function(e){var n=t(e),r=a.get(n);r?r.push(e):a.set(n,[e])}),a}function Y(e,t){return e.children&&e.children.map(function(e){return Y(e,t)}),e.color||(e.style={fill:"#F15C17"}),e.style=Object(j.a)({},e.style,{fillOpacity:t&&!t[e.title]?.2:1}),e}var V=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={clicked:!1,pathValue:!1,finalValue:"Street: ".concat(a.props.relatedResults[0].street),data:{},decoratedData:{}},a}return Object(h.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.relatedResults,t=P(e,function(e){return e.built_year}),a={title:e[0].street,children:[]},n=0,r=!0,o=!1,l=void 0;try{for(var i,c=t.entries()[Symbol.iterator]();!(r=(i=c.next()).done);r=!0){var s=i.value;a.children.push({title:"Year: ".concat(s[0]),children:[],color:"#4BCCD5"});var m=P(s[1],function(e){return e.size_sqm}),u=!0,d=!1,p=void 0;try{for(var v,f=m.entries()[Symbol.iterator]();!(u=(v=f.next()).done);u=!0){var E=v.value;a.children[n].children.push({title:"Area: ".concat(E[0],"m\xb2"),children:E[1].map(function(e){return{title:"Price per m\xb2: ".concat(Number(e.price_sqm).toFixed(2),"\u20ac"),size:Number(e.price_sqm).toFixed(2),color:"#369298"}}),color:"#353D99"})}}catch(h){d=!0,p=h}finally{try{u||null==f.return||f.return()}finally{if(d)throw p}}n++}}catch(h){o=!0,l=h}finally{try{r||null==c.return||c.return()}finally{if(o)throw l}}this.setState({data:a,decoratedData:Y(a,!1)})}},{key:"render",value:function(){var e=this,t=this.state,a=t.clicked,n=t.data,o=t.decoratedData,l=t.finalValue,i=t.pathValue.toString().split(" > ");return r.a.createElement("div",{className:"feedback-chart"},r.a.createElement("h3",{style:{fontSize:"18px",letterSpacing:"0.125rem",color:"#4C4C4C",fontWeight:700,textAlign:"center"}},"Sunburst chart showing prices of other apartments from the same street"),r.a.createElement("p",{className:"chart-tip"},"Click to lock selection"),r.a.createElement(z.c,{hideRootNode:!0,height:400,width:400,data:n,getSize:function(e){return e.size},getColor:function(e){return e.color},onValueMouseOver:function(t){if(!a){var n=function e(t){return t.parent?[t.data&&t.data.title||t.title].concat(e(t.parent)):["Street: ".concat(t.data.title)]}(t).reverse(),r=n.reduce(function(e,t){return e[t]=!0,e},{});e.setState({finalValue:n[n.length-1],pathValue:n.join(" > "),data:Y(o,r)})}},onValueMouseOut:function(){return a?function(){}:e.setState({pathValue:!1,finalValue:!1,data:Y(o,!1)})},onValueClick:function(){return e.setState({clicked:!a})},style:{stroke:"#ddd",strokeOpacity:.8,strokeWidth:".8"},colorType:"literal"},l&&r.a.createElement(z.b,{data:"false"!==i[0]?i.map(function(e,t){return{x:0,y:-33*(t-2),label:e,style:_}}):[{x:0,y:0,label:"Street: ".concat(this.props.relatedResults[0].street),style:_}]})),r.a.createElement(z.a,{orientation:"horizontal",items:R}))}}]),t}(n.Component),F=function(e){var t=e.result,a=e.relatedResults;return r.a.createElement("div",{className:"result-feedback"},r.a.createElement("div",{className:"feedback-row"},r.a.createElement("div",{className:"feedback-col ",style:{fontSize:"18px",letterSpacing:"0.125rem",color:"#4C4C4C",fontWeight:700}},r.a.createElement("p",{style:{margin:"0",padding:"10px"}},"Kodit.io Price valuation")),r.a.createElement("div",{className:"feedback-col"},r.a.createElement("div",{className:"valuation-group"},r.a.createElement("p",{className:"valuation"},t?Number.parseInt(t.price_sqm*t.size_sqm).toLocaleString():2),r.a.createElement("span",{className:"append-unit"},"\u20ac")))),r.a.createElement(V,{relatedResults:a}))},q=function(){return r.a.createElement("div",{className:"lds-ring"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},T=function(e){var t=e.submitted,a=e.result,n=e.relatedResults,o=e.loading;return r.a.createElement("div",{className:"result-container"},!t&&r.a.createElement("p",{style:{color:"#4C4C4C",fontSize:"16px",letterSpacing:"0.125rem"}},"Currently we operate in Helsinki, Espoo, Vantaa, Kauniainen, Turku, Tampere and Tallinn focusing on apartments valued under 500 000\u20ac. You can get the price valuation of your home and ask for free of charge home inspection by filling the form."),t?o?r.a.createElement(q,null):a?r.a.createElement(F,{result:a,relatedResults:n}):r.a.createElement("p",{style:{color:"rgba(255, 0, 44, 0.824)",fontWeight:"700",fontSize:"1.5em"}},"Something is wrong please re-submit the form. (valid street number & address from the dataset!)"):null)},A=(a(104),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={data:null,result:null,relatedResults:[],submitted:!1,loading:!1},a.handleSubmit=function(e){a.setState({loading:!0,submitted:!0}),setTimeout(function(){var t=e.address.split(" "),n=a.state.data.filter(function(e){return t[0]===e.street}),r=n.filter(function(e){return e.street_number===+t[1]});try{var o=r.reduce(function(t,a){return Math.abs(a.size_sqm-+e.area)<Math.abs(t.size_sqm-+e.area)?a:t}).size_sqm,l=r.filter(function(e){return e.size_sqm===o}).reduce(function(t,a){return Math.abs(a.built_year-+e.constructionYear)<Math.abs(t.built_year-+e.constructionYear)?a:t}).built_year,i=r.find(function(e){return e.built_year===l&&e.size_sqm===o});a.setState({relatedResults:n,result:i,loading:!1})}catch(c){console.log(c),a.setState({loading:!1})}},2e3)},a}return Object(h.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(u.a.mark(function e(){var t,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://cc677kr6sc.execute-api.eu-central-1.amazonaws.com/data",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({who_rules:"kodit.io"})});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this.setState({data:a}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}},e,this,[[0,10]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app-container"},r.a.createElement("img",{src:"https://kodit.io/assets/images/logo.svg",alt:"logo",className:"logo"}),r.a.createElement(O,{handleSubmit:this.handleSubmit}),r.a.createElement(T,{data:this.state.result,submitted:this.state.submitted,result:this.state.result,relatedResults:this.state.relatedResults,loading:this.state.loading})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=c.c,D=Object(c.b)({form:s.a}),I=Object(c.d)(D,M()),K=r.a.createElement(i.a,{store:I},r.a.createElement(A,null));l.a.render(K,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},81:function(e,t,a){e.exports=a(106)},89:function(e,t,a){},93:function(e,t,a){}},[[81,2,1]]]);
//# sourceMappingURL=main.91907a2e.chunk.js.map