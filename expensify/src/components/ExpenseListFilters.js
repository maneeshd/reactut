import React from "react"
import { Container, InputGroup, InputGroupAddon, Input } from "reactstrap"
import { connect } from "react-redux"
import { set_text_filter, sort_by_date, sort_by_amount, set_sort_order, set_start_date, set_end_date } from "../actions/filter-actions"
import moment from "moment"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"


class ExpenseListFilters extends React.Component {
    constructor(props) {
        super(props)
    }

    handle_start_date_change = (start_date) => {
        this.props.dispatch(set_start_date(start_date))
    }

    handle_end_date_change = (end_date) => {
        this.props.dispatch(set_end_date(end_date))
    }

    render() {
        return (
            <Container>
                <InputGroup size="sm">
                    <InputGroupAddon className="rounded shadow-sm" addonType="prepend">&#128270;</InputGroupAddon>
                    <Input placeholder="Search Expense" type="text" className="rounded shadow-sm mr-1" value={this.props.filters.text} onChange={(e) => (
                        this.props.dispatch(set_text_filter(e.target.value))
                    )}></Input>

                    <InputGroupAddon className="rounded shadow-sm ml-1" addonType="prepend">Sort by</InputGroupAddon>
                    <Input type="select" className="rounded shadow-sm mr-1" defaultValue="date" onChange={(e) => {
                        if(e.target.value === "amount")
                            this.props.dispatch(sort_by_amount())
                        else
                            this.props.dispatch(sort_by_date())
                    }}>
                        <option value="date">Date</option>
                        <option value="amount">Amount</option>
                    </Input>

                    <InputGroupAddon className="rounded shadow-sm ml-1" addonType="prepend">&#8645;</InputGroupAddon>
                    <Input type="select" className="rounded shadow-sm mr-1" defaultValue="asc" onChange={(e) => {
                        if(e.target.value === "desc")
                            this.props.dispatch(set_sort_order("desc"))
                        else
                            this.props.dispatch(set_sort_order("asc"))
                    }}>
                        <option value="asc">&#9650;&nbsp;Ascending</option>
                        <option value="desc">&#9660;&nbsp;Descending</option>
                    </Input>

                    <InputGroupAddon className="rounded shadow-sm ml-1" addonType="prepend">From</InputGroupAddon>
                    <DatePicker
                        selected={this.props.filters.start_date}
                        selectsStart
                        startDate={this.props.filters.start_date}
                        dateFormat="DD-MMM-YYYY"
                        endDate={this.props.filters.end_date}
                        onChange={this.handle_start_date_change}
                        autoComplete="false"
                        id="start_date"
                        locale="en"
                        maxDate={moment()}
                        className="form-control form-control-sm rounded shadow-sm mr-1"
                        isClearable
                        placeholderText="Start Date"
                        todayButton="Today"
                    />
                    <InputGroupAddon className="rounded shadow-sm ml-1" addonType="prepend">To</InputGroupAddon>
                    <DatePicker
                        selected={this.props.filters.end_date}
                        selectsEnd
                        startDate={this.props.filters.end_date}
                        dateFormat="DD-MMM-YYYY"
                        endDate={this.props.filters.end_date}
                        todayButton="Today"
                        onChange={this.handle_end_date_change}
                        autoComplete="false"
                        id="end_date"
                        locale="en"
                        minDate={this.props.filters.start_date}
                        maxDate={moment()}
                        className="form-control form-control-sm rounded shadow-sm"
                        isClearable
                        placeholderText="End Date"
                    />
                </InputGroup>
            </Container>
        )
    }
}

const map_state_to_props = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(map_state_to_props)(ExpenseListFilters)