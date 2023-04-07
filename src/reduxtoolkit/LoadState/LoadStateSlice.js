import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const LoadState = createSlice({
    name: "onLoad",
    initialState: {
        load :false
    },
    reducers: {
        load_true: (state) => {
            state.load = true ;
        },
    },
    extraReducers: (builder) => {
        builder.addCase([HYDRATE], (state) => {
            return {
                ...state,
            };
        });
    },
});

export default LoadState.reducer;

export const { load_true } = LoadState.actions;
