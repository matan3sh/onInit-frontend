import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import courseReducer from './reducers/courseReducer';
import authReducer from './reducers/authReducer'

const rootReducer = combineReducers({
  courseApp: courseReducer,
  auth: authReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
