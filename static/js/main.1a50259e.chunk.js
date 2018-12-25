(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(63)},33:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),i=a.n(c),o=(a(33),a(3)),l=a(4),s=a(6),u=a(5),m=a(7),h=a(65),p=a(66),d=a(67),b=a(64),f=a(22),v=a.n(f),j="e3f00766f0f14117d085486ead35eb5b";var O={fetchWeather:function(e){var t=function(e){return window.encodeURI("https://api.openweathermap.org/data/2.5/forecast?q="+e+"&type=accurate&APPID="+j)}(e);return v.a.get(t).then(function(e){return e.data.list[0]})}},E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target.value;a.setState({location:t})},a.handleSubmit=function(e){e.preventDefault(),a.props.onSubmit(e,a.state.location)},a.state={location:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:this.props.formType,onSubmit:this.handleSubmit},r.a.createElement("input",{className:"search",placeholder:"Mobile, Alabama",type:"text",value:this.state.location,autoComplete:"off",onChange:this.handleChange}),r.a.createElement("button",{className:"btn btn-success",type:"submit",disabled:!this.state.location},"Get Weather"))}}]),t}(r.a.Component),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e,t){e.preventDefault();var n="/weather-app/forecast?city="+window.encodeURI(t);a.props.history.push(n)},a.state={location:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(b.a,{className:"link",to:"/weather-app/"},r.a.createElement("h1",null,"Best Weather App")),r.a.createElement(E,{formType:"nav-form",onSubmit:this.handleSubmit}))}}]),t}(r.a.Component),w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e,t){e.preventDefault();var n="/weather-app/forecast?city="+window.encodeURI(t);a.props.history.push(n)},a.state={city:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home-container"},r.a.createElement("h1",{className:"header"},"Enter a City and State"),r.a.createElement(E,{formType:"home-form",onSubmit:this.handleSubmit}))}}]),t}(r.a.Component),g=a(11),S=a(23),C=a.n(S),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).updateStr=function(){var e=a.state.str;"Loading..."===e?a.setState({str:"Loading."}):a.setState({str:e+"."})},a.componentDidMount=function(){a.interval=setInterval(a.updateStr,300)},a.componentWillUnmount=function(){clearInterval(a.interval)},a.state={str:"Loading."},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.state.str)}}]),t}(r.a.Component),k=a(24),I=a.n(k);function D(e){var t=e.data,a="../../weather-icons/"+t.weather[0].icon+".svg",n=I()(t.dt,"dddd, mmmm dS");return r.a.createElement("div",{className:"day-container"},r.a.createElement("img",{className:"icon",src:a,alt:"weather icon"}),r.a.createElement("h2",{className:"subheader"},n))}var L=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).toFahrenheit=function(e){return Math.round(9*e/5-459.67)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement("div",null,r.a.createElement(D,{data:e}),r.a.createElement("div",{className:"description-container"},r.a.createElement("p",null,this.props.city),r.a.createElement("p",null,e.weather[0].description),r.a.createElement("p",null,"Min Temp: ",this.toFahrenheit(e.main.temp_min),"\xb0F"),r.a.createElement("p",null,"Max Temp: ",this.toFahrenheit(e.main.temp_max),"\xb0F"),r.a.createElement("p",null,"Humidity: ",e.main.humidity,"%")))}}]),t}(r.a.Component),M=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){var e=C.a.parse(a.props.location.search).city.split(",")[0];e=e[0].toUpperCase()+e.slice(1,e.length),O.fetchWeather(e).then(function(t){console.log(t),this.setState({isLoading:!1,city:e,data:t})}.bind(Object(g.a)(Object(g.a)(a))))},a.state={city:"",isLoading:!0,loadingStr:"loading.",data:null},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.data;return console.log(e),r.a.createElement("div",null,this.state.isLoading&&r.a.createElement(N,null),e&&r.a.createElement(L,{data:e,city:this.state.city}))}}]),t}(r.a.Component),x=h.a,F=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(x,null,r.a.createElement("div",{className:"container"},r.a.createElement(y,null),r.a.createElement(p.a,null,r.a.createElement(d.a,{exact:!0,path:"/weather-app/",component:w}),r.a.createElement(d.a,{path:"/weather-app/forecast",component:M}))))}}]),t}(r.a.Component);i.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[27,2,1]]]);
//# sourceMappingURL=main.1a50259e.chunk.js.map