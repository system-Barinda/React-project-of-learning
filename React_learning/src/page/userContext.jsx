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
// import usercontext from "../components/componetUserContext"
// import DashBoardUseContext from "../components/DashboardUseContext";
// export default function MyComponent(){
//     const menu = ['home','service','contact','about us'];
//     return(<>
//       <usercontext.Provider value={menu}>
//         <DashBoardUseContext />
//       </usercontext.Provider>
//     </>)
// }

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext("light");

export default function MyApp() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Form />
      </ThemeContext.Provider>

      <Button
        onClick={() =>
          setTheme(theme === "dark" ? "light" : "dark")
        }
      >
        Toggle theme
      </Button>
    </>
  );
}

function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = "panel-" + theme;

  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children, onClick }) {
  const theme = useContext(ThemeContext);
  const className = "button-" + theme;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}