import React from "react";
import './_common.scss';
import { useNavigate } from "react-router-dom";


function Nft(){

    const navigate = useNavigate(); 

    const handleGetStarted = () => {
        navigate('/deploy-nft'); 
    };

    return(
       <div className="inside-container">
        <div className="box-container">
            <img src="src\Pages\Home\Group 1110166308.png" className="nft-img"/>
        </div>
        <div className="text-container">
            <div className="heading-1">
                List 1/1 art
            </div>
            <div className="text">
                <div>Showcase your unique artwork</div>
             <div>on the blockchain by deploying</div> <div>your  ERC721 contract</div>
            </div>
            <div className="get-started-btn" onClick={handleGetStarted}>
                Get Started
            </div>
        </div>
       </div>
    )
}

export default Nft;