

/*
########################################################
        Constants 
########################################################
*/

import { get } from "http";

export const BackgroundColorNightMode: string = "#333333";
export const BackgroundColorLightMode: string = "#d7a7a7cc";
export const oneDay: number = 86400000; // 1 day in milliseconds


/*
########################################################
        Functions 
########################################################
*/

// returns an pair of key-values cookies
export function getCookies(): { [key: string]: string } {
    let cookies: { [key: string]: string } = {};
    document.cookie.split(";").forEach(cookie => {
        let [name, value] = cookie.split("=").map(c => c.trim());
        cookies[name] = value;
    });
    
    return cookies;
}

// creates a cookie only if it does not exist
export function createCookie(cookieName:string, cookieValue:string, expirationDate?:Date): 1 | -1 {
    if (cookieExists(cookieName)) {
        return -1; // error : cookie exists
    }
    if (!expirationDate) {
        document.cookie = `${cookieName}=${cookieValue}`;
    }
    else {
        document.cookie = `${cookieName}=${cookieValue}; expires=${expirationDate!.toUTCString()}`;
    }
    return 1; // success
}

// returns true if the cookie name and value match
export function cookieValueMatch(cookieName:string, valueToMatch:string): true | false {
    let cookies = getCookies();
    return cookies[cookieName] === valueToMatch;
}

// returns the value of the cookie
export function getCookieValue(cookieName:string): string | undefined {
    let cookies = getCookies();
    return cookies[cookieName];
}

// returns true if the cookie exists
export function cookieExists(cookieName:string): true | false {
    let cookies = getCookies();    
    return cookies[cookieName] !== undefined;
}

// sets a cookie only if it exists
export function setCookie(cookieName:string, cookieValue:string, expirationDate?:Date): void {
    if(!cookieExists(cookieName)) {
        console.log("cookie does not exist");
        return;
    }
    if (expirationDate === undefined) {
        document.cookie = `${cookieName}=${cookieValue}`;
        return;
    }
    document.cookie = `${cookieName}=${cookieValue}; expires=${expirationDate!.toUTCString()}`;
}