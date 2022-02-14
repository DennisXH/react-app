import React, {Component} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import Company from "../components/Company";

export class CompanyPage extends Component {
  render() {
    return (
      <Container fluid="sm"><Row><Col>
        <Card>
          <Card.Header>Companies</Card.Header>
          <Card.Body>
            <Company></Company>
            <Company></Company>
          </Card.Body>
        </Card>
      </Col></Row></Container>
    );
  }
}

export default CompanyPage;