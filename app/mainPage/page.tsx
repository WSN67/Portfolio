"use client"
import Avatar from "@/components/Avatar";
import "@/styles/mainPage.css";
import Link from "next/link";
import { useEffect, useState } from "react";

import NightMode from "../../styles/mainPageNightMode.module.css";
import LightMode from "../../styles/mainPageLightMode.module.css";
import { BackgroundColorNightMode, BackgroundColorLightMode } from "../utils/index";
import * as utils from "../utils/index";

export default function MainPage() {


    const [URLquery, setURLquery] = useState("");
    const [style, setStyle] = useState(NightMode);


    useEffect(() => {
        setURLquery(window.location.search.toString().substring(1));
            //update background color
            let themeCookie = utils.getCookieValue("theme");
            if(themeCookie === "lightMode") {
              document.getElementsByTagName("html")[0].style.backgroundColor = utils.BackgroundColorLightMode;
            }
            else {
              document.getElementsByTagName("html")[0].style.backgroundColor = utils.BackgroundColorNightMode;
            }
        
    },[]);  

  // toggles between light and night mode
  function toggleLightMode():void {
    if (style === LightMode) {
      setStyle(NightMode);
      utils.setCookie("theme","nightMode");
      document.getElementsByTagName("html")[0].style.backgroundColor = utils.BackgroundColorNightMode;
    }
    else {
      setStyle(LightMode);
      utils.setCookie("theme","lightMode");
      document.getElementsByTagName("html")[0].style.backgroundColor = utils.BackgroundColorLightMode;
    }
  }

    return (
        <main>
            <span>
                <h1 className="MainTitle">PORTFOLIO</h1>
                <button onClick={toggleLightMode} className={[style.SettingsButton,"SettingsButton ButtonHoverEffect ButtonActiveEffect"].join(' ')} ></button>
                </span>
            <div id="mainPageContainer">
                <Avatar />
                <section>
                    <p id="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto earum in nisi, vel perspiciatis reiciendis quibusdam suscipit sapiente consectetur, vitae officia mollitia totam? Ut, earum. Labore explicabo quia voluptas dolorem?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto earum in nisi, vel perspiciatis reiciendis quibusdam suscipit sapiente consectetur, vitae officia mollitia totam? Ut, earum. Labore explicabo quia voluptas dolorem?</p>
                    <ul id="mainPageList">
                        <li className="listSkillItem">About me</li>
                        <li className="listSkillItem">List of Dev Skills</li>
                        <li className="listSkillItem">Contact</li>
                        <li className="listSkillItem">
                            <Link href={{pathname:"/",query: URLquery}}>Quit Game</Link>                
                        </li>
                    </ul>
                </section>
            </div>
        </main>
    );
}