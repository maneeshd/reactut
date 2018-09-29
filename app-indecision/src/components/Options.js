import React from "react";
import Option from "./Option"

// Options List Stateless Component Class
const Options = (props) => {
    return (
        <div>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="mb-2 w-25 text-center text-wrap">
                    {
                        props.options.map((option) => <Option option={option} key={option} handleRemoveOne={props.handleRemoveOne} />)
                    }
                </div>
                {props.options.length === 0 && <p>Please add an option to get started!</p>}
                <button className="btn btn-sm btn-danger btn-block w-25 shadow mb-2" onClick={props.handleRemoveAll} disabled={!props.options.length}>Remove All</button>
            </div>
        </div>
    );
};

export default Options;
