import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./custom.css";
import React from "react";
import ReactDOM from "react-dom";
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText, Container } from "reactstrap";


class Expensify extends React.Component {
    componentDidMount() {
        document.title = "Expensify";
    }

    render() {
        return (
            <Container fluid={true} className="text-center">
                <h1>Expensify</h1>
                <h2>A freaking budget tracker!</h2>
            </Container>
        );
    }
}


ReactDOM.render(<Expensify />, document.getElementById("app"));