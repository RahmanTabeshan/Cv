import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import LoadStateSlice from "./LoadState/LoadStateSlice";
import AdminSlice from "./AdminInfo/AdminSlice";

const makeStore = () =>
    configureStore({
        reducer: {
            onLoad: LoadStateSlice,
            AdminInfo : AdminSlice,
        },
    });

export const wrapper = createWrapper(makeStore);