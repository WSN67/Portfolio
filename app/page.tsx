"use client"
import AvatarDark from "../components/AvatarDark";
import AvatarLight from "../components/AvatarLight";
import "../styles/App.css";
import Link from "next/link";
import LayoutChoice from "../components/LayoutChoice";
import { useEffect, useState } from "react";
import SettingsButton from "@/components/SettingsButton";


import NightMode from "../styles/AppNightMode.module.css";
import LightMode from "../styles/AppLightMode.module.css";

import * as utils from "./utils/index";


export default function Home() {

  // device
  const [desktopLayout,setDesktopLayout] = useState(false);
  const [mobileLayout,setMobileLayout] = useState(false);
  const [layoutChoiceMade,setLayoutChoiceMade] = useState(false);
  const [isLoaded,setIsLoaded] = useState(false);
  const [Avatar,setAvatar] = useState(AvatarLight);

  // style
  const [style,setStyle] = useState(NightMode);

  // url query timer handler
  let intervalID: NodeJS.Timeout;


  useEffect(() => {    
    // create or update cookie : theme
    let retCC = utils.createCookie("theme","nightMode");
    if(retCC === -1) {
      if(utils.cookieValueMatch("theme","lightMode")) {
        setStyle(LightMode);
      }
    }

    //update background color
    let themeCookie = utils.getCookieValue("theme");
    if(themeCookie === "lightMode") {
      document.getElementsByTagName("html")[0].style.backgroundColor = utils.BackgroundColorLightMode;
    }
    else {
      document.getElementsByTagName("html")[0].style.backgroundColor = utils.BackgroundColorNightMode;
    }

    setIsLoaded(true);
  },[]);
  

  // clears interval when layout choice is made
  useEffect(() => { 
    return () => {
      clearInterval(intervalID);
    }
  },[layoutChoiceMade]);

  /*
   clears interval if user refreshes page and 
   create a new one to check if a layout has been chosen
  */
  useEffect(() => {
    if (intervalID) {
      clearInterval(intervalID);      
    }
    intervalID = setInterval(() => {
      if(window.location.search.includes("Layout=Desktop")){
        setDesktopLayout(true);
        setLayoutChoiceMade(true);
      } else if(window.location.search.includes("Layout=Mobile")){
        setMobileLayout(true);
        setLayoutChoiceMade(true);
      }
    },500);    
  },[URLSearchParams]);
      
  // toggles between light and night mode
  function toggleLightMode():void {
    if (style === LightMode) {
      setStyle(NightMode);
      setAvatar(AvatarLight);
      utils.setCookie("theme","nightMode");
      document.getElementsByTagName("html")[0].style.backgroundColor = utils.BackgroundColorNightMode;
    }
    else {
      setStyle(LightMode);
      setAvatar(AvatarDark);
      utils.setCookie("theme","lightMode");
      document.getElementsByTagName("html")[0].style.backgroundColor = utils.BackgroundColorLightMode;
    }
  }
  

  return (
    <main>
      <span>
        <h1 className={[style.MainTitle,"MainTitle"].join(' ')}>PORTFOLIO</h1>
        <SettingsButton toggleLightMode={toggleLightMode} NightModeEnabled={style === NightMode ? true : false} />
      </span>
      {
        layoutChoiceMade ? <>{Avatar}<Link href= {{pathname:"/mainPage", query: window.location.search.toString().substring(1)}} className={[style.PlayButton,"PlayButton ButtonHoverEffect ButtonActiveEffect"].join(' ')}>PLAY</Link></> 
        : <LayoutChoice setDesktopLayout={setDesktopLayout} setLayoutChoiceMade={setLayoutChoiceMade} style={{ LayoutButton: style.LayoutButton, deviceChoiceTitle: style.deviceChoiceTitle }}/>
      }
    </main>
  );
}
