import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, Col, Container, Row} from "react-bootstrap";
import Company from "../components/Company";
import {getCompanyList} from "../actions/companyList";
import { withRouter } from "react-router";

export class CompanyPage extends Component {
  componentDidMount() {
    this.props.dispatchGetCompanyList();
  }

  render() {
    const {companyList} = this.props;

    return (
      <Container fluid="sm"><Row><Col>
        <Card>
          <Card.Header>Companies</Card.Header>
          <Card.Body>
            {companyList.map((company, index) => {
              return <Company
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
    companyList,
  } = state;
  return {
    isFetching: companyList.get('isFetching'),
    companyList: companyList.get('companyList').toJS(),
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    dispatchGetCompanyList: (...args) => {
      dispatch(getCompanyList(...args));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CompanyPage));