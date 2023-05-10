import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import DropItem from "./DropItem/DropItem";

const DropDown = () => {
    const dropList = [
        { id: 1, value: "fa", src: "/Img/flag-wave-500.png", href: "/" },
        { id: 2, value: "en", src: "/Img/UK-union-flag.svg", href: "/en" },
    ];

    const router = useRouter();
    const routArray = router.pathname.split("/").filter((i) => i !== "");

    const defaultDrop = dropList.find((i) => i.value === routArray[0]);

    const [open, setOpen] = useState(false);
    const [dropDown, setDropDown] = useState({
        value: defaultDrop?.value || dropList[0].value,
        src: defaultDrop?.src || dropList[0].src,
    });

    const hrefList = [];
    dropList.map(
        (i, index) =>
            index > 0 && hrefList.push(i.href.split("/").join("").trim())
    );

    const filtredRoute = routArray.filter((item) => !hrefList.includes(item));

    if (filtredRoute) {
        filtredRoute.unshift("");
    }

    const clickHandle = (item) => {
        setDropDown({ value: item.value, src: item.src });
        setOpen(false);
    };
    return (
        <div className="relative">
            <div
                className="flex w-full h-9 cursor-pointer items-center gap-x-2"
                data-value={dropDown.value}
                onClick={() => setOpen(!open)}
            >
                <div className="relative w-9 h-5">
                    <Image
                        src={dropDown.src}
                        alt={dropDown.value}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
            <ul
                className={`${
                    !open ? "hidden" : "flex flex-col gap-y-2"
                } absolute top-9 w-full`}
            >
                {dropList.map((item) => (
                    <DropItem
                        key={item.id}
                        item={item}
                        filtredRoute={filtredRoute}
                        clickHandle={clickHandle}
                    />
                ))}
            </ul>
        </div>
    );
};

export default DropDown;
