import Image from "next/image";
import Link from "next/link";
import { FaTelegram } from "react-icons/fa";

const Profile = ({ className }) => {
    return (
        <div
            className={`relative flex flex-col items-center gap-y-3 border border-blue-600 rounded-lg p-4 
            transition-all duration-1000 ${className}`}
        >
            <div className="relative w-64 h-64 rounded-full overflow-hidden ring-2 ring-blue-700 ring-offset-[5px]">
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
                    <div className="text-base">
                        <p className="font-bold">رحمان تابشان هستم </p>
                    </div>
                    <div className="text-sm text-neutral-700 mt-1">
                        <p className="font-vazir-fa">28 سال سن دارم</p>
                    </div>
                    <div className="text-sm text-neutral-700 mt-1">
                        <p className="">دارای مدرک لیسانس فیزیک</p>
                    </div>
                    <div className="text-sm text-neutral-700 mt-1">
                        <p className="">توسعه دهنده فرانت هستم</p>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <ul>
                        <li>
                            <Link href="https://t.me/Rahmantebeshan">
                                <FaTelegram />
                            </Link>
                        </li>
                        <li>
                            <Link href="#"></Link>
                        </li>
                        <li>
                            <Link href="#"></Link>
                        </li>
                        <li>
                            <Link href="#"></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Profile;
