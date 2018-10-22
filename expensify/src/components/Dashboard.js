import React from "react"
import { Container } from "reactstrap"
import ExpenseList from "./ExpenseList"
import ExpenseListFilters from "./ExpenseListFilters"
import AddExpense from "./AddExpense"



const ExpenseDashboard = () => (
    <Container fluid={true} className="text-center" id="dashboard">
        <h2>Expensify Dashboard</h2>
        <Container>
            <ExpenseListFilters />
            <ExpenseList />
            <AddExpense />
        </Container>
    </Container>
)

export default ExpenseDashboard