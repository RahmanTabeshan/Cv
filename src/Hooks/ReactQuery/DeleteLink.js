import Api from "@/Api/Api";
import { useMutation } from "react-query";

const fetcher = (data) => {
    return Api.Personal.deleteSocialLink(data) ;
};

const DeleteLink = () => {
    return useMutation("delete-link" , fetcher)
};

export default DeleteLink ;