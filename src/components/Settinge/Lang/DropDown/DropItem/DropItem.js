import Image from "next/image";
import Link from "next/link";

const DropItem = ({ item, filtredRoute, clickHandle }) => {
    
    const href =(filtredRoute.join("/").includes("/") && item.href === "/" ? "" : item.href) + filtredRoute.join("/");

    return (
        <li className="relative w-9 h-5 cursor-pointer" value={item.value}>
            <Link href={href}>
                <Image
                    src={item.src}
                    alt="iran"
                    fill
                    className="object-cover"
                />
                <div
                    className="absolute top-0 left-0 w-full h-full z-50"
                    data-value={item.value}
                    onClick={() => clickHandle(item)}
                ></div>
            </Link>
        </li>
    );
};

export default DropItem;
