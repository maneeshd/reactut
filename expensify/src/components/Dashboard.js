import React from "react"
import { Container } from "reactstrap"
import ExpenseList from "./ExpenseList"


const ExpenseDashboard = () => (
    <Container fluid={true} className="text-center">
        <h1>Expensify Dashboard</h1>
        <ExpenseList />
    </Container>
)

export default ExpenseDashboard