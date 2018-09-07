class VisibilityToggler extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            visibility: false
        };
        this.handleVisibility = this.handleVisibility.bind(this);
    }

    handleVisibility() {
        this.setState(
            (prevState, props) => { return {visibility: !prevState.visibility}; }
        );
    }

    render() {
        return (
            <div className="container w-50 shadow-lg my-4 p-4 text-center">
                <p className="display-4">Visibility Toggle</p>
                <div className="p-2 my-2">
                    <button className="btn btn-primary shadow font-weight-bold" onClick={this.handleVisibility}>
                        {this.state.visibility ? "Hide content" : "Show content"}
                    </button>
                </div>
                {this.state.visibility && <div><p className="lead">This is your top secret hidden content!</p></div>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggler />, document.getElementById("app"));
