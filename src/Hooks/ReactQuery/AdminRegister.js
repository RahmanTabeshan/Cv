import Api from "@/Api/Api";
import { useMutation } from "react-query";

const fetcher = (data) => {
    return Api.Auth.adminRegister(data);
};

const AdminRegister = () => {
    return useMutation("Admin-Register", fetcher);
};

export default AdminRegister;
