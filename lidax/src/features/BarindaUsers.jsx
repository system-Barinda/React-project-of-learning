import {createSlice} from "@reduxjs/toolkit"
import { login } from "./Users"

const barindaSlice = createSlice({
    name:"barinda",
    initialState:{value:{name:"",age:0,email:""}},
    reducers:{
        barindaLoginUser:(state,action) => {state.value = action.payload}
    }

})

export const {barindaLoginUser} = barindaLoginUser.actions
export default barindaLoginUser.reducer