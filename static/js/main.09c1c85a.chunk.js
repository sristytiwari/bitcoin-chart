(this.webpackJsonpassignment=this.webpackJsonpassignment||[]).push([[0],{151:function(t,a,e){"use strict";e.r(a);var n=e(0),o=e.n(n),r=e(41),i=e.n(r),s=(e(54),e(55),e(56),e(47)),c=e(42),l=e(43),d=e(48),u=e(46),h=e(44),m=e(24),p=e.n(m),f=function(t){Object(d.a)(e,t);var a=Object(u.a)(e);function e(t){var n;return Object(c.a)(this,e),(n=a.call(this,t)).getData=function(){fetch("https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD",{method:"GET",headers:{"x-ba-key":"ZDJjOWViNDJkZDY5NGJmNTgwMGFiNWU2YzI5M2M2YTc"}}).then((function(t){return t.json()})).then((function(t){n.formatAndSetData(t),n.setState({allData:[].concat(Object(s.a)(n.state.allData),[t])})}))},n.formatAndSetData=function(t){var a=t.last,e=t.timestamp;n.chartsjs.chartInstance.data.labels.push(p()(new Date(e)).format("MMM Do h:mm A")),n.chartsjs.chartInstance.data.datasets[0].data.push(a),n.chartsjs.chartInstance.update({preservation:!0})},n.state={allData:[]},n.data={labels:[],datasets:[{label:"Bitcoin live",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[]}]},n.chartsjs=o.a.createRef(),n}return Object(l.a)(e,[{key:"componentDidMount",value:function(){setInterval(this.getData,2e3)}},{key:"render",value:function(){var t=this;return o.a.createElement("div",{style:{margin:50}},o.a.createElement(h.a,{data:this.data,height:400,options:{maintainAspectRatio:!1},ref:function(a){t.chartsjs=a}}))}}]),e}(n.Component);var b=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},49:function(t,a,e){t.exports=e(151)},54:function(t,a,e){},55:function(t,a,e){t.exports=e.p+"static/media/logo.5d5d9eef.svg"},56:function(t,a,e){}},[[49,1,2]]]);
//# sourceMappingURL=main.09c1c85a.chunk.js.map