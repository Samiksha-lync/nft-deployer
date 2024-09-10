import React, { useState } from "react";
import './Home/Home.scss';
import Nft from './Home/Nft';
import MultipleEditions from './Home/MultipleEditions';
import Collection from './Home/Collection';
import Web3 from './Home/Web3';
import Farcaster from './Home/Farcaster';

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
                        <button className="secondary-header" onClick={showNftContent}>1/1 NFT</button>
                        <button className="secondary-header" onClick={showMultipleContent}>Multiple Editions</button>
                        <button className="secondary-header" onClick={showCollectionContent}>Collection</button>
                        <button className="secondary-header" onClick={showWeb3Content}>Web3 Games</button>
                        <button className="secondary-header" onClick={showFarcasterContent}>Farcaster Frame Mint</button>
                    </div>
                        {content}
            </div>
        </div>
    );
}

export default Home;
