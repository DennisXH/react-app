import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {createPerson} from "../actions/people";
import PropTypes from "prop-types";
import {Container} from "react-bootstrap";
import PersonForm from "../components/PersonForm";
import {getCompanyList} from "../actions/company";

export class PersonCreatePage extends Component {
  constructor(props) {
    super(props);
    this.handlePersonCreate = this.handlePersonCreate.bind(this);
    this.props.dispatchGetCompanyList();
  }

  handlePersonCreate = async (form) => {
    const {dispatchCreatePerson} = this.props;
    const data = {
      name: form['name'].value,
      email: form['email'].value,
      companyId: form['companyId'].value,
    }
    await dispatchCreatePerson(data);
    window.location.href = `/companies/${form['companyId'].value}/people`
  }

  render() {
    return (
      <Container fluid="sm">
        <PersonForm
          title={`Create Person`}
          companyList={this.props.companyList}
          onChange={this.handlePersonCreate}
        />
      </Container>
    )
  }
}

PersonCreatePage.propTypes = {
  dispatchCreatePerson: PropTypes.func.isRequired,
  companyList: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

const mapStateToProps = function (state) {
  const {
    company,
  } = state;
  return {
    isFetching: company.get('isFetching'),
    companyList: company.get('companyList'),
    error: company.get('error')
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    dispatchGetCompanyList: (...args) => {
      dispatch(getCompanyList(...args));
    },
    dispatchCreatePerson: async (...args) => {
      await dispatch(createPerson(...args));
    },
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PersonCreatePage));