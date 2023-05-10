import DropDown from "@/components/Common/DropDown/DropDown";
import { MoonIcon } from "@heroicons/react/24/outline";
import { ComputerDesktopIcon, SunIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const Mode = ({ label }) => {
    const modeList = [
        { value: "light", label: "Light", icon: SunIcon },
        { value: "dark", label: "Dark", icon: MoonIcon },
        { value: "system", label: "System", icon: ComputerDesktopIcon },
    ];

    const [select, setSelect] = useState(
        localStorage.getItem("Mode") || "light"
    );

    const html = document.documentElement;
    const systemMode = window.matchMedia("(prefers-color-scheme: dark)");

    const darkSystem = () => {
        if (
            localStorage.Mode === "dark" ||
            (localStorage.Mode === "system" && systemMode.matches)
        ) {
            html.classList.add("dark");
            html.classList.remove("light");
        } else {
            html.classList.add("light");
            html.classList.remove("dark");
        }
    };

    darkSystem() ;

    useEffect(() => {
        switch (select) {
            case "light":
                localStorage.setItem("Mode", "light");
                html.classList.add("light");
                html.classList.remove("dark");
                break;
            case "dark":
                localStorage.setItem("Mode", "dark");
                html.classList.add("dark");
                html.classList.remove("light");
                break;
            default:
                localStorage.setItem("Mode", "system");
                darkSystem() ;
                break;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [select]);

    systemMode.addEventListener("change",(e)=>{
        if(localStorage.Mode === "system"){
            if(e.matches){
                html.classList.add("dark");
                html.classList.remove("light");
            }else{
                html.classList.add("light");
                html.classList.remove("dark");
            }
        }
    })

    return (
        <>
            {label ? <h1>{`${label} : `}</h1> : ""}
            <DropDown
                option={modeList}
                value={select}
                onChange={setSelect}
                image
            />
        </>
    );
};

export default Mode;
