import { NavList } from "@/utils/List/List";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NavBar = ({ className }) => {
    const router = useRouter();

    useEffect(()=>{
        console.log("navbar")
    },[])

    return (
        <nav
            className={`relative w-max border rounded-lg px-2 py-4 bg-blue-700 h-max transition-all duration-1000 
            ${className}`}
        >
            <ul className="flex flex-col gap-y-3">
                {NavList.map((item) => (
                    <li key={item.id}>
                        <Link
                            href={item.href}
                            className={`flex flex-col items-center rounded-lg gap-y-1 px-1 py-2 transition-colors 
                            duration-200 border border-white
                            ${
                                router.pathname === item.href
                                    ? "bg-white !text-blue-700"
                                    : "hover:text-blue-700 hover:bg-white text-white"
                            } `}
                        >
                            {item.icon}
                            <p className="text-[11px] font-bold font-vazir">
                                {item.title}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
