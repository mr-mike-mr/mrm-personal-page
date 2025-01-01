import Cookies from "js-cookie";

export function set_cookie(name = "", value = "", expires = 7) {
    if (name === "") return;
    if (Cookies.get("cookie_allow") != "true") return;
    Cookies.set(name, value, { expires: expires, secure: true, sameSite:"strict", domain: window.location.hostname });
}