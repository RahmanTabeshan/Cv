export const getAllCookies = () => {
    let allCookies = {};
    const cookies = document.cookie;
    if (cookies) {
        const arrayCookies = cookies.split(";");
        arrayCookies.forEach((c) => {
            const arrayCookie = c.split("=");
            allCookies[arrayCookie[0].replaceAll('"', "").trim()] = arrayCookie[1];
        });
    }
    return allCookies;
};

export function setCookie(cname, cvalue, option) {
    const { expire, path = "/", sameSite = "", domain = "" } = option;
    const d = new Date();
    d.setTime(d.getTime() + expire);
    let expires = "expires=" + d.toUTCString();
    document.cookie =
        cname +
        "=" +
        cvalue +
        ";" +
        expires +
        ";path=" +
        path +
        ";samesite=" +
        sameSite +
        ";domain=" +
        domain;
}

export function removeCookie(cname, option) {
    const {
        expire = 20000000,
        path = "/",
        sameSite = "",
        domain = "",
    } = option;
    const d = new Date();
    d.setTime(d.getTime() - expire);
    let expires = "expires=" + d.toUTCString();
    document.cookie =
        cname +
        "=;" +
        expires +
        ";path=" +
        path +
        ";samesite=" +
        sameSite +
        ";domain=" +
        domain;
}
