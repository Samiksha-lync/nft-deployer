import React from "react";
import './_smartcontract.scss';

function SmartContract(){
    return(
        <div className="smart-contract-container">
            <div className="main-heading">
            Smart Contract Detail
            </div>
            <div className="sub-text">
                <div>Your contract name is a key identifier that appears wherever your contract is mentioned or listed.</div>
                <div> Typically, it reflects your artist name, collection name, brand, or project name.</div>
            </div>
            <div className="contract-details">
                <div className="deployed-date">
                Contract Deployed on : 2024-09-10
                </div>
                <div className="buttons-side">
                    <div className="overview-btn">
                        Overview
                    </div>
                    <div className="token-btn">
                        Tokens
                    </div>
                </div>
            </div>
            <div className="details-container">
                <div className="detail">
                <input type="text" className="transparent-input" placeholder="Title" required />
            <input type="text" className="transparent-input" placeholder="Contract Name" required />
            <input type="text" className="transparent-input" placeholder="Contract Symbol" required />
            <input type="text" className="transparent-input" placeholder="PLOYGONAMOY" required />
            <input type="text" className="transparent-input" placeholder="ERC-1155" required />
            <input type="text" className="transparent-input" placeholder="Multiple" required />
            </div>
            <div className="detail-btn">
            <div className="connect-wallet-btn">
                View on Block Explorer
            </div>
            </div>
            </div>
        </div>
    )
}

export default SmartContract;