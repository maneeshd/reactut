import React from "react"
import { Container, InputGroup, InputGroupAddon, Input } from "reactstrap"
import { connect } from "react-redux"
import { set_text_filter, sort_by_date, sort_by_amount, set_sort_order } from "../actions/filter-actions"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortAmountDown, faSortAmountUp } from '@fortawesome/free-solid-svg-icons'


const ExpenseListFilters = (props) => (
    <Container>
        <InputGroup size="sm">
            <InputGroupAddon className="rounded shadow-sm" addonType="prepend">&#128270;</InputGroupAddon>
            <Input placeholder="Search Expense" type="text" className="rounded shadow-sm mr-1" value={props.filters.text} onChange={(e) => (
                props.dispatch(set_text_filter(e.target.value))
            )}></Input>

            <InputGroupAddon className="rounded shadow-sm ml-1" addonType="prepend">Sort by</InputGroupAddon>
            <Input type="select" className="rounded shadow-sm mr-1" defaultValue="date" onChange={(e) => {
                if(e.target.value === "amount")
                    props.dispatch(sort_by_amount())
                else
                    props.dispatch(sort_by_date())
            }}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </Input>

            <InputGroupAddon className="rounded shadow-sm ml-1" addonType="prepend">&#8645;</InputGroupAddon>
            <Input type="select" className="rounded shadow-sm mr-1" defaultValue="asc" onChange={(e) => {
                if(e.target.value === "desc")
                    props.dispatch(set_sort_order("desc"))
                else
                    props.dispatch(set_sort_order("asc"))
            }}>
                <option value="asc">&#9650;&nbsp;Ascending</option>
                <option value="desc">&#9660;&nbsp;Descending</option>
            </Input>
        </InputGroup>
    </Container>
)

const map_state_to_props = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(map_state_to_props)(ExpenseListFilters)