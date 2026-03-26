import UserProvider from "./contextApi/UserContext";
import User from "./contextApi/User";

function App() {
  return (
    <UserProvider>
      <User />
    </UserProvider>
  );
}

export default App;