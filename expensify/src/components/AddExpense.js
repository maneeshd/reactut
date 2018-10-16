import React from "react"
import { Container } from "reactstrap"
import ExpenseForm from "./ExpenseForm"


const AddExpense = () => (
    <Container fluid={true} className="text-center">
        <h1>Add Expense</h1>
        <Container className="w-50 text-justify">
            <ExpenseForm />
        </Container>
    </Container>
)

export default AddExpense