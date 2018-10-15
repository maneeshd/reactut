import React from "react"
import { connect } from "react-redux"
import ExpenseItem from "./ExpenseItem"
import { Container } from "reactstrap"
import visible_expenses from "../selectors/visibility-controller"


const ExpenseList = (props) => (
    <Container fluid={true} className="text-center justify-content-center align-content-center">
        <h2>Expense List:</h2>
        {props.expenses.map((expense) => {
            return <ExpenseItem expense={expense}/>
        })}
    </Container>
)

const map_state_to_props = (state) => {
    return {
        expenses: visible_expenses(state.expenses, state.filters)
    }
}

export default connect(map_state_to_props)(ExpenseList)