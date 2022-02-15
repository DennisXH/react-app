import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {Card, Col, Container, Row} from "react-bootstrap";
import {getPeopleList} from "../actions/people";
import PropTypes from "prop-types";
import {getCompanyDetail} from "../actions/company";

export class PeoplePage extends Component {
  componentDidMount() {
    this.props.dispatchGetCompanyPeople(this.props.match.params.companyId);
  }

  render() {
    const {company, peopleList} = this.props;

    return (
      <Container fluid="sm"><Row><Col>
        <Card>
          {company && <Card.Header><div>People at {company.name}</div></Card.Header>}
          <Card.Body>
            {
              peopleList.map((person, index) => {
                return <li key={index}>
                  <a href={`/companies/${company._id}/people/${person._id}`}>{person.name}</a>
                  </li>
              })
            }
          </Card.Body>
          {company && <Card.Footer><a href={`/companies/${company._id}`}>Back to {company.name}</a></Card.Footer>}
        </Card>
      </Col></Row></Container>
    );
  }
}

PeoplePage.propTypes = {
  dispatchGetCompanyPeople: PropTypes.func.isRequired,
  peopleList: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

const mapStateToProps = function (state) {
  const {
    company,
    people,
  } = state;
  return {
    isFetching: people.get('isFetching'),
    peopleList: people.get('peopleList').toJS(),
    company: company.get('company')
  };
}

const mapDispatchToProps = function (dispatch) {
  return {
    dispatchGetCompanyPeople: (...args) => {
      dispatch(getCompanyDetail(...args))
      dispatch(getPeopleList(...args))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PeoplePage));