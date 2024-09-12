import React from "react";
import './_framemint.scss';

function FrameMint(){
    return(
        <div className="frame-main-container">
        <div className="main-heading">
        Farcaster Frame  MInt
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
            <form className="transparent-input">
                    <label>Title <span className="required">*</span>
                    <input
                    type="text"
                    placeholder="Title"
                    required />
                    </label>
                </form>
                <form className="transparent-input">
                    <label>Description <span className="required">*</span>
                    <input
                    type="text"
                    placeholder="Description"
                    required />
                    </label>
                </form>

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

        <form className="transparent-input">
                    <label>Created By<span className="required">*</span>
                    <input
                    type="text"
                    placeholder="Created By"
                    required />
                    </label>
                </form>
        </div>
        <div className="connect-wallet-btn">
            Connect Wallet
        </div>
    </div>
    )
}

export default FrameMint;
