import React, {Component} from 'react';
import {Card, Col, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

export class Company extends Component {
  render() {
    const {
      id,
      name,
      address,
      revenue,
      phone,
    } = this.props
    return (
      <>
        <Row><Col>
          <Card>
            <Card.Header><Link to={`/companies/${id}`}>{name}</Link></Card.Header>
            <Card.Body>
              <Form>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="2">
                    Address
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control plaintext readOnly defaultValue={address} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="2">
                    Revenue
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control plaintext readOnly defaultValue={revenue} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="2">
                    Phone
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control plaintext readOnly defaultValue={phone} />
                  </Col>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col></Row>
      </>
    );
  }
}

export default Company;