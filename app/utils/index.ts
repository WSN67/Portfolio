
export const BackgroundColorNightMode: string = "#333333";
export const BackgroundColorLightMode: string = "#d7a7a7cc";

// returns an array of cookies
export function getCookies(): string[] {
    document.cookie = "name=John Doe";
    let cookies = document.cookie.split(";").map(cookie => cookie.trim());        
	return cookies;
}

// returns true if the cookie name and value match
export function cookieValueMatch(cookieName:string, valueToMatch:string): true | false {
    let cookies = getCookies();
    return cookies.indexOf(cookieName + '=' + valueToMatch) === -1 ? false : true;
}

// returns true if the cookie exists
export function cookieExists(cookieName:string): true | false {
    let cookies = getCookies();
    return cookies.indexOf(cookieName) === -1 ? false : true;
}

// sets a cookie only if it exists
export function setCookie(cookieName:string, cookieValue:string, expirationDate?:Date): void {
    if(!cookieExists(cookieName)) {
        return;
    }
    if (!expirationDate) {
        document.cookie = `${cookieName}=${cookieValue}}`;
    }
    document.cookie = `${cookieName}=${cookieValue}; expires=${expirationDate!.toUTCString()}`;
}