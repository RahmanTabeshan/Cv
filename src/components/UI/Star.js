import Style from "./Star.module.css"
import { useEffect, useState } from "react";

const Star = () => {

    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <span
            className={`${Style.star} block  bg-blue-700 w-[10rem] h-[10rem] transition-transform duration-500 ${
                show ? "scale-100" : "scale-0"
            }`}
        ></span>
    );

};

export default Star;
