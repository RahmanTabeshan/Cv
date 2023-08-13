import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import LoadStateSlice from "./LoadState/LoadStateSlice";
import AdminSlice from "./AdminInfo/AdminSlice";
import DateNowSlice from "./DateNow/DateNowSlice";

const makeStore = () =>
    configureStore({
        reducer: {
            onLoad: LoadStateSlice,
            AdminInfo : AdminSlice,
            Date : DateNowSlice ,
        },
    });

export const wrapper = createWrapper(makeStore);