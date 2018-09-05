/*
* Indecision: A simple app to randomly pick an option from a list using React Components
*
* Author: Maneesh D <maneeshd77@gmail.com>
*/

// Header title and sub-title Component Class
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision?</h1>
                <p>Let the machine decide for you</p>
            </div>
        );
    }
}

// Decision Action button Component Class
class Action extends React.Component {
    render() {
        return (
            <button className="btn btn-primary mb-3">What should I do?</button>
        );
    }
}

// Option Entry Component Class
class Option extends React.Component {
    render() {
        return (
            <p>This is the Option Sub Entry.</p>
        );
    }
}

// Options List Component Class
class Options extends React.Component {
    render() {
        return (
            <div>
                <p>Option Sub Entry goes here.</p>
                <Option />
            </div>
        );
    }
}

// AddOption button Component Class
class AddOption extends React.Component {
    render() {
        return (
            <button className="btn btn-success mb-2">Add Option</button>
        );
    }
}

// Main Component Class for App
class Indecision extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        );
    }
}

ReactDOM.render(<Indecision />, document.getElementById("app"));
