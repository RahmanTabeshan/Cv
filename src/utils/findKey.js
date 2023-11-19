const FindKey = (obj , value) => {
    let targetKey ;
    for(let key in obj ){
        if(obj[key] === value){
            targetKey = key ;
            break ;
        }
    }
    return targetKey ;
}
 
export default FindKey;