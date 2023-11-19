import Api from "@/Api/Api";
import { useMutation } from "react-query";

const fetcher = (value) => {
    const {url , data} = value ;
    return Api.Personal.editInfo(url , data); 
};

const EditInfo = () => {
    return useMutation("Edit-Info" , fetcher) ;
};

export default EditInfo ;