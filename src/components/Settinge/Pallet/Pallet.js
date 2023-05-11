import { random } from "@/utils/random";
import { useEffect, useState } from "react";

const Pallet = () => {
    const ThemeList = [
        { id: 1, title: "Blue" , color:"#1d4ed8" },
        { id: 2, title: "Red" , color : "#b91c1c" },
        { id: 3, title: "Green" , color : "#15803d"},
        { id: 4, title: "Orange" , color : "#c2410c"},
        { id: 5, title: "Emerald" , color : "#047857"},
        { id: 6, title: "Rose" , color : "#be123c"},
    ];

    const [theme, setTheme] = useState(ThemeList[random(0,ThemeList.length-1)].title);

    useEffect(()=>{
        const body = document.body ;
        body.dataset.theme = theme ;
    },[theme])

    return (
        <ul className="flex flex-wrap w-[5rem]">
            {ThemeList.map((item) => (
                <li
                    key={item.id}
                    className="flex justify-center cursor-pointer w-1/2 h-10"
                    onClick={() => setTheme(item.title)}
                >
                    <div className={`w-3/4 aspect-[1/1] h-max rounded-full`} style={{backgroundColor:item.color}}></div>
                </li>
            ))}
        </ul>
    );
};

export default Pallet;
