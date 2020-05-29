import React from 'react';
import { Spring } from 'react-spring/renderprops';

// import RatingFilter from '../Course/Filter/RatingFilter';

class Hero extends React.Component {
  state = {
    images: [
      // 'https://images.pexels.com/photos/1230302/pexels-photo-1230302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      // 'https://images.pexels.com/photos/1252399/pexels-photo-1252399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/547116/pexels-photo-547116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      // 'https://images.pexels.com/photos/258036/pexels-photo-258036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      // 'https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    ],
  };
  render() {
    var bg = this.state.images[
      Math.floor(Math.random() * this.state.images.length)
    ];
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(props) => (
          <div style={props}>
            <section
              className='landing'
              style={{
                background: `url(${bg}) no-repeat center center/cover`,
              }}
            >
              <div className='dark-overlay'>
                <div className='landing-inner'>
                  <h1 className='x-large'>Time To Make a Successful Start</h1>
                  <p className='lead'>Let's Start The Journey With Us</p>
                  {/* <RatingFilter /> */}
                  <div className='search'>
                    <form>
                      <div className='form-group'>
                        <input
                          type='text'
                          name='location'
                          placeholder='Enter City'
                          // value={this.state.location}
                          // onChange={this.onChange}
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

export default Hero;
