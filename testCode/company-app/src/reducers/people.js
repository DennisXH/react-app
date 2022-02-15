import {List, Map} from "immutable";
import {
  CREATE_PERSON_REQUEST,
  CREATE_PERSON_SUCCESS,
  PEOPLE_LIST_REQUEST,
  PEOPLE_LIST_SUCCESS
} from "../actions/people";

export function setPeopleListRequest(state) {
  return state.merge({
    isFetching: true,
  })
}

export function setPeopleListSuccess(state, action) {
  const {payload} = action;

  return state.merge({
    peopleList: List(payload),
    isFetching: false,
  });
}

export function setPersonRequest(state) {
  return state.merge({
    isFetching: true,
  })
}

export function setPersonSuccess(state, action) {
  const {payload} = action;

  return state.merge({
    person: payload,
    isFetching: false,
  });
}

export default function (state = Map({
  peopleList: List(),
  person: null,
  isFetching: false,
  error: null,
}), action) {

  switch (action.type) {
    case PEOPLE_LIST_REQUEST:
      return setPeopleListRequest(state)
    case PEOPLE_LIST_SUCCESS:
      return setPeopleListSuccess(state, action)
    case CREATE_PERSON_REQUEST:
      return setPersonRequest(state);
    case CREATE_PERSON_SUCCESS:
      return setPersonSuccess(state, action);
    default:
      return state;
  }
}