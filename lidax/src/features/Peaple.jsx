import { createSlice} from "@reduxjs/toolkit"

const userSlicer = createSlice({
     name:"userbarinda",
     initialState:{value:{name:"",age:0,email:""}},
     reducers:{
        Login:(state,action) => { state.value = action.payload},
        Logout:(state) => { state.value = {name:"",age:0,email:""} }
     }
     
})

export const { Login} = userSlicer.actions;
export default userSlicer.reducer;