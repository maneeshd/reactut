import React from "react"
import { connect } from "react-redux"
import ExpenseListItem from "./ExpenseListItem"
import { Container, Table } from "reactstrap"
import visible_expenses from "../selectors/visibility-controller"


const ExpenseList = (props) => (
    <Container className="my-2">
        <Table bordered hover responsive className="shadow rounded">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Expense</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Modify</th>
                </tr>
            </thead>
            <tbody>
                {props.expenses.map((expense, index) => <ExpenseListItem expense={expense} idx={index+1} key={expense.eid} />)}
            </tbody>
        </Table>
    </Container>
)

const map_state_to_props = (state) => {
    return {
        expenses: visible_expenses(state.expenses, state.filters)
    }
}

export default connect(map_state_to_props)(ExpenseList)