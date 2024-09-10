import React from "react";
import './_deploy.scss';

function DeployNft(){
    return(
        <div className="deploy-main-container">
            <div className="heading">
            Deploy 1/1 NFT Art
            </div>
            <div className="heading-1">
            Please draft your contract details with care
            </div>
            <div className="sub-text">
                <div> Your contract name is a key identifier that appears wherever your contract is mentioned 
                </div>
                <div>or listed. Typically, it reflects your artist name, collection name, brand, or project name.</div>
            </div>
            <div className="detail-boxes">
            <input type="text" className="transparent-input" placeholder="Contract Name" required />
            <input type="text" className="transparent-input" placeholder="Contract Symbol" required />
            <input type="text" className="transparent-input" placeholder="Ethereum" required />
            <input type="text" className="transparent-input" placeholder="ERC721A" required />
            </div>
            <div className="connect-wallet-btn">
                Connect Wallet
            </div>
        </div>
    )
}

export default DeployNft;