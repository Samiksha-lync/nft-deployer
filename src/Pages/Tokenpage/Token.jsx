import React from "react";
import './_token.scss';
function Token(){
    return(
        <div className="mint-main-container">
            <div className="mint-heading">
                Mint NFT
            </div>
            <div className="mint-container">
                <div className="head-section">
                    <div className="left-section">
                        Mint NFT
                    </div>
                    <div className="right-section">
                        <div className="overview-button">
                            Overview
                        </div>
                        <div className="token-button">
                            Tokens
                        </div>
                    </div>
                </div>
                <div className="main-middle-container">
                    <div className="main-text">
                    It seems you haven't minted any NFT yet!
                    </div>
                    <div className="create-button">
                        Create Now
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Token;