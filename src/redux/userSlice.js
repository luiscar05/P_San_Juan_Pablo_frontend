import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Name:"",
    Id:"",
    Rol:""
}
export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            const {nombre,cedula,rol} = action.payload;
            state.Name=nombre;
            state.Id=cedula;
            state.Rol=rol;
        },
        UpdateUser:(state,action)=>{
            const {Updatename,Updatecedula,Updateemail,rol} = action.payload;
            state.Name=Updatename;
            state.Cedula=Updatecedula;
            state.Email=Updateemail;
        }
    }
})
export const {addUser,UpdateUser}=userSlice.actions;
export default userSlice.reducer;