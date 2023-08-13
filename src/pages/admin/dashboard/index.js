import http from "@/Services/http";
import InfoItem from "@/components/Dashboard/AdminItem/AdminItem";
import DashboardLayout from "@/components/Dashboard/Layout";
import MainLayout from "@/components/Dashboard/Main/MainLayout";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";

const Dashboard = () => {
    const Admin = useSelector(state => state.AdminInfo.Admin) ;

    const AdminInfo = [
        {id:1 , title:"ایمیل" , value:Admin.UserName} ,
        {id:2 , title:"شماره موبایل" , value:Admin.Mobile} ,
        {id:3 , title:"شماره ملی" , value:Admin.NationNumber} ,
        {id:4 , title:"تاریخ تولد" , value:Admin.Birthday} ,
        {id:5 , title:"آدرس" , value:Admin.Address} ,
    ]

    return (
        <DashboardLayout>
                <MainLayout>
                    <div className="w-full h-full px-5 pl-10" >
                        <div className="flex flex-col w-full min-h-full bg-neutral-100 rounded-lg overflow-hidden">
                            <div className="w-full bg-gradient-to-l from-primary to-secondary h-52"></div>
                            <div className="flex flex-col">
                                <div className="flex justify-between relative px-10 py-5 pb-12 h-max border-b-2 border-b-white">
                                    <div className="flex pr-48">
                                        <div className="w-48 h-48 border-8 border-neutral-100 rounded-full absolute -top-2/3 right-8 bg-white">
                                            <UserCircleIcon className="bg-white rounded-full" />
                                        </div>
                                        <div className="flex flex-col gap-y-1">
                                            <div className="font-bold text-2xl">{Admin.Name}</div>
                                            <div className="text-sm text-neutral-500">{Admin.Role}</div>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="border-2 border-primary rounded-xl py-3 px-4 text-sm font-bold bg-primary text-white transition-colors duration-200 hover:bg-secondary">ویرایش اطلاعات</button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-repeat justify-around gap-y-8 p-10 ">
                                    {AdminInfo.map(item =>(
                                        <InfoItem key={item.id} title={item.title} value={item.value} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </MainLayout>
        </DashboardLayout>
    );
};

export default Dashboard;

export const getServerSideProps = async (ctx) => {

    const { cookies } = ctx.req; // object of cookies
    const cookie = ctx.req.headers.cookie; // string of cookie most send to backend for auth

    const { data } = await http.get("/auth/admintoken", {
        headers: {
            cookie,
        },
    });

    if (!cookies.AdminToken ||  !data.user && !data.success) {
        return {
            redirect: {
                permanent: false,
                destination: "/admin",
            },
        };
    }

    return {
        props:{
            data:null,
        }
    }
}
