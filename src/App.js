import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer, Zoom } from 'react-toastify';
import store from './store/store';

import { Navbar } from './components/Layout/Navbar';
import Home from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import CourseApp from './pages/CourseApp';
import CourseAdd from './components/Course/CourseAdd';
import CourseEdit from './components/Course/CourseEdit';
import CourseDetail from './pages/CourseDetail';
import ReviewList from './components/Course/Review/ReviewList';
import ReviewAdd from './components/Course/Review/ReviewAdd';
import UserProfile from './pages/UserProfile';

import './style/style.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <ToastContainer draggable={false} transition={Zoom} autoClose={5000} />
        <Switch>
          <React.Fragment>
            <Route exact path='/' component={Home} />
            <div className='container'>
              <Route exact path='/course' component={CourseApp} />
              <Route exact path='/user/:id' component={UserProfile} />
              <Route exact path='/course/:id' component={CourseDetail} />
              <Route exact path='/course/edit/:id' component={CourseEdit} />
              <Route exact path='/course/:user/add' component={CourseAdd} />
              <Route exact path='/course/:id/review' component={ReviewList} />
              <Route
                exact
                path='/course/:id/review/add'
                component={ReviewAdd}
              />
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/login' component={Login} />
            </div>
          </React.Fragment>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
