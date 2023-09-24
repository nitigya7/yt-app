import React from "react";
const MyList = ({title,id})=>{
    return(
        <div className="my-list">
            <h1>{title}</h1>
            <h3>{id}</h3>
        </div>
    )
}

export default MyList;