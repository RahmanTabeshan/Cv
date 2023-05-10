
import { useEffect, useState } from "react";

const ToggleMode = () => {
    const [checked, setChecked] = useState(null);

    useEffect(() => {

        const systemMode = window.matchMedia("(prefers-color-scheme: dark)");
        const checkSystemMode = () => {
            if (systemMode.matches) {
                setChecked(true);
            } else {
                setChecked(false);
            }
        };
        systemMode.addEventListener("change", checkSystemMode);
        checkSystemMode() ;

        return ()=>{
            // systemMode.removeEventListener("change" , checkSystemMode) ;
        }

    }, []);

    useEffect(() => {
        const html = document.documentElement;
        if (checked) {
            html.classList.remove("light");
            html.classList.add("dark");
            localStorage.setItem("mode","dark")
        } else {
            html.classList.remove("dark");
            html.classList.add("light");
            localStorage.setItem("mode" , "light")
        }
    }, [checked]);

    return (
        <label className="dark:bg-red-500">
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => setChecked(!checked)}
            />
        </label>
    );
};

export default ToggleMode;
