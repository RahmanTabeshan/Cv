import { NavList } from "@/List/List";
import Link from "next/link";

const NavBar = () => {
    return (
        <nav className="w-max border border-blue-500 rounded-lg p-2 ">
            <ul>
                {NavList.map((item) => (
                    <li key={item.id}>
                        <Link href={item.href}>
                            {item.icon}
                            <p>{item.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
