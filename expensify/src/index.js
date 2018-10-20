import "bootstrap/dist/css/bootstrap.min.css"
import "jquery/dist/jquery.min"
import "bootstrap/dist/js/bootstrap.bundle.min"
import "./styles/custom.css"
import React from "react"
import ReactDOM from "react-dom"
import AppRouter from './routers/AppRouter'
import expensify_store from "./store/expensify-store"
import { add_expense } from "./actions/expense-actions"
import { Provider } from "react-redux"
import moment from "moment"


const store = expensify_store()

store.dispatch(add_expense("Water bill", 50, moment("07-Oct-2018", "DD-MMM-YYYY"), ""))

store.dispatch(add_expense("House rent", 7700, moment("04-Oct-2018", "DD-MMM-YYYY"), "nothing"))

store.dispatch(add_expense("Gas bill", 150, moment("01-Oct-2018", "DD-MMM-YYYY"), ""))

const app_jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(app_jsx, document.getElementById("app"))