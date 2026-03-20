import { useState } from 'react'
import './App.css'
import Control from './Operation/Control'
import {configureStore} from "@reduxjs/toolkit"
import {Provider} from "react-redux"
export const store = configureStore({
  reducer:{
    reducers:useReducer
  }
})

function App() {
  
  return (
    <>
     <Control />
     
    </>
  )
}

export default App
