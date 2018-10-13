import React from "react"
import { Container } from "reactstrap"

const Error404 = ({ location }) => (
    <Container className="text-center my-5">
        <h1 className="text-danger display-4">Error 404!</h1>
        <h3><code>{location.pathname}</code> not found</h3>
    </Container>
)

export default Error404