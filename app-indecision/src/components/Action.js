import React from "react";


// Decision Action button Stateless Component Class
const Action = (props) => (
    <div className="d-flex justify-content-center">
        <button className="btn btn-primary mb-4 w-50 shadow btn-block font-weight-bold" onClick={props.handlePickOne} disabled={!props.hasOptions}>What should I do?</button>
    </div>
);

export default Action;