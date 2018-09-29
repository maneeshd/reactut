import React from "react";
import Header from "./Header";
import Options from "./Options";
import AddOption from "./AddOption";
import Action from "./Action";


Header.defaultProps = {
    title: "Indecision?"
};

// Main Component Class for App
export default class Indecision extends React.Component {
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