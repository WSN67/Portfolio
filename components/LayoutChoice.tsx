"use client"
import "../styles/App.css";
import { useEffect, useState } from "react";

interface LayoutChoiceProps {

  setDesktopLayout: Function;
  setLayoutChoiceMade: Function;
  style: { 
    LayoutButton: string,
    deviceChoiceTitle: string
   };
}


export default function LayoutChoice({setDesktopLayout, setLayoutChoiceMade, style} : LayoutChoiceProps) {
  const [isLoaded,setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  },[]);

  useEffect(() => {
    let searchParams: URLSearchParams = new URLSearchParams();
    searchParams = new URLSearchParams(window.location.search);
  },[isLoaded]);


  function pushLayoutinURL(layout: string):void {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("Layout", layout);
          const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
          window.history.pushState({}, '', newUrl);
          setDesktopLayout(true);
          setLayoutChoiceMade(true);
  };

  return (

    <main id="LayoutChoiceContainer">
        <h1 className={[style.deviceChoiceTitle,"deviceChoiceTitle"].join(' ')}> What device are you on ?</h1>
        <button className={[style.LayoutButton,"LayoutButton"].join(' ')} onClick={() => pushLayoutinURL("Desktop")}>Desktop</button>
        <button className={[style.LayoutButton,"LayoutButton"].join(' ')} onClick={() => pushLayoutinURL("Mobile")}>Mobile / Tablet</button>      
    </main>
  );
}
