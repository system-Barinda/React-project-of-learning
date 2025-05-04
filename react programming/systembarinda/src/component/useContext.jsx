import React,{useState, useContext, createContext } from "react";

const users = createContext();
function DesplayDifferentComponent()
{
   return(
    <div>
      <h1> the list of the  </h1> <hr /> <br />
      <UserContainer />
    </div>
   );
}
export default DesplayDifferentComponent;

function GetAll()
{
  const user = useContext(users);
  console.log(user);
 return(
 <div>

<h1>the User Below</h1>
<table>
  <tr>
    <th>id</th>
    <th>the name</th>
    <th>the username</th>
    <th>location</th>
    <th>operation</th>
  </tr>
{
  user.map((user) => (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.location}</td>
      <td>
        <button>edit</button>&nbsp;
        <button>delete</button>
        </td>
    </tr>
  
))
}
</table>
 </div>);
}



const UserContainer = () => {
const List = [
  {id:1,name:"system sylvere Barinda",username:"system-barinda",location:"muhanga"},
  {id:2,name:"iradukunda sandrine",username:"sando",location:"Nyagatare"},
  {id:3,name:"umufite aramukunda ange",username:"hange-umufite",location:"Ruhango"}
]
const [user, setUser] = useState(List);


return (
  <div>
   <users.Provider  value={user}>
    <GetAll />
   </users.Provider>
  </div>
);
};