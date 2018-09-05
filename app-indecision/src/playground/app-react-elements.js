/*
* Author: Maneesh D <maneeshd77@gmail.com>
*/

"use strict";

// App Variables and Functions
const appData = {
    title: "Indecision?",
    subtitle: "Let the machine decide for you.",
    options: [],
    getOptionsList: function() {
        const listItems = this.options.map((opt) => <li key={opt + this.options.length+1}>{opt}</li>);
        return <ol className="text-dark text-justify font-weight-bold" style={{display: "inline-block"}}>{listItems}</ol>;
    }
};

const formSubmitHandler = (event) => {
    event.preventDefault();
    const option = event.target.elements.option.value;
    
    if(option) {
        appData.options.push(option);
        event.target.elements.option.value = "";
        renderApp();
    }
};

const resetOptionsList = () => {
    appData.options = [];
    renderApp();
};

const makeDecision = () => {
    const rand_idx = Math.floor(Math.random() * appData.options.length);
    const selection = appData.options[rand_idx];
    alert("Go with option: " + selection);
};

// JSX
const renderApp = () => {
    const appTemplate = (
        <div className="container w-50 text-center my-4 bg-light shadow">
            <div id="app-head">
                <h1>{appData.title.toUpperCase()}</h1>
                {appData.title && appData.subtitle ? <p className="lead">{appData.subtitle}</p> : ""}
            </div>
            <hr className="my-4"></hr>
            <div className="text-center p-4">
                {appData.options && appData.options.length > 0 ? <p className="text-info">Here are your options:</p> : <p className="text-danger">No options available.<br/>Please enter some options.</p>}
                {appData.options && appData.options.length > 0 ? appData.getOptionsList() : ""}
               
                <br/>
               
                <button className="btn btn-success btn-sm my-2 mx-1 shadow-sm" onClick={makeDecision} 
                    style={appData.options && appData.options.length > 0 ? {display: "inline-block"}: {display: "none"}}>What should I do?</button>
               
                <button className="btn btn-danger btn-sm my-2 mx-1 shadow-sm" onClick={resetOptionsList} 
                    style={appData.options && appData.options.length > 0 ? {display: "inline-block"}: {display: "none"}}>Remove All</button>
               
                <form  className="form-inline text-center justify-content-center" id="user-from" onSubmit={formSubmitHandler}>
                    <div className="form-row">
                        <div className="col">
                            <input className="form-control form-control-sm text-dark shadow-sm" type="text" name="option" placeholder="Enter valid Option"/>
                        </div>
                        <div className="col">
                            <button className="form-control form-control-sm btn btn-primary btn-sm shadow-sm">Add Option</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );

    // Render the above template in DOM
    ReactDOM.render(appTemplate, appRoot);
};


// Render the template
const appRoot = document.getElementById("app");
renderApp();
