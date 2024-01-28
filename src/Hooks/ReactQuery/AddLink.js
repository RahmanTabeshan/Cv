import Api from "@/Api/Api";
import { useMutation } from "react-query";

const fetcher = (value) => {
    return Api.Personal.addsociallink(value) ;
};

const AddLink = () => {
    return useMutation("AddSocial" , fetcher) ;
};

export default AddLink ;