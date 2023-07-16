const { default: Api } = require("@/Api/Api")
const { useMutation } = require("react-query")

const fetcher = (data)=>{
    return Api.Auth.adminLogin(data) ;
}

const AdminLogin = ()=>{
    return useMutation("admin-login" , fetcher)
}

export default AdminLogin ;