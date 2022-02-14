import {Map, List} from 'immutable';
import {
  COMPANY_LIST_REQUEST,
  COMPANY_LIST_SUCCESS,
  COMPANY_DETAIL_REQUEST,
  COMPANY_DETAIL_SUCCESS,
  COMPANY_DETAIL_UPDATE_REQUEST,
  COMPANY_DETAIL_UPDATE_SUCCESS,
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

export default function (state = Map({
  companyList: List(),
  company: null,
  isFetching: false,
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
    default:
      return state;
  }
};