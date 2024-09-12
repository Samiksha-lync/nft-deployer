import React, { useState } from "react";
import './Home.scss';
import Nft from './Nft';
import MultipleEditions from './MultipleEditions';
import Collection from './Collection';
import Web3 from './Web3';
import Farcaster from './Farcaster';

function Home() {
    // State to hold the current content and active button
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
                                className={`secondary-header-1 ${active === '1/1 NFT' ? 'active' : ''}`}
                                onClick={showNftContent}
                            >
                                1/1 NFT
                            </div>
                        </li>
                        <li>
                            <div
                                className={`secondary-header-2 ${active === 'Multiple Editions' ? 'active' : ''}`}
                                onClick={showMultipleContent}
                            >
                                Multiple Editions
                            </div>
                        </li>
                        <li>
                            <div
                                className={`secondary-header-3 ${active === 'Collection' ? 'active' : ''}`}
                                onClick={showCollectionContent}
                            >
                                Collection
                            </div>
                        </li>
                        <li>
                            <div
                                className={`secondary-header-4 ${active === 'Web3 Games' ? 'active' : ''}`}
                                onClick={showWeb3Content}
                            >
                                Web3 Games
                            </div>
                        </li>
                        <li>
                            <div
                                className={`secondary-header-5 ${active === 'Farcaster Frame Mint' ? 'active' : ''}`}
                                onClick={showFarcasterContent}
                            >
                                Farcaster Frame Mint
                            </div>
                        </li>
                    </ul>
                </div>
                {content}
            </div>
            <div className="round-patch">
                <img src="Ellipse 182.png" className="rotate" alt="Decorative" />
                <img src="Ellipse 182.png" className="rotate-1" alt="Decorative" />
            </div>
        </div>
    );
}

export default Home;
