import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {getPerson, updatePerson, deletePerson} from "../actions/people";
import PropTypes from "prop-types";
import {Container} from "react-bootstrap";
import PersonForm from "../components/PersonForm";
import {getCompanyList} from "../actions/company";

export class PersonEditPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      companyId: null,
    }
    this.handlePersonUpdate = this.handlePersonUpdate.bind(this);
    this.handlePersonDelete = this.handlePersonDelete.bind(this);
    this.props.dispatchGetCompanyList();
  }

  async componentDidMount() {
    const {
      dispatchGetPerson,
      match,
    } = this.props;
    await dispatchGetPerson(match.params.personId);
    this.setState({
      name: this.props.person.name,
      email: this.props.person.email,
      companyId: this.props.person.companyId,
    });
  }

  handlePersonUpdate = (form) => {
    const {
      dispatchUpdatePerson,
      match
    } = this.props;
    const data = {
      name: form['name'].value,
      email: form['email'].value,
      companyId: form['companyId'].value,
    }
    dispatchUpdatePerson(match.params.personId, data);
  }

  handlePersonDelete = async () => {
    const {
      dispatchDeletePerson,
      match
    } = this.props;
    await dispatchDeletePerson(match.params.personId)
    window.location.href = `/companies/${this.state.companyId}/people`
  }

  render() {
    const {match} = this.props;
    const {
      name,
      email,
      companyId,
    } = this.state;
    return (
      <Container fluid="sm">
        <PersonForm
          title={`Update Person`}
          id={match.params.personId}
          name={name}
          email={email}
          companyId={companyId}
          companyList={this.props.companyList}
          onChange={this.handlePersonUpdate}
          onDelete={this.handlePersonDelete}
        />
      </Container>
    )
  }
}

PersonEditPage.propTypes = {
  dispatchUpdatePerson: PropTypes.func.isRequired,
  dispatchGetCompanyList: PropTypes.func.isRequired,
  dispatchGetPerson: PropTypes.func.isRequired,
  companyList: PropTypes.array,
  person: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
}

const mapStateToProps = function (state) {
  const {
    company,
    people,
  } = state;
  return {
    isFetching: company.get('isFetching'),
    companyList: company.get('companyList').toJS(),
    person: people.get('person'),
    error: company.get('error'),
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    dispatchGetCompanyList: (...args) => {
      dispatch(getCompanyList(...args));
    },
    dispatchGetPerson: async (...args) => {
      await dispatch(getPerson(...args));
    },
    dispatchUpdatePerson: async (...args) => {
      await dispatch(updatePerson(...args));
    },
    dispatchDeletePerson: async (...args) => {
      await dispatch(deletePerson(...args));
    },
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PersonEditPage));