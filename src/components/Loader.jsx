import React from "react";

function  Loader() {
    return (
        <>
        <link rel="stylesheet" href="src\assets\css\Loader.css" />
        <div className="boxMainLoader">
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
            <span className="textLoader">Loading ...</span>
        </div>
        </>
    );
}

export default Loader