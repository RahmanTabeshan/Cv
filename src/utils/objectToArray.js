const ObjToArr = (obj) => {
    let array = [];
    for (let key in obj) {
        if (key !== "_id" && key !== "__v" && key !== "profileImage" && key !== "Name") {
            if (typeof obj[key] === "object") {
                if (Array.isArray(obj[key])) {
                    array.push({ [key]: obj[key] });
                } else {
                    array.push({ [key]: { ...obj[key] } });
                }
            } else {
                array.push({ [key]: obj[key] });
            }
        }
    }
    return array;
};

export default ObjToArr;
