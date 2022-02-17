import {combineReducers} from 'redux'
import company from "./company";
import people from "./people"

export default combineReducers({
  company,
  people,
});