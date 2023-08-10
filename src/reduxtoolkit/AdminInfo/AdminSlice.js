import { createSlice } from "@reduxjs/toolkit" 
import { HYDRATE } from "next-redux-wrapper";

const AdminSlice = createSlice({
    name: "AdminInfo",
    initialState: {
        Admin :{} ,
    },
    reducers: {
        AdminInfo: (state,action) => {
            state.Admin = action.payload ;
        },
    },
    extraReducers: (builder) => {
        builder.addCase([HYDRATE], (state) => {
            return {
                ...state,
            };
        });
    },
}) ;

export default AdminSlice.reducer ;

export const {AdminInfo} = AdminSlice.actions ;