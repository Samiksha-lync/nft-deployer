import React, { useState } from "react";
import './Home.scss';
import Nft from './Nft';
import MultipleEditions from './MultipleEditions';
import Collection from './Collection';
import Web3 from './Web3';
import Farcaster from './Farcaster';

function Home() {
    const [content, setContent] = useState(<Nft />);

    const showNftContent = () => setContent(<Nft />);
    const showMultipleContent = () => setContent(<MultipleEditions />);
    const showCollectionContent = () => setContent(<Collection />);
    const showWeb3Content = () => setContent(<Web3 />);
    const showFarcasterContent = () => setContent(<Farcaster />);

    return (
        <div className="Main-container">
            <div className="container">
                    <div className="button-container">
                        <ul>
                            <li><div className="secondary-header" onClick={showNftContent}> 1/1 NFT</div></li>
                            <li><div className="secondary-header" onClick={showMultipleContent}> Multiple Editions</div></li>
                            <li><div className="secondary-header" onClick={showCollectionContent}> Collection</div></li>
                            <li><div className="secondary-header" onClick={showWeb3Content}>Web3 Games</div></li>
                            <li><div className="secondary-header" onClick={showFarcasterContent}>Farcaster Frame Mint</div></li>
                         </ul>
                    </div>
                        {content}
            </div>
            <div className="round-patch">
                <img src="public/Ellipse 182.png" className="rotate"/>
                <img src="public/Ellipse 182.png" className="rotate-1"/>
            </div>
        </div>
    );
}

export default Home;
