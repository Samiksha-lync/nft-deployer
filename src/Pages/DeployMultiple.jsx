import React from "react";
import './_deploy.scss';


function DeployMultiple(){

    
    return(
        <div className="deploy-main-container">
            <div className="heading">
            Deploy Multiple Editions
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
                    <label>Choose Coin <span className="required">*</span>
                    <input
                    type="text"
                    placeholder="Ethereum"
                    required />
                    </label>
                </form>
                <form className="transparent-input">
                    <label>Type <span className="required">*</span>
                    <input
                    type="text"
                    placeholder="ERC 1155"
                    required />
                    </label>
                </form>
            </div>
            <div className="connect-wallet-btn" >
                Connect Wallet
            </div>
        </div>
    )
}

export default DeployMultiple;