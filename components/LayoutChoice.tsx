"use client"
import "../styles/App.css";
import { useEffect, useState } from "react";

interface LayoutChoiceProps {

  setDesktopLayout: Function;

  setLayoutChoiceMade: Function;

}


export default function LayoutChoice({setDesktopLayout, setLayoutChoiceMade} : LayoutChoiceProps) {
  let searchParams: URLSearchParams;
  const [isLoaded,setIsLoaded] = useState(false);


  useEffect(() => {
    setIsLoaded(true);
  },[]);

  useEffect(() => {
    searchParams = new URLSearchParams(window.location.search);
  },[isLoaded]);


  function pushLayoutinURL(layout: string):void {
    searchParams.set("Layout", layout);
          const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
          window.history.pushState({}, '', newUrl);
          setDesktopLayout(true);
          setLayoutChoiceMade(true);
  };

  // TODO then => set up styles based on layout

  return (

    <main id="LayoutChoiceContainer">
        <h1> What device are you on ?</h1>
        <button className="LayoutButton" onClick={() => pushLayoutinURL("Desktop")}>Desktop</button>
        <button className="LayoutButton" onClick={() => pushLayoutinURL("Mobile")}>Mobile / Tablet</button>      
    </main>
  );
}
