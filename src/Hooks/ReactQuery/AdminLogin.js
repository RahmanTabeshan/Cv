import Api from "@/Api/Api";
import { useMutation } from "react-query";

const fetcher = (data) => {
    return Api.Auth.adminLogin(data);
};

const AdminLogin = () => {
    return useMutation("admin-login", fetcher);
};

export default AdminLogin;
