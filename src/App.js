import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import history from './history';

import store from './store/store';
import SocketService from './services/SocketService';
import { ToastContainer, Zoom } from 'react-toastify';

import Home from './pages/Home';
import Navbar from './components/Layout/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CourseApp from './pages/CourseApp';
import CourseAdd from './components/Course/CourseAdd';
import CourseEdit from './components/Course/CourseEdit';
import CourseDetail from './pages/CourseDetail';
import UserDashboard from './pages/UserDashboard';
import UserProfile from './pages/UserProfile';
import { Footer } from './components/Layout/Footer';

import './style/style.css';
import 'react-toastify/dist/ReactToastify.css';

class App extends React.Component {
  componentDidMount() {
    SocketService.setup();
    console.log('Sockets');
  }

  componentWillUnmount() {
    // SocketService.terminate();
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navbar />
          <ToastContainer
            draggable={false}
            transition={Zoom}
            autoClose={5000}
          />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/course' component={CourseApp} />
            <Route exact path='/user/:id' component={UserDashboard} />
            <Route
              exact
              path='/profile/:id'
              history={history}
              component={UserProfile}
            />
            <Route exact path='/edit/:id' component={CourseEdit} />
            <Route exact path='/add' component={CourseAdd} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/:id' component={CourseDetail} />
          </Switch>
          <Footer />
        </Router>
      </Provider>
    );
  }
}

export default App;
