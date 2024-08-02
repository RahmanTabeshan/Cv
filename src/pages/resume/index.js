import MainHead from "@/components/Common/MainHead";
import ListItem from "@/components/Resume/ListItem";
import Main from "@/containers/Main";
import Link from "next/link";
import { HiClipboardDocumentList } from "react-icons/hi2";

const Resume = () => {
    const freelenc = [
        {
            id: 1,
            ProjectName: "Noghteh Khat",
            ProjectLink: "https://noghteh-khat.ir",
            GithubLink: "https://github.com/NeptuneeDev",
            details:
                "این پروژه مخصوص آپلود و دانلود جزوه های اساتید کلیه دانشگاه های کشور می باشد که فرانت آن با نکست و بکند با نست پیاده سازی شده است .",
        },
        {
            id: 2,
            ProjectName: "Resume",
            ProjectLink: "https://rahmantabeshan.ir",
            GithubLink: "https://github.com/RahmanTabeshan/Cv",
            details:
                "این پروژه برای معرفی و ارایه رزومه ساخته شده که فرانت با نکست و بکند با اکسپرس پیاده شده .",
        },
    ];

    const simpleProject = [
        {
            id: 1,
            ProjectName: "React-Digikala",
            ProjectLink: "https://React-Digikala.netlify.app",
            GithubLink: "https://github.com/RahmanTabeshan/React-Digikala",
            details:
                "یک کپی از سایت دیجیکالا با استفاده از ریکت شامل قسمت سبد خرید و سیستم ورود و ثبت نام .",
        },
    ];

    return (
        <Main>
            <div className="flex flex-col gap-y-3 w-full h-full p-5 ">
                <MainHead
                    title="رزومه"
                    icon={<HiClipboardDocumentList className="text-primary w-6 h-6" />}
                />
                <div className="flex flex-col gap-y-10 w-full h-full">
                    <div className="flex flex-col gap-y-5">
                        <h1 className="text-xl font-bold">سابقه استخدام : </h1>
                        <div className="w-full flex flex-col items-center">
                            <p>سابقه استخدام ندارم</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">سابقه فریلنسری : </h1>
                        <div className="w-full flex pr-1">
                            <ul className="pr-5 mt-3 font-vazir list-decimal">
                                {freelenc.map((item) => (
                                    <ListItem
                                        key={item.id}
                                        ProjectName={item.ProjectName}
                                        ProjectLink={item.ProjectLink}
                                        GithubLink={item.GithubLink}
                                        details={item.details}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <h1 className="text-xl font-bold">نمونه کار :</h1>
                        <div className="w-full flex pr-1">
                            <ul className="pr-5 mt-3 font-vazir list-decimal">
                                {simpleProject.map((item) => (
                                    <ListItem
                                        key={item.id}
                                        ProjectLink={item.ProjectLink}
                                        ProjectName={item.ProjectName}
                                        GithubLink={item.GithubLink}
                                        details={item.details}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    );
};

export default Resume;
