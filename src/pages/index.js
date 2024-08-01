import http from "@/Services/http";
import MainHead from "@/components/Common/MainHead";
import Main from "@/containers/Main";
import { AiFillHome } from "react-icons/ai";
import { Typewriter } from "react-simple-typewriter";

export default function Home({ name }) {
    return (
        <Main>
            <div className="flex flex-col gap-y-3 w-full min-h-[inherit] h-full p-5 ">
                <MainHead title="خانه" icon={<AiFillHome className="text-primary w-6 h-6" />} />
                <div className="flex justify-center items-center w-full h-full min-h-[inherit]">
                    <div className="flex flex-col w-full items-center gap-y-3">
                        <p className="text-4xl font-bold font-vazir text-primary dark:[text-shadow:0_1px_1px_#c8b8b8]">
                            {name.fa}
                        </p>
                        <div className="flex gap-x-1 text-lg w-full justify-center">
                            <p>توسعه دهنده فرانت با </p>
                            <span className="font-bold text-primary dark:[text-shadow:0_1px_1px_#c8b8b8]">
                                <Typewriter
                                    words={["تیلویند", "جاوااسکریپت", "ریکت", "نکست"]}
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
        </Main>
    );
}

export const getServerSideProps = async (ctx) => {
    const { data } = await http.get("/personal");
    return {
        props: {
            name: data.info.Name,
        },
    };
};
