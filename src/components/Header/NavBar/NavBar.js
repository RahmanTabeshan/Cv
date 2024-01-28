import { NavList } from "@/utils/List/List";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = ({ className }) => {
    const router = useRouter();
    return (
        <nav
            className={`fixed -bottom-40 mx-auto left-1/2 lg:left-auto lg:translate-x-0 -translate-x-1/2 lg:bottom-auto z-[1000] lg:relative 
            w-max border rounded-lg px-4 lg:px-2 py-3 lg:py-4 bg-primary h-max transition-all duration-1000 ${className}`}
        >
            <ul className="flex lg:flex-col gap-y-3 gap-x-5 ">
                {NavList.map((item) => (
                    <li key={item.id}>
                        <Link
                            href={item.href}
                            className={`flex flex-col items-center w-[3.3rem] lg:w-[3.75rem] rounded-lg gap-y-1 px-1 py-2 transition-colors 
                            duration-200 border border-white whitespace-nowrap
                            ${
                                router.pathname === item.href
                                    ? "bg-white !text-primary"
                                    : "hover:text-primary hover:bg-white text-white"
                            } `}
                        >
                            {item.icon}
                            <p className="text-[10px] lg:text-[11px] font-bold font-vazir">{item.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
