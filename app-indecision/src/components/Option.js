import React from "react";

// Option Entry Stateless Component Class
const Option = (props) => {
    return (
        <div>
            <span className="font-weight-bold">{props.option}</span>
            <button
                className="btn btn-xs btn-danger ml-2 font-weight-bold py-1 px-1"
                data-type="minus"
                style={{ "fontSize": "10px" }}
                onClick={ (e) => { props.handleRemoveOne(props.option); }}
            >
                -
            </button>
        </div>
    );
};

export default Option;