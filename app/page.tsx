"use client"
import Avatar from "../components/Avatar";
import "../styles/App.css";
import Link from "next/link";
import LayoutChoice from "../components/LayoutChoice";
import { useEffect, useState } from "react";


export default function Home() {

  const [desktopLayout,setDesktopLayout] = useState(false);
  const [mobileLayout,setMobileLayout] = useState(false);
  const [layoutChoiceMade,setLayoutChoiceMade] = useState(false);
  const [isLoaded,setIsLoaded] = useState(false);
  let intervalID: NodeJS.Timeout;


  useEffect(() => {
    setIsLoaded(true);
  },[]);


  // clears interval when layout choice is made
  useEffect(() => { 
    return () => {
      clearInterval(intervalID);
    }
  },[layoutChoiceMade]);

  // clears interval if user refreshes page and 
  // create a new one to check if a layout has been chosen
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
      

  return (
    <main>
      <span>
        <h1 className="MainTitle">PORTFOLIO</h1>
        <button className="SettingsButton" ></button>
      </span>
      {
        layoutChoiceMade ? <><Avatar /><Link href= {{pathname:"/mainPage", query: window.location.search.toString().substring(1)}} className="PlayButton">PLAY</Link></> 
        : <LayoutChoice setDesktopLayout={setDesktopLayout} setLayoutChoiceMade={setLayoutChoiceMade}/>
      }
    </main>
  );
}
