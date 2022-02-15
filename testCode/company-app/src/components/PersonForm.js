import React, {Component} from 'react';
import {Button, Card, Col, Form, Row} from "react-bootstrap";

export class PersonForm extends Component {
  render() {
    const {
      id,
      title,
      name,
      email,
      companyId,
      companyList,
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
                <Form.Group as={Row} className="mb-3" controlId='email'>
                  <Form.Label column sm="2">
                    Email
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control defaultValue={email} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId='companyId'>
                  <Form.Label column sm="2">
                    Company
                  </Form.Label>
                  <Col sm="10">
                    {companyId && <Form.Control as="select" defaultValue={companyId}>
                      {
                        companyList.map((company, index) => {
                          return <option key={index} value={company._id}>{company.name}</option>
                        })
                      }
                    </Form.Control>}
                  </Col>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                {id && <Button variant="danger" type="submit">
                  Delete
                </Button>}
              </Form>
            </Card.Body>
          </Card>
        </Col></Row>
      </>
    );
  }
}

export default PersonForm;