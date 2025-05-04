import React, {useState, useEffect,useRef} from "react";



function App() {

const num1=  useRef(null);
const num2=  useRef(null);
const [result, setResult] = useState(null);

const addNumber =()=>
{
 const numm1 = parseFloat(num1.current.value);
 const numm2 = parseFloat(num2.current.value);
 setResult(numm1 + numm2);

}

  return (
    <>
    <input type="number" name="num1"
    ref={num1}
    
    placeholder="type what you wanna" />  <br />

<input type="number" name="num2"
    ref={num2}
   
    placeholder="type what you wanna" />  <br />
    <button onClick={addNumber}>add number</button> 

     <h1>the render count: {result} </h1>
     <p>your typed:</p>
      
    </>
  );
}
export default App;
