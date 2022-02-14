import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, Col, Container, Row} from "react-bootstrap";
import Company from "../components/Company";
import {getCompanyList} from "../actions/companyList";

export class CompanyPage extends Component {
  componentDidMount() {
    this.props.dispatchGetCompanyList();
  }

  render() {
    const {companyList} = this.props;
    console.log(companyList);

    return (
      <Container fluid="sm"><Row><Col>
        <Card>
          <Card.Header>Companies</Card.Header>
          <Card.Body>
            {companyList.map((company, index) => {
              return <p>{company.name}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(CompanyPage);