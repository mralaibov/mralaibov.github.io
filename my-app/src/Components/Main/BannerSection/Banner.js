import React from 'react';
import {StyledBanner} from "./StyledBanner";

const Banner = () => {
    return (
        <StyledBanner>
            <h1>WE ARE A LANDING PAGE</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis sed dapibus leo nec ornare diam sed commodo nibh
                ante facilisis bibendum.
            </p>
            <div className="info_button">
                <a href="#">Learn More</a>
            </div>
        </StyledBanner>
    );
};

export default Banner;