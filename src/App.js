import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer, Zoom } from 'react-toastify';
import store from './store/store';

import Hero from './components/Layout/Hero';
import { Navbar } from './components/Layout/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CourseApp from './pages/CourseApp';
import CourseAdd from './components/Course/CourseAdd';
import CourseEdit from './components/Course/CourseEdit';
import CourseDetail from './pages/CourseDetail';
import UserProfile from './pages/UserProfile';

import './style/style.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Hero />
        <div className='container'>
          <ToastContainer
            draggable={false}
            transition={Zoom}
            autoClose={5000}
          />
          <Switch>
            <Route exact path='/' component={CourseApp} />
            <Route exact path='/user/:id' component={UserProfile} />
            <Route exact path='/edit/:id' component={CourseEdit} />
            <Route exact path='/:user/add' component={CourseAdd} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/:id' component={CourseDetail} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
