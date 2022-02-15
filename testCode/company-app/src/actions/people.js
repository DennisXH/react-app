import axios from "axios";

export const PEOPLE_LIST_REQUEST = 'PEOPLE_LIST_REQUEST';
export const PEOPLE_LIST_SUCCESS = 'PEOPLE_LIST_SUCCESS';
export const PEOPLE_LIST_ERROR = 'PEOPLE_LIST_ERROR';

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
export function getPeopleList(companyId) {
  return function (dispatch) {
    dispatch(getPeopleListRequest());

    return axios.get(`http://localhost:3001/companies/${companyId}/people`)
      .then(({data}) => dispatch(getPeopleListSuccess(data)))
      .catch((error) => dispatch(getPeopleListError(error)));
  };
}