(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{49:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=(a(49),a(7));var s,l,i,c=class extends o.a.PureComponent{constructor(e){super(e),this.state={dropdownVal:e.defaultDropdown,textVal:""}}render(){return o.a.createElement("section",null,o.a.createElement("div",{className:"section-header"},this.props.title),o.a.createElement("label",null,this.props.dropdownHeader||this.state.dropdownVal,o.a.createElement("br",null),o.a.createElement("select",{value:this.state.dropdownVal,onChange:e=>this.setState({dropdownVal:e.target.value})},this.props.options.map(e=>o.a.createElement("option",{value:e,key:e},e)))),o.a.createElement("label",null,this.props.textAreaHeader,o.a.createElement("br",null),o.a.createElement("input",{type:"text",value:this.state.textVal,onChange:e=>this.setState({textVal:e.target.value})})),o.a.createElement("label",null,o.a.createElement("button",{onClick:()=>this.props.action(this.state)},this.props.buttonText)))}};class d extends o.a.PureComponent{render(){return o.a.createElement(c,{title:this.props.title,dropdownHeader:"Ban Type",textAreaHeader:"User ID",defaultDropdown:"appeal",options:this.props.options.concat("appeal","lootbox"),action:this.action.bind(this),buttonText:this.props.buttonText})}async action(e){if(!e.textVal)return alert("enter a user id dumb cunt");const t=await fetch(`/api/admin${this.props.getEndpoint(e)}`,{...this.props.getFetchParams(e),credentials:"same-origin",headers:{"Content-Type":"application/json"}});200!==t.status?alert(`Unknown HTTP response code: ${t.status}`):this.props.finish(e,t)}}i={getFetchParams:e=>({method:"POST",body:JSON.stringify({type:e.dropdownVal,id:e.textVal})}),options:[]},(l="defaultProps")in(s=d)?Object.defineProperty(s,l,{value:i,enumerable:!0,configurable:!0,writable:!0}):s[l]=i;var p=d,u=[o.a.memo(()=>o.a.createElement(p,{title:"Ban User",buttonText:"Hammer",getEndpoint:()=>"/ban",finish:({dropdownValue:e,textValue:t})=>alert(`Successfully ${e} banned ${t}`)})),o.a.memo(()=>o.a.createElement(p,{title:"Unban User",buttonText:"Unhammer",getEndpoint:()=>"/unban",finish:({dropdownValue:e,textValue:t})=>alert(`Successfully ${e} unbanned ${t}`)})),o.a.memo(()=>o.a.createElement(p,{title:"Check User Ban",buttonText:"Check",options:["any"],getFetchParams:()=>({method:"GET"}),getEndpoint:({dropdownValue:e,textValue:t})=>`/checkBan?type=${e}&id=${t}`,finish:async({textValue:e},t)=>{const a=await t.json();if(!a[0])return alert(`${e} is a good boye and has no bans`);alert(`${e} has the following bans:\n\n${a.join("\n")}`)}}))];class m extends n.PureComponent{action(e){console.log(e)}render(){return o.a.createElement(c,{title:"Find Transaction",dropdownHeader:"Parameter",textAreaHeader:"Value",defaultDropdown:"appeal",options:["Discord ID","PayPal ID","PayPal E-Mail","Payment ID"],action:this.action.bind(this),buttonText:"Find"})}}t.default=Object(r.b)(e=>e.login,null)(class extends o.a.PureComponent{render(){return this.props.loggedIn?!1===this.props.isAdmin?location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ"):o.a.createElement("div",{className:"content admin"},u.map((e,t)=>o.a.createElement(e,{key:t})),o.a.createElement(m,null)):o.a.createElement("div",{className:"content admin"},o.a.createElement("header",{className:"header"},"You aren't logged in with your Discord account. ",o.a.createElement("a",{href:"/oauth/login?redirect=/admin"},"Click this")," to log in."))}})}}]);