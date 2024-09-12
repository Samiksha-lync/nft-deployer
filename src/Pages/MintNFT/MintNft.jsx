import React from "react";
import './_mintnft.scss';

function MintNft(){
    return(
        <div className="frame-main-container">
        <div className="main-heading">
        MInt NFT
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
                <div><img src="public\Vector (4).png"/></div><div>Upload Image Or GIF</div>
            </div>
            <input type="text" className="transparent-input" placeholder="Title" required />
        <input type="text" className="transparent-input-description" placeholder="Description" required />

        <div className="properties-container">
            <div>Properties</div>
            <div className="property-components">
            <div className="property-component-1">
                <div>Property Title</div>
                <div>Property Value</div>
                <div className="images">
                <img src="public\mdi_tick.png"className="img-1"/>
                <img src="public\gridicons_cross.png" className="img-1"/>
                </div>
            </div>
            <div className="property-component-2">
                <div>Property Title</div>
                <div>Property Value</div>
                <div className="images">
                <img src="public\mdi_tick.png" className="img-1"/>
                <img src="public\gridicons_cross.png" className="img-1"/>
                </div>
            </div>
            </div>
            <div className="add-more-btn">Add More</div>
        </div>

        <input type="text" className="transparent-input" placeholder="Created By" required />
        </div>
        <div className="connect-wallet-btn">
            Mint NFT
        </div>
    </div>
    )
}

export default MintNft;
