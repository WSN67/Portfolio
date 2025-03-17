import { useEffect, useState } from "react";
import { getCookieValue } from "@/app/utils";

import "../styles/SettingsButton/style.css"
import NightMode from "../styles/SettingsButton/NightMode.module.css";
import LightMode from "../styles/SettingsButton/LightMode.module.css";
import { setCookie } from "@/app/utils";
import { get } from "http";

export default function SettingsButton({ toggleLightMode, NightModeEnabled }: { toggleLightMode: () => void, NightModeEnabled: boolean } ) {
   
    const [style,setStyle] = useState(NightModeEnabled ? NightMode : LightMode);

    useEffect(() => {
        if (getCookieValue("theme") === "lightMode") {  
            setStyle(LightMode);
            toggleLightMode();
        }
    },[]);


    function toggleMode() {
        toggleLightMode();
        setCookie("theme", NightModeEnabled ? "lightMode" : "nightMode");
        style === NightMode ? setStyle(LightMode) : setStyle(NightMode);
    }
    
    return (
        <button onClick={toggleMode} className={[style.SettingsButton, "SettingsButton SettingsButtonPlace ButtonHoverEffect ButtonActiveEffect"].join(' ')} ></button>
    );
}
