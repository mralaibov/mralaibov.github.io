import React from 'react';

const SectionItem = (props) => {
    return (
        <div>
            <img src={props.imgUrl} alt=""/>
            <h5>{props.title}</h5>
            <p>{props.subtitle}</p>
        </div>
    );
};

export default SectionItem;