import { random } from "@/utils/random";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Main = ({ children }) => {
    const classes = [
        { in: "!scale-100", out: "!scale-0" },
        { in: "!opacity-100 !right-0", out: "!opacity-0 !-right-96" },
    ];
    const randomClass = classes[random(0, classes.length - 1)];
    const [load, setLoad] = useState(randomClass.out);

    const router = useRouter();

    useEffect(() => {
        setLoad(randomClass.in);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <main
            className={`relative min-h-[37rem] smd:h-[37rem] w-full smd:w-[60rem] rounded-l-lg rounded-r-lg 
        smd:rounded-r-none shadow-[0_3px_16px_-5px] shadow-black dark:shadow-white smd:-mr-5 
        transition-all duration-1000 bg-white dark:text-white dark:bg-neutral-700 ${
            router.pathname === "/" ? "" : "smd:overflow-y-auto smd:overflow-x-hidden"
        } ${load} `}
        >
            {children}
        </main>
    );
};

export default Main;
