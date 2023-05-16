import MainHead from "@/components/Common/MainHead";
import Layout from "@/containers/Layout";
import { AiFillHome } from "react-icons/ai";
import { Cursor, Typewriter } from "react-simple-typewriter";

export default function Home() {
    return (
        <Layout>
            <div className="flex flex-col gap-y-3 w-full h-full p-5 ">
                <MainHead
                    title="خانه"
                    icon={<AiFillHome className="text-primary w-6 h-6" />}
                />
                <div className="flex justify-center items-center w-full h-full">
                    <div className="flex flex-col w-full items-center gap-y-3">
                        <p className="text-4xl font-bold font-vazir text-primary dark:[text-shadow:0_1px_1px_#c8b8b8]">
                            رحمان تابشان
                        </p>
                        <div className="flex gap-x-1 text-lg w-full justify-center">
                            <p>توسعه دهنده فرانت با </p>
                            <span className="font-bold text-primary dark:[text-shadow:0_1px_1px_#c8b8b8]">
                                <Typewriter
                                    words={[
                                        "تیلویند",
                                        "جاوااسکریپت",
                                        "ریکت",
                                        "نکست",
                                    ]}
                                    loop="true"
                                    cursor
                                    typeSpeed={200}
                                    deleteSpeed={100}
                                    delaySpeed={1000}
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
