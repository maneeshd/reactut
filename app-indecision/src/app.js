/*
* Indecision: A simple app to randomly pick an option from a list using React Components
*
* Author: Maneesh D <maneeshd77@gmail.com>
*/

// Header title and sub-title Component Class
class Header extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p className="lead">{this.props.subtitle}</p>
            </div>
        );
    }
}

// Decision Action button Component Class
class Action extends React.Component {
    constructor (props) {
        super(props);
        this.handlePick = this.handlePick.bind(this);
    }

    handlePick() {
        alert("Hello from handlePick");
    }

    render() {
        return (
            <button className="btn btn-primary mb-3 shadow" onClick={this.handlePick}>What should I do?</button>
        );
    }
}

// Option Entry Component Class
class Option extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <p>{this.props.option}</p>
        );
    }
}

// Options List Component Class
class Options extends React.Component {
    constructor (props) {
        super(props);
        this.handleremoveAll = this.handleremoveAll.bind(this);
    }

    handleremoveAll() {
        console.log(this.props.options);
    }

    render() {
        return (
            <div>
                {
                    this.props.options.map((option) => <Option option={option} key={option} />)
                }
                <button className="btn btn-danger mb-4 shadow" onClick={this.handleremoveAll}>Remove All</button>
            </div>
        );
    }
}

// AddOption button Component Class
class AddOption extends React.Component {
    constructor (props) {
        super(props);
        this.formSubmitHandler = this.formSubmitHandler.bind(this);
    }

    formSubmitHandler(event) {
        event.preventDefault();

        const entered_option = event.target.elements.option.value.trim();

        if(entered_option) {
            this.setState(
                (prevState, props) => {return 0;}
            );
        }
        else {
            alert("Please enter a valid option");
        }
    }

    render() {
        return (
            <form className="form-inline" id="addOptionForm" onSubmit={this.formSubmitHandler}>
                <div className="form-row">
                    <div className="col"><input className="form-control shadow" type="text" name="option" /></div>
                    <div className="col"><button className="form-control btn btn-success mb-2 shadow" onClick={this.addOption}>Add Option</button></div>
                </div>
            </form>
        );
    }
}

// Main Component Class for App
class Indecision extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        const appTitle = "Indecision?";
        const appSubTitle = "Let the machine decide for you";
        const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

        return (
            <div className="container w-50 shadow-lg p-3 text-justify mt-4">
                <Header title={appTitle} subtitle={appSubTitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        );
    }
}

ReactDOM.render(<Indecision />, document.getElementById("app"));
