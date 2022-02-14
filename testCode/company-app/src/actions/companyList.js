import axios from "axios";

export const COMPANY_LIST_REQUEST = 'COMPANY_LIST_REQUEST';
export const COMPANY_LIST_SUCCESS = 'COMPANY_LIST_SUCCESS';
export const COMPANY_LIST_ERROR = 'COMPANY_LIST_ERROR';

export function getCompanyListRequest() {
  return {
    type: COMPANY_LIST_REQUEST,
  };
}

export function getCompanyListSuccess(data) {
  return {
    payload: data,
    type: COMPANY_LIST_SUCCESS,
  };
}

export function getCompanyListError(error) {
  return {
    payload: error.response,
    type: COMPANY_LIST_ERROR,
  };
}

export function getCompanyList() {
  return function (dispatch) {
    dispatch(getCompanyListRequest());

    return axios.get('http://localhost:3001/companies')
      .then(({data}) => dispatch(getCompanyListSuccess(data)))
      .catch((error) => dispatch(getCompanyListError(error)));
  };
}