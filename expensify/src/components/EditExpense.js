import React from "react"
import { Container } from "reactstrap"

const EditExpense = (props) => {
    return (
        <Container fluid={true} className="text-center">
            <h2>Edit Expense</h2>
            <h3>ExpenseID: {props.match.params.eid}</h3>
        </Container>
    )
}

export default EditExpense