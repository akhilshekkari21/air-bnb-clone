import React from "react";

const Childcomp = ({data}) => {
    return (

        <div>
            <p>Name : {data.Name}</p>
            <p>Age : {data.Age}</p>
        </div>
    )
}

export default Childcomp;