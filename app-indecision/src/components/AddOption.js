import React from "react";

// AddOption button Component Class
export default class AddOption extends React.Component {
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
            this.setState({ inputValue: ""});
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