import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {createCompany} from "../actions/company";
import PropTypes from "prop-types";
import {Alert, Col, Container, Form, Row} from "react-bootstrap";
import CompanyForm from "../components/CompanyForm";

export class CompanyCreatePage extends Component {
  constructor(props) {
    super(props);
    this.handleCompanyCreate = this.handleCompanyCreate.bind(this);
  }

  handleCompanyCreate = async (form) => {
    const {dispatchCreateCompany} = this.props;
    const data = {
      name: form['name'].value,
      address: form['address'].value,
      revenue: form['revenue'].value,
      phone: form['phone'].value
    }
    await dispatchCreateCompany(data);

    window.location.href = `/companies/${this.props.company._id}`
  }

  render() {
    return (
      <Container fluid="sm">
        <CompanyForm
          title={`Create Company`}
          onChange={this.handleCompanyCreate}
        />
      </Container>
    )
  }
}

CompanyCreatePage.propTypes = {
  dispatchCreateCompany: PropTypes.func.isRequired,
  company: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
}

const mapStateToProps = function (state) {
  const {
    company,
  } = state;
  return {
    isFetching: company.get('isFetching'),
    company: company.get('company'),
    error: company.get('error')
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    dispatchCreateCompany: async (...args) => {
      await dispatch(createCompany(...args));
    },
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CompanyCreatePage));