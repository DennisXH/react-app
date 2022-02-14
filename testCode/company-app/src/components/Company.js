import {Link} from "react-router-dom";
import React, {Component} from 'react';
import {Button, Card, Col, Row} from "react-bootstrap";

export class Company extends Component {
  render() {
    return (
      <>
        <Row><Col>
          <Card>
            <Card.Header>Company</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col></Row>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </>
    );
  }
}

export default Company;