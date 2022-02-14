import thunk from "redux-thunk"
import { createStore, applyMiddleware } from '@reduxjs/toolkit';
/** Import combined reducers */
import reducer from '../reducers';

export const store = createStore(reducer, applyMiddleware(thunk));
