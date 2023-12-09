import UploadImage from "@/Hooks/ReactQuery/UploadImage";
import Image from "next/image";
import { useState } from "react";
import { Oval } from "react-loader-spinner";
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";

const FileUploader = ({ setShow, imageUrl, id }) => {
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const query = useQueryClient();
    let img = imageUrl || "";
    if (image) {
        img = URL.createObjectURL(image);
    }

    const config = {
        onUploadProgress: (progress) => {
            const prog = Math.round((progress.loaded * 100) / progress.total);
            setProgress(prog);
        },
    };

    const changeHandler = (e) => {
        const image = e.target.files[0];
        const size = image.size;
        const mbSize = +size / 1024 / 1024;
        if (mbSize > 2) {
            toast.error("حجم عکس باید کمتر از 2 مگابایت باشد.", { autoClose: false });
            return;
        }
        const type = image.type;
        if (type !== "image/jpeg" && type !== "image/png" && type !== "image/jpg") {
            toast.error("فرمت عکس باید png یا jpg یا jpeg باشد.");
            return;
        }

        setImage(image);
    };

    const { mutateAsync } = UploadImage();

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!image) {
            toast.error("لطفا عکس خود را انتخاب کنید.");
            return;
        }
        const formData = new FormData();
        formData.append("profileImage", image);
        formData.append("id", id);
        try {
            const data = await mutateAsync({ data: formData, config });
            toast.success(data.data.message);
            query.invalidateQueries("Personal-Info");
            setShow(false);
        } catch (err) {
            toast.error(err.response.data.message || err.message);
            setProgress(0);
            console.clear();
        }
    };

    return (
        <>
            <div
                onClick={() => setShow(false)}
                className="fixed bg-black opacity-30 top-0 right-0 w-full h-full z-[99999]"
            ></div>
            <div className="fixed top-32 border border-neutral-500 bg-white rounded-lg w-96 z-[999999] overflow-hidden p-5">
                <form className="flex flex-col gap-y-8" onSubmit={handleUpload}>
                    <div className="flex justify-center ">
                        <label className="relative block w-max cursor-pointer">
                            <p className="bg-neutral-500 py-2 px-3 w-max rounded-lg text-neutral-100">
                                انتخاب عکس
                            </p>
                            <input
                                name="profileImage"
                                type="file"
                                className="hidden"
                                onChange={changeHandler}
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
                                loading="lazy"
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
                        <div className="relative w-full h-5 bg-neutral-200 rounded-md overflow-hidden flex justify-center gap-x-2">
                            {progress == 100 ? (
                                <>
                                    <Oval
                                        wrapperClass="flex justify-center"
                                        strokeWidth={5}
                                        strokeWidthSecondary={5}
                                        width={15}
                                        height={15}
                                        color="green"
                                        secondaryColor="green"
                                    />
                                    <p className="text-sm">ذخیره عکس</p>
                                </>
                            ) : (
                                <div
                                    className="absolute h-full left-0 bg-green-400"
                                    style={{ width: `${progress}%` }}
                                ></div>
                            )}
                        </div>
                        <span className="w-10">{`${progress} %`}</span>
                    </div>
                </form>
            </div>
        </>
    );
};

export default FileUploader;
