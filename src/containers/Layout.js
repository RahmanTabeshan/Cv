import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { random } from "@/utils/random";

const Layout = ({ children , personData }) => {
    const classes = [
        {in:"scale-100" , out:"scale-0"},
        {in:"opacity-100 right-0" , out:"opacity-0 -right-96"},
    ] ;
    const [load , setLoad] = useState(classes[random(0,classes.length-1)].out) ;
    useEffect(()=>{
        setLoad(classes[random(0,classes.length-1)].in) ;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <>
            <Header personData={personData} />
            <main
                className={`relative smd:overflow-y-auto min-h-[37rem] smd:h-[37rem] w-full smd:w-[60rem] rounded-l-lg rounded-r-lg smd:rounded-r-none shadow-[0_3px_16px_-5px] shadow-black dark:shadow-white 
                smd:-mr-5 transition-all duration-1000 bg-white dark:text-white dark:bg-neutral-700 ${
                    load 
                }`}
            >
                {children}
            </main>

            <Footer />
        </>
    );
};

export default Layout;
