import React from 'react';
import { connect } from 'react-redux';
import { loadCourses } from '../store/actions/courseActions';
import { CoursePreviewHome } from '../components/Course/CoursePreviewHome';

class Home extends React.Component {
  componentDidMount() {
    this.props.loadCourses();
  }

  render() {
    const { courses } = this.props;
    return (
      <>
        <section className='landing'>
          <div className='dark-overlay'>
            <div className='landing-inner'>
              <h1 className='x-large'>You can make a change</h1>
              <p className='lead'>It's time to take your career right</p>
              <div className='search'>
                <div className='form-group'>
                  <input type='text' placeholder='Enter City' />
                </div>
                <div className='form-group'>
                  <button
                    href='register.html'
                    className='btn btn-primary btn-block'
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1440 320'
            className='wave'
          >
            <path
              fill='#fff'
              fillOpacity='1'
              d='M0,224L80,234.7C160,245,320,267,480,256C640,245,800,203,960,197.3C1120,192,1280,224,1360,240L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
            ></path>
          </svg>
        </section>
        <h2 className=' text-primary flex-center title-header'>
          Our Pupolar Courses
        </h2>
        {courses && (
          <div className='flex-center'>
            <div className='grid-3 my-2'>
              {courses.slice(0, 3).map((course) => (
                <CoursePreviewHome key={course._id} course={course} />
              ))}
            </div>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    courses: state.courseApp.courses,
  };
};

const mapDispatchToProps = {
  loadCourses,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
