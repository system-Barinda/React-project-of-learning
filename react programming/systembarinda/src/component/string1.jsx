import React, { useRef ,useEffect, useState } from "react";
const App = () => {


const inputValue = useRef(null);
 const [name, setName] = useState("");



 const handleSubmit = ()=>{
 const inputName = inputValue.current.value.trim();
 if( inputName)
  {
    const result = inputName[0].toUpperCase();
    setName(result+ inputName.slice(1));
  } 

 }


return (
  <>
   <center>
    <h1> manipulation of strings</h1> <hr /> <br />
   <div className="nana">
    <input type="text"
    ref ={inputValue}
    placeholder="type any word" />
    <button onClick={handleSubmit}>operate</button>
    </div>
  <br /><br />
    <p> {name}</p>
   </center>
  </>
);
};
export default App;