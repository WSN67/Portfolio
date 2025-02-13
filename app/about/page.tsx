import { useState } from "react";

import SettingsButton from "@/components/SettingsButton";

import NightMode from "@/styles/AboutPage/AboutNightMode.module.css"
import LightMode from "@/styles/AboutPage/AboutLightMode.module.css"

export default function AboutPage() {
    
    const [style,setStyle] = useState(NightMode);
    const [NightModeEnabled,setNightModeEnabled] = useState(true);

    function toggleLightMode(){
        if (style === NightMode) {
            setStyle(LightMode);
            setNightModeEnabled(false);
        }
        else {
            setStyle(NightMode);
            setNightModeEnabled(true);

        }
    }

    return (
        <div className={[style.AboutContainer, "AboutContainer"].join(' ')}>
            <span>
                <h1>About Page</h1>
                <SettingsButton toggleLightMode={toggleLightMode} NightModeEnabled={NightModeEnabled}/>
                </span>
            <section>
                <p>About me</p>
            </section>
            <section>
                <p>About Website</p>
                <p>Known bugs</p>
            </section>
        </div>
    );
}
