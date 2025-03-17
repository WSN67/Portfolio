

/*
########################################################
        Constants 
########################################################
*/

export const BackgroundColorNightMode: string = "#333333";
export const BackgroundColorLightMode: string = "#d7a7a7cc";
export const oneDay: number = 86400000; // 1 day in milliseconds
export const LIGHTMODE_NUM: number = 1; // used for setBackgroundColor()
export const NIGHTMODE_NUM: number = 2;


/*
########################################################
        Functions 
########################################################
*/

export function doNothing():void{
    return;
} 


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

// sets background color of the html element to dark theme
// 1 : light mode
// 2 : night mode
export function setBackgroundColor(mode: number): void {
    let bg = document.getElementsByTagName("html")[0];
    if (!bg)
        throw new Error("html element not found");
    if (mode === LIGHTMODE_NUM) // 1
        bg.style.backgroundColor = BackgroundColorLightMode;
    else if (mode === NIGHTMODE_NUM) // 2
        bg.style.backgroundColor = BackgroundColorNightMode;
    else
        console.log("Invalid mode", mode);
}