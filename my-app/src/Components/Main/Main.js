import React from 'react';
import {StyledMain} from "./StyledMain";
import SectionInfo from "./SectionInfo/SectionInfo";
import Banner from "./BannerSection/Banner";


const Main = () => {
    return (
        <StyledMain>
            <Banner/>
            <SectionInfo/>
        </StyledMain>

    );
};

export default Main;