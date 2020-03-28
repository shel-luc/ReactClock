(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n.n(s),a=n(6),r=n.n(a),o=(n(13),n(2)),l=n(3),c=n(1),u=n(4),m=n(5);n(14);var d=function(e){return i.a.createElement("section",null,i.a.createElement("h4",{id:"break-label"},"Break Length"),i.a.createElement("div",{class:"length-control"},i.a.createElement("button",{disabled:!0===e.isPlay?"disabled":"",id:"break-decrement",class:"btn-level",value:"-",onClick:function(){1!==e.details&&e.decreasebreak()}},"Down"),i.a.createElement("div",{id:"break-length",class:"btn-level"},e.details),i.a.createElement("button",{disabled:!0===e.isPlay?"disabled":"",id:"break-increment",class:"btn-level",value:"+",onClick:function(){60!==e.details&&e.increasebreak()}},"Up")))};var h=function(e){return i.a.createElement("section",null,i.a.createElement("h4",{id:"session-label"},"Session Length"),i.a.createElement("div",{class:"length-control"},i.a.createElement("button",{disabled:!0===e.isPlay?"disabled":"",id:"session-decrement",class:"btn-level",value:"-",onClick:function(){1!==e.detail&&e.decreasesession()}},"Down"),i.a.createElement("div",{id:"session-length",class:"btn-level"},e.detail),i.a.createElement("button",{disabled:!0===e.isPlay?"disabled":"",id:"session-increment",class:"btn-level",value:"+",onClick:function(){60!==e.detail&&e.increasesession()}},"Up")))},b=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).state={timerSecond:0,intervalId:0,isSession:!0},s.playTimer=s.playTimer.bind(Object(c.a)(s)),s.pauseTimer=s.pauseTimer.bind(Object(c.a)(s)),s.resetTimer=s.resetTimer.bind(Object(c.a)(s)),s.decreaseTimer=s.decreaseTimer.bind(Object(c.a)(s)),s}return Object(l.a)(n,[{key:"playTimer",value:function(){var e=setInterval(this.decreaseTimer,1e3);this.props.onPlayPauseTimer(!0),this.setState({intervalId:e})}},{key:"pauseTimer",value:function(){clearInterval(this.state.intervalId),this.props.onPlayPauseTimer(!1)}},{key:"resetTimer",value:function(){this.pauseTimer(),this.props.resetTimer(),this.props.onPlayPauseTimer(!1),this.setState({timerSecond:0,isSession:!0})}},{key:"decreaseTimer",value:function(){switch(this.state.timerSecond){case 0:0===this.props.minute?this.state.isSession?(this.setState({isSession:!1}),this.props.toggleInterval(this.state.isSession)):(this.setState({isSession:!0}),this.props.toggleInterval(this.state.isSession)):(this.props.updateTimerMinute(),this.setState({timerSecond:59}));break;default:this.setState((function(e){return{timerSecond:e.timerSecond-1}}))}}},{key:"render",value:function(){return i.a.createElement("section",null,i.a.createElement("div",{className:"timer"},i.a.createElement("div",{class:"timer-wrapper"},i.a.createElement("div",{id:"timer-label"},!0===this.state.isSession?"Session":"Break"),i.a.createElement("div",{id:"time-left"},this.props.minute," : ",0===this.state.timerSecond?"00":this.state.timerSecond<10?"0"+this.state.timerSecond:this.state.timerSecond))),i.a.createElement("div",{className:"timer-control"},i.a.createElement("button",{id:"start_stop",onClick:this.playTimer}," Play "),i.a.createElement("button",{id:"pause",onClick:this.pauseTimer},"Pause"),i.a.createElement("button",{id:"reset",onClick:this.resetTimer},"Reset")))}}]),n}(i.a.Component),v=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).state={break:5,session:25,timerMinute:25,isPlay:!1},s.onIncreaseLength=s.onIncreaseLength.bind(Object(c.a)(s)),s.onDecreaseLength=s.onDecreaseLength.bind(Object(c.a)(s)),s.onIncreaseSessionLength=s.onIncreaseSessionLength.bind(Object(c.a)(s)),s.onDecreaseSessionLength=s.onDecreaseSessionLength.bind(Object(c.a)(s)),s.onToggleInterval=s.onToggleInterval.bind(Object(c.a)(s)),s.onUpdateTimerMinute=s.onUpdateTimerMinute.bind(Object(c.a)(s)),s.onResetTimer=s.onResetTimer.bind(Object(c.a)(s)),s.onPlayPauseTimer=s.onPlayPauseTimer.bind(Object(c.a)(s)),s}return Object(l.a)(n,[{key:"onIncreaseLength",value:function(){this.setState((function(e){return{break:e.break+1}}))}},{key:"onDecreaseLength",value:function(){this.setState((function(e){return{break:e.break-1}}))}},{key:"onIncreaseSessionLength",value:function(){this.setState((function(e){return{session:e.session+1,timerMinute:e.session+1}}))}},{key:"onDecreaseSessionLength",value:function(){this.setState((function(e){return{session:e.session-1,timerMinute:e.session-1}}))}},{key:"onUpdateTimerMinute",value:function(){this.setState((function(e){return{timerMinute:e.timerMinute-1}}))}},{key:"onToggleInterval",value:function(e){e?this.setState({timerMinute:this.state.session}):this.setState({timerMinute:this.state.break})}},{key:"onResetTimer",value:function(){this.setState({timerMinute:this.state.session})}},{key:"onPlayPauseTimer",value:function(e){this.setState({isPlay:e})}},{key:"render",value:function(){return i.a.createElement("main",null,i.a.createElement("div",{class:"main-title"},"Pomodoro Clock"),i.a.createElement("section",{className:"length-control-container"},i.a.createElement(d,{isPlay:this.state.isPlay,details:this.state.break,increasebreak:this.onIncreaseLength,decreasebreak:this.onDecreaseLength}),i.a.createElement(h,{isPlay:this.state.isPlay,detail:this.state.session,increasesession:this.onIncreaseSessionLength,decreasesession:this.onDecreaseSessionLength})),i.a.createElement(b,{minute:this.state.timerMinute,break:this.state.break,updateTimerMinute:this.onUpdateTimerMinute,toggleInterval:this.onToggleInterval,resetTimer:this.onResetTimer,onPlayPauseTimer:this.onPlayPauseTimer}))}}]),n}(i.a.Component);r.a.render(i.a.createElement(v,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.157af3a8.chunk.js.map