import React from 'react';

class Timer extends React.Component{
  constructor(props){
    super(props);
    this.state ={
    
      timerSecond:0,
      intervalId:0,
      isSession: true
      
    
    }

    this.playTimer=this.playTimer.bind(this)
    this.pauseTimer=this.pauseTimer.bind(this)
    this.resetTimer=this.resetTimer.bind(this)
    this.decreaseTimer= this.decreaseTimer.bind(this)
 /* this.pause=this.pause.bind(this)
  this.reset=this.reset.bind(this )*/
  }
 
  playTimer(){
    let intervalId= setInterval(this.decreaseTimer, 1000);
    this.props.onPlayPauseTimer(true);
    this.setState({
      intervalId: intervalId
    })
  }
  pauseTimer(){
    clearInterval(this.state.intervalId);
    this.props.onPlayPauseTimer(false);
  }
  resetTimer(){
    this.pauseTimer();
    this.props.resetTimer();
    this.props.onPlayPauseTimer(false);
    this.setState({
     timerSecond:0,
     isSession:true
    })
  }
  decreaseTimer(){
    switch(this.state.timerSecond){
      case 0:
        if(this.props.minute === 0){
          if(this.state.isSession){
            this.setState({
              isSession: false
            });
            this.props.toggleInterval(this.state.isSession);
          }else{
            this.setState({
              isSession: true 
            });
            this.props.toggleInterval(this.state.isSession);

          }
        }else {
        this.props.updateTimerMinute();
        this.setState({
          timerSecond:59
        })
      }
        break;
        default:
          this.setState((prevState)=>{
            return{
              timerSecond: prevState.timerSecond -1
            }
          })
          break;
    }
  }
  render(){
    return(
        <section>
        <div className="timer">
              <div class="timer-wrapper">
                <div id="timer-label">{this.state.isSession === true ? "Session" : "Break"}</div>
                <div id="time-left">{this.props.minute} : {
          this.state.timerSecond === 0 ? "00" :
          this.state.timerSecond < 10 ? "0" + 
          this.state.timerSecond : this.state.timerSecond
         }</div>
        </div>
                </div>
                
        
         
         
                <div className="timer-control">
                  <button id="start_stop" onClick={this.playTimer}> Play </button>
                    <button id="pause" onClick={this.pauseTimer}>Pause</button>
                    <button id="reset" onClick={this.resetTimer}>Reset</button>
                </div>
                </section>
 )
}
}







export default Timer;