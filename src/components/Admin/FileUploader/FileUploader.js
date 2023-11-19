import UploadImage from "@/Hooks/ReactQuery/UploadImage";
import Image from "next/image";
import { useState } from "react";

const FileUploader = ({ setShow, imageUrl, id }) => {
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    console.log(progress);
    let img = imageUrl || "";
    if (image) {
        img = URL.createObjectURL(image);
    }

    const config = {
        onUploadProgress: (progress) => {
            console.log(progress);
            const prog = Math.round((progress.loaded * 100) / progress.total);
            setProgress(prog);
        },
    };

    const { mutateAsync } = UploadImage();

    const handleUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("profileImage", image);
        formData.append("id", id);
        try {
            const data = await mutateAsync({ data: formData, config });
            console.log(data);
        } catch (error) {}
    };

    return (
        <>
            <div
                onClick={() => setShow(false)}
                className="fixed bg-black opacity-30 top-0 right-0 w-full h-full z-[99999]"
            ></div>
            <div className="fixed top-32 border border-neutral-500 bg-white rounded-lg w-96 z-[999999] overflow-hidden p-5">
                <form className="flex flex-col gap-y-8" onSubmit={handleUpload}>
                    <div className="flex justify-center">
                        <label className="relative block w-max cursor-pointer">
                            <p className="bg-neutral-500 py-2 px-3 w-max rounded-lg text-neutral-100">
                                انتخاب عکس
                            </p>
                            <input
                                name="profileImage"
                                type="file"
                                className="hidden"
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                        </label>
                    </div>
                    <div className="flex justify-center">
                        <div className="relative flex justify-center items-center w-64 h-64 ring-4 ring-primary ring-offset-4 rounded-full bg-white overflow-hidden">
                            <Image
                                src={img}
                                alt="ProfileImage"
                                className="object-cover rounded-full"
                                fill
                            />
                        </div>
                    </div>
                    <div className="flex justify-center gap-x-4">
                        <button
                            type="submit"
                            className="bg-green-600 rounded-lg py-2 px-3 w-max hover:bg-green-700 transition-colors duration-300 text-white"
                        >
                            آپلود عکس
                        </button>
                        <button
                            onClick={() => {
                                setImage("");
                                setShow(false);
                            }}
                            className="bg-red-500 py-2 px-3 rounded-lg text-white"
                        >
                            انصراف
                        </button>
                    </div>
                    <div className="flex justify-center items-center" dir="ltr">
                            <div className="relative w-full h-5 bg-neutral-200 rounded-md overflow-hidden">
                                <div className="absolute h-full left-0 bg-green-400" style={{width : `${progress}%`}}>

                                </div>
                            </div>
                            <span className="w-10">{`${progress} %`}</span>
                    </div>
                </form>
            </div>
        </>
    );
};

export default FileUploader;
