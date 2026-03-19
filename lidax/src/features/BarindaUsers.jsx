import { createSlice } from "@reduxjs/toolkit";

const barindaSlice = createSlice({
    name: "barinda",
    initialState: { value: { name: "", age: 0, email: "" } },
    reducers: {
        barindaLoginUser: (state, action) => {
            state.value = action.payload;
        },
        barindaLogoutUser:(state) => {state.value = {name: "", age: 0, email: ""}}
    }
});


export const { barindaLoginUser,barindaLogoutUser } = barindaSlice.actions;
export default barindaSlice.reducer;