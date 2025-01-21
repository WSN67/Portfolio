"use client"
import Avatar from "../components/Avatar";
import "../styles/App.css";


function openMainPage() {
  console.log("Opening Main Page");    
}

export default function Home() {
  return (
    <main>
      <span>
        <h1 className="MainTitle">PORTFOLIO</h1>
        <button className="SettingsButton"></button>
      </span>
      <Avatar />
      <button className="PlayButton" onClick={openMainPage}>PLAY</button>
    </main>
  );
}
