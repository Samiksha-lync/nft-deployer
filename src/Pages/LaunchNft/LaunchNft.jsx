import React from "react";
import './_launchnft.scss';

function LaunchNft(){
    return(
        <div className="launch-main-container">
            <div className="main-heading">
            Launch NFT Collection
            </div>
            <div className="sub-heading">
            Please draft your contract details with care
            </div>
            <div className="sub-text">
                <div>Your contract name is a key identifier that appears wherever your contract is mentioned or </div>
                <div>listed. Typically, it reflects your artist name, collection name, brand, or project name.</div>
            </div>
            <div className="details-container">
                <div className="image-box">
                    <div><img src="src\Pages\LaunchNft\Vector (4).png"/></div><div>Upload Image Or GIF</div>
                </div>
                <input type="text" className="transparent-input" placeholder="Title" required />
            <input type="text" className="transparent-input" placeholder="Description" required />
            <input type="text" className="transparent-input" placeholder="Contract Name" required />
            <input type="text" className="transparent-input" placeholder="Contract Symbol" required />
            <input type="text" className="transparent-input" placeholder="Polygon" required />
            <input type="text" className="transparent-input" placeholder="ERC721A" required />
            <input type="text" className="transparent-input" placeholder="Token Uri" required />
            <input type="text" className="transparent-input" placeholder="Max. Mint Allowed Per. User" required />
            <input type="text" className="transparent-input" placeholder="Max Supply" required />
            <input type="text" className="transparent-input" placeholder="Cost" required />
            </div>
            <div className="connect-wallet-btn">
                Connect Wallet
            </div>
        </div>
    )
}

export default LaunchNft;