import React from 'react';
import RatingFilter from '../Course/Filter/RatingFilter';

class Hero extends React.Component {
  render() {
    return (
      <>
        <section className='landing'>
          <div className='dark-overlay'>
            <div className='landing-inner'>
              <h1 className='x-large'>You can make a change</h1>
              <p className='lead'>It's time to take your career right</p>
              {/* <RatingFilter /> */}
              <div className='search'>
                <form className='flex-center'>
                  <div className='form-group'>
                    <input
                      type='text'
                      name='location'
                      placeholder='Enter City'
                      // value={this.state.location}
                      // onChange={this.onChange}
                    />
                  </div>
                  <div className='form-group'>
                    <button
                      type='submit'
                      href='register.html'
                      className='btn btn-primary btn-block mx-1'
                    >
                      Search
                    </button>
                  </div>
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
      </>
    );
  }
}

export default Hero;
