import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import LoadStateSlice from "./LoadState/LoadStateSlice";

const makeStore = () =>
    configureStore({
        reducer: {
            onLoad: LoadStateSlice,
        },
    });

export const wrapper = createWrapper(makeStore);