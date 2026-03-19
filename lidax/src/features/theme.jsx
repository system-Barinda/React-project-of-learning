import { createSlice } from "@reduxjs/toolkit";

const initialvalue = ""
const themeSlice = createSlice({
    name: "theme",
    initialState: { value: initialvalue },
    reducers: {
        changecolor: (state, action) => {
            state.value = action.payload;
        },
      
    }
});


export const { changecolor } = themeSlice.actions;
export default themeSlice.reducer;