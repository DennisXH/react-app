import axios from "axios";

export const PEOPLE_LIST_REQUEST = 'PEOPLE_LIST_REQUEST';
export const PEOPLE_LIST_SUCCESS = 'PEOPLE_LIST_SUCCESS';
export const PEOPLE_LIST_ERROR = 'PEOPLE_LIST_ERROR';

export const CREATE_PERSON_REQUEST = 'CREATE_PERSON_REQUEST';
export const CREATE_PERSON_SUCCESS = 'CREATE_PERSON_SUCCESS';
export const CREATE_PERSON_ERROR = 'CREATE_PERSON_ERROR';

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