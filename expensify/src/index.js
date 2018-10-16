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


const store = expensify_store()

store.dispatch(add_expense("Water bill", "", 50, new Date("07 Oct 2018 21:50:37")))

store.dispatch(add_expense("House rent", "", 7700, new Date("04 Oct 2018 10:38:12")))

store.dispatch(add_expense("Gas bill", "", 150, new Date("01 Oct 2018 13:16:52")))

const app_jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(app_jsx, document.getElementById("app"))