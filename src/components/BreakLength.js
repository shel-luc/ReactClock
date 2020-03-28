import React from 'react';


function BreakLength (props){
    function decreaseCounter(){
        if(props.details === 1){
            return;
        }
        props.decreasebreak();
    }
        function increaseCounter(){
            if(props.details === 60){
                return;
            }
            props.increasebreak();
    }
    return(
<section>
         <h4 id="break-label">Break Length</h4>
        <div class="length-control">
          
          <button disabled={props.isPlay === true ? "disabled": ""}
           id="break-decrement" class="btn-level" value="-"
          onClick={decreaseCounter}>
          Down
          </button>
          <div id="break-length" class="btn-level">{props.details}
          </div>
          <button disabled={props.isPlay === true ? "disabled": ""} 
          id="break-increment" class="btn-level" value="+"
          onClick={increaseCounter}>
            Up
          </button>
          </div>
          </section>
    )
      
}
export default BreakLength;