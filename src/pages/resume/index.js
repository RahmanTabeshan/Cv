import MainHead from "@/components/Common/MainHead";
import Main from "@/containers/Main";
import Link from "next/link";
import { HiClipboardDocumentList } from "react-icons/hi2";

const Resume = () => {
    return (
        <Main>
            <div className="flex flex-col gap-y-3 w-full h-full p-5 ">
                <MainHead
                    title="رزومه"
                    icon={<HiClipboardDocumentList className="text-primary w-6 h-6" />}
                />
                <div className="flex flex-col w-full h-full">
                    <div className="flex flex-col gap-y-5">
                        <h1 className="text-xl font-bold">سابقه استخدام : </h1>
                        <div className="w-full flex flex-col items-center">
                            <p>سابقه استخدام ندارم</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">سابقه فریلنسری : </h1>
                        <div className="w-full flex pr-1">
                            <ul className="pr-5 mt-3 list-decimal">
                                <li className="flex flex-col">
                                    <div className="flex gap-x-2 items-end">
                                        <p className="font-bold text-base">نام پروژه :</p>
                                        <p className="text-sm">Noghteh Khat</p>
                                    </div>
                                    <div className="flex gap-x-2 items-end">
                                        <p className="font-bold text-base">لینک پروژه :</p>
                                        <p className="text-sm">
                                            <Link
                                                href="https://noghteh-khat.ir"
                                                className="text-blue-500"
                                            >
                                                https://noghteh-khat.ir
                                            </Link>
                                        </p>
                                    </div>
                                    <div className="flex gap-x-2 items-end">
                                        <p className="font-bold text-base">لینک گیت هاب پروژه :</p>
                                        <p className="text-sm">
                                            <Link
                                                href="https://github.com/NeptuneeDev"
                                                className="text-blue-500"
                                            >
                                                https://github.com/NeptuneeDev
                                            </Link>
                                        </p>
                                    </div>
                                    <div className="flex gap-x-2 items-end">
                                        <p className="font-bold text-base">توضیحات : </p>
                                        <p className="text-sm">
                                            فرانت پروژه با نکست و بک با نست زده شده .
                                            این پروژه مخصوص آپلود و دانلود جزوه های اساتید کلیه دانشگاهای کشور می باشد.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </Main>
    );
};

export default Resume;
