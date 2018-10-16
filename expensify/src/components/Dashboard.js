import React from "react"
import { Container } from "reactstrap"
import ExpenseList from "./ExpenseList"
import ExpenseListFilters from "./ExpenseListFilters"


const ExpenseDashboard = () => (
    <Container fluid={true} className="text-center">
        <h1>Expensify Dashboard</h1>
        <h2>Expense List:</h2>
        <ExpenseListFilters />
        <ExpenseList />
    </Container>
)

export default ExpenseDashboard