import { DashboardList } from "@/utils/List/List";
import NavItem from "./NavItem/Item";

const NavBar = () => {
    return (
        <ul className="flex flex-col gap-y-4">
            {DashboardList.map((nav) => (
                <NavItem
                    key={nav.id}
                    icon={nav.icon}
                    title={nav.title}
                    href={nav.href}
                />
            ))}
        </ul>
    );
};

export default NavBar;
