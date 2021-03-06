import React from 'react';
import { Spring } from 'react-spring/renderprops';

const HeroDetail = ({ course }) => {
  const url = `url(${course.imgCover}) no-repeat center center/cover`;
  return (
    <>
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(props) => (
          <div style={props}>
            <section
              className='landing-detail'
              style={{
                background: `${url}`,
                backgroundAttachment: 'fixed',
                backgroundPosition: '0px -400px',
              }}
            >
              <div className='dark-overlay-detail'></div>
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
    </>
  );
};

export default HeroDetail;
