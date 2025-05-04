import React,{ useReducer,} from "react";

const counterReducer = (state,action) => 
{
 switch(action.type)
 {
  case 'increment':
    return {count:state.count + 1};
    case 'decrement':
      return {count:state.count -1};
      case 'reset':
        return {count:state.count * 0};
        default :
        return state;
 }
}
const barinda = () => {
  const[state, system] = useReducer(counterReducer, {count:0})
  return(
    <div>
      <h1>barinda system</h1> <hr /><br />
    <br />
    <p><strong>count :{state.count}</strong></p>
      <button onClick={() => system({type:'increment'})}>+</button>&nbsp;
      <button onClick={() => system({type:'decrement'})}>-</button>&nbsp;
      <button onClick={() => system({type:'reset'})}>reset</button>
    </div>
  );
};
export default barinda;