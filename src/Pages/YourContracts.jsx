import React from "react";
import './_YourContract.scss';

function YourContracts(){
    return(
        <div className="main-contract-container">
            <div className="your-contract-heading">
                Your Contracts
            </div>
          <div className="contract-container">
            
            <div className="sub-contract-container">
                <div className="head-container">
                    <div className="left-container">
                        Your Contracts
                    </div>
                    <div className="right-container">
                    <div className="chain">
                        <select id="chain" >
                            <option value>Chain</option>
                            <option value="ethereum">Ethereum</option>
                            <option value="base">Base</option>
                            <option value="polygon">Polygon</option>
                            <option value="sepolia">Sepolia</option>
                            <option value="base-sepolia">Base Sepolia</option>
                            <option value="polygon-amoy">Polygon Amoy</option>
                        </select>
                     </div>
                    </div>
                </div>
                <div className="contract-main-container">
                    <div className="main-container-heading">
                        Deploy A Contract
                    </div>
                    <div className="main-container-text">
                        <div>Pick A Smart Contract Or Deploy A Fresh </div>
                        <div>One To Launch Your Unique NFTs.</div>
                    </div>
                    <div className="main-container-text-2">
                    It seems you haven't deployed any contract yet!!
                    </div>
                    <div className="container-btns">
                        <div className="deploy-contract-btn">
                            Deploy Contract
                        </div>
                        <div className="new-contract-btn">
                            New Contract
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default YourContracts;