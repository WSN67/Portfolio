"use client"
import Avatar from "../components/Avatar";
import "../styles/App.css";
import Link from "next/link";
import LayoutChoice from "../components/LayoutChoice";
import { useState } from "react";


export default function Home() {

  const [desktopLayout,setDesktopLayout] = useState(false);
  const [mobileLayout,setMobileLayout] = useState(false);
  const [layoutChoiceMade,setLayoutChoiceMade] = useState(false);
    

  return (
    <main>
      <span>
        <h1 className="MainTitle">PORTFOLIO</h1>
        <button className="SettingsButton" ></button>
      </span>
      {
        layoutChoiceMade ? <><Avatar /><Link href="/mainPage" className="PlayButton">PLAY</Link></> 
        : <LayoutChoice setDesktopLayout = {setDesktopLayout} setMobileLayout={setMobileLayout} setLayoutChoiceMade={setLayoutChoiceMade} />
      }
    </main>
  );
}
