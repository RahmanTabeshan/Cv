import http from "@/Services/http";

export const getInfo = async () => {
    return await http.get("/personal");
};
export const editInfo = async (url, data) => {
    return await http.patch(`/personal/edit/${url}`, data);
};

export const uploadImage = async (data, config) => {
    return await http.post("personal/upload/image", data, config);
};

export const addsociallink = async (data) => {
    return await http.post("personal/edit/addsociallink", data);
};

export const deleteSocialLink = async (data) => {
    return await http.delete(`personal/edit/deletesociallink/${data.deletedId}`, {data:{id:data.id}});
};
