/*
* Indecision: A simple app to randomly pick an option from a list using React Components
*
* Author: Maneesh D <maneeshd77@gmail.com>
*/

// Main Component Class for App
class Indecision extends React.Component {
    constructor(props) {
        // Call parent class constructor
        super(props);

        // Set state variables
        this.state = {
            options: []
        };

        // Method Bindings
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleRemoveOne = this.handleRemoveOne.bind(this);
        this.handlePickOne = this.handlePickOne.bind(this);
    }

    componentDidMount() {
        try{
            const json_str = localStorage.getItem("options");
            const options = JSON.parse(json_str);
            if(options) {
                this.setState(() => ({options: options}));
            }
        } catch(error) {
            // Do Nothing!
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
    }

    handleAddOption(option) {
        if (!option) {
            return <span><b>InvalidOption:</b> Enter a valid value to add option</span>;
        }
        else if (this.state.options.indexOf(option) > -1) {
            return <span><b>DuplicateOption:</b> Option already exists</span>;
        }
        else {
            this.setState(
                (prevState, props) => {
                    return { options: prevState.options.concat([option]) };
                }
            );
        }
    }

    handleRemoveAll() {
        this.setState(() => ({ options: [] }));
    }

    handleRemoveOne(option) {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((element) => element !== option)
            };
        });
    }

    handlePickOne() {
        const rand_idx = Math.floor(Math.random() * this.state.options.length);
        alert("I have selected: " + this.state.options[rand_idx]);
    }

    render() {
        const appSubTitle = "Let the machine decide for you";

        return (
            <div className="container w-50 shadow-lg p-2 text-center mt-4">
                <Header subtitle={appSubTitle} />
                <hr />
                <Action hasOptions={this.state.options.length > 0} handlePickOne={this.handlePickOne} />
                <Options options={this.state.options} handleRemoveAll={this.handleRemoveAll} handleRemoveOne={this.handleRemoveOne} handleRemoveOne={this.handleRemoveOne} />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}

// Header title and sub-title Stateless Component Class
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <p className="lead">{props.subtitle}</p>}
        </div>
    );
};

Header.defaultProps = {
    title: "Indecision?"
};

// Decision Action button Stateless Component Class
const Action = (props) => {
    return (
        <div className="d-flex justify-content-center">
            <button className="btn btn-primary mb-4 w-50 shadow btn-block font-weight-bold" onClick={props.handlePickOne} disabled={!props.hasOptions}>What should I do?</button>
        </div>
    );
};

// Option Entry Stateless Component Class
const Option = (props) => {
    return (
        <div>
            <span className="font-weight-bold">{props.option}</span>
            <button
                className="btn btn-xs btn-danger ml-2 font-weight-bold py-1 px-1"
                data-type="minus"
                style={{ "font-size": "10px" }}
                onClick={ (e) => { props.handleRemoveOne(props.option); }}
            >
                -
            </button>
        </div>
    );
};

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

// AddOption button Component Class
class AddOption extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: "",
            error: undefined
        };

        this.formSubmitHandler = this.formSubmitHandler.bind(this);
    }

    formSubmitHandler(event) {
        event.preventDefault();

        const entered_option = event.target.elements.option.value.trim();
        const error = this.props.handleAddOption(entered_option);

        this.setState({ error: error });
        if(!error) {
            event.target.elements.option.value = "";
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <div className="alert alert-danger p-1 mt-2">{this.state.error}</div>}
                <form className="form-inline justify-content-center" id="addOptionForm" onSubmit={this.formSubmitHandler}>
                    <div className="form-row">
                        <div className="col">
                            <input className="form-control shadow" type="text" name="option"
                                value={this.state.inputValue}
                                onChange={e => this.setState({ inputValue: e.target.value, error: undefined })} />
                        </div>
                        <div className="col">
                            <button className="form-control btn btn-success mb-2 shadow" data-type="plus">Add Option</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<Indecision />, document.getElementById("app"));