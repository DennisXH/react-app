import axios from "axios";

export const PEOPLE_LIST_REQUEST = 'PEOPLE_LIST_REQUEST';
export const PEOPLE_LIST_SUCCESS = 'PEOPLE_LIST_SUCCESS';
export const PEOPLE_LIST_ERROR = 'PEOPLE_LIST_ERROR';

export const CREATE_PERSON_REQUEST = 'CREATE_PERSON_REQUEST';
export const CREATE_PERSON_SUCCESS = 'CREATE_PERSON_SUCCESS';
export const CREATE_PERSON_ERROR = 'CREATE_PERSON_ERROR';

export const UPDATE_PERSON_REQUEST = 'UPDATE_PERSON_REQUEST';
export const UPDATE_PERSON_SUCCESS = 'UPDATE_PERSON_SUCCESS';
export const UPDATE_PERSON_ERROR = 'UPDATE_PERSON_ERROR';

export const GET_PERSON_REQUEST = 'GET_PERSON_REQUEST';
export const GET_PERSON_SUCCESS = 'GET_PERSON_SUCCESS';
export const GET_PERSON_ERROR = 'GET_PERSON_ERROR';

export function getPeopleListRequest() {
  return {
    type: PEOPLE_LIST_REQUEST,
  };
}

export function getPeopleListSuccess(data) {
  return {
    payload: data,
    type: PEOPLE_LIST_SUCCESS,
  };
}

export function getPeopleListError(error) {
  return {
    payload: error.response,
    type: PEOPLE_LIST_ERROR,
  };
}

export function createPersonRequest() {
  return {
    type: CREATE_PERSON_REQUEST,
  };
}

export function createPersonSuccess(data) {
  return {
    payload: data,
    type: CREATE_PERSON_SUCCESS,
  };
}

export function createPersonError(error) {
  return {
    payload: error.response,
    type: CREATE_PERSON_ERROR,
  };
}
export function getPersonRequest() {
  return {
    type: GET_PERSON_REQUEST,
  };
}

export function getPersonSuccess(data) {
  return {
    payload: data,
    type: GET_PERSON_SUCCESS,
  };
}

export function getPersonError(error) {
  return {
    payload: error.response,
    type: GET_PERSON_ERROR,
  };
}

export function updatePersonRequest() {
  return {
    type: UPDATE_PERSON_REQUEST,
  };
}

export function updatePersonSuccess(data) {
  return {
    payload: data,
    type: UPDATE_PERSON_SUCCESS,
  };
}

export function updatePersonError(error) {
  return {
    payload: error.response,
    type: UPDATE_PERSON_ERROR,
  };
}

export function getPeopleList(companyId) {
  return function (dispatch) {
    dispatch(getPeopleListRequest());

    return axios.get(`http://localhost:3001/companies/${companyId}/people`)
      .then(({data}) => dispatch(getPeopleListSuccess(data)))
      .catch((error) => dispatch(getPeopleListError(error)));
  };
}

export function createPerson(data) {
  return function (dispatch) {
    dispatch(createPersonRequest());

    return axios.post(`http://localhost:3001/person`, data)
      .then(({data}) => dispatch(createPersonSuccess(data)))
      .catch((error) => dispatch(createPersonError(error)));
  };
}

export function getPerson(personId) {
  return function (dispatch) {
    dispatch(getPersonRequest());

    return axios.get(`http://localhost:3001/person/${personId}`)
      .then(({data}) => dispatch(getPersonSuccess(data)))
      .catch((error) => dispatch(getPersonError(error)));
  };
}

export function updatePerson(personId, data) {
  return function (dispatch) {
    dispatch(updatePersonRequest());

    return axios.put(`http://localhost:3001/person/${personId}`, data)
      .then(({data}) => {
        dispatch(updatePersonSuccess(data))
        dispatch(getPerson(personId))
      })
      .catch((error) => dispatch(updatePersonError(error)));
  };
}