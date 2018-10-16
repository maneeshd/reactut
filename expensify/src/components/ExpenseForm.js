import React from "react"
import { Col, Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';


export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            expense_name_value: "",
            description_value: "",
            amount: ""
        }
        this.handle_amount_change = this.handle_amount_change.bind(this)
        this.form_submit_handler = this.form_submit_handler.bind(this)
    }

    handle_amount_change(event) {
        const amount = event.target.value
        if(amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState({amount: amount})
        }
    }

    form_submit_handler(event) {
        event.preventDefault()
        const expense_name = event.target.elements.expense_name.value.trim()
        const amount = Number.parseFloat(event.target.elements.amount.value.trim())
        const date_str = event.target.elements.created_on.value.trim()
        const created_on = date_str ? new Date(date_str) : new Date()
        const description = event.target.elements.description.value.trim()

        console.log(expense_name)
        console.log(amount)
        console.log(created_on)
        console.log(description)
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
                            onChange={e => this.setState({expense_name_value: e.target.value})}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="amount" md={2}>Amount</Label>
                    <Col md={10}>
                        <Input type="text" name="amount" id="amount" value={this.state.amount} required onChange={e => this.handle_amount_change(e)} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="created_on" md={2}>Date</Label>
                    <Col md={10}>
                        <Input
                            type="datetime-local"
                            name="created_on"
                            id="created_on"
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
