import React, {useReducer} from 'react'

const INCREMENT="INCREMENT"
const DECREMENT="DECREMENT"
function reduser(state,action){
    switch(action.type){
        case INCREMENT:
            return state +1;
        case DECREMENT:
            return state -1;
        default:
            return state;
    }
}
const UseReduser = () => {
   // const [count,setCount]=useState(0);
   const [count,dispatch]=useReducer(reduser,0);
  return (
    <div>  
        <h1>{count}</h1><br/>
        
        <div>
        <button onClick={()=>dispatch({type:INCREMENT})}>  increment  </button> 
        <button  onClick={()=>dispatch({type:DECREMENT})}>  decrement  </button>
        </div>
    </div>
  )
}

export default UseReduser