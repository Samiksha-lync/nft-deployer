import React from "react";
import { useNavigate } from "react-router-dom";

function Multiple(){

    const navigate = useNavigate(); 

    const handleGetStarted = () => {
        navigate('/multiple-edition'); 
    };
    return(
        <div className="inside-container">
        <div className="box-container">
            <img src="src\Pages\Home\Group 1110166311.png" className="multi-img" />
        </div>
        <div className="text-container">
            <div className="heading-1">
                Multiple Editions
            </div>
            <div className="text">
                <div>Create multiple editions of your</div>
             <div>art by deploying your own</div> <div> ERC 1155 contract</div>
            </div>
            <div className="get-started-btn"onClick={handleGetStarted}>
                Get Started
            </div>
        </div>
       </div>
    )
}

export default Multiple;

 
