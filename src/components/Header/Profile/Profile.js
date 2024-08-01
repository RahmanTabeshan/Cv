import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Profile = ({ className, personData }) => {
    const { profileImage: img, Name, exprience, socialLink } = personData;
    const socialIcon = [
        { title: "Linkedin", icon: <FaLinkedin /> },
        { title: "Github", icon: <FaGithub /> },
    ];

    socialLink.map((item) => {
        const icon = socialIcon.find((i) => i.title === item.title_en);
        item.icon = icon.icon;
        return item;
    });

    const router = useRouter();
    return (
        <div
            className={`smd:relative flex-col items-center w-full h-full bg-white dark:bg-neutral-700 gap-y-3 
            rounded-lg px-4 pt-4 pb-36 transition-all duration-1000 shadow-myShadow shadow-black dark:shadow-white
            dark:text-white ${className} ${router.pathname === "/" ? "flex" : "hidden smd:flex" } `}
        >
            <div
                className="relative max-w-xs w-full smd:w-full aspect-square rounded-full overflow-hidden ring-2 ring-primary
              dark:ring-blue-400 ring-offset-[5px] m-2"
            >
                <Image src={img.url} alt="Profile Image" fill className="object-cover" />
            </div>
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center mt-2">
                    <div>
                        <p className="font-bold">سلام</p>
                    </div>
                    <div className="text-base mb-4">
                        <p className="font-bold font-vazir">{Name.fa} هستم</p>
                    </div>
                    <div className="text-sm text-neutral-700 dark:text-white mt-1">
                        <p className="">توسعه دهنده فرانت </p>
                    </div>
                    <div className="text-sm text-neutral-700 dark:text-white mt-1">
                        <p className="">بیش از {exprience.value} سال سابقه آموزش و کار</p>
                    </div>
                </div>
                <div className="flex flex-wrap mt-6">
                    <ul className="flex gap-4">
                        {socialLink.map((item) => (
                            <li key={item._id}>
                                <Link href={item.value} target="_blank">
                                    <item.icon.type
                                        className={`w-6 h-6 ${
                                            item.title_en === "Linkedin"
                                                ? "text-blue-900 dark:text-blue-400"
                                                : null
                                        } `}
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Profile;
