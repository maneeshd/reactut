import "bootstrap/dist/css/bootstrap.min.css"
import "jquery/dist/jquery.min"
import "bootstrap/dist/js/bootstrap.bundle.min"
import "./styles/custom.css"
import React from "react"
import ReactDOM from "react-dom"
import AppRouter from './routers/AppRouter'
import expensify_store from "./store/expensify-store"
import { add_expense, remove_expense, edit_expense } from "./actions/expense-actions"
import { set_text_filter, set_start_date, set_end_date, sort_by_amount, sort_by_date } from "./actions/filter-actions"
import get_visible_expenses from "./selectors/visibility-controller"
import { Provider } from "react-redux"


const store = expensify_store()

store.dispatch(add_expense("Water bill", "", 50, 666))
store.dispatch(add_expense("Gas bill", "", 150, 777))
store.dispatch(sort_by_amount())

const state = store.getState()
const visible_expenses = get_visible_expenses(state.expenses, state.filters)
console.log(visible_expenses)

const app_jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(app_jsx, document.getElementById("app"))