import React,{useState}from 'react';
import { NavLink} from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './_header.scss';

function Header(){
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNavbar = () => {
        setIsNavOpen(!isNavOpen);
    };
    const closeNavbar = () => {
        setIsNavOpen(false);
    };

    return(
        <>
        <div className="header">
            <div className='header-items'>
            <div className='logo'>
                <img src='public\WHITE TEXT 1.png' className='logo-img'/>
            </div>
            <button className="nav-toggle" onClick={toggleNavbar}>
                {isNavOpen ? <FaTimes size={24} style={{ color: 'white' }}/> : <FaBars size={24} style={{ color: 'white' }} />}
            </button>
            <nav className={`navbar ${isNavOpen ? 'responsive_nav' : ''}`}>
                <ul className="items">
                    <li>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => (isActive ? 'active' : '')}
                            onClick={closeNavbar}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/YourContracts" 
                            className={({ isActive }) => (isActive ? 'active' : '')}
                            onClick={closeNavbar}
                        >
                            Your Contracts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/Tutorials" 
                            className={({ isActive }) => (isActive ? 'active' : '')}
                            onClick={closeNavbar}
                        >
                            Tutorials
                        </NavLink>
                    </li>
                    <span className='wallet-button'>
                            Connect Wallet</span>
                </ul>
            </nav>
            </div>    
         </div>
        </>
    )
}

export default Header

