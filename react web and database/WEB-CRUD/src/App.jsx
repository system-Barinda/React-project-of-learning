import { createContext } from "react";
import ContextApi1 from "./contextApi/ContextApi1"

function App(){
  const data = {
    name:"person",
    location:"done",
    country:"Rwanda"
  };

  const contextApi = createContext(null);
  return(
    <contextApi.Provider value={data}>
      <ContextApi1 />

    </contextApi.Provider>
  )
}
export default App;