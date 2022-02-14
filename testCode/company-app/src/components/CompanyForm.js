import React, {Component} from 'react';
import {Button, Card, Col, Form, Row} from "react-bootstrap";

export class CompanyForm extends Component {
  render() {
    const {
      id,
      title,
      name,
      address,
      revenue,
      phone,
      onChange
    } = this.props
    return (
      <>
        <Row><Col>
          <Card>
            <Card.Header><b>{title}</b></Card.Header>
            <Card.Body>
              <Form onSubmit={(e) => {
                e.preventDefault()
                onChange(e.currentTarget.elements)
              }}>
                <Form.Group as={Row} className="mb-3" controlId='name'>
                  <Form.Label column sm="2">
                    Name
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control defaultValue={name} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId='address'>
                  <Form.Label column sm="2">
                    Address
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control defaultValue={address} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId='revenue'>
                  <Form.Label column sm="2">
                    Revenue
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control defaultValue={revenue} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId='phone'>
                  <Form.Label column sm="2">
                    Phone
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control defaultValue={phone}/>
                  </Col>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col></Row>
      </>
    );
  }
}

export default CompanyForm;