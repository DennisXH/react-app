import {Map, List} from 'immutable';
import {
  COMPANY_LIST_REQUEST,
  COMPANY_LIST_SUCCESS,
  COMPANY_DETAIL_REQUEST,
  COMPANY_DETAIL_SUCCESS,
  COMPANY_DETAIL_UPDATE_REQUEST,
  COMPANY_DETAIL_UPDATE_SUCCESS,
  CREATE_COMPANY_REQUEST,
  CREATE_COMPANY_SUCCESS,
  CREATE_COMPANY_ERROR,
} from "../actions/company";

export function setCompanyListRequest(state) {
  return state.merge({
    isFetching: true,
  })
}

export function setCompanyListSuccess(state, action) {
  const {payload} = action;

  return state.merge({
    companyList: List(payload),
    isFetching: false,
  });
}

export function setCompanyDetailRequest(state) {
  return state.merge({
    isFetching: true,
  })
}

export function updateCompanyDetailSuccess(state) {
  return state.merge({
    isFetching: false,
  })
}

export function setCompanyDetailSuccess(state, action) {
  const {payload} = action;

  return state.merge({
    company: payload,
    isFetching: false,
  });
}

export function setCompanyCreateRequest(state) {
  return state.merge({
    isFetching: true,
  })
}

export function setCompanyCreateSuccess(state, action) {
  const {payload} = action;

  return state.merge({
    company: payload,
    isFetching: false,
  });
}

export function setCompanyCreateError(state, action) {
  const {payload} = action;

  return state.merge({
    error: payload,
    isFetching: false,
  });
}

export default function (state = Map({
  companyList: List(),
  company: null,
  isFetching: false,
  error: null,
}), action) {
  switch (action.type) {
    case COMPANY_LIST_REQUEST:
      return setCompanyListRequest(state);
    case COMPANY_LIST_SUCCESS:
      return setCompanyListSuccess(state, action);
    case COMPANY_DETAIL_REQUEST:
    case COMPANY_DETAIL_UPDATE_REQUEST:
      return setCompanyDetailRequest(state);
    case COMPANY_DETAIL_SUCCESS:
      return setCompanyDetailSuccess(state, action);
    case COMPANY_DETAIL_UPDATE_SUCCESS:
      return updateCompanyDetailSuccess(state);
    case CREATE_COMPANY_REQUEST:
      return setCompanyCreateRequest(state);
    case CREATE_COMPANY_SUCCESS:
      return setCompanyCreateSuccess(state, action);
    case CREATE_COMPANY_ERROR:
      return setCompanyCreateError(state, action);
    default:
      return state;
  }
};