import DashBoardRedux from "./components/DashBoardRedux";
import GetAllData from "./components/GetAllData";
import store from "./service/store";
import { Provider } from "react-redux";

function App(){
  return (
    <Provider store={store}>
      <DashBoardRedux />
      <GetAllData /> 
    </Provider>
  );
}

export default App;