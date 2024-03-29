import http from "@/Services/http"

export const adminLogin = async (data)=>{
    return await http.post("/admin/login" , data ) ;
}

export const adminRegister = async(data)=>{
    return await http.post("/admin/register" , data) ;
}

export const authToken = async () =>{
    return await http.get("/auth/admintoken") ;
}