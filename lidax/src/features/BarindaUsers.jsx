import { createSlice } from "@reduxjs/toolkit";

const barindaSlice = createSlice({
    name: "barinda",
    initialState: { value: { name: "", age: 0, email: "" } },
    reducers: {
        barindaLoginUser: (state, action) => {
            state.value = action.payload;
        }
    }
});


export const { barindaLoginUser } = barindaSlice.actions;
export default barindaSlice.reducer;