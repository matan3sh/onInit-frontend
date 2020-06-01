import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Enroll } from '../Enroll/Enroll';
import { saveEnroll } from '../../../store/actions/enrollActions';
import { saveUser } from '../../../store/actions/userActions';
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
    const user = {
      ...this.props.loggedInUser,
      fullName: enroll.user.fullName,
      linkedin: enroll.user.linkedin,
      facebook: enroll.user.facebook,
    };
    this.props.saveEnroll(enroll);
    this.props.saveUser(user);
  };

  numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  kmWithPoint = (x) => {
    return x
      .toString()
      .slice(0, 4)
      .replace(/\B(?=(\d{2})+(?!\d))/g, '.');
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
              {this.kmWithPoint(this.state.distance)} km from you
            </span>
          ) : (
            ''
          )}
        </div>
        <div className='course-details-description'>
          <h5 className='text-mid'>Description</h5>
          {course.description}
        </div>
        <div className='in-details my-1 flex-evenly'>
          <p>
            <span className='text-bold text-primary'>Price:</span> $
            {this.numberWithCommas(course.price)}
          </p>
          <p className='duration'>
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
              <Link to={`profile/${course.addByUser._id}`}>
                <button className='btn mx-1'>
                  <i className='fas fa-envelope text-light'></i>
                </button>
              </Link>
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
  saveUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseAbout);
