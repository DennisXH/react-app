import axios from "axios";

export const COMPANY_LIST_REQUEST = 'COMPANY_LIST_REQUEST';
export const COMPANY_LIST_SUCCESS = 'COMPANY_LIST_SUCCESS';
export const COMPANY_LIST_ERROR = 'COMPANY_LIST_ERROR';

export const COMPANY_DETAIL_REQUEST = 'COMPANY_DETAIL_REQUEST';
export const COMPANY_DETAIL_SUCCESS = 'COMPANY_DETAIL_SUCCESS';
export const COMPANY_DETAIL_ERROR = 'COMPANY_DETAIL_ERROR';

export const COMPANY_DETAIL_UPDATE_REQUEST = 'COMPANY_DETAIL_UPDATE_REQUEST';
export const COMPANY_DETAIL_UPDATE_SUCCESS = 'COMPANY_DETAIL_UPDATE_SUCCESS';
export const COMPANY_DETAIL_UPDATE_ERROR = 'COMPANY_DETAIL_UPDATE_ERROR';

export const CREATE_COMPANY_REQUEST = 'CREATE_COMPANY_REQUEST';
export const CREATE_COMPANY_SUCCESS = 'CREATE_COMPANY_SUCCESS';
export const CREATE_COMPANY_ERROR = 'CREATE_COMPANY_ERROR';

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

export function getCompanyDetailRequest() {
  return {
    type: COMPANY_DETAIL_REQUEST,
  };
}

export function getCompanyDetailSuccess(data) {
  return {
    payload: data,
    type: COMPANY_DETAIL_SUCCESS,
  };
}

export function getCompanyDetailError(error) {
  return {
    payload: error.response,
    type: COMPANY_DETAIL_ERROR,
  };
}

export function updateCompanyDetailRequest() {
  return {
    type: COMPANY_DETAIL_UPDATE_REQUEST,
  };
}

export function updateCompanyDetailSuccess(data) {
  return {
    payload: data,
    type: COMPANY_DETAIL_UPDATE_SUCCESS,
  };
}

export function updateCompanyDetailError(error) {
  return {
    payload: error.response,
    type: COMPANY_DETAIL_UPDATE_ERROR,
  };
}

export function createCompanyRequest() {
  return {
    type: CREATE_COMPANY_REQUEST,
  };
}

export function createCompanySuccess(data) {
  return {
    payload: data,
    type: CREATE_COMPANY_SUCCESS,
  };
}

export function createCompanyError(error) {
  return {
    payload: error.response,
    type: CREATE_COMPANY_ERROR,
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

export function getCompanyDetail(companyId) {
  return function (dispatch) {
    dispatch(getCompanyDetailRequest());

    return axios.get(`http://localhost:3001/companies/${companyId}`)
      .then(({data}) => dispatch(getCompanyDetailSuccess(data)))
      .catch((error) => dispatch(getCompanyDetailError(error)));
  };
}

export function updateCompanyDetail(companyId, data) {
  return function (dispatch) {
    dispatch(updateCompanyDetailRequest());

    return axios.put(`http://localhost:3001/companies/${companyId}`, data)
      .then(({data}) => {
        dispatch(updateCompanyDetailSuccess(data))
        dispatch(getCompanyDetail(companyId))
      })
      .catch((error) => dispatch(updateCompanyDetailError(error)));
  };
}

export function createCompany(data) {
  return function (dispatch) {
    dispatch(createCompanyRequest());

    return axios.post(`http://localhost:3001/companies/`, data)
      .then(({data}) => {
        dispatch(createCompanySuccess(data))
      })
      .catch((error) => dispatch(createCompanyError(error)));
  };
}