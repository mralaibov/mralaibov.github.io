import React from 'react';
import {StyledHeader} from "./StyledHeader";

const Header = () => {
    return (
        <StyledHeader>
                <nav id="menu" className="navbar">
                    <div className="container">
                        <div className="logo">
                            <a href={'#'}>React Landing Page</a>
                        </div>
                        <div className="links">
                            <a href={'#'}>FEATURES</a>
                            <a href={'#'}>ABOUT</a>
                            <a href={'#'}>SERVICES</a>
                            <a href={'#'}>GALLERY</a>
                            <a href={'#'}>TESTIMONIALS</a>
                            <a href={'#'}>TEAM</a>
                            <a href={'#'}>CONTACT</a>
                        </div>
                    </div>
                </nav>
        </StyledHeader>
    );
};

export default Header;