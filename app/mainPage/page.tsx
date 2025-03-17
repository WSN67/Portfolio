"use client"
import AvatarDark from "@/components/AvatarDark";
import AvatarLight from "@/components/AvatarLight";
import "@/styles/mainPage.css";
import Link from "next/link";
import { useEffect, useState } from "react";

import NightMode from "../../styles/mainPageNightMode.module.css";
import LightMode from "../../styles/mainPageLightMode.module.css";
import * as utils from "../utils/index";

export default function MainPage() {


    const [URLquery, setURLquery] = useState("");
    const [style, setStyle] = useState(NightMode);
    const [Avatar,setAvatar] = useState(AvatarLight);


    useEffect(() => {
        setURLquery(window.location.search.toString().substring(1));
            //update background color and style
            let themeCookie = utils.getCookieValue("theme");
            if(themeCookie === "lightMode") {
              utils.setBackgroundColor(utils.LIGHTMODE_NUM);
              style === NightMode ? toggleLightMode() : utils.doNothing();
            }
            else {
              utils.setBackgroundColor(utils.NIGHTMODE_NUM);
              style === LightMode ? toggleLightMode() : utils.doNothing();
            }
        
    },[]);  

  // toggles between light and night mode
  function toggleLightMode():void {
    if (style === LightMode) {
      setStyle(NightMode);
      utils.setCookie("theme","nightMode");
      setAvatar(AvatarLight);
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
        <>
            <span>
                <h1 className={["MainTitle",style.MainTitle].join(' ')}>PORTFOLIO</h1>
                <button onClick={toggleLightMode} className={[style.SettingsButton,"SettingsButton ButtonHoverEffect ButtonActiveEffect"].join(' ')} ></button>
                </span>
            <div className={["mainPageContainer",style.mainPageContainer].join(' ')}>
                {Avatar}
                <section>
                    <p className={style.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto earum in nisi, vel perspiciatis reiciendis quibusdam suscipit sapiente consectetur, vitae officia mollitia totam? Ut, earum. Labore explicabo quia voluptas dolorem?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto earum in nisi, vel perspiciatis reiciendis quibusdam suscipit sapiente consectetur, vitae officia mollitia totam? Ut, earum. Labore explicabo quia voluptas dolorem?</p>
                    <ul id="mainPageList">
                        <Link className={[style.listSkillItem,"listSkillItem"].join(' ')} href={{pathname:"/about",query: URLquery}}>About me</Link>                
                        <Link className={[style.listSkillItem,"listSkillItem"].join(' ')} href={{pathname:"/devSkills",query: URLquery}}>Dev Skills</Link>                
                        <Link className={[style.listSkillItem,"listSkillItem"].join(' ')} href={{pathname:"/contact",query: URLquery}}>Contact</Link>                
                        <Link className={["quitGameButton",style.listSkillItem,"listSkillItem"].join(' ')} href={{pathname:"/",query: URLquery}}>Quit Game</Link>                
                    </ul>
                </section>
            </div>
        </>
    );
}