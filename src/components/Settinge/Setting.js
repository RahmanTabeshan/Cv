import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import DropDown from "./Lang/DropDown/DropDown";
import dynamic from "next/dynamic";
const Mode = dynamic(()=>import("./Mode/Mode") , {ssr:false})
const Setting = () => {

    return (
        <>
            <div className="flex fixed left-0 top-5 p-2 z-[1000] ">
                <button className="bg-white border h-max border-neutral-300 border-l-0 rounded-r-lg p-3 shadow-myShadow">
                    <Cog6ToothIcon className="w-8 h-8 " />
                </button>
                <div
                    dir="ltr"
                    className="flex flex-col bg-white z-10 p-2 border border-blue-900"
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
                    <div></div>
                </div>
            </div>
        </>
    );
};

export default Setting;
