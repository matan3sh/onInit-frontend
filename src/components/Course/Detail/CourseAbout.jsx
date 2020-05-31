import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Enroll } from '../Enroll/Enroll';
import { saveEnroll } from '../../../store/actions/enrollActions';
import { Maps } from '../../Map/Maps';
import Moment from 'react-moment';
import * as geolib from 'geolib';

class CourseAbout extends React.Component {
  state = { enroll: false, distance: null };

  componentDidMount() {
    this.getUserDistance();
  }

  getUserDistance = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const distance = geolib.convertDistance(
          geolib.getDistance(
            {
              latitude: position.coords.latitude - 0.55,
              longitude: position.coords.longitude - 0.36,
            },
            {
              latitude: this.props.course.location.lat,
              longitude: this.props.course.location.lng,
            }
          ),
          'm'
        );
        this.setState({ distance });
        console.log(
          `You are ${this.state.distance} meters away from ${this.props.course.name}`
        );
      },
      () => {
        alert('Position could not be determined.');
      }
    );
  };

  onEnroll = () => {
    this.setState({ enroll: true });
  };

  onClose = () => {
    this.setState({ enroll: false });
  };

  onSumbitEnroll = (enroll) => {
    this.setState({ enroll: false });
    this.props.saveEnroll(enroll);
  };

  numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  render() {
    const { course, loggedInUser } = this.props;
    const { enroll } = this.state;

    return (
      <div className='course-details-right right-side-details'>
        {enroll && (
          <Enroll
            enroll={enroll}
            course={course}
            onClose={this.onClose}
            loggedInUser={loggedInUser}
            onSumbitEnroll={this.onSumbitEnroll}
          />
        )}
        <div className='flex flex-evenly'>
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
        <div className='text-grey'>
          {this.state.distance !== null ? (
            <span>
              <i className='fas fa-street-view'></i>{' '}
              {this.numberWithCommas(this.state.distance)} km from you
            </span>
          ) : (
            ''
          )}
        </div>
        <div className='course-details-description'>
          <h5 className='text-mid'>Description</h5>
          {course.description}
        </div>
        <div className='flex my-1 flex-evenly'>
          <p>
            <span className='text-bold text-primary'>Price:</span>{' '}
            ${this.numberWithCommas(course.price)}
          </p>
          <p>
            <span className='text-bold text-primary'>Duration:</span>{' '}
            {course.duration} Hours
          </p>
        </div>
        <div className='flex added-by'>
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
              <button className='btn mx-1'>
                <i className='fas fa-envelope text-light'></i>
              </button>
              <button
                href={course.website}
                target='blank_target'
                className='btn mx-1'
              >
                <i className='fas fa-globe-americas'></i>
              </button>
            </span>
          </div>
        </div>
        <div className='flex flex-evenly'>
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
