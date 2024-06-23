import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Name:"",
    Id:"",
    Rol:""
}
export const userSlice = createSlice({
    name:"user",
    initialState: null,
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
        },
        removeUser: () => {
            return null;
        }

    }
})
export const {addUser,UpdateUser,removeUser}=userSlice.actions;
export default userSlice.reducer;