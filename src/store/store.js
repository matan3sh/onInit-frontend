import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import courseReducer from './reducers/courseReducer';
import authReducer from './reducers/authReducer';
import enrollReducer from './reducers/enrollReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  courseApp: courseReducer,
  auth: authReducer,
  enrolls: enrollReducer,
  users: userReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
