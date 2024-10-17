export function getToken(){
    const name = "token=";
    const decodecookie = decodeURIComponent(document.cookie);
    const cookies = decodecookie.split(";");

    for(let i=0;i<cookies.length ; i++){
        let cookie = cookies[i].trim();
        if(cookie.startsWith(name)){
            return cookie.substring(name.length, cookie.length);
        }
    }
    return null;

}