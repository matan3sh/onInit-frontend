import React from 'react';
import { connect } from 'react-redux';
import { loadCourses } from '../store/actions/courseActions';
import { loadEnrolls } from '../store/actions/enrollActions';
import Navbar from '../components/Layout/Navbar';
import { Navigation } from '../components/Dashboard/Navigation';
import { CardSection } from '../components/Dashboard/CardSection';
import { OperationTable } from '../components/Dashboard/OperationTable';

import 'office-ui-fabric-react/dist/css/fabric.css';

class Dashboard extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.loadCourses();
      this.props.loadEnrolls();
    }, 0);
  }

  render() {
    const { loggedInUser, courses, enrolls } = this.props;
    return (
      <>
        <Navbar />
        {loggedInUser === null ? (
          'You are not authorized'
        ) : (
          <div className='ms-Grid' dir='ltr'>
            <div className='ms-Grid-row'>
              <div className='ms-Grid-col ms-sm1 ms-xl1'>
                <Navigation />
              </div>
              <div className='main-element ms-Grid-col ms-sm11 ms-xl11'>
                <div className='ms-Grid-row'>
                  <CardSection
                    loggedInUser={loggedInUser}
                    courses={courses}
                    enrolls={enrolls}
                  />
                </div>
                <div className='ms-Grid-row'>
                  <OperationTable
                    loggedInUser={loggedInUser}
                    courses={courses}
                    enrolls={enrolls}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  courses: state.courseApp.courses,
  loggedInUser: state.auth.loggedInUser,
  enrolls: state.enrolls.enrolls,
});

const mapDispatchToProps = {
  loadCourses,
  loadEnrolls,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
