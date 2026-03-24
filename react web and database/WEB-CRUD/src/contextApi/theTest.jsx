import { createContext } from "react";
import ContextApi1 from "./contextApi/ContextApi1";


export const ContextApi = createContext(null);

function App() {
  const data = {
    name: "person",
    location: "done",
    country: "Rwanda"
  };

  return (
    <ContextApi.Provider value={data}>
      <ContextApi1 />
    </ContextApi.Provider>
  );
}

export default App;
