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
                        <p onClick={showNftContent}>1/1 NFT</p>
                        <p onClick={showMultipleContent}>Multiple Editions</p>
                        <p onClick={showCollectionContent}>Collection</p>
                        <p onClick={showWeb3Content}>Web3 Games</p>
                        <p onClick={showFarcasterContent}>Farcaster Frame Mint</p>
                    </div>
                    <div className="textcontainer">
                        {content}
                    </div>
            </div>
        </div>
    );
}

export default Home;
