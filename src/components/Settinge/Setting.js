import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import DropDown from "./Lang/DropDown/DropDown";
import dynamic from "next/dynamic";
import Pallet from "./Pallet/Pallet";
import { useState } from "react";
import Link from "next/link";
const Mode = dynamic(() => import("./Mode/Mode"), { ssr: false });
const Setting = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div
                className={` flex fixed transition-[left] duration-300 ${
                    open ? "-left-2" : "left-[-188px]"
                } top-5 p-2 z-[1000] `}
            >
                <button
                    className="bg-white dark:bg-neutral-700 dark:text-white border h-max
                    border-neutral-300 border-l-0 dark:border-0 rounded-r-lg p-3 shadow-myShadow
                    shadow-black dark:shadow-white"
                    onClick={() => setOpen(!open)}
                >
                    <Cog6ToothIcon className="w-8 h-8 " />
                </button>
                <div
                    dir="ltr"
                    className="flex flex-col gap-y-5 border border-neutral-300 bg-white z-10 p-2 dark:bg-neutral-700
                    dark:text-white w-[180px]"
                >
                    <div className="flex gap-x-2 items-center">
                        <h1>Lang : </h1>
                        <DropDown />
                    </div>
                    <div className="flex gap-x-2 items-center">
                        <h1>Mode : </h1>
                        {/* <ToggleMode /> */}
                        <Mode />
                    </div>
                    <div className="flex gap-x-2 items-start">
                        <h1>Theme : </h1>
                        <Pallet />
                    </div>
                    <Link
                        href="/admin"
                        className="bg-primary border border-primary text-white text-center px-3 py-2 rounded-xl transition-colors duration-200 hover:bg-secondary"
                    >
                        پنل مدیریت
                    </Link>
                    <Link
                        href="/"
                        className="bg-primary border border-primary text-white text-center px-3 py-2 rounded-xl transition-colors duration-200 hover:bg-secondary"
                    >
                        صفحه اصلی
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Setting;
