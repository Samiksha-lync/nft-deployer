import React from "react";
import { useNavigate } from "react-router-dom";
function Collection(){

    const navigate = useNavigate(); 

    const handleGetStarted = () => {
        navigate('/launch-nft'); 
    };

    return(
        <div className="inside-container">
        <div className="box-container">
            <img src="Group 1110166309.png" className="collection-img" />
        </div>
        <div className="text-container">
            <div className="heading-1">
            Launch NFT project
            </div>
            <div className="text">
                <div>An entire NFT collection on ERC721A ,</div>
             <div>with a mint page and gasless option</div> 
            </div>
            <div className="get-started-btn" onClick={handleGetStarted}>
                Create +
            </div>
        </div>
       </div>
    )
}

export default Collection;

 