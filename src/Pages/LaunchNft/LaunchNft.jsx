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
                <form className="transparent-input">
                    <label>Contract Name <span className="required">*</span>
                    <input
                    type="text"
                    placeholder="Contract Name"
                    required />
                    </label>
                </form>
                <form className="transparent-input">
                    <label>Contract Symbol <span className="required">*</span>
                    <input
                    type="text"
                    placeholder="Contract Symbol"
                    required />
                    </label>
                </form>
                <form className="transparent-input">
                    <label>Choose Chain <span className="required">*</span>
                    <input
                    type="text"
                    placeholder="Polygon"
                    required />
                    </label>
                </form>
                <form className="transparent-input">
                    <label>Type <span className="required">*</span>
                    <input
                    type="text"
                    placeholder="ERC721A"
                    required />
                    </label>
                </form>
                <form className="transparent-input">
                    <label>Token Uri <span className="required">*</span>
                    <input
                    type="text"
                    placeholder="Token Uri"
                    required />
                    </label>
                </form>
                <form className="transparent-input">
                    <label>Max. Mint Allowed Per. User <span className="required">*</span>
                    <input
                    type="text"
                    placeholder="Max. Mint Allowed Per. User"
                    required />
                    </label>
                </form>
                <form className="transparent-input">
                    <label>Max Supply <span className="required">*</span>
                    <input
                    type="text"
                    placeholder="Max Supply"
                    required />
                    </label>
                </form>
                <form className="transparent-input">
                    <label>Cost <span className="required">*</span>
                    <input
                    type="text"
                    placeholder="Cost"
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

export default LaunchNft;