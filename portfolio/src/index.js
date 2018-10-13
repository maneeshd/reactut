import "bootstrap/dist/css/bootstrap.min.css"
import "jquery/dist/jquery.min"
import "bootstrap/dist/js/bootstrap.bundle.min"
import "./custom.css"
import React from "react"
import ReactDOM from "react-dom"
import AppRouter from './routers/AppRouter'


ReactDOM.render(<AppRouter />, document.getElementById("app"))