import {List, Map} from "immutable";
import {
  CREATE_PERSON_REQUEST,
  CREATE_PERSON_SUCCESS,
  DELETE_PERSON_REQUEST,
  DELETE_PERSON_SUCCESS,
  GET_PERSON_REQUEST,
  GET_PERSON_SUCCESS,
  PEOPLE_LIST_REQUEST,
  PEOPLE_LIST_SUCCESS,
  UPDATE_PERSON_REQUEST,
  UPDATE_PERSON_SUCCESS
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

export function getPersonRequest(state) {
  return state.merge({
    isFetching: true,
  })
}

export function getPersonSuccess(state, action) {
  const {payload} = action;

  return state.merge({
    person: payload,
    isFetching: false,
  });
}

export function updatePersonRequest(state) {
  return state.merge({
    isFetching: true,
  })
}

export function updatePersonSuccess(state, action) {
  const {payload} = action;

  return state.merge({
    person: payload,
    isFetching: false,
  });
}

export function deletePersonRequest(state) {
  return state.merge({
    isFetching: true,
  })
}

export function deletePersonSuccess(state) {
  return state.merge({
    person: null,
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
    case GET_PERSON_REQUEST:
      return getPersonRequest(state);
    case GET_PERSON_SUCCESS:
      return getPersonSuccess(state, action);
    case UPDATE_PERSON_REQUEST:
      return updatePersonRequest(state);
    case UPDATE_PERSON_SUCCESS:
      return updatePersonRequest(state, action);
    case DELETE_PERSON_REQUEST:
      return deletePersonRequest(state);
    case DELETE_PERSON_SUCCESS:
      return deletePersonRequest(state);
    default:
      return state;
  }
}