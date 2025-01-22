"use client"
import "../styles/App.css";
import { Dispatch, JSX, SetStateAction } from "react";


export default function LayoutChoice( { setDesktopLayout, setMobileLayout, setLayoutChoiceMade }:
     { setDesktopLayout: Dispatch<SetStateAction<boolean>>; 
        setMobileLayout: Dispatch<SetStateAction<boolean>>; 
        setLayoutChoiceMade: Dispatch<SetStateAction<boolean>>; }): JSX.Element {  
return (

    <main id="LayoutChoiceContainer">
        <h1> What device are you on ?</h1>
        <button className="LayoutButton" onClick={() => {setDesktopLayout(true); setLayoutChoiceMade(true);}}>Desktop</button>
        <button className="LayoutButton" onClick={() => {setMobileLayout(true); setLayoutChoiceMade(true);}}>Mobile</button>      
    </main>
  );
}
