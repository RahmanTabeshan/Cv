import Api from "@/Api/Api";
import {useQuery } from "react-query";

const fetcher = () => {
    return Api.Personal.getInfo();
};

const PersonalData = (onSuccess , onError) => {
    return useQuery("Personal-Info", fetcher , {onSuccess , onError , retry:false});
};

export default PersonalData;