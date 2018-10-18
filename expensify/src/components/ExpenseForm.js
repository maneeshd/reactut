import React from "react"
import { Col, Button, Form, FormGroup, Label, Input, FormFeedback } from "reactstrap"
import moment from "moment"
import "react-dates/initialize"
import { SingleDatePicker } from "react-dates"
import "react-dates/lib/css/_datepicker.css"

import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import DefaultTheme from 'react-dates/lib/theme/DefaultTheme';

ThemedStyleSheet.registerInterface(aphroditeInterface);
ThemedStyleSheet.registerTheme({
    reactDates: {
        ...DefaultTheme.reactDates,
        color: {
            ...DefaultTheme.reactDates.color,
            highlighted: {
                backgroundColor: '#82E0AA',
                backgroundColor_active: '#58D68D',
                backgroundColor_hover: '#58D68D',
                color: '#186A3B',
                color_active: '#186A3B',
                color_hover: '#186A3B',
            },
        },
    },
});

export default class ExpenseForm extends React.Component {
    state = {
        expense_name_value: "",
        description_value: "",
        amount: "",
        created_on: moment(),
        calendar_focused: false
    }

    handle_expense_name_change = (event) => {
        this.setState({expense_name_value: event.target.value})
    }

    handle_amount_change = (event) => {
        const amount = event.target.value
        if(amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState({amount: amount})
        }
    }

    handle_date_change = (created_on) => {
        this.setState({ created_on: created_on })
    }

    handle_focus_change = ({focused}) => {
        this.setState({calendar_focused: focused})
    }

    form_submit_handler = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <Form className="shadow pt-4 pb-2 px-4 border border-light rounded" onSubmit={this.form_submit_handler}>
                <FormGroup row>
                    <Label for="expense_name" md={2}>Expense</Label>
                    <Col md={10}>
                        <Input
                            type="text"
                            name="expense_name"
                            id="expense_name"
                            placeholder="Name/Type of expense"
                            autoFocus
                            required
                            minLength={6}
                            value={this.state.expense_name_value}
                            onChange={this.handle_expense_name_change}
                            autoComplete="false"
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="amount" md={2}>Amount</Label>
                    <Col md={10}>
                        <Input type="text" name="amount" id="amount" value={this.state.amount} required onChange={this.handle_amount_change} autoComplete="false" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="created_on" md={2}>Date</Label>
                    <Col md={10}>
                        <SingleDatePicker
                            id="created_on"
                            date={this.state.created_on}
                            onDateChange={this.handle_date_change}
                            focused={this.state.calendar_focused}
                            onFocusChange={this.handle_focus_change}
                            numberOfMonths={1}
                            isOutsideRange={(day) => false}
                            displayFormat="DD-MMM-YYYY"
                            showDefaultInputIcon
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="description" md={2}>Description</Label>
                    <Col md={10}>
                        <Input
                            type="textarea"
                            name="description"
                            id="description"
                            placeholder="Add an optional note for your expense"
                            value={this.state.description_value}
                            onChange={e => this.setState({description_value: e.target.value})}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={12} className="text-center">
                        <Input type="submit" color="primary" value="Submit" tag={Button} className="w-50 shadow rounded">Submit</Input>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}
