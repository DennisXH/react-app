import {Map, List} from 'immutable';
import {COMPANY_LIST_REQUEST, COMPANY_LIST_SUCCESS} from "../actions/companyList";

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

export default function (state = Map({
  companyList: List(),
  isFetching: false,
}), action) {
  switch (action.type) {
    case COMPANY_LIST_REQUEST:
      return setCompanyListRequest(state);
    case COMPANY_LIST_SUCCESS:
      return setCompanyListSuccess(state, action);
    default:
      return state;
  }
};