import React from 'react';
// import RatingFilter from '../Course/Filter/RatingFilter';
import NameFilter from '../Course/Filter/NameFilter';
import { setFilterBy } from '../../store/actions/courseActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class HomeHero extends React.Component {
  state = {
    image:
      'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  };

  onFilterByName = async (courseName) => {
    await this.props.setFilterBy({ ...this.props.filterBy, name: courseName });
    this.props.history.push('/course');
  };

  render() {
    return (
      <>
        <section
          className='landing-home'
          style={{
            background: `url(${this.state.image}) no-repeat center center/cover`,
          }}
        >
          <div className='dark-overlay-home'>
            <div className='landing-home-inner'>
              <h1 className='x-large'>It's Time To Make A Change</h1>
              <p className='lead'>Let's Start The Journey With Us</p>
              <NameFilter onFilterByName={this.onFilterByName} />
              <div className='flex popular'>
                <div>Popular:</div>
                <span>Full Stack Web Developer</span>
                <span>Chefs</span>
                <span>Managment</span>
                <span>E Commerce</span>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  filterBy: state.courseApp.filterBy,
});

const mapDispatchToProps = {
  setFilterBy,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeHero)
);
