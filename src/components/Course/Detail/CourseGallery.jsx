import React from 'react';

export class CourseGallery extends React.Component {
  state = {
    images: [
      this.props.course.images[0],
      this.props.course.images[1],
      this.props.course.images[2],
      this.props.course.images[3],
    ],
    mainImage: this.props.course.imgCover,
    fadeClass: '',
  };

  onSetImage = (index) => {
    const images = this.state.images;
    const mainImage = this.state.images[index];
    images[index] = this.state.mainImage;
    this.setState({ images, mainImage, fadeClass: 'fade-in' });
    setTimeout(() => this.setState({ fadeClass: '' }), 500);
  };

  render() {
    return (
      <div className='gallery-body'>
        <div className='gallery-wrapper'>
          <div className={`main-img ${this.state.fadeClass}`}>
            <img src={this.state.mainImage} alt='' id='current' />
          </div>
          <div className='imgs'>
            {this.state.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=''
                onClick={() => this.onSetImage(index)}
                className='pointer'
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
