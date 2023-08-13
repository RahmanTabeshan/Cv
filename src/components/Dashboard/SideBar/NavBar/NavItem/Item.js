import Link from "next/link";
import { useRouter } from "next/router";

const NavItem = ({ title, href, icon }) => {
    const router = useRouter();
    const active = router.pathname === href;

    return (
        <li className="w-full">
            <Link
                href={href}
                className={`flex gap-x-6 py-2 px-3  rounded-3xl dark:text-white transition-all duration-200 group ${
                    active
                        ? "bg-white dark:bg-neutral-500 font-bold"
                        : "hover:bg-white dark:hover:bg-neutral-500  dark:bg-neutral-700"
                }`}
            >
                <div
                    className={`w-6 [&>:first-child]:transition-all [&>:first-child]:duration-200  ${
                        active
                            ? "[&>:first-child]:fill-black dark:[&>:first-child]:fill-white"
                            : "group-hover:[&>:first-child]:fill-black dark:group-hover:[&>:first-child]:fill-white [&>:first-child]:fill-white dark:[&>:first-child]:fill-neutral-500"
                    }`}
                >
                    {icon}
                </div>
                <div>{title}</div>
            </Link>
        </li>
    );
};

export default NavItem;
