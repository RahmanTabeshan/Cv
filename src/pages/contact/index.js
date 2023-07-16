import MainHead from "@/components/Common/MainHead";
import Layout from "@/containers/Layout";
import axios from "axios";
import { MdAlternateEmail } from "react-icons/md";

const Contact = () => {
    const click = async ()=>{
        const {data} = await axios.get("http://localhost:3232/skills") ;
        console.log(data);
    }
    return (
        <Layout>
            <div className="flex flex-col gap-y-3 w-full h-full p-5 ">
                <MainHead title="ارتباط با من" icon={<MdAlternateEmail className="text-primary w-6 h-6" />} />
                <div className="flex w-full h-full">
                    <button onClick={click}>Add</button>
                </div>
            </div>
        </Layout>
    );
}
 
export default Contact;