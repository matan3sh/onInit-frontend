import React from 'react';
// import RatingFilter from '../Course/Filter/RatingFilter';

class HomeHero extends React.Component {
  state = {
    images: [
      'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/1252399/pexels-photo-1252399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/547116/pexels-photo-547116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/258036/pexels-photo-258036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    ],
  };
  render() {
    var bg = this.state.images[
      Math.floor(Math.random() * this.state.images.length)
    ];
    return (
      <>
        <section
          className='landing-home'
          style={{
            background: `url(${bg}) no-repeat center center/cover`,
          }}
        >
          <div className='dark-overlay-home'>
            <div className='landing-home-inner'>
              <h1 className='x-large'>It's Time To Make A Change</h1>
              <p className='lead'>Let's Start The Journey With Us</p>
            </div>
          </div>
        </section>
        <div className='board'>
          <div className='flex-center'>
            <p>
              <img
                src='https://www.coding-academy.org/images/ca-logo@2x.png'
                alt=''
              />
            </p>
            <p>
              <img
                src='https://lirp-cdn.multiscreensite.com/20883819/dms3rep/multi/opt/short-courses-online-final-logo-785x373-640w.png'
                alt=''
              />
            </p>
            <p>
              <img
                src='https://www.webtrainingcourses.net/wp-content/uploads/2019/03/Web-Training-Courses.png'
                alt=''
              />
            </p>
            <p>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHW5bxyAtpfziNBnKrM07mbPSMFWVlK8-s04KfP6BvC727PmKo&usqp=CAU'
                alt=''
              />
            </p>
            <p>
              <img
                src='https://www.cncrobotics.co.uk/wp-content/uploads/2019/05/LARGE-ALL-ABOUT-STEM-LOGO-1.jpg'
                alt=''
              />
            </p>
            <p>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAl52pCDZZFSluzBc-ne8dSe743T9rspOHAIyCHpzmubqyrpKP&usqp=CAU'
                alt=''
              />
            </p>
            <p>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKnIIInOMdrzqsQ7IB86S6hkhCDooPfjs5-jQ_mKDZbOWmZBQM&usqp=CAU'
                alt=''
              />
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default HomeHero;