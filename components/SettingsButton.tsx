import { useState } from "react";

import "../styles/SettingsButton/style.css"
import NightMode from "../styles/SettingsButton/NightMode.module.css";
import LightMode from "../styles/SettingsButton/LightMode.module.css";

export default function SettingsButton({ toggleLightMode, NightModeEnabled }: { toggleLightMode: () => void, NightModeEnabled: boolean } ) {
   
    const [style,setStyle] = useState(NightModeEnabled ? NightMode : LightMode);
    
    function toggleMode() {
        toggleLightMode();
        style === NightMode ? setStyle(LightMode) : setStyle(NightMode);
    }
    
    return (
        <button onClick={toggleMode} className={[style.SettingsButton, "SettingsButton SettingsButtonPlace ButtonHoverEffect ButtonActiveEffect"].join(' ')} ></button>
    );
}
