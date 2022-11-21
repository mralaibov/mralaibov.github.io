import JobItem from "./jobItem/JobItem";
import React, {useState} from "react";

const Jobs = () => {
    const [items, setItems] = useState([])
    return (
        <div className="cards">
            {items.map((item, index) => <JobItem {...item} key={item.id} index={index}/>)}
        </div>
    );
};

export default Jobs;