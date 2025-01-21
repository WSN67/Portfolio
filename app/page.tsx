"use client"
import Avatar from "../components/Avatar";
import "../styles/App.css";
import Router, { useRouter } from "next/navigation";


function openMainPage() {
  console.log("Opening Main Page");    
}

export default function Home() {
  
  const router = useRouter();
  
  return (
    <main>
      <span>
        <h1 className="MainTitle">PORTFOLIO</h1>
        <button className="SettingsButton"></button>
      </span>
      <Avatar />
      <button type="button" className="PlayButton" onClick={() => router.push("/mainPage")}>PLAY</button>
    </main>
  );
}
