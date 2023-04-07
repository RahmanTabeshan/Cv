import NavBar from "@/components/Header/NavBar/NavBar";
import Profile from "@/components/Header/Profile/Profile";
import { load_true } from "@/reduxtoolkit/LoadState/LoadStateSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {

    const load = useSelector(state => state.onLoad.load) ;
    const dispatch = useDispatch() ;

    useEffect(() => {
        if(!load){
            dispatch(load_true())
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        
        <header className="flex items-center gap-4 overflow-hidden">
            <NavBar
                className={
                    load
                        ? "visible top-0 opacity-100"
                        : "top-60 invisible opacity-0"
                }
            />
            <Profile
                className={
                    load
                        ? "visible top-0 opacity-100"
                        : "-top-60 invisible opacity-0"
                }
            />
        </header>
    );
};

export default Header;
