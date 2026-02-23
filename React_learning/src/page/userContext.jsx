import { createContext,useContext } from "react";
const UserContext = createContext(null);
export default function mycontenxt(){
const user = {
    name:"system sylvere",
    role:"admin"
};
return(
    <UserContext.Provider  value={user}>
        <Dashboard />
    </UserContext.Provider>
)
}

function Dashboard(){
    const user = useContext(UserContext);
    return(<header className="flex gap-1">
         <h2>Welcome {user.name}</h2>
      <p>Role: {user.role}</p>
    </header>)
}