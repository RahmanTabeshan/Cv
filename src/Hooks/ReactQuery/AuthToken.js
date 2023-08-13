import Api from "@/Api/Api";
import { useMutation, useQuery } from "react-query";

const fetcher = (data) => {
    return Api.Auth.authToken();
};

const AuthToken = () => {
    return useQuery("Auth-Token", fetcher);
};

export default AuthToken;