import http from "@/Services/http";
import DashboardLayout from "@/components/Dashboard/Layout";
import Link from "next/link";
import { useSelector } from "react-redux";

const Dashboard = () => {
    const Admin = useSelector(state => state.AdminInfo.Admin) ;

    return (
        <DashboardLayout>
            <main>
                
            </main>
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
            data:null
        }
    }
}
