import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import Company from "../components/Company";
import {getCompanyList} from "../actions/company";
import { withRouter } from "react-router";

export class CompanyPage extends Component {
  constructor(props) {
    super(props);
    this.props.dispatchGetCompanyList();
  }

  render() {
    const {companyList} = this.props;
    const handleCreateButtonOnClick = () => window.location.href = "/companies/create";
    const handleCreatePersonButtonOnClick = () => window.location.href = "/people/create";
    return (
      <Container fluid="sm"><Row><Col>
        <Card>
          <Card.Header>
            <Row>
              <Col sm={7}><div className="d-flex">
                <div style={{lineHeight: '50px'}}><b>Companies</b></div>
                <div className="m-2"><Button onClick={handleCreateButtonOnClick}>Create Company</Button></div>
                <div className="m-2"><Button onClick={handleCreatePersonButtonOnClick}>Create Person</Button></div>
              </div></Col>
            </Row>

          </Card.Header>
          <Card.Body>
            {companyList.map((company, index) => {
              return <Company
                key={index}
                id={company._id}
                name={company.name}
                address={company.address}
                revenue={company.revenue}
                phone={company.phone}
              />
            })}
          </Card.Body>
        </Card>
      </Col></Row></Container>
    );
  }
}

CompanyPage.propTypes = {
  dispatchGetCompanyList: PropTypes.func.isRequired,
  companyList: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

const mapStateToProps = function (state) {
  const {
    company,
  } = state;
  return {
    isFetching: company.get('isFetching'),
    companyList: company.get('companyList').toJS(),
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    dispatchGetCompanyList: (...args) => {
      dispatch(getCompanyList(...args));
    },
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CompanyPage));