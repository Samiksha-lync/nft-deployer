import React, { useState } from "react";
import './Home/Home.scss';
import Nft from './Home/Nft';
import MultipleEditions from './Home/MultipleEditions';
import Collection from './Home/Collection';
import Web3 from './Home/Web3';
import Farcaster from './Home/Farcaster';

function Home() {
    const [content, setContent] = useState(<Nft />);
    const [active, setActive] = useState('1/1 NFT');

    const showNftContent = () => {
        setContent(<Nft />);
        setActive('1/1 NFT');
    };

    const showMultipleContent = () => {
        setContent(<MultipleEditions />);
        setActive('Multiple Editions');
    };

    const showCollectionContent = () => {
        setContent(<Collection />);
        setActive('Collection');
    };

    const showWeb3Content = () => {
        setContent(<Web3 />);
        setActive('Web3 Games');
    };

    const showFarcasterContent = () => {
        setContent(<Farcaster />);
        setActive('Farcaster Frame Mint');
    };


    return (
        <div className="Main-container">
            <div className="container">
            <div className="button-container">
                    <ul>
                        <li>
                            <div
                                className={`secondary-header ${active === '1/1 NFT' ? 'active' : ''}`}
                                onClick={showNftContent}
                            >
                                1/1 NFT
                            </div>
                        </li>
                        <li>
                            <div
                                className={`secondary-header ${active === 'Multiple Editions' ? 'active' : ''}`}
                                onClick={showMultipleContent}
                            >
                                Multiple Editions
                            </div>
                        </li>
                        <li>
                            <div
                                className={`secondary-header ${active === 'Collection' ? 'active' : ''}`}
                                onClick={showCollectionContent}
                            >
                                Collection
                            </div>
                        </li>
                        <li>
                            <div
                                className={`secondary-header ${active === 'Web3 Games' ? 'active' : ''}`}
                                onClick={showWeb3Content}
                            >
                                Web3 Games
                            </div>
                        </li>
                        <li>
                            <div
                                className={`secondary-header ${active === 'Farcaster Frame Mint' ? 'active' : ''}`}
                                onClick={showFarcasterContent}
                            >
                                Farcaster Frame Mint
                            </div>
                        </li>
                    </ul>
                </div>
                        {content}
            </div>
        </div>
    );
}

export default Home;
