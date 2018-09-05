const userData = {
    name: "Maneesh Divana",
    age: 25,
    location: "Bengaluru, India"
};

const userInfoTemplate = (
    <div id="my-info" style={{"fontWeight": 300}}>
        <h2>{userData.name ? userData.name.toUpperCase() : "Anonymous"}</h2>
        {userData.name && userData.age ? <h4>Age: {userData.age}</h4> : ""}
        {userData.name && userData.location ? <h4>Location: {userData.location}</h4> : ""}
    </div>
);

// Counter App
const head_div_style = {
    textAlign: "center",
    width: "50%",
    marginLeft: "25%"
};

const niceTitle = {
    fontSize: "22px",
    fontWeight: 600,
};

const niceSubtitle = {
    fontSize: "18px",
    fontWeight: 400,
};

const niceText = {
    fontSize: "16px",
    fontWeight: 300,
};

const optionListStyle = {
    fontSize: "16px",
    fontWeight: 300,
    padding: 0
};

const niceButtton = {
    color: "white",
    backgroundColor: "#111",
    borderRadius: "8px",
    padding: "4px",
    textAlign: "center",
    fontSize: "16px",
    cursor: "pointer",
    marginLeft: "4px",
    marginRight: "4px",
};

let count = 0;

const counterUp = () => {
    count++;
    renderCounterApp();
};

const counterDown = () => {
    count--;
    renderCounterApp();
};

const counterReset = () => {
    count = 0;
    renderCounterApp();
};

const appRoot = document.getElementById("app");

const renderCounterApp = () => {
    const counterTemplate = (
        <div id="app-head" style={head_div_style}>
            <p style={niceTitle}>Count: {count}</p>
            <button style={niceButtton} onClick={counterUp}>+1</button>
            <button style={niceButtton} onClick={counterDown}>-1</button>
            <button style={niceButtton} onClick={counterReset}>Reset</button>
        </div>
    );

    ReactDOM.render(counterTemplate, appRoot);
};

renderCounterApp();