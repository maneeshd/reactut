import React from "react"
import { Container } from "reactstrap"
import ExpenseForm from "./ExpenseForm"
import { connect } from "react-redux"
import { add_expense } from "../actions/expense-actions"


const AddExpense = (props) => (
    <Container fluid={true} className="text-center">
        <h2>Add Expense</h2>
        <Container className="w-50 text-justify">
            <ExpenseForm  onSubmit={(expense) => {
                props.dispatch(add_expense(
                    expense.expense_name,
                    expense.amount,
                    expense.created_on,
                    expense.description
                ))
                props.history.push("/")
            }}/>
        </Container>
    </Container>
)

export default connect()(AddExpense)