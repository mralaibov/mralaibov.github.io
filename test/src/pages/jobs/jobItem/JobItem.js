import React, {useState} from 'react';
import {Link} from "react-router-dom";
import favor from "../../../img/favorites.svg"

const JobItem = ({index, pictures, title, subtitle, address, createdAt, location, name, id}) => {
    const [isActive, setIsActive] = useState(false);
        const favClicked = event => {
            setIsActive(current => !current);
        };
    return (
        <div className="ty-sort-container">
            <div className="main-content-grid">
                <img src={pictures[index%2]}  className="main-pic" alt="main_board_pictures"/>
                <div className="content">
                    <Link to={"/" + id } className="title">{title}</Link>
                    <p className="subtitle">{subtitle}</p>
                    <p className="link-address">Department name {address}</p>
                    <p className="data-posted">{createdAt}</p>
                    <img src={favor}  onClick={favClicked} className={isActive ? 'active' : 'icon'} alt="icon_for_selected_items"/>
                </div>
            </div>
        </div>
    );
};

export default JobItem;