import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {getCompanyDetail, updateCompanyDetail} from "../actions/company";
import PropTypes from "prop-types";
import {Col, Container, Form, Row} from "react-bootstrap";
import CompanyForm from "../components/CompanyForm";

export class CompanyEditPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      revenue: null,
      phone: ''
    }
  }

  async componentDidMount() {
    const {
      dispatchGetCompanyDetail,
      match,
    } = this.props;
    await dispatchGetCompanyDetail(
      match.params.companyId
    );

    this.setState({
      name: this.props.company.name,
      address: this.props.company.address,
      revenue: this.props.company.revenue,
      phone: this.props.company.phone
    });

    this.handleCompanyUpdate = this.handleCompanyUpdate.bind(this);
  }

  handleCompanyUpdate = (form) => {
    const {match, dispatchSaveCompanyDetail} = this.props;
    const data = {
      name: form['name'].value,
      address: form['address'].value,
      revenue: form['revenue'].value,
      phone: form['phone'].value
    }

    dispatchSaveCompanyDetail(match.params.companyId, data);
  }

  render() {
    const {match} = this.props;
    const {
      name,
      address,
      revenue,
      phone,
    } = this.state;

    return (
      <Container fluid="sm">
        <CompanyForm
          id={match.params.companyId}
          name={name}
          address={address}
          revenue={revenue}
          phone={phone}
          onChange={this.handleCompanyUpdate}
        />
      </Container>
    )
  }
}

CompanyEditPage.propTypes = {
  dispatchGetCompanyDetail: PropTypes.func.isRequired,
  dispatchSaveCompanyDetail: PropTypes.func.isRequired,
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
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    dispatchGetCompanyDetail: async (...args) => {
      await dispatch(getCompanyDetail(...args));
    },
    dispatchSaveCompanyDetail: (...args) => {
      dispatch(updateCompanyDetail(...args))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CompanyEditPage));