import React, { useState } from "react";

function Barinda()
{
  const liste = ["home","system","service","contact","red"];
  const [lists, setLists] = useState(liste);

  const [inputValue,setInputValue] = useState("");

  const addList = (e)=> {
    if(inputValue.trim() !== "")
    {
      setLists([...lists,inputValue]);
      setInputValue("");
    }
  }
  const HundleChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  }
  // I'm going to remove any list here you wanna it
  const removeList = (index) => {
  const NewList = lists.filter((_, i) => i !== index);
   setLists(NewList);
  }

  return (
  <div>
    <input type="text" 
     value={inputValue}
     onChange={HundleChange}
    placeholder="add list name"/>
    <button className="but" onClick={addList}>add list</button>
  <br />

    <ul>
      { lists.map((item,index) => (
        <li key={index}>{item}&nbsp; <button  onClick={() => removeList(index)}>remove</button></li>
      ))}
    </ul>

  </div>
  );
}

export default Barinda;