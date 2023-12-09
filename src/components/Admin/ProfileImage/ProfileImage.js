import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import FileUploader from "../FileUploader/FileUploader";
import Image from "next/image";

const ProfileImage = ({ info, loading }) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div
                title="آپلود عکس پروفایل"
                className="w-64 h-64 border-8 border-neutral-100 rounded-full absolute -top-2/3 right-8 bg-white cursor-pointer flex justify-center items-center overflow-hidden"
                onClick={() => {
                    setShow(true);
                }}
            >
                {loading ? (
                    <Skeleton
                        circle
                        className="w-full h-full"
                        containerClassName="flex w-full h-full"
                    />
                ) : (
                    <Image
                        src={info.profileImage.url}
                        alt="ProfileImage"
                        className="object-cover rounded-full"
                        fill
                        loading="eager"
                    />
                )}
            </div>
            {show ? (
                <FileUploader setShow={setShow} imageUrl={info.profileImage.url} id={info._id} />
            ) : null}
        </>
    );
};

export default ProfileImage;
