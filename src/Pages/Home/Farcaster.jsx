import React from "react";
import { useNavigate } from "react-router-dom";
function Farcaster(){
    const navigate = useNavigate(); 

    const handleGetStarted = () => {
        navigate('/frame-mint'); 
    };
    return(

        <div className="inside-container">
        <div className="box-container">
        <img src="Group 1110166308.png" className="nft-img"/>
        </div>
        <div className="text-container">
            <div className="heading">
            <div>No-code NFT Mint </div>
            <div>on Farcaster</div>
            </div>
            <div className="text">
                <div>Deploy your entire game or </div>
             <div>metaverse on IPFS and list it as NFT</div> 
            </div>
            <div className="get-started-btn"onClick={handleGetStarted}>
                Frame Mint
            </div>
        </div>
       </div>
    )
}

export default Farcaster;