import React from 'react';
import { Spring } from 'react-spring/renderprops';
import { connect } from 'react-redux';
import { setFilterBy, loadCourses } from '../../store/actions/courseActions';

class Hero extends React.Component {
  state = {
    location: '',
    image:
      'https://images.unsplash.com/photo-1523287562758-66c7fc58967f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  };

  handleChange = (ev) => {
    let { name, value } = ev.target;
    this.setState({ [name]: value });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    await this.props.setFilterBy({
      ...this.props.filterBy,
      location: this.state.location,
    });
    this.props.loadCourses(this.props.filterBy);
  };

  render() {
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(props) => (
          <div style={props}>
            <section
              className='landing'
              style={{
                background: `url(${this.state.image}) no-repeat center center/cover`,
              }}
            >
              <div className='dark-overlay'>
                <div className='landing-inner'>
                  <h1 className='x-large'>Time To Make a Successful Start</h1>
                  <p className='lead'>Let's Start The Journey With Us</p>
                  <div className='search'>
                    <form onSubmit={this.onSubmit}>
                      <div className='form-group'>
                        <input
                          type='text'
                          name='location'
                          placeholder='Enter City'
                          value={this.state.location}
                          onChange={this.handleChange}
                        />
                      </div>
                      <span className='pointer'>
                        <i
                          className='fas fa-search fa-2x'
                          style={{ color: '#ccc' }}
                        ></i>
                      </span>
                    </form>
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
          </div>
        )}
      </Spring>
    );
  }
}

const mapStateToProps = (state) => ({
  filterBy: state.courseApp.filterBy,
});

const mapDispatchToProps = {
  setFilterBy,
  loadCourses,
};

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
