import React from 'react';

function SessionLength(props){
  function decreasesessionCounter(){
    if(props.detail === 1){
      return;
    }
    props.decreasesession();
  }
  function increasesessionCounter(){
    if(props.detail === 60){
      return;
    }
    props.increasesession();
  }
    return(
        <section>
            <h4 id="session-label">Session Length</h4>
        <div class="length-control">
        
          <button disabled={props.isPlay === true ? "disabled": ""}
           id="session-decrement" class="btn-level" value="-"
          onClick={decreasesessionCounter}>
            Down
          </button>
              <div id="session-length" class="btn-level">{props.detail}</div>
            <button disabled={props.isPlay === true ? "disabled": ""}
             id="session-increment" class="btn-level" value="+"
            onClick={increasesessionCounter}>
               Up
           </button>
      </div>
      </section>
    )
}





export default SessionLength;