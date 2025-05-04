import React, { useState } from "react";

const App = () => {
const [data, setData] = useState([
    {id:1,name:"system",completed:false},
    {id:2,name:"sylver",completed:false},
    {id:3,name:"Barinda",completed:false}
])

const toggleItem = (id) => {
setData(
    data.map((item) => 
    item.id === id ? { ...item,completed: !item.completed } : item)
)
}
    return(
        <>
         <center><h1> my name is Barinda</h1> <hr />
        
         <br />
         <ul>
           
           {
            data.map((user) => (
               <li key={user.id}
                onClick={() => toggleItem(user.id) }
                style={{
                    cursor: 'pointer',
                    textDecoration: user.completed ? 'line-through' : 'none',
                  }}
               >{user.name}</li>   
            ))
           }
         </ul>
         
         </center>
        </>
    )
};
export default App;