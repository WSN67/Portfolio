import React from "react";
export default function ProgressBar({progress = 0}: {progress?: number}) {  

    function chooseColor(progress:number):string{
        if (progress < 30) {
            return 'darkred';
        }
        else if (progress < 50) {
            return 'darkorange';
        }
        else {
            return 'darkgreen';
        }
    };


    const barStyle: React.CSSProperties = {
        width: `${progress}%`,
        height: '100%',
        backgroundColor: chooseColor(progress),
        alignContent: 'center',
        whiteSpace: 'pre-wrap',
    };
    
    
    const containerStyle: React.CSSProperties = {
        width: '100%',
        height: '25px',
        backgroundColor: '#bbbbbb',
        border: '1px solid black',
        padding: '0',
        color:'whitesmoke',
        fontWeight: 'bold',
    };

    return (
        <div style={containerStyle}>
            <div style={barStyle}>{" " + progress + "%"}</div>
        </div>
    );
};
