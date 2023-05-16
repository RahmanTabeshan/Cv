import MainHead from "@/components/Common/MainHead";
import Layout from "@/containers/Layout";
import { FaUser } from "react-icons/fa";

const AbouteMe = () => {
    return (
        <Layout>
            <div className="flex flex-col gap-y-3 w-full h-full p-5 ">
                <MainHead title="درباره من" icon={<FaUser className="text-primary w-6 h-6" />} />
                <div className="flex w-full h-full">
                    
                </div>
            </div>
        </Layout>
    );
};

export default AbouteMe;
