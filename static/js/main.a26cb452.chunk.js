(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{251:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(15),r=a.n(i),l=(a(97),a(99),a(16)),c=a(17),o=a(19),u=a(18),d=a(20),h=a(5),m=a.n(h),p=m()({headerContainer:{marginTop:"1rem","& h1":{color:"#253d50",fontSize:"3rem"}}})(function(e){var t=e.classes;return s.a.createElement("div",{className:t.headerContainer},s.a.createElement("h1",null,"Timer App"))}),f={app:{margin:"0",padding:"0",backgroundColor:"#84A1BE",height:"100vh",textAlign:"center",overflow:"auto"}},b=a(89),g=a(32),S=a.n(g),k=a(91),v=a(7),E=a.n(v),y=a(53),w=a(90),j=a.n(w);var C=Object(y.withStyles)({root:{background:"#846C5B",borderRadius:3,border:0,color:"white",height:48,boxShadow:"0 3px 2px 2px rgba(162, 149, 135, .3)",margin:"5px 2px","&:hover":{backgroundColor:"#aaa"}}})(function(e){var t=e.classes,a=e.children,n=e.className,i=Object(k.a)(e,["classes","children","className"]);return s.a.createElement(j.a,Object.assign({className:E()(t.root,n)},i),a||"class names")}),O=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={timerMinutes:"25",timerSeconds:"0",breakMinutes:"5",breakSeconds:"0"},a.handleChange=function(e){return function(t){a.setState(Object(b.a)({},e,t.target.value))}},a.handleSetSettings=function(e,t,n,s){a.props.handleSetSettings(e,t,n,s)},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:this.classes.settings},s.a.createElement("h2",null,"Set Pomodoro time"),s.a.createElement("div",{className:this.classes.settingsContainer},s.a.createElement("div",null,s.a.createElement("p",null,"Minutes"),s.a.createElement(S.a,{className:this.classes.input,id:"filled-uncontrolled",margin:"normal",variant:"filled",defaultValue:this.state.timerMinutes,onChange:this.handleChange("timerMinutes"),type:"text",inputProps:{maxLength:2,style:{textAlign:"center"}}})),s.a.createElement("div",null,s.a.createElement("p",null,"Seconds"),s.a.createElement(S.a,{className:this.classes.input,id:"filled-uncontrolled",margin:"normal",variant:"filled",defaultValue:this.state.timerSeconds,onChange:this.handleChange("timerSeconds"),type:"text",inputProps:{maxLength:2,style:{textAlign:"center"}}}))),s.a.createElement("h2",null,"Set break time"),s.a.createElement("div",{className:this.classes.settingsContainer},s.a.createElement("div",null,s.a.createElement("p",null,"Minutes"),s.a.createElement(S.a,{className:this.classes.input,id:"filled-uncontrolled",margin:"normal",variant:"filled",defaultValue:this.state.breakMinutes,onChange:this.handleChange("breakMinutes"),type:"text",inputProps:{maxLength:2,style:{textAlign:"center"}}})),s.a.createElement("div",null,s.a.createElement("p",null,"Seconds"),s.a.createElement(S.a,{className:this.classes.input,id:"filled-uncontrolled",margin:"normal",variant:"filled",defaultValue:this.state.breakSeconds,onChange:this.handleChange("breakSeconds"),type:"text",inputProps:{maxLength:2,style:{textAlign:"center"}}}))),s.a.createElement("div",null,s.a.createElement(C,{className:this.classes.setButton,onClick:function(){return e.handleSetSettings(e.state.timerMinutes,e.state.timerSeconds,e.state.breakMinutes,e.state.breakSeconds)}},"Set")))}},{key:"classes",get:function(){return this.props.classes}}]),t}(n.Component),x=m()({settings:{width:"50%",margin:"0 auto","& h2":{fontSize:"1rem"}},settingsContainer:{display:"flex",justifyContent:"center"},input:{width:"80%","& input":{fontSize:"1.5rem"}},setButton:{margin:"1rem",width:"30%",backgroundColor:"#cca222"}})(O),M=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).leadingZero=function(e){return e>9?e:e?("0"+e).slice(-2):"00"},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isBreak,a=e.minutes,n=e.seconds,i=e.breakMinutes,r=e.breakSeconds,l="".concat(this.classes.timeValue," ").concat(this.classes.break),c=this.classes.timeValue;return s.a.createElement("div",{className:this.classes.timerDisplay},s.a.createElement("p",{className:t?l:c},this.leadingZero(a)," : ","60"===n?"00":this.leadingZero(n)),s.a.createElement("p",{className:t?c:l},this.leadingZero(i)," : ","60"===r?"00":this.leadingZero(r)))}},{key:"classes",get:function(){return this.props.classes}}]),t}(n.Component),N=m()({timerDisplay:{margin:"2rem auto",display:"flex",flexDirection:"column","& p":{backgroundColor:"#bcbab8",padding:"1rem",borderRadius:"15px"}},timeValue:{margin:"1rem auto",fontSize:"3rem",fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans - serif"},break:{opacity:"0.1",textShadow:"none"}})(M),B=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).handleStart=function(){return a.props.timeRunning?null:a.props.handleStart()},a.handlePause=function(){a.props.handlePause()},a.handleSetDefault=function(){a.props.handleSetDefault()},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:this.classes.main},s.a.createElement(C,{onClick:this.handleStart},"Start!"),s.a.createElement(C,{onClick:this.handlePause},"Pause"),s.a.createElement(C,{onClick:this.handleSetDefault},"Default Pomodoro"))}},{key:"classes",get:function(){return this.props.classes}}]),t}(n.Component),I=m()({main:{margin:"1rem"}})(B),P=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={minutes:"25",seconds:"0",breakMinutes:"5",breakSeconds:"0",initialTime:{minutes:"25",seconds:"0",breakMinutes:"5",breakSeconds:"0"},interval:!1,isBreak:!1},a.handleStart=function(){a.switchInterval(),a.handleInterval()},a.handleInterval=function(){a.interval=setInterval(function(){if(a.state.isBreak){var e=parseInt(a.state.breakMinutes),t=parseInt(a.state.breakSeconds);a.setState({breakMinutes:0===t?e-1:e,breakSeconds:0!==t?t-1:59})}else{var n=parseInt(a.state.minutes),s=parseInt(a.state.seconds);a.setState({minutes:0===s?n-1:n,seconds:0!==s?s-1:59})}a.handleFinish()},1e3)},a.handleFinish=function(){a.state.isBreak?a.state.breakSeconds||a.state.breakMinutes||(clearInterval(a.interval),a.handleSwitchBreak(),a.switchInterval(),a.handleResetTime(),setTimeout(function(){return alert("Finished!")},0)):a.state.seconds||a.state.minutes||(clearInterval(a.interval),a.handleSwitchBreak(),a.switchInterval(),setTimeout(function(){return alert("Finished!")},0))},a.handleResetTime=function(){a.setState({minutes:a.state.initialTime.minutes,seconds:a.state.initialTime.seconds,breakMinutes:a.state.initialTime.breakMinutes,breakSeconds:a.state.initialTime.breakSeconds})},a.handleSwitchBreak=function(){a.setState({isBreak:!a.state.isBreak})},a.switchInterval=function(){a.setState({interval:!a.state.interval})},a.handlePause=function(){a.switchInterval(),clearInterval(a.interval)},a.handleSetSettings=function(e,t,n,s){a.setState({minutes:e,seconds:t,breakMinutes:n,breakSeconds:s,interval:!1,initialTime:{minutes:e,seconds:t,breakMinutes:n,breakSeconds:s}}),clearInterval(a.interval)},a.handleSetDefault=function(){a.setState({minutes:"25",seconds:"0",breakMinutes:"5",breakSeconds:"0"})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.interval;return s.a.createElement("div",{className:this.classes.main},s.a.createElement(x,{handleSetSettings:this.handleSetSettings,handleSetDefault:this.handleSetDefault}),s.a.createElement(I,{handleStart:this.handleStart,handlePause:this.handlePause,handleSetDefault:this.handleSetDefault,timeRunning:e}),s.a.createElement(N,{minutes:this.state.minutes,seconds:this.state.seconds,breakMinutes:this.state.breakMinutes,breakSeconds:this.state.breakSeconds,isBreak:this.state.isBreak}))}},{key:"classes",get:function(){return this.props.classes}}]),t}(n.Component),T=m()({main:{margin:"0 auto",width:"75%"}})(P),A=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:this.classes.app},s.a.createElement(p,null),s.a.createElement(T,null))}},{key:"classes",get:function(){return this.props.classes}}]),t}(n.Component),D=m()(f)(A);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},92:function(e,t,a){e.exports=a(251)},99:function(e,t,a){}},[[92,2,1]]]);
//# sourceMappingURL=main.a26cb452.chunk.js.map