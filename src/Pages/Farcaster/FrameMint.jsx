import React, { useState } from "react";
import './_framemint.scss';

function FrameMint() {
    const [properties, setProperties] = useState([{ id: 1, title: '', value: '' }]);

   
    const addMoreProperties = () => {
        const newId = properties.length ? properties[properties.length - 1].id + 1 : 1;
        setProperties([...properties, { id: newId, title: '', value: '' }]);
    };


    const handleChange = (id, field, value) => {
        setProperties(properties.map(prop =>
            prop.id === id ? { ...prop, [field]: value } : prop
        ));
    };

    
    const removeProperty = (id) => {
        setProperties(properties.filter(prop => prop.id !== id));
    };

    return (
        <div className="frame-main-container">
            <div className="main-heading">
                Farcaster Frame Mint
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
                    <div><img src="public/Vector (4).png" alt="Upload" /></div>
                    <div>Upload Image Or GIF</div>
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
                <div className="properties">
                    {properties.map(property => (
                        <div key={property.id} className="property-group">
                            <form className=" ">
                                <input
                                    type="text"
                                    placeholder="Property Title"
                                    value={property.title}
                                    onChange={(e) => handleChange(property.id, 'title', e.target.value)}
                                />
                            </form>
                            <form className=" ">
                                <input
                                    type="text"
                                    placeholder="Property Value"
                                    value={property.value}
                                    onChange={(e) => handleChange(property.id, 'value', e.target.value)}
                                />
                            </form>
                            <button
                                type="button"
                                className="remove-btn"
                                onClick={() => removeProperty(property.id)}
                            >
                                &times;
                            </button>
                        </div>
                    ))}
                    <div className="add-more-btn" onClick={addMoreProperties}>Add More</div>
                </div>
                <form className="transparent-input">
                    <label>Created By<span className="required">*</span>
                        <input
                            type="text"
                            placeholder="Created By"
                            required />
                    </label>
                </form>
            </div>
            <div className="connect-wallet-btn">
                Connect Wallet
            </div>
        </div>
    );
}

export default FrameMint;
