

/*
########################################################
        Constants 
########################################################
*/

export const BackgroundColorNightMode: string = "#333333";
export const BackgroundColorLightMode: string = "#d7a7a7cc";
export const oneDay: number = 86400000; // 1 day in milliseconds


/*
########################################################
        Functions 
########################################################
*/

// returns an array of cookies
export function getCookies(): string[] {
    let cookies = document.cookie.split(";").map(cookie => cookie.trim());        
	return cookies;
}

// creates a cookie only if it does not exist
export function createCookie(cookieName:string, cookieValue:string, expirationDate?:Date): 1 | -1 {
    if (cookieExists(cookieName)) {
        return -1; // error : cookie exists
    }
    if (!expirationDate) {
        document.cookie = `${cookieName}=${cookieValue}}`;
    }
    else {
        document.cookie = `${cookieName}=${cookieValue}; expires=${expirationDate!.toUTCString()}`;
    }
    return 1; // success
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