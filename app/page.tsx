"use client"
import Avatar from "../components/Avatar";
import "../styles/App.css";
import Link from "next/link";


export default function Home() {
    
  return (
    <main>
      <span>
        <h1 className="MainTitle">PORTFOLIO</h1>
        <button className="SettingsButton"></button>
      </span>
      <Avatar />
      <Link href="/mainPage" className="PlayButton">PLAY</Link>
    </main>
  );
}
