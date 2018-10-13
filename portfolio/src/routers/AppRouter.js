import React from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Header from "../components/Header"
import Portfolio from "../components/Portfolio"
import MyWorks from "../components/MyWorks"
import MyWorksItem from "../components/MyWorksItem"
import Contact from "../components/Contact"
import Error404 from "../components/Error404"


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Portfolio} exact={true} />
                <Route path="/my_works" component={MyWorks} exact={true} />
                <Route path="/my_works/:id" component={MyWorksItem} />
                <Route path="/contact" component={Contact} />
                <Route component={Error404} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter