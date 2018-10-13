import React from "react"
import { Container } from "reactstrap"

const MyWorksItem = (props) => (
    <Container fluid={true} className="text-center">
        <h1>A thing I've done</h1>
        <h3>This page is for the project with ID: {props.match.params.id}</h3>
    </Container>
)

export default MyWorksItem