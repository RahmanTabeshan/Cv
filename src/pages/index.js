import MainHead from "@/components/Common/MainHead";
import Layout from "@/containers/Layout";
import { load_true } from "@/reduxtoolkit/LoadState/LoadStateSlice";
import { useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {

    const load = useSelector(state => state.onLoad.load) ;
    const dispatch = useDispatch() ;

    useEffect(() => {
        if(!load){
            dispatch(load_true())
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Layout>
            <div className="w-full h-full p-5">
                <MainHead title="خانه" icon={<AiOutlineHome className="text-neutral-600 w-6 h-6 " />} />
                <div className="flex w-full h-full">
                
                </div>
            </div>
        </Layout>
    );
}
