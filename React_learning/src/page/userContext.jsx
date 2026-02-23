// import { createContext, useContext } from "react";

// // create context
// export const UserContext = createContext(null);

// // Provider component
// export default function MyContext() {
//   const user = {
//     name: "system sylvere",
//     role: "admin",
//   };

//   return (
//     <UserContext.Provider value={user}>
//       <Dashboard />
//     </UserContext.Provider>
//   );
// }

// // Consumer component
// function Dashboard() {
//   const user = useContext(UserContext);

//   return (
//     <header className="flex gap-1">
//       <h2>Welcome {user.name}</h2>
//       <p>Role: {user.role}</p>
//     </header>
//   );
// }
import usercontext from "../components/componetUserContext"
import DashBoardUseContext from "../components/DashboardUseContext";
export default function MyComponent(){
    const menu = ['home','service','contact','about us'];
    return(<>
      <usercontext.Provider value={menu}>
        <DashBoardUseContext />
      </usercontext.Provider>
    </>)
}