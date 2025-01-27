"use client"
import Avatar from "@/components/Avatar";
import "@/styles/mainPage.css";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MainPage() {


    const [URLquery, setURLquery] = useState("");

    useEffect(() => {
        setURLquery(window.location.search.toString().substring(1));
    },[]);  

    return (
        <main>
            <span>
                <h1 className="MainTitle">PORTFOLIO</h1>
                <button className="SettingsButton"></button>
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