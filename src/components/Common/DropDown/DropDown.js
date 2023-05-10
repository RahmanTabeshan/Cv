import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Overlay from "../Overlay/Overlay";

const DropDown = ({ option, onChange, value, defaultValue, image }) => {
    const [open, setOpen] = useState(false);

    const clickHandler = (value) => {
        onChange(value);
        setOpen(false);
    };

    const selectedItem = option.find(
        (item) => item.value === (value || defaultValue)
    );

    return (
        <>
            {open && <Overlay />}
            <div className={`relative min-w-[6rem] ${open ? "z-20" : "z-0"} `}>
                <div
                    className="relative border border-neutral-400 rounded-md p-1 bg-white dark:bg-neutral-700"
                    onClick={() => setOpen(!open)}
                >
                    <div>
                        {image
                            ? selectedItem?.icon && (
                                  <selectedItem.icon className="w-6 h-6" />
                              )
                            : selectedItem.label || selectedItem.value}
                    </div>
                    <div className="absolute right-1 top-1/4">
                        <ChevronDownIcon className="w-4 h-4" />
                    </div>
                </div>
                <div
                    className={`${
                        open ? "flex flex-col" : "hidden"
                    } cursor-pointer border border-neutral-400 
                    rounded-md absolute bg-white shadow-2xl overflow-hidden p-1 w-full top-[110%]
                    dark:bg-neutral-700 `}
                >
                    {option.map((item, index) => (
                        <option
                            key={index}
                            className={`flex items-center justify-between gap-x-2 [&:not(:last-child)]:border-b
                            border-neutral-500 dark:border-neutral-100
                        p-1 ${
                            selectedItem.value === item.value
                                ? "bg-neutral-200 dark:bg-neutral-500"
                                : "hover:bg-neutral-200 dark:hover:bg-neutral-500"
                        }`}
                            value={item.value}
                            onClick={() => clickHandler(item.value)}
                        >
                            <p className="text-[15px]">
                                {item.label ? item.label : item.value}
                            </p>
                            {item.icon && (
                                <div>
                                    <item.icon className="w-6 h-6" />
                                </div>
                            )}
                        </option>
                    ))}
                </div>
            </div>
        </>
    );
};

export default DropDown;
