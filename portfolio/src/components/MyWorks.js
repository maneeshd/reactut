import React from "react"
import { Container } from "reactstrap"
import { Link } from "react-router-dom"


const MyWorks = () => (
    <Container fluid={true} className="text-center">
        <h1>My Work</h1>
        <h3>Checkout the projects I've done:</h3>
        <Container fluid={true} className="w-50">
            <h5><Link to="/my_works/1">Project 1</Link></h5>
            <h5><Link to="/my_works/2">Project 2</Link></h5>
        </Container>
    </Container>
)

export default MyWorks