import Api from "@/Api/Api";
import { useMutation } from "react-query";

const fetcher = (value) => {
    const {data , config} = value ;
    return Api.Personal.uploadImage(data , config) ;
};

const UploadImage = () => {
    return useMutation("Upload" , fetcher) ;
};

export default UploadImage ;