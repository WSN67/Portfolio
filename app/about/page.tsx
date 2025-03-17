"use client"
import { useEffect, useState } from "react";

import SettingsButton from "@/components/SettingsButton";

import "@/styles/AboutPage/style.css"
import NightMode from "@/styles/AboutPage/AboutNightMode.module.css"
import LightMode from "@/styles/AboutPage/AboutLightMode.module.css"
import ProgressBar from "@/components/ProgressBar";
import { getCookieValue, setBackgroundColor,LIGHTMODE_NUM,NIGHTMODE_NUM } from "../utils";

export default function AboutPage() {
    
    const [style,setStyle] = useState(NightMode);
    const [NightModeEnabled,setNightModeEnabled] = useState(true);

    useEffect(() => {
        if (getCookieValue("theme") === "lightMode") {  
            toggleLightMode();
            setBackgroundColor(LIGHTMODE_NUM);
            return;
        }
        setBackgroundColor(NIGHTMODE_NUM);
    },[]);
    
    function toggleLightMode():void{
        if (style === NightMode) {
            setStyle(LightMode);
            setNightModeEnabled(false);
            setBackgroundColor(LIGHTMODE_NUM);
        }
        else {
            setStyle(NightMode);
            setNightModeEnabled(true);
            setBackgroundColor(NIGHTMODE_NUM);

        }
    }

    function colorTextMode():object{
        return { color: NightModeEnabled ? 'white' : 'black' };
    }

    return (
        <div className={[style.AboutContainer, "AboutContainer"].join(' ')}>
            <span className={[style.AboutTitleContainer,"AboutTitleContainer"].join(' ')}>
                <h1 className={[style.AboutTitle,"AboutTitle"].join(' ')} style={colorTextMode()}>About Page</h1>
                <SettingsButton toggleLightMode={toggleLightMode} NightModeEnabled={NightModeEnabled}/>
                </span>
                <p style={colorTextMode()}>I am a young developer who wants to learn more about web !</p>
            <ul className={[style.AboutList,"AboutList"].join(' ')}>
                <li className={[style.AboutListItems,"AboutListItems"].join(' ')}>C, API Posix</li><ProgressBar progress = {80}/>
                <li className={[style.AboutListItems,"AboutListItems"].join(' ')}>Unix</li><ProgressBar progress = {75}/>
                <li className={[style.AboutListItems,"AboutListItems"].join(' ')}>Javascript, Typescript</li><ProgressBar progress = {75}/>
                <li className={[style.AboutListItems,"AboutListItems"].join(' ')}>HTML, CSS</li><ProgressBar progress = {60}/>
                <li className={[style.AboutListItems,"AboutListItems"].join(' ')}>React JS</li><ProgressBar progress = {45}/>
                <li className={[style.AboutListItems,"AboutListItems"].join(' ')}>Java</li><ProgressBar progress = {30}/>
                <li className={[style.AboutListItems,"AboutListItems"].join(' ')}>Python</li><ProgressBar progress = {30}/>
                <li className={[style.AboutListItems,"AboutListItems"].join(' ')}>MongoDB (mongoose)</li><ProgressBar progress = {30}/>
                <li className={[style.AboutListItems,"AboutListItems"].join(' ')}>SQL, PL/SQL</li><ProgressBar progress = {25}/>
            </ul>
            <section>
                <p style={colorTextMode()}>About Website</p>
                <p style={colorTextMode()}>Known bugs</p>
            </section>
        </div>
    );
}
