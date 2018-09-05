/*
* Author: Maneesh D <maneeshd77@gmail.com>
*/

"use strict";

const appRoot = document.getElementById("app");

const appData = {
    title: "Visibility Toggle",
    content: <p className="text-success">This is your hidden content!</p>
};

let content_visibility = false;

const toggleVisibility = () => {
    content_visibility = !content_visibility;
    renderApp();
};

const renderApp = () => {
    const template = (
        <div>
            <p className="display-4">Visibility Toggle</p>
            <button className="btn btn-primary mb-2" onClick={toggleVisibility}>
                {content_visibility ? "Hide content" : "Show content"}
            </button>
            {content_visibility && appData.content}
        </div>
    );

    // Render the above template in DOM
    ReactDOM.render(template, appRoot);
};

renderApp();
