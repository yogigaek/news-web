import React from "react";

const Paragraf = ({parValue}) => {
    return (
        <div>
            <h1>React State</h1>
            <h3>{!parValue ? "Paragraf Lama" : parValue }</h3>
        </div>
    );
};

export default Paragraf;