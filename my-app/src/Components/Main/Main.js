import React from 'react';
import {StyledMain} from "./StyledMain";


const Main = () => {

    return (
        <StyledMain>
            <div className="title_banner">
                <h1>WE ARE A LANDING PAGE</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis sed dapibus leo nec ornare diam sed commodo nibh
                    ante facilisis bibendum.
                </p>
                <div className="info_button">
                    <a href="#" >Learn More</a>
                </div>
            </div>
        </StyledMain>
    );
};

export default Main;