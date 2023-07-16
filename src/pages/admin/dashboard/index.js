import http from "@/Services/http";
import Link from "next/link";

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard Page</h1>
        </div>
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
