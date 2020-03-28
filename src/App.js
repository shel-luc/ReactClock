import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import BreakLength from './components/BreakLength';
import SessionLength from './components/SessionLength';
import Timer from './components/Timer';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state= {
    break:5,
    session:25,
    timerMinute:25,
    isPlay:false
   
    }
    this.onIncreaseLength = this.onIncreaseLength.bind(this)
    this.onDecreaseLength = this.onDecreaseLength.bind(this)
    this.onIncreaseSessionLength=this.onIncreaseSessionLength.bind(this)
    this.onDecreaseSessionLength=this.onDecreaseSessionLength.bind(this)
    this.onToggleInterval=this.onToggleInterval.bind(this)
    this.onUpdateTimerMinute=this.onUpdateTimerMinute.bind(this)
    this.onResetTimer=this.onResetTimer.bind(this)
    this.onPlayPauseTimer=this.onPlayPauseTimer.bind(this)
   
  }
  onIncreaseLength(){
    this.setState((prevState) => {
      return{
        break: prevState.break + 1
      }
    })
  }
  onDecreaseLength(){
    this.setState((prevState) => {
      return{
        break: prevState.break - 1
      }
    })
  }
  onIncreaseSessionLength(){
    this.setState((prevState) =>{
      return{
        session:prevState.session + 1,
        timerMinute:prevState.session + 1
      }
    })
  }
  onDecreaseSessionLength(){
    this.setState((prevState) =>{
      return{
        session:prevState.session - 1,
        timerMinute:prevState.session - 1
      }
    })
  }
  onUpdateTimerMinute(){
    this.setState((prevState)=>{
   return{
     timerMinute:prevState.timerMinute -1
   }
    })
  }
  onToggleInterval(isSession){
    if(isSession){
      this.setState({
        timerMinute:this.state.session
      })
    }else{
      this.setState({
        timerMinute:this.state.break
      })
    }
  }
 onResetTimer(){
   this.setState({
     timerMinute:this.state.session
   })
 }
 onPlayPauseTimer(isPlay){
   this.setState({
     isPlay: isPlay
   })
 }
 
  render(){
    return(
      <main>
        <div class="main-title">Pomodoro Clock</div>
        <section className="length-control-container">
        <BreakLength
        isPlay={this.state.isPlay}
         details={this.state.break} 
         increasebreak={this.onIncreaseLength}
         decreasebreak={this.onDecreaseLength} />
        <SessionLength 
        isPlay={this.state.isPlay}
        detail={this.state.session}
        increasesession={this.onIncreaseSessionLength}
        decreasesession={this.onDecreaseSessionLength} />
        </section>
        <Timer
        minute={this.state.timerMinute}
         break={this.state.break}
         updateTimerMinute={this.onUpdateTimerMinute}
         toggleInterval={this.onToggleInterval}
         resetTimer={this.onResetTimer}
         onPlayPauseTimer={this.onPlayPauseTimer}
        />
            
      </main>
    )
  }
}


export default App;
