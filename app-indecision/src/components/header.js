import React from "react";

// Header title and sub-title Stateless Component Class
const Header = (props) => (
    <div>
        <h1>{props.title}</h1>
        {props.subtitle && <p className="lead">{props.subtitle}</p>}
    </div>
);

export default Header;