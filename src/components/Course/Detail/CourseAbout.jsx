import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { Enroll } from '../Enroll/Enroll';
import { saveEnroll } from '../../../store/actions/enrollActions';
import { Maps } from '../../Map/Maps';
import Moment from 'react-moment';

class CourseAbout extends React.Component {
  state = { enroll: false };

  onEnroll = () => {
    this.setState({ enroll: true });
  };

  onClose = () => {
    this.setState({ enroll: false });
  };

  onSumbitEnroll = (enroll) => {
    this.setState({ enroll: false });
    console.log(enroll);
    this.props.saveEnroll(enroll);
  };

  numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  render() {
    const { course, loggedInUser } = this.props;
    const { enroll } = this.state;
    return (
      <div className='course-details-right'>
        {enroll && (
          <Enroll
            enroll={enroll}
            course={course}
            onClose={this.onClose}
            loggedInUser={loggedInUser}
            onSumbitEnroll={this.onSumbitEnroll}
          />
        )}
        <div className='flex'>
          <h3 className='course-details-right-title'>
            Next Course{' '}
            <span className='text-primary'>
              <Moment className='text-bold text-primary' format='LL'>
                {course.nextCourse}
              </Moment>
            </span>
          </h3>
          {loggedInUser === null ? (
            <div className='grid-1'>
              <Link to={'/login'}>
                <button className='btn btn-dark'>Login First</button>
              </Link>
            </div>
          ) : (
            <button className='btn btn-dark' onClick={this.onEnroll}>
              Enroll Now
            </button>
          )}
        </div>
        <div className='course-details-description'>
          <h5 className='text-mid'>Description</h5>
          {course.description}
        </div>
        <div className='flex my-1'>
          <p>
            <span className='text-bold text-primary'>Price:</span>{' '}
            {this.numberWithCommas(course.price)} $
          </p>
          <p>
            <span className='text-bold text-primary'>Duration:</span>{' '}
            {course.duration} Hours
          </p>
        </div>
        <div>
          <img
            src={course.addByUser.avatar}
            alt=''
            className='bootcamp-user-avatar'
          />
          <span>
            <span className='text-grey'>Added By </span>
            <span className='text-dark text-bold'>
              {course.addByUser.username}
            </span>
            {/* <a href='/#' className='btn mx-1'>
              <i className='fas fa-envelope text-light'></i>
            </a>
            <a href={course.website} target='blank_target' className='btn mx-1'>
              <i className='fas fa-globe-americas'></i>
            </a> */}
          </span>
        </div>
        <div className='flex'>
          <div className='course-details-info contact-info-position'>
            <h5 className='text-mid text-primary text-bold'>
              Contact Information
            </h5>

            <p>
              <i className='fas fa-map-marker-alt'></i>{' '}
              {course.location.address}
            </p>
            <p>
              {' '}
              <i className='fas fa-envelope'></i> {course.email}
            </p>
            <p>
              {' '}
              <i className='fas fa-phone-square'></i> {course.phone}
            </p>
            <p>
              {' '}
              <i className='fas fa-hourglass-start'></i> Added at{' '}
              <Moment className='text-bold text-grey' format='LL'>
                {course.createdAt}
              </Moment>
            </p>
          </div>
          <Maps location={course.location} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.auth.loggedInUser,
  };
};

const mapDispatchToProps = {
  saveEnroll,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseAbout);
