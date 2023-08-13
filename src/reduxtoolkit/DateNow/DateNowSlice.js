
import { createSlice } from "@reduxjs/toolkit" 
import { HYDRATE } from "next-redux-wrapper";

const DateSlice = createSlice({
    name: "Date",
    initialState: {
        day : "" ,
        date : "" ,
    },
    reducers: {
        AddDate: (state,action) => {
            state.day = action.payload.day ;
            state.date = action.payload.date ;
        },
    },
    extraReducers: (builder) => {
        builder.addCase([HYDRATE], (state) => {
            return {
                ...state,
                ...action.payload.auth,
            };
        });
    },
}) ;

export default DateSlice.reducer ;

export const {AddDate} = DateSlice.actions ;