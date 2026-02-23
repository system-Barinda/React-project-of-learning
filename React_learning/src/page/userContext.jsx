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
    return(<header className="flex gap-1">
        <div>home</div>
        <div>home</div>
        <div>home</div>
        <div>home</div>
    </header>)
}