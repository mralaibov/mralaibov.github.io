import React from 'react';
import {StyledSectionInfo} from "./StyledSectionInfo";
import {DataInfo} from "../../../Content/DataInfo";
import SectionItem from "./SectionItem/SectionItem";

const SectionInfo = () => {
    return (
        <StyledSectionInfo>
            {DataInfo.imgUrl.map(item => (
                <SectionItem imgUrl={item} title={DataInfo.title} subtitle={DataInfo.subtitle}/>
            ))}
        </StyledSectionInfo>
    );
};

export default SectionInfo;