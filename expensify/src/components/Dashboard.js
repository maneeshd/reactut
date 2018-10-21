import React from "react"
import { Container } from "reactstrap"
import ExpenseList from "./ExpenseList"
import ExpenseListFilters from "./ExpenseListFilters"
import AddExpense from "./AddExpense"



const ExpenseDashboard = () => (
    <Container fluid={true} className="text-center">
        <h2>Expensify Dashboard</h2>
        <h3>Expense List:</h3>
        <ExpenseListFilters />
        <ExpenseList />
        <AddExpense />
    </Container>
)

export default ExpenseDashboard