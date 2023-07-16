import http from "@/Services/http"

export const adminLogin = async (data)=>{
    return await http.post("/admin/login" , data ) ;
}