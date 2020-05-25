import React from 'react';

export class CourseGallery extends React.Component {
  state = {
    images: [
      'https://source.unsplash.com/user/emilep',
      'https://source.unsplash.com/user/markusspiske',
      'https://source.unsplash.com/user/ffstop',
      'https://source.unsplash.com/user/emilep',
    ],
    mainImage: 'https://source.unsplash.com/user/clemhlrdt',
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
