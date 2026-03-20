import { useState } from 'react';
import './App.css';
import Control from './Operation/Control';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./features/Peaple";

export const store = configureStore({
  reducer: {
    user: userReducer   
  }
});

function App() {
  return (
    <Provider store={store}>
      <Control />
    </Provider>
  );
}

export default App;