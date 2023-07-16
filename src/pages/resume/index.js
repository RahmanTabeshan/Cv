import MainHead from "@/components/Common/MainHead";
import Layout from "@/containers/Layout";
import { HiClipboardDocumentList } from "react-icons/hi2";

const Resume = () => {
    return (
        <Layout>
            <div className="flex flex-col gap-y-3 w-full h-full p-5 ">
                <MainHead title="رزومه" icon={<HiClipboardDocumentList className="text-primary w-6 h-6" />} />
                <div className="flex w-full h-full">
                    <ul className="border-r-2 border-r-neutral-400">
                        <li>

                        </li>
                    </ul>
                </div>
            </div>
        </Layout>
    );
}
 
export default Resume;