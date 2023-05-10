import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Profile = ({ className }) => {
    return (
        <div
            className={`relative flex flex-col items-center bg-white dark:bg-neutral-700 gap-y-3 rounded-lg px-4 pt-4 pb-36 
            transition-all duration-1000 shadow-myShadow shadow-black dark:shadow-white dark:text-white ${className}`}
        >
            <div className="relative w-64 h-64 rounded-full overflow-hidden ring-2 ring-blue-700
            dark:ring-blue-400 ring-offset-[5px] m-2">
                <Image
                    src="/Img/myPhoto.png"
                    alt="Profile Image"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center mt-2">
                    <div>
                        <p className="font-bold">سلام</p>
                    </div>
                    <div className="text-base mb-4">
                        <p className="font-bold font-vazir">رحمان تابشان هستم </p>
                    </div>
                    <div className="text-sm text-neutral-700 dark:text-white mt-1">
                        <p className="">توسعه دهنده فرانت </p>
                    </div>
                    <div className="text-sm text-neutral-700 dark:text-white mt-1">
                        <p className="">بیش از 2 سال سابقه آموزش و کار</p>
                    </div>
                </div>
                <div className="flex flex-wrap mt-6">
                    <ul className="flex gap-4">
                        <li>
                            <Link href="https://www.linkedin.com/in/Rahmantabeshan" target="_blank">
                                <FaLinkedin className="w-6 h-6 text-blue-900 dark:text-blue-400" />
                            </Link>
                        </li>
                        <li>
                            <Link href="https://github.com/RahmanTabeshan" target="_blank">
                                <FaGithub className="w-6 h-6" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Profile;
