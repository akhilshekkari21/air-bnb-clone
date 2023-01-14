import React from "react";
import Childcomp from "./Childcomp";

const Parentcomp = () => {
    const data = {Name : 'akhil',Age : 23};

    return(
        <Childcomp data = {data} />
    )
}

export default Parentcomp;