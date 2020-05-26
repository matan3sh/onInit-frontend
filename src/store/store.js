import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import courseReducer from './reducers/courseReducer';
import authReducer from './reducers/authReducer';
import enrollReducer from './reducers/enrollReducer';

const rootReducer = combineReducers({
  courseApp: courseReducer,
  auth: authReducer,
  enrolls: enrollReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
