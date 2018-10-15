import React from "react"
import { Row, Col } from "reactstrap"


export default (props) => (
    <Row>
        <Col>
            <code>{props.expense.description}</code>
        </Col>
        <Col>
            <code>{props.expense.amount}</code>
        </Col>
        <Col>
            <code>{props.expense.created_at}</code>
        </Col>
        <Col>
            <code>{props.expense.note}</code>
        </Col>
    </Row>
)