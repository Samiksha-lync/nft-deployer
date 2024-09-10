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
            <input type="text" className="transparent-input" placeholder="Contract Name" required />
            <input type="text" className="transparent-input" placeholder="Contract Symbol" required />
            <input type="text" className="transparent-input" placeholder="Ethereum" required />
            <input type="text" className="transparent-input" placeholder="ERC 1155" required />
            </div>
            <div className="connect-wallet-btn" >
                Connect Wallet
            </div>
        </div>
    )
}

export default DeployMultiple;