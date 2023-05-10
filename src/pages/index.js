import MainHead from "@/components/Common/MainHead";
import Layout from "@/containers/Layout";
import { AiFillHome } from "react-icons/ai";

export default function Home() {

    return (
        <Layout>
            <div className="flex flex-col gap-y-3 w-full h-full p-5">
                <MainHead title="خانه" icon={<AiFillHome className="text-neutral-600 w-6 h-6 " />} />
                <div className="flex w-full h-full">

                </div>
            </div>
        </Layout>
    );
}
