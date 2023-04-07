import { AiOutlineHome } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { VscFileSubmodule } from "react-icons/vsc";
import { MdOutlineAlternateEmail } from "react-icons/md";

export const NavList = [
    {
        id: 1,
        title: "خانه",
        href: "/",
        icon: <AiOutlineHome className="NavIcon" />,
    },
    {
        id: 2,
        title: "درباره من",
        href: "/about-me",
        icon: <FaRegUser className="NavIcon" />,
    },
    {
        id: 3,
        title: "رزومه",
        href: "/resume",
        icon: <CgNotes className="NavIcon" />,
    },
    {
        id: 4,
        title: "پورتفولیو",
        href: "/portfolio",
        icon: <VscFileSubmodule className="NavIcon" />,
    },
    {
        id: 5,
        title: "ارتباط با من",
        href: "/contact",
        icon: <MdOutlineAlternateEmail className="NavIcon" />,
    },
];
