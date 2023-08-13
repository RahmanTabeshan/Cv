import { HomeIcon } from "@heroicons/react/24/outline";
import NavBar from "./NavBar/NavBar";

const SideBar = () => {
    return (
        <header className="bg-neutral-100 dark:bg-neutral-800 px-5 py-10 h-[95vh] min-w-[250px] rounded-l-[50px] sticky top-3 ">
            <div>
                <NavBar />
            </div>
        </header>
    );
}
 
export default SideBar;