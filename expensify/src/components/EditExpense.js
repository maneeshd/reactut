import React from "react"
import { Container } from "reactstrap"

const EditExpense = (props) => {
    console.log(props)
    return (
        <Container fluid={true} className="text-center">
            <h1>Edit Expense</h1>
            <h3>ExpenseID: {props.match.params.eid}</h3>
        </Container>
    )
}

export default EditExpense