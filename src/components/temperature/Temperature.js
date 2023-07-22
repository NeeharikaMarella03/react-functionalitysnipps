import React, { useState } from "react";
import './styles.css';

function Temperature(){
    const [tempChange, setTempChange] = useState(30);
    // const [colourChange, setColourChange] = useState(backgroundColor)

    
    if (tempChange > 30) {
        var backgroundColor = `rgb(255, ${(72-tempChange)*2}, 0)`

    } else {
        backgroundColor = `rgb(0, ${(72+tempChange)*2}, 255)`

    }
    console.log(backgroundColor)
    
    return(
        <div className="container">
            <div className="temp-container">
                <div className="temp-cirlce" style={{backgroundColor}}>
                    {tempChange} &deg;C
                </div>
                <div className="temp-inc-dec">
                    <button className="temp-btn" onClick={()=> setTempChange(()=>tempChange+1)}>+</button>
                    <button className="temp-btn" onClick={()=> setTempChange(()=>tempChange-1)}>-</button>
                </div>
            </div>
        </div>
        
    )
}

export default Temperature;