class Counter extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            count: 0
        };
        this.countUp = this.countUp.bind(this);
        this.countDown = this.countDown.bind(this);
        this.resetCounter = this.resetCounter.bind(this);
    }

    componentDidMount() {
        try {
            const count_str = localStorage.getItem("count");
            const count = parseInt(count_str, 10);
            if(!isNaN(count)) {
                console.log("ComponentDidMount!");
                this.setState(() => ({count: count}));
            }
        } catch(error) {
            // Do nothing!
        }
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log("ComponentDidUpdate!");
        localStorage.setItem("count", this.state.count);
    }
    

    countUp() {
        this.setState(
            (prevState) => { return {count: prevState.count += 1}; }
        );
    }

    countDown() {
        this.setState(
            (prevState) => { return {count: prevState.count -= 1}; }
        );
    }

    resetCounter() {
        this.setState(() => { return {count: 0}; });
    }

    render() {
        return (
            <div className="container w-50 shadow-lg my-4 p-4 text-center">
                <p className="display-4">Counter: {this.state.count}</p>
                <div className="p-2">
                    <button className="btn btn-danger ml-1 shadow-sm font-weight-bold" onClick={this.resetCounter}>Reset</button>
                    <button className="btn btn-warning mx-1 shadow-sm font-weight-bold" onClick={this.countDown}>-1</button>
                    <button className="btn btn-success mr-1 shadow-sm font-weight-bold" onClick={this.countUp}>+1</button>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById("app"));
