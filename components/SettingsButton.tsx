import { useEffect, useState } from "react";

import "../styles/SettingsButton/style.css"
import NightMode from "../styles/SettingsButton/NightMode.module.css";
import LightMode from "../styles/SettingsButton/LightMode.module.css";

// import * as utils from "@/app/utils/index"

export default function SettingsButton({ toggleLightMode, NightModeEnabled }: { toggleLightMode: () => void, NightModeEnabled: boolean } ) {
   
    const [style,setStyle] = useState(NightMode);
    const [isLoaded,setIsLoaded] = useState(false);
    const [NightModeCookie,setNightModeCookie] = useState("nightmode");


    useEffect(()=> {
        setIsLoaded(true);
    });


    useEffect(() => {
        if(isLoaded){
            console.log(document.cookie);
        }
                
    },[isLoaded,document.cookie]);
    
    return (
        <button onClick={toggleLightMode} className={[style.SettingsButton, "SettingsButton SettingsButtonPlace ButtonHoverEffect ButtonActiveEffect"].join(' ')} ></button>
    );
}
