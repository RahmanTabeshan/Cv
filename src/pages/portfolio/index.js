import MainHead from "@/components/Common/MainHead";
import Layout from "@/containers/Layout";
import {GoFileSubmodule} from 'react-icons/go';

const Portfolio = () => {
    return (
        <Layout>
            <div className="flex flex-col gap-y-3 w-full h-full p-5 ">
                <MainHead title="پورتفولیو" icon={<GoFileSubmodule className="text-primary w-6 h-6" />} />
                <div className="flex w-full h-full">
                    
                </div>
            </div>
        </Layout>
    );
}
 
export default Portfolio;